#!/usr/bin/env node
/**
 * fix-future-dates.mjs — substitui datas futuras (>31 Mai 2026) por datas
 * aleatórias no passado, em ordem decrescente conforme o pilar do post.
 *
 * Rodar uma vez: node scripts/fix-future-dates.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = resolve(__dirname, "..", "src", "data", "blogData.ts");

const replacements = [
  // Pilar A — Reclassificação de Monta (Mai → Abr 2026)
  { slug: "o-que-e-monta-veicular-pequena-media-grande", old: "4 Jun 2026", new: "28 Mai 2026" },
  { slug: "media-monta-o-que-significa-no-documento", old: "8 Jun 2026", new: "22 Mai 2026" },
  { slug: "grande-monta-tem-recuperacao", old: "12 Jun 2026", new: "17 Mai 2026" },
  { slug: "media-monta-desvalorizacao-quanto-perde", old: "15 Jun 2026", new: "12 Mai 2026" },
  { slug: "como-tirar-sinistro-do-documento-do-veiculo", old: "18 Jun 2026", new: "7 Mai 2026" },
  { slug: "reclassificacao-monta-detran-mg", old: "22 Jun 2026", new: "1 Mai 2026" },
  { slug: "reclassificacao-monta-detran-rj-es", old: "26 Jun 2026", new: "26 Abr 2026" },
  { slug: "autorizacao-previa-detran-sp-reclassificacao", old: "29 Jun 2026", new: "21 Abr 2026" },
  { slug: "veiculo-leilao-bat-pode-reclassificar", old: "2 Jul 2026", new: "16 Abr 2026" },
  { slug: "sinistro-pequena-monta-vale-comprar", old: "5 Jul 2026", new: "11 Abr 2026" },

  // Pilar B — NR-12 (Abr → Dez 2025)
  { slug: "nr12-o-que-e-norma-maquinas-equipamentos", old: "8 Jul 2026", new: "5 Abr 2026" },
  { slug: "laudo-nr12-quando-e-obrigatorio-quanto-custa", old: "12 Jul 2026", new: "30 Mar 2026" },
  { slug: "adequacao-nr12-passo-a-passo", old: "16 Jul 2026", new: "25 Mar 2026" },
  { slug: "apreciacao-de-risco-nr12-modelo-pratico", old: "20 Jul 2026", new: "19 Mar 2026" },
  { slug: "nr12-atualizada-2026-o-que-mudou", old: "24 Jul 2026", new: "13 Mar 2026" },
  { slug: "guarda-corpo-nr12-padrao-medidas", old: "28 Jul 2026", new: "6 Mar 2026" },
  { slug: "gradil-nr12-especificacao-instalacao", old: "1 Ago 2026", new: "28 Fev 2026" },
  { slug: "protecao-fixa-movel-nr12", old: "5 Ago 2026", new: "21 Fev 2026" },
  { slug: "painel-eletrico-nr12-categoria-seguranca", old: "9 Ago 2026", new: "14 Fev 2026" },
  { slug: "esmeril-nr12-adequacao-seguranca", old: "13 Ago 2026", new: "6 Fev 2026" },
  { slug: "nr12-maquinas-equipamentos-lista", old: "17 Ago 2026", new: "29 Jan 2026" },
  { slug: "validade-laudo-nr12-quando-renovar", old: "21 Ago 2026", new: "21 Jan 2026" },
  { slug: "nr12-quem-precisa-fazer", old: "25 Ago 2026", new: "14 Jan 2026" },
  { slug: "treinamento-nr12-conteudo-programatico", old: "29 Ago 2026", new: "6 Jan 2026" },
  { slug: "nr11-e-nr12-diferencas-aplicacao", old: "2 Set 2026", new: "30 Dez 2025" },

  // Pilar C — NR-13 (Dez → Out 2025)
  { slug: "nr13-o-que-e-norma-caldeiras-vasos", old: "6 Set 2026", new: "22 Dez 2025" },
  { slug: "vasos-de-pressao-nr13-classificacao-categoria", old: "10 Set 2026", new: "14 Dez 2025" },
  { slug: "inspecao-nr13-tipos-periodicidade-procedimento", old: "14 Set 2026", new: "6 Dez 2025" },
  { slug: "laudo-nr13-quanto-custa-quem-pode-emitir", old: "18 Set 2026", new: "28 Nov 2025" },
  { slug: "treinamento-nr13-operador-caldeira-prazo", old: "22 Set 2026", new: "19 Nov 2025" },
  { slug: "nr13-pdf-atualizada-2026", old: "26 Set 2026", new: "10 Nov 2025" },
  { slug: "prontuario-nr13-o-que-deve-conter", old: "30 Set 2026", new: "1 Nov 2025" },
  { slug: "categorias-caldeira-a-b-c-nr13", old: "4 Out 2026", new: "23 Out 2025" },
  { slug: "teste-hidrostatico-vaso-pressao-quando-fazer", old: "8 Out 2026", new: "14 Out 2025" },

  // Pilar D — NR-11 (Out → Ago 2025)
  { slug: "nr11-o-que-e-norma-movimentacao-armazenagem", old: "12 Out 2026", new: "5 Out 2025" },
  { slug: "nr11-atualizada-2026-mudancas", old: "16 Out 2026", new: "27 Set 2025" },
  { slug: "nr11-empilhadeira-validade-treinamento", old: "20 Out 2026", new: "18 Set 2025" },
  { slug: "nr11-ponte-rolante-inspecao-treinamento", old: "24 Out 2026", new: "9 Set 2025" },
  { slug: "validade-nr11-quando-renovar-treinamento", old: "28 Out 2026", new: "30 Ago 2025" },
  { slug: "treinamento-nr11-conteudo-carga-horaria", old: "1 Nov 2026", new: "22 Ago 2025" },

  // Pilar E — PMOC (Ago → Jun 2025)
  { slug: "pmoc-o-que-e-significado-completo", old: "5 Nov 2026", new: "13 Ago 2025" },
  { slug: "pmoc-ar-condicionado-obrigatorio-quem-deve-ter", old: "9 Nov 2026", new: "4 Ago 2025" },
  { slug: "quem-pode-assinar-pmoc-engenheiro-tecnico", old: "13 Nov 2026", new: "25 Jul 2025" },
  { slug: "lei-pmoc-13589-2018-o-que-diz", old: "17 Nov 2026", new: "17 Jul 2025" },
  { slug: "modelo-pmoc-planilha-download", old: "21 Nov 2026", new: "8 Jul 2025" },
  { slug: "laudo-pmoc-quanto-custa-quem-emite", old: "25 Nov 2026", new: "30 Jun 2025" },
];

let content = readFileSync(file, "utf-8");
let ok = 0;
let missed = [];

for (const r of replacements) {
  const oldPair = `date: "${r.old}",\n    dateModified: "${r.old}",`;
  const newPair = `date: "${r.new}",\n    dateModified: "${r.new}",`;
  if (content.includes(oldPair)) {
    content = content.replace(oldPair, newPair);
    ok++;
  } else {
    missed.push(`${r.slug}: ${r.old}`);
  }
}

writeFileSync(file, content);

console.log(`[fix-future-dates] ${ok}/${replacements.length} substituições aplicadas`);
if (missed.length) {
  console.log(`[fix-future-dates] Não encontrados (${missed.length}):`);
  missed.forEach((m) => console.log(`  - ${m}`));
}
