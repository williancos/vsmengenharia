#!/usr/bin/env node
/**
 * split-blog-data.mjs
 *
 * `src/data/blogData.ts` tem 1,1 MB: os 94 posts com o markdown inteiro dentro
 * do array `allPosts`. Como `PillarArticles` e `LandingPage` importam `allPosts`,
 * esse megabyte era arrastado para o bundle de praticamente toda página do
 * site — home e páginas de serviço inclusive, que não mostram nenhum artigo.
 *
 * Este script separa metadado de corpo, gerando em `src/data/generated/`:
 *
 *   blogMeta.ts       — o índice: os campos que Blog, PillarArticles,
 *                       LandingPage e a tabela de rotas realmente leem
 *   blogDetail.ts     — só o tipo `BlogPostDetail` (nada em runtime)
 *   detail/<slug>.ts  — um módulo por post com o que só a página dele abre
 *                       (corpo, FAQ, sumário, takeaways)
 *
 * Um arquivo por post, e não um mapa único, porque o mapa viraria um chunk de
 * 1 MB que toda página de post baixava inteiro para usar 1/94 dele.
 *
 * `blogData.ts` continua sendo a fonte de verdade editada à mão — os dois
 * arquivos acima são derivados e regerados a cada build. O corte usa o parser
 * do TypeScript, não regex: o corpo dos posts é markdown dentro de template
 * literals e pode conter qualquer coisa.
 *
 * Uso: node scripts/split-blog-data.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import ts from "typescript";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const SRC = resolve(root, "src/data/blogData.ts");
const OUT_DIR = resolve(root, "src/data/generated");
const DETAIL_DIR = resolve(OUT_DIR, "detail");

/**
 * Campos que só a página de um post consome. Conferido em Blog.tsx,
 * PillarArticles.tsx e LandingPage.tsx: nenhum deles toca nestes.
 */
const DETAIL_FIELDS = ["content", "faq", "toc", "keyTakeaways", "keywords", "author", "metaDescription"];

const source = readFileSync(SRC, "utf-8");
const sf = ts.createSourceFile(SRC, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

/** Acha `export const allPosts: BlogPost[] = [...]`. */
function findAllPostsArray(node) {
  let found = null;
  const visit = (n) => {
    if (found) return;
    if (
      ts.isVariableDeclaration(n) &&
      ts.isIdentifier(n.name) &&
      n.name.text === "allPosts" &&
      n.initializer &&
      ts.isArrayLiteralExpression(n.initializer)
    ) {
      found = n.initializer;
      return;
    }
    ts.forEachChild(n, visit);
  };
  visit(node);
  return found;
}

const arr = findAllPostsArray(sf);
if (!arr) {
  console.error("[split-blog-data] Não achei `export const allPosts: BlogPost[] = [...]` em blogData.ts");
  process.exit(1);
}

/** Texto de um literal string/template sem interpolação. */
function literalText(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  return null;
}

const cuts = []; // trechos de blogData.ts a remover em blogMeta.ts
const entries = []; // { slug, props: [{ key, source }] }
let semCorpo = 0;

for (const el of arr.elements) {
  if (!ts.isObjectLiteralExpression(el)) continue;

  let slug = null;
  const detail = [];

  for (const prop of el.properties) {
    if (!ts.isPropertyAssignment(prop) || !prop.name) continue;
    const key = ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name) ? prop.name.text : null;
    if (key === "slug") slug = literalText(prop.initializer);
    if (key && DETAIL_FIELDS.includes(key)) detail.push({ key, node: prop });
  }

  if (!slug) {
    console.error("[split-blog-data] Post sem slug literal — abortando para não gerar dado torto.");
    process.exit(1);
  }
  if (!detail.some((d) => d.key === "content")) semCorpo++;
  if (!detail.length) continue;

  // Começa em getFullStart() (engole a quebra de linha e a indentação antes da
  // propriedade) e termina depois da vírgula — senão sobra linha em branco ou
  // vírgula solta em blogMeta.ts.
  for (const { node } of detail) {
    let end = node.getEnd();
    while (end < source.length && /[ \t]/.test(source[end])) end++;
    if (source[end] === ",") end++;
    cuts.push({ start: node.getFullStart(), end });
  }

  entries.push({
    slug,
    props: detail.map(({ key, node }) => ({ key, source: node.initializer.getText(sf) })),
  });
}

// ── blogMeta.ts ────────────────────────────────────────────────────
let meta;

