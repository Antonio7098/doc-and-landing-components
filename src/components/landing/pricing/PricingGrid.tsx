import { type HTMLAttributes, type ReactNode, useState } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';
import { SectionTitle, type SectionTitleAlign, type SectionTitleSize } from '../typography/SectionTitle';
import { type GradientPreset } from '../typography/GradientText';

export type PricingGridColumns = 2 | 3 | 4;

const columnStyles: Record<PricingGridColumns, string> = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export interface PricingToggleOption {
  label: string;
  value: string;
  discount?: string;
}

export interface PricingGridProps extends HTMLAttributes<HTMLElement> {
  title?: ReactNode;
  subtitle?: ReactNode;
  label?: string;
  labelGradient?: GradientPreset;
  titleAlign?: SectionTitleAlign;
  titleSize?: SectionTitleSize;
  columns?: PricingGridColumns;
  containerSize?: ContainerSize;
  toggle?: {
    options: PricingToggleOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
  };
  children: ReactNode;
}

export function PricingGrid({
  title,
  subtitle,
  label,
  labelGradient,
  titleAlign = 'center',
  titleSize = 'lg',
  columns = 3,
  containerSize = 'xl',
  toggle,
  children,
  className,
  ...props
}: PricingGridProps) {
  const [activeToggle, setActiveToggle] = useState(toggle?.defaultValue || toggle?.options[0]?.value);

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
            className="mb-8"
          />
        )}
        {toggle && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-full">
              {toggle.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setActiveToggle(option.value);
                    toggle.onChange?.(option.value);
                  }}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-full transition-all',
                    activeToggle === option.value
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {option.label}
                  {option.discount && activeToggle === option.value && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                      {option.discount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className={cn('grid gap-6 lg:gap-8 items-start', columnStyles[columns])}>
          {children}
        </div>
      </Container>
    </section>
  );
}
