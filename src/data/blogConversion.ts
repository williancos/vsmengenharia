/**
 * Conversão no blog — texto por tema e montagem dos links de WhatsApp.
 *
 * Cada post cai num tema pelo `href` do serviço relacionado (o mesmo que o
 * `BlogPost` já resolve para o card de serviço). O tema define o que o leitor
 * vê nos CTAs: sinais de que precisa agir, o que mandar para receber proposta,
 * o que o serviço entrega e qual avaliação do Google aparece.
 *
 * Os links de WhatsApp saem com a mensagem preenchida citando o artigo: a VSM
 * sabe de onde o lead veio e o leitor não precisa pensar no que escrever. O
 * `ConversionListeners` já registra o clique como conversão (Ads + GA4); o
 * atributo `data-cta` de cada botão vai junto como `cta_location`.
 *
 * Regras de texto: tom técnico e formal, sem promessa que o site não sustenta
 * em outro lugar (prazo de 24h, ART, CREA e os números da home), sem checklist
 * operacional de inspeção (regra editorial de 31/07/2026).
 */
import { testimonialBy, type Testimonial } from "@/data/testimonials";

export const WHATSAPP_NUMBER = "5511954534057";
export const PHONE_HREF = "tel:+5511954534057";
export const PHONE_LABEL = "(11) 95453-4057";

export type TopicKey = "nr13" | "nr12" | "nr11" | "reclassificacao" | "pmoc" | "climatizacao" | "geral";

export interface BlogTopic {
  key: TopicKey;
  /** Objeto da conversa, usado no meio da frase: "falar com um engenheiro sobre ___". */
  subject: string;
  /** Rótulo curto para a barra fixa do celular: "Dúvida sobre ___?". */
  shortLabel: string;
  /** Para quem é o diagnóstico — fala com o leitor pelo equipamento que ele tem. */
  audience: string;
  /** Título do CTA de fechamento do post. */
  finalHeadline: string;
  /** Situações que o leitor reconhece — viram linhas da mensagem do WhatsApp. */
  signals: string[];
  /** O que mandar para receber proposta; `field` vira o campo a preencher na mensagem. */
  whatToSend: { label: string; field: string }[];
  /** O que o serviço entrega — card lateral. */
  included: string[];
  testimonial?: Testimonial;
}

