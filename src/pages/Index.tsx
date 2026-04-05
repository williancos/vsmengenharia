import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield, FileCheck, AlertTriangle, CheckCircle2, Users, Award,
  Wrench, ClipboardCheck, Truck, Wind, HardHat, Search, ArrowRight,
  TrendingUp, BadgeCheck, Clock, DollarSign, Scale, Phone, ChevronRight,
  Zap, Target, BarChart3, ArrowUpRight, CircleCheck
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";

import heroImg from "@/assets/hero-inspection.jpg";
import inspectionDocsImg from "@/assets/inspection-documents.jpg";
import factoryImg from "@/assets/factory-interior.jpg";
import riggingImg from "@/assets/rigging-crane.jpg";
import teamImg from "@/assets/team-engineers.jpg";
import vehicleImg from "@/assets/vehicle-inspection.jpg";

const pillarServices = [
  {
    title: "Inspeções NR13",
    desc: "Caldeiras, vasos de pressão e tubulações inspecionados com laudos completos, prontuário e livro de registro.",
    image: factoryImg,
    href: "/servicos/nr13",
    tags: ["Laudos", "Prontuário", "ART"],
  },
  {
    title: "NR12 · Segurança de Máquinas",
    desc: "Análise de risco (APR), relatório técnico e projeto de adequação para conformidade total.",
    image: inspectionDocsImg,
    href: "/servicos/nr12",
    tags: ["APR", "Projeto", "Relatório"],
  },
  {
    title: "NR11 · Plano de Rigging",
    desc: "Inspeções técnicas e planos de rigging para caminhão munck, ponte rolante, empilhadeira e plataformas.",
    image: riggingImg,
    href: "/servicos/nr11",
    tags: ["Rigging", "Içamento", "NR11"],
  },
  {
    title: "Reclassificação de Monta",
    desc: "Reclassificação de veículos sinistrados junto ao DETRAN com laudo técnico e memorial de cálculo.",
    image: vehicleImg,
    href: "/servicos/reclassificacao-de-monta",
    tags: ["DETRAN", "Laudo", "Veículos"],
  },
];

const secondaryServices = [
  { icon: Wind, title: "PMOC", desc: "Plano de manutenção conforme Lei 13.589", href: "/servicos/pmoc" },
  { icon: Search, title: "Inspeções Técnicas", desc: "Máquinas, estruturas e climatização", href: "/servicos/inspecoes-tecnicas" },
  { icon: Wrench, title: "Projetos Mecânicos", desc: "Proteções e equipamentos sob medida", href: "/servicos/projetos-mecanicos" },
  { icon: Wind, title: "Climatização", desc: "Projetos HVAC industriais e comerciais", href: "/servicos/projetos-climatizacao" },
  { icon: FileCheck, title: "Consultoria Gratuita", desc: "Diagnóstico de conformidade sem custo", href: "/servicos/consultoria-gratuita" },
];

const stats = [
  { value: 500, suffix: "+", label: "Inspeções realizadas" },
  { value: 150, suffix: "+", label: "Empresas atendidas" },
  { value: 10, suffix: "+", label: "Anos de experiência" },
  { value: 100, suffix: "%", label: "Laudos aprovados" },
];

const risks = [
  { icon: DollarSign, text: "Multas de R$ 6.708 a R$ 402.522", detail: "Ministério do Trabalho" },
  { icon: AlertTriangle, text: "Interdição total de equipamentos", detail: "Parada da produção" },
  { icon: Users, text: "Acidentes graves com colaboradores", detail: "Risco de vida" },
  { icon: Scale, text: "Ações judiciais trabalhistas", detail: "Alto impacto financeiro" },
];

const processSteps = [
  { num: "01", title: "Contato", desc: "Fale com nosso engenheiro e descreva sua necessidade técnica." },
  { num: "02", title: "Diagnóstico", desc: "Avaliamos sua situação e identificamos normas aplicáveis." },
  { num: "03", title: "Inspeção em Campo", desc: "Realizamos a inspeção com rigor técnico e equipamentos calibrados." },
  { num: "04", title: "Entrega do Laudo", desc: "Laudo técnico completo com ART e memorial de cálculo detalhado." },
];

