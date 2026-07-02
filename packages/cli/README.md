# @open-studio/cli

Scaffold a workspace for [open-studio](https://github.com/hdprajwal/open-studio) — a React-based slide framework with Claude Code skills preconfigured.

## Usage

```bash
npx @open-studio/cli init my-slide
cd my-slide
pnpm install
pnpm dev
```

This creates a workspace containing:

- `slides/getting-started/` — a starter slide you can edit or delete.
- `package.json` — depends on `@open-studio/core`, which provides the runtime (home page, slide viewer, fullscreen mode) and the `open-studio` CLI.
- `open-studio.config.ts` — optional typed config (slidesDir, port).
- `.claude/skills/` and `.agents/skills/` — Claude Code skills (`create-slide`, `apply-comments`, …).
- `CLAUDE.md` — agent guide for authoring slides.

You won't see any Vite, React, or tsconfig files in the workspace. They live inside `@open-studio/core` and you never touch them.

## Commands

| Command | Description |
| --- | --- |
| `open-studio init [dir]` | Scaffold a new workspace in `dir` (defaults to current dir). |
| `open-studio init --force` | Scaffold into a non-empty directory. |
| `open-studio init --name <name>` | Override the generated `package.json` name. |

(Once installed in the workspace, `@open-studio/core` provides `open-studio dev`, `open-studio build`, and `open-studio preview` via its own bin.)

## Authoring

Inside the scaffolded workspace, slides live under `slides/<kebab-case-id>/index.tsx` and default-export an array of `Page` components. Each page renders into a fixed 1920×1080 canvas; the framework handles scaling.

Ask Claude Code to "make slides about X" and the `create-slide` skill will take it from there.
