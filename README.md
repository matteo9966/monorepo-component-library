# Monorepo Component Library

A React component library managed as an npm workspaces monorepo. Components live under `packages/`, each as an independently versioned package.

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [`@monorepo-component-library/button`](./packages/button) | ![npm](https://img.shields.io/npm/v/@monorepo-component-library/button) | Accessible Button component |

## Tech Stack

| Tool | Purpose |
|------|---------|
| [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) | Monorepo management |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe component authoring |
| [tsup](https://tsup.egoist.dev/) | CJS + ESM builds with type declarations |
| [Storybook](https://storybook.js.org/) | Component development and visual documentation |
| [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) | Unit and component testing |
| [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | Linting and formatting |
| [Changesets](https://github.com/changesets/changesets) | Versioning and changelogs |

## Getting Started

```bash
# Install all dependencies
npm install

# Start Storybook
npm run dev

# Run tests
npm test

# Typecheck
npm run typecheck

# Lint
npm run lint

# Build all packages
npm run build

# Build Storybook
npm run build-storybook
```

## Adding a New Component Package

1. Create a new directory under `packages/<name>/` following this layout:

```
packages/<name>/
├── package.json          # name, version, main/module/exports/types
├── tsconfig.json         # extends ../../tsconfig.base.json
├── tsup.config.ts        # bundler config
├── README.md             # usage, props table, examples
└── src/
    ├── index.ts          # re-exports public API
    ├── <Component>.tsx   # component source
    └── <Component>.stories.tsx  # stories
```

2. In `package.json`, declare `react` and `react-dom` as `peerDependencies`.
3. Run `npm install` from the repo root to link the new workspace package.
4. Add a Changeset for the initial release: `npm run changeset`.

## Versioning Policy

Packages are versioned **independently** — each package has its own version number and changelog. Changes to the public API (components, props, exports) must include a Changeset.

```bash
# Create a changeset
npm run changeset

# Apply changeset versions
npm run version-packages

# Publish to npm
npm run release
```

## CI

The GitHub Actions workflow runs on every push and pull request to `main`:

1. `npm run typecheck` — TypeScript type check
2. `npm run lint` — ESLint
3. `npm test` — Vitest suite
4. `npm run build` — All package builds
5. `npm run build-storybook` — Storybook build
6. `npx changeset status` — Ensure changesets are up to date

## Project Conventions

- `react` and `react-dom` must **never** be bundled — they are always `peerDependencies`.
- All dev/build/test tooling lives at the **root** as `devDependencies`.
- Use `forwardRef` on all components and preserve `className` / `style` props.
- Avoid `any` — use explicit prop types.
- No default exports from component packages (use named exports).


## Reference guide 

https://medium.com/@anandkumar.code/how-a-monorepo-pnpm-and-changesets-transformed-my-multi-package-workflow-7c1771bba898

to publish a package

npm publish --access public