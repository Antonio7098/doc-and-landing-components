import { type DocsConfig } from '../config/docs.config';

export const exampleDocsConfig: DocsConfig = {
  name: 'Documentation Template',
  description: 'A beautiful, modular documentation template',
  logo: {
    text: 'Docs',
  },
  github: 'https://github.com/example/docs',
  search: {
    enabled: true,
    placeholder: 'Search...',
  },
  navigation: [
    {
      title: 'Getting Started',
      children: [
        { title: 'Introduction', href: '/' },
        { title: 'Installation', href: '/getting-started/installation' },
        { title: 'Quick Start', href: '/getting-started/quickstart' },
      ],
    },
    {
      title: 'Components',
      children: [
        { title: 'Overview', href: '/components' },
        { title: 'Button', href: '/components/button' },
        { title: 'Badge', href: '/components/badge' },
        { title: 'Callout', href: '/components/callout', badge: 'New' },
        { title: 'Code Block', href: '/components/code-block' },
      ],
    },
    {
      title: 'Guides',
      children: [
        { title: 'Customization', href: '/guides/customization' },
        { title: 'Theming', href: '/guides/theming' },
        { title: 'Markdown', href: '/guides/markdown' },
      ],
    },
    {
      title: 'API Reference',
      children: [
        { title: 'Configuration', href: '/api/configuration' },
        { title: 'Components', href: '/api/components' },
      ],
    },
  ],
};

