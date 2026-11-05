# Kennu Martos Portfolio — Deployment-ready static export

**Vercel:** See [DEPLOY-VERCEL.md](DEPLOY-VERCEL.md). The root `vercel.json` sets `framework: null` (Other) and serves the Next.js static export in `out/`. This avoids Vercel treating `out/` as a Next.js server build.

The existing design, portfolio content, static assets, and resume are unchanged.

---

# Kennu Martos Portfolio

A responsive, dark portfolio for Kennu M. Martos, Programmer & Graphic Designer.
Professional content is based on the supplied Professional Resume.pdf.

For free hosting, see **[DEPLOY-VERCEL.md](DEPLOY-VERCEL.md)**. The latest deployment package includes explicit static-export settings for `robots.txt` and `sitemap.xml`.

## Start locally

Requirements: Node.js 22.13 or newer and pnpm 10 (pinned in package.json).

```sh
pnpm install
pnpm dev
```

Open the local address printed in the terminal, normally http://localhost:3000.
This is a React/TypeScript project using the Next.js App Router,
with Tailwind CSS, Lucide icons, and accessible Radix/Shadcn components.
It needs a development server; opening the TSX files directly will not run it.

```sh
pnpm check
pnpm build
```

## Edit the content

Open `data/portfolio.ts`. The main UI does not need to change when you add work.

- `profile`: name, contact details, portrait, resume URL, and optional availability.
- `skills`: grouped tools and capabilities.
- `experience`: companies, positions, responsibilities, location, and optional dates.
- `projects`: programming and website project content.
- `designProjects`: design work and galleries.
- `education`, `certifications`, `socialLinks`, `services`, and `workflowSteps`.
- `site.url`: the canonical origin. Update this when using a different domain.

Employment dates, external accounts, certifications, project metrics, and
project-specific technology details absent from the resume have not been invented.
Availability is hidden until you set `profile.availability` to a confirmed value.
Work entries follow the resume order without inferring a chronology or current job.
Project names describe the work in the resume; they are not claimed product names.

## Add project images and links

Place programming screenshots under `public/projects/` and original design
artwork under `public/design/`. Prefer optimized WebP or AVIF where suitable.
Projects that have provided image assets show real screenshots or supplied design studies.
Older entries without assets continue to show clearly marked placeholders.

A programming project supports title, slug, categories, client, description,
longDescription, role, technologies, features, problem, solution, result,
challenges, thumbnail, images, github, demo, year, featured, accent, and code.
Only fill in details and URLs you can verify.

```ts
thumbnail: "/projects/example.webp",
images: [
  { src: "/projects/example.webp", alt: "Description of the actual project screen", width: 1600, height: 1000 },
],
```

A design project supports title, slug, category, description, objective,
creativeDirection, process, tools, typography, palette, result, cover, gallery,
year, and featured. Add original assets to `cover` and `gallery`.
The image viewer preserves aspect ratio and provides previous/next controls
when multiple images are available. Arrow keys work in the focused gallery.
Missing years, technology lists, and external links are hidden automatically.
Project filters are generated only from categories with corresponding work.

## Contact form

The form validates name, email, subject, project type, and message, then opens
a prefilled email draft addressed to martoskennu01@gmail.com. The visitor reviews
and sends it from their own email app. A copyable draft is available as a fallback.
There is no server-side email delivery, database, or analytics service attached.
The form uses a honeypot, input length limits, and a short repeat-submit guard.
No success message falsely claims that an email has been delivered.

To receive messages directly without an email app, connect a server-side email
provider or contact-form endpoint and implement server-side validation, rate
limits, and your chosen anti-spam checks. Do not put private API keys in the UI.

## Files and components

