/**
 * GA4 — bootstrap e pageviews.
 *
 * O gtag.js já é carregado no index.html (Google Ads AW-11359694680). Aqui
 * apenas adicionamos o GA4 como segundo destino. Não é preciso mexer no
 * index.html e não há GTM no projeto.
 *
 * Os eventos de conversão (formulário, WhatsApp, telefone) ficam em
 * src/lib/conversions.ts — este arquivo cuida só de configuração e pageview.
 */
// Tipado como string (e não como literal) para que a checagem de placeholder
// abaixo continue válida se o ID voltar a ser G-XXXXXXXXXX.
export const GA4_MEASUREMENT_ID: string = "G-ZWMHRXHZPR";

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const g = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof g === "function" ? g : null;
}

const isConfigured = () =>
  /^G-[A-Z0-9]{6,}$/.test(GA4_MEASUREMENT_ID) && GA4_MEASUREMENT_ID !== "G-XXXXXXXXXX";

/**
 * Habilita o destino GA4. Roda uma única vez no bootstrap — nunca por rota,
 * porque um segundo `config` geraria pageview duplicado e atrapalharia a
 * atribuição. Client-only e idempotente.
 */
export function initAnalytics(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const w = window as unknown as { __vsmAnalytics?: boolean };
  if (w.__vsmAnalytics) return;
  w.__vsmAnalytics = true;

  if (!isConfigured()) {
    console.warn("[analytics] GA4 inativo — defina GA4_MEASUREMENT_ID em src/lib/analytics.ts.");
    return;
  }

  // send_page_view: false de propósito — o pageview é enviado por
  // trackPageview(), que também cobre as trocas de rota do SPA. Deixar o
  // config mandar o primeiro pageview duplicaria a primeira página.
  getGtag()?.("config", GA4_MEASUREMENT_ID, { send_page_view: false });
}

/** Envia um page_view do GA4 para a rota atual (inclusive a primeira). */
export function trackPageview(path: string): void {
  if (typeof window === "undefined") return;
  if (!isConfigured()) return;
  getGtag()?.("event", "page_view", {
    send_to: GA4_MEASUREMENT_ID,
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
