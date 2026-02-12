---
description: Use shadcn/ui components whenever possible. Only create custom components when shadcn does not provide what is needed.
---

# Shadcn/UI Components

This project uses **shadcn/ui** as its component library. Always prefer shadcn components over creating custom ones from scratch.

## Project Configuration

| Setting      | Value                        |
| ------------ | ---------------------------- |
| Style        | `new-york`                   |
| Icon Library | `lucide`                     |
| RSC          | `true`                       |
| Tailwind CSS | v4 (CSS variables)           |
| Base Color   | `neutral`                    |
| UI Directory | `components/ui/`             |
| Utils        | `lib/utils.ts` (`cn` helper) |
| Config File  | `components.json`            |

## Rules

### 1. Always Prefer Shadcn Components

Before creating any new UI component, **check if shadcn/ui already provides it**. Common components include:

| Category         | Components                                                             |
| ---------------- | ---------------------------------------------------------------------- |
| **Inputs**       | Button, Input, Textarea, Checkbox, Radio Group, Select, Switch, Slider |
| **Layout**       | Card, Separator, Accordion, Tabs, Collapsible, Resizable               |
| **Overlay**      | Dialog, Drawer, Dropdown Menu, Context Menu, Popover, Tooltip, Sheet   |
| **Navigation**   | Navigation Menu, Breadcrumb, Pagination, Sidebar, Menubar              |
| **Feedback**     | Alert, Alert Dialog, Badge, Progress, Skeleton, Sonner (Toast)         |
| **Data Display** | Avatar, Table, Calendar, Carousel, Chart, Data Table, Hover Card       |
| **Forms**        | Form (react-hook-form), Label, Toggle, Toggle Group, Command (cmdk)    |

Full list: https://ui.shadcn.com/docs/components

### 2. How to Add a Shadcn Component

Use the CLI with **pnpm** (see `use-pnpm` skill):

```bash
pnpm dlx shadcn@latest add <component-name>
```

Examples:

```bash
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add card input label
```

> **Note:** Never manually copy component code from the shadcn website. Always use the CLI to ensure correct installation and dependency resolution.

### 3. When to Create Custom Components

Only create a custom component when **ALL** of the following are true:

1. No shadcn component covers the needed functionality
2. No combination of shadcn components can achieve the desired result
3. The component is not a simple composition/wrapper of existing shadcn components

If only styling or minor behavior changes are needed, **extend** the shadcn component instead of creating a new one.

### 4. How to Extend Shadcn Components

When you need to customize a shadcn component, do it by:

- **Adding variants** to the existing component using `cva` (class-variance-authority)
- **Wrapping** the shadcn component in a project-specific component with additional props
- **Composing** multiple shadcn components together

Example — wrapping a shadcn Button:

```tsx
import {
  Button as ShadcnButton,
  type ButtonProps,
} from '@/components/ui/button';

export function PrimaryButton(props: ButtonProps) {
  return <ShadcnButton variant="default" size="lg" {...props} />;
}
```

### 5. Component Organization

| Type                 | Location             | Example                    |
| -------------------- | -------------------- | -------------------------- |
| Shadcn UI primitives | `components/ui/`     | `button.tsx`, `dialog.tsx` |
| Shared/composite     | `components/shared/` | `section-header.tsx`       |
| Layout components    | `components/layout/` | `navbar.tsx`, `footer.tsx` |
| Feature components   | `features/<name>/`   | `features/marketing/`      |

> **Never** edit files in `components/ui/` unless you are adding variants via `cva`. If you need different behavior, create a wrapper in `components/shared/` or the relevant feature folder.

### 6. Styling Guidelines

- Always use the `cn()` utility from `@/lib/utils` for conditional class merging
- Use the project's CSS variables (`--primary`, `--secondary`, etc.) — never hardcode colors
- Follow the shadcn pattern of using `cva` for variant definitions
- Use Tailwind v4 classes compatible with the project setup

### 7. Icons

Use **Lucide React** icons (`lucide-react`), which is the configured icon library:

```tsx
import { Sun, Moon, Menu } from 'lucide-react';
```

Do **not** install or use other icon libraries unless explicitly requested.
