/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Modelo de PMOC: planilha base, estrutura técnica e como adaptar para sua empresa. Cuidados na personalização. VSM Engenharia.",
  keywords: ["modelo de pmoc", "pmoc modelo", "modelo pmoc", "planilha pmoc", "planilha pmoc word", "planilha pmoc download grátis", "pmoc ar condicionado pdf"],
  keyTakeaways: [
      "Modelo de PMOC é ponto de partida útil — mas não substitui adaptação técnica à realidade",
      "Cada edifício tem inventário próprio, cronograma e responsáveis específicos",
      "Modelo sem ART de engenheiro é tecnicamente nulo",
      "VSM oferece modelo base + elaboração técnica adaptada por engenheiro habilitado"
    ],
  toc: [
      { id: "para-que-serve-modelo", label: "Para que serve um modelo de PMOC" },
      { id: "estrutura-padrao", label: "Estrutura padrão de planilha PMOC" },
      { id: "o-que-personalizar", label: "O que precisa ser personalizado" },
      { id: "riscos-de-usar-modelo", label: "Riscos de usar modelo sem adaptação" },
      { id: "diferenca-modelo-pmoc-real", label: "Modelo vs PMOC tecnicamente válido" },
      { id: "como-elaborar-corretamente", label: "Como elaborar corretamente" },
      { id: "modelo-vsm", label: "Modelo base VSM Engenharia" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Posso usar um modelo de PMOC baixado da internet?", answer: "Como referência sim, como documento final não. Modelo da internet é estrutura genérica — falta inventário real, cronograma específico, ART do engenheiro responsável. PMOC baseado em modelo sem adaptação técnica é frágil em fiscalização e não cumpre a Lei 13.589/2018. Use modelo para entender estrutura, mas o PMOC final precisa de elaboração técnica." },
      { question: "Qual a diferença entre modelo de PMOC em Word e em planilha?", answer: "Word é o mais comum como documento descritivo — contém procedimentos, responsabilidades, cronograma narrativo. Planilha (Excel/LibreOffice) é mais útil como apoio operacional — controle de execução, registro de manutenções, planejamento de análises. PMOC robusto usa os dois formatos combinados: documento técnico em Word + planilha operacional de apoio." },
      { question: "Modelo de PMOC pode dispensar engenheiro?", answer: "Não. Lei 13.589/2018 e Portaria 3.523/1998 exigem ART de profissional habilitado. Engenheiro mecânico precisa elaborar ou validar o PMOC final, baixar ART e assumir responsabilidade técnica. Modelo serve para entender estrutura e poupar tempo do engenheiro, mas não substitui a responsabilidade técnica formal." },
      { question: "Onde baixar modelo de PMOC confiável gratuito?", answer: "Modelos genéricos circulam em sites de SST, fornecedores de climatização e Vigilância Sanitária. A VSM Engenharia disponibiliza modelo base para clientes mediante solicitação. Cuidado com modelos antigos pré-Lei 13.589 — podem não refletir a estrutura atualizada. Em qualquer caso, modelo é ponto de partida, não documento final." }
    ],
  content: [
`A busca por **modelo de PMOC em planilha** ou em Word é constante entre administradoras e empresas que precisam implementar o plano sem orçamento robusto. Modelos circulam livremente — alguns úteis, outros desatualizados, todos genéricos.

A pergunta correta não é "onde baixar modelo gratuito" mas "como usar modelo corretamente sem cair em PMOC tecnicamente nulo". Este artigo apresenta a estrutura padrão, o que precisa ser personalizado, os riscos de usar modelo cru e como elaborar PMOC tecnicamente válido com economia.`,

`## Para que serve um modelo de PMOC {#para-que-serve-modelo}

Modelo bem feito tem três funções:

1. **Apresentar a estrutura** técnica esperada (seções, conteúdo, formato)
2. **Acelerar a elaboração** poupando trabalho de redação base
3. **Garantir cobertura** dos componentes obrigatórios

O que modelo **não** faz:

- Substituir engenheiro responsável
- Personalizar inventário à edificação real
- Definir cronograma específico
- Registrar ART
- Assumir responsabilidade técnica

Usar modelo sem entender essa distinção é uma das principais causas de PMOC inválido.`,

`## Estrutura padrão de planilha PMOC {#estrutura-padrao}

PMOC bem estruturado tem as seguintes seções:

| Seção | Conteúdo |
| --- | --- |
| **1. Identificação** | CNPJ, endereço, atividade, responsável técnico, ART |
| **2. Objetivo** | Finalidade do PMOC |
| **3. Base legal** | Lei 13.589, Portaria 3.523, RE-9 ANVISA |
| **4. Inventário** | Lista de equipamentos (marca, modelo, capacidade, ano, localização, estado) |
| **5. Cronograma de manutenção** | Frequências por equipamento |
| **6. Procedimentos** | Passo a passo de cada atividade |
| **7. Análises de QAI** | Frequência, parâmetros, laboratório |
| **8. Responsabilidades** | Quem executa cada atividade |
| **9. Registros** | Modelos de planilhas de controle |
| **10. Plano de ação** | Procedimentos para não conformidades |
| **11. Anexos** | ART, fotos, laudos laboratoriais, manuais |

Modelo genérico cobre estrutura. Personalização cobre conteúdo.`,

`## O que precisa ser personalizado {#o-que-personalizar}

Itens **obrigatoriamente** personalizados (não copiáveis de modelo):

- **Inventário completo** dos equipamentos específicos da edificação
- **Cronograma** ajustado ao porte e perfil de operação
- **Responsáveis** identificados (equipe interna, contratada, terceirizada)
- **Procedimentos** adaptados aos equipamentos reais
- **Limites toleráveis** de QAI conforme tipo de uso (hospital tem limites mais rigorosos que escritório)
- **Plano de emergência** específico para a edificação
- **ART** do engenheiro responsável
- **Cronograma de análises** com laboratório acreditado
- **Registros** com periodicidade real
- **Plano de ação** para os riscos identificados

Itens não personalizados = modelo bruto. PMOC tecnicamente válido = modelo + personalização técnica.`,

`## Riscos de usar modelo sem adaptação {#riscos-de-usar-modelo}

Cenários comuns em PMOC mal adaptado:

| Risco | Consequência |
| --- | --- |
| Inventário genérico (não bate com equipamentos reais) | Auditor identifica em minutos, PMOC desclassificado |
| Cronograma copiado (não reflete uso real) | Atividades não executadas conforme plano |
| Ausência de ART | Documento tecnicamente nulo |
| Limites toleráveis errados | Operação fora de padrão sem alerta |
| Responsabilidades vagas | Atividades não executadas, ninguém responsável |
| Sem registros | Fiscalização pede comprovação, empresa não tem |
| Manual desatualizado | Não reflete Lei 13.589, RE-9 atualizada |

Em fiscalização, PMOC mal adaptado é mais perigoso que ausência de PMOC — gera **falsa sensação de conformidade** e atrasa correção.`,

`## Modelo vs PMOC tecnicamente válido {#diferenca-modelo-pmoc-real}

Comparativo direto:

| Característica | Modelo genérico | PMOC tecnicamente válido |
| --- | --- | --- |
| Inventário | Genérico ou ausente | Real, completo, atualizado |
| Cronograma | Padrão | Adaptado ao porte |
| Procedimentos | Genéricos | Adaptados aos equipamentos reais |
| ART | Ausente | Registrada e válida |
| Engenheiro responsável | Sem | Identificado, com CREA |
| Atualização | Estática | Periódica e documentada |
| Registros | Modelos vazios | Preenchidos com execução real |
| Validade em fiscalização | Frágil | Robusta |
| Custo de produção | R$ 0 | R$ 1.500 a R$ 12.000+ |

O custo do PMOC bem feito é proporcionalmente irrisório frente ao risco financeiro de PMOC mal feito (multa + interdição + responsabilização).

> **Quer modelo base + elaboração técnica adaptada?** A VSM Engenharia oferece modelo base para entender estrutura + elaboração completa por engenheiro habilitado. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Como elaborar corretamente {#como-elaborar-corretamente}

Sequência prática:

1. **Contratar engenheiro mecânico** com CREA ativo
2. **Visita técnica** ao imóvel com inventário de equipamentos
3. **Levantamento documental** de equipamentos (notas, manuais, históricos)
4. **Análise do uso** real da edificação
5. **Definição do cronograma** adaptado ao porte
6. **Redação do PMOC** com base em modelo + adaptação
7. **Registro de ART** no CREA
8. **Implementação operacional**
9. **Análises de QAI** conforme cronograma
10. **Auditoria periódica** e atualização

Modelo base entra como ferramenta no passo 6 — base estrutural que o engenheiro adapta.`,

`## Modelo base VSM Engenharia {#modelo-vsm}

A VSM Engenharia oferece, para clientes interessados:

- **Modelo base** em Word + planilha de apoio (entendimento da estrutura)
- **Visita técnica** com inventário de equipamentos
- **Elaboração técnica completa** por engenheiro mecânico
- **ART no CREA** vinculada ao PMOC
- **Implementação** assistida do programa
- **Manutenção continuada** com atualizações

Custo varia conforme porte:

| Porte | Faixa de investimento |
| --- | --- |
| Pequeno (até 5 equipamentos) | R$ 1.500 – R$ 3.500 |
| Médio (6 a 30 equipamentos) | R$ 3.500 – R$ 12.000 |
| Grande (acima de 30 equipamentos) | R$ 12.000 – R$ 50.000+ |

## Próximo passo {#proximo-passo}

Modelo genérico de PMOC é ferramenta útil — para **entender a estrutura**. PMOC tecnicamente válido exige adaptação por engenheiro habilitado e ART vinculada. O caminho híbrido (modelo + adaptação técnica) combina economia e validade jurídica.

A VSM Engenharia oferece esse caminho híbrido para empresas em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar modelo e orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [PMOC](/servicos/pmoc) e os artigos [PMOC: o que é](/blog/pmoc-o-que-e-significado-completo) e [quem pode assinar PMOC](/blog/quem-pode-assinar-pmoc-engenheiro-tecnico).`
    ],
};
