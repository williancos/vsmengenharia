import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function WhatsAppButton() {
  // Nos posts do blog, o celular mostra a barra fixa com o tema do artigo
  // (StickyMobileCta); o botão genérico fica só no desktop para não sobrepor.
  const { pathname } = useLocation();
  const onBlogPost = pathname.startsWith("/blog/");

  return (
    <a
      href="https://wa.me/5511954534057?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20engenheiro."
      target="_blank"
      rel="noopener noreferrer"
      data-cta="flutuante"
      className={`fixed bottom-6 right-6 z-50 ${onBlogPost ? "hidden lg:flex" : "flex"} items-center gap-2 bg-[hsl(145,63%,42%)] hover:bg-[hsl(145,63%,36%)] text-primary-foreground rounded-full px-5 py-3 shadow-lg transition-all hover:scale-105`}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
