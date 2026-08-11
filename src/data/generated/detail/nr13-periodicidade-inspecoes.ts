/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Periodicidade NR-13: tabela de prazos máximos para caldeiras e vasos de pressão, com e sem SPIE, controle de vencimentos e o que fazer com laudo vencido.",
  keywords: ["periodicidade nr13", "prazo inspeção nr13", "validade laudo nr13", "calendário de inspeção nr13", "spie nr13"],
  keyTakeaways: [
      "Os prazos da norma são máximos, não recomendados — o profissional habilitado pode reduzi-los",
      "Caldeiras: 12 meses para categorias A e B; com SPIE, até 24 ou 30 meses conforme a categoria",
      "Vasos: exame externo de 1 a 5 anos e interno de 3 a 10 anos, conforme a categoria I a V",
      "O prazo periódico não substitui a inspeção extraordinária disparada por evento"
    ],
  toc: [
      { id: "como-se-define", label: "Como o prazo é definido" },
      { id: "caldeiras", label: "Prazos para caldeiras" },
      { id: "vasos", label: "Prazos para vasos de pressão" },
      { id: "tubulacoes", label: "Tubulações e tanques" },
      { id: "spie", label: "SPIE: quando compensa" },
      { id: "reduzir-prazo", label: "Quando o prazo deve ser reduzido" },
      { id: "calendario", label: "Como montar o calendário" },
      { id: "vencido", label: "O que fazer com laudo vencido" },
      { id: "extraordinaria", label: "O prazo que nenhum calendário prevê" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Qual a periodicidade da inspeção de caldeira?", answer: "A inspeção periódica é constituída por exames interno e externo, com prazo máximo de 12 meses para as categorias A e B e 15 meses para caldeiras de recuperação de álcalis de qualquer categoria. A categoria A pode chegar a 24 meses quando, aos 12 meses, são testadas as pressões de abertura das válvulas de segurança. Estabelecimentos com SPIE podem estender: 24 meses para categoria B e para recuperação de álcalis, e 30 meses para categoria A." },
      { question: "Qual a periodicidade da inspeção de vaso de pressão?", answer: "Depende da categoria, de I a V. Sem SPIE, o exame externo vai de 1 ano (categoria I) a 5 anos (categoria V), e o exame interno de 3 anos (categoria I) a 10 anos (categoria V). Estabelecimentos com SPIE têm prazos ampliados dentro dos limites da norma. A categoria decorre da combinação entre classe do fluido e o produto pressão × volume, e precisa estar definida no prontuário." },
      { question: "O laudo NR-13 tem prazo de validade?", answer: "O que tem prazo é a inspeção, não o laudo como documento. O laudo registra uma inspeção realizada em uma data e define, tecnicamente, quando a próxima deve ocorrer. Na prática, a empresa fica irregular quando o prazo da próxima inspeção é ultrapassado sem que ela aconteça — e não quando o papel completa um ano. Por isso o controle correto é por data-limite da próxima inspeção, não por data de emissão." },
      { question: "Posso adiar uma inspeção NR-13?", answer: "Os prazos da norma são máximos e não admitem prorrogação administrativa por conveniência. O que existe é a possibilidade de o profissional habilitado, com base em análise técnica documentada — histórico, taxa de corrosão medida, condições operacionais — estabelecer um plano que justifique tecnicamente as decisões sobre o equipamento. Ultrapassar prazo sem essa fundamentação registrada em prontuário expõe a empresa a autuação e enfraquece qualquer defesa em caso de acidente." }
    ],
  content: [
`Prazo de inspeção NR-13 gera mais dúvida do que deveria, por duas razões: as tabelas circulam pela internet com números divergentes, e muita gente controla o vencimento pela **data de emissão do laudo** em vez da **data-limite da próxima inspeção**.

Este artigo reúne os prazos máximos aplicáveis, explica o efeito do SPIE, e — mais importante na prática — mostra como montar e manter o calendário de inspeções de uma planta com dezenas de equipamentos.

Para entender os tipos de inspeção e seus gatilhos, o artigo complementar é [inspeção NR-13 inicial, periódica e extraordinária](/blog/inspecao-nr13-inicial-periodica-extraordinaria).`,

`## Como o prazo é definido {#como-se-define}

Três elementos determinam o intervalo entre inspeções:

| Elemento | Efeito |
| --- | --- |
| **Tipo de equipamento** | Caldeira e vaso de pressão têm regimes distintos |
| **Categoria** | Decorre de parâmetros técnicos e define a exigência |
| **Existência de SPIE** | Serviço Próprio de Inspeção de Equipamentos permite estender prazos |

E um princípio que atravessa tudo: **os prazos da norma são máximos**. O profissional habilitado pode e deve reduzi-los quando o histórico do equipamento justificar — taxa de corrosão elevada, ambiente agressivo, ciclos severos, ocorrências anteriores.

Prazo máximo não é recomendação técnica. É o limite além do qual a empresa está irregular.`,

`## Prazos para caldeiras {#caldeiras}

A inspeção periódica de caldeiras é constituída por **exames interno e externo**, com os prazos máximos:

| Situação | Prazo máximo |
| --- | --- |
| Caldeiras das categorias A e B | **12 meses** |
| Caldeiras de recuperação de álcalis, qualquer categoria | **15 meses** |
| Categoria A, com teste das pressões de abertura das válvulas de segurança aos 12 meses | **24 meses** |

Com **SPIE** formalizado conforme o anexo específico da norma:

| Situação com SPIE | Prazo máximo |
| --- | --- |
| Caldeiras de recuperação de álcalis | **24 meses** |
| Caldeiras da categoria B | **24 meses** |
| Caldeiras da categoria A | **30 meses** |

Observação importante sobre caldeira: diferentemente do que ocorre com vasos, o exame interno e o externo **não têm prazos separados** — a inspeção periódica compreende os dois, no mesmo prazo. Isso significa que toda inspeção periódica de caldeira exige parada programada.

A classificação por categoria está em [categorias de caldeira A, B e C](/blog/categorias-caldeira-a-b-c-nr13), e o escopo por tipo construtivo em [inspeção NR-13 em caldeiras](/blog/caldeiras-flamotubulares-aquatubulares).`,

`## Prazos para vasos de pressão {#vasos}

Em vasos, exame externo e interno têm prazos próprios. Sem SPIE:

| Categoria | Exame externo | Exame interno |
| --- | --- | --- |
| **I** | 1 ano | 3 anos |
| **II** | 2 anos | 4 anos |
| **III** | 3 anos | 6 anos |
| **IV** | 4 anos | 8 anos |
| **V** | 5 anos | 10 anos |

Estabelecimentos com SPIE têm prazos ampliados conforme a categoria, dentro dos limites estabelecidos pela norma.

Consequência prática dessa estrutura: um vaso categoria I tem exame externo anual e interno a cada três anos — ou seja, em um ciclo de três anos há duas inspeções apenas externas e uma que exige parada e abertura. O calendário precisa distinguir os dois eventos, porque o esforço de programação é completamente diferente.

A definição da categoria não é escolha administrativa: decorre da combinação entre classe do fluido e o produto pressão × volume. Enquadramento errado invalida todo o programa — o procedimento está em [vasos de pressão NR-13: classificação por categoria](/blog/vasos-de-pressao-nr13-classificacao-categoria).`,

`## Tubulações e tanques {#tubulacoes}

Tubulações e tanques metálicos de armazenamento têm tratamento próprio na norma, com regime de inspeção estabelecido tecnicamente.

Na prática, o programa é definido pelo profissional habilitado a partir de:

- Fluido conduzido ou armazenado e sua criticidade
- Condições de operação — pressão, temperatura, ciclos
- Material e histórico de corrosão medido
- Resultados das inspeções anteriores
- Consequência de falha, considerando o entorno

Elemento que costuma faltar em programa de tubulação: o **mapa de pontos de medição fixo**. Sem pontos identificados e repetidos, não se calcula taxa de corrosão nem se estima vida remanescente — mede-se estado atual e nada mais.`,

`## SPIE: quando compensa {#spie}

O **Serviço Próprio de Inspeção de Equipamentos** é uma estrutura interna formalizada, com pessoal qualificado, procedimentos escritos e sistema de gestão, atendendo aos requisitos do anexo específico da NR-13.

O benefício direto é a extensão dos prazos. O benefício indireto, e maior, é a maturidade de gestão que ele impõe.

| Cenário | SPIE compensa? |
| --- | --- |
| Poucos equipamentos, sem equipe técnica dedicada | Não — o custo da estrutura não se paga |
| Parque médio, com engenharia de manutenção estruturada | Avaliar — depende do custo de parada |
| Parque grande, com muitas paradas programadas | Frequentemente sim |
| Operação com paradas caras e difíceis de programar | Sim — a extensão de prazo tem valor alto |

Ponto que gera confusão: ter equipe interna de manutenção **não é** ter SPIE. A extensão de prazo depende do cumprimento integral dos requisitos formais do anexo — pessoal, procedimentos, registros e sistema de gestão. Presumir o prazo estendido sem SPIE formalizado é irregularidade com aparência de conformidade.`,

`## Quando o prazo deve ser reduzido {#reduzir-prazo}

O profissional habilitado deve estabelecer intervalo menor que o máximo quando houver:

- **Taxa de corrosão elevada**, medida na comparação entre inspeções
- **Vida remanescente curta** calculada a partir da espessura atual
- **Ambiente agressivo** — maresia, névoa ácida, alta umidade
- **Ciclos severos** de pressão e temperatura
- **Histórico de ocorrências** — vazamento, sobrepressão, falta de água
- **Reparos anteriores** em regiões pressurizadas
- **Tratamento de água deficiente**, em caldeiras
- **Equipamento antigo** com histórico documental incompleto
- **Consequência de falha elevada** pela proximidade de pessoas ou processos críticos

A decisão precisa estar **registrada no laudo e no prontuário**, com a justificativa. Prazo reduzido sem fundamentação vira custo desnecessário; prazo máximo aplicado a equipamento degradado vira risco.`,

`## Como montar o calendário {#calendario}

O erro de gestão mais comum não é escolher o prazo errado — é perder o controle dos vencimentos em um parque com muitos equipamentos.

### 1. Inventário completo

Lista de **todos** os equipamentos sob pressão, com identificação individual. Inclui os que ninguém chama de vaso de pressão: reservatórios de ar comprimido, autoclaves, pulmões, acumuladores. O mais esquecido tem página própria em [inspeção NR-13 em compressor de ar](/servicos/inspecao-nr13-compressor-de-ar).

### 2. Enquadramento por categoria

Cada equipamento precisa ter PMTA e categoria definidas no prontuário. Sem isso, não há prazo aplicável — a lacuna precede o calendário.

### 3. Data-limite, não data de emissão

Registre para cada equipamento a **data-limite da próxima inspeção**, separando exame externo e interno nos vasos. Controlar por "data do último laudo + 12 meses" produz erro sempre que o profissional definiu prazo diferente do padrão.

### 4. Alerta antecipado

Programe aviso com antecedência suficiente para contratar, programar parada e executar:

| Evento | Antecedência recomendada |
| --- | --- |
| Exame externo | 60 dias |
| Exame interno de vaso | 90 a 120 dias |
| Inspeção de caldeira | 120 dias |
| Reconstituição de prontuário | 150 dias |

### 5. Agrupamento por parada

Alinhe as inspeções que exigem abertura com as paradas de manutenção já previstas. É o que reduz custo e evita parada extra.

### 6. Registro centralizado

Uma planilha ou sistema com: equipamento, TAG, categoria, PMTA, última inspeção, próxima data-limite, tipo de exame, responsável e status. Simples resolve — o que não resolve é a informação espalhada em pastas por setor.`,

`## O que fazer com laudo vencido {#vencido}

Situação frequente, e a reação errada é comum: esconder e torcer.

O caminho técnico:

1. **Levante a real situação** — quais equipamentos, há quanto tempo, quais têm prontuário
2. **Priorize por criticidade** — categoria, energia envolvida, proximidade de pessoas, tempo de atraso
3. **Contrate a inspeção** e execute, começando pelos mais críticos
4. **Documente a decisão** de priorização, com cronograma e responsável
5. **Registre no prontuário** o histórico e as providências

O passo 4 é o que protege a empresa. Fiscalização e investigação de acidente distinguem duas situações: empresa que ignorou o vencimento, e empresa que identificou o passivo, priorizou tecnicamente e está executando um plano com prazos. A primeira é negligência; a segunda é gestão.

Enquanto o passivo existe, o risco operacional é real — e reduzir carga, aumentar monitoramento ou parar o equipamento mais crítico são decisões legítimas no interim.

As consequências de operar irregular estão detalhadas em [empresa sem prontuário NR-13](/blog/sem-prontuario-nr13-o-que-acontece).`,

`## O prazo que nenhum calendário prevê {#extraordinaria}

Todo o conteúdo acima trata da inspeção **periódica**. Existe uma categoria que não entra em calendário porque é disparada por evento — a **inspeção extraordinária**, obrigatória quando ocorre:

- Dano por acidente ou ocorrência que comprometa a segurança
- Reparo ou alteração importante, capaz de alterar a condição de segurança
- Reativação após inatividade prolongada
- Mudança do local de instalação, exceto em equipamentos móveis

O ponto que mais escapa: **o prazo periódico vigente é irrelevante diante do evento**. Vaso inspecionado há dois meses que sofreu reparo importante precisa de nova inspeção. Caldeira que passou por falta de água não volta a operar porque "o laudo está em dia".

Detalhamento dos gatilhos em [inspeção NR-13 inicial, periódica e extraordinária](/blog/inspecao-nr13-inicial-periodica-extraordinaria).

## Próximo passo {#proximo-passo}

Periodicidade NR-13 é menos sobre decorar tabela e mais sobre gestão: inventário completo, categoria definida, controle por data-limite, alerta antecipado e agrupamento com as paradas. Feito assim, o programa deixa de ser reativo.

A VSM Engenharia estrutura programas de inspeção NR-13 — inventário, enquadramento, cronograma, execução, laudos, prontuário e ART — em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [inspeção e laudo NR-13](/servicos/nr13) e o artigo [inspeção NR-13: tipos e procedimento](/blog/inspecao-nr13-tipos-periodicidade-procedimento).`
    ],
};
