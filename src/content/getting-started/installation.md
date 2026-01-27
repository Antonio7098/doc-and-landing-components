---
title: Installation
description: Get started with the documentation template in minutes
order: 1
---

# Installation

Get started with the documentation template in minutes.

## Prerequisites

- Node.js 18+
- npm or yarn

## Install Dependencies

```bash
npm install
```

## Project Structure

```
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
```

## Configuration

Create a configuration file for your documentation:

```typescript
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
        { title: 'Installation', href: '/getting-started/installation' },
      ],
    },
  ],
};
```
