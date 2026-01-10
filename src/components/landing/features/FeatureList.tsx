import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Check } from 'lucide-react';

export type FeatureListVariant = 'default' | 'checkmark' | 'numbered' | 'icon';

export interface FeatureListItem {
  text: string;
  icon?: ReactNode;
}

export interface FeatureListProps extends HTMLAttributes<HTMLUListElement> {
  items: FeatureListItem[];
  variant?: FeatureListVariant;
  columns?: 1 | 2 | 3;
  iconColor?: string;
}

const columnStyles = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
};

export function FeatureList({
  items,
  variant = 'checkmark',
  columns = 1,
  iconColor = 'text-primary',
  className,
  ...props
}: FeatureListProps) {
  return (
    <ul className={cn('grid gap-3', columnStyles[columns], className)} {...props}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className={cn('mt-0.5 shrink-0', iconColor)}>
            {variant === 'checkmark' && <Check className="h-5 w-5" />}
            {variant === 'numbered' && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold">
                {index + 1}
              </span>
            )}
            {variant === 'icon' && item.icon}
            {variant === 'default' && (
              <span className="block h-1.5 w-1.5 rounded-full bg-current mt-2" />
            )}
          </span>
          <span className="text-muted-foreground">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
