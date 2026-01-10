import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';
import { Quote } from 'lucide-react';

export interface TestimonialHighlightProps extends HTMLAttributes<HTMLElement> {
  quote: string;
  author: {
    name: string;
    title?: string;
    company?: string;
    avatar?: string | ReactNode;
  };
  containerSize?: ContainerSize;
  logo?: ReactNode;
}

export function TestimonialHighlight({
  quote,
  author,
  containerSize = 'md',
  logo,
  className,
  ...props
}: TestimonialHighlightProps) {
  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      <Container size={containerSize}>
        <div className="text-center">
          <Quote className="h-12 w-12 text-primary/20 mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground mb-8">
            "{quote}"
          </blockquote>
          <div className="flex flex-col items-center gap-4">
            {author.avatar && (
              <div className="h-16 w-16 rounded-full overflow-hidden bg-muted">
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
            <div className="text-center">
              <p className="font-semibold text-lg text-foreground">{author.name}</p>
              {(author.title || author.company) && (
                <p className="text-muted-foreground">
                  {author.title}
                  {author.title && author.company && ' at '}
                  {author.company}
                </p>
              )}
            </div>
            {logo && <div className="mt-4 opacity-60">{logo}</div>}
          </div>
        </div>
      </Container>
    </section>
  );
}
