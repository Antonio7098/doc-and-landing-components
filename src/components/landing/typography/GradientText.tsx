import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export type GradientPreset =
  | 'purple-blue'
  | 'cyan-blue'
  | 'pink-purple'
  | 'orange-red'
  | 'green-cyan'
  | 'blue-purple'
  | 'sunset'
  | 'ocean'
  | 'gray'
  | 'custom';

const gradientPresets: Record<Exclude<GradientPreset, 'custom'>, string> = {
  'purple-blue': 'from-purple-500 via-violet-500 to-blue-500',
  'cyan-blue': 'from-cyan-400 via-blue-500 to-purple-600',
  'pink-purple': 'from-pink-500 via-purple-500 to-indigo-500',
  'orange-red': 'from-orange-500 via-red-500 to-pink-500',
  'green-cyan': 'from-green-400 via-cyan-500 to-blue-500',
  'blue-purple': 'from-blue-500 via-purple-500 to-pink-500',
  sunset: 'from-orange-400 via-pink-500 to-purple-600',
  ocean: 'from-cyan-500 via-blue-500 to-indigo-600',
  gray: 'from-foreground via-foreground/80 to-foreground/60',
};

export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  gradient?: GradientPreset;
  customGradient?: string;
  animate?: boolean;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

export function GradientText({
  children,
  gradient = 'cyan-blue',
  customGradient,
  animate = false,
  className,
  as: Component = 'span',
  ...props
}: GradientTextProps) {
  const gradientClass =
    gradient === 'custom' && customGradient
      ? customGradient
      : gradientPresets[gradient as Exclude<GradientPreset, 'custom'>];

  return (
    <Component
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        gradientClass,
        animate && 'animate-gradient bg-[length:200%_auto]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