- `app/page.tsx`: page entry and factual Person structured data.
- `app/layout.tsx`: title, description, canonical, Open Graph and social metadata.
- `app/globals.css`: shared theme, layout, responsive rules, and reduced motion.
- `app/robots.ts`, `app/sitemap.ts`: generated crawler metadata.
- `components/portfolio/Portfolio.tsx`: navigation and reusable portfolio sections.
- `components/portfolio/ProjectViewer.tsx`: lazy-loaded case-study modal and gallery.
- `components/portfolio/DesignViewer.tsx`: lazy-loaded design project viewer.
- `data/portfolio.ts`: editable portfolio data.
- `public/Kennu-Martos-Resume.pdf`: the original supplied PDF, unchanged.
- `public/images/kennu-martos.png`: the portrait extracted from the supplied PDF.
- `public/og.png`: branded social-sharing image.
- `public/favicon.svg`: custom code-inspired favicon.

## Accessibility and performance

Semantic sections, a skip link, visible focus states, accessible modal and mobile
menu primitives, labeled fields, native form validation, reduced-motion support,
and keyboard gallery controls are included. Project viewers load on demand.
The page uses system fonts and local assets, avoiding a third-party font request.
The portrait is lazy-loaded below the hero; its original resolution is retained.

## Hosting

For free public hosting on Cloudflare Pages, follow **DEPLOY-CLOUDFLARE.md**.
This deployment variant exports static files into `out/` using the Next.js build.
The hosting provider supplies your actual public URL when deploying. No
credentials or local dependencies are included in the downloadable archive.

## Content to add when available

1. Original project screenshots and design artwork.
2. Verified GitHub, LinkedIn, live-demo, or other professional links.
3. Employment dates and any additional verified case-study detail.
4. Confirmed availability, if you want an availability indicator.

These are editable content gaps, not invented portfolio entries.

## Portfolio update — November 2026

The **Projects** section includes three additional entries:

- **Battle Tanks Roblox** — multiplayer Roblox game, menus, garage and abilities.
- **Battle Tanks Mobile** — Android game systems, tank customization and game interface studies.
- **GMT System (Grant Management System)** — five original supplied dashboard and progress-report screenshots.

The **Design** section now includes a filterable three-collection gallery:
Horizon Unified brand identity, Allied Fusion holiday campaign posters, and Battle Tanks game-interface concepts.
Each collection opens a keyboard-accessible gallery with a thumbnail strip.

All new media is local, under `public/projects/` and `public/design/`.
GMT assets are preserved as PNG for crisp dashboard text; graphic artwork
is optimized as WebP to reduce download size.

**Image provenance:** The Battle Tanks game-menu and garage images are
creative **interface concepts**, not verified in-game captures. The GMT PNG
files are actual screenshots supplied for this update. The design-gallery
artwork comes from the user's existing asset library. For future changes,
update image paths and alt descriptions in `data/portfolio.ts`.

No new deployment URLs or project-specific implementation frameworks were
invented. Project information can be revised in `data/portfolio.ts` as
additional verified details become available.


## Latest portfolio image update (November 2026)

The supplied **Projects Images.zip** was mapped into project and graphic-design galleries:

- Battle Tanks Roblox: 9 real screenshots and promotional visuals
- Battle Tanks Mobile: 8 real screenshots and the app icon
- Allied Fusion: 5 corporate website screenshots (including full-page captures)
- Graphic design: Horizon Unified branding, Discount Uniform International identity, BS Lending logos, Allied Fusion corporate identity and recruitment posters, and music-themed business cards/logos
- Battle Tanks game UI: a curated visual-design gallery made from the new game assets

The **five GMT screenshots** from the previous portfolio were kept because the supplied image archive did not contain a replacement GMT folder. The old concept graphics and holiday posters were removed. Image aspect ratios and high-quality formats are preserved, and galleries provide a **View full image** link for fine details.

Read [`IMAGE-ASSET-MAPPING.md`](./IMAGE-ASSET-MAPPING.md) for a complete 76-file origin-to-destination mapping and the design collection assignments.

This remains the same Vercel static-export project; deployment settings, page structure, filters, responsiveness and contact functionality were not modified.
