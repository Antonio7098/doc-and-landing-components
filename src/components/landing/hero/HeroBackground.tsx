import { cn } from '../../../lib/utils';

export type HeroBackgroundVariant =
  | 'gradient'
  | 'grid'
  | 'dots'
  | 'radial'
  | 'mesh'
  | 'aurora'
  | 'waves';

export interface HeroBackgroundProps {
  variant?: HeroBackgroundVariant;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export function HeroBackground({
  variant = 'gradient',
  className,
  primaryColor = 'rgba(6, 182, 212, 0.15)',
  secondaryColor = 'rgba(168, 85, 247, 0.15)',
}: HeroBackgroundProps) {
  switch (variant) {
    case 'gradient':
      return (
        <div
          className={cn('absolute inset-0', className)}
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${primaryColor}, transparent)`,
          }}
        />
      );

    case 'grid':
      return (
        <div className={cn('absolute inset-0', className)}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: '4rem 4rem',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${primaryColor}, transparent)`,
            }}
          />
        </div>
      );

    case 'dots':
      return (
        <div className={cn('absolute inset-0', className)}>
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
              backgroundSize: '2rem 2rem',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${primaryColor}, transparent)`,
            }}
          />
        </div>
      );

    case 'radial':
      return (
        <div className={cn('absolute inset-0', className)}>
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, ${primaryColor} 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, ${secondaryColor} 0%, transparent 40%)
              `,
            }}
          />
        </div>
      );

    case 'mesh':
      return (
        <div className={cn('absolute inset-0 overflow-hidden', className)}>
          <div
            className="absolute -inset-[100%] animate-spin-slow"
            style={{
              background: `
                radial-gradient(circle at 25% 25%, ${primaryColor} 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, ${secondaryColor} 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
              `,
              animationDuration: '60s',
            }}
          />
        </div>
      );

    case 'aurora':
      return (
        <div className={cn('absolute inset-0 overflow-hidden', className)}>
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[200%] aspect-[16/9]">
            <div
              className="absolute inset-0 blur-3xl"
              style={{
                background: `
                  linear-gradient(135deg, ${primaryColor} 0%, transparent 50%),
                  linear-gradient(225deg, ${secondaryColor} 0%, transparent 50%),
                  linear-gradient(315deg, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
                `,
              }}
            />
          </div>
        </div>
      );

    case 'waves':
      return (
        <div className={cn('absolute inset-0 overflow-hidden', className)}>
          <svg
            className="absolute bottom-0 w-full h-1/2"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={primaryColor} />
                <stop offset="100%" stopColor={secondaryColor} />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      );

    default:
      return null;
  }
}
