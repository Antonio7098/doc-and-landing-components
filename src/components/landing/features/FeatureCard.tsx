import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export type FeatureCardVariant = 'default' | 'bordered' | 'elevated' | 'glass' | 'gradient';
export type FeatureCardSize = 'sm' | 'md' | 'lg';

const variantStyles: Record<FeatureCardVariant, string> = {
  default: 'bg-card',
  bordered: 'bg-card border border-border',
  elevated: 'bg-card shadow-lg hover:shadow-xl transition-shadow',
  glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
  gradient: 'bg-gradient-to-br from-card to-muted border border-border',
};

const sizeStyles: Record<FeatureCardSize, { padding: string; icon: string; title: string; desc: string }> = {
  sm: {
    padding: 'p-4',
    icon: 'w-8 h-8',
    title: 'text-base',
    desc: 'text-sm',
  },
  md: {
    padding: 'p-6',
    icon: 'w-10 h-10',
    title: 'text-lg',
    desc: 'text-base',
  },
  lg: {
    padding: 'p-8',
    icon: 'w-12 h-12',
    title: 'text-xl',
    desc: 'text-base',
  },
};

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: FeatureCardVariant;
  size?: FeatureCardSize;
  iconBackground?: string;
  href?: string;
  action?: ReactNode;
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = 'bordered',
  size = 'md',
  iconBackground,
  href,
  action,
  className,
  ...props
}: FeatureCardProps) {
  const styles = sizeStyles[size];

  const content = (
    <>
      {icon && (
        <div
          className={cn(
            'flex items-center justify-center rounded-xl mb-4',
            styles.icon,
            iconBackground || 'bg-primary/10 text-primary'
          )}
        >
          {icon}
        </div>
      )}
      <h3 className={cn('font-semibold text-foreground mb-2', styles.title)}>
        {title}
      </h3>
      <p className={cn('text-muted-foreground leading-relaxed', styles.desc)}>
        {description}
      </p>
      {action && <div className="mt-4">{action}</div>}
    </>
  );

  const baseStyles = cn(
    'rounded-xl transition-all',
    styles.padding,
    variantStyles[variant],
    href && 'cursor-pointer hover:border-primary/50',
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
