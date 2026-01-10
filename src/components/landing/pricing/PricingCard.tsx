import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Check } from 'lucide-react';

export type PricingCardVariant = 'default' | 'featured' | 'bordered';

const variantStyles: Record<PricingCardVariant, string> = {
  default: 'bg-card border border-border',
  featured: 'bg-card border-2 border-primary shadow-lg shadow-primary/10 relative',
  bordered: 'bg-transparent border border-border',
};

export interface PricingFeature {
  text: string;
  included: boolean;
  tooltip?: string;
}

export interface PricingCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description?: string;
  price: string | ReactNode;
  priceDescription?: string;
  features: PricingFeature[];
  action?: ReactNode;
  variant?: PricingCardVariant;
  badge?: string;
  popular?: boolean;
}

export function PricingCard({
  name,
  description,
  price,
  priceDescription,
  features,
  action,
  variant = 'default',
  badge,
  popular = false,
  className,
  ...props
}: PricingCardProps) {
  const actualVariant = popular ? 'featured' : variant;

  return (
    <div
      className={cn(
        'rounded-2xl p-6 md:p-8 flex flex-col',
        variantStyles[actualVariant],
        className
      )}
      {...props}
    >
      {(badge || popular) && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {badge || 'Most Popular'}
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {typeof price === 'string' ? (
            <span className="text-4xl font-bold text-foreground">{price}</span>
          ) : (
            price
          )}
        </div>
        {priceDescription && (
          <p className="mt-1 text-sm text-muted-foreground">{priceDescription}</p>
        )}
      </div>
      {action && <div className="mb-6">{action}</div>}
      <ul className="space-y-3 flex-1">
        {features.map((feature, index) => (
          <li
            key={index}
            className={cn(
              'flex items-start gap-3 text-sm',
              !feature.included && 'opacity-50'
            )}
          >
            <Check
              className={cn(
                'h-5 w-5 flex-shrink-0',
                feature.included ? 'text-primary' : 'text-muted-foreground'
              )}
            />
            <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
