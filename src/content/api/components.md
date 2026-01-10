---
title: Components API
description: API reference for documentation components
order: 2
---

# Components API

API reference for documentation components.

## DocPage

Main documentation page component.

```typescript
interface DocPageProps {
  content: string;
  title?: string;
  description?: string;
}
```

## Callout

Information callout component.

```typescript
interface CalloutProps {
  variant?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: React.ReactNode;
}
```

## CodeBlock

Syntax-highlighted code block component.

```typescript
interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}
```

## MarkdownRenderer

Markdown rendering component with full GFM support.

```typescript
interface MarkdownRendererProps {
  content: string;
  className?: string;
}
```

## TableOfContents

Auto-generated table of contents from headings.

```typescript
interface TableOfContentsProps {
  content: string;
}
```
