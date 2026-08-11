/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */

/** Campos que só a página de um post abre. */
export interface BlogPostDetail {
  content?: string[];
  toc?: { id: string; label: string }[];
  keyTakeaways?: string[];
  metaDescription?: string;
  keywords?: string[];
  author?: {
    name: string;
    jobTitle: string;
    crea: string;
    linkedin?: string;
    avatar?: string;
  };
  faq?: { question: string; answer: string }[];
}
