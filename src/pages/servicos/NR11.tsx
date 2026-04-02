import ServicePage from "@/components/ServicePage";
import { HardHat } from "lucide-react";

export default function NR11() {
  return (
    <ServicePage
      icon={HardHat}
      title="NR11 / Plano de Rigging"
      subtitle="Inspeções técnicas e planos de rigging para caminhão munck, guindauto, ponte rolante, empilhadeira e plataforma elevatória."
      description="A NR11 regulamenta o transporte, movimentação, armazenagem e manuseio de materiais. Elaboramos planos de rigging detalhados e realizamos inspeções técnicas em equipamentos de içamento, garantindo que suas operações de movimentação de carga sejam seguras e estejam em conformidade com a norma."
      benefits={[
        "Planos de rigging personalizados para cada operação",
        "Inspeção técnica de equipamentos de içamento",
        "Cálculos estruturais e de carga detalhados",
        "Conformidade com NR11 e normas ABNT aplicáveis",
        "Prevenção de acidentes em operações de içamento",
        "Documentação completa para auditorias",
      ]}
      targetAudience={[
        "Empresas com caminhões munck e guindautos",
        "Indústrias com pontes rolantes e talhas",
        "Operações com empilhadeiras e plataformas elevatórias",
        "Empresas de logística e transporte pesado",
      ]}
      process={[
        { title: "Análise da operação", desc: "Avaliamos o tipo de carga, equipamentos disponíveis e condições do local." },
        { title: "Elaboração do plano de rigging", desc: "Desenvolvemos o plano com cálculos de carga, posicionamento e acessórios." },
        { title: "Inspeção dos equipamentos", desc: "Inspecionamos todos os equipamentos envolvidos na operação." },
        { title: "Emissão de documentação", desc: "Entregamos plano de rigging, laudos e relatórios de inspeção." },
      ]}
      faqs={[
        { q: "O que é um plano de rigging?", a: "É um documento técnico que detalha como uma operação de içamento deve ser realizada, incluindo cálculos de carga, posicionamento de equipamentos, acessórios necessários e procedimentos de segurança." },
        { q: "Quais equipamentos precisam de inspeção NR11?", a: "Todos os equipamentos de transporte e movimentação de materiais, incluindo empilhadeiras, pontes rolantes, talhas, guindastes, caminhões munck e plataformas elevatórias." },
        { q: "Com que frequência devo atualizar o plano de rigging?", a: "O plano deve ser atualizado sempre que houver mudança nas condições da operação, nos equipamentos utilizados ou no tipo/peso da carga." },
      ]}
      relatedServices={[
        { label: "Inspeção NR13", href: "/servicos/nr13" },
        { label: "Inspeção NR12", href: "/servicos/nr12" },
        { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
      ]}
    />
  );
}
