/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Entenda quanto custa um laudo NR-13 em São Paulo, quais fatores influenciam o preço e como evitar os erros mais comuns ao contratar inspeção de caldeiras e va",
  keyTakeaways: ["Preço médio de laudo NR-13 em SP varia de R$ 1.800 a R$ 12.000 por equipamento", "Categoria do equipamento, ensaios necessários e logística são os principais fatores", "Desconfie de orçamentos muito abaixo da média — geralmente faltam ensaios obrigatórios", "Profissional habilitado e ART do CREA são inegociáveis"],
  toc: [
      { id: "faixa-de-precos", label: "Faixa de preços em SP" },
      { id: "o-que-influencia", label: "O que influencia o preço" },
      { id: "categoria-equipamento", label: "Categoria do equipamento" },
      { id: "ensaios", label: "Ensaios não destrutivos exigidos" },
      { id: "riscos-orçamento-baixo", label: "Riscos do orçamento muito baixo" },
      { id: "como-cotar", label: "Como cotar corretamente" }
    ],
  content: [
      `Entenda quanto custa um laudo NR-13 em São Paulo, quais fatores influenciam o preço e como evitar os erros mais comuns ao contratar inspeção de caldeiras e vasos de pressão.

Neste guia, abordamos os pontos centrais para profissionais de manutenção, segurança do trabalho e gestores industriais no Sudeste do Brasil.`,

      `## Faixa de preços em SP {#faixa-de-precos}

Em São Paulo, capital e Grande SP, os valores médios de mercado em 2026 para laudos NR-13 ficam nas seguintes faixas:

| Equipamento | Categoria | Preço médio |
| --- | --- | --- |
| Vaso de pressão pequeno (compressor) | V | R$ 1.800 – 3.000 |
| Vaso de pressão médio | III/IV | R$ 3.500 – 6.500 |
| Vaso de pressão grande | I/II | R$ 6.500 – 12.000 |
| Caldeira flamotubular pequena | C | R$ 3.500 – 6.000 |
| Caldeira flamotubular média | B | R$ 6.000 – 10.000 |
| Caldeira aquatubular | A | R$ 10.000 – 25.000+ |
| Tubulações industriais | — | R$ 80 – 200/metro |

Esses valores **incluem** o laudo, a ART e a vistoria. **Não incluem** ensaios não destrutivos especiais, teste hidrostático ou paradas programadas — esses são à parte.`,

      `## O que influencia o preço {#o-que-influencia}

Cinco fatores determinam o preço final:

1. **Categoria do equipamento** (A a E em caldeiras, I a V em vasos)
2. **Ensaios não destrutivos** necessários (UT, PM, LP, espessura)
3. **Acessibilidade** (precisa montar andaime? remover isolamento?)
4. **Localização** (Grande SP vs interior vs litoral)
5. **Estado do prontuário** (atualizar prontuário antigo é mais caro do que dar continuidade)

Empresas que **mantêm prontuário em dia** pagam, em média, **20–30% menos** do que aquelas que precisam reconstruir documentação.`,

      `## Categoria do equipamento {#categoria-equipamento}

A categoria do equipamento é definida pela **NR-13** segundo:

- **Caldeiras:** pressão de operação (A: PMTA > 1,96 MPa; B: 0,588 a 1,96; C: até 0,588)
- **Vasos:** classe de fluido + grupo de potencial de risco (I a V)

Equipamentos categoria A e I exigem **profissional habilitado conforme NR-13 anexo II**, com qualificação reconhecida pelo SNQC, e ensaios mais complexos. Por isso o preço sobe.`,

      `## Ensaios não destrutivos exigidos {#ensaios}

A NR-13 exige inspeção visual interna e externa, mais ensaios complementares conforme a condição:

| Ensaio | Quando é obrigatório | Custo médio em SP |
| --- | --- | --- |
| Espessura por ultrassom | Vasos com risco de corrosão | R$ 800 – 2.500 |
| Ultrassom de solda | Trincas suspeitas | R$ 1.200 – 4.000 |
| Líquido penetrante | Soldas externas | R$ 600 – 2.000 |
| Partículas magnéticas | Soldas em aço carbono | R$ 800 – 2.500 |
| Teste hidrostático | Pós-reparo | R$ 2.500 – 8.000 |

Um vaso categoria II que precise de **espessura + UT de solda + LP** pode adicionar R$ 3.000–6.000 ao laudo base.`,

      `## Riscos do orçamento muito baixo {#riscos-orçamento-baixo}

Quando alguém oferece laudo de caldeira flamotubular categoria B por R$ 1.500, **algo está errado**:

- ART não baixada (ou em nome de profissional sem atribuição)
- Inspeção apenas visual, sem ensaios obrigatórios
- Cópia de prontuário antigo sem revisão
- Profissional sem qualificação SNQC quando exigido

Em fiscalização, esses laudos são invalidados, a empresa fica autuada e ainda paga **outro engenheiro** para refazer o trabalho. Custou três vezes.`,

      `## Como cotar corretamente {#como-cotar}

Peça orçamento detalhado com:

- ✅ Engenheiro responsável e número do CREA
- ✅ Lista exata de ensaios incluídos
- ✅ Prazo de entrega do laudo e prontuário
- ✅ ART já incluída
- ✅ Cláusula de revisão pós-correções

A **VSM Engenharia** atende em toda a Grande São Paulo e Sudeste, com orçamento detalhado em 24h. Veja [Inspeção NR-13](/servicos/nr13) ou solicite [consultoria gratuita](/servicos/consultoria-gratuita). Aprofunde em [laudo NR-13: quem pode emitir e o que contém](/blog/laudo-nr13-quanto-custa-quem-pode-emitir) e [inspeção NR-13: tipos e procedimento](/blog/inspecao-nr13-tipos-periodicidade-procedimento).

Veja também a página de [inspeção NR-13 em São Paulo](/servicos/inspecao-nr13-sao-paulo) e [como escolher uma empresa de inspeção NR-13](/blog/empresa-de-inspecao-nr13-como-escolher).`
    ],
};
