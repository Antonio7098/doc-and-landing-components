import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { ChevronRight } from 'lucide-react';

export type NavButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type NavButtonSize = 'sm' | 'md' | 'lg';

const variantStyles: Record<NavButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'border border-border bg-transparent hover:bg-accent',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};

const sizeStyles: Record<NavButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-10 px-5 text-sm',
};

export interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: NavButtonVariant;
  size?: NavButtonSize;
  href?: string;
  icon?: ReactNode;
  showArrow?: boolean;
  children: ReactNode;
}

export function NavButton({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  showArrow = false,
  children,
  className,
  ...props
}: NavButtonProps) {
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {showArrow && <ChevronRight className="ml-1 h-4 w-4" />}
    </>
  );

  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-all',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {content}
    </button>
  );
}
