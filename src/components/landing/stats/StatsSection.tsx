import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';
import { SectionTitle, type SectionTitleAlign } from '../typography/SectionTitle';
import { type GradientPreset } from '../typography/GradientText';

export interface Stat {
  value: string | number;
  label: string;
  description?: string;
  icon?: ReactNode;
}

export type StatsVariant = 'default' | 'bordered' | 'cards' | 'minimal';
export type StatsColumns = 2 | 3 | 4 | 5;

const columnStyles: Record<StatsColumns, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
};

export interface StatsSectionProps extends HTMLAttributes<HTMLElement> {
  title?: ReactNode;
  subtitle?: ReactNode;
  label?: string;
  labelGradient?: GradientPreset;
  titleAlign?: SectionTitleAlign;
  stats: Stat[];
  columns?: StatsColumns;
  variant?: StatsVariant;
  containerSize?: ContainerSize;
}

export function StatsSection({
  title,
  subtitle,
  label,
  labelGradient,
  titleAlign = 'center',
  stats,
  columns = 4,
  variant = 'default',
  containerSize = 'xl',
  className,
  ...props
}: StatsSectionProps) {
  const renderStat = (stat: Stat, index: number) => {
    const baseContent = (
      <>
        {stat.icon && (
          <div className="mb-2 text-primary">{stat.icon}</div>
        )}
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
          {stat.value}
        </div>
        <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
        {stat.description && (
          <div className="text-xs text-muted-foreground/70 mt-1">{stat.description}</div>
        )}
      </>
    );

    switch (variant) {
      case 'bordered':
        return (
          <div
            key={index}
            className={cn(
              'text-center p-6 border-l border-border first:border-l-0',
              'lg:first:border-l-0'
            )}
          >
            {baseContent}
          </div>
        );
      case 'cards':
        return (
          <div
            key={index}
            className="text-center p-6 bg-card border border-border rounded-xl"
          >
            {baseContent}
          </div>
        );
      case 'minimal':
        return (
          <div key={index} className="text-center">
            {baseContent}
          </div>
        );
      default:
        return (
          <div key={index} className="text-center p-6">
            {baseContent}
          </div>
        );
    }
  };

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
            className="mb-12"
          />
        )}
        <div
          className={cn(
            'grid gap-8',
            columnStyles[columns],
            variant === 'bordered' && 'divide-x-0 lg:divide-x divide-border'
          )}
        >
          {stats.map((stat, index) => renderStat(stat, index))}
        </div>
      </Container>
    </section>
  );
}
