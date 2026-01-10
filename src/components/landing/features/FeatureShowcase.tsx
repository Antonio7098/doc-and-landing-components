import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';
import { GradientText, type GradientPreset } from '../typography/GradientText';

export type FeatureShowcaseLayout = 'left' | 'right';

export interface FeatureShowcaseItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FeatureShowcaseProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  labelGradient?: GradientPreset;
  title: ReactNode;
  description?: string;
  features?: FeatureShowcaseItem[];
  media: ReactNode;
  layout?: FeatureShowcaseLayout;
  containerSize?: ContainerSize;
  action?: ReactNode;
}

export function FeatureShowcase({
  label,
  labelGradient = 'purple-blue',
  title,
  description,
  features,
  media,
  layout = 'left',
  containerSize = 'xl',
  action,
  className,
  ...props
}: FeatureShowcaseProps) {
  const contentOrder = layout === 'left' ? 'order-1' : 'order-1 lg:order-2';
  const mediaOrder = layout === 'left' ? 'order-2' : 'order-2 lg:order-1';

  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      <Container size={containerSize}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={contentOrder}>
            {label && (
              <GradientText
                gradient={labelGradient}
                className="mb-4 block text-sm font-semibold uppercase tracking-wider"
              >
                {label}
              </GradientText>
            )}
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
            {features && features.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {action && <div className="mt-8">{action}</div>}
          </div>
          <div className={mediaOrder}>{media}</div>
        </div>
      </Container>
    </section>
  );
}
