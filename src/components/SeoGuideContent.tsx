import { useState, ReactNode } from "react";
import { CheckCircle2, ChevronDown, AlertTriangle, Info, Lightbulb } from "lucide-react";

interface SeoGuideContentProps {
  content: string;
}

/**
 * Renderizador rico para os blocos "Guia Completo" das páginas de serviço.
 *
 * Suporta:
 *  - Cabeçalhos h2 / h3 / h4 (## / ### / ####)
 *  - Parágrafos com **bold**, *itálico* e [links](/path)
 *  - Listas com `-` (com bullet/check)
 *  - Tabelas markdown (| col | col |)
 *  - Callouts: linhas iniciando com `> NOTA:`, `> ALERTA:`, `> DICA:`
 *  - FAQ accordion: blocos com `### P: pergunta` seguidos por `> R: resposta` (multi-linha)
 *  - Separador `---`
 */
export default function SeoGuideContent({ content }: SeoGuideContentProps) {
  const blocks = parseBlocks(content);
  return (
    <article className="bg-card rounded-2xl border p-6 sm:p-8 md:p-10 shadow-soft">
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} index={i} />
      ))}
    </article>
  );
}

/* ────────── Tipagem dos blocos ────────── */

type Block =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "h4"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "table"; header: string[]; rows: string[][] }
  | { kind: "callout"; variant: "info" | "warn" | "tip"; text: string }
  | { kind: "faq"; question: string; answer: string }
  | { kind: "hr" };

/* ────────── Parser ────────── */

function parseBlocks(raw: string): Block[] {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Separador
    if (/^---+$/.test(trimmed)) {
      blocks.push({ kind: "hr" });
      i++;
      continue;
    }

    // FAQ — pergunta seguida de resposta em > R:
    const faqMatch = trimmed.match(/^### P:\s*(.+)$/);
    if (faqMatch) {
      const question = faqMatch[1].trim();
      i++;
      // pula linhas em branco
      while (i < lines.length && !lines[i].trim()) i++;
      const answerParts: string[] = [];
      while (i < lines.length) {
        const l = lines[i];
        const t = l.trim();
        const r = t.match(/^> R:\s*(.*)$/) || t.match(/^>\s*(.*)$/);
        if (r && (answerParts.length === 0 ? t.startsWith("> R:") : true)) {
          answerParts.push(r[1]);
          i++;
        } else {
          break;
        }
      }
      blocks.push({ kind: "faq", question, answer: answerParts.join(" ").trim() });
      continue;
    }

    // Cabeçalhos
    if (trimmed.startsWith("#### ")) {
      blocks.push({ kind: "h4", text: trimmed.slice(5).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      blocks.push({ kind: "h3", text: trimmed.slice(4).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      blocks.push({ kind: "h2", text: trimmed.slice(3).trim() });
      i++;
      continue;
    }

    // Callouts
    const calloutMatch = trimmed.match(/^>\s*(NOTA|ALERTA|DICA):\s*(.+)$/i);
    if (calloutMatch) {
      const tag = calloutMatch[1].toUpperCase();
      const variant: "info" | "warn" | "tip" =
        tag === "ALERTA" ? "warn" : tag === "DICA" ? "tip" : "info";
      const textParts = [calloutMatch[2]];
      i++;
      // permite continuação simples (linhas iniciadas com "> ")
      while (i < lines.length && /^>\s+/.test(lines[i].trim()) && !/^>\s*(NOTA|ALERTA|DICA|R):/i.test(lines[i].trim())) {
        textParts.push(lines[i].trim().replace(/^>\s+/, ""));
        i++;
      }
      blocks.push({ kind: "callout", variant, text: textParts.join(" ") });
      continue;
    }

    // Tabela markdown
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const header = splitRow(tableLines[0]);
        // segunda linha é separador
        const rows = tableLines.slice(2).map(splitRow);
        blocks.push({ kind: "table", header, rows });
        continue;
      }
    }

    // Lista
    if (/^- /.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^- /.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^- /, ""));
        i++;
      }
      blocks.push({ kind: "ul", items });
      continue;
    }

    // Parágrafo (concatena linhas até linha em branco / próximo bloco)
    const paraParts: string[] = [trimmed];
    i++;
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t) break;
      if (/^(#{2,4} |- |\| |>|---)/.test(t)) break;
      paraParts.push(t);
      i++;
    }
    blocks.push({ kind: "p", text: paraParts.join(" ") });
  }

  return blocks;
}

