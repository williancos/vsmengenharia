/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Apreciação de risco NR-12: metodologia ISO 12100, HRN, categoria de risco e modelo prático para máquinas industriais. VSM Engenharia.",
  keywords: ["apreciação de risco nr12", "apreciação de riscos nr12", "ISO 12100", "HRN máquinas", "análise de risco máquina"],
  keyTakeaways: [
      "Apreciação de risco é o primeiro passo técnico de qualquer adequação NR-12",
      "ISO 12100 e método HRN são as metodologias mais aceitas no Brasil",
      "Define hierarquia: eliminar > reduzir com proteção > comunicar risco residual",
      "Documento técnico vivo — precisa ser revisado a cada mudança no processo"
    ],
  toc: [
      { id: "o-que-e-apreciacao-de-risco", label: "O que é apreciação de risco" },
      { id: "base-normativa", label: "Base normativa: ISO 12100 e ISO 13849-1" },
      { id: "metodologia-iso-12100", label: "Metodologia ISO 12100 detalhada" },
      { id: "metodo-hrn", label: "Método HRN — quantificação prática" },
      { id: "modelo-pratico", label: "Modelo prático aplicado" },
      { id: "categoria-de-risco", label: "Como definir categoria de comando seguro" },
      { id: "documentacao", label: "Documentação técnica obrigatória" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Apreciação de risco e análise de risco são a mesma coisa?", answer: "Tecnicamente não. A apreciação de risco (ISO 12100) é o processo completo: identificação de perigos + estimação + avaliação + redução. A análise de risco é uma fase dentro da apreciação (identificação + estimação). Na prática brasileira, os termos são usados como sinônimos, mas em contexto técnico-formal a distinção importa." },
      { question: "Posso usar planilha de APR comum no lugar da apreciação de risco NR-12?", answer: "Não. APR comum (Análise Preliminar de Risco do SESMT) é instrumento operacional para atividades. Apreciação de risco de máquina segue metodologia específica (ISO 12100 ou equivalente) e cobre todo o ciclo de vida da máquina, incluindo manutenção, regulagem e modos de falha. Auditores experientes do MTE distinguem facilmente." },
      { question: "Qual a diferença entre HRN e ISO 12100?", answer: "ISO 12100 é a metodologia internacional padrão de apreciação de risco em máquinas. HRN (Hazard Rating Number) é um método quantitativo simples de pontuação, frequentemente usado dentro da estrutura ISO 12100 para classificar severidade × probabilidade. HRN não substitui ISO 12100 — complementa." },
      { question: "Quem pode fazer apreciação de risco NR-12?", answer: "Engenheiro mecânico, eletricista, controle e automação ou de segurança do trabalho, todos com CREA ativo e atribuição compatível. A apreciação culmina em ART e laudo, ambos exclusivos de engenheiro habilitado. Técnico de segurança pode participar da equipe, mas não assina sozinho." }
    ],
  content: [
`A **apreciação de risco** é o ponto de partida técnico de qualquer adequação NR-12. Antes de comprar uma proteção, antes de redesenhar um painel, antes de instalar uma cortina ótica, é preciso saber **quais são os riscos reais, quão severos são e quão prováveis** — e isso só vem de apreciação estruturada.

A norma brasileira aceita várias metodologias, mas duas dominam o mercado: **ISO 12100** (estrutura completa) e **HRN** (método quantitativo dentro da estrutura). Este artigo apresenta as duas, com modelo prático aplicável a máquinas industriais típicas do Sudeste.`,

`## O que é apreciação de risco {#o-que-e-apreciacao-de-risco}

**Apreciação de risco** é o processo técnico-iterativo de:

1. **Identificar perigos** presentes na máquina
2. **Estimar o risco** de cada perigo (severidade × probabilidade)
3. **Avaliar** se o risco é aceitável
4. **Reduzir** o risco até nível tolerável
5. **Documentar** o processo e a conclusão

O resultado: matriz de risco priorizada que **alimenta diretamente o projeto de adequação**. Sem essa matriz, qualquer adequação é tiro no escuro — instala-se proteção onde não precisa, deixa-se sem proteção onde o risco é alto.

A apreciação é **viva**: precisa ser revisada a cada mudança de processo, modificação física da máquina ou atualização normativa.`,

`## Base normativa: ISO 12100 e ISO 13849-1 {#base-normativa}

A NR-12 (item 12.39 e seguintes) **aceita** metodologias internacionalmente reconhecidas. As duas normas centrais:

| Norma | Função |
| --- | --- |
| **ISO 12100:2010** | Princípios gerais para projeto - apreciação de risco e redução de risco |
| **ISO 13849-1:2015** | Partes de sistemas de comando relacionadas à segurança - categoria/PL |
| **ISO 14121-1 (revogada, incorporada à 12100)** | Histórico de avaliação de risco |
| **ISO 13855** | Posicionamento de dispositivos de proteção em relação à velocidade de aproximação |

ISO 12100 fornece a **estrutura conceitual**; ISO 13849-1 fornece a **base para projetar o circuito de comando** com a categoria adequada ao risco identificado. Trabalham em conjunto.`,

`## Metodologia ISO 12100 detalhada {#metodologia-iso-12100}

A metodologia ISO 12100 estrutura-se em fases:

### Fase 1 — Determinação dos limites da máquina

- Limites de uso (operação prevista, uso indevido razoavelmente previsível)
- Limites espaciais (alcance dos operadores, zona de trabalho)
- Limites temporais (vida útil, intervalo de manutenção)
- Outros limites (ambiente, treinamento exigido)

### Fase 2 — Identificação dos perigos

Lista exaustiva considerando todas as fases do ciclo de vida: transporte, montagem, comissionamento, uso normal, regulagem, manutenção preventiva, manutenção corretiva, desmontagem, descomissionamento.

### Fase 3 — Estimação dos riscos

Para cada perigo identificado:
- **Severidade** do dano (S1 leve / S2 grave)
- **Frequência e tempo de exposição** (F1 raro / F2 frequente)
- **Possibilidade de evitar** (P1 possível / P2 quase impossível)

### Fase 4 — Avaliação dos riscos

Cada risco é classificado como aceitável ou inaceitável conforme a hierarquia da NR-12.

### Fase 5 — Redução dos riscos

Aplicada a hierarquia das três medidas: eliminar > proteger > comunicar.`,

`## Método HRN — quantificação prática {#metodo-hrn}

O **Hazard Rating Number (HRN)** é o método quantitativo mais usado no Brasil dentro da estrutura ISO 12100. A fórmula:

**HRN = LO × FE × DPH × NP**

Onde:

| Fator | Significado | Faixa |
| --- | --- | --- |
| **LO** | Likelihood of Occurrence (probabilidade) | 0,033 (quase impossível) a 15 (certo) |
| **FE** | Frequency of Exposure (frequência de exposição) | 0,5 (raro) a 5 (contínuo) |
| **DPH** | Degree of Possible Harm (severidade) | 0,1 (arranhão) a 15 (múltiplas fatalidades) |
| **NP** | Number of People (pessoas expostas) | 1 a 12 |

O resultado classifica o risco:

| HRN | Classificação | Ação |
| --- | --- | --- |
| 0 – 1 | Aceitável | Monitorar |
| 1 – 5 | Muito baixo | Revisar |
| 5 – 10 | Baixo | Reduzir quando possível |
| 10 – 50 | Significativo | Reduzir prioritário |
| 50 – 100 | Alto | Reduzir imediato |
| > 100 | Inaceitável | Interdição até redução |

HRN é simples de aplicar e gera priorização clara para o programa de adequação.`,

`## Modelo prático aplicado {#modelo-pratico}

Exemplo: **prensa hidráulica** com risco de esmagamento de mão na zona de trabalho.

| Item | Valor |
| --- | --- |
| LO (probabilidade ocorrer durante operação normal) | 8 |
| FE (operador trabalha a cada ciclo) | 5 (contínuo) |
| DPH (amputação dos dedos) | 8 (severidade alta) |
| NP (1 operador exposto) | 1 |
| **HRN antes da proteção** | **8 × 5 × 8 × 1 = 320 (inaceitável)** |

Medida de redução: **bimanual + cortina ótica + comando categoria 3 (ISO 13849-1)**.

| Item após redução | Valor |
| --- | --- |
| LO (com cortina ótica + bimanual) | 1 |
| FE | 5 |
| DPH | 8 |
| NP | 1 |
| **HRN após proteção** | **1 × 5 × 8 × 1 = 40 (significativo, ainda exige monitoramento)** |

Medida complementar: treinamento + sinalização + procedimento de regulagem documentado. HRN final fica abaixo de 10 (baixo).

> **Sua planta tem máquinas críticas sem apreciação de risco?** A VSM Engenharia executa apreciação completa em 5 a 15 dias por máquina. [Solicite orçamento](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Como definir categoria de comando seguro {#categoria-de-risco}

A categoria de comando (B, 1, 2, 3, 4) e o Performance Level (PL "a" a "e") são definidos pela ISO 13849-1 a partir do risco identificado na apreciação. A lógica:

| Severidade × Frequência × Possibilidade evitar | Categoria mínima |
| --- | --- |
| S1 + F1 + P1 (baixo risco) | B ou 1 |
| S1 + F2 + P1 | 1 ou 2 |
| S2 + F1 + P1 | 2 ou 3 |
| S2 + F2 + P1 | 3 |
| S2 + F2 + P2 (alto risco) | 3 ou 4 |

A categoria define **redundância, autoteste e diagnóstico** do circuito de comando seguro. Categoria 4 exige redundância completa + monitoramento contínuo. Categoria 3 exige redundância + diagnóstico parcial. E assim por diante.

Sem essa definição correta na apreciação, o projeto elétrico subdimensiona ou superdimensiona o comando — em ambos os casos, custo inadequado.`,

`## Documentação técnica obrigatória {#documentacao}

Apreciação de risco que sustente laudo NR-12 e fiscalização precisa conter:

- **Identificação da máquina** (marca, modelo, série, localização)
- **Limites da máquina** detalhados
- **Lista de perigos** por fase do ciclo de vida
- **Matriz HRN** ou ISO 12100 com valores justificados
- **Medidas de redução** propostas para cada risco inaceitável
- **HRN final** após medidas
- **Risco residual** comunicado (sinalização, treinamento)
- **Responsável técnico** com CREA e ART
- **Data e versão** do documento

Sem qualquer um desses elementos, a apreciação é frágil em fiscalização e em auditoria de cliente. O caminho técnico que sustenta uma apreciação robusta está em [adequação NR-12 passo a passo](/blog/adequacao-nr12-passo-a-passo).

## Próximo passo {#proximo-passo}

A apreciação de risco bem feita é o ativo mais valioso de um programa NR-12. Ela dimensiona corretamente o investimento e protege a empresa em qualquer cenário de fiscalização.

A VSM Engenharia executa apreciação de risco com metodologia ISO 12100 + HRN em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [NR-12](/servicos/nr12) e entenda a diferença entre os documentos em [o que é APR na NR-12](/blog/o-que-e-apr-nr12).

Antes de contratar, veja [como escolher uma empresa de adequação NR-12](/blog/empresa-adequacao-nr12-como-escolher).`
    ],
};
