import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { ChevronRight } from 'lucide-react';

export type HeroBadgeVariant = 'default' | 'outline' | 'gradient' | 'glow';

const variantStyles: Record<HeroBadgeVariant, string> = {
  default: 'bg-secondary text-secondary-foreground',
  outline: 'border border-border bg-transparent',
  gradient: 'bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20',
  glow: 'bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(var(--primary)/0.3)]',
};

export interface HeroBadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: HeroBadgeVariant;
  icon?: ReactNode;
  href?: string;
  showArrow?: boolean;
}

export function HeroBadge({
  children,
  variant = 'default',
  icon,
  href,
  showArrow = false,
  className,
  ...props
}: HeroBadgeProps) {
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {showArrow && <ChevronRight className="ml-1 h-3 w-3" />}
    </>
  );

  const baseStyles = cn(
    'inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
    variantStyles[variant],
    href && 'cursor-pointer hover:bg-accent/80',
    className
  );

  if (href) {
    return (
      <a href={href} className={baseStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <div className={baseStyles} {...props}>
      {content}
    </div>
  );
}
