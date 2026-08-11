#!/usr/bin/env node
/**
 * Detalha os itens reprovados de acessibilidade numa rota — o resumo do
 * lighthouse-audit.mjs dá o id do audit, este dá o elemento culpado.
 *
 * Uso: node scripts/a11y-detail.mjs /clientes [--url http://localhost:4180]
 */
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const args = process.argv.slice(2);
const rota = args.find((a) => a.startsWith("/")) ?? "/";
const i = args.indexOf("--url");
const BASE = (i !== -1 ? args[i + 1] : "http://localhost:4180").replace(/\/$/, "");

const chrome = await chromeLauncher.launch({
  chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
});

try {
  const { lhr } = await lighthouse(`${BASE}${rota}`, {
    port: chrome.port,
    output: "json",
    logLevel: "error",
    onlyCategories: ["accessibility"],
  });

  console.log(`Acessibilidade em ${rota}: ${Math.round(lhr.categories.accessibility.score * 100)}\n`);

  for (const [id, a] of Object.entries(lhr.audits)) {
    if (a.score === null || a.score >= 0.9) continue;
    console.log(`✗ ${id} — ${a.title}`);
    for (const item of a.details?.items ?? []) {
      const no = item.node ?? item;
      if (no.snippet) console.log(`    ${no.snippet.replace(/\s+/g, " ").slice(0, 160)}`);
      if (no.explanation) console.log(`    ↳ ${no.explanation.replace(/\s+/g, " ").slice(0, 200)}`);
    }
    console.log("");
  }
} finally {
  try {
    await chrome.kill();
  } catch {
    /* profile temporário fica para o SO limpar */
  }
}
