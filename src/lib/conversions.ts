/**
 * Conversões — Google Ads (AW-11359694680) + GA4 (G-ZWMHRXHZPR).
 *
 * ┌─ RÓTULOS ────────────────────────────────────────────────────────────────┐
 * │ Os send_to abaixo vêm das 3 ações criadas em 04/08/2026 na conta          │
 * │ 518-206-5427 (VSM Engenharia Mecânica). Para reconferir:                  │
 * │   Ads → Metas → Conversões → <ação> → Gerenciar → Ver snippet de evento   │
 * │                                                                           │
 * │ Se algum rótulo voltar a ser COLE_O_ROTULO_*, o evento do Ads NÃO é       │
 * │ enviado (evita lixo na conta); o do GA4 continua disparando normalmente.  │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * O gtag.js já é carregado no index.html. Aqui só disparamos os eventos —
 * nada de GTM, nada de dependência nova.
 */
import { GA4_MEASUREMENT_ID } from "@/lib/analytics";

export const ADS_ID = "AW-11359694680";

/** send_to de cada ação de conversão do Google Ads. */
export const CONV = {
  form: `${ADS_ID}/qri_CJXlmdwcENje3Kgq`, // Formulário — Contato
  whatsapp: `${ADS_ID}/DNqHCJjlmdwcENje3Kgq`, // WhatsApp — Clique
  phone: `${ADS_ID}/ShteCJvlmdwcENje3Kgq`, // Telefone — Clique
} as const;

export type ConversionKey = keyof typeof CONV;

/** Nome do evento equivalente no GA4 (destino independente do Ads). */
const GA4_EVENT: Record<ConversionKey, string> = {
  form: "lead_form",
  whatsapp: "lead_whatsapp",
  phone: "lead_phone",
};

/** Valor proxy do lead — igual ao configurado na ação de conversão do Ads. */
export const CONVERSION_VALUE = 250;
export const CONVERSION_CURRENCY = "BRL";

/** Teto de espera pelo event_callback antes de liberar a navegação. */
const CALLBACK_TIMEOUT_MS = 800;

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const g = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof g === "function" ? g : null;
}

const hasLabel = (sendTo: string) => !sendTo.includes("COLE_O_ROTULO");

/** Garante que o callback do chamador rode exatamente uma vez. */
function once(fn?: () => void): () => void {
  let called = false;
  return () => {
    if (called) return;
    called = true;
    fn?.();
  };
}

/**
 * Dispara a conversão no Google Ads e o evento equivalente no GA4.
 *
 * `onDone` é chamado assim que a conversão sai (event_callback) ou no estouro
 * de CALLBACK_TIMEOUT_MS — o que vier primeiro, e só uma vez. Use quando o
 * clique leva o usuário para fora da página e você precisa segurar a navegação.
 *
 * Seguro em SSR/SSG: sem window, apenas chama onDone e sai.
 */
export function trackConversion(
  key: ConversionKey,
  params: Record<string, unknown> = {},
  onDone?: () => void,
): void {
  const done = once(onDone);

  if (typeof window === "undefined") {
    done();
    return;
  }

  const gtag = getGtag();
  if (!gtag) {
    // gtag.js bloqueado ou ainda não carregado — não trava o fluxo do usuário.
    done();
    return;
  }

  // GA4 — enviado em paralelo, não depende do rótulo do Ads estar preenchido.
  gtag("event", GA4_EVENT[key], {
    value: CONVERSION_VALUE,
    currency: CONVERSION_CURRENCY,
    ...params,
    send_to: GA4_MEASUREMENT_ID,
    transport_type: "beacon",
  });

  const sendTo = CONV[key];
  if (!hasLabel(sendTo)) {
    if (import.meta.env.DEV) {
      console.warn(
        `[conversions] rótulo não preenchido para "${key}" — conversão do Ads não enviada. Edite CONV em src/lib/conversions.ts.`,
      );
    }
    done();
    return;
  }

  gtag("event", "conversion", {
    value: CONVERSION_VALUE,
    currency: CONVERSION_CURRENCY,
    ...params,
    send_to: sendTo,
    // beacon usa navigator.sendBeacon: a requisição sobrevive ao unload, que é
    // o caso do clique de WhatsApp/telefone no celular trocando de app.
    transport_type: "beacon",
    event_timeout: CALLBACK_TIMEOUT_MS,
    event_callback: done,
  });

  // Fallback obrigatório: event_callback não é garantido (gtag.js bloqueado,
  // resposta lenta, app do WhatsApp assumindo o foco antes do retorno). Sem
  // isto, onDone poderia nunca rodar e a navegação ficaria presa.
  window.setTimeout(done, CALLBACK_TIMEOUT_MS);
}
