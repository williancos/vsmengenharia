/**
 * GA4 — rastreamento de conversões (leads).
 *
 * ┌─ COMO ATIVAR ────────────────────────────────────────────────────────────┐
 * │ Substitua GA4_MEASUREMENT_ID abaixo pelo "ID de métricas" do seu fluxo de │
 * │ dados GA4:  GA4 → Admin → Fluxos de dados → Web → ID de métricas          │
 * │ (formato G-XXXXXXXXXX). Enquanto estiver "G-XXXXXXXXXX", o rastreamento    │
 * │ fica INATIVO (apenas emite um aviso no console).                          │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * O gtag.js já é carregado no index.html (Google Ads AW-11359694680). Aqui
 * apenas adicionamos o GA4 como segundo destino e disparamos os eventos de
 * conversão. Não é preciso mexer no index.html.
 *
 * Depois de ativar, marque o evento "generate_lead" como Evento-chave (conversão)
 * em GA4 → Admin → Eventos-chave.
 */
export const GA4_MEASUREMENT_ID = "G-ZWMHRXHZPR";

type LeadMethod = "whatsapp" | "phone" | "form";
type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const g = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof g === "function" ? g : null;
}

const isConfigured = () =>
  /^G-[A-Z0-9]{6,}$/.test(GA4_MEASUREMENT_ID) && GA4_MEASUREMENT_ID !== "G-XXXXXXXXXX";

/** Dispara um evento de conversão (lead) no GA4 (direcionado só ao GA4, não ao Ads). */
export function trackLead(method: LeadMethod, extra: Record<string, unknown> = {}): void {
  const gtag = getGtag();
  if (!gtag || !isConfigured()) return;
  gtag("event", "generate_lead", { method, send_to: GA4_MEASUREMENT_ID, ...extra });
}

/**
 * Inicializa o GA4 e o rastreamento delegado de cliques (WhatsApp e telefone).
 * Um único listener global cobre os ~194 botões de WhatsApp e o link de telefone
 * sem precisar instrumentar cada botão. Client-only e idempotente.
 */
export function initAnalytics(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const w = window as unknown as { __vsmAnalytics?: boolean };
  if (w.__vsmAnalytics) return;
  w.__vsmAnalytics = true;

  if (!isConfigured()) {
    console.warn("[analytics] GA4 inativo — defina GA4_MEASUREMENT_ID em src/lib/analytics.ts para ativar o rastreamento de conversões.");
    return;
  }

  // send_page_view: false — o pageview do GA4 já é coberto por outra via (tags
  // conectadas ao Ads). Aqui só habilitamos o destino GA4 para os eventos de
  // conversão, sem duplicar pageview.
  getGtag()?.("config", GA4_MEASUREMENT_ID, { send_page_view: false });

  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!el) return;
      const href = el.getAttribute("href") || "";
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackLead("whatsapp", { link_url: href });
      } else if (href.startsWith("tel:")) {
        trackLead("phone", { link_url: href });
      }
    },
    { capture: true },
  );
}
