import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { GradientText, type GradientPreset } from './GradientText';

export type SectionTitleAlign = 'left' | 'center' | 'right';
export type SectionTitleSize = 'sm' | 'md' | 'lg' | 'xl';

const alignStyles: Record<SectionTitleAlign, string> = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
};

const titleSizes: Record<SectionTitleSize, string> = {
  sm: 'text-2xl md:text-3xl',
  md: 'text-3xl md:text-4xl',
  lg: 'text-4xl md:text-5xl lg:text-6xl',
  xl: 'text-5xl md:text-6xl lg:text-7xl',
};

const subtitleSizes: Record<SectionTitleSize, string> = {
  sm: 'text-base md:text-lg',
  md: 'text-lg md:text-xl',
  lg: 'text-xl md:text-2xl',
  xl: 'text-xl md:text-2xl',
};

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: ReactNode;
  subtitle?: ReactNode;
  label?: string;
  labelGradient?: GradientPreset;
  align?: SectionTitleAlign;
  size?: SectionTitleSize;
  maxWidth?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  labelClassName?: string;
}

export function SectionTitle({
  title,
  subtitle,
  label,
  labelGradient = 'cyan-blue',
  align = 'center',
  size = 'lg',
  maxWidth = 'max-w-3xl',
  className,
  titleClassName,
  subtitleClassName,
  labelClassName,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(alignStyles[align], maxWidth, className)}
      {...props}
    >
      {label && (
        <GradientText
          gradient={labelGradient}
          className={cn(
            'mb-4 block text-sm font-semibold uppercase tracking-wider',
            labelClassName
          )}
        >
          {label}
        </GradientText>
      )}
      <h2
        className={cn(
          'font-bold tracking-tight',
          titleSizes[size],
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-muted-foreground',
            subtitleSizes[size],
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
