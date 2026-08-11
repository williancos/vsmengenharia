/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Comparativo técnico entre VRF, chiller e splitão para climatização industrial: capacidade, custo, eficiência, manutenção e quando cada um faz sentido.",
  keyTakeaways: ["Splitão é a opção mais barata, ideal para áreas únicas até 10 TR", "VRF oferece flexibilidade e zoneamento, ideal para escritórios multiambiente", "Chiller é mais eficiente em grande escala (acima de 80–100 TR)", "A escolha correta exige análise da carga térmica e do perfil de uso"],
  toc: [
      { id: "visao-geral", label: "Visão geral dos três sistemas" },
      { id: "splitao", label: "Splitão (rooftop/self-contained)" },
      { id: "vrf", label: "VRF (Variable Refrigerant Flow)" },
      { id: "chiller", label: "Chiller com fan-coils" },
      { id: "comparativo", label: "Comparativo técnico-econômico" },
      { id: "como-decidir", label: "Como decidir" }
    ],
  content: [
      `Comparativo técnico entre VRF, chiller e splitão para climatização industrial: capacidade, custo, eficiência, manutenção e quando cada um faz sentido.

Neste guia, abordamos os pontos centrais para profissionais de manutenção, segurança do trabalho e gestores industriais no Sudeste do Brasil.`,

      `## Visão geral dos três sistemas {#visao-geral}

Os três sistemas mais usados em climatização comercial e industrial brasileira são **splitão**, **VRF** e **chiller**. A escolha entre eles é uma das decisões de maior impacto financeiro do projeto — afeta CAPEX, OPEX (energia + manutenção), conforto e flexibilidade de layout por 15 a 20 anos.

Não existe "sistema melhor". Existe **sistema certo para cada perfil de carga, ocupação e orçamento**. Por isso, todo projeto sério começa com cálculo de carga térmica.`,

      `## Splitão (rooftop/self-contained) {#splitao}

**O que é:** unidade compacta, geralmente instalada no piso ou na laje, que distribui ar resfriado por dutos ou diretamente em uma única zona. Inclui modelos *self-contained* (interno) e *rooftop* (externo).

**Capacidade típica:** 5 a 30 TR por unidade.

**Vantagens:**
- Baixo CAPEX
- Instalação rápida
- Manutenção simples (qualquer técnico de refrigeração atende)
- Fácil substituição

**Desvantagens:**
- Eficiência limitada (não modula bem cargas parciais)
- Sem zoneamento por ambiente
- Ruído mais alto
- Vida útil 8–12 anos

**Indicado para:** lojas, restaurantes, áreas únicas de escritório, galpões compactos.`,

      `## VRF (Variable Refrigerant Flow) {#vrf}

**O que é:** uma unidade externa modulada conecta-se a múltiplas evaporadoras internas (cassete, hi-wall, embutida em duto), cada uma com controle individual de temperatura.

**Capacidade típica:** 8 a 60 TR por sistema (combinável).

**Vantagens:**
- **Zoneamento total** — cada sala com sua temperatura
- Modulação fina (compressor *inverter*) → boa eficiência em carga parcial
- Recuperação de calor opcional (resfria e aquece simultaneamente)
- Flexibilidade de layout
- Vida útil 15–18 anos

**Desvantagens:**
- CAPEX 30–50% maior que splitão
- Manutenção exige técnico especializado da fabricante
- Carga de gás refrigerante elevada (atenção a normas de segurança)

**Indicado para:** edifícios corporativos, hotéis, hospitais sem áreas críticas, lajes corporativas com múltiplas salas.`,

      `## Chiller com fan-coils {#chiller}

**O que é:** uma central de água gelada (chiller) produz água a 6–7 °C que é distribuída por tubulação a fan-coils espalhados pela edificação.

**Capacidade típica:** 60 TR a 2.000+ TR.

**Vantagens:**
- **Maior eficiência em grande escala** (COP 3,5 a 6,0)
- Excelente para cargas estáveis e contínuas
- Pode usar água como reserva térmica
- Vida útil 20–25 anos
- Manutenção centralizada (1 chiller vs 50 condensadoras)

**Desvantagens:**
- CAPEX alto
- Sala de máquinas e tubulação de água gelada
- Projeto mais complexo
- Inviável para cargas pequenas

**Indicado para:** shoppings, hospitais, indústrias farmacêuticas, áreas limpas, data centers, plantas acima de 80–100 TR.`,

      `## Comparativo técnico-econômico {#comparativo}

| Critério | Splitão | VRF | Chiller |
| --- | --- | --- | --- |
| Faixa de capacidade | 5–30 TR | 8–60 TR | 60–2.000+ TR |
| CAPEX (R$/TR) | Baixo | Médio-alto | Alto |
| OPEX (energia) | Médio-alto | Médio | Baixo |
| Zoneamento | Não | Sim | Sim |
| Vida útil | 8–12 anos | 15–18 anos | 20–25 anos |
| Manutenção | Simples | Especializada | Engenharia |
| Tempo de obra | Curto | Médio | Longo |
`,

      `## Como decidir {#como-decidir}

Sequência correta de decisão:

1. **Calcule a carga térmica** (NBR 16401)
2. **Mapeie zonas e perfis de uso** (mesmo horário? temperaturas diferentes?)
3. **Defina horizonte de retorno** (5 anos? 15 anos?)
4. **Avalie infraestrutura disponível** (espaço para chiller? entrada elétrica?)
5. **Compare TCO** (CAPEX + OPEX + manutenção em 10 anos)

A **VSM Engenharia** entrega projeto HVAC completo com comparativo técnico-econômico, memorial de cálculo de carga térmica e ART. Conheça nossos [projetos de climatização](/servicos/projetos-climatizacao).`
    ],
};
