import ServicePage from "@/components/ServicePage";
import { Wrench } from "lucide-react";

export default function ProjetosMecanicos() {
  return (
    <ServicePage
      icon={Wrench}
      title="Projetos Mecânicos"
      subtitle="Desenvolvimento de proteções, máquinas e equipamentos sob medida para sua indústria."
      description="Desenvolvemos projetos mecânicos completos, desde proteções de máquinas para adequação à NR12 até equipamentos especiais sob demanda. Nossos projetos incluem memorial de cálculo, desenhos técnicos, lista de materiais e ART, garantindo soluções seguras e eficientes para sua operação."
      benefits={[
        "Projetos completos com memorial de cálculo",
        "Desenhos técnicos detalhados (2D e 3D)",
        "Proteções de máquinas conforme NR12",
        "Equipamentos especiais sob medida",
        "Lista de materiais e especificações técnicas",
        "ART de projeto inclusa",
      ]}
      targetAudience={[
        "Indústrias que precisam adequar máquinas à NR12",
        "Empresas que necessitam de equipamentos especiais",
        "Indústrias em expansão ou modernização",
        "Empresas que precisam de proteções mecânicas",
      ]}
      process={[
        { title: "Briefing técnico", desc: "Levantamos todas as necessidades e requisitos do projeto." },
        { title: "Desenvolvimento conceitual", desc: "Criamos o conceito e validamos com o cliente." },
        { title: "Projeto detalhado", desc: "Desenvolvemos desenhos técnicos, memoriais e especificações." },
        { title: "Acompanhamento da fabricação", desc: "Acompanhamos a fabricação e montagem quando solicitado." },
      ]}
      faqs={[
        { q: "Vocês fabricam os equipamentos projetados?", a: "Nosso foco é o projeto de engenharia. Podemos indicar fabricantes parceiros e acompanhar a fabricação." },
        { q: "O projeto inclui memorial de cálculo?", a: "Sim. Todos os projetos incluem memorial de cálculo, desenhos técnicos detalhados e ART." },
        { q: "Qual o prazo para desenvolvimento de um projeto?", a: "O prazo depende da complexidade. Projetos simples levam de 5 a 15 dias úteis. Projetos complexos podem levar de 30 a 60 dias." },
      ]}
      relatedServices={[
        { label: "Inspeção NR12", href: "/servicos/nr12" },
        { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
        { label: "Projetos de Climatização", href: "/servicos/projetos-climatizacao" },
      ]}
    />
  );
}
