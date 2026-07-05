import { useHead } from "@unhead/react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const BASE_URL = "https://www.vsmengenharia.com";
const DEFAULT_OG_IMAGE = "https://www.vsmengenharia.com/og-vsm.png";

/**
 * useSEO — gerencia title, meta, canonical e JSON-LD da página atual.
 * Implementação baseada em @unhead/react: funciona durante SSG (build)
 * e no cliente (após hydration), de forma unificada.
 */
export function useSEO({ title, description, canonical, ogType = "website", ogImage, jsonLd }: SEOProps) {
  const image = ogImage || DEFAULT_OG_IMAGE;
  // Quando canonical não é passado, deixa unhead/cliente resolver via location.pathname
  // (durante SSG, o vite-react-ssg injeta o canonical correto por rota).
  const canonicalHref =
    canonical ||
    (typeof window !== "undefined" ? `${BASE_URL}${window.location.pathname}` : undefined);

  const jsonLdItems = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      ...(canonicalHref ? [{ property: "og:url", content: canonicalHref }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    link: canonicalHref ? [{ rel: "canonical", href: canonicalHref }] : [],
    script: jsonLdItems.map((item) => ({
      type: "application/ld+json",
      innerHTML: JSON.stringify(item),
    })),
  });
}
