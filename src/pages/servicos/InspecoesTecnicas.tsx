import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, ArrowRight, Shield, AlertTriangle,
  FileText, Award, Clock, Phone, ChevronDown, ChevronUp,
  Search, Wrench, Eye, Scale, Zap, Building,
  ShieldAlert, XCircle, CircleCheck, Star,
  Factory, TrendingUp, BadgeCheck, BookOpen
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import SeoGuideContent from "@/components/SeoGuideContent";
import { imgProps } from "@/lib/responsive-img";
import heroInspecoes from "@/assets/inspecoes/hero-inspecoes.jpg?w=480;768;1024;1440;1920&format=webp&as=img";

const tickerMessages = [
  "⚠️ Estruturas sem inspeção periódica podem colapsar sem aviso",
  "🔴 Laudos técnicos são obrigatórios para garantir segurança operacional",
  "📋 Seus equipamentos e estruturas estão inspecionados?",
  "⏰ Agende sua inspeção técnica com engenheiro habilitado",
];

const stats = [
  { value: 400, suffix: "+", label: "Inspeções realizadas", icon: BadgeCheck },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 100, suffix: "%", label: "Laudos aceitos", icon: Shield },
  { value: 130, suffix: "+", label: "Empresas atendidas", icon: Factory },
];

const benefits = [
  { icon: Shield, title: "Segurança Comprovada", desc: "Laudos técnicos que atestam a integridade de equipamentos e estruturas, protegendo colaboradores e operação.", highlight: true },
  { icon: Eye, title: "Ensaios Não Destrutivos", desc: "Inspeção visual, ultrassom, líquidos penetrantes e partículas magnéticas para detecção precisa de falhas." },
  { icon: FileText, title: "Laudos Completos", desc: "Relatórios técnicos detalhados com análise, recomendações, registro fotográfico e ART." },
  { icon: Clock, title: "Entrega Ágil", desc: "Laudos entregues em prazos competitivos para não impactar sua operação." },
  { icon: Award, title: "Engenheiros Especializados", desc: "Equipe com experiência em inspeções industriais e certificação em ensaios não destrutivos." },
  { icon: Scale, title: "ART + Seguro Incluso", desc: "Anotação de Responsabilidade Técnica e seguro de responsabilidade civil inclusos." },
];

const processSteps = [
  { title: "Contato Inicial", desc: "Definimos juntos o escopo e os equipamentos/estruturas a serem inspecionados.", icon: Phone },
  { title: "Planejamento", desc: "Elaboramos plano de inspeção com metodologia e ensaios necessários.", icon: Eye },
  { title: "Inspeção em Campo", desc: "Realizamos inspeção visual, dimensional e ensaios não destrutivos.", icon: Search },
  { title: "Análise e Laudo", desc: "Elaboramos relatório técnico com análise detalhada e recomendações.", icon: FileText },
  { title: "Acompanhamento", desc: "Acompanhamos a implementação das recomendações quando solicitado.", icon: Shield },
];

const inspectionTypes = [
  { icon: Building, title: "Estruturas Metálicas", desc: "Galpões, mezaninos, torres, passarelas e escadas", count: "100+ inspecionadas" },
  { icon: Factory, title: "Máquinas e Equipamentos", desc: "Equipamentos industriais, tanques e silos", count: "150+ inspecionados" },
  { icon: Wrench, title: "Soldas e Conexões", desc: "Inspeção de juntas soldadas e conexões estruturais", count: "200+ avaliadas" },
  { icon: Search, title: "Perícias Técnicas", desc: "Perícias extrajudiciais e assistência técnica", count: "50+ realizadas" },
];

const riskComparison = [
  { item: "Falha estrutural", without: "Risco não identificado", with: "Detectada e corrigida" },
  { item: "Acidentes", without: "Sem prevenção", with: "Prevenidos por inspeção" },
  { item: "Responsabilidade legal", without: "Gestor exposto", with: "Documentação protege" },
  { item: "Vida útil", without: "Desconhecida", with: "Monitorada e estendida" },
  { item: "Seguro", without: "Sem cobertura", with: "Válido e ativo" },
  { item: "Manutenção", without: "Corretiva (cara)", with: "Preventiva (econômica)" },
];

