/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Grande monta tem recuperação? Análise técnica de quando a baixa definitiva pode ser revista por laudo de engenharia e como contestar no DETRAN.",
  keywords: ["grande monta", "grande monta recuperação", "grande monta reclassificação", "baixa definitiva veículo"],
  keyTakeaways: [
      "Grande monta é, em regra, irreversível — mas há três cenários de exceção técnica",
      "Classificações excessivamente rigorosas no BAT representam ~15% dos casos de grande monta",
      "Laudo de engenheiro mecânico com medições estruturais é o único caminho de reversão",
      "Quando a recuperação é inviável, sucata legal vale mais que processo perdido"
    ],
  toc: [
      { id: "o-que-e-grande-monta", label: "O que é grande monta" },
      { id: "tres-casos-de-revisao", label: "Os 3 casos em que a grande monta pode ser revista" },
      { id: "por-que-classificacoes-erradas", label: "Por que classificações erradas acontecem" },
      { id: "laudo-recuperabilidade", label: "O papel do laudo técnico de recuperabilidade" },
      { id: "grande-monta-vs-perda-total", label: "Grande monta vs perda total contratual" },
      { id: "quando-nao-compensa", label: "Quando NÃO compensa tentar reverter" },
      { id: "passo-a-passo", label: "Passo a passo da contestação técnica" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Toda grande monta é definitiva?", answer: "Como regra, sim. A grande monta significa danos estruturais irreparáveis e gera baixa definitiva no registro. Mas existem três cenários de exceção técnica em que a classificação pode ser revista: classificação excessivamente rigorosa pelo agente, dano superestimado pela aparência externa, e veículos onde a geometria estrutural está, na verdade, dentro de tolerâncias. Esses casos exigem laudo de engenheiro mecânico." },
      { question: "Veículo de grande monta pode ser reclassificado para média?", answer: "Tecnicamente possível, mas raro. Exige laudo robusto que demonstre que a estrutura original foi indevidamente avaliada como irreparável quando, de fato, comporta reparo. O processo é mais difícil que reclassificação média → pequena, pois reverte uma decisão administrativa de baixa definitiva já consumada." },
      { question: "Quanto custa tentar reverter uma grande monta?", answer: "O investimento típico em SP varia de R$ 3.500 a R$ 8.000 (laudo robusto + ART + acompanhamento), além de eventuais custas administrativas no DETRAN. Por isso, a análise preliminar é decisiva: gastar R$ 5 mil em causa perdida é prejuízo dobrado. A VSM Engenharia faz análise gratuita do BAT antes de qualquer compromisso." },
      { question: "Posso comprar um veículo de grande monta em leilão para reclassificar?", answer: "Não pela via comum. A Resolução CONTRAN veda reclassificação de veículos arrematados em leilão sem BAT — e a maioria dos leilões de grande monta não disponibiliza o BAT original. Esse é o erro mais comum que gera prejuízos a quem tenta a operação como negócio." }
    ],
  content: [
`A **grande monta** é o limite documental: a classificação que retira o veículo do registro ativo do DETRAN e o transforma, oficialmente, em sucata. Em regra, é **irreversível**. Mas a regra tem exceções — e entendê-las pode representar a diferença entre recuperar um veículo de R$ 50 mil ou aceitar um prejuízo total.

Cerca de **15% das classificações de grande monta** atribuídas em ocorrências são tecnicamente questionáveis. Não porque os agentes sejam negligentes, mas porque a avaliação visual no local do acidente superestima danos com frequência: chaparia amassada parece estrutura comprometida; airbags acionados parecem rompimento de chassis; incêndio pequeno parece dano térmico generalizado.

Este artigo explica os três cenários técnicos em que a grande monta pode ser revista, como o laudo de engenharia conduz a contestação e quando o caminho mais inteligente é aceitar a perda e seguir adiante.`,

`## O que é grande monta {#o-que-e-grande-monta}

**Grande monta** é a classificação de **danos estruturais irreparáveis** atribuída a veículos cujo comprometimento físico inviabiliza, do ponto de vista técnico, a recuperação segura. A consequência administrativa é a **baixa definitiva** no DETRAN.

Critérios técnicos que justificam a classificação:

- Deformação severa do monobloco com perda da geometria de referência
- Rompimento de pontos críticos (junções coluna A/painel corta-fogo, coluna B/teto)
- Incêndio com afetação térmica generalizada do metal estrutural
- Submersão prolongada com corrosão estrutural irreversível
- Acionamento total das zonas de deformação programada com colapso

Veículos baixados como grande monta:

- **Não podem voltar a circular** pela via comum
- **Têm o registro cancelado**
- **São vendidos como sucata** ou peças de reposição
- **Recebem certidão de baixa** no lugar do CRLV

A baixa é registrada de forma **definitiva** — o que torna a reversão administrativamente mais difícil que uma reclassificação de média monta. Mas não impossível.`,

`## Os 3 casos em que a grande monta pode ser revista {#tres-casos-de-revisao}

### Caso 1 — Classificação excessivamente rigorosa pelo agente

Avaliação visual em campo, sem instrumentos técnicos, leva a superestimação de danos. Veículos com chaparia muito amassada são frequentemente classificados como grande monta quando, tecnicamente, apresentam estrutura recuperável dentro de tolerâncias.

Indícios desse cenário:

- Acidente em baixa velocidade com grande deformação aparente (chaparia "absorveu" o impacto)
- Airbags não acionados estruturalmente
- Pontos de fixação de suspensão e motor visualmente intactos sob deformação externa
- Painel corta-fogo preservado

### Caso 2 — Incêndio localizado mal avaliado

Incêndios em motor, painel ou compartimento de carga frequentemente recebem classificação de grande monta pelo aspecto externo. Quando a propagação foi controlada antes de afetar metal estrutural, o veículo é, tecnicamente, média ou pequena monta.

Análise por engenheiro mecânico identifica:

- Limite real da afetação térmica
- Integridade da estrutura sob a fuligem
- Componentes recuperáveis vs substituíveis

### Caso 3 — Geometria estrutural dentro de tolerâncias

Em casos de capotamento ou colisão lateral, a aparência externa sugere comprometimento estrutural. Medições precisas com escâner 3D ou paquímetro digital, comparadas com cotas do fabricante, frequentemente confirmam que **as cotas críticas estão dentro de tolerâncias normativas** — invalidando a classificação inicial.

Esse cenário é o mais comum quando a contestação técnica vence.`,

`## Por que classificações erradas acontecem {#por-que-classificacoes-erradas}

A taxa de erro nas classificações de grande monta tem causas estruturais — e nenhuma delas envolve má-fé do agente:

| Causa | Como gera erro |
| --- | --- |
| **Avaliação visual sem instrumentos** | Não há trena, paquímetro nem escâner no local da ocorrência |
| **Pressa do atendimento** | Agente precisa liberar a via, atender outras ocorrências |
| **Conservadorismo** | Na dúvida, classifica para cima — protege o agente de responsabilização |
| **Ausência de cota de referência** | Agente não tem manual do fabricante para comparar |
| **Treinamento insuficiente** | Curso de classificação técnica não é parte do treinamento básico |

A consequência: classificações **conservadoramente rigorosas** são a norma. O sistema protege o agente da responsabilização por subestimar, mas penaliza o proprietário com superestimação.

A revisão técnica posterior, feita por engenheiro com instrumentos, é o mecanismo legal de correção dessa assimetria.

> **Recebeu grande monta e suspeita de avaliação rigorosa demais?** Envie BAT, fotos e localização do veículo. Análise técnica preliminar gratuita em até 48h pela [VSM Engenharia](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## O papel do laudo técnico de recuperabilidade {#laudo-recuperabilidade}

Para reverter uma grande monta, **o laudo precisa fazer mais do que opinião técnica**. Precisa demonstrar, com números e referências, que a classificação inicial é insustentável.

Elementos obrigatórios:

- **Levantamento dimensional completo** — todas as cotas críticas do veículo medidas
- **Comparação com geometria do fabricante** — cota medida × cota nominal × tolerância
- **Avaliação dos pontos de ancoragem** — suspensão, motor, câmbio, cintos
- **Documentação fotográfica georreferenciada** — cada ponto medido fotografado com referência espacial
- **Memorial de cálculo estrutural** — fundamentação matemática da conclusão
- **ART de engenheiro mecânico** com atribuição plena em mecânica veicular
- **Notas fiscais de peças substituídas** quando houve reparo prévio

A profundidade do memorial é o que diferencia laudo aprovado de laudo reprovado — tema central do artigo [memorial de cálculo estrutural](/blog/memorial-de-calculo-reclassificacao-monta).

Sem esses elementos, qualquer contestação de grande monta é tecnicamente frágil e quase certamente reprovada em vistoria.`,

`## Grande monta vs perda total contratual {#grande-monta-vs-perda-total}

Cuidado com a confusão frequente entre dois conceitos distintos:

| Conceito | O que é | Quem decide |
| --- | --- | --- |
| **Grande monta** | Classificação técnica do dano estrutural | Agente de trânsito / DETRAN |
| **Perda total contratual** | Reparo > 75% do valor de mercado | Seguradora, conforme apólice |

Um veículo pode ser **perda total para a seguradora** (porque o reparo custa caro) **sem ser grande monta** (porque a estrutura comporta reparo). Esses veículos vão a leilão como "sinistro - média monta" ou "sinistro - pequena monta", e podem ser legalmente reclassificados após o reparo.

Inverso também ocorre: veículos com baixo valor de mercado podem ser classificados como grande monta mesmo com danos moderados, porque o reparo é financeiramente inviável — mas a inviabilidade financeira **não é critério técnico de grande monta** segundo a Resolução CONTRAN.

Essa distinção, frequentemente ignorada por leigos e até por advogados, é a base de muitos processos administrativos vencidos no DETRAN.`,

`## Quando NÃO compensa tentar reverter {#quando-nao-compensa}

A contestação técnica de grande monta tem custo (R$ 3.500 a R$ 8.000 em SP) e risco (laudo robusto pode confirmar a classificação). Há cenários em que tentar é **prejuízo dobrado**:

- **Estrutura efetivamente comprometida** — quando a perda da geometria é evidente em medição preliminar
- **Incêndio com propagação total** — afetação térmica do metal estrutural não é recuperável
- **Submersão prolongada** — corrosão interna que não aparece nos primeiros meses
- **Veículo de leilão sem BAT** — vedação legal absoluta
- **Veículo de baixo valor** — investimento no laudo > valor de mercado pós-reclassificação

Análise preliminar honesta é a etapa que separa investimento inteligente de prejuízo emocional. Engenheiro sério **recusa** o caso quando a viabilidade é baixa.`,

`## Passo a passo da contestação técnica {#passo-a-passo}

1. **Análise preliminar gratuita** — engenheiro avalia BAT, fotos do sinistro e do estado atual
2. **Parecer técnico de viabilidade** — confirma ou nega a possibilidade de reversão
3. **Inspeção presencial detalhada** — medições com instrumentos calibrados
4. **Memorial de cálculo estrutural** — comparação com geometria de referência
5. **Laudo técnico + ART** — documento formal de contestação
6. **Protocolo administrativo no DETRAN** — recurso contra a classificação registrada
7. **Vistoria de aprovação** em ITL credenciado
8. **Reativação do registro** ou emissão de novo CRLV reclassificado

O prazo total varia de 90 a 180 dias, dependendo do estado e da carga do DETRAN.

## Próximo passo {#proximo-passo}

Antes de aceitar a baixa definitiva ou desistir de um veículo classificado como grande monta, **faça a análise técnica preliminar**. Em 48 horas você sabe se há caminho.

A VSM Engenharia conduz contestações de grande monta nos DETRANs de SP, MG, RJ e ES — sempre com análise honesta de viabilidade antes de qualquer compromisso financeiro.

📞 **(11) 95453-4057**
📩 **[Solicitar análise gratuita pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Veja o serviço completo de [reclassificação de monta da VSM](/servicos/reclassificacao-de-monta).`
    ],
};
