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
                vsengenhariamecanica@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4 shrink-0" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Clock className="h-4 w-4 shrink-0" />
                Seg a Sex – 08h às 18h
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 shrink-0" />
                Região Sudeste
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} VSM Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
