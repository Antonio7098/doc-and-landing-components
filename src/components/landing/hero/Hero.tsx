import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';
import { GradientText, type GradientPreset } from '../typography/GradientText';

export type HeroLayout = 'centered' | 'split' | 'split-reverse';
export type HeroSize = 'sm' | 'md' | 'lg' | 'xl';

const sizeStyles: Record<HeroSize, { title: string; subtitle: string; padding: string }> = {
  sm: {
    title: 'text-3xl md:text-4xl lg:text-5xl',
    subtitle: 'text-lg md:text-xl',
    padding: 'py-16 md:py-20',
  },
  md: {
    title: 'text-4xl md:text-5xl lg:text-6xl',
    subtitle: 'text-lg md:text-xl',
    padding: 'py-20 md:py-28',
  },
  lg: {
    title: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
    subtitle: 'text-xl md:text-2xl',
    padding: 'py-24 md:py-32',
  },
  xl: {
    title: 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
    subtitle: 'text-xl md:text-2xl',
    padding: 'py-32 md:py-40',
  },
};

export interface HeroAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export interface HeroProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode;
  titleGradient?: ReactNode;
  titleGradientPreset?: GradientPreset;
  subtitle?: ReactNode;
  badge?: ReactNode;
  actions?: HeroAction[];
  media?: ReactNode;
  layout?: HeroLayout;
  size?: HeroSize;
  containerSize?: ContainerSize;
  backgroundElement?: ReactNode;
  titleClassName?: string;
  subtitleClassName?: string;
  contentAlign?: 'left' | 'center' | 'right';
}

const actionVariantStyles: Record<string, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline:
    'border border-border bg-transparent hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};

export function Hero({
  title,
  titleGradient,
  titleGradientPreset = 'cyan-blue',
  subtitle,
  badge,
  actions,
  media,
  layout = 'centered',
  size = 'lg',
  containerSize = 'xl',
  backgroundElement,
  className,
  titleClassName,
  subtitleClassName,
  contentAlign = 'center',
  ...props
}: HeroProps) {
  const styles = sizeStyles[size];
  const centeredContentAlignment: Record<'left' | 'center' | 'right', string> = {
    left: 'text-left mr-auto max-w-4xl',
    center: 'text-center mx-auto max-w-4xl',
    right: 'text-right ml-auto max-w-4xl',
  };
  const centeredActionsAlignment: Record<'left' | 'center' | 'right', string> = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const renderTitle = () => (
    <h1
      className={cn(
        'font-bold tracking-tight leading-tight',
        styles.title,
        titleClassName
      )}
    >
      {title}
      {titleGradient && (
        <>
          <br />
          <GradientText gradient={titleGradientPreset} className={styles.title}>
            {titleGradient}
          </GradientText>
        </>
      )}
    </h1>
  );

  const renderContent = () => (
    <div
      className={cn(
        layout === 'centered' && centeredContentAlignment[contentAlign],
        layout !== 'centered' && 'max-w-xl'
      )}
    >
      {badge && <div className="mb-6">{badge}</div>}
      {renderTitle()}
      {subtitle && (
        <p
          className={cn(
            'mt-6 text-muted-foreground leading-relaxed',
            styles.subtitle,
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      {actions && actions.length > 0 && (
        <div
          className={cn(
            'mt-8 flex flex-wrap gap-4',
            layout === 'centered' && centeredActionsAlignment[contentAlign]
          )}
        >
          {actions.map((action, index) => {
            const ActionComponent = action.href ? 'a' : 'button';
            return (
              <ActionComponent
                key={index}
                href={action.href}
                onClick={action.onClick}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  actionVariantStyles[action.variant || 'primary']
                )}
              >
                {action.icon && action.iconPosition !== 'right' && action.icon}
                {action.label}
                {action.icon && action.iconPosition === 'right' && action.icon}
              </ActionComponent>
            );
          })}
        </div>
      )}
    </div>
  );

  if (layout === 'centered') {
    return (
      <section
        className={cn('relative overflow-hidden', styles.padding, className)}
        {...props}
      >
        {backgroundElement && (
          <div className="absolute inset-0 -z-10">{backgroundElement}</div>
        )}
        <Container size={containerSize}>
          {renderContent()}
          {media && <div className="mt-12 lg:mt-16">{media}</div>}
        </Container>
      </section>
    );
  }

  return (
    <section
      className={cn('relative overflow-hidden', styles.padding, className)}
      {...props}
    >
      {backgroundElement && (
        <div className="absolute inset-0 -z-10">{backgroundElement}</div>
      )}
      <Container size={containerSize}>
        <div
          className={cn(
            'grid items-center gap-12 lg:grid-cols-2 lg:gap-16',
            layout === 'split-reverse' && 'lg:grid-flow-dense'
          )}
        >
          <div className={layout === 'split-reverse' ? 'lg:col-start-2' : ''}>
            {renderContent()}
          </div>
          {media && (
            <div className={layout === 'split-reverse' ? 'lg:col-start-1' : ''}>
              {media}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
