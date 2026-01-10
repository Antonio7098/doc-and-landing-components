import { useMemo, useEffect } from 'react';
import { DocsLayout } from '../layout/DocsLayout';
import { MarkdownRenderer } from '../docs/MarkdownRenderer';
import { TableOfContents, extractTocFromMarkdown } from '../docs/TableOfContents';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Icon } from '../ui/Icon';

export interface DocPageProps {
  content: string;
  title?: string;
  description?: string;
  prevPage?: { title: string; href: string };
  nextPage?: { title: string; href: string };
  lastUpdated?: string;
  className?: string;
}

export function DocPage({
  content,
  title,
  description,
  prevPage,
  nextPage,
  lastUpdated,
  className,
}: DocPageProps) {
  const tocItems = useMemo(() => extractTocFromMarkdown(content), [content]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [content, title]);

  return (
    <DocsLayout
      showToc={tocItems.length > 0}
      tocContent={<TableOfContents items={tocItems} />}
    >
      <article className={cn('min-w-0', className)}>
        {(title || description) && (
          <header className="mb-8">
            {title && (
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-2 text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </header>
        )}

        <MarkdownRenderer content={content} />

        {(prevPage || nextPage || lastUpdated) && (
          <footer className="mt-12 border-t border-border pt-6">
            {lastUpdated && (
              <p className="text-sm text-muted-foreground mb-6">
                Last updated: {lastUpdated}
              </p>
            )}
            
            <nav className="flex items-center justify-between gap-4">
              {prevPage ? (
                <Link
                  to={prevPage.href}
                  className="group flex flex-col items-start gap-1 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                >
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Icon icon={ChevronLeft} size="xs" />
                    Previous
                  </span>
                  <span className="font-medium group-hover:text-primary">
                    {prevPage.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              
              {nextPage && (
                <Link
                  to={nextPage.href}
                  className="group flex flex-col items-end gap-1 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                >
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    Next
                    <Icon icon={ChevronRight} size="xs" />
                  </span>
                  <span className="font-medium group-hover:text-primary">
                    {nextPage.title}
                  </span>
                </Link>
              )}
            </nav>
          </footer>
        )}
      </article>
    </DocsLayout>
  );
}
