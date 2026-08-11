/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Categorias de risco NR-12: o que a norma realmente exige, estimativa de risco por zona, categoria e nível de desempenho do comando conforme ISO 13849-1.",
  keywords: ["categorias de risco nr12", "categoria nr12", "classificação de risco máquinas", "iso 13849", "nível de desempenho"],
  keyTakeaways: [
      "A NR-12 não tem uma tabela de categorias de risco por tipo de máquina — o risco é estimado por zona",
      "Categorias B, 1, 2, 3 e 4 são do sistema de comando (ISO 13849-1), não da máquina",
      "Duas máquinas idênticas podem exigir soluções diferentes conforme layout, processo e acesso",
      "A classificação errada aparece nos dois extremos: subproteção perigosa e superproteção cara"
    ],
  toc: [
      { id: "o-mal-entendido", label: "O mal-entendido de origem" },
      { id: "o-que-a-norma-exige", label: "O que a norma realmente exige" },
      { id: "estimativa", label: "Como o risco é estimado" },
      { id: "por-zona", label: "Risco por zona, não por máquina" },
      { id: "categoria-comando", label: "Categoria e nível de desempenho do comando" },
      { id: "do-risco-a-solucao", label: "Do risco à solução: o caminho" },
      { id: "exemplos", label: "Exemplos aplicados" },
      { id: "priorizacao", label: "Usando o risco para priorizar investimento" },
      { id: "erros", label: "Erros de classificação" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Existe uma tabela de categorias de risco por tipo de máquina na NR-12?", answer: "Não. Não há na norma uma lista que diga, por exemplo, que prensa é categoria 3 e esteira é categoria 1. O que a NR-12 exige é que as medidas de proteção decorram de apreciação de riscos da máquina específica, conduzida conforme a ABNT NBR ISO 12100. O risco é estimado por zona e por fase de vida, considerando severidade, exposição e possibilidade de evitar o dano — e é dessa estimativa que decorre o nível de proteção necessário." },
      { question: "O que são as categorias B, 1, 2, 3 e 4?", answer: "São categorias de arquitetura do sistema de comando relacionado à segurança, definidas na ABNT NBR ISO 13849-1. Elas descrevem como o circuito de segurança é construído — canal simples ou redundante, com ou sem monitoramento e diagnóstico — e não classificam a máquina em si. A confusão é frequente porque as pessoas dizem 'máquina categoria 3' quando querem dizer 'função de segurança implementada em arquitetura categoria 3'." },
      { question: "Duas máquinas iguais podem ter classificações diferentes?", answer: "Sim, e isso é comum. O risco depende de fatores que vão além do modelo: layout e proximidade de pessoas, produto processado, frequência de acesso à zona, rotina de limpeza e regulagem, implementos e adaptações instalados, e experiência da equipe. Duas injetoras idênticas, uma isolada em célula e outra com operador alimentando manualmente a cada ciclo, apresentam exposição muito diferente e demandam soluções diferentes." },
      { question: "Superproteger é um problema?", answer: "Sim, por duas razões. A primeira é econômica: especificar arquitetura de alto nível onde o risco não exige consome orçamento que faltará em máquinas realmente críticas. A segunda é operacional e mais séria: proteção desproporcional ao risco tende a atrapalhar a rotina, e proteção que atrapalha é contornada. O objetivo é proporcionalidade — proteção compatível com o risco real, que permanece instalada." }
    ],
  content: [
`"Qual a categoria de risco da minha máquina?" é uma das perguntas mais frequentes sobre NR-12 — e parte de uma premissa equivocada.

**A NR-12 não traz uma tabela que classifique máquinas em categorias fixas de risco.** Não existe um anexo dizendo que torno é categoria 2 e prensa é categoria 3. O que a norma exige é que as medidas de proteção decorram de **apreciação de riscos** da máquina específica, no seu contexto real de uso.

A confusão tem uma origem identificável: a existência das **categorias B, 1, 2, 3 e 4** da ABNT NBR ISO 13849-1, que descrevem a arquitetura do sistema de comando de segurança — e não a máquina. Este artigo separa os dois conceitos e mostra como a classificação é feita na prática.`,

`## O mal-entendido de origem {#o-mal-entendido}

| O que as pessoas dizem | O que existe de fato |
| --- | --- |
| "Minha máquina é categoria 3" | A **função de segurança** foi implementada em arquitetura categoria 3 |
| "Qual a categoria de risco da NR-12?" | A NR-12 pede estimativa de risco, sem tabela de categorias por máquina |
| "Prensa é sempre categoria 4" | Depende do risco estimado naquela prensa, naquele uso |
| "Categoria de risco alta" | Provavelmente: risco estimado alto na zona avaliada |

A distinção não é preciosismo terminológico. Ela muda o método: quem procura a máquina numa tabela pula a etapa que a norma exige — a avaliação do risco real, naquela instalação, com aquele processo e aquela rotina de acesso.`,

`## O que a norma realmente exige {#o-que-a-norma-exige}

A NR-12 exige que as medidas de proteção adotadas decorram de **apreciação de riscos**, tomando como referência a ABNT NBR ISO 12100.

O processo, resumido:

1. **Determinar os limites da máquina** — uso previsto, limites de espaço e tempo, e o mau uso razoavelmente previsível
2. **Identificar perigos** em todas as zonas e em todas as fases de vida
3. **Estimar o risco** de cada perigo
4. **Avaliar** se o risco é aceitável ou exige redução
5. **Reduzir** aplicando a hierarquia: eliminar por projeto, proteger, informar

É no passo 3 que entra a "classificação" que as pessoas procuram — mas ela é **por perigo e por zona**, não por máquina inteira. E é no passo 5, ao especificar as medidas, que se define a categoria e o nível de desempenho do sistema de comando.

A metodologia completa, com o método HRN e modelo aplicado, está em [apreciação de risco NR-12: metodologia ISO 12100](/blog/apreciacao-de-risco-nr12-modelo-pratico). A distinção entre esse documento e a APR de atividade está em [o que é APR na NR-12](/blog/o-que-e-apr-nr12).`,

`## Como o risco é estimado {#estimativa}

A estimativa combina quatro parâmetros. Os nomes variam entre métodos, mas o conteúdo é este:

| Parâmetro | Pergunta | Exemplos de gradação |
| --- | --- | --- |
| **Severidade do dano** | Quão grave é a lesão possível? | Leve reversível · grave reversível · irreversível · fatal |
| **Frequência de exposição** | Com que frequência alguém fica exposto? | Rara · ocasional · frequente · contínua |
| **Probabilidade de ocorrência** | Qual a chance do evento perigoso? | Improvável · possível · provável |
| **Possibilidade de evitar** | Dá para perceber e escapar? | Possível · possível sob condições · impossível |

A combinação desses parâmetros produz um nível de risco, e é dele que decorre a necessidade e a robustez da medida de proteção.

Dois pontos que mudam resultado com frequência:

**Severidade domina.** Um risco de amputação com exposição rara costuma exigir medida mais robusta que um risco de corte superficial com exposição contínua. Consequência irreversível pesa muito.

**"Possibilidade de evitar" é frequentemente superestimada.** Equipes tendem a assumir que o operador percebe e reage. Em movimento rápido, em ponto cego, ou em situação de rotina automatizada pelo hábito, a possibilidade real de escapar é baixa.`,

`## Risco por zona, não por máquina {#por-zona}

Uma máquina não tem "um" risco. Tem tantos quantos forem suas zonas perigosas e suas fases de vida.

Um centro de usinagem, por exemplo, apresenta simultaneamente:

| Zona / situação | Perigo típico |
| --- | --- |
| Área de corte durante o ciclo | Contato com ferramenta, projeção de cavaco e fluido |
| Troca de ferramenta | Esmagamento, corte |
| Carga e descarga de peça | Esmagamento, ergonômico |
| Transportador de cavacos | Arrasto |
| Painel elétrico | Choque, arco elétrico |
| Sistema hidráulico | Jato de fluido sob pressão |
| Limpeza interna | Contato com ferramenta, escorregamento, químico |
| Manutenção | Energia acumulada, movimento inesperado |

Cada uma exige avaliação própria — e pode resultar em medida diferente. É por isso que a apreciação não termina em um número único por máquina.

E é por isso, também, que **duas máquinas idênticas podem exigir soluções diferentes**: se em uma o operador acessa a zona a cada ciclo e na outra a alimentação é automática, a exposição muda radicalmente.`,

`## Categoria e nível de desempenho do comando {#categoria-comando}

Quando a medida escolhida envolve um sistema de comando — proteção móvel intertravada, cortina óptica, parada de emergência —, é preciso definir **quão confiável** esse sistema precisa ser.

É aqui que entram as categorias da ABNT NBR ISO 13849-1:

| Categoria | Arquitetura, em linguagem prática |
| --- | --- |
| **B** | Componentes básicos, sem requisitos especiais de segurança |
| **1** | Componentes e princípios bem experimentados, canal simples |
| **2** | Canal simples com verificação periódica da função |
| **3** | Canal redundante — uma falha isolada não elimina a função de segurança |
| **4** | Redundância com monitoramento contínuo — falhas acumuladas são detectadas |

E o **nível de desempenho (PL)**, de "a" a "e", expressa a confiabilidade da função de segurança como um todo, considerando arquitetura, taxa de falha dos componentes, cobertura de diagnóstico e resistência a falhas de causa comum.

O raciocínio correto é sempre nesta ordem:

**risco estimado → nível de desempenho requerido → arquitetura e componentes que o atendem**

Não o contrário. Escolher a chave de segurança primeiro e depois justificar a categoria é inverter o método — e é como se produz uma instalação com componente correto e circuito inadequado. Os critérios aplicados a painéis estão em [painel elétrico NR-12: categoria de segurança](/blog/painel-eletrico-nr12-categoria-seguranca).`,

`## Do risco à solução: o caminho {#do-risco-a-solucao}

| Etapa | Resultado |
| --- | --- |
| 1. Identificar a zona e o perigo | "Zona de prensagem, risco de amputação" |
| 2. Estimar o risco | Severidade alta, exposição frequente, evitar improvável |
| 3. Avaliar | Risco inaceitável — exige redução |
| 4. Definir a medida na hierarquia | Eliminar não é viável; proteger é o caminho |
| 5. Escolher o tipo de proteção | Acesso frequente → proteção móvel intertravada |
| 6. Definir o nível de desempenho requerido | Decorre do risco estimado |
| 7. Especificar arquitetura e componentes | Categoria, redundância, monitoramento, dispositivo |
| 8. Implementar | Fabricação, montagem, integração elétrica |
| 9. **Validar** | Testar que a função responde corretamente à falha |

A etapa 9 é a mais omitida. Instalar uma chave de segurança não é o mesmo que validar que a função de segurança atua quando um canal falha. Sem validação, a medida pode estar fisicamente instalada e não cumprir o papel.

A escolha do tipo de proteção na etapa 5 tem critérios próprios, detalhados em [proteção fixa ou móvel: qual escolher para cada máquina](/blog/qual-protecao-escolher-nr12-fixa-ou-movel).`,

`## Exemplos aplicados {#exemplos}

Os casos abaixo são ilustrativos do raciocínio — **não substituem a apreciação de riscos** de cada instalação.

### Prensa excêntrica com alimentação manual

Severidade: amputação. Exposição: a cada ciclo. Possibilidade de evitar: baixa, pelo movimento rápido.
→ Risco alto. Solução tipicamente robusta, com redundância e monitoramento, combinando barreira física e dispositivo de detecção.

### Esteira transportadora fechada, acesso só em manutenção

Severidade: arrasto, grave. Exposição: rara, apenas manutenção programada.
→ Risco moderado. Proteção fixa com remoção por ferramenta, associada a procedimento de bloqueio de energia, costuma ser adequada.

### Torno convencional de oficina

Severidade: enrolamento e corte, grave. Exposição: frequente, para medição e troca de peça.
→ Risco relevante. Proteção móvel intertravada, com nível de desempenho definido conforme a estimativa.

### Misturador com grande inércia

Severidade: esmagamento, muito grave. Exposição: acesso para limpeza. Particularidade: as pás continuam girando após o comando de parada.
→ Além da proteção móvel, o tempo de parada maior que o tempo de acesso exige **bloqueio** até a confirmação de parada.

O último caso mostra por que a tabela pronta falha: duas máquinas com a mesma proteção móvel podem ter exigências completamente diferentes por causa da inércia.`,

`## Usando o risco para priorizar investimento {#priorizacao}

Nenhuma indústria adequa todo o parque de uma vez. A estimativa de risco é o instrumento que define a ordem — e é o argumento que sustenta o orçamento.

Critérios de priorização:

| Critério | Peso na decisão |
| --- | --- |
| Severidade do dano possível | Alto — irreversível vem primeiro |
| Número de pessoas expostas | Alto |
| Frequência de exposição | Alto |
| Histórico de acidentes e quase acidentes | Alto — evidência concreta |
| Existência de burla das proteções atuais | Alto — indica risco ativo |
| Facilidade de implementação | Moderado — permite ganhos rápidos |
| Custo | Moderado — não deve inverter a ordem por severidade |

Um plano bem construído combina duas frentes: as máquinas de maior risco, que exigem projeto e investimento, e as correções simples e rápidas que eliminam risco imediato com pouco recurso — proteção de transmissão ausente, botão de emergência inoperante, trava de gancho faltando.

A execução sem paralisar a produção é assunto próprio, tratado em [adequação NR-12 sem parar a produção](/blog/adequacao-nr12-industria).`,

`## Erros de classificação {#erros}

| Erro | Consequência |
| --- | --- |
| Procurar a máquina numa tabela pronta | Pula a apreciação que a norma exige |
| Classificar a máquina inteira com um número | Zonas de risco distintas ficam sem tratamento |
| Avaliar só a operação normal | Manutenção, limpeza e regulagem ficam de fora |
| Confundir categoria do comando com categoria da máquina | Especificação desconectada do risco real |
| Escolher o componente antes de definir o PL requerido | Componente certo em arquitetura inadequada |
| Superestimar a possibilidade de evitar o dano | Subestima o risco e gera subproteção |
| Copiar a apreciação de máquina similar | Ignora layout, processo e rotina de acesso |
| Superproteger por precaução | Consome orçamento e gera burla |
| Não revisar após modificação | Documento desatualizado equivale a inexistente |

Os dois últimos merecem ênfase.

**Superproteção não é conservadorismo seguro.** Proteção desproporcional atrapalha a rotina, é contornada, e o resultado prático é uma máquina sem proteção — com o agravante do investimento perdido.

**Modificação mata a validade da apreciação.** Máquina que recebeu esteira de alimentação, robô ou implemento é, do ponto de vista da avaliação, uma máquina nova.

## Próximo passo {#proximo-passo}

A pergunta útil não é "qual a categoria da minha máquina", e sim "quais são as zonas de risco desta máquina, qual o risco estimado em cada uma, e qual medida — com qual nível de desempenho — é proporcional a ele".

A VSM Engenharia executa apreciação de riscos, projeto de proteções, definição de nível de desempenho, implantação, validação e laudo NR-12 em todo o Sudeste, com engenheiros habilitados e ART.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [adequação NR-12](/servicos/nr12) e os artigos [apreciação de risco NR-12](/blog/apreciacao-de-risco-nr12-modelo-pratico) e [adequação NR-12 passo a passo](/blog/adequacao-nr12-passo-a-passo).`
    ],
};
