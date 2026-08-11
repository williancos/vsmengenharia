/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Reclassificação de monta DETRAN MG: documentos, processo, prazos e diferenças para SP. Como conduzir o processo em Belo Horizonte e interior de Minas.",
  keywords: ["media monta detran mg", "reclassificação de monta MG", "DETRAN Minas Gerais sinistro", "reclassificação Belo Horizonte"],
  keyTakeaways: [
      "DETRAN-MG aplica Resolução CONTRAN 11/1998 com portarias estaduais próprias",
      "O processo em Minas é majoritariamente presencial, com vistoria em CIRETRAN regional",
      "Prazo médio em MG: 60 a 100 dias, mais longo que em SP",
      "Laudo técnico com ART é obrigatório — engenheiro deve ter atribuição em mecânica veicular"
    ],
  toc: [
      { id: "fundamento-legal-mg", label: "Fundamento legal em Minas Gerais" },
      { id: "diferencas-sp-mg", label: "Principais diferenças em relação a SP" },
      { id: "documentos-detran-mg", label: "Documentos exigidos pelo DETRAN-MG" },
      { id: "passo-a-passo-mg", label: "Passo a passo do processo em Minas" },
      { id: "ciretran-vistoria", label: "Vistoria em CIRETRAN regional" },
      { id: "custos-prazos-mg", label: "Custos e prazos típicos em MG" },
      { id: "erros-comuns-mg", label: "Erros comuns no processo em Minas" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Posso usar laudo emitido em SP no DETRAN-MG?", answer: "Sim, desde que o engenheiro mecânico tenha registro no CREA-MG ou faça registro de visto profissional para atuação em Minas Gerais via CREA. A ART deve ser emitida com referência ao estado de Minas Gerais. Tecnicamente o laudo segue a mesma norma federal (Resolução CONTRAN), portanto o conteúdo técnico é equivalente." },
      { question: "Em Minas o processo é online ou presencial?", answer: "Majoritariamente presencial. O DETRAN-MG mantém atendimento online para algumas etapas (consultas, agendamentos), mas o protocolo do processo de reclassificação geralmente exige comparecimento na CIRETRAN do município de licenciamento, ou na sede do DETRAN-MG em Belo Horizonte." },
      { question: "Quanto tempo demora a reclassificação no DETRAN-MG?", answer: "O prazo médio observado em 2026 é de 60 a 100 dias corridos, com mediana próxima a 75 dias. Cidades menores costumam ter agendamento mais ágil para vistoria; Belo Horizonte e RMBH têm fila maior. Documentação impecável reduz o tempo significativamente." },
      { question: "Engenheiro mecânico precisa estar registrado no CREA-MG?", answer: "Sim, ou ter visto profissional do CREA-MG quando registrado em outro estado. A ART deve referenciar a atuação em Minas Gerais. Engenheiro sem essa habilitação tem o laudo automaticamente recusado pelo DETRAN-MG." }
    ],
  content: [
`A reclassificação de monta em **Minas Gerais** segue a mesma base legal federal aplicada em todo o país — Resolução CONTRAN nº 11/1998 — mas com **operacionalização específica** do DETRAN-MG, portarias estaduais próprias e particularidades de fluxo administrativo.

Quem busca reverter uma classificação de média ou grande monta em Belo Horizonte, Uberlândia, Juiz de Fora, Contagem ou cidades menores enfrenta um processo majoritariamente presencial, com vistoria em CIRETRAN regional e prazo médio mais longo que em SP. Este artigo é o guia técnico-administrativo específico para o cenário mineiro.`,

`## Fundamento legal em Minas Gerais {#fundamento-legal-mg}

A base normativa é dupla:

1. **Federal** — Resolução CONTRAN nº 11/1998 e Resolução CONTRAN nº 810/2020, que definem as categorias de monta, os critérios técnicos e o direito de reclassificação.
2. **Estadual** — Portarias e instruções de serviço do DETRAN-MG que operacionalizam o processo nas CIRETRANs.

A norma federal é equivalente em todos os estados — o que muda é a forma de protocolar, prazo de análise, exigências documentais complementares e fluxo de vistoria. Esses elementos compõem o universo prático que diferencia uma reclassificação em SP de uma em MG.`,

`## Principais diferenças em relação a SP {#diferencas-sp-mg}

| Aspecto | DETRAN-SP | DETRAN-MG |
| --- | --- | --- |
| Protocolo | Online via portal | Majoritariamente presencial |
| Local de vistoria | ITL credenciado | CIRETRAN regional |
| Prazo médio | 45 – 80 dias | 60 – 100 dias |
| Acompanhamento | Painel online em tempo real | Consulta por protocolo |
| Atendimento ao cidadão | Multicanal | Concentrado em CIRETRAN |
| Exigência de CSV | Sim | Sim |
| Autorização prévia | Pode ser exigida | Não é regra |
| Aceitação de laudo externo | Engenheiro com CREA-SP | Engenheiro com CREA-MG ou visto profissional |

A diferença mais impactante é o **registro do engenheiro mecânico**: em Minas, a ART precisa estar vinculada a profissional com habilitação no CREA-MG (próprio ou via visto profissional). Isso é frequentemente subestimado por escritórios de engenharia de outros estados.`,

`## Documentos exigidos pelo DETRAN-MG {#documentos-detran-mg}

A lista padrão para processo no DETRAN-MG inclui:

- **CRLV e CRV** atualizados, em nome do proprietário
- **BAT** original do sinistro
- **RG, CPF** do proprietário (ou contrato social se PJ)
- **Comprovante de residência** em Minas Gerais (até 90 dias)
- **Laudo técnico** com ART do CREA-MG
- **Fotos** do veículo antes, durante e após o reparo
- **Notas fiscais** das peças estruturais substituídas
- **Comprovante de pagamento** das taxas DETRAN-MG
- **Procuração** com firma reconhecida se o protocolo for feito por terceiro

Para veículos arrematados em leilão, o BAT é **obrigatório** — sua ausência inviabiliza o processo, como detalha o artigo [veículo de leilão sem BAT](/blog/veiculo-leilao-bat-pode-reclassificar).`,

`## Passo a passo do processo em Minas {#passo-a-passo-mg}

### 1. Análise técnica preliminar

Engenheiro mecânico (com CREA-MG ou visto profissional) avalia o BAT e fotos. Define viabilidade técnica e financeira. Etapa gratuita na VSM Engenharia.

### 2. Inspeção presencial com instrumentos

Vistoria detalhada com paquímetro digital, trena laser e referência de geometria do fabricante. Toda cota crítica é medida e documentada.

### 3. Emissão de laudo + ART CREA-MG

Laudo técnico com memorial de cálculo estrutural. ART registrada no CREA-MG vincula a responsabilidade.

### 4. Agendamento na CIRETRAN

O processo de reclassificação é protocolado na CIRETRAN do município de licenciamento do veículo. Em Belo Horizonte, na unidade central do DETRAN-MG.

### 5. Vistoria do DETRAN-MG

Vistoria técnica em CIRETRAN ou ITL credenciado. Agendamento prévio, com prazo variável conforme a região.

### 6. Análise documental e emissão do CSV

Aprovação resulta em Certificado de Segurança Veicular e emissão de novo CRLV reclassificado.

> **Precisa de engenheiro com CREA-MG para o seu processo em Minas?** A VSM Engenharia tem profissionais registrados e atua em todo o Sudeste, incluindo Belo Horizonte, Uberlândia, Juiz de Fora e demais municípios mineiros. [Fale pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Vistoria em CIRETRAN regional {#ciretran-vistoria}

A CIRETRAN (Circunscrição Regional de Trânsito) é a unidade descentralizada do DETRAN-MG responsável pelo atendimento ao cidadão e por vistorias. Minas Gerais tem mais de 50 CIRETRANs distribuídas pelo estado.

Em municípios menores, a vistoria é mais ágil — a fila é curta e o atendimento é geralmente no mesmo dia ou no dia seguinte ao protocolo. Em Belo Horizonte e cidades da RMBH, o agendamento pode ter espera de 15 a 30 dias.

A vistoria avalia:

- **Conformidade do laudo técnico** com o estado real do veículo
- **Numeração de chassi e motor** sem indícios de adulteração
- **Documentação fotográfica** consistente
- **Condições gerais de circulação segura**

Aprovação na vistoria libera a sequência administrativa para emissão do novo documento.`,

`## Custos e prazos típicos em MG {#custos-prazos-mg}

| Item | Faixa de valor |
| --- | --- |
| Laudo técnico + ART CREA-MG | R$ 1.500 – R$ 3.200 |
| Taxa DETRAN-MG | R$ 100 – R$ 280 |
| Vistoria CIRETRAN | incluída ou R$ 180 – R$ 350 |
| Acompanhamento | R$ 400 – R$ 800 |
| **Total típico** | **R$ 2.180 – R$ 4.630** |

Prazo: **60 a 100 dias corridos** desde a análise preliminar.

Em comparação direta com SP, o processo em MG tende a ser 15% – 25% mais longo e 5% – 10% mais caro, devido à etapa presencial obrigatória e à logística de deslocamento.`,

`## Erros comuns no processo em Minas {#erros-comuns-mg}

Os indeferimentos mais frequentes no DETRAN-MG têm causas previsíveis:

- **ART de engenheiro sem registro no CREA-MG** — recusa imediata
- **BAT ausente ou ilegível** — processo travado
- **Reparo informal sem nota fiscal** — gera exigência adicional
- **Laudo sem memorial estrutural** — pedido de complementação
- **Vistoria não realizada na CIRETRAN do município de licenciamento** — encaminhamento à correta, atrasando o processo
- **Documentação fotográfica insuficiente** — exigência de novo conjunto

Esses erros se evitam com engenheiro experiente no processo mineiro e com checklist documental antes do protocolo. O artigo [principais erros na reclassificação de monta](/blog/principais-erros-reclassificacao-monta) traz o checklist completo.

## Próximo passo {#proximo-passo}

A reclassificação em Minas Gerais é processo perfeitamente viável — desde que conduzido por profissional com habilitação local e documentação técnica robusta.

A VSM Engenharia atende todo o Sudeste, incluindo Minas Gerais, com engenheiros registrados no CREA-MG.

📞 **(11) 95453-4057**
📩 **[Solicitar análise gratuita pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**

Veja o serviço completo de [reclassificação de monta](/servicos/reclassificacao-de-monta) e o artigo específico sobre [reclassificação no DETRAN-SP](/blog/reclassificacao-monta-detran-sp) para comparação.`
    ],
};
