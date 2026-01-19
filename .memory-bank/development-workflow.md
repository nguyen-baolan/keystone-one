# Development Workflow: Keystone One

## Overview

This document outlines the development workflow, build processes, and deployment procedures for the Keystone One project.

## Prerequisites

### Required Tools

- **Hugo Extended**: v0.151.0 or higher
- **Node.js**: v22.0.0 or higher
- **Go**: v1.24.0 or higher
- **Git**: For version control
- **npm**: Package manager (comes with Node.js)

### Verification

```bash
# Check installed versions
hugo version
node --version
go version
git --version
```

## Initial Setup

### 1. Clone Repository
```bash
git clone https://github.com/nguyen-baolan/keystone-one.git
cd keystone-one
```

### 2. Project Setup
```bash
# Run project setup script (first time only)
npm run project-setup
```

This script:
- Creates Hugo theme folder structure
- Clones Hugoplate theme
- Moves example site to root
- Configures project structure

### 3. Install Dependencies
```bash
npm install
```

Installs:
- Build tools
- Prettier (code formatting)
- JSHint (JavaScript linting)
- PostCSS dependencies
- Other development utilities

## Development Commands

### Start Development Server
```bash
npm run dev
```

**What it does:**
- Starts Hugo server in watch mode
- Enables hot reload
- Runs on `http://localhost:1313`
- Shows draft content
- Displays build warnings/errors

**Output:**
```
Web Server is available at //localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

### Build for Production
```bash
npm run build
```

**What it does:**
- Compiles all templates
- Processes Tailwind CSS
- Optimizes images
- Minifies assets
- Generates static files in `public/`
- Hides draft content

### Format Code
```bash
npm run format
```

**What it does:**
- Runs Prettier on all files
- Formats Markdown, HTML, CSS, JS
- Ensures consistent code style

### Preview Production Build
```bash
# Build first
npm run build

# Serve the public directory
# (requires a simple HTTP server)
npx serve public
```

## Development Workflow

### Standard Development Flow

```
1. Create/Edit Content
   ↓
2. Start Dev Server (npm run dev)
   ↓
3. Preview Changes (localhost:1313)
   ↓
4. Iterate & Refine
   ↓
5. Format Code (npm run format)
   ↓
6. Commit Changes (git)
   ↓
7. Build (npm run build)
   ↓
8. Deploy
```

### Feature Development Flow

```
1. Create Feature Branch
   git checkout -b feature/feature-name
   ↓
2. Develop Feature
   - Edit files
   - Test locally
   - Preview changes
   ↓
3. Test Thoroughly
   - Cross-browser testing
   - Mobile responsiveness
   - Performance check
   ↓
4. Format & Lint
   npm run format
   ↓
5. Commit Changes
   git add .
   git commit -m "feat: description"
   ↓
6. Push to Remote
   git push origin feature/feature-name
   ↓
7. Create Pull Request
   ↓
8. Review & Merge
   ↓
9. Deploy
```

## Common Development Tasks

### Create New Blog Post

```bash
# 1. Create file
touch content/blog/my-new-post.md

# 2. Add frontmatter and content
# (see content-structure.md for template)

# 3. Preview
npm run dev
```

### Add New Page

```bash
# 1. Create file
touch content/pages/new-page.md

# 2. Add content

# 3. Add to menu (optional)
# Edit config/_default/menus.toml

# 4. Preview
npm run dev
```

### Customize Theme

```bash
# 1. Identify file to customize in themes/hugoplate/

# 2. Copy to project root with same path
cp themes/hugoplate/layouts/[path] layouts/[path]

# 3. Edit the copied file

# 4. Preview changes
npm run dev
```

### Update Theme Colors

```bash
# 1. Edit data/theme.json

# 2. Rebuild (Hugo will auto-reload in dev mode)
npm run dev
```

### Add Images

```bash
# 1. Add image to assets/images/
cp ~/Downloads/image.png assets/images/

# 2. Reference in content
# ![Alt text](/images/image.png)

# 3. Hugo will process and optimize
```

## Build Process Details

### Development Build

```bash
hugo server -D --disableFastRender
```

**Flags:**
- `-D`: Include draft content
- `--disableFastRender`: Full rebuild on change
- `--watch`: Watch for file changes (default)
- `--navigateToChanged`: Navigate to changed content

### Production Build

```bash
hugo --minify --gc
```

**Flags:**
- `--minify`: Minify HTML, CSS, JS
- `--gc`: Run garbage collection after build
- `--environment production`: Set production environment

### Build Output

```
public/
├── index.html              # Homepage
├── blog/                   # Blog posts
│   ├── index.html
│   ├── post-1/
│   │   └── index.html
├── categories/             # Category pages
├── tags/                   # Tag pages
├── images/                 # Processed images
├── css/                    # Compiled CSS
├── js/                     # JavaScript files
├── sitemap.xml            # SEO sitemap
└── index.json             # Search index
```

## Hugo Module Management

### Update All Modules
```bash
npm run update-modules
```

Or manually:
```bash
hugo mod get -u
hugo mod tidy
```

### Update Theme
```bash
npm run update-theme
```

### Clear Module Cache
```bash
hugo mod clean
```

## Advanced Workflows

### Remove Dark Mode
```bash
# Before project-setup
npm run remove-darkmode

