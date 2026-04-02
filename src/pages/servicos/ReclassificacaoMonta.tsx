import ServicePage from "@/components/ServicePage";
import { Truck } from "lucide-react";

export default function ReclassificacaoMonta() {
  return (
    <ServicePage
      icon={Truck}
      title="Reclassificação de Monta"
      subtitle="Reclassificação de veículos sinistrados (pequena, média e grande monta) com laudo técnico para o DETRAN."
      description="A reclassificação de monta é o processo que permite regularizar veículos sinistrados junto ao DETRAN. Realizamos a perícia técnica completa, emitimos laudo de engenharia com memorial de cálculo e ART, acompanhamos todo o processo junto ao órgão de trânsito para que seu veículo volte a circular legalmente."
      benefits={[
        "Regularização completa do veículo junto ao DETRAN",
        "Laudo técnico de engenharia com ART",
        "Memorial de cálculo detalhado da estrutura",
        "Valorização do veículo na revenda",
        "Processo ágil e acompanhamento completo",
        "Experiência em todas as categorias de monta",
      ]}
      targetAudience={[
        "Proprietários de veículos sinistrados",
        "Oficinas e funilarias",
        "Frotistas e transportadoras",
        "Concessionárias e revendas de veículos",
      ]}
      process={[
        { title: "Análise do sinistro", desc: "Avaliamos a documentação e o estado do veículo após o reparo." },
        { title: "Perícia técnica", desc: "Realizamos inspeção técnica completa com medições e ensaios." },
        { title: "Laudo de engenharia", desc: "Emitimos laudo técnico com memorial de cálculo, fotos e ART." },
        { title: "Protocolo no DETRAN", desc: "Acompanhamos todo o processo de reclassificação junto ao DETRAN." },
      ]}
      faqs={[
        { q: "O que é reclassificação de monta?", a: "É o processo técnico e legal que permite que um veículo sinistrado (com registro de grande, média ou pequena monta no DETRAN) volte a circular após os reparos, mediante laudo de engenharia." },
        { q: "Qual a diferença entre reclassificação e baixa definitiva?", a: "A reclassificação permite que o veículo volte a circular legalmente. A baixa definitiva encerra o registro do veículo permanentemente." },
        { q: "Quanto tempo demora o processo?", a: "O prazo varia conforme o DETRAN de cada estado, mas geralmente leva de 30 a 90 dias após a entrega de toda documentação." },
        { q: "Posso revender o veículo após a reclassificação?", a: "Sim. Após a reclassificação, o veículo fica com documentação regular e pode ser revendido normalmente, embora o histórico de sinistro conste no prontuário." },
      ]}
      relatedServices={[
        { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
        { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos" },
      ]}
    />
  );
}
