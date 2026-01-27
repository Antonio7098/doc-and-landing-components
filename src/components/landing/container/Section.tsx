import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export type SectionSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionTheme = 'light' | 'dark' | 'gradient' | 'muted';

const spacingStyles: Record<SectionSpacing, string> = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
  xl: 'py-32 md:py-40',
};

const themeStyles: Record<SectionTheme, string> = {
  light: 'bg-background text-foreground',
  dark: 'bg-foreground text-background',
  gradient: 'bg-gradient-to-b from-background to-muted',
  muted: 'bg-muted/50',
};

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  theme?: SectionTheme;
  children: ReactNode;
  as?: 'section' | 'div' | 'article';
}

export function Section({
  spacing = 'lg',
  theme,
  className,
  children,
  as: Component = 'section',
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        spacingStyles[spacing],
        theme && themeStyles[theme],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
