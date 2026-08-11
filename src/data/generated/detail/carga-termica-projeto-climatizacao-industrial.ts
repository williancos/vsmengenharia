/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Entenda o que é carga térmica, por que ela é o ponto central de qualquer projeto HVAC industrial e como o cálculo correto evita superdimensionamento e desperd",
  keyTakeaways: ["Carga térmica define a capacidade exata do sistema de climatização", "Cálculo errado causa superdimensionamento, desperdício energético e oscilação de umidade", "Norma técnica de referência: ABNT NBR 16401 e ASHRAE Handbook", "Inclui ganhos por insolação, equipamentos, pessoas, infiltração e iluminação"],
  toc: [
      { id: "o-que-e-carga-termica", label: "O que é carga térmica" },
      { id: "por-que-calcular", label: "Por que calcular corretamente" },
      { id: "normas", label: "Normas de referência" },
      { id: "componentes", label: "Componentes da carga térmica" },
      { id: "como-fazer", label: "Como é feito o cálculo" },
      { id: "erros-comuns", label: "Erros comuns e impactos" }
    ],
  content: [
      `Entenda o que é carga térmica, por que ela é o ponto central de qualquer projeto HVAC industrial e como o cálculo correto evita superdimensionamento e desperdício.

Neste guia, abordamos os pontos centrais para profissionais de manutenção, segurança do trabalho e gestores industriais no Sudeste do Brasil.`,

      `## O que é carga térmica {#o-que-e-carga-termica}

**Carga térmica** é a quantidade de calor (em **TR — toneladas de refrigeração** ou **kW**) que o sistema de climatização precisa **remover** (resfriamento) ou **adicionar** (aquecimento) para manter um ambiente em condições controladas de temperatura e umidade.

Em projetos industriais e comerciais, ela é o **dado de partida obrigatório**: sem cálculo correto da carga, qualquer escolha de chiller, VRF, fan-coil ou splitão será chute — e custará caro. Uma TR equivale a **3,517 kW** (ou 12.000 BTU/h).`,

      `## Por que calcular corretamente {#por-que-calcular}

**Superdimensionar:**
- Gasta mais energia
- Liga e desliga em ciclos curtos (*short cycling*), reduzindo vida útil dos compressores
- Não desumidifica direito (sensação de "frio molhado")
- Aumenta CAPEX desnecessariamente

**Subdimensionar:**
- Equipamento trabalha em sobrecarga 100% do tempo
- Não atinge temperatura de projeto em dias quentes
- Vida útil reduzida e quebras frequentes
- Reclamações dos ocupantes e perda de produtividade

A **medida certa** vem só do cálculo técnico baseado em norma.`,

      `## Normas de referência {#normas}

No Brasil:

- **ABNT NBR 16401-1, 2 e 3** — Instalações de ar-condicionado para conforto: parâmetros de projeto, qualidade do ar e desempenho
- **ABNT NBR 6401** — substituída pela 16401, mas ainda referenciada
- **ASHRAE Handbook — Fundamentals** (capítulos 17 e 18) — referência mundial de método de cálculo
- **ASHRAE 62.1** — taxa mínima de renovação de ar`,

      `## Componentes da carga térmica {#componentes}

A carga total é a soma de várias parcelas:

| Fonte | Origem |
| --- | --- |
| **Insolação** | Calor solar através de janelas, paredes e cobertura |
| **Transmissão** | Condução pela envoltória (paredes, vidros, telhado) |
| **Iluminação** | Lâmpadas, luminárias e refletores |
| **Equipamentos** | Computadores, motores, fornos, máquinas industriais |
| **Pessoas** | Calor sensível + latente; ~120 W por pessoa em escritório, ~250 W em galpão |
| **Ar exterior** | Carga de renovação para manter QAI |
| **Infiltrações** | Ar não controlado por frestas e portas |

Em ambientes industriais, **equipamentos** costumam ser o maior peso. Em escritórios, **insolação + pessoas + iluminação**.`,

      `## Como é feito o cálculo {#como-fazer}

1. **Levantamento arquitetônico** — orientação, áreas de fachada, tipo de vidro, vedações
2. **Levantamento de cargas internas** — equipamentos, iluminação, ocupação
3. **Definição de condições de projeto** — temperatura/umidade externa (NBR 16401-1) e interna desejada
4. **Cálculo hora a hora** — usando software como **HAP da Carrier**, **TRACE da Trane** ou planilhas ASHRAE
5. **Identificação do pico** — hora e mês de maior demanda
6. **Escolha do equipamento** — capacidade ≥ pico + folga de 5–10%

O resultado é um documento técnico com **memorial de cálculo** que sustenta tecnicamente o projeto e a ART.`,

      `## Erros comuns e impactos {#erros-comuns}

- **Usar regra de ouro** ("1 TR para cada 25 m²") em ambientes industriais — ignora carga de máquinas
- **Não considerar renovação de ar** — viola RE-9 ANVISA e gera CO₂ alto
- **Esquecer da carga de processo** — fornos, secadoras e prensas mudam tudo
- **Não revisar projeto** quando layout muda

A **VSM Engenharia** executa cálculo de carga térmica conforme NBR 16401, com memorial completo e ART. Conheça nossos [projetos de climatização](/servicos/projetos-climatizacao).`
    ],
};
