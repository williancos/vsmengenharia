#!/usr/bin/env node
/**
 * patch-head.mjs
 *
 * Pós-processamento aplicado APÓS `vite-react-ssg build`.
 *
 * O vite-react-ssg renderiza o <body> com o conteúdo completo (h1, parágrafos,
 * tabelas, FAQ), mas o <head> permanece com os defaults estáticos do index.html.
 *
 * Este script percorre cada HTML gerado em dist/, identifica a rota e
 * injeta no <head>:
 *   - <title> per-rota
 *   - <meta name="description"> per-rota
 *   - <link rel="canonical"> per-rota
 *   - Tags OG e Twitter completas per-rota
 *   - JSON-LD: Article + BreadcrumbList + FAQPage por post de blog
 *   - JSON-LD: Service por página de serviço
 *   - JSON-LD: Organization + LocalBusiness na homepage
 *
 * Resultado: 100% das rotas servem HTML com head + body completos
 * para qualquer crawler (Googlebot, GPTBot, ClaudeBot, PerplexityBot).
 *
 * Também corrige os preloads de imagem — ver fixImagePreloads() abaixo. Essa
 * parte roda em TODO HTML gerado, inclusive nas rotas sem metadado mapeado.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { resolve, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "..", "dist");
const baseUrl = "https://www.vsmengenharia.com";

// Estados atendidos (Sudeste) — usado em areaServed dos schemas Service
const AREA_SERVED = [
  { "@type": "State", name: "São Paulo" },
  { "@type": "State", name: "Minas Gerais" },
  { "@type": "State", name: "Rio de Janeiro" },
  { "@type": "State", name: "Espírito Santo" },
];

// ── Extrai dados do blogData.ts (parser simples) ───────────────────
const blogSrc = readFileSync(resolve(__dirname, "..", "src", "data", "blogData.ts"), "utf-8");

function extractBlogPosts(src) {
  const posts = [];
  // Encontra cada objeto que começa com `slug:` e captura o bloco até o próximo `slug:` ou `]`
  const slugRe = /slug:\s*"([^"]+)"/g;
  let match;
  const positions = [];
  while ((match = slugRe.exec(src)) !== null) positions.push({ slug: match[1], idx: match.index });

  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].idx;
    const end = i + 1 < positions.length ? positions[i + 1].idx : start + 60000;
    const chunk = src.slice(start, end);

    const slug = positions[i].slug;
    const title = chunk.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1] || "";
    const excerpt = chunk.match(/excerpt:\s*"((?:[^"\\]|\\.)*)"/)?.[1] || "";
    const metaDesc = chunk.match(/metaDescription:\s*"((?:[^"\\]|\\.)*)"/)?.[1] || "";
    const date = chunk.match(/date:\s*"([^"]+)"/)?.[1] || "";
    const dateModified = chunk.match(/dateModified:\s*"([^"]+)"/)?.[1] || date;
    const category = chunk.match(/category:\s*"([^"]+)"/)?.[1] || "";

    // FAQ — array de {question, answer}
    const faqs = [];
    const faqBlockMatch = chunk.match(/faq:\s*\[([\s\S]*?)\]\s*,\s*content:/);
    if (faqBlockMatch) {
      const faqBlock = faqBlockMatch[1];
      const qaRe = /\{\s*question:\s*"((?:[^"\\]|\\.)*)"\s*,\s*answer:\s*"((?:[^"\\]|\\.)*)"\s*\}/g;
      let qa;
      while ((qa = qaRe.exec(faqBlock)) !== null) {
        faqs.push({ question: qa[1].replace(/\\"/g, '"'), answer: qa[2].replace(/\\"/g, '"') });
      }
    }

    // Keywords
    const keywords = [];
    const kwBlockMatch = chunk.match(/keywords:\s*\[((?:[^[\]])*?)\]/);
    if (kwBlockMatch) {
      const kwBlock = kwBlockMatch[1];
      const kwRe = /"((?:[^"\\]|\\.)+?)"/g;
      let kw;
      while ((kw = kwRe.exec(kwBlock)) !== null) keywords.push(kw[1]);
    }

    posts.push({
      slug,
      title: title.replace(/\\"/g, '"'),
      description: (metaDesc || excerpt).replace(/\\"/g, '"'),
      date,
      dateModified,
      category,
      faqs,
      keywords,
    });
  }
  return posts;
}

const blogPosts = extractBlogPosts(blogSrc);
console.log(`[patch-head] Extraídos ${blogPosts.length} posts do blogData.ts`);

// ── Landing pages de serviço (landingData.ts) ──────────────────────
// Mesmo parser simples do blogData: o script roda em Node puro e não
// consegue importar o .ts (imports de assets via alias @/).
const landingSrc = readFileSync(resolve(__dirname, "..", "src", "data", "landingData.ts"), "utf-8");

function extractLandingRoutes(src) {
  const routes = {};
  const slugRe = /slug:\s*"(servicos\/[^"]+)"/g;
  const positions = [];
  let m;
  while ((m = slugRe.exec(src)) !== null) positions.push({ slug: m[1], idx: m.index });

  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].idx;
    const end = i + 1 < positions.length ? positions[i + 1].idx : src.length;
    const chunk = src.slice(start, end);

    const title = chunk.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1] || "";
    // metaDescription costuma quebrar linha após os dois-pontos
    const description = chunk.match(/metaDescription:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)?.[1] || "";
    const serviceName = chunk.match(/serviceName:\s*"((?:[^"\\]|\\.)*)"/)?.[1] || title;
    const h1 = chunk.match(/h1:\s*"((?:[^"\\]|\\.)*)"/)?.[1] || title;

    const faqs = [];
    const faqBlock = chunk.match(/faq:\s*\[([\s\S]*?)\]\s*,\s*relatedPosts:/)?.[1];
    if (faqBlock) {
      const qaRe = /\{\s*question:\s*"((?:[^"\\]|\\.)*)"\s*,\s*answer:\s*"((?:[^"\\]|\\.)*)"\s*\}/g;
      let qa;
      while ((qa = qaRe.exec(faqBlock)) !== null) {
        faqs.push({ question: qa[1].replace(/\\"/g, '"'), answer: qa[2].replace(/\\"/g, '"') });
      }
    }

    const url = `${baseUrl}/${positions[i].slug}`;
    routes[`/${positions[i].slug}`] = {
      title: title.replace(/\\"/g, '"'),
      description: description.replace(/\\"/g, '"'),
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName.replace(/\\"/g, '"'),
        serviceType: serviceName.replace(/\\"/g, '"'),
        description: description.replace(/\\"/g, '"'),
        url,
        provider: { "@type": "Organization", name: "VSM Engenharia", url: baseUrl, telephone: "+5511954534057" },
        areaServed: AREA_SERVED,
      },
      faqs,
    };
  }
  return routes;
}

const landingRoutes = extractLandingRoutes(landingSrc);
console.log(`[patch-head] Extraídas ${Object.keys(landingRoutes).length} landing pages do landingData.ts`);

// ── Rotas estáticas ────────────────────────────────────────────────
const staticRoutes = {
  "/": {
    title: "VSM Engenharia | Inspeções NR13, NR12, NR11 e Reclassificação de Monta",
    description: "Inspeções técnicas NR13, NR12 e NR11 com laudos completos, reclassificação de monta e projetos mecânicos para indústrias no Sudeste. Segurança, conformidade e agilidade.",
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Organization", name: "VSM Engenharia", url: baseUrl, logo: `${baseUrl}/og-image.webp`, sameAs: ["https://www.instagram.com/vsmengenharia", "https://www.linkedin.com/company/vsmengenharia"] },
      { "@context": "https://schema.org", "@type": "LocalBusiness", name: "VSM Engenharia", url: baseUrl, address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" }, priceRange: "$$", openingHours: "Mo-Fr 08:00-18:00", telephone: "+5511954534057" },
    ],
  },
  "/sobre": { title: "Sobre a VSM Engenharia | Quem Somos e Nossa Missão", description: "VSM Engenharia — mais de 10 anos em inspeções NR13, NR12, NR11 e projetos mecânicos. Engenheiros CREA habilitados protegendo sua operação no Sudeste." },
  "/blog":  { title: "Blog de Engenharia | Guias Técnicos NR13, NR12, NR11 — VSM Engenharia", description: "Blog com guias práticos sobre NR13, NR12, NR11 e reclassificação veicular. Artigos técnicos escritos por engenheiros especializados com CREA ativo." },
  "/contato":  { title: "Contato | Fale com Engenheiro Especialista — VSM Engenharia", description: "Entre em contato com engenheiro especialista da VSM. Consultoria gratuita, atendimento em 24h via WhatsApp, telefone ou e-mail. Todo Sudeste." },
  "/clientes": { title: "Clientes e Cases | Empresas que Confiam na VSM Engenharia", description: "Mais de 150 empresas confiam na VSM Engenharia. Inspeções NR13, NR12, reclassificação e PMOC em indústrias, transportadoras e comércio no Sudeste." },
  "/servicos/nr13":  {
    title: "Inspeção e Laudo NR13: Caldeiras e Vasos de Pressão | VSM",
    description: "Inspeção e laudo NR13 de caldeiras, vasos de pressão e tubulações, com ART, prontuário e livro de registro. Engenheiros CREA no Sudeste.",
    jsonLd: {
      "@context": "https://schema.org", "@type": "Service", name: "Inspeção e Laudo NR13",
      description: "Inspeção NR13 em caldeiras, vasos de pressão e tubulações com laudo técnico, prontuário, livro de registro e ART do CREA.",
      provider: { "@type": "Organization", name: "VSM Engenharia", url: baseUrl },
      areaServed: AREA_SERVED, url: `${baseUrl}/servicos/nr13`,
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Serviços NR13", itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inspeção de caldeira a vapor" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inspeção de vaso de pressão" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teste hidrostático" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laudo técnico NR13 com ART" } },
      ] },
    },
    faqs: [
      { question: "Quem pode emitir o laudo NR13?", answer: "Somente engenheiro mecânico (ou metalúrgico) com registro ativo no CREA e ART baixada. Engenheiro civil ou de produção não pode assinar laudo NR13." },
      { question: "Qual a periodicidade da inspeção NR13?", answer: "Depende do equipamento e da categoria. Caldeiras: prazo máximo de 12 meses para as categorias A e B, 15 meses para caldeiras de recuperação de álcalis e 24 meses para categoria A quando as válvulas de segurança são testadas aos 12 meses; com SPIE os prazos vão a 24 meses (categoria B e recuperação de álcalis) e 30 meses (categoria A). Vasos de pressão: exame externo de 1 a 5 anos e exame interno de 3 a 10 anos, conforme a categoria I a V." },
      { question: "Quanto custa uma inspeção NR13?", answer: "Varia por categoria, tipo e quantidade de equipamentos e ensaios necessários. A VSM emite orçamento com escopo técnico em até 24h — preço sem escopo é sinal de laudo conformista." },
      { question: "O que é entregue ao final da inspeção NR13?", answer: "Laudo técnico, prontuário atualizado, livro de registro de segurança, memorial de cálculo quando aplicável, relatório fotográfico e ART registrada no CREA." },
    ],
  },
  "/servicos/nr12":  { title: "Adequação NR12 — Segurança de Máquinas | VSM Engenharia", description: "Adequação NR12 para máquinas industriais. Análise de risco, projetos de proteção e conformidade normativa com engenheiros CREA habilitados no Sudeste.", jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Adequação NR12", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/nr12` } },
  "/servicos/nr11":  {
    title: "Inspeção NR11 e Plano de Rigging: Munck e Guindauto | VSM",
    description: "Inspeção NR11 e plano de rigging para munck, ponte rolante e empilhadeira. Teste de carga e laudo com ART. Engenheiros CREA no Sudeste.",
    jsonLd: {
      "@context": "https://schema.org", "@type": "Service", name: "Inspeção NR11 e Plano de Rigging",
      description: "Inspeção NR11 e planos de rigging para caminhão munck, ponte rolante, empilhadeira e plataformas, com teste de carga, cálculos de içamento e ART.",
      provider: { "@type": "Organization", name: "VSM Engenharia", url: baseUrl },
      areaServed: AREA_SERVED, url: `${baseUrl}/servicos/nr11`,
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Serviços NR11 e Rigging", itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plano de rigging" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inspeção de caminhão munck / guindauto" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inspeção de ponte rolante" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teste de carga em munck" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inspeção de empilhadeira" } },
      ] },
    },
    faqs: [
      { question: "O que é um plano de rigging?", answer: "É o documento técnico de engenharia que define como uma operação de içamento será realizada com segurança: cálculo de carga, centro de gravidade, capacidade do equipamento, acessórios, croquis e ART do engenheiro responsável." },
      { question: "Quando o plano de rigging é obrigatório?", answer: "Em içamentos críticos: carga acima de 75% da capacidade do equipamento, içamento múltiplo, cargas de grande porte, ou próximo a redes elétricas, vias e áreas ocupadas." },
      { question: "Ponte rolante precisa de teste de carga na inspeção periódica?", answer: "Sim. O teste de carga integra a inspeção periódica de ponte rolante, seguindo a ABNT NBR 16147, com aplicação progressiva de 50%, 100% e 110% da capacidade nominal e ensaio estático a 120% apenas quando aplicável. Em caminhão munck, o ensaio segue a tabela de carga do fabricante e cobre as configurações críticas." },
      { question: "Quem pode assinar um plano de rigging ou laudo NR11?", answer: "Engenheiro mecânico ou civil com CREA ativo e ART específica. Técnico em segurança do trabalho não tem atribuição para firmar plano de rigging." },
    ],
  },
  "/servicos/pmoc":  { title: "PMOC — Plano de Manutenção de Ar Condicionado | VSM Engenharia", description: "PMOC conforme Lei 13.589/2018. Qualidade do ar interior, manutenção preventiva de climatização e compliance com engenheiro CREA habilitado.", jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "PMOC", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/pmoc` } },
  "/servicos/reclassificacao-de-monta":  {
    title: "Reclassificação de Monta: Laudo DETRAN de Sinistrado | VSM",
    description: "Reclassificação de monta de veículo sinistrado: laudo DETRAN, memorial de cálculo e regularização. Engenheiros especializados no Sudeste.",
    jsonLd: {
      "@context": "https://schema.org", "@type": "Service", name: "Reclassificação de Monta",
      description: "Reclassificação de monta para veículos sinistrados: perícia veicular, memorial de cálculo, laudo técnico e acompanhamento junto ao DETRAN.",
      provider: { "@type": "Organization", name: "VSM Engenharia", url: baseUrl },
      areaServed: AREA_SERVED, url: `${baseUrl}/servicos/reclassificacao-de-monta`,
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Serviços de Reclassificação de Monta", itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laudo de reclassificação de monta" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Perícia veicular de sinistro" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Memorial de cálculo estrutural" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acompanhamento do processo no DETRAN" } },
      ] },
    },
    faqs: [
      { question: "O que é reclassificação de monta?", answer: "É o processo técnico e legal que permite a um veículo sinistrado (com registro de pequena, média ou grande monta) voltar a circular após os reparos, mediante laudo de engenharia mecânica com ART e aprovação do DETRAN." },
      { question: "Qual a diferença entre pequena, média e grande monta?", answer: "Pequena monta: danos leves sem comprometimento estrutural. Média monta: danos estruturais reparáveis, permite reclassificação com laudo. Grande monta: danos irreparáveis, veículo destinado a desmonte — não pode ser reclassificado." },
      { question: "Como tirar o registro de sinistro do documento?", answer: "Por meio de laudo de reclassificação de monta emitido por engenheiro mecânico com ART, apresentado ao DETRAN junto à documentação do veículo reparado. Só é possível para pequena e média monta." },
      { question: "Quanto tempo demora a reclassificação de monta?", answer: "Cerca de 40 a 50 dias no total: até 20 a 30 dias desde o contato até dar entrada no DETRAN, incluindo a vistoria do engenheiro e a emissão do laudo em torno de 10 dias, mais cerca de 20 dias de análise do órgão. Os 90 dias frequentemente citados são o prazo para dar entrada no pedido, contado a partir da data do acidente — não a duração do processo." },
    ],
  },
  "/servicos/inspecoes-tecnicas":  { title: "Inspeções Técnicas — Estruturas e Equipamentos | VSM Engenharia", description: "Inspeções técnicas de estruturas metálicas, máquinas e equipamentos industriais. Ensaios não destrutivos, laudos aceitos em auditorias e ART.", jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Inspeções Técnicas", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/inspecoes-tecnicas` } },
  "/servicos/projetos-mecanicos":  { title: "Projetos Mecânicos — Memorial de Cálculo e Desenhos | VSM Engenharia", description: "Projetos mecânicos especializados com memorial de cálculo, desenhos 2D/3D e ART. Proteções NR12 e equipamentos sob medida para indústria.", jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Projetos Mecânicos", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/projetos-mecanicos` } },
  "/servicos/projetos-climatizacao":  { title: "Projetos de Climatização HVAC | VSM Engenharia", description: "Projetos HVAC completos com cálculo de carga térmica preciso. Projetos executivos, eficiência energética e conformidade com normas ABNT e ASHRAE.", jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Projetos de Climatização HVAC", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/projetos-climatizacao` } },
  "/servicos/consultoria-gratuita":  { title: "Consultoria Gratuita em Conformidade Normativa | VSM Engenharia", description: "Consultoria gratuita em NR13, NR12, NR11 e PMOC. Diagnóstico de conformidade sem compromisso com resposta em 24h de engenheiro especialista.", jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Consultoria Gratuita", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/consultoria-gratuita` } },
  ...landingRoutes,
};

// ── Caminha por dist/ e coleta HTMLs ───────────────────────────────
function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = resolve(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full, files);
    } else if (name.endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

function fileToRoute(file) {
  let rel = relative(distDir, file).replaceAll("\\", "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) rel = rel.slice(0, -"/index.html".length);
  else if (rel.endsWith(".html")) rel = rel.slice(0, -".html".length);
  return "/" + rel;
}

// ── Builders de JSON-LD ────────────────────────────────────────────
function buildArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "VSM Engenharia", url: baseUrl },
    publisher: {
      "@type": "Organization",
      name: "VSM Engenharia",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/og-image.webp` },
    },
    datePublished: post.date,
    dateModified: post.dateModified,
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}`,
    articleSection: post.category,
    ...(post.keywords?.length ? { keywords: post.keywords.join(", ") } : {}),
  };
}
function buildBreadcrumbSchema(route, title) {
  const segments = route.split("/").filter(Boolean);
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
  ];
  if (segments[0] === "blog") {
    items.push({ "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` });
    if (segments[1]) items.push({ "@type": "ListItem", position: 3, name: title, item: `${baseUrl}${route}` });
  } else if (segments[0] === "servicos") {
    items.push({ "@type": "ListItem", position: 2, name: "Serviços", item: `${baseUrl}/` });
    if (segments[1]) items.push({ "@type": "ListItem", position: 3, name: title, item: `${baseUrl}${route}` });
  } else if (segments.length === 1) {
    items.push({ "@type": "ListItem", position: 2, name: title, item: `${baseUrl}${route}` });
  }
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}
function buildFaqSchema(faqs) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// ── Preloads de imagem ─────────────────────────────────────────────
/**
 * O vite-react-ssg emite <link rel="preload" as="image"> para TODO asset que
 * aparece no grafo de módulos da rota (renderPreloadLink em
 * vite-react-ssg/dist/shared). Como o app é servido em poucos chunks, o grafo
 * de qualquer rota alcança quase todas as imagens do site — o resultado eram
 * 98 preloads em prioridade alta por página, disputando banda justamente com
 * o recurso do LCP.
 *
 * Aqui derrubamos todos e reinjetamos só o que a página declarou como
 * prioritário: os <img fetchpriority="high">. O marcador fica no JSX, então o
 * autor da página controla o preload sem tocar neste script.
 */
