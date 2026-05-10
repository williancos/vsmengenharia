import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceStep {
  title: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  process: ServiceStep[];
  targetAudience: string[];
  faqs: { q: string; a: string }[];
  relatedServices?: { label: string; href: string }[];
}

export default function ServicePage({
  title, subtitle, description, icon: Icon, benefits, process, targetAudience, faqs, relatedServices = []
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground">{subtitle}</p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Sobre o serviço</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Para quem é</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {targetAudience.map((t) => (
              <div key={t} className="flex items-start gap-3 bg-secondary rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Benefícios</h2>
          <div className="space-y-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Como funciona</h2>
          <div className="space-y-6">
            {process.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card rounded-lg border p-5">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-card py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Serviços Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedServices.map((s) => (
                <Link key={s.href} to={s.href} className="group flex items-center justify-between bg-secondary rounded-lg p-4 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="font-medium">{s.label}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">Pronto para garantir a conformidade?</h2>
          <p className="text-primary-foreground/70 mb-6">Solicite agora uma avaliação gratuita com nosso engenheiro.</p>
          <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold">
            <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Falar com Engenheiro</a>
          </Button>
        </div>
      </section>
    </>
  );
}
