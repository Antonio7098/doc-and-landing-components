import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export type HighlightVariant = 'underline' | 'background' | 'box' | 'glow';
export type HighlightColor = 'primary' | 'secondary' | 'cyan' | 'purple' | 'pink' | 'green';

const variantStyles: Record<HighlightVariant, Record<HighlightColor, string>> = {
  underline: {
    primary: 'decoration-primary underline decoration-2 underline-offset-4',
    secondary: 'decoration-secondary underline decoration-2 underline-offset-4',
    cyan: 'decoration-cyan-500 underline decoration-2 underline-offset-4',
    purple: 'decoration-purple-500 underline decoration-2 underline-offset-4',
    pink: 'decoration-pink-500 underline decoration-2 underline-offset-4',
    green: 'decoration-green-500 underline decoration-2 underline-offset-4',
  },
  background: {
    primary: 'bg-primary/10 px-1 rounded',
    secondary: 'bg-secondary/50 px-1 rounded',
    cyan: 'bg-cyan-500/10 px-1 rounded',
    purple: 'bg-purple-500/10 px-1 rounded',
    pink: 'bg-pink-500/10 px-1 rounded',
    green: 'bg-green-500/10 px-1 rounded',
  },
  box: {
    primary: 'border border-primary/50 px-1.5 py-0.5 rounded',
    secondary: 'border border-secondary px-1.5 py-0.5 rounded',
    cyan: 'border border-cyan-500/50 px-1.5 py-0.5 rounded',
    purple: 'border border-purple-500/50 px-1.5 py-0.5 rounded',
    pink: 'border border-pink-500/50 px-1.5 py-0.5 rounded',
    green: 'border border-green-500/50 px-1.5 py-0.5 rounded',
  },
  glow: {
    primary: 'text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]',
    secondary: 'text-secondary-foreground',
    cyan: 'text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]',
    purple: 'text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]',
    pink: 'text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]',
    green: 'text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]',
  },
};

export interface HighlightProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: HighlightVariant;
  color?: HighlightColor;
}

export function Highlight({
  children,
  variant = 'underline',
  color = 'primary',
  className,
  ...props
}: HighlightProps) {
  return (
    <span
      className={cn(variantStyles[variant][color], className)}
      {...props}
    >
      {children}
    </span>
  );
}
