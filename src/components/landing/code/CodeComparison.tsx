import { type HTMLAttributes } from 'react';
import { cn } from '../../../lib/utils';
import { CodeWindow, type CodeWindowProps } from './CodeWindow';

export interface CodeComparisonProps extends HTMLAttributes<HTMLDivElement> {
  before: {
    code: string;
    language?: string;
    label?: string;
  };
  after: {
    code: string;
    language?: string;
    label?: string;
  };
  variant?: CodeWindowProps['variant'];
  showLineNumbers?: boolean;
}

export function CodeComparison({
  before,
  after,
  variant = 'default',
  showLineNumbers = true,
  className,
  ...props
}: CodeComparisonProps) {
  return (
    <div className={cn('grid gap-4 md:grid-cols-2', className)} {...props}>
      <div className="space-y-2">
        {before.label && (
          <p className="text-sm font-medium text-muted-foreground">{before.label}</p>
        )}
        <CodeWindow
          code={before.code}
          language={before.language}
          variant={variant}
          showLineNumbers={showLineNumbers}
        />
      </div>
      <div className="space-y-2">
        {after.label && (
          <p className="text-sm font-medium text-muted-foreground">{after.label}</p>
        )}
        <CodeWindow
          code={after.code}
          language={after.language}
          variant={variant}
          showLineNumbers={showLineNumbers}
        />
      </div>
    </div>
  );
}
