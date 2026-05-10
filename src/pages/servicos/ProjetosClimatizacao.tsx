import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, ArrowRight, Shield, AlertTriangle,
  FileText, Award, Clock, Phone, ChevronDown, ChevronUp,
  Wind, Thermometer, Eye, Scale, Zap, Building,
  ShieldAlert, XCircle, CircleCheck, Star,
  Factory, TrendingUp, BadgeCheck, BookOpen
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import SeoGuideContent from "@/components/SeoGuideContent";
import heroHvac from "@/assets/projetos-climatizacao/hero-hvac.jpg";

const tickerMessages = [
  "⚠️ Sistema de climatização mal dimensionado = desperdício de energia",
  "🔴 Projetos sem cálculo de carga térmica geram problemas de conforto",
  "📋 Precisa de projeto de climatização HVAC?",
  "⏰ Solicite agora um projeto com engenheiro especialista",
];

const stats = [
  { value: 80, suffix: "+", label: "Projetos HVAC", icon: BadgeCheck },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 100, suffix: "%", label: "Projetos aprovados", icon: Shield },
  { value: 60, suffix: "+", label: "Empresas atendidas", icon: Building },
];

const benefits = [
  { icon: Wind, title: "Projetos HVAC Completos", desc: "Do cálculo de carga térmica ao projeto executivo, com todas as especificações técnicas e ART.", highlight: true },
  { icon: Thermometer, title: "Carga Térmica Precisa", desc: "Dimensionamento preciso que evita subdimensionamento (desconforto) e superdimensionamento (desperdício)." },
  { icon: FileText, title: "Projeto Executivo", desc: "Plantas, detalhes, cortes, especificações de equipamentos, dutos e tubulações." },
  { icon: Clock, title: "Eficiência Energética", desc: "Projetos otimizados que reduzem consumo energético e custos operacionais." },
  { icon: Award, title: "Normas ABNT e ASHRAE", desc: "Projetos em conformidade com normas brasileiras e internacionais de climatização." },
  { icon: Scale, title: "ART Inclusa", desc: "Anotação de Responsabilidade Técnica inclusa. Integração com PMOC obrigatório." },
];

const processSteps = [
  { title: "Levantamento", desc: "Analisamos o ambiente, uso, ocupação e requisitos de conforto.", icon: Eye },
  { title: "Carga Térmica", desc: "Calculamos a capacidade necessária para cada ambiente.", icon: Thermometer },
  { title: "Projeto Conceitual", desc: "Definimos o tipo de sistema e layout geral.", icon: Wind },
  { title: "Projeto Executivo", desc: "Desenvolvemos plantas, detalhes e especificações completas.", icon: FileText },
  { title: "Acompanhamento", desc: "Acompanhamos instalação e comissionamento.", icon: Shield },
];

const systemTypes = [
  { icon: Wind, title: "Split e VRF/VRV", desc: "Sistemas split, multi-split e VRF para ambientes comerciais", count: "30+ projetos" },
  { icon: Factory, title: "Chiller e Fan-Coil", desc: "Sistemas centrais para grandes empreendimentos", count: "15+ projetos" },
  { icon: Wind, title: "Dutos e Difusores", desc: "Redes de distribuição de ar condicionado", count: "25+ projetos" },
  { icon: Building, title: "Ventilação Industrial", desc: "Sistemas de ventilação e exaustão industrial", count: "10+ projetos" },
];

const riskComparison = [
  { item: "Conforto térmico", without: "Inadequado", with: "Garantido por cálculo" },
  { item: "Consumo energético", without: "Desperdício", with: "Otimizado (-30%)" },
  { item: "Vida útil dos equipamentos", without: "Reduzida", with: "Maximizada" },
  { item: "Qualidade do ar", without: "Comprometida", with: "Conforme normas" },
  { item: "Documentação", without: "Inexistente", with: "Projeto + ART + PMOC" },
  { item: "Conformidade legal", without: "Irregular", with: "Total" },
];

const targetAudience = [
  { name: "Construtoras e incorporadoras", icon: Building },
  { name: "Shopping centers", icon: Building },
  { name: "Indústrias com ambientes controlados", icon: Factory },
  { name: "Hospitais e clínicas", icon: Shield },
  { name: "Hotéis e resorts", icon: Building },
  { name: "Edifícios corporativos", icon: Building },
  { name: "Data centers", icon: Factory },
  { name: "Laboratórios", icon: Thermometer },
];

