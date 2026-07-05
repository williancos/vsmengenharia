import { useState, useMemo } from "react";
import { useSEO } from "@/hooks/use-seo";
import {
  Shield, Award, Users, TrendingUp, Target, Eye, Heart, MapPin,
  CheckCircle2, Phone, BadgeCheck, Factory, Clock, FileText,
  Star, Wrench, ArrowRight, Zap, Building2, Scale, BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import teamImg from "@/assets/team-engineers.jpg";
import factoryImg from "@/assets/factory-interior.jpg";

const stats = [
  { value: 500, suffix: "+", label: "Inspeções realizadas", icon: BadgeCheck },
  { value: 150, suffix: "+", label: "Empresas atendidas", icon: Factory },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 100, suffix: "%", label: "Laudos aprovados", icon: Shield },
];

const timeline = [
  { year: "2014", title: "Fundação", desc: "Início das operações com foco em inspeções NR13 e laudos técnicos na região de São Paulo." },
  { year: "2016", title: "Expansão para NR12 e NR11", desc: "Ampliação do portfólio com adequação de máquinas e planos de rigging." },
  { year: "2018", title: "Reclassificação de Monta", desc: "Início do serviço de reclassificação veicular, atendendo todo o estado de SP." },
  { year: "2020", title: "Atuação em todo o Sudeste", desc: "Expansão para MG, RJ e ES com equipe de engenheiros habilitados em campo." },
  { year: "2023", title: "500+ Inspeções", desc: "Marco de 500 inspeções realizadas com 100% de laudos aprovados em auditorias." },
];

const values = [
  { icon: Shield, title: "Qualidade", desc: "Cada laudo é elaborado com rigor técnico, memoriais de cálculo e documentação fotográfica completa." },
  { icon: Zap, title: "Esforço", desc: "Comprometimento com prazos e resultados que fazem a diferença na operação dos nossos clientes." },
  { icon: Scale, title: "Ética", desc: "Transparência total em diagnósticos e recomendações. Nunca vendemos serviços desnecessários." },
  { icon: BadgeCheck, title: "Segurança", desc: "Nosso trabalho protege vidas. Identificamos riscos invisíveis antes que se tornem acidentes." },
];

const differentials = [
  { icon: BadgeCheck, title: "Engenheiros CREA Ativo", desc: "Profissionais habilitados com especialização em normas regulamentadoras e ensaios não destrutivos." },
  { icon: FileText, title: "ART em Todos os Serviços", desc: "Anotação de Responsabilidade Técnica registrada no CREA, garantindo validade jurídica." },
  { icon: Clock, title: "Laudos em até 5 Dias Úteis", desc: "Agilidade sem comprometer a qualidade. Documentação pronta para auditorias em tempo recorde." },
  { icon: Building2, title: "Atendimento Personalizado", desc: "Cada projeto recebe atenção dedicada, com soluções sob medida para a realidade da sua empresa." },
  { icon: Wrench, title: "Equipamentos Calibrados", desc: "Instrumentação de última geração com certificados de calibração válidos e rastreáveis." },
  { icon: TrendingUp, title: "Suporte Pós-Entrega", desc: "Acompanhamento contínuo, lembretes de inspeções periódicas e suporte técnico ilimitado." },
];

const regions = [
  { state: "São Paulo", cities: "Capital, ABC, Campinas, Sorocaba, São José dos Campos, Ribeirão Preto, Santos" },
  { state: "Minas Gerais", cities: "BH, Triângulo Mineiro, Sul de Minas, Contagem, Uberlândia, Juiz de Fora" },
  { state: "Rio de Janeiro", cities: "Capital, Niterói, Volta Redonda, Macaé, Duque de Caxias, Petrópolis" },
  { state: "Espírito Santo", cities: "Vitória, Vila Velha, Serra, Cariacica, Cachoeiro, Linhares" },
];

