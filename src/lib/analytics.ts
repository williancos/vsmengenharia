/**
 * GA4 — bootstrap.
 *
 * O gtag.js já é carregado no index.html (Google Ads AW-11359694680). Aqui
 * apenas adicionamos o GA4 como segundo destino. Não é preciso mexer no
 * index.html e não há GTM no projeto.
 *
 * Os eventos de conversão (formulário, WhatsApp, telefone) ficam em
 * src/lib/conversions.ts — este arquivo só habilita o destino GA4.
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
 *
 * Pageview NÃO é tratado aqui. A Métrica otimizada do GA4 já está ativa no
 * fluxo SITE e cobre os dois casos: "Carregamentos de página" (que nem pode
 * ser desligado) e "Alterações na página de acordo com os eventos do
 * histórico de navegação" — que é exatamente a troca de rota do
 * react-router. Emitir page_view daqui duplicaria cada navegação.
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

  getGtag()?.("config", GA4_MEASUREMENT_ID);
}
