/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Categorias de caldeira NR-13 (A, B, C): critério PMTA, exigências de operador e inspeção. Comparativo prático. VSM Engenharia.",
  keywords: ["categoria caldeira nr13", "categorias caldeira a b c", "caldeira a nr13", "caldeira b nr13", "caldeira c nr13"],
  keyTakeaways: [
      "Categorias A, B e C são definidas pela PMTA (Pressão Máxima de Trabalho Admissível)",
      "Categoria A (PMTA > 1,96 MPa) exige operador qualificado pelo Anexo II e PLH SNQC",
      "Categoria B e C têm exigências reduzidas mas a inspeção continua obrigatória",
      "Categoria define todo o programa NR-13 — periodicidade, profissional e investimento"
    ],
  toc: [
      { id: "criterio-da-pmta", label: "Critério da PMTA" },
      { id: "categoria-a", label: "Categoria A — alta pressão" },
      { id: "categoria-b", label: "Categoria B — média pressão" },
      { id: "categoria-c", label: "Categoria C — baixa pressão" },
      { id: "comparativo-resumido", label: "Comparativo resumido" },
      { id: "exigencias-de-operador", label: "Exigências de operador" },
      { id: "investimento-por-categoria", label: "Investimento típico por categoria" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "PMTA é a pressão de operação ou a pressão máxima?", answer: "PMTA é a Pressão Máxima de Trabalho Admissível — definida no projeto pelo fabricante, considerando margens de segurança. É a pressão máxima que o equipamento pode operar com segurança, e geralmente está acima da pressão real de operação. A categorização NR-13 sempre usa PMTA, não pressão de operação." },
      { question: "Caldeira categoria C precisa de PLH com SNQC?", answer: "Não. Caldeira C exige PLH com CREA ativo e atribuição compatível, sem certificação SNQC obrigatória. Categoria B segue a mesma regra. Apenas categoria A exige certificação SNQC para o PLH. Essa diferença reflete a criticidade técnica de cada categoria." },
      { question: "Posso operar caldeira A com operador treinado para B?", answer: "Não. Operador treinado para B não cobre operação de categoria A — exige 80 horas adicionais do curso A. Operar categoria A com profissional certificado apenas para B é causa de autuação direta e lacração do equipamento. Tabela de exigência é rígida na norma." },
      { question: "Caldeira C antiga sem prontuário pode continuar operando?", answer: "Não regularmente. Equipamento sem prontuário está em situação irregular independentemente da categoria. Caminho é reconstruir prontuário com PLH responsável, ensaios complementares e nova categorização documentada. Custo é significativo mas é exigência legal para operação continuada." }
    ],
  content: [
`A **categorização de caldeiras** na NR-13 é baseada na **PMTA (Pressão Máxima de Trabalho Admissível)** e divide os equipamentos em três níveis: A, B e C. A categoria define todo o programa de inspeção — periodicidade, profissional habilitado, exigências de operador e investimento.

Saber em qual categoria está cada caldeira da sua planta é o ponto técnico que orienta o planejamento de manutenção, contratação de PLH, programação de inspeções e dimensionamento do investimento anual em NR-13.`,

`## Critério da PMTA {#criterio-da-pmta}

A PMTA (Pressão Máxima de Trabalho Admissível) é a pressão definida no projeto pelo fabricante, considerando margens de segurança técnica. Está sempre acima da pressão de operação real.

A NR-13 usa exclusivamente a PMTA para categorizar — não a pressão de operação.

Tabela de categorias:

| Categoria | Critério |
| --- | --- |
| **A** | PMTA > 1,96 MPa (~20 kgf/cm²) |
| **B** | 0,588 MPa < PMTA ≤ 1,96 MPa (~6 a 20 kgf/cm²) |
| **C** | PMTA ≤ 0,588 MPa (~6 kgf/cm²) e volume > 100 L |

Caldeiras com volume ≤ 100 L e PMTA ≤ 0,588 MPa estão fora da NR-13 (regra geral, com exceções específicas).`,

`## Categoria A — alta pressão {#categoria-a}

Caldeiras categoria A são as **mais críticas** — alta pressão, alto risco potencial, exigências técnicas mais rigorosas.

### Características

- PMTA acima de 1,96 MPa (20 kgf/cm²)
- Vapor superaquecido frequente
- Aplicação industrial pesada (cogeração, processo químico, sucroalcooleiro)
- Energia armazenada elevada

### Exigências NR-13

- **PLH com qualificação SNQC** obrigatória para inspeção
- **Operador qualificado pelo Anexo II** (80 horas + estágio)
- **Inspeção externa anual**
- **Inspeção interna a cada 3 anos**
- **Ensaios não destrutivos** complementares periódicos
- **Prontuário rigoroso** com registro contínuo automatizado
- **Sistema de combustão** monitorado em tempo real

Caldeiras categoria A demandam equipe técnica especializada e investimento anual significativo em manutenção e inspeção.`,

`## Categoria B — média pressão {#categoria-b}

Categoria B cobre caldeiras de uso industrial geral, em faixa intermediária de pressão.

### Características

- PMTA entre 0,588 MPa e 1,96 MPa (6 a 20 kgf/cm²)
- Vapor saturado frequente
- Aplicação em alimentos, têxtil, química leve, geração de vapor de processo
- Risco intermediário

### Exigências NR-13

- **PLH com CREA ativo** e atribuição compatível (sem SNQC obrigatório)
- **Operador treinado** conforme Anexo II reduzido (40 horas + estágio)
- **Inspeção externa a cada 2 anos**
- **Inspeção interna a cada 4 anos**
- **Ensaios complementares** conforme análise técnica
- **Prontuário completo**

Equilíbrio entre exigências técnicas e custo operacional. É a faixa mais comum em indústrias do Sudeste do Brasil.`,

`## Categoria C — baixa pressão {#categoria-c}

Categoria C cobre caldeiras de menor pressão e aplicações específicas.

### Características

- PMTA até 0,588 MPa (6 kgf/cm²) e volume superior a 100 L
- Aplicação em panificação, lavanderia, pequenas operações industriais
- Risco menor mas não desprezível

### Exigências NR-13

- **PLH com CREA ativo**
- **Operador treinado** conforme Anexo II ainda mais reduzido (20 horas + estágio)
- **Inspeção externa a cada 2 anos**
- **Inspeção interna a cada 6 anos**
- **Ensaios complementares** conforme análise técnica
- **Prontuário simplificado**

Cuidado: "categoria C" não significa "sem obrigação NR-13". Pequenas caldeiras de panificação frequentemente operam sem qualquer adequação — situação irregular que gera autuação direta em fiscalização.`,

`## Comparativo resumido {#comparativo-resumido}

| Aspecto | Categoria A | Categoria B | Categoria C |
| --- | --- | --- | --- |
| Critério (PMTA) | > 1,96 MPa | 0,588 a 1,96 MPa | ≤ 0,588 MPa (V > 100 L) |
| PLH | CREA + SNQC | CREA + atribuição | CREA + atribuição |
| Operador | Anexo II 80h + estágio | Anexo II 40h + estágio | Anexo II 20h + estágio |
| Inspeção externa | Anual | 2 anos | 2 anos |
| Inspeção interna | 3 anos | 4 anos | 6 anos |
| Ensaios | Frequentes | Conforme análise | Conforme análise |
| Custo anual típico | Alto | Médio | Baixo |

Periodicidades podem ser ajustadas pelo PLH com base em análise técnica e histórico — detalhamento em [periodicidade NR-13](/blog/nr13-periodicidade-inspecoes).`,

`## Exigências de operador {#exigencias-de-operador}

Diferença crítica entre categorias:

| Categoria | Curso |
| --- | --- |
| A | 80 horas teoria + 1 mês estágio supervisionado em caldeira A |
| B | 40 horas teoria + 1 mês estágio supervisionado em caldeira B |
| C | 20 horas teoria + estágio reduzido em caldeira C |

Operador certificado para uma categoria **não cobre** automaticamente categoria superior. Operador A cobre A, B e C; operador B cobre B e C; operador C cobre apenas C.

Detalhamento em [treinamento NR-13 para operador de caldeira](/blog/treinamento-nr13-operador-caldeira-prazo).

> **Suas caldeiras estão corretamente categorizadas?** A VSM Engenharia faz inventário, classificação e prontuário NR-13 em todo o Sudeste. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Investimento típico por categoria {#investimento-por-categoria}

Custos anuais aproximados em SP para uma caldeira de cada categoria:

| Categoria | Inspeção externa | Inspeção interna | Treinamento (anual) | Total típico |
| --- | --- | --- | --- | --- |
| **A** | R$ 8.000 – R$ 15.000 | R$ 25.000 – R$ 50.000 (a cada 3 anos) | R$ 5.000 – R$ 12.000 | Alto |
| **B** | R$ 5.000 – R$ 10.000 (a cada 2 anos) | R$ 15.000 – R$ 25.000 (a cada 4 anos) | R$ 3.000 – R$ 6.000 | Médio |
| **C** | R$ 2.500 – R$ 5.000 (a cada 2 anos) | R$ 6.000 – R$ 12.000 (a cada 6 anos) | R$ 1.500 – R$ 3.000 | Baixo |

Esses custos são parte do orçamento operacional da empresa que opera caldeira a vapor. Custo de não conformidade (multa + interdição + indenização pós-acidente) é múltiplas ordens de grandeza maior.

## Próximo passo {#proximo-passo}

Categorização correta de caldeira é o ponto técnico que orienta todo o programa NR-13 da planta. Erro nessa fase compromete cronograma de inspeção, contratação de PLH e investimento anual.

A VSM Engenharia faz inventário, categorização e programa NR-13 completo em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [inspeção NR-13](/servicos/nr13) e o artigo [caldeiras flamotubulares vs aquatubulares](/blog/caldeiras-flamotubulares-aquatubulares).

Veja também [inspeção NR-13 em caldeiras: flamotubulares e aquatubulares](/blog/caldeiras-flamotubulares-aquatubulares).`
    ],
};
