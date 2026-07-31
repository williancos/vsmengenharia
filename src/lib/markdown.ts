/**
 * renderMarkdown — renderizador de markdown do conteúdo editorial do site.
 *
 * Suporta o subconjunto usado nos artigos do blog e nas landing pages de
 * serviço: tabelas, headings com âncora (`## Título {#id}`), negrito, itálico,
 * links internos e externos, blockquote, listas e checklists (`- ☐ item`).
 *
 * Extraído de `BlogPost.tsx` para ser compartilhado com `LandingPage.tsx` —
 * as duas superfícies precisam renderizar exatamente o mesmo dialeto, senão
 * o conteúdo migra de uma para outra e quebra silenciosamente.
 */
export function renderMarkdown(md: string): string {
  // Process tables first
  const tableRegex = /(?:^\|.+\|$\n?)+/gm;
  const result = md.replace(tableRegex, (tableBlock) => {
    const rows = tableBlock.trim().split('\n').filter(r => r.trim());
    const htmlRows = rows
      .filter(row => !row.match(/^\|[\s-:|]+\|$/)) // skip separator
      .map((row, idx) => {
        const cells = row.split('|').slice(1, -1).map(c => c.trim());
        const tag = idx === 0 ? 'th' : 'td';
        const cls = idx === 0
          ? 'text-xs font-bold p-3 text-left bg-secondary/50'
          : 'text-sm p-3 border-t border-border/50';
        return `<tr>${cells.map(c => `<${tag} class="${cls}">${c.replace(/\*\*/g, '')}</${tag}>`).join('')}</tr>`;
      })
      .join('');
    return `<div class="overflow-x-auto my-6"><table class="w-full rounded-lg overflow-hidden border border-border/50">${htmlRows}</table></div>`;
  });

  return result
    // Headers with IDs
    .replace(/^## (.+?) \{#(.+?)\}$/gm, '<h2 id="$2">$1</h2>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic (single * not part of **)
    .replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>')
    // Inline links [text](url)
    .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cta hover:underline font-semibold">$1</a>')
    // Internal links [text](/path)
    .replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, '<a href="$2" class="text-cta hover:underline font-semibold">$1</a>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // Checklist items
    .replace(/^- ☐ (.+)$/gm, '<li class="flex items-start gap-2 text-sm py-1 list-none"><span class="w-4 h-4 mt-0.5 rounded border border-border shrink-0"></span><span>$1</span></li>')
    // List items
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-sm py-1 list-none"><span class="w-1.5 h-1.5 rounded-full bg-cta mt-2 shrink-0"></span><span>$1</span></li>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li[^>]*>[\s\S]*?<\/li>(?:\s*<li[^>]*>[\s\S]*?<\/li>)*)/g, '<ul class="my-4 space-y-1">$1</ul>')
    // Paragraphs (lines that don't start with HTML tags)
    .replace(/^(?!<[hbultda/]|$)([\w❌☐"À-ÿ(].+)$/gm, '<p>$1</p>')
    // Clean up
    .replace(/\n{3,}/g, '\n\n');
}
