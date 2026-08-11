/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Como escolher empresa de adequação NR-12: critérios técnicos, modelos de fornecedor, o que exigir na proposta, sinais de alerta e validação do laudo.",
  keywords: ["empresas de adequação nr12", "empresa de adequação nr12", "contratar adequação nr12", "como escolher empresa nr12"],
  keyTakeaways: [
      "O mercado tem três modelos de fornecedor, e cada um tem um viés previsível na solução proposta",
      "Adequação sem apreciação de riscos prévia é venda de proteção, não engenharia",
      "Exija especificação técnica das medidas: tipo, material, distância e nível de desempenho requerido",
      "Proteção que conflita com a rotina é removida — o fornecedor precisa entender o processo"
    ],
  toc: [
      { id: "o-que-e-adequacao", label: "O que a adequação envolve" },
      { id: "tres-modelos", label: "Os três modelos de fornecedor" },
      { id: "criterios", label: "Critérios de avaliação" },
      { id: "proposta", label: "O que exigir na proposta" },
      { id: "sinais-de-alerta", label: "Sinais de alerta" },
      { id: "custo", label: "Como o custo se forma" },
      { id: "validar", label: "Como validar a entrega" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Preciso contratar uma empresa ou posso adequar internamente?", answer: "A execução pode ser interna, mas a apreciação de riscos e o laudo exigem engenheiro com CREA ativo e atribuição compatível, com ART recolhida. Muitas indústrias adotam um modelo misto: contratam a apreciação de riscos e o projeto com engenharia externa, e executam a fabricação e a montagem com equipe própria ou com serralheria local, sob supervisão técnica. É um arranjo eficiente quando há estrutura interna de manutenção." },
      { question: "A empresa que vende a proteção pode fazer a apreciação de riscos?", answer: "Pode, desde que tenha profissional habilitado e recolha ART. O ponto de atenção não é legal, é de viés: quem vende a solução tem incentivo natural para que a apreciação conclua pela solução que vende. Isso não significa má-fé — significa que vale pedir a fundamentação técnica das medidas propostas e, em parques grandes, considerar separar quem avalia de quem fornece." },
      { question: "Quanto tempo leva a adequação de um parque de máquinas?", answer: "Depende do tamanho do parque e da criticidade. A apreciação de riscos costuma levar de 1 a 3 dias por máquina em campo, mais análise. O projeto das medidas, de 1 a 4 semanas. A fabricação e a montagem variam com o volume e com a janela de parada disponível. Um parque de 20 máquinas raramente se resolve em menos de 3 a 6 meses do início ao laudo final, e adequar tudo de uma vez normalmente não é viável sem parar produção." },
      { question: "O laudo NR-12 tem validade definida em norma?", answer: "A norma não fixa um prazo de validade em meses. Na prática, o laudo precisa ser revisado sempre que houver modificação na máquina, mudança de processo ou de layout, adaptação de acessório, acidente ou quase acidente, e atualização normativa relevante. Muitas empresas adotam revisão anual como rotina de gestão, o que é boa prática, mas o gatilho técnico é a mudança, não o calendário." }
    ],
  content: [
`Adequação NR-12 é o serviço de conformidade com maior variação de qualidade do mercado industrial — e com o maior custo de erro. Uma proteção mal especificada não é apenas dinheiro perdido: é uma barreira que o operador vai contornar, um intertravamento que a produção vai ponteirar, e um laudo que não se sustenta.

O problema começa na contratação. Muita empresa compra adequação como se comprasse serralheria: pede orçamento de "gradil para as máquinas" e escolhe o menor preço por metro. O resultado é previsível — proteção instalada, produção reclamando, proteção removida em três meses, dinheiro gasto duas vezes.

Este artigo apresenta os critérios para avaliar fornecedores de adequação NR-12, os três modelos de empresa que existem no mercado e o que precisa constar na proposta.`,

`## O que a adequação envolve {#o-que-e-adequacao}

Adequação NR-12 completa tem cinco etapas, e um fornecedor pode cobrir todas ou apenas parte:

| Etapa | Entrega |
| --- | --- |
| **1. Inventário e priorização** | Lista das máquinas com identificação individual e ordem de execução por criticidade |
| **2. Apreciação de riscos** | Avaliação técnica por máquina, em todas as fases de vida, com ART |
| **3. Projeto das medidas** | Especificação de proteções, dispositivos, comando seguro e nível de desempenho |
| **4. Execução** | Fabricação, montagem, integração elétrica e programação |
| **5. Validação e laudo** | Verificação de que a medida funciona como especificado, laudo e ART |

A etapa 2 é a fundação. Adequação que começa direto na etapa 4 — comprar e instalar proteção — é venda de produto, não engenharia. O conteúdo e a metodologia estão em [apreciação de risco NR-12: metodologia ISO 12100](/blog/apreciacao-de-risco-nr12-modelo-pratico), e a distinção entre os documentos em [o que é APR na NR-12](/blog/o-que-e-apr-nr12).

A etapa 5 também costuma ser omitida. Instalar uma chave de segurança não é o mesmo que validar que a função de segurança responde corretamente à falha. Sem validação, a medida pode estar instalada e não funcionar.`,

`## Os três modelos de fornecedor {#tres-modelos}

O mercado tem três perfis, cada um com uma força e um viés previsível:

| Modelo | Força | Viés a observar |
| --- | --- | --- |
| **Engenharia consultiva** | Apreciação e projeto independentes, sem interesse na solução vendida | Pode não executar — você precisa contratar a fabricação à parte |
| **Fabricante ou integrador** | Executa rápido, domina a tecnologia que representa | Tende a especificar a solução que fabrica ou representa |
| **Serralheria com engenheiro contratado** | Preço baixo em estrutura metálica | Frequentemente fraco em comando seguro, intertravamento e nível de desempenho |

Nenhum modelo é errado. O erro é contratar sem saber qual deles se está contratando.

Dois arranjos que funcionam bem na prática:

- **Parque grande e crítico**: separar quem faz a apreciação de riscos de quem fornece a solução. O custo adicional da avaliação independente costuma se pagar em especificação mais enxuta.
- **Parque pequeno ou médio**: fornecedor único, desde que tenha engenheiro próprio com atribuição em máquinas e demonstre competência tanto em estrutura quanto em comando seguro.

O ponto fraco mais comum do terceiro modelo é a parte elétrica. Estrutura metálica bem feita com intertravamento mal integrado é uma adequação que reprova exatamente onde importa — os critérios estão em [painel elétrico NR-12: categoria de segurança](/blog/painel-eletrico-nr12-categoria-seguranca).`,

`## Critérios de avaliação {#criterios}

| # | Critério | O que verificar |
| --- | --- | --- |
| 1 | **Engenheiro com atribuição em máquinas** | CREA ativo; mecânica, eletricista, controle e automação ou segurança do trabalho |
| 2 | **ART** | Recolhida para apreciação, projeto e laudo |
| 3 | **Metodologia declarada** | Referência à ABNT NBR ISO 12100 e critérios de estimativa explícitos |
| 4 | **Cobertura de todas as fases de vida** | Operação, regulagem, limpeza, manutenção, troca de ferramenta |
| 5 | **Competência em comando seguro** | Sabe definir e implementar nível de desempenho conforme ISO 13849-1 |
| 6 | **Especificação técnica das medidas** | Tipo, material, distância de segurança, tecnologia de intertravamento |
| 7 | **Validação pós-instalação** | Testa a função de segurança, não apenas a instalação |
| 8 | **Entendimento do processo produtivo** | Pergunta sobre frequência de acesso, turnos, rotina de limpeza e troca |
| 9 | **Documentação entregue** | Apreciação, projeto, memorial, diagramas, manual e laudo |
| 10 | **Plano de execução sem parar a produção** | Sequenciamento por criticidade e uso de janelas de manutenção |

O critério 8 é o que mais diferencia fornecedores na prática. Adequação é um problema de engenharia **e** de processo: proteção que impede uma rotina necessária será contornada. Fornecedor que não pergunta quantas vezes por turno o operador acessa a zona vai especificar errado — a lógica de decisão está em [proteção fixa ou móvel: qual escolher para cada máquina](/blog/qual-protecao-escolher-nr12-fixa-ou-movel).`,

`## O que exigir na proposta {#proposta}

- ☐ **Lista das máquinas** cobertas, com identificação individual (TAG, fabricante, série)
- ☐ **Etapas incluídas** — apreciação, projeto, execução, validação, laudo
- ☐ **Metodologia** da apreciação de riscos declarada
- ☐ **Fases de vida** que serão avaliadas
- ☐ **Nível de detalhe da especificação** — a proposta gera projeto executável ou apenas recomendações?
- ☐ **Responsável técnico** identificado, com CREA
- ☐ **ART** de cada etapa
- ☐ **Prazo por etapa** e janela de parada necessária
- ☐ **O que não está incluso** — fabricação, montagem, programação, peças
- ☐ **Critério de validação** da eficácia das medidas
- ☐ **Garantia** sobre a solução implantada
- ☐ **Condições de revisão** se a máquina for modificada depois

O item mais decisivo é o quinto. Uma apreciação que conclui "instalar proteção na zona de prensagem" não é executável: falta tipo, material, distância, tecnologia de intertravamento e nível de desempenho. Sem isso, o problema volta para você na hora de comprar.

> **Precisa de apreciação e projeto com ART?** A VSM Engenharia executa adequação NR-12 completa em todo o Sudeste. [Fale com um engenheiro](/contato).`,

`## Sinais de alerta {#sinais-de-alerta}

| Sinal | O que indica |
| --- | --- |
| **Orçamento por metro de gradil, sem apreciação** | Venda de estrutura, não adequação |
| **Não pergunta sobre a rotina de operação** | Vai especificar solução que conflita com a produção |
| **Só fala de proteção física, nunca de comando** | Provável fraqueza em intertravamento e nível de desempenho |
| **Promete "deixar a fábrica em conformidade" sem visitar** | Diagnóstico impossível sem campo |
| **Laudo prometido antes da execução das medidas** | Laudo de conformidade sem conformidade |
| **Sem ART nas etapas técnicas** | Sem responsabilidade atribuída |
| **Solução idêntica para máquinas diferentes** | Não houve apreciação individual |
| **Ignora manutenção e limpeza** | Metade das fases de vida fica sem avaliação |
| **Não menciona validação** | Instalação sem verificação de eficácia |

O quinto sinal merece destaque: **laudo não é entregável de contratação, é resultado de conformidade alcançada**. Fornecedor que oferece o laudo como parte do pacote inicial, antes de qualquer medida implantada, está oferecendo um documento que não corresponde ao estado da máquina.`,

`## Como o custo se forma {#custo}

A adequação tem três blocos de custo que precisam ser vistos separadamente:

| Bloco | O que inclui |
| --- | --- |
| **Engenharia** | Apreciação de riscos, projeto, especificação, validação, laudo, ART |
| **Material e fabricação** | Estrutura, proteções, chaves, sensores, relés, cabeamento, painel |
| **Montagem e integração** | Instalação mecânica, integração elétrica, programação, testes |

Variáveis que mais movem o total: quantidade e complexidade das máquinas, tecnologia de intertravamento exigida pelo nível de desempenho, necessidade de parada de produção e condição do painel elétrico existente.

Um fator subestimado: **o estado do painel**. Máquina antiga frequentemente exige repotenciação elétrica para receber comando seguro adequado, e isso pode representar parcela relevante do custo. A comparação entre reformar e projetar novo está em [projeto mecânico ou retrofit NR-12](/blog/projeto-mecanico-ou-retrofit-nr12).

Faixas de referência de laudo e adequação estão em [laudo NR-12: quando é obrigatório e quanto custa](/blog/laudo-nr12-quando-e-obrigatorio-quanto-custa).`,

`## Como validar a entrega {#validar}

Ao receber a adequação, verifique:

1. ☐ **Apreciação de riscos** individual por máquina, com ART
2. ☐ **Todas as fases de vida** avaliadas, não só a operação normal
3. ☐ **Mau uso razoavelmente previsível** considerado
4. ☐ **Medidas especificadas tecnicamente**, não descritas genericamente
5. ☐ **Hierarquia respeitada** — eliminar, proteger, informar (nessa ordem)
6. ☐ **Nível de desempenho** definido para cada função de segurança
7. ☐ **Diagramas elétricos** atualizados conforme instalado
8. ☐ **Teste funcional** de cada dispositivo, documentado
9. ☐ **Validação da função de segurança**, não apenas da instalação
10. ☐ **Laudo com ART** e conclusão objetiva
11. ☐ **Treinamento** da equipe sobre as novas condições de operação
12. ☐ **Registro fotográfico** do antes e depois

E a verificação mais honesta de todas: **volte à máquina 60 dias depois**. Se a proteção foi calçada, o atuador foi preso com abraçadeira ou a porta está mantida aberta, a especificação estava errada — e o problema não se resolve com advertência ao operador, e sim revendo a solução. O diagnóstico de campo está em [proteção fixa ou móvel: qual escolher](/blog/qual-protecao-escolher-nr12-fixa-ou-movel).

## Próximo passo {#proximo-passo}

Contratar adequação NR-12 é contratar engenharia, não metros de gradil. Os critérios são verificáveis: habilitação do responsável técnico, metodologia declarada, cobertura de todas as fases de vida, especificação executável, competência em comando seguro e validação da eficácia.

A VSM Engenharia executa apreciação de riscos, projeto de proteções, integração de dispositivos de segurança, validação e laudo NR-12 em todo o Sudeste, com engenheiros habilitados e ART.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [adequação NR-12](/servicos/nr12) e os artigos [adequação NR-12 passo a passo](/blog/adequacao-nr12-passo-a-passo) e [NR-12: quem precisa fazer](/blog/nr12-quem-precisa-fazer).`
    ],
};
