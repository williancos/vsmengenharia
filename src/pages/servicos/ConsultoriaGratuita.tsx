import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, ArrowRight, Shield, AlertTriangle,
  FileText, Award, Clock, Phone, ChevronDown, ChevronUp,
  FileCheck, Eye, Zap, Gift, Heart, MessageCircle,
  ShieldAlert, XCircle, CircleCheck, Star,
  Factory, TrendingUp, BadgeCheck, BookOpen
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import heroConsultoria from "@/assets/consultoria/hero-consultoria.jpg";

const tickerMessages = [
  "🎁 Consultoria 100% gratuita e sem compromisso",
  "📋 Descubra se sua empresa está em conformidade normativa",
  "⚠️ Não espere a fiscalização — avalie sua situação agora",
  "⏰ Diagnóstico gratuito com engenheiro especialista em 24h",
];

const stats = [
  { value: 300, suffix: "+", label: "Consultorias realizadas", icon: BadgeCheck },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 95, suffix: "%", label: "Aprovação dos clientes", icon: Heart },
  { value: 150, suffix: "+", label: "Empresas atendidas", icon: Factory },
];

const benefits = [
  { icon: Gift, title: "100% Gratuita", desc: "Avaliação inicial totalmente gratuita e sem compromisso. Você só investe se decidir seguir com os serviços.", highlight: true },
  { icon: Eye, title: "Diagnóstico Completo", desc: "Identificamos todos os pontos de não conformidade com NR13, NR12, NR11 e PMOC." },
  { icon: FileText, title: "Relatório de Prioridades", desc: "Entregamos um mapa de riscos com prioridades claras para regularização." },
  { icon: Clock, title: "Resposta em 24h", desc: "Nosso engenheiro entra em contato em até 24 horas após sua solicitação." },
  { icon: Award, title: "Engenheiro Especialista", desc: "Atendimento direto com engenheiro habilitado, sem intermediários." },
  { icon: MessageCircle, title: "Orientação Personalizada", desc: "Explicamos cada norma aplicável ao seu caso de forma clara e objetiva." },
];

const processSteps = [
  { title: "Contato", desc: "Entre em contato pelo WhatsApp, telefone ou formulário.", icon: Phone },
  { title: "Conversa Inicial", desc: "Nosso engenheiro entende sua operação e necessidades.", icon: MessageCircle },
  { title: "Análise Preliminar", desc: "Identificamos as normas aplicáveis e pontos de atenção.", icon: Eye },
  { title: "Diagnóstico", desc: "Apresentamos diagnóstico com riscos e prioridades.", icon: FileCheck },
  { title: "Proposta", desc: "Se necessário, elaboramos proposta técnica personalizada.", icon: FileText },
];

const servicesCovered = [
  { icon: Shield, title: "NR13", desc: "Caldeiras, vasos de pressão e tubulações industriais", count: "Inspeção obrigatória" },
  { icon: Shield, title: "NR12", desc: "Segurança de máquinas e equipamentos industriais", count: "Adequação obrigatória" },
  { icon: Shield, title: "NR11", desc: "Movimentação de carga e equipamentos de içamento", count: "Plano de rigging" },
  { icon: Shield, title: "PMOC", desc: "Sistemas de climatização acima de 5 TR", count: "Lei 13.589/2018" },
];

const targetAudience = [
  { name: "Empresas que não sabem se estão em conformidade", icon: AlertTriangle },
  { name: "Gestores preparando-se para auditorias", icon: Shield },
  { name: "Indústrias em expansão ou modernização", icon: TrendingUp },
  { name: "Empresas que nunca realizaram inspeções", icon: Eye },
  { name: "Novos gestores de segurança", icon: Award },
  { name: "Empresas notificadas por fiscalização", icon: AlertTriangle },
  { name: "Frotistas e transportadoras", icon: Factory },
  { name: "Empresas que querem reduzir riscos", icon: Shield },
];

