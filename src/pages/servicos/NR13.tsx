import ServicePage from "@/components/ServicePage";
import { ClipboardCheck } from "lucide-react";

export default function NR13() {
  return (
    <ServicePage
      icon={ClipboardCheck}
      title="Inspeção NR13"
      subtitle="Inspeções, laudos técnicos, prontuários e livro de registro para caldeiras e vasos de pressão."
      description="A NR13 regulamenta a operação de caldeiras, vasos de pressão e tubulações em ambientes industriais. Realizamos inspeções periódicas completas, com emissão de laudos técnicos, prontuários e livros de registro, garantindo que sua empresa esteja em total conformidade com a norma e segura contra riscos de acidentes."
      benefits={[
        "Conformidade total com a NR13 e legislação vigente",
        "Prevenção de acidentes com caldeiras e vasos de pressão",
        "Laudos técnicos detalhados com memoriais de cálculo",
        "Prontuário e livro de registro conforme exigências normativas",
        "Redução de riscos de multas e interdições",
        "Aumento da vida útil dos equipamentos",
      ]}
      targetAudience={[
        "Indústrias com caldeiras a vapor",
        "Empresas com vasos de pressão",
        "Indústrias alimentícias e sucroalcooleiras",
        "Plantas industriais com tubulações pressurizadas",
      ]}
      process={[
        { title: "Diagnóstico inicial", desc: "Analisamos sua documentação atual e identificamos as necessidades de inspeção." },
        { title: "Inspeção em campo", desc: "Realizamos inspeção visual, dimensional e de ensaios nos equipamentos." },
        { title: "Elaboração do laudo", desc: "Emitimos laudo técnico com memoriais de cálculo e recomendações." },
        { title: "Entrega e acompanhamento", desc: "Entregamos toda documentação e acompanhamos a implementação das recomendações." },
      ]}
      faqs={[
        { q: "Qual a periodicidade da inspeção NR13?", a: "Depende do tipo de equipamento. Caldeiras devem ser inspecionadas anualmente (inspeção de segurança) e a cada 15 meses (inspeção periódica interna). Vasos de pressão têm periodicidade definida pela categoria." },
        { q: "O que acontece se minha empresa não tiver a inspeção em dia?", a: "A empresa fica sujeita a multas, interdição dos equipamentos e pode ser responsabilizada criminalmente em caso de acidentes." },
        { q: "Quais documentos são entregues?", a: "Laudo técnico, prontuário atualizado, livro de registro e memorial de cálculo quando aplicável." },
      ]}
      relatedServices={[
        { label: "Inspeção NR12", href: "/servicos/nr12" },
        { label: "NR11 / Plano de Rigging", href: "/servicos/nr11" },
        { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
      ]}
    />
  );
}
