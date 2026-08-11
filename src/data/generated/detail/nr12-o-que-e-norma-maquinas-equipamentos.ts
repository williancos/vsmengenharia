/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "NR-12 o que é: norma regulamentadora de segurança em máquinas e equipamentos. Objetivo, aplicabilidade, anexos, penalidades. VSM Engenharia.",
  keywords: ["nr12 o que é", "o que é nr12", "nr12 fala sobre o que", "qual o objetivo da nr12", "norma nr12"],
  keyTakeaways: [
      "NR-12 define requisitos mínimos de segurança para máquinas em fabricação, uso, importação e venda",
      "Aplica-se a todos os empregadores que operam máquinas, independente do porte da empresa",
      "Inclui 12 anexos com requisitos técnicos específicos por tipo de equipamento",
      "Descumprimento gera autuação, multa de R$ 1.500 a R$ 35.000+ e interdição imediata"
    ],
  toc: [
      { id: "o-que-e-nr12", label: "O que é a NR-12" },
      { id: "objetivo-da-norma", label: "Objetivo da norma" },
      { id: "a-quem-se-aplica", label: "A quem se aplica" },
      { id: "estrutura-da-nr12", label: "Estrutura e itens principais" },
      { id: "anexos-da-nr12", label: "Os 12 anexos da NR-12" },
      { id: "penalidades", label: "Penalidades pelo descumprimento" },
      { id: "caminho-de-adequacao", label: "Caminho prático de adequação" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Quais máquinas estão sujeitas à NR-12?", answer: "Todas as máquinas estacionárias e móveis utilizadas em ambiente de trabalho, independente do ano de fabricação. Inclui tornos, fresadoras, prensas, injetoras, esmeris, esteiras, calandras, painéis elétricos de comando e equipamentos de movimentação de carga. Os anexos especificam requisitos adicionais para equipamentos críticos como prensas, injetoras, máquinas de panificação e equipamentos de guindar." },
      { question: "A NR-12 vale para máquinas antigas?", answer: "Sim. A norma aplica-se independente da data de fabricação. Máquinas antigas precisam ser adequadas com retrofit — instalação de proteções, intertravamentos, circuito de comando seguro e botoeiras de emergência conforme exigências atuais. O caminho está detalhado em projeto mecânico ou retrofit NR-12." },
      { question: "Quem fiscaliza a NR-12?", answer: "Auditores fiscais do trabalho da Secretaria de Inspeção do Trabalho (SIT/MTE). A fiscalização pode ser programada, motivada por denúncia ou em decorrência de acidente. Em caso de risco grave e iminente, o auditor pode interditar a máquina ou o setor inteiro, ato com efeito imediato." },
      { question: "Pequenas empresas precisam cumprir NR-12?", answer: "Sim. A obrigatoriedade independe do porte da empresa, e até oficinas com um único torno ou esmeril estão sujeitas à norma. O grau de exigência da fiscalização pode variar conforme o risco, mas as obrigações legais são as mesmas." }
    ],
  content: [
`A **NR-12** é a Norma Regulamentadora nº 12 do Ministério do Trabalho, que define os requisitos mínimos de segurança para máquinas e equipamentos no Brasil. Aplica-se a empregadores, fabricantes, importadores, distribuidores e locadores, em todas as fases — projeto, fabricação, importação, comercialização e uso.

Esta é a norma de segurança industrial de **maior volume de fiscalização** do MTE e a que gera mais autuações por descumprimento. Entender o que ela exige, a quem se aplica e como adequar uma máquina é fundamental para qualquer indústria que opere com equipamentos motorizados.`,

`## O que é a NR-12 {#o-que-e-nr12}

A NR-12 é uma norma regulamentadora federal vinculada à **Consolidação das Leis do Trabalho (CLT, art. 200)** e detalhada pela Portaria SEPRT nº 916/2019, com atualizações posteriores. Foi instituída originalmente em 1978 e reformulada de forma profunda pela Portaria MTE nº 197/2010, que estabeleceu o texto base atualmente em vigor.

Define requisitos de:

- **Projeto de máquinas** (proteções, ergonomia, comando seguro)
- **Fabricação e venda** (manual em português, marcação CE/INMETRO quando aplicável, ART)
- **Uso operacional** (treinamento, manutenção, inspeção)
- **Adequação de máquinas existentes** (retrofit conforme análise de risco)

A norma não é estática — recebe atualizações periódicas via portarias da SIT/MTE, e o cumprimento exige acompanhar essas atualizações.`,

`## Objetivo da norma {#objetivo-da-norma}

O objetivo formal está no item 12.1: garantir a saúde e a integridade física dos trabalhadores que interagem com máquinas. Na prática, isso se traduz em três pilares:

1. **Eliminar o risco na fonte** — projeto que torna o acidente impossível
2. **Reduzir o risco com proteções** — quando o risco não pode ser eliminado
3. **Comunicar o risco residual** — sinalização, treinamento, EPI

A hierarquia é importante: NR-12 **não aceita EPI como solução isolada** quando o risco poderia ser eliminado por proteção. Isso é causa frequente de autuação — empresa fornece luva anticorte para risco que demandaria capô de proteção fixo.`,

`## A quem se aplica {#a-quem-se-aplica}

A norma se aplica a **toda atividade econômica** que utilize máquinas e equipamentos no processo produtivo:

| Categoria | Obrigações principais |
| --- | --- |
| Empregador (qualquer porte) | Adequação, manutenção, inspeção, treinamento |
| Fabricante de máquinas | Projeto conforme NR-12 desde a saída de fábrica + manual em PT-BR + ART |
| Importador | Equivalência da máquina importada à NR-12 antes da venda |
| Locador / Comodante | Entregar máquina em conformidade + responsabilidade solidária |
| Profissional de segurança | Análise de risco, projeto de adequação, treinamento |

Não há isenção por porte: oficina mecânica de bairro com um único esmeril está tão obrigada quanto indústria automotiva.`,

`## Estrutura e itens principais {#estrutura-da-nr12}

A NR-12 está organizada em 50+ subitens principais. Os blocos centrais:

- **12.1 a 12.3** — princípios gerais e responsabilidades
- **12.4 a 12.13** — arranjo físico, instalações elétricas, dispositivos de partida e parada
- **12.14 a 12.37** — sistemas de segurança (proteções, intertravamentos)
- **12.38 a 12.46** — dispositivos de parada de emergência
- **12.47 a 12.63** — manutenção, inspeção, treinamento
- **12.64+** — disposições gerais, transitórias e definições

O item mais cobrado em fiscalização é o **12.38** (parada de emergência) e os subitens 12.24 a 12.27 (proteções fixas e móveis).`,

`## Os 12 anexos da NR-12 {#anexos-da-nr12}

| Anexo | Tema |
| --- | --- |
| I | Distâncias de segurança (alcance dos membros superiores) |
| II | Conteúdo programático mínimo de treinamento |
| III | Meios de acesso permanentes |
| IV | Glossário |
| V | Motosserras |
| VI | Máquinas para panificação e confeitaria |
| VII | Máquinas para açougue e mercearia |
| VIII | Prensas e similares |
| IX | Injetoras de plástico |
| X | Máquinas para fabricação de calçados |
| XI | Máquinas e equipamentos da indústria de cana-de-açúcar e álcool |
| XII | Equipamentos de guindar (relevante para [NR-11](/blog/nr11-e-nr12-diferencas-aplicacao)) |

Cada anexo tem requisitos técnicos específicos que **sobrepõem** as exigências gerais. Prensa, por exemplo, exige cumprimento integral do corpo da norma + Anexo VIII.`,

`## Penalidades pelo descumprimento {#penalidades}

A NR-12 é tipificada na Portaria MTb 1.085/2017 com infrações de **grau M3 e M4** — entre as mais graves do quadro de penalidades. Consequências práticas:

| Tipo | Faixa típica |
| --- | --- |
| Multa por item descumprido | R$ 1.500 – R$ 35.000+ |
| Interdição de máquina | imediata, sem prazo de adequação prévio |
| Interdição de setor | em casos de risco coletivo |
| Embargo de obra/serviço | em construções e montagens |
| Responsabilidade civil pós-acidente | indenizações trabalhistas + danos morais |
| Responsabilidade criminal | em casos de morte ou lesão grave (art. 132 CP) |

> **Sua planta industrial está em conformidade NR-12?** A VSM Engenharia faz [consultoria gratuita](/servicos/consultoria-gratuita) com diagnóstico inicial em 2 dias. [Fale pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Caminho prático de adequação {#caminho-de-adequacao}

O processo padrão de adequação de uma máquina existente segue 7 etapas — detalhadas no artigo [adequação NR-12 passo a passo](/blog/adequacao-nr12-passo-a-passo):

1. **Apreciação de risco** (ISO 12100 + HRN ou metodologia equivalente)
2. **Projeto de adequação** (proteções fixas/móveis, comando seguro, intertravamentos)
3. **Memorial técnico** com ART do CREA
4. **Execução** da adequação física e elétrica
5. **Comissionamento** e testes de segurança
6. **Treinamento** dos operadores (Anexo II)
7. **Laudo NR-12** documentando a conformidade

O custo total varia conforme a categoria de risco — ver detalhamento em [laudo NR-12: quando é obrigatório e quanto custa](/blog/laudo-nr12-quando-e-obrigatorio-quanto-custa).

## Próximo passo {#proximo-passo}

A conformidade NR-12 não é projeto único: é programa contínuo de inspeção, manutenção e atualização normativa. Quanto mais tempo a planta opera fora de conformidade, maior o risco de autuação, acidente e responsabilização.

A VSM Engenharia conduz programas completos de adequação NR-12 em todo o Sudeste, com engenheiros mecânicos e elétricos credenciados no CREA.

📞 **(11) 95453-4057** — atendimento de segunda a sexta, 8h às 18h
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [NR-12 da VSM Engenharia](/servicos/nr12).`
    ],
};
