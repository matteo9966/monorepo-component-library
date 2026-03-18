# @monorepo-component-library/button

A reusable, accessible `Button` component for React applications.

## Installation

```bash
npm install @monorepo-component-library/button
```

> **Note:** `react` and `react-dom` ≥ 18 are required as peer dependencies.

## Usage

```tsx
import { Button } from '@monorepo-component-library/button';

function App() {
  return <Button variant="primary" size="md">Click me</Button>;
}
```

## Props

| Prop        | Type                                      | Default     | Description                          |
|-------------|-------------------------------------------|-------------|--------------------------------------|
| `variant`   | `'primary' \| 'secondary' \| 'outline'`  | `'primary'` | Visual style variant of the button   |
| `size`      | `'sm' \| 'md' \| 'lg'`                   | `'md'`      | Size of the button                   |
| `className` | `string`                                  | —           | Additional CSS classes to merge in   |
| `style`     | `React.CSSProperties`                     | —           | Inline styles                        |
| `disabled`  | `boolean`                                 | `false`     | Disables the button                  |
| `ref`       | `React.Ref<HTMLButtonElement>`            | —           | Forwarded ref to the button element  |
| `...rest`   | `ButtonHTMLAttributes<HTMLButtonElement>` | —           | All standard button HTML attributes  |

## CSS Classes

The component applies the following BEM-style classes for styling:

- `btn` — base class always present
- `btn--primary` / `btn--secondary` / `btn--outline` — variant class
- `btn--sm` / `btn--md` / `btn--lg` — size class

Bring your own CSS or a utility library (e.g. Tailwind) to style these classes.

## Accessibility

- Uses a native `<button>` element, so keyboard navigation and screen-reader support work out of the box.
- Supports all native `button` attributes including `aria-*`, `disabled`, and `type`.
- `ref` is forwarded to the underlying `<button>` for imperative focus management.

## Development

```bash
# build the package
npm run build

# build in watch mode
npm run dev

# typecheck
npm run typecheck
```
