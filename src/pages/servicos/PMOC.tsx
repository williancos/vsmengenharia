import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, ArrowRight, Shield, AlertTriangle,
  FileText, Award, Clock, Phone, ChevronDown, ChevronUp,
  Wind, Thermometer, Eye, Scale, Zap, Heart,
  ShieldAlert, XCircle, CircleCheck, Star,
  Factory, Building, TrendingUp, BadgeCheck, BookOpen
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import SeoGuideContent from "@/components/SeoGuideContent";
import heroPmoc from "@/assets/pmoc/hero-pmoc.jpg";
import artPmocFaq from "@/assets/pmoc/art-pmoc-faq.jpg";
import artQuemAssina from "@/assets/pmoc/art-quem-assina.jpg";
import artLei13589 from "@/assets/pmoc/art-lei-13589.jpg";
import imgManutencaoHvac from "@/assets/pmoc/manutencao-hvac.jpg";

const tickerMessages = [
  "⚠️ Ambientes climatizados sem PMOC = multa e interdição",
  "🔴 Lei 13.589/2018 obriga PMOC para sistemas acima de 5 TR",
  "📋 Seu PMOC está atualizado e em conformidade?",
  "⏰ Regularize seu PMOC antes da próxima fiscalização da Vigilância Sanitária",
];

const stats = [
  { value: 500, suffix: "+", label: "Empresas atendidas", icon: Building },
  { value: 100, prefix: "R$ ", suffix: "M+", label: "Prejuízos evitados", icon: Shield },
  { value: 24, suffix: "h", label: "Atendimento técnico", icon: Clock },
  { value: 100, suffix: "%", label: "Aprovação em auditorias", icon: BadgeCheck },
];

const benefits = [
  { icon: Shield, title: "Conformidade Legal", desc: "Adequação completa à Lei 13.589/2018 e Portaria 3.523, evitando multas da Vigilância Sanitária e ANVISA.", highlight: true },
  { icon: Heart, title: "Qualidade do Ar Interior", desc: "Monitoramento e controle da qualidade do ar que previne doenças respiratórias e síndrome do edifício doente." },
  { icon: FileText, title: "Documentação Completa", desc: "PMOC completo com cronograma, fichas de equipamentos, relatórios de manutenção e ART." },
  { icon: Clock, title: "Eficiência Energética", desc: "Manutenção programada que reduz consumo de energia em até 30% e aumenta vida útil dos equipamentos." },
  { icon: Award, title: "Engenheiro CREA Ativo", desc: "PMOC elaborado e assinado por engenheiro habilitado conforme exige a legislação." },
  { icon: Scale, title: "ART + Seguro Incluso", desc: "Anotação de Responsabilidade Técnica e seguro de responsabilidade civil inclusos." },
];

const processSteps = [
  { title: "Contato Inicial", desc: "Você entra em contato e nosso engenheiro avalia seu sistema de climatização.", icon: Phone },
  { title: "Levantamento", desc: "Mapeamos todos os equipamentos, dutos e componentes do sistema.", icon: Eye },
  { title: "Elaboração do PMOC", desc: "Desenvolvemos o plano completo com cronograma de manutenções.", icon: FileText },
  { title: "Implementação", desc: "Acompanhamos a execução das manutenções preventivas e corretivas.", icon: Wind },
  { title: "Monitoramento", desc: "Controle contínuo da qualidade do ar e desempenho dos equipamentos.", icon: Shield },
];

const equipmentTypes = [
  { icon: Wind, title: "Split e Multi-Split", desc: "Sistemas split, multi-split e VRF/VRV de todas as capacidades", count: "200+ gerenciados" },
  { icon: Thermometer, title: "Self-Contained", desc: "Equipamentos self-contained e roof-top industriais", count: "50+ gerenciados" },
  { icon: Factory, title: "Chiller e Fan-Coil", desc: "Sistemas centrais com chiller, fan-coil e torre de resfriamento", count: "30+ gerenciados" },
  { icon: Wind, title: "Dutos e Difusores", desc: "Redes de dutos, difusores, grelhas e dampers", count: "100+ sistemas" },
];

const riskComparison = [
  { item: "Multas da Vigilância Sanitária", without: "Até R$ 100.000", with: "Zero multas" },
  { item: "Qualidade do ar interior", without: "Contaminado", with: "Monitorado e saudável" },
  { item: "Doenças respiratórias", without: "Risco elevado", with: "Prevenidas" },
  { item: "Interdição do estabelecimento", without: "Possível", with: "Operação garantida" },
  { item: "Eficiência energética", without: "Desperdício", with: "Otimizada (-30%)" },
  { item: "Vida útil dos equipamentos", without: "Reduzida", with: "Maximizada" },
];

