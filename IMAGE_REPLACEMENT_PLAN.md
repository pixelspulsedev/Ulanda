# Image Replacement Plan for Ulanda Web App

## About Ulanda
Ulanda is a **regenerative aesthetics clinic** in Ware, Hertfordshire, specializing in:
- Skin regeneration and bio-remodelling
- Hormone-smart treatments for midlife women
- Supporting women through postpartum, perimenopause, and menopause journeys
- Natural, confidence-building results

### Core Values
- **Regenerative-first approach** - Natural healing and restoration
- **Women's wellness** - Holistic care for hormones, skin, and wellbeing
- **Personalized care** - Individualized treatment pathways
- **Evidence-based** - Science-backed aesthetics
- **Confidence without perfection** - Natural enhancement

---

## Scope
**Include:** All hardcoded image URLs in JSX component files (`src/pages/*.jsx`, `src/components/*.jsx`)  
**Exclude:** 
- Image paths in data files (`src/data/**/*.js`) - as requested
- Logo and branding assets (`/assets/img/ui/Logo.webp`, `/assets/img/ui/accent.webp`)
- Founder photos (`helen-balogun-founder-ware*.webp`) - personal/branded images

---

## Image Inventory & Replacements

### 1. Home.jsx

| Section | Current Image | Context | Replacement (Unsplash/Pexels) |
|---------|--------------|---------|------------------------------|
| Who We Help - Postpartum | `photo-1515377905703-c4788e51af15` | Postpartum women, new mothers | `https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1200` - Serene woman with baby, nurturing |
| Who We Help - Perimenopause | `photo-1588510904409-47e2f767540d` | Women 40-50, skin changes | `https://images.pexels.com/photos/5938358/pexels-photo-5938358.jpeg?auto=compress&cs=tinysrgb&w=1200` - Confident middle-aged woman |
| Who We Help - Menopause | `photo-1551847677-dc82d764e1eb` | Mature women, elegance | `https://images.pexels.com/photos/5067738/pexels-photo-5067738.jpeg?auto=compress&cs=tinysrgb&w=1200` - Radiant mature woman |
| Programs - Menopause Regeneration | `photo-1570172619644-dfd03ed5d881` | Spa/wellness treatment | `https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200` - Facial spa treatment |
| Programs - Under-Eye | `photo-1616394584738-fc6e612e71b9` | Eye area skincare | `https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200` - Eye treatment/skincare |
| Programs - Collagen Reset | `photo-1601412436009-d964bd02edbc` | Skin rejuvenation | `https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1200` - Skincare/facial mask |
| Programs - Hormone-Smart | `photo-1512290923902-8a9f81dc236c` | Wellness, balance | `https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200` - Relaxation spa |
| Programs - Shape & Regenerate | `photo-1518310383802-640c2de311b2` | Body wellness | `https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1200` - Body treatment |

### 2. About.jsx

| Section | Current Image | Context | Replacement |
|---------|--------------|---------|-------------|
| Pathways refresh | `photo-1512290923902-8a9f81dc236c` | Hydration, brightness | `https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800` - Spa facial |
| Pathways renew | `photo-1616394584738-fc6e612e71b9` | Regeneration, repair | `https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800` - Skin treatment |
| Pathways restore | `photo-1544161515-4ab6ce6db874` | Lift, natural enhancement | `https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800` - Facial massage |
| Pathways radiate | `photo-1522337660859-02fbefca4702` | Energy, wellness | `https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800` - IV therapy/wellness |

### 3. Philosophy.jsx

| Section | Current Image | Context | Replacement |
|---------|--------------|---------|-------------|
| Pathway image | `photo-1616394584738-fc6e612e71b9` | Skincare science | `https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200` |
| Women wellness 1 | `photo-1515377905703-c4788e51af15` | Nurturing care | `https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=2070` |
| Women wellness 2 | `photo-1588510904409-47e2f767540d` | Confidence | `https://images.pexels.com/photos/5938358/pexels-photo-5938358.jpeg?auto=compress&cs=tinysrgb&w=1887` |
| Women wellness 3 | `photo-1551847677-dc82d764e1eb` | Mature beauty | `https://images.pexels.com/photos/5067738/pexels-photo-5067738.jpeg?auto=compress&cs=tinysrgb&w=2070` |

