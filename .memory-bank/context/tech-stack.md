# Technology Stack: Keystone One

## Core Technologies

### Static Site Generator
**Hugo Extended v0.151.0+**
- Ultra-fast static site generator written in Go
- Template-based architecture
- Built-in asset pipeline (Hugo Pipes)
- Image processing capabilities
- Markdown content processing
- Taxonomy system (categories, tags)
- Multilingual support
- Live reload during development

**Why Hugo:**
- Exceptional build speed (milliseconds)
- No dependencies or plugins to manage
- Single binary deployment
- Rich feature set out of the box
- Strong community and documentation

### Frontend Framework
**Tailwind CSS v4.0**
- Utility-first CSS framework
- JIT (Just-In-Time) compilation
- Automatic purging of unused styles
- Responsive design utilities
- Dark mode support
- Custom plugin system

**Why Tailwind:**
- Rapid development workflow
- Consistent design system
- Small production bundle sizes
- Highly customizable
- Excellent documentation

### Programming Languages

#### Go (v1.24+)
- **Purpose**: Hugo module system dependencies
- **Usage**: Module management, Go templates

#### JavaScript (ES6+)
- **Purpose**: Client-side interactivity
- **Libraries Used**:
  - Alpine.js (lightweight reactive framework)
  - Swiper.js (carousel/slider)
  - Search functionality
- **Usage**: Theme switcher, navigation, search, interactive components

#### HTML5
- **Purpose**: Semantic markup
- **Templates**: Go template syntax

#### CSS3
- **Purpose**: Styling via Tailwind
- **Preprocessor**: PostCSS with Tailwind

## Build Tools

### Node.js (v22+)
- Package manager (npm)
- Build script runner
- Development tooling

### npm Scripts
```json
{
  "dev": "hugo server",
  "build": "hugo --minify --gc",
  "format": "prettier --write .",
  "project-setup": "node scripts/projectSetup.js",
  "theme-setup": "node scripts/themeSetup.js",
  "update-theme": "node scripts/themeUpdate.js",
  "update-modules": "hugo mod get -u && hugo mod tidy",
  "remove-darkmode": "node scripts/removeDarkmode.js",
  "remove-multilang": "node scripts/removeMultilang.js"
}
```

### PostCSS
- **Purpose**: CSS processing pipeline
- **Plugins**:
  - Tailwind CSS
  - Autoprefixer (vendor prefixes)
  - PostCSS Import

### Prettier
- **Purpose**: Code formatting
- **Supports**: HTML, CSS, JS, Markdown, YAML, JSON
- **Configuration**: `.prettierrc`

### JSHint
- **Purpose**: JavaScript linting
- **Configuration**: `.jshintrc`

## Hugo Ecosystem

### Hugo Modules
The project uses Hugo's module system for dependency management:

```toml
# From module.toml
[[imports]]
path = "github.com/zeon-studio/hugoplate"

[[imports]]
path = "github.com/gethugothemes/hugo-modules/search"

[[imports]]
path = "github.com/gethugothemes/hugo-modules/pwa"

[[imports]]
path = "github.com/gethugothemes/hugo-modules/seo-tools/basic-seo"
```

**Benefits:**
- Version-controlled dependencies
- Clean module updates
- Feature modularity
- No vendor lock-in

### Hugo Pipes
Hugo's asset processing pipeline:
- **CSS**: Tailwind processing, minification
- **JavaScript**: Bundling, minification
- **Images**: Resizing, format conversion, optimization
- **Fingerprinting**: Cache busting via content hashing

## Content Management

### Markdown
- **Flavor**: CommonMark (via Goldmark)
- **Extensions**: Tables, fenced code blocks, task lists
- **Frontmatter**: YAML format
- **Syntax Highlighting**: Chroma (built into Hugo)

### Goldmark
- Hugo's default Markdown processor
- CommonMark compliant
- Extensible via renderers
- Fast parsing

## Asset Pipeline

### CSS Processing Flow
```
Tailwind CSS Source
    ↓
PostCSS Processing
    ↓
Tailwind JIT Compilation
    ↓
Autoprefixer
    ↓
Hugo Pipes (minify, fingerprint)
    ↓
Output CSS
```

### JavaScript Processing
```
Source JavaScript
    ↓
Hugo Pipes
    ↓
Minification (production)
    ↓
Fingerprinting
    ↓
Output JavaScript
```

### Image Processing
```
Source Image
    ↓
Hugo Image Processing
    ↓
Multiple Sizes Generated
    ↓
Format Conversion (WebP)
    ↓
Optimization
    ↓
Responsive Images
```

## Third-Party Integrations

