# Content Structure: Keystone One

## Content Organization

The project uses a hierarchical content structure organized by content type and language.

## Directory Structure

```
content/
├── _index.md              # Homepage content
├── about/                 # About section
│   ├── _index.md         # About page
│   └── test-content.md   # Additional about pages
├── authors/               # Author profiles
│   ├── _index.md         # Authors list page
│   ├── bao.md            # Individual author profiles
│   ├── claude.md
│   └── [other authors]
├── blog/                  # Blog posts
│   ├── _index.md         # Blog list page
│   ├── post-1.md
│   ├── post-2.md
│   ├── post-3.md
│   └── post-4.md
├── contact/               # Contact section
│   └── _index.md
├── pages/                 # Static pages
│   ├── elements.md       # Design elements showcase
│   └── privacy-policy.md
└── sections/              # Homepage sections
    ├── call-to-action.md
    └── testimonial.md
```

## Content Types

### 1. Homepage (`_index.md`)
The root index file for the site homepage.

**Frontmatter:**
```yaml
---
banner:
  title: "Your Site Title"
  content: "Homepage description"
  image: "/images/banner.png"
  button:
    enable: true
    label: "Get Started"
    link: "/contact"

# Features section
features:
  - title: "Feature Title"
    image: "/images/service-4.png"
    content: "Feature description"
    button:
      enable: true
      label: "Learn More"
      link: "#"
---
```

### 2. Blog Posts (`content/blog/*.md`)

**Standard Frontmatter:**
```yaml
---
title: "Post Title"
meta_title: "SEO Title Override"
description: "Post description for SEO"
date: 2024-01-15T05:00:00Z
image: "/images/blog-post.png"
categories: ["Technology", "Development"]
author: "Author Name"
tags: ["hugo", "tailwind", "web"]
draft: false
---

Post content goes here...
```

**Required Fields:**
- `title`: Post title
- `date`: Publication date (ISO 8601 format)

**Optional Fields:**
- `meta_title`: Override for SEO title
- `description`: Meta description
- `image`: Featured image path
- `categories`: Array of category names
- `author`: Author name (links to author profile)
- `tags`: Array of tags
- `draft`: If true, hidden in production

### 3. Author Profiles (`content/authors/*.md`)

**Standard Frontmatter:**
```yaml
---
title: "Author Name"
email: "author@example.com"
image: "/images/authors/author.png"
description: "Brief bio"
social:
  - name: github
    icon: fab fa-github
    link: https://github.com/username
  - name: twitter
    icon: fab fa-twitter
    link: https://twitter.com/username
---

Extended author bio and information...
```

**Fields:**
- `title`: Author's full name
- `email`: Contact email
- `image`: Profile photo
- `description`: Short bio
- `social`: Array of social media links

### 4. Static Pages (`content/pages/*.md`)

**Standard Frontmatter:**
```yaml
---
title: "Page Title"
meta_title: "SEO Title"
description: "Page description"
draft: false
---

Page content...
```

### 5. Section Content (`content/sections/*.md`)

Special content files used by homepage sections, typically not rendered as standalone pages.

**Example (Call to Action):**
```yaml
---
enable: true
title: "Ready to get started?"
image: "/images/call-to-action.png"
description: "Call to action description"
button:
  enable: true
  label: "Contact Us"
  link: "/contact"
---
```

**Common Pattern:**
- `enable`: Toggle section visibility
- No standalone page output (used via `site.GetPage`)

## Content Authoring Guidelines

### Writing Markdown Content

#### Headings
```markdown
# H1 - Page Title (use once per page)
## H2 - Main Sections
### H3 - Subsections
#### H4 - Minor sections
```

#### Text Formatting
```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
```

#### Links
```markdown
[Link Text](https://example.com)
[Internal Link](/blog/post-1)
[Relative Link](../about)
```

#### Images
```markdown
![Alt Text](/images/example.png)
```

Or use Hugo's figure shortcode:
```markdown
{{< figure src="/images/example.png" alt="Alt text" caption="Caption" >}}
```

#### Lists
```markdown
- Unordered item
- Another item
  - Nested item

1. Ordered item
2. Second item
   1. Nested item
```

#### Code Blocks
````markdown
```javascript
function example() {
  console.log("Hello");
}
```
````

#### Blockquotes
```markdown
> This is a quote
> Second line
```

### Using Shortcodes

#### Button
```markdown
{{< button label="Click Me" link="/contact" style="solid" >}}
```

#### Notice/Alert
```markdown
{{< notice "note" >}}
This is a note.
{{< /notice >}}
```

Types: `note`, `tip`, `info`, `warning`

