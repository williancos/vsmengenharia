import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const resetScrollPosition = () => {
  const html = document.documentElement;
  const body = document.body;
  const previousHtmlBehavior = html.style.scrollBehavior;
  const previousBodyBehavior = body.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  body.scrollTop = 0;

  requestAnimationFrame(() => {
    html.style.scrollBehavior = previousHtmlBehavior;
    body.style.scrollBehavior = previousBodyBehavior;
  });
};

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleInternalNavigation = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a[href]");
      if (!anchor) return;

      const url = new URL(anchor.getAttribute("href") || "", window.location.origin);
      const isSameOrigin = url.origin === window.location.origin;
      const isRouteChange = url.pathname !== window.location.pathname || url.search !== window.location.search;
      const isHashOnly = url.pathname === window.location.pathname && url.hash;

      if (isSameOrigin && isRouteChange && !isHashOnly) {
        resetScrollPosition();
      }
    };

    document.addEventListener("click", handleInternalNavigation, true);

    return () => {
      document.removeEventListener("click", handleInternalNavigation, true);
    };
  }, []);

  useLayoutEffect(() => {
    if (hash) return;
    resetScrollPosition();
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
