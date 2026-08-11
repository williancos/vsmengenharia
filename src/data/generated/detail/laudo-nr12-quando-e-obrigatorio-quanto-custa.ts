/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Laudo NR-12: quando é obrigatório, conteúdo técnico, profissional habilitado e quanto custa em São Paulo. Guia VSM Engenharia.",
  keywords: ["laudo nr12", "laudo técnico nr12", "laudo de adequação nr12", "quanto custa laudo nr12"],
  keyTakeaways: [
      "Laudo NR-12 é exigido sempre que a máquina precisa demonstrar conformidade — fiscalização, auditoria, processo, venda",
      "Engenheiro mecânico ou eletricista com CREA ativo é o profissional habilitado",
      "Custo típico em SP: R$ 2.500 a R$ 15.000 por máquina, dependendo da complexidade",
      "Documento inclui apreciação de risco, descrição de proteções, comando seguro e ART"
    ],
  toc: [
      { id: "o-que-e-laudo-nr12", label: "O que é o laudo NR-12" },
      { id: "quando-e-obrigatorio", label: "Quando é obrigatório emitir" },
      { id: "quem-pode-emitir", label: "Quem pode emitir o laudo" },
      { id: "conteudo-do-laudo", label: "Conteúdo técnico obrigatório" },
      { id: "custos-tipicos-sp", label: "Custos típicos em São Paulo" },
      { id: "validade", label: "Validade e renovação" },
      { id: "erros-comuns", label: "Erros que invalidam o laudo" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Toda máquina precisa de laudo NR-12?", answer: "Não automaticamente. O laudo é obrigatório em situações específicas: pós-adequação, em auditorias de clientes, antes de venda ou locação, durante fiscalização do MTE, em processos judiciais e em sinistros. Máquina em uso rotineiro sem essas situações pode operar com base no manual do fabricante + APR + ART de projeto, embora ter laudo formal seja boa prática." },
      { question: "O laudo NR-12 tem validade fixa?", answer: "A norma não fixa prazo único. Recomendação técnica: revisar a cada 2 anos ou imediatamente após mudança de processo, modernização, transferência de máquina entre plantas, acidente ou atualização da NR-12. Mais detalhes no artigo sobre validade do laudo NR-12." },
      { question: "Qual a diferença entre laudo NR-12 e ART de adequação?", answer: "ART é o registro de responsabilidade técnica do profissional no CREA, vinculando juridicamente o engenheiro ao trabalho. Laudo é o documento técnico que descreve a máquina, os riscos identificados, as proteções implementadas e a conclusão de conformidade. Ambos andam juntos: o laudo é assinado e acompanhado da ART." },
      { question: "Posso usar o manual do fabricante no lugar do laudo?", answer: "Não. O manual descreve a máquina como saiu de fábrica, mas não atesta o estado atual nem confirma adequação ao layout, ao operador e ao processo da planta. O laudo é específico à instalação real. Fiscais do MTE rejeitam manual como evidência de conformidade isoladamente." }
    ],
  content: [
`O **laudo NR-12** é o documento técnico que atesta a conformidade de uma máquina ou equipamento aos requisitos da Norma Regulamentadora nº 12. É emitido por engenheiro mecânico ou eletricista com CREA ativo e ART registrada, e representa a evidência formal de que a máquina foi avaliada, adequada e está apta a operar com segurança.

Em fiscalização do MTE, em auditoria de cliente, em processo de venda ou em sinistro, **o laudo é o documento que separa empresa em conformidade de empresa sujeita a interdição imediata**. Este artigo explica quando o laudo é obrigatório, o que precisa conter, quem pode emitir e os custos típicos em São Paulo.`,

`## O que é o laudo NR-12 {#o-que-e-laudo-nr12}

O laudo NR-12 é um relatório técnico de **avaliação de conformidade** de uma máquina específica em sua instalação real. Diferente de:

- **Manual do fabricante** — descreve a máquina como saiu de fábrica, não a instalação atual
- **APR** — apreciação de risco, instrumento técnico que **alimenta** o laudo mas não o substitui
- **Certificado** — emitido por terceiro acreditado, com escopo distinto

O laudo descreve a máquina, identifica os riscos, documenta as proteções implementadas e conclui formalmente pela conformidade (ou pela não conformidade, com plano de ação). É **específico à máquina + instalação + processo + operador**.`,

`## Quando é obrigatório emitir {#quando-e-obrigatorio}

A norma não exige laudo em toda máquina rotineiramente. Mas existem **gatilhos formais** em que o laudo deixa de ser opcional:

| Situação | Por que o laudo é necessário |
| --- | --- |
| Pós-adequação ou retrofit | Documenta que a adequação foi executada conforme projeto |
| Auditoria de cliente (montadora, farma, alimentos) | Cliente exige evidência formal de conformidade |
| Venda de máquina usada | Comprador exige laudo para precificar e operar |
| Locação ou cessão | Locador é solidariamente responsável; laudo protege |
| Fiscalização ativa do MTE | Auditor solicita evidência documental |
| Sinistro / acidente | Evidência de boa-fé na defesa civil e trabalhista |
| Mudança de planta ou layout | Máquina muda de instalação → novo laudo |
| Transferência entre filiais | Cada planta exige documentação local |

Em qualquer um desses cenários, a ausência do laudo gera consequência prática imediata.`,

`## Quem pode emitir o laudo {#quem-pode-emitir}

Conforme a Resolução CONFEA nº 218/1973 e atualizações, o laudo NR-12 é privativo de:

- **Engenheiro mecânico** — para máquinas e dispositivos de proteção mecânicos
- **Engenheiro eletricista** — para painéis elétricos, comando seguro, intertravamentos
- **Engenheiro de controle e automação** — para sistemas de segurança automatizados
- **Engenheiro de segurança do trabalho** — em escopo restrito, como apoio à equipe mecânica/elétrica

Técnicos de segurança do trabalho **não podem assinar** o laudo NR-12. Podem participar da equipe e contribuir com a análise, mas a responsabilidade técnica formal é privativa de engenheiro com atribuição.

Em máquinas complexas (prensa com circuito de comando seguro categoria 4, por exemplo), o laudo é frequentemente assinado por dupla — engenheiro mecânico + engenheiro eletricista. Cada um com sua ART.`,

`## Conteúdo técnico obrigatório {#conteudo-do-laudo}

Um laudo NR-12 robusto contém:

| Seção | Conteúdo |
| --- | --- |
| Identificação | Máquina (marca, modelo, ano, nº série), planta, processo |
| Apreciação de risco | Metodologia (ISO 12100, HRN), riscos identificados |
| Proteções implementadas | Fixas, móveis, intertravamentos, sensores |
| Sistema de comando | Categoria/PL conforme ISO 13849-1, esquema elétrico |
| Dispositivos de emergência | Parada de emergência, cordoalha, cortina ótica |
| Distâncias de segurança | Conforme Anexo I da NR-12 |
| Documentação fotográfica | Pontos críticos, antes/depois quando adequação |
| Conclusão | Apto / Não apto / Apto com restrições |
| Plano de ação | Quando há não conformidades remanescentes |
| ART | Anexa ao laudo |

Laudo sem apreciação de risco fundamentada é **laudo frágil** — primeira coisa que fiscal do MTE pede.`,

`## Custos típicos em São Paulo {#custos-tipicos-sp}

Faixas observadas no mercado de SP em 2026:

| Tipo de máquina | Faixa de custo |
| --- | --- |
| Esmeril, furadeira de bancada, pequenos equipamentos | R$ 1.800 – R$ 3.500 |
| Torno mecânico, fresadora, prensa pequena | R$ 3.500 – R$ 6.500 |
| Prensa grande, injetora, máquinas com circuito de comando seguro | R$ 6.500 – R$ 12.000 |
| Linhas de produção, robotizadas, montagens complexas | R$ 12.000 – R$ 30.000+ |

Os custos incluem: visita técnica, apreciação de risco, redação do laudo, ART. **Não incluem** projeto de adequação (quando há não conformidades) nem execução de proteções físicas, que são contratos separados.

> **Precisa de laudo NR-12 para auditoria ou fiscalização?** A VSM Engenharia entrega em 7 a 15 dias úteis em todo o Sudeste. [Solicite orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Validade e renovação {#validade}

A NR-12 **não fixa prazo único de validade** para o laudo. Boa prática técnica:

- **Revisão a cada 2 anos** em máquinas críticas
- **Revisão imediata** após mudança de processo, modificação física, transferência ou acidente
- **Revisão pós-atualização normativa** quando portaria altera item aplicável à máquina

Mais detalhes em [validade do laudo NR-12: quando renovar](/blog/validade-laudo-nr12-quando-renovar).`,

`## Erros que invalidam o laudo {#erros-comuns}

Os indeferimentos mais comuns em auditoria de cliente ou em fiscalização:

- **ART de profissional sem atribuição em segurança de máquinas** — recusa automática
- **APR genérica, copiada de modelo** — sem identificação dos riscos reais
- **Ausência de esquema elétrico do comando seguro** — em máquinas que exigem
- **Distâncias de segurança não medidas** — Anexo I não verificado
- **Documentação fotográfica insuficiente** — pontos críticos sem registro
- **Conclusão genérica** sem justificativa técnica
- **Laudo sem assinatura digital** quando o fluxo exige

Esses erros se evitam com escritório experiente em NR-12 e em fiscalizações reais. O artigo [adequação NR-12 passo a passo](/blog/adequacao-nr12-passo-a-passo) detalha o caminho técnico que sustenta um laudo aprovado.

## Próximo passo {#proximo-passo}

O laudo NR-12 é o documento que separa empresa em conformidade de empresa em risco de autuação. Em qualquer cenário de fiscalização, auditoria ou venda, ter o laudo atualizado é proteção patrimonial e trabalhista.

A VSM Engenharia emite laudos NR-12 em todo o Sudeste com engenheiros mecânicos e elétricos credenciados.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [NR-12](/servicos/nr12) e os artigos [apreciação de risco NR-12](/blog/apreciacao-de-risco-nr12-modelo-pratico) e [o que é APR na NR-12](/blog/o-que-e-apr-nr12).

Antes de contratar, veja [como escolher uma empresa de adequação NR-12](/blog/empresa-adequacao-nr12-como-escolher).`
    ],
};
