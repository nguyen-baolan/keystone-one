# Author Card Grid System Documentation

## Overview

The author card grid system provides a clean, consistent layout for displaying author profiles on your Hugo site. All cards have uniform heights and widths, with proper responsive behavior across devices.

### Key Features

✅ **Responsive Grid Layout**: Automatically adjusts cards per row based on screen size  
✅ **Consistent Card Heights**: All cards maintain the same height regardless of content  
✅ **Smart Image Handling**: Different display modes for photos vs logos  
✅ **Text Line Clamping**: Prevents text overflow from breaking layouts  
✅ **Fallback Support**: Graceful handling of missing images

---

## Responsive Grid Layout

The grid automatically adapts to different screen sizes:

| Screen Size | Cards Per Row | Breakpoint |
|-------------|---------------|------------|
| **Mobile** | 1 card | < 768px |
| **Tablet** | 2 cards | ≥ 768px |
| **Desktop** | 3 cards | ≥ 1024px |

---

## Image Type Configuration ⭐

### The `image_type` Parameter

This is the **most important** parameter for proper image display. It controls how images are rendered within the card's media container.

#### When to Use Each Type

| Type | Use For | Visual Result |
|------|---------|---------------|
| `photo` | Portrait photos, headshots, personal images | Image fills container, cropped to fit (object-fit: cover) |
| `logo` | Brand logos, icons, illustrations, graphics | Image contained with padding, no cropping (object-fit: contain) |

### Visual Differences

**Photo Mode (`image_type: "photo"`):**
- Image fills the entire square container
- Cropped to maintain aspect ratio
- Best for portraits and full-bleed images
- No padding around image

**Logo Mode (`image_type: "logo"`):**
- Image is contained within the square with padding
- Never cropped or distorted
- Maintains original aspect ratio
- Padding prevents edge-to-edge display
- Best for logos, icons, and illustrations

### Default Behavior

If `image_type` is **not specified**, the system defaults to `"photo"` mode.

---

## Author Frontmatter Setup

### Complete Example

```yaml
---
title: John Doe
email: john@example.com
image: "/images/authors/john-doe.jpg"
image_type: "photo"
description: Senior Software Engineer and Open Source Contributor
social:
  - name: linkedin
    icon: fa-brands fa-linkedin
    link: https://www.linkedin.com/in/johndoe/
  - name: twitter
    icon: fa-brands fa-twitter
    link: https://twitter.com/johndoe
  - name: github
    icon: fa-brands fa-github
    link: https://github.com/johndoe
---

# About John Doe

John is a passionate developer with 10+ years of experience...
```

### Field Reference

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ Yes | Author's name (max 2 lines displayed) |
| `image` | ❌ No | Path to author image (relative to static folder or assets) |
| `image_type` | ❌ No | Either `"photo"` or `"logo"` (defaults to `"photo"`) |
| `email` | ❌ No | Used for Gravatar fallback if no image provided |
| `description` | ❌ No | Short bio (max 3 lines displayed) |
| `social` | ❌ No | Array of social media links |

---

## Image Guidelines

### Recommended Specifications

- **Minimum Size**: 300x300 pixels
- **Recommended Size**: 600x600 pixels (for retina displays)
- **Aspect Ratio**: Any (container enforces 1:1 display)
- **Format**: JPG, PNG, SVG, or WebP
- **File Size**: Keep under 200KB for optimal performance

### How Aspect Ratios Are Handled

The card media container enforces a **1:1 aspect ratio** (square). Here's what happens with different input images:

**Portrait Images (taller than wide):**
- Photo mode: Crops top/bottom, fills width
- Logo mode: Letterboxed with padding

**Landscape Images (wider than tall):**
- Photo mode: Crops left/right, fills height
- Logo mode: Pillarboxed with padding

**Square Images:**
- Photo mode: Fills container perfectly
- Logo mode: Displayed with padding

### Missing Image Fallback

When no image is provided, the system follows this priority:

1. **If `image` is set**: Use the specified image
2. **If `email` is set**: Generate Gravatar from email
3. **If neither**: Display placeholder user icon (generic avatar)

---

## Text Content Guidelines

### Name Field

