/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Inspeção em talhas conforme NR-11 e NR-12: tipos, critérios de descarte de corrente e cabo, freio, ponto de fixação, teste de carga e periodicidade.",
  keywords: ["inspeção de talha", "inspeção talha elétrica", "talha nr11", "laudo de talha", "critérios de descarte corrente de carga"],
  keyTakeaways: [
      "Talha é máquina de elevação sob NR-11 e NR-12 — inspeção e laudo seguem o mesmo rigor de uma ponte rolante",
      "Corrente de carga tem critério objetivo de descarte por alongamento e desgaste de diâmetro do elo",
      "O ponto de fixação da talha (viga, monovia, trilho) faz parte do escopo — é o erro mais comum deixá-lo de fora",
      "Talha manual barata e sem plaqueta legível é achado recorrente e reprova em auditoria"
    ],
  toc: [
      { id: "talha-nas-normas", label: "A talha nas normas NR-11 e NR-12" },
      { id: "tipos-de-talha", label: "Tipos de talha e o que muda na inspeção" },
      { id: "escopo", label: "Escopo da inspeção" },
      { id: "corrente-de-carga", label: "Corrente de carga — critérios de descarte" },
      { id: "cabo-de-aco", label: "Cabo de aço — critérios de descarte" },
      { id: "gancho", label: "Gancho e trava de segurança" },
      { id: "freio-limitador", label: "Freio, embreagem e limitador de carga" },
      { id: "fixacao", label: "Fixação, trole e estrutura de suporte" },
      { id: "eletrica", label: "Parte elétrica e comando" },
      { id: "teste-de-carga", label: "Teste de carga em talha" },
      { id: "periodicidade", label: "Periodicidade e registro" },
      { id: "erros-comuns", label: "Erros comuns em campo" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Talha manual de corrente precisa de inspeção e laudo?", answer: "Sim. A NR-11 e a NR-12 não distinguem entre acionamento manual e elétrico: o que caracteriza a obrigação é a função de elevar carga suspensa. Talha manual de 1 t sustentando carga sobre área de circulação apresenta o mesmo risco de queda de uma talha elétrica. Na prática, talhas manuais são as mais negligenciadas — compradas avulsas, sem registro, sem plaqueta legível e sem histórico de inspeção. É achado recorrente em auditoria." },
      { question: "Como sei quando descartar a corrente de carga de uma talha?", answer: "Por medição, não por aparência. Mede-se o comprimento de um trecho com número definido de elos e compara-se com o comprimento original ou nominal: alongamento acima do limite especificado pelo fabricante indica descarte. Mede-se também o diâmetro do elo em duas direções perpendiculares na região de contato entre elos: redução acima do limite reprova. Elo torcido, soldado, com trinca, com corrosão em cavidade ou com marca de solda elétrica é descarte imediato, sem medição." },
      { question: "Posso substituir a corrente da talha por outra do mesmo diâmetro?", answer: "Não sem verificação técnica. Corrente de carga para elevação é componente calibrado, com grau de resistência específico (grau 80, grau 100 e equivalentes) e passo compatível com a roda de carga da talha. Corrente comercial de mesmo diâmetro, ainda que visualmente idêntica, pode ter carga de ruptura muito inferior e passo incompatível, provocando salto de corrente na roda. A substituição usa peça do fabricante ou equivalente com certificado de rastreabilidade." },
      { question: "A inspeção da talha inclui a viga em que ela está pendurada?", answer: "Sim, e essa é a omissão mais frequente. A talha transfere integralmente a carga ao ponto de fixação: monovia, trilho, viga do prédio, olhal ou tripé. Inspecionar a talha e ignorar a fixação deixa de fora exatamente o elemento que costuma ser improvisado — perfil sem dimensionamento, solda de campo, olhal fabricado na oficina sem memorial. O laudo deve registrar a condição e a origem do ponto de fixação." }
    ],
  content: [
`A **talha** é o equipamento de elevação mais disseminado da indústria brasileira — e o menos controlado. Está em oficina de manutenção, linha de montagem, almoxarifado, sala de bombas, carga e descarga. Muitas foram compradas avulsas, sem número de patrimônio, sem manual e sem qualquer registro de inspeção.

Do ponto de vista normativo, no entanto, **talha é máquina de elevação de carga**, sujeita à NR-11 e à NR-12 exatamente como uma ponte rolante. A diferença é de porte, não de natureza do risco: carga suspensa sobre pessoas.

Este artigo apresenta o escopo da inspeção em talhas de corrente e de cabo, manuais e elétricas, com os critérios objetivos de descarte de cada componente, a avaliação do ponto de fixação e a documentação resultante.`,

`## A talha nas normas NR-11 e NR-12 {#talha-nas-normas}

| Referência | O que exige em relação à talha |
| --- | --- |
| **NR-11** | Inspeção e manutenção de equipamentos de movimentação de materiais, com registro; capacidade de carga afixada em local visível; operação por trabalhador capacitado |
| **NR-12** | Comando seguro, parada de emergência quando aplicável, dispositivos de segurança íntegros, manutenção com registro, Anexo XII para equipamentos de guindar |
| **NR-10** | Instalação elétrica e intervenção em talha elétrica |
| **NR-35** | Trabalho em altura durante instalação ou manutenção |
| **NBR ISO 4309** | Critérios de inspeção e descarte de cabo de aço |
| **Manual do fabricante** | Limites de desgaste de corrente, roda de carga, freio e gancho |

Dois requisitos da NR-11 são particularmente cobrados em fiscalização e falham com frequência:

1. **Capacidade de carga visível**: a plaqueta original apagada, pintada por cima ou ausente é não conformidade direta. Etiqueta improvisada com caneta não substitui a identificação de fábrica.
2. **Registro de inspeção**: a empresa precisa demonstrar histórico, não apenas afirmar que "a manutenção olha".`,

`## Tipos de talha e o que muda na inspeção {#tipos-de-talha}

| Tipo | Acionamento | Ponto crítico da inspeção |
| --- | --- | --- |
| **Talha manual de corrente** | Corrente de manobra | Corrente de carga, roda de carga, freio de fricção, gancho |
| **Talha de alavanca (catraca)** | Alavanca manual | Catraca, lingueta, corrente ou cabo, gancho, trava |
| **Talha elétrica de corrente** | Motor elétrico | Corrente de carga, freio eletromagnético, fim de curso, botoeira |
| **Talha elétrica de cabo de aço** | Motor elétrico | Cabo, tambor, moitão, freio, fim de curso |
| **Talha pneumática** | Ar comprimido | Corrente ou cabo, válvulas, freio, controle de vazão |
| **Talha com trole** | Manual ou motorizado | Rodas do trole, batentes, alinhamento no perfil |

A talha de alavanca merece atenção específica: por ser portátil e frequentemente usada para **tracionar** e não apenas elevar, sofre esforço fora da condição de projeto. Lingueta desgastada e alavanca com extensão improvisada (tubo acoplado para aumentar o braço) são achados que caracterizam risco grave.`,

`## Escopo da inspeção {#escopo}

A inspeção técnica de talha cobre sete frentes:

1. **Identificação** — plaqueta de capacidade, fabricante, modelo, número de série, registro patrimonial
2. **Componentes de sustentação** — corrente ou cabo, gancho superior e inferior, moitão, roldanas
3. **Mecanismo** — roda de carga, redutor, freio, embreagem de sobrecarga
4. **Estrutura e fixação** — trole, viga, monovia, olhal, ponto de ancoragem
5. **Parte elétrica** — botoeira, cabo de comando, fim de curso, aterramento, painel
6. **Dispositivos de segurança** — trava de gancho, fim de curso, limitador de carga, parada de emergência
7. **Documentação** — manual, histórico de manutenção, certificados, laudos anteriores

Cada frente tem critério próprio. O que segue detalha os componentes de maior consequência.`,

`## Corrente de carga — critérios de descarte {#corrente-de-carga}

A corrente de carga é o componente que mais se avalia por **medição**, não por inspeção visual.

| Verificação | Como medir | Critério |
| --- | --- | --- |
| **Alongamento** | Medir um trecho com número definido de elos e comparar com o comprimento nominal | Alongamento acima do limite do fabricante reprova |
| **Desgaste do elo** | Medir o diâmetro do elo em duas direções perpendiculares, na região de contato | Redução acima do limite especificado reprova |
| **Deformação de elo** | Inspeção visual e gabarito | Elo torcido, aberto ou empenado reprova |
| **Trincas** | Visual com lupa; líquido penetrante em caso de dúvida | Qualquer trinca reprova |
| **Corrosão** | Visual | Corrosão em cavidade (pite) reprova |
| **Dano térmico** | Visual | Marca de respingo de solda ou aquecimento reprova |
| **Emenda ou reparo** | Visual | Elo soldado em campo reprova imediatamente |

Regras práticas que evitam acidente:

- **Corrente não se repara.** Substitui-se o comprimento inteiro, com peça compatível em grau e passo.
- **Corrente de carga não é corrente de amarração.** Grau, tolerância dimensional e certificação são distintos.
- **A medição precisa ser registrada.** Sem valor numérico no laudo, não há como acompanhar a evolução do desgaste entre inspeções.

Um detalhe operacional relevante: em talha de dois ramais, a corrente tende a desgastar de forma desigual. A medição deve cobrir os trechos que efetivamente passam pela roda de carga na faixa de altura de uso habitual.`,

`## Cabo de aço — critérios de descarte {#cabo-de-aco}

Em talhas de cabo, aplica-se a **ABNT NBR ISO 4309**, com a mesma lógica usada em ponte rolante:

- Contagem de **arames rompidos** em trechos de 6d e 30d, com limite dependente da construção do cabo e do grupo do mecanismo
- **Redução do diâmetro** por desgaste externo ou colapso do núcleo
- **Corrosão** externa e interna
- **Amassamento, achatamento e dobra**
- **Gaiola de passarinho** e saída de pernas
- **Dano térmico** por respingo de solda
- **Arames rompidos junto à terminação**

O detalhamento dos critérios e do método de registro está em [inspeção em ponte rolante](/blog/inspecao-ponte-rolante-nr11-procedimento). Em talha, um cuidado adicional: a proximidade entre tambor e moitão faz com que um mesmo trecho de cabo trabalhe repetidamente sobre a mesma polia, concentrando o desgaste em uma faixa curta.`,

`## Gancho e trava de segurança {#gancho}

O gancho da talha segue o mesmo protocolo de medição aplicado a qualquer equipamento de elevação: **abertura de boca**, **desgaste da região de apoio da carga** e **torção** são medidos e comparados com as dimensões originais, registradas na primeira inspeção. A presença de trincas é verificada por ensaio — líquido penetrante ou partícula magnética —, e trinca detectada reprova sem possibilidade de reparo.

Completam a avaliação o giro livre do gancho, o estado do rolamento, da porca e do elemento de travamento, e — em talhas com gancho superior de suspensão — o mesmo protocolo aplicado ao ponto de fixação.

A **ausência da trava de segurança** é a não conformidade mais frequente em talhas. É peça de custo baixo e substituição imediata, e sua falta caracteriza risco direto de desengate da carga. O padrão que se encontra em campo é revelador: a trava se perde, ninguém registra, e o equipamento segue operando por anos sem ela.

Gancho não se recupera por solda ou desempeno a quente. Componente fora de critério é substituído — reparo improvisado em gancho caracteriza risco grave e iminente.

> **Quantas talhas sua planta tem sem laudo?** A VSM Engenharia executa inspeção em lote de talhas, monovias e pontes rolantes com laudo individual e ART. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Freio, embreagem e limitador de carga {#freio-limitador}

| Componente | Verificação |
| --- | --- |
| **Freio de talha manual** | Retenção da carga em qualquer posição; ausência de descida com a corrente de manobra solta |
| **Freio eletromagnético** | Espessura da lona, entreferro, tempo de resposta, retenção sob carga |
| **Embreagem de sobrecarga** | Atuação no valor especificado; não pode estar travada nem excessivamente frouxa |
| **Limitador de carga** | Presente onde exigido; ajuste aferido |
| **Fim de curso superior e inferior** | Atuação efetiva antes do batente mecânico |
| **Batente mecânico** | Íntegro, sem deformação por impacto repetido |

O teste do freio é conclusivo e simples: **carga suspensa, comando neutro, observação de deslizamento**. Qualquer descida perceptível reprova.

A embreagem de sobrecarga merece uma observação de campo: é comum encontrá-la **travada deliberadamente** por ajuste indevido, para permitir içamento acima da capacidade. Essa alteração transfere ao operador uma capacidade que a estrutura não tem, e é achado de risco grave.`,

`## Fixação, trole e estrutura de suporte {#fixacao}

O ponto de fixação faz parte do escopo — e é onde se concentram as improvisações.

A avaliação alcança o **perfil da monovia** (dimensão compatível, ausência de flecha permanente, estado das emendas), a **fixação da monovia à edificação** (chumbadores, tirantes, soldas e contraventamento), os **batentes de fim de curso** nas duas extremidades e as **rodas do trole**, quanto a desgaste, giro livre e alinhamento no perfil.

Em instalações com **olhal, gancho de suspensão ou estrutura provisória** — tripé, cavalete, viga suspensa —, a verificação vai além do estado físico: interessa a **origem** do elemento. Olhal fabricado na oficina sem memorial, perfil soldado na tesoura do galpão sem verificação da capacidade e viga improvisada para um serviço pontual são achados corriqueiros.

O caso clássico é este: talha de 2 t pendurada em perfil soldado à estrutura do telhado, sem qualquer cálculo da capacidade daquele ponto. O equipamento passa na inspeção; a instalação não. O laudo precisa deixar essa distinção explícita, porque a empresa costuma acreditar que "a talha está laudada" quando o elo mais frágil sequer foi avaliado.

Quando não existe memorial da fixação, a solução técnica é o dimensionamento do ponto de suspensão — serviço tratado em [projetos mecânicos](/servicos/projetos-mecanicos).`,

`## Parte elétrica e comando {#eletrica}

Em talhas elétricas e pneumáticas, a avaliação cobre a **botoeira** — identificação clara dos movimentos, retorno automático ao neutro, vedação adequada ao ambiente e cabo de suspensão independente do cabo elétrico —, a parada de emergência quando aplicável à instalação, o estado do cabo de alimentação e do festão, o aterramento da carcaça e da estrutura, as proteções elétricas e o grau de proteção do painel frente ao ambiente.

Um item merece verificação obrigatória após qualquer intervenção no circuito: o **sentido de rotação**. Inversão de fases faz o botão "sobe" descer a carga — falha banal, perigosa e que só aparece no primeiro uso após a manutenção, quando já há carga no gancho.

Outro ponto específico de talha é o **cabo de suspensão da botoeira**. Quando ele não existe ou está rompido, o peso da botoeira passa a ser sustentado pelo cabo elétrico, que não foi dimensionado para isso — e a falha se manifesta como perda de comando durante a operação.

Os critérios de comando seguro estão detalhados em [painel elétrico NR-12](/blog/painel-eletrico-nr12-categoria-seguranca).`,

`## Teste de carga em talha {#teste-de-carga}

O ensaio segue a mesma lógica aplicada aos equipamentos de levantamento: **aplicação progressiva de carga** conforme a ABNT NBR 16147, com prevalência do manual do fabricante quando este impuser condição mais restritiva.

Situações em que o ensaio é exigido em talha:

- Entrada em operação, no ponto definitivo de instalação
- Após substituição de corrente, cabo, gancho, freio ou redutor
- Após reforma ou reparo estrutural do trole ou da monovia
- Após acidente, sobrecarga ou queda de carga
- Após realocação para outro ponto de fixação
- Reativação após inatividade prolongada

Como a talha frequentemente se apoia em estrutura não dimensionada, o ensaio verifica simultaneamente equipamento e instalação — razão adicional para não dispensá-lo em mudança de local. O procedimento completo está em [como funciona um teste de carga](/blog/como-funciona-teste-de-carga).`,

`## Periodicidade e registro {#periodicidade}

| Nível | Executor | Frequência típica |
| --- | --- | --- |
| **Verificação pré-uso** | Operador | A cada uso ou início de turno |
| **Inspeção periódica de manutenção** | Equipe de manutenção | Trimestral a semestral, conforme uso |
| **Inspeção técnica com laudo e ART** | Engenheiro habilitado | Anual; semestral em uso intensivo ou ambiente agressivo |
| **Inspeção extraordinária** | Engenheiro habilitado | Após acidente, sobrecarga, reforma ou realocação |

O que o registro precisa conter, no mínimo: identificação individual do equipamento (número de patrimônio ou TAG), data, executor, itens verificados, medições registradas com valor numérico, não conformidades e providências.

**Inventário é pré-requisito.** Empresas com dezenas de talhas espalhadas costumam não saber quantas possuem. O primeiro entregável de um programa de conformidade é o levantamento com identificação individual — sem ele, não há como demonstrar controle em auditoria.`,

`## Erros comuns em campo {#erros-comuns}

| Erro | Consequência |
| --- | --- |
| Tratar talha como "ferramenta", não como equipamento de elevação | Fica fora do programa de inspeção e do inventário |
| Plaqueta de capacidade ilegível ou ausente | Não conformidade direta com a NR-11 |
| Corrente substituída por corrente comercial | Carga de ruptura inferior e passo incompatível |
| Trava de gancho ausente | Risco direto de desengate da carga |
| Embreagem de sobrecarga travada | Permite içamento acima da capacidade |
| Uso de talha de alavanca com extensão na alavanca | Esforço acima do previsto no projeto |
| Ignorar o ponto de fixação na inspeção | Elemento mais improvisado do conjunto fica sem avaliação |
| Talha usada para tracionar carga lateralmente | Solicitação fora da condição de projeto |
| Laudo coletivo genérico para várias talhas | Sem identificação individual, não comprova nada |

O último item merece ênfase: **laudo precisa ser individual por equipamento**. Documento único cobrindo "as talhas da planta", sem número de série e sem medições, é rejeitado em auditoria e não sustenta a empresa em caso de acidente.

## Próximo passo {#proximo-passo}

Talha é o equipamento de elevação mais comum e menos gerenciado da indústria. Estruturar o controle começa pelo inventário, segue pela inspeção individual com medições registradas e se consolida em laudo com ART — mesmo padrão aplicado a equipamentos de maior porte.

A VSM Engenharia executa inspeção de talhas, monovias, pontes rolantes e pórticos em todo o Sudeste, com engenheiro mecânico, ensaios, teste de carga, laudo individual e ART.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [inspeção NR-11](/servicos/nr11) e os artigos [inspeção em ponte rolante](/blog/inspecao-ponte-rolante-nr11-procedimento) e [teste de carga em ponte rolante](/blog/teste-de-carga-ponte-rolante).

Veja também [inspeção em pórticos e semipórticos](/blog/inspecao-portico-semiportico-nr11) e [inspeção em guindastes](/blog/inspecao-guindaste-nr11).`
    ],
};