const TOPICS: Record<TopicKey, Omit<BlogTopic, "key" | "testimonial"> & { testimonialName: string }> = {
  nr13: {
    subject: "caldeiras, vasos de pressão e tubulações (NR-13)",
    shortLabel: "NR-13",
    audience: "Para quem opera caldeiras, vasos de pressão ou tubulações",
    finalHeadline: "Precisa regularizar caldeiras ou vasos de pressão?",
    signals: [
      "Inspeção periódica vencida ou sem data registrada",
      "Prontuário incompleto, extraviado ou inexistente",
      "Placa de identificação ausente ou ilegível",
      "Auditoria, fiscalização ou exigência de seguradora próxima",
      "Equipamento novo, usado, transferido ou reparado ainda sem inspeção",
    ],
    whatToSend: [
      { label: "Foto da placa de identificação (fabricante, ano, PMTA)", field: "Equipamento (caldeira, vaso ou tubulação)" },
      { label: "Fluido de serviço e pressão de operação", field: "Fluido e pressão de operação" },
      { label: "Data do último laudo, se houver", field: "Último laudo (data)" },
      { label: "Cidade da instalação", field: "Cidade" },
    ],
    included: [
      "Inspeção externa, interna e ensaios quando aplicáveis",
      "Laudo técnico e atualização do prontuário",
      "ART registrada no CREA",
    ],
    testimonialName: "Leandro Rodrigues",
  },
  nr12: {
    subject: "adequação de máquinas à NR-12",
    shortLabel: "NR-12",
    audience: "Para quem opera máquinas e equipamentos industriais",
    finalHeadline: "Precisa adequar máquinas à NR-12?",
    signals: [
      "Máquinas sem apreciação de risco documentada",
      "Proteções removidas, improvisadas ou sem intertravamento",
      "Notificação de auditor-fiscal ou auditoria de cliente",
      "Máquina nova, usada ou modificada entrando em operação",
      "Acidente ou quase-acidente recente envolvendo máquina",
    ],
    whatToSend: [
      { label: "Lista das máquinas (tipo, fabricante, ano)", field: "Máquinas (tipo e quantidade)" },
      { label: "Fotos das zonas de perigo e das proteções atuais", field: "Situação atual das proteções" },
      { label: "Notificação ou relatório de auditoria, se houver", field: "Há notificação ou prazo?" },
      { label: "Cidade da planta", field: "Cidade" },
    ],
    included: [
      "Apreciação de risco por máquina",
      "Projeto de adequação e laudo técnico",
      "ART registrada no CREA",
    ],
    testimonialName: "Qualidade",
  },
  nr11: {
    subject: "equipamentos de movimentação de carga (NR-11)",
    shortLabel: "NR-11",
    audience: "Para quem opera munck, ponte rolante, guindaste, talha ou empilhadeira",
    finalHeadline: "Precisa de laudo ou plano de rigging?",
    signals: [
      "Laudo de munck, ponte rolante ou guindaste vencido",
      "Içamento crítico sem plano de rigging assinado",
      "Contratante exigindo laudo com ART para liberar o equipamento",
      "Equipamento reformado, modificado ou após reparo estrutural",
      "Teste de carga pendente ou sem registro",
    ],
    whatToSend: [
      { label: "Tipo de equipamento e capacidade nominal", field: "Equipamento e capacidade" },
      { label: "Fabricante, modelo e ano (ou foto da plaqueta)", field: "Fabricante / modelo / ano" },
      { label: "Último laudo ou teste de carga, se houver", field: "Último laudo (data)" },
      { label: "Local da inspeção ou da operação", field: "Cidade" },
    ],
    included: [
      "Inspeção técnica e teste de carga quando aplicável",
      "Laudo técnico ou plano de rigging",
      "ART registrada no CREA",
    ],
    testimonialName: "Rodrigo Tafner",
  },
  reclassificacao: {
    subject: "reclassificação de monta",
    shortLabel: "reclassificação",
    audience: "Para quem tem veículo com registro de sinistro no documento",
    finalHeadline: "Precisa reclassificar a monta do seu veículo?",
    signals: [
      "Registro de média monta no documento do veículo",
      "Licenciamento ou transferência bloqueados no DETRAN",
      "Veículo de leilão ou recuperado de seguradora",
      "Venda travada pela restrição no documento",
      "Dúvida se o caso tem recuperação (média ou grande monta)",
    ],
    whatToSend: [
      { label: "Placa e UF do veículo", field: "Placa / UF" },
      { label: "Foto do documento ou da consulta com a restrição", field: "Restrição que consta no documento" },
      { label: "Fotos do veículo e dos reparos realizados", field: "O reparo já foi feito?" },
      { label: "Cidade onde o veículo está", field: "Cidade" },
    ],
    included: [
      "Vistoria técnica do veículo reparado",
      "Laudo de engenharia com memorial de cálculo",
      "ART para o processo no DETRAN",
    ],
    testimonialName: "Luciana C.",
  },
  pmoc: {
    subject: "PMOC e manutenção de climatização",
    shortLabel: "PMOC",
    audience: "Para quem responde por ambientes climatizados de uso coletivo",
    finalHeadline: "Precisa elaborar ou atualizar o PMOC?",
    signals: [
      "Ambiente climatizado de uso coletivo sem PMOC",
      "PMOC desatualizado ou sem responsável técnico",
      "Vigilância sanitária, cliente ou auditoria pedindo o plano",
      "Reclamações de qualidade do ar, odor ou desconforto térmico",
      "Equipamentos trocados ou ampliados desde o último plano",
    ],
    whatToSend: [
      { label: "Quantidade e capacidade dos equipamentos (BTU/h ou TR)", field: "Equipamentos (quantidade e capacidade)" },
      { label: "Tipo de sistema (split, VRF, self, chiller)", field: "Tipo de sistema" },
      { label: "Área climatizada e tipo de ocupação", field: "Área e ocupação" },
      { label: "Cidade do imóvel", field: "Cidade" },
    ],
    included: [
      "Levantamento técnico em campo",
      "Elaboração do PMOC e certificado",
      "ART do responsável técnico",
    ],
    testimonialName: "Pedro Frade",
  },
  climatizacao: {
    subject: "projetos de climatização",
    shortLabel: "climatização",
    audience: "Para quem vai instalar, ampliar ou substituir sistemas de climatização",
    finalHeadline: "Precisa de projeto de climatização?",
    signals: [
      "Ampliação, mudança de layout ou nova ocupação do ambiente",
      "Sistema atual sem capacidade para a carga térmica",
      "Consumo de energia elevado no ar-condicionado",
      "Decisão pendente entre VRF, chiller ou self-contained",
      "Exigência de projeto com ART para obra ou aprovação",
    ],
    whatToSend: [
      { label: "Planta ou croqui do ambiente", field: "Tipo de ambiente e área" },
      { label: "Atividade e número de ocupantes", field: "Atividade / ocupação" },
      { label: "Equipamentos existentes, se houver", field: "Equipamentos existentes" },
      { label: "Cidade da obra", field: "Cidade" },
    ],
    included: [
      "Cálculo de carga térmica",
      "Projeto e memorial descritivo",
      "ART registrada no CREA",
    ],
    testimonialName: "Ronaldo Novaes",
  },
  geral: {
    subject: "laudos e inspeções técnicas",
    shortLabel: "este tema",
    audience: "Para empresas que precisam de laudo técnico com ART",
    finalHeadline: "Precisa de laudo ou inspeção técnica?",
    signals: [
      "Cliente, seguradora ou fiscalização exigindo laudo com ART",
      "Equipamento ou instalação sem documentação técnica",
      "Reforma ou modificação feita sem projeto",
      "Dúvida sobre qual norma se aplica ao seu caso",
    ],
    whatToSend: [
      { label: "Tipo de equipamento ou instalação", field: "Equipamento / instalação" },
      { label: "Fotos e documentação disponível", field: "Documentação disponível" },
      { label: "Prazo ou exigência que motivou o contato", field: "Prazo ou exigência" },
      { label: "Cidade", field: "Cidade" },
    ],
    included: [
      "Diagnóstico técnico do caso",
      "Laudo ou projeto com memorial",
      "ART registrada no CREA",
    ],
    testimonialName: "APR Transportes",
  },
};

