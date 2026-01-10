import {
  Github,
  Twitter,
  Linkedin,
  Zap,
  Shield,
  Globe,
  Code2,
  Layers,
  Users,
  ChevronRight,
  Key,
  Lock,
  UserCheck,
  Building2,
  Terminal,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

// Landing components
import {
  Container,
  Section,
  GradientText,
  SectionTitle,
  Hero,
  HeroBadge,
  HeroBackground,
  FeatureCard,
  FeatureGrid,
  FeatureShowcase,
  FeatureList,
  IconBox,
  LogoCloud,
  CodeTabs,
  CodeWindow,
  APIResponse,
  CTASection,
  CTABanner,
  Navbar,
  NavButton,
  TestimonialCard,
  TestimonialGrid,
  TestimonialHighlight,
  PricingCard,
  PricingGrid,
  Footer,
  StatsSection,
} from '../landing';

const nodeCode = `// Get a user's access token and
// profile data from an Identity Provider

import WorkOS from '@workos-inc/node';

const workos = new WorkOS('sk_example_123456789');

const profile = await workos.sso.getProfileAndToken({
  code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  clientID: 'client_123456789',
});`;

const pythonCode = `# Get a user's access token and
# profile data from an Identity Provider

from workos import WorkOS

workos = WorkOS(api_key='sk_example_123456789')

profile = workos.sso.get_profile_and_token(
    code='01E2RJ4C05B52KKZ8FSRDAP23J',
    client_id='client_123456789'
)`;

const goCode = `// Get a user's access token and
// profile data from an Identity Provider

package main

import (
    "github.com/workos/workos-go/v4/pkg/sso"
)

func main() {
    sso.SetAPIKey("sk_example_123456789")

    profile, _ := sso.GetProfileAndToken(
        ctx,
        sso.GetProfileAndTokenOpts{
            Code: "01E2RJ4C05B52KKZ8FSRDAP23J",
        },
    )
}`;

const apiResponse = {
  access_token: "01DMEK0J53CVMC32CK5SE0KZ8Q",
  profile: {
    id: "prof_01DMC79VCBZ0NY2099737PSVF1",
    connection_id: "conn_01E4ZCR3C56J083X43JQX3JK5",
    connection_type: "okta",
    email: "alan@foo-corp.com",
    first_name: "Alan",
    last_name: "Turing",
    idp_id: "00u1a0ufowBJlzPlk357",
    object: "profile"
  }
};

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="text-lg font-bold text-muted-foreground/60 tracking-tight">
      {name}
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Banner */}
      <CTABanner
        variant="gradient"
        action={
          <a href="#" className="text-white/90 hover:text-white flex items-center gap-1 text-sm font-medium">
            Learn more <ChevronRight className="w-4 h-4" />
          </a>
        }
      >
        Announcing our $50M Series B funding
      </CTABanner>

      {/* Navigation */}
      <Navbar
        logo={
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span>Acme</span>
          </a>
        }
        links={[
          {
            label: 'Products',
            children: [
              { label: 'Authentication', href: '#' },
              { label: 'User Management', href: '#' },
              { label: 'Directory Sync', href: '#' },
              { label: 'Audit Logs', href: '#' },
            ],
          },
          {
            label: 'Developers',
            children: [
              { label: 'Documentation', href: '#' },
              { label: 'API Reference', href: '#' },
              { label: 'SDKs', href: '#' },
              { label: 'Changelog', href: '#' },
            ],
          },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Blog', href: '#' },
        ]}
        actions={
          <div className="flex items-center gap-3">
            <NavButton variant="ghost" href="#">
              Sign in
            </NavButton>
            <NavButton variant="primary" href="#" showArrow>
              Dashboard
            </NavButton>
          </div>
        }
      />

      {/* Hero Section */}
      <Hero
        size="xl"
        layout="centered"
        badge={
          <HeroBadge variant="gradient" showArrow href="#">
            New: Multi-tenant authentication is here
          </HeroBadge>
        }
        title="Your app,"
        titleGradient="Enterprise Ready."
        titleGradientPreset="cyan-blue"
        subtitle="Start selling to enterprise customers with just a few lines of code. Implement features like single sign-on in minutes instead of months."
        actions={[
          {
            label: 'Get started',
            href: '#',
            variant: 'primary',
          },
          {
            label: 'Talk to an expert',
            href: '#',
            variant: 'ghost',
            icon: <ChevronRight className="w-4 h-4" />,
            iconPosition: 'right',
          },
        ]}
        backgroundElement={
          <HeroBackground variant="radial" primaryColor="rgba(6, 182, 212, 0.08)" secondaryColor="rgba(168, 85, 247, 0.08)" />
        }
      />

      {/* Logo Cloud */}
      <LogoCloud
        title="Trusted by"
        variant="muted"
        logos={[
          { name: 'OpenAI', logo: <LogoPlaceholder name="OpenAI" /> },
          { name: 'Anthropic', logo: <LogoPlaceholder name="Anthropic" /> },
          { name: 'Cursor', logo: <LogoPlaceholder name="Cursor" /> },
          { name: 'Perplexity', logo: <LogoPlaceholder name="Perplexity" /> },
          { name: 'Vercel', logo: <LogoPlaceholder name="Vercel" /> },
          { name: 'Stripe', logo: <LogoPlaceholder name="Stripe" /> },
        ]}
      />

      {/* Developer-first Section (Dark) */}
      <Section theme="dark" spacing="xl">
        <Container>
          <SectionTitle
            label="Developer-first design"
            labelGradient="cyan-blue"
            title="A unified platform with modern APIs"
            align="center"
            className="mb-16"
            titleClassName="text-white"
          />

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <p className="text-lg text-gray-400 mb-8">
                WorkOS provides a single, elegant interface that abstracts dozens of enterprise integrations.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <NavButton variant="primary" href="#">
                  Read the docs
                </NavButton>
                <NavButton variant="ghost" href="#" icon={<Key className="w-4 h-4" />}>
                  Get your API key
                </NavButton>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: <Terminal className="w-5 h-5" />,
                    title: 'RESTful APIs',
                    description: 'JSON responses and normalized objects',
                  },
                  {
                    icon: <Layers className="w-5 h-5" />,
                    title: 'Dashboard',
                    description: 'Seamlessly integrates into your application',
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: 'Realtime updates',
                    description: 'Directory services with webhook events',
                  },
                  {
                    icon: <Code2 className="w-5 h-5" />,
                    title: 'Modern SDKs',
                    description: 'Node.js, Ruby, Python, .NET, Go and more',
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: 'Multiple environments',
                    description: 'Map to your application development process',
                  },
                  {
                    icon: <Building2 className="w-5 h-5" />,
                    title: '20+ enterprise services',
                    description: 'With a single integration point',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <IconBox
                      icon={feature.icon}
                      variant="outlined"
                      color="cyan"
                      size="md"
                    />
                    <div>
                      <h4 className="font-medium text-white">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <CodeTabs
                tabs={[
                  { label: 'Node.js', code: nodeCode, language: 'typescript' },
                  { label: 'Python', code: pythonCode, language: 'python' },
                  { label: 'Go', code: goCode, language: 'go' },
                ]}
              />
              <APIResponse status={200} response={apiResponse} />
            </div>
          </div>
        </Container>
      </Section>

      {/* All-in-one Section (Light) */}
      <FeatureShowcase
        label="The all-in-one solution"
        labelGradient="purple-blue"
        title={
          <>
            Enterprise SSO<br />
            <span className="text-muted-foreground">(and a whole lot more)</span>
          </>
        }
        description="WorkOS is a set of building blocks for quickly adding enterprise features to your app. You'll be shipping quickly with a market-proven solution for your customers."
        layout="left"
        action={
          <NavButton variant="primary" href="#">
            Add Single Sign-On to your app
          </NavButton>
        }
        features={[
          {
            icon: <Lock className="w-5 h-5" />,
            title: 'Auth for all SSO providers',
            description: 'Support any SAML or OIDC identity provider with a single integration',
          },
          {
            icon: <Users className="w-5 h-5" />,
            title: 'Complete User Management',
            description: 'Manage users and organizations, set policies, and support all auth types',
          },
          {
            icon: <Globe className="w-5 h-5" />,
            title: 'Social authentication',
            description: 'Sign in to your app with Microsoft, Google, and more',
          },
          {
            icon: <UserCheck className="w-5 h-5" />,
            title: 'AuthKit',
            description: 'Flexible authentication UI powered by WorkOS and Radix',
          },
        ]}
        media={
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sign in to Super App</h3>
                <div className="space-y-3 text-left">
                  <div>
                    <label className="text-xs text-muted-foreground">Email</label>
                    <div className="mt-1 px-3 py-2 bg-muted rounded-lg text-sm text-muted-foreground">
                      Your email address
                    </div>
                  </div>
                  <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-medium">
                    Continue
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    Don't have an account? <a href="#" className="text-primary">Get started</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* Feature Grid */}
      <FeatureGrid
        label="Additional Products"
        labelGradient="pink-purple"
        title="Everything you need to scale"
        subtitle="From authentication to audit logs, we've got you covered with enterprise-grade features."
        columns={3}
        className="bg-muted/30"
      >
        {[
          {
            icon: <Key className="w-5 h-5" />,
            title: 'Single Sign-On',
            description: 'Integrate your existing auth stack with any SAML or OIDC identity provider.',
          },
          {
            icon: <Users className="w-5 h-5" />,
            title: 'Directory Sync',
            description: 'Add user lifecycle management for SCIM and HRIS providers to your existing stack.',
          },
          {
            icon: <Building2 className="w-5 h-5" />,
            title: 'Admin Portal',
            description: 'Enable IT admins to have a self-serve onboarding experience.',
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: 'Audit Logs',
            description: 'Stream and store security events for compliance and debugging.',
          },
          {
            icon: <Lock className="w-5 h-5" />,
            title: 'Fine-grained Authorization',
            description: 'Implement role-based access control with our permissions API.',
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: 'Webhooks',
            description: 'Real-time event notifications for all account activity.',
          },
        ].map((feature, index) => (
          <FeatureCard
            key={index}
            icon={<IconBox icon={feature.icon} variant="gradient" color="purple" />}
            title={feature.title}
            description={feature.description}
            variant="bordered"
          />
        ))}
      </FeatureGrid>

      {/* Stats Section */}
      <StatsSection
        title="Trusted by thousands of companies worldwide"
        stats={[
          { value: '10M+', label: 'API Requests', description: 'per day' },
          { value: '99.99%', label: 'Uptime SLA', description: 'guaranteed' },
          { value: '500+', label: 'Enterprise Customers', description: 'and growing' },
          { value: '<50ms', label: 'Response Time', description: 'p95 latency' },
        ]}
        variant="bordered"
        columns={4}
      />

      {/* Testimonials */}
      <TestimonialGrid
        label="What our customers say"
        labelGradient="green-cyan"
        title="Loved by developers worldwide"
        subtitle="See what engineering teams are saying about building with our platform."
        columns={3}
        className="bg-muted/30"
      >
        {[
          {
            quote: "We went from zero to enterprise-ready SSO in just two days. The documentation is fantastic and the support team is incredibly responsive.",
            author: {
              name: 'Sarah Chen',
              title: 'CTO',
              company: 'TechStartup',
              avatar: (
                <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                  SC
                </div>
              ),
            },
            rating: 5,
          },
          {
            quote: "The API is beautifully designed. It feels like the engineers actually thought about the developer experience from day one.",
            author: {
              name: 'Marcus Johnson',
              title: 'Lead Engineer',
              company: 'ScaleUp Inc',
              avatar: (
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                  MJ
                </div>
              ),
            },
            rating: 5,
          },
          {
            quote: "Finally, an auth solution that doesn't make me want to pull my hair out. Clean, simple, and it just works.",
            author: {
              name: 'Emily Rodriguez',
              title: 'Founder',
              company: 'DevTools Co',
              avatar: (
                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                  ER
                </div>
              ),
            },
            rating: 5,
          },
        ].map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            rating={testimonial.rating}
            variant="bordered"
          />
        ))}
      </TestimonialGrid>

      {/* Pricing Section */}
      <PricingGrid
        id="pricing"
        label="Pricing"
        labelGradient="sunset"
        title="Simple, transparent pricing"
        subtitle="Start for free, then scale as you grow. No hidden fees."
        columns={3}
        toggle={{
          options: [
            { label: 'Monthly', value: 'monthly' },
            { label: 'Annual', value: 'annual', discount: '-20%' },
          ],
          defaultValue: 'annual',
        }}
      >
        <PricingCard
          name="Starter"
          description="Perfect for side projects and small teams"
          price="$0"
          priceDescription="Free forever"
          features={[
            { text: 'Up to 1,000 monthly active users', included: true },
            { text: 'Basic SSO (Google, GitHub)', included: true },
            { text: 'Community support', included: true },
            { text: 'Custom domains', included: false },
            { text: 'Audit logs', included: false },
            { text: 'SLA', included: false },
          ]}
          action={
            <NavButton variant="outline" href="#" className="w-full">
              Get started free
            </NavButton>
          }
        />
        <PricingCard
          name="Pro"
          description="For growing teams that need more"
          price="$49"
          priceDescription="per month, billed annually"
          popular
          features={[
            { text: 'Up to 10,000 monthly active users', included: true },
            { text: 'Enterprise SSO (SAML, OIDC)', included: true },
            { text: 'Priority support', included: true },
            { text: 'Custom domains', included: true },
            { text: 'Audit logs', included: true },
            { text: 'SLA', included: false },
          ]}
          action={
            <NavButton variant="primary" href="#" className="w-full">
              Start free trial
            </NavButton>
          }
        />
        <PricingCard
          name="Enterprise"
          description="For organizations with advanced needs"
          price="Custom"
          priceDescription="Contact us for pricing"
          features={[
            { text: 'Unlimited monthly active users', included: true },
            { text: 'All SSO providers', included: true },
            { text: 'Dedicated support', included: true },
            { text: 'Custom domains', included: true },
            { text: 'Audit logs', included: true },
            { text: '99.99% SLA', included: true },
          ]}
          action={
            <NavButton variant="outline" href="#" className="w-full">
              Contact sales
            </NavButton>
          }
        />
      </PricingGrid>

      {/* CTA Section */}
      <CTASection
        variant="card"
        title="Ready to get started?"
        description="Join thousands of companies building enterprise-ready applications with our platform."
        gradient="cyan-blue"
        actions={[
          { label: 'Start building for free', href: '#', variant: 'primary' },
          { label: 'Talk to sales', href: '#', variant: 'outline' },
        ]}
      />

      {/* Footer */}
      <Footer
        logo={
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span>Acme</span>
          </a>
        }
        description="Enterprise-ready authentication and user management for modern applications."
        sections={[
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '#' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Security', href: '#' },
              { label: 'Enterprise', href: '#' },
            ],
          },
          {
            title: 'Developers',
            links: [
              { label: 'Documentation', href: '#' },
              { label: 'API Reference', href: '#' },
              { label: 'SDKs', href: '#' },
              { label: 'Status', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Blog', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Contact', href: '#' },
            ],
          },
        ]}
        socialLinks={[
          { label: 'GitHub', href: '#', icon: <Github className="w-5 h-5" /> },
          { label: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
          { label: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
        ]}
        copyright={`© ${new Date().getFullYear()} Acme Inc. All rights reserved.`}
        bottomLinks={[
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' },
          { label: 'Cookie Settings', href: '#' },
        ]}
      />
    </div>
  );
}
