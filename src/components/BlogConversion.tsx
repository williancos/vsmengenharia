import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ClipboardCheck, Clock, Phone, Quote, Send } from "lucide-react";
import {
  PHONE_HREF, PHONE_LABEL, serviceSteps, trustStats, whatsappHref,
  articleMessage, diagnosticMessage, proposalMessage,
  type BlogTopic,
} from "@/data/blogConversion";
import type { Testimonial } from "@/data/testimonials";

/**
 * Blocos de conversão dos posts do blog. Todos os botões de WhatsApp levam a
 * mensagem preenchida citando o artigo (ver `src/data/blogConversion.ts`) e um
 * `data-cta` com a posição, que o `ConversionListeners` envia como
 * `cta_location` junto da conversão.
 *
 * Os blocos que entram no corpo do artigo usam `not-prose` para não herdar a
 * tipografia do `prose` e não usam heading — o sumário e a hierarquia de H2 do
 * post continuam sendo só do conteúdo editorial.
 */

const ctaButton =
  "inline-flex items-center justify-center gap-2 bg-cta text-cta-foreground hover:bg-cta-hover font-semibold rounded-full transition-all shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:-translate-y-0.5";

/** Glifo do WhatsApp (Simple Icons, CC0) — reconhecível onde o ícone genérico de chat não é. */
export function WhatsAppGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

type CtaProps = { topic: BlogTopic; postTitle: string };

/**
 * Diagnóstico rápido: o leitor marca as situações que reconhece e a lista vai
 * na mensagem do WhatsApp — o lead chega qualificado e o clique é um passo
 * pequeno depois de um compromisso ainda menor (marcar uma caixa).
 */