const PRELOAD_IMG_RE = /<link\b[^>]*\brel="preload"[^>]*\bas="image"[^>]*>\s*/gi;

function fixImagePreloads(html) {
  let out = html.replace(PRELOAD_IMG_RE, "");

  // <img> prioritários da própria página, na ordem em que aparecem.
  const hrefs = [];
  const imgRe = /<img\b[^>]*>/gi;
  let m;
  while ((m = imgRe.exec(out))) {
    const tag = m[0];
    if (!/\bfetchpriority="high"/i.test(tag)) continue;
    const src = tag.match(/\bsrc="([^"]+)"/i)?.[1];
    if (!src || src.startsWith("data:")) continue;
    const srcset = tag.match(/\bsrcset="([^"]+)"/i)?.[1];
    const sizes = tag.match(/\bsizes="([^"]+)"/i)?.[1];
    if (!hrefs.some((h) => h.src === src)) hrefs.push({ src, srcset, sizes });
  }

  if (!hrefs.length) return out;

  // imagesrcset/imagesizes fazem o preload escolher a mesma candidata que o
  // <img> vai escolher — sem isso o browser baixaria duas larguras diferentes.
  const links = hrefs
    .map(({ src, srcset, sizes }) => {
      // Valores vêm de atributos já serializados pelo React — reescapar aqui
      // transformaria &amp; em &amp;amp; e quebraria a URL.
      const parts = [`rel="preload"`, `as="image"`, `href="${src}"`, `fetchpriority="high"`];
      if (srcset) parts.push(`imagesrcset="${srcset}"`);
      if (sizes) parts.push(`imagesizes="${sizes}"`);
      return `<link ${parts.join(" ")}>`;
    })
    .join("\n");

  return out.replace("</head>", `${links}\n</head>`);
}