const testimonials = [
  { name: "Roberto M.", role: "Gerente Industrial", company: "Indústria – SP", text: "A consultoria gratuita da VSM revelou que estávamos com 3 equipamentos fora de conformidade. Regularizamos tudo antes da fiscalização. Excelente serviço!", rating: 5 },
  { name: "Silvana T.", role: "Diretora Administrativa", company: "Empresa de Logística – MG", text: "Não sabíamos que precisávamos de PMOC. A VSM explicou tudo de forma clara e nos ajudou a regularizar.", rating: 5 },
  { name: "Henrique S.", role: "Coord. de Segurança", company: "Indústria Química – RJ", text: "Atendimento excepcional. O engenheiro fez um diagnóstico completo e priorizou os riscos mais críticos. Muito profissional.", rating: 5 },
];

const faqs = [
  { q: "A consultoria é realmente gratuita?", a: "Sim, 100%. A avaliação inicial é totalmente gratuita e sem compromisso. Você só investe se decidir seguir com os serviços de regularização recomendados." },
  { q: "Como funciona a consultoria?", a: "Pode ser feita remotamente (por telefone ou videochamada) ou presencialmente, dependendo da complexidade. O engenheiro avalia sua situação e apresenta um diagnóstico." },
  { q: "Quanto tempo leva a avaliação?", a: "A avaliação inicial é feita em até 48 horas após o contato. O diagnóstico é apresentado em uma conversa de 30 a 60 minutos." },
  { q: "Quais normas são avaliadas?", a: "Avaliamos conformidade com NR13 (caldeiras e vasos de pressão), NR12 (máquinas e equipamentos), NR11 (movimentação de carga) e PMOC (climatização)." },
  { q: "Preciso enviar documentação?", a: "Para uma avaliação mais precisa, é útil compartilhar inventário de equipamentos e documentação existente, mas não é obrigatório para a consulta inicial." },
  { q: "Vocês atendem em quais estados?", a: "Atendemos todo o Sudeste: São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo. Consultas remotas podem ser feitas para qualquer localidade." },
];

const relatedServices = [
  { label: "Inspeção NR13", href: "/servicos/nr13", desc: "Caldeiras e vasos de pressão", icon: Shield },
  { label: "Inspeção NR12", href: "/servicos/nr12", desc: "Segurança de máquinas", icon: Shield },
  { label: "NR11 / Plano de Rigging", href: "/servicos/nr11", desc: "Movimentação de carga", icon: Shield },
  { label: "PMOC", href: "/servicos/pmoc", desc: "Climatização", icon: Shield },
];

