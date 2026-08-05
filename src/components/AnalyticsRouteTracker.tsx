import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageview } from "@/lib/analytics";

/**
 * Envia o page_view do GA4 na primeira carga e a cada troca de rota do SPA.
 * O `config` continua com send_page_view: false, então este é o único emissor
 * de pageview — não há como duplicar.
 */
export default function AnalyticsRouteTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Idempotente: garante que o config do GA4 já rodou antes do primeiro
    // page_view, independente da ordem de execução do bootstrap.
    initAnalytics();

    // Espera um tick para o unhead aplicar o <title> da rota antes de ler
    // document.title.
    const id = window.setTimeout(() => trackPageview(`${pathname}${search}`), 0);
    return () => window.clearTimeout(id);
  }, [pathname, search]);

  return null;
}
