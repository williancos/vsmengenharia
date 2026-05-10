import { useState, useCallback, useEffect } from "react";
import {
  Building2, Users, Award, Shield, Phone, CheckCircle2, BadgeCheck,
  Star, Quote, ArrowRight, ChevronRight, Clock, Gauge, FileCheck,
  Truck, Factory, MapPin, Target, Zap, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { clientLogos } from "@/components/ClientLogos";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import useEmblaCarousel from "embla-carousel-react";

import caseIndustrialImg from "@/assets/case-industrial.jpg";
import caseFoodImg from "@/assets/case-food-factory.jpg";
import caseTransportImg from "@/assets/case-transport.jpg";
import teamImg from "@/assets/team-engineers.jpg";

/* ── Data ── */

const stats = [
  { value: 500, suffix: "+", label: "Inspeções realizadas", icon: BadgeCheck },
  { value: 150, suffix: "+", label: "Empresas atendidas", icon: Factory },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 100, suffix: "%", label: "Satisfação dos clientes", icon: Shield },
];

const testimonials = [
  {
    quote: "A VSM foi essencial para regularizar todas as nossas caldeiras. O laudo ficou pronto antes do prazo e nos livrou de uma autuação iminente.",
    name: "Carlos Mendes",
    role: "Gerente Industrial",
    company: "Indústria Metalúrgica SP",
  },
  {
    quote: "Precisávamos da reclassificação de monta urgente e a VSM entregou com agilidade e profissionalismo. Recomendo sem hesitar.",
    name: "Ana Paula Ferreira",
    role: "Diretora Administrativa",
    company: "Transportadora Fênix",
  },
  {
    quote: "A equipe técnica é extremamente qualificada. Fizeram a adequação NR12 de toda a nossa linha de produção sem parar a operação.",
    name: "Roberto Lima",
    role: "Coordenador de Segurança",
    company: "Fábrica de Alimentos RJ",
  },
  {
    quote: "Contratamos a VSM para inspeção NR11 de toda a frota de empilhadeiras. Profissionalismo do início ao fim.",
    name: "Marcos Tavares",
    role: "Supervisor de Logística",
    company: "Centro de Distribuição MG",
  },
  {
    quote: "O PMOC ficou impecável e nos deixou em total conformidade com a Lei 13.589. Atendimento muito atencioso.",
    name: "Fernanda Souza",
    role: "Gerente de Facilities",
    company: "Rede de Clínicas ES",
  },
  {
    quote: "Os projetos mecânicos que a VSM entregou superaram as expectativas. Memorial de cálculo detalhado e ART registrada sem atrasos.",
    name: "João Henrique Costa",
    role: "Engenheiro de Manutenção",
    company: "Siderúrgica MG",
  },
];

const cases = [
  {
    image: caseIndustrialImg,
    tag: "Industrial",
    title: "Planta Industrial — Grande SP",
    desc: "Inspeção completa NR13 de 12 vasos de pressão e 3 caldeiras, com emissão de laudos e prontuários em tempo recorde.",
    stats: [
      { icon: Gauge, value: "15", label: "Equipamentos" },
      { icon: Clock, value: "30 dias", label: "Prazo" },
      { icon: Shield, value: "100%", label: "Conformidade" },
    ],
  },
  {
    image: caseFoodImg,
    tag: "Alimentício",
    title: "Fábrica de Alimentos — RJ",
    desc: "Adequação NR12 completa de linha de produção com 22 máquinas, sem interrupção da operação.",
    stats: [
      { icon: Gauge, value: "22", label: "Máquinas" },
      { icon: Clock, value: "45 dias", label: "Prazo" },
      { icon: Shield, value: "100%", label: "Conformidade" },
    ],
  },
  {
    image: caseTransportImg,
    tag: "Transporte",
    title: "Transportadora Fênix — MG",
    desc: "Reclassificação de monta de 8 veículos sinistrados com laudo técnico e aprovação no DETRAN.",
    stats: [
      { icon: Truck, value: "8", label: "Veículos" },
      { icon: Clock, value: "20 dias", label: "Prazo" },
      { icon: FileCheck, value: "100%", label: "Aprovação" },
    ],
  },
];

const segments = [
  { icon: Factory, title: "Indústrias", desc: "Metalúrgicas, siderúrgicas, químicas e alimentícias" },
  { icon: Truck, title: "Transportadoras", desc: "Reclassificação de monta e NR11 para frotas" },
  { icon: Building2, title: "Comércio & Serviços", desc: "PMOC, climatização e inspeções técnicas" },
  { icon: Zap, title: "Energia", desc: "Caldeiras, vasos de pressão e tubulações" },
  { icon: Target, title: "Agronegócio", desc: "Equipamentos de beneficiamento e armazéns" },
  { icon: TrendingUp, title: "Logística", desc: "Empilhadeiras, pontes rolantes e plataformas" },
];

/* ── Carousel hook ── */

