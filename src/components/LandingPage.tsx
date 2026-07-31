import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight, CheckCircle2, ChevronRight, Phone, FileText,
  BadgeCheck, Clock, MapPin, BookOpen, Lightbulb,
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import { renderMarkdown } from "@/lib/markdown";
import { allPosts } from "@/data/blogData";
import type { LandingConfig } from "@/data/landingData";

const BASE_URL = "https://www.vsmengenharia.com";
const WHATSAPP =
  "https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento";

const AREA_SERVED_PADRAO = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Espírito Santo"];

/**
 * LandingPage — template das páginas de serviço de cauda comercial
 * (`/servicos/<slug>`), separadas dos pilares para não competir com eles.
 *
 * Renderiza o mesmo dialeto de markdown do blog (via `@/lib/markdown`), então
 * o conteúdo técnico pode ser movido entre blog e landing sem reescrita, e
 * emite Service + FAQPage + BreadcrumbList no SSG.
 */
export default function LandingPage({ config }: { config: LandingConfig }) {
  const url = `${BASE_URL}/${config.slug}`;
  const areaServed = config.areaServed ?? AREA_SERVED_PADRAO;

  const jsonLd = useMemo(() => {
    const service: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: config.serviceName,
      serviceType: config.serviceName,
      description: config.metaDescription,
      url,
      provider: {
        "@type": "Organization",
        name: "VSM Engenharia",
        url: BASE_URL,
        telephone: "+5511954534057",
      },
      areaServed: areaServed.map((name) => ({ "@type": "State", name })),
    };

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Serviços", item: `${BASE_URL}/servicos/nr13` },
        { "@type": "ListItem", position: 3, name: config.h1, item: url },
      ],
    };

    const faq = config.faq?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: config.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

    return [service, breadcrumb, ...(faq ? [faq] : [])];
  }, [config, url, areaServed]);

  useSEO({
    title: config.title,
    description: config.metaDescription,
    canonical: url,
    jsonLd,
  });

  const relacionados = useMemo(
    () =>
      (config.relatedPosts ?? [])
        .map((slug) => allPosts.find((p) => p.slug === slug))
        .filter(Boolean)
        .slice(0, 6),
    [config.relatedPosts]
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-elegant">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative container mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link to="/" className="hover:text-white/80 transition-colors">Início</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/70">{config.badge}</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 bg-cta/20 text-cta px-4 py-1.5 rounded-full text-xs font-bold mb-5">
                <BadgeCheck className="h-3.5 w-3.5" /> {config.badge}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-5">
                {config.h1}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">{config.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-full shadow-lg">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-5 w-5 mr-2" /> Solicitar orçamento
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/25 text-white hover:bg-white/10 hover:text-white">
                  <Link to="/contato">Falar com engenheiro</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-white/50 text-sm">
                <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-success" /> Engenheiros com CREA ativo</span>
                <span className="flex items-center gap-1.5"><FileText className="h-4 w-4 text-success" /> ART em todo laudo</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-success" /> Retorno em 24h</span>
              </div>
            </div>

            {config.heroImage && (
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-black/20">
                  <img src={config.heroImage} alt={config.h1} className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Barra de destaques ── */}
      {config.highlights?.length > 0 && (
        <section className="bg-card border-b border-border/50 py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {config.highlights.map((h) => (
                <div key={h.label} className="text-center">
                  <div className="text-xl md:text-2xl font-black text-primary">{h.value}</div>
                  <div className="text-[11px] md:text-xs text-muted-foreground font-medium mt-0.5">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Corpo ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <article className="lg:col-span-8 order-1">
              {/* Resposta direta — bloco de citação para IA e featured snippet */}
              {config.quickAnswer && (
                <RevealSection>
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="h-5 w-5 text-cta" />
                      <h2 className="font-bold text-base m-0">Resposta direta</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed m-0">{config.quickAnswer}</p>
                  </div>
                </RevealSection>
              )}

              {/* Para quem é */}
              {config.paraQuem?.length > 0 && (
                <RevealSection>
                  <div className="mb-10">
                    <h2 className="text-2xl font-black mb-4">Quando você precisa deste serviço</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {config.paraQuem.map((t) => (
                        <div key={t} className="flex items-start gap-3 bg-secondary rounded-lg p-4">
                          <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealSection>
              )}

              {/* Conteúdo técnico */}
              <div className="prose prose-lg max-w-none">
                {config.content.map((section, i) => (
                  <RevealSection key={i} delay={i * 40}>
                    <div className="mb-8 blog-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(section) }} />
                  </RevealSection>
                ))}
              </div>

              {/* Entregáveis */}
              {config.entregaveis?.length > 0 && (
                <RevealSection>
                  <div className="bg-card rounded-xl border border-border/50 p-6 mt-10">
                    <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-cta" /> O que você recebe
                    </h2>
                    <ul className="space-y-2.5">
                      {config.entregaveis.map((e) => (
                        <li key={e} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealSection>
              )}

              {/* Processo */}
              {config.processo?.length > 0 && (
                <RevealSection>
                  <div className="mt-10">
                    <h2 className="text-2xl font-black mb-5">Como funciona</h2>
                    <div className="space-y-4">
                      {config.processo.map((p, i) => (
                        <div key={p.title} className="flex gap-4">
                          <div className="shrink-0 w-9 h-9 rounded-full bg-cta/10 text-cta font-black flex items-center justify-center text-sm">
                            {i + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-base mb-1">{p.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealSection>
              )}

              {/* FAQ */}
              {config.faq?.length > 0 && (
                <RevealSection>
                  <div className="mt-12" id="faq">
                    <h2 className="text-2xl font-black mb-5">Perguntas frequentes</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {config.faq.map((f, i) => (
                        <AccordionItem key={i} value={`faq-${i}`}>
                          <AccordionTrigger className="text-left text-sm font-bold">{f.question}</AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                            {f.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </RevealSection>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 order-2 hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {config.sections?.length > 0 && (
                  <div className="bg-card rounded-xl border border-border/50 p-5">
                    <h2 className="text-sm font-bold mb-3 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" /> Nesta página
                    </h2>
                    <nav className="space-y-1">
                      {config.sections.map((s) => (
                        <a key={s.id} href={`#${s.id}`}
                          className="block text-xs text-muted-foreground hover:text-cta py-1.5 pl-3 border-l-2 border-border/50 hover:border-cta transition-all leading-snug">
                          {s.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="bg-gradient-elegant rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute inset-0 pattern-dots opacity-10" />
                  <div className="relative">
                    <span className="text-[10px] font-bold tracking-widest text-cta uppercase">Orçamento</span>
                    <h2 className="text-sm font-bold text-white mt-2 mb-3">{config.serviceName}</h2>
                    <p className="text-xs text-white/60 mb-4">Atendimento em SP, MG, RJ e ES. Resposta em até 24h.</p>
                    <Button asChild size="sm" className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-full text-xs w-full shadow-md">
                      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                        Falar no WhatsApp <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>

                {config.relatedServices?.length > 0 && (
                  <div className="bg-card rounded-xl border border-border/50 p-5">
                    <h2 className="text-sm font-bold mb-3">Serviços relacionados</h2>
                    <div className="space-y-2">
                      {config.relatedServices.map((s) => (
                        <Link key={s.href} to={s.href}
                          className="flex items-center justify-between gap-2 text-xs text-muted-foreground hover:text-cta transition-colors py-1.5">
                          <span>{s.label}</span>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Artigos do cluster ── */}
      {relacionados.length > 0 && (
        <section className="py-16 bg-card border-t border-border/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <BookOpen className="h-8 w-8 text-cta mx-auto mb-3" />
              <h2 className="text-2xl md:text-3xl font-black mb-2">Aprofunde no tema</h2>
              <p className="text-muted-foreground">Artigos técnicos escritos pelos engenheiros da VSM Engenharia.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relacionados.map((p) => (
                <Link key={p!.slug} to={`/blog/${p!.slug}`}
                  className="group flex items-center justify-between gap-4 bg-secondary rounded-xl p-4 border hover:border-cta/30 hover:shadow-elevated transition-all">
                  <span className="text-sm font-semibold leading-snug group-hover:text-cta transition-colors">{p!.title}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-cta group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA final ── */}
      <section className="bg-gradient-elegant py-20 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">{config.ctaTitle}</h2>
          <p className="text-white/60 mb-9 text-lg">{config.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black text-lg px-10 py-7 rounded-2xl shadow-xl shadow-cta/30">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-3" /> Solicitar orçamento
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-white/40 text-sm">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-success" /> SP · MG · RJ · ES</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" /> Orçamento sem compromisso</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" /> Resposta em 24h</span>
          </div>
        </div>
      </section>
    </>
  );
}
