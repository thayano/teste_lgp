---
description: Always use pnpm as the package manager for this project
---

# Package Manager: pnpm

This project uses **pnpm** as its package manager. Always use `pnpm` commands instead of `npm` or `yarn`.

## Commands Reference

| Action                   | Command                                         |
| ------------------------ | ----------------------------------------------- |
| Install all dependencies | `pnpm install`                                  |
| Add a dependency         | `pnpm add <package>`                            |
| Add a dev dependency     | `pnpm add -D <package>`                         |
| Remove a dependency      | `pnpm remove <package>`                         |
| Run a script             | `pnpm <script>` (e.g. `pnpm dev`, `pnpm build`) |
| Update a dependency      | `pnpm update <package>`                         |

## Rules

1. **Never** use `npm install`, `npm run`, `yarn add`, or any non-pnpm command.
2. Use `pnpm add` instead of `npm install <package>`.
3. Use `pnpm add -D` instead of `npm install --save-dev`.
4. Use `pnpm <script>` instead of `npm run <script>` (e.g. `pnpm dev` not `npm run dev`).
5. The lockfile is `pnpm-lock.yaml` — never create or modify `package-lock.json` or `yarn.lock`.
