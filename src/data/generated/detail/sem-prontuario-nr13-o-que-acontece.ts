/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "O que acontece se a empresa não tiver prontuário NR-13: interdição, autuação, recusa de seguro, responsabilidade civil e criminal e como reconstituir o documento.",
  keywords: ["empresa sem prontuário nr13", "prontuário nr13 obrigatório", "multa nr13", "interdição caldeira", "falta de prontuário nr13"],
  keyTakeaways: [
      "Sem prontuário, o equipamento é considerado irregular — o auditor fiscal pode interditar o equipamento no ato",
      "A multa da NR-28 é apenas a primeira camada: recusa de seguro e bloqueio contratual costumam custar mais",
      "Em caso de acidente, ausência de prontuário sustenta responsabilização civil e criminal de gestores",
      "O prontuário perdido pode ser reconstituído tecnicamente, com ensaios, memorial e recategorização"
    ],
  toc: [
      { id: "o-que-a-norma-exige", label: "O que a norma exige" },
      { id: "primeira-consequencia", label: "Primeira consequência: interdição do equipamento" },
      { id: "autuacao", label: "Autuação e multa" },
      { id: "seguro", label: "Recusa de cobertura pela seguradora" },
      { id: "contratos", label: "Bloqueio contratual e auditoria de cliente" },
      { id: "responsabilidade", label: "Responsabilidade civil e criminal" },
      { id: "acidente", label: "O que muda em caso de acidente" },
      { id: "reconstituicao", label: "Como reconstituir o prontuário" },
      { id: "custo-prazo", label: "Custo e prazo da reconstituição" },
      { id: "casos-tipicos", label: "Situações típicas que geram a ausência" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Comprei uma caldeira usada sem prontuário. Posso operar?", answer: "Não regularmente. Equipamento sem prontuário está em situação irregular perante a NR-13 e sujeito a interdição em fiscalização. O caminho técnico é a reconstituição: levantamento dimensional, ensaios não destrutivos para determinar espessuras e integridade, recuperação de documentação junto ao fabricante quando possível, memorial de cálculo, recategorização e emissão do prontuário por profissional habilitado. Só depois disso a operação se regulariza. Comprar equipamento usado sem exigir o prontuário do vendedor é a origem mais comum desse problema." },
      { question: "A falta de prontuário gera multa automática?", answer: "A autuação depende de fiscalização. Quando ocorre, a infração é capitulada conforme a NR-28, cujo valor resulta do cruzamento entre a gradação da infração e a faixa de número de empregados da empresa, com correção anual. Mais relevante que o valor da multa é a possibilidade de interdição do equipamento, que interrompe a produção imediatamente, e o efeito da autuação como registro de irregularidade conhecida em eventual investigação de acidente." },
      { question: "Prontuário incompleto é o mesmo que não ter prontuário?", answer: "Do ponto de vista prático, aproxima-se disso. Prontuário sem os documentos essenciais — dados de projeto, PMTA, categoria, registros de inspeção e ART correspondentes — não permite ao profissional habilitado concluir sobre a integridade do equipamento e não sustenta a definição de periodicidade. Auditoria experiente identifica pasta montada apenas com notas fiscais e certificados de calibração. O caminho é o mesmo da reconstituição: completar tecnicamente o que falta." },
      { question: "Quem responde pela ausência do prontuário: a empresa ou o engenheiro?", answer: "A obrigação de manter o prontuário é da empresa proprietária ou operadora do equipamento. O profissional habilitado responde tecnicamente pelos laudos e registros que assina e pela recomendação formal quando identifica a ausência. Na prática, em investigação de acidente, a apuração alcança a empresa, seus gestores diretos com poder de decisão sobre a manutenção e o profissional que emitiu documentos sem base documental adequada." }
    ],
  content: [
`A pergunta "o que acontece se minha empresa não possuir prontuário NR-13" costuma surgir em três momentos: quando um auditor solicita o documento, quando um cliente audita a planta, ou quando a seguradora pede a documentação para liberar um sinistro.

A resposta prática tem quatro camadas, e a multa é a menos relevante delas. Ausência de prontuário significa que **não existe base técnica para afirmar que o equipamento é seguro** — e essa lacuna produz consequências em cadeia: interdição, autuação, recusa de cobertura, bloqueio contratual e responsabilização pessoal em caso de acidente.

Este artigo detalha cada consequência e apresenta o caminho técnico de reconstituição. Para o conteúdo que o documento deve ter, consulte [prontuário NR-13: o que deve conter](/blog/prontuario-nr13-o-que-deve-conter).`,

`## O que a norma exige {#o-que-a-norma-exige}

A NR-13 estabelece que caldeiras, vasos de pressão, tubulações e tanques metálicos de armazenamento devem possuir **prontuário** contendo a documentação técnica do equipamento, sob responsabilidade do proprietário, com informações que incluem:

- Código de projeto e ano de edição
- Especificação dos materiais
- Procedimentos de fabricação, montagem e inspeção
- **PMTA** — pressão máxima de trabalho admissível
- Registros de segurança, de operação e de manutenção
- Categoria do equipamento
- Projeto de instalação
- Relatórios de inspeção e respectivas ART

Quando o prontuário original é inexistente ou incompleto, a própria norma prevê a **reconstituição** por profissional habilitado, com base em dados existentes, ensaios e determinação da PMTA. Ou seja: a norma não trata o problema como insolúvel — trata como pendência técnica a ser resolvida antes da operação regular.

O ponto que costuma passar despercebido é que o prontuário sustenta todo o resto. Sem PMTA e sem categoria definidas, não há como estabelecer periodicidade de inspeção, dimensionar dispositivos de segurança ou justificar tecnicamente qualquer decisão sobre o equipamento. As categorias e sua consequência prática estão em [vasos de pressão NR-13: classificação por categoria](/blog/vasos-de-pressao-nr13-classificacao-categoria) e [categorias de caldeira A, B e C](/blog/categorias-caldeira-a-b-c-nr13).`,

`## Primeira consequência: interdição do equipamento {#primeira-consequencia}

A consequência mais imediata não é financeira — é operacional.

O auditor fiscal do trabalho tem competência para propor **interdição de máquina, setor ou estabelecimento** em situação de risco grave e iminente, com base no art. 161 da CLT e no procedimento da NR-3. Caldeira operando sem documentação que comprove integridade e sem definição de PMTA se enquadra com facilidade nessa hipótese.

O que a interdição significa na prática:

| Efeito | Impacto |
| --- | --- |
| Parada imediata do equipamento | Perda de geração de vapor, ar comprimido ou processo dependente |
| Parada de linhas dependentes | Em muitas plantas, a caldeira alimenta toda a produção |
| Salários mantidos durante a paralisação | A CLT assegura remuneração dos trabalhadores no período |
| Liberação condicionada à regularização | A retomada exige comprovação técnica, não apenas promessa |
| Registro público da ocorrência | Efeito reputacional junto a clientes e seguradoras |

Uma caldeira interditada em uma indústria alimentícia ou têxtil interrompe a produção inteira. O prejuízo de alguns dias parados costuma superar em várias ordens de grandeza o custo de manter a documentação em dia.`,

`## Autuação e multa {#autuacao}

A capitulação de infrações às normas regulamentadoras segue a **NR-28**. O valor não é fixo: resulta do cruzamento entre a **gradação da infração** (classificada em faixas de gravidade) e o **porte da empresa** por número de empregados, com base em anexo próprio da norma e reajuste periódico — a atualização promovida em 2026 revisou o quadro de infrações e reforçou os critérios de aplicação.

Elementos que agravam a autuação:

- **Reincidência** na mesma infração
- **Embaraço à fiscalização** — dificultar acesso ou omitir documentos
- **Resistência** ao cumprimento de determinação
- **Simulação ou artifício** para mascarar a irregularidade
- Múltiplos equipamentos irregulares — a autuação pode ser **por equipamento**

Este último ponto é o que costuma surpreender: uma planta com oito vasos de pressão sem prontuário não recebe uma autuação, e sim uma capitulação que considera a extensão da irregularidade. O acúmulo transforma um problema documental em passivo relevante.

> **Sua planta tem equipamento sem prontuário?** A VSM Engenharia executa reconstituição de prontuário, recategorização e inspeção NR-13 em todo o Sudeste. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Recusa de cobertura pela seguradora {#seguro}

Esta é a consequência de maior impacto financeiro e a menos antecipada.

Apólices de risco patrimonial e de responsabilidade civil condicionam a cobertura ao cumprimento das obrigações legais e regulamentares aplicáveis ao bem segurado. Na prática, após um sinistro envolvendo equipamento sob pressão, a regulação de sinistro solicita:

1. Prontuário do equipamento
2. Registro de segurança e de operação
3. Laudos de inspeção com ART
4. Certificados de treinamento dos operadores
5. Registros de manutenção
6. Relatórios de calibração de dispositivos de segurança

A ausência do prontuário fornece à seguradora fundamento para **negar ou reduzir a indenização**, sob o argumento de agravamento do risco por descumprimento de obrigação legal. O prejuízo, nesse cenário, não se limita ao equipamento: explosão de caldeira compromete estrutura predial, equipamentos vizinhos e o resultado de vários exercícios.

Nenhum outro documento da planta tem essa assimetria: custo de manutenção documental na casa de milhares de reais protegendo exposição na casa de milhões.`,

`## Bloqueio contratual e auditoria de cliente {#contratos}

Em cadeias industriais estruturadas — automotiva, alimentícia, farmacêutica, química, papel e celulose — a auditoria de fornecedor verifica conformidade de SST como item de qualificação.

Consequências típicas:

- **Reprovação em auditoria** de qualificação ou requalificação de fornecedor
- **Bloqueio de cadastro** até apresentação de plano de ação com evidências
- **Perda de contrato** em licitação privada com exigência documental
- **Restrição de acesso** de equipes próprias à planta do cliente
- **Cláusula de rescisão** por descumprimento de requisito legal

Empresas que atendem grandes contratantes descobrem esse efeito na primeira auditoria. O custo de regularização emergencial, sob prazo de auditoria, é sempre superior ao da regularização planejada — além de expor a empresa a decisões técnicas apressadas.

A conferência é sempre documental: o auditor pede o prontuário antes de olhar o equipamento.`,

`## Responsabilidade civil e criminal {#responsabilidade}

Aqui a consequência deixa de ser da empresa e alcança pessoas.

| Frente | Fundamento e efeito |
| --- | --- |
| **Civil** | Indenização por danos materiais, morais e estéticos às vítimas e a terceiros atingidos |
| **Previdenciária** | Ação regressiva do INSS contra a empresa para reaver benefícios pagos, quando comprovada negligência em normas de segurança |
| **Criminal** | Lesão corporal culposa ou homicídio culposo, com apuração da conduta de quem tinha poder de decisão |
| **Trabalhista** | Reconhecimento de culpa do empregador em ação individual, com reflexos indenizatórios |
| **Ambiental** | Quando o evento envolve liberação de produto perigoso |

O elemento que a ausência de prontuário adiciona ao processo é a **caracterização de negligência**. A defesa técnica de uma empresa após acidente se sustenta em demonstrar que existia um programa de controle: inspeções em dia, laudos, treinamentos, manutenção registrada. Sem prontuário, essa demonstração não é possível — o que existe é a evidência oposta.`,

`## O que muda em caso de acidente {#acidente}

Acidente com equipamento sob pressão gera investigação por múltiplas frentes simultâneas: auditoria fiscal do trabalho, Ministério Público do Trabalho, polícia civil, seguradora, e eventualmente órgão ambiental.

Todas pedem os mesmos documentos. A sequência prática:

1. **Interdição imediata** do equipamento e possivelmente do setor
2. **Requisição da documentação técnica** completa
3. **Perícia técnica** sobre a causa
4. **Apuração da cadeia de responsabilidade** — quem sabia, quem decidia, quem deixou de agir
5. **Apuração de omissões documentais** como indício de negligência

Com prontuário em dia, laudos vigentes e registros de manutenção, a empresa discute **causa**. Sem prontuário, discute **omissão** — posição substancialmente pior em qualquer das esferas.

Vale registrar a escala do risco físico: a energia acumulada em um vaso ou caldeira sob pressão, liberada de forma descontrolada, produz efeito destrutivo em raio significativo. Não é um risco documental. O documento apenas comprova que o risco físico está sob controle técnico.`,

`## Como reconstituir o prontuário {#reconstituicao}

A NR-13 admite a reconstituição por profissional habilitado. O procedimento típico:

### 1. Levantamento de campo

Identificação do equipamento, medições dimensionais, levantamento de bocais, conexões, dispositivos de segurança e condições de instalação. Registro fotográfico completo.

### 2. Recuperação documental

Busca de plaqueta de identificação, manual, nota fiscal, desenhos e certificados. Consulta ao fabricante quando ainda existente — em muitos casos, o fabricante mantém registro por número de série.

### 3. Caracterização de materiais

Quando não há especificação documental, análise para determinar o material — ensaio de composição química por espectrometria e ensaio de dureza, conforme o caso.

### 4. Ensaios não destrutivos

Medição de espessura por ultrassom em malha definida, ensaio de soldas por líquido penetrante ou partícula magnética, e ultrassom de solda quando aplicável. É essa etapa que fundamenta a avaliação de integridade — detalhada em [ensaios não destrutivos industriais](/blog/ensaios-nao-destrutivos-end-industriais).

### 5. Memorial de cálculo e definição da PMTA

Com geometria, material e espessuras medidas, calcula-se a **pressão máxima de trabalho admissível** conforme código aplicável, considerando a espessura remanescente e a sobrespessura de corrosão.

### 6. Categorização

Definição da categoria do equipamento a partir de PMTA, volume, classe de fluido e demais parâmetros, o que determina o regime de inspeção subsequente.

### 7. Teste hidrostático

Quando indicado tecnicamente, para validar a integridade estrutural na pressão determinada. Procedimento detalhado em [teste hidrostático em vaso de pressão](/blog/teste-hidrostatico-vaso-pressao-quando-fazer).

### 8. Emissão do prontuário e ART

Consolidação de todo o conjunto em prontuário estruturado, com laudo, memorial, relatórios de ensaio, projeto de instalação e ART recolhida. A partir daí, o equipamento passa ao regime normal de inspeções — cujos tipos e gatilhos estão em [inspeção NR-13 inicial, periódica e extraordinária](/blog/inspecao-nr13-inicial-periodica-extraordinaria).`,

`## Custo e prazo da reconstituição {#custo-prazo}

Faixas praticadas no Sudeste em 2026:

| Situação | Faixa de custo | Prazo típico |
| --- | --- | --- |
| Vaso de pressão pequeno, com plaqueta legível | R$ 4.000 – R$ 9.000 | 15 a 30 dias |
| Vaso de pressão médio, sem documentação | R$ 8.000 – R$ 20.000 | 30 a 45 dias |
| Vaso de grande porte ou fluido perigoso | R$ 15.000 – R$ 40.000 | 45 a 60 dias |
| Caldeira, conforme porte e categoria | R$ 12.000 – R$ 45.000 | 30 a 60 dias |
| Programa com múltiplos equipamentos | Ganho de escala relevante | Cronograma por lotes |

Variáveis que movem custo e prazo: existência de plaqueta e manual, necessidade de análise de material, extensão da malha de ultrassom, exigência de teste hidrostático e necessidade de parada operacional. Referências comparativas de precificação de serviços NR-13 estão em [quanto custa um laudo NR-13 em São Paulo](/blog/quanto-custa-laudo-nr13-sao-paulo).

Comparação que orienta a decisão: a reconstituição de um vaso custa uma fração de um único dia de linha parada por interdição — e uma fração ainda menor de uma indenização negada por seguradora.`,

`## Situações típicas que geram a ausência {#casos-tipicos}

| Origem | Frequência | Observação |
| --- | --- | --- |
| **Equipamento comprado usado** | Muito alta | Vendedor não entrega prontuário e comprador não exige |
| **Planta adquirida de terceiros** | Alta | Documentação não transferida na aquisição |
| **Equipamento antigo, anterior à exigência** | Alta | Nunca teve prontuário estruturado |
| **Documentação perdida** | Média | Mudança de sede, alagamento, incêndio, descarte indevido |
| **Equipamento importado** | Média | Documentação em código estrangeiro, sem tradução técnica nem adequação |
| **Fabricação própria** | Média | Vaso fabricado na oficina interna, sem projeto nem memorial |
| **Vaso "esquecido"** | Alta | Pulmão de ar comprimido, autoclave ou tanque fora do inventário |

O último caso é o mais recorrente em auditoria: o **reservatório de ar comprimido** da sala de compressores. Está em praticamente toda planta industrial, é vaso de pressão sob NR-13 e frequentemente não consta em nenhum controle.

A providência inicial em qualquer programa de regularização é o **inventário completo dos equipamentos sob pressão** — incluindo os que ninguém chama de vaso de pressão.

## Próximo passo {#proximo-passo}

Ausência de prontuário NR-13 não é pendência de arquivo: é ausência de base técnica para afirmar que o equipamento pode operar. Produz interdição, autuação, exposição a recusa de seguro, bloqueio comercial e responsabilização pessoal em caso de acidente — nessa ordem de gravidade crescente.

A boa notícia é que o problema tem solução técnica definida e prazo previsível. A VSM Engenharia executa reconstituição de prontuário, determinação de PMTA, recategorização e inspeção NR-13 em todo o Sudeste, com profissional habilitado e ART.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [inspeção e laudo NR-13](/servicos/nr13) e os artigos [prontuário NR-13: o que deve conter](/blog/prontuario-nr13-o-que-deve-conter) e [laudo NR-13: quanto custa e quem pode emitir](/blog/laudo-nr13-quanto-custa-quem-pode-emitir).

Veja também [inspeção NR-13 em compressor de ar](/servicos/inspecao-nr13-compressor-de-ar) e [como escolher uma empresa de inspeção NR-13](/blog/empresa-de-inspecao-nr13-como-escolher).`
    ],
};
