/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Laudo NR-13: conteúdo técnico obrigatório, profissional habilitado (PLH), custos em SP e validade. Guia VSM Engenharia.",
  keywords: ["laudo nr13", "laudo técnico nr13", "quanto custa laudo nr13", "quem emite laudo nr13"],
  keyTakeaways: [
      "Laudo NR-13 é o documento técnico que atesta integridade do equipamento sob pressão",
      "Privativo de Profissional Legalmente Habilitado (PLH) com CREA e SNQC quando aplicável",
      "Custos em SP: R$ 1.800 a R$ 25.000 por equipamento, conforme categoria e ensaios",
      "Validade definida pelo PLH; vinculada ao prontuário e à periodicidade da norma"
    ],
  toc: [
      { id: "o-que-e-laudo-nr13", label: "O que é o laudo NR-13" },
      { id: "quem-pode-emitir", label: "Quem pode emitir o laudo" },
      { id: "conteudo-obrigatorio", label: "Conteúdo técnico obrigatório" },
      { id: "ensaios-no-laudo", label: "Ensaios complementares no laudo" },
      { id: "custos-tipicos-sp", label: "Custos típicos em São Paulo" },
      { id: "validade-do-laudo", label: "Validade do laudo" },
      { id: "erros-que-invalidam", label: "Erros que invalidam o laudo" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Quem pode assinar laudo NR-13?", answer: "Profissional Legalmente Habilitado (PLH): engenheiro mecânico, naval, químico ou de áreas afins com CREA ativo e atribuição compatível. Para caldeiras categoria A e vasos categoria I, é exigida certificação SNQC (Sistema Nacional de Qualificação e Certificação) conforme Anexo III. Técnico não pode assinar laudo NR-13 em nenhuma hipótese." },
      { question: "Qual a validade do laudo NR-13?", answer: "A validade é definida pelo PLH com base na análise técnica do equipamento, histórico de inspeções e categoria. Para vasos categoria V, pode chegar a 5 anos para inspeção externa e 10 anos para interna. Para caldeira categoria A, inspeção externa é anual. A validade vincula o equipamento ao prontuário e à próxima inspeção programada." },
      { question: "Laudo NR-13 emitido por engenheiro sem SNQC vale para categoria A?", answer: "Não. Caldeira categoria A (PMTA acima de 1,96 MPa) exige PLH com qualificação SNQC reconhecida — formação e exame específicos sob a Fundação Vanzolini ou outra entidade certificadora. Laudo emitido sem essa qualificação é tecnicamente inválido para categoria A e pode ser questionado em fiscalização ou em sinistro." },
      { question: "Custo do laudo inclui os ensaios não destrutivos?", answer: "Varia. Cotação básica geralmente inclui visual externo + interno + emissão de laudo + ART. Ensaios não destrutivos (ultrassom, partícula magnética, líquido penetrante, radiografia) são frequentemente cotados separadamente, conforme o escopo definido na inspeção. Cotação detalhada deve discriminar cada item." }
    ],
  content: [
`O **laudo NR-13** é o documento técnico que formaliza a inspeção de caldeiras, vasos de pressão e tubulações industriais. Atesta a integridade do equipamento, sua aptidão para operar e define o prazo até a próxima inspeção. É um dos documentos de **maior peso jurídico** no ambiente industrial — em caso de acidente, é a primeira peça examinada por perito, juiz e autoridades.

Este artigo apresenta o conteúdo técnico obrigatório, o profissional habilitado para emitir, os custos típicos em SP e os erros mais comuns que invalidam laudos. Para detalhamento de preços por equipamento, ver também [quanto custa laudo NR-13 em SP](/blog/quanto-custa-laudo-nr13-sao-paulo).`,

`## O que é o laudo NR-13 {#o-que-e-laudo-nr13}

O laudo NR-13 é o **relatório técnico formal** de inspeção, emitido por **Profissional Legalmente Habilitado (PLH)** após execução completa do procedimento de inspeção. Documenta:

- O equipamento avaliado (identificação completa)
- O escopo da inspeção (externa, interna, com ensaios)
- A metodologia aplicada
- Os resultados encontrados
- A conclusão técnica (apto / apto com restrições / não apto)
- O prazo para próxima inspeção

Acompanhado obrigatoriamente de **ART** (Anotação de Responsabilidade Técnica) do CREA e integrado ao **prontuário** do equipamento.

Laudo sem ART é tecnicamente nulo; prontuário sem laudos atualizados é vulnerabilidade jurídica direta.`,

`## Quem pode emitir o laudo {#quem-pode-emitir}

Privativo de **PLH** (Profissional Legalmente Habilitado). Critério de habilitação:

| Equipamento | Habilitação mínima |
| --- | --- |
| Caldeira categoria A (PMTA > 1,96 MPa) | Engenheiro mecânico/naval com CREA + **certificação SNQC** (Anexo III) |
| Vaso de pressão categoria I | Engenheiro mecânico com CREA + **certificação SNQC** |
| Caldeira categoria B/C | Engenheiro mecânico/naval com CREA e atribuição |
| Vaso categoria II a V | Engenheiro mecânico com CREA e atribuição |
| Tubulações | Engenheiro mecânico/naval com CREA e atribuição |

Certificação SNQC envolve formação técnica, prova teórica e prática, com renovação periódica. É exigência específica para equipamentos críticos.

**Técnico de segurança do trabalho** não pode assinar laudo NR-13 em nenhuma hipótese — é exclusividade do engenheiro habilitado.`,

`## Conteúdo técnico obrigatório {#conteudo-obrigatorio}

Estrutura padrão do laudo:

| Seção | Conteúdo |
| --- | --- |
| **Identificação** | Equipamento (marca, modelo, série, ano), instalação, proprietário |
| **Categoria** | Conforme NR-13 (A/B/C ou I a V) |
| **Histórico** | Resumo das inspeções anteriores, reparos, modificações |
| **Escopo** | Tipo de inspeção (externa, interna, com ensaios) |
| **Metodologia** | Procedimentos aplicados, normas de referência |
| **Itens inspecionados** | Lista detalhada com condições |
| **Ensaios complementares** | Resultados de END, medições, fotos |
| **Não conformidades** | Identificadas, com classificação de criticidade |
| **Plano de ação** | Recomendações para correção |
| **Conclusão** | Apto / Apto com restrições / Não apto |
| **Prazo próxima inspeção** | Definido pelo PLH com fundamentação |
| **ART** | Anexa, registrada no CREA |
| **Assinatura PLH** | Identificação completa, CREA, SNQC quando aplicável |

Laudos sem qualquer um desses elementos são frágeis em auditoria e em sinistro.`,

`## Ensaios complementares no laudo {#ensaios-no-laudo}

Ensaios não destrutivos integrados ao laudo:

| Ensaio | Quando aparece no laudo |
| --- | --- |
| Espessura por ultrassom | Sempre em vasos com risco de corrosão |
| Ultrassom de solda | Em soldas suspeitas ou pós-reparo |
| Líquido penetrante | Em soldas externas críticas |
| Partícula magnética | Em soldas de aço carbono |
| Radiografia industrial | Em soldas com necessidade de análise definitiva |
| Teste hidrostático | Pós-reparo ou conforme periodicidade |
| Estanqueidade | Quando há suspeita de vazamento |

Cada ensaio é executado por **profissional ABENDI Nível 2+** e o relatório técnico é anexo ao laudo. O PLH integra os resultados e emite conclusão.

Detalhamento técnico em [ensaios não destrutivos industriais](/blog/ensaios-nao-destrutivos-end-industriais) e [teste hidrostático](/blog/teste-hidrostatico-vaso-pressao-quando-fazer).`,

`## Custos típicos em São Paulo {#custos-tipicos-sp}

Faixas observadas em SP 2026:

| Equipamento + escopo | Faixa de custo |
| --- | --- |
| Vaso categoria V (externa + interna + ART) | R$ 1.800 – R$ 3.500 |
| Vaso categoria III/IV (com ensaios básicos) | R$ 3.500 – R$ 6.500 |
| Vaso categoria I/II (com ensaios completos) | R$ 6.500 – R$ 12.000 |
| Caldeira flamotubular C (externa + interna) | R$ 3.500 – R$ 6.000 |
| Caldeira flamotubular B (com ensaios) | R$ 6.000 – R$ 10.000 |
| Caldeira aquatubular A | R$ 10.000 – R$ 25.000+ |
| Tubulação por metro linear | R$ 80 – R$ 200/m |

Cotação detalhada deve discriminar: visual, ensaios incluídos, número de pontos de espessura, presença de PLH com SNQC, ART, emissão do laudo. Cotações genéricas escondem custos.

> **Precisa de laudo NR-13 com PLH qualificado?** A VSM Engenharia emite em todo o Sudeste com cotação detalhada. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Validade do laudo {#validade-do-laudo}

A validade do laudo NR-13 **não é fixa universal** — é definida pelo PLH com base em:

- **Categoria do equipamento** (norma fixa periodicidade base)
- **Histórico de inspeções** anteriores
- **Condições operacionais** observadas
- **Análise técnica de integridade**

Periodicidades base estão em [periodicidade NR-13](/blog/nr13-periodicidade-inspecoes). O PLH pode **antecipar** quando há sinais de degradação ou **adiar dentro da norma** quando histórico permite.

Adiamento sem justificativa técnica documentada no prontuário é causa de autuação direta em fiscalização.`,

`## Erros que invalidam o laudo {#erros-que-invalidam}

Pontos mais autuados em auditoria:

- **ART de profissional sem SNQC** em equipamento categoria A/I
- **Inspeção apenas visual** quando ensaios complementares eram exigidos
- **Laudo sem fundamentação** técnica das conclusões
- **Prontuário não atualizado** com laudos anteriores
- **Periodicidade adiada** sem justificativa
- **Ensaios sem rastreabilidade** (relatório END genérico)
- **Documentação fotográfica insuficiente**
- **Cópia de laudo anterior** sem reinspeção real

Em casos extremos, são vistos laudos emitidos por escritórios sem visita técnica real ao equipamento — fraude grave com consequências penais.

## Próximo passo {#proximo-passo}

Laudo NR-13 robusto é o documento de proteção patrimonial e jurídica em qualquer cenário de fiscalização, sinistro ou auditoria de cliente. PLH qualificado e cotação detalhada são o caminho.

A VSM Engenharia emite laudos NR-13 com PLH SNQC em todo o Sudeste, com cotação detalhada por equipamento.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [inspeção NR-13](/servicos/nr13) e o artigo [quanto custa laudo NR-13 em SP](/blog/quanto-custa-laudo-nr13-sao-paulo).

Veja também [empresa sem prontuário NR-13](/blog/sem-prontuario-nr13-o-que-acontece) e [inspeção NR-13 inicial, periódica e extraordinária](/blog/inspecao-nr13-inicial-periodica-extraordinaria).

Antes de contratar, veja [como escolher uma empresa de inspeção NR-13](/blog/empresa-de-inspecao-nr13-como-escolher).`
    ],
};
