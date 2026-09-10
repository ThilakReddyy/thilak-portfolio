# Thilak Reddy — Portfolio

Personal portfolio for Pothuganti Thilak Reddy, showcasing product and platform engineering work, professional experience, skills, writing, and contact links.

[View the portfolio](https://thilakreddypothuganti.com/)

## Features

- Project showcases for JNTUH Connect and Bhu Bharati, with product and source links.
- Live GitHub repository statistics and Google Play metadata, with built-in fallback values when requests fail.
- Experience, credentials, technical skills, published articles, and résumé links.
- Responsive navigation, a skip-to-content link, and semantic page landmarks.
- Search and social metadata, structured data, a sitemap, app icons, and a static 404 page.

## Tech stack

- React 18 and TypeScript
- Vite with the React SWC plugin
- Tailwind CSS and custom CSS
- React Router and Lucide icons
- Vitest, React Testing Library, and jsdom
- ESLint and TypeScript checks

## Getting started

Install Node.js with npm and Bun. The repository tracks `bun.lock`; use Bun for installs that follow the committed dependency versions. Node.js and npm are also needed for the `check` script, which invokes npm internally.

From the repository root:

```sh
bun install --frozen-lockfile
bun run dev
```

Open [localhost:8080](http://localhost:8080). Vite uses port `8080` by default and may choose another port if it is occupied; check the terminal output.

No environment variables or API keys are required by the current application. Project statistics are fetched in the browser from public GitHub and Shields endpoints. If those requests fail, the portfolio retains its fallback values.

## Commands

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the development server. |
| `bun run build` | Create a production build in `out/`. |
| `bun run build:dev` | Build using Vite's development mode. |
| `bun run preview` | Serve the existing build locally for review. |
| `bun run lint` | Run ESLint. |
| `bun run typecheck` | Check application TypeScript without emitting files. |
| `bun run test` | Run the Vitest suite once. |
| `bun run test:watch` | Run tests in watch mode. |
| `bun run check` | Run lint, type checking, tests, and a production build in sequence. |

Tests cover portfolio content and links, mobile navigation, the scheduled role-label transition, and live statistics updates. Network requests are mocked in the test setup.

## Project structure

```text
src/
  assets/          Profile photo
  components/      Portfolio sections, navigation, and footer
  hooks/           Live project statistics and current role label
  pages/           Main portfolio and client-side 404 page
  test/            Component tests and browser mocks
  App.tsx          Route definitions
  index.css        Global styles and layout
  main.tsx         Application entry point
public/            Static assets, metadata files, headers, and 404 page
index.html         HTML shell, SEO metadata, and structured data
tailwind.config.ts Theme configuration
vite.config.ts     Development server and build configuration
```

## Updating the portfolio

- Edit content and links in `src/components/`. Section order is defined in `src/pages/Index.tsx`.
- Update the GitHub repository, Google Play package ID, and fallback statistics in `src/hooks/use-live-project-stats.ts`.
- Update role labels and their scheduled transition in `src/hooks/use-current-role.ts`.
- Adjust styling in `src/index.css` and `tailwind.config.ts`; replace the profile photo in `src/assets/`.
- Keep `index.html`, `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`, `public/site.webmanifest`, and social preview images aligned with changes to the site's identity or domain.

## Building and hosting

```sh
bun run check
bun run preview
```

The check command creates the production build after validation passes. Publish the contents of `out/` to a static host; the application does not require a backend server.

Vite copies files from `public/` into the build. Use `404.html` as the host's error page where supported. The included `_headers` file defines security and caching headers for hosts that support that format; other hosts need equivalent configuration.
