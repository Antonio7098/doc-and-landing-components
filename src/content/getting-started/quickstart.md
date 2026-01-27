---
title: Quick Start
description: Build your first documentation page in 5 minutes
order: 2
---

# Quick Start

Build your first documentation page in 5 minutes.

## Step 1: Create Your Config

=== "TypeScript"
    ```typescript
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
    ```

=== "Python"
    ```python
    # config/docs_config.py
    docs_config = {
        "name": "My Docs",
        "description": "My awesome documentation",
        "navigation": [
            {
                "title": "Docs",
                "children": [
                    {"title": "Home", "href": "/"},
                ],
            }
        ],
    }
    ```

## Step 2: Add Content

Create markdown files for your documentation in `src/content/`:

```markdown
---
title: Welcome
description: Getting started
order: 1
---

# Welcome

This is my documentation.

## Features

- Feature 1
- Feature 2
- Feature 3
```

## Step 3: Run the Dev Server

```bash
npm run dev
```

## Next Steps

- Learn about [customization](../guides/customization.md)
- Explore the [component library](../components.md)
- Read the [API reference](../api/configuration.md)

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
