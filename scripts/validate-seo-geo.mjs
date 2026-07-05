#!/usr/bin/env node
/**
 * validate-seo-geo.mjs
 *
 * Valida que os arquivos HTML prerenderizados contêm os elementos
 * essenciais para SEO e GEO. Funciona em duas modalidades:
 *
 *   1) Local (após `npm run build`):
 *      node scripts/validate-seo-geo.mjs
 *      → checa dist/.../index.html
 *
 *   2) Remoto (após deploy):
 *      node scripts/validate-seo-geo.mjs --remote
 *      → simula crawlers (Googlebot, GPTBot, ClaudeBot, PerplexityBot)
 *        e verifica o HTML servido pela Vercel
 *
 * Exit code: 0 se tudo OK, 1 se alguma falha encontrada.
 */

import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "..", "dist");
const baseUrl = "https://www.vsmengenharia.com";

const args = process.argv.slice(2);
const isRemote = args.includes("--remote");
const verbose = args.includes("--verbose") || args.includes("-v");

// ── Rotas críticas a validar (Pilares da estratégia) ───────────────
const criticalRoutes = [
  // Homepage
  "/",

  // Páginas de serviço (hubs comerciais)
  "/servicos/nr13",
  "/servicos/nr12",
  "/servicos/nr11",
  "/servicos/pmoc",
  "/servicos/reclassificacao-de-monta",

  // Posts P0 Golden de cada pilar
  "/blog/o-que-e-monta-veicular-pequena-media-grande",       // A1
  "/blog/grande-monta-tem-recuperacao",                      // A3 (KD8)
  "/blog/adequacao-nr12-passo-a-passo",                      // B3 (KD5)
  "/blog/laudo-nr12-quando-e-obrigatorio-quanto-custa",      // B2
  "/blog/apreciacao-de-risco-nr12-modelo-pratico",           // B4
  "/blog/vasos-de-pressao-nr13-classificacao-categoria",     // C2 (KD1)
  "/blog/inspecao-nr13-tipos-periodicidade-procedimento",    // C3 (KD2)
  "/blog/nr11-empilhadeira-validade-treinamento",            // D3
  "/blog/pmoc-o-que-e-significado-completo",                 // E1
  "/blog/pmoc-ar-condicionado-obrigatorio-quem-deve-ter",    // E2
];

// ── User-Agents que vamos simular ──────────────────────────────────
const crawlers = {
  Googlebot:       "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  GPTBot:          "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.2; +https://openai.com/gptbot",
  ClaudeBot:       "Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)",
  PerplexityBot:   "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot",
  Bingbot:         "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
};

// ── Checagens obrigatórias ─────────────────────────────────────────
const checks = [
  { name: "title",       re: /<title>([^<]+)<\/title>/,                weight: 10 },
  { name: "description", re: /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i, weight: 10 },
  { name: "canonical",   re: /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i, weight: 8 },
  { name: "og:title",    re: /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i, weight: 5 },
  { name: "og:description", re: /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i, weight: 5 },
  { name: "og:image",    re: /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i, weight: 3 },
  { name: "jsonLd",      re: /<script\s+type=["']application\/ld\+json["']>([^<]+)<\/script>/i, weight: 10 },
  { name: "h1 in body",  re: /<h1[^>]*>[\s\S]+?<\/h1>/i, weight: 15 },
  { name: "paragraph",   re: /<p[^>]*>[\s\S]{50,}?<\/p>/i, weight: 15 },
];

// ── Fetch helper (usa fetch nativo do Node 18+) ────────────────────
async function fetchAs(url, ua) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": ua, "Accept": "text/html,application/xhtml+xml" },
      redirect: "follow",
    });
    if (!res.ok) return { status: res.status, html: null, error: `HTTP ${res.status}` };
    const html = await res.text();
    return { status: res.status, html, error: null };
  } catch (e) {
    return { status: 0, html: null, error: e.message };
  }
}

// ── Local: lê arquivo do dist ──────────────────────────────────────
function readLocal(route) {
  // Tenta 2 padrões: dist/{path}.html (vite-react-ssg) ou dist/{path}/index.html (manual prerender)
  const candidates =
    route === "/"
      ? ["index.html"]
      : [`${route.slice(1)}.html`, `${route.slice(1)}/index.html`];
  for (const p of candidates) {
    const full = resolve(distDir, p);
    if (existsSync(full)) return { html: readFileSync(full, "utf-8"), error: null, file: p };
  }
  return { html: null, error: `arquivo não encontrado: ${candidates.join(" | ")}` };
}

