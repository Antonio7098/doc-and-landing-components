import { type HTMLAttributes, type ReactNode, useState } from 'react';
import { cn } from '../../../lib/utils';
import { Copy, Check } from 'lucide-react';

export type CodeWindowVariant = 'default' | 'minimal' | 'gradient' | 'glass';

export interface CodeWindowProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  variant?: CodeWindowVariant;
  showCopy?: boolean;
  header?: ReactNode;
}

const variantStyles: Record<CodeWindowVariant, { wrapper: string; header: string; body: string }> = {
  default: {
    wrapper: 'bg-[#1a1b26] border border-[#2a2b3d] rounded-xl overflow-hidden shadow-2xl',
    header: 'bg-[#1a1b26] border-b border-[#2a2b3d]',
    body: 'bg-[#1a1b26]',
  },
  minimal: {
    wrapper: 'bg-card border border-border rounded-xl overflow-hidden',
    header: 'bg-muted/50 border-b border-border',
    body: 'bg-card',
  },
  gradient: {
    wrapper: 'bg-gradient-to-br from-[#1a1b26] to-[#2d2e42] border border-[#3a3b52] rounded-xl overflow-hidden shadow-2xl',
    header: 'bg-black/20 border-b border-white/5',
    body: '',
  },
  glass: {
    wrapper:
      'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(15,23,42,0.25)]',
    header: 'bg-white/10 border-b border-white/10',
    body: 'bg-transparent',
  },
};

export function CodeWindow({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = true,
  highlightLines = [],
  variant = 'default',
  showCopy = true,
  header,
  className,
  ...props
}: CodeWindowProps) {
  const [copied, setCopied] = useState(false);
  const styles = variantStyles[variant];
  const lines = code.split('\n');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div className={cn('flex items-center justify-between px-4 py-3', styles.header)}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {filename && (
            <span className="text-sm text-muted-foreground font-mono">{filename}</span>
          )}
          {header}
        </div>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Copy code"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        )}
      </div>
      <div className={cn('p-4 overflow-x-auto', styles.body)}>
        <pre className="text-sm font-mono">
          <code className={`language-${language}`}>
            {lines.map((line, index) => (
              <div
                key={index}
                className={cn(
                  'flex',
                  highlightLines.includes(index + 1) && 'bg-primary/10 -mx-4 px-4'
                )}
              >
                {showLineNumbers && (
                  <span className="select-none w-8 text-right pr-4 text-muted-foreground/50">
                    {index + 1}
                  </span>
                )}
                <span
                  className="flex-1"
                  dangerouslySetInnerHTML={{ __html: highlightSyntax(line, language) }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function highlightSyntax(line: string, language: string): string {
  const patterns: Record<string, Array<{ pattern: RegExp; className: string }>> = {
    typescript: [
      { pattern: /(\/\/.*$)/gm, className: 'text-gray-500' },
      { pattern: /\b(import|export|from|const|let|var|function|return|if|else|for|while|class|interface|type|extends|implements|new|this|async|await|try|catch|throw)\b/g, className: 'text-purple-400' },
      { pattern: /\b(true|false|null|undefined)\b/g, className: 'text-orange-400' },
      { pattern: /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g, className: 'text-green-400' },
      { pattern: /\b(\d+)\b/g, className: 'text-orange-400' },
      { pattern: /\b([A-Z][a-zA-Z0-9]*)\b/g, className: 'text-yellow-400' },
    ],
    javascript: [
      { pattern: /(\/\/.*$)/gm, className: 'text-gray-500' },
      { pattern: /\b(import|export|from|const|let|var|function|return|if|else|for|while|class|new|this|async|await|try|catch|throw)\b/g, className: 'text-purple-400' },
      { pattern: /\b(true|false|null|undefined)\b/g, className: 'text-orange-400' },
      { pattern: /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g, className: 'text-green-400' },
      { pattern: /\b(\d+)\b/g, className: 'text-orange-400' },
    ],
    python: [
      { pattern: /(#.*$)/gm, className: 'text-gray-500' },
      { pattern: /\b(import|from|def|return|if|else|elif|for|while|class|with|as|try|except|raise|async|await|True|False|None)\b/g, className: 'text-purple-400' },
      { pattern: /(['"])((?:\\.|(?!\1)[^\\])*)\1/g, className: 'text-green-400' },
      { pattern: /\b(\d+)\b/g, className: 'text-orange-400' },
    ],
    go: [
      { pattern: /(\/\/.*$)/gm, className: 'text-gray-500' },
      { pattern: /\b(package|import|func|return|if|else|for|range|struct|interface|type|var|const|defer|go|chan|select|case|default|nil|true|false)\b/g, className: 'text-purple-400' },
      { pattern: /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g, className: 'text-green-400' },
      { pattern: /\b(\d+)\b/g, className: 'text-orange-400' },
    ],
  };

  let result = escapeHtml(line);
  const langPatterns = patterns[language] || patterns.typescript;

  for (const { pattern, className } of langPatterns) {
    result = result.replace(pattern, (match) => `<span class="${className}">${match}</span>`);
  }

  return result;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
