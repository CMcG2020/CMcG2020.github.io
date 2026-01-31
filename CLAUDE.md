# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Claire Portfolio - A static portfolio/resume website built with Astro 4.16, TypeScript, and CSS custom properties. Deployed to GitHub Pages.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:4321)
npm run build    # Build static site to /dist
npm run preview  # Preview production build locally
```

## Architecture

**Astro Static Site Generator with Content Collections**

- **Pages** (`src/pages/`): File-based routing. Dynamic routes use `[...slug].astro` pattern for blog posts and project details.
- **Content** (`src/content/`): Markdown files with Zod-validated frontmatter schemas defined in `config.ts`. Two collections: `projects` and `blog`.
- **Layouts** (`src/layouts/`): `BaseLayout.astro` handles meta tags, SEO, and page structure.
- **Components** (`src/components/`): Reusable Astro components for header, footer, cards, etc.

**Data Flow:**
1. Content authored as Markdown in `src/content/{projects,blog}/`
2. Schemas in `src/content/config.ts` validate frontmatter
3. Pages use `getCollection()` API to fetch and render content
4. Build outputs static HTML to `dist/`

## Content Collections

**Projects** require: `title`, `description`, `category` (Development|Apps|Writing), `date`, `featured`

**Blog** requires: `title`, `excerpt`, `category`, `date`

## Design System

CSS custom properties in `src/styles/global.css`:
- Primary background: `#0a0a0f` (deep dark navy)
- Accent color: `#B50752` (magenta)
- Fonts: Space Grotesk (headings), Inter (body)

## Path Alias

`@/*` maps to `src/*` (configured in tsconfig.json)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. Site base path is `/claire-portfolio`.
