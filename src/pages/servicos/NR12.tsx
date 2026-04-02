import ServicePage from "@/components/ServicePage";
import { Shield } from "lucide-react";

export default function NR12() {
  return (
    <ServicePage
      icon={Shield}
      title="Inspeção NR12"
      subtitle="Análise de risco (APR), relatório técnico e adequação de máquinas e equipamentos conforme NR12."
      description="A NR12 trata da segurança no trabalho em máquinas e equipamentos. Realizamos análises de risco completas, elaboramos relatórios técnicos detalhados e desenvolvemos projetos de adequação para que suas máquinas operem em conformidade com a norma, protegendo seus colaboradores e evitando penalidades."
      benefits={[
        "Adequação completa de máquinas e equipamentos à NR12",
        "Análise Preliminar de Risco (APR) detalhada",
        "Projetos de proteções físicas e dispositivos de segurança",
        "Relatórios técnicos com memorial descritivo",
        "Redução do risco de acidentes de trabalho",
        "Conformidade para auditorias do Ministério do Trabalho",
      ]}
      targetAudience={[
        "Indústrias com parque de máquinas",
        "Empresas do setor alimentício e automotivo",
        "Indústrias metalúrgicas e mecânicas",
        "Empresas em preparação para auditorias",
      ]}
      process={[
        { title: "Levantamento de máquinas", desc: "Mapeamos todas as máquinas e equipamentos do seu parque industrial." },
        { title: "Análise de risco (APR)", desc: "Realizamos a Análise Preliminar de Risco de cada equipamento." },
        { title: "Relatório e projeto", desc: "Elaboramos relatório técnico e projetos de adequação quando necessário." },
        { title: "Acompanhamento", desc: "Acompanhamos a implementação das melhorias e adequações propostas." },
      ]}
      faqs={[
        { q: "A NR12 se aplica a quais tipos de máquinas?", a: "A NR12 se aplica a todas as máquinas e equipamentos utilizados no trabalho, desde prensas e tornos até serras, injetoras e guilhotinas." },
        { q: "Preciso adequar máquinas antigas?", a: "Sim. A NR12 exige que todas as máquinas, independente da idade, estejam em conformidade com os requisitos de segurança." },
        { q: "Qual a documentação necessária?", a: "Inventário de máquinas, APR, manual de instruções, procedimentos de segurança e certificados de adequação." },
      ]}
      relatedServices={[
        { label: "Inspeção NR13", href: "/servicos/nr13" },
        { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos" },
        { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
      ]}
    />
  );
}