export function DiagnosticCta({ topic, postTitle }: CtaProps) {
  const [checked, setChecked] = useState<string[]>([]);
  const toggle = (s: string) =>
    setChecked((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  const href = whatsappHref(diagnosticMessage(postTitle, topic, checked));
  const n = checked.length;

  return (
    <aside className="not-prose my-10 rounded-2xl border border-primary/15 bg-gradient-to-br from-secondary/70 via-background to-background p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2">
        <ClipboardCheck className="h-4 w-4 text-cta" />
        <span className="text-[11px] font-bold tracking-widest uppercase text-cta">Diagnóstico rápido</span>
      </div>
      <p className="text-lg md:text-xl font-bold text-foreground leading-snug">Sua situação se parece com alguma destas?</p>
      <p className="text-sm text-muted-foreground mt-1.5 mb-5 leading-relaxed">
        {topic.audience}. Marque o que se aplica e envie ao engenheiro: a mensagem já sai preenchida com o seu caso.
      </p>

      <ul className="grid gap-2">
        {topic.signals.map((s) => (
          <li key={s}>
            <label className="flex items-start gap-3 rounded-xl border border-border/70 bg-card px-4 py-3 cursor-pointer transition-colors hover:border-cta/40 has-[:checked]:border-cta has-[:checked]:bg-cta/5">
              <input
                type="checkbox"
                checked={checked.includes(s)}
                onChange={() => toggle(s)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-cta"
              />
              <span className="text-sm text-foreground leading-snug">{s}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
        <a href={href} target="_blank" rel="noopener noreferrer" data-cta="blog_diagnostico" className={`${ctaButton} h-12 px-6 text-sm`}>
          <WhatsAppGlyph />
          {n === 0 ? "Falar com um engenheiro" : `Enviar ${n} ${n === 1 ? "situação" : "situações"} ao engenheiro`}
        </a>
        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" /> Resposta em até 24h, sem compromisso
        </span>
      </div>
    </aside>
  );
}

/**
 * Pedido de proposta: diz exatamente o que mandar e como o atendimento segue.
 * A mensagem do WhatsApp vem com os campos para o leitor completar.
 */
export function ProposalCta({ topic, postTitle }: CtaProps) {
  return (
    <aside className="not-prose my-12 rounded-2xl overflow-hidden border border-border/60 bg-card shadow-soft">
      <div className="relative bg-gradient-elegant px-6 py-6 md:px-8 md:py-7">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative">
          <span className="text-[11px] font-bold tracking-widest uppercase text-cta">Orçamento sem compromisso</span>
          <p className="text-xl md:text-2xl font-black text-white leading-tight mt-1.5">Receba a proposta técnica em até 24h</p>
          <p className="text-sm text-white/70 mt-2 leading-relaxed">
            Envie os dados abaixo pelo WhatsApp. A mensagem já vem com os campos para você completar.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-7 px-6 py-6 md:px-8 md:py-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">O que enviar</p>
          <ul className="space-y-2.5">
            {topic.whatToSend.map((w) => (
              <li key={w.label} className="flex items-start gap-2.5 text-sm text-foreground leading-snug">
                <CheckCircle2 className="h-4 w-4 text-cta mt-0.5 shrink-0" />
                {w.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Como funciona</p>
          <ol className="space-y-3">
            {serviceSteps.map((s, i) => (
              <li key={s.title} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="text-sm leading-snug">
                  <strong className="text-foreground">{s.title}.</strong>{" "}
                  <span className="text-muted-foreground">{s.desc}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 pb-6 md:px-8 md:pb-7">
        <a href={whatsappHref(proposalMessage(postTitle, topic))} target="_blank" rel="noopener noreferrer" data-cta="blog_proposta" className={`${ctaButton} h-12 px-6 text-sm`}>
          <Send className="h-4 w-4" /> Enviar dados pelo WhatsApp
        </a>
        <a href={PHONE_HREF} data-cta="blog_proposta_tel" className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
          <Phone className="h-4 w-4 text-primary" /> {PHONE_LABEL}
        </a>
      </div>
    </aside>
  );
}

/** Perguntas frequentes visíveis — o mesmo conteúdo do FAQPage do JSON-LD. */
export function PostFaq({ faq }: { faq: { question: string; answer: string }[] }) {
  return (
    <section id="faq" className="not-prose mt-12 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">Perguntas frequentes</h2>
      <div className="space-y-3">
        {faq.map((f, i) => (
          <details key={f.question} open={i === 0} className="group rounded-xl border border-border/60 bg-card px-5 open:shadow-soft">
            <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="text-[15px] font-bold leading-snug text-foreground">{f.question}</span>
              <span className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0 text-primary text-lg leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="text-sm text-muted-foreground leading-relaxed pb-5">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Avaliação real do Google, escolhida pelo tema do post. */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="not-prose relative mt-12 rounded-2xl border border-border/60 bg-secondary/40 p-6 md:p-8">
      <Quote className="absolute top-5 right-6 h-10 w-10 text-primary/10" aria-hidden="true" />
      <span className="text-[11px] font-bold tracking-widest uppercase text-cta">Quem já contratou</span>
      <blockquote className="mt-3 text-base md:text-lg text-foreground leading-relaxed">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
          {testimonial.name.charAt(0)}
        </span>
        <span className="text-sm">
          <strong className="text-foreground">{testimonial.name}</strong>
          <span className="block text-xs text-muted-foreground">Avaliação no Google</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Card do serviço na lateral (desktop): o que entrega + WhatsApp + telefone. */
export function ServiceSidebarCard({ topic, postTitle, service }: CtaProps & { service: { label: string; href: string } }) {
  return (
    <div className="bg-gradient-elegant rounded-xl p-5 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="relative">
        <span className="text-[10px] font-bold tracking-widest text-cta uppercase">Serviço relacionado</span>
        <p className="text-base font-bold text-white mt-1.5 mb-3 leading-snug">{service.label}</p>
        <ul className="space-y-2 mb-4">
          {topic.included.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-white/80 leading-snug">
              <CheckCircle2 className="h-3.5 w-3.5 text-cta mt-px shrink-0" />{item}
            </li>
          ))}
        </ul>
        <a href={whatsappHref(articleMessage(postTitle, topic))} target="_blank" rel="noopener noreferrer" data-cta="blog_sidebar" className={`${ctaButton} w-full h-10 text-xs`}>
          <WhatsAppGlyph className="h-3.5 w-3.5" /> Pedir proposta pelo WhatsApp
        </a>
        <div className="flex items-center justify-between gap-2 mt-3">
          <Link to={service.href} className="text-xs font-semibold text-white/70 hover:text-white inline-flex items-center gap-1 transition-colors">
            Ver o serviço <ArrowRight className="h-3 w-3" />
          </Link>
          <a href={PHONE_HREF} data-cta="blog_sidebar_tel" className="text-xs text-white/60 hover:text-white inline-flex items-center gap-1 transition-colors">
            <Phone className="h-3 w-3" />{PHONE_LABEL}
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Barra fixa no celular, onde a lateral não aparece. Entra depois do hero e
 * substitui o botão flutuante genérico (escondido nos posts pelo
 * `WhatsAppButton`) por um que cita o tema.
 */
export function StickyMobileCta({ topic, postTitle, visible }: CtaProps & { visible: boolean }) {
  const tab = visible ? 0 : -1;
  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!visible}
    >
      <div
        className="flex items-center gap-3 bg-background/95 backdrop-blur-md border-t border-border px-4 pt-3 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)]"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-bold leading-tight text-foreground truncate">Dúvida sobre {topic.shortLabel}?</p>
          <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">Engenheiro responde em até 24h</p>
        </div>
        <a href={PHONE_HREF} tabIndex={tab} data-cta="blog_sticky_tel" aria-label={`Ligar para ${PHONE_LABEL}`}
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-primary shrink-0">
          <Phone className="h-4 w-4" />
        </a>
        <a href={whatsappHref(articleMessage(postTitle, topic))} target="_blank" rel="noopener noreferrer" tabIndex={tab} data-cta="blog_sticky_mobile"
          className={`${ctaButton} h-11 px-4 text-sm shrink-0`}>
          <WhatsAppGlyph /> WhatsApp
        </a>
      </div>
    </div>
  );
}

/** Linha de números institucionais (mesmos da home). */
export function TrustStats({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {trustStats.map((s) => (
        <span key={s.label} className="text-xs text-muted-foreground">
          <strong className="text-sm font-black text-primary mr-1">{s.value}</strong>{s.label}
        </span>
      ))}
    </div>
  );
}
