/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Entenda os principais ensaios não destrutivos (END) usados em inspeções industriais — ultrassom, LP, partículas magnéticas e termografia — e quando aplicar ca",
  keyTakeaways: ["END detectam falhas internas e superficiais sem danificar o equipamento", "Ultrassom é o ensaio mais usado para descontinuidades volumétricas em soldas", "LP e partículas magnéticas detectam trincas superficiais com baixo custo", "Termografia identifica pontos quentes elétricos e mecânicos em operação"],
  toc: [
      { id: "o-que-sao-end", label: "O que são ensaios não destrutivos" },
      { id: "ultrassom", label: "Ultrassom industrial (UT)" },
      { id: "liquido-penetrante", label: "Líquido penetrante (LP)" },
      { id: "particulas-magneticas", label: "Partículas magnéticas (PM)" },
      { id: "termografia", label: "Termografia infravermelha (IR)" },
      { id: "quando-aplicar", label: "Quando aplicar cada ensaio" }
    ],
  content: [
      `Entenda os principais ensaios não destrutivos (END) usados em inspeções industriais — ultrassom, LP, partículas magnéticas e termografia — e quando aplicar cada um.

Neste guia, abordamos os pontos centrais para profissionais de manutenção, segurança do trabalho e gestores industriais no Sudeste do Brasil.`,

      `## O que são ensaios não destrutivos {#o-que-sao-end}

Os **Ensaios Não Destrutivos (END)** são técnicas de inspeção que permitem **avaliar a integridade de materiais e componentes sem danificá-los nem comprometer sua função**. São pilares das inspeções NR-13, NR-12, NR-11, da reclassificação de monta e da manutenção preditiva industrial.

A grande vantagem do END é poder testar peças em operação ou já instaladas, evitando paradas desnecessárias e o descarte de componentes que ainda têm vida útil. No Brasil, os profissionais que executam END devem ser **qualificados conforme a ABENDI** (Associação Brasileira de Ensaios Não Destrutivos).`,

      `## Ultrassom industrial (UT) {#ultrassom}

O **ensaio por ultrassom** utiliza ondas sonoras de alta frequência (0,5 a 20 MHz) para detectar descontinuidades internas em metais, soldas e plásticos.

**Princípio:** o transdutor emite um pulso ultrassônico que viaja pelo material; ao encontrar uma descontinuidade, parte da onda é refletida e captada de volta, gerando um eco no equipamento.

**Aplicações típicas:**
- Inspeção de **soldas em vasos de pressão e caldeiras** (NR-13)
- Medição de **espessura remanescente** de chapas e tubos com corrosão
- Detecção de **trincas de fadiga** em chassi de munck
- Inspeção de **eixos, rolamentos e fundidos**

**Limitações:** exige acoplante, superfície razoavelmente lisa e operador com qualificação SNQC nível 1 ou 2.`,

      `## Líquido penetrante (LP) {#liquido-penetrante}

O **ensaio por líquido penetrante** detecta **descontinuidades abertas à superfície** de qualquer material não poroso (metais, cerâmica, plástico).

**Sequência:**
1. Limpeza da peça
2. Aplicação do penetrante (geralmente colorido ou fluorescente)
3. Tempo de penetração (5 a 30 min)
4. Remoção do excesso
5. Aplicação do revelador (pó branco)
6. Inspeção visual

Trincas, poros e dobras aparecem como manchas vermelhas ou fluorescentes sobre o fundo branco.

**Vantagens:** baixo custo, alta sensibilidade para trincas finas, não exige energia elétrica.
**Limitações:** só detecta defeitos superficiais; não funciona em materiais porosos.`,

      `## Partículas magnéticas (PM) {#particulas-magneticas}

O **ensaio por partículas magnéticas** detecta **trincas superficiais e subsuperficiais** em materiais ferromagnéticos (aços-carbono, aços baixa liga).

**Como funciona:** a peça é magnetizada (com yoke, bobina ou eletrodos) e partículas de ferro coloridas são aplicadas. Quando há descontinuidade, o campo magnético é distorcido e atrai as partículas, formando uma indicação visível.

**Aplicações:**
- Soldas estruturais
- Lança e estabilizadores de munck
- Eixos, virabrequins, engrenagens
- Cordões de solda em tanques

**Vantagem em relação ao LP:** detecta trincas até **3 mm abaixo da superfície**.
**Limitação:** só serve para materiais ferromagnéticos.`,

      `## Termografia infravermelha (IR) {#termografia}

A **termografia** registra a radiação infravermelha emitida pelos corpos e converte em imagem térmica. Permite identificar **pontos quentes** sem contato e com o equipamento em operação.

**Aplicações:**
- **Painéis elétricos** — conexões frouxas, sobrecargas, desbalanceamento de fases
- **Mancais e rolamentos** — superaquecimento por falha de lubrificação
- **Refratários de fornos** — perdas térmicas e desgaste
- **Subestações** — identificação de chaves seccionadoras com mau contato

**Vantagens:** não invasivo, rápido, com equipamento em operação.
**Limitações:** não detecta defeito frio; precisa de operador qualificado para interpretar imagens.`,

      `## Quando aplicar cada ensaio {#quando-aplicar}

| Necessidade | Ensaio recomendado |
| --- | --- |
| Trincas superficiais em aço | LP ou PM |
| Trincas superficiais em alumínio | LP |
| Descontinuidades internas em solda | UT (ou radiografia) |
| Espessura remanescente | UT por medição |
| Pontos quentes em painéis | Termografia |
| Avaliação de chassi de munck | LP + UT em pontos críticos |

A **VSM Engenharia** executa programas completos de inspeção com END por profissionais qualificados ABENDI. Veja nossos serviços de [Inspeções Técnicas](/servicos/inspecoes-tecnicas).`
    ],
};