const services = [
  { label: "NR13 — Caldeiras e Vasos de Pressão", href: "/servicos/nr13" },
  { label: "NR12 — Segurança de Máquinas", href: "/servicos/nr12" },
  { label: "NR11 — Inspeções e Plano de Rigging", href: "/servicos/nr11" },
  { label: "PMOC — Climatização", href: "/servicos/pmoc" },
  { label: "Reclassificação de Monta", href: "/servicos/reclassificacao-de-monta" },
  { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos" },
];

export default function Sobre() {
  useSEO({
    title: "Sobre a VSM Engenharia | Quem Somos e Nossa Missão",
    description: "VSM Engenharia — mais de 10 anos em inspeções NR13, NR12, NR11 e projetos mecânicos. Engenheiros CREA habilitados protegendo sua operação no Sudeste.",
  });

  return (
    <>
      {/* Hero — immersive with image */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={teamImg} alt="Equipe de engenheiros VSM Engenharia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
          <div className="absolute inset-0 pattern-dots opacity-10" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Sobre Nós</span>
              <span className="bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">⭐ 5.0 — Avaliações Google</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.05] text-white">
              Engenharia que{" "}
              <span className="text-cta relative">
                protege
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">vidas, patrimônio e conformidade</span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
              Somos especialistas em inspeções normativas, laudos técnicos e projetos mecânicos para a indústria do Sudeste do Brasil.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Eng. CREA Ativo", "ART Inclusa", "Todo Sudeste", "10+ Anos"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8 h-14 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:shadow-[0_8px_28px_-4px_hsl(var(--cta)/0.55)] transition-all hover:scale-[1.02]">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5 mr-2" /> Falar com Engenheiro
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary font-semibold px-8 h-14 rounded-full border border-white/30 hover:bg-white/90 transition-all">
                <a href="#nossos-servicos">Nossos Serviços →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
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

      {/* Quem Somos — split layout */}
      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Quem Somos</span>
                  <h2 className="text-3xl md:text-4xl font-black mb-6">Especialistas em Engenharia Industrial</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                    A <strong className="text-foreground">VSM Engenharia</strong> é uma empresa especializada em engenharia aplicada à indústria, com foco em inspeções técnicas, laudos, planos de rigging e adequação às normas NR13, NR12, NR11 e PMOC.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Atuamos em toda a região Sudeste do Brasil, oferecendo soluções que garantem a segurança dos colaboradores, a conformidade legal e a eficiência operacional. Nossos laudos técnicos e memoriais de cálculo são elaborados com rigor, garantindo que cada equipamento opere dentro das normas vigentes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Além das inspeções normativas, somos referência em <strong className="text-foreground">reclassificação de monta</strong> para veículos sinistrados, projetos mecânicos sob medida e projetos de climatização (HVAC).
                  </p>
                  <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-full px-6">
                    <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4 mr-2" /> Conhecer nossos serviços
                    </a>
                  </Button>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img src={factoryImg} alt="Interior de planta industrial atendida pela VSM Engenharia" className="w-full h-80 md:h-[28rem] object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border-2 border-cta/20 rounded-2xl p-4 shadow-elevated">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center">
                        <BadgeCheck className="h-6 w-6 text-cta" />
                      </div>
                      <div>
                        <p className="font-black text-lg text-cta">CREA Ativo</p>
                        <p className="text-xs text-muted-foreground">Engenheiros habilitados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Missão, Visão, Valores */}
      <RevealSection>
        <section className="bg-secondary py-20 md:py-24 pattern-grid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Nosso Propósito</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Missão, Visão e Valores</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Os pilares que guiam cada projeto e inspeção que realizamos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Target, title: "Missão", text: "Prestar serviços técnicos e consultoria em engenharia com qualidade, segurança e cumprimento de prazos, garantindo a satisfação dos nossos clientes e a proteção de vidas.", color: "from-cta/10 to-primary/10" },
                { icon: Eye, title: "Visão", text: "Ser reconhecida como uma das maiores empresas de engenharia do país, oferecendo um trabalho personalizado, de alta confiabilidade e referência em conformidade normativa.", color: "from-primary/10 to-cta/10" },
                { icon: Heart, title: "Valores", text: "Qualidade, Esforço, Ética e Segurança — são os pilares inegociáveis que fundamentam cada decisão, laudo e projeto que entregamos.", color: "from-cta/10 to-success/10" },
              ].map((item) => (
                <div key={item.title} className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border hover:-translate-y-1 text-center">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-8 w-8 text-cta" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Nossos Valores — 4 cards */}
      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">DNA VSM</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">O que nos Define</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elevated transition-all duration-300 border hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cta/10 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <v.icon className="h-7 w-7 text-cta" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Diferenciais */}
      <RevealSection>
        <section className="bg-primary py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs><pattern id="sobre-grid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" /></pattern></defs>
              <rect width="100" height="100" fill="url(#sobre-grid)" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 text-primary-foreground/70 text-xs font-bold tracking-wider uppercase mb-3">
                Por que a VSM
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
                Nossos <span className="text-cta">Diferenciais</span>
              </h2>
              <p className="text-primary-foreground/50 max-w-2xl mx-auto">O que nos diferencia no mercado de engenharia industrial.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {differentials.map((d) => (
                <div key={d.title} className="bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/[0.08] p-6 hover:bg-white/[0.1] transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center mb-4">
                    <d.icon className="h-6 w-6 text-cta" />
                  </div>
                  <h3 className="font-bold text-primary-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Timeline */}
      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Nossa Trajetória</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Uma História de Crescimento</h2>
            </div>
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={item.year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="relative z-10 shrink-0">
                      <div className="h-12 w-12 rounded-full bg-cta text-cta-foreground flex items-center justify-center font-black text-sm shadow-lg">
                        {item.year.slice(2)}
                      </div>
                    </div>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                      <div className="md:hidden">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                      <div className={`hidden md:block text-sm font-bold text-cta`}>{item.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Área de Atuação */}
      <RevealSection>
        <section className="bg-secondary py-20 md:py-24 pattern-dots">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Cobertura Regional</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                <MapPin className="inline h-8 w-8 text-cta mr-2 -mt-1" />
                Área de Atuação
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Atendemos toda a região Sudeste do Brasil com equipe própria em campo.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {regions.map((r) => (
                <div key={r.state} className="bg-card rounded-2xl p-6 border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-cta" />
                    <h3 className="font-bold">{r.state}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.cities}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Nossos Serviços — quick links */}
      <RevealSection>
        <section id="nossos-servicos" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">O que Fazemos</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Nossos Serviços</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Conheça nosso portfólio completo de soluções em engenharia industrial.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {services.map((s) => (
                <Link key={s.href} to={s.href} className="group flex items-center justify-between bg-card rounded-xl border p-5 hover:border-cta/30 hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5">
                  <span className="font-semibold text-sm">{s.label}</span>
                  <ArrowRight className="h-4 w-4 text-cta opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/servicos/consultoria-gratuita">
                  Ver todos os serviços →
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA Final */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs><pattern id="cta-grid-sobre" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" /></pattern></defs>
            <rect width="100" height="100" fill="url(#cta-grid-sobre)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 text-primary-foreground/70 text-xs font-bold tracking-wider uppercase mb-4">
              Vamos Conversar
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
              Quer saber mais sobre a <span className="text-cta">VSM</span>?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
              Fale com um engenheiro e descubra como podemos ajudar sua empresa a operar em conformidade e segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8 h-14 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:shadow-[0_8px_28px_-4px_hsl(var(--cta)/0.55)] transition-all hover:scale-[1.02]">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5 mr-2" /> Falar com Engenheiro
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white/10 text-primary-foreground font-semibold px-8 h-14 rounded-full border border-white/20 hover:bg-white/20 transition-all">
                <Link to="/contato">Enviar Mensagem</Link>
              </Button>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
