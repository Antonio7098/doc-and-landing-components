import { Menu, Moon, Sun, Search, Github, X } from 'lucide-react';
import { useDocs } from '../../contexts/DocsContext';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { cn } from '../../lib/utils';

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { config, theme, setTheme, sidebarOpen, setSidebarOpen, setSearchOpen } = useDocs();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="flex h-14 items-center px-4 lg:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden mr-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <Icon icon={sidebarOpen ? X : Menu} />
        </Button>

        <div className="flex items-center gap-2">
          {config.logo?.text && (
            <a href="/" className="flex items-center gap-2 font-semibold text-lg">
              {config.logo.text}
            </a>
          )}
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-1">
          {config.search?.enabled && (
            <Button
              variant="outline"
              className="hidden sm:flex items-center gap-2 text-muted-foreground w-64 justify-start"
              onClick={() => setSearchOpen(true)}
            >
              <Icon icon={Search} size="sm" />
              <span className="flex-1 text-left">{config.search.placeholder || 'Search...'}</span>
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Icon icon={Search} />
          </Button>

          {config.github && (
            <a 
              href={config.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Icon icon={Github} />
            </a>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Icon icon={theme === 'dark' ? Sun : Moon} />
          </Button>
        </div>
      </div>
    </header>
  );
}
