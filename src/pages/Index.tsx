import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield, FileCheck, AlertTriangle, CheckCircle2, Users, Award,
  Wrench, ClipboardCheck, Truck, Wind, HardHat, Search, ArrowRight,
  TrendingUp, BadgeCheck, Clock, DollarSign, Scale
} from "lucide-react";

const services = [
  { icon: ClipboardCheck, title: "NR13", desc: "Inspeções, laudos, prontuários e livro de registro para caldeiras e vasos de pressão.", href: "/servicos/nr13" },
  { icon: Shield, title: "NR12", desc: "Análise de risco (APR), relatório técnico e adequação de máquinas e equipamentos.", href: "/servicos/nr12" },
  { icon: HardHat, title: "NR11 / Plano de Rigging", desc: "Inspeções técnicas e planos de rigging para equipamentos de içamento.", href: "/servicos/nr11" },
  { icon: Wind, title: "PMOC", desc: "Plano de manutenção, operação e controle conforme Lei 13.589.", href: "/servicos/pmoc" },
  { icon: Truck, title: "Reclassificação de Monta", desc: "Reclassificação de veículos sinistrados junto ao DETRAN com laudo técnico.", href: "/servicos/reclassificacao-de-monta" },
  { icon: Search, title: "Inspeções Técnicas", desc: "Inspeções em máquinas, estruturas metálicas, climatização e perícias.", href: "/servicos/inspecoes-tecnicas" },
  { icon: Wrench, title: "Projetos Mecânicos", desc: "Desenvolvimento de proteções, máquinas e equipamentos sob medida.", href: "/servicos/projetos-mecanicos" },
  { icon: Wind, title: "Projetos de Climatização", desc: "Projetos HVAC e sistemas de climatização industrial e comercial.", href: "/servicos/projetos-climatizacao" },
  { icon: FileCheck, title: "Consultoria Gratuita", desc: "Avaliação gratuita de conformidade normativa para sua empresa.", href: "/servicos/consultoria-gratuita" },
];

const benefits = [
  { icon: Shield, title: "Segurança Garantida", desc: "Prevenção de acidentes e proteção dos seus colaboradores." },
  { icon: Scale, title: "Conformidade Legal", desc: "Adequação completa às normas NR13, NR12, NR11 e legislações vigentes." },
  { icon: TrendingUp, title: "Eficiência Operacional", desc: "Aumento da vida útil dos equipamentos e redução de paradas." },
  { icon: Clock, title: "Agilidade nos Prazos", desc: "Laudos e relatórios entregues dentro do prazo combinado." },
  { icon: DollarSign, title: "Custo-Benefício", desc: "Investimento que evita multas, interdições e prejuízos maiores." },
  { icon: BadgeCheck, title: "Laudos Robustos", desc: "Memoriais de cálculo detalhados e documentação técnica completa." },
];

const risks = [
  "Multas pesadas do Ministério do Trabalho",
  "Interdição de equipamentos e linhas de produção",
  "Acidentes graves com colaboradores",
  "Ações judiciais e indenizações trabalhistas",
  "Danos à reputação da empresa",
  "Perda de contratos com grandes clientes",
];

const stats = [
  { value: "500+", label: "Inspeções realizadas" },
  { value: "150+", label: "Empresas atendidas" },
  { value: "10+", label: "Anos de experiência" },
  { value: "100%", label: "Laudos aprovados" },
];

const blogPosts = [
  { title: "Checklist prático para contratar inspeção NR-13 com segurança", category: "NR13", href: "/blog" },
  { title: "Os 7 erros mais comuns na elaboração de Planos de Rigging", category: "NR11", href: "/blog" },
  { title: "Reclassificação de Monta x Baixa Definitiva: qual a melhor opção?", category: "Reclassificação", href: "/blog" },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Inspeções NR13, NR12 e NR11 com laudos completos para sua indústria
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Garantimos segurança, conformidade e redução de riscos em máquinas, estruturas e veículos. 
              Reclassificação de monta, projetos mecânicos e consultoria especializada no Sudeste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Solicitar Avaliação Gratuita
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base">
                <Link to="/contato">Ver Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-cta">{s.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Nossos Serviços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em engenharia mecânica para manter sua operação segura e em conformidade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group bg-card rounded-lg border p-6 hover:shadow-lg hover:border-cta/30 transition-all"
              >
                <s.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cta transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-cta mt-4 group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Evite Prejuízos */}
      <section className="bg-card py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-destructive font-bold text-sm uppercase tracking-wider mb-3">
                <AlertTriangle className="h-5 w-5" /> Atenção
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Evite <span className="text-destructive">Prejuízos</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Empresas sem inspeções em dia estão expostas a riscos sérios. Não espere a fiscalização chegar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {risks.map((r) => (
                <div key={r} className="flex items-start gap-3 bg-destructive/5 rounded-lg p-4">
                  <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{r}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Solicitar Avaliação Gratuita
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ao escolher a VSM, você garante
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card rounded-lg p-6 border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-success" />
                  </div>
                  <h3 className="font-semibold">{b.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Conteúdos em Destaque</h2>
            <p className="text-muted-foreground">Artigos técnicos para manter você informado sobre normas e segurança.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.title} to={post.href} className="group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all">
                <div className="h-40 bg-secondary flex items-center justify-center">
                  <FileCheck className="h-12 w-12 text-primary/30" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary bg-secondary px-2 py-1 rounded">{post.category}</span>
                  <h3 className="text-sm font-semibold mt-3 group-hover:text-cta transition-colors leading-snug">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/blog">Ver todos os artigos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-card py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Sobre a VSM Engenharia</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Somos uma empresa de engenharia mecânica com atuação no Sudeste do Brasil, 
              comprometida com a segurança, qualidade e conformidade normativa. 
              Elaboramos laudos técnicos e memoriais de cálculo detalhados, garantindo 
              que seus equipamentos operem dentro das normas vigentes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: Award, label: "Qualidade" },
                { icon: Shield, label: "Segurança" },
                { icon: Users, label: "Ética" },
                { icon: TrendingUp, label: "Eficiência" },
              ].map((v) => (
                <div key={v.label} className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{v.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/sobre">Conheça nossa história</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Entre em contato e solicite suas inspeções
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Fale diretamente com um engenheiro especialista. Avaliação inicial gratuita e sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Falar com Engenheiro
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base">
              <Link to="/contato">Enviar mensagem</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
