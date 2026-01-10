// Docs exports
export { Docs, type DocsProps } from './Docs';
export { type DocsConfig, type NavItem, type DocPage, type DocPageMeta } from './config/docs.config';
export { DocsProvider } from './contexts/DocsContext';
export { DocPage as DocPageComponent } from './components/pages/DocPage';
export { HomePage } from './components/pages/HomePage';
export { MarkdownRenderer } from './components/docs/MarkdownRenderer';
export { Callout } from './components/docs/Callout';
export { CodeBlock } from './components/docs/CodeBlock';
export { TableOfContents } from './components/docs/TableOfContents';
export { Button } from './components/ui/Button';
export { Badge } from './components/ui/Badge';
export { Icon } from './components/ui/Icon';
export { cn } from './lib/utils';
export { loadDocs, type LoadDocsOptions } from './lib/loadDocs';

// Landing page exports
export { LandingPage } from './components/pages/LandingPage';

// Landing page components - Container & Layout
export { Container, Section } from './components/landing/container';
export type { ContainerProps, ContainerSize, SectionProps, SectionSpacing, SectionTheme } from './components/landing/container';

// Landing page components - Typography
export { GradientText, SectionTitle, Highlight } from './components/landing/typography';
export type { GradientTextProps, GradientPreset, SectionTitleProps, SectionTitleAlign, SectionTitleSize, HighlightProps, HighlightVariant, HighlightColor } from './components/landing/typography';

// Landing page components - Hero
export { Hero, HeroBadge, HeroBackground } from './components/landing/hero';
export type { HeroProps, HeroAction, HeroLayout, HeroSize, HeroBadgeProps, HeroBadgeVariant, HeroBackgroundProps, HeroBackgroundVariant } from './components/landing/hero';

// Landing page components - Features
export { FeatureCard, FeatureGrid, FeatureShowcase, FeatureList, IconBox } from './components/landing/features';
export type { FeatureCardProps, FeatureCardVariant, FeatureCardSize, FeatureGridProps, FeatureGridColumns, FeatureShowcaseProps, FeatureShowcaseItem, FeatureShowcaseLayout, FeatureListProps, FeatureListItem, FeatureListVariant, IconBoxProps, IconBoxVariant, IconBoxSize, IconBoxColor } from './components/landing/features';

// Landing page components - Logos
export { LogoCloud } from './components/landing/logos';
export type { LogoCloudProps, LogoItem, LogoCloudVariant, LogoCloudLayout } from './components/landing/logos';

// Landing page components - Code
export { CodeWindow, CodeTabs, CodeComparison, APIResponse } from './components/landing/code';
export type { CodeWindowProps, CodeWindowVariant, CodeTabsProps, CodeTab, CodeComparisonProps, APIResponseProps } from './components/landing/code';

// Landing page components - CTA
export { CTASection, CTABanner } from './components/landing/cta';
export type { CTASectionProps, CTAAction, CTAVariant, CTABannerProps, CTABannerVariant } from './components/landing/cta';

// Landing page components - Navigation
export { Navbar, NavButton } from './components/landing/navigation';
export type { NavbarProps, NavLink, NavButtonProps, NavButtonVariant, NavButtonSize } from './components/landing/navigation';

// Landing page components - Testimonials
export { TestimonialCard, TestimonialGrid, TestimonialHighlight } from './components/landing/testimonials';
export type { TestimonialCardProps, TestimonialCardVariant, TestimonialGridProps, TestimonialGridColumns, TestimonialGridLayout, TestimonialHighlightProps } from './components/landing/testimonials';

// Landing page components - Pricing
export { PricingCard, PricingGrid } from './components/landing/pricing';
export type { PricingCardProps, PricingCardVariant, PricingFeature, PricingGridProps, PricingGridColumns, PricingToggleOption } from './components/landing/pricing';

// Landing page components - Footer
export { Footer } from './components/landing/footer';
export type { FooterProps, FooterLink, FooterSection, FooterSocialLink } from './components/landing/footer';

// Landing page components - Stats
export { StatsSection } from './components/landing/stats';
export type { StatsSectionProps, Stat, StatsVariant, StatsColumns } from './components/landing/stats';
