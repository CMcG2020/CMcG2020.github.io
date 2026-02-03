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

```
src/
├── components/     # Reusable Astro components (Header, Footer, ProjectCard, etc.)
├── content/
│   ├── blog/       # Blog posts as Markdown
│   ├── projects/   # Project entries as Markdown
│   └── config.ts   # Zod schemas for content validation
├── layouts/        # BaseLayout.astro (meta, SEO, page structure)
├── pages/          # File-based routing
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── work.astro
│   ├── work/[...slug].astro   # Dynamic project pages
│   └── blog/[...slug].astro   # Dynamic blog pages
└── styles/
    └── global.css  # Design tokens and base styles
```

**Data Flow:**
1. Content authored as Markdown in `src/content/{projects,blog}/`
2. Schemas in `src/content/config.ts` validate frontmatter
3. Pages use `getCollection()` API to fetch and render content
4. Build outputs static HTML to `dist/`

## Content Collection Schemas

**Projects** (`src/content/projects/*.md`):
```yaml
title: string (required)
description: string (required)
category: "Development" | "Apps" | "Writing" (required)
date: YYYY-MM-DD (required)
featured: boolean (default: false)
tags: string[] (optional)
image: string (optional)
links: [{label: string, url: string}] (optional)
```

**Blog** (`src/content/blog/*.md`):
```yaml
title: string (required)
excerpt: string (required)
category: string (required)
date: YYYY-MM-DD (required)
tags: string[] (optional)
image: string (optional)
```

## Design System

CSS custom properties in `src/styles/global.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#0a0a0f` | Page background (deep dark navy) |
| `--color-surface` | `#131318` | Card backgrounds |
| `--color-accent` | `#B50752` | Links, buttons, highlights (magenta) |
| `--color-accent-hover` | `#D4186A` | Hover states |
| `--color-text` | `#e4e4e7` | Body text |
| `--color-text-muted` | `#71717a` | Secondary text |
| `--font-heading` | Space Grotesk | Headings |
| `--font-body` | Inter | Body text |

Use existing CSS classes: `.btn`, `.btn-primary`, `.btn-secondary`, `.container`, `.section`, `.grid`, `.grid-2`, `.grid-3`

## Path Alias

`@/*` maps to `src/*` (configured in tsconfig.json)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. Site base path is `/`.

---

## Rules & Guidelines

### Always Do
- Run `npm run build` after ANY change to verify no errors before committing
- Use `@/` path alias for imports, never relative paths like `../../`
- Follow existing component patterns - check similar components before creating new ones
- Use CSS custom properties from `global.css` - never hardcode colors or fonts
- Keep content frontmatter consistent with the Zod schemas in `config.ts`

### Never Do
- Modify content schemas (`config.ts`) without updating ALL existing markdown files
- Use inline styles - always use CSS classes or custom properties
- Create new CSS files - extend `global.css` instead
- Add dependencies without checking if Astro/existing deps already solve the problem
- Commit without running `npm run build` first

### Verification Checklist
After any change, verify:
1. `npm run build` passes with no errors
2. `npm run preview` - visually check the affected pages
3. Test mobile responsiveness (resize browser or use dev tools)
4. Check that links work and navigation is correct

### Common Patterns

**Adding a new project:**
```bash
# Create file: src/content/projects/my-project.md
---
title: "Project Title"
description: "Brief description"
category: "Development"  # or "Apps" or "Writing"
date: 2024-01-15
featured: false
tags: ["tag1", "tag2"]
---

Project content here...
```

**Adding a new blog post:**
```bash
# Create file: src/content/blog/my-post.md
---
title: "Post Title"
excerpt: "Brief excerpt for previews"
category: "Category Name"
date: 2024-01-15
---

Post content here...
```

**Creating a new component:**
```astro
---
// src/components/MyComponent.astro
interface Props {
  title: string;
  optional?: boolean;
}

const { title, optional = false } = Astro.props;
---

<div class="my-component">
  <h3>{title}</h3>
</div>

<style>
  .my-component {
    background: var(--color-surface);
    padding: var(--space-4);
    border-radius: var(--radius-md);
  }
</style>
```

---

## Session Notes

<!-- Claude: Update this section after each session with learnings and corrections -->
<!-- Format: - [DATE] What went wrong → What to do instead -->

### Learnings Log
- When editing content, always check the schema in `config.ts` first
- The starry background is in `global.css` body::before - don't duplicate it
- Use `getCollection('projects')` or `getCollection('blog')` to fetch content
- Use `@/utils/base` for base URL instead of inline `import.meta.env.BASE_URL` logic
- Use `Icon` component from `@/components/Icon.astro` for SVG icons - don't duplicate SVG markup
- Category colors: use `--color-accent-purple` for Writing, not hardcoded `#8b5cf6`
- Dark text on light backgrounds: use `--color-text-dark` and `--color-text-muted-dark`
- Header height: use `--header-height` CSS variable, not hardcoded `60px`
- For color with opacity: use `color-mix(in srgb, var(--color-accent) 15%, transparent)`
