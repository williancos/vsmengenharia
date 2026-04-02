import { Shield, Award, Users, TrendingUp, Target, Eye, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre a VSM Engenharia</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com segurança, qualidade e conformidade normativa para a indústria do Sudeste.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A VSM Engenharia é uma empresa especializada em engenharia mecânica aplicada à indústria, 
            com foco em inspeções técnicas, laudos, planos de rigging e adequação às normas NR13, NR12, NR11 e PMOC.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Atuamos na região Sudeste do Brasil, oferecendo soluções que garantem a segurança dos colaboradores, 
            a conformidade legal e a eficiência operacional das empresas. Nossos laudos técnicos e memoriais de 
            cálculo são elaborados com rigor, garantindo que cada equipamento opere dentro das normas vigentes.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Além das inspeções normativas, somos referência em reclassificação de monta para veículos sinistrados, 
            projetos mecânicos sob medida e projetos de climatização (HVAC).
          </p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "Missão", text: "Prestar serviços técnicos e consultoria em engenharia com qualidade, segurança e cumprimento de prazos, garantindo a satisfação dos nossos clientes." },
              { icon: Eye, title: "Visão", text: "Ser reconhecida como uma das maiores empresas de engenharia do país, oferecendo um trabalho personalizado e de alta confiabilidade." },
              { icon: Heart, title: "Valores", text: "Qualidade, Esforço, Ética e Segurança. São os pilares que guiam cada projeto e inspeção que realizamos." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Área de Atuação</h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Atendemos toda a região Sudeste do Brasil — São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Shield, label: "Qualidade" },
              { icon: Award, label: "Segurança" },
              { icon: Users, label: "Ética" },
              { icon: TrendingUp, label: "Eficiência" },
            ].map((v) => (
              <div key={v.label} className="bg-card rounded-lg border p-4 flex flex-col items-center gap-2">
                <v.icon className="h-8 w-8 text-success" />
                <span className="text-sm font-medium">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">Quer saber mais sobre a VSM?</h2>
          <p className="text-primary-foreground/70 mb-6">Fale com um engenheiro e descubra como podemos ajudar sua empresa.</p>
          <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Falar com Engenheiro</a>
          </Button>
        </div>
      </section>
    </>
  );
}
