import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { Container, type ContainerSize } from '../container/Container';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: FooterSocialLink[];
  copyright?: string;
  bottomLinks?: FooterLink[];
  containerSize?: ContainerSize;
  variant?: 'default' | 'minimal' | 'centered';
  newsletter?: {
    title?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (email: string) => void;
  };
}

export function Footer({
  logo,
  description,
  sections = [],
  socialLinks = [],
  copyright,
  bottomLinks = [],
  containerSize = 'xl',
  variant = 'default',
  newsletter,
  className,
  ...props
}: FooterProps) {
  if (variant === 'minimal') {
    return (
      <footer className={cn('border-t border-border py-8', className)} {...props}>
        <Container size={containerSize}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {logo && <div>{logo}</div>}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
            {copyright && (
              <p className="text-sm text-muted-foreground">{copyright}</p>
            )}
          </div>
        </Container>
      </footer>
    );
  }

  if (variant === 'centered') {
    return (
      <footer className={cn('border-t border-border py-12', className)} {...props}>
        <Container size={containerSize}>
          <div className="flex flex-col items-center text-center gap-8">
            {logo && <div>{logo}</div>}
            {description && (
              <p className="max-w-md text-muted-foreground">{description}</p>
            )}
            {sections.length > 0 && (
              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                {sections.flatMap((section) =>
                  section.links.map((link, index) => (
                    <a
                      key={`${section.title}-${index}`}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))
                )}
              </nav>
            )}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
            {copyright && (
              <p className="text-sm text-muted-foreground">{copyright}</p>
            )}
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer className={cn('border-t border-border', className)} {...props}>
      <Container size={containerSize}>
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-6">
            <div className="lg:col-span-2">
              {logo && <div className="mb-4">{logo}</div>}
              {description && (
                <p className="text-sm text-muted-foreground max-w-xs mb-6">
                  {description}
                </p>
              )}
              {socialLinks.length > 0 && (
                <div className="flex items-center gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {newsletter && (
              <div className="lg:col-span-2">
                {newsletter.title && (
                  <h3 className="font-semibold text-foreground mb-2">{newsletter.title}</h3>
                )}
                {newsletter.description && (
                  <p className="text-sm text-muted-foreground mb-4">{newsletter.description}</p>
                )}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                    newsletter.onSubmit?.(email);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder={newsletter.placeholder || 'Enter your email'}
                    className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {newsletter.buttonText || 'Subscribe'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {copyright && (
              <p className="text-sm text-muted-foreground">{copyright}</p>
            )}
            {bottomLinks.length > 0 && (
              <nav className="flex flex-wrap items-center gap-6">
                {bottomLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
