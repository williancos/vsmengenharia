import { useState, useMemo } from "react";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "react-router-dom";
import {
  FileCheck, ArrowRight, Search, BookOpen,
  Shield, Wrench, Truck, FileText, Clock,
  ChevronRight, ChevronLeft, Phone, Flame,
  Users, CheckCircle2, Bookmark, Eye, HelpCircle, Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealSection from "@/components/RevealSection";
import { WhatsAppGlyph } from "@/components/BlogConversion";
import { allPosts, categoryConfig } from "@/data/generated/blogMeta";
import { resolveTopic, whatsappHref, PHONE_HREF, PHONE_LABEL } from "@/data/blogConversion";

import { imgProps } from "@/lib/responsive-img";
import heroImg from "@/assets/team-engineers.jpg?w=480;768;1024;1440;1920&format=webp&as=img";

const categories = [
  { key: "all", label: "Todos", icon: BookOpen },
  { key: "NR13", label: "NR-13", icon: Shield },
  { key: "NR12", label: "NR-12", icon: Wrench },
  { key: "NR11", label: "NR-11 / Rigging", icon: Truck },
  { key: "Reclassificação", label: "Reclassificação", icon: FileText },
  { key: "Conformidade", label: "Conformidade", icon: FileCheck },
];

const POSTS_PER_PAGE = 8;
const popularSearches = ["NR-13 inspeção", "Plano de Rigging", "Reclassificação DETRAN", "Auditoria trabalhista"];

/**
 * "Comece pelo seu equipamento" — o leitor se identifica pelo que opera, não
 * pela sigla da norma. Cada card filtra os artigos do tema e abre o WhatsApp
 * já citando o assunto. Substitui os antigos "Materiais Gratuitos", que não
 * tinham arquivo nem ação por trás.
 */
const audienceCards = [
  { category: "NR13", norm: "NR-13", icon: Shield, service: "/servicos/nr13", title: "Caldeiras, vasos de pressão e tubulações", desc: "Inspeção periódica, prontuário e laudo com ART." },
  { category: "NR12", norm: "NR-12", icon: Wrench, service: "/servicos/nr12", title: "Máquinas e equipamentos industriais", desc: "Apreciação de risco, proteções e adequação da linha." },
  { category: "NR11", norm: "NR-11", icon: Truck, service: "/servicos/nr11", title: "Munck, ponte rolante, guindaste e talhas", desc: "Laudo, teste de carga e plano de rigging." },
  { category: "Reclassificação", norm: "Monta", icon: FileText, service: "/servicos/reclassificacao-de-monta", title: "Veículo com sinistro no documento", desc: "Laudo de engenharia para a reclassificação no DETRAN." },
  { category: "Conformidade", norm: "PMOC", icon: FileCheck, service: "/servicos/pmoc", title: "Climatização, PMOC e auditorias", desc: "PMOC, carga térmica, ensaios não destrutivos e fiscalização." },
];

const blogWhatsApp = (subject: string) =>
  whatsappHref([`Olá! Vim pelo blog da VSM e gostaria de falar com um engenheiro sobre ${subject}.`]);

export default function Blog() {
  useSEO({
    title: "Blog de Engenharia | Guias Técnicos NR13, NR12, NR11 — VSM Engenharia",
    description: "Blog com guias práticos sobre NR13, NR12, NR11 e reclassificação veicular. Artigos técnicos escritos por engenheiros especializados com CREA ativo.",
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const monthMap: Record<string, number> = { jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5, jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11 };
  const parseDate = (s: string): number => {
    const parts = s.toLowerCase().replace(/\./g, "").split(/\s+/);
    if (parts.length < 3) return 0;
    const d = parseInt(parts[0], 10);
    const m = monthMap[parts[1].slice(0, 3)] ?? 0;
    const y = parseInt(parts[2], 10);
    return new Date(y, m, d).getTime();
  };
  const sortedPosts = useMemo(() => [...allPosts].sort((a, b) => parseDate(b.date) - parseDate(a.date)), []);

  const filtered = useMemo(() => sortedPosts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = !searchTerm || p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  }), [activeCategory, searchTerm, sortedPosts]);

  const featuredPosts = sortedPosts.filter((p) => p.featured);
  const showFeatured = activeCategory === "all" && !searchTerm && currentPage === 1;

  const paginatedPosts = useMemo(() => {
    const base = showFeatured ? filtered.filter((p) => !p.featured) : filtered;
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return base.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, currentPage, showFeatured]);

  const totalPages = Math.ceil((showFeatured ? filtered.filter(p => !p.featured) : filtered).length / POSTS_PER_PAGE);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const showCategory = (key: string) => {
    handleCategoryChange(key);
    document.getElementById("artigos")?.scrollIntoView({ behavior: "smooth" });
  };

  const categoryCount = (key: string) => allPosts.filter((p) => p.category === key).length;

  // Assunto da conversa no WhatsApp conforme o filtro ativo (cai no genérico em "Todos").
  const activeCard = audienceCards.find((c) => c.category === activeCategory);
  const activeSubject = activeCard ? resolveTopic(activeCard.service).subject : "laudos e inspeções técnicas";

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="absolute inset-0">
          <img {...imgProps(heroImg)} alt="Conteúdos técnicos VSM Engenharia" className="w-full h-full object-cover" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/60" />
          <div className="absolute inset-0 pattern-dots opacity-10" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Blog Técnico</span>
              <span className="bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">📚 {allPosts.length} artigos publicados</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-[1.05] text-white">
              Conhecimento que{" "}
              <span className="text-cta relative">
                protege
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M1 5.5Q50 1 100 5t99-1" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" /></svg>
              </span>{" "}
              sua operação
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Guias práticos e checklists sobre NR-13, NR-12, NR-11 e Reclassificação de Monta — escritos por engenheiros com CREA ativo.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mb-4 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cta/30 via-white/20 to-cta/30 rounded-full blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-white rounded-full shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)] overflow-hidden border-2 border-transparent focus-within:border-cta/40 transition-all">
                <Search className="absolute left-5 h-5 w-5 text-muted-foreground/60 group-focus-within:text-cta transition-colors" />
                <input
                  type="text"
                  placeholder="Buscar por norma, tema ou palavra-chave..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full h-14 pl-13 pr-24 bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none text-base"
                  style={{ paddingLeft: '3.25rem' }}
                />
                {searchTerm && (
                  <button
                    onClick={() => handleSearch("")}
                    className="absolute right-20 text-muted-foreground/40 hover:text-muted-foreground transition-colors p-1"
                    aria-label="Limpar busca"
                  >
                    ✕
                  </button>
                )}
                <button
                  onClick={() => document.getElementById('artigos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="absolute right-2 bg-cta hover:bg-cta-hover text-cta-foreground h-10 px-5 rounded-full text-sm font-semibold transition-all hover:scale-[1.03] shadow-sm"
                >
                  Buscar
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white/40 text-xs font-medium">🔥 Popular:</span>
              {popularSearches.map((t) => (
                <button
                  key={t}
                  onClick={() => handleSearch(t)}
                  className={`text-xs px-3.5 py-1.5 rounded-full transition-all border ${
                    searchTerm === t
                      ? "bg-cta text-cta-foreground border-cta font-bold shadow-md"
                      : "text-white/70 bg-white/10 border-white/10 hover:bg-white/20 hover:border-white/20 backdrop-blur-sm font-medium"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Faixa de contato direto (substitui a newsletter, que não tinha envio) ── */}
      <section className="bg-cta relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
          <p className="text-sm md:text-base text-cta-foreground/90 leading-snug">
            <strong className="text-cta-foreground">Prazo de inspeção vencendo, notificação ou exigência de cliente?</strong>{" "}
            Fale direto com um engenheiro. Resposta em até 24h.
          </p>
          <a href={blogWhatsApp("laudos e inspeções técnicas")} target="_blank" rel="noopener noreferrer" data-cta="blog_index_faixa"
            className="inline-flex items-center gap-2 bg-white text-cta hover:bg-white/90 font-semibold text-sm px-5 h-10 rounded-full shrink-0 transition-colors">
            <WhatsAppGlyph /> Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* ── Featured (page 1 only) ── */}
      {showFeatured && (
        <section className="py-14 md:py-18">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-cta/10 flex items-center justify-center"><Flame className="h-5 w-5 text-cta" /></div>
                <h2 className="text-2xl md:text-3xl font-bold">Mais Lidos</h2>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Main */}
              <RevealSection className="lg:col-span-7">
                <Link to={`/blog/${featuredPosts[0]?.slug}`} className="group block relative rounded-2xl overflow-hidden h-full min-h-[380px]">
                  {featuredPosts[0]?.coverImage ? (
                    <>
                      <img src={featuredPosts[0].coverImage} alt={featuredPosts[0].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                    </>
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${categoryConfig[featuredPosts[0]?.category]?.gradient}`} />
                      <div className="absolute inset-0 pattern-grid opacity-10" />
                      <div className="absolute top-6 right-6 opacity-10">
                        {(() => { const I = categoryConfig[featuredPosts[0]?.category]?.icon || Shield; return <I className="h-28 w-28 text-white" />; })()}
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryConfig[featuredPosts[0]?.category]?.badge}`}>{featuredPosts[0]?.category}</span>
                      <span className="text-xs text-white/80 flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{featuredPosts[0]?.readTime}</span>
                      <span className="text-xs text-white/80 flex items-center gap-1"><Eye className="h-3.5 w-3.5" />{featuredPosts[0]?.views?.toLocaleString()}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight group-hover:text-cta transition-colors">{featuredPosts[0]?.title}</h3>
                    <p className="text-white/80 leading-relaxed mb-4 max-w-xl line-clamp-2">{featuredPosts[0]?.excerpt}</p>
                    <span className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-5 py-2.5 rounded-full text-sm font-semibold w-fit group-hover:gap-3 transition-all shadow-lg">Ler artigo <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </Link>
              </RevealSection>

              {/* Side */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                {featuredPosts.slice(1, 3).map((post, i) => {
                  const cfg = categoryConfig[post.category]; const Icon = cfg?.icon || Shield;
                  return (
                    <RevealSection key={post.slug} delay={i * 100}>
                      <Link to={`/blog/${post.slug}`} className="group flex bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5 h-full">
                        <div className={`relative w-36 md:w-40 shrink-0 ${post.coverImage ? "" : `bg-gradient-to-br ${cfg?.gradient}`} flex items-center justify-center overflow-hidden`}>
                          {post.coverImage ? (
                            <img src={post.coverImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                          ) : (
                            <>
                              <div className="absolute inset-0 pattern-dots opacity-10" />
                              <Icon className="h-9 w-9 text-white/20 relative" />
                            </>
                          )}
                          <span className="absolute top-2.5 left-2.5 text-[10px] font-bold bg-white/90 backdrop-blur-sm text-primary px-2 py-0.5 rounded-full z-10">#{i + 2}</span>
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg?.badge}`}>{post.category}</span>
                              <span className="text-[10px] text-muted-foreground">{post.date}</span>
                            </div>
                            <h3 className="font-bold text-sm leading-snug group-hover:text-cta transition-colors mb-1.5">{post.title}</h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
                          </div>
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/50">
                            <span className="text-[11px] text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                            <span className="text-xs font-semibold text-cta flex items-center gap-1 group-hover:gap-2 transition-all">Ler <ArrowRight className="h-3.5 w-3.5" /></span>
                          </div>
                        </div>
                      </Link>
                    </RevealSection>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Comece pelo seu equipamento ── */}
      {showFeatured && (
        <section className="pb-14">
          <div className="container mx-auto px-4">
            <RevealSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"><Compass className="h-5 w-5 text-primary" /></div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">Comece pelo seu equipamento</h2>
                  <p className="text-sm text-muted-foreground">Veja os artigos do seu caso ou fale direto com o engenheiro da área</p>
                </div>
              </div>
            </RevealSection>
            <RevealSection stagger>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {audienceCards.map((c) => (
                  <div key={c.category} className="group flex flex-col bg-card rounded-xl border border-border/60 p-5 hover:shadow-lg hover:border-primary/20 transition-all">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${categoryConfig[c.category]?.badge}`}>{c.norm}</span>
                        <h3 className="font-bold text-[15px] leading-snug mt-1.5">{c.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1">{c.desc}</p>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-3 border-t border-border/50">
                      <button type="button" onClick={() => showCategory(c.category)}
                        className="text-xs font-semibold text-primary hover:text-cta inline-flex items-center gap-1 transition-colors">
                        Ver {categoryCount(c.category)} artigos <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                      <a href={blogWhatsApp(resolveTopic(c.service).subject)} target="_blank" rel="noopener noreferrer" data-cta={`blog_index_${c.norm.toLowerCase()}`}
                        className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-cta-foreground bg-cta hover:bg-cta-hover px-3.5 h-8 rounded-full transition-colors">
                        <WhatsAppGlyph className="h-3.5 w-3.5" /> Falar com engenheiro
                      </a>
                    </div>
                  </div>
                ))}

                {/* Quem não sabe por onde começar fala direto com o engenheiro */}
                <div className="relative flex flex-col bg-gradient-elegant rounded-xl p-5 overflow-hidden">
                  <div className="absolute inset-0 pattern-dots opacity-10" />
                  <div className="relative flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <HelpCircle className="h-5 w-5 text-cta" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[15px] text-white leading-snug">Não sabe qual norma se aplica?</h3>
                      <p className="text-xs text-white/70 leading-relaxed mt-1">Descreva o equipamento ou a exigência que recebeu. O engenheiro indica a norma e o que precisa ser feito.</p>
                    </div>
                  </div>
                  <a href={whatsappHref(["Olá! Vim pelo blog da VSM e preciso de orientação para saber qual norma se aplica ao meu caso."])}
                    target="_blank" rel="noopener noreferrer" data-cta="blog_index_qual_norma"
                    className="relative mt-auto inline-flex items-center justify-center gap-2 bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-sm h-10 rounded-full transition-colors">
                    <WhatsAppGlyph /> Pedir orientação
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      )}

      {/* ── Posts Grid + Pagination ── */}
      <section className="py-14 md:py-18 bg-secondary/30" id="artigos">
        <div className="container mx-auto px-4">
          {/* Header + filter */}
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">{activeCategory === "all" ? "Todos os Artigos" : categories.find(c => c.key === activeCategory)?.label}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {filtered.length} {filtered.length === 1 ? "artigo" : "artigos"}
                  {searchTerm && <> para "<span className="font-semibold text-foreground">{searchTerm}</span>"</>}
                  {totalPages > 1 && <> • Página {currentPage} de {totalPages}</>}
                </p>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {categories.map((cat) => (
                  <button key={cat.key} onClick={() => handleCategoryChange(cat.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${activeCategory === cat.key ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground hover:text-foreground border border-border/50"}`}>
                    <cat.icon className="h-4 w-4" />{cat.label}
                  </button>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-2xl border border-border/50">
              <Search className="h-14 w-14 text-muted-foreground/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Nenhum artigo encontrado</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Tente outra busca ou pergunte direto ao engenheiro: a dúvida que não está no blog costuma ser a mais específica do seu caso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={whatsappHref([searchTerm
                    ? `Olá! Procurei por "${searchTerm}" no blog da VSM e não encontrei. Podem me orientar?`
                    : "Olá! Vim pelo blog da VSM e gostaria de falar com um engenheiro."])}
                  target="_blank" rel="noopener noreferrer" data-cta="blog_index_busca_vazia"
                  className="inline-flex items-center justify-center gap-2 bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-sm h-10 px-5 rounded-full transition-colors">
                  <WhatsAppGlyph /> Perguntar ao engenheiro
                </a>
                <Button variant="outline" onClick={() => { handleSearch(""); setActiveCategory("all"); }} className="rounded-full">Limpar filtros</Button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedPosts.map((post, i) => {
                  const cfg = categoryConfig[post.category]; const Icon = cfg?.icon || Shield;
                  return (
                    <RevealSection key={post.slug} delay={i * 60}>
                      <Link to={`/blog/${post.slug}`} className="group block bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-elevated transition-all hover:-translate-y-1 h-full">
                        <div className={`relative h-40 ${post.coverImage ? "" : `bg-gradient-to-br ${cfg?.gradient}`} flex items-center justify-center overflow-hidden`}>
                          {post.coverImage ? (
                            <img src={post.coverImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                          ) : (
                            <>
                              <div className="absolute inset-0 pattern-grid opacity-10" />
                              <Icon className="h-14 w-14 text-white/10 relative group-hover:scale-110 transition-transform duration-500" />
                            </>
                          )}
                          <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${cfg?.badge} shadow-sm z-10`}>{post.category}</span>
                          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"><Bookmark className="h-3.5 w-3.5 text-white" /></div>
                          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[11px] px-2.5 py-0.5 rounded-full z-10"><Clock className="h-3 w-3" />{post.readTime}</div>
                        </div>
                        <div className="p-5 flex flex-col justify-between min-h-[170px]">
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-[11px] text-muted-foreground">
                              <span>{post.date}</span><span>•</span><span className="flex items-center gap-1"><Eye className="h-3 w-3" />{post.views?.toLocaleString()}</span>
                            </div>
                            <h2 className="text-base font-bold group-hover:text-cta transition-colors leading-snug mb-2">{post.title}</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                          </div>
                          <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"><Users className="h-3 w-3 text-primary" /></div>
                              <span className="text-[11px] text-muted-foreground">VSM Engenharia</span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-cta group-hover:gap-2 transition-all">Ler <ArrowRight className="h-4 w-4" /></span>
                          </div>
                        </div>
                      </Link>
                    </RevealSection>
                  );
                })}

                {/* Card de contato no meio da grade (página 1, qualquer filtro) — no lugar da newsletter sem envio */}
                {currentPage === 1 && !searchTerm && paginatedPosts.length >= 3 && (
                  <RevealSection delay={200}>
                    <div className="bg-gradient-elegant rounded-xl overflow-hidden h-full flex flex-col justify-center p-6 relative min-h-[340px]">
                      <div className="absolute inset-0 pattern-dots opacity-10" />
                      <div className="relative text-center">
                        <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center mx-auto mb-4">
                          <WhatsAppGlyph className="h-6 w-6 text-cta" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Não encontrou a sua dúvida?</h3>
                        <p className="text-sm text-white/70 mb-5 leading-relaxed">
                          Pergunte direto a um engenheiro com CREA ativo. A resposta chega pelo WhatsApp em até 24h.
                        </p>
                        <a href={blogWhatsApp(activeSubject)} target="_blank" rel="noopener noreferrer" data-cta="blog_index_grade"
                          className="inline-flex items-center justify-center gap-2 bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-sm h-11 rounded-full w-full transition-colors">
                          <WhatsAppGlyph /> Perguntar ao engenheiro
                        </a>
                        <a href={PHONE_HREF} data-cta="blog_index_grade_tel" className="inline-flex items-center justify-center gap-1.5 text-xs text-white/60 hover:text-white mt-3 transition-colors">
                          <Phone className="h-3.5 w-3.5" /> ou ligue {PHONE_LABEL}
                        </a>
                      </div>
                    </div>
                  </RevealSection>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <RevealSection>
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <button onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); document.getElementById('artigos')?.scrollIntoView({ behavior: 'smooth' }); }}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-card border border-border/50 hover:bg-accent text-foreground">
                      <ChevronLeft className="h-4 w-4" /> Anterior
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button key={page} onClick={() => { setCurrentPage(page); document.getElementById('artigos')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${currentPage === page ? "bg-primary text-primary-foreground shadow-md" : "bg-card border border-border/50 hover:bg-accent text-foreground"}`}>
                        {page}
                      </button>
                    ))}

                    <button onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); document.getElementById('artigos')?.scrollIntoView({ behavior: 'smooth' }); }}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-card border border-border/50 hover:bg-accent text-foreground">
                      Próximo <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </RevealSection>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Conversion CTA ── */}
      <section className="py-14 md:py-18">
        <div className="container mx-auto px-4">
          <RevealSection>
            <div className="relative bg-gradient-elegant rounded-2xl overflow-hidden">
              <div className="absolute inset-0 pattern-dots opacity-10" />
              <div className="absolute top-0 right-0 w-72 h-72 bg-cta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-14">
                {/* Left — CTA */}
                <div>
                  <span className="bg-cta/20 text-cta px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 inline-block">Consultoria Gratuita</span>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                    Precisa de ajuda com <span className="text-cta">normas regulamentadoras?</span>
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Nossos engenheiros especialistas estão prontos para orientar sua empresa sobre inspeções, laudos e conformidade — sem custo e sem compromisso.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-7 h-13 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:shadow-[0_8px_30px_-4px_hsl(var(--cta)/0.55)] hover:scale-[1.02] transition-all">
                      <a href={blogWhatsApp(activeSubject)} target="_blank" rel="noopener noreferrer" data-cta="blog_index_final">
                        <WhatsAppGlyph className="h-5 w-5 mr-2" />Falar com um engenheiro
                      </a>
                    </Button>
                    <Button asChild className="bg-white text-primary font-semibold px-7 h-13 rounded-full border border-white/30 hover:bg-white/90 transition-all">
                      <Link to="/servicos/consultoria-gratuita">Consultoria Gratuita <ChevronRight className="h-4 w-4 ml-1" /></Link>
                    </Button>
                  </div>

                  {/* Trust */}
                  <div className="flex items-center gap-4 flex-wrap text-white/50 text-xs">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cta" />Engenheiros CREA ativo</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cta" />ART inclusa</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cta" />Resposta em 24h</span>
                  </div>
                </div>

                {/* Right — quick links */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-white font-bold text-base mb-4">Serviços mais procurados:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: "Inspeção NR-13", href: "/servicos/nr13", icon: Shield },
                      { label: "Adequação NR-12", href: "/servicos/nr12", icon: Wrench },
                      { label: "Plano de Rigging", href: "/servicos/nr11", icon: Truck },
                      { label: "Reclassificação", href: "/servicos/reclassificacao-de-monta", icon: FileText },
                    ].map((s) => (
                      <Link key={s.href} to={s.href} className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl p-3.5 transition-all border border-white/5 hover:border-white/15">
                        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                          <s.icon className="h-4 w-4 text-white/70" />
                        </div>
                        <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors">{s.label}</span>
                        <ArrowRight className="h-4 w-4 text-white/30 ml-auto group-hover:text-cta transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
