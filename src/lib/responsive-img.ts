/**
 * Imagens responsivas via vite-imagetools.
 *
 * Importar com `?w=...&format=webp&as=img` devolve `{ src, w, h, srcset }` —
 * o formato `img` do imagetools já escolhe a maior variante como `src` e monta
 * o srcset com as demais. Este helper só traduz isso para os nomes de prop do
 * React e fixa o `sizes`.
 *
 *   import hero from "@/assets/hero.jpg?w=480;768;1024;1440;1920&format=webp&as=img";
 *   <img {...imgProps(hero)} alt="..." fetchpriority="high" decoding="async" />
 *
 * Importa para o LCP: sem `srcset`, um celular de 412 px de largura baixava a
 * variante de 1600 px do hero. `width`/`height` vêm junto porque o Lighthouse
 * cobra dimensão explícita (e é o que trava o layout antes da imagem chegar).
 */
export interface ImgSource {
  src: string;
  w: number;
  h: number;
  /** Ausente quando o import pede uma largura só. */
  srcset?: string;
}

/**
 * @param sizes Largura de exibição em CSS. O padrão `100vw` vale para os heroes
 *   de largura total; passe o valor real quando a imagem ocupar uma coluna
 *   (ex.: `"(min-width: 1024px) 40vw, 100vw"`), senão o browser escolhe uma
 *   variante maior que o necessário.
 */
export function imgProps(img: ImgSource, sizes = "100vw") {
  return {
    src: img.src,
    srcSet: img.srcset,
    sizes: img.srcset ? sizes : undefined,
    width: img.w,
    height: img.h,
  };
}
