import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "..", "dist");
const baseUrl = "https://www.vsmengenharia.com";

// ── Extract blog posts from source ──────────────────────────────────
const blogSrc = readFileSync(resolve(__dirname, "..", "src", "data", "blogData.ts"), "utf-8");

function extractBlogPosts(src) {
  const posts = [];
  const slugRe = /slug:\s*"([^"]+)"/g;
  const titleRe = /title:\s*"([^"]+)"/;
  const excerptRe = /excerpt:\s*"([^"]+)"/;
  const metaDescRe = /metaDescription:\s*"([^"]+)"/;
  const dateRe = /date:\s*"([^"]+)"/;

  let match;
  while ((match = slugRe.exec(src)) !== null) {
    const slug = match[1];
    const start = match.index;
    const chunk = src.slice(Math.max(0, start - 200), start + 600);

    const t = chunk.match(titleRe);
    const e = chunk.match(excerptRe);
    const m = chunk.match(metaDescRe);
    const d = chunk.match(dateRe);

    if (t) {
      posts.push({
        slug,
        title: t[1],
        description: (m ? m[1] : e ? e[1] : ""),
        date: d ? d[1] : "",
      });
    }
  }
  return posts;
}

const blogPosts = extractBlogPosts(blogSrc);

// ── Static routes ───────────────────────────────────────────────────
const staticRoutes = [
  {
    path: "/",
    title: "VSM Engenharia | Inspeções NR13, NR12, NR11 e Reclassificação de Monta",
    description: "Inspeções técnicas NR13, NR12 e NR11 com laudos completos, reclassificação de monta e projetos mecânicos para indústrias no Sudeste. Segurança, conformidade e agilidade.",
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Organization", name: "VSM Engenharia", url: baseUrl, logo: `${baseUrl}/favicon.ico`, sameAs: ["https://www.instagram.com/vsmengenharia", "https://www.linkedin.com/company/vsmengenharia"] },
      { "@context": "https://schema.org", "@type": "LocalBusiness", name: "VSM Engenharia", url: baseUrl, address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" }, priceRange: "$$", openingHours: "Mo-Fr 08:00-18:00" },
    ],
  },
  { path: "/sobre", title: "Sobre a VSM Engenharia | Quem Somos e Nossa Missão", description: "VSM Engenharia — mais de 10 anos em inspeções NR13, NR12, NR11 e projetos mecânicos. Engenheiros CREA habilitados protegendo sua operação no Sudeste." },
  { path: "/blog", title: "Blog de Engenharia | Guias Técnicos NR13, NR12, NR11 — VSM Engenharia", description: "Blog com guias práticos sobre NR13, NR12, NR11 e reclassificação veicular. Artigos técnicos escritos por engenheiros especializados com CREA ativo." },
  { path: "/contato", title: "Contato | Fale com Engenheiro Especialista — VSM Engenharia", description: "Entre em contato com engenheiro especialista da VSM. Consultoria gratuita, atendimento em 24h via WhatsApp, telefone ou e-mail. Todo Sudeste." },
  { path: "/clientes", title: "Clientes e Cases | Empresas que Confiam na VSM Engenharia", description: "Mais de 150 empresas confiam na VSM Engenharia. Inspeções NR13, NR12, reclassificação e PMOC em indústrias, transportadoras e comércio no Sudeste." },
  {
    path: "/servicos/nr13",
    title: "Inspeção NR13 — Caldeiras e Vasos de Pressão | VSM Engenharia",
    description: "Inspeção NR13 especializada em caldeiras, vasos de pressão e tubulações. Laudos técnicos completos com ART, prontuário e livro de registro no Sudeste.",
    jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Inspeção NR13", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/nr13` },
  },
  {
    path: "/servicos/nr12",
    title: "Adequação NR12 — Segurança de Máquinas | VSM Engenharia",
    description: "Adequação NR12 para máquinas industriais. Análise de risco, projetos de proteção e conformidade normativa com engenheiros CREA habilitados no Sudeste.",
    jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Adequação NR12", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/nr12` },
  },
  {
    path: "/servicos/nr11",
    title: "Inspeção NR11 — Rigging e Equipamentos de Içamento | VSM Engenharia",
    description: "Inspeção NR11 e planos de rigging para caminhão munck, ponte rolante e empilhadeiras. Cálculos de içamento e laudos com ART no Sudeste.",
    jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Inspeção NR11 e Rigging", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/nr11` },
  },
  {
    path: "/servicos/pmoc",
    title: "PMOC — Plano de Manutenção de Ar Condicionado | VSM Engenharia",
    description: "PMOC conforme Lei 13.589/2018. Qualidade do ar interior, manutenção preventiva de climatização e compliance com engenheiro CREA habilitado.",
    jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "PMOC", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/pmoc` },
  },
  {
    path: "/servicos/reclassificacao-de-monta",
    title: "Reclassificação de Monta — Veículos Sinistrados | VSM Engenharia",
    description: "Reclassificação de monta para veículos sinistrados. Laudo técnico DETRAN, memorial de cálculo e regularização completa com engenheiros especializados.",
    jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Reclassificação de Monta", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/reclassificacao-de-monta` },
  },
  {
    path: "/servicos/inspecoes-tecnicas",
    title: "Inspeções Técnicas — Estruturas e Equipamentos | VSM Engenharia",
    description: "Inspeções técnicas de estruturas metálicas, máquinas e equipamentos industriais. Ensaios não destrutivos, laudos aceitos em auditorias e ART.",
    jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Inspeções Técnicas", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/inspecoes-tecnicas` },
  },
  {
    path: "/servicos/projetos-mecanicos",
    title: "Projetos Mecânicos — Memorial de Cálculo e Desenhos | VSM Engenharia",
    description: "Projetos mecânicos especializados com memorial de cálculo, desenhos 2D/3D e ART. Proteções NR12 e equipamentos sob medida para indústria.",
    jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Projetos Mecânicos", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/projetos-mecanicos` },
  },
  {
    path: "/servicos/projetos-climatizacao",
    title: "Projetos de Climatização HVAC | VSM Engenharia",
    description: "Projetos HVAC completos com cálculo de carga térmica preciso. Projetos executivos, eficiência energética e conformidade com normas ABNT e ASHRAE.",
    jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Projetos de Climatização HVAC", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/projetos-climatizacao` },
  },
  {
    path: "/servicos/consultoria-gratuita",
    title: "Consultoria Gratuita em Conformidade Normativa | VSM Engenharia",
    description: "Consultoria gratuita em NR13, NR12, NR11 e PMOC. Diagnóstico de conformidade sem compromisso com resposta em 24h de engenheiro especialista.",
    jsonLd: { "@context": "https://schema.org", "@type": "Service", name: "Consultoria Gratuita", provider: { "@type": "Organization", name: "VSM Engenharia" }, areaServed: "Sudeste do Brasil", url: `${baseUrl}/servicos/consultoria-gratuita` },
  },
];

