import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield, FileCheck, AlertTriangle, CheckCircle2, Users, Award,
  Wrench, ClipboardCheck, Truck, Wind, HardHat, Search, ArrowRight,
  TrendingUp, BadgeCheck, Clock, DollarSign, Scale, Phone, ChevronRight,
  Zap, Target, BarChart3, ArrowUpRight, CircleCheck, Star, Quote, Droplets, Gauge, Ruler,
  Mail, MapPin, Send, Building2
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";

import heroImg from "@/assets/hero-inspection.jpg";
import inspectionDocsImg from "@/assets/inspection-documents.jpg";
import factoryImg from "@/assets/factory-interior.jpg";
import riggingImg from "@/assets/rigging-crane.jpg";
import teamImg from "@/assets/team-engineers.jpg";
import vehicleImg from "@/assets/vehicle-inspection.jpg";
import pmocImg from "@/assets/pmoc-hvac.jpg";
import technicalImg from "@/assets/technical-inspection.jpg";
import climatizacaoImg from "@/assets/climatizacao-project.jpg";
import consultoriaImg from "@/assets/consultoria-meeting.jpg";
import caseIndustrialImg from "@/assets/case-industrial.jpg";
import caseFoodImg from "@/assets/case-food-factory.jpg";
import caseTransportImg from "@/assets/case-transport.jpg";
import blogNr13Img from "@/assets/blog-nr13.jpg";
import blogRiggingImg from "@/assets/blog-rigging.jpg";
import blogVehicleImg from "@/assets/blog-vehicle.jpg";
import useEmblaCarousel from "embla-carousel-react";

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
  {
    title: "Projetos Mecânicos",
    desc: "Projetos de proteções, estruturas metálicas e equipamentos industriais sob medida com memorial de cálculo.",
    image: teamImg,
    href: "/servicos/projetos-mecanicos",
    tags: ["Estrutural", "Memorial", "ART"],
  },
  {
    title: "PMOC",
    desc: "Plano de Manutenção, Operação e Controle de climatização conforme Lei 13.589 e ABNT.",
    image: pmocImg,
    tags: ["Lei 13.589", "ABNT", "HVAC"],
  },
  {
    title: "Inspeções Técnicas",
    desc: "Inspeção de máquinas, estruturas metálicas e sistemas de climatização com relatório detalhado.",
    image: technicalImg,
    href: "/servicos/inspecoes-tecnicas",
    tags: ["Máquinas", "Estruturas", "Laudo"],
  },
  {
    title: "Projetos de Climatização",
    desc: "Projetos HVAC industriais e comerciais com dimensionamento térmico e memorial de cálculo.",
    image: climatizacaoImg,
    href: "/servicos/projetos-climatizacao",
    tags: ["HVAC", "Projeto", "Industrial"],
  },
  {
    title: "Consultoria Gratuita",
    desc: "Diagnóstico inicial de conformidade normativa sem custo. Identifique riscos antes da autuação.",
    image: consultoriaImg,
    href: "/servicos/consultoria-gratuita",
    tags: ["Grátis", "Diagnóstico", "NR"],
  },
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
  { title: "Checklist prático para contratar inspeção NR-13 com segurança", category: "NR13", href: "/blog", image: blogNr13Img },
  { title: "Os 7 erros mais comuns na elaboração de Planos de Rigging", category: "NR11", href: "/blog", image: blogRiggingImg },
  { title: "Reclassificação de Monta x Baixa Definitiva: qual escolher?", category: "Veículos", href: "/blog", image: blogVehicleImg },
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
        <button
          key={i}
          onClick={() => onDot(i)}
          className={`h-2 rounded-full transition-all duration-300 ${i === selected ? "w-6 bg-cta" : "w-2 bg-white/20 hover:bg-white/40"}`}
        />
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

function TestimonialsCarousel() {
  const { emblaRef, selected, scrollPrev, scrollNext, scrollTo } = useCarousel(testimonials.length);

  return (
    <section className="relative pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs><pattern id="dep-grid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" /></pattern></defs>
          <rect width="100" height="100" fill="url(#dep-grid)" />
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
            <p className="text-primary-foreground/50 mt-1 text-sm">Empresas que confiam na VSM Engenharia.</p>
          </div>
          <div className="flex items-center gap-4">
            <CarouselDots count={testimonials.length} selected={selected} onDot={scrollTo} />
            <CarouselNav onPrev={scrollPrev} onNext={scrollNext} />
          </div>
        </RevealSection>

        <RevealSection>
          <div className="overflow-hidden" ref={emblaRef}>
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
  );
}

