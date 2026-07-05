import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { allPosts } from "@/data/blogData";

interface PillarArticlesProps {
  /** Categoria do cluster: "NR13" | "NR11" | "NR12" | "Reclassificação" | "Conformidade" */
  category: string;
  title?: string;
  subtitle?: string;
  limit?: number;
}

/**
 * Bloco pilar → cluster: lista os artigos do blog da mesma categoria como links
 * internos crawláveis, com âncora = título do artigo (keyword-rich). Fecha o
 * grafo de linkagem interna (o BlogPost já linka de volta para o pilar via
 * `relatedService`). Renderiza no SSG, então os links ficam no HTML servido.
 */
export default function PillarArticles({
  category,
  title = "Guia técnico",
  subtitle = "Artigos técnicos aprofundados escritos pelos engenheiros da VSM Engenharia.",
  limit = 8,
}: PillarArticlesProps) {
  const posts = [...allPosts]
    .filter((p) => p.category === category)
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <BookOpen className="h-8 w-8 text-cta mx-auto mb-3" />
          <h2 className="text-2xl md:text-3xl font-black mb-2">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group flex items-center justify-between gap-4 bg-secondary rounded-xl p-4 border hover:border-cta/30 hover:shadow-elevated transition-all"
            >
              <span className="text-sm font-semibold leading-snug group-hover:text-cta transition-colors">{p.title}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-cta group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