const testimonials = [
  { name: "Sérgio K.", role: "Diretor de Obras", company: "Construtora – SP", text: "O projeto de climatização da VSM foi fundamental para o sucesso do empreendimento. Cálculos precisos e acompanhamento da instalação.", rating: 5 },
  { name: "Dra. Luciana F.", role: "Administradora", company: "Hospital – MG", text: "Projeto de climatização hospitalar exige conhecimento especializado. A VSM entregou um projeto impecável conforme todas as normas.", rating: 5 },
  { name: "Pedro H.", role: "Gerente de Facilities", company: "Edifício Corporativo – RJ", text: "Desde a implementação do projeto da VSM, reduzimos 28% no consumo de energia com climatização.", rating: 5 },
];

const faqs = [
  { q: "Qual a diferença entre projeto de climatização e PMOC?", a: "O projeto define o sistema a ser instalado (dimensionamento, equipamentos, dutos). O PMOC é o plano de manutenção obrigatório para sistemas já instalados." },
  { q: "O projeto inclui especificação de equipamentos?", a: "Sim. Incluímos dimensionamento completo, marcas e modelos recomendados, tubulações, dutos, controles e automação." },
  { q: "Vocês projetam para ambientes industriais?", a: "Sim. Projetamos sistemas de climatização e ventilação para ambientes industriais, incluindo salas limpas, áreas de produção e laboratórios." },
  { q: "Quanto custa um projeto de climatização?", a: "Depende da complexidade e área. Oferecemos orçamento gratuito em até 24h." },
  { q: "Vocês acompanham a instalação?", a: "Sim. Oferecemos acompanhamento da instalação e comissionamento para garantir que o sistema funcione conforme o projeto." },
  { q: "Vocês atendem em quais estados?", a: "Atendemos todo o Sudeste: São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo." },
];

