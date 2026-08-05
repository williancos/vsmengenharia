import { useEffect } from "react";
import { trackConversion, type ConversionKey } from "@/lib/conversions";

/**
 * Um único listener delegado no document cobre todos os links de WhatsApp e
 * telefone do site — inclusive os que forem adicionados depois, sem precisar
 * instrumentar link a link. Montado uma vez no layout raiz.
 */
const WHATSAPP_RE = /(?:wa\.me|api\.whatsapp\.com|whatsapp:)/i;
const PHONE_RE = /^tel:/i;

function classify(href: string): ConversionKey | null {
  if (WHATSAPP_RE.test(href)) return "whatsapp";
  if (PHONE_RE.test(href)) return "phone";
  return null;
}

export default function ConversionListeners() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.button !== 0) return; // só clique principal

      const anchor = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const key = classify(href);
      if (!key) return;

      const params = {
        link_url: href,
        link_text: anchor.textContent?.trim().slice(0, 100) || undefined,
      };

      // Abre em nova aba/app (target=_blank, tel:, clique com modificador): a
      // página atual continua viva, então não seguramos nada — atrasar o tel:
      // só faria o discador demorar a abrir.
      const keepsPageAlive =
        anchor.target === "_blank" ||
        key === "phone" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey;

      if (keepsPageAlive) {
        trackConversion(key, params);
        return;
      }

      // Navegação na mesma aba: segura o clique até a conversão sair (máx 800ms).
      event.preventDefault();
      trackConversion(key, params, () => {
        window.location.href = href;
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
