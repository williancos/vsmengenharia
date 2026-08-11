/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "O que é APR na NR-12: diferença entre análise preliminar de riscos e apreciação de riscos, o que a norma exige, conteúdo, quem assina e ART. VSM Engenharia.",
  keywords: ["apr nr12", "o que é apr", "análise preliminar de risco nr12", "apreciação de riscos nr12", "apr de máquina"],
  keyTakeaways: [
      "A sigla APR é usada para dois documentos diferentes — a confusão gera reprovação em auditoria",
      "A NR-12 exige apreciação de riscos da máquina, com metodologia da ABNT NBR ISO 12100",
      "Análise preliminar de riscos é instrumento operacional de atividade, vinculado ao PGR da NR-1",
      "Apreciação de riscos de máquina é documento de engenharia, com ART recolhida"
    ],
  toc: [
      { id: "a-confusao-da-sigla", label: "A confusão da sigla" },
      { id: "o-que-e-apr", label: "O que é análise preliminar de riscos" },
      { id: "o-que-a-nr12-exige", label: "O que a NR-12 exige de fato" },
      { id: "quadro-comparativo", label: "Quadro comparativo" },
      { id: "quando-usar-cada-uma", label: "Quando usar cada documento" },
      { id: "conteudo-apreciacao", label: "O que contém a apreciação de riscos" },
      { id: "passo-a-passo", label: "Passo a passo da apreciação" },
      { id: "quem-assina", label: "Quem assina e por que exige ART" },
      { id: "integracao-pgr", label: "Integração com o PGR da NR-1" },
      { id: "erros-comuns", label: "Erros que reprovam em auditoria" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "APR e apreciação de riscos são a mesma coisa?", answer: "Não. APR, no sentido consagrado de análise preliminar de riscos, é ferramenta de gestão de SST aplicada a atividades e tarefas, geralmente conduzida pelo SESMT e vinculada ao PGR da NR-1. Apreciação de riscos, no sentido da NR-12, é o processo técnico de engenharia aplicado à máquina ao longo de todo o seu ciclo de vida, conduzido conforme a ABNT NBR ISO 12100 e formalizado com ART. Alguns profissionais usam APR como abreviação de apreciação de riscos, o que amplia a confusão — em documento formal, convém escrever o termo por extenso." },
      { question: "Posso usar a planilha de APR do SESMT para atender à NR-12?", answer: "Não. A planilha de APR de atividade avalia a tarefa executada por uma pessoa em um contexto: risco de queda, de contato elétrico, de esforço. A NR-12 exige avaliação da máquina como objeto técnico, em todas as suas fases de vida — transporte, montagem, operação, regulagem, limpeza, manutenção, desativação — e para todos os modos de falha previsíveis, incluindo mau uso razoavelmente previsível. Auditor experiente distingue os dois documentos com facilidade." },
      { question: "Toda máquina precisa de apreciação de riscos?", answer: "Toda máquina abrangida pela NR-12 precisa ter seus riscos avaliados e as medidas de proteção definidas com base técnica. Na prática, isso significa apreciação de riscos individual por máquina ou, quando há um parque de equipamentos idênticos, apreciação por modelo com verificação das particularidades de cada unidade — layout, acessórios, adaptações e condições de instalação. Máquinas modificadas ou com adaptação de terceiros exigem apreciação própria, mesmo sendo do mesmo modelo." },
      { question: "A apreciação de riscos vence?", answer: "Não tem prazo de validade fixado em norma, mas é documento vivo. Precisa ser revisada sempre que houver modificação na máquina, mudança de processo ou de produto, alteração de layout, adaptação de acessório, ocorrência de acidente ou quase acidente, e atualização normativa relevante. Apreciação de cinco anos atrás em máquina que sofreu três adaptações desde então está tecnicamente desatualizada, mesmo que o documento exista." }
    ],
  content: [
`A pergunta "o que é APR da NR-12" nasce de um problema real: a sigla é usada, no mesmo ambiente industrial, para **dois documentos diferentes**, com finalidades, metodologias e responsáveis distintos.

Em segurança do trabalho, APR significa tradicionalmente **análise preliminar de riscos** — ferramenta aplicada a atividades e tarefas. Em segurança de máquinas, muitos profissionais usam a mesma sigla para **apreciação de riscos**, o processo técnico exigido pela NR-12 e estruturado pela ABNT NBR ISO 12100.

A confusão não é acadêmica. Empresas apresentam em auditoria a planilha de APR do SESMT acreditando estar atendendo à NR-12, e recebem apontamento. Este artigo separa os dois documentos, explica o que a norma exige e mostra como cada um se encaixa no programa de conformidade.`,

`## A confusão da sigla {#a-confusao-da-sigla}

| Uso da sigla | Significado | Origem |
| --- | --- | --- |
| **APR (uso clássico)** | Análise preliminar de riscos | Gestão de SST, aplicada a atividades e tarefas |
| **APR (uso informal em NR-12)** | Apreciação de riscos | Abreviação usada por parte do mercado de segurança de máquinas |

Em documento formal, a recomendação prática é escrever **"apreciação de riscos"** por extenso quando o assunto for NR-12, e reservar a sigla APR para a análise preliminar de riscos de atividade. Evita ambiguidade em auditoria e em contrato.`,

`## O que é análise preliminar de riscos {#o-que-e-apr}

A análise preliminar de riscos é uma ferramenta de identificação e avaliação qualitativa de perigos aplicada a **atividades, tarefas e processos**.

### Características

- Objeto: a **atividade** executada, não o equipamento em si
- Momento: antes do início da tarefa, especialmente em serviços não rotineiros
- Estrutura típica: etapa da tarefa, perigo, risco, medida de controle, responsável
- Condução: técnico de segurança, SESMT, engenheiro de segurança, com participação da equipe executante
- Vinculação: integra o **PGR** da NR-1 e é rotina em obras, paradas de manutenção e serviços de terceiros

### Onde é indispensável

- Manutenção não rotineira em máquina e equipamento
- Trabalho em altura, espaço confinado, serviços a quente
- Serviços executados por empresas contratadas
- Atividades sem procedimento operacional consolidado

A APR é ferramenta útil e obrigatória em vários contextos. O que ela não é: substituto da avaliação técnica da máquina exigida pela NR-12.`,

`## O que a NR-12 exige de fato {#o-que-a-nr12-exige}

A NR-12 exige que as medidas de proteção adotadas em máquinas e equipamentos decorram de **apreciação de riscos**, e adota como referência a ABNT NBR ISO 12100 — "Segurança de máquinas: princípios gerais de projeto, apreciação e redução de riscos".

A apreciação de riscos é o processo que compreende:

1. **Determinação dos limites da máquina** — uso previsto, limites de espaço, de tempo, de uso e o mau uso razoavelmente previsível
2. **Identificação dos perigos** e das situações perigosas em todas as fases de vida
3. **Estimativa do risco** para cada perigo identificado
4. **Avaliação do risco** e decisão sobre a necessidade de redução
5. **Redução do risco** por medidas de proteção, seguindo hierarquia definida

A hierarquia de redução é o núcleo do método:

| Prioridade | Medida |
| --- | --- |
| 1º | **Eliminar o perigo** por projeto — mudar processo, geometria, princípio de funcionamento |
| 2º | **Proteger** — proteções fixas e móveis, dispositivos de segurança, comando seguro |
| 3º | **Informar** — sinalização, advertências, procedimento, treinamento e EPI |

Inverter essa ordem é o erro conceitual mais frequente. Sinalização e treinamento são a última camada, não a primeira. A metodologia completa, com o método HRN de quantificação e modelo aplicado, está em [apreciação de risco NR-12: metodologia ISO 12100 e modelo prático](/blog/apreciacao-de-risco-nr12-modelo-pratico).

Um ponto que a apreciação alcança e a APR de atividade não: **todas as fases de vida da máquina**. Transporte, instalação, comissionamento, operação normal, ajuste e regulagem, limpeza, troca de ferramenta, manutenção preventiva e corretiva, desativação e descarte. Máquina que só tem proteção adequada durante a operação normal, mas exige exposição do operador para regulagem, não está em conformidade.`,

`## Quadro comparativo {#quadro-comparativo}

| Aspecto | Análise preliminar de riscos (APR) | Apreciação de riscos (NR-12) |
| --- | --- | --- |
| **Objeto** | Atividade ou tarefa | Máquina ou equipamento |
| **Referência** | Boas práticas de SST, PGR da NR-1 | NR-12 e ABNT NBR ISO 12100 |
| **Abrangência temporal** | A execução da tarefa | Todo o ciclo de vida da máquina |
| **Quem conduz** | SESMT, técnico de segurança, engenheiro de segurança | Engenheiro com atribuição compatível |
| **Saída típica** | Medidas de controle da atividade, permissão de trabalho | Medidas de proteção da máquina, projeto, categoria de comando |
| **Formalização** | Documento do sistema de gestão | Documento de engenharia com ART |
| **Atualização** | A cada execução ou mudança de método | A cada modificação da máquina ou do processo |
| **Atende à NR-12 isoladamente** | Não | Sim, como base das medidas de proteção |

As duas convivem no mesmo programa. Não são alternativas: são camadas diferentes de controle.`,

`## Quando usar cada documento {#quando-usar-cada-uma}

| Situação | Documento aplicável |
| --- | --- |
| Definir proteções de uma injetora | Apreciação de riscos |
| Executar manutenção corretiva noturna nessa injetora | APR da atividade |
| Especificar categoria de comando de segurança | Apreciação de riscos |
| Liberar serviço de terceiro na área da máquina | APR da atividade |
| Justificar tecnicamente a solução adotada em laudo NR-12 | Apreciação de riscos |
| Planejar parada geral de manutenção | APR por atividade |
| Avaliar máquina nova antes da compra | Apreciação de riscos |
| Autorizar entrada em espaço confinado de silo | APR da atividade, com requisitos da NR-33 |

Regra prática: **se a pergunta é sobre a máquina, é apreciação de riscos; se é sobre o que uma pessoa vai fazer hoje, é APR de atividade**.

> **Precisa de apreciação de riscos com ART para o seu parque de máquinas?** A VSM Engenharia executa apreciação, projeto de adequação e laudo NR-12 em todo o Sudeste. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## O que contém a apreciação de riscos {#conteudo-apreciacao}

Documento tecnicamente completo inclui:

1. **Identificação da máquina** — fabricante, modelo, número de série, ano, TAG, localização, capacidade
2. **Descrição funcional** — princípio de funcionamento, processo, materiais processados
3. **Limites da máquina** — uso previsto, limites de espaço, de tempo, de operação e mau uso previsível
4. **Fases de vida consideradas** — lista explícita das fases avaliadas
5. **Identificação de perigos por zona** — mecânicos, elétricos, térmicos, ruído, vibração, radiação, ergonômicos, materiais e substâncias
6. **Estimativa de risco** por perigo, com método declarado e critérios transparentes
7. **Avaliação** — risco aceitável ou necessidade de redução
8. **Medidas de proteção propostas**, na hierarquia correta
9. **Risco residual** após implementação
10. **Especificação técnica** das medidas — tipo de proteção, tecnologia de intertravamento, nível de desempenho requerido
11. **Registro fotográfico** por zona de risco
12. **Plano de ação** com prioridade, responsável e prazo
13. **Identificação do responsável técnico**, CREA e **ART**

O item 10 é o que transforma a apreciação em documento executável. Concluir "instalar proteção na zona de prensagem" sem especificar tipo, material, distância de segurança, tecnologia de intertravamento e nível de desempenho requerido devolve o problema para o comprador. A escolha entre proteção fixa e móvel, com os critérios técnicos e econômicos, está detalhada em [proteção fixa ou móvel: qual escolher para cada máquina](/blog/qual-protecao-escolher-nr12-fixa-ou-movel).`,

`## Passo a passo da apreciação {#passo-a-passo}

### 1. Inventário e priorização

Levantamento das máquinas com identificação individual e classificação preliminar por criticidade — histórico de acidente, energia envolvida, frequência de acesso e número de expostos. Define a ordem de execução.

### 2. Levantamento de campo

Observação da máquina em operação real, incluindo regulagem, limpeza e troca de ferramenta. Entrevista com operadores e mantenedores — é nessa conversa que aparecem as práticas informais e as burlas existentes.

### 3. Determinação dos limites

Registro do uso previsto e, principalmente, do **mau uso razoavelmente previsível**: o que operadores fazem para ganhar tempo, resolver travamento ou contornar dificuldade ergonômica.

### 4. Identificação de perigos

Varredura sistemática por zona e por fase de vida, sem depender exclusivamente do histórico de acidentes.

### 5. Estimativa e avaliação

Aplicação do método escolhido, com critérios explícitos de severidade, frequência de exposição, probabilidade de ocorrência e possibilidade de evitar o dano.

### 6. Definição das medidas

Aplicação da hierarquia — eliminar, proteger, informar — com especificação técnica de cada medida.

### 7. Plano de ação e verificação

Prioridade, responsável, prazo e critério de verificação da eficácia. Depois da implementação, **validação** de que a medida funciona como especificado.

A execução das medidas definidas é o que caracteriza a adequação propriamente dita, cujo roteiro está em [adequação NR-12 passo a passo](/blog/adequacao-nr12-passo-a-passo).`,

`## Quem assina e por que exige ART {#quem-assina}

A apreciação de riscos de máquina produz decisões de engenharia: dimensionamento de proteção, distância de segurança, categoria e nível de desempenho do sistema de comando, especificação de dispositivos. São atividades técnicas privativas de profissional habilitado.

| Papel | Atribuição |
| --- | --- |
| **Engenheiro** (mecânico, eletricista, controle e automação ou de segurança do trabalho) com CREA ativo | Conduz, conclui, assina e recolhe ART |
| **Técnico de segurança** | Participa do levantamento, contribui com histórico e observação de campo |
| **Operadores e mantenedores** | Fonte essencial sobre uso real, dificuldades e burlas |
| **Engenharia de processo e manutenção** | Viabilidade das medidas, impacto operacional |

A ART é o que vincula um profissional identificável à conclusão técnica. Documento sem ART é opinião; com ART, é peça técnica com responsabilidade atribuída — o que importa tanto em auditoria quanto em investigação de acidente. Os requisitos e o conteúdo do laudo resultante estão em [laudo NR-12: quando é obrigatório e quanto custa](/blog/laudo-nr12-quando-e-obrigatorio-quanto-custa).`,

`## Integração com o PGR da NR-1 {#integracao-pgr}

A NR-1 estabelece o **Programa de Gerenciamento de Riscos**, que consolida o inventário de riscos e o plano de ação da organização. A relação entre os documentos:

| Documento | Papel no conjunto |
| --- | --- |
| **PGR (NR-1)** | Inventário de riscos ocupacionais e plano de ação da organização |
| **Apreciação de riscos (NR-12)** | Avaliação técnica de cada máquina, alimenta o inventário do PGR |
| **APR de atividade** | Controle operacional de tarefas específicas, especialmente não rotineiras |
| **Laudo NR-12** | Conclusão sobre conformidade da máquina após implementação das medidas |

O fluxo coerente: a apreciação identifica os riscos da máquina e define medidas; o plano de ação resultante alimenta o PGR; as atividades de manutenção sobre a máquina são controladas por APR; o laudo NR-12 atesta a conformidade após execução.

Empresa que mantém PGR robusto mas nenhuma apreciação de riscos de máquina tem inventário incompleto — falta justamente a camada técnica sobre a fonte de risco de maior energia da planta.`,

`## Erros que reprovam em auditoria {#erros-comuns}

| Erro | Por que reprova |
| --- | --- |
| Apresentar APR de atividade como apreciação de riscos da máquina | Documentos com objeto e metodologia distintos |
| Apreciação genérica por tipo de máquina, sem identificação individual | Não considera adaptações, layout e acessórios de cada unidade |
| Avaliar apenas a operação normal | Norma exige todas as fases de vida, incluindo manutenção e regulagem |
| Ignorar o mau uso razoavelmente previsível | É requisito explícito da metodologia |
| Concluir sem especificação técnica das medidas | Documento não executável; devolve a decisão ao comprador |
| Inverter a hierarquia — treinamento no lugar de proteção | Contraria o princípio central da redução de riscos |
| Não revisar após modificação da máquina | Documento desatualizado equivale a documento inexistente |
| Apreciação sem ART | Sem responsabilidade técnica atribuída |
| Copiar apreciação de fornecedor sem verificação em campo | Não reflete a instalação real |

O penúltimo item tem uma variação frequente: apreciação elaborada pelo fabricante da máquina, válida para o equipamento como entregue, mas desatualizada após a instalação com periféricos, esteiras de alimentação e robôs adicionados pela planta. O conjunto formado é uma **máquina nova** do ponto de vista da apreciação.

## Próximo passo {#proximo-passo}

APR de atividade e apreciação de riscos de máquina são documentos complementares, não intercambiáveis. A NR-12 exige o segundo: avaliação técnica da máquina em todo o seu ciclo de vida, com medidas especificadas na hierarquia correta e responsabilidade técnica formalizada por ART.

A VSM Engenharia executa apreciação de riscos, projeto de adequação, implantação e laudo NR-12 em todo o Sudeste, com engenheiros habilitados e ART.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [adequação NR-12](/servicos/nr12) e os artigos [apreciação de risco NR-12: modelo prático](/blog/apreciacao-de-risco-nr12-modelo-pratico) e [NR-12: quem precisa fazer](/blog/nr12-quem-precisa-fazer).

Antes de contratar, veja [como escolher uma empresa de adequação NR-12](/blog/empresa-adequacao-nr12-como-escolher).`
    ],
};
