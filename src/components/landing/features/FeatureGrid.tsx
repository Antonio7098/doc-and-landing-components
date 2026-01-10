import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';
import { SectionTitle, type SectionTitleAlign, type SectionTitleSize } from '../typography/SectionTitle';
import { type GradientPreset } from '../typography/GradientText';

export type FeatureGridColumns = 2 | 3 | 4 | 6;

const columnStyles: Record<FeatureGridColumns, string> = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
};

export interface FeatureGridProps extends HTMLAttributes<HTMLElement> {
  title?: ReactNode;
  subtitle?: ReactNode;
  label?: string;
  labelGradient?: GradientPreset;
  titleAlign?: SectionTitleAlign;
  titleSize?: SectionTitleSize;
  columns?: FeatureGridColumns;
  gap?: 'sm' | 'md' | 'lg';
  containerSize?: ContainerSize;
  children: ReactNode;
}

const gapStyles = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
};

export function FeatureGrid({
  title,
  subtitle,
  label,
  labelGradient,
  titleAlign = 'center',
  titleSize = 'lg',
  columns = 3,
  gap = 'md',
  containerSize = 'xl',
  children,
  className,
  ...props
}: FeatureGridProps) {
  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      <Container size={containerSize}>
        {(title || subtitle || label) && (
          <SectionTitle
            title={title}
            subtitle={subtitle}
            label={label}
            labelGradient={labelGradient}
            align={titleAlign}
            size={titleSize}
            className="mb-12 md:mb-16"
          />
        )}
        <div className={cn('grid', columnStyles[columns], gapStyles[gap])}>
          {children}
        </div>
      </Container>
    </section>
  );
}