#### Tabs
```markdown
{{< tabs >}}
{{< tab "Tab 1" >}}
Content for tab 1
{{< /tab >}}

{{< tab "Tab 2" >}}
Content for tab 2
{{< /tab >}}
{{< /tabs >}}
```

#### Accordion
```markdown
{{< accordion "Question?" >}}
Answer content here.
{{< /accordion >}}
```

## Content Workflow

### Creating New Blog Post

1. **Create file**: `content/blog/my-new-post.md`
2. **Add frontmatter**:
```yaml
---
title: "My New Post"
description: "Post description"
date: 2026-01-19T11:00:00+07:00
image: "/images/posts/my-post.png"
categories: ["Category"]
author: "Your Name"
tags: ["tag1", "tag2"]
draft: false
---
```
3. **Write content** using Markdown
4. **Preview**: `npm run dev`
5. **Publish**: Set `draft: false` and deploy

### Creating New Author

1. **Create file**: `content/authors/author-name.md`
2. **Add frontmatter**:
```yaml
---
title: "Author Full Name"
email: "email@example.com"
image: "/images/authors/author-name.png"
description: "Short bio"
social:
  - name: github
    icon: fab fa-github
    link: https://github.com/username
---
```
3. **Add profile image** to `assets/images/authors/`
4. **Link from posts**: Use author name in post frontmatter

### Creating New Page

1. **Create file**: `content/pages/page-name.md`
2. **Add frontmatter**:
```yaml
---
title: "Page Title"
description: "Page description"
---
```
3. **Write content**
4. **Add to menu** (optional): Edit `config/_default/menus.toml`

## Image Management

### Image Locations

- **Content Images**: `assets/images/` or `static/images/`
- **Author Photos**: `assets/images/authors/`
- **Blog Images**: `assets/images/blog/` or categorized
- **UI Assets**: `assets/images/` (logo, favicon, etc.)

### Image Best Practices

1. **Naming**: Use lowercase, hyphens (e.g., `my-image.png`)
2. **Formats**: PNG, JPG, WebP supported
3. **Optimization**: Compress images before upload
4. **Sizing**: Provide reasonable dimensions (Hugo can resize)
5. **Alt Text**: Always include descriptive alt text

### Recommended Sizes

- **Featured Images**: 1200x630px (social sharing)
- **Blog Headers**: 1200x600px
- **Author Photos**: 300x300px (square)
- **Logo**: Variable (SVG preferred)
- **Favicon**: 512x512px

## Taxonomies

### Categories

Used for broad topic grouping:
```yaml
categories: ["Technology", "Design", "Business"]
```

Categories automatically generate:
- Category list page: `/categories/`
- Individual category pages: `/categories/technology/`

### Tags

Used for specific topics:
```yaml
tags: ["hugo", "tailwind", "javascript", "tutorial"]
```

Tags automatically generate:
- Tag list page: `/tags/`
- Individual tag pages: `/tags/hugo/`

## Content Best Practices

### SEO Optimization

1. **Title**: Keep under 60 characters
2. **Description**: 150-160 characters
3. **Use meta_title**: Override for better SEO if needed
4. **Keywords**: Include in content naturally
5. **Images**: Use descriptive file names and alt text
6. **Internal Links**: Link to related content

### Readability

1. **Headings**: Use hierarchical structure
2. **Paragraphs**: Keep under 3-4 sentences
3. **Lists**: Break up long content
4. **Bold/Italic**: Emphasize key points
5. **Images**: Break up text, add visual interest

### Consistency

1. **Date Format**: Use ISO 8601 (YYYY-MM-DDTHH:MM:SSZ)
2. **Categories**: Use consistent naming
3. **Tags**: Lowercase, use existing tags when possible
4. **Author Names**: Match exactly with author profile
5. **URL Structure**: Use lowercase, hyphens

## Content Types Summary

| Type | Location | List Page | Single Page | Taxonomy |
|------|----------|-----------|-------------|----------|
| Blog Posts | `content/blog/` | ✓ | ✓ | ✓ |
| Authors | `content/authors/` | ✓ | ✓ | ✗ |
| Pages | `content/pages/` | ✗ | ✓ | ✗ |
| About | `content/about/` | ✓ | ✓ | ✗ |
| Sections | `content/sections/` | ✗ | ✗ | ✗ |

## Localization (Future)

If adding multilingual support:

1. **Create language directory**: `content/spanish/`
2. **Configure language**: `config/_default/languages.toml`
3. **Duplicate content**: Translate content files
4. **Update menus**: Create `menus.es.toml`

---

**Document Version**: 1.0.0  
**Last Updated**: 2026-01-19  
**Status**: Active