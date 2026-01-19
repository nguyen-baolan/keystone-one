```md
# Keystone One — Sitemap + Structure Implementation Plan (Hugo + Hugoplate)

> Scope of this document: **plan only** (no code changes executed). It’s written against the current repository structure under `/Users/regenx-01/_Projects/keystone-one`.

## 0) Current Template: What Exists Today (and what we should reuse)

### Stack / conventions in this repo
- **Hugo (extended) v0.151.0** (`hugo.toml`, `config/_default/*.toml`).
- Theme: **Hugoplate** (`themes/hugoplate/`) using **TailwindCSS** and the Hugoplate partial/component patterns.
- Content sections already used:
  - Homepage content in `content/_index.md` feeds `themes/hugoplate/layouts/home.html`.
  - “Sections” content in `content/sections/*.md` is referenced via `site.GetPage "sections/<name>"` and is **not rendered** because `build.render = "never"`.

### Reusable functionality already available
1) **Draft/Publish workflow**
   - Hugo supports `draft: true|false` in front matter.
   - Draft content is excluded from production builds unless running with `hugo server -D`.
   - Blog posts currently use `draft: false`.

2) **List + Single patterns**
   - Blog list: `themes/hugoplate/layouts/blog/list.html` uses:
     - `.Paginate .RegularPages`
     - `partial "components/blog-card" .`
     - `partial "components/pagination.html" .`
   - Blog single: `themes/hugoplate/layouts/blog/single.html` provides:
     - hero image from `.Params.image`
     - metadata (author/categories/tags)
     - Table of contents: `partial "toc.html" ...`
     - Optional comments: Disqus included if `site.Config.Services.Disqus.Shortname`.

3) **Card component patterns**
   - Blog card: `themes/hugoplate/layouts/_partials/components/blog-card.html`.
   - Author card: `themes/hugoplate/layouts/_partials/components/author-card.html`.
   - Author cards already implement **consistent heights, square media, and text clamping** via CSS in `themes/hugoplate/assets/css/components.css`.

4) **Search**
   - Search module is enabled (Hugo module import) and `SearchIndex` is enabled in `hugo.toml` outputs.
   - Search config in `config/_default/params.toml` includes only `include_sections = ["blog"]` today.

5) **Taxonomies (tags/categories)**
   - Theme has templates for taxonomy and term pages:
     - `themes/hugoplate/layouts/taxonomy.html`
     - `themes/hugoplate/layouts/term.html`
   - The blog templates already link to `/categories/<...>/` and `/tags/<...>/`.

6) **CTA and section-driven composition**
   - CTA partial: `themes/hugoplate/layouts/_partials/call-to-action.html` reads `content/sections/call-to-action.md`.
   - This “section content + partial rendering” is the cleanest way to implement homepage sections without proliferating standalone pages.

### Pages we should keep but hide from navigation
- `/elements` (content: `content/pages/elements.md`, menu item exists today)
- `/authors` (team pages exist and are useful; we’ll hide from main nav)
- `/categories`, `/tags`, `/404` should **not** be in main menu.
- `/privacy-policy` should remain in footer only.

---

## 1) Deliverable: Proposed URL Structure + Menu Changes

### Target sitemap (public-facing)
| Page | URL | Hugo Source | Notes |
|---|---|---|---|
| Homepage | `/` | `content/_index.md` + `themes/hugoplate/layouts/home.html` | Replace banner with video hero + sections + CTA |
| Our Work (index) | `/work/` | `content/work/_index.md` | Card grid showing **all** cases (parents + children) |
| Our Work (case study single) | `/work/<parent>/` | `content/work/<parent>/index.md` (leaf bundle) | Parent overview case |
| Our Work (child case study) | `/work/<parent>/<child>/` | `content/work/<parent>/<child>/index.md` | “Level deeper” case |
| About | `/about/` | `content/about/_index.md` + `layouts/about.html` override | Top section blurb + embedded team section |
| Contact | `/contact/` | `content/contact/_index.md` + `layouts/contact.html` override | Netlify form + captcha |

### Menu (top nav) changes (config only)
File: `config/_default/menus.toml`

**Main menu should become:**
1. Home → `/`
2. Our Work → `/work/`
3. About → `/about/`
4. Contact → `/contact/`

**Remove from main menu (but do not delete content/templates):**
- Elements
- Pages dropdown
- Blog
- Authors
- Categories
- 404 Page

Footer menu suggestion:
- About → `/about/`
- Contact → `/contact/`
- Privacy Policy → `/privacy-policy/`

Navigation button:
- Keep existing `params.toml` navigation button (currently “get a quote” linking to `contact`). Consider renaming to “Contact” later (optional).

---

## 2) Deliverable: Proposed Content Folder Structure

### Current content directories
- `content/blog/…` (template blog)
- `content/authors/…` (team/owners)
- `content/about/_index.md`
- `content/contact/_index.md`
- `content/pages/…` (elements, privacy policy)
- `content/sections/…` (call-to-action, testimonial)

### Proposed additions for “Our Work”
Create a new Hugo section `work`:
```

content/ work/ _index.md enabling-a-venture-studio-to-accelerate-capital-allocations/ index.md images/ hero.jpg diagram-1.png multi-agent-ai-workflows-for-investment-grade-decision-making/ index.md images/ workflow.png

```javascript

Notes:
- Use **page bundles** (`index.md` + colocated assets) to keep case study media organized.
- Nested bundles provide the hierarchical URL structure automatically.
- We will build the `/work/` list template to show **all** cases including nested ones.

### Proposed for homepage sections
Keep using the existing “section page” convention:
```

content/ sections/ home-hero.md (render never) home-what-we-help.md (render never) home-methodology.md (render never) call-to-action.md (already exists)

````javascript

This keeps homepage content editable without creating extra routes.

---

## 3) Deliverable: Templates / Partials to Modify or Create (exact paths)

> We will follow the theme’s override convention: create files under **project root `layouts/`** to override theme behavior, rather than editing `themes/hugoplate` directly.

### Phase-oriented template plan (paths only)

**Phase A — Navigation / sitemap alignment**
- `config/_default/menus.toml` (update nav items)

**Phase B — “Our Work” section templates**
Create new layouts (minimal, copy patterns from blog):
- `layouts/work/list.html`
  - Similar to `themes/hugoplate/layouts/blog/list.html` but:
    - No sidebar/widgets
    - Uses our custom card partial
    - Uses `.RegularPagesRecursive` so nested child cases appear
- `layouts/work/single.html`
  - Similar to `themes/hugoplate/layouts/blog/single.html` but:
    - **No Disqus/comments**
    - Metadata tailored to case studies (optional: hide author/categories)
    - Keep TOC and `.content` typography for readability

New component partials:
- `layouts/partials/components/work-card.html`
  - Copy structure from `components/blog-card.html` and adapt to “challenge/solution” excerpt fields.

**Phase C — Homepage hero + sections**
- `layouts/home.html` (override theme `themes/hugoplate/layouts/home.html`)
  - Replace current banner area with a full-screen video hero section driven by `content/sections/home-hero.md`.
  - Keep existing section patterns and partial usage (`partial "image"`, section loops).

Optional helper partials:
- `layouts/partials/sections/home-hero.html`
- `layouts/partials/sections/home-methodology.html`

**Phase D — About page with embedded Team section**
Two viable approaches:
1) Embed team cards inside About via an about override layout:
   - `layouts/about.html` override that renders:
     - About blurb (page `.Content`)
     - Team grid by listing author pages (reuse `components/author-card`)
2) Keep About layout and create a separate team shortcode/partial:
   - `layouts/partials/sections/team-grid.html`
   - Called from `layouts/about.html`

**Phase E — Contact form (Netlify + captcha)**
- `layouts/contact.html` override
  - Replace `action="{{ site.Params.contact_form_action }}"` approach with Netlify form markup + captcha.

**Phase F — Styling (minimal, reuse existing patterns)**
- `assets/css/custom.css` (preferred for site-level tweaks)
  - Add work card styles mirroring `.author-card` patterns
  - Reuse line-clamp technique already in `themes/hugoplate/assets/css/components.css`

---

## 4) Deliverable: Case Study Card Layout Spec

### Goals
- Responsive grid, consistent card heights, readable at-a-glance.
- Card shows:
  - image
  - title
  - short “Challenge” and “Solution” excerpts (or combined summary)
  - optional “Parent / Part of …” label for child cases

### Grid behavior (recommendation)
Use same breakpoints style as authors/blog:
- Mobile `<768px`: **1 column**
- Tablet `≥768px`: **2 columns**
- Desktop `≥1024px`: **3 columns**

### Card sizing
- Image aspect ratio: **16:9** (recommended) to support landscape stills and diagrams.
- Consistent height:
  - Card container: `display: flex; flex-direction: column; height: 100%`
  - Content area flexes; CTA pinned to bottom.

### Text clamping
Reuse the existing clamp pattern used by `.author-card-name` and `.author-card-description`:
- Title clamp: **2 lines**
- Description (challenge+solution) clamp: **3–4 lines**

### Data model for card
Prefer explicit front matter fields so you don’t have to “fight” Hugo summaries:
- `card_image` (fallback to `image`)
- `challenge` (short)
- `solution` (short)
- `parent_case` (slug/path reference) for children

### Card rendering order
1) `card_image` or `image`
2) `Title`
3) `challenge` + `solution` (rendered as small blocks)
4) “Read case study” button

---

## 5) Deliverable: Sample Front Matter

### 5.1 Parent case study (top-level)
Path: `content/work/enabling-a-venture-studio-to-accelerate-capital-allocations/index.md`

```yaml
---
title: "Enabling a venture studio to accelerate capital allocations"
date: 2026-01-01T00:00:00Z
image: "/images/work/venture-studio/hero.jpg" # or bundle-relative image
card_image: "/images/work/venture-studio/card.jpg"
description: "We helped a venture studio speed up investment decisions with repeatable AI-enabled workflows."
challenge: "Capital allocation decisions were slow, inconsistent, and difficult to audit."
solution: "A standardized decision workflow with clear inputs/outputs, scoring, and review gates."
featured: true
# Draft/Pub
draft: false
# Optional tagging
categories: ["Investment", "Decisioning"]
tags: ["workflows", "ai", "governance"]
---

## Context

Longform content…
````

### 5.2 Child case study (nested, “level deeper”)

Path: `content/work/enabling-a-venture-studio-to-accelerate-capital-allocations/multi-agent-ai-workflows-for-investment-grade-decision-making/index.md`

```yaml
---
title: "Multi-agent AI workflows for investment-grade decision making"
date: 2026-01-02T00:00:00Z
image: "workflow.png"         # bundle-relative
card_image: "workflow.png"
description: "A deeper look at the multi-agent system powering the investment workflow."
parent_case: "enabling-a-venture-studio-to-accelerate-capital-allocations"
challenge: "Analysts needed consistent diligence without slowing down throughput."
solution: "Multi-agent decomposition, evidence capture, and an audit-friendly final memo generator."
draft: false
# Optional tagging
tags: ["agents", "evaluation", "due-diligence"]
---

## Overview

This case study is a deep-dive into…
```

### 5.3 Team member (reuse existing authors)

Path: `content/authors/jane-doe.md`

```yaml
---
title: "Jane Doe"
email: "jane@keystone.one"
image: "/images/authors/jane.jpg"
image_type: "photo" # or "logo" (see docs/author-cards.md)
description: "Partner. Focused on applied AI systems and decisioning products."
social:
  - title: linkedin
    icon: fa-brands fa-linkedin
    link: https://www.linkedin.com/in/janedoe/
  - title: x
    icon: fa-brands fa-x-twitter
    link: https://x.com/janedoe
---

Bio goes here.
```

---

## 6) Deliverable: Contact Form Approach with CAPTCHA (2 options)

### Option A (preferred if Netlify hosting): Netlify Forms + Netlify reCAPTCHA

- Implement in `layouts/contact.html` override.
- Add `data-netlify="true"` and `data-netlify-recaptcha="true"`.
- Include the hidden `form-name` input.
- Add `<div data-netlify-recaptcha="true"></div>`.

Pros:

- No backend required.
- Spam protection built-in.
- Integrates with Netlify dashboard + notifications.

Cons:

- Tight coupling to Netlify.

### Option B (hosting unknown): Formspree (or similar) + CAPTCHA provider

Two common approaches:

1. __Formspree + hCaptcha__ (supported) OR
2. __Cloudflare Turnstile__ + custom serverless endpoint (Vercel/Netlify Functions)

Pros:

- Hosting-agnostic.

Cons:

- More setup (keys, endpoint, or vendor config).

Recommendation:

- If you plan to stay on Netlify: use Option A.
- If you might move between Netlify/Vercel: choose Option B and centralize form handling.

---

## 7) Deliverable: QA Checklist

### Navigation / sitemap

- [ ] Main nav shows only: Home, Our Work, About, Contact
- [ ] Footer contains About, Contact, Privacy Policy
- [ ] `/404` not visible anywhere in nav
- [ ] Legacy pages (elements/blog/authors/categories/tags) still build and are reachable only via direct URL

### Our Work

- [ ] `/work/` lists __all__ case studies including nested children
- [ ] Cards are consistent height across breakpoints
- [ ] Images render correctly (no layout shift, correct aspect)
- [ ] Child cases display a “Part of …” label (optional but recommended)

### Case study single

- [ ] Typography readable on mobile (spacing, font size)
- [ ] TOC renders correctly for long content
- [ ] Images/videos responsive (no overflow)
- [ ] __No comments__ displayed

### Homepage

- [ ] Hero is full screen on desktop and gracefully collapses on mobile
- [ ] Video hero has fallback poster image
- [ ] Sections stack correctly on mobile
- [ ] CTA section present and visually strong

### Contact

- [ ] Form submits successfully
- [ ] CAPTCHA appears and blocks bots
- [ ] Confirmation UX (thank-you message or redirect)

### Build / technical

- [ ] `npm run build` succeeds
- [ ] `npm run dev` renders pages without console/template errors
- [ ] 404 works on Netlify/Vercel (verify configured routes)
- [ ] Search still works; add `work` section to search config if needed

---

## 8) PR-Sized Phases (file-by-file)

### Phase 1 — Sitemap + menus (small PR)

__Files__

- `config/_default/menus.toml`
- (optional) `config/_default/params.toml` (navigation button label/link only)

### Phase 2 — Our Work content scaffold (small PR)

__Files__

- `content/work/_index.md`
- `content/work/<parent>/index.md`
- `content/work/<parent>/<child>/index.md`

### Phase 3 — Our Work templates (medium PR)

__Files__

- `layouts/work/list.html`
- `layouts/work/single.html`
- `layouts/partials/components/work-card.html`
- `assets/css/custom.css` (minimal styling)

### Phase 4 — Homepage hero + sections (medium PR)

__Files__

- `layouts/home.html`
- `content/sections/home-hero.md`
- `content/sections/home-what-we-help.md`
- `content/sections/home-methodology.md`
- `content/sections/call-to-action.md` (update copy)

### Phase 5 — About with team embed (small/medium PR)

__Files__

- `layouts/about.html` (override)
- `content/about/_index.md` (content)
- Reuse existing author content under `content/authors/`

### Phase 6 — Contact with Netlify form + captcha (small PR)

__Files__

- `layouts/contact.html` (override)
- `content/contact/_index.md` (copy)
- `netlify.toml` (only if needed for form settings; likely not)

---

## 9) Notes / Open Decisions

1. __Case study hierarchy display:__

   - We can either rely on nested URLs only, or also add `parent_case` to make it explicit and enable “Part of …” badges and grouping.

2. __Search indexing for Work:__

   - If desired, update `config/_default/params.toml` → `[search].include_sections` to include `"work"`.

3. __Blog:__

   - Keep blog content/templates but remove from menus. Optionally we can repurpose blog later, but for now it’s “hidden but available.”

---

## Appendix: Relevant existing paths (reference)

- Menus: `config/_default/menus.toml`
- Site params: `config/_default/params.toml`
- Homepage layout: `themes/hugoplate/layouts/home.html`
- Blog list/single: `themes/hugoplate/layouts/blog/list.html`, `themes/hugoplate/layouts/blog/single.html`
- Contact template: `themes/hugoplate/layouts/contact.html`
- About template: `themes/hugoplate/layouts/about.html`
- Author cards: `themes/hugoplate/layouts/_partials/components/author-card.html`
- Card clamp CSS example: `themes/hugoplate/assets/css/components.css`
                                    