<!-- .github/copilot-instructions.md -->
# Repo-specific instructions for AI coding agents

This repository is a small React (Vite) admin frontend. The goal of these instructions is to give AI coding agents just enough local knowledge to be productive without guessing project conventions.

High level
- Framework: React + Vite (see `package.json`, `vite.config.js`). Entry: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Router: `react-router-dom` handles routes. Current pages live in `src/pages/` (`Login.jsx`, `ForgotPassword.jsx`). Dashboard is planned but commented out.
- Static assets: served from `public/` (images referenced like `/images/logologo.png` in `Login.jsx`).

Build / Dev / Test
- Start dev server: npm run dev (runs `vite`). Use this when editing UI and for HMR.
- Build for production: npm run build (vite build).
- Preview production build: npm run preview.
- Lint: npm run lint (runs ESLint configured in project). There is no test script in `package.json`.

Project conventions & patterns
- File layout: small pages are in `src/pages/`. Reusable UI components should go into `src/components/` (e.g. `Sidebar.jsx` exists as a placeholder).
- Routing: App-level routes are defined in `src/App.jsx`. When adding pages, add Route entries there.
- Styling: project uses global CSS files in `src/` (`index.css`, `App.css`). There is evidence of Tailwind-like utility classes in markup, but Tailwind is not installed; the classes are likely plain CSS or from a design system. Do not add Tailwind-only features unless the project is updated to include it.
- Images/assets: put static images under `public/images/` and reference them by absolute path `/images/...`.
- Backend/API: there are TODO comments (e.g., in `ForgotPassword.jsx`) and console.log stubs in `Login.jsx`. No API client or environment variables are present. When adding API integration, create a small `src/api/` module and prefer fetch or a small wrapper; do not assume axios is available unless added to dependencies.

Quick code patterns (use these examples)
- Navigation after action: use `useNavigate()` from `react-router-dom` — example in `src/pages/Login.jsx`:
  - navigate('/dashboard') after successful login (dashboard route is currently commented).
- Forms: simple controlled components using `useState`. See `Login.jsx` and `ForgotPassword.jsx` for patterns (onChange handlers update state; onSubmit prevents default and handles action).
- Public assets: <img src="/images/logologo.png" /> (refer to `Login.jsx`).

What to avoid / common pitfalls
- Don't assume a CSS framework is installed. The markup uses utility classes but there is no Tailwind dependency in `package.json`.
- Don't create new routes without updating `src/App.jsx` and ensuring link/navigation is added.
- Don't add global state libraries (Redux, Zustand) unless requested — the project is minimal and uses local React state.

Integration points & external dependencies
- Dependencies visible in `package.json`: `react`, `react-dom`, `react-router-dom` (v7). Dev: `vite`, ESLint and React plugin. No HTTP client or auth libs are present.
- If you add new dependencies, update `package.json` and keep additions minimal.

Files to look at when editing
- `package.json` (scripts & deps)
- `vite.config.js` (build/dev plugin usage)
- `index.html`, `src/main.jsx`, `src/App.jsx` (app entry + routing)
- `src/pages/*.jsx` (UI pages)
- `public/images/` (static assets)

When making PRs
- Keep changes small and focused. For UI changes, include a screenshot or short recording.
- If adding dependencies, explain why and keep footprint small.

If anything in these instructions is unclear or incomplete, ask the repo owner for the preferred styling approach (plain CSS vs Tailwind) and whether an HTTP client or global state solution is desired.
