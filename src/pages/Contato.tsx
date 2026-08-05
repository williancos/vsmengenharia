import { Mail, Phone, Clock, MapPin, Send, Shield, CheckCircle2, ArrowRight, MessageSquare, Building2, ChevronRight, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useMemo } from "react";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "react-router-dom";
import RevealSection from "@/components/RevealSection";
import { trackConversion } from "@/lib/conversions";

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "contato@vsmengenharia.com", href: "mailto:contato@vsmengenharia.com", desc: "Resposta em até 24h" },
  { icon: Phone, label: "WhatsApp", value: "(11) 95453-4057", href: "https://wa.me/5511954534057", desc: "Atendimento imediato" },
  { icon: Clock, label: "Horário", value: "Seg a Sex – 08h às 18h", href: undefined, desc: "Horário comercial" },
  { icon: MapPin, label: "Endereço", value: "Rua Mandu, Vila Granada – São Paulo/SP, CEP 03622-000", href: "https://www.google.com/maps/search/?api=1&query=Rua+Mandu+Vila+Granada+São+Paulo+SP+03622-000", desc: "Atendimento em todo Sudeste" },
];

const faqs = [
  { q: "Quanto tempo leva para receber um orçamento?", a: "Enviamos uma proposta técnica detalhada em até 24 horas após o primeiro contato." },
  { q: "Vocês atendem fora do Sudeste?", a: "Nosso foco é o Sudeste, mas atendemos demandas pontuais em todo o Brasil mediante consulta." },
  { q: "A consultoria inicial é realmente gratuita?", a: "Sim, oferecemos uma avaliação inicial sem compromisso para entender sua necessidade e recomendar a melhor solução." },
  { q: "Quais certificações vocês possuem?", a: "Todos os engenheiros possuem CREA ativo e habilitação específica para cada tipo de inspeção, com emissão de ART." },
];

const WHATSAPP_NUMBER = "5511954534057";
const SERVICE_LABELS: Record<string, string> = {
  nr13: "Inspeção NR-13 (Caldeiras e Vasos)",
  nr12: "Inspeção NR-12 (Segurança de Máquinas)",
  nr11: "NR-11 / Plano de Rigging",
  reclassificacao: "Reclassificação de Monta",
  pmoc: "PMOC",
  inspecoes: "Inspeções Técnicas",
  "projetos-mecanicos": "Projetos Mecânicos",
  climatizacao: "Projetos de Climatização",
  consultoria: "Consultoria Gratuita",
  outro: "Outro",
};

