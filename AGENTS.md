# Repository Guidelines

## Project Structure & Module Organization
- Keep all changes inside `/Users/jmilden/Sites/codex_dev`; create `src/` on your first contribution.
- Organize agents under `src/agents/<agent-name>/` with one folder per capability and an `index.ts` or `index.py` entry point.
- Place reusable utilities in `src/shared/` and runtime glue (CLI bindings, schedulers) in `src/runtime/`.
- Store helper scripts in `bin/`, reference docs in `docs/`, and large inputs or prompts in `assets/`.

## Build, Test, and Development Commands
- `nvm use 20 && npm install` — standardize on Node.js 20 and install dependencies once `package.json` exists.
- `npm run dev` — start the local agent harness; document required environment variables in `.env.example`.
- `npm run build` — compile sources to `dist/` for deployment or packaging.
- `npm run lint` — run ESLint + Prettier checks; fix formatting with `npm run lint -- --fix` before committing.
- `npm run test` — execute Vitest suites; append `--coverage` when preparing release candidates.

## Coding Style & Naming Conventions
- Format with Prettier (2-space indentation, 100-character print width, single quotes) and respect ESLint warnings.
- Use camelCase for variables/functions, PascalCase for classes, and UPPER_SNAKE for immutable configuration.
- Name agent folders with kebab-case (`src/agents/context-router`) and keep files under 200 lines by extracting helpers.
- Prefer descriptive module names (`fetch-price.ts` over `utils.ts`) and add JSDoc for non-trivial functions.

## Testing Guidelines
- Write unit specs alongside code as `*.spec.ts`; use `tests/integration/` for broader flows and mock HTTP with MSW.
- Cover success, failure, and timeout paths for every agent action; target ≥80% branch coverage.
- Record manual smoke steps in PRs: happy-path run, invalid input, and offline mode.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `chore:`) with scopes matching the primary folder (`feat(agents-price-checker): ...`).
- Keep commits focused and runnable; avoid bundling refactors with feature work.
- PRs must link an issue, summarize the change, list manual test results, and attach CLI output or screenshots when behaviour shifts.
- Rebase onto `main` before merging, ensure CI is green, and request at least one peer review.

## Security & Configuration Tips
- Never commit live API keys; keep secrets in `.env.local` (git-ignored) and mirror changes in `.env.example`.
- Hash or redact stored payloads, document retention needs in `docs/security.md`, and run `npm audit` monthly.
