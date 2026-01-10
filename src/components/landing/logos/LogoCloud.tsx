import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';

export type LogoCloudVariant = 'default' | 'muted' | 'bordered' | 'cards';
export type LogoCloudLayout = 'inline' | 'grid' | 'scroll';

export interface LogoItem {
  name: string;
  logo: ReactNode;
  href?: string;
}

export interface LogoCloudProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  logos: LogoItem[];
  variant?: LogoCloudVariant;
  layout?: LogoCloudLayout;
  containerSize?: ContainerSize;
  columns?: 4 | 5 | 6 | 8;
}

const columnStyles = {
  4: 'grid-cols-2 sm:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  8: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-8',
};

const variantStyles: Record<LogoCloudVariant, string> = {
  default: '',
  muted: 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all',
  bordered: 'border border-border rounded-lg p-4',
  cards: 'bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors',
};

export function LogoCloud({
  title,
  logos,
  variant = 'default',
  layout = 'inline',
  containerSize = 'xl',
  columns = 6,
  className,
  ...props
}: LogoCloudProps) {
  const renderLogo = (logo: LogoItem, index: number) => {
    const content = (
      <div
        className={cn(
          'flex items-center justify-center h-12',
          variant !== 'default' && variantStyles[variant]
        )}
      >
        {logo.logo}
      </div>
    );

    if (logo.href) {
      return (
        <a
          key={index}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          title={logo.name}
        >
          {content}
        </a>
      );
    }

    return (
      <div key={index} className="flex items-center justify-center" title={logo.name}>
        {content}
      </div>
    );
  };

  if (layout === 'scroll') {
    return (
      <section className={cn('py-12 overflow-hidden', className)} {...props}>
        <Container size={containerSize}>
          {title && (
            <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
              {title}
            </p>
          )}
        </Container>
        <div className="relative">
          <div className="flex animate-scroll gap-12 hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                {renderLogo(logo, index)}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn('py-12', className)} {...props}>
      <Container size={containerSize}>
        {title && (
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            {title}
          </p>
        )}
        <div
          className={cn(
            layout === 'grid' && `grid ${columnStyles[columns]} gap-8 items-center`,
            layout === 'inline' && 'flex flex-wrap items-center justify-center gap-x-12 gap-y-8'
          )}
        >
          {logos.map((logo, index) => renderLogo(logo, index))}
        </div>
      </Container>
    </section>
  );
}
