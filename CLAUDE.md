# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`@aephonics/config` is a shared configuration package for web development that exports pre-configured ESLint and Prettier configs.

## Commands

```sh
bun lint
```

Runs TypeScript type checking and ESLint.

## Architecture

The package exports two configs from `index.mjs`:

- `eslint` — Flat ESLint configuration array
- `prettier` — Prettier options object

### ESLint Configuration

Defined in `src/eslint.mjs` as a flat config array with four presets:

| Preset                 | Files                        | Description                                       |
| ---------------------- | ---------------------------- | ------------------------------------------------- |
| `aephonics/base`       | `.js`, `.mjs`, `.ts`, `.tsx` | typescript-eslint parser with project service     |
| `aephonics/jsx`        | `.tsx`                       | React, React Hooks, and JSX accessibility plugins |
| `aephonics/typescript` | `.ts`, `.tsx`                | TypeScript-specific rules                         |
| `aephonics/astro`      | `.astro`                     | Astro-specific rules via astro-eslint-parser      |

Rule definitions in `src/eslint/`:

| File         | Purpose                               |
| ------------ | ------------------------------------- |
| `base.mjs`   | Core JavaScript rules                 |
| `format.mjs` | Stylistic formatting (@stylistic)     |
| `types.mjs`  | TypeScript rules                      |
| `react.mjs`  | React rules                           |
| `hooks.mjs`  | React Hooks rules                     |
| `a11y.mjs`   | Accessibility rules                   |
| `astro.mjs`  | Astro rules                           |

### Prettier Configuration

Defined in `src/prettier.mjs` with key settings: 4-space indentation, single quotes, trailing commas, 100-character print width.

## Usage

Consumer projects import and extend the config in `eslint.config.mjs`:

```javascript
import { eslint } from '@aephonics/config';

export default eslint;
```

The `eslint.config.mjs` in this repo demonstrates this pattern.
