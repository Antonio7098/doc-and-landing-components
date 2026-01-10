import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useDocs } from '../../contexts/DocsContext';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';
import { type NavItem } from '../../config/docs.config';

export interface SidebarProps {
  className?: string;
}

function NavItemComponent({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(() => {
    if (!item.children) return false;
    return item.children.some(child => 
      child.href === location.pathname || 
      child.children?.some(c => c.href === location.pathname)
    );
  });

  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === location.pathname;

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors',
            'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            depth > 0 && 'pl-6'
          )}
        >
          <span className="font-medium">{item.title}</span>
          <ChevronRight
            className={cn(
              'h-4 w-4 shrink-0 transition-transform duration-200',
              isOpen && 'rotate-90'
            )}
          />
        </button>
        {isOpen && item.children && (
          <div className="mt-1 space-y-1">
            {item.children.map((child, i) => (
              <NavItemComponent key={i} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.href || '#'}
      className={cn(
        'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        isActive
          ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
          : 'text-sidebar-foreground/70',
        depth > 0 && 'pl-6',
        depth > 1 && 'pl-9'
      )}
    >
      <span>{item.title}</span>
      {item.badge && (
        <Badge variant="secondary" className="ml-auto">
          {item.badge}
        </Badge>
      )}
    </Link>
  );
}

export function Sidebar({ className }: SidebarProps) {
  const { config, sidebarOpen, setSidebarOpen } = useDocs();

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed top-14 z-40 h-[calc(100vh-3.5rem)] w-72 border-r border-sidebar-border bg-sidebar',
          'transition-transform duration-300 ease-in-out lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:sticky lg:block',
          className
        )}
      >
        <nav className="h-full overflow-y-auto scrollbar-thin p-4">
          <div className="space-y-6">
            {config.navigation.map((section, i) => (
              <div key={i}>
                {section.children ? (
                  <>
                    <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {section.title}
                    </h4>
                    <div className="space-y-1">
                      {section.children.map((item, j) => (
                        <NavItemComponent key={j} item={item} />
                      ))}
                    </div>
                  </>
                ) : (
                  <NavItemComponent item={section} />
                )}
              </div>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
