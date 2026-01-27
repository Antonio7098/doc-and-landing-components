---
title: Customization
description: Learn how to customize the documentation template
order: 1
---

# Customization

Learn how to customize the documentation template.

## Theme Colors

All colors are defined using CSS custom properties in `src/styles/index.css`:

```css
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
```

## Typography

The template uses Inter for body text and JetBrains Mono for code:

```css
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
}
```

## Component Variants

Components use a variant pattern for easy customization:

```typescript
const buttonVariants: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  // Add your own variants here
};
```

## Adding New Components

1. Create your component in the appropriate directory
2. Export it from the index file
3. Use the `cn()` utility for class merging
4. Follow the existing patterns for consistency