export const exampleContent = {
  home: `
## Welcome to the Documentation Template

This is a **beautiful, modular documentation template** built with React, TypeScript, and Tailwind CSS. It's designed to be highly customizable and easy to use.

### Features

- **Dark/Light Mode** — Automatic theme detection with manual toggle
- **Responsive Design** — Works beautifully on all screen sizes
- **Markdown Support** — Write your docs in Markdown with full GFM support
- **Code Highlighting** — Syntax highlighting for 100+ languages
- **Search** — Built-in search functionality
- **Table of Contents** — Auto-generated from headings
- **Modular Architecture** — Easy to customize and extend

### Quick Example

\`\`\`typescript
import { DocsProvider, DocPage } from 'documentation-template';
import { myDocsConfig } from './config';

function App() {
  return (
    <DocsProvider config={myDocsConfig}>
      <DocPage content={markdownContent} />
    </DocsProvider>
  );
}
\`\`\`

### Getting Started

1. Install the template
2. Configure your navigation
3. Add your markdown content
4. Deploy!
`,

  installation: `
# Installation

This guide covers how to install and configure UCP for your project.

## Requirements

=== "Rust"
    - **Rust**: 1.70 or later
    - **Cargo**: Latest stable version

=== "Python"
    - **Python**: 3.8 or later
    - **pip**: Latest stable version

=== "JavaScript"
    - **Node.js**: 16 or later
    - **npm**: Latest stable version

## Adding UCP to Your Project

## Install Dependencies

\`\`\`bash
npm install
\`\`\`

## Project Structure

\`\`\`
src/
├── components/
│   ├── ui/          # Base UI components
│   ├── docs/        # Documentation-specific components
│   ├── layout/      # Layout components
│   └── pages/       # Page templates
├── config/          # Configuration types
├── contexts/        # React contexts
├── content/         # Your documentation content
├── lib/             # Utilities
└── styles/          # Global styles
\`\`\`

## Configuration

Create a configuration file for your documentation:

\`\`\`typescript
import { DocsConfig } from './config/docs.config';

export const myDocsConfig: DocsConfig = {
  name: 'My Project',
  description: 'Documentation for my project',
  logo: {
    text: 'MyProject',
  },
  navigation: [
    {
      title: 'Getting Started',
      children: [
        { title: 'Introduction', href: '/' },
        { title: 'Installation', href: '/installation' },
      ],
    },
  ],
};
\`\`\`
`,

  quickstart: `
# Quick Start

Build your first documentation page in 5 minutes.

## Step 1: Create Your Config

\`\`\`typescript
// src/config/my-docs.ts
import { DocsConfig } from '../config/docs.config';

export const config: DocsConfig = {
  name: 'My Docs',
  description: 'My awesome documentation',
  navigation: [
    {
      title: 'Docs',
      children: [
        { title: 'Home', href: '/' },
      ],
    },
  ],
};
\`\`\`

## Step 2: Add Content

Create markdown files for your documentation:

\`\`\`markdown
# Welcome

This is my documentation.

## Features

- Feature 1
- Feature 2
- Feature 3
\`\`\`

## Step 3: Render Pages

\`\`\`tsx
import { DocPage } from './components/pages';

function MyDocPage() {
  return (
    <DocPage
      content={myMarkdownContent}
      title="Welcome"
      description="Getting started with my project"
    />
  );
}
\`\`\`

## Next Steps

- Learn about [customization](/guides/customization)
- Explore the [component library](/components)
- Read the [API reference](/api/configuration)

## Framework Examples

Pick the instructions for your preferred framework:

=== "Next.js"
    - **Command**: npx create-next-app docs-demo --ts
    - **Docs Page**: pages/docs.tsx

=== "Vite"
    - **Command**: npm create vite@latest docs-demo -- --template react-ts
    - **Docs Page**: src/App.tsx

=== "Remix"
    - **Command**: npx create-remix@latest
    - **Docs Page**: app/routes/docs.tsx
`,

  components: `# Components

The documentation template includes a comprehensive set of components.

## UI Components

### Button

A versatile button component with multiple variants.

\`\`\`tsx
import { Button } from './components/ui';

<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
\`\`\`

### Badge

Display status or labels.

\`\`\`tsx
import { Badge } from './components/ui';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
\`\`\`

## Documentation Components

### Callout

Highlight important information.

\`\`\`tsx
import { Callout } from './components/docs';

<Callout variant="info">
  This is an informational callout.
</Callout>

<Callout variant="warning" title="Be Careful">
  This action cannot be undone.
</Callout>
\`\`\`

### Code Block

Display code with syntax highlighting.

\`\`\`tsx
import { CodeBlock } from './components/docs';

<CodeBlock
  code="const hello = 'world';"
  language="typescript"
  filename="example.ts"
  showLineNumbers
/>
\`\`\`

## Layout Components

- **DocsLayout** — Main documentation layout with sidebar
- **Header** — Top navigation bar
- **Sidebar** — Navigation sidebar
- **SearchDialog** — Search modal

## Page Components

- **DocPage** — Standard documentation page
- **HomePage** — Landing page with features grid
`,

  customization: `
# Customization

Learn how to customize the documentation template.

## Theme Colors

All colors are defined using CSS custom properties in \`src/styles/index.css\`:

\`\`\`css
:root {
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  /* ... more colors */
}

.dark {
  --primary: 217 91% 60%;
  --background: 222 47% 6%;
  /* ... dark mode colors */
}
\`\`\`

## Typography

The template uses Inter for body text and JetBrains Mono for code:

\`\`\`css
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
}
\`\`\`

## Component Variants

Components use a variant pattern for easy customization:

\`\`\`typescript
const buttonVariants: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  // Add your own variants here
};
\`\`\`

## Adding New Components

1. Create your component in the appropriate directory
2. Export it from the index file
3. Use the \`cn()\` utility for class merging
4. Follow the existing patterns for consistency
`,

  theming: `
# Theming

The template supports light and dark modes out of the box.

## How It Works

Theme state is managed by the \`DocsContext\`:

\`\`\`typescript
const { theme, setTheme } = useDocs();

// Toggle theme
setTheme(theme === 'dark' ? 'light' : 'dark');
\`\`\`

## CSS Variables

Colors are defined as HSL values without the \`hsl()\` wrapper:

\`\`\`css
--primary: 221 83% 53%;  /* hue saturation lightness */
\`\`\`

This allows for easy opacity modifications:

\`\`\`css
background: hsl(var(--primary) / 0.5);  /* 50% opacity */
\`\`\`

## Customizing Colors

Edit the CSS variables in \`src/styles/index.css\`:

| Variable | Description |
|----------|-------------|
| \`--background\` | Page background |
| \`--foreground\` | Default text color |
| \`--primary\` | Primary brand color |
| \`--secondary\` | Secondary color |
| \`--muted\` | Muted backgrounds |
| \`--accent\` | Accent/hover states |
| \`--border\` | Border color |
| \`--code\` | Code block background |

## System Preference

The template automatically detects system color scheme preference and persists user choice to localStorage.
`,
};

export const searchResults = [
  { title: 'Introduction', href: '/', section: 'Getting Started', excerpt: 'Welcome to the documentation template' },
  { title: 'Installation', href: '/getting-started/installation', section: 'Getting Started', excerpt: 'Get started with the documentation template' },
  { title: 'Quick Start', href: '/getting-started/quickstart', section: 'Getting Started', excerpt: 'Build your first documentation page' },
  { title: 'Components', href: '/components', section: 'Components', excerpt: 'Comprehensive set of UI components' },
  { title: 'Customization', href: '/guides/customization', section: 'Guides', excerpt: 'Learn how to customize the template' },
  { title: 'Theming', href: '/guides/theming', section: 'Guides', excerpt: 'Light and dark mode support' },
];
