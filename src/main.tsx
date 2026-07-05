import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import { initAnalytics } from "./lib/analytics";
import "./index.css";

export const createRoot = ViteReactSSG({ routes }, ({ isClient }) => {
  // Rastreamento de conversões GA4 — só no cliente (não durante o SSG).
  if (isClient) initAnalytics();
});
