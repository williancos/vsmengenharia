/**
 * Avaliações reais do Perfil da Empresa no Google. Fonte única: a home exibe
 * todas no carrossel e os posts do blog exibem a mais próxima do tema (ver
 * `blogConversion.ts`). Texto transcrito como publicado — não editar o
 * conteúdo das avaliações.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Profissionais sérios, dedicados, empáticos, pontuais, precisos e extremamente atenciosos. Precisei vistoriar o meu veículo e o engenheiro Vinícius me atendeu super bem, me embasando do início ao fim do processo em todos os pontos os quais precisei tratar. Total credibilidade apresentada! Recomendo a todos!",
    name: "Luciana C.",
    role: "Cliente",
    company: "Google Reviews",
  },
  {
    quote: "Primeiramente, gostaria de deixar claro que é a primeira vez que passamos pela situação e para encontrar uma empresa de credibilidade e na situação de vulnerabilidade é bem complicado. Gostaria de deixar o meu muito obrigada à VSM Engenharia pela seriedade e excelente trabalho e especialmente ao Vinicius que conseguiu nos passar confiança e credibilidade no seu profissionalismo. Super indico esta empresa.",
    name: "APR Transportes",
    role: "Cliente",
    company: "Google Reviews",
  },
  {
    quote: "Muito atencioso, serviço de excelência e profissionalismo profissional ao profissional Vinicius que foi o que me ajudou a todo momento sempre que eu precisasse. Recomendo de olhos fechados!",
    name: "Luan Magnata",
    role: "Cliente",
    company: "Google Reviews",
  },
  {
    quote: "A VSM Engenharia provou suporte e serviço prestado com excelência e rapidez. Visita técnica para coleta de dados + elaboração de relatório técnico + elaboração PMOC + Certificado PMOC + Cálculo Carga Térmica + ART. O Vinícius é um excelente profissional, educado e atencioso!",
    name: "Ronaldo Novaes",
    role: "Cliente",
    company: "Google Reviews",
  },
  {
    quote: "A VS Engenharia é uma empresa totalmente competente para os serviços prestados. Na empresa em que trabalho, elaboraram um PMOC, bem estruturado e material de alta qualidade. O Vinícius é um excelente profissional, muito educado e atencioso. Recomendo DEMAIS!!!",
    name: "Pedro Frade",
    role: "Local Guide",
    company: "Google Reviews",
  },
  {
    quote: "Indico a empresa, super profissionais e atenciosos.",
    name: "Rodrigo Tafner",
    role: "Cliente",
    company: "Google Reviews",
  },
  {
    quote: "Empresa bem profissional e equipada, passou todas as adequações que precisava ser feito para a emissão do laudo de NR13 esclarecendo todas as dúvidas, são pontuais e seguem à risca os prazos que promete desde a visita até a entrega final. Voltarei a fazer negócio com a VSM.",
    name: "Leandro Rodrigues",
    role: "Cliente",
    company: "Google Reviews",
  },
  {
    quote: "Empresa extremamente confiável, serviço de qualidade. Profissional demonstrou atenção em cada detalhe e esclareceu todas as dúvidas.",
    name: "Qualidade",
    role: "Cliente",
    company: "Google Reviews",
  },
];

/** Busca uma avaliação pelo nome — usado para casar avaliação e tema no blog. */
export const testimonialBy = (name: string): Testimonial | undefined =>
  testimonials.find((t) => t.name === name);
