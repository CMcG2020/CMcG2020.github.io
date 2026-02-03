# Claire McGonigal - Portfolio

A personal portfolio website showcasing my work as a Data Engineer, Content Writing and Vibe Coding. Built in collab with Astro.

**[View Live Site](https://cmcg2020.github.io/)**

## Tech Stack

- **Framework:** [Astro](https://astro.build/) 4.16
- **Styling:** CSS Custom Properties
- **Content:** Markdown with Astro Content Collections
- **Deployment:** GitHub Pages

## Features

- Responsive design with dark theme
- Blog with RSS feed
- Project portfolio with category filtering
- SEO optimized with JSON-LD structured data
- Downloadable CV

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:4321`

## Project Structure

```
src/
├── components/     # Reusable Astro components
├── content/
│   ├── blog/       # Blog posts (Markdown)
│   ├── projects/   # Project entries (Markdown)
│   └── config.ts   # Content schemas
├── layouts/        # Page layouts
├── pages/          # File-based routing
└── styles/         # Global CSS
```

## Adding Content

**New blog post:**
```bash
# Create src/content/blog/my-post.md
---
title: "Post Title"
excerpt: "Brief description"
category: "Category"
date: 2024-01-15
---

Content here...
```

**New project:**
```bash
# Create src/content/projects/my-project.md
---
title: "Project Title"
description: "Brief description"
category: "Development"  # Development | Apps | Writing
date: 2024-01-15
featured: false
---

Content here...
```

## Deployment

Automatically deploys to GitHub Pages on push to `main` via GitHub Actions.

## License

MIT