function CasesCarousel() {
  const { emblaRef, selected, scrollPrev, scrollNext, scrollTo } = useCarousel(cases.length, 7000);

  return (
    <section className="relative pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs><pattern id="cases-grid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" /></pattern></defs>
          <rect width="100" height="100" fill="url(#cases-grid)" />
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
            <p className="text-primary-foreground/50 mt-1 text-sm max-w-lg">Projetos que realizamos e os resultados alcançados.</p>
          </div>
          <div className="flex items-center gap-4">
            <CarouselDots count={cases.length} selected={selected} onDot={scrollTo} />
            <CarouselNav onPrev={scrollPrev} onNext={scrollNext} />
          </div>
        </RevealSection>

        <RevealSection>
          <div className="overflow-hidden" ref={emblaRef}>
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
                      <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl w-fit px-6 text-sm">
                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                          Quero um projeto assim <ArrowRight className="ml-2 h-4 w-4" />
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
  );
}

export default function Index() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Full-screen background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Engenheiro realizando inspeção em vaso de pressão industrial"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/30" />
        </div>
        {/* LEFT — Content panel */}
        <div className="relative z-10 w-full lg:w-[55%] xl:w-[50%] flex items-center min-h-[100vh]">
          <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 py-24 lg:py-0 w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
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
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-extrabold italic text-base px-10 h-16 rounded-xl shadow-[0_8px_30px_-4px_hsl(var(--cta)/0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-4px_hsl(var(--cta)/0.6)]">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  AGENDE SUA AVALIAÇÃO GRATUITA
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-base h-16 px-10 rounded-xl transition-all duration-300 hover:-translate-y-1">
                <a href="#servicos">VER SERVIÇOS</a>
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

        {/* Floating credential cards — positioned on the right side */}
        <div className="absolute bottom-8 right-6 lg:bottom-16 lg:right-12 z-10 flex flex-col gap-3 max-w-xs animate-fade-in" style={{ animationDelay: "550ms" }}>
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
        <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden xl:flex items-center z-10">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[320px]">
              {pillarServices.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer"
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
      <section className="relative bg-gradient-primary py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
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
            <RevealSection className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-3 leading-tight">
                Sua empresa está <span className="text-cta">protegida</span>?
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/50 max-w-xl mx-auto">
                <strong className="text-primary-foreground/70">40% das autuações</strong> são por falta de documentação técnica. Evite multas e interdições.
              </p>
            </RevealSection>

            <RevealSection stagger className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {risks.map((r) => (
                  <div
                    key={r.text}
                    className="group flex items-center gap-4 bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/[0.08] px-5 py-4 hover:bg-white/[0.1] transition-all duration-300"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors duration-300">
                      <r.icon className="h-4 w-4 text-primary-foreground/70 group-hover:text-destructive-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-foreground text-sm leading-snug">{r.text}</h3>
                      <span className="text-xs text-cta/60 font-medium">{r.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-cta">R$ 402k</div>
                    <div className="text-[10px] text-primary-foreground/40 font-medium">Multa máxima</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-destructive-foreground">72h</div>
                    <div className="text-[10px] text-primary-foreground/40 font-medium">Prazo p/ interdição</div>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold text-sm px-8 h-12 rounded-xl shadow-[0_8px_30px_-4px_hsl(var(--cta)/0.5)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Proteger minha empresa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ POR QUE A VSM? ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: copy + stats + certifications */}
            <RevealSection variant="left">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-bold tracking-wider mb-6">
                Por que a VSM?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                Segurança construída com{" "}
                <span className="text-cta">excelência técnica</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                A VSM Engenharia atua com foco em conformidade normativa e segurança industrial. Combinamos experiência de campo, rigor técnico e agilidade para entregar laudos e projetos que protegem sua operação e evitam prejuízos.
              </p>

              <div className="flex gap-6 mb-8">
                <div className="bg-background rounded-xl border border-border/60 px-6 py-4">
                  <div className="text-3xl font-extrabold text-primary">
                    <CountUp end={500} duration={2} prefix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Laudos emitidos</div>
                </div>
                <div className="bg-background rounded-xl border border-border/60 px-6 py-4">
                  <div className="text-3xl font-extrabold text-primary">
                    <CountUp end={8} duration={1.5} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Estados atendidos</div>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-5">
                <h3 className="text-sm font-bold text-primary-foreground mb-3">Certificações e Conformidades</h3>
                <div className="flex flex-wrap gap-2">
                  {["NR-13", "NR-12", "NR-11", "CREA"].map((cert) => (
                    <span key={cert} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-primary-foreground text-xs font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cta" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Right: feature cards grid */}
            <RevealSection variant="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: "Agilidade na Entrega", desc: "Laudos e relatórios dentro do prazo, sem atrasos que comprometam sua operação." },
                  { icon: FileCheck, title: "Conformidade Total", desc: "Documentação 100% aderente às normas regulamentadoras vigentes." },
                  { icon: Award, title: "Equipe Qualificada", desc: "Engenheiros especializados com vivência prática em campo industrial." },
                  { icon: Users, title: "Atendimento Dedicado", desc: "Suporte técnico direto e acompanhamento personalizado em cada projeto." },
                  { icon: Wrench, title: "Soluções Sob Medida", desc: "Projetos adaptados às necessidades específicas de cada cliente e operação." },
                  { icon: Shield, title: "Redução de Riscos", desc: "Inspeções que identificam falhas antes que se tornem acidentes ou multas." },
                ].map((item) => (
                  <div key={item.title} className="bg-background rounded-xl border border-border/60 p-5 hover:shadow-soft hover:border-cta/20 transition-all duration-300 group">
                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-cta/10 transition-colors">
                      <item.icon className="h-5 w-5 text-primary group-hover:text-cta transition-colors" />
                    </div>
                    <h3 className="font-bold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-background">
        {/* Background decorations */}
        <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />
        <svg className="absolute -top-10 -right-20 w-80 h-80 opacity-[0.03] text-primary" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" /><circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.8" /><circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" /></svg>
        <svg className="absolute -bottom-16 -left-16 w-64 h-64 opacity-[0.03] text-primary" viewBox="0 0 200 200"><polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>

        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase mb-3">
              Processo
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2">
              Do contato ao laudo,{" "}
              <span className="text-cta">sem burocracia</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Um processo claro e ágil para você ter tranquilidade.
            </p>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              {processSteps.map((step, i) => (
                <div key={i} className="relative group">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[75%] w-[50%] border-t-2 border-dashed border-primary/10 z-10" />
                  )}
                  <div className="bg-card rounded-xl border border-border/60 p-4 md:p-5 hover:shadow-soft hover:border-cta/20 transition-all duration-300 hover:-translate-y-0.5 h-full">
                    <span className="text-3xl font-extrabold text-primary/8 block mb-2">{step.num}</span>
                    <h3 className="font-bold text-sm mb-1 group-hover:text-cta transition-colors">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="relative py-0 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative bg-primary rounded-2xl px-8 py-10 md:py-12 md:px-14 my-16 overflow-hidden">
            {/* Decorative circles */}
            <svg className="absolute -top-10 -left-10 w-40 h-40 opacity-[0.06]" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="2" /></svg>
            <svg className="absolute -bottom-12 -right-12 w-56 h-56 opacity-[0.06]" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="2" /><circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1.5" /></svg>
            <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3">
                Precisa de uma <span className="text-cta">inspeção técnica</span>?
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/60 mb-6 max-w-lg mx-auto">
                Nossa equipe de engenheiros está pronta para ajudar. Solicite um orçamento ou agende uma visita técnica sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" variant="outline" className="border-2 border-white/20 text-primary-foreground hover:bg-white/10 font-semibold rounded-xl h-12">
                  <a href="tel:+5511999999999">
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar Agora
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl h-12 shadow-lg shadow-cta/30">
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DEPOIMENTOS ═══ */}
      <TestimonialsCarousel />

      {/* ═══ CASES DE SUCESSO ═══ */}
      <CasesCarousel />

      {/* ═══ ATUAÇÃO NACIONAL ═══ */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-3">
              Atuação
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3">
              Atendimento em todo o <span className="text-cta">Sudeste</span> e além
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Engenheiros em campo nos principais polos industriais do Brasil. Atendimento ágil onde sua empresa precisa.
            </p>
          </RevealSection>

          <RevealSection className="mb-10">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { icon: Target, value: "8+", label: "Estados" },
                { icon: Users, value: "500+", label: "Laudos emitidos" },
                { icon: HardHat, value: "100+", label: "Empresas atendidas" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-card rounded-xl border border-border/60 px-5 py-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection stagger>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {[
                { state: "São Paulo", projects: "180+" },
                { state: "Rio de Janeiro", projects: "95+" },
                { state: "Minas Gerais", projects: "85+" },
                { state: "Espírito Santo", projects: "40+" },
                { state: "Paraná", projects: "30+" },
                { state: "Santa Catarina", projects: "25+" },
                { state: "Bahia", projects: "20+" },
                { state: "Goiás", projects: "15+" },
              ].map((s) => (
                <div key={s.state} className="bg-card rounded-xl border border-border/60 p-4 hover:border-cta/30 hover:shadow-soft transition-all duration-300 group text-center">
                  <div className="text-lg font-extrabold text-primary group-hover:text-cta transition-colors">{s.projects}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{s.state}</div>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection className="mt-8 text-center">
            <p className="text-xs text-muted-foreground mb-4">Não encontrou sua região? Atendemos projetos em todo o Brasil.</p>
            <Button asChild variant="outline" className="border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-xl">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Consultar disponibilidade na sua região
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
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
                  <div className="h-48 relative overflow-hidden">
                    <img src={post.image} alt={post.title} loading="lazy" width={960} height={640} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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

      {/* ═══ NEWSLETTER ═══ */}
      <section className="relative py-0 pb-16 overflow-hidden bg-card">
        <div className="container mx-auto px-4">
          <div className="relative bg-primary rounded-2xl px-6 py-8 md:px-12 md:py-10 overflow-hidden">
            <svg className="absolute -top-8 -left-8 w-32 h-32 opacity-[0.06]" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="2" /></svg>
            <svg className="absolute -bottom-10 -right-10 w-44 h-44 opacity-[0.06]" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="2" /><circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="1.5" /></svg>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-1">
                  Receba conteúdos <span className="text-cta">exclusivos</span>
                </h3>
                <p className="text-sm text-primary-foreground/50 max-w-md">
                  Inscreva-se e receba artigos, dicas e novidades sobre normas regulamentadoras e segurança industrial.
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 md:w-72 h-12 px-4 rounded-xl border border-white/15 bg-white/[0.08] text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:ring-2 focus:ring-cta/50"
                />
                <Button className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl h-12 px-6 shrink-0">
                  Inscrever
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTATO ═══ */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: info */}
            <RevealSection variant="left">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                Contato
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Vamos conversar sobre{" "}
                <span className="text-cta">seu projeto</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
                Entre em contato com nossa equipe de engenheiros. Estamos prontos para ajudar a encontrar a solução ideal para sua necessidade.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Phone, title: "(11) 99999-9999", sub: "Seg a Sex, 8h às 18h" },
                  { icon: Mail, title: "vsengenhariamecanica@gmail.com", sub: "Resposta em até 24h" },
                  { icon: MapPin, title: "Sudeste do Brasil", sub: "Atendimento em todo o território nacional" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 bg-card rounded-xl border border-border/60 p-4">
                    <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="h-11 w-11 rounded-xl bg-success flex items-center justify-center text-success-foreground hover:opacity-90 transition-opacity">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-11 w-11 rounded-xl bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
              </div>
            </RevealSection>

            {/* Right: form */}
            <RevealSection variant="right">
              <div className="bg-card rounded-2xl border border-border/60 p-6 md:p-8 shadow-soft">
                <h3 className="text-xl font-extrabold mb-1">Solicitar Orçamento</h3>
                <p className="text-xs text-muted-foreground mb-6">Preencha o formulário abaixo e nossa equipe entrará em contato.</p>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input type="text" placeholder="Seu nome" className="w-full h-11 pl-10 pr-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta/50" />
                    </div>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input type="text" placeholder="Empresa" className="w-full h-11 pl-10 pr-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta/50" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input type="tel" placeholder="Telefone" className="w-full h-11 pl-10 pr-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta/50" />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input type="email" placeholder="E-mail" className="w-full h-11 pl-10 pr-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta/50" />
                    </div>
                  </div>
                  <div className="relative">
                    <ClipboardCheck className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <textarea placeholder="Conte-nos sobre seu projeto..." rows={4} className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta/50" />
                  </div>
                  <Button type="submit" className="w-full bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl h-12 text-base shadow-lg shadow-cta/30">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                  <p className="text-[10px] text-muted-foreground text-center">
                    Ao enviar, você concorda com nossa Política de Privacidade.
                  </p>
                </form>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  );
}
