import ServicePage from "@/components/ServicePage";
import { FileCheck } from "lucide-react";

export default function ConsultoriaGratuita() {
  return (
    <ServicePage
      icon={FileCheck}
      title="Consultoria Gratuita de Engenharia"
      subtitle="Avaliação gratuita para verificar se sua empresa está em conformidade com as normas regulamentadoras."
      description="Oferecemos uma consultoria gratuita e sem compromisso para avaliar a situação da sua empresa em relação às normas NR13, NR12, NR11 e PMOC. Nosso engenheiro analisa suas necessidades, identifica riscos e apresenta um diagnóstico com recomendações para garantir a conformidade e segurança."
      benefits={[
        "Avaliação 100% gratuita e sem compromisso",
        "Diagnóstico rápido de conformidade normativa",
        "Identificação de riscos e prioridades",
        "Orientação sobre as normas aplicáveis",
        "Proposta técnica personalizada",
        "Atendimento direto com engenheiro especialista",
      ]}
      targetAudience={[
        "Empresas que não sabem se estão em conformidade",
        "Gestores preparando-se para auditorias",
        "Indústrias em expansão ou modernização",
        "Empresas que nunca realizaram inspeções normativas",
      ]}
      process={[
        { title: "Contato inicial", desc: "Entre em contato e descreva brevemente sua situação e necessidades." },
        { title: "Análise preliminar", desc: "Nosso engenheiro analisa as informações e identifica as normas aplicáveis." },
        { title: "Diagnóstico gratuito", desc: "Apresentamos um diagnóstico com os principais riscos e recomendações." },
        { title: "Proposta técnica", desc: "Se necessário, elaboramos proposta técnica personalizada para regularização." },
      ]}
      faqs={[
        { q: "A consultoria é realmente gratuita?", a: "Sim. A avaliação inicial é totalmente gratuita e sem compromisso. Você só investe se decidir seguir com os serviços recomendados." },
        { q: "Como funciona a consultoria?", a: "Pode ser feita remotamente (por telefone/vídeo) ou presencialmente, dependendo da complexidade. O engenheiro avalia sua situação e apresenta um diagnóstico." },
        { q: "Quanto tempo leva a avaliação?", a: "A avaliação inicial costuma ser feita em até 48 horas após o contato." },
      ]}
      relatedServices={[
        { label: "Inspeção NR13", href: "/servicos/nr13" },
        { label: "Inspeção NR12", href: "/servicos/nr12" },
        { label: "NR11 / Plano de Rigging", href: "/servicos/nr11" },
        { label: "PMOC", href: "/servicos/pmoc" },
      ]}
    />
  );
}
