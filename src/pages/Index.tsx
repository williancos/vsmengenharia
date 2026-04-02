import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield, FileCheck, AlertTriangle, CheckCircle2, Users, Award,
  Wrench, ClipboardCheck, Truck, Wind, HardHat, Search, ArrowRight,
  TrendingUp, BadgeCheck, Clock, DollarSign, Scale, Phone, ChevronRight,
  Zap, Target, BarChart3
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import { HeroBackground, SectionDividerWave, SectionDividerAngle, DecoGrid, DecoCircles, FloatingBadge } from "@/components/Decorations";

const services = [
  { icon: ClipboardCheck, title: "NR13", desc: "Inspeções, laudos, prontuários e livro de registro para caldeiras e vasos de pressão.", href: "/servicos/nr13", accent: "from-blue-500/10 to-blue-600/5" },
  { icon: Shield, title: "NR12", desc: "Análise de risco (APR), relatório técnico e adequação de máquinas e equipamentos.", href: "/servicos/nr12", accent: "from-indigo-500/10 to-indigo-600/5" },
  { icon: HardHat, title: "NR11 / Plano de Rigging", desc: "Inspeções técnicas e planos de rigging para equipamentos de içamento.", href: "/servicos/nr11", accent: "from-sky-500/10 to-sky-600/5" },
  { icon: Wind, title: "PMOC", desc: "Plano de manutenção, operação e controle conforme Lei 13.589.", href: "/servicos/pmoc", accent: "from-cyan-500/10 to-cyan-600/5" },
  { icon: Truck, title: "Reclassificação de Monta", desc: "Reclassificação de veículos sinistrados junto ao DETRAN com laudo técnico.", href: "/servicos/reclassificacao-de-monta", accent: "from-amber-500/10 to-amber-600/5" },
  { icon: Search, title: "Inspeções Técnicas", desc: "Inspeções em máquinas, estruturas metálicas, climatização e perícias.", href: "/servicos/inspecoes-tecnicas", accent: "from-emerald-500/10 to-emerald-600/5" },
  { icon: Wrench, title: "Projetos Mecânicos", desc: "Desenvolvimento de proteções, máquinas e equipamentos sob medida.", href: "/servicos/projetos-mecanicos", accent: "from-violet-500/10 to-violet-600/5" },
  { icon: Wind, title: "Projetos de Climatização", desc: "Projetos HVAC e sistemas de climatização industrial e comercial.", href: "/servicos/projetos-climatizacao", accent: "from-teal-500/10 to-teal-600/5" },
  { icon: FileCheck, title: "Consultoria Gratuita", desc: "Avaliação gratuita de conformidade normativa para sua empresa.", href: "/servicos/consultoria-gratuita", accent: "from-orange-500/10 to-orange-600/5" },
];

const benefits = [
  { icon: Shield, title: "Segurança Garantida", desc: "Prevenção de acidentes e proteção dos seus colaboradores com laudos rigorosos." },
  { icon: Scale, title: "Conformidade Legal", desc: "Adequação completa às normas NR13, NR12, NR11 e legislações vigentes." },
  { icon: TrendingUp, title: "Eficiência Operacional", desc: "Aumento da vida útil dos equipamentos e redução de paradas não programadas." },
  { icon: Clock, title: "Agilidade nos Prazos", desc: "Laudos e relatórios entregues dentro do prazo combinado, sem surpresas." },
  { icon: DollarSign, title: "Custo-Benefício Real", desc: "Investimento que evita multas, interdições e prejuízos muito maiores." },
  { icon: BadgeCheck, title: "Laudos Robustos", desc: "Memoriais de cálculo detalhados e documentação técnica de excelência." },
];

const risks = [
  { icon: DollarSign, text: "Multas pesadas do Ministério do Trabalho", value: "R$ 6.708 a R$ 402.522" },
  { icon: AlertTriangle, text: "Interdição de equipamentos e linhas de produção", value: "Parada total" },
  { icon: Users, text: "Acidentes graves com colaboradores", value: "Risco de vida" },
  { icon: Scale, text: "Ações judiciais e indenizações trabalhistas", value: "Alto impacto" },
];

const stats = [
  { value: 500, suffix: "+", label: "Inspeções realizadas" },
  { value: 150, suffix: "+", label: "Empresas atendidas" },
  { value: 10, suffix: "+", label: "Anos de experiência" },
  { value: 100, suffix: "%", label: "Laudos aprovados" },
];

