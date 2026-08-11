/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Adequação NR-12 passo a passo: as 7 etapas técnicas, custos, prazos e erros a evitar. Guia completo VSM Engenharia para indústria do Sudeste.",
  keywords: ["adequação nr12", "adequação de máquinas nr12", "projeto de adequação nr12", "como adequar máquina nr12"],
  keyTakeaways: [
      "Adequação NR-12 segue 7 etapas técnicas obrigatórias, da apreciação de risco ao laudo final",
      "Investimento por máquina varia de R$ 15.000 a R$ 250.000, conforme complexidade e categoria de risco",
      "Prazo médio total: 30 a 120 dias por máquina, podendo ser executado em paralelo",
      "Erro mais comum: começar pela compra de proteções antes da apreciação de risco — gera retrabalho"
    ],
  toc: [
      { id: "o-que-e-adequacao", label: "O que é adequação NR-12" },
      { id: "etapa-1-apreciacao", label: "Etapa 1 — Apreciação de risco" },
      { id: "etapa-2-projeto", label: "Etapa 2 — Projeto técnico" },
      { id: "etapa-3-art", label: "Etapa 3 — ART de adequação" },
      { id: "etapa-4-execucao", label: "Etapa 4 — Execução física e elétrica" },
      { id: "etapa-5-comissionamento", label: "Etapa 5 — Comissionamento" },
      { id: "etapa-6-treinamento", label: "Etapa 6 — Treinamento dos operadores" },
      { id: "etapa-7-laudo", label: "Etapa 7 — Laudo final" },
      { id: "custos-e-prazos", label: "Custos e prazos por máquina" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Por onde começar a adequação NR-12 de uma planta inteira?", answer: "Pelo diagnóstico inicial de todas as máquinas — não pela compra de proteções. O diagnóstico identifica quais máquinas estão em risco grave (interdição iminente), quais comportam retrofit simples e quais demandam projeto novo. Com esse mapa, a empresa prioriza investimento por risco e ROI. A VSM Engenharia oferece esse diagnóstico como consultoria gratuita." },
      { question: "Posso fazer a adequação por conta própria, sem engenheiro?", answer: "Não. A NR-12 exige projeto técnico de profissional habilitado com ART, e a fiscalização do MTE rejeita adequações sem ART. Mesmo retrofits simples (instalação de proteção fixa em esmeril, por exemplo) exigem ART. Operar sem ART expõe a empresa a autuação e responsabilização civil em caso de acidente." },
      { question: "Quanto tempo dura uma adequação típica?", answer: "Para uma máquina única, 30 a 60 dias entre apreciação de risco e laudo final. Para plantas com 20+ máquinas, o programa completo de adequação geralmente leva 6 a 18 meses, com execução em paralelo. Priorização por risco permite que as máquinas mais críticas sejam regularizadas primeiro." },
      { question: "Adequação NR-12 vale para máquinas com mais de 20 anos?", answer: "Sim, sem exceção. A norma se aplica independente da idade. Em máquinas muito antigas, o retrofit pode chegar a 50% do valor de máquina nova — nesse ponto, a análise técnica pode recomendar substituição em vez de retrofit, conforme detalhado em projeto mecânico ou retrofit NR-12." }
    ],
  content: [
`A **adequação NR-12** é o processo técnico que transforma uma máquina não conforme em equipamento que atende aos requisitos mínimos de segurança da Norma Regulamentadora nº 12. Inclui análise de risco, projeto, execução de proteções físicas e elétricas, comissionamento e documentação final.

Em uma indústria com 20 a 100 máquinas, o programa de adequação é projeto de **6 a 18 meses** e investimento de centenas de milhares a alguns milhões de reais. Fazer certo na primeira tentativa exige metodologia técnica, e o erro mais comum — começar pela compra de proteções antes de analisar o risco real — gera retrabalho e dobra o custo.

Este artigo apresenta as 7 etapas do processo completo, com investimento e prazo típicos em SP.`,

`## O que é adequação NR-12 {#o-que-e-adequacao}

A **adequação NR-12** é a transformação técnica de uma máquina existente para atender aos requisitos da norma. Difere de:

- **Projeto novo** — máquina projetada do zero já com NR-12 incorporada
- **Manutenção corretiva** — reparo de falhas mecânicas
- **Upgrade tecnológico** — modernização funcional sem foco em segurança

A adequação combina **engenharia mecânica** (proteções, distâncias, acessos), **engenharia elétrica** (circuito de comando seguro, intertravamentos, parada de emergência) e **engenharia de segurança** (apreciação de risco, treinamento, documentação).

O resultado: máquina que opera com mesma função produtiva, mas com riscos eliminados ou reduzidos a níveis aceitáveis, dentro do que a NR-12 considera tolerável.`,

`## Etapa 1 — Apreciação de risco {#etapa-1-apreciacao}

A **apreciação de risco** é o ponto de partida obrigatório. Sem ela, qualquer adequação é tiro no escuro. Metodologias aceitas:

- **ISO 12100** — metodologia internacional de avaliação de risco em máquinas
- **HRN (Hazard Rating Number)** — método quantitativo simples e amplamente usado
- **Categorização por ISO 13849** — para definir nível de desempenho do circuito de comando

A apreciação identifica:

1. **Perigos** — energias presentes, peças móveis, projeção de fragmentos, choque elétrico, queimadura, ergonomia
2. **Cenários de exposição** — operação normal, manutenção, regulagem, emergência
3. **Severidade e probabilidade** — para cada cenário
4. **Risco residual** — após medidas existentes

Saída: matriz de risco priorizada, base para o projeto de adequação. Detalhamento técnico em [apreciação de risco NR-12](/blog/apreciacao-de-risco-nr12-modelo-pratico).`,

`## Etapa 2 — Projeto técnico {#etapa-2-projeto}

Com a matriz de risco em mãos, o engenheiro define as **medidas de adequação** seguindo a hierarquia da NR-12:

1. **Eliminar o risco na fonte** (mudança de processo, automação)
2. **Reduzir o risco com proteção** (fixa, móvel, intertravada)
3. **Comunicar o risco residual** (sinalização, treinamento, EPI)

O projeto técnico inclui:

- **Projeto mecânico** das proteções (capôs, grades, [guarda-corpos](/blog/guarda-corpo-nr12-padrao-medidas), [gradis](/blog/gradil-nr12-especificacao-instalacao))
- **Projeto elétrico** do comando seguro (categoria conforme ISO 13849-1, painéis NR-10 + NR-12)
- **Layout** de acessos e zonas de manutenção
- **Lista de materiais** com fabricantes recomendados
- **Cronograma** de execução

Projeto bem feito reduz custo de execução em 20% – 40% por evitar retrabalho.`,

`## Etapa 3 — ART de adequação {#etapa-3-art}

Antes da execução, o engenheiro emite a **ART (Anotação de Responsabilidade Técnica)** no CREA. Esse ato:

- Vincula juridicamente o profissional à adequação
- Comprova qualificação técnica perante fiscalização
- Protege a empresa em auditorias e processos
- Habilita a emissão posterior do laudo

ART de adequação NR-12 deve referenciar:

- Máquina específica (marca, modelo, série)
- Endereço da planta
- Metodologia de apreciação de risco utilizada
- Categoria de comando seguro projetada
- Anexos NR-12 aplicáveis

ART genérica ou sem detalhamento é frequentemente questionada por auditores experientes.`,

`## Etapa 4 — Execução física e elétrica {#etapa-4-execucao}

A execução implementa fisicamente o projeto. Subdivide-se em:

### Execução mecânica

- Fabricação de proteções (terceirizada ou interna)
- Instalação física das proteções
- Adequação de distâncias de segurança (Anexo I)
- Instalação de plataformas, escadas, guarda-corpos

### Execução elétrica

- Retrofit do painel com componentes de segurança
- Cabeamento de sensores, chaves codificadas, cortinas ópticas
- Programação de CLP de segurança quando aplicável
- Testes funcionais de cada dispositivo

A supervisão do engenheiro durante a execução é determinante. Execução sem acompanhamento técnico frequentemente compromete o atendimento ao projeto e gera retrabalho na fase de comissionamento.`,

`## Etapa 5 — Comissionamento {#etapa-5-comissionamento}

O **comissionamento** é a fase de validação técnica antes da liberação operacional. Inclui:

- Testes de **todas as funções de segurança** (parada de emergência, intertravamentos, cortinas, sensores)
- Medição de **tempo de parada** comparado ao distanciamento de segurança
- Verificação de **categoria de comando** conforme projetada
- Testes de **redundância e diagnóstico** do circuito seguro
- **Documentação fotográfica** das medições

Falha em qualquer teste retorna à execução para correção. Comissionamento bem-sucedido é pré-requisito para laudo final.`,

`## Etapa 6 — Treinamento dos operadores {#etapa-6-treinamento}

A NR-12 (Anexo II) exige **treinamento específico** para operadores antes da liberação operacional. Conteúdo programático mínimo:

- Princípios gerais de segurança em máquinas
- Riscos específicos do equipamento
- Funcionamento dos dispositivos de segurança
- Procedimentos de operação normal
- Procedimentos de emergência
- Bloqueio para manutenção (lockout/tagout)
- Inspeção pré-operacional

Carga horária mínima: 8 horas para operação básica + horas adicionais conforme complexidade. Detalhes em [treinamento NR-12](/blog/treinamento-nr12-conteudo-programatico).`,

`## Etapa 7 — Laudo final {#etapa-7-laudo}

O **laudo NR-12** consolida toda a evidência técnica. Documenta:

- Apreciação de risco original e residual
- Proteções e dispositivos instalados
- Categoria de comando atingida
- Resultados do comissionamento
- Treinamento dos operadores
- Conclusão de conformidade

Acompanhado da ART, o laudo é o documento que sustenta auditorias, fiscalizações e venda/locação do equipamento. Detalhes em [laudo NR-12](/blog/laudo-nr12-quando-e-obrigatorio-quanto-custa).`,

`## Custos e prazos por máquina {#custos-e-prazos}

Faixas observadas em SP 2026:

| Tipo de máquina | Investimento adequação | Prazo |
| --- | --- | --- |
| Esmeril, prensa pequena | R$ 15.000 – R$ 35.000 | 30 – 45 dias |
| Torno, fresadora, prensa média | R$ 40.000 – R$ 90.000 | 45 – 75 dias |
| Prensa grande, injetora | R$ 90.000 – R$ 180.000 | 60 – 90 dias |
| Linhas robotizadas, montagens complexas | R$ 200.000 – R$ 600.000+ | 90 – 180 dias |

Em plantas com múltiplas máquinas, a execução paralela reduz o cronograma total. A decisão entre retrofit e máquina nova está em [projeto mecânico ou retrofit NR-12](/blog/projeto-mecanico-ou-retrofit-nr12).

## Próximo passo {#proximo-passo}

A adequação NR-12 bem conduzida transforma risco operacional em ativo de competitividade — máquinas seguras, equipe treinada, documentação que protege em qualquer fiscalização.

A VSM Engenharia conduz programas completos de adequação NR-12 em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar diagnóstico gratuito pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [NR-12](/servicos/nr12) e a [consultoria gratuita](/servicos/consultoria-gratuita).

Veja também [o que é APR na NR-12](/blog/o-que-e-apr-nr12) e [proteção fixa ou móvel: qual escolher](/blog/qual-protecao-escolher-nr12-fixa-ou-movel).

Antes de contratar, veja [como escolher uma empresa de adequação NR-12](/blog/empresa-adequacao-nr12-como-escolher).`
    ],
};
