import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export type IconBoxVariant = 'filled' | 'outlined' | 'gradient' | 'glass';
export type IconBoxSize = 'sm' | 'md' | 'lg' | 'xl';
export type IconBoxColor = 'primary' | 'secondary' | 'cyan' | 'purple' | 'pink' | 'green' | 'orange';

const variantColorStyles: Record<IconBoxVariant, Record<IconBoxColor, string>> = {
  filled: {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary text-secondary-foreground',
    cyan: 'bg-cyan-500/10 text-cyan-500',
    purple: 'bg-purple-500/10 text-purple-500',
    pink: 'bg-pink-500/10 text-pink-500',
    green: 'bg-green-500/10 text-green-500',
    orange: 'bg-orange-500/10 text-orange-500',
  },
  outlined: {
    primary: 'border border-primary/30 text-primary',
    secondary: 'border border-border text-secondary-foreground',
    cyan: 'border border-cyan-500/30 text-cyan-500',
    purple: 'border border-purple-500/30 text-purple-500',
    pink: 'border border-pink-500/30 text-pink-500',
    green: 'border border-green-500/30 text-green-500',
    orange: 'border border-orange-500/30 text-orange-500',
  },
  gradient: {
    primary: 'bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/10',
    secondary: 'bg-gradient-to-br from-secondary to-secondary/50 text-secondary-foreground border border-border',
    cyan: 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 text-cyan-500 border border-cyan-500/10',
    purple: 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-500 border border-purple-500/10',
    pink: 'bg-gradient-to-br from-pink-500/20 to-pink-500/5 text-pink-500 border border-pink-500/10',
    green: 'bg-gradient-to-br from-green-500/20 to-green-500/5 text-green-500 border border-green-500/10',
    orange: 'bg-gradient-to-br from-orange-500/20 to-orange-500/5 text-orange-500 border border-orange-500/10',
  },
  glass: {
    primary: 'bg-primary/5 backdrop-blur-xl border border-primary/20 text-primary',
    secondary: 'bg-white/5 backdrop-blur-xl border border-white/10 text-secondary-foreground',
    cyan: 'bg-cyan-500/5 backdrop-blur-xl border border-cyan-500/20 text-cyan-500',
    purple: 'bg-purple-500/5 backdrop-blur-xl border border-purple-500/20 text-purple-500',
    pink: 'bg-pink-500/5 backdrop-blur-xl border border-pink-500/20 text-pink-500',
    green: 'bg-green-500/5 backdrop-blur-xl border border-green-500/20 text-green-500',
    orange: 'bg-orange-500/5 backdrop-blur-xl border border-orange-500/20 text-orange-500',
  },
};

const sizeStyles: Record<IconBoxSize, { box: string; icon: string }> = {
  sm: { box: 'w-8 h-8 rounded-lg', icon: 'w-4 h-4' },
  md: { box: 'w-10 h-10 rounded-lg', icon: 'w-5 h-5' },
  lg: { box: 'w-12 h-12 rounded-xl', icon: 'w-6 h-6' },
  xl: { box: 'w-14 h-14 rounded-xl', icon: 'w-7 h-7' },
};

export interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  variant?: IconBoxVariant;
  size?: IconBoxSize;
  color?: IconBoxColor;
}

export function IconBox({
  icon,
  variant = 'filled',
  size = 'md',
  color = 'primary',
  className,
  ...props
}: IconBoxProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        sizeStyles[size].box,
        variantColorStyles[variant][color],
        className
      )}
      {...props}
    >
      <div className={sizeStyles[size].icon}>{icon}</div>
    </div>
  );
}