### Analytics
- **Google Analytics 4**: Traffic tracking
- **Google Tag Manager**: Tag management

### Comments
- **Disqus**: Comment system integration (optional)

### Search
- **Client-side Search**: JSON index generated at build
- **Search Module**: Hugo module for search functionality

### Forms
- **Netlify Forms**: Form submission handling (via Netlify)
- **Alternative**: Third-party form services

### Maps
- **Google Maps**: Map integration support (optional)

## Deployment Platforms

### Supported Platforms

#### Netlify
- **Configuration**: `netlify.toml`
- **Build Command**: `npm run build`
- **Publish Directory**: `public`
- **Features**: Continuous deployment, forms, serverless functions

#### Vercel
- **Configuration**: `vercel.json`, `vercel-build.sh`
- **Automatic Detection**: Hugo project detected
- **Features**: CDN, edge functions, analytics

#### GitHub Pages
- **Configuration**: `.github/workflows/`
- **Build**: GitHub Actions
- **Hosting**: Free static hosting

#### GitLab Pages
- **Configuration**: `.gitlab-ci.yml`
- **Build**: GitLab CI/CD
- **Hosting**: GitLab infrastructure

#### AWS Amplify
- **Configuration**: `amplify.yml`
- **Build**: AWS build environment
- **Features**: CDN, custom domains, CI/CD

### CDN & Hosting
- Static file serving
- Global CDN distribution
- HTTPS by default
- Custom domain support

## Development Environment

### Required Software
- **Hugo Extended**: v0.151.0+
- **Node.js**: v22.0.0+
- **Go**: v1.24.0+
- **Git**: Version control

### Optional Tools
- **VS Code**: Recommended IDE
- **Hugo Language Server**: VS Code extension
- **Prettier Extension**: Code formatting
- **Markdown Extensions**: Enhanced editing

### Browser Support
- **Modern Browsers**:
  - Chrome/Edge (Chromium) - last 2 versions
  - Firefox - last 2 versions
  - Safari - last 2 versions
- **Mobile Browsers**:
  - iOS Safari - last 2 versions
  - Chrome Android - last 2 versions

## Performance Stack

### Optimization Techniques
1. **Static Generation**: Pre-rendered HTML
2. **Asset Minification**: HTML, CSS, JS minified
3. **Image Optimization**: Multiple formats and sizes
4. **CSS Purging**: Unused styles removed
5. **Asset Fingerprinting**: Optimal caching
6. **CDN Delivery**: Global edge distribution
7. **Lazy Loading**: Images and assets
8. **Code Splitting**: Modular JavaScript

### Performance Targets
- **First Contentful Paint**: < 1.0s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.0s
- **PageSpeed Score**: 95+
- **Bundle Size**: < 100KB (CSS + JS)

## Security

### Static Site Security
- **No Server Runtime**: Reduced attack surface
- **No Database**: No SQL injection risks
- **HTTPS**: Enforced by hosting
- **CSP Headers**: Content Security Policy support
- **No User Authentication**: Static content only

### Dependency Security
- **Hugo Modules**: Version-locked dependencies
- **npm Audit**: Regular security checks
- **Go Dependencies**: Managed via go.mod

## Version Control

### Git
- **Platform**: GitHub
- **Repository**: `nguyen-baolan/keystone-one`
- **Workflow**: Feature branch workflow
- **CI/CD**: Automated deployments

### Configuration Files
- `.gitignore`: Excludes build artifacts
- `.editorconfig`: Editor consistency

## Documentation Tools

### Markdown
- README.md
- DEVELOPER_DOCS.md
- Memory Bank (this system)

### Code Comments
- Go templates: Hugo comments `{{/* comment */}}`
- CSS: Standard comments `/* comment */`
- JavaScript: Standard comments `// comment`

## Testing & Quality

### Linting
- **JSHint**: JavaScript linting
- **Prettier**: Code formatting
- **Markdownlint**: Markdown style checking

### Testing
- **Manual Testing**: Browser-based
- **Build Validation**: CI/CD pipelines
- **Link Checking**: Third-party tools

### Performance Testing
- **Lighthouse**: Chrome DevTools
- **PageSpeed Insights**: Google tool
- **WebPageTest**: Detailed analysis

## Future Considerations

### Potential Additions
- **TypeScript**: Type-safe JavaScript
- **Webpack/Vite**: Advanced bundling
- **Unit Tests**: JavaScript testing framework
- **E2E Tests**: Playwright/Cypress
- **CMS Integration**: Headless CMS
- **API Integration**: External data sources

---

**Document Version**: 1.0.0  
**Last Updated**: 2026-01-19  
**Status**: Active