/** Tema do post a partir do serviço relacionado (`relatedService.href`). */
export function resolveTopic(serviceHref: string): BlogTopic {
  const h = serviceHref;
  const key: TopicKey =
    h.startsWith("/servicos/nr13") || h.startsWith("/servicos/inspecao-nr13") ? "nr13"
    : h.startsWith("/servicos/nr12") ? "nr12"
    : h.startsWith("/servicos/nr11") ? "nr11"
    : h.startsWith("/servicos/reclassificacao") || h.startsWith("/servicos/laudo-de-recuperabilidade") ? "reclassificacao"
    : h.startsWith("/servicos/pmoc") ? "pmoc"
    : h.startsWith("/servicos/projetos-climatizacao") ? "climatizacao"
    : "geral";
  const { testimonialName, ...rest } = TOPICS[key];
  return { key, ...rest, testimonial: testimonialBy(testimonialName) };
}

/** Etapas do atendimento — mesmas promessas da página de Contato (proposta em até 24h, ART). */
export const serviceSteps = [
  { title: "Envie os dados", desc: "Pelo WhatsApp, com as fotos e documentos que tiver." },
  { title: "Análise técnica", desc: "O engenheiro define a norma aplicável e o escopo." },
  { title: "Proposta em até 24h", desc: "Escopo, prazo e valor por escrito." },
  { title: "Inspeção e laudo", desc: "Documentação com ART registrada no CREA." },
];

/** Números institucionais — os mesmos da home e da página Sobre. */
export const trustStats = [
  { value: "500+", label: "inspeções realizadas" },
  { value: "150+", label: "empresas atendidas" },
  { value: "10+", label: "anos de experiência" },
];

export function whatsappHref(lines: string[]): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Mensagem padrão citando o artigo de origem. */
export function articleMessage(postTitle: string, topic: BlogTopic): string[] {
  return [`Olá! Li o artigo "${postTitle}" no site da VSM e gostaria de falar com um engenheiro sobre ${topic.subject}.`];
}

/** Mensagem do diagnóstico: a situação marcada pelo leitor segue como lista. */
export function diagnosticMessage(postTitle: string, topic: BlogTopic, checked: string[]): string[] {
  if (checked.length === 0) return articleMessage(postTitle, topic);
  return [
    `Olá! Li o artigo "${postTitle}" e gostaria de uma avaliação técnica.`,
    "",
    "Minha situação:",
    ...checked.map((c) => `- ${c}`),
  ];
}

/** Mensagem de proposta: os campos já vêm na mensagem para o leitor completar. */
export function proposalMessage(postTitle: string, topic: BlogTopic): string[] {
  return [
    `Olá! Vim pelo artigo "${postTitle}" e quero uma proposta para ${topic.subject}.`,
    "",
    ...topic.whatToSend.map((w) => `${w.field}: `),
  ];
}
