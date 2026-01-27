---
title: Components
description: The documentation template includes a comprehensive set of components
order: 2
---

# Components

The documentation template includes a comprehensive set of components.

## UI Components

### Button

A versatile button component with multiple variants.

=== "TypeScript"
    ```tsx
    import { Button } from './components/ui';

    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="outline">Outline</Button>
    ```

=== "Python"
    ```python
    from docs_ui import Button

    Button(variant="default", children="Default")
    Button(variant="secondary", children="Secondary")
    Button(variant="ghost", children="Ghost")
    Button(variant="outline", children="Outline")
    ```

### Badge

Display status or labels.

```tsx
import { Badge } from './components/ui';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
```

## Documentation Components

### Callout

Highlight important information.

```tsx
import { Callout } from './components/docs';

<Callout variant="info">
  This is an informational callout.
</Callout>

<Callout variant="warning" title="Be Careful">
  This action cannot be undone.
</Callout>
```

### Code Block

Display code with syntax highlighting.

=== "TypeScript"
    ```tsx
    import { CodeBlock } from './components/docs';

    <CodeBlock
      code="const hello = 'world';"
      language="typescript"
      filename="example.ts"
      showLineNumbers
    />
    ```

=== "Python"
    ```python
    from docs_components import CodeBlock

    CodeBlock(
        code="print('hello, world')",
        language="python",
        filename="example.py",
        show_line_numbers=True,
    )
    ```

## Layout Components

- **DocsLayout** — Main documentation layout with sidebar
- **Header** — Top navigation bar
- **Sidebar** — Navigation sidebar
- **SearchDialog** — Search modal

## Page Components

- **DocPage** — Standard documentation page
- **HomePage** — Landing page with features grid
