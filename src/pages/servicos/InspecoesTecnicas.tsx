import ServicePage from "@/components/ServicePage";
import { Search } from "lucide-react";

export default function InspecoesTecnicas() {
  return (
    <ServicePage
      icon={Search}
      title="Inspeções Técnicas"
      subtitle="Inspeções em máquinas e equipamentos, estruturas metálicas, sistemas de climatização e perícias técnicas extrajudiciais."
      description="Realizamos inspeções técnicas especializadas em diversos tipos de equipamentos e estruturas industriais. Nossos engenheiros avaliam as condições operacionais, identificam riscos e emitem laudos técnicos completos com recomendações de manutenção e adequação."
      benefits={[
        "Inspeções em máquinas e equipamentos industriais",
        "Avaliação de estruturas metálicas e soldas",
        "Inspeção de sistemas de climatização",
        "Perícias técnicas extrajudiciais",
        "Laudos com recomendações detalhadas",
        "Equipe de engenheiros especializados",
      ]}
      targetAudience={[
        "Indústrias de todos os portes",
        "Empresas com estruturas metálicas",
        "Edifícios com sistemas de climatização",
        "Empresas envolvidas em disputas técnicas",
      ]}
      process={[
        { title: "Solicitação e escopo", desc: "Definimos juntos o escopo da inspeção e os equipamentos/estruturas a serem avaliados." },
        { title: "Inspeção em campo", desc: "Realizamos inspeção visual, dimensional e ensaios necessários." },
        { title: "Análise e relatório", desc: "Elaboramos relatório técnico com análise detalhada e recomendações." },
        { title: "Acompanhamento", desc: "Acompanhamos a implementação das recomendações quando solicitado." },
      ]}
      faqs={[
        { q: "Quais tipos de inspeção vocês realizam?", a: "Inspeções em máquinas e equipamentos, estruturas metálicas (galpões, mezaninos, torres), sistemas de climatização e perícias técnicas extrajudiciais." },
        { q: "A inspeção é destrutiva?", a: "Na grande maioria dos casos, não. Utilizamos métodos de ensaios não destrutivos (END) como inspeção visual, ultrassom e líquidos penetrantes." },
        { q: "Vocês emitem ART?", a: "Sim. Todos os nossos serviços são acompanhados de ART (Anotação de Responsabilidade Técnica) emitida pelo CREA." },
      ]}
      relatedServices={[
        { label: "Inspeção NR13", href: "/servicos/nr13" },
        { label: "Inspeção NR12", href: "/servicos/nr12" },
        { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos" },
      ]}
    />
  );
}