export default function Contato() {
  useSEO({
    title: "Contato | Fale com Engenheiro Especialista — VSM Engenharia",
    description: "Entre em contato com engenheiro especialista da VSM. Consultoria gratuita, atendimento em 24h via WhatsApp, telefone ou e-mail. Todo Sudeste.",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const nome = get("nome");
    const empresa = get("empresa");
    const email = get("email");
    const telefone = get("telefone");
    const servicoVal = get("servico");
    const servico = SERVICE_LABELS[servicoVal] || servicoVal;
    const mensagem = get("mensagem");

    // Monta a mensagem que abre no WhatsApp já preenchida com os dados do formulário
    const linhas = [
      "*Solicitação de orçamento — site VSM Engenharia*",
      `*Nome:* ${nome}`,
      empresa && `*Empresa:* ${empresa}`,
      `*E-mail:* ${email}`,
      telefone && `*Telefone:* ${telefone}`,
      `*Serviço:* ${servico}`,
      `*Mensagem:* ${mensagem}`,
    ].filter(Boolean);
    const texto = encodeURIComponent(linhas.join("\n"));

    // Aberto dentro do gesto do clique — em setTimeout o navegador bloquearia.
    const win = window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
    if (!win) {
      // Popup bloqueado: não houve entrega, então não conta conversão. O painel
      // de sucesso oferece o link manual, cujo clique vira conversão de WhatsApp.
      setSubmitted(true);
      return;
    }
    win.opener = null;

    // Conversão só depois da entrega confirmada, nunca no onSubmit cru.
    trackConversion("form", { form_location: "contato", service: servicoVal });
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F3B63] via-[#153d5e] to-[#1a4a6e]">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-10 right-10 opacity-5">
          <MessageSquare className="h-64 w-64 text-white" />
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative container mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link to="/" className="hover:text-white/80 transition-colors">Início</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/70">Contato</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-cta/20 text-cta px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Fale Conosco</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-5">
              Fale com um <span className="text-cta">engenheiro especialista</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
              Consultoria técnica gratuita com resposta em até 24h. Nossos engenheiros com CREA ativo estão prontos para orientar sua empresa.
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { icon: Shield, text: "CREA Ativo" },
                { icon: CheckCircle2, text: "500+ Inspeções" },
                { icon: Star, text: "5.0 no Google" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-white/60 text-sm">
                  <b.icon className="h-4 w-4 text-cta" />
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content: Form + Info ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">

            {/* Form */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <RevealSection>
                <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Solicite um orçamento</h2>
                      <p className="text-xs text-muted-foreground">Preencha o formulário e receba uma proposta personalizada</p>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="bg-success/5 border border-success/20 rounded-xl p-10 text-center">
                      <div className="h-16 w-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="h-8 w-8 text-success" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Abrimos o WhatsApp com sua solicitação!</h3>
                      <p className="text-sm text-muted-foreground mb-6">Se o WhatsApp não abriu automaticamente, toque no botão abaixo para enviar sua mensagem. Nossa equipe responde em até 24h.</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">
                          Enviar nova mensagem
                        </Button>
                        <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-full">
                          <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                            <Phone className="h-4 w-4 mr-2" />Falar no WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block text-foreground">Nome *</label>
                          <Input name="nome" placeholder="Seu nome completo" required className="h-11 rounded-lg bg-background border-border/60 focus:border-primary/40" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block text-foreground">Empresa</label>
                          <Input name="empresa" placeholder="Nome da empresa" className="h-11 rounded-lg bg-background border-border/60 focus:border-primary/40" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block text-foreground">E-mail *</label>
                          <Input name="email" type="email" placeholder="seu@email.com" required className="h-11 rounded-lg bg-background border-border/60 focus:border-primary/40" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block text-foreground">Telefone</label>
                          <Input name="telefone" placeholder="(11) 95453-4057" className="h-11 rounded-lg bg-background border-border/60 focus:border-primary/40" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-foreground">Serviço de interesse *</label>
                        <select name="servico" required className="flex h-11 w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-primary/40">
                          <option value="">Selecione o serviço...</option>
                          <option value="nr13">Inspeção NR-13 (Caldeiras e Vasos)</option>
                          <option value="nr12">Inspeção NR-12 (Segurança de Máquinas)</option>
                          <option value="nr11">NR-11 / Plano de Rigging</option>
                          <option value="reclassificacao">Reclassificação de Monta</option>
                          <option value="pmoc">PMOC</option>
                          <option value="inspecoes">Inspeções Técnicas</option>
                          <option value="projetos-mecanicos">Projetos Mecânicos</option>
                          <option value="climatizacao">Projetos de Climatização</option>
                          <option value="consultoria">Consultoria Gratuita</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-foreground">Mensagem *</label>
                        <Textarea name="mensagem" placeholder="Descreva sua necessidade, tipo de equipamento, prazo desejado..." rows={5} required className="rounded-lg bg-background border-border/60 focus:border-primary/40 resize-none" />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base h-12 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:scale-[1.01] transition-all">
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Solicitação
                      </Button>
                      <p className="text-[11px] text-muted-foreground text-center">
                        Ao enviar, você receberá uma proposta técnica personalizada em até 24h.
                      </p>
                    </form>
                  )}
                </div>
              </RevealSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              {/* Contact cards */}
              <RevealSection delay={100}>
                <div className="space-y-3">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-soft transition-all hover:-translate-y-0.5">
                      <div className="h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:text-cta transition-colors truncate block">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold truncate">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Redes sociais */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Siga-nos</span>
                  <a href="https://www.instagram.com/vsm_engenharia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram VSM Engenharia" className="h-10 w-10 rounded-xl bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/engenheiro-mec%C3%A2nico-vinicius-souza-692603203/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn VSM Engenharia" className="h-10 w-10 rounded-xl bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </RevealSection>

              {/* WhatsApp CTA */}
              <RevealSection delay={200}>
                <div className="bg-gradient-elegant rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 pattern-dots opacity-10" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cta/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageSquare className="h-5 w-5 text-cta" />
                      <span className="text-[10px] font-bold tracking-widest text-cta uppercase">Resposta Imediata</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Prefere falar agora?</h3>
                    <p className="text-sm text-white/60 mb-4">Converse diretamente com um engenheiro pelo WhatsApp.</p>
                    <Button asChild size="lg" className="w-full bg-cta text-cta-foreground hover:bg-cta-hover font-semibold rounded-full shadow-md">
                      <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                        <Phone className="h-4 w-4 mr-2" />
                        Falar no WhatsApp
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </RevealSection>

              {/* Trust box */}
              <RevealSection delay={300}>
                <div className="bg-card rounded-xl border border-border/50 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-bold">Por que a VSM?</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Engenheiros com CREA ativo e habilitação específica",
                      "Emissão de ART em todos os serviços",
                      "Mais de 500 inspeções realizadas",
                      "Laudos completos com documentação fotográfica",
                      "Consultoria inicial gratuita e sem compromisso",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cta mt-0.5 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <div className="text-center mb-10">
                <span className="bg-cta/10 text-cta px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Dúvidas Frequentes</span>
                <h2 className="text-2xl md:text-3xl font-bold">Perguntas sobre nossos serviços</h2>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left bg-card rounded-xl border border-border/50 p-5 hover:shadow-soft transition-all group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-sm font-semibold group-hover:text-cta transition-colors">{faq.q}</h3>
                      <ChevronRight className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-90" : ""}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 mt-3" : "max-h-0"}`}>
                      <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-3">{faq.a}</p>
                    </div>
                  </button>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <RevealSection>
            <div className="relative bg-gradient-elegant rounded-2xl p-8 md:p-14 overflow-hidden text-center">
              <div className="absolute inset-0 pattern-dots opacity-10" />
              <div className="absolute top-0 right-0 w-72 h-72 bg-cta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative max-w-2xl mx-auto">
                <span className="bg-cta/20 text-cta px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 inline-block">Consultoria Gratuita</span>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  Não sabe qual serviço <span className="text-cta">sua empresa precisa?</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-7">
                  Agende uma avaliação gratuita com nossos engenheiros. Sem compromisso, sem custos.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-7 h-13 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:scale-[1.02] transition-all">
                    <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-5 w-5 mr-2" />Agendar Avaliação Gratuita
                    </a>
                  </Button>
                  <Button asChild className="bg-white text-primary font-semibold px-7 h-13 rounded-full hover:bg-white/90 transition-all">
                    <Link to="/servicos/consultoria-gratuita">
                      Ver Serviços <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
