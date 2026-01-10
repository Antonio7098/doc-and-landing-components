# Documentation Template - Usage Example

This is a minimal example of how to use the documentation-template library.

## Installation

```bash
npm install documentation-template react react-dom react-router-dom
```

## Basic Usage

```tsx
import { Docs, loadDocs } from 'documentation-template';
import 'documentation-template/style.css';

function App() {
  // Load your markdown files
  const modules = import.meta.glob('./docs/**/*.md', { 
    query: '?raw', 
    import: 'default', 
    eager: true 
  });

  // Parse markdown content with frontmatter
  const docs = loadDocs({ modules, contentPath: './docs/' });

  // Configure your documentation site
  const config = {
    name: 'My Project Docs',
    description: 'Beautiful documentation for my project',
    logo: { text: 'MyDocs' },
    github: 'https://github.com/username/repo',
    search: {
      enabled: true,
      placeholder: 'Search...',
    },
  };

  return <Docs config={config} docs={docs} />;
}

export default App;
```

## Content Structure

Your markdown files should be organized like this:

```
docs/
├── index.md              # Home page
├── getting-started/
│   ├── installation.md
│   └── quickstart.md
├── components/
│   └── overview.md
└── api/
    └── configuration.md
```

## Markdown Frontmatter

Each markdown file can have frontmatter:

```markdown
---
title: Getting Started
description: Learn how to get started
order: 1
---

# Getting Started

Your content here...
```

## Running in Production

After installing dependencies, build your app:

```bash
npm run build
npm run preview
```

## Library Build

To build this template as a library:

```bash
npm run build:lib
```

This creates a `dist/` folder with:
- `index.js` - The library bundle
- `index.css` - Styles
- `index.d.ts` - TypeScript definitions

You can then publish it to npm or use it locally.