### 4. Pathways.jsx

| Section | Current Image | Context | Replacement |
|---------|--------------|---------|-------------|
| Hero background | `photo-1570172619644-dfd03ed5d881` | Spa/wellness ambiance | `https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=2070` |

### 5. Programme.jsx

| Section | Current Image | Context | Replacement |
|---------|--------------|---------|-------------|
| Introduction | `photo-1616394584738-fc6e612e71b9` | Skincare treatment | `https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200` |
| Secondary | `photo-1616394584738-fc6e612e71b9` | Skincare | `https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200` |

### 6. ProgrammeDetail.jsx

| Section | Current Image | Context | Replacement |
|---------|--------------|---------|-------------|
| Detail image | `photo-1515377905703-c4788e51af15` | Program visual | `https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=2070` |

---

## Image Selection Criteria

All replacement images were selected based on:

1. **Theme Alignment** - Spa, wellness, skincare, feminine elegance
2. **Target Audience** - Women 30-60+, diverse, confident
3. **Color Palette** - Soft, warm tones matching Ulanda's brand (cream, soft browns, natural)
4. **Emotion** - Calm, confident, nurturing, professional
5. **Quality** - High resolution, professional photography
6. **License** - Free stock images (Pexels/Unsplash) for commercial use

---

## Files to Modify

1. `src/pages/Home.jsx` - 8 images
2. `src/pages/About.jsx` - 4 images (in pathwaysMap)
3. `src/pages/Philosophy.jsx` - 4 images
4. `src/pages/Pathways.jsx` - 1 image
5. `src/pages/Programme.jsx` - 2 images
6. `src/pages/ProgrammeDetail.jsx` - 1 image

**Total: 20 image replacements**

---

## Files NOT to Modify

- `src/data/**/*.js` - Data files with image paths
- `src/components/Navbar.jsx` - Logo (branding asset)
- `src/components/Footer.jsx` - Uses logo from common data
- Any `/assets/img/ui/*.webp` references - UI/decorative elements
- Founder images - Personal branding

---

## Implementation Order

1. ✅ Create this plan document
2. ✅ Home.jsx - Main landing page (highest visibility) - 8 images replaced
3. ✅ About.jsx - Brand story page - 7 images replaced (including hero)
4. ✅ Philosophy.jsx - Values page - 9 images replaced (including 2 heroes)
5. ✅ Pathways.jsx - Services overview - 1 image replaced
6. ✅ Programme.jsx - Programs list - 3 images replaced (including hero)
7. ✅ ProgrammeDetail.jsx - Individual program pages - 3 images replaced

**Total: 31 image replacements completed**

---

## Images NOT Modified (By Design)

| File | Image Path | Reason |
|------|-----------|--------|
| Home.jsx | `hero.image` (from data) | Data file - not to be touched |
| Home.jsx | Preload link | References data file image |
| Home.jsx | `helen-balogun-founder-ware.webp` | Founder personal branding |
| Founder.jsx | `helen-balogun-founder-ware.webp` | Founder personal branding |
| Founder.jsx | `helen-balogun-founder-ware-1.webp` | Founder personal branding |
| All pages | `/assets/img/ui/accent.webp` | UI decorative element |
| Navbar.jsx | `/assets/img/ui/Logo.webp` | Brand logo |
| All data files | `src/data/**/*.js` | As requested |

---

## Notes

- Using Pexels URLs for consistency and reliability
- All images use `auto=compress&cs=tinysrgb` for optimization
- Width parameters (`w=800`, `w=1200`, `w=2070`) match original usage contexts
- Images showcase diverse women of various ages, aligned with Ulanda's inclusive approach
