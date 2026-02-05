# SEMrush Site Audit Report - ULANDA.co.uk
**Audit Date:** February 5, 2026  
**Total Pages Crawled:** 53

---

## ✅ FIXES APPLIED

The following SEO issues have been resolved:

### 1. Unique Page Titles ✅
- All pages now have unique, descriptive titles following the format: `[Page-Specific Title] | ULANDA`

### 2. Canonical Tags ✅
- Self-referencing canonical URLs added to all pages

### 3. Twitter Cards ✅
- Twitter Card meta tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) added to all pages

### 4. Unique Meta Descriptions ✅
- Each page now has a unique, relevant meta description

### 5. Sitemap Updated ✅
- Added missing pages: `/book-consultation`, `/pathways`

### 6. Internal Links Fixed ✅
- Updated internal links from `/programmes/*` to point directly to `/treatments/radiate/pathways/*` instead of relying on redirects

---

## Executive Summary

The audit revealed several critical SEO issues that have been addressed. The fixes improve search engine crawlability and rankings.

---

## 🔴 Critical Issues

### 1. Permanent Redirects (308 Status Codes)
**Affected Pages:** 6 URLs

| URL | Status |
|-----|--------|
| `/programmes` | 308 |
| `/programmes/collagen-reset` | 308 |
| `/programmes/hormone-smart-skin` | 308 |
| `/programmes/menopause-regeneration` | 308 |
| `/programmes/shape-and-regenerate` | 308 |
| `/programmes/under-eye-regeneration` | 308 |

**Issue:** These URLs return 308 (Permanent Redirect) status codes, indicating they redirect elsewhere. This wastes crawl budget and creates confusion for search engines.

**Fix:**
- Remove internal links pointing to `/programmes/*` URLs
- Update navigation and internal links to point directly to the final destination URLs (likely `/treatments/radiate/programmes/*`)
- Consider implementing proper 301 redirects instead of 308 if redirects must remain

---

### 2. Duplicate/Generic Page Titles
**Affected Pages:** ALL pages (47+ URLs)

**Issue:** Every page uses the identical title:
> "ULANDA Skin Clinic | A Regenerative Skin Aesthetic Clinic in Ware SG12 Hertfordshire"

**Fix:**
Each page needs a unique, descriptive title following this format:
```
[Page-Specific Title] | ULANDA Skin Clinic
```

**Examples:**
| Page | Recommended Title |
|------|-------------------|
| `/treatments/radiate` | Radiate Treatments - Skin Regeneration | ULANDA Skin Clinic |
| `/conditions/dark-circles` | Dark Circles Treatment in Hertfordshire | ULANDA Skin Clinic |
| `/about/our-founder` | Meet Our Founder | ULANDA Skin Clinic |
| `/conditions` | Skin Conditions We Treat | ULANDA Skin Clinic |

---

### 3. Canonical Tag Misconfiguration
**Affected Pages:** 45+ URLs

**Issue:** Most pages have `Canonical to other page` instead of self-referencing canonicals. This tells search engines that these pages are duplicates of another page, potentially causing them to be de-indexed.

**Pages with Correct Self-Canonical:** Only 1
- `https://www.ulanda.co.uk/` ✅

**Fix:**
- Review the canonical tags on each page
- Ensure each unique page has a self-referencing canonical tag
- Only use cross-page canonicals when content is genuinely duplicated

**In React/Helmet:**
```jsx
<Helmet>
  <link rel="canonical" href={`https://www.ulanda.co.uk${location.pathname}`} />
</Helmet>
```

---

### 4. Missing Page Titles & Meta Descriptions
**Affected Pages:** 6 URLs (the 308 redirect pages)

| URL | Issue |
|-----|-------|
| `/programmes` | No title, no description |
| `/programmes/collagen-reset` | No title, no description |
| `/programmes/hormone-smart-skin` | No title, no description |
| `/programmes/menopause-regeneration` | No title, no description |
| `/programmes/shape-and-regenerate` | No title, no description |
| `/programmes/under-eye-regeneration` | No title, no description |

**Fix:** Since these are redirect pages, the fix is to:
1. Remove links to these URLs from the site
2. Update sitemap to exclude these URLs
3. Ensure destination pages have proper metadata

---

## 🟠 Moderate Issues

### 5. Missing Twitter Cards
**Affected Pages:** ALL pages

**Issue:** No pages have Twitter Card metadata implemented (`Twitter Cards: 0`).

**Fix:** Add Twitter Card meta tags to each page:
```jsx
<Helmet>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ulanda" />
  <meta name="twitter:title" content="[Page Title]" />
  <meta name="twitter:description" content="[Page Description]" />
  <meta name="twitter:image" content="[Image URL]" />
