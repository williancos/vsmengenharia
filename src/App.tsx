import type { RouteRecord } from "vite-react-ssg";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createHead, UnheadProvider } from "@unhead/react/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contato from "./pages/Contato";
import NR13 from "./pages/servicos/NR13";
import NR12 from "./pages/servicos/NR12";
import NR11 from "./pages/servicos/NR11";
import PMOC from "./pages/servicos/PMOC";
import ReclassificacaoMonta from "./pages/servicos/ReclassificacaoMonta";
import InspecoesTecnicas from "./pages/servicos/InspecoesTecnicas";
import ProjetosMecanicos from "./pages/servicos/ProjetosMecanicos";
import ProjetosClimatizacao from "./pages/servicos/ProjetosClimatizacao";
import ConsultoriaGratuita from "./pages/servicos/ConsultoriaGratuita";
import Clientes from "./pages/Clientes";
import NotFound from "./pages/NotFound";
import { allPosts } from "./data/blogData";

const queryClient = new QueryClient();
const head = createHead();

/* App shell — providers + Layout (com Outlet das rotas filhas) */
const AppShell = () => (
  <UnheadProvider head={head}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  </UnheadProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: AppShell,
    children: [
      {
        Component: Layout,
        children: [
          { index: true, Component: Index, entry: "src/pages/Index.tsx" },
          { path: "sobre", Component: Sobre, entry: "src/pages/Sobre.tsx" },
          { path: "blog", Component: Blog, entry: "src/pages/Blog.tsx" },
          {
            path: "blog/:slug",
            Component: BlogPost,
            entry: "src/pages/BlogPost.tsx",
            getStaticPaths: () => allPosts.map((p) => `/blog/${p.slug}`),
          },
          { path: "contato", Component: Contato, entry: "src/pages/Contato.tsx" },
          { path: "clientes", Component: Clientes, entry: "src/pages/Clientes.tsx" },
          { path: "servicos/nr13", Component: NR13, entry: "src/pages/servicos/NR13.tsx" },
          { path: "servicos/nr12", Component: NR12, entry: "src/pages/servicos/NR12.tsx" },
          { path: "servicos/nr11", Component: NR11, entry: "src/pages/servicos/NR11.tsx" },
          { path: "servicos/pmoc", Component: PMOC, entry: "src/pages/servicos/PMOC.tsx" },
          {
            path: "servicos/reclassificacao-de-monta",
            Component: ReclassificacaoMonta,
            entry: "src/pages/servicos/ReclassificacaoMonta.tsx",
          },
          {
            path: "servicos/inspecoes-tecnicas",
            Component: InspecoesTecnicas,
            entry: "src/pages/servicos/InspecoesTecnicas.tsx",
          },
          {
            path: "servicos/projetos-mecanicos",
            Component: ProjetosMecanicos,
            entry: "src/pages/servicos/ProjetosMecanicos.tsx",
          },
          {
            path: "servicos/projetos-climatizacao",
            Component: ProjetosClimatizacao,
            entry: "src/pages/servicos/ProjetosClimatizacao.tsx",
          },
          {
            path: "servicos/consultoria-gratuita",
            Component: ConsultoriaGratuita,
            entry: "src/pages/servicos/ConsultoriaGratuita.tsx",
          },
        ],
      },
      { path: "*", Component: NotFound, entry: "src/pages/NotFound.tsx" },
    ],
  },
];
