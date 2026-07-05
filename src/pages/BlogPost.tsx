import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useSEO } from "@/hooks/use-seo";
import {
  ArrowLeft, ArrowRight, Clock, Eye, Users, Shield, Phone,
  ChevronRight, CheckCircle2, Share2, Bookmark, Calendar,
  ChevronUp, FileText, AlertTriangle, Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealSection from "@/components/RevealSection";
import { allPosts, categoryConfig } from "@/data/blogData";

/**
 * Deriva a página-pilar de serviço a partir da categoria do post (e do slug,
 * no caso de "Conformidade", que é um balde misto). Usado como fallback quando
 * o post não define `relatedService` — garante que TODO post do blog tenha um
 * link interno com âncora comercial para o serviço-pilar correspondente.
 */
function resolveRelatedService(post: { category: string; slug: string }): { label: string; href: string } {
  switch (post.category) {
    case "NR13":
      return { label: "Inspeção e Laudo NR13", href: "/servicos/nr13" };
    case "NR11":
      return { label: "Inspeção NR11 e Plano de Rigging", href: "/servicos/nr11" };
    case "NR12":
      return { label: "Adequação NR12", href: "/servicos/nr12" };
    case "Reclassificação":
      return { label: "Reclassificação de Monta", href: "/servicos/reclassificacao-de-monta" };
    case "Conformidade": {
      const s = post.slug;
      if (s.includes("pmoc") || s.includes("qualidade-do-ar"))
        return { label: "PMOC — Climatização", href: "/servicos/pmoc" };
      if (s.includes("carga-termica") || s.includes("vrf") || s.includes("chiller") || s.includes("climatiz"))
        return { label: "Projetos de Climatização", href: "/servicos/projetos-climatizacao" };
      return { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" };
    }
    default:
      return { label: "Consultoria Gratuita", href: "/servicos/consultoria-gratuita" };
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [readProgress, setReadProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copied, setCopied] = useState(false);

  const post = allPosts.find((p) => p.slug === slug);
  const config = post ? categoryConfig[post.category] : null;
  const Icon = config?.icon || Shield;

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return allPosts
      .filter((p) => p.slug !== post.slug && p.category === post.category)
      .slice(0, 3);
  }, [post]);

  // Reading progress
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("article-content");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.scrollHeight;
      const visible = Math.min(Math.max(-rect.top, 0), total);
      setReadProgress(Math.min((visible / total) * 100, 100));
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const articleJsonLd = useMemo(() => {
    if (!post) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription || post.excerpt,
      image: post.coverImage,
      author: post.author
        ? {
            "@type": "Person",
            name: post.author.name,
            jobTitle: post.author.jobTitle,
            identifier: post.author.crea,
            ...(post.author.linkedin ? { sameAs: post.author.linkedin } : {}),
          }
        : { "@type": "Organization", name: "VSM Engenharia", url: "https://www.vsmengenharia.com" },
      publisher: {
        "@type": "Organization",
        name: "VSM Engenharia",
        url: "https://www.vsmengenharia.com",
        logo: { "@type": "ImageObject", url: "https://www.vsmengenharia.com/og-image.webp" },
      },
      datePublished: post.date,
      dateModified: post.dateModified || post.date,
      mainEntityOfPage: `https://www.vsmengenharia.com/blog/${post.slug}`,
      articleSection: post.category,
      ...(post.keywords?.length ? { keywords: post.keywords.join(", ") } : {}),
    };
  }, [post]);

  const breadcrumbJsonLd = useMemo(() => {
    if (!post) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vsmengenharia.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.vsmengenharia.com/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://www.vsmengenharia.com/blog/${post.slug}` },
      ],
    };
  }, [post]);

  const faqJsonLd = useMemo(() => {
    if (!post?.faq?.length) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };
  }, [post]);

  const jsonLdAll = useMemo(
    () => [articleJsonLd, breadcrumbJsonLd, faqJsonLd].filter(Boolean) as Record<string, unknown>[],
    [articleJsonLd, breadcrumbJsonLd, faqJsonLd]
  );

  useSEO({
    title: post ? `${post.title} | Blog VSM Engenharia` : "Blog VSM Engenharia",
    description: post ? (post.metaDescription || post.excerpt) : "Artigos técnicos sobre engenharia industrial.",
    ogType: "article",
    ogImage: post?.coverImage,
    jsonLd: jsonLdAll.length ? jsonLdAll : undefined,
  });

  if (!post) {
    return (
      <section className="py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-8">O artigo que você está procurando não existe ou foi removido.</p>
          <Button asChild className="rounded-full"><Link to="/blog"><ArrowLeft className="h-4 w-4 mr-2" />Voltar ao Blog</Link></Button>
        </div>
      </section>
    );
  }

  const currentIdx = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const nextPost = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: post.title, url });
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const hasContent = post.content && post.content.length > 0;
  const relatedService = post.relatedService ?? resolveRelatedService(post);

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div className="h-full bg-cta transition-all duration-100" style={{ width: `${readProgress}%` }} />
      </div>

      {/* ── Hero ── */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${config?.gradient || "from-primary to-primary"}`}>
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-10 right-10 opacity-5">
          <Icon className="h-64 w-64 text-white" />
        </div>

        <div className="relative container mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link to="/" className="hover:text-white/80 transition-colors">Início</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/70 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className={`grid ${post.coverImage ? "lg:grid-cols-5" : "lg:grid-cols-1"} gap-10 items-center`}>
            <div className={post.coverImage ? "lg:col-span-3" : "max-w-3xl"}>
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${config?.badge}`}>{post.category}</span>
                <span className="text-xs text-white/60 flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                <span className="text-xs text-white/60 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime} de leitura</span>
                <span className="text-xs text-white/60 flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" />{post.views?.toLocaleString()} leituras</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-5">{post.title}</h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">{post.excerpt}</p>

              {/* Author + Share */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                    <Users className="h-5 w-5 text-white/70" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">VSM Engenharia</div>
                    <div className="text-xs text-white/50">Engenheiros Mecânicos • CREA Ativo</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={handleShare}
                    className="flex items-center gap-2 text-xs text-white/60 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all backdrop-blur-sm border border-white/10">
                    <Share2 className="h-3.5 w-3.5" />
                    {copied ? "Link copiado!" : "Compartilhar"}
                  </button>
                </div>
              </div>
            </div>

            {post.coverImage && (
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-black/20">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Content Area ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main content */}
            <article id="article-content" className="lg:col-span-8 order-1">
              {/* Key takeaways */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <RevealSection>
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="h-5 w-5 text-cta" />
                      <h3 className="font-bold text-base">Pontos-chave deste artigo</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {post.keyTakeaways.map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-cta mt-0.5 shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealSection>
              )}

              {/* Article body */}
              {hasContent ? (
                <div className="prose prose-lg max-w-none">
                  {post.content!.map((section, i) => (
                    <RevealSection key={i} delay={i * 50}>
                      <div
                        className="mb-8 blog-content"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(section) }}
                      />
                    </RevealSection>
                  ))}
                </div>
              ) : (
                <RevealSection>
                  <div className="bg-secondary/50 rounded-xl p-10 text-center">
                    <AlertTriangle className="h-10 w-10 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Conteúdo em breve</h3>
                    <p className="text-sm text-muted-foreground mb-6">Este artigo está sendo finalizado por nossa equipe técnica.</p>
                    <Button asChild className="rounded-full bg-cta text-cta-foreground hover:bg-cta-hover">
                      <Link to="/contato">Receber aviso quando publicar</Link>
                    </Button>
                  </div>
                </RevealSection>
              )}

              {/* Tags + share */}
              <RevealSection>
                <div className="flex items-center justify-between flex-wrap gap-4 mt-10 pt-8 border-t border-border/50">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground">Tags:</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${config?.badge}`}>{post.category}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">Engenharia</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">Segurança</span>
                  </div>
                  <button onClick={handleShare}
                    className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary hover:bg-secondary/80 px-4 py-2 rounded-full transition-all">
                    <Share2 className="h-3.5 w-3.5" />
                    {copied ? "Copiado!" : "Compartilhar"}
                  </button>
                </div>
              </RevealSection>

              {/* Author box */}
              <RevealSection>
                <div className="bg-card rounded-xl border border-border/50 p-6 mt-8 flex flex-col sm:flex-row gap-5">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1">VSM Engenharia</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      Especialistas em inspeções NR-13, NR-12, NR-11, Reclassificação de Monta e projetos mecânicos.
                      Engenheiros com CREA ativo e mais de 10 anos de experiência no Sudeste do Brasil.
                    </p>
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="rounded-full text-xs bg-cta text-cta-foreground hover:bg-cta-hover">
                        <Link to="/contato"><Phone className="h-3 w-3 mr-1" />Fale Conosco</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="rounded-full text-xs">
                        <Link to="/sobre">Sobre Nós</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </RevealSection>

              {/* Nav prev/next */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.slug}`}
                    className="group bg-card rounded-xl border border-border/50 p-5 hover:shadow-lg transition-all hover:-translate-y-0.5">
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1 mb-2"><ArrowLeft className="h-3 w-3" />Artigo anterior</span>
                    <h4 className="text-sm font-bold leading-snug group-hover:text-cta transition-colors line-clamp-2">{prevPost.title}</h4>
                  </Link>
                ) : <div />}
                {nextPost && (
                  <Link to={`/blog/${nextPost.slug}`}
                    className="group bg-card rounded-xl border border-border/50 p-5 hover:shadow-lg transition-all hover:-translate-y-0.5 text-right">
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1 mb-2 justify-end">Próximo artigo <ArrowRight className="h-3 w-3" /></span>
                    <h4 className="text-sm font-bold leading-snug group-hover:text-cta transition-colors line-clamp-2">{nextPost.title}</h4>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar — TOC + CTA (sticky) */}
            <aside className="lg:col-span-4 order-2 hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Table of contents */}
                {post.toc && post.toc.length > 0 && (
                  <div className="bg-card rounded-xl border border-border/50 p-5">
                    <h3 className="text-sm font-bold mb-3 flex items-center gap-2"><FileText className="h-4 w-4 text-primary" />Neste artigo</h3>
                    <nav className="space-y-1">
                      {post.toc.map((item) => (
                        <a key={item.id} href={`#${item.id}`}
                          className="block text-xs text-muted-foreground hover:text-cta py-1.5 pl-3 border-l-2 border-border/50 hover:border-cta transition-all leading-snug">
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Related service CTA — sempre presente (deriva da categoria quando o post não define) */}
                {relatedService && (
                  <div className="bg-gradient-elegant rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-10" />
                    <div className="relative">
                      <span className="text-[10px] font-bold tracking-widest text-cta uppercase">Serviço Relacionado</span>
                      <h4 className="text-sm font-bold text-white mt-2 mb-3">{relatedService.label}</h4>
                      <Button asChild size="sm" className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-full text-xs w-full shadow-md">
                        <Link to={relatedService.href}>
                          Solicitar Orçamento <ArrowRight className="h-3.5 w-3.5 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Consult CTA */}
                <div className="bg-card rounded-xl border border-border/50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="h-4 w-4 text-cta" />
                    <h4 className="text-sm font-bold">Dúvidas?</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Fale com um engenheiro especialista sobre este tema.</p>
                  <Button asChild size="sm" variant="outline" className="rounded-full text-xs w-full">
                    <Link to="/contato">Falar com Engenheiro</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="py-14 bg-secondary/30">
          <div className="container mx-auto px-4">
            <RevealSection>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Artigos Relacionados</h2>
            </RevealSection>
            <RevealSection stagger>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => {
                  const rpCfg = categoryConfig[rp.category]; const RpIcon = rpCfg?.icon || Shield;
                  return (
                    <Link key={rp.slug} to={`/blog/${rp.slug}`}
                      className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                      <div className={`h-36 bg-gradient-to-br ${rpCfg?.gradient} relative flex items-center justify-center`}>
                        <div className="absolute inset-0 pattern-grid opacity-10" />
                        <RpIcon className="h-12 w-12 text-white/10 relative group-hover:scale-110 transition-transform duration-500" />
                        <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${rpCfg?.badge}`}>{rp.category}</span>
                        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm text-white text-[11px] px-2.5 py-0.5 rounded-full">
                          <Clock className="h-3 w-3" />{rp.readTime}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-sm font-bold leading-snug group-hover:text-cta transition-colors mb-2 line-clamp-2">{rp.title}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">{rp.excerpt}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-cta mt-3 group-hover:gap-2 transition-all">
                          Ler artigo <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </RevealSection>
          </div>
        </section>
      )}

      {/* ── CTA Final ── */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <RevealSection>
            <div className="relative bg-gradient-elegant rounded-2xl p-8 md:p-14 overflow-hidden text-center">
              <div className="absolute inset-0 pattern-dots opacity-10" />
              <div className="absolute top-0 right-0 w-72 h-72 bg-cta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative max-w-2xl mx-auto">
                <span className="bg-cta/20 text-cta px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 inline-block">Consultoria Gratuita</span>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  Precisa de ajuda com <span className="text-cta">{post.category === "Reclassificação" ? "reclassificação de monta" : post.category}?</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-7">
                  Nossos engenheiros estão prontos para ajudar sua empresa com orientação técnica gratuita.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-7 h-13 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:scale-[1.02] transition-all">
                    <Link to="/contato"><Phone className="h-5 w-5 mr-2" />Falar com Engenheiro</Link>
                  </Button>
                  <Button asChild className="bg-white text-primary font-semibold px-7 h-13 rounded-full hover:bg-white/90 transition-all">
                    <Link to={relatedService.href}>
                      {relatedService.label} <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Back to top */}
      {showBackToTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-elevated flex items-center justify-center hover:scale-110 transition-all"
          aria-label="Voltar ao topo">
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

/* ── Simple markdown renderer ── */

function renderMarkdown(md: string): string {
  // Process tables first
  const tableRegex = /(?:^\|.+\|$\n?)+/gm;
  const result = md.replace(tableRegex, (tableBlock) => {
    const rows = tableBlock.trim().split('\n').filter(r => r.trim());
    const htmlRows = rows
      .filter(row => !row.match(/^\|[\s-:|]+\|$/)) // skip separator
      .map((row, idx) => {
        const cells = row.split('|').slice(1, -1).map(c => c.trim());
        const tag = idx === 0 ? 'th' : 'td';
        const cls = idx === 0
          ? 'text-xs font-bold p-3 text-left bg-secondary/50'
          : 'text-sm p-3 border-t border-border/50';
        return `<tr>${cells.map(c => `<${tag} class="${cls}">${c.replace(/\*\*/g, '')}</${tag}>`).join('')}</tr>`;
      })
      .join('');
    return `<div class="overflow-x-auto my-6"><table class="w-full rounded-lg overflow-hidden border border-border/50">${htmlRows}</table></div>`;
  });

  return result
    // Headers with IDs
    .replace(/^## (.+?) \{#(.+?)\}$/gm, '<h2 id="$2">$1</h2>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic (single * not part of **)
    .replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>')
    // Inline links [text](url)
    .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cta hover:underline font-semibold">$1</a>')
    // Internal links [text](/path)
    .replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, '<a href="$2" class="text-cta hover:underline font-semibold">$1</a>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // Checklist items
    .replace(/^- ☐ (.+)$/gm, '<li class="flex items-start gap-2 text-sm py-1 list-none"><span class="w-4 h-4 mt-0.5 rounded border border-border shrink-0"></span><span>$1</span></li>')
    // List items
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-sm py-1 list-none"><span class="w-1.5 h-1.5 rounded-full bg-cta mt-2 shrink-0"></span><span>$1</span></li>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li[^>]*>[\s\S]*?<\/li>(?:\s*<li[^>]*>[\s\S]*?<\/li>)*)/g, '<ul class="my-4 space-y-1">$1</ul>')
    // Paragraphs (lines that don't start with HTML tags)
    .replace(/^(?!<[hbultda/]|$)([\w❌☐"À-ÿ(].+)$/gm, '<p>$1</p>')
    // Clean up
    .replace(/\n{3,}/g, '\n\n');
}