# Then run project-setup
npm run project-setup
```

### Remove Multilingual Support
```bash
# Before project-setup
npm run remove-multilang

# Then run project-setup
npm run project-setup
```

### Reset Theme
```bash
# Re-run theme setup
npm run theme-setup

# Then project setup
npm run project-setup
```

## Debugging

### Clear Hugo Cache
```bash
# Remove generated resources
rm -rf resources/_gen

# Restart server
npm run dev
```

Or:
```bash
hugo server --ignoreCache
```

### Verbose Build
```bash
hugo --verbose --debug
```

### Check Hugo Environment
```bash
hugo env
```

## Git Workflow

### Commit Message Convention

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, styling
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "feat(blog): add new post about Hugo"
git commit -m "fix(navigation): correct mobile menu toggle"
git commit -m "docs(readme): update installation instructions"
git commit -m "style(css): format Tailwind classes"
```

### Branch Naming

```
<type>/<description>

Examples:
feature/add-search
fix/navigation-bug
docs/update-readme
refactor/simplify-templates
```

### Standard Git Commands

```bash
# Check status
git status

# Stage changes
git add .
git add <file>

# Commit
git commit -m "message"

# Push
git push origin <branch>

# Pull latest
git pull origin main

# Create branch
git checkout -b <branch-name>

# Switch branch
git checkout <branch-name>

# Merge branch
git merge <branch-name>
```

## Deployment

### Netlify

**Automatic Deployment:**
1. Push to `main` branch
2. Netlify auto-builds and deploys
3. Preview at `https://[site-name].netlify.app`

**Manual Deployment:**
```bash
# Build
npm run build

# Deploy via Netlify CLI
netlify deploy --prod
```

**Configuration:** `netlify.toml`
```toml
[build]
publish = "public"
command = "npm run build"

[build.environment]
HUGO_VERSION = "0.151.0"
```

### Vercel

**Automatic Deployment:**
1. Connect GitHub repository
2. Vercel auto-deploys on push
3. Preview at `https://[project].vercel.app`

**Configuration:** `vercel.json`

### GitHub Pages

```bash
# Build
npm run build

# Deploy to gh-pages branch
npm run deploy
# (requires additional script setup)
```

### Manual/Custom Hosting

```bash
# Build
npm run build

# Upload public/ directory to server
rsync -avz public/ user@server:/var/www/html/

# Or use FTP/SFTP client
```

## Performance Optimization

### Image Optimization
```bash
# Hugo automatically processes images
# Generates multiple sizes
# Converts to WebP (if enabled)
```

### CSS Optimization
```bash
# Tailwind purges unused CSS
# Hugo minifies in production
# Automatic fingerprinting for cache busting
```

### Build Speed Optimization
```bash
# Use build cache
hugo --gc

# Skip unnecessary rebuilds
hugo --navigateToChanged
```

## Testing Checklist

### Before Deployment

- [ ] Build succeeds without errors
- [ ] All links work (internal & external)
- [ ] Images load correctly
- [ ] Navigation functional
- [ ] Mobile responsive
- [ ] Cross-browser compatible
- [ ] Search works (if enabled)
- [ ] Forms functional (if applicable)
- [ ] SEO meta tags present
- [ ] Performance acceptable (PageSpeed)

### Testing Commands

```bash
# Build test
npm run build

# Link checking (requires additional tool)
hugo server
# Then use broken link checker

# Lighthouse (Chrome DevTools)
# Open localhost:1313 in Chrome
# Run Lighthouse audit
```

## Troubleshooting

### Issue: Hugo Not Found
**Solution:**
```bash
# Install Hugo Extended
brew install hugo
# Or download from https://gohugo.io/installation/
```

### Issue: Module Errors
**Solution:**
```bash
hugo mod clean
hugo mod get -u
```

### Issue: Build Fails
**Solution:**
```bash
# Check Hugo version
hugo version

# Clear cache
rm -rf resources/_gen

# Verbose output
hugo --verbose
```

### Issue: Changes Not Reflecting
**Solution:**
```bash
# Restart server with cache ignore
hugo server --ignoreCache

# Or clear browser cache
```

## Quick Reference

### Essential Commands
```bash
npm run dev          # Start development
npm run build        # Build production
npm run format       # Format code
hugo mod get -u      # Update modules
hugo server --help   # Hugo help
```

### Directory Navigation
```bash
content/            # Edit content here
layouts/            # Override templates
assets/             # Images, custom CSS
config/             # Configuration files
public/             # Build output (don't edit)
```

---

**Document Version**: 1.0.0  
**Last Updated**: 2026-01-19  
**Status**: Active