// ── Validate single HTML ────────────────────────────────────────────
function validateHtml(html, route) {
  if (!html) return { score: 0, total: 0, results: [], missing: ["html"] };

  const results = [];
  const missing = [];
  let score = 0;
  let total = 0;

  for (const c of checks) {
    total += c.weight;
    const m = html.match(c.re);
    if (m) {
      score += c.weight;
      results.push({ name: c.name, ok: true, sample: (m[1] || m[0] || "").slice(0, 80) });
    } else {
      missing.push(c.name);
      results.push({ name: c.name, ok: false });
    }
  }

  return { score, total, results, missing, percent: Math.round((score / total) * 100) };
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n${"─".repeat(70)}`);
  console.log(`VSM Engenharia — Validação SEO/GEO`);
  console.log(`Modo: ${isRemote ? "REMOTO (Vercel deploy)" : "LOCAL (dist/)"}`);
  console.log(`Base: ${isRemote ? baseUrl : distDir}`);
  console.log(`${"─".repeat(70)}\n`);

  let totalRoutes = 0;
  let passRoutes = 0;
  const failures = [];

  for (const route of criticalRoutes) {
    totalRoutes++;
    const url = isRemote ? `${baseUrl}${route}` : route;
    console.log(`\n${"━".repeat(70)}`);
    console.log(`📄 ${route}`);
    console.log(`${"━".repeat(70)}`);

    if (isRemote) {
      // Remoto: testa cada crawler
      let allPass = true;
      for (const [name, ua] of Object.entries(crawlers)) {
        const { status, html, error } = await fetchAs(url, ua);
        if (error) {
          console.log(`  ❌ ${name.padEnd(15)} → ${error}`);
          allPass = false;
          continue;
        }
        const v = validateHtml(html, route);
        const symbol = v.percent === 100 ? "✅" : v.percent >= 80 ? "🟡" : "❌";
        console.log(`  ${symbol} ${name.padEnd(15)} → ${v.percent}% (${v.score}/${v.total})${v.missing.length ? ` — falta: ${v.missing.join(", ")}` : ""}`);
        if (v.percent < 100) allPass = false;
        if (verbose && v.results) {
          v.results.filter(r => r.ok && r.sample).forEach(r => {
            console.log(`     · ${r.name}: ${r.sample}`);
          });
        }
      }
      if (allPass) passRoutes++;
      else failures.push(route);
    } else {
      // Local: lê arquivo
      const { html, error } = readLocal(route);
      if (error) {
        console.log(`  ❌ ${error}`);
        failures.push(route);
        continue;
      }
      const v = validateHtml(html, route);
      const symbol = v.percent === 100 ? "✅" : v.percent >= 80 ? "🟡" : "❌";
      console.log(`  ${symbol} Score: ${v.percent}% (${v.score}/${v.total})`);
      if (v.missing.length) console.log(`     Falta: ${v.missing.join(", ")}`);
      if (verbose) {
        v.results.filter(r => r.sample).forEach(r => {
          console.log(`     · ${r.name}: ${r.sample}`);
        });
      }
      if (v.percent === 100) passRoutes++;
      else failures.push(route);
    }
  }

  console.log(`\n${"═".repeat(70)}`);
  console.log(`RESUMO`);
  console.log(`${"═".repeat(70)}`);
  console.log(`Rotas testadas:   ${totalRoutes}`);
  console.log(`Rotas 100% OK:    ${passRoutes}`);
  console.log(`Rotas com falha:  ${failures.length}`);
  if (failures.length) {
    console.log(`\nFalhas:`);
    failures.forEach(f => console.log(`  - ${f}`));
  }

  // Aviso específico de GEO
  if (isRemote && failures.length) {
    console.log(`\n⚠️  ATENÇÃO GEO:`);
    console.log(`Falhas em GPTBot/ClaudeBot/PerplexityBot indicam que crawlers de IA`);
    console.log(`não recebem o conteúdo completo. Isso anula a estratégia de`);
    console.log(`citação em AI Overview, ChatGPT Search e Perplexity.`);
    console.log(`\n→ Próximo passo: implementar enhanced prerender (renderToString do`);
    console.log(`  React no scripts/prerender.mjs) ou migrar para Astro/Next.js.`);
  }

  console.log("");
  process.exit(failures.length ? 1 : 0);
}

main().catch(e => {
  console.error("Erro fatal:", e);
  process.exit(2);
});