const blogPosts = [
  { title: "Checklist prático para contratar inspeção NR-13 com segurança", category: "NR13", href: "/blog" },
  { title: "Os 7 erros mais comuns na elaboração de Planos de Rigging", category: "NR11", href: "/blog" },
  { title: "Reclassificação de Monta x Baixa Definitiva: qual escolher?", category: "Veículos", href: "/blog" },
];

export default function Index() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[100vh] flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT — Dark content panel */}
        <div className="relative z-10 w-full lg:w-[55%] xl:w-[50%] bg-primary flex items-center min-h-[60vh] lg:min-h-[100vh]">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 pattern-dots opacity-30" />
          {/* Diagonal accent line */}
          <svg className="absolute top-0 right-0 h-full w-24 hidden lg:block" viewBox="0 0 100 800" preserveAspectRatio="none">
            <polygon points="60,0 100,0 100,800 0,800" fill="hsl(var(--primary))" />
          </svg>

          <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-0 w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            {/* Rating badge */}
            <div className="animate-fade-in mb-8" style={{ animationDelay: "0ms" }}>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-cta fill-cta" viewBox="0 0 20 20">
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.92 5.32L10 13.28l-4.78 2.43.92-5.32L2.27 6.62l5.34-.78z" />
                    </svg>
                  ))}
                </div>
                <span className="text-primary-foreground/50">5.0 — Avaliações Google</span>
              </div>
            </div>

            {/* Category tag */}
            <div className="animate-fade-in mb-6" style={{ animationDelay: "80ms" }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-cta" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-cta">
                  Engenharia Mecânica & Inspeções
                </span>
              </div>
            </div>

            {/* Headline — editorial style */}
            <h1 className="animate-fade-in" style={{ animationDelay: "160ms" }}>
              <span className="block text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold leading-[1.05] text-primary-foreground tracking-tight">
                Sua indústria
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold leading-[1.05] text-primary-foreground tracking-tight">
                em{" "}
                <em className="not-italic text-cta font-extrabold" style={{ fontFamily: "'Outfit', sans-serif", fontStyle: "italic" }}>
                  conformidade.
                </em>
              </span>
            </h1>

            {/* Decorative separator */}
            <div className="flex items-center gap-3 my-8 animate-fade-in" style={{ animationDelay: "240ms" }}>
              <div className="w-10 h-px bg-primary-foreground/20" />
              <div className="w-2 h-2 rotate-45 border border-primary-foreground/20" />
              <div className="w-20 h-px bg-primary-foreground/20" />
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-primary-foreground/55 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "300ms" }}>
              Inspeções <strong className="text-primary-foreground/80">NR13, NR12 e NR11</strong> com laudos robustos, memoriais de cálculo e ART. Reclassificação de Monta com laudo técnico completo. Referência no Sudeste.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in" style={{ animationDelay: "380ms" }}>
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold text-sm uppercase tracking-wider px-8 h-14 rounded-lg shadow-lg shadow-cta/25 transition-all hover:-translate-y-0.5">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Agende Sua Avaliação Gratuita
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 font-semibold text-sm uppercase tracking-wider h-14 rounded-lg transition-all hover:-translate-y-0.5">
                <a href="#servicos">Ver Serviços</a>
              </Button>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-in" style={{ animationDelay: "460ms" }}>
              {[
                { icon: Shield, text: "Laudos com ART" },
                { icon: Award, text: "Eng. CREA" },
                { icon: Users, text: "150+ Empresas" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-primary-foreground/40">
                  <item.icon className="h-4 w-4 text-cta/60" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Image panel */}
        <div className="relative w-full lg:w-[45%] xl:w-[50%] min-h-[40vh] lg:min-h-[100vh]">
          <img
            src={heroImg}
            alt="Engenheiro realizando inspeção em vaso de pressão industrial"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Gradient overlay on image for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent lg:bg-gradient-to-l lg:from-primary/20 lg:via-transparent lg:to-transparent" />

          {/* Floating credential cards */}
          <div className="absolute bottom-6 right-6 left-6 lg:bottom-12 lg:right-8 lg:left-auto flex flex-col gap-3 max-w-xs ml-auto animate-fade-in" style={{ animationDelay: "550ms" }}>
            <div className="flex items-center gap-4 px-5 py-4 rounded-xl bg-card/90 backdrop-blur-md border border-border/40 shadow-elevated">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-cta" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-wider uppercase text-foreground">500+ Inspeções Realizadas</div>
                <div className="text-xs text-muted-foreground mt-0.5">NR13, NR12, NR11 e Reclassificação</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-5 py-4 rounded-xl bg-card/90 backdrop-blur-md border border-border/40 shadow-elevated">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                <BadgeCheck className="h-5 w-5 text-success" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-wider uppercase text-foreground">+10 Anos de Experiência</div>
                <div className="text-xs text-muted-foreground mt-0.5">Referência no Sudeste do Brasil</div>
              </div>
            </div>
          </div>

          {/* Vertical text accent */}
          <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden xl:flex items-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary-foreground/30 [writing-mode:vertical-rl] rotate-180">
              VSM Engenharia
            </span>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "700ms" }}>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-foreground/40 mb-1">Explore</span>
            <div className="w-5 h-9 rounded-full border-2 border-primary-foreground/25 flex justify-center pt-2">
              <div className="w-1 h-1 rounded-full bg-primary-foreground/40 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="relative bg-card border-b border-border/60">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PILLAR SERVICES – BENTO GRID ═══ */}
      <section id="servicos" className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase mb-4">
                  Serviços Principais
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Dois pilares,{" "}
                  <span className="relative inline-block">
                    <span className="text-cta">uma expertise</span>
                  </span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                Inspeções normativas e reclassificação de monta com o mesmo rigor técnico e documentação robusta.
              </p>
            </div>
          </RevealSection>

          {/* Bento Grid */}
          <RevealSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[320px]">
              {pillarServices.map((s, i) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                    i === 0 ? "md:row-span-2 auto-rows-auto" : ""
                  }`}
                  style={i === 0 ? { gridRow: "span 2" } : undefined}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  
                  {/* Tags */}
                  <div className="absolute top-5 left-5 flex gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold text-primary-foreground/90 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-primary-foreground leading-tight mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed mb-3 max-w-md">
                      {s.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-cta font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Saiba mais <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </RevealSection>

          {/* Secondary services row */}
          <RevealSection className="mt-8" stagger>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {secondaryServices.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="group bg-card rounded-2xl border border-border/60 p-5 hover:shadow-elevated hover:border-cta/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 group-hover:text-cta transition-colors">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══ ABOUT / WHY VSM – ASYMMETRIC SPLIT ═══ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-card">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Images grid */}
            <RevealSection variant="left" className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-elevated group">
                  <img
                    src={teamImg}
                    alt="Equipe de engenheiros VSM em campo"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-block px-3 py-1 bg-cta text-cta-foreground text-xs font-bold rounded-full">
                    Equipe Especializada
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-elevated group">
                  <img
                    src={inspectionDocsImg}
                    alt="Documentação técnica de inspeção"
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-elevated group">
                  <img
                    src={factoryImg}
                    alt="Interior de fábrica com equipamentos industriais"
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 lg:-right-8 z-20 bg-primary rounded-2xl p-5 shadow-elevated border-4 border-card">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-cta">10+</div>
                  <p className="text-xs font-bold text-primary-foreground leading-tight mt-1">
                    Anos de<br/>Experiência
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Content */}
            <RevealSection variant="right" className="lg:col-span-7 lg:pl-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                Por que a VSM
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Segurança e conformidade{" "}
                <span className="relative inline-block">
                  <span className="text-cta">sem complicação</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cta to-cta/50 rounded-full" />
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Somos uma empresa de engenharia mecânica com atuação no <strong className="text-foreground">Sudeste do Brasil</strong>, 
                comprometida com a segurança, qualidade e conformidade normativa de cada projeto.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Elaboramos laudos técnicos e <strong className="text-foreground">memoriais de cálculo detalhados</strong>, garantindo 
                que seus equipamentos operem dentro das normas vigentes com máxima segurança.
              </p>

              {/* Feature list with connecting line */}
              <div className="relative mb-8">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
                <div className="space-y-5">
                  {[
                    { icon: Shield, num: "01", title: "Laudos Robustos", desc: "Memoriais de cálculo detalhados e documentação com ART registrada." },
                    { icon: Clock, num: "02", title: "Agilidade", desc: "Prazos cumpridos e resposta em até 2 horas para orçamentos." },
                    { icon: BadgeCheck, num: "03", title: "Conformidade Total", desc: "Adequação completa às NR13, NR12, NR11 e legislações vigentes." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-5 group relative">
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1 pt-0.5">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-bold text-primary/40">{item.num}</span>
                          <div className="h-px flex-1 bg-border max-w-[40px]" />
                        </div>
                        <h4 className="font-bold text-foreground mb-0.5 group-hover:text-cta transition-colors">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl">
                <Link to="/sobre">
                  Conheça nossa história <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ RISKS / EVITE PREJUÍZOS ═══ */}
      <section className="relative bg-gradient-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="risk-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#risk-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <RevealSection className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/20 text-destructive-foreground text-xs font-bold uppercase tracking-wider mb-6">
                <AlertTriangle className="h-3.5 w-3.5" />
                Atenção
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
                Sua empresa está <span className="text-cta">protegida</span>?
              </h2>
              <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto">
                Empresas sem inspeções em dia estão expostas a riscos sérios que podem custar caro.
              </p>
            </RevealSection>

            <RevealSection stagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {risks.map((r) => (
                  <div key={r.text} className="group flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="h-12 w-12 rounded-xl bg-destructive/20 flex items-center justify-center shrink-0">
                      <r.icon className="h-5 w-5 text-destructive-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-foreground mb-1">{r.text}</h3>
                      <span className="text-sm text-cta/80 font-medium">{r.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection className="text-center mt-12">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold text-base px-10 h-14 rounded-xl shadow-lg shadow-cta/30 transition-all hover:-translate-y-0.5">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Proteger minha empresa agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase mb-4">
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Do contato ao laudo,{" "}
              <span className="text-cta">sem burocracia</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Um processo claro e ágil para você ter tranquilidade.
            </p>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step, i) => (
                <div key={i} className="relative group">
                  {/* Connector */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[70%] w-[60%] border-t-2 border-dashed border-primary/15" />
                  )}
                  <div className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-elevated hover:border-cta/20 transition-all duration-300 hover:-translate-y-1">
                    <span className="text-4xl font-extrabold text-primary/10 block mb-3">{step.num}</span>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-cta transition-colors">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══ BLOG PREVIEW ═══ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-card">
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                Conteúdo Técnico
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Artigos que informam e <span className="text-cta">protegem</span>
              </h2>
            </div>
            <Button asChild variant="outline" className="border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-xl self-start lg:self-auto">
              <Link to="/blog">
                Ver todos <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <Link
                  key={post.title}
                  to={post.href}
                  className="group bg-background rounded-2xl border border-border/60 overflow-hidden hover:shadow-elevated hover:border-cta/20 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image placeholder with gradient */}
                  <div className="h-48 bg-gradient-to-br from-primary/8 to-secondary relative overflow-hidden">
                    <div className="absolute inset-0 pattern-grid opacity-50" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-cta group-hover:text-cta-foreground transition-colors duration-300">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold leading-snug group-hover:text-cta transition-colors duration-300">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="relative bg-gradient-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-10 left-[5%] w-64 h-64 opacity-[0.04]" viewBox="0 0 200 200">
            <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
          <svg className="absolute bottom-10 right-[8%] w-48 h-48 opacity-[0.04]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="1" />
          </svg>
          <div className="absolute top-0 right-[30%] w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-sm text-primary-foreground/80 mb-8">
              <Zap className="h-4 w-4 text-cta" />
              Resposta em até 2h
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Pronto para garantir a conformidade da sua empresa?
            </h2>
            <p className="text-lg text-primary-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Fale diretamente com um engenheiro especialista. Avaliação inicial gratuita e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold text-base px-8 h-14 rounded-xl shadow-lg shadow-cta/30 transition-all hover:-translate-y-0.5">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Falar com Engenheiro
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white/20 text-primary-foreground hover:bg-white/10 font-semibold text-base h-14 rounded-xl transition-all hover:-translate-y-0.5">
                <Link to="/contato">Enviar mensagem</Link>
              </Button>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