- **Line Clamp**: Maximum 2 lines
- **Overflow Behavior**: Text is cut off with ellipsis
- **Best Practice**: Keep names concise (ideally under 25 characters)

### Description/Summary Field

- **Line Clamp**: Maximum 3 lines
- **Overflow Behavior**: Text is cut off with ellipsis
- **Best Practice**: Write concise bios (ideally 100-150 characters)

**Tip**: Test with different screen sizes to ensure text doesn't get cut off awkwardly.

---

## Examples

### Example 1: Author with Photo Portrait

```yaml
---
title: Sarah Chen
image: "/images/authors/sarah-chen.jpg"
image_type: "photo"
description: UX Designer focused on accessibility and inclusive design
social:
  - name: linkedin
    icon: fa-brands fa-linkedin
    link: https://www.linkedin.com/in/sarahchen/
---
```

**Result**: Portrait photo fills the square container, cropped to fit.

---

### Example 2: Author with Logo/Brand Icon

```yaml
---
title: Claude
image: "/images/claude-icon.png"
image_type: "logo"
description: AI Assistant helping teams build better software
---
```

**Result**: Logo is contained within square with padding, never cropped.

---

### Example 3: Author with Gravatar Fallback

```yaml
---
title: Alex Johnson
email: alex@example.com
description: Full-stack developer and technical writer
social:
  - name: github
    icon: fa-brands fa-github
    link: https://github.com/alexj
---
```

**Result**: Gravatar image is fetched based on email address.

---

### Example 4: Author Without Image

```yaml
---
title: Team Member
description: Contributing author to our blog
---
```

**Result**: Generic user icon placeholder is displayed.

---

## Troubleshooting

### Problem: Cards Appear Different Heights

**Cause**: Content length varies (long names or descriptions)

**Solution**: 
- Keep names under 2 lines
- Keep descriptions under 3 lines
- Use concise, clear text

---

### Problem: Logo Looks Stretched or Cropped

**Cause**: `image_type` not set or set to `"photo"`

**Solution**: 
Add or change to `image_type: "logo"` in frontmatter:

```yaml
image_type: "logo"  # Add this line
```

---

### Problem: Image Doesn't Display

**Possible Causes**:
1. Incorrect image path
2. Image file doesn't exist
3. Image in wrong directory

**Solutions**:
- Check image path is relative to `static/` or `assets/` folder
- Verify file exists: `/static/images/your-image.jpg`
- Check file name spelling and extension
- Ensure proper frontmatter formatting

---

### Problem: Image Looks Blurry on Retina Displays

**Cause**: Image resolution too low

**Solution**: 
Use higher resolution images (recommended 600x600 pixels minimum)

---

### Problem: Text Gets Cut Off Mid-Word

**Cause**: Line clamping with unfortunate word breaks

**Solution**: 
- Rewrite text to be more concise
- Use shorter words in critical positions
- Test on different screen sizes

---

## Technical Details

### CSS Classes Used

- `.author-card`: Main card container (flex layout)
- `.author-card-media`: Image container (1:1 aspect ratio)
- `.author-card-media.is-logo`: Modifier for logo mode
- `.author-card-content`: Content section (flex-grow)
- `.author-card-name`: Author name (2-line clamp)
- `.author-card-description`: Description (3-line clamp)
- `.author-card-footer`: Social icons section (pinned to bottom)

### Files Modified

- `themes/hugoplate/layouts/authors/list.html` - Grid layout
- `themes/hugoplate/layouts/_partials/components/author-card.html` - Card structure
- `themes/hugoplate/assets/css/components.css` - Styling and utilities

---

## Best Practices Summary

✅ **DO:**
- Use `image_type: "logo"` for logos and icons
- Use `image_type: "photo"` for portraits and photos
- Keep names concise (under 25 characters)
- Keep descriptions brief (100-150 characters)
- Use high-resolution images (600x600px)
- Provide fallback email for Gravatar

❌ **DON'T:**
- Use photo mode for logos (will crop/distort)
- Use extremely long names or descriptions
- Use low-resolution images
- Forget to set `image_type` for logos

---

## Questions?

For issues or feature requests, please open an issue in the repository.