function splitRow(line: string): string[] {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

/* ────────── Renderizador inline (bold, italic, links) ────────── */

function renderInline(text: string): ReactNode[] {
  const tokens: ReactNode[] = [];
  // Regex que captura **bold**, *italic*, [text](url)
  const regex = /(\*\*[^*]+\*\*|\*[^*\n]+\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      tokens.push(
        <strong key={`b${key++}`} className="text-foreground font-semibold">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("*")) {
      tokens.push(
        <em key={`i${key++}`}>{token.slice(1, -1)}</em>
      );
    } else if (token.startsWith("[")) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, url] = linkMatch;
        const isExternal = /^https?:/.test(url);
        tokens.push(
          <a
            key={`l${key++}`}
            href={url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-cta font-semibold hover:underline"
          >
            {label}
          </a>
        );
      }
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) {
    tokens.push(text.slice(lastIndex));
  }
  return tokens;
}

/* ────────── Renderizadores de blocos ────────── */

function BlockRenderer({ block, index }: { block: Block; index: number }) {
  switch (block.kind) {
    case "h2":
      return (
        <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4 text-primary leading-tight">
          {renderInline(block.text)}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-primary leading-snug">
          {renderInline(block.text)}
        </h3>
      );
    case "h4":
      return (
        <h4 className="text-base md:text-lg font-bold mt-6 mb-2 text-foreground">
          {renderInline(block.text)}
        </h4>
      );
    case "p":
      return (
        <p className="mb-4 leading-relaxed text-muted-foreground text-[15px]">
          {renderInline(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul className="space-y-2.5 my-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-1" />
              <span className="text-[15px] text-muted-foreground leading-relaxed">
                {renderInline(item)}
              </span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto my-6 -mx-2 sm:mx-0">
          <table className="w-full text-left border border-border/60 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                {block.header.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-xs sm:text-sm font-bold whitespace-nowrap">
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-card" : "bg-secondary/40"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 text-xs sm:text-sm text-muted-foreground border-t border-border/40 align-top"
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout": {
      const cfg = {
        info: { icon: Info, cls: "bg-primary/5 border-primary/30 text-primary", iconCls: "text-primary" },
        warn: { icon: AlertTriangle, cls: "bg-danger/5 border-danger/30", iconCls: "text-danger" },
        tip: { icon: Lightbulb, cls: "bg-cta/5 border-cta/30", iconCls: "text-cta" },
      }[block.variant];
      const Icon = cfg.icon;
      return (
        <div className={`flex gap-3 p-4 rounded-xl border my-5 ${cfg.cls}`}>
          <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${cfg.iconCls}`} />
          <p className="text-sm leading-relaxed text-foreground">
            {renderInline(block.text)}
          </p>
        </div>
      );
    }
    case "faq":
      return <FaqItem question={block.question} answer={block.answer} defaultOpen={index < 2} />;
    case "hr":
      return <hr className="my-8 border-border/60" />;
    default:
      return null;
  }
}

function FaqItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-border/60 rounded-xl my-3 bg-secondary/30 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-secondary/60 transition-colors"
        aria-expanded={open}
      >
        <span className="font-bold text-sm md:text-base text-foreground">
          {renderInline(question)}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-cta transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
          {renderInline(answer)}
        </div>
      )}
    </div>
  );
}