const relatedServices = [
  { label: "PMOC", href: "/servicos/pmoc", desc: "Plano de manutenção obrigatório", icon: Wind },
  { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas", desc: "Inspeções especializadas", icon: Eye },
  { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos", desc: "Projetos e cálculos", icon: Shield },
  { label: "Consultoria Gratuita", href: "/servicos/consultoria-gratuita", desc: "Avaliação sem compromisso", icon: FileText },
];

const seoContent = `
## Projetos de Climatização HVAC: o guia técnico definitivo

Climatização não é "trocar o ar quente pelo ar frio". É controle simultâneo de **temperatura, umidade, pressão, renovação e qualidade do ar** em ambientes que precisam atender pessoas, processo, ou ambos. Um projeto HVAC mal dimensionado entrega ambiente desconfortável, conta de energia inflada, equipamento que falha cedo e — em hospitais e indústrias farmacêuticas — risco sanitário direto. Um projeto bem feito, ao contrário, é invisível: temperatura constante, ar limpo, conta sob controle e zero reclamação do usuário.

Este guia foi escrito por engenheiros mecânicos da **VSM Engenharia**, com base em projetos HVAC entregues para edifícios corporativos, hospitais, redes de varejo, centros logísticos, áreas limpas e plantas industriais do Sudeste.

> NOTA: Projetos HVAC são responsabilidade de **engenheiro mecânico com CREA ativo e atribuição em refrigeração e ar condicionado**, com ART específica. As normas técnicas brasileiras de referência são NBR 16401 (instalações de ar-condicionado para conforto), NBR 7256 (áreas hospitalares), NBR 14679 (higienização), além da Lei 13.589/2018 (PMOC).

### O que cobre um projeto HVAC

| Tipo de projeto | Aplicações | Normas |
| --- | --- | --- |
| Conforto comercial | Escritórios, lojas, restaurantes | NBR 16401-1/2/3, ASHRAE 55, ASHRAE 62.1 |
| Conforto residencial coletivo | Áreas comuns de condomínios | NBR 16401, Lei 13.589 |
| Hospitalar e áreas críticas | UTI, centro cirúrgico, isolamentos | NBR 7256, RDC 50 ANVISA, ASHRAE 170 |
| Áreas limpas farmacêuticas | Salas ISO 5 a 8, áreas estéreis | NBR ISO 14644, RDC 658 ANVISA |
| Industrial de processo | Salas de controle, áreas elétricas, processos sensíveis | NBR 16401 + requisitos do processo |
| Centros de dados (CPDs) | Salas de TI, racks de alta densidade | ASHRAE TC 9.9, TIA-942 |
| Climatização evaporativa | Galpões industriais, oficinas | Boas práticas e fabricante |

### Etapas de um projeto HVAC técnico

1. **Levantamento arquitetônico e de uso** — área, ocupação, equipamentos internos, horário, orientação solar
2. **Cálculo de carga térmica** — método NBR 16401 ou ASHRAE 183, com software (HAP, TRACE, EnergyPlus)
3. **Definição da estratégia de sistema** — split, multi-split, VRF, chiller + fan-coil, expansão direta, água gelada
4. **Dimensionamento de equipamentos** — capacidade, modelo, eficiência, posicionamento
5. **Projeto de dutos** — método de igual atrito, recuperação estática, perda de carga, isolamento
6. **Projeto hidráulico** quando água gelada — bombas, tubulação, balanceamento, expansão
7. **Projeto elétrico de alimentação e comando** — em parceria com elétrico
8. **Projeto de exaustão e renovação** — fluxos, pressão, qualidade do ar
9. **Memorial descritivo + caderno de especificações**
10. **ART** baixada no CREA
11. **Suporte ao orçamento, instalação, comissionamento e PMOC**

### Cálculo de carga térmica — o coração do projeto

Carga térmica errada compromete tudo. Equipamento subdimensionado: ambiente nunca atinge setpoint, compressor trabalha 100% do tempo, vida útil curta. Equipamento superdimensionado: ciclos curtos, desumidificação ruim, conforto pior, energia desperdiçada.

Componentes da carga térmica calculados:

- **Ganho por radiação solar direta e difusa** (vidros, paredes, coberturas)
- **Ganho por condução** (paredes, lajes, coberturas)
- **Ganho interno por pessoas** (calor sensível + latente conforme atividade)
- **Ganho interno por iluminação**
- **Ganho interno por equipamentos** (computadores, motores, fornos, processo)
- **Ganho por infiltração e renovação** (ar externo)
- **Calor latente** para controle de umidade

A NBR 16401-1 fornece critérios brasileiros; ASHRAE Handbook complementa em casos complexos.

### Comparativo de sistemas — quando usar cada um

| Sistema | Faixa típica | Vantagens | Limites |
| --- | --- | --- | --- |
| Split / multi-split | Até 60.000 BTU/h por ambiente | Baixo investimento, simples | Estética, manutenção dispersa |
| VRF / VRV | Até 1.500 kW por sistema | Modulação, zoneamento, eficiência | Investimento alto, manutenção especializada |
| Self-contained | 5 a 80 TR | Compacto, robusto | Ruído, captação de ar de condensação |
| Chiller + fan-coil (água gelada) | A partir de 100 TR | Eficiência em grande porte, manutenção centralizada | Investimento alto, complexidade |
| Expansão direta dutada | 5 a 30 TR | Distribuição uniforme | Perda de carga em dutos longos |
| Climatização evaporativa | Galpões grandes | Baixíssimo consumo | Só funciona em clima seco |

### Erros mais comuns em projetos HVAC

- Cálculo de carga "por área" (X BTU/m²) sem considerar componentes reais
- Dutos subdimensionados gerando ruído e perda de pressão
- Falta de exaustão / renovação de ar (CO₂ acima de 1.000 ppm)
- Ausência de drenagem adequada das bandejas
- Projeto sem previsão de manutenção (filtros inacessíveis, equipamentos sem espaço)
- Falta de zoneamento — um termostato controla áreas com cargas distintas
- Sem integração com PMOC (Lei 13.589/2018)
- ART em nome de profissional sem atribuição em refrigeração

### Eficiência energética e sustentabilidade

Projetos HVAC modernos integram critérios de eficiência energética:

- Equipamentos com **selo PROCEL** e classificação A
- Sistemas **inverter** com modulação de capacidade
- **Recuperação de calor** em sistemas de renovação de ar
- **Free cooling** quando temperatura externa permite
- **Controle por BMS** (Building Management System)
- **Monitoramento de consumo** por equipamento
- Adequação a certificações **LEED, AQUA, EDGE** quando aplicável

### Projetos HVAC em São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo

A VSM atende todo o Sudeste, com presença forte em **edifícios corporativos da capital paulista** (Faria Lima, Berrini, Paulista), **redes hospitalares**, **centros logísticos**, **shoppings**, **escolas e universidades** e **plantas industriais** com áreas climatizadas críticas.

### Por que a VSM Engenharia é referência em projetos HVAC no Sudeste

- Engenheiros mecânicos com CREA ativo e atribuição em refrigeração
- Centenas de projetos HVAC entregues no Sudeste
- Cálculo de carga térmica com software profissional (HAP, TRACE)
- Memorial descritivo e caderno de especificações completos
- ART específica em todo projeto
- Integração nativa com PMOC e qualidade do ar interior
- Suporte à instalação e comissionamento

### Perguntas frequentes sobre projetos HVAC

### P: Posso especificar ar condicionado pela regra "X BTU/m²"?

> R: Não. Essa "regra" só serve para estimativas grosseiras de pequenas residências. Em ambientes comerciais, hospitalares e industriais, o cálculo precisa considerar todos os componentes de carga (solar, ocupação, equipamentos, infiltração, latente). Subdimensionar ou superdimensionar tem custo alto.

### P: Quem pode assinar um projeto HVAC?

> R: Engenheiro mecânico (ou modalidade compatível) com CREA ativo e atribuição em refrigeração e ar condicionado, com ART baixada. Arquiteto e técnico em refrigeração não têm atribuição para projeto.

### P: Quanto tempo leva um projeto HVAC?

> R: Projeto residencial coletivo: 2 a 4 semanas. Comercial médio: 4 a 8 semanas. Hospitalar / áreas críticas: 8 a 16 semanas. Industrial complexo: conforme escopo. Inclui levantamento, cálculo, detalhamento, memorial e ART.

### P: Vocês fazem o PMOC do mesmo sistema que projetam?

> R: Sim. Quando assumimos o projeto, podemos elaborar o PMOC desde o comissionamento. Isso garante coerência entre projeto e plano de manutenção, e simplifica a vida do gestor predial.

### P: Projeto HVAC é obrigatório?

> R: Em prédios comerciais, hospitalares, industriais e edifícios sob legislação de PMOC, sim. Sistemas instalados sem projeto ficam vulneráveis em fiscalização sanitária e comprometem o alvará de funcionamento.

### Próximo passo: chame a VSM para uma análise gratuita

Solicite avaliação gratuita do seu próximo projeto HVAC. Avaliamos escopo, premissas, estratégia de sistema e estimativa de prazo e investimento em até 5 dias úteis. Sem compromisso.

Projeto HVAC, projeto de ar condicionado, cálculo de carga térmica, projeto de VRF, projeto de chiller, projeto de fan-coil, projeto de climatização hospitalar, projeto de área limpa, ART de projeto HVAC — VSM Engenharia, parceira de engenharia em climatização no Sudeste do Brasil.
`;

export default function ProjetosClimatizacao() {
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
      <div className="bg-destructive text-destructive-foreground overflow-hidden"><div className="container mx-auto px-4 py-2.5 text-center"><p className="text-sm font-semibold animate-pulse">{tickerMessages[tickerIndex]}</p></div></div>

      <section className="relative overflow-hidden min-h-[85vh] flex items-center"><div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" /><div className="absolute inset-0 pattern-dots opacity-10" /><div className="relative container mx-auto px-4 py-20 md:py-28"><div className="grid lg:grid-cols-5 gap-12 items-center"><div className="lg:col-span-3"><div className="flex items-center gap-3 mb-6 flex-wrap"><span className="bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Serviço Especializado</span></div><h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.05] text-white">Projetos de{" "}<span className="text-cta relative">Climatização<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg></span><br /><span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">HVAC · Carga Térmica · Eficiência</span></h1><p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">Projetos HVAC completos com cálculo de carga térmica e <strong className="text-white">ART inclusa</strong>.</p><div className="flex flex-wrap gap-3 mb-8">{["Eng. CREA Ativo", "ART Inclusa", "ABNT/ASHRAE", "Todo Sudeste"].map((t) => (<span key={t} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> {t}</span>))}</div><div className="flex flex-col sm:flex-row gap-4"><Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8 h-14 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:shadow-[0_8px_28px_-4px_hsl(var(--cta)/0.55)] transition-all hover:scale-[1.02]"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-5 w-5 mr-2" /> SOLICITAR ORÇAMENTO GRÁTIS</a></Button><Button asChild size="lg" className="bg-white text-primary font-semibold px-8 h-14 rounded-full border border-white/30 hover:bg-white/90 transition-all"><a href="#como-funciona">Como Funciona →</a></Button></div></div><div className="lg:col-span-2 hidden lg:flex flex-col gap-4"><div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"><div className="flex items-center gap-3 mb-4"><div className="h-10 w-10 rounded-full bg-cta/20 flex items-center justify-center"><ShieldAlert className="h-5 w-5 text-cta" /></div><span className="text-white font-bold text-sm">PRECISA DE PROJETO HVAC?</span></div><div className="space-y-3">{["Novo empreendimento?", "Retrofit de sistema?", "Ambiente desconfortável?"].map((q) => (<label key={q} className="flex items-center gap-3 text-white/80 text-sm cursor-pointer hover:text-white transition-colors"><div className="h-5 w-5 rounded border border-white/30 flex items-center justify-center shrink-0"><XCircle className="h-3 w-3 text-cta" /></div>{q}</label>))}</div><Button asChild size="sm" className="w-full mt-5 bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-lg"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Solicitar Projeto</a></Button></div><div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl"><div className="flex items-center gap-3"><div className="flex -space-x-2">{[1,2,3].map((n) => (<div key={n} className="h-8 w-8 rounded-full bg-cta/30 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold">{n === 1 ? "S" : n === 2 ? "L" : "P"}</div>))}</div><div><p className="text-white text-sm font-semibold">+80 projetos HVAC</p><p className="text-white/60 text-xs">Avaliação 5.0 ⭐</p></div></div></div></div></div></div></section>

      <section className="bg-card border-b border-border relative z-10 -mt-1"><div className="container mx-auto px-4 py-10"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((s) => (<div key={s.label} className="text-center"><div className="flex items-center justify-center gap-2 mb-2"><s.icon className="h-6 w-6 text-cta opacity-70" /><span className="text-3xl md:text-4xl font-black text-cta"><CountUp end={s.value} />{s.suffix}</span></div><div className="text-sm text-muted-foreground font-medium">{s.label}</div></div>))}</div></div></section>

      <RevealSection><section className="py-20 md:py-24"><div className="container mx-auto px-4 max-w-6xl"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Entenda</span><h2 className="text-3xl md:text-4xl font-black mb-6">Projetos de Climatização HVAC</h2><p className="text-muted-foreground leading-relaxed mb-4 text-lg">Desenvolvemos projetos completos de climatização para <strong className="text-foreground">ambientes industriais, comerciais, hospitalares e corporativos</strong>.</p><p className="text-muted-foreground leading-relaxed mb-6">Do cálculo de carga térmica ao projeto executivo, garantimos conforto, qualidade do ar e eficiência energética.</p><div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-5 mb-6"><div className="flex items-start gap-3"><AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" /><div><h4 className="font-bold text-destructive mb-1">Sistema mal dimensionado</h4><p className="text-sm text-muted-foreground">Pode causar <strong className="text-foreground">desconforto, desperdício energético de até 40%</strong> e problemas de qualidade do ar.</p></div></div></div><Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> Solicitar projeto</a></Button></div><div className="relative"><div className="rounded-2xl overflow-hidden shadow-elevated h-80 md:h-[28rem]"><img src={heroHvac} alt="Sistema HVAC industrial de climatização em telhado comercial" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" /></div><div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border-2 border-cta/20 rounded-2xl p-4 shadow-elevated"><div className="flex items-center gap-3"><div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center"><BadgeCheck className="h-6 w-6 text-cta" /></div><div><p className="font-black text-lg text-cta">ABNT/ASHRAE</p><p className="text-xs text-muted-foreground">Normas internacionais</p></div></div></div></div></div></div></section></RevealSection>

      <RevealSection><section className="bg-secondary py-20 md:py-24 pattern-grid"><div className="container mx-auto px-4"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Sistemas</span><h2 className="text-3xl md:text-4xl font-black mb-4">Tipos de Sistema</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">{systemTypes.map((eq) => (<div key={eq.title} className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elevated transition-all duration-300 border hover:-translate-y-1"><div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cta/10 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><eq.icon className="h-7 w-7 text-cta" /></div><h3 className="font-bold text-lg mb-2">{eq.title}</h3><p className="text-sm text-muted-foreground mb-4">{eq.desc}</p><div className="flex items-center gap-1.5 text-xs font-semibold text-cta"><TrendingUp className="h-3.5 w-3.5" />{eq.count}</div></div>))}</div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24"><div className="container mx-auto px-4 max-w-4xl"><div className="text-center mb-12"><span className="text-destructive font-bold text-sm tracking-widest uppercase mb-3 block">Compare</span><h2 className="text-3xl md:text-4xl font-black mb-4">Com Projeto vs. Sem Projeto</h2></div><div className="bg-card rounded-2xl border shadow-elevated overflow-hidden"><div className="grid grid-cols-3 bg-secondary font-bold text-sm"><div className="p-4 md:p-5">Aspecto</div><div className="p-4 md:p-5 text-center bg-destructive/10 text-destructive">❌ Sem Projeto</div><div className="p-4 md:p-5 text-center bg-success/10 text-success">✅ Com VSM</div></div>{riskComparison.map((row, i) => (<div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-t`}><div className="p-4 md:p-5 font-semibold">{row.item}</div><div className="p-4 md:p-5 text-center text-destructive/80">{row.without}</div><div className="p-4 md:p-5 text-center text-success font-medium">{row.with}</div></div>))}</div></div></section></RevealSection>

      <RevealSection><section className="bg-card py-20 md:py-24"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Público-Alvo</span><h2 className="text-3xl md:text-4xl font-black mb-4">Para Quem são os Projetos</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{targetAudience.map((t) => (<div key={t.name} className="flex items-center gap-3 bg-secondary rounded-xl p-4 border hover:border-cta/30 transition-colors"><div className="h-9 w-9 rounded-lg bg-cta/10 flex items-center justify-center shrink-0"><t.icon className="h-4 w-4 text-cta" /></div><span className="text-sm font-semibold">{t.name}</span></div>))}</div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24 bg-secondary pattern-dots"><div className="container mx-auto px-4"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Diferenciais</span><h2 className="text-3xl md:text-4xl font-black mb-4">Por que Escolher a VSM</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">{benefits.map((b) => (<div key={b.title} className={`bg-card rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${b.highlight ? "border-cta/30 ring-1 ring-cta/10 shadow-lg relative" : "shadow-soft"}`}>{b.highlight && <div className="absolute -top-3 left-6 bg-cta text-cta-foreground text-xs font-bold px-3 py-1 rounded-full">DESTAQUE</div>}<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cta/10 to-cta/5 flex items-center justify-center mb-5"><b.icon className="h-6 w-6 text-cta" /></div><h3 className="font-bold text-lg mb-2">{b.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p></div>))}</div></div></section></RevealSection>

      <RevealSection><section id="como-funciona" className="py-20 md:py-24 bg-gradient-elegant text-primary-foreground relative overflow-hidden"><div className="absolute inset-0 pattern-diagonal opacity-20" /><div className="relative container mx-auto px-4 max-w-5xl"><div className="text-center mb-16"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Processo</span><h2 className="text-3xl md:text-4xl font-black text-white mb-4">Do Levantamento ao Projeto em 5 Passos</h2></div><div className="grid md:grid-cols-5 gap-6">{processSteps.map((step, i) => (<div key={i} className="relative text-center"><div className="h-16 w-16 rounded-2xl bg-cta text-cta-foreground flex items-center justify-center font-black text-xl mx-auto mb-4 shadow-lg shadow-cta/30">{i + 1}</div>{i < processSteps.length - 1 && <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-white/15" />}<step.icon className="h-5 w-5 text-cta mx-auto mb-2" /><h3 className="font-bold text-white mb-2">{step.title}</h3><p className="text-white/60 text-xs leading-relaxed">{step.desc}</p></div>))}</div><div className="text-center mt-12"><Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black rounded-xl px-10 py-7 shadow-lg shadow-cta/30 text-base"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Zap className="h-5 w-5 mr-2" /> COMEÇAR AGORA</a></Button></div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Depoimentos</span><h2 className="text-3xl md:text-4xl font-black mb-4">O que Nossos Clientes Dizem</h2></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{testimonials.map((t, i) => (<div key={i} className="bg-secondary rounded-2xl p-7 border relative"><div className="text-cta/20 text-6xl font-serif absolute top-4 right-6 leading-none">"</div><div className="flex items-center gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-cta text-cta" />)}</div><p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p><div className="border-t pt-4"><p className="font-bold text-sm">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p><p className="text-xs text-cta font-medium">{t.company}</p></div></div>))}</div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24 bg-secondary"><div className="container mx-auto px-4 max-w-3xl"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Dúvidas</span><h2 className="text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes</h2></div><Accordion type="single" collapsible className="space-y-3">{faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6 shadow-soft"><AccordionTrigger className="text-left font-bold hover:no-underline py-5">{faq.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent></AccordionItem>))}</Accordion><div className="text-center mt-10 bg-card rounded-2xl border p-8 shadow-soft"><p className="font-bold mb-2">Ainda tem dúvidas?</p><p className="text-sm text-muted-foreground mb-4">Fale com nosso engenheiro.</p><Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> WhatsApp</a></Button></div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-10"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Explore Mais</span><h2 className="text-3xl md:text-4xl font-black">Serviços Relacionados</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-5">{relatedServices.map((s) => (<Link key={s.href} to={s.href} className="group flex items-center gap-5 bg-secondary rounded-2xl p-6 border hover:border-cta/30 hover:shadow-elevated transition-all duration-300"><div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center shrink-0 group-hover:bg-cta/20 transition-colors"><s.icon className="h-6 w-6 text-cta" /></div><div className="flex-1 min-w-0"><span className="font-bold group-hover:text-cta transition-colors">{s.label}</span><p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p></div><ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-cta group-hover:translate-x-1 transition-all shrink-0" /></Link>))}</div></div></section></RevealSection>

      <section className="py-20 md:py-24 bg-secondary"><div className="container mx-auto px-4 max-w-3xl"><div className="text-center mb-8"><BookOpen className="h-8 w-8 text-cta mx-auto mb-3" /><h2 className="text-2xl md:text-3xl font-black mb-2">Guia: Projetos de Climatização</h2></div><div className="relative overflow-hidden transition-all duration-700 ease-in-out" style={{ maxHeight: showSeoContent ? "none" : "14rem" }}><SeoGuideContent content={seoContent} />{!showSeoContent && <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary via-secondary/95 to-transparent" />}</div><div className="text-center mt-6"><Button variant="outline" onClick={() => setShowSeoContent(!showSeoContent)} className="font-bold gap-2 rounded-xl px-8 py-5 border-cta/30 hover:border-cta hover:text-cta transition-colors">{showSeoContent ? <>Ler menos <ChevronUp className="h-4 w-4" /></> : <>Ler guia completo <ChevronDown className="h-4 w-4" /></>}</Button></div></div></section>

      <section className="bg-gradient-elegant py-20 md:py-28 text-center relative overflow-hidden"><div className="absolute inset-0 pattern-dots opacity-10" /><div className="relative container mx-auto px-4"><div className="max-w-3xl mx-auto"><div className="inline-flex items-center gap-2 bg-cta/20 text-cta px-4 py-2 rounded-full text-sm font-bold mb-6"><Zap className="h-4 w-4" /> Orçamento gratuito</div><h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Precisa de um projeto de climatização?</h2><p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">Fale com nosso engenheiro especialista em HVAC.</p><Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black text-lg px-12 py-8 rounded-2xl shadow-xl shadow-cta/30 transition-all hover:scale-[1.02]"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-6 w-6 mr-3" /> FALAR COM ENGENHEIRO</a></Button><div className="flex items-center justify-center gap-6 mt-8 text-white/40 text-sm"><span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Orçamento grátis</span><span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Resposta em 24h</span><span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Sem compromisso</span></div></div></div></section>
    </>
  );
}