const targetAudience = [
  { name: "Indústrias de todos os portes", icon: Factory },
  { name: "Empresas com estruturas metálicas", icon: Building },
  { name: "Galpões e centros logísticos", icon: Building },
  { name: "Edifícios com sistemas mecânicos", icon: Wrench },
  { name: "Construtoras e montadoras", icon: Building },
  { name: "Empresas em disputas técnicas", icon: Scale },
  { name: "Condomínios industriais", icon: Factory },
  { name: "Empresas de energia e telecom", icon: TrendingUp },
];

const testimonials = [
  { name: "Fernando G.", role: "Gerente de Manutenção", company: "Indústria Logística – SP", text: "A inspeção da VSM identificou trincas em vigas do mezanino que não eram visíveis. Evitou um possível colapso. Trabalho excepcional.", rating: 5 },
  { name: "Maria S.", role: "Diretora de Operações", company: "Centro de Distribuição – MG", text: "Laudos técnicos impecáveis. A equipe é extremamente profissional e entrega no prazo. Parceria de confiança.", rating: 5 },
  { name: "André T.", role: "Engenheiro de Segurança", company: "Indústria Metalúrgica – RJ", text: "Contratamos a VSM para perícia técnica extrajudicial. O laudo foi determinante para a resolução do caso. Excelente trabalho.", rating: 5 },
];

const faqs = [
  { q: "Quais tipos de inspeção vocês realizam?", a: "Inspeções em máquinas e equipamentos, estruturas metálicas (galpões, mezaninos, torres, passarelas), soldas, tanques, silos, sistemas mecânicos e perícias técnicas extrajudiciais." },
  { q: "A inspeção é destrutiva?", a: "Na grande maioria dos casos, não. Utilizamos métodos de ensaios não destrutivos (END) como inspeção visual detalhada, ultrassom, líquidos penetrantes e partículas magnéticas." },
  { q: "Vocês emitem ART?", a: "Sim. Todos os nossos serviços são acompanhados de ART (Anotação de Responsabilidade Técnica) registrada no CREA." },
  { q: "Quanto custa uma inspeção técnica?", a: "O valor depende do escopo, tipo de estrutura/equipamento e ensaios necessários. Oferecemos orçamento gratuito em até 24h." },
  { q: "Vocês fazem perícia extrajudicial?", a: "Sim. Realizamos perícias técnicas extrajudiciais para disputas comerciais, seguros e litígios, com laudos aceitos em todas as instâncias." },
  { q: "Qual a periodicidade recomendada?", a: "Depende do tipo de estrutura e condições de uso. Em geral, inspeções anuais são recomendadas, mas ambientes agressivos podem exigir frequência maior." },
  { q: "Vocês atendem em quais estados?", a: "Atendemos todo o Sudeste: São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo." },
];

