# Documentation Template

A beautiful, modular documentation template built with React, TypeScript, and Tailwind CSS.

## Features

- **Dark/Light Mode** — Automatic theme detection with manual toggle
- **Responsive Design** — Works beautifully on all screen sizes
- **Markdown Support** — Full GFM support with syntax highlighting
- **Code Highlighting** — Syntax highlighting for 100+ languages
- **Search** — Built-in search with keyboard shortcuts (⌘K)
- **Table of Contents** — Auto-generated from headings
- **Modular Architecture** — Clean component architecture following SOLID principles

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # Base UI components (Button, Badge, Icon)
│   ├── docs/        # Documentation components (CodeBlock, Callout, TOC)
│   ├── layout/      # Layout components (Header, Sidebar, DocsLayout)
│   └── pages/       # Page templates (DocPage, HomePage)
├── config/          # Configuration types (DocsConfig)
├── contexts/        # React contexts (DocsContext)
├── content/         # Your documentation content
├── lib/             # Utilities (cn)
└── styles/          # Global styles and CSS variables
```

## Configuration

Create a configuration file for your documentation:

```typescript
import { DocsConfig } from './config/docs.config';

export const myDocsConfig: DocsConfig = {
  name: 'My Project',
  description: 'Documentation for my project',
  logo: { text: 'MyProject' },
  github: 'https://github.com/user/repo',
  search: { enabled: true },
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
```

## Customization

### Theme Colors

All colors use CSS custom properties in `src/styles/index.css`:

```css
:root {
  --primary: 221 83% 53%;
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
}

.dark {
  --primary: 217 91% 60%;
  --background: 222 47% 6%;
}
```

### Components

Components follow a variant pattern for easy customization:

```typescript
const buttonVariants: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  ghost: 'hover:bg-accent',
};
```

## Usage

### DocPage

Render a documentation page with markdown content:

```tsx
<DocPage
  content={markdownContent}
  title="Getting Started"
  description="Learn how to use the template"
  prevPage={{ title: 'Home', href: '/' }}
  nextPage={{ title: 'Installation', href: '/install' }}
/>
```

### HomePage

Create a landing page with features:

```tsx
<HomePage
  title="My Documentation"
  description="Beautiful docs for your project"
  primaryAction={{ label: 'Get Started', href: '/start' }}
  features={[
    { title: 'Feature 1', description: '...', icon: <Icon /> },
  ]}
/>
```

### Callout

Highlight important information:

```tsx
<Callout variant="warning" title="Important">
  This action cannot be undone.
</Callout>
```

### CodeBlock

Display code with syntax highlighting:

```tsx
<CodeBlock
  code="const x = 1;"
  language="typescript"
  filename="example.ts"
  showLineNumbers
/>
```

## License

MIT
