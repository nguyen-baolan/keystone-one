# Configuration Reference: Keystone One

## Configuration Files Overview

The project uses multiple configuration files organized by purpose and scope.

## Main Configuration: `hugo.toml`

### Core Settings
```toml
baseURL = "/"              # Production URL (must be set for deployment)
title = "Hugoplate"        # Site title
languageCode = "en-us"     # Primary language
theme = "hugoplate"        # Theme name
```

### Build Settings
```toml
paginate = 2                              # Items per page
summaryLength = 10                        # Summary word count
disqusShortname = ""                      # Disqus comments
googleAnalytics = ""                      # GA tracking ID
disableLanguages = []                     # Disabled languages
hasCJKLanguage = false                    # CJK language support
```

### Output Formats
```toml
[outputs]
home = ["HTML", "RSS", "JSON", "WebAppManifest", "SearchIndex"]
```

### Imaging Configuration
```toml
[imaging]
bg_color = "#ffffff"
quality = 90
[imaging.exif]
disableDate = false
disableLatLong = true
includeFields = ""
excludeFields = ""
```

### Markup Settings
```toml
[markup.goldmark.renderer]
unsafe = true              # Allow raw HTML in markdown

[markup.highlight]
codeFences = true
style = "monokai"
```

### Module Configuration
```toml
[module]
[module.hugoVersion]
extended = true
min = "0.144.0"
```

## Theme Parameters: `config/_default/params.toml`

### Branding
```toml
# Favicon
favicon = "images/favicon.png"

# Logo
logo = "images/logo.png"
logo_darkmode = "images/logo-darkmode.png"
logo_width = "150"
logo_height = "30"
logo_text = "Hugoplate"
logo_webp = true
```

### Theme Behavior
```toml
# Theme
theme_switcher = true
theme_default = "system"  # Options: light, dark, system

# Navbar
navbar_fixed = false
```

### Metadata
```toml
[metadata]
meta_image = "images/og-image.png"
meta_author = "zeon.studio"
meta_description = "hugo tailwind boilerplate"
```

### Features

#### Search
```toml
[search]
enable = true
primary_color = "#121212"
include_sections = ["blog"]
show_image = true
show_description = true
show_tags = true
show_categories = true
```

#### Navigation Button
```toml
[navigation_button]
enable = true
label = "Get Started"
link = "contact"
```

#### Cookies
```toml
[cookies]
enable = false
expire_days = 60
content = "Cookie consent message"
button = "I Accept"
```

#### Preloader
```toml
[preloader]
enable = false
preloader = ""
```

## Menu Configuration: `config/_default/menus.toml`

### Main Navigation
```toml
[[main]]
name = "Home"
url = "/"
weight = 1

[[main]]
name = "About"
url = "about/"
weight = 2

[[main]]
name = "Blog"
url = "blog/"
weight = 3
```

### Footer Navigation
```toml
[[footer]]
name = "About"
url = "about/"
weight = 1

[[footer]]
name = "Privacy Policy"
url = "privacy-policy/"
weight = 2
```

## Module Configuration: `config/_default/module.toml`

### Theme Module
```toml
[[imports]]
path = "github.com/zeon-studio/hugoplate"
```

### Feature Modules
```toml
[[imports]]
path = "github.com/gethugothemes/hugo-modules/search"
disable = false

[[imports]]
path = "github.com/gethugothemes/hugo-modules/pwa"
disable = false

[[imports]]
path = "github.com/gethugothemes/hugo-modules/seo-tools/basic-seo"
disable = false
```

## Design Tokens: `data/theme.json`

### Color System
```json
{
  "colors": {
    "default": {
      "theme_color": {
        "primary": "#121212",
        "body": "#fff",
        "border": "#eaeaea",
        "light": "#f6f6f6",
        "dark": "#040404"
      },
      "text_color": {
        "text": "#444444",
        "text_dark": "#040404",
        "text_light": "#717171"
      }
    },
    "darkmode": {
      "theme_color": {
        "primary": "#fff",
        "body": "#1c1c1c",
        "border": "#3E3E3E",
        "light": "#222222",
        "dark": "#fff"
      },
      "text_color": {
        "text": "#B4AFB6",
        "text_dark": "#fff",
        "text_light": "#B4AFB6"
      }
    }
  }
}
```

