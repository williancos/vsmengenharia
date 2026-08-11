/**
 * `fetchpriority` em <img>.
 *
 * O react-dom 18.3 não conhece esse atributo: passar `fetchPriority` (camelCase,
 * que é o que @types/react declara) faz o React avisar "does not recognize the
 * prop on a DOM element" e emitir `fetchPriority="high"` no HTML. Funciona no
 * browser — atributo HTML é case-insensitive — mas polui o console.
 *
 * A forma lowercase passa direto, sem warning. Falta só o tipo, que é o que
 * este arquivo adiciona.
 */
import "react";

declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}
