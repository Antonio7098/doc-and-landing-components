import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';

export type CTABannerVariant = 'default' | 'gradient' | 'dark' | 'accent';

const variantStyles: Record<CTABannerVariant, string> = {
  default: 'bg-primary text-primary-foreground',
  gradient: 'bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white',
  dark: 'bg-gray-900 text-white',
  accent: 'bg-accent text-accent-foreground border-b border-border',
};

export interface CTABannerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CTABannerVariant;
  action?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode;
}

export function CTABanner({
  children,
  variant = 'default',
  action,
  dismissible = false,
  onDismiss,
  icon,
  className,
  ...props
}: CTABannerProps) {
  return (
    <div className={cn('py-2.5 px-4', variantStyles[variant], className)} {...props}>
      <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto">
        {icon && <span className="shrink-0">{icon}</span>}
        <p className="text-sm font-medium text-center">{children}</p>
        {action && <span className="shrink-0">{action}</span>}
        {dismissible && (
          <button
            onClick={onDismiss}
            className="shrink-0 p-1 rounded hover:bg-white/20 transition-colors ml-2"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
