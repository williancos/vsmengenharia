/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Inspeção NR-13: tipos (externa, interna, complementar), periodicidade por categoria, procedimento técnico e profissional habilitado. VSM Engenharia.",
  keywords: ["inspeção nr13", "inspecao nr13", "tipos de inspeção nr13", "como fazer inspeção nr13"],
  keyTakeaways: [
      "Inspeção NR-13 tem 3 tipos principais: externa, interna e complementar com ensaios",
      "Periodicidade varia conforme categoria do equipamento e prazo definido pelo PLH",
      "Profissional habilitado é engenheiro com CREA — SNQC para categoria I/A",
      "Toda inspeção gera registro no prontuário com ART específica"
    ],
  toc: [
      { id: "o-que-e-inspecao-nr13", label: "O que é inspeção NR-13" },
      { id: "tipos-de-inspecao", label: "Os 3 tipos de inspeção" },
      { id: "inspecao-externa", label: "Inspeção externa — procedimento" },
      { id: "inspecao-interna", label: "Inspeção interna — procedimento" },
      { id: "inspecao-com-ensaios", label: "Inspeção com ensaios complementares" },
      { id: "periodicidade", label: "Periodicidade por categoria" },
      { id: "quem-pode-executar", label: "Quem pode executar a inspeção" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Inspeção visual basta para atender NR-13?", answer: "Não, em geral. Inspeção visual (externa e interna) é parte do programa, mas raramente isolada. Equipamentos categoria I e II exigem ensaios não destrutivos complementares (ultrassom, partícula magnética, líquido penetrante) em frequência determinada pelo PLH. Categoria III a V pode operar com regime menos intenso, mas sempre conforme análise técnica documentada." },
      { question: "Inspeção interna exige parada da operação?", answer: "Sim. A inspeção interna requer drenagem, despressurização, ventilação, descarbonatação (em caldeira), abertura de bocas de visita e acesso visual a todas as superfícies internas. Não há como executar com o equipamento em operação. Programação de parada é parte essencial do planejamento da inspeção interna." },
      { question: "Quem pode executar ensaios não destrutivos na inspeção NR-13?", answer: "Profissional END certificado conforme ABENDI Nível 2 ou superior, na metodologia específica (ultrassom, partícula magnética, líquido penetrante). O ensaio é executado sob supervisão do PLH (engenheiro responsável), que integra os resultados ao laudo. Profissional END não substitui o PLH, mas é parte da equipe técnica." },
      { question: "Posso adiar inspeção interna sem multa?", answer: "Apenas se o PLH justificar tecnicamente o adiamento, com base em análise de integridade do equipamento, histórico de inspeções anteriores e condições operacionais. Adiamento sem justificativa técnica documentada em prontuário expõe à autuação e responsabilização em caso de acidente. Boa prática: cumprir periodicidade ou justificar via PLH antes do vencimento." }
    ],
  content: [
`A **inspeção NR-13** é o conjunto de atividades técnicas que verifica, periodicamente, a integridade e a aptidão operacional de caldeiras, vasos de pressão e tubulações. É privativa de Profissional Legalmente Habilitado (PLH), executada conforme procedimentos específicos por categoria do equipamento, e documentada em laudo + prontuário.

Inspeção mal conduzida ou cronograma postergado é causa direta de acidentes catastróficos — explosão de caldeira pode liberar energia equivalente a centenas de kg de TNT. Este artigo apresenta os três tipos de inspeção, a periodicidade por categoria, o procedimento técnico e os profissionais habilitados.`,

`## O que é inspeção NR-13 {#o-que-e-inspecao-nr13}

A inspeção NR-13 é a verificação técnica formal da integridade física e da aptidão operacional de equipamentos sob pressão. Difere de:

- **Manutenção** — atividade corretiva ou preventiva, sem finalidade de atestar
- **Operação** — atividade rotineira de uso conforme procedimento
- **Auditoria** — verificação de documentos e procedimentos

A inspeção é executada por **PLH**, com **ART específica**, e culmina em **registro no prontuário** + **laudo técnico**. É o documento que atesta que o equipamento está apto a operar até a próxima inspeção.`,

`## Os 3 tipos de inspeção {#tipos-de-inspecao}

A NR-13 estabelece três tipos principais:

| Tipo | O que verifica | Periodicidade típica |
| --- | --- | --- |
| **Externa** | Condições externas, instalações, dispositivos de segurança, registros operacionais | Anual a quinquenal conforme categoria |
| **Interna** | Superfícies internas, integridade estrutural, soldas internas, depósitos | Trienal a sexenal conforme categoria |
| **Complementar com ensaios** | Espessura, trincas, descontinuidades — via ensaios não destrutivos | Conforme avaliação técnica do PLH |

Programa típico combina os três em cronograma escalonado, registrado em prontuário.`,

`## Inspeção externa — procedimento {#inspecao-externa}

A inspeção externa é a verificação **sem abrir o equipamento**. Avalia:

### Itens verificados

- Identificação do equipamento (placa, prontuário, categoria)
- Estado externo (corrosão, deformação, vazamento)
- Instalações elétricas (NR-10) próximas
- Dispositivos de segurança (válvula, pressostato, controle de nível)
- Instrumentação (manômetro, termômetro, registradores)
- Estado de pintura, isolamento térmico, escadas, plataformas
- Registros operacionais recentes
- Treinamento dos operadores
- Documentação do prontuário

### Procedimento

1. Reunião preliminar com responsáveis pela operação
2. Análise do prontuário e histórico
3. Inspeção visual minuciosa com checklist
4. Verificação de dispositivos de segurança
5. Análise de registros operacionais
6. Identificação de não conformidades
7. Emissão de laudo + atualização do prontuário

Não exige parada da operação. Pode ser programada com antecedência mínima.`,

`## Inspeção interna — procedimento {#inspecao-interna}

A inspeção interna requer **abertura do equipamento** e acesso visual a superfícies internas. Avalia:

### Itens verificados

- Superfícies internas (corrosão, erosão, depósitos)
- Soldas internas (trincas, falhas)
- Tubos (em caldeira: estado, espessura)
- Dispositivos internos (chicanas, anteparos)
- Bocas de visita e tampas
- Drenos e purgadores
- Comportamento estrutural geral

### Procedimento

1. Programação de parada da operação
2. Drenagem completa
3. Despressurização e ventilação
4. Descarbonatação (caldeira a vapor)
5. Sinalização e isolamento de área
6. Liberação para entrada em espaço confinado (NR-33)
7. Inspeção visual interna minuciosa
8. Medição de espessura por ultrassom (pontos críticos)
9. Documentação fotográfica detalhada
10. Fechamento e teste de estanqueidade
11. Emissão de laudo + atualização do prontuário

Inspeção interna é evento programado de **2 a 5 dias** dependendo do porte. Empresa deve provisionar parada operacional.`,

`## Inspeção com ensaios complementares {#inspecao-com-ensaios}

Os **ensaios não destrutivos (END)** complementam a inspeção visual em pontos críticos:

| Ensaio | Detecta | Quando aplicar |
| --- | --- | --- |
| **Ultrassom de espessura** | Redução de parede por corrosão/erosão | Equipamentos com risco de corrosão |
| **Ultrassom de solda** | Trincas internas em juntas | Soldas suspeitas, pós-reparo |
| **Líquido penetrante (LP)** | Descontinuidades superficiais | Soldas externas, áreas de tensão |
| **Partícula magnética (PM)** | Descontinuidades superficiais e subsuperficiais | Aço carbono, soldas |
| **Radiografia industrial** | Descontinuidades internas | Análise definitiva de soldas |

Ensaios são executados por **profissionais END certificados ABENDI Nível 2+** sob supervisão do PLH. Detalhamento técnico em [ensaios não destrutivos industriais](/blog/ensaios-nao-destrutivos-end-industriais).

> **Suas caldeiras e vasos precisam de inspeção NR-13?** A VSM Engenharia executa inspeções completas com END em todo o Sudeste. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Periodicidade por categoria {#periodicidade}

Periodicidades base conforme NR-13 (podem ser ajustadas pelo PLH):

### Caldeiras

Em caldeiras, a inspeção periódica compreende exame interno e externo no mesmo prazo — não há intervalos separados como em vasos.

| Situação | Prazo máximo |
| --- | --- |
| Categorias A e B | 12 meses |
| Recuperação de álcalis, qualquer categoria | 15 meses |
| Categoria A, com teste das válvulas de segurança aos 12 meses | 24 meses |
| Com SPIE — categoria B e recuperação de álcalis | 24 meses |
| Com SPIE — categoria A | 30 meses |

### Vasos de pressão

| Categoria | Externa | Interna |
| --- | --- | --- |
| I | Anual | 3 anos |
| II | 2 anos | 4 anos |
| III | 3 anos | 6 anos |
| IV | 4 anos | 8 anos |
| V | 5 anos | 10 anos |

Detalhamento e ajustes técnicos em [periodicidade NR-13](/blog/nr13-periodicidade-inspecoes).`,

`## Quem pode executar a inspeção {#quem-pode-executar}

Profissional habilitado:

| Categoria do equipamento | Profissional |
| --- | --- |
| Caldeira A / Vaso I | PLH com qualificação SNQC (Anexo III) |
| Caldeira B/C / Vaso II a V | PLH com CREA ativo e atribuição |
| Ensaios END | Profissional ABENDI Nível 2+ sob supervisão do PLH |
| Inspeção operacional rotineira | Operador treinado |

PLH assina o laudo, atualiza o prontuário e baixa a ART. Profissional END entrega relatório técnico do ensaio, integrado ao laudo do PLH.

## Próximo passo {#proximo-passo}

A inspeção NR-13 em dia é o documento que separa empresa em conformidade de empresa em risco de explosão e responsabilização severa. Programa estruturado de inspeção é proteção patrimonial e de vidas.

A VSM Engenharia executa inspeções NR-13 completas (visual + ensaios + laudo + prontuário + ART) em todo o Sudeste, com PLH qualificado.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [inspeção NR-13](/servicos/nr13), o [checklist de inspeção NR-13](/blog/checklist-inspecao-nr13) e a classificação por gatilho em [inspeção NR-13 inicial, periódica e extraordinária](/blog/inspecao-nr13-inicial-periodica-extraordinaria).

Para o escopo por tipo construtivo de caldeira, veja [inspeção NR-13 em caldeiras: flamotubulares e aquatubulares](/blog/caldeiras-flamotubulares-aquatubulares).`
    ],
};
