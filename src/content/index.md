---
title: Welcome to Documentation Template
description: A beautiful, modular documentation template built with React, TypeScript, and Tailwind CSS
order: 1
---

# Welcome to the Documentation Template

This is a **beautiful, modular documentation template** built with React, TypeScript, and Tailwind CSS. It's designed to be highly customizable and easy to use.

## Features

- **Dark/Light Mode** — Automatic theme detection with manual toggle
- **Responsive Design** — Works beautifully on all screen sizes
- **Markdown Support** — Write your docs in Markdown with full GFM support
- **Code Highlighting** — Syntax highlighting for 100+ languages
- **Search** — Built-in search functionality
- **Table of Contents** — Auto-generated from headings
- **Modular Architecture** — Easy to customize and extend

## Quick Example

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

## Getting Started

1. Install the template
2. Configure your navigation
3. Add your markdown content to `src/content/`
4. Deploy!