export default function ConsultoriaGratuita() {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultoria Gratuita em Conformidade Normativa",
    provider: { "@type": "Organization", name: "VSM Engenharia", url: "https://www.vsmengenharia.com" },
    areaServed: { "@type": "State", name: "Sudeste do Brasil" },
    description: "Consultoria gratuita e sem compromisso sobre conformidade normativa NR13, NR12, NR11 e PMOC. Diagnóstico com resposta em 24h.",
    url: "https://www.vsmengenharia.com/servicos/consultoria-gratuita",
  }), []);

  useSEO({
    title: "Consultoria Gratuita em Conformidade Normativa | VSM Engenharia",
    description: "Consultoria gratuita em NR13, NR12, NR11 e PMOC. Diagnóstico de conformidade sem compromisso com resposta em 24h de engenheiro especialista.",
    jsonLd,
  });

  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-success text-white overflow-hidden">
        <div className="container mx-auto px-4 py-2.5 text-center">
          <p className="text-sm font-semibold animate-pulse">{tickerMessages[tickerIndex]}</p>
        </div>
      </div>

      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroConsultoria})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/70" />
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="bg-success text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">100% Gratuita</span>
                <span className="bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">⭐ Sem compromisso</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.05] text-white">
                Consultoria{" "}
                <span className="text-cta relative">
                  Gratuita
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">Diagnóstico · Conformidade · Prioridades</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
                Descubra se sua empresa está em conformidade com as normas. <strong className="text-white">Avaliação gratuita</strong> com engenheiro especialista.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Sem Custo", "Sem Compromisso", "Eng. Especialista", "Resposta 24h"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8 h-14 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:shadow-[0_8px_28px_-4px_hsl(var(--cta)/0.55)] transition-all hover:scale-[1.02]">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-5 w-5 mr-2" /> AGENDAR CONSULTORIA GRÁTIS</a>
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
                  <span className="text-white font-bold text-sm">SUA EMPRESA ESTÁ EM CONFORMIDADE?</span>
                </div>
                <div className="space-y-3">
                  {["Não sei quais normas se aplicam", "Tenho inspeções atrasadas", "Quero preparar para auditoria"].map((q) => (
                    <label key={q} className="flex items-center gap-3 text-white/80 text-sm cursor-pointer hover:text-white transition-colors">
                      <div className="h-5 w-5 rounded border border-white/30 flex items-center justify-center shrink-0"><XCircle className="h-3 w-3 text-cta" /></div>
                      {q}
                    </label>
                  ))}
                </div>
                <Button asChild size="sm" className="w-full mt-5 bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-lg">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Agendar Consultoria</a>
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((n) => (
                      <div key={n} className="h-8 w-8 rounded-full bg-cta/30 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold">{n === 1 ? "R" : n === 2 ? "S" : "H"}</div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">+300 consultorias realizadas</p>
                    <p className="text-white/60 text-xs">95% de aprovação</p>
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
                <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Entenda</span>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Como Funciona a Consultoria?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  Nossa consultoria gratuita avalia se sua empresa está em <strong className="text-foreground">conformidade com as principais normas regulamentadoras</strong>: NR13, NR12, NR11 e PMOC.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O engenheiro identifica riscos, define prioridades e orienta sobre os próximos passos — tudo sem custo e sem compromisso.
                </p>
                <div className="bg-success/5 border-l-4 border-success rounded-r-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <Gift className="h-6 w-6 text-success shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-success mb-1">Totalmente gratuita</h4>
                      <p className="text-sm text-muted-foreground">Sem pegadinhas. A avaliação é <strong className="text-foreground">100% gratuita</strong>. Você só investe se quiser seguir com a regularização.</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> Agendar consultoria</a>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated h-80 md:h-[28rem]">
                  <img src={heroConsultoria} alt="Consultoria técnica gratuita com engenheiros mecânicos" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border-2 border-success/20 rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center"><Gift className="h-6 w-6 text-success" /></div>
                    <div>
                      <p className="font-black text-lg text-success">GRÁTIS</p>
                      <p className="text-xs text-muted-foreground">Sem compromisso</p>
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
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Normas Avaliadas</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">O que Avaliamos na Consultoria</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {servicesCovered.map((eq) => (
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
        <section className="bg-card py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Público-Alvo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Para Quem é a Consultoria</h2>
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
              <h2 className="text-3xl md:text-4xl font-black mb-4">Por que Agendar a Consultoria</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className={`bg-card rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${b.highlight ? "border-cta/30 ring-1 ring-cta/10 shadow-lg relative" : "shadow-soft"}`}>
                  {b.highlight && <div className="absolute -top-3 left-6 bg-success text-white text-xs font-bold px-3 py-1 rounded-full">GRATUITA</div>}
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Da Consulta ao Diagnóstico em 5 Passos</h2>
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
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Zap className="h-5 w-5 mr-2" /> AGENDAR CONSULTORIA GRÁTIS</a>
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
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Nossos Serviços</span>
              <h2 className="text-3xl md:text-4xl font-black">Serviços que Podemos Recomendar</h2>
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

      <section className="bg-gradient-elegant py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-success/20 text-success px-4 py-2 rounded-full text-sm font-bold mb-6"><Gift className="h-4 w-4" /> 100% Gratuita — Sem Compromisso</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Agende sua consultoria gratuita agora</h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">Descubra se sua empresa está em conformidade. Resposta garantida em 24h.</p>
            <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black text-lg px-12 py-8 rounded-2xl shadow-xl shadow-cta/30 hover:shadow-2xl hover:shadow-cta/40 transition-all hover:scale-[1.02]">
              <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-6 w-6 mr-3" /> AGENDAR CONSULTORIA GRÁTIS</a>
            </Button>
            <div className="flex items-center justify-center gap-6 mt-8 text-white/40 text-sm">
              <span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> 100% grátis</span>
              <span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Resposta em 24h</span>
              <span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Sem compromisso</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
