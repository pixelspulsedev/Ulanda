# ULANDA Authority Journal — Implementation Plan

**Version:** 1.0  
**Date:** 26 February 2026  
**Stack:** React 18 + vite-react-ssg + React Router 6 + Tailwind/DaisyUI  
**Deploy:** Vercel (static SSG)

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Phase 1 — Data Layer](#2-phase-1--data-layer)
3. [Phase 2 — Page Components](#3-phase-2--page-components)
4. [Phase 3 — Routing & SSG](#4-phase-3--routing--ssg)
5. [Phase 4 — Structured Data / Schema](#5-phase-4--structured-data--schema)
6. [Phase 5 — Bidirectional Cross-Linking](#6-phase-5--bidirectional-cross-linking)
7. [Phase 6 — Sitemap, Robots & Indexation](#7-phase-6--sitemap-robots--indexation)
8. [Phase 7 — Vercel Rewrites](#8-phase-7--vercel-rewrites)
9. [Phase 8 — QA & Validation](#9-phase-8--qa--validation)
10. [Phase 9 — Performance](#10-phase-9--performance)
11. [Deliverables Checklist](#11-deliverables-checklist)
12. [Risk Register](#12-risk-register)

---

## 1. Architecture Overview

### Current Stack Summary

| Layer | Technology |
|---|---|
| Framework | React 18 (SPA with SSG via `vite-react-ssg`) |
| Routing | React Router 6 (`createBrowserRouter` style via SSG wrapper) |
| Styling | Tailwind CSS + DaisyUI |
| Build | Vite 7 → static HTML per route (`dirStyle: 'nested'`) |
| Deploy | Vercel (`vercel.json` with `cleanUrls: true`) |
| Data | JS modules in `src/data/pageContents/` |
| Sitemap | Node script `scripts/generate-sitemap.js` (runs post-build) |
| Schema | `src/components/Schema.jsx` (LocalBusiness, Service, Breadcrumb, FAQ) |

### Target URL Pattern

```
/journal/                               → Journal landing/index page
/journal/:slug                          → Individual journal article
```

Examples:
- `/journal/why-treatments-fail-barrier-instability`
- `/journal/hard-water-skin-barrier`
- `/journal/over-exfoliated-skin-repair`
- `/journal/dehydrated-vs-dry-skin`
- `/journal/inflammation-driven-pigmentation`

### Navigation Rule

Journal pages are **NOT** added to the primary `Navbar.jsx` menu.  
They are discoverable **only** through:
- Internal links from Condition / Treatment / Signature pages
- Sitemap
- Breadcrumbs
- Search engine crawling

---

## 2. Phase 1 — Data Layer

### 2.1 Create Journal Data File

**File:** `src/data/pageContents/journal/journalArticles.js`

Each article object follows a structure consistent with the existing `blogs.js` pattern:

```js
export const journalArticles = [
  {
    status: "published",
    id: "why-treatments-fail-barrier-instability",           // slug
    title: "Why Treatments Fail — Barrier Instability",
    subtitle: "Clinical context for failed aesthetic outcomes",
    author: "Helen Balogun",
    authorCredential: "Advanced Nurse Practitioner & Nurse Independent Prescriber",
    date: "2026-02-26",
    readTime: "7 min read",
    image: "/assets/img/journal/why-treatments-fail-barrier-instability.webp",
    seo: {
      title: "Why Treatments Fail — Barrier Instability | ULANDA Journal",
      description: "Clinical exploration of how compromised skin barrier…",
      canonical: "https://www.ulanda.co.uk/journal/why-treatments-fail-barrier-instability"
    },
    // Cross-link references (used for bidirectional linking)
    relatedConditions: ["rosacea", "eczema", "dryness-sensitivity"],
    relatedTreatments: ["barrier-support-facial", "led-light-therapy"],
    relatedSignatures: ["skin-barrier-repair-recovery"],
    // Structured content array (same schema as blogs)
    content: [
      {
        type: "section",
        title: "Introduction",
        content: ["..."]
      },
      // ...
    ]
  },
  // ... more articles
];

// Helper functions
export const getJournalArticle = (slug) =>
  journalArticles.find(a => a.id === slug && a.status === 'published');

export const getPublishedJournals = () =>
  journalArticles.filter(a => a.status === 'published');

// Reverse lookups for bidirectional linking
export const getJournalsForCondition = (conditionSlug) =>
  journalArticles.filter(a =>
    a.status === 'published' && a.relatedConditions?.includes(conditionSlug)
  );

export const getJournalsForTreatment = (treatmentSlug) =>
  journalArticles.filter(a =>
    a.status === 'published' && a.relatedTreatments?.includes(treatmentSlug)
  );

export const getJournalsForSignature = (signatureSlug) =>
  journalArticles.filter(a =>
    a.status === 'published' && a.relatedSignatures?.includes(signatureSlug)
  );
```

### 2.2 Create Image Directory

```
public/assets/img/journal/
```

Place compressed `.webp` hero images here. Naming convention: `{slug}.webp`.

### 2.3 Update `crosslinks.js`

Add journal URL helper:

```js
export const getJournalUrl = (slug) => `/journal/${slug}`;
```

---

## 3. Phase 2 — Page Components

### 3.1 Journal Landing Page

**File:** `src/pages/JournalLanding.jsx`

| Section | Description |
|---|---|
| `<Head>` | SEO title, meta description, canonical `/journal` |
| Breadcrumbs | Home → Journal |
| Hero | Heading + intro paragraph (no menu link) |
| Article Grid | Cards for each published journal article (image, title, date, read-time) |
| CTA | Book Consultation link |

Design mirrors the existing `Blogs.jsx` grid layout for visual consistency.

### 3.2 Journal Detail Page

**File:** `src/pages/JournalDetail.jsx`

| Section | Description |
|---|---|
| `<Head>` | SEO title, description, canonical (self-referencing) |
| Breadcrumbs | Home → Journal → {Article Title} |
| Hero | Title, subtitle, author, date, read time |
| Article Body | Reuse `BlogContent` renderer (section / subsection / list / shoutout / table) or extract to shared `ArticleContent` component |
| Related Treatments | `<RelatedTreatments>` component (already exists) |
| Related Conditions | `<RelatedConditions>` component (already exists) |
| Related Signatures | New `<RelatedSignatures>` component (below) |
| CTA | Book Consultation |
| Schema | Article + MedicalWebPage + Breadcrumb (see Phase 4) |

### 3.3 Related Journals Component

**File:** `src/components/RelatedJournals.jsx`

A reusable card component identical in pattern to `RelatedTreatments.jsx`:

```jsx
// Props: journals (array of journal objects), title, subtitle
// Renders linked cards to /journal/{slug}
```

This component will be embedded on Condition, Treatment, and Signature detail pages (Phase 5).

### 3.4 Related Signatures Component (if not existing)

**File:** `src/components/RelatedSignatures.jsx`

Same card pattern. Links to `/signature/{slug}`.

---

## 4. Phase 3 — Routing & SSG

### 4.1 Add Routes in `src/main.jsx`

Add lazy imports:

```js
const JournalLanding = lazy(() => import('./pages/JournalLanding.jsx'));
const JournalDetail  = lazy(() => import('./pages/JournalDetail.jsx'));
```

Add route children inside the root `App` layout:

```js
{
  path: 'journal',
  element: <JournalLanding />,
},
{
  path: 'journal/:slug',
  element: <JournalDetail />,
},
```

### 4.2 Register Static Paths in `vite.config.js`

Import journal data at the top:

```js
import { journalArticles } from './src/data/pageContents/journal/journalArticles.js';
```

Inside `generateStaticPaths()`:

```js
// Journal pages
paths.push('/journal');
journalArticles
  .filter(a => a.status === 'published')
  .forEach(article => {
    paths.push(`/journal/${article.id}`);
  });
```

This ensures `vite-react-ssg` pre-renders each journal page as static HTML.

---

## 5. Phase 4 — Structured Data / Schema

### 5.1 Article Schema

Add to `src/components/Schema.jsx`:

```jsx
export const ArticleSchema = ({ article }) => {
  if (!article) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.seo?.description || article.subtitle,
    "url": article.seo?.canonical,
    "datePublished": article.date,
    "dateModified": article.dateModified || article.date,
    "author": {
      "@type": "Person",
      "name": article.author || "Helen Balogun",
      "jobTitle": article.authorCredential || "Advanced Nurse Practitioner",
      "worksFor": {
        "@type": "MedicalBusiness",
        "@id": "https://www.ulanda.co.uk/#medicalbusiness"
      }
    },
    "publisher": {
      "@type": "MedicalBusiness",
      "@id": "https://www.ulanda.co.uk/#medicalbusiness"
    },
    "image": article.image
      ? `https://www.ulanda.co.uk${article.image}`
      : undefined,
    "mainEntityOfPage": {
      "@type": "MedicalWebPage",
      "url": article.seo?.canonical
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
```

### 5.2 MedicalWebPage Schema

Where appropriate (articles referencing clinical topics), add `MedicalWebPage` type — this is covered within the `mainEntityOfPage` field above.

### 5.3 BreadcrumbSchema

Already exists in `Schema.jsx`. Use it on both `JournalLanding` and `JournalDetail`:

```jsx
<BreadcrumbSchema items={[
  { name: "Home", url: "/" },
  { name: "Journal", url: "/journal" },
  { name: article.title, url: `/journal/${article.id}` }
]} />
```

---

## 6. Phase 5 — Bidirectional Cross-Linking

This is the **critical** phase per the SoW.

### 6.1 Principle

> If a Journal references a Condition/Treatment/Signature, that page **must** link back to the Journal.

The `journalArticles.js` data already stores `relatedConditions`, `relatedTreatments`, `relatedSignatures`. The reverse-lookup helpers (`getJournalsForCondition`, etc.) enable the referenced pages to discover which journals link to them.

### 6.2 Condition Pages — Add "Clinical Insight" Block

**File:** `src/pages/ConditionDetail.jsx`

After the existing `<RelatedTreatments>` section, add:

```jsx
import { getJournalsForCondition } from '../data/pageContents/journal/journalArticles';
import RelatedJournals from '../components/RelatedJournals';

// Inside render:
const relatedJournals = getJournalsForCondition(conditionId);

// JSX:
{relatedJournals.length > 0 && (
  <RelatedJournals
    journals={relatedJournals}
    title="Clinical Insight"
    subtitle="Evidence-based clinical context from the ULANDA Authority Journal."
  />
)}
```

### 6.3 Treatment Pages — Add "When Is This Appropriate?" / Journal Link

**File:** `src/data/pageContents/treatments/drafts/Treatment_draft.jsx`

```jsx
import { getJournalsForTreatment } from '../../../data/pageContents/journal/journalArticles';
import RelatedJournals from '../../../components/RelatedJournals';

// Inside render:
const relatedJournals = getJournalsForTreatment(treatmentId);

{relatedJournals.length > 0 && (
  <RelatedJournals
    journals={relatedJournals}
    title="When Is This Appropriate?"
    subtitle="Read the clinical context behind this treatment approach."
  />
)}
```

### 6.4 Signature Pages — Add "Evidence & Clinical Insight" Section

**File:** `src/pages/SignatureDetail.jsx`

```jsx
import { getJournalsForSignature } from '../data/pageContents/journal/journalArticles';
import RelatedJournals from '../components/RelatedJournals';

// Inside render:
const relatedJournals = getJournalsForSignature(id);

{relatedJournals.length > 0 && (
  <RelatedJournals
    journals={relatedJournals}
    title="Evidence & Clinical Insight"
    subtitle="Related clinical authority from the ULANDA Journal."
  />
)}
```

### 6.5 Journal Detail Page — Forward Links

On `JournalDetail.jsx`, the article already references conditions/treatments/signatures. Render them using existing components:

```jsx
<RelatedTreatments treatments={article.relatedTreatments} />
<RelatedConditions conditions={article.relatedConditions} />
<RelatedSignatures signatures={article.relatedSignatures} />
```

This creates a **bidirectional web**: Journal → Service pages ↔ Service pages → Journal.

---

## 7. Phase 6 — Sitemap, Robots & Indexation

### 7.1 Sitemap Update

**File:** `scripts/generate-sitemap.js`

Add import:

```js
import { journalArticles } from '../src/data/pageContents/journal/journalArticles.js';
```

Add URL generation:

```js
// Journal pages
urls.push('/journal');
journalArticles
  .filter(a => a.status === 'published')
  .forEach(article => {
    urls.push(`/journal/${article.id}`);
  });
```

### 7.2 Robots.txt Update

**File:** `public/robots.txt`

Add:

```
Allow: /journal/
```

### 7.3 Indexation

- **No** `noindex` meta tag on journal pages.
- **No** `Disallow: /journal/` in robots.txt.
- Each journal page self-canonicalises via `<link rel="canonical">` in `<Head>`.

---

## 8. Phase 7 — Vercel Rewrites

**File:** `vercel.json`

Since we use `cleanUrls: true`, the SSG-generated `/journal/index.html` and `/journal/{slug}/index.html` will be served at clean URLs automatically. No additional rewrites needed unless we encounter edge cases.

Verify that no conflicting redirects exist in `vercel.json` for `/journal/*`.

---

## 9. Phase 8 — QA & Validation

### 9.1 Link Validation Script

Create `scripts/validate-journal-links.js`:

```js
// For each journal article:
//   - Extract all internal links from relatedConditions/Treatments/Signatures
//   - Verify each slug resolves to a known route
//   - Output CSV: Page | Link Type | URL | Status | Redirect? | Notes
```

Run locally against the local dev server (or built static files) using `fetch` or a headless browser.

### 9.2 Link Status Report

Generate CSV with columns:

| Page | Link Type | URL | Status Code | Redirect? | Notes |
|---|---|---|---|---|---|

### 9.3 Bidirectional Link Verification

For each journal article, confirm that every referenced Condition/Treatment/Signature page actually renders a "Related Clinical Journal" section linking back.

Script approach:
1. Parse `journalArticles` → collect all `relatedConditions`, `relatedTreatments`, `relatedSignatures`.
2. For each referenced page, call `getJournalsForCondition(slug)` (etc.) and verify the journal appears in results.
3. Output verification report.

### 9.4 Crawl Depth Validation

Journal pages must be reachable within **≤ 3 clicks** from homepage:

```
Homepage (1) → Condition/Treatment/Signature page (2) → Journal link in "Clinical Insight" section (3)
```

This is inherently satisfied by the bidirectional linking structure.

### 9.5 Mobile Testing Checklist

- [ ] Responsive layout on 375px, 768px, 1024px
- [ ] Tables scroll horizontally (no layout break)
- [ ] CTA button visible without horizontal scroll
- [ ] Hero image compressed and loads promptly
- [ ] Article body readable (font size, line height, spacing)

---

## 10. Phase 9 — Performance

### 10.1 Image Optimisation

- All journal images in `.webp` format, compressed < 100KB
- Use `loading="lazy"` on below-fold images
- Serve via Vercel CDN (automatic)

### 10.2 Code Splitting

Journal pages are already lazy-loaded (`lazy(() => import(...))`), so they won't increase the initial JS bundle.

### 10.3 Target Metrics

| Metric | Target |
|---|---|
| LCP (mobile) | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Total page weight | < 500KB |

### 10.4 No Unnecessary Scripts

Journal pages reuse existing components. No new third-party scripts needed.

---

## 11. Deliverables Checklist

| # | Deliverable | Status |
|---|---|---|
| 1 | `src/data/pageContents/journal/journalArticles.js` — all article data | ☐ |
| 2 | `src/pages/JournalLanding.jsx` — landing page | ☐ |
| 3 | `src/pages/JournalDetail.jsx` — detail page | ☐ |
| 4 | `src/components/RelatedJournals.jsx` — reusable component | ☐ |
| 5 | `src/components/RelatedSignatures.jsx` — reusable component (if needed) | ☐ |
| 6 | Routes added to `src/main.jsx` | ☐ |
| 7 | SSG paths added to `vite.config.js` | ☐ |
| 8 | `ArticleSchema` added to `src/components/Schema.jsx` | ☐ |
| 9 | `BreadcrumbSchema` used on journal pages | ☐ |
| 10 | Bidirectional links added to `ConditionDetail.jsx` | ☐ |
| 11 | Bidirectional links added to `Treatment_draft.jsx` | ☐ |
| 12 | Bidirectional links added to `SignatureDetail.jsx` | ☐ |
| 13 | Sitemap updated (`scripts/generate-sitemap.js`) | ☐ |
| 14 | `robots.txt` updated with `Allow: /journal/` | ☐ |
| 15 | `crosslinks.js` updated with `getJournalUrl` | ☐ |
| 16 | Journal images in `public/assets/img/journal/` | ☐ |
| 17 | Link validation script & CSV report | ☐ |
| 18 | Bidirectional link verification report | ☐ |
| 19 | Mobile responsiveness verified | ☐ |
| 20 | Performance < 2.5s LCP verified | ☐ |

---

## 12. Risk Register

| Risk | Mitigation |
|---|---|
| **Duplicate slug conflict** — journal slug collides with existing blog/condition slug | Prefix all journal routes under `/journal/` (isolated namespace). Validate slugs against existing data at build time. |
| **Canonical misalignment** — journal page canonicalises to wrong URL | Each journal page self-canonicalises using `seo.canonical` from data. Validate in QA. |
| **Thin content warning** — Google flags journal pages as low-value | Ensure each article has ≥ 800 words of substantive clinical content before publishing. |
| **Indexation delay** — new pages take time to appear in search | Submit updated sitemap via Google Search Console immediately after deployment. Use internal links to accelerate crawl discovery. |
| **Broken bidirectional links** — referenced page doesn't link back | Automated validation script checks both directions. Run before every deploy. |
| **SSG build failure** — data import or path generation error | Journal data uses identical pattern to existing blogs. Add to CI build step. |
| **Redirect chain** — old blog URL redirects to journal | No redirects from blog → journal. These are distinct content types with separate URLs. |

---

## File Change Summary

| File | Action |
|---|---|
| `src/data/pageContents/journal/journalArticles.js` | **CREATE** — Article data + helpers |
| `src/pages/JournalLanding.jsx` | **CREATE** — Landing page |
| `src/pages/JournalDetail.jsx` | **CREATE** — Detail page |
| `src/components/RelatedJournals.jsx` | **CREATE** — Reusable cross-link component |
| `src/components/RelatedSignatures.jsx` | **CREATE** — Reusable cross-link component |
| `src/components/Schema.jsx` | **EDIT** — Add `ArticleSchema` export |
| `src/main.jsx` | **EDIT** — Add journal routes + lazy imports |
| `vite.config.js` | **EDIT** — Add journal paths to SSG |
| `src/data/crosslinks.js` | **EDIT** — Add `getJournalUrl` helper |
| `src/pages/ConditionDetail.jsx` | **EDIT** — Add `RelatedJournals` section |
| `src/data/pageContents/treatments/drafts/Treatment_draft.jsx` | **EDIT** — Add `RelatedJournals` section |
| `src/pages/SignatureDetail.jsx` | **EDIT** — Add `RelatedJournals` section |
| `scripts/generate-sitemap.js` | **EDIT** — Generate journal URLs |
| `public/robots.txt` | **EDIT** — Allow `/journal/` |
| `scripts/validate-journal-links.js` | **CREATE** — QA validation script |
| `public/assets/img/journal/` | **CREATE** — Image directory |

---

## Execution Order

```
Phase 1  →  Data layer (journalArticles.js, crosslinks update, image dir)
Phase 2  →  Components (JournalLanding, JournalDetail, RelatedJournals, RelatedSignatures)
Phase 3  →  Routing (main.jsx routes, vite.config.js SSG paths)
Phase 4  →  Schema (ArticleSchema in Schema.jsx, BreadcrumbSchema usage)
Phase 5  →  Bidirectional links (edit ConditionDetail, Treatment_draft, SignatureDetail)
Phase 6  →  Sitemap + robots.txt + indexation checks
Phase 7  →  Vercel config review
Phase 8  →  QA scripts, link validation CSV, mobile testing
Phase 9  →  Performance audit & optimisation
```

Each phase is independently testable. The build should pass after each phase.