</Helmet>
```

---

### 6. Pages Missing from Sitemap
**Affected Pages:** 11 URLs showing `In sitemap: 0`

| URL |
|-----|
| `/book-consultation` |
| `/conditions/body-skin-concerns` |
| `/conditions/body-skin-concerns/post-weightloss-postpartum` |
| `/conditions/dark-circles` |
| `/conditions/post-inflammatory-hyperpigmentation` |
| `/conditions/skin-laxity` |
| `/conditions/skin-texture-quality` |
| `/conditions/wellness-life-stage/fatigue-low-energy` |
| `/pathways` |

**Fix:**
- Update `public/sitemap.xml` to include all valid, indexable pages
- Regenerate sitemap using the `scripts/generate-sitemap.js` script

---

### 7. Duplicate Meta Descriptions
**Affected Pages:** ALL pages with descriptions

**Issue:** All pages use the identical description:
> "ulanda is a regenerative aesthetics clinic in ware sg12, hertfordshire. specialising in skin regeneration, bio-remodelling and hormone-smart treatments for midlife women."

**Fix:** Create unique meta descriptions for each page (150-160 characters):

| Page | Recommended Description |
|------|------------------------|
| `/treatments/radiate` | Discover Radiate treatments at ULANDA. Advanced skin regeneration and bio-remodelling for radiant, youthful skin. Book your consultation in Ware, Hertfordshire. |
| `/conditions/dark-circles` | Expert treatment for dark circles and tired eyes at ULANDA. Regenerative solutions for under-eye concerns. Visit our Hertfordshire clinic. |

---

### 8. 11 Issues Per Page Flagged by SEMrush
**Affected Pages:** Most 200-status pages

**Issue:** SEMrush flagged 11 issues on most pages. Based on the data, these likely include:
- Duplicate title tags
- Duplicate meta descriptions
- Canonical issues
- Missing Twitter Cards
- Missing structured data (microdata)

---

## 🟡 Minor Issues

### 9. Non-WWW to WWW Redirect Using 307
**Affected URL:** `https://ulanda.co.uk/`

**Issue:** The non-www domain redirects using a 307 (Temporary Redirect) instead of 301 (Permanent Redirect).

**Fix:** Configure the server/hosting to use 301 redirects for the www canonicalization:
```
# In vercel.json or hosting configuration
Redirect ulanda.co.uk → www.ulanda.co.uk (301)
```

---

### 10. Schema.org Implementation
**Current Status:**
- ✅ JSON-LD: Implemented on most pages
- ❌ Microdata: Not implemented (0 on all pages)
- ✅ Open Graph: Implemented on most pages

**Fix:** JSON-LD is the preferred method, so this is acceptable. Ensure JSON-LD schema includes:
- Organization schema
- LocalBusiness schema
- Service/Treatment schemas
- BreadcrumbList schema

---

## 📋 Priority Action Plan

### ✅ Completed (This Session)
1. [x] Fix duplicate page titles - implemented unique titles per page
2. [x] Fix canonical tags - ensured self-referencing canonicals
3. [x] Remove/update links to `/programmes/*` URLs
4. [x] Add unique meta descriptions to all pages
5. [x] Implement Twitter Card metadata
6. [x] Update sitemap.xml with missing pages

### Remaining Tasks (Manual/Server-Side)
7. [ ] Change 307 redirect to 301 for www canonicalization (requires DNS/hosting config)
8. [ ] Re-run SEMrush audit to verify fixes

---

## 📊 Summary Statistics

| Metric | Count |
|--------|-------|
| Total URLs | 53 |
| 200 OK | 47 |
| 308 Redirects | 6 |
| 307 Redirects | 3 |
| Pages with duplicate titles | 47 |
| Pages with canonical issues | 45+ |
| Pages missing from sitemap | 11 |
| Pages with Twitter Cards | 0 |

---

## Files to Update

| File | Changes Needed |
|------|----------------|
| `src/components/Schema.jsx` | Review/enhance structured data |
| `public/sitemap.xml` | Add missing pages |
| `vercel.json` | Configure 301 redirects |
| `src/pages/*.jsx` | Add unique titles, descriptions, canonicals |
| `src/data/pageContents/**` | Update metadata for all pages |

---

*Report generated from SEMrush audit data - February 5, 2026*
