/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Categorias de caldeira na NR-13 vigente: A e B pela pressão de operação. Critérios, prazos, operador e a antiga categoria C. VSM Engenharia.",
  keywords: ["categoria caldeira nr13", "categorias caldeira a b c", "caldeira a nr13", "caldeira b nr13", "caldeira c nr13"],
  keyTakeaways: [
      "A NR-13 vigente (Portaria MTP 1.846/2022) classifica caldeiras em apenas duas categorias, A e B (subitem 13.4.1.1)",
      "O critério é a pressão de operação: categoria A a partir de 1.960 kPa; categoria B acima de 60 kPa e abaixo de 1.960 kPa",
      "A categoria C existiu nas redações de 1994 e 2014 e já não constava da redação dada pela Portaria MTb 1.082/2018",
      "A categoria define prazos de inspeção, exigências de instalação e a duração da prática supervisionada do operador"
    ],
  toc: [
      { id: "criterio-de-classificacao", label: "Critério de classificação" },
      { id: "categoria-a", label: "Categoria A" },
      { id: "categoria-b", label: "Categoria B" },
      { id: "categoria-c", label: "E a categoria C?" },
      { id: "comparativo-resumido", label: "Comparativo resumido" },
      { id: "exigencias-de-operador", label: "Exigências de operador" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "A NR-13 ainda tem caldeira categoria C?", answer: "Não. A redação vigente da NR-13, dada pela Portaria MTP nº 1.846/2022, classifica as caldeiras apenas nas categorias A e B (subitem 13.4.1.1). A categoria C existiu nas redações da Portaria SSST nº 23/1994 e da Portaria MTE nº 594/2014 e já não constava da redação dada pela Portaria MTb nº 1.082/2018. Laudos, placas e prontuários que ainda indicam categoria C precisam ser revistos pelo PLH." },
      { question: "A categoria da caldeira é definida pela PMTA ou pela pressão de operação?", answer: "Pela pressão de operação. O subitem 13.4.1.1 da NR-13 classifica como categoria A as caldeiras com pressão de operação igual ou superior a 1.960 kPa (19,98 kgf/cm²) e como categoria B as caldeiras com pressão de operação superior a 60 kPa (0,61 kgf/cm²) e inferior a 1.960 kPa. A PMTA continua obrigatória na placa de identificação e no prontuário, mas não é o critério de categoria." },
      { question: "O que acontece com uma caldeira que era categoria C?", answer: "Ela precisa ser reenquadrada pela regra vigente. Se a pressão de operação for superior a 60 kPa, passa a ser categoria B, com os prazos e exigências dessa categoria. Se tiver volume inferior a cem litros, está fora do campo de aplicação da NR-13 (subitem 13.2.2, alínea k), e a inspeção segue o código de fabricação ou a recomendação do fabricante. O reenquadramento deve ser documentado pelo PLH no prontuário e na placa de categoria." },
      { question: "O operador da caldeira categoria B precisa de quantas horas de treinamento?", answer: "O treinamento de segurança na operação de caldeiras tem carga horária mínima de 40 horas para qualquer categoria (Anexo I, item 1.3). Além dele, o operador cumpre prática profissional supervisionada na própria caldeira que irá operar, com duração mínima de 60 horas para a categoria B e de 80 horas para a categoria A (Anexo I, item 1.5)." }
    ],
  content: [
`A **categorização de caldeiras** na NR-13 é o ponto de partida de todo o programa de inspeção: dela dependem os prazos máximos das inspeções de segurança, exigências de instalação e a duração da prática supervisionada do operador.

Na redação vigente da norma, dada pela **Portaria MTP nº 1.846/2022** e alterada pela Portaria MTP nº 4.219/2022, existem **apenas duas categorias de caldeira: A e B** (subitem 13.4.1.1). A categoria C, ainda citada em muitos laudos, placas e materiais de treinamento, pertence a redações anteriores da norma — o que ela era e como reenquadrar esses equipamentos está explicado adiante.`,

`## Critério de classificação {#criterio-de-classificacao}

O critério da NR-13 é a **pressão de operação** da caldeira — não a PMTA (Pressão Máxima de Trabalho Admissível), que continua obrigatória na placa de identificação e no prontuário, mas não define a categoria.

| Categoria | Critério (subitem 13.4.1.1) |
| --- | --- |
| **A** | Pressão de operação igual ou superior a 1.960 kPa (19,98 kgf/cm²) |
| **B** | Pressão de operação superior a 60 kPa (0,61 kgf/cm²) e inferior a 1.960 kPa (19,98 kgf/cm²) |

O campo de aplicação acompanha esse limite inferior: a NR-13 se aplica a caldeiras com pressão de operação superior a 60 kPa (subitem 13.2.1, alínea a) e **não se aplica a caldeiras com volume inferior a cem litros** (subitem 13.2.2, alínea k).`,

`## Categoria A {#categoria-a}

São as caldeiras de maior pressão de operação, típicas de cogeração, setor sucroenergético, papel e celulose e grandes unidades de processo.

Exigências que a norma diferencia para a categoria A:

- **Painel de instrumentos em sala de controle**, construída conforme as normas regulamentadoras aplicáveis (subitem 13.4.2.6)
- **Inspeção de segurança periódica em até 12 meses**, ampliável para 24 meses quando, aos 12 meses, são testadas as pressões de abertura das válvulas de segurança (subitem 13.4.4.4)
- **Com SPIE**, prazo máximo de 30 meses, ou de 48 meses com Sistema Instrumentado de Segurança (SIS) que atenda ao Anexo IV (subitem 13.4.4.5)
- **Prática profissional supervisionada do operador de no mínimo 80 horas** na própria caldeira (Anexo I, item 1.5)`,

`## Categoria B {#categoria-b}

Abrange as caldeiras de uso industrial geral — alimentos, têxtil, química, lavanderias industriais, hospitais e geração de vapor de processo — e passou a incluir as pequenas caldeiras que, nas redações anteriores, eram enquadradas como categoria C.

Exigências específicas da categoria B:

- **Inspeção de segurança periódica em até 12 meses**, ampliável para 30 meses em caldeiras com Sistema de Gerenciamento de Combustão (SGC) que atenda ao Anexo IV (subitem 13.4.4.4)
- **Com SPIE**, prazo máximo de 24 meses (subitem 13.4.4.5)
- **Prática profissional supervisionada do operador de no mínimo 60 horas** na própria caldeira (Anexo I, item 1.5)

Os demais requisitos — prontuário, registro de segurança, projeto de instalação, dispositivos obrigatórios do subitem 13.4.1.2, operação sob controle de operador de caldeira (subitem 13.4.3.3) — valem para as duas categorias.`,

`## E a categoria C? {#categoria-c}

A categoria C **não existe na NR-13 vigente**. Ela constava de redações anteriores da norma:

| Redação | Categorias de caldeira |
| --- | --- |
| Portaria SSST nº 23/1994 (subitem 13.1.9) | A, B e C — categoria C: pressão de operação igual ou inferior a 588 kPa (5,99 kgf/cm²) e volume interno igual ou inferior a 100 litros |
| Portaria MTE nº 594/2014 (subitem 13.4.1.2) | A, B e C, com o mesmo critério para a categoria C |
| Portaria MTb nº 1.082/2018 | Apenas A e B |
| Portaria MTP nº 1.846/2022 (vigente) | Apenas A e B (subitem 13.4.1.1) |

Nas redações antigas, a categoria B era residual: abrangia toda caldeira que não se enquadrasse em A nem em C. A extinção da categoria C significa, na prática, que:

- caldeira que era categoria C e opera **acima de 60 kPa** deve ser **reenquadrada como categoria B**, com os prazos e a prática supervisionada de 60 horas dessa categoria;
- caldeira com **volume inferior a cem litros** está **fora do campo de aplicação** da NR-13 — o que não dispensa a inspeção conforme código de fabricação e manual do fabricante.

Placas de categoria, prontuários, laudos e certificados de operador que ainda citam "categoria C" estão desatualizados e devem ser revistos pelo PLH. Esse é um achado frequente em auditorias de plantas com caldeiras pequenas, como panificação e lavanderia.`,

`## Comparativo resumido {#comparativo-resumido}

| Aspecto | Categoria A | Categoria B |
| --- | --- | --- |
| Critério (pressão de operação) | ≥ 1.960 kPa | > 60 kPa e < 1.960 kPa |
| Inspeção periódica — prazo máximo | 12 meses (24 com teste das válvulas aos 12) | 12 meses (30 com SGC conforme Anexo IV) |
| Prazo máximo com SPIE | 30 meses (48 com SIS conforme Anexo IV) | 24 meses |
| Painel em sala de controle | Obrigatório (13.4.2.6) | Não exigido pela norma |
| Prática supervisionada do operador | Mínimo 80 horas | Mínimo 60 horas |

Caldeiras de recuperação de álcalis, de qualquer categoria, têm prazo próprio: 18 meses, ou 24 meses com SPIE. Os prazos são **máximos** — o PLH pode reduzi-los com base no histórico e nas condições do equipamento. Detalhamento em [periodicidade NR-13](/blog/nr13-periodicidade-inspecoes).`,

`## Exigências de operador {#exigencias-de-operador}

Toda caldeira deve estar sob operação e controle de operador de caldeira (subitem 13.4.3.3). Pelo Anexo I da NR-13, o operador precisa de:

| Requisito | Categoria A | Categoria B |
| --- | --- | --- |
| Treinamento de segurança na operação de caldeiras (item 1.3) | Mínimo 40 horas, com currículo do item 1.9 | Mínimo 40 horas, com currículo do item 1.9 |
| Prática profissional supervisionada na própria caldeira (item 1.5) | Mínimo 80 horas | Mínimo 60 horas |

A prática supervisionada é feita **na caldeira que o trabalhador irá operar** e só começa depois de concluído todo o conteúdo programático (item 1.8). A atualização de conhecimentos é obrigatória quando houver modificação na caldeira, acidente ou incidente de alto potencial, ou recorrência de incidentes (item 1.7).

Detalhamento em [treinamento NR-13 para operador de caldeira](/blog/treinamento-nr13-operador-caldeira-prazo).

> **Suas caldeiras estão corretamente categorizadas?** A VSM Engenharia faz inventário, reenquadramento e prontuário NR-13 em todo o Sudeste. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).

## Próximo passo {#proximo-passo}

Categorização correta é o ponto técnico que orienta todo o programa NR-13 da planta. Caldeira enquadrada em categoria que a norma já não prevê compromete o cronograma de inspeção, a capacitação do operador e a defesa técnica da empresa em fiscalização.

A VSM Engenharia faz inventário, categorização e programa NR-13 completo em todo o Sudeste. Valores de referência estão em [quanto custa o laudo NR-13 em São Paulo](/blog/quanto-custa-laudo-nr13-sao-paulo).

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [inspeção NR-13](/servicos/nr13) e o artigo [inspeção NR-13 em caldeiras: flamotubulares e aquatubulares](/blog/caldeiras-flamotubulares-aquatubulares).`
    ],
};
