/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

/**
 * Imports com `?...&as=img` (vite-imagetools) resolvem para o objeto do formato
 * `img`, não para uma string de URL. Ver src/lib/responsive-img.ts.
 */
declare module "*&as=img" {
  const src: { src: string; w: number; h: number; srcset?: string };
  export default src;
}
