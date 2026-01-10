import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';
import { SectionTitle, type SectionTitleAlign, type SectionTitleSize } from '../typography/SectionTitle';
import { type GradientPreset } from '../typography/GradientText';

export type TestimonialGridColumns = 1 | 2 | 3;
export type TestimonialGridLayout = 'grid' | 'masonry' | 'carousel';

const columnStyles: Record<TestimonialGridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
};

export interface TestimonialGridProps extends HTMLAttributes<HTMLElement> {
  title?: ReactNode;
  subtitle?: ReactNode;
  label?: string;
  labelGradient?: GradientPreset;
  titleAlign?: SectionTitleAlign;
  titleSize?: SectionTitleSize;
  columns?: TestimonialGridColumns;
  layout?: TestimonialGridLayout;
  containerSize?: ContainerSize;
  children: ReactNode;
}

export function TestimonialGrid({
  title,
  subtitle,
  label,
  labelGradient,
  titleAlign = 'center',
  titleSize = 'lg',
  columns = 3,
  layout = 'grid',
  containerSize = 'xl',
  children,
  className,
  ...props
}: TestimonialGridProps) {
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
        {layout === 'masonry' ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {children}
          </div>
        ) : layout === 'carousel' ? (
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
            {children}
          </div>
        ) : (
          <div className={cn('grid gap-6', columnStyles[columns])}>
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
