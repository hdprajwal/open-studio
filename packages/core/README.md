# @open-studio/core

Runtime and CLI for [open-studio](https://github.com/hdprajwal/open-studio) — a React-based slide framework where you write slides and the framework handles the Vite/React stack, layout, navigation, hot reload, and fullscreen play mode.

## Install

```bash
pnpm add @open-studio/core
```

Most users get this installed automatically by running `npx @open-studio/cli init`. Use this package directly only if you're wiring up an existing workspace by hand.

## What's inside

- **Runtime** — home page, slide viewer, thumbnail rail, keyboard navigation, and fullscreen presenter mode. Every slide renders into a fixed **1920×1080** canvas; the framework scales it.
- **Vite plugin** — discovers `slides/<id>/index.{tsx,jsx,ts,js}`, exposes them via virtual modules, and reloads when slides are added or removed.
- **CLI** — `open-studio dev | build | preview` so workspaces never need to touch Vite, React, or tsconfig directly.

## CLI

Once installed, the `open-studio` bin is available in the workspace:

| Command | Description |
| --- | --- |
| `open-studio dev` | Start the dev server. Flags: `-p, --port <port>`, `--host [host]`, `--open`. |
| `open-studio build` | Build a static site. Flags: `--out-dir <dir>` (defaults to `dist`). |
| `open-studio preview` | Preview the production build. Flags: `-p, --port <port>`, `--host [host]`, `--open`. |

## Config

Create `open-studio.config.ts` in the workspace root (all fields optional):

```ts
import type { OpenStudioConfig } from '@open-studio/core';

const openStudioConfig: OpenStudioConfig = {
  slidesDir: 'slides',
  port: 5173,
};

export default openStudioConfig;
```

### Hosting under a subpath

Set `base` to deploy the built site under a sub-directory (intranet folders, GitHub Pages project sites, reverse proxies). Use a leading and trailing slash:

```ts
const openStudioConfig: OpenStudioConfig = {
  base: '/my-slides/',
};
```

The value is passed straight to Vite's `base` and to React Router's `basename`, so client-side navigation matches the deployed path.

## Authoring slides

Slides live under `slides/<kebab-case-id>/index.tsx` and default-export an array of `Page` components:

```tsx
import type { Page } from '@open-studio/core';

const Cover: Page = () => (
  <div className="flex h-full w-full items-center justify-center">
    <h1 className="text-[120px] font-bold">Hello, open-studio</h1>
  </div>
);

const pages: Page[] = [Cover];
export default pages;

export const meta = { title: 'Hello' };
```

## Exports

```ts
import {
  CANVAS_WIDTH,   // 1920
  CANVAS_HEIGHT,  // 1080
  unstable_SharedElement, // match or fade objects across pages for shared element transitions
  type Page,
  type SlideMeta,
  type SlideModule,
  type SlideTransition,
  type OpenStudioConfig,
} from '@open-studio/core';
```

The Vite plugin is exposed under a subpath for advanced setups:

```ts
import { createViteConfig } from '@open-studio/core/vite';
```

## License

MIT
