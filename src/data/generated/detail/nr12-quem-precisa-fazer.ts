/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "NR-12 quem precisa fazer: empregadores, fabricantes, importadores, locadores e responsáveis técnicos. Obrigações por papel. VSM Engenharia.",
  keywords: ["nr12 quem precisa", "quem precisa cumprir nr12", "obrigado a nr12", "empresa obrigada nr12"],
  keyTakeaways: [
      "NR-12 obriga todos os empregadores que operam máquinas, independente do porte da empresa",
      "Fabricantes e importadores têm obrigações específicas antes da venda",
      "Locadores são solidariamente responsáveis pela conformidade do equipamento entregue",
      "Profissional responsável técnico é engenheiro com CREA e atribuição compatível"
    ],
  toc: [
      { id: "nr12-e-para-quem", label: "NR-12 é para quem" },
      { id: "empregadores", label: "Empregadores — todas as obrigações" },
      { id: "fabricantes", label: "Fabricantes e importadores" },
      { id: "locadores", label: "Locadores e comodantes" },
      { id: "profissional-responsavel", label: "Profissional responsável técnico" },
      { id: "empresa-pode-dispensar", label: "Empresa pode se considerar dispensada?" },
      { id: "responsabilidade-solidaria", label: "Responsabilidade solidária e civil" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Microempresa precisa cumprir NR-12?", answer: "Sim. A obrigatoriedade independe do porte. Microempresa com um único torno mecânico ou esmeril de bancada está obrigada a atender NR-12. Algumas portarias estabelecem prazos transitórios específicos para microempresas em determinados anexos, mas a obrigação principal é uniforme. Operação informal não isenta da norma." },
      { question: "Empresa que só opera máquina alugada precisa cumprir NR-12?", answer: "Sim. Mesmo em máquina alugada, o empregador é responsável pela operação segura e pelo treinamento do operador. O locador também é solidariamente responsável pela conformidade técnica do equipamento entregue. Ambos respondem em caso de acidente — não há transferência total de responsabilidade pelo simples contrato de locação." },
      { question: "Quem é o profissional responsável pelo cumprimento da NR-12 na empresa?", answer: "Tecnicamente, é o engenheiro responsável pelo projeto de adequação e pelos laudos — mecânico ou eletricista com CREA ativo. Operacionalmente, o SESMT (Serviço de SST) coordena o programa, o gestor de manutenção executa as inspeções rotineiras e os operadores cumprem procedimentos. Responsabilidade legal final é do empregador." },
      { question: "Fabricante de máquina nacional precisa atender NR-12?", answer: "Sim, integralmente. Fabricante deve projetar e entregar a máquina já em conformidade, com manual em português, marcação visível, ART de projeto e atendimento aos anexos aplicáveis. Fabricante que entrega máquina sem conformidade responde civilmente e pode ser autuado pelo MTE separadamente do usuário." }
    ],
  content: [
`A pergunta **"quem precisa fazer NR-12"** parece simples, mas tem várias camadas. A norma vincula simultaneamente empregadores (de qualquer porte), fabricantes, importadores, distribuidores, locadores e profissionais técnicos responsáveis. Cada um tem obrigações específicas — e responsabilidade solidária quando há acidente.

Este artigo identifica todos os papéis sujeitos à norma, suas obrigações específicas e os limites da responsabilidade individual de cada agente.`,

`## NR-12 é para quem {#nr12-e-para-quem}

A NR-12 (item 12.2) estabelece responsabilidades para:

| Papel | Vínculo principal |
| --- | --- |
| **Empregador** | Operação segura, manutenção, inspeção, treinamento |
| **Fabricante** | Projeto, manual, marcação, ART, entrega conforme |
| **Importador** | Adequação à NR-12 antes da venda nacional |
| **Distribuidor / revendedor** | Cadeia de responsabilidade na venda |
| **Locador / comodante** | Conformidade da máquina entregue + solidária |
| **Profissional habilitado** | Projeto, apreciação de risco, laudo, ART |

A norma é aplicável **independente do porte** da empresa — microempresa com um esmeril está tão obrigada quanto indústria automotiva.`,

`## Empregadores — todas as obrigações {#empregadores}

O empregador é o agente com maior número de obrigações no cotidiano. Lista das principais:

### Operacionais

- Operar somente máquinas em conformidade
- Manter sistemas de segurança ativos
- Não permitir alteração que comprometa proteções
- Manter sinalização e identificação

### Manutenção

- Programa de manutenção preventiva documentado
- Inspeção pré-operacional pelos operadores
- Inspeção técnica periódica por profissional habilitado
- Substituição de componentes de segurança ao fim de vida útil

### Treinamento

- Treinamento inicial de operadores (conforme Anexo II)
- Treinamento de reciclagem periódico
- Treinamento de manutentores específico
- Registros de treinamento atualizados

### Documental

- Laudo técnico de cada máquina
- Apreciação de risco vigente
- ART do projeto de adequação
- Manuais e procedimentos operacionais
- Registros de manutenção e inspeção

Ausência de qualquer dessas obrigações é frente potencial de autuação.`,

`## Fabricantes e importadores {#fabricantes}

Fabricantes e importadores têm obrigações **antes** da venda da máquina:

| Obrigação | Detalhamento |
| --- | --- |
| Projeto conforme NR-12 | Apreciação de risco, proteções, comando seguro |
| Manual em português | Operação, manutenção, riscos, procedimentos |
| Marcação visível | Identificação, capacidade, advertências |
| ART de projeto | Engenheiro responsável pelo projeto técnico |
| Atendimento a anexos específicos | Quando aplicável (Anexo VIII para prensa, etc.) |
| Treinamento de comissionamento | Quando contratado com o fornecimento |
| Termo de responsabilidade | Declaração de conformidade |

Importador de máquina europeia/asiática precisa garantir que a máquina **atende NR-12** antes da venda, mesmo que cumpra normas do país de origem. Diferenças técnicas (categoria de comando, distâncias) são frequentes e exigem adaptação.`,

`## Locadores e comodantes {#locadores}

Locador (locação onerosa) e comodante (cessão gratuita) entregam máquinas a terceiros para uso. Responsabilidade:

- **Entregar máquina em conformidade** com NR-12 vigente
- **Documentação técnica** (laudo, ART) com prazo de validade
- **Treinamento básico** ao operador receptor
- **Responsabilidade solidária** com o locatário em caso de acidente
- **Manutenção** entre locações para garantir conformidade contínua

Contrato de locação **não isenta** o locador de responsabilidade civil em caso de acidente decorrente de não conformidade técnica. Em sinistros graves, tanto locador quanto locatário são responsabilizados.`,

`## Profissional responsável técnico {#profissional-responsavel}

O profissional habilitado para atuar em NR-12:

| Engenheiro | Escopo |
| --- | --- |
| **Mecânico** | Apreciação de risco, projeto de proteções, laudo mecânico |
| **Eletricista** | Painel, circuito de comando seguro, intertravamentos, laudo elétrico |
| **Controle e automação** | Sistemas automatizados, CLP de segurança |
| **Segurança do trabalho** | Coordenação, apoio à apreciação de risco (escopo restrito) |

Em máquinas complexas, projeto é frequentemente executado por **equipe multidisciplinar** com ARTs separadas — uma do mecânico, uma do eletricista.

Técnicos de segurança do trabalho **não podem assinar** laudo NR-12 nem ART. Podem participar de equipe e contribuir tecnicamente.

> **Precisa de engenheiro com CREA e atribuição em NR-12?** A VSM Engenharia atende todo o Sudeste com engenheiros mecânicos e elétricos. [Fale pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Empresa pode se considerar dispensada? {#empresa-pode-dispensar}

Nenhuma empresa pode se autodispensar de NR-12 com base em:

- Porte (micro/pequena/média/grande)
- Setor (todos os setores produtivos)
- Localização (todos os estados, urbano ou rural)
- Idade da máquina (norma se aplica independente da data)
- Forma de aquisição (compra, leasing, locação, comodato)
- Volume de operação (1 hora por dia ou 24 horas)

A única exceção real é a **ausência efetiva de máquina motorizada** no processo — caso em que NR-12 não se aplica simplesmente porque não há objeto. Tudo o mais está sujeito.`,

`## Responsabilidade solidária e civil {#responsabilidade-solidaria}

Em caso de acidente, podem ser responsabilizados:

- **Empregador** (responsabilidade primária)
- **Fabricante/importador** (se projeto inadequado)
- **Locador** (se equipamento entregue não conforme)
- **Profissional técnico** que assinou laudo/ART (se conduta culposa)
- **Sócios e administradores** (em casos de dolo ou negligência grave)

A responsabilidade civil pode incluir:

- **Indenização** trabalhista ao acidentado
- **Danos morais e materiais**
- **Reabilitação profissional**
- **Pensão vitalícia** em casos de invalidez
- **Indenização à família** em caso de óbito

Em casos graves, há também responsabilidade **criminal** (lesão corporal, homicídio culposo). Conformidade NR-12 é proteção patrimonial e jurídica direta para a empresa e seus dirigentes.

## Próximo passo {#proximo-passo}

Saber **quem precisa fazer** é o primeiro passo para distribuir responsabilidade técnica corretamente na sua empresa e na cadeia de fornecedores. Compliance NR-12 é projeto coletivo — não tarefa exclusiva do SESMT.

A VSM Engenharia faz consultoria de programa NR-12 com mapeamento de responsabilidades por papel em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar consultoria pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Veja o serviço de [NR-12](/servicos/nr12) e o artigo [adequação NR-12](/blog/adequacao-nr12-passo-a-passo).`
    ],
};