// A interface `BlogPost` é fatiada junto: o índice declara só o que carrega, e
// os campos de detalhe passam a viver em `BlogPostDetail`. Pelo AST, porque
// membros como `author` ocupam várias linhas.
function findInterface(name) {
  let found = null;
  const visit = (n) => {
    if (found) return;
    if (ts.isInterfaceDeclaration(n) && n.name.text === name) {
      found = n;
      return;
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  return found;
}

const iface = findInterface("BlogPost");
if (!iface) {
  console.error("[split-blog-data] Não achei a interface BlogPost em blogData.ts");
  process.exit(1);
}

const detailMembers = [];
const ifaceCuts = [];
for (const member of iface.members) {
  const field = member.name && ts.isIdentifier(member.name) ? member.name.text : null;
  if (!field || !DETAIL_FIELDS.includes(field)) continue;
  detailMembers.push("  " + member.getText(sf).replace(/\n\s{2}/g, "\n  "));
  let end = member.getEnd();
  while (end < source.length && /[;\t ]/.test(source[end])) end++;
  ifaceCuts.push({ start: member.getFullStart(), end });
}

// Os cortes são feitos sobre `source`, então recalculo `meta` do zero com a
// lista completa (propriedades dos posts + membros da interface).
const allCuts = [...cuts, ...ifaceCuts].sort((a, b) => b.start - a.start);
meta = source;
for (const { start, end } of allCuts) meta = meta.slice(0, start) + meta.slice(end);

const HEADER = `/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
`;

mkdirSync(OUT_DIR, { recursive: true });

// Os imports de assets em blogData.ts usam o alias @/, que continua válido.
writeFileSync(resolve(OUT_DIR, "blogMeta.ts"), HEADER + meta);

// ── blogSlugs.ts ───────────────────────────────────────────────────
// App.tsx é o entry e carrega em toda página; monta as rotas só com isto para
// não arrastar os 59 KB do índice para a home e as páginas de serviço.
writeFileSync(
  resolve(OUT_DIR, "blogSlugs.ts"),
  HEADER +
    `\n/** Slugs dos posts, na ordem de blogData.ts. Usado na tabela de rotas. */\n` +
    `export const blogSlugs: string[] = [\n` +
    arr.elements
      .filter(ts.isObjectLiteralExpression)
      .map((el) => {
        const p = el.properties.find(
          (x) => ts.isPropertyAssignment(x) && x.name && ts.isIdentifier(x.name) && x.name.text === "slug",
        );
        return `  ${JSON.stringify(literalText(p.initializer))},`;
      })
      .join("\n") +
    `\n];\n`,
);

// ── blogDetail.ts (só o tipo) ──────────────────────────────────────
writeFileSync(
  resolve(OUT_DIR, "blogDetail.ts"),
  HEADER +
    `\n/** Campos que só a página de um post abre. */\n` +
    `export interface BlogPostDetail {\n${detailMembers.join("\n")}\n}\n`,
);

// ── detail/<slug>.ts — um chunk por post ───────────────────────────
// Apaga o que sobrou de gerações anteriores: post renomeado ou removido de
// blogData.ts deixaria um arquivo órfão, que o glob do App.tsx continuaria
// enxergando e o Rollup continuaria empacotando.
rmSync(DETAIL_DIR, { recursive: true, force: true });
mkdirSync(DETAIL_DIR, { recursive: true });

let detailBytes = 0;
for (const { slug, props } of entries) {
  const body = props.map(({ key, source: s }) => `  ${key}: ${s},`).join("\n");
  const out =
    HEADER +
    `import type { BlogPostDetail } from "../blogDetail";\n\n` +
    `export const detail: BlogPostDetail = {\n${body}\n};\n`;
  detailBytes += Buffer.byteLength(out, "utf8");
  writeFileSync(resolve(DETAIL_DIR, `${slug}.ts`), out);
}

const kb = (n) => (n / 1024).toFixed(0);
const bytes = (s) => Buffer.byteLength(s, "utf8");
console.log(
  `[split-blog-data] ${entries.length} posts` +
    (semCorpo ? ` (${semCorpo} sem \`content\`)` : "") +
    ` | blogMeta ${kb(bytes(meta))} KB · detail/ ${kb(detailBytes)} KB em ${entries.length} módulos` +
    ` (média ${kb(detailBytes / entries.length)} KB) — de um blogData.ts de ${kb(bytes(source))} KB`,
);
