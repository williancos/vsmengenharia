import type { RouteRecord } from "vite-react-ssg";
import { Outlet } from "react-router-dom";
import { createHead, UnheadProvider } from "@unhead/react/client";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import ConversionListeners from "@/components/ConversionListeners";
import { blogSlugs } from "./data/generated/blogSlugs";
import type { BlogPostDetail } from "./data/generated/blogDetail";

const head = createHead();

/**
 * Uma rota literal por post, em vez de uma única `blog/:slug`.
 *
 * Com rota paramétrica só existe um ponto de `lazy`, então o corpo dos 94
 * posts caía num chunk só: 1 MB baixado e compilado em toda página de post
 * para usar ~11 KB dele. Com uma rota por slug, cada post traz o seu módulo
 * de `detail` e nada mais.
 *
 * O `import.meta.glob` é o que faz o Rollup emitir um chunk por arquivo de
 * detail; sem ele um `import(\`...${slug}\`)` viraria import dinâmico opaco.
 *
 * A tabela vem de `blogSlugs` (só os 94 slugs, ~4 KB) e não de `allPosts`:
 * este módulo é o entry do app e carrega em toda página, então importar o
 * índice inteiro aqui colocaria 59 KB de metadado de blog na home e nas
 * páginas de serviço, que não listam artigo nenhum.
 */
const detailModules = import.meta.glob<{ detail: BlogPostDetail }>("./data/generated/detail/*.ts");

const blogPostRoutes: RouteRecord[] = blogSlugs.map((slug) => ({
  path: `blog/${slug}`,
  entry: "src/pages/BlogPost.tsx",
  lazy: async () => {
    const [mod, detailMod] = await Promise.all([
      import("./pages/BlogPost"),
      detailModules[`./data/generated/detail/${slug}.ts`]?.(),
    ]);
    const BlogPost = mod.default;
    const detail = detailMod?.detail;
    return { Component: () => <BlogPost slug={slug} detail={detail} /> };
  },
}));

/**
 * App shell — providers + Layout (com Outlet das rotas filhas).
 *
 * Já esteve aqui um `QueryClientProvider`, um `TooltipProvider` e os dois
 * Toasters (radix + sonner). Nenhum tinha consumidor: o site não chama
 * `useQuery`/`useMutation`, não usa `<Tooltip>` e não dispara `toast()` em
 * lugar nenhum — só existe o hook `use-toast`, que ninguém importa. Eram
 * ~110 KB de JS baixado, compilado e montado nas 111 páginas para nada.
 *
 * Os componentes seguem em `src/components/ui/` (arquivo não importado não
 * entra no bundle), então voltar a usar qualquer um é só remontar o provider.
 */
const AppShell = () => (
  <UnheadProvider head={head}>
    <ScrollToTop />
    <ConversionListeners />
    <Outlet />
  </UnheadProvider>
);

/**
 * Cada página vem por `lazy`, não por import estático, para que o Rollup gere
 * um chunk por rota. Com import estático o build saía num único app.js de
 * 2,2 MB: quem abria a home baixava e compilava também as 12 páginas de
 * serviço, o blog e os 94 posts.
 *
 * Duas restrições moldam o formato verboso abaixo:
 *
 *  1. O `import(...)` tem que estar literal DENTRO da função passada em `lazy`.
 *     O vite-react-ssg lê `lazy.toString()` e extrai os imports por regex para
 *     saber quais assets pertencem à rota (é o que evita flash sem estilo).
 *     Extrair isso para um helper esconderia o literal no closure.
 *  2. As páginas exportam `default`; o react-router só olha `Component`.
 */
export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: AppShell,
    children: [
      {
        Component: Layout,
        children: [
          {
            index: true,
            lazy: async () => ({ Component: (await import("./pages/Index")).default }),
            entry: "src/pages/Index.tsx",
          },
          {
            path: "sobre",
            lazy: async () => ({ Component: (await import("./pages/Sobre")).default }),
            entry: "src/pages/Sobre.tsx",
          },
          {
            path: "blog",
            lazy: async () => ({ Component: (await import("./pages/Blog")).default }),
            entry: "src/pages/Blog.tsx",
          },
          ...blogPostRoutes,
          {
            path: "contato",
            lazy: async () => ({ Component: (await import("./pages/Contato")).default }),
            entry: "src/pages/Contato.tsx",
          },
          {
            path: "clientes",
            lazy: async () => ({ Component: (await import("./pages/Clientes")).default }),
            entry: "src/pages/Clientes.tsx",
          },
          {
            path: "servicos/nr13",
            lazy: async () => ({ Component: (await import("./pages/servicos/NR13")).default }),
            entry: "src/pages/servicos/NR13.tsx",
          },
          {
            path: "servicos/nr12",
            lazy: async () => ({ Component: (await import("./pages/servicos/NR12")).default }),
            entry: "src/pages/servicos/NR12.tsx",
          },
          {
            path: "servicos/nr11",
            lazy: async () => ({ Component: (await import("./pages/servicos/NR11")).default }),
            entry: "src/pages/servicos/NR11.tsx",
          },
          {
            path: "servicos/pmoc",
            lazy: async () => ({ Component: (await import("./pages/servicos/PMOC")).default }),
            entry: "src/pages/servicos/PMOC.tsx",
          },
          {
            path: "servicos/reclassificacao-de-monta",
            lazy: async () => ({ Component: (await import("./pages/servicos/ReclassificacaoMonta")).default }),
            entry: "src/pages/servicos/ReclassificacaoMonta.tsx",
          },
          {
            path: "servicos/inspecoes-tecnicas",
            lazy: async () => ({ Component: (await import("./pages/servicos/InspecoesTecnicas")).default }),
            entry: "src/pages/servicos/InspecoesTecnicas.tsx",
          },
          {
            path: "servicos/projetos-mecanicos",
            lazy: async () => ({ Component: (await import("./pages/servicos/ProjetosMecanicos")).default }),
            entry: "src/pages/servicos/ProjetosMecanicos.tsx",
          },
          {
            path: "servicos/projetos-climatizacao",
            lazy: async () => ({ Component: (await import("./pages/servicos/ProjetosClimatizacao")).default }),
            entry: "src/pages/servicos/ProjetosClimatizacao.tsx",
          },
          {
            path: "servicos/consultoria-gratuita",
            lazy: async () => ({ Component: (await import("./pages/servicos/ConsultoriaGratuita")).default }),
            entry: "src/pages/servicos/ConsultoriaGratuita.tsx",
          },
          /* Landing pages de cauda comercial — separadas dos pilares para não competir com eles */
          {
            path: "servicos/inspecao-nr13-sao-paulo",
            lazy: async () => ({ Component: (await import("./pages/servicos/InspecaoNR13SaoPaulo")).default }),
            entry: "src/pages/servicos/InspecaoNR13SaoPaulo.tsx",
          },
          {
            path: "servicos/inspecao-nr13-compressor-de-ar",
            lazy: async () => ({ Component: (await import("./pages/servicos/InspecaoNR13CompressorAr")).default }),
            entry: "src/pages/servicos/InspecaoNR13CompressorAr.tsx",
          },
          {
            path: "servicos/laudo-de-recuperabilidade",
            lazy: async () => ({ Component: (await import("./pages/servicos/LaudoRecuperabilidade")).default }),
            entry: "src/pages/servicos/LaudoRecuperabilidade.tsx",
          },
        ],
      },
      {
        path: "*",
        lazy: async () => ({ Component: (await import("./pages/NotFound")).default }),
        entry: "src/pages/NotFound.tsx",
      },
    ],
  },
];