const targetAudience = [
  { name: "Shopping centers e centros comerciais", icon: Building },
  { name: "Hospitais e clínicas", icon: Heart },
  { name: "Edifícios corporativos", icon: Building },
  { name: "Indústrias com ambientes climatizados", icon: Factory },
  { name: "Hotéis e resorts", icon: Building },
  { name: "Escolas e universidades", icon: Building },
  { name: "Teatros e cinemas", icon: Building },
  { name: "Supermercados e lojas", icon: Building },
];

const testimonials = [
  { name: "Patrícia M.", role: "Gerente de Facilities", company: "Shopping Center – SP", text: "A VSM elaborou e implementou o PMOC de todo nosso shopping. Passamos na fiscalização da Vigilância Sanitária sem problemas.", rating: 5 },
  { name: "Dr. André L.", role: "Diretor Administrativo", company: "Hospital – MG", text: "Qualidade do ar interior é crítica em ambiente hospitalar. O PMOC da VSM nos dá total controle e conformidade.", rating: 5 },
  { name: "Cláudio R.", role: "Síndico", company: "Edifício Corporativo – SP", text: "Desde que implementamos o PMOC da VSM, reduzimos em 25% o consumo de energia com climatização.", rating: 5 },
];

const faqs = [
  { q: "Quem é obrigado a ter o PMOC?", a: "Todo ambiente climatizado com capacidade acima de 5 TR (60.000 BTUs), sejam comerciais, industriais, de serviços, saúde ou educação. A Lei 13.589/2018 é de cumprimento obrigatório." },
  { q: "Qual a penalidade por não ter o PMOC?", a: "Multas da Vigilância Sanitária que podem ultrapassar R$ 100.000, interdição do estabelecimento e responsabilização civil e criminal em caso de problemas de saúde dos ocupantes." },
  { q: "Quem pode elaborar o PMOC?", a: "O PMOC deve ser elaborado por engenheiro mecânico habilitado com registro ativo no CREA e emissão de ART." },
  { q: "Qual a diferença entre PMOC e projeto de climatização?", a: "O projeto define o sistema a ser instalado. O PMOC é o plano de manutenção obrigatório para sistemas já instalados, garantindo qualidade do ar e funcionamento adequado." },
  { q: "Quanto custa um PMOC?", a: "O valor depende da quantidade de equipamentos e complexidade do sistema. Oferecemos orçamento gratuito e sem compromisso em até 24h." },
  { q: "Com que frequência o PMOC deve ser atualizado?", a: "O PMOC deve ser mantido atualizado continuamente. Revisões gerais são recomendadas anualmente ou sempre que houver alteração nos equipamentos." },
  { q: "A VSM faz a manutenção dos equipamentos?", a: "Nosso foco é a elaboração e gestão técnica do PMOC. Podemos indicar empresas de manutenção parceiras e acompanhar a execução dos serviços." },
  { q: "Vocês atendem em quais estados?", a: "Atendemos todo o Sudeste: São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo." },
];