const blogPosts = [
  { title: "Checklist prático para contratar inspeção NR-13 com segurança", category: "NR13", href: "/blog", color: "bg-blue-50 text-blue-700" },
  { title: "Os 7 erros mais comuns na elaboração de Planos de Rigging", category: "NR11", href: "/blog", color: "bg-sky-50 text-sky-700" },
  { title: "Reclassificação de Monta x Baixa Definitiva: qual a melhor opção?", category: "Reclassificação", href: "/blog", color: "bg-amber-50 text-amber-700" },
];

const processSteps = [
  { icon: Phone, title: "1. Contato", desc: "Fale com nosso engenheiro e descreva sua necessidade." },
  { icon: Search, title: "2. Diagnóstico", desc: "Avaliamos sua situação e identificamos as normas aplicáveis." },
  { icon: ClipboardCheck, title: "3. Inspeção", desc: "Realizamos a inspeção em campo com rigor técnico." },
  { icon: FileCheck, title: "4. Entrega", desc: "Laudo técnico completo com ART e memorial de cálculo." },
];

export default function Index() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating badge */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              <FloatingBadge className="mb-8">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-muted-foreground">Avaliação gratuita disponível</span>
              </FloatingBadge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Inspeções{" "}
              <span className="relative inline-block">
                <span className="gradient-text">NR13, NR12 e NR11</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-cta/30" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,8 Q75,0 150,8 Q225,16 300,8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              com laudos completos para sua indústria
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Garantimos <strong className="text-foreground">segurança</strong>, <strong className="text-foreground">conformidade</strong> e{" "}
              <strong className="text-foreground">redução de riscos</strong> em máquinas, estruturas e veículos. 
              Reclassificação de monta, projetos mecânicos e consultoria no Sudeste.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold text-base px-8 h-14 rounded-xl shadow-lg shadow-cta/25 hover:shadow-xl hover:shadow-cta/30 transition-all hover:-translate-y-0.5">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Solicitar Avaliação Gratuita
                  <ArrowRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base h-14 rounded-xl transition-all hover:-translate-y-0.5">
                <a href="#servicos">
                  Ver Serviços
                </a>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              {[
                { icon: Shield, text: "Laudos com ART" },
                { icon: Clock, text: "Atendimento ágil" },
                { icon: Award, text: "Engenheiros CREA" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="h-4 w-4 text-success" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 pattern-diagonal" style={{ filter: "invert(1)" }} />
        </div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={s.label} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cta mb-1">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm md:text-base text-primary-foreground/60 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="servicos" className="relative py-20 md:py-28 overflow-hidden">
        <DecoGrid />
        <DecoCircles className="absolute -right-40 top-20 w-[500px] h-[500px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-cta mb-3">O que fazemos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Nossos Serviços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Soluções completas em engenharia mecânica para manter sua operação segura e em conformidade.
            </p>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className={`group relative bg-card rounded-2xl border border-border/60 p-7 hover:shadow-2xl hover:shadow-primary/5 hover:border-cta/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
                >
                  {/* Accent gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-cta transition-colors duration-300">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-cta group-hover:gap-2 transition-all duration-300">
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════════════════════════════ */}
      <SectionDividerWave color="secondary" />
      <section className="bg-secondary relative py-20 md:py-24 overflow-hidden">
        <DecoCircles className="absolute -left-32 bottom-0 w-[400px] h-[400px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-cta mb-3">Simples e ágil</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Como Funciona</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Do primeiro contato ao laudo entregue, em 4 passos claros.
            </p>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center group">
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/20 to-primary/5" />
                  )}
                  <div className="relative inline-flex mb-5">
                    <div className="h-16 w-16 rounded-2xl bg-card shadow-md border border-border/60 flex items-center justify-center group-hover:shadow-lg group-hover:border-cta/30 transition-all duration-300">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>
      <SectionDividerWave flip color="secondary" />

      {/* ══════════════════════════════════════════════════════════════════
          EVITE PREJUÍZOS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <RevealSection className="text-center mb-12">
              <FloatingBadge className="mb-6 border-destructive/20 bg-destructive/5">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <span className="text-destructive font-semibold">Atenção</span>
              </FloatingBadge>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Evite <span className="text-destructive">Prejuízos</span> na sua empresa
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Empresas sem inspeções em dia estão expostas a riscos sérios. Não espere a fiscalização chegar.
              </p>
            </RevealSection>

            <RevealSection stagger>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {risks.map((r) => (
                  <div key={r.text} className="group flex items-start gap-4 bg-card rounded-2xl border border-border/60 p-6 hover:border-destructive/20 hover:shadow-lg hover:shadow-destructive/5 transition-all duration-300">
                    <div className="h-12 w-12 rounded-xl bg-destructive/8 flex items-center justify-center shrink-0 group-hover:bg-destructive/12 transition-colors">
                      <r.icon className="h-5 w-5 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{r.text}</h3>
                      <span className="text-sm text-destructive/80 font-medium">{r.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection className="text-center mt-10">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold text-base px-8 h-14 rounded-xl shadow-lg shadow-cta/25 hover:shadow-xl hover:shadow-cta/30 transition-all hover:-translate-y-0.5">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Solicitar Avaliação Gratuita
                  <ArrowRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          BENEFITS
      ══════════════════════════════════════════════════════════════════ */}
      <SectionDividerAngle color="secondary" />
      <section className="bg-secondary relative py-20 md:py-28 overflow-hidden">
        <DecoCircles className="absolute -right-48 top-10 w-[600px] h-[600px]" />

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-success mb-3">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ao escolher a VSM, você garante
            </h2>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className="group bg-card rounded-2xl border border-border/60 p-7 hover:shadow-xl hover:shadow-success/5 hover:border-success/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="h-11 w-11 rounded-xl bg-success/10 flex items-center justify-center shrink-0 group-hover:bg-success/15 transition-colors">
                      <b.icon className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{b.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>
      <SectionDividerAngle flip color="secondary" />

      {/* ══════════════════════════════════════════════════════════════════
          BLOG
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <DecoGrid />

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-cta mb-3">Conteúdo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Conteúdos em Destaque</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Artigos técnicos para manter você informado sobre normas e segurança industrial.
            </p>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {blogPosts.map((post) => (
                <Link key={post.title} to={post.href} className="group bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-xl hover:border-cta/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="h-44 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-40" />
                    <div className="relative">
                      <div className="h-16 w-16 rounded-2xl bg-card/80 backdrop-blur-sm shadow-sm flex items-center justify-center">
                        <FileCheck className="h-8 w-8 text-primary/40" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${post.color}`}>{post.category}</span>
                    <h3 className="text-base font-bold mt-4 group-hover:text-cta transition-colors duration-300 leading-snug">{post.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-cta mt-4 group-hover:gap-2 transition-all duration-300">
                      Ler artigo <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </RevealSection>

          <RevealSection className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-xl transition-all hover:-translate-y-0.5">
              <Link to="/blog">Ver todos os artigos</Link>
            </Button>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ABOUT PREVIEW
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-card relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pattern-diagonal opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection variant="left">
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-cta mb-3">Quem somos</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Sobre a VSM Engenharia</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Somos uma empresa de engenharia mecânica com atuação no Sudeste do Brasil, 
                comprometida com a segurança, qualidade e conformidade normativa.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Elaboramos laudos técnicos e memoriais de cálculo detalhados, garantindo 
                que seus equipamentos operem dentro das normas vigentes com máxima segurança.
              </p>
              <Button asChild variant="outline" className="border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-xl">
                <Link to="/sobre">
                  Conheça nossa história <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </RevealSection>

            <RevealSection variant="right">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Award, label: "Qualidade", desc: "Laudos rigorosos e detalhados" },
                  { icon: Shield, label: "Segurança", desc: "Prevenção de acidentes" },
                  { icon: Users, label: "Ética", desc: "Transparência em cada projeto" },
                  { icon: TrendingUp, label: "Eficiência", desc: "Prazos cumpridos sempre" },
                ].map((v) => (
                  <div key={v.label} className="group bg-background rounded-2xl border border-border/60 p-5 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                      <v.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-sm mb-1">{v.label}</h3>
                    <p className="text-xs text-muted-foreground">{v.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-10 left-[5%] w-64 h-64 animate-float opacity-[0.05]" viewBox="0 0 200 200">
            <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
          <svg className="absolute bottom-10 right-[8%] w-48 h-48 animate-float-slow opacity-[0.05]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="1" />
          </svg>
          <div className="absolute top-0 right-[30%] w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="text-center max-w-3xl mx-auto">
            <FloatingBadge className="mb-8 border-primary-foreground/10 bg-primary-foreground/5">
              <Zap className="h-4 w-4 text-cta" />
              <span className="text-primary-foreground/80">Resposta em até 2h</span>
            </FloatingBadge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Pronto para garantir a conformidade da sua empresa?
            </h2>
            <p className="text-lg text-primary-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Fale diretamente com um engenheiro especialista. Avaliação inicial gratuita e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold text-base px-8 h-14 rounded-xl shadow-lg shadow-cta/25 hover:shadow-xl hover:shadow-cta/30 transition-all hover:-translate-y-0.5">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Falar com Engenheiro
                  <ArrowRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base h-14 rounded-xl transition-all hover:-translate-y-0.5">
                <Link to="/contato">Enviar mensagem</Link>
              </Button>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
