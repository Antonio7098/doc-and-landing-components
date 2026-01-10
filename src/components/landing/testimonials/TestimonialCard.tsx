import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Star, Quote } from 'lucide-react';

export type TestimonialCardVariant = 'default' | 'bordered' | 'elevated' | 'glass';

const variantStyles: Record<TestimonialCardVariant, string> = {
  default: 'bg-card',
  bordered: 'bg-card border border-border',
  elevated: 'bg-card shadow-lg',
  glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
};

export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: {
    name: string;
    title?: string;
    company?: string;
    avatar?: string | ReactNode;
  };
  rating?: number;
  variant?: TestimonialCardVariant;
  showQuoteIcon?: boolean;
  logo?: ReactNode;
}

export function TestimonialCard({
  quote,
  author,
  rating,
  variant = 'bordered',
  showQuoteIcon = false,
  logo,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn('rounded-xl p-6 md:p-8', variantStyles[variant], className)}
      {...props}
    >
      {showQuoteIcon && (
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
      )}
      {rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'
              )}
            />
          ))}
        </div>
      )}
      <blockquote className="text-lg leading-relaxed text-foreground mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {author.avatar && (
            <div className="h-12 w-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
              {typeof author.avatar === 'string' ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                author.avatar
              )}
            </div>
          )}
          <div>
            <p className="font-semibold text-foreground">{author.name}</p>
            {(author.title || author.company) && (
              <p className="text-sm text-muted-foreground">
                {author.title}
                {author.title && author.company && ' at '}
                {author.company}
              </p>
            )}
          </div>
        </div>
        {logo && <div className="flex-shrink-0 opacity-60">{logo}</div>}
      </div>
    </div>
  );
}
