# Pattern A: Work case hub + deep-dive pages

This site uses a scalable Hugo content structure for `/work/`:

- **One folder per case** under `content/work/<case-slug>/`
- **Case hub** page is `_index.md` (a section landing page)
- **Deep dives** are flat markdown files in the same folder (e.g. `decision-mapping.md`)

This avoids Hugo leaf-bundle child-page pitfalls and makes `ref/relref` linking robust.

## Folder structure

```text
content/work/
└── <case-slug>/
    ├── _index.md                 # case hub (URL: /work/<case-slug>/)
    ├── decision-mapping.md       # deep dive (URL: /work/<case-slug>/decision-mapping/)
    ├── transformation-roadmap.md # deep dive
    └── technical-architecture.md # deep dive
```

## Case folder slug convention

Use **kebab-case**. Prefer:

- `client-or-context` + `outcome` (short, stable, descriptive)
- Avoid dates unless the case name must be versioned

Examples:

- `venture-studio-accelerate-capital`
- `healthcare-claims-automation`

## Deep-dive page naming convention

Use **kebab-case**, action/subject oriented:

- `decision-mapping.md`
- `transformation-roadmap.md`
- `technical-architecture.md`

## Required front matter

### Hub (`_index.md`)

```yaml
---
title: "..."
description: "..."

# Used by /work/ card grid
challenge: "..."
solution: "..."
image: "/images/...png"
card_image: "/images/...png" # optional

# Optional: preserve legacy URLs
aliases:
  - /work/old-slug/

draft: false
---
```

### Deep dive (`*.md`)

```yaml
---
title: "..."
description: "..."

# Makes cards show “Part of <hub>” and enables the “Back to case hub” button
parent_case: "<case-slug>"

challenge: "..." # optional
solution: "..."  # optional

aliases:
  - /work/old-deep-dive-url/

draft: false
---
```

## Internal linking (preferred)

Always prefer `relref` over brittle `../` links.

Example:

```md
[Explore decision mapping]({{< relref "work/<case-slug>/decision-mapping.md" >}})
```

## Buttons / CTAs in markdown

Use the `button` shortcode:

```md
{{< button relref="work/<case-slug>/decision-mapping.md" variant="outline-primary" size="sm" >}}
Explore decision mapping
{{< /button >}}
```

External links:

```md
{{< button href="https://example.com" variant="primary" size="sm" >}}
Visit site
{{< /button >}}
```
