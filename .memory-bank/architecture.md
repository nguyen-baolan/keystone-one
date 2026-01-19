# System Architecture: Keystone One

## Overview

Keystone One follows a static site generator (SSG) architecture using Hugo with a modular theme system. The architecture prioritizes performance, maintainability, and developer experience.

## Architecture Pattern

**Pattern**: Static Site Generator (JAMstack Architecture)

- **Static Generation**: Pre-rendered HTML at build time
- **No Backend Runtime**: Pure static files served via CDN
- **Client-Side Enhancement**: Progressive JavaScript for interactivity
- **API Integration**: Third-party services for dynamic features

## Component Architecture

### Layer 1: Content Layer
```
content/
├── _index.md              # Homepage content
├── about/                 # About pages
├── authors/               # Author profiles
├── blog/                  # Blog posts
├── contact/               # Contact pages
├── pages/                 # Static pages
└── sections/              # Homepage sections
```

**Responsibility**: Markdown content files with YAML frontmatter

### Layer 2: Data Layer
```
data/
├── social.json           # Social media links
└── theme.json            # Design tokens (colors, fonts)
```

**Responsibility**: Structured JSON data for site configuration

### Layer 3: Configuration Layer
```
config/
└── _default/
    ├── menus.toml        # Navigation menus
    ├── module.toml       # Hugo modules
    └── params.toml       # Theme parameters
hugo.toml                 # Main configuration
```

**Responsibility**: Site-wide settings and behavior configuration

### Layer 4: Theme Layer
```
themes/hugoplate/
├── assets/               # CSS, JS, plugins
├── layouts/              # HTML templates
│   ├── _partials/       # Reusable components
│   └── [page types]     # Page templates
```

**Responsibility**: Presentation logic and styling

### Layer 5: Asset Layer
```
assets/
├── css/                  # Custom styles
└── images/               # Site images
```

**Responsibility**: Site-specific assets and customizations

## Build Pipeline

```
┌─────────────────┐
│  Content (.md)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Hugo Process   │──────┐
│  - Templates    │      │
│  - Data merge   │      │
│  - Processing   │      │
└────────┬────────┘      │
         │               │
         ▼               ▼
┌─────────────────┐  ┌──────────────┐
│  Tailwind CSS   │  │  Image Proc  │
│  Processing     │  │  Optimization│
└────────┬────────┘  └──────┬───────┘
         │                  │
         └────────┬─────────┘
                  ▼
         ┌────────────────┐
         │  Static Files  │
         │  (public/)     │
         └────────────────┘
```

## Design Patterns

### 1. Template Pattern (Hugo Layouts)
- Base template (`baseof.html`) defines structure
- Page-specific templates extend base
- Partials provide reusable components

### 2. Token-Based Theming
- Design tokens in `data/theme.json`
- Tailwind plugin consumes tokens
- Dynamic CSS generation at build time

### 3. Module Pattern
- Hugo Modules for feature isolation
- Composable functionality
- Version-controlled dependencies

### 4. Content Modeling
- Frontmatter for metadata
- Taxonomy system (categories, tags)
- Author relationship modeling

## Key Technologies

### Core Stack
- **Hugo Extended v0.151+**: Static site generator
- **Tailwind CSS v4.0**: Utility-first CSS framework
- **Go v1.24+**: Hugo dependency and module system
- **Node.js v22+**: Build tooling

### Build Tools
- **Hugo Pipes**: Asset processing pipeline
- **PostCSS/AutoPrefixer**: CSS post-processing
- **Prettier**: Code formatting
- **JSHint**: JavaScript linting

### Modules System
```
Hugo Modules (via module.toml):
├── Theme Module (hugoplate)
├── Search Module
├── SEO Tools Module
├── PWA Module
└── Additional feature modules
```

## Data Flow

### Content Rendering Flow
```
Markdown File
    ↓
Frontmatter Parsing
    ↓
Template Selection (based on type/layout)
    ↓
Data Injection (params, site config)
    ↓
Partial Assembly
    ↓
HTML Generation
    ↓
Asset Processing (CSS/JS)
    ↓
Static File Output
```

### Theme Token Flow
```
theme.json
    ↓
Tailwind Plugin (tw-theme.js)
    ↓
CSS Variable Generation
    ↓
Utility Class Creation
    ↓
Processed CSS Output
```

## Directory Structure Conventions

### Override Pattern
```
Project Root
├── layouts/              # Overrides theme layouts
│   └── [same path]      # Matches theme path
└── themes/hugoplate/
    └── layouts/          # Original templates
```

**Rule**: Files in project root override theme files at same path

### Asset Organization
```
assets/
├── css/
│   └── custom.css       # Custom styles only
└── images/              # Project-specific images

themes/hugoplate/assets/
├── css/                 # Base theme styles
├── js/                  # Theme JavaScript
└── plugins/             # Third-party assets
```

## Performance Architecture

### Optimization Strategies
1. **Build-Time Generation**: All HTML pre-rendered
2. **Asset Fingerprinting**: Cache-busting via Hugo pipes
3. **Image Processing**: Responsive images, WebP conversion
4. **CSS Purging**: Unused styles removed (Tailwind)
5. **Lazy Loading**: Deferred CSS/JS loading
6. **Minification**: Production asset compression

### Caching Strategy
- **Static Files**: Long cache headers (CDN)
- **Fingerprinted Assets**: Immutable caching
- **HTML Pages**: Short TTL for updates

## Integration Points

### External Services
- **Search**: Client-side search index generation
- **Comments**: Disqus integration (optional)
- **Analytics**: Google Analytics / Tag Manager
- **Forms**: Static form handling (Netlify/third-party)
- **CDN**: Netlify/Vercel/Custom CDN

### API Consumption
- Build-time: Hugo data files, remote data sources
- Runtime: JavaScript-based third-party integrations

## Security Model

### Static Site Security
- **No Server-Side Code**: Reduced attack surface
- **No Database**: No SQL injection risks
- **CDN Delivery**: DDoS protection
- **HTTPS**: Enforced by hosting platforms

### Content Security
- **Sanitized Output**: Hugo template escaping
- **CSP Headers**: Configured via hosting platform
- **Dependency Management**: Hugo modules version control

## Scalability Considerations

### Content Scaling
- Hugo handles thousands of pages efficiently
- Incremental builds for large sites
- Pagination for large lists

### Build Scaling
- Parallel processing during build
- Caching of generated resources
- CI/CD optimization strategies

## Development Workflow Architecture

```
Local Development
    ↓
Hugo Server (--watch mode)
    ↓
Hot Reload (Tailwind CSS)
    ↓
Real-time Preview
```

```
Production Build
    ↓
npm run build
    ↓
Hugo (production config)
    ↓
Asset optimization
    ↓
Static output (public/)
    ↓
Deploy to CDN
```

## Extensibility Points

1. **Layouts**: Override or create new templates
2. **Partials**: Add custom components
3. **Shortcodes**: Custom markdown extensions
4. **Data Files**: Structured data integration
5. **Modules**: Add feature modules
6. **Tailwind Plugin**: Extend theme tokens
7. **Hugo Hooks**: Template hooks for injection

---

**Document Version**: 1.0.0  
**Last Updated**: 2026-01-19  
**Status**: Active