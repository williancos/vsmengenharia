import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fale diretamente com um engenheiro especialista. Estamos prontos para atender sua demanda.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "E-mail", value: "vsengenhariamecanica@gmail.com", href: "mailto:vsengenhariamecanica@gmail.com" },
                  { icon: Phone, label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
                  { icon: Clock, label: "Horário", value: "Segunda a Sexta – 08h às 18h", href: undefined },
                  { icon: MapPin, label: "Atuação", value: "Região Sudeste do Brasil", href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-cta transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-semibold">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="w-full bg-cta text-cta-foreground hover:bg-cta-hover font-semibold">
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Falar com Engenheiro no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-xl font-bold mb-6">Envie uma Mensagem</h2>
              {submitted ? (
                <div className="bg-success/10 rounded-lg p-8 text-center">
                  <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Mensagem enviada!</h3>
                  <p className="text-sm text-muted-foreground">Entraremos em contato em breve. Obrigado!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Nome</label>
                      <Input placeholder="Seu nome" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Empresa</label>
                      <Input placeholder="Nome da empresa" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">E-mail</label>
                      <Input type="email" placeholder="seu@email.com" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Telefone</label>
                      <Input placeholder="(11) 99999-9999" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Tipo de serviço</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Selecione...</option>
                      <option value="nr13">Inspeção NR13</option>
                      <option value="nr12">Inspeção NR12</option>
                      <option value="nr11">NR11 / Plano de Rigging</option>
                      <option value="pmoc">PMOC</option>
                      <option value="reclassificacao">Reclassificação de Monta</option>
                      <option value="inspecoes">Inspeções Técnicas</option>
                      <option value="projetos-mecanicos">Projetos Mecânicos</option>
                      <option value="climatizacao">Projetos de Climatização</option>
                      <option value="consultoria">Consultoria Gratuita</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Mensagem</label>
                    <Textarea placeholder="Descreva sua necessidade..." rows={4} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
