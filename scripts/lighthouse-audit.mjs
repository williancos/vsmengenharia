#!/usr/bin/env node
/**
 * lighthouse-audit.mjs
 *
 * Roda Lighthouse (preset mobile) contra o `dist/` servido e imprime as 4
 * categorias + as 5 métricas que compõem a nota de Performance.
 *
 * A lista cobre um exemplar de cada template do site — as 111 páginas saem de
 * ~8 componentes, então medir os 8 cobre todas.
 *
 * Uso:
 *   npm run preview -- --port 4180 --strictPort   (noutro terminal)
 *   node scripts/lighthouse-audit.mjs [--url http://localhost:4180] [--only /blog]
 */

import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import { writeFileSync } from "fs";

const args = process.argv.slice(2);
const argOf = (name, fallback) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const BASE = argOf("--url", "http://localhost:4180").replace(/\/$/, "");
const ONLY = argOf("--only", null);
const JSON_OUT = argOf("--json", null);
/**
 * Rodada única varia muito: numa máquina com outros processos disputando CPU,
 * a mesma página oscilou entre 87 e 98. Com `--runs 3` a nota reportada é a
 * mediana, que é o que o próprio Lighthouse recomenda para comparar builds.
 */
const RUNS = Math.max(1, parseInt(argOf("--runs", "1"), 10) || 1);
const mediana = (xs) => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)];

const PAGES = [
  ["/", "Home"],
  ["/servicos/nr13", "Pilar NR13"],
  ["/servicos/nr12", "Pilar NR12 (maior HTML)"],
  ["/servicos/projetos-climatizacao", "Serviço simples"],
  ["/servicos/inspecao-nr13-sao-paulo", "Landing de cauda"],
  ["/blog", "Índice do blog"],
  ["/blog/plano-de-rigging-guia-tecnico", "Post longo"],
  ["/contato", "Contato (formulário)"],
  ["/clientes", "Clientes (carrossel)"],
  ["/sobre", "Sobre"],
];

const alvo = ONLY ? PAGES.filter(([p]) => p === ONLY) : PAGES;
if (!alvo.length) {
  console.error(`Rota "${ONLY}" não está na lista.`);
  process.exit(1);
}

const chrome = await chromeLauncher.launch({
  chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
});

const CATS = ["performance", "accessibility", "best-practices", "seo"];
const METRICS = [
  ["first-contentful-paint", "FCP"],
  ["largest-contentful-paint", "LCP"],
  ["total-blocking-time", "TBT"],
  ["cumulative-layout-shift", "CLS"],
  ["speed-index", "SI"],
];

const cor = (n) => (n >= 90 ? "\x1b[32m" : n >= 50 ? "\x1b[33m" : "\x1b[31m");
const reset = "\x1b[0m";
const resultados = [];

try {
  for (const [rota, nome] of alvo) {
    const rodadas = [];
    let lhr;
    for (let i = 0; i < RUNS; i++) {
      // Preset mobile padrão (3º argumento null) — o mesmo do PageSpeed Insights.
      ({ lhr } = await lighthouse(`${BASE}${rota}`, { port: chrome.port, output: "json", logLevel: "error" }, null));
      rodadas.push(Object.fromEntries(CATS.map((c) => [c, Math.round((lhr.categories[c]?.score ?? 0) * 100)])));
    }

    // Nota = mediana das rodadas; métricas = as da última (só ilustrativas).
    const scores = Object.fromEntries(CATS.map((c) => [c, mediana(rodadas.map((r) => r[c]))]));
    const metrics = Object.fromEntries(
      METRICS.map(([id, label]) => [label, lhr.audits[id]?.displayValue ?? "—"]),
    );

    // Audits reprovados que ainda pesam na nota — é o que dá o próximo passo.
    const falhas = Object.values(lhr.audits)
      .filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== "informative")
      .map((a) => a.id);

    // Quem é o elemento de LCP e o que bloqueia a renderização: sem isso o
    // ajuste vira chute (otimizar imagem quando o LCP é texto, por exemplo).
    const lcpEl = lhr.audits["largest-contentful-paint-element"]?.details?.items?.[0]?.items?.[0]?.node?.snippet;
    const bloqueio = (lhr.audits["render-blocking-resources"]?.details?.items ?? []).map(
      (i) => `${i.url.split("/").pop()} (${Math.round(i.totalBytes / 1024)}KB, ${Math.round(i.wastedMs)}ms)`,
    );
    const economia = Object.entries(lhr.audits)
      .filter(([, a]) => a.details?.overallSavingsMs > 100)
      .map(([id, a]) => `${id} −${Math.round(a.details.overallSavingsMs)}ms`);

    resultados.push({ rota, nome, scores, metrics, falhas, lcpEl, bloqueio, economia });

    const linha = CATS.map((c) => `${cor(scores[c])}${String(scores[c]).padStart(3)}${reset}`).join(" ");
    console.log(
      `${linha}  ${rota.padEnd(38)} ${METRICS.map(([, l]) => `${l} ${metrics[l]}`).join("  ")}`,
    );
  }
} finally {
  // No Windows o chrome-launcher lança EPERM ao apagar o profile temporário
  // (o processo ainda segura o diretório). Não é motivo para perder o relatório.
  try {
    await chrome.kill();
  } catch {
    /* profile temporário fica para o SO limpar */
  }
}

console.log("\n(colunas: Performance · Acessibilidade · Boas práticas · SEO)");

const piores = CATS.map((c) => [c, Math.min(...resultados.map((r) => r.scores[c]))]);
console.log("Mínimo por categoria: " + piores.map(([c, v]) => `${c}=${cor(v)}${v}${reset}`).join("  "));

const reprovadas = resultados.filter((r) => CATS.some((c) => r.scores[c] < 90));
if (reprovadas.length) {
  console.log(`\n⚠️  ${reprovadas.length} página(s) abaixo de 90 em alguma categoria:`);
  for (const r of reprovadas) {
    const quais = CATS.filter((c) => r.scores[c] < 90).map((c) => `${c} ${r.scores[c]}`);
    console.log(`   ${r.rota} — ${quais.join(", ")}`);
    console.log(`      audits reprovados: ${r.falhas.join(", ") || "nenhum"}`);
  }
} else {
  console.log("\n✅ Todas as páginas medidas estão verdes (≥90) nas 4 categorias.");
}

console.log("\n── Diagnóstico ──");
for (const r of resultados) {
  console.log(`${r.rota}`);
  console.log(`   LCP: ${r.lcpEl ? r.lcpEl.slice(0, 110) : "?"}`);
  if (r.bloqueio.length) console.log(`   bloqueia render: ${r.bloqueio.join(", ")}`);
  if (r.economia.length) console.log(`   economia >100ms: ${r.economia.join(", ")}`);
}

if (JSON_OUT) writeFileSync(JSON_OUT, JSON.stringify(resultados, null, 2));
