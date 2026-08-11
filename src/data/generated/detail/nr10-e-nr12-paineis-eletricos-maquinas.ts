/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "NR-10 e NR-12 se sobrepõem em painéis elétricos de máquinas industriais. Entenda quem responde pelo quê e como evitar autuação dupla na sua adequação.",
  keyTakeaways: ["NR-10 trata da segurança em instalações elétricas, NR-12 da segurança em máquinas", "O painel de comando da máquina é o ponto onde as duas normas se sobrepõem", "Categoria de segurança do circuito é definida por análise de risco da NR-12", "Profissionais habilitados em ambas as normas são raros — exija qualificação dupla"],
  toc: [
      { id: "escopo-cada-norma", label: "Escopo de cada norma" },
      { id: "ponto-de-cruzamento", label: "O ponto de cruzamento: o painel" },
      { id: "categoria-seguranca", label: "Categoria de segurança e PL" },
      { id: "requisitos-painel", label: "Requisitos do painel sob NR-10 + NR-12" },
      { id: "erros-fiscalizacao", label: "Erros que geram autuação dupla" },
      { id: "como-resolver", label: "Como resolver corretamente" }
    ],
  content: [
      `NR-10 e NR-12 se sobrepõem em painéis elétricos de máquinas industriais. Entenda quem responde pelo quê e como evitar autuação dupla na sua adequação.

Neste guia, abordamos os pontos centrais para profissionais de manutenção, segurança do trabalho e gestores industriais no Sudeste do Brasil.`,

      `## Escopo de cada norma {#escopo-cada-norma}

A **NR-10** ("Segurança em Instalações e Serviços em Eletricidade") regula tudo que envolve **geração, transmissão, distribuição e consumo de energia elétrica**, incluindo projeto, execução, operação, manutenção, reforma e ampliação. Aplica-se desde a entrada da concessionária até o quadro elétrico do consumidor.

A **NR-12** ("Segurança no Trabalho em Máquinas e Equipamentos") regula a **segurança em máquinas e equipamentos** desde o projeto até o descarte, abrangendo proteções fixas e móveis, dispositivos de segurança, sistemas de comando, parada de emergência e arranjos físicos.

Cada uma cobre seu universo — até o momento em que se encontram dentro de um painel.`,

      `## O ponto de cruzamento: o painel {#ponto-de-cruzamento}

O **painel de comando da máquina** é onde as duas normas inevitavelmente se cruzam:

- **NR-10** exige **proteção contra choque elétrico**, IP adequado, aterramento, identificação de circuitos, sinalização, distâncias mínimas, **prontuário das instalações elétricas (PIE)** e qualificação SEP/NR-10
- **NR-12** exige **categoria de segurança** definida por análise de risco, **circuito de comando seguro**, monitoramento de chaves de proteção, **botão de emergência** com retenção mecânica, **redundância** em zonas de risco

Um painel pode estar **100% conforme NR-10 e ainda assim violar NR-12** — e vice-versa. A maioria das autuações federais em indústrias metalúrgicas vem dessa zona cinzenta.`,

      `## Categoria de segurança e PL {#categoria-seguranca}

A NR-12 estabelece que cada função de segurança deve ter sua **categoria** (B, 1, 2, 3 ou 4) e seu **Performance Level (PL a até PL e)** definidos pela **análise de risco** conforme **ABNT NBR ISO 13849-1**.

Em máquinas com risco de **amputação ou esmagamento** (prensas, injetoras, dobradeiras), a categoria mínima costuma ser **3 (PL d)**, exigindo:

- Componentes redundantes e diversificados
- Monitoramento mútuo dos canais
- Detecção da perda da função de segurança

Soluções com **chave fim-de-curso comum + relé eletromecânico convencional** **não atendem** PL d.`,

      `## Requisitos do painel sob NR-10 + NR-12 {#requisitos-painel}

| Aspecto | NR-10 | NR-12 |
| --- | --- | --- |
| Aterramento | Obrigatório | Obrigatório |
| Identificação de circuitos | Sim | Sim |
| Botão de emergência | — | Cogumelo, retenção mecânica, monitorado |
| Bimanual | — | Em prensas/injetoras quando aplicável |
| Relé de segurança | — | Categoria conforme análise de risco |
| Chaves de segurança em portas | — | Codificadas, monitoradas |
| Documento técnico | PIE | Manual + diagrama de comando seguro |
| ART | NR-10 (eletricista habilitado) | NR-12 (engenheiro mecânico/eletricista) |

A **mesma máquina** precisa de **dois conjuntos de evidências documentais** — não basta um.`,

      `## Erros que geram autuação dupla {#erros-fiscalizacao}

- Painel "adequado NR-12" sem aterramento ou IP correto → autuação NR-10
- Instalação NR-10 perfeita com botão de emergência sem retenção → autuação NR-12
- ART de eletricista assinando análise de risco mecânico → não tem atribuição
- Engenheiro mecânico fazendo PIE sem qualificação NR-10 → não tem atribuição

Em fiscalizações do **MTE no Sudeste**, ambos os auditores costumam visitar a planta — e cada um encerra seu próprio auto.`,

      `## Como resolver corretamente {#como-resolver}

1. **Análise de risco NR-12** primeiro — define a categoria e o PL
2. **Projeto do painel** com engenheiro habilitado nas duas normas
3. **Especificação dos componentes** de comando seguro (Pilz, Sick, Siemens Safety, Schmersal)
4. **Execução por eletricista qualificado SEP**
5. **Comissionamento** e **validação** das funções de segurança
6. **Emissão de PIE (NR-10) + memorial NR-12** com ARTs separadas

A **VSM Engenharia** atende projetos integrados NR-10 + NR-12 no Sudeste do Brasil. Veja [adequação NR-12](/servicos/nr12), o aprofundamento em [painel elétrico NR-12 e categoria de segurança](/blog/painel-eletrico-nr12-categoria-seguranca) e a [apreciação de risco NR-12](/blog/apreciacao-de-risco-nr12-modelo-pratico).`
    ],
};
