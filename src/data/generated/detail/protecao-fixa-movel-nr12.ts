/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Proteção fixa e móvel NR-12: diferenças técnicas, aplicação por tipo de máquina, intertravamento e materiais aceitos. VSM Engenharia.",
  keywords: ["proteção nr12", "proteção fixa nr12", "proteção móvel nr12", "intertravamento nr12"],
  keyTakeaways: [
      "Proteção fixa não se abre durante operação; proteção móvel se abre mas exige intertravamento",
      "Proteção móvel sem intertravamento é considerada inexistente pela NR-12",
      "Escolha entre fixa e móvel depende da frequência de acesso à zona protegida",
      "Materiais aceitos: aço, alumínio estrutural, policarbonato laminado conforme aplicação"
    ],
  toc: [
      { id: "protecoes-no-contexto-nr12", label: "Proteções no contexto NR-12" },
      { id: "protecao-fixa", label: "Proteção fixa — o que é e quando usar" },
      { id: "protecao-movel", label: "Proteção móvel — o que é e quando usar" },
      { id: "intertravamento", label: "Intertravamento da proteção móvel" },
      { id: "criterio-de-escolha", label: "Como escolher entre fixa e móvel" },
      { id: "materiais", label: "Materiais aceitos para cada tipo" },
      { id: "erros-comuns", label: "Erros que invalidam a proteção" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Proteção móvel sem intertravamento é aceita?", answer: "Não. NR-12 considera proteção móvel sem intertravamento como tecnicamente inexistente, pois pode ser aberta a qualquer momento sem interromper o movimento perigoso. Em fiscalização, máquina com proteção móvel sem intertravamento é tratada como máquina sem proteção, com autuação direta e interdição em casos de risco grave." },
      { question: "Qual a diferença entre proteção fixa e gradil?", answer: "Gradil é tipicamente proteção fixa de perímetro de máquina. Proteção fixa é categoria mais ampla, que inclui também capôs sobre engrenagens, grades sobre cilindros, painéis sobre polias, etc. Todo gradil é proteção fixa, mas nem toda proteção fixa é gradil. O artigo gradil NR-12 detalha o subcaso." },
      { question: "Quantas vezes posso abrir uma proteção móvel por turno?", answer: "Não há limite normativo, mas há recomendação prática: se a abertura é frequente (mais de 3-5 vezes por turno), o desgaste do sistema de intertravamento aumenta, e o risco de falha cresce. Em casos de acesso muito frequente, considerar proteção móvel com sensor de alta frequência (RFID) ou redimensionar o processo para reduzir acessos." },
      { question: "Posso usar proteção fixa improvisada (madeira, plástico simples)?", answer: "Não. Materiais aceitos são aço, alumínio estrutural, policarbonato laminado ou compatíveis com cálculo estrutural. Madeira não tem durabilidade. Plástico simples não resiste a impacto. Improvisação é rejeitada por auditor experiente, mesmo que visualmente cumpra a função. Sem material adequado e ART, a proteção é considerada inexistente." }
    ],
  content: [
`A NR-12 estabelece duas categorias formais de proteção mecânica: **fixa** e **móvel**. A diferença não é estética — é funcional e juridicamente determinante. Proteção classificada na categoria errada, ou móvel sem intertravamento, é proteção que **não existe perante a fiscalização**, mesmo que visualmente cumpra a função.

Este artigo explica cada categoria, o critério de escolha entre elas, as exigências de intertravamento da proteção móvel e os erros mais frequentes que invalidam a proteção em auditoria do MTE.`,

`## Proteções no contexto NR-12 {#protecoes-no-contexto-nr12}

A NR-12 (itens 12.38 a 12.50) classifica as proteções em:

| Categoria | Característica |
| --- | --- |
| **Proteção fixa** | Não se abre durante operação normal |
| **Proteção móvel** | Pode ser aberta, com intertravamento obrigatório |
| **Dispositivo de proteção** | Cortina ótica, sensor, scanner — não é "proteção" mas atua junto |

A hierarquia técnica preferencial:

1. Eliminar o risco na fonte (mudança de processo)
2. Proteção fixa (quando o acesso é raro)
3. Proteção móvel com intertravamento (quando há acesso frequente)
4. Dispositivo de proteção (quando proteção física é inviável)
5. Comunicação do risco residual (treinamento, sinalização, EPI)

Engenheiro responsável segue essa hierarquia na apreciação de risco. Detalhamento metodológico em [apreciação de risco NR-12](/blog/apreciacao-de-risco-nr12-modelo-pratico).`,

`## Proteção fixa — o que é e quando usar {#protecao-fixa}

**Proteção fixa** é a estrutura que não pode ser aberta durante operação normal. Para abrir, é necessário **uso de ferramenta** (chave, parafusadeira, alicate) ou remoção definitiva.

### Características

- Fixação por parafuso M6+, solda, rebite ou trava mecânica
- Abertura não prevista durante operação normal
- Acesso para manutenção mediante **procedimento de bloqueio (LOTO)**
- Não exige intertravamento elétrico

### Quando usar

- Acesso à zona protegida é **raro** (manutenção semanal ou menos frequente)
- Função produtiva não exige acesso durante operação
- Eliminação total do risco de exposição rotineira
- Custo baixo (sem componentes elétricos de segurança)

Exemplos típicos: [gradil de perímetro](/blog/gradil-nr12-especificacao-instalacao) de robô, capô sobre engrenagens, painel sobre polia de transmissão.`,

`## Proteção móvel — o que é e quando usar {#protecao-movel}

**Proteção móvel** é a estrutura projetada para ser aberta **durante operação normal**, mas com intertravamento que **interrompe a função perigosa** quando a abertura ocorre.

### Características

- Articulação mecânica (porta, portinhola, painel deslizante)
- Sistema de intertravamento elétrico obrigatório
- Conexão ao circuito de comando seguro categoria 3 ou superior (ISO 13849-1)
- Sinalização visual quando aberta

### Quando usar

- Acesso à zona protegida é **frequente** (cada ciclo, cada batelada, várias vezes por turno)
- Carregamento e descarregamento de peças exige acesso direto
- Operação não permite proteção fixa permanente
- Função produtiva requer interação humana com zona protegida

Exemplos típicos: porta de injetora de plástico, portinhola de prensa, porta de cabine de robô, painel deslizante de centro de usinagem.`,

`## Intertravamento da proteção móvel {#intertravamento}

O **intertravamento** é o que diferencia proteção móvel real de proteção móvel meramente decorativa. Componentes típicos:

| Componente | Função |
| --- | --- |
| **Chave de segurança** (mecânica ou codificada) | Sinaliza estado aberto/fechado ao circuito |
| **Relé de segurança** (Pilz, Pizzato, Schmersal, Sick) | Processa sinal e comanda parada |
| **Contator de segurança** | Interrompe energização do atuador perigoso |
| **Realimentação** | Verifica desligamento do contator |

A categoria de comando seguro (1 a 4, conforme ISO 13849-1) define **redundância e diagnóstico**. Para máquinas categoria 3:

- Dois canais independentes
- Detecção de falha no próximo ciclo
- Fallback seguro em caso de falha

Para categoria 4: dois canais + diagnóstico contínuo. Definição detalhada em [painel elétrico NR-12](/blog/painel-eletrico-nr12-categoria-seguranca).`,

`## Como escolher entre fixa e móvel {#criterio-de-escolha}

Critério prático baseado na **frequência de acesso**:

| Acesso à zona | Solução recomendada |
| --- | --- |
| Manutenção mensal ou menos | Proteção fixa + LOTO |
| Manutenção semanal | Proteção fixa + LOTO ou móvel sem intertravamento sofisticado |
| Acesso diário (regulagem, limpeza) | Proteção móvel com intertravamento categoria 3 |
| Acesso a cada ciclo (carga/descarga) | Proteção móvel com chave codificada + comando categoria 4 |
| Várias vezes por hora | Proteção móvel com automonitoramento RFID |

Investimento adicional em intertravamento sofisticado se paga em **redução de tempo de ciclo**, **menos paradas** por falha, **maior durabilidade**.

> **Dúvida entre fixa e móvel para sua máquina?** A VSM Engenharia define a melhor solução técnica com apreciação de risco completa. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Materiais aceitos para cada tipo {#materiais}

| Material | Proteção fixa | Proteção móvel |
| --- | --- | --- |
| Aço carbono pintado | Comum | Comum |
| Aço inox AISI 304 | Alimentos, farma | Alimentos, farma |
| Alumínio estrutural | Aplicações leves | Comum (peso) |
| Policarbonato laminado | Visibilidade | Visibilidade |
| Tela soldada | Aceito com vão calculado | Aceito com vão calculado |
| Acrílico simples | Não aceito | Não aceito |
| Madeira | Não aceito | Não aceito |
| Plástico ABS comum | Não aceito | Não aceito |

Em proteção móvel transparente, **policarbonato laminado** é o padrão — resiste a impacto e mantém integridade em caso de quebra parcial.`,

`## Erros que invalidam a proteção {#erros-comuns}

Pontos mais autuados em fiscalização NR-12:

- **Proteção móvel sem intertravamento** — tratada como ausência de proteção
- **Intertravamento contornável** — chave que pode ser violada com clipe ou ímã
- **Categoria de comando insuficiente** — categoria 1 para risco que exige categoria 3
- **Material inadequado** — madeira, ABS, acrílico simples
- **Fixação frágil** em proteção fixa — pode ser removida com ferramenta simples
- **Distância insuficiente** ao perigo (Anexo I não respeitado)
- **Ausência de ART** do projeto

Cada erro pode gerar autuação separada e interdição da máquina.

## Próximo passo {#proximo-passo}

Proteção fixa ou móvel mal especificada é pior que proteção ausente — gera falsa sensação de segurança e expõe a empresa à mesma responsabilização. Apreciação de risco séria define o caminho técnico correto.

A VSM Engenharia projeta proteções fixas e móveis com intertravamento conforme ISO 13849-1 em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [NR-12](/servicos/nr12), o artigo [adequação NR-12 passo a passo](/blog/adequacao-nr12-passo-a-passo) e o guia de decisão em [proteção fixa ou móvel: qual escolher para cada máquina](/blog/qual-protecao-escolher-nr12-fixa-ou-movel).`
    ],
};
