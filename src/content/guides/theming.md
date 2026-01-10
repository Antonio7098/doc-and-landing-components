---
title: Theming
description: The template supports light and dark modes out of the box
order: 2
---

# Theming

The template supports light and dark modes out of the box.

## How It Works

Theme state is managed by the `DocsContext`:

\`\`\`typescript
const { theme, setTheme } = useDocs();

// Toggle theme
setTheme(theme === 'dark' ? 'light' : 'dark');
\`\`\`

## CSS Variables

Colors are defined as HSL values without the `hsl()` wrapper:

\`\`\`css
--primary: 221 83% 53%;  /* hue saturation lightness */
\`\`\`

This allows for easy opacity modifications:

\`\`\`css
background: hsl(var(--primary) / 0.5);  /* 50% opacity */
\`\`\`

## Customizing Colors

Edit the CSS variables in `src/styles/index.css`:

| Variable | Description |
|----------|-------------|
| `--background` | Page background |
| `--foreground` | Default text color |
| `--primary` | Primary brand color |
| `--secondary` | Secondary color |
| `--muted` | Muted backgrounds |
| `--accent` | Accent/hover states |
| `--border` | Border color |
| `--code` | Code block background |

## System Preference

The template automatically detects system color scheme preference and persists user choice to localStorage.
