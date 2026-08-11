import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    /**
     * Reencoda toda imagem importada de src/assets para WebP.
     *
     * As fontes são JPG/PNG direto da câmera — 30 MB somados, com casos de
     * 2,9 MB numa foto que a página mostra num quadro de 800px. Sem diretiva
     * explícita no import, cada uma cai na regra padrão abaixo: no máximo
     * 1280px de largura (sem ampliar quem já é menor) e WebP qualidade 72.
     * 1280 porque nenhuma imagem sem diretiva é full-bleed — são cards e
     * quadros de coluna, que nunca passam de ~640px de exibição.
     *
     * As imagens de LCP não usam esse padrão: pedem variantes explícitas com
     * `?w=480;768;...&as=img` para servir srcset. Ver src/lib/responsive-img.ts.
     */
    imagetools({
      include: /^[^?]+\.(jpe?g|png)(\?.*)?$/,
      defaultDirectives: (url) => {
        if (url.searchParams.size > 0) return new URLSearchParams();
        return new URLSearchParams({
          format: "webp",
          quality: "72",
          w: "1280",
          withoutEnlargement: "true",
        });
      },
    }),
  ],
  /**
   * CSS crítico inline (beasties) está DESLIGADO de propósito.
   *
   * Testado: inlinar a dobra e adiar a folha completa custou mais do que
   * economizou nesta base. O CSS bloqueante valia ~167 ms, mas o swap
   * disparava um recálculo de estilo sobre um DOM de ~1.400 nós já pintado —
   * na home o TBT foi de 20 ms para 360 ms e a nota caiu de 85 para 77, sem
   * ganho nenhum de FCP (o gargalo do first paint aqui é o tamanho do HTML
   * pré-renderizado, não a folha).
   *
   * Reavaliar se as páginas longas forem quebradas em menos nós.
   */
  ssgOptions: {
    beastiesOptions: false,
  },
  build: {
    // O SSG já entrega o HTML pintado; o custo restante é compilar o JS. Alvo
    // moderno corta os polyfills e o downleveling de async/await.
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        /**
         * Sem isto o Rollup duplica React/router/query dentro de cada chunk de
         * rota. Um vendor comum é baixado uma vez e fica em cache entre
         * navegações — e entre deploys, já que muda muito menos que o código
         * do site.
         */
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|@remix-run)[\\/]/.test(id))
            return "vendor-react";
          if (/[\\/]node_modules[\\/](@tanstack|@unhead|unhead)[\\/]/.test(id)) return "vendor-app";
          if (/[\\/]node_modules[\\/](lucide-react)[\\/]/.test(id)) return "vendor-icons";
          return "vendor";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
