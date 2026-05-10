import cliente01 from "@/assets/clientes/cliente-01.avif";
import cliente02 from "@/assets/clientes/cliente-02.avif";
import cliente03 from "@/assets/clientes/cliente-03.avif";
import cliente04 from "@/assets/clientes/cliente-04.jpg";
import cliente05 from "@/assets/clientes/cliente-05.jpg";
import cliente06 from "@/assets/clientes/cliente-06.avif";
import cliente07 from "@/assets/clientes/cliente-07.avif";
import cliente08 from "@/assets/clientes/cliente-08.avif";
import cliente09 from "@/assets/clientes/cliente-09.avif";
import cliente10 from "@/assets/clientes/cliente-10.avif";
import cliente11 from "@/assets/clientes/cliente-11.avif";
import cliente12 from "@/assets/clientes/cliente-12.avif";
import cliente13 from "@/assets/clientes/cliente-13.avif";
import cliente14 from "@/assets/clientes/cliente-14.avif";
import cliente15 from "@/assets/clientes/cliente-15.avif";
import cliente16 from "@/assets/clientes/cliente-16.avif";
import cliente17 from "@/assets/clientes/cliente-17.avif";
import cliente18 from "@/assets/clientes/cliente-18.avif";
import cliente19 from "@/assets/clientes/cliente-19.avif";
import cliente20 from "@/assets/clientes/cliente-20.avif";
import cliente21 from "@/assets/clientes/cliente-21.avif";
import cliente22 from "@/assets/clientes/cliente-22.avif";
import cliente23 from "@/assets/clientes/cliente-23.jpeg";
import cliente24 from "@/assets/clientes/cliente-24.avif";
import cliente25 from "@/assets/clientes/cliente-25.avif";
import cliente26 from "@/assets/clientes/cliente-26.jpg";

export const clientLogos = [
  { src: cliente01, name: "Cliente 1" },
  { src: cliente02, name: "Cliente 2" },
  { src: cliente03, name: "Cliente 3" },
  { src: cliente04, name: "Technos Prime" },
  { src: cliente05, name: "Bemon" },
  { src: cliente06, name: "Cliente 6" },
  { src: cliente07, name: "Cliente 7" },
  { src: cliente08, name: "Cliente 8" },
  { src: cliente09, name: "Cliente 9" },
  { src: cliente10, name: "Cliente 10" },
  { src: cliente11, name: "Cliente 11" },
  { src: cliente12, name: "Cliente 12" },
  { src: cliente13, name: "Cliente 13" },
  { src: cliente14, name: "Cliente 14" },
  { src: cliente15, name: "Cliente 15" },
  { src: cliente16, name: "Cliente 16" },
  { src: cliente17, name: "Cliente 17" },
  { src: cliente18, name: "Cliente 18" },
  { src: cliente19, name: "Cliente 19" },
  { src: cliente20, name: "Cliente 20" },
  { src: cliente21, name: "Cliente 21" },
  { src: cliente22, name: "Cliente 22" },
  { src: cliente23, name: "Sorridents" },
  { src: cliente24, name: "Cliente 24" },
  { src: cliente25, name: "Cliente 25" },
  { src: cliente26, name: "Tres Transportes" },
];

import "@/styles/logo-carousel.css";

interface ClientLogosCarouselProps {
  className?: string;
}

export default function ClientLogosCarousel({ className = "" }: ClientLogosCarouselProps) {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...clientLogos, ...clientLogos];

  return (
    <section className={`relative py-8 md:py-10 bg-card border-b border-border/40 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 mb-6 flex items-center gap-3">
        <div className="w-8 h-px bg-border" />
        <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
          Empresas que confiam na VSM
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Infinite scroll track */}
      <div className="logo-carousel-mask">
        <div className="logo-carousel-track">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="logo-carousel-item"
            >
              <div className="h-16 md:h-20 w-32 md:w-40 flex items-center justify-center px-4 py-3 rounded-xl bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
