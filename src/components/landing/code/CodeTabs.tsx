import { type HTMLAttributes, useState } from 'react';
import { cn } from '../../../lib/utils';
import { CodeWindow, type CodeWindowProps } from './CodeWindow';

export interface CodeTab {
  label: string;
  code: string;
  language?: string;
  filename?: string;
}

export interface CodeTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  tabs: CodeTab[];
  defaultTab?: number;
  variant?: CodeWindowProps['variant'];
  showLineNumbers?: boolean;
}

export function CodeTabs({
  tabs,
  defaultTab = 0,
  variant = 'default',
  showLineNumbers = true,
  className,
  ...props
}: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const variantBg = {
    default: 'bg-[#1a1b26]',
    minimal: 'bg-card',
    gradient: 'bg-gradient-to-br from-[#1a1b26] to-[#2d2e42]',
  };

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden border',
        variant === 'default' && 'border-[#2a2b3d]',
        variant === 'minimal' && 'border-border',
        variant === 'gradient' && 'border-[#3a3b52]',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'flex items-center border-b overflow-x-auto',
          variantBg[variant],
          variant === 'default' && 'border-[#2a2b3d]',
          variant === 'minimal' && 'border-border',
          variant === 'gradient' && 'border-white/5'
        )}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              'px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors',
              'border-b-2 -mb-px',
              activeTab === index
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <CodeWindow
        code={tabs[activeTab].code}
        language={tabs[activeTab].language}
        filename={tabs[activeTab].filename}
        variant={variant}
        showLineNumbers={showLineNumbers}
        showCopy={true}
        className="rounded-none border-0"
      />
    </div>
  );
}