// ── Blog post routes (auto-extracted) ───────────────────────────────
const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  title: `${post.title} | Blog VSM Engenharia`,
  description: post.description,
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "VSM Engenharia", url: baseUrl },
    publisher: { "@type": "Organization", name: "VSM Engenharia", url: baseUrl },
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}`,
  },
}));

const allRoutes = [...staticRoutes, ...blogRoutes];

// ── Render ───────────────────────────────────────────────────────────
const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

let count = 0;
for (const route of allRoutes) {
  const canonical = `${baseUrl}${route.path === "/" ? "" : route.path}`;
  const escapedDesc = route.description.replace(/"/g, "&quot;");
  const escapedTitle = route.title.replace(/"/g, "&quot;");

  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapedDesc}">`
    )
    .replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${canonical}" />`
    )
    .replace(
      /<meta property="og:url"[^>]*>/,
      `<meta property="og:url" content="${canonical}" />`
    )
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${escapedTitle}">`
    )
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${escapedDesc}">`
    )
    .replace(
      /<meta name="twitter:title"[^>]*>/,
      `<meta name="twitter:title" content="${escapedTitle}">`
    )
    .replace(
      /<meta name="twitter:description"[^>]*>/,
      `<meta name="twitter:description" content="${escapedDesc}">`
    );

  if (route.jsonLd) {
    html = html.replace(
      "</head>",
      `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>\n</head>`
    );
  }

  const dir = route.path === "/" ? distDir : resolve(distDir, route.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "index.html"), html);
  count++;
}

console.log(`Pre-rendered ${count} routes (${staticRoutes.length} static + ${blogRoutes.length} blog posts).`);