// ── Ordem do <head> ────────────────────────────────────────────────
/**
 * O preload scanner enfileira os recursos na ordem em que aparecem no <head>,
 * e o vite-react-ssg escreve o <script type="module">, os modulepreload dos
 * chunks e só depois a folha de estilo. Resultado: ~128 KB de JS de hidratação
 * entram na frente dos 17 KB de CSS que bloqueiam a pintura e da imagem do
 * LCP — em conexão lenta é exatamente a ordem errada, porque o HTML já vem
 * pré-renderizado e o JS não é necessário para pintar nada.
 *
 * Aqui o CSS e os preloads de imagem prioritária sobem para antes do JS.
 */
const CSS_LINK_RE = /<link\b[^>]*\brel="stylesheet"[^>]*>/gi;
const IMG_PRELOAD_RE = /<link\b[^>]*\brel="preload"[^>]*\bas="image"[^>]*>/gi;
const PRIMEIRO_JS_RE = /<(?:script\b[^>]*\btype="module"|link\b[^>]*\brel="modulepreload")/i;

function reorderHead(html) {
  const fimHead = html.indexOf("</head>");
  if (fimHead === -1) return html;
  let head = html.slice(0, fimHead);
  const resto = html.slice(fimHead);

  const criticos = [...(head.match(CSS_LINK_RE) || []), ...(head.match(IMG_PRELOAD_RE) || [])];
  if (!criticos.length) return html;

  for (const tag of criticos) head = head.replace(tag, "");

  const alvo = head.search(PRIMEIRO_JS_RE);
  if (alvo === -1) return html; // sem JS no head: a ordem atual já serve

  head = head.slice(0, alvo) + criticos.join("") + "\n" + head.slice(alvo);
  return head + resto;
}