const relatedServices = [
  { label: "Inspeção NR13", href: "/servicos/nr13", desc: "Caldeiras e vasos de pressão", icon: Shield },
  { label: "Inspeção NR12", href: "/servicos/nr12", desc: "Segurança de máquinas", icon: Shield },
  { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos", desc: "Projetos e cálculos estruturais", icon: Wrench },
  { label: "Consultoria Gratuita", href: "/servicos/consultoria-gratuita", desc: "Avaliação sem compromisso", icon: FileText },
];

const seoContent = `
## Inspeções Técnicas Industriais: o guia definitivo sobre integridade, END e perícia de equipamentos

Inspeção técnica industrial é, antes de qualquer coisa, **gestão de risco mecânico**. Cada equipamento, cada estrutura metálica, cada tubulação, cada vaso, cada talha tem uma vida útil que depende de carga, ambiente, manutenção e detalhes invisíveis a olho nu — trincas internas, perda de espessura, fadiga acumulada, corrosão sob isolamento. Quando uma dessas falhas amadurece sem que ninguém saiba, o resultado vai de parada não programada a vítima fatal. Inspeção técnica de qualidade existe para encurtar essa distância entre "ninguém viu" e "vamos consertar antes que aconteça".

Este guia foi escrito por engenheiros mecânicos da **VSM Engenharia**, com base em mais de mil inspeções realizadas em indústrias do Sudeste — siderurgia, química, alimentícia, sucroalcooleira, mineração, óleo e gás, infraestrutura urbana e construção civil. O objetivo é dar ao gestor industrial, ao engenheiro de manutenção e ao responsável de segurança o entendimento técnico para distinguir uma inspeção fictícia de uma inspeção real, escolher os ensaios certos para cada caso e construir um programa de inspeção que efetivamente reduz risco e custo.

> NOTA: Inspeções técnicas se cruzam com várias normas: NR-13 (caldeiras e vasos), NR-12 (máquinas), NR-11 (içamento), NR-18 (estruturas em obra), NBR 5419 (SPDA), NBR 8800 (estruturas metálicas), e diversas API/ASME quando há cliente internacional. Este guia trata da família **inspeção técnica industrial** em sentido amplo.

### O que é inspeção técnica industrial

Inspeção técnica industrial é a **avaliação sistemática realizada por engenheiro habilitado** para verificar as condições de segurança, integridade estrutural, conformidade normativa e funcionamento de equipamentos, máquinas, estruturas metálicas e sistemas industriais. Pode ser:

- **Periódica** — em cumprimento a normas regulamentadoras ou plano interno
- **Pré-operacional** — antes da entrada em operação ou após reparo significativo
- **Investigativa** — após acidente, anomalia ou suspeita de defeito
- **De recebimento** — para validar entrega de equipamento ou estrutura nova
- **De vida residual** — para estimar vida útil remanescente e justificar investimento
- **Pericial** — em demanda judicial ou administrativa

A diferença essencial em relação a uma "vistoria" comum é o **rigor técnico, o uso de ensaios não destrutivos quantitativos e a responsabilidade de engenharia documentada via ART**.

### O que pode ser inspecionado

A VSM atende uma carteira ampla de inspeções, organizadas em famílias técnicas:

| Família | Exemplos típicos | Normas referenciais |
| --- | --- | --- |
| Equipamentos pressurizados | Caldeiras, vasos, autoclaves, tubulações, tanques | NR-13, NBR 16035, ASME VIII, API 510/570/653 |
| Equipamentos de içamento | Pontes rolantes, gruas, munck, talhas, guindastes | NR-11, NBR 8400, NBR 14768 |
| Máquinas e equipamentos industriais | Prensas, injetoras, calandras, esteiras, robôs | NR-12, NBR 14153, ISO 13849 |
| Estruturas metálicas | Galpões, mezaninos, passarelas, racks, treliças | NBR 8800, NBR 16239, NBR 14762 |
| Tubulações industriais | Linhas de vapor, gás, óleo, processo | ASME B31.1, B31.3, API 570, NR-13 |
| Acessórios de içamento | Cabos, cintas, manilhas, ganchos | NBR 13541, 15637, EN 1492, ASME B30 |
| Estruturas tubulares e andaimes | Andaimes, escoras, formas | NR-18, NBR 6494, NBR 15875 |
| Vasos de armazenamento | Tanques atmosféricos, esferas de GLP | API 650/653, NR-13 |
| Equipamentos elétricos sob ótica mecânica | Painéis, transformadores, suportes | NR-10 (suporte mecânico) |

### Métodos de Ensaios Não Destrutivos (END) — o coração da inspeção técnica

Inspeção sem END é opinião visual. Opinião visual perde 80 a 90% das falhas estruturais críticas. Os métodos aplicados pela VSM, com vantagens e limites:

| Método | Sigla | Detecta | Vantagens | Limites |
| --- | --- | --- | --- | --- |
| Visual direta | IV | Corrosão, deformação, vazamentos, marcas | Rápido, barato, base de tudo | Não vê nada interno |
| Líquidos penetrantes | LP | Trincas superficiais abertas | Aplicável em qualquer material | Só superfície aberta |
| Partículas magnéticas | PM | Trincas superficiais e subsuperficiais em ferromagnéticos | Sensível, rápido | Só material ferromagnético |
| Ultrassom convencional | UT | Espessura, descontinuidades volumétricas internas | Quantitativo | Requer operador qualificado |
| Ultrassom phased array | PAUT | Mapeamento de soldas, trincas | Imagem detalhada, gravação | Custo alto, treinamento |
| Ultrassom TOFD | TOFD | Dimensionamento de defeitos em soldas | Ótimo dimensionamento | Geometria limitada |
| Radiografia industrial | RT | Descontinuidades volumétricas internas em soldas | Imagem permanente | Risco radiológico, alvará CNEN |
| Termografia infravermelha | IR | Pontos quentes elétricos e mecânicos | Não invasivo, rápido | Não vê falha mecânica fria |
| Análise de vibração | VA | Desbalanceamento, desalinhamento, mancais | Preditivo | Só máquinas rotativas |
| Emissão acústica | EA | Defeitos ativos sob carga | Online, monitora durante operação | Análise complexa |
| Estanqueidade / hidrostático | TH | Vazamento e resistência mecânica global | Validação integral | Parada do equipamento |
| Inspeção boroscópica | BI | Interno de motores, dutos, vasos sem abrir | Pouco invasivo | Resolução limitada |

> DICA: Pergunte ao prestador **qual método ele propõe e por quê**. Quem propõe sempre o mesmo ensaio para tudo está apenas vendendo o que tem em estoque, não fazendo engenharia.

### Inspeção de estruturas metálicas — um capítulo à parte

Estruturas metálicas (galpões industriais, mezaninos, passarelas, racks porta-pallet, treliças, torres, suportes de tubulação) são alvo crescente de demanda por inspeção técnica, principalmente após acidentes recentes envolvendo desabamento de mezaninos e tombamento de racks em centros de distribuição.

A inspeção estrutural típica avalia:

- **Verticalidade e prumo** das colunas
- **Integridade dos perfis** — empenamentos, amassamentos, oxidação
- **Soldas estruturais** — visual + LP/PM em juntas críticas
- **Conexões parafusadas** — torque, conformidade, corrosão
- **Pintura de proteção** — espessura, aderência, evolução de corrosão
- **Apoios e fundações** — chumbadores, placas de base, recalque
- **Carga aplicada × carga de projeto** — confronto com ART original quando disponível
- **Modificações estruturais** — abertura de vãos, supressão de elementos, sobreposição de cargas

Resultado entregue: laudo com fotos, croquis, classificação de não conformidades por gravidade, plano de ação e ART do engenheiro.

### Perícia técnica e laudo investigativo

Em casos de acidente, sinistro patrimonial, ação judicial ou divergência contratual, a VSM atua como **perito mecânico** elaborando laudo investigativo. A metodologia segue a **NBR 13752** (perícias de engenharia) e o Código de Processo Civil, e cobre:

- **Caracterização do evento** — local, data, condições, testemunhas
- **Inspeção pericial do equipamento** ou estrutura envolvida
- **Reconstituição do mecanismo de falha** com base em evidências físicas
- **Análise de causa raiz** (RCFA — Root Cause Failure Analysis)
- **Confronto documental** — projeto, manutenção, treinamento, procedimentos
- **Conclusão técnica** com responsabilização ou descarte de hipóteses
- **Quesitos das partes** quando em ação judicial

### Comparativo: vistoria genérica × inspeção técnica VSM

| Aspecto | Vistoria genérica | Inspeção técnica VSM |
| --- | --- | --- |
| Quem assina | "Técnico" sem CREA | Engenheiro mecânico com ART |
| Tempo em campo | 1 a 2 horas | 1 a 5 dias por contrato |
| Ensaios | Apenas visual | Visual + END quantitativos |
| Documentação | Checklist genérico | Laudo de 30 a 100 páginas com evidências |
| Análise de vida residual | Inexistente | Calculada com base em taxa de corrosão e fadiga |
| Plano de ação | "Manter manutenção" | Recomendações com prazo, responsável e prioridade |
| Validade jurídica | Frágil | Sustenta defesa em acidente |
| ART | Genérica ou inexistente | Específica por contrato e equipamento |

### Programa de inspeção plurianual — a entrega que muda o jogo

Acima da inspeção pontual, a VSM elabora **programas de inspeção plurianuais** que cruzam:

- Cronograma de inspeção legal (NR-13, NR-11, NR-12)
- Cronograma de inspeção preditiva (vibração, termografia, análise de óleo)
- Cronograma de manutenção preventiva
- Calendário de produção e paradas programadas

O resultado é um plano único, integrado, que distribui inspeções ao longo de 2 a 5 anos, otimiza paradas, evita repetição de mobilização e reduz custo total de propriedade do parque industrial em 15 a 30% conforme estudos internos.

### Erros mais comuns em laudos de mercado

- Laudos sem fotos datadas e georreferenciadas
- ART genérica, sem identificação do equipamento
- "Inspeção visual" como único ensaio em equipamentos críticos
- Recomendações genéricas tipo "manter manutenção preventiva"
- Ausência de cálculo de vida residual
- Profissional sem atribuição em mecânica assinando inspeção mecânica
- Falta de croquis e localização de defeitos
- Cópia de laudo anterior, com data trocada
- Ensaios listados que não foram efetivamente realizados (sem evidência)

### Penalidades por inspeção inadequada ou ausente

- **Multas administrativas** sob diversas NRs (NR-13, NR-12, NR-11) — R$ 6.708 a R$ 670.840
- **Interdição de equipamento** ou da planta
- **Embargo de obra**
- **Negativa de seguro** em sinistros
- **Responsabilidade civil objetiva** do empregador
- **Responsabilidade criminal** em acidente fatal (lesão corporal culposa, homicídio culposo)
- **Cassação da ART** do engenheiro responsável por laudo falso
- **Inclusão em rol** de fiscalização intensificada do MTE e MPT

### Inspeções técnicas em São Paulo (SP)

Atendemos toda a malha industrial paulista. Capital, Guarulhos, Osasco, Barueri, Cotia, ABC Paulista, Campinas, Sorocaba, São José dos Campos, Ribeirão Preto, Piracicaba, Jundiaí, Indaiatuba, Santos, Cubatão, Bauru, Marília, Araraquara, São Carlos, Limeira, Americana. Forte presença em **polos petroquímicos de Cubatão e Paulínia**, **automotivo do Vale do Paraíba**, **alimentício de Campinas**, **sucroalcooleiro do interior** e **siderurgia/distribuição** da Grande SP.

### Inspeções técnicas em Minas Gerais (MG)

Belo Horizonte, Contagem, Betim, Nova Lima, Sete Lagoas, Uberlândia, Uberaba, Juiz de Fora, Ipatinga, Coronel Fabriciano, Timóteo, Montes Claros, Poços de Caldas, Varginha, Pouso Alegre, Divinópolis, Triângulo Mineiro e Sul de Minas.

### Inspeções técnicas no Rio de Janeiro (RJ) e Espírito Santo (ES)

Rio de Janeiro: capital, Niterói, São Gonçalo, Duque de Caxias, Itaboraí (COMPERJ), Volta Redonda, Barra Mansa, Resende, Macaé, Campos. Espírito Santo: Vitória, Vila Velha, Serra, Cariacica, Cachoeiro de Itapemirim, Linhares, Aracruz.

### Por que a VSM Engenharia é referência em inspeções técnicas no Sudeste

- **Engenheiros mecânicos com CREA ativo** e atribuições específicas por família de equipamento
- **Inspetores certificados ABENDI / SNQC** em UT, LP, PM, PAUT, RT
- **Mais de 1.000 inspeções** realizadas em indústrias do Sudeste
- **Instrumentação calibrada** com rastreabilidade RBC/INMETRO
- **Laudos entregues em até 5 dias úteis** após o término do trabalho de campo
- **ART específica** em todos os serviços
- **Programa de inspeção plurianual** entregue como bônus
- **Suporte técnico contínuo** pós-laudo

### Perguntas frequentes sobre inspeção técnica

### P: Inspeção técnica é a mesma coisa que manutenção?

> R: Não. Inspeção é avaliação técnica do estado do equipamento por engenheiro, com laudo. Manutenção é a intervenção física para preservar ou restaurar o equipamento. Uma alimenta a outra: a inspeção define o que precisa ser mantido; a manutenção executa.

### P: Quem pode realizar inspeção técnica?

> R: Engenheiro mecânico (ou de outra modalidade compatível) com CREA ativo, atribuição para a família do equipamento e ART específica baixada. Inspetores de END devem ser certificados pela ABENDI / SNQC no método aplicado.

### P: Qual a periodicidade?

> R: Depende do equipamento. NR-13 define para caldeiras e vasos. NR-11 define para içamento. NR-12 define para máquinas. Estruturas metálicas: recomendação técnica anual ou conforme NBR aplicável. Quando não há prazo legal, define-se em programa interno baseado em criticidade.

### P: Vocês emitem ART?

> R: Sim. Toda inspeção realizada pela VSM inclui ART específica baixada no CREA, sem custo adicional.

### P: Como escolher o ensaio não destrutivo certo?

> R: A escolha depende do tipo de defeito esperado, do material, da geometria e da acessibilidade. Trincas superficiais em aço ferromagnético: PM. Trincas superficiais em inox: LP. Espessura e descontinuidades internas: UT. Mapeamento detalhado de soldas: PAUT. Quem escolhe é o engenheiro responsável, não o catálogo do fornecedor.

### P: O que é vida residual e por que ela importa?

> R: Vida residual é a estimativa do tempo restante de operação segura do equipamento, com base em taxa de corrosão histórica, espessura mínima admissível e regime de operação. É o número que permite decidir entre manter, reparar ou substituir — e justifica orçamento.

### P: Posso inspecionar estrutura metálica de mezanino?

> R: Sim, e deveria. Mezaninos industriais e racks porta-pallet são alvo crescente de acidentes. Inspeção anual com avaliação de prumo, soldas, conexões e carga real aplicada é altamente recomendada.

### P: Vocês fazem perícia para ação judicial?

> R: Sim. Atuamos como perito ou assistente técnico em ações cíveis, criminais e trabalhistas relacionadas a falha mecânica, acidente industrial e sinistro patrimonial, em todo o Sudeste.

### Próximo passo: chame a VSM para uma análise gratuita

Solicite uma avaliação gratuita do seu parque de equipamentos e estruturas. Levantamos o que precisa de inspeção, sob qual norma, em qual prazo e com qual investimento. Resposta em até 48 horas, sem compromisso.

Inspeção técnica industrial, laudo de estrutura metálica, perícia técnica, ensaios não destrutivos, END, ultrassom industrial, líquidos penetrantes, partículas magnéticas, termografia, análise de vibração, programa de inspeção plurianual — VSM Engenharia, parceira de integridade e segurança industrial em todo o Sudeste do Brasil.
`;

export default function InspecoesTecnicas() {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Inspeções Técnicas — Estruturas Metálicas e Equipamentos",
    provider: { "@type": "Organization", name: "VSM Engenharia", url: "https://www.vsmengenharia.com" },
    areaServed: { "@type": "State", name: "Sudeste do Brasil" },
    description: "Inspeções técnicas de estruturas metálicas, máquinas e equipamentos industriais com ensaios não destrutivos, laudos e ART.",
    url: "https://www.vsmengenharia.com/servicos/inspecoes-tecnicas",
  }), []);

  useSEO({
    title: "Inspeções Técnicas — Estruturas e Equipamentos | VSM Engenharia",
    description: "Inspeções técnicas de estruturas metálicas, máquinas e equipamentos industriais. Ensaios não destrutivos, laudos aceitos em auditorias e ART.",
    jsonLd,
  });

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
        <div className="absolute inset-0">
          <img
            {...imgProps(heroInspecoes)}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/70" />
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Serviço Especializado</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.05] text-white">
                Inspeções{" "}
                <span className="text-cta relative">
                  Técnicas
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">Estruturas · Equipamentos · Perícias</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
                Inspeções especializadas com ensaios não destrutivos, laudos completos e <strong className="text-white">ART inclusa</strong>.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Eng. CREA Ativo", "ART Inclusa", "END Certificado", "Todo Sudeste"].map((t) => (
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
                  <span className="text-white font-bold text-sm">PRECISA DE INSPEÇÃO?</span>
                </div>
                <div className="space-y-3">
                  {["Estrutura sem laudo?", "Equipamento com falha?", "Precisa de perícia técnica?"].map((q) => (
                    <label key={q} className="flex items-center gap-3 text-white/80 text-sm cursor-pointer hover:text-white transition-colors">
                      <div className="h-5 w-5 rounded border border-white/30 flex items-center justify-center shrink-0"><XCircle className="h-3 w-3 text-cta" /></div>
                      {q}
                    </label>
                  ))}
                </div>
                <Button asChild size="sm" className="w-full mt-5 bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-lg">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Solicitar Inspeção</a>
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((n) => (
                      <div key={n} className="h-8 w-8 rounded-full bg-cta/30 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold">{n === 1 ? "F" : n === 2 ? "M" : "A"}</div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">+400 inspeções realizadas</p>
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
                  <span className="text-3xl md:text-4xl font-black text-cta"><CountUp end={s.value} />{s.suffix}</span>
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
                <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Entenda o Serviço</span>
                <h2 className="text-3xl md:text-4xl font-black mb-6">O que são Inspeções Técnicas?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  São avaliações realizadas por engenheiros habilitados para verificar <strong className="text-foreground">integridade, segurança e funcionamento</strong> de equipamentos e estruturas industriais.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Utilizamos ensaios não destrutivos (END) avançados e emitimos laudos técnicos completos com recomendações de manutenção e adequação.
                </p>
                <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-destructive mb-1">Atenção: Riscos sem inspeção</h4>
                      <p className="text-sm text-muted-foreground">Estruturas e equipamentos sem inspeção podem apresentar <strong className="text-foreground">falhas ocultas</strong> que levam a colapsos, acidentes e responsabilização legal.</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> Solicitar inspeção</a>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated h-80 md:h-[28rem]">
                  <img src={heroInspecoes.src} alt="Inspeção técnica de equipamentos industriais com engenheiro mecânico" loading="lazy" decoding="async" width={1024} height={768} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border-2 border-cta/20 rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center"><BadgeCheck className="h-6 w-6 text-cta" /></div>
                    <div>
                      <p className="font-black text-lg text-cta">END Certificado</p>
                      <p className="text-xs text-muted-foreground">Ensaios não destrutivos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="bg-secondary py-20 md:py-24 pattern-grid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Escopo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Tipos de Inspeção</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {inspectionTypes.map((eq) => (
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
              <span className="text-destructive font-bold text-sm tracking-widest uppercase mb-3 block">Compare</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Com Inspeção vs. Sem Inspeção</h2>
            </div>
            <div className="bg-card rounded-2xl border shadow-elevated overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary font-bold text-sm">
                <div className="p-4 md:p-5">Aspecto</div>
                <div className="p-4 md:p-5 text-center bg-destructive/10 text-destructive">❌ Sem Inspeção</div>
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
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="bg-card py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Público-Alvo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Para Quem são as Inspeções</h2>
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
              <h2 className="text-3xl md:text-4xl font-black mb-4">Por que Escolher a VSM</h2>
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
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Processo</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Do Contato ao Laudo em 5 Passos</h2>
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
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Dúvidas</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes</h2>
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
              <p className="text-sm text-muted-foreground mb-4">Fale com nosso engenheiro.</p>
              <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> WhatsApp</a>
              </Button>
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
            <h2 className="text-2xl md:text-3xl font-black mb-2">Guia: Inspeções Técnicas</h2>
            <p className="text-muted-foreground">Tudo sobre inspeções industriais e ensaios não destrutivos.</p>
          </div>
          <div className="relative overflow-hidden transition-all duration-700 ease-in-out" style={{ maxHeight: showSeoContent ? "none" : "14rem" }}>
            <SeoGuideContent content={seoContent} />
            {!showSeoContent && <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary via-secondary/95 to-transparent" />}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" onClick={() => setShowSeoContent(!showSeoContent)} className="font-bold gap-2 rounded-xl px-8 py-5 border-cta/30 hover:border-cta hover:text-cta transition-colors">
              {showSeoContent ? <>Ler menos <ChevronUp className="h-4 w-4" /></> : <>Ler guia completo <ChevronDown className="h-4 w-4" /></>}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-elegant py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cta/20 text-cta px-4 py-2 rounded-full text-sm font-bold mb-6"><Zap className="h-4 w-4" /> Avaliação gratuita</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Precisa de uma inspeção técnica?</h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">Fale com nosso engenheiro e receba um orçamento gratuito.</p>
            <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black text-lg px-12 py-8 rounded-2xl shadow-xl shadow-cta/30 transition-all hover:scale-[1.02]">
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