const relatedServices = [
  { label: "Projetos de Climatização", href: "/servicos/projetos-climatizacao", desc: "Projetos HVAC completos", icon: Wind },
  { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas", desc: "Inspeções especializadas", icon: Eye },
  { label: "Inspeção NR13", href: "/servicos/nr13", desc: "Caldeiras e vasos de pressão", icon: Shield },
  { label: "Consultoria Gratuita", href: "/servicos/consultoria-gratuita", desc: "Avaliação sem compromisso", icon: FileText },
];

const seoContent = `
## PMOC: o guia técnico definitivo sobre o Plano de Manutenção, Operação e Controle

O PMOC saiu do papel e virou exigência fiscalizada. Vigilância Sanitária, Corpo de Bombeiros, Ministério Público do Trabalho e auditores de seguradora pedem o documento na primeira visita — e se ele não existir, ou existir apenas como "papel timbrado para mostrar", as consequências vão de multa simples a interdição imediata do estabelecimento. Síndromes respiratórias coletivas em ambientes climatizados de shoppings, hospitais e escritórios escancararam o problema: ar condicionado mal mantido **adoece pessoas em massa**, e a Lei Federal 13.589/2018 colocou o nome do responsável técnico como linha de defesa.

Este guia foi escrito por engenheiros mecânicos da **VSM Engenharia**, com base em centenas de PMOCs elaborados e mantidos para shoppings, hospitais, redes corporativas, escolas, hotéis e indústrias do Sudeste. O objetivo é dar ao gestor predial, ao síndico, ao gerente de facilities e ao responsável técnico um entendimento real do que a legislação cobra, do que precisa estar dentro do plano, da rotina mensal exigida e do que separa um PMOC vivo de um PMOC fictício.

> NOTA: O PMOC é regido por **três normativos federais simultâneos**: Lei 13.589/2018 (obrigatoriedade), Portaria GM/MS nº 3.523/1998 (qualidade do ar interior) e Resolução RE ANVISA nº 9/2003 (padrões referenciais de qualidade do ar). Em alguns estados há legislações estaduais e municipais adicionais. Cumprir um sem cumprir os outros é estar fora.

### O que é o PMOC e por que ele existe

O PMOC — Plano de Manutenção, Operação e Controle — é um **documento técnico de engenharia** que descreve, para cada sistema de climatização de uma edificação, as rotinas de manutenção preventiva e corretiva, a periodicidade de cada atividade, os parâmetros de qualidade do ar a serem monitorados, os responsáveis pela execução e os registros que devem ser mantidos. Ele existe para responder uma pergunta simples: **o ar que circula naquele edifício está fazendo bem ou mal a quem respira?**

A motivação histórica do PMOC é trágica. Em 1998, o Ministro Sérgio Motta morreu em decorrência de uma infecção respiratória atribuída ao sistema de climatização do prédio onde trabalhava. A resposta regulatória foi a **Portaria 3.523/1998**, depois reforçada pela **Resolução RE ANVISA 9/2003** e finalmente consolidada como obrigação legal pela **Lei 13.589/2018**, que tornou o PMOC obrigatório em todos os ambientes de uso público e coletivo com sistema de climatização.

### Quando o PMOC é obrigatório

A obrigatoriedade é abrangente. O PMOC é exigido para **todos os ambientes de uso público e coletivo** que possuam sistema de climatização. Na prática:

- **Edifícios comerciais e corporativos** com sistema central ou multi-split
- **Shopping centers, galerias, supermercados** e centros comerciais
- **Hospitais, clínicas, laboratórios, postos de saúde** (com regras adicionais da ANVISA)
- **Escolas, universidades, creches**
- **Hotéis, pousadas, restaurantes, bares**
- **Cinemas, teatros, casas de espetáculo**
- **Repartições públicas** (federais, estaduais, municipais)
- **Aeroportos, rodoviárias, terminais de transporte**
- **Indústrias** com áreas climatizadas (escritórios, salas de controle, áreas limpas)
- **Edifícios residenciais** com áreas comuns climatizadas (academia, salão de festas, lobby)

> ALERTA: Existe muita confusão sobre o limite "5 TR" ou "60.000 BTUs". A Lei 13.589/2018 **não traz limite mínimo**. O limite de 5 TR aparecia em normativos anteriores específicos para definir tipo de plano. Hoje, qualquer ambiente público ou coletivo climatizado precisa ter PMOC, com complexidade proporcional ao porte do sistema.

### Documentação que compõe o PMOC

PMOC não é um único documento — é um **conjunto vivo** de documentos técnicos. O pacote mínimo:

- **Plano técnico em si** (PMOC) — descrição dos sistemas, rotinas, periodicidades, responsáveis
- **Memorial descritivo dos sistemas** — tipos de equipamento, capacidade, áreas atendidas, idade, fabricante
- **Inventário de equipamentos** com identificação única (TAG), localização, modelo, ano
- **Cronograma anual de manutenção preventiva**
- **Procedimentos operacionais (POPs)** detalhando cada atividade
- **Registros de execução** (Ordens de Serviço, checklists assinados)
- **Laudos de qualidade do ar interior (QAI)** com periodicidade definida
- **Relatórios de manutenção corretiva** quando ocorrem
- **ART do responsável técnico**, baixada no CREA ou CFT conforme o caso
- **Identificação visível** com nome do RT, telefone e validade do PMOC

### Quem pode ser responsável técnico pelo PMOC

A Lei 13.589/2018 estabelece que o responsável técnico (RT) pelo PMOC deve ser **profissional habilitado**. Na prática, a Justiça e os órgãos fiscalizadores aceitam:

| Profissional | Conselho | Pode assinar PMOC? | Observação |
| --- | --- | --- | --- |
| Engenheiro mecânico | CREA | Sim | Mais indicado, atribuição plena |
| Engenheiro eletricista (com habilitação em refrigeração) | CREA | Sim | Caso a caso, conforme atribuição |
| Engenheiro químico | CREA | Sim | Para QAI e contaminação |
| Técnico em refrigeração e climatização | CFT | Sim, com restrições | Sistemas de pequeno porte |
| Engenheiro de segurança | CREA | Não, isoladamente | Pode compor equipe, não assinar sozinho |
| Arquiteto | CAU | Não | Sem atribuição |

> DICA: Verifique sempre a **ART** do RT no portal do CREA. Cerca de 40% dos PMOCs auditados em shoppings e hospitais que recebemos para revisão técnica trazem ART vencida, ART de outro contrato ou ART em nome de profissional sem atribuição em refrigeração.

### Periodicidades de manutenção exigidas

A periodicidade **mínima** é definida pela Resolução RE ANVISA 9/2003 e por norma técnica de cada tipo de equipamento. O PMOC pode estabelecer prazos **mais curtos**, nunca mais longos.

| Atividade | Periodicidade mínima | Onde aplica |
| --- | --- | --- |
| Limpeza de filtros de ar | Mensal | Todo equipamento |
| Verificação geral de funcionamento | Mensal | Todo equipamento |
| Limpeza de bandeja, dreno e serpentina | Trimestral | Fan-coils, splits, self-contained |
| Limpeza e higienização interna | Semestral | Splits, ventiladores, dutos |
| Análise da qualidade do ar interior (QAI) | Semestral | Ambientes obrigados |
| Limpeza de torre de resfriamento | Quinzenal a mensal | Sistemas com torre |
| Tratamento químico de água condensada | Conforme análise | Sistemas com torre |
| Inspeção de dutos | Anual | Todo sistema dutado |
| Substituição de filtros HEPA | Conforme P.D. ou pressão | Áreas críticas hospitalares |
| Calibração de instrumentos | Anual | Sensores de QAI |

### Parâmetros de qualidade do ar interior (QAI) — o coração do PMOC

A Resolução RE ANVISA 9/2003 fixa os **valores máximos de referência** para qualidade do ar interior em ambientes climatizados artificialmente. O laudo de QAI semestral compara as medições com esses limites.

| Parâmetro | Limite (RE ANVISA 9/2003) | Significado em campo |
| --- | --- | --- |
| Fungos no ar | ≤ 750 UFC/m³ e razão I/E ≤ 1,5 | Aspergillus, Penicillium — contaminação biológica |
| Bactérias | Sem limite numérico, qualitativo | Indicador de higiene |
| CO₂ | ≤ 1.000 ppm | Adequação da renovação de ar |
| CO | ≤ 9 ppm | Infiltração de gases de combustão |
| Aerodispersóides totais | ≤ 80 µg/m³ | Material particulado |
| Temperatura | 23 a 26 °C (verão) / 20 a 22 °C (inverno) | Conforto térmico |
| Umidade relativa | 40% a 65% | Conforto e prevenção de proliferação |
| Velocidade do ar | < 0,25 m/s na zona ocupada | Conforto |
| Taxa de renovação | ≥ 27 m³/h por pessoa | Diluição de poluentes |

> ALERTA: Fungos acima de 750 UFC/m³ ou razão Interno/Externo > 1,5 indicam **contaminação interna ativa** — geralmente por bandeja entupida, serpentina suja ou duto contaminado. Não é problema "de poeira do dia": é problema de manutenção falhando.

### Comparativo: PMOC fictício × PMOC técnico

| Aspecto | PMOC fictício (papel) | PMOC técnico VSM |
| --- | --- | --- |
| Inventário de equipamentos | "Sistema de ar condicionado" genérico | TAG, modelo, ano, localização e capacidade por equipamento |
| Cronograma | Genérico, copiado | Específico por equipamento, com janelas e responsáveis |
| QAI | Não realizada ou só temperatura | Análise microbiológica + química completa |
| Registros | Inexistentes ou retroativos | OS digitais com fotos datadas e GPS |
| ART | Genérica | Específica por contrato e endereço |
| Identificação visível | Ausente ou desatualizada | Atualizada, com QR code de validação |
| Custo aparente | Muito barato | Compatível com escopo real |
| Defesa em fiscalização | Reprovado | Aprovado |

### Penalidades pelo descumprimento

A fiscalização do PMOC é exercida por múltiplos órgãos: Vigilância Sanitária estadual e municipal (mais comum), MPT, ANVISA (para áreas hospitalares) e Bombeiros (vinculação a PPCI em alguns estados). As penalidades:

- **Multa sanitária** estadual e municipal — varia por estado, geralmente de R$ 2.000 a R$ 1.500.000 conforme porte e gravidade
- **Interdição parcial ou total** do estabelecimento
- **Cassação do alvará sanitário**
- Em hospitais, **suspensão da habilitação SUS** e do CNES
- **Responsabilidade civil objetiva** por dano à saúde de usuários
- **Responsabilidade criminal** em caso de óbito relacionado (art. 132 e 268 CP)
- **Negativa de cobertura** do seguro patrimonial em sinistros relacionados ao sistema HVAC
- **Inclusão em rol de reincidentes** com inspeções intensificadas

### Como a VSM elabora e mantém o PMOC

1. **Diagnóstico inicial gratuito** — visita técnica, levantamento dos sistemas existentes, análise da documentação atual
2. **Inventário completo** — TAG, foto, ficha técnica, localização, idade, condição de cada equipamento
3. **Memorial descritivo dos sistemas** — central de água gelada, fan-coils, splits, dutos, captação, exaustão
4. **Análise de risco específica** — pontos críticos, áreas hospitalares, áreas limpas
5. **Elaboração do PMOC** — rotinas, periodicidades, POPs, cronograma anual
6. **ART específica** baixada no CREA, em nome do RT engenheiro mecânico
7. **Implementação operacional** — entrega ao responsável de facilities ou execução pela própria VSM
8. **Análises de QAI semestrais** com laboratório acreditado RBC/INMETRO
9. **Atualização anual** do plano e renovação de ART
10. **Plantão para fiscalização** — atendimento ao auditor sanitário com documentação organizada

### Erros mais comuns em PMOCs de mercado

Em revisões técnicas de PMOCs já existentes, os erros se repetem:

- ART vencida, sem baixa ou em nome de profissional sem atribuição
- Inventário sem TAG, com equipamentos genéricos ("um split de 12.000 BTUs")
- Cronograma copiado sem adequação ao porte real
- Análise de QAI ausente, vencida ou só com parâmetros físicos (sem microbiologia)
- POPs genéricos baixados de internet, sem revisão técnica
- Registros de execução inexistentes ou preenchidos retroativamente
- Identificação visível ausente ou com nome de RT que não trabalha mais
- Sem plano para áreas críticas (UTI, centro cirúrgico, salas limpas) onde a NBR 7256 e a RDC 50 da ANVISA aplicam-se adicionalmente
- Sem registro de descarte adequado do gás refrigerante (Lei 9.605/1998 — crime ambiental)

### PMOC em São Paulo (SP)

A VSM atende toda a malha urbana e industrial paulista. Capital, Guarulhos, Osasco, Barueri, Cotia, ABC Paulista, Campinas, Sorocaba, São José dos Campos, Ribeirão Preto, Piracicaba, Jundiaí, Indaiatuba, Santos, Bauru, Marília, Araraquara, São Carlos, Limeira, Americana. Forte atuação em **shoppings da capital e Grande SP**, **redes hospitalares**, **edifícios corporativos da Faria Lima, Berrini, Paulista** e **redes de varejo**.

### PMOC em Minas Gerais (MG)

Belo Horizonte, Contagem, Betim, Nova Lima, Sete Lagoas, Uberlândia, Uberaba, Juiz de Fora, Ipatinga, Poços de Caldas, Varginha, Pouso Alegre, Divinópolis, Triângulo Mineiro e Sul de Minas.

### PMOC no Rio de Janeiro (RJ) e Espírito Santo (ES)

Rio de Janeiro: capital, Niterói, São Gonçalo, Duque de Caxias, Nova Iguaçu, Volta Redonda, Petrópolis, Macaé, Campos. Espírito Santo: Vitória, Vila Velha, Serra, Cariacica, Cachoeiro de Itapemirim, Linhares, Aracruz.

### Por que a VSM Engenharia é referência em PMOC no Sudeste

- **Engenheiros mecânicos com CREA ativo** e atribuição plena em refrigeração e ar condicionado
- **Centenas de PMOCs ativos** em shoppings, hospitais, redes corporativas e escolas
- **Análises de QAI com laboratório acreditado RBC/INMETRO**
- **Plataforma digital** para registro de OS com foto e GPS
- **ART específica** por contrato e por endereço, sempre atualizada
- **Atendimento de plantão** durante fiscalizações sanitárias
- **Atualização anual** do plano sem custo adicional dentro do contrato
- **Conformidade simultânea** com Lei 13.589, Portaria 3.523 e RE ANVISA 9

### Perguntas frequentes sobre PMOC

### P: Meu prédio comercial precisa de PMOC?

> R: Sim, se possui qualquer sistema de climatização e atende público ou múltiplos ocupantes. A Lei 13.589/2018 não estabelece limite mínimo de capacidade. Síndico, gestor predial ou administrador é responsável solidário pela existência e validade do PMOC.

### P: Posso fazer o PMOC com a empresa que faz a manutenção?

> R: Pode, mas há um conflito clássico de interesse. O ideal é separar: uma empresa elabora e audita o PMOC (responsável técnico), outra executa as manutenções. Quem faz e fiscaliza tende a ser brando consigo mesmo. Em hospitais e contratos públicos, essa separação chega a ser exigida.

### P: Qual a periodicidade da análise de QAI?

> R: Semestral para ambientes climatizados de uso público e coletivo, conforme RE ANVISA 9/2003. Em hospitais e áreas críticas, pode ser trimestral ou mensal conforme criticidade.

### P: O laudo de QAI substitui o PMOC?

> R: Não. São documentos distintos e complementares. O PMOC é o **plano contínuo** com rotinas e responsáveis. O laudo de QAI é a **medição periódica** que comprova a eficácia do plano.

### P: Quanto custa elaborar e manter um PMOC?

> R: Depende do número e tipo de equipamentos, área climatizada e periodicidade exigida. Um edifício comercial de pequeno porte fica entre R$ 1.500 e R$ 3.500 para elaboração inicial, mais mensalidade de manutenção e análises de QAI. Hospitais e shoppings ficam acima de R$ 8.000 mensais. Solicite diagnóstico gratuito.

### P: Como saber se meu PMOC atual é válido?

> R: Verifique três pontos: ART ativa no portal do CREA, identificação visível atualizada com nome do RT e telefone, e laudos de QAI dos últimos 12 meses arquivados. Faltando qualquer um, o PMOC está irregular na prática.

### P: PMOC vale para condomínio residencial?

> R: Para áreas comuns climatizadas (academia, salão de festas, lobby, sala de cinema), sim. As unidades privativas individuais não exigem, mas o sistema de áreas comuns precisa estar coberto.

### P: A VSM pode assumir um PMOC já existente?

> R: Sim. Fazemos auditoria do PMOC atual, listamos não conformidades, regularizamos ART e implantamos rotinas reais. É o serviço mais procurado: empresas que herdaram PMOC fictício e querem ficar em dia antes da próxima fiscalização.

### Próximo passo: chame a VSM para um diagnóstico gratuito

Solicite avaliação gratuita do seu sistema de climatização e do PMOC atual (ou da ausência dele). Entregamos diagnóstico técnico, lista de não conformidades e proposta de regularização em até 5 dias úteis. Sem compromisso, sem custo.

PMOC, plano de manutenção de ar condicionado, qualidade do ar interior, QAI, Lei 13.589/2018, RE ANVISA 9, Portaria 3.523, ART de PMOC — VSM Engenharia, parceira de conformidade sanitária e saúde ocupacional em todo o Sudeste do Brasil.
`;

export default function PMOC() {
  const [showSeoContent, setShowSeoContent] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-destructive text-destructive-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-2.5 text-center">
          <p className="text-sm font-semibold animate-pulse">{tickerMessages[tickerIndex]}</p>
        </div>
      </div>

      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Obrigatório por Lei</span>
                <span className="bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">⭐ 5.0 — Avaliações Google</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.05] text-white">
                <span className="text-cta relative">
                  PMOC
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">Plano de Manutenção · Operação · Controle</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
                PMOC completo conforme Lei 13.589/2018 com <strong className="text-white">ART inclusa</strong>. Qualidade do ar e conformidade legal garantidas.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Eng. CREA Ativo", "ART Inclusa", "Lei 13.589", "Todo Sudeste"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8 h-14 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:shadow-[0_8px_28px_-4px_hsl(var(--cta)/0.55)] transition-all hover:scale-[1.02]">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-5 w-5 mr-2" /> SOLICITAR ORÇAMENTO GRÁTIS</a>
                </Button>
                <Button asChild size="lg" className="bg-white text-primary font-semibold px-8 h-14 rounded-full border border-white/30 hover:bg-white/90 transition-all">
                  <a href="#como-funciona">Como Funciona →</a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-cta/20 flex items-center justify-center"><ShieldAlert className="h-5 w-5 text-cta" /></div>
                  <span className="text-white font-bold text-sm">SEU PMOC ESTÁ EM DIA?</span>
                </div>
                <div className="space-y-3">
                  {["Sistema sem PMOC?", "PMOC desatualizado?", "Vigilância Sanitária notificou?"].map((q) => (
                    <label key={q} className="flex items-center gap-3 text-white/80 text-sm cursor-pointer hover:text-white transition-colors">
                      <div className="h-5 w-5 rounded border border-white/30 flex items-center justify-center shrink-0"><XCircle className="h-3 w-3 text-cta" /></div>
                      {q}
                    </label>
                  ))}
                </div>
                <Button asChild size="sm" className="w-full mt-5 bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-lg">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Regularizar Agora</a>
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((n) => (
                      <div key={n} className="h-8 w-8 rounded-full bg-cta/30 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold">{n === 1 ? "P" : n === 2 ? "A" : "C"}</div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">+80 edifícios com PMOC ativo</p>
                    <p className="text-white/60 text-xs">Avaliação 5.0 ⭐ no Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card border-b border-border relative z-10 -mt-1">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <s.icon className="h-6 w-6 text-cta opacity-70" />
                  <span className="text-3xl md:text-4xl font-black text-cta">{s.prefix}<CountUp end={s.value} />{s.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Entenda a Lei</span>
                <h2 className="text-3xl md:text-4xl font-black mb-6">O que é o PMOC?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                  O PMOC é o <strong className="text-foreground">Plano de Manutenção, Operação e Controle</strong> obrigatório para qualquer ambiente climatizado que possua circulação de pessoas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  A Lei 13.589/2018 exige que todo edifício de uso público e coletivo possua PMOC elaborado por engenheiro habilitado, garantindo qualidade do ar interior.
                </p>
                <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-destructive mb-1">Atenção: Riscos sem PMOC</h4>
                      <p className="text-sm text-muted-foreground">Multas da Vigilância Sanitária de até <strong className="text-foreground">R$ 100.000</strong>, interdição, síndrome do edifício doente e responsabilização legal.</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> Regularizar meu PMOC</a>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated bg-secondary">
                  <img src={heroPmoc} alt="PMOC e ART — Plano de Manutenção, Operação e Controle de sistemas de climatização" className="w-full h-auto object-contain" />
                </div>
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border-2 border-cta/20 rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center"><BadgeCheck className="h-6 w-6 text-cta" /></div>
                    <div>
                      <p className="font-black text-lg text-cta">Lei 13.589</p>
                      <p className="text-xs text-muted-foreground">Conformidade garantida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Nosso Serviço</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Elaboração Completa de PMOC com ART: Solução 360° em 48 Horas</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                A VSM Engenharia oferece a solução completa para manter sua empresa em conformidade total com a Lei 13.589/2018, Portaria 3.523/1998 e Resolução RE-09 da ANVISA, garantindo segurança operacional e documentação jurídica irrefutável.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={imgManutencaoHvac}
                  alt="Técnico realizando manutenção em sistema de climatização conforme PMOC"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>

              <div>
                <div className="bg-card border-l-4 border-cta rounded-r-xl p-5 mb-8 shadow-soft">
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong className="text-cta">Laudo técnico completo com ART em até 48 horas.</strong>{" "}
                    <span className="text-muted-foreground">Padrão de qualidade certificado com rastreabilidade metrológica garantida.</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    "Vistoria Técnica Especializada com Medições In Loco",
                    "Cálculos de Carga Térmica e Eficiência Energética",
                    "Relatório Técnico Detalhado com Indexação TAG",
                    "Checklist de Manutenção Mensal Personalizado",
                    "Emissão de ART (CREA) com Responsabilidade Técnica",
                    "Suporte Técnico Contínuo por 12 Meses",
                    "Alertas Automáticos de Vencimento",
                    "Livros de Registros Completos",
                    "Dashboard de Acompanhamento Online",
                    "Conformidade com Lei 13.589/2018 e Portaria 3.523/1998",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="bg-card py-20 md:py-24 pattern-grid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Escopo Completo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Sistemas que Gerenciamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Cobertura completa para todos os tipos de sistemas de climatização.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {equipmentTypes.map((eq) => (
                <div key={eq.title} className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elevated transition-all duration-300 border hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cta/10 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><eq.icon className="h-7 w-7 text-cta" /></div>
                  <h3 className="font-bold text-lg mb-2">{eq.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{eq.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cta"><TrendingUp className="h-3.5 w-3.5" />{eq.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-destructive font-bold text-sm tracking-widest uppercase mb-3 block">Compare os Riscos</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Com PMOC vs. Sem PMOC</h2>
            </div>
            <div className="bg-card rounded-2xl border shadow-elevated overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary font-bold text-sm">
                <div className="p-4 md:p-5">Aspecto</div>
                <div className="p-4 md:p-5 text-center bg-destructive/10 text-destructive">❌ Sem PMOC</div>
                <div className="p-4 md:p-5 text-center bg-success/10 text-success">✅ Com VSM</div>
              </div>
              {riskComparison.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-t`}>
                  <div className="p-4 md:p-5 font-semibold">{row.item}</div>
                  <div className="p-4 md:p-5 text-center text-destructive/80">{row.without}</div>
                  <div className="p-4 md:p-5 text-center text-success font-medium">{row.with}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl px-10 py-6 shadow-lg shadow-cta/20">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Shield className="h-5 w-5 mr-2" /> Regularizar Meu PMOC</a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="bg-card py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Público-Alvo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Para Quem é o PMOC</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {targetAudience.map((t) => (
                <div key={t.name} className="flex items-center gap-3 bg-secondary rounded-xl p-4 border hover:border-cta/30 transition-colors">
                  <div className="h-9 w-9 rounded-lg bg-cta/10 flex items-center justify-center shrink-0"><t.icon className="h-4 w-4 text-cta" /></div>
                  <span className="text-sm font-semibold">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary pattern-dots">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Por que Escolher a VSM para PMOC</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className={`bg-card rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${b.highlight ? "border-cta/30 ring-1 ring-cta/10 shadow-lg relative" : "shadow-soft"}`}>
                  {b.highlight && <div className="absolute -top-3 left-6 bg-cta text-cta-foreground text-xs font-bold px-3 py-1 rounded-full">MAIS IMPORTANTE</div>}
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cta/10 to-cta/5 flex items-center justify-center mb-5"><b.icon className="h-6 w-6 text-cta" /></div>
                  <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section id="como-funciona" className="py-20 md:py-24 bg-gradient-elegant text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pattern-diagonal opacity-20" />
          <div className="relative container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Processo Simples</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Do Contato ao PMOC Ativo em 5 Passos</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="h-16 w-16 rounded-2xl bg-cta text-cta-foreground flex items-center justify-center font-black text-xl mx-auto mb-4 shadow-lg shadow-cta/30">{i + 1}</div>
                  {i < processSteps.length - 1 && <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-white/15" />}
                  <step.icon className="h-5 w-5 text-cta mx-auto mb-2" />
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black rounded-xl px-10 py-7 shadow-lg shadow-cta/30 text-base">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Zap className="h-5 w-5 mr-2" /> COMEÇAR AGORA — É GRÁTIS</a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Depoimentos</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">O que Nossos Clientes Dizem</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-secondary rounded-2xl p-7 border relative">
                  <div className="text-cta/20 text-6xl font-serif absolute top-4 right-6 leading-none">"</div>
                  <div className="flex items-center gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-cta text-cta" />)}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-xs text-cta font-medium">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Tire suas Dúvidas</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes sobre PMOC</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6 shadow-soft">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-10 bg-card rounded-2xl border p-8 shadow-soft">
              <p className="font-bold mb-2">Ainda tem dúvidas?</p>
              <p className="text-sm text-muted-foreground mb-4">Fale com nosso engenheiro especialista.</p>
              <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> Tirar Dúvidas pelo WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Saiba mais sobre o serviço — artigos técnicos */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              
              <h2 className="text-3xl md:text-5xl font-black mb-4">Saiba Mais Sobre o Serviço</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Conteúdo técnico produzido pela equipe da VSM Engenharia para você dominar o tema.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: artPmocFaq, title: "PMOC Completo com VSM Engenharia — FAQ Técnico", desc: "Tire todas as suas dúvidas sobre o Plano de Manutenção, Operação e Controle: aplicação, escopo, periodicidade e responsabilidades técnicas." },
                { img: artQuemAssina, title: "Quem Pode Assinar um PMOC? Entenda as Responsabilidades Técnicas do Plano de Manutenção", desc: "Apenas engenheiro mecânico habilitado e com registro ativo no CREA pode elaborar e assinar o PMOC. Entenda por quê e quais riscos você corre sem isso." },
                { img: artLei13589, title: "O Que é o PMOC e Por Que Ele É Obrigatório Segundo a Lei 13.589/2018?", desc: "Conheça a legislação que tornou o PMOC obrigatório em ambientes climatizados acima de 5 TR e o impacto direto na saúde dos ocupantes e na sua operação." },
              ].map((art, i) => (
                <article key={i} className="group bg-card rounded-2xl border overflow-hidden shadow-soft hover:shadow-elevated hover:border-cta/30 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={art.img} alt={art.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-base leading-snug mb-3 group-hover:text-cta transition-colors line-clamp-3">{art.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{art.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Explore Mais</span>
              <h2 className="text-3xl md:text-4xl font-black">Serviços Relacionados</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedServices.map((s) => (
                <Link key={s.href} to={s.href} className="group flex items-center gap-5 bg-secondary rounded-2xl p-6 border hover:border-cta/30 hover:shadow-elevated transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center shrink-0 group-hover:bg-cta/20 transition-colors"><s.icon className="h-6 w-6 text-cta" /></div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold group-hover:text-cta transition-colors">{s.label}</span>
                    <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-cta group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <BookOpen className="h-8 w-8 text-cta mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl font-black mb-2">Guia Completo: PMOC</h2>
            <p className="text-muted-foreground">Tudo sobre o Plano de Manutenção, Operação e Controle.</p>
          </div>
          <div className="relative overflow-hidden transition-all duration-700 ease-in-out" style={{ maxHeight: showSeoContent ? "none" : "14rem" }}>
            <SeoGuideContent content={seoContent} />
            {!showSeoContent && <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary via-secondary/95 to-transparent" />}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" onClick={() => setShowSeoContent(!showSeoContent)} className="font-bold gap-2 rounded-xl px-8 py-5 border-cta/30 hover:border-cta hover:text-cta transition-colors">
              {showSeoContent ? <>Ler menos <ChevronUp className="h-4 w-4" /></> : <>Ler o guia completo sobre PMOC <ChevronDown className="h-4 w-4" /></>}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-elegant py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cta/20 text-cta px-4 py-2 rounded-full text-sm font-bold mb-6"><Zap className="h-4 w-4" /> Avaliação gratuita e sem compromisso</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Seu ambiente climatizado está em conformidade?</h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">Regularize seu PMOC agora. Fale com nosso engenheiro especialista.</p>
            <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black text-lg px-12 py-8 rounded-2xl shadow-xl shadow-cta/30 hover:shadow-2xl hover:shadow-cta/40 transition-all hover:scale-[1.02]">
              <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-6 w-6 mr-3" /> FALAR COM ENGENHEIRO</a>
            </Button>
            <div className="flex items-center justify-center gap-6 mt-8 text-white/40 text-sm">
              <span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Orçamento grátis</span>
              <span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Resposta em 24h</span>
              <span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Sem compromisso</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