// ── Patch do HTML ──────────────────────────────────────────────────
function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function patchHead(html, route) {
  const blogMatch = route.match(/^\/blog\/(.+)$/);
  let meta;
  if (blogMatch) {
    const post = blogPosts.find((p) => p.slug === blogMatch[1]);
    if (!post) return html;
    const jsonLd = [
      buildArticleSchema(post),
      buildBreadcrumbSchema(route, post.title),
      buildFaqSchema(post.faqs),
    ].filter(Boolean);
    meta = {
      title: `${post.title} | Blog VSM Engenharia`,
      description: post.description,
      jsonLd,
    };
  } else if (staticRoutes[route]) {
    const r = staticRoutes[route];
    const baseSchemas = r.jsonLd ? (Array.isArray(r.jsonLd) ? r.jsonLd : [r.jsonLd]) : [];
    meta = {
      title: r.title,
      description: r.description,
      jsonLd: [
        buildBreadcrumbSchema(route, r.title),
        ...baseSchemas,
        ...(r.faqs ? [buildFaqSchema(r.faqs)] : []),
      ].filter(Boolean),
    };
  } else {
    return html;
  }

  const canonical = `${baseUrl}${route === "/" ? "" : route}`;
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);

  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  out = out.replace(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${description}">`);
  out = out.replace(/<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}">`);
  out = out.replace(/<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonical}">`);
  out = out.replace(/<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${title}">`);
  out = out.replace(/<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${title}">`);
  out = out.replace(/<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${description}">`);
  out = out.replace(/<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${description}">`);
  out = out.replace(/<meta\s+property="og:type"[^>]*>/i, `<meta property="og:type" content="${blogMatch ? "article" : "website"}">`);

  // Injeta JSON-LD antes de </head> — um <script> por schema
  const scripts = meta.jsonLd.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n");
  out = out.replace("</head>", `${scripts}\n</head>`);

  return out;
}

// ── Executa ────────────────────────────────────────────────────────
const files = walk(distDir);
let patched = 0;
let skipped = 0;
let preloadsRemoved = 0;
for (const file of files) {
  const route = fileToRoute(file);
  const html = readFileSync(file, "utf-8");

  // Preloads e ordem do head são corrigidos em toda página, mapeada ou não.
  preloadsRemoved += (html.match(PRELOAD_IMG_RE) || []).length;
  const newHtml = reorderHead(fixImagePreloads(patchHead(html, route)));

  if (newHtml !== html) {
    writeFileSync(file, newHtml);
    patched++;
  } else {
    skipped++;
  }
}
console.log(`[patch-head] Patched ${patched} arquivos | skipped ${skipped} (rota não mapeada)`);
console.log(`[patch-head] Preloads de imagem removidos: ${preloadsRemoved}`);
