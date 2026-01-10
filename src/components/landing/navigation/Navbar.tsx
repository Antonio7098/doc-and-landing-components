import { type HTMLAttributes, type ReactNode, useState } from 'react';
import { cn } from '../../../lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container } from '../container/Container';

export interface NavLink {
  label: string;
  href?: string;
  onClick?: () => void;
  children?: NavLink[];
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  logo: ReactNode;
  links?: NavLink[];
  actions?: ReactNode;
  variant?: 'default' | 'transparent' | 'bordered';
  sticky?: boolean;
  mobileBreakpoint?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  default: 'bg-background/95 backdrop-blur-md',
  transparent: 'bg-transparent',
  bordered: 'bg-background/95 backdrop-blur-md border-b border-border',
};

const breakpointStyles = {
  sm: { desktop: 'sm:flex', mobile: 'sm:hidden' },
  md: { desktop: 'md:flex', mobile: 'md:hidden' },
  lg: { desktop: 'lg:flex', mobile: 'lg:hidden' },
};

export function Navbar({
  logo,
  links = [],
  actions,
  variant = 'bordered',
  sticky = true,
  mobileBreakpoint = 'lg',
  className,
  ...props
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const bp = breakpointStyles[mobileBreakpoint];

  const renderLink = (link: NavLink, index: number) => {
    if (link.children && link.children.length > 0) {
      const isOpen = openDropdown === link.label;
      return (
        <div key={index} className="relative">
          <button
            onClick={() => setOpenDropdown(isOpen ? null : link.label)}
            className={cn(
              'flex items-center gap-1 text-sm font-medium text-muted-foreground',
              'hover:text-foreground transition-colors py-2'
            )}
          >
            {link.label}
            <ChevronDown
              className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
            />
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-card border border-border shadow-lg py-2 z-50">
              {link.children.map((child, childIndex) => (
                <a
                  key={childIndex}
                  href={child.href}
                  onClick={child.onClick}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <a
        key={index}
        href={link.href}
        onClick={link.onClick}
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
      >
        {link.label}
      </a>
    );
  };

  return (
    <header
      className={cn(
        'z-50 w-full',
        sticky && 'sticky top-0',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">{logo}</div>
            <div className={cn('hidden items-center gap-6', bp.desktop)}>
              {links.map((link, index) => renderLink(link, index))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={cn('hidden', bp.desktop)}>{actions}</div>
            <button
              className={cn('p-2 rounded-lg hover:bg-accent', bp.mobile)}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {mobileMenuOpen && (
        <div className={cn('border-t border-border bg-background', bp.mobile)}>
          <Container>
            <div className="py-4 space-y-4">
              {links.map((link, index) => (
                <div key={index}>
                  {link.children ? (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">
                        {link.label}
                      </p>
                      <div className="pl-4 space-y-2">
                        {link.children.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            onClick={() => {
                              child.onClick?.();
                              setMobileMenuOpen(false);
                            }}
                            className="block text-sm text-muted-foreground hover:text-foreground"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => {
                        link.onClick?.();
                        setMobileMenuOpen(false);
                      }}
                      className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">{actions}</div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
