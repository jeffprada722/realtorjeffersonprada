@AGENTS.md

# realtor-website — Jefferson Prada Realtor

## What This Is

The **production website** for Jefferson Prada, Realtor at Avanti Way Realty, Miami FL.
Live domain: `realtorjeffersonprada.com`
GitHub: `jeffprada722/realtor-website` (branch: `master`)
Vercel project: `realtor-website` (prj_rbmmV5k34RIeTGJyqFEssac7ekzv)

> This folder started as a clone of the `ai-website-cloner-template` by JCodesMore,
> but it is now a fully independent, original project. Do NOT treat it as a template.

## Separation from Template

| Folder | Purpose | GitHub |
|--------|---------|--------|
| `~/Projects/realtor-website/` | Production website (THIS) | `jeffprada722/realtor-website` |
| `~/Projects/ai-website-cloner-template/` | Reusable cloning tool | `jeffprada722/ai-website-cloner-template` |

Never merge or copy content between these two folders.

## Key Directories

```
src/
  app/                  # Next.js 16 App Router pages
    blog/               # Blog index + [slug] dynamic pages
    sitemap.ts          # Auto-generates /sitemap.xml (includes all posts)
    robots.ts           # /robots.txt
  components/
    BlogPreview.tsx     # Homepage blog preview (3 latest posts)
    JsonLd.tsx          # JSON-LD schema injector
    Header.tsx          # Nav with Blog link
  lib/
    blog.ts             # BlogPost type, getAllPosts(), getPostBySlug()
    schema.ts           # JSON-LD schemas (RealEstateAgent, Article, FAQ, Breadcrumb)
  content/
    blog/               # One .ts file per post (slug.ts)
public/
  images/blog/          # Hero images 1200x675 JPG (one per post)
  videos/               # Hero background video (video-bg-home.mp4)
```

## Blog System

Posts live in `src/content/blog/{slug}.ts` as typed TS exports.
Register each post in `src/lib/blog.ts` (import + push to posts array).
No MDX, no CMS, no extra dependencies. Type-safe, fast build.

To add a new post: use the `blog-realtor` skill (`~/.claude/skills/blog-realtor/SKILL.md`).

## SEO Rules (DO NOT BREAK)

- All pages use Next.js `generateMetadata()` for titles, descriptions, canonical, OG, Twitter
- No hardcoded `<link rel="canonical">` in layout — handled per-page
- JSON-LD schemas injected via `<JsonLd>` component
- `sitemap.ts` auto-includes new blog posts via `getAllPosts()`
- `robots.ts` disallows `/api/` and `/admin/`

## Vercel Deploy

- Branch `master` auto-deploys on push (once GitHub repo is reconnected to Vercel)
- Env var needed: `NEXT_PUBLIC_SITE_URL=https://realtorjeffersonprada.com`
- Domain: `realtorjeffersonprada.com` (registered on Namecheap, add DNS to Vercel after deploy)

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