function useCarousel(count: number, autoplayMs = 5000) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    const interval = setInterval(() => emblaApi.scrollNext(), autoplayMs);
    return () => { clearInterval(interval); emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect, autoplayMs]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return { emblaRef, selected, scrollPrev, scrollNext, scrollTo };
}

function CarouselDots({ count, selected, onDot }: { count: number; selected: number; onDot: (i: number) => void }) {
  return (
    <div className="flex gap-2 items-center">
      {Array.from({ length: count }).map((_, i) => (
        <button key={i} onClick={() => onDot(i)} className={`h-2 rounded-full transition-all duration-300 ${i === selected ? "w-6 bg-cta" : "w-2 bg-white/20 hover:bg-white/40"}`} />
      ))}
    </div>
  );
}

function CarouselNav({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex gap-2">
      <button onClick={onPrev} className="h-9 w-9 rounded-lg border border-white/15 flex items-center justify-center text-primary-foreground/60 hover:bg-white/10 hover:text-primary-foreground transition-colors">
        <ChevronRight className="h-4 w-4 rotate-180" />
      </button>
      <button onClick={onNext} className="h-9 w-9 rounded-lg border border-white/15 flex items-center justify-center text-primary-foreground/60 hover:bg-white/10 hover:text-primary-foreground transition-colors">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ── Page ── */

export default function Clientes() {
  const testimonialCarousel = useCarousel(testimonials.length);
  const casesCarousel = useCarousel(cases.length, 7000);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={teamImg} alt="Equipe de engenheiros VSM Engenharia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
          <div className="absolute inset-0 pattern-dots opacity-10" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Nossos Clientes</span>
              <span className="bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">⭐ 5.0 — Avaliações Google</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.05] text-white">
              Empresas que{" "}
              <span className="text-cta relative">
                confiam
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">na excelência técnica da VSM Engenharia</span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
              Indústrias, transportadoras e empresas de diversos segmentos que escolheram a segurança e conformidade para suas operações.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["150+ Empresas", "500+ Inspeções", "Todo Sudeste", "100% Satisfação"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8 h-14 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:shadow-[0_8px_28px_-4px_hsl(var(--cta)/0.55)] transition-all hover:scale-[1.02]">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5 mr-2" /> Faça Parte Dessa Lista
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary font-semibold px-8 h-14 rounded-full border border-white/30 hover:bg-white/90 transition-all">
                <a href="#depoimentos">Ver Depoimentos →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="bg-card border-b border-border relative z-10 -mt-1">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <s.icon className="h-6 w-6 text-cta opacity-70" />
                  <span className="text-3xl md:text-4xl font-black text-cta">
                    <CountUp end={s.value} />{s.suffix}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SEGMENTOS DE ATUAÇÃO ═══ */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Segmentos</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Setores que Atendemos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Nossa experiência abrange os principais segmentos industriais e comerciais do Sudeste.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {segments.map((s) => (
                <div key={s.title} className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elevated transition-all duration-300 border hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cta/10 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <s.icon className="h-7 w-7 text-cta" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ═══ LOGO GRID ═══ */}
      <RevealSection>
        <section className="py-16 md:py-24 bg-secondary pattern-grid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Portfólio</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Clientes & Parceiros</h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-lg">
                Cada logo representa uma história de confiança, segurança e conformidade técnica.
              </p>
            </div>

            <RevealSection stagger>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
                {clientLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="group flex items-center justify-center h-24 md:h-28 px-5 py-4 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg hover:border-cta/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>
      </RevealSection>

      {/* ═══ DEPOIMENTOS ═══ */}
      <section id="depoimentos" className="relative pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs><pattern id="dep-grid-c" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" /></pattern></defs>
            <rect width="100" height="100" fill="url(#dep-grid-c)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 text-primary-foreground/70 text-xs font-bold tracking-wider uppercase mb-3">
                Depoimentos
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-foreground">
                O que nossos <span className="text-cta">clientes</span> dizem
              </h2>
              <p className="text-primary-foreground/50 mt-1 text-sm">Relatos reais de empresas que confiam na VSM Engenharia.</p>
            </div>
            <div className="flex items-center gap-4">
              <CarouselDots count={testimonials.length} selected={testimonialCarousel.selected} onDot={testimonialCarousel.scrollTo} />
              <CarouselNav onPrev={testimonialCarousel.scrollPrev} onNext={testimonialCarousel.scrollNext} />
            </div>
          </RevealSection>

          <RevealSection>
            <div className="overflow-hidden" ref={testimonialCarousel.emblaRef}>
              <div className="flex gap-5">
                {testimonials.map((t) => (
                  <div key={t.name} className="flex-[0_0_100%] sm:flex-[0_0_48%] md:flex-[0_0_31.5%] min-w-0">
                    <div className="bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/[0.08] p-6 h-full hover:bg-white/[0.1] transition-all duration-300">
                      <Quote className="h-5 w-5 text-cta/50 mb-3" />
                      <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5 italic">"{t.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-cta/20 flex items-center justify-center text-cta font-bold text-sm shrink-0">
                          {t.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-sm text-primary-foreground">{t.name}</span>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-cta text-cta" />
                              ))}
                            </div>
                          </div>
                          <span className="text-xs text-primary-foreground/40">{t.role} · {t.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══ CASES DE SUCESSO ═══ */}
      <section className="relative pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs><pattern id="cases-grid-c" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" /></pattern></defs>
            <rect width="100" height="100" fill="url(#cases-grid-c)" />
          </svg>
        </div>
        <svg className="absolute -top-10 -right-10 w-48 h-48 opacity-[0.04]" viewBox="0 0 200 200"><polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="white" strokeWidth="1.5" /></svg>
        <svg className="absolute -bottom-12 -left-12 w-56 h-56 opacity-[0.04]" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1.5" /><circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="1" /></svg>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 text-primary-foreground/70 text-xs font-bold tracking-wider uppercase mb-3">
                Portfólio
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-foreground">
                Cases de <span className="text-cta">sucesso</span>
              </h2>
              <p className="text-primary-foreground/50 mt-1 text-sm max-w-lg">Projetos reais e os resultados que entregamos.</p>
            </div>
            <div className="flex items-center gap-4">
              <CarouselDots count={cases.length} selected={casesCarousel.selected} onDot={casesCarousel.scrollTo} />
              <CarouselNav onPrev={casesCarousel.scrollPrev} onNext={casesCarousel.scrollNext} />
            </div>
          </RevealSection>

          <RevealSection>
            <div className="overflow-hidden" ref={casesCarousel.emblaRef}>
              <div className="flex gap-5">
                {cases.map((c) => (
                  <div key={c.title} className="flex-[0_0_100%] min-w-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white/[0.04] rounded-2xl border border-white/[0.08] overflow-hidden">
                      <div className="relative h-56 lg:h-auto min-h-[260px]">
                        <img src={c.image} alt={c.title} loading="lazy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-cta text-cta-foreground text-xs font-bold">{c.tag}</span>
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-extrabold text-primary-foreground mb-2">{c.title}</h3>
                        <p className="text-sm text-primary-foreground/60 leading-relaxed mb-5">{c.desc}</p>
                        <div className="grid grid-cols-3 gap-3 mb-5">
                          {c.stats.map((s) => (
                            <div key={s.label} className="bg-white/[0.06] rounded-lg p-3 text-center border border-white/[0.06]">
                              <s.icon className="h-4 w-4 text-cta mx-auto mb-1" />
                              <div className="text-base font-extrabold text-primary-foreground">{s.value}</div>
                              <div className="text-[10px] text-primary-foreground/40 font-medium">{s.label}</div>
                            </div>
                          ))}
                        </div>
                        <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-full w-fit px-6 text-sm shadow-[0_8px_24px_-4px_hsl(var(--cta)/0.5)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-4px_hsl(var(--cta)/0.6)] transition-all duration-300">
                          <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                            Quero um projeto assim <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══ NÚMEROS QUE COMPROVAM ═══ */}
      <RevealSection>
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Resultados</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Números que Comprovam</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossa trajetória é medida pela confiança dos nossos clientes e pela qualidade dos resultados entregues.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: 500, suffix: "+", label: "Laudos emitidos", icon: FileCheck },
                { value: 8, suffix: "+", label: "Estados atendidos", icon: MapPin },
                { value: 0, suffix: "zero", label: "Laudos reprovados", icon: Shield },
                { value: 10, suffix: "+", label: "Anos no mercado", icon: Award },
              ].map((n) => (
                <div key={n.label} className="bg-card rounded-2xl border p-6 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <n.icon className="h-8 w-8 text-cta mx-auto mb-3" />
                  <div className="text-3xl font-black text-cta mb-1">
                    {n.suffix === "zero" ? "Zero" : <><CountUp end={n.value} />{n.suffix}</>}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{n.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ═══ CTA FINAL ═══ */}
      <section className="relative py-0 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative bg-primary rounded-2xl px-8 py-10 md:py-14 md:px-14 my-16 overflow-hidden">
            <svg className="absolute -top-10 -left-10 w-40 h-40 opacity-[0.06]" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="2" /></svg>
            <svg className="absolute -bottom-12 -right-12 w-56 h-56 opacity-[0.06]" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="2" /><circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1.5" /></svg>
            <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3">
                Faça parte dessa <span className="text-cta">lista de sucesso</span>
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/60 mb-6 max-w-lg mx-auto">
                Solicite uma consultoria gratuita e descubra como a VSM pode garantir a conformidade da sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" variant="outline" className="border border-white/30 bg-white/[0.06] text-primary-foreground hover:bg-white/15 font-semibold rounded-full h-12 px-7 transition-all duration-300 hover:-translate-y-0.5">
                  <Link to="/contato">
                    <MapPin className="mr-2 h-4 w-4" />
                    Fale Conosco
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold rounded-full h-12 px-7 shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-4px_hsl(var(--cta)/0.55)]">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
