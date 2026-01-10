# Documentation Template

A beautiful, modular documentation template library for React. Simply pass your markdown content and get a full-featured documentation site.

## Installation

```bash
npm install documentation-template
```

## Usage

```tsx
import { Docs, loadDocs } from 'documentation-template';
import 'documentation-template/style.css';

// 1. Load your markdown files
const modules = import.meta.glob('./docs/**/*.md', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});

// 2. Parse markdown content
const docs = loadDocs({ modules, contentPath: './docs/' });

// 3. Configure your docs
const config = {
  name: 'My Documentation',
  description: 'Beautiful documentation for my project',
  logo: { text: 'MyDocs' },
  search: {
    enabled: true,
    placeholder: 'Search...',
  },
};

// 4. Render
function App() {
  return <Docs config={config} docs={docs} />;
}
```

## Features

- **Markdown Support** - Write docs in Markdown with full GFM support
- **Dark/Light Mode** - Automatic theme detection with manual toggle
- **Search** - Built-in search functionality
- **Table of Contents** - Auto-generated from headings
- **Code Highlighting** - Syntax highlighting for 100+ languages
- **Responsive Design** - Works on all screen sizes
- **Smooth Scrolling** - Smooth navigation between pages

## Configuration

```tsx
interface DocsConfig {
  name: string;
  description: string;
  logo?: {
    text?: string;
    light?: string;
    dark?: string;
  };
  github?: string;
  search?: {
    enabled: boolean;
    placeholder?: string;
  };
  footer?: {
    links?: Array<{ title: string; href: string }>;
    copyright?: string;
  };
}
```

## Markdown Frontmatter

Add metadata to your markdown files:

```markdown
---
title: Getting Started
description: Learn how to get started
order: 1
---

# Getting Started

Your content here...
```

## Components

All components are also exported for custom use:

```tsx
import { 
  MarkdownRenderer, 
  Callout, 
  CodeBlock, 
  Button, 
  Badge 
} from 'documentation-template';
```
