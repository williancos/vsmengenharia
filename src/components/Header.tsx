import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// A logo é exibida com 56px de altura (169px de largura); as variantes cobrem
// 1x e 2x. Sem isso o PNG de 500px e 56 KB era baixado inteiro em toda página.
import logoImg from "@/assets/logo.png?w=169;338&format=webp&as=img";
import { imgProps } from "@/lib/responsive-img";

const services = [
  { label: "NR13", href: "/servicos/nr13" },
  { label: "NR12", href: "/servicos/nr12" },
  { label: "NR11 / Plano de Rigging", href: "/servicos/nr11" },
  { label: "PMOC", href: "/servicos/pmoc" },
  { label: "Reclassificação de Monta", href: "/servicos/reclassificacao-de-monta" },
  { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
  { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos" },
  { label: "Projetos de Climatização", href: "/servicos/projetos-climatizacao" },
  { label: "Consultoria Gratuita", href: "/servicos/consultoria-gratuita" },
];

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          {/* Header é sticky e aparece em todas as rotas: candidato a LCP nas
              páginas sem imagem de hero. width/height evitam o salto de layout. */}
          <img
            {...imgProps(logoImg, "169px")}
            alt="VSM Engenharia"
            className="h-14 w-auto"
            fetchpriority="high"
            decoding="async"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 ${
                location.pathname === link.href ? "bg-primary-foreground/10 text-primary-foreground" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div className="relative group">
            <button className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 flex items-center gap-1">
              Serviços <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card rounded-lg shadow-xl border py-2 min-w-[260px]">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 ${
                location.pathname === link.href ? "bg-primary-foreground/10 text-primary-foreground" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold"
          >
            <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
              Falar com Engenheiro
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          <nav className="container mx-auto px-4 flex flex-col gap-1 pt-2">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground rounded-md"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground flex items-center gap-1"
            >
              Serviços <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-1.5 text-sm text-primary-foreground/70 hover:text-primary-foreground"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground rounded-md"
              >
                {link.label}
              </Link>
            ))}

            <div className="px-3 pt-2">
              <Button asChild className="w-full bg-cta text-cta-foreground hover:bg-cta-hover font-semibold">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  Falar com Engenheiro
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
