---
---
description: "Repo-level Copilot instructions for a React component monorepo. Load when editing files under `packages/**`, Storybook, or workspace-level config."
applyTo: 'packages/**, .storybook/**, .changeset/**, package.json'
---

This file documents conventions and best practices for contributors and for GitHub Copilot when working in this repository.

Project summary
- Project type: Monorepo of React component packages.
- Packages location: All components live under `packages/` and each component is a separate workspace package.
- Workspace policy: Root `package.json` must include `workspaces: ["packages/*"]` (or equivalent `pnpm-workspace.yaml`).
- Storybook: There is a centralized Storybook at the repo root that loads stories from all packages.

Package layout and expectations
- Each package must follow this layout:
	- `packages/<package-name>/package.json` — `name`, `version`, `main`/`module`/`exports`, `types`, `peerDependencies`.
	- `packages/<package-name>/src/index.ts` or `src/index.tsx` — package entrypoint.
	- `packages/<package-name>/src/<Component>.tsx` — component source.
	- `packages/<package-name>/src/<Component>.stories.tsx` — Storybook stories next to components.
	- `packages/<package-name>/README.md` — short usage, examples, and props table.

Dependency rules
- `react` and `react-dom` MUST be declared as `peerDependencies` in component packages; put `react` devDependencies at the repo root for local development.
- Runtime dependencies belong to the package; build/test/dev tools belong at the root as devDependencies to ensure deduping and faster installs.

TypeScript and builds
- Use a root `tsconfig.base.json` extended by per-package `tsconfig.json` files.
- Prefer explicit prop types; avoid `any`. Use `forwardRef` and preserve `className`/`style` props where applicable.
- Choose a consistent bundler (Tsup/Rollup/Vite). Do NOT bundle `react`/`react-dom` into package builds.
- Each package `package.json` should include `main` (CJS), `module` (ESM), and `types` entries and a build script.

Linting, formatting, and testing
- Centralize `ESLint` and `Prettier` configs at the root. Use `eslint-plugin-react` and `eslint-plugin-react-hooks` and TypeScript-aware parser.
- Centralize test runner config (Jest or Vitest) at the root and run per-package tests as part of CI.

Storybook
- Keep a single Storybook config in `.storybook/` at the repo root. Configure `main.*` to load stories from `packages/*/src/**/*.stories.*`.
- Keep common decorators and global preview settings in `.storybook/preview.*` so packages can reuse them.

Versioning and publishing (Changesets)
- Use Changesets to manage changelogs and releases for packages. Recommended for multi-package repos to safely control versions and changelogs.
- Add Changesets devDependencies at the root with the following command (run locally or in CI setup):

```bash
npm add -D @changesets/cli @changesets/changelog-github
```

- After installing, run `npx changeset init` to create the `.changeset` folder and `config.json`.
- Default recommendation: independent versioning for packages (one Changeset per public API change). If you prefer single-version bumps across all packages, document that policy in the root README and `.changeset/config.json`.

Guidance for contributors & Copilot
- When scaffolding a new component package, create `packages/<name>` using the package layout above, add stories, and include an explanatory `README.md`.
- Include a Changeset for any change that affects a public API (patch/minor/major) using `npx changeset`.
- Copilot should prefer typed props, `forwardRef`, explicit `className`/`style` support, and avoid adding `react` as a runtime dependency in packages.
- For code suggestions that add dependencies, recommend adding dev/build/test dependencies at the root.

PR checklist (enforced by maintainers / CI):
- Typecheck passes (`npm run typecheck`).
- Lint passes (`npm run lint`).
- Tests pass (`npm test` or `npm run test`).
- Storybook builds (`npm run build-storybook`).
- A Changeset is included for public API changes.

Examples of useful root scripts for `package.json`:
- `dev` — runs Storybook (e.g. `start-storybook`).
- `build` — builds all packages (scripts can call workspace package builds).
- `lint` — lints the entire repo.
- `typecheck` — runs `tsc --noEmit` across the repo.
- `changeset` — runs the Changesets CLI.

Helpful notes
- ONLY USE NPM WORKSPACES.
- Document your chosen versioning policy (independent vs fixed) in the README and `.changeset/config.json`.
- Use CI to run lint, typecheck, tests, and `npx changeset status` on PRs.

Where Copilot should be conservative
- Do not modify packaging `exports`, `main`, or `types` fields without maintainer review.
- Do not add or upgrade core dependencies like React without coordinating with maintainers.

If you need scaffolding
- If requested, create a package scaffold, Storybook configuration, and an initial `.changeset/config.json` and commit them in a PR.


End of instructions.