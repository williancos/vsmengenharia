import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/servicos/nr13" element={<NR13 />} />
            <Route path="/servicos/nr12" element={<NR12 />} />
            <Route path="/servicos/nr11" element={<NR11 />} />
            <Route path="/servicos/pmoc" element={<PMOC />} />
            <Route path="/servicos/reclassificacao-de-monta" element={<ReclassificacaoMonta />} />
            <Route path="/servicos/inspecoes-tecnicas" element={<InspecoesTecnicas />} />
            <Route path="/servicos/projetos-mecanicos" element={<ProjetosMecanicos />} />
            <Route path="/servicos/projetos-climatizacao" element={<ProjetosClimatizacao />} />
            <Route path="/servicos/consultoria-gratuita" element={<ConsultoriaGratuita />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
