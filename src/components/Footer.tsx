import { Link } from "react-router-dom";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-3">VSM Engenharia</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Especialistas em inspeções técnicas, laudos e conformidade normativa para indústrias no Sudeste do Brasil.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 mb-3">Serviços</h4>
            <ul className="space-y-1.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 mb-3">Institucional</h4>
            <ul className="space-y-1.5">
              <li><Link to="/sobre" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Sobre Nós</Link></li>
              <li><Link to="/blog" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 mb-3">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="h-4 w-4 shrink-0" />
                contato@vsmengenharia.com
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4 shrink-0" />
                (11) 95453-4057
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Clock className="h-4 w-4 shrink-0" />
                Seg a Sex – 08h às 18h
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Rua Mandu, Vila Granada<br />São Paulo – SP, CEP 03622-000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="order-2 sm:order-1 text-center sm:text-left">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} VSM Engenharia. Todos os direitos reservados.
            </p>
            <p className="text-xs text-primary-foreground/40 mt-1">
              Site e SEO desenvolvidos por{" "}
              <a
                href="https://williansouza.dev.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-foreground/60 hover:text-primary-foreground underline underline-offset-2 transition-colors"
              >
                Willian Souza
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 order-1 sm:order-2">
            <a href="https://www.instagram.com/vsm_engenharia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram VSM Engenharia" className="h-9 w-9 rounded-lg border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/engenheiro-mec%C3%A2nico-vinicius-souza-692603203/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn VSM Engenharia" className="h-9 w-9 rounded-lg border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
