/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Vasos de pressão NR-13: classificação por categoria (I a V), classe de fluido, PV e requisitos de inspeção por categoria. VSM Engenharia.",
  keywords: ["vasos de pressão nr13", "vasos de pressao nr13", "categoria vaso de pressão", "classificação vaso pressão"],
  keyTakeaways: [
      "Vasos de pressão NR-13 têm 5 categorias (I a V), combinando classe de fluido e grupo de potencial",
      "Classe A (fluido mais perigoso) gera categoria mais crítica; classe D, menos crítica",
      "PV (pressão × volume) define grupo de potencial — quanto maior, maior o risco",
      "Categoria define profissional habilitado, periodicidade e ensaios obrigatórios"
    ],
  toc: [
      { id: "o-que-e-vaso-de-pressao", label: "O que é vaso de pressão na NR-13" },
      { id: "criterio-do-pv", label: "Critério do PV — quando o vaso entra na NR-13" },
      { id: "classes-de-fluido", label: "Classes de fluido (A, B, C, D)" },
      { id: "grupos-de-potencial", label: "Grupos de potencial (1 a 5)" },
      { id: "tabela-de-categorias", label: "Tabela de categorias (I a V)" },
      { id: "requisitos-por-categoria", label: "Requisitos por categoria" },
      { id: "ensaios-obrigatorios", label: "Ensaios obrigatórios por categoria" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Como sei a categoria do meu vaso de pressão?", answer: "Cruzando duas variáveis: a classe do fluido (A, B, C, D — quanto mais perigoso, mais alta a classe) e o grupo de potencial de risco (1 a 5 — calculado pelo PV, produto da pressão de operação pelo volume). A NR-13 traz tabela formal para o cruzamento. Engenheiro responsável faz o cálculo e categoriza no prontuário do equipamento." },
      { question: "Vaso de ar comprimido é categoria V?", answer: "Geralmente sim, mas depende do PV. Ar comprimido é classe D (fluido não perigoso). Grupos de potencial menores (PV menor que 30) resultam em categoria V. Vasos de ar com PV alto (capacidade grande e pressão elevada) podem subir para categoria IV ou III. O cálculo exato é parte do prontuário." },
      { question: "Vaso de pressão com PV menor que 8 está fora da NR-13?", answer: "Sim, com ressalvas. Vaso com PV menor que 8 não está sujeito à NR-13 quanto à obrigação de prontuário e PLH específico. Mas se contém fluido perigoso (classe A ou B), pode haver requisitos adicionais por NR-20 (líquidos inflamáveis) ou regulamentação ambiental. Cada caso exige análise técnica específica." },
      { question: "Categoria V exige PLH com SNQC?", answer: "Não. Categoria V exige engenheiro mecânico com CREA ativo e atribuição compatível, mas sem certificação SNQC obrigatória. A certificação SNQC é exigência específica para categoria I (vasos críticos), conforme Anexo III da NR-13. Categorias intermediárias têm requisitos diferenciados conforme a portaria vigente." }
    ],
  content: [
`A **classificação de vasos de pressão na NR-13** é a base técnica que define todo o programa de manutenção, inspeção e responsabilidade técnica do equipamento. Categoria I a V determina o profissional habilitado, a periodicidade das inspeções, os ensaios obrigatórios e o regime de prontuário.

Saber categorizar corretamente um vaso de pressão é o primeiro passo de qualquer programa NR-13 sério. Erros nessa fase comprometem todo o cronograma de inspeção e podem gerar autuação ou — pior — explosão. Este artigo apresenta o sistema completo de classificação com tabelas e exemplos.`,

`## O que é vaso de pressão na NR-13 {#o-que-e-vaso-de-pressao}

Conforme o **Anexo I (glossário)** da NR-13, vaso de pressão é equipamento que contém fluido sob pressão, projetado e construído conforme código reconhecido. Inclui:

- **Cilindros sob pressão** (compressores, autoclaves)
- **Vasos cilíndricos e esféricos** de processo
- **Reatores químicos pressurizados**
- **Trocadores de calor** sob pressão
- **Acumuladores hidráulicos** acima do PV mínimo
- **Tanques pressurizados** de armazenamento

Não são vasos NR-13:

- Tanques abertos à atmosfera
- Vasos com PV menor que 8 (exceto fluidos especiais)
- Equipamentos cobertos por normas específicas (caldeira é tratada em separado)`,

`## Critério do PV — quando o vaso entra na NR-13 {#criterio-do-pv}

O **PV** (produto da pressão de operação em MPa pelo volume em m³) é o critério primário de entrada na NR-13:

**Fórmula: PV = P (MPa) × V (m³)**

Exemplos:

| Equipamento | P (MPa) | V (m³) | PV | NR-13? |
| --- | --- | --- | --- | --- |
| Compressor de oficina | 1,0 (10 bar) | 0,2 | 0,2 | Não (PV menor que 8) |
| Vaso de ar industrial | 0,8 (8 bar) | 1,5 | 1,2 | Não (PV menor que 8) |
| Vaso de ar grande | 1,0 (10 bar) | 10 | 10 | **Sim** (PV maior que 8) |
| Reator químico | 2,0 (20 bar) | 5 | 10 | **Sim** |
| Autoclave hospitalar | 0,3 (3 bar) | 0,5 | 0,15 | Não |

**PV menor que 8 = fora da NR-13** (regra geral). Acima desse limite, entra integralmente.`,

`## Classes de fluido (A, B, C, D) {#classes-de-fluido}

A classe de fluido reflete a periculosidade intrínseca:

| Classe | Tipo de fluido | Exemplos |
| --- | --- | --- |
| **A** | Inflamável, combustível, tóxico ou nocivo (alta periculosidade) | GLP, hidrogênio, amônia, gás natural, vapor de processo |
| **B** | Combustível com risco moderado | Óleos, hidrocarbonetos de menor volatilidade |
| **C** | Vapor d'água ou água quente | Vapor saturado de processo |
| **D** | Ar comprimido, gases inertes (baixo risco) | Ar, nitrogênio, argônio |

A classe é definida pelo fluido **em condições normais de operação**, não pelo conteúdo eventual. Mistura de fluidos exige análise específica.`,

`## Grupos de potencial (1 a 5) {#grupos-de-potencial}

O grupo é definido pelo PV, com escala inversa (1 = risco maior; 5 = risco menor):

| Grupo | Faixa de PV |
| --- | --- |
| **1** | PV ≥ 100 |
| **2** | 30 ≤ PV < 100 |
| **3** | 2,5 ≤ PV < 30 |
| **4** | 1 ≤ PV < 2,5 |
| **5** | PV < 1 |

Lembre-se: vasos com PV menor que 8 não estão na NR-13 (regra geral), mas se classe de fluido for A ou B, podem entrar mesmo abaixo do limite.`,

`## Tabela de categorias (I a V) {#tabela-de-categorias}

Cruzamento entre classe de fluido e grupo de potencial:

| Classe / Grupo | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| **A** | I | I | II | III | III |
| **B** | I | II | III | IV | IV |
| **C** | II | III | IV | V | V |
| **D** | III | IV | V | V | V |

**Categoria I** é a mais crítica (vaso classe A com PV alto). **Categoria V** é a mais leve (vaso de ar comprimido pequeno).

A categoria define todo o restante do programa NR-13 do vaso.

> **Precisa categorizar seus vasos de pressão?** A VSM Engenharia faz inventário, classificação e prontuário NR-13 em todo o Sudeste. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Requisitos por categoria {#requisitos-por-categoria}

Cada categoria define requisitos específicos:

### Categoria I

- **PLH com qualificação SNQC** (Anexo III)
- Inspeção visual externa periódica (anual)
- Inspeção visual interna periódica (3 anos)
- Teste hidrostático conforme avaliação técnica
- Ensaios não destrutivos complementares
- Prontuário rigoroso

### Categoria II

- PLH com CREA ativo
- Inspeção visual externa periódica (2 anos)
- Inspeção visual interna periódica (4 anos)
- Ensaios complementares conforme análise técnica
- Prontuário completo

### Categoria III

- PLH com CREA ativo
- Inspeção visual externa periódica (3 anos)
- Inspeção visual interna periódica (6 anos)
- Ensaios complementares conforme análise técnica
- Prontuário simplificado

### Categoria IV e V

- PLH com CREA ativo
- Inspeção visual externa periódica (4 anos para IV, 5 anos para V)
- Inspeção interna periódica em prazos maiores
- Prontuário básico

Periodicidades exatas podem ser ajustadas pelo PLH com base em análise técnica do equipamento e histórico. Detalhamento em [periodicidade de inspeções NR-13](/blog/nr13-periodicidade-inspecoes).`,

`## Ensaios obrigatórios por categoria {#ensaios-obrigatorios}

Ensaios típicos no programa NR-13:

| Ensaio | Categoria I/II | Categoria III/IV/V |
| --- | --- | --- |
| Visual externo | Obrigatório | Obrigatório |
| Visual interno | Obrigatório | Obrigatório |
| Espessura por ultrassom | Obrigatório | Conforme análise |
| Líquido penetrante (LP) | Frequente | Conforme análise |
| Partícula magnética (PM) | Frequente | Conforme análise |
| Ultrassom de solda | Frequente | Conforme análise |
| Teste hidrostático | Periódico | Pós-reparo |
| Estanqueidade | Conforme análise | Conforme análise |

Ensaios são executados por **profissionais END certificados** (Nível 2 ABENDI) sob supervisão do PLH.

## Próximo passo {#proximo-passo}

Classificação correta do vaso de pressão é o ponto técnico que define todo o restante do programa NR-13. Erros nessa fase comprometem cronograma, geram custos extras e expõem a empresa a riscos jurídicos.

A VSM Engenharia faz inventário, classificação e categorização de vasos de pressão em todo o Sudeste, com PLH qualificado.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [inspeção NR-13](/servicos/nr13) e o artigo [categorias de caldeira](/blog/categorias-caldeira-a-b-c-nr13).

O caso mais comum e menos controlado de vaso de pressão tem página própria: [inspeção NR-13 em compressor de ar e reservatório de ar comprimido](/servicos/inspecao-nr13-compressor-de-ar).`
    ],
};
