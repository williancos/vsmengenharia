import ServicePage from "@/components/ServicePage";
import { Wind } from "lucide-react";

export default function PMOC() {
  return (
    <ServicePage
      icon={Wind}
      title="PMOC"
      subtitle="Plano de Manutenção, Operação e Controle conforme Lei 13.589 para sistemas de climatização."
      description="O PMOC é obrigatório para todos os ambientes climatizados com capacidade acima de 5 TR (60.000 BTUs). Elaboramos e implementamos o plano completo de manutenção, operação e controle dos seus sistemas de climatização, garantindo qualidade do ar interior e conformidade com a Lei 13.589/2018."
      benefits={[
        "Conformidade com a Lei 13.589/2018",
        "Qualidade do ar interior garantida",
        "Redução de riscos de doenças respiratórias",
        "Maior eficiência energética dos sistemas",
        "Aumento da vida útil dos equipamentos",
        "Documentação completa para fiscalizações",
      ]}
      targetAudience={[
        "Shopping centers e centros comerciais",
        "Hospitais e clínicas",
        "Edifícios corporativos",
        "Indústrias com ambientes climatizados",
      ]}
      process={[
        { title: "Levantamento dos sistemas", desc: "Mapeamos todos os equipamentos de climatização do ambiente." },
        { title: "Elaboração do PMOC", desc: "Desenvolvemos o plano completo com cronograma de manutenções." },
        { title: "Implementação", desc: "Acompanhamos a execução das manutenções preventivas e corretivas." },
        { title: "Monitoramento", desc: "Controle contínuo da qualidade do ar e funcionamento dos equipamentos." },
      ]}
      faqs={[
        { q: "Quem é obrigado a ter o PMOC?", a: "Todo ambiente climatizado com capacidade acima de 5 TR (60.000 BTUs), sejam eles comerciais, industriais ou de serviços." },
        { q: "Qual a penalidade por não ter o PMOC?", a: "Multas, interdição do local e responsabilização em caso de problemas de saúde dos ocupantes." },
        { q: "Quem pode elaborar o PMOC?", a: "O PMOC deve ser elaborado por engenheiro habilitado com registro no CREA." },
      ]}
      relatedServices={[
        { label: "Projetos de Climatização", href: "/servicos/projetos-climatizacao" },
        { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
      ]}
    />
  );
}
