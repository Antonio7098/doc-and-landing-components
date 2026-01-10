---
title: Configuration
description: Learn how to configure the documentation template
order: 1
---

# Configuration

Learn how to configure the documentation template.

## Basic Configuration

\`\`\`typescript
import { DocsConfig } from '../config/docs.config';

export const myDocsConfig: DocsConfig = {
  name: 'My Documentation',
  description: 'Description of your project',
  logo: {
    text: 'My Docs',
  },
  github: 'https://github.com/your-username/repo',
  search: {
    enabled: true,
    placeholder: 'Search documentation...',
  },
  navigation: [
    {
      title: 'Getting Started',
      children: [
        { title: 'Introduction', href: '/' },
        { title: 'Installation', href: '/getting-started/installation' },
      ],
    },
  ],
  footer: {
    links: [
      { title: 'GitHub', href: 'https://github.com' },
      { title: 'Twitter', href: 'https://twitter.com' },
    ],
    copyright: '© 2025 Your Project',
  },
};
\`\`\`

## Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `name` | `string` | Name of your documentation site |
| `description` | `string` | Site description for SEO |
| `logo` | `object` | Logo configuration (text or images) |
| `github` | `string` | GitHub repository URL |
| `search` | `object` | Search configuration |
| `navigation` | `NavItem[]` | Navigation structure |
| `footer` | `object` | Footer links and copyright |