### Typography System
```json
{
  "fonts": {
    "font_family": {
      "primary": "Heebo:wght@400;600",
      "primary_type": "sans-serif",
      "secondary": "Signika:wght@500;700",
      "secondary_type": "sans-serif"
    },
    "font_size": {
      "base": "16",
      "scale": "1.2"
    }
  }
}
```

## Social Links: `data/social.json`

```json
{
  "main": [
    {
      "name": "github",
      "icon": "fab fa-github",
      "link": "https://github.com/"
    },
    {
      "name": "twitter",
      "icon": "fab fa-twitter",
      "link": "https://twitter.com/"
    },
    {
      "name": "linkedin",
      "icon": "fab fa-linkedin",
      "link": "https://linkedin.com/"
    }
  ]
}
```

## Environment-Specific Configuration

### Development
- Use `hugo server` for local development
- Hot reload enabled
- Draft content visible
- Fast render mode

### Production
- Set correct `baseURL` in `hugo.toml`
- Minification enabled
- Asset fingerprinting
- Draft content hidden

## Configuration Best Practices

### 1. BaseURL Management
```toml
# Development
baseURL = "http://localhost:1313"

# Production (update before deployment)
baseURL = "https://yourdomain.com"
```

### 2. Performance Settings
```toml
# Enable caching
[caches]
[caches.assets]
dir = ":resourceDir/_gen"
maxAge = "24h"

[caches.images]
dir = ":resourceDir/_gen"
maxAge = "24h"
```

### 3. SEO Configuration
```toml
# Enable sitemap
[sitemap]
changefreq = "monthly"
filename = "sitemap.xml"
priority = 0.5

# Taxonomies
[taxonomies]
category = "categories"
tag = "tags"
```

## Configuration Workflow

### Modifying Colors
1. Edit `data/theme.json`
2. Update both `default` and `darkmode` sections
3. Rebuild site to apply changes

### Changing Fonts
1. Edit `data/theme.json` → `fonts.font_family`
2. Use Google Fonts format: `FontName:wght@weights`
3. Rebuild to load new fonts

### Adding Menu Items
1. Edit `config/_default/menus.toml`
2. Add `[[main]]` or `[[footer]]` block
3. Set `name`, `url`, `weight`
4. Hugo automatically updates navigation

### Enabling/Disabling Features
1. Edit `config/_default/params.toml`
2. Find feature section (e.g., `[search]`, `[cookies]`)
3. Set `enable = true` or `enable = false`
4. Rebuild site

## Common Configuration Tasks

### Task: Change Site Title
**File**: `hugo.toml`
```toml
title = "Your New Site Title"
```

### Task: Enable Google Analytics
**File**: `hugo.toml`
```toml
googleAnalytics = "G-XXXXXXXXXX"
```

### Task: Configure Disqus Comments
**File**: `hugo.toml`
```toml
disqusShortname = "your-disqus-shortname"
```

### Task: Modify Primary Color
**File**: `data/theme.json`
```json
{
  "colors": {
    "default": {
      "theme_color": {
        "primary": "#FF5733"
      }
    }
  }
}
```

### Task: Add Navigation Item
**File**: `config/_default/menus.toml`
```toml
[[main]]
name = "Services"
url = "services/"
weight = 4
```

## Configuration Validation

### Checklist Before Deployment
- [ ] `baseURL` set to production URL
- [ ] Google Analytics ID configured (if using)
- [ ] Social links updated
- [ ] Meta image paths correct
- [ ] Logo and favicon paths valid
- [ ] Menu links functional
- [ ] Theme colors finalized
- [ ] Font selections confirmed

## Troubleshooting

### Issue: Changes Not Appearing
**Solution**: Clear Hugo cache
```bash
hugo server --ignoreCache
# Or delete resources/_gen directory
```

### Issue: Fonts Not Loading
**Solution**: Check Google Fonts syntax
```json
"primary": "Inter:wght@400;600;700"  // Correct
"primary": "Inter 400 600"            // Wrong
```

### Issue: Dark Mode Not Working
**Solution**: Verify theme switcher enabled
```toml
theme_switcher = true
theme_default = "system"
```

---

**Document Version**: 1.0.0  
**Last Updated**: 2026-01-19  
**Status**: Active