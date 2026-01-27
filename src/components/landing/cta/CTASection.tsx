import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';
import { GradientText, type GradientPreset } from '../typography/GradientText';

export type CTAVariant = 'default' | 'centered' | 'split' | 'card';

export interface CTAAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: ReactNode;
}

export interface CTASectionProps extends HTMLAttributes<HTMLElement> {
  title: ReactNode;
  description?: string;
  actions?: CTAAction[];
  variant?: CTAVariant;
  gradient?: GradientPreset;
  containerSize?: ContainerSize;
  backgroundElement?: ReactNode;
  media?: ReactNode;
}

const actionVariantStyles: Record<string, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'border border-border bg-transparent hover:bg-accent',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};

export function CTASection({
  title,
  description,
  actions,
  variant = 'centered',
  gradient,
  containerSize = 'lg',
  backgroundElement,
  media,
  className,
  ...props
}: CTASectionProps) {
  const renderActions = () =>
    actions?.map((action, index) => {
      const ActionComponent = action.href ? 'a' : 'button';
      return (
        <ActionComponent
          key={index}
          href={action.href}
          onClick={action.onClick}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all',
            actionVariantStyles[action.variant || 'primary']
          )}
        >
          {action.icon && action.icon}
          {action.label}
        </ActionComponent>
      );
    });

  if (variant === 'card') {
    return (
      <section className={cn('py-16 md:py-24', className)} {...props}>
        <Container size={containerSize}>
          <div className="relative overflow-hidden rounded-2xl bg-muted/50 border border-border p-8 md:p-12 lg:p-16">
            {backgroundElement && (
              <div className="absolute inset-0 -z-10">{backgroundElement}</div>
            )}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {gradient ? <GradientText gradient={gradient}>{title}</GradientText> : title}
              </h2>
              {description && (
                <p className="mt-4 text-lg text-muted-foreground">{description}</p>
              )}
              {actions && actions.length > 0 && (
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {renderActions()}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section className={cn('py-16 md:py-24', className)} {...props}>
        <Container size={containerSize}>
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {gradient ? <GradientText gradient={gradient}>{title}</GradientText> : title}
              </h2>
              {description && (
                <p className="mt-4 text-lg text-muted-foreground">{description}</p>
              )}
            </div>
            {actions && actions.length > 0 && (
              <div className="flex flex-wrap gap-4">{renderActions()}</div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={cn('relative py-16 md:py-24', className)} {...props}>
      {backgroundElement && (
        <div className="absolute inset-0 -z-10">{backgroundElement}</div>
      )}
      <Container size={containerSize}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {gradient ? <GradientText gradient={gradient}>{title}</GradientText> : title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          )}
          {actions && actions.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {renderActions()}
            </div>
          )}
          {media && <div className="mt-12">{media}</div>}
        </div>
      </Container>
    </section>
  );
}
