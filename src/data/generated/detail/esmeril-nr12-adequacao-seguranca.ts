/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Esmeril NR-12: requisitos de protetor, apoio regulável, anteparo, aterramento e inspeção. Como adequar conforme a norma. VSM Engenharia.",
  keywords: ["esmeril nr12", "esmeril de bancada nr12", "adequação esmeril", "protetor esmeril"],
  keyTakeaways: [
      "Esmeril é o equipamento mais autuado em NR-12 — alta frequência em pequenas oficinas",
      "Itens obrigatórios: protetor de rebolo, anteparo transparente, apoio regulável a 3 mm, aterramento",
      "Apoio com folga maior que 3 mm é causa direta de acidentes graves nas mãos",
      "Inspeção mensal de rebolo, protetor e fixação é parte do programa de manutenção NR-12"
    ],
  toc: [
      { id: "esmeril-na-nr12", label: "Esmeril na NR-12" },
      { id: "itens-obrigatorios", label: "Itens obrigatórios" },
      { id: "protetor-do-rebolo", label: "Protetor do rebolo" },
      { id: "anteparo-transparente", label: "Anteparo transparente" },
      { id: "apoio-regulavel", label: "Apoio regulável" },
      { id: "aterramento", label: "Aterramento elétrico" },
      { id: "inspecao-periodica", label: "Inspeção periódica" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Por que esmeril é tão autuado em NR-12?", answer: "Por três razões: presença em quase toda oficina mecânica do país, frequência de acidentes graves com olho e mão, e simplicidade da inspeção pelo auditor (basta olhar). Itens como anteparo ausente, apoio com folga e protetor com abertura excessiva são identificáveis em segundos. Pequenas oficinas frequentemente operam esmeril sem qualquer adequação." },
      { question: "Qual a folga máxima do apoio do esmeril?", answer: "3 mm entre o apoio e a face do rebolo. Folga maior permite que a peça seja puxada para dentro, levando a mão do operador contra o rebolo em rotação. Esse é o mecanismo mais comum de acidente grave em esmeril. A regulagem é parte da inspeção diária pré-operacional e deve ser refeita conforme desgaste do rebolo." },
      { question: "Anteparo de esmeril precisa ser de policarbonato?", answer: "Sim, ou material equivalente certificado contra impacto. Acrílico simples e vidro comum estilhaçam com o impacto de fragmento de rebolo, gerando lesão secundária. Policarbonato laminado ou de espessura adequada resiste e mantém integridade. Anteparo deve ser substituído quando perder transparência ou apresentar trinca." },
      { question: "Esmeril de bancada antigo pode ser adequado?", answer: "Sim. Adequação envolve instalação de protetor de rebolo dimensionado, anteparo de policarbonato, apoio regulável, aterramento elétrico e procedimento de troca de rebolo documentado. Investimento típico: R$ 400 a R$ 1.200 por esmeril, incluindo ART do projeto. Custo baixo frente à exposição em fiscalização e ao risco de acidente." }
    ],
  content: [
`O **esmeril** é o equipamento que mais aparece em autuações NR-12 no Brasil. Razão simples: está em quase toda oficina mecânica, frequentemente sem nenhuma adequação, e os erros são identificáveis em segundos por auditor experiente.

Adequar um esmeril à NR-12 custa entre R$ 400 e R$ 1.200, prazo de execução de 1 a 3 dias por equipamento. O custo é proporcionalmente irrisório frente ao risco de acidente grave (lesão ocular, mão dilacerada) e à exposição em fiscalização. Este artigo apresenta todos os itens exigidos e a sequência de adequação.`,

`## Esmeril na NR-12 {#esmeril-na-nr12}

A NR-12 trata o esmeril em itens diversos (proteções, distâncias, comando) e o equipamento aparece também em listagens de máquinas críticas para verificação. Embora não tenha anexo específico, é abrangido pelos:

- Itens **12.38 a 12.50** (proteções e dispositivos)
- Anexo **I** (distâncias de segurança)
- Anexo **II** (treinamento)

A combinação de **alta rotação** (3.000 a 3.600 rpm), **abrasivo frágil** (rebolo cerâmico) e **exposição direta do operador** torna o esmeril equipamento de risco grave — categoria que justifica adequação imediata em qualquer planta.`,

`## Itens obrigatórios {#itens-obrigatorios}

Checklist completo para esmeril conforme NR-12:

| Item | Requisito |
| --- | --- |
| **Protetor do rebolo** | Cobre 75% mínimo da circunferência |
| **Anteparo transparente** | Policarbonato laminado, regulável |
| **Apoio de peça** | Regulável, folga máxima 3 mm |
| **Aterramento** | Conectado ao SPDA da planta |
| **Botoeira de parada** | Acessível e em condição operacional |
| **Sinalização** | Identificação do equipamento e do risco |
| **Manual** ou procedimento operacional | Disponível ao operador |
| **Treinamento** | Operador treinado conforme Anexo II |
| **Inspeção pré-operacional** | Procedimento documentado |
| **ART** | Do projeto/adequação |

A ausência de qualquer item gera autuação. A combinação de vários ausentes é causa frequente de **interdição imediata** do equipamento.`,

`## Protetor do rebolo {#protetor-do-rebolo}

O **protetor do rebolo** envolve a parte superior e traseira do disco abrasivo, cobrindo no mínimo **75% da circunferência**. Função:

- Conter fragmentos em caso de quebra do rebolo
- Limitar contato acidental do operador
- Direcionar projeção de fagulhas para baixo (longe dos olhos)

Especificações:

- **Material**: chapa de aço dobrada (1,5 a 3 mm)
- **Abertura frontal**: máximo 65 mm para esmeril de bancada padrão
- **Fixação**: parafuso M8+ com porca autotravante
- **Distância** entre protetor e disco: máximo 6 mm na zona ativa

Protetor com abertura excessiva ou folga entre disco e protetor é equivalente a ausência de protetor.`,

`## Anteparo transparente {#anteparo-transparente}

O **anteparo** protege os olhos do operador contra projeção de fagulhas e fragmentos. Especificações:

- **Material**: policarbonato laminado certificado contra impacto
- **Espessura mínima**: 3 mm
- **Regulagem**: ajustável conforme posição da peça
- **Distância ao olho**: tipicamente 150 a 250 mm
- **Inspeção**: substituir quando perder transparência ou apresentar trinca

Acrílico simples, vidro comum ou plástico ABS **não atendem** ao requisito. Em fiscalização, anteparo de acrílico simples é tratado como ausência.

> **Sua planta tem esmeris em uso sem adequação?** A VSM Engenharia faz adequação NR-12 de esmeris em todo o Sudeste. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Apoio regulável {#apoio-regulavel}

O **apoio de peça** é o elemento sobre o qual o operador apoia a peça em afiação. Requisito crítico:

- **Folga máxima ao rebolo**: 3 mm
- **Regulagem**: ajustável conforme desgaste do rebolo
- **Material**: aço carbono dimensionado
- **Fixação**: parafuso de fixação acessível, sem ferramenta especial

A folga máxima de 3 mm é o item mais determinante. Folga maior permite que a peça seja **puxada para dentro pelo rebolo em rotação**, arrastando a mão do operador. Esse é o mecanismo de **80%** dos acidentes graves em esmeril de bancada.

Inspeção pré-operacional diária deve incluir verificação da folga e ajuste quando necessário.`,

`## Aterramento elétrico {#aterramento}

NR-12 e NR-10 exigem aterramento adequado do esmeril:

- **Conexão à malha** de aterramento da planta
- **Condutor de proteção** (PE) dimensionado
- **Equipotencialização** com a estrutura metálica
- **Medição periódica** da resistência de aterramento

Aterramento inadequado expõe ao **risco de choque elétrico** em caso de falha de isolação. Em ambientes úmidos (oficinas com piso molhado, ambientes externos), o risco se eleva. Procedimento de medição de aterramento é parte do programa de manutenção NR-10/12.`,

`## Inspeção periódica {#inspecao-periodica}

Programa de inspeção típico para esmeril:

| Frequência | Itens verificados |
| --- | --- |
| Pré-operacional (diária) | Folga do apoio, anteparo limpo, protetor fixo |
| Semanal | Estado do rebolo (trinca, equilíbrio), aperto de parafusos |
| Mensal | Resistência de aterramento, isolamento dos cabos |
| Anual | Inspeção técnica completa com laudo, troca preventiva do rebolo |

Procedimento documentado de inspeção é parte do programa NR-12 da planta. Inspeção registrada em planilha demonstra cumprimento à fiscalização.

## Próximo passo {#proximo-passo}

Esmeril adequado custa R$ 400 a R$ 1.200 por equipamento. Não adequado custa em multa, processo trabalhista e — pior — em acidente grave evitável. A decisão é simples.

A VSM Engenharia faz adequação completa de esmeris (protetor + anteparo + apoio + aterramento + ART + treinamento) em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [NR-12](/servicos/nr12) e o artigo [adequação NR-12 passo a passo](/blog/adequacao-nr12-passo-a-passo).`
    ],
};
