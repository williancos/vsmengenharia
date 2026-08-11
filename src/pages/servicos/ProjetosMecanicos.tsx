import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, ArrowRight, Shield, AlertTriangle,
  FileText, Award, Clock, Phone, ChevronDown, ChevronUp,
  Wrench, Cog, Eye, Scale, Zap, Ruler,
  ShieldAlert, XCircle, CircleCheck, Star,
  Factory, TrendingUp, BadgeCheck, BookOpen
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import SeoGuideContent from "@/components/SeoGuideContent";
import { imgProps } from "@/lib/responsive-img";
import heroProjetos from "@/assets/projetos-mecanicos/hero-projetos.jpg?w=480;768;1024;1440;1920&format=webp&as=img";

const tickerMessages = [
  "⚠️ Proteções de máquinas inadequadas = risco de acidente e interdição",
  "🔴 Projetos sem memorial de cálculo não são aceitos em auditorias",
  "📋 Precisa de projeto mecânico com ART?",
  "⏰ Solicite agora um projeto sob medida para sua indústria",
];

const stats = [
  { value: 200, suffix: "+", label: "Projetos desenvolvidos", icon: BadgeCheck },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 100, suffix: "%", label: "Projetos aprovados", icon: Shield },
  { value: 100, suffix: "+", label: "Empresas atendidas", icon: Factory },
];

const benefits = [
  { icon: Shield, title: "Projetos Completos", desc: "Memorial de cálculo, desenhos técnicos 2D/3D, lista de materiais e especificações — tudo com ART.", highlight: true },
  { icon: Cog, title: "Proteções NR12", desc: "Projetos de proteções físicas, dispositivos de segurança e adequação de máquinas conforme NR12." },
  { icon: FileText, title: "Documentação Técnica", desc: "Memoriais descritivos, desenhos detalhados, listas de materiais e procedimentos de fabricação." },
  { icon: Clock, title: "Prazos Competitivos", desc: "Projetos entregues no prazo combinado, sem comprometer a qualidade técnica." },
  { icon: Award, title: "Engenheiros Especializados", desc: "Equipe com experiência em projetos industriais, proteções de máquinas e equipamentos especiais." },
  { icon: Scale, title: "ART Inclusa", desc: "Anotação de Responsabilidade Técnica inclusa em todos os projetos." },
];

const processSteps = [
  { title: "Briefing Técnico", desc: "Levantamos todas as necessidades, requisitos e restrições do projeto.", icon: Phone },
  { title: "Conceito", desc: "Criamos o conceito e validamos com o cliente antes de detalhar.", icon: Eye },
  { title: "Projeto Detalhado", desc: "Desenvolvemos desenhos técnicos, memoriais e especificações completas.", icon: Ruler },
  { title: "Revisão", desc: "Revisão técnica final e aprovação do cliente.", icon: FileText },
  { title: "Acompanhamento", desc: "Acompanhamos a fabricação e montagem quando solicitado.", icon: Wrench },
];

const projectTypes = [
  { icon: Shield, title: "Proteções NR12", desc: "Grades, carenagens, portas e barreiras de segurança", count: "80+ projetos" },
  { icon: Cog, title: "Equipamentos Especiais", desc: "Máquinas e equipamentos sob medida para sua operação", count: "50+ projetos" },
  { icon: Wrench, title: "Adequações", desc: "Projetos de adequação e modernização de máquinas", count: "40+ projetos" },
  { icon: Factory, title: "Estruturas", desc: "Suportes, bases, plataformas e estruturas metálicas", count: "30+ projetos" },
];

const riskComparison = [
  { item: "Conformidade NR12", without: "Irregular", with: "Totalmente adequado" },
  { item: "Segurança do operador", without: "Exposto a riscos", with: "Protegido por projeto" },
  { item: "Documentação técnica", without: "Inexistente", with: "Completa com ART" },
  { item: "Auditorias", without: "Reprovação", with: "Aprovação garantida" },
  { item: "Fabricação", without: "Improvisada", with: "Projetada e calculada" },
  { item: "Responsabilidade legal", without: "Gestor exposto", with: "Documentação protege" },
];

