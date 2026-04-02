import ServicePage from "@/components/ServicePage";
import { Wind } from "lucide-react";

export default function ProjetosClimatizacao() {
  return (
    <ServicePage
      icon={Wind}
      title="Projetos de Climatização"
      subtitle="Projetos HVAC e sistemas de climatização industrial e comercial."
      description="Desenvolvemos projetos completos de climatização (HVAC) para ambientes industriais, comerciais e corporativos. Do dimensionamento à especificação dos equipamentos, nossos projetos garantem conforto térmico, qualidade do ar e eficiência energética, em conformidade com as normas técnicas vigentes."
      benefits={[
        "Projetos HVAC completos e detalhados",
        "Dimensionamento preciso de carga térmica",
        "Especificação técnica dos equipamentos",
        "Conformidade com normas ABNT e ASHRAE",
        "Eficiência energética otimizada",
        "Integração com PMOC obrigatório",
      ]}
      targetAudience={[
        "Construtoras e incorporadoras",
        "Shopping centers e centros comerciais",
        "Indústrias com ambientes controlados",
        "Hospitais e ambientes de saúde",
      ]}
      process={[
        { title: "Levantamento de necessidades", desc: "Analisamos o ambiente, uso e requisitos de conforto térmico." },
        { title: "Cálculo de carga térmica", desc: "Dimensionamos a capacidade necessária para cada ambiente." },
        { title: "Projeto executivo", desc: "Desenvolvemos o projeto com planta, detalhes e especificações." },
        { title: "Acompanhamento", desc: "Acompanhamos a instalação e comissionamento do sistema." },
      ]}
      faqs={[
        { q: "Qual a diferença entre projeto de climatização e PMOC?", a: "O projeto define o sistema a ser instalado. O PMOC é o plano de manutenção obrigatório para sistemas já instalados." },
        { q: "O projeto inclui especificação de equipamentos?", a: "Sim. Incluímos dimensionamento, marcas e modelos recomendados, tubulações, dutos e controles." },
        { q: "Atendem projetos residenciais?", a: "Nosso foco é em projetos industriais e comerciais, mas podemos avaliar demandas residenciais de maior porte." },
      ]}
      relatedServices={[
        { label: "PMOC", href: "/servicos/pmoc" },
        { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
      ]}
    />
  );
}
