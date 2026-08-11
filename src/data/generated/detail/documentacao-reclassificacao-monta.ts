/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Documentação para reclassificação de monta: lista completa por etapa, documentos do veículo, do proprietário, laudo, notas fiscais e registro fotográfico.",
  keywords: ["documentação reclassificação de monta", "documentos reclassificação monta", "o que preciso para reclassificar", "checklist reclassificação detran"],
  keyTakeaways: [
      "Cada exigência do órgão adiciona de 15 a 30 dias — protocolar completo é a maior economia de tempo",
      "Fotos do reparo precisam ser feitas durante a execução; depois de montado não há como comprovar",
      "Notas fiscais das peças precisam conversar com o memorial do laudo",
      "Verificar restrições e débitos antes de começar evita processo que trava no meio"
    ],
  toc: [
      { id: "logica", label: "A lógica da documentação" },
      { id: "antes", label: "Antes de começar: verificação prévia" },
      { id: "veiculo-proprietario", label: "Documentos do veículo e do proprietário" },
      { id: "sinistro", label: "Documentação do sinistro" },
      { id: "laudo", label: "Laudo de recuperabilidade" },
      { id: "reparo", label: "Comprovação do reparo" },
      { id: "fotos", label: "Registro fotográfico: como fazer" },
      { id: "por-estado", label: "Variações por estado" },
      { id: "checklist", label: "Checklist consolidado" },
      { id: "erros", label: "Erros documentais que geram exigência" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Qual o documento mais importante do processo?", answer: "O laudo de recuperabilidade, emitido por engenheiro com CREA ativo e ART recolhida. É ele que atesta a viabilidade técnica da recuperação e define, no memorial, o que precisa ser reparado e como. Todos os demais documentos apoiam ou comprovam — o laudo é o que fundamenta tecnicamente o pedido. Laudo raso é a causa mais frequente de exigência." },
      { question: "Preciso guardar as notas fiscais das peças?", answer: "Sim, e elas precisam ser compatíveis com o que o laudo indicou. As notas comprovam que as peças utilizadas no reparo são adequadas e rastreáveis. Divergência entre o memorial do laudo e as peças efetivamente adquiridas é motivo frequente de exigência: se o laudo previu a substituição de um componente estrutural e não há nota correspondente, a análise questiona o que foi feito." },
      { question: "As fotos do reparo são realmente obrigatórias?", answer: "São essenciais na prática, mesmo quando a lista formal não as detalha. O reparo estrutural precisa ser comprovado, e depois do veículo montado e pintado não há como demonstrar o que foi feito por baixo. O registro precisa ser feito durante a execução: peça removida, estrutura exposta, solda executada, componente novo instalado. É a diferença entre comprovar e alegar." },
      { question: "A documentação é a mesma em todos os estados?", answer: "A base é a mesma, porque a norma é federal. O que varia é a forma de protocolo — presencial ou digital —, exigências documentais complementares, o fluxo de vistoria e a necessidade de etapas como autorização prévia. Por isso a lista precisa ser confirmada junto ao órgão do estado antes do protocolo: item complementar não previsto é uma das causas mais banais de exigência." }
    ],
  content: [
`Na reclassificação de monta, a documentação não é burocracia acessória — é o processo. O órgão não vê o veículo na maior parte do tempo: vê o conjunto documental que a descreve.

E há uma consequência direta disso: **cada exigência custa de 15 a 30 dias**. Protocolar com a documentação completa e coerente é, de longe, a maior economia de tempo disponível em todo o processo.

Este artigo reúne a lista por etapa, explica o que precisa ser preparado **durante** o reparo — e não depois — e lista os erros documentais que mais geram retorno.`,

`## A lógica da documentação {#logica}

O conjunto documental precisa responder a cinco perguntas:

| Pergunta | Documentos que respondem |
| --- | --- |
| **De quem é o veículo?** | Documento do veículo, documento pessoal, comprovante de residência |
| **O que aconteceu?** | Documentação do sinistro |
| **O veículo pode ser recuperado?** | Laudo de recuperabilidade com ART |
| **O reparo foi feito, e como?** | Notas fiscais, registro fotográfico, memorial |
| **O veículo está em condições?** | Vistoria |

Quando se entende essa lógica, fica claro por que documento faltando trava tudo: uma das cinco perguntas fica sem resposta, e o analista não tem como concluir.`,

`## Antes de começar: verificação prévia {#antes}

Etapa que não gera documento, mas evita processo natimorto. Verifique:

- ☐ **Restrições** no registro do veículo — administrativa, judicial, tributária
- ☐ **Débitos** — IPVA, licenciamento, multas
- ☐ **Alienação fiduciária** — se houver, é preciso anuência do credor
- ☐ **Numerações** de chassi e motor legíveis e sem indício de adulteração
- ☐ **Natureza da classificação** registrada
- ☐ **Situação do prazo** administrativo desde a comunicação do sinistro
- ☐ **Documentação do sinistro** disponível

Descobrir um bloqueio judicial depois de contratar laudo e executar reparo é o pior momento possível. Essa verificação leva minutos e reordena a decisão inteira.

Se o prazo administrativo desde o sinistro já passou, o processo continua viável — com laudo mais robusto e justificativa formal. O tema está em [quanto tempo demora uma reclassificação de monta](/blog/quanto-tempo-demora-reclassificacao-de-monta).`,

`## Documentos do veículo e do proprietário {#veiculo-proprietario}

### Do veículo

- ☐ Documento de registro do veículo (CRV / CRLV), conforme o caso
- ☐ Comprovante de quitação de débitos, quando exigido
- ☐ Comprovante de propriedade, quando o registro ainda não foi transferido
- ☐ Nota fiscal de compra, em veículo adquirido em leilão

### Do proprietário

- ☐ Documento de identificação com foto
- ☐ CPF
- ☐ Comprovante de residência atualizado
- ☐ Procuração com poderes específicos, se o processo for conduzido por terceiro
- ☐ Documentos da empresa e do representante legal, quando o veículo é de pessoa jurídica

Cuidado recorrente: **veículo em nome de terceiro**. Comprou e não transferiu, ou o registro está no nome do vendedor. Isso precisa ser resolvido ou tratado formalmente antes do protocolo, com procuração ou com a regularização da propriedade.`,

`## Documentação do sinistro {#sinistro}

É a peça que caracteriza o evento e sustenta o pedido. Conforme o caso, envolve:

- ☐ Registro da ocorrência que originou a classificação
- ☐ Documentação relativa ao atendimento do sinistro
- ☐ Documentos da seguradora, quando houve acionamento
- ☐ Documentação de leilão, quando aplicável

Esta é a categoria com maior potencial de inviabilizar a via administrativa. Sem o documento que registra o sinistro, falta a base do pedido — situação comum em veículos adquiridos em leilão, tratada em [veículo de leilão sem BAT](/blog/veiculo-leilao-bat-pode-reclassificar).

Quem não tem esses documentos deve tentar recuperá-los **antes** de contratar qualquer serviço, não depois.`,

`## Laudo de recuperabilidade {#laudo}

O documento central. Precisa conter:

1. Identificação completa do veículo, com conferência das numerações
2. Identificação do proprietário e do solicitante
3. Histórico do sinistro
4. Descrição da situação encontrada na inspeção presencial
5. **Avaliação estrutural** detalhada, região por região
6. Avaliação dos sistemas de segurança
7. **Registro fotográfico extenso**, geral e de detalhe
8. **Memorial descritivo dos reparos**, com método por região
9. Relação de componentes a substituir
10. Análise de viabilidade técnica
11. Conclusão fundamentada
12. Identificação do engenheiro, CREA e **número da ART**

Verificações antes de aceitar o laudo:

- ☐ Engenheiro identificado, com CREA ativo
- ☐ ART recolhida e citada
- ☐ Inspeção presencial realizada — não apenas análise de fotos
- ☐ Memorial detalhado o bastante para orientar a oficina
- ☐ Registro fotográfico cobrindo cada região avaliada

O conteúdo completo e os critérios de qualidade estão em [laudo de recuperabilidade](/servicos/laudo-de-recuperabilidade) e no aprofundamento técnico de [memorial de cálculo da reclassificação](/blog/memorial-de-calculo-reclassificacao-monta).`,

`## Comprovação do reparo {#reparo}

Aqui está a maior fonte de exigência, e por um motivo simples: **grande parte dessa comprovação só pode ser produzida durante a execução**.

- ☐ **Notas fiscais das peças** utilizadas, compatíveis com o memorial
- ☐ Nota fiscal ou documento do serviço executado
- ☐ **Registro fotográfico do reparo em andamento**
- ☐ Identificação da oficina executante
- ☐ Declaração ou termo de execução, quando exigido
- ☐ Documentação de itens de segurança substituídos, quando aplicável

O ponto crítico é a **coerência entre memorial e notas**. Se o laudo previu a substituição de determinado componente estrutural e não existe nota correspondente, a análise questiona o que foi efetivamente feito — e essa dúvida vira exigência.

Orientação prática para quem vai reparar: leve o memorial do laudo à oficina **antes** do início e alinhe que peças serão adquiridas com nota, e que o veículo será fotografado em etapas.

> **Quer evitar exigência por documentação?** A VSM Engenharia emite o laudo e orienta o que precisa ser registrado durante o reparo. [Fale com um engenheiro](/contato).`,

`## Registro fotográfico: como fazer {#fotos}

A regra que resume tudo: **depois de montado e pintado, não há como comprovar o que foi feito por baixo**.

### Momentos obrigatórios

| Momento | O que registrar |
| --- | --- |
| **Antes do reparo** | Estado geral, dano em detalhe, cada região comprometida |
| **Com o veículo desmontado** | Estrutura exposta, extensão real do dano |
| **Durante a execução** | Peça removida, alinhamento, solda sendo executada |
| **Componentes novos** | Peça instalada, antes do fechamento |
| **Após o reparo** | Estado final, geral e por região |
| **Numerações** | Chassi e motor legíveis |

### Como fotografar

- ☐ Fotos gerais que situem a região, e fotos de detalhe da mesma região
- ☐ Boa iluminação — foto escura não comprova nada
- ☐ Referência de escala quando relevante
- ☐ Numerações legíveis, com foco
- ☐ Sequência temporal preservada
- ☐ Arquivos originais guardados, sem compressão excessiva por aplicativo de mensagem

O último item é subestimado: fotos trafegadas por aplicativos perdem resolução e metadados. Guarde os originais.`,

`## Variações por estado {#por-estado}

A base normativa é federal; a operacionalização varia.

| Elemento | O que muda |
| --- | --- |
| **Forma de protocolo** | Presencial, digital ou misto |
| **Autorização prévia** | Exigida em alguns fluxos, como em SP |
| **Documentos complementares** | Podem ser solicitados itens adicionais |
| **Fluxo de vistoria** | Unidade credenciada ou do próprio órgão |
| **Prazos de análise** | Variam por unidade e período |

Os detalhes por estado estão em [reclassificação DETRAN-SP](/blog/reclassificacao-monta-detran-sp), [DETRAN-MG](/blog/reclassificacao-monta-detran-mg) e [DETRAN-RJ e ES](/blog/reclassificacao-monta-detran-rj-es). A etapa específica de São Paulo está em [autorização prévia DETRAN-SP](/blog/autorizacao-previa-detran-sp-reclassificacao).

Recomendação: **confirme a lista junto ao órgão do estado antes de protocolar**. Item complementar não previsto é uma das causas mais banais e evitáveis de exigência.`,

`## Checklist consolidado {#checklist}

### Verificação prévia
- ☐ Restrições, débitos e multas verificados
- ☐ Alienação verificada; anuência do credor obtida, se houver
- ☐ Numerações conferidas
- ☐ Documentação do sinistro localizada

### Documentos pessoais e do veículo
- ☐ Identificação com foto e CPF
- ☐ Comprovante de residência
- ☐ Documento do veículo
- ☐ Comprovante de propriedade, se aplicável
- ☐ Procuração, se aplicável
- ☐ Documentos da empresa, se pessoa jurídica

### Técnicos
- ☐ Laudo de recuperabilidade com ART
- ☐ Memorial descritivo dos reparos
- ☐ Registro fotográfico do laudo

### Do reparo
- ☐ Notas fiscais das peças, compatíveis com o memorial
- ☐ Documento do serviço executado
- ☐ Registro fotográfico em andamento
- ☐ Identificação da oficina

### Do processo
- ☐ Requerimento preenchido
- ☐ Comprovantes de taxas
- ☐ Autorização prévia, quando aplicável
- ☐ Agendamento de vistoria

Protocolo completo de uma vez, sem complementação posterior, é a única forma confiável de manter o prazo dentro da faixa esperada.`,

`## Erros documentais que geram exigência {#erros}

| Erro | Atraso típico |
| --- | --- |
| Protocolar com documento faltando | 15 a 30 dias |
| Laudo sem ART | 20 a 45 dias |
| Laudo raso, sem memorial detalhado | 20 a 45 dias |
| Reparo sem registro fotográfico | 15 a 30 dias, podendo exigir nova avaliação |
| Notas fiscais divergentes do memorial | 15 a 30 dias |
| Comprovante de residência desatualizado | 15 dias |
| Procuração sem poderes específicos | 15 dias |
| Débito ou restrição não resolvido | Bloqueio até regularização |
| Veículo em nome de terceiro sem formalização | 15 a 30 dias |
| Fotos ilegíveis ou insuficientes | 15 a 30 dias |
| Reparo executado fora do memorial | Pode exigir refazer o reparo |

O último é o mais caro: não custa dias, custa o reparo inteiro novamente. Por isso o memorial precisa chegar à oficina antes do início da execução.

O catálogo completo de erros do processo, incluindo os não documentais, está em [principais erros na reclassificação de monta](/blog/principais-erros-reclassificacao-monta).

## Próximo passo {#proximo-passo}

Documentação completa e coerente é o que separa um processo de 60 dias de um de 150. A maior parte do controle está com o proprietário: verificação prévia, laudo robusto, reparo conforme o memorial e registro fotográfico feito na hora certa.

A VSM Engenharia emite laudo de recuperabilidade com ART, orienta o que registrar durante o reparo e acompanha o processo em São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [reclassificação de monta](/servicos/reclassificacao-de-monta) e a página de [laudo de recuperabilidade](/servicos/laudo-de-recuperabilidade).`
    ],
};