const targetAudience = [
  { name: "Indústrias adequando máquinas à NR12", icon: Shield },
  { name: "Empresas que precisam de equipamentos especiais", icon: Cog },
  { name: "Indústrias em expansão ou modernização", icon: TrendingUp },
  { name: "Empresas que precisam de proteções mecânicas", icon: Shield },
  { name: "Metalúrgicas e usinagem", icon: Wrench },
  { name: "Indústrias alimentícias", icon: Factory },
  { name: "Setor automotivo", icon: Cog },
  { name: "Indústrias químicas e plásticas", icon: Factory },
];

const testimonials = [
  { name: "Ricardo P.", role: "Gerente de Engenharia", company: "Metalúrgica – SP", text: "O projeto de proteções NR12 da VSM foi impecável. Passamos na auditoria sem nenhuma ressalva. Desenhos detalhados e memorial completo.", rating: 5 },
  { name: "Carla M.", role: "Diretora Industrial", company: "Indústria Alimentícia – MG", text: "Projetaram um equipamento especial sob medida para nossa linha de produção. Funcionou perfeitamente desde o primeiro dia.", rating: 5 },
  { name: "Bruno L.", role: "Coord. de Manutenção", company: "Indústria Automotiva – SP", text: "Projetos entregues no prazo e com qualidade excepcional. A VSM entende a realidade da indústria.", rating: 5 },
];

const faqs = [
  { q: "Vocês fabricam os equipamentos projetados?", a: "Nosso foco é o projeto de engenharia. Podemos indicar fabricantes parceiros qualificados e acompanhar a fabricação para garantir fidelidade ao projeto." },
  { q: "O projeto inclui memorial de cálculo?", a: "Sim. Todos os projetos incluem memorial de cálculo dimensionado conforme normas ABNT, desenhos técnicos detalhados (2D e 3D quando aplicável) e ART." },
  { q: "Qual o prazo para desenvolvimento de um projeto?", a: "Depende da complexidade. Projetos simples: 5 a 15 dias úteis. Projetos complexos: 30 a 60 dias. Informamos o prazo na proposta." },
  { q: "Vocês fazem projetos de proteções para NR12?", a: "Sim. É uma das nossas especialidades. Projetamos grades, carenagens, portas de proteção, intertravamentos e sistemas de segurança completos." },
  { q: "Quanto custa um projeto mecânico?", a: "O valor depende da complexidade, número de desenhos e tipo de projeto. Oferecemos orçamento gratuito em até 24h." },
  { q: "Vocês atendem em quais estados?", a: "Atendemos todo o Sudeste: São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo." },
];

