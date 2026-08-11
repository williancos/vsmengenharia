/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Vale a pena adequar uma máquina antiga via NR-12 ou contratar um projeto mecânico novo? Comparativo prático com os critérios técnicos e econômicos.",
  keyTakeaways: ["Retrofit NR-12 é mais barato, mas tem limites técnicos claros", "Projeto novo vale quando a máquina é obsoleta ou os custos de adequação ultrapassam 60% do equipamento", "Análise de risco APR/HRN é o ponto de partida em ambos os casos", "ART de projeto e ART de adequação têm escopos diferentes"],
  toc: [
      { id: "dois-caminhos", label: "Os dois caminhos" },
      { id: "retrofit-nr12", label: "O que é retrofit/adequação NR-12" },
      { id: "projeto-novo", label: "O que é projeto mecânico novo" },
      { id: "criterios-decisao", label: "Critérios para decidir" },
      { id: "custo-comparado", label: "Custo comparado" },
      { id: "como-vsm-faz", label: "Como a VSM conduz cada projeto" }
    ],
  content: [
      `Vale a pena adequar uma máquina antiga via NR-12 ou contratar um projeto mecânico novo? Comparativo prático com os critérios técnicos e econômicos.

Neste guia, abordamos os pontos centrais para profissionais de manutenção, segurança do trabalho e gestores industriais no Sudeste do Brasil.`,

      `## Os dois caminhos {#dois-caminhos}

Toda indústria que precisa colocar uma máquina em conformidade com a NR-12 — seja por exigência do MTE, seja por programa interno de segurança — chega ao mesmo dilema: **adequar a máquina existente** (retrofit) ou **substituí-la por um projeto novo**.

A escolha errada pode custar 3x mais e ainda deixar o equipamento subseguro. A escolha certa exige análise técnica imparcial, e não a opinião do vendedor de máquinas ou do fornecedor de proteções.`,

      `## O que é retrofit/adequação NR-12 {#retrofit-nr12}

**Retrofit NR-12** é a adequação de uma máquina existente para atender aos requisitos da norma. Envolve:

- Análise de risco (APR + HRN ou ISO 12100)
- Projeto de **proteções fixas e móveis** (grades, capôs, *interlocks*)
- Projeto do **circuito de comando seguro** com categoria/PL
- **Retrofit do painel** com relés de segurança, botoeiras de emergência, chaves codificadas
- **Treinamento** dos operadores
- Emissão de **manual atualizado** e **ART de adequação**

Indicado quando a máquina é tecnicamente sólida, com vida útil mecânica longa, e os riscos podem ser eliminados ou reduzidos com proteções e dispositivos.`,

      `## O que é projeto mecânico novo {#projeto-novo}

**Projeto mecânico** é a engenharia de uma máquina, equipamento ou estrutura **a partir do zero**, já com NR-12 incorporada como requisito de projeto. Envolve:

- Conceito (especificação funcional, capacidade, ciclo)
- Cálculo estrutural e dimensional
- Memorial de cálculo
- Projeto mecânico (CAD 3D, detalhamento)
- Projeto elétrico/comando seguro
- Análise de risco já no design
- ART de projeto + ART de fabricação
- Comissionamento

Indicado quando a máquina existente é obsoleta, sem reposição de peças, com risco intrínseco impossível de mitigar, ou quando a operação industrial mudou e exige outra capacidade.`,

      `## Critérios para decidir {#criterios-decisao}

Use esta matriz objetiva:

| Sinal | Aponta para |
| --- | --- |
| Máquina < 15 anos, em bom estado mecânico | Retrofit |
| Máquina obsoleta, sem peças no mercado | Projeto novo |
| Risco categoria 3/4 não mitigável por proteção | Projeto novo |
| Riscos eliminados com grades + interlocks | Retrofit |
| Custo da adequação > 60% do valor de máquina nova | Projeto novo |
| Layout fabril vai mudar | Projeto novo |
| Operação igual há 20 anos | Retrofit |`,

      `## Custo comparado {#custo-comparado}

Para uma **prensa hidráulica de médio porte** em Sudeste do Brasil (referência 2026):

| Item | Retrofit NR-12 | Projeto + máquina nova |
| --- | --- | --- |
| Análise de risco | R$ 4–8k | R$ 6–12k |
| Proteções e painel | R$ 35–80k | (incluso) |
| ART e documentação | R$ 3–5k | R$ 8–15k |
| Máquina nova | — | R$ 250–600k |
| **Total** | **R$ 42–93k** | **R$ 264–627k** |

Pareço óbvio escolher retrofit. Mas se a máquina é categoria 4 com risco de amputação **não mitigável**, projeto novo deixa de ser opção e vira **obrigação ética e legal** do engenheiro responsável.`,

      `## Como a VSM conduz cada projeto {#como-vsm-faz}

1. **Diagnóstico imparcial** — visita técnica e relatório indicando o caminho
2. **Se retrofit:** análise de risco → projeto de adequação → execução supervisionada → ART
3. **Se projeto novo:** conceito → memorial de cálculo → projeto mecânico + elétrico → ART de projeto

A **VSM Engenharia** atende ambos os caminhos. Conheça [projetos mecânicos](/servicos/projetos-mecanicos) e [adequação NR-12](/servicos/nr12). Veja também o passo a passo detalhado em [adequação NR-12 em 7 etapas](/blog/adequacao-nr12-passo-a-passo) e o aprofundamento em [proteção fixa e móvel NR-12](/blog/protecao-fixa-movel-nr12).`
    ],
};
