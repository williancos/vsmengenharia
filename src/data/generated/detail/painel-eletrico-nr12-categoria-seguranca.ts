/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Painel elétrico NR-12: categoria de comando seguro, ISO 13849-1, parada de emergência e cruzamento com NR-10. Guia VSM Engenharia.",
  keywords: ["painel nr12", "painel elétrico nr12", "comando seguro nr12", "ISO 13849-1 painel"],
  keyTakeaways: [
      "Painel NR-12 exige circuito de comando seguro categoria 1 a 4 conforme apreciação de risco",
      "ISO 13849-1 define a relação entre risco e Performance Level (PL) do circuito",
      "Parada de emergência (botoeira cogumelo) é obrigatória em todo painel NR-12",
      "Painel NR-12 cruza com NR-10 — projeto integrado é o padrão técnico"
    ],
  toc: [
      { id: "o-que-nr12-exige", label: "O que a NR-12 exige do painel elétrico" },
      { id: "categorias-de-seguranca", label: "Categorias de segurança (B a 4)" },
      { id: "performance-level", label: "Performance Level (PL) ISO 13849-1" },
      { id: "circuito-de-comando-seguro", label: "Circuito de comando seguro" },
      { id: "parada-de-emergencia", label: "Parada de emergência" },
      { id: "componentes-recomendados", label: "Componentes recomendados" },
      { id: "cruzamento-nr10", label: "Cruzamento com NR-10" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Painel comum pode ser usado em máquina NR-12?", answer: "Não. Painel comum (contatores e relés gerais) não atende aos requisitos de circuito de comando seguro. NR-12 exige painel com relés de segurança certificados (Pilz, Schmersal, Pizzato, Sick), contatores com canais redundantes e diagnóstico contínuo conforme a categoria definida pela apreciação de risco. Painel comum é causa frequente de autuação." },
      { question: "Quem projeta o painel NR-12, engenheiro mecânico ou elétrico?", answer: "Engenheiro eletricista ou de controle e automação com atribuição em segurança de máquinas. O engenheiro mecânico participa da apreciação de risco e da definição da categoria necessária, mas o projeto elétrico em si é privativo do engenheiro elétrico. ART do painel é específica e separada da ART de adequação mecânica." },
      { question: "Categoria 4 é sempre melhor que categoria 3?", answer: "Não. Categoria 4 é mais cara e mais complexa, justifica-se apenas quando o risco apreciado exige (severidade alta + exposição contínua + impossibilidade de evitar). Categoria 3 atende a maioria das máquinas industriais. Especificar categoria 4 sem necessidade é desperdício; especificar categoria 3 quando o risco exige 4 é subdimensionamento perigoso." },
      { question: "Painel NR-12 atende também NR-10?", answer: "Parcialmente. NR-10 cobre segurança em instalações e serviços com eletricidade (proteção contra choque, arco elétrico, organização de painel). NR-12 cobre segurança de máquinas (comando seguro, parada de emergência, intertravamentos). Projeto integrado atende ambas, mas as exigências são distintas. Detalhamento em NR-10 e NR-12 em painéis." }
    ],
  content: [
`O **painel elétrico NR-12** é o coração do sistema de segurança da máquina. É nele que residem os relés de segurança, os contatores com diagnóstico, a parada de emergência e os intertravamentos das proteções móveis. Painel mal projetado compromete toda a adequação NR-12 — não importa quão bem feitas estejam as proteções físicas, se o comando não interrompe o movimento em caso de falha, a proteção é simbólica.

Este artigo apresenta as exigências da norma, a relação com ISO 13849-1, os componentes técnicos esperados e o cruzamento com NR-10 (segurança em eletricidade).`,

`## O que a NR-12 exige do painel elétrico {#o-que-nr12-exige}

A NR-12 trata do painel em diversos itens, com foco em:

- **12.41 e 12.42** — circuito de comando seguro
- **12.45** — parada de emergência (botoeira cogumelo, cordoalha)
- **12.51 a 12.65** — dispositivos de partida e parada
- **12.85** — manutenção e inspeção do painel

Os requisitos centrais:

1. **Comando categorizado** conforme ISO 13849-1 (categoria 1 a 4)
2. **Parada de emergência** acessível em todo posto de operação
3. **Acionamento intencional** (impossibilidade de partida acidental)
4. **Redundância** em circuitos críticos
5. **Diagnóstico** de falha em circuitos categoria 3+
6. **Documentação técnica** (esquema elétrico, lista de componentes, programa de CLP de segurança)

Painel sem qualquer um desses elementos é vulnerabilidade direta em fiscalização.`,

`## Categorias de segurança (B a 4) {#categorias-de-seguranca}

A ISO 13849-1 define 5 categorias de comando, em ordem crescente de robustez:

| Categoria | Característica | Aplicação típica |
| --- | --- | --- |
| **B** | Componentes básicos, sem requisito específico | Risco baixo |
| **1** | Componentes bem testados | Risco baixo-moderado |
| **2** | Verificação periódica do funcionamento | Risco moderado |
| **3** | Redundância + diagnóstico parcial | Risco alto |
| **4** | Redundância + diagnóstico contínuo | Risco muito alto |

A categoria é definida pela **apreciação de risco** (ISO 12100 + HRN ou equivalente), considerando severidade, frequência de exposição e possibilidade de evitar o dano.`,

`## Performance Level (PL) ISO 13849-1 {#performance-level}

O **Performance Level (PL)** é a métrica quantitativa do circuito de segurança, escala "a" (PL_a, menor) a "e" (PL_e, maior). Calcula-se a partir de:

- **MTTFd** (tempo médio antes da falha perigosa) dos componentes
- **DC** (Diagnostic Coverage — cobertura de diagnóstico)
- **CCF** (Common Cause Failure — falha de causa comum)
- **Categoria** do circuito

| Risco apreciado | PL mínimo | Categoria mínima |
| --- | --- | --- |
| S1 + F1 + P1 | a | 1 |
| S1 + F2 + P1 | b | 2 |
| S2 + F1 + P1 | c | 2 ou 3 |
| S2 + F2 + P1 | d | 3 |
| S2 + F2 + P2 | e | 3 ou 4 |

PL define a robustez **estatística** do circuito. Projeto adequado garante PL compatível com risco.`,

`## Circuito de comando seguro {#circuito-de-comando-seguro}

O circuito de comando seguro processa sinais de **proteção móvel intertravada**, **parada de emergência**, **cortinas óticas** e outros dispositivos. Arquitetura típica para categoria 3:

| Sinal de entrada | Processamento | Atuação |
| --- | --- | --- |
| Chave de segurança (porta) | Relé de segurança | Contator 1 |
| Parada de emergência | Relé de segurança | Contator 2 |
| Cortina ótica | Relé de segurança | Realimentação |

Os dois contatores em série interrompem a alimentação do motor. A realimentação verifica abertura efetiva dos contatores no próximo ciclo. Falha em um canal não anula a segurança; falha não detectada no próximo ciclo gera bloqueio.

Para categoria 4: diagnóstico contínuo + tempo de resposta calculado para garantir parada antes de exposição perigosa.`,

`## Parada de emergência {#parada-de-emergencia}

A **parada de emergência** é exigência absoluta. Especificações:

- **Botoeira tipo cogumelo** vermelha sobre fundo amarelo
- **Retenção mecânica** (fica acionada até liberação manual)
- **Liberação por giro ou puxe** (não por simples toque)
- **Acessibilidade** em todo posto de operação (distância máxima recomendada: 600 mm)
- **Sinalização** com identificação clara
- **Conexão** ao circuito de comando seguro com PL compatível à máquina

Botoeira de emergência **comum** (sem retenção mecânica certificada) é causa frequente de autuação. Componentes certificados: Pizzato, Schmersal, Sick, Allen-Bradley, Siemens, Telemecanique.`,

`## Componentes recomendados {#componentes-recomendados}

Componentes de segurança aceitos no mercado brasileiro:

| Função | Fabricantes referência |
| --- | --- |
| Relé de segurança | Pilz, Schmersal, Pizzato, Sick, Allen-Bradley |
| Chave de segurança | Pizzato, Schmersal, Euchner, Sick |
| Botoeira de emergência | Schmersal, Telemecanique, Siemens |
| Cortina ótica | Sick, Pilz, Datalogic, Banner |
| Scanner laser de segurança | Sick S300/S3000, Datalogic |
| CLP de segurança | Pilz PNOZ, Sick FX3, Siemens F-CPU |
| Contator de segurança | Siemens 3RT, Allen-Bradley 100-S |

Componentes **certificados** (TÜV, BG, INMETRO) com **MTTFd documentado** são pré-requisito para cálculo de PL.

> **Painel da sua máquina foi projetado por engenheiro com atribuição em segurança?** A VSM Engenharia avalia e projeta painéis NR-12 conforme ISO 13849-1. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Cruzamento com NR-10 {#cruzamento-nr10}

NR-12 e NR-10 se complementam no painel elétrico:

| NR-10 cobre | NR-12 cobre |
| --- | --- |
| Proteção contra choque elétrico | Proteção contra movimento perigoso |
| Organização interna do painel | Comando seguro categorizado |
| Sinalização de tensão | Intertravamento de portas mecânicas |
| Aterramento e equipotencialização | Parada de emergência |
| EPI de manutenção elétrica | Bloqueio para manutenção (LOTO) |

Projeto integrado atende ambas. Detalhamento da interação em [NR-10 e NR-12 em painéis elétricos](/blog/nr10-e-nr12-paineis-eletricos-maquinas).

## Próximo passo {#proximo-passo}

Painel NR-12 é o ponto técnico que faz a segurança da máquina ser real ou simbólica. Vale o investimento em projeto correto desde a primeira adequação.

A VSM Engenharia projeta e adequa painéis NR-12 com circuito de comando seguro conforme ISO 13849-1 em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [NR-12](/servicos/nr12) e o artigo [NR-10 e NR-12 em painéis](/blog/nr10-e-nr12-paineis-eletricos-maquinas).`
    ],
};