const relatedServices = [
  { label: "Inspeção NR12", href: "/servicos/nr12", desc: "Adequação de máquinas", icon: Shield },
  { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas", desc: "Inspeções especializadas", icon: Eye },
  { label: "Projetos de Climatização", href: "/servicos/projetos-climatizacao", desc: "Projetos HVAC", icon: Cog },
  { label: "Consultoria Gratuita", href: "/servicos/consultoria-gratuita", desc: "Avaliação sem compromisso", icon: FileText },
];

const seoContent = `
## Projetos Mecânicos Industriais: o guia técnico definitivo

Projeto mecânico é a etapa que define se um equipamento, uma estrutura ou uma adequação vai funcionar com segurança, durabilidade e custo previsível — ou se vai virar problema recorrente de manutenção, causa de acidente e fonte de retrabalho. Quem trata projeto como "desenho rápido para montar" colhe falhas estruturais, soldas que rasgam, parafusos que cisalham e proteções que não param a máquina. Quem trata projeto como engenharia disciplinada entrega equipamentos que duram décadas.

Este guia foi escrito por engenheiros mecânicos da **VSM Engenharia**, com base em centenas de projetos entregues para indústrias do Sudeste — proteções NR-12, equipamentos especiais, estruturas metálicas, bancadas de teste, transportadores, dispositivos de manuseio e adequações estruturais.

> NOTA: Todo projeto mecânico no Brasil é responsabilidade técnica de engenheiro mecânico (ou modalidade compatível) com **CREA ativo, atribuição plena e ART específica baixada**. Projeto sem ART não tem validade legal.

### O que cobre um projeto mecânico industrial

A VSM atua nas seguintes famílias de projeto:

| Família | Aplicações | Normas referenciais |
| --- | --- | --- |
| Proteções de máquinas (NR-12) | Grades, carenagens, portas intertravadas, painéis de comando | NR-12, NBR 14153, ISO 13849, NBR 14152 |
| Equipamentos especiais | Bancadas de teste, dispositivos de fixação, jigs, gabaritos | ABNT específicas + boas práticas |
| Estruturas metálicas | Galpões, mezaninos, passarelas, suportes, plataformas | NBR 8800, NBR 16239, NBR 14762 |
| Transportadores | Esteiras, rolos, elevadores de canecas, pórticos | NBR 6678, ASME B20.1 |
| Tubulações industriais | Linhas de processo, vapor, ar comprimido, gases | ASME B31.1, B31.3, NBR 12712 |
| Vasos e reservatórios | Tanques atmosféricos, vasos não cobertos por NR-13 | API 650, NBR 7821 |
| Adequações estruturais | Reforços, ampliações, mudança de uso | NBR 8800 + análise de carga |
| Sistemas de içamento dedicados | Pórticos, talhas, balanços, balancins | NBR 8400, NBR 14768 |

### Etapas de um projeto mecânico técnico

Projeto mecânico sério segue um fluxo previsível:

1. **Levantamento de requisitos** — função, carga, ambiente, ciclo, integração
2. **Premissas técnicas e normativas** — quais normas se aplicam, quais cargas, quais coeficientes de segurança
3. **Anteprojeto / concepção** — alternativas conceituais com pré-dimensionamento
4. **Cálculos de engenharia** — dimensionamento estrutural, resistência dos materiais, soldas, parafusos, fadiga
5. **Detalhamento mecânico** — desenhos 2D e 3D, lista de materiais, especificações
6. **Memorial de cálculo** — documento técnico que justifica cada decisão
7. **Memorial descritivo** — descrição operacional, instalação, manutenção
8. **Análise de risco** quando aplicável (NR-12, içamento)
9. **ART** baixada no CREA
10. **Suporte à fabricação e comissionamento**

### Cálculos críticos do projeto mecânico

| Verificação | Norma | O que se calcula |
| --- | --- | --- |
| Resistência de perfis metálicos | NBR 8800 | Tensão admissível, flambagem, flexão composta |
| Soldas | AWS D1.1 / D1.6 | Tensão, garganta efetiva, fator de segurança |
| Parafusos estruturais | NBR 8800 | Tração, cisalhamento, esmagamento, deslizamento |
| Eixos e árvores | Shigley / Norton | Torção, flexão alternada, fadiga (Goodman) |
| Mancais | ISO 281 / fabricantes | L10, vida nominal, carga dinâmica |
| Vasos não NR-13 | API 650, NBR 7821 | Espessura, costado, tampo, ancoragem |
| Estabilidade global | NBR 8800 | Tombamento, deslizamento, recalque |
| Fadiga em estruturas dinâmicas | NBR 8800 + Eurocode 3 | Curvas S-N, vida em ciclos |

### Comparativo: "desenho rápido" × projeto técnico

| Aspecto | Desenho rápido | Projeto VSM |
| --- | --- | --- |
| Cálculo estrutural | "Olhômetro" ou cópia de projeto similar | Memorial de cálculo completo, justificado |
| Detalhamento | Croqui sem cotas críticas | Desenhos 2D/3D, cortes, vistas, BOM |
| Soldagem | Sem especificação de processo | EPS/RQPS por junta crítica |
| Análise de risco | Inexistente | APR/HRN integrada ao projeto |
| ART | Genérica | Específica por contrato e equipamento |
| Memorial | Não existe | 30 a 80 páginas, sustenta auditoria |
| Suporte à fabricação | Inexistente | Acompanhamento ativo |

### Erros mais comuns em projetos de mercado

- Cópia de projeto similar sem revisão das premissas
- Cálculos ausentes ou apenas verificações de catálogo
- Soldas dimensionadas "por experiência"
- Parafusos comerciais usados em juntas estruturais sem verificação de classe
- Estruturas projetadas sem considerar fadiga em uso dinâmico
- Proteção NR-12 dimensionada sem análise de risco prévia
- Falta de memorial de cálculo arquivável
- ART em nome de profissional sem atribuição

### Projetos mecânicos em São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo

A VSM atende todo o Sudeste, com forte presença em polos industriais: ABC Paulista, Campinas, Sorocaba, Vale do Paraíba, Cubatão, Paulínia (SP); Belo Horizonte, Betim, Vale do Aço, Triângulo Mineiro (MG); Região Metropolitana do Rio, Resende, Macaé (RJ); Grande Vitória, Cachoeiro de Itapemirim, Linhares (ES).

### Por que a VSM Engenharia é referência em projetos mecânicos no Sudeste

- Engenheiros mecânicos com CREA ativo e atribuição plena
- Mais de 500 projetos entregues em indústrias do Sudeste
- Memorial de cálculo completo e auditável em todo projeto
- ART específica em todo contrato
- Suporte à fabricação, montagem e comissionamento
- Integração com adequações NR-12 e inspeções técnicas

### Perguntas frequentes sobre projetos mecânicos

### P: Todo projeto mecânico precisa de ART?

> R: Sim. Projeto mecânico é atividade privativa de engenheiro habilitado e exige ART baixada no CREA. Sem ART, o projeto não tem validade legal e não sustenta auditoria.

### P: O que é memorial de cálculo?

> R: Documento técnico que apresenta as premissas, normas, cálculos e verificações que sustentam o projeto. É a "prova" de que o projeto foi realmente dimensionado, e não apenas desenhado.

### P: Vocês entregam projeto em 3D?

> R: Sim. Trabalhamos com SolidWorks e Inventor, entregando modelos 3D, desenhos 2D detalhados, lista de materiais e renderizações quando necessário.

### P: Acompanham a fabricação?

> R: Sim. Oferecemos acompanhamento ativo de fabricação, montagem e comissionamento, com inspeção em fornecedor e validação dimensional na entrega.

### P: Posso contratar apenas o cálculo estrutural?

> R: Sim. Atendemos demandas pontuais de verificação estrutural, parecer técnico, validação de projeto de terceiros e elaboração isolada de memorial de cálculo com ART.

### Próximo passo: chame a VSM para uma análise gratuita

Solicite avaliação gratuita do seu próximo projeto. Levantamos requisitos, premissas e estimativa de prazo e investimento em até 5 dias úteis. Sem compromisso.

Projeto mecânico industrial, projeto de proteção NR-12, projeto de equipamento especial, projeto de estrutura metálica, memorial de cálculo, ART de projeto mecânico — VSM Engenharia, parceira de engenharia em todo o Sudeste do Brasil.
`;

export default function ProjetosMecanicos() {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Projetos Mecânicos — Memorial de Cálculo e Desenhos 2D/3D",
    provider: { "@type": "Organization", name: "VSM Engenharia", url: "https://www.vsmengenharia.com" },
    areaServed: { "@type": "State", name: "Sudeste do Brasil" },
    description: "Projetos mecânicos com memorial de cálculo, desenhos técnicos 2D/3D, lista de materiais e ART. Proteções NR12 e equipamentos sob medida.",
    url: "https://www.vsmengenharia.com/servicos/projetos-mecanicos",
  }), []);

  useSEO({
    title: "Projetos Mecânicos — Memorial de Cálculo e Desenhos | VSM Engenharia",
    description: "Projetos mecânicos especializados com memorial de cálculo, desenhos 2D/3D e ART. Proteções NR12 e equipamentos sob medida para indústria.",
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
            {...imgProps(heroProjetos)}
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
                Projetos{" "}
                <span className="text-cta relative">
                  Mecânicos
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">Proteções NR12 · Equipamentos · Estruturas</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
                Projetos completos com memorial de cálculo, desenhos técnicos e <strong className="text-white">ART inclusa</strong>.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Eng. CREA Ativo", "ART Inclusa", "2D e 3D", "Todo Sudeste"].map((t) => (
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
                  <span className="text-white font-bold text-sm">PRECISA DE UM PROJETO?</span>
                </div>
                <div className="space-y-3">
                  {["Proteção de máquina inadequada?", "Equipamento especial sob medida?", "Adequação NR12 pendente?"].map((q) => (
                    <label key={q} className="flex items-center gap-3 text-white/80 text-sm cursor-pointer hover:text-white transition-colors">
                      <div className="h-5 w-5 rounded border border-white/30 flex items-center justify-center shrink-0"><XCircle className="h-3 w-3 text-cta" /></div>
                      {q}
                    </label>
                  ))}
                </div>
                <Button asChild size="sm" className="w-full mt-5 bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-lg">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Solicitar Projeto</a>
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((n) => (
                      <div key={n} className="h-8 w-8 rounded-full bg-cta/30 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold">{n === 1 ? "R" : n === 2 ? "C" : "B"}</div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">+200 projetos desenvolvidos</p>
                    <p className="text-white/60 text-xs">100% aprovação em auditorias</p>
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

      <RevealSection><section className="py-20 md:py-24"><div className="container mx-auto px-4 max-w-6xl"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Entenda</span><h2 className="text-3xl md:text-4xl font-black mb-6">Projetos Mecânicos Sob Medida</h2><p className="text-muted-foreground leading-relaxed mb-4 text-lg">Desenvolvemos projetos mecânicos completos: desde <strong className="text-foreground">proteções de máquinas para NR12</strong> até equipamentos especiais e estruturas metálicas.</p><p className="text-muted-foreground leading-relaxed mb-6">Cada projeto inclui memorial de cálculo, desenhos técnicos detalhados, lista de materiais e ART.</p><div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-5 mb-6"><div className="flex items-start gap-3"><AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" /><div><h4 className="font-bold text-destructive mb-1">Sem projeto = sem conformidade</h4><p className="text-sm text-muted-foreground">Proteções improvisadas sem projeto de engenharia <strong className="text-foreground">não são aceitas</strong> em auditorias do MTE e não protegem o gestor legalmente.</p></div></div></div><Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> Solicitar projeto</a></Button></div><div className="relative"><div className="rounded-2xl overflow-hidden shadow-elevated h-80 md:h-[28rem]"><img src={heroProjetos.src} alt="Projeto mecânico industrial em CAD com proteções NR12" loading="lazy" decoding="async" width={1024} height={768} className="w-full h-full object-cover" /></div><div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border-2 border-cta/20 rounded-2xl p-4 shadow-elevated"><div className="flex items-center gap-3"><div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center"><BadgeCheck className="h-6 w-6 text-cta" /></div><div><p className="font-black text-lg text-cta">CREA Ativo</p><p className="text-xs text-muted-foreground">Projetos com ART</p></div></div></div></div></div></div></section></RevealSection>

      <RevealSection><section className="bg-secondary py-20 md:py-24 pattern-grid"><div className="container mx-auto px-4"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Escopo</span><h2 className="text-3xl md:text-4xl font-black mb-4">Tipos de Projeto</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">{projectTypes.map((eq) => (<div key={eq.title} className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elevated transition-all duration-300 border hover:-translate-y-1"><div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cta/10 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><eq.icon className="h-7 w-7 text-cta" /></div><h3 className="font-bold text-lg mb-2">{eq.title}</h3><p className="text-sm text-muted-foreground mb-4">{eq.desc}</p><div className="flex items-center gap-1.5 text-xs font-semibold text-cta"><TrendingUp className="h-3.5 w-3.5" />{eq.count}</div></div>))}</div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24"><div className="container mx-auto px-4 max-w-4xl"><div className="text-center mb-12"><span className="text-destructive font-bold text-sm tracking-widest uppercase mb-3 block">Compare</span><h2 className="text-3xl md:text-4xl font-black mb-4">Com Projeto vs. Sem Projeto</h2></div><div className="bg-card rounded-2xl border shadow-elevated overflow-hidden"><div className="grid grid-cols-3 bg-secondary font-bold text-sm"><div className="p-4 md:p-5">Aspecto</div><div className="p-4 md:p-5 text-center bg-destructive/10 text-destructive">❌ Sem Projeto</div><div className="p-4 md:p-5 text-center bg-success/10 text-success">✅ Com VSM</div></div>{riskComparison.map((row, i) => (<div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-t`}><div className="p-4 md:p-5 font-semibold">{row.item}</div><div className="p-4 md:p-5 text-center text-destructive/80">{row.without}</div><div className="p-4 md:p-5 text-center text-success font-medium">{row.with}</div></div>))}</div></div></section></RevealSection>

      <RevealSection><section className="bg-card py-20 md:py-24"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Público-Alvo</span><h2 className="text-3xl md:text-4xl font-black mb-4">Para Quem são os Projetos</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{targetAudience.map((t) => (<div key={t.name} className="flex items-center gap-3 bg-secondary rounded-xl p-4 border hover:border-cta/30 transition-colors"><div className="h-9 w-9 rounded-lg bg-cta/10 flex items-center justify-center shrink-0"><t.icon className="h-4 w-4 text-cta" /></div><span className="text-sm font-semibold">{t.name}</span></div>))}</div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24 bg-secondary pattern-dots"><div className="container mx-auto px-4"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Diferenciais</span><h2 className="text-3xl md:text-4xl font-black mb-4">Por que Escolher a VSM</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">{benefits.map((b) => (<div key={b.title} className={`bg-card rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${b.highlight ? "border-cta/30 ring-1 ring-cta/10 shadow-lg relative" : "shadow-soft"}`}>{b.highlight && <div className="absolute -top-3 left-6 bg-cta text-cta-foreground text-xs font-bold px-3 py-1 rounded-full">DESTAQUE</div>}<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cta/10 to-cta/5 flex items-center justify-center mb-5"><b.icon className="h-6 w-6 text-cta" /></div><h3 className="font-bold text-lg mb-2">{b.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p></div>))}</div></div></section></RevealSection>

      <RevealSection><section id="como-funciona" className="py-20 md:py-24 bg-gradient-elegant text-primary-foreground relative overflow-hidden"><div className="absolute inset-0 pattern-diagonal opacity-20" /><div className="relative container mx-auto px-4 max-w-5xl"><div className="text-center mb-16"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Processo</span><h2 className="text-3xl md:text-4xl font-black text-white mb-4">Do Briefing ao Projeto em 5 Passos</h2></div><div className="grid md:grid-cols-5 gap-6">{processSteps.map((step, i) => (<div key={i} className="relative text-center"><div className="h-16 w-16 rounded-2xl bg-cta text-cta-foreground flex items-center justify-center font-black text-xl mx-auto mb-4 shadow-lg shadow-cta/30">{i + 1}</div>{i < processSteps.length - 1 && <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-white/15" />}<step.icon className="h-5 w-5 text-cta mx-auto mb-2" /><h3 className="font-bold text-white mb-2">{step.title}</h3><p className="text-white/60 text-xs leading-relaxed">{step.desc}</p></div>))}</div><div className="text-center mt-12"><Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black rounded-xl px-10 py-7 shadow-lg shadow-cta/30 text-base"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Zap className="h-5 w-5 mr-2" /> COMEÇAR AGORA</a></Button></div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Depoimentos</span><h2 className="text-3xl md:text-4xl font-black mb-4">O que Nossos Clientes Dizem</h2></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{testimonials.map((t, i) => (<div key={i} className="bg-secondary rounded-2xl p-7 border relative"><div className="text-cta/20 text-6xl font-serif absolute top-4 right-6 leading-none">"</div><div className="flex items-center gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-cta text-cta" />)}</div><p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p><div className="border-t pt-4"><p className="font-bold text-sm">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p><p className="text-xs text-cta font-medium">{t.company}</p></div></div>))}</div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24 bg-secondary"><div className="container mx-auto px-4 max-w-3xl"><div className="text-center mb-12"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Dúvidas</span><h2 className="text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes</h2></div><Accordion type="single" collapsible className="space-y-3">{faqs.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6 shadow-soft"><AccordionTrigger className="text-left font-bold hover:no-underline py-5">{faq.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent></AccordionItem>))}</Accordion><div className="text-center mt-10 bg-card rounded-2xl border p-8 shadow-soft"><p className="font-bold mb-2">Ainda tem dúvidas?</p><p className="text-sm text-muted-foreground mb-4">Fale com nosso engenheiro.</p><Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> WhatsApp</a></Button></div></div></section></RevealSection>

      <RevealSection><section className="py-20 md:py-24 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-10"><span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Explore Mais</span><h2 className="text-3xl md:text-4xl font-black">Serviços Relacionados</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-5">{relatedServices.map((s) => (<Link key={s.href} to={s.href} className="group flex items-center gap-5 bg-secondary rounded-2xl p-6 border hover:border-cta/30 hover:shadow-elevated transition-all duration-300"><div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center shrink-0 group-hover:bg-cta/20 transition-colors"><s.icon className="h-6 w-6 text-cta" /></div><div className="flex-1 min-w-0"><span className="font-bold group-hover:text-cta transition-colors">{s.label}</span><p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p></div><ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-cta group-hover:translate-x-1 transition-all shrink-0" /></Link>))}</div></div></section></RevealSection>

      <section className="py-20 md:py-24 bg-secondary"><div className="container mx-auto px-4 max-w-3xl"><div className="text-center mb-8"><BookOpen className="h-8 w-8 text-cta mx-auto mb-3" /><h2 className="text-2xl md:text-3xl font-black mb-2">Guia: Projetos Mecânicos</h2><p className="text-muted-foreground">Tudo sobre projetos mecânicos industriais.</p></div><div className="relative overflow-hidden transition-all duration-700 ease-in-out" style={{ maxHeight: showSeoContent ? "none" : "14rem" }}><SeoGuideContent content={seoContent} />{!showSeoContent && <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary via-secondary/95 to-transparent" />}</div><div className="text-center mt-6"><Button variant="outline" onClick={() => setShowSeoContent(!showSeoContent)} className="font-bold gap-2 rounded-xl px-8 py-5 border-cta/30 hover:border-cta hover:text-cta transition-colors">{showSeoContent ? <>Ler menos <ChevronUp className="h-4 w-4" /></> : <>Ler guia completo <ChevronDown className="h-4 w-4" /></>}</Button></div></div></section>

      <section className="bg-gradient-elegant py-20 md:py-28 text-center relative overflow-hidden"><div className="absolute inset-0 pattern-dots opacity-10" /><div className="relative container mx-auto px-4"><div className="max-w-3xl mx-auto"><div className="inline-flex items-center gap-2 bg-cta/20 text-cta px-4 py-2 rounded-full text-sm font-bold mb-6"><Zap className="h-4 w-4" /> Orçamento gratuito</div><h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Precisa de um projeto mecânico?</h2><p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">Fale com nosso engenheiro e receba uma proposta personalizada.</p><Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black text-lg px-12 py-8 rounded-2xl shadow-xl shadow-cta/30 transition-all hover:scale-[1.02]"><a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-6 w-6 mr-3" /> FALAR COM ENGENHEIRO</a></Button><div className="flex items-center justify-center gap-6 mt-8 text-white/40 text-sm"><span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Orçamento grátis</span><span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Resposta em 24h</span><span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Sem compromisso</span></div></div></div></section>
    </>
  );
}
