# Prescription Skincare Architecture — Implementation Plan

**Issued:** March 2026  
**Scope:** Task Set A (Obagi Medical page fixes) + Task Set B (new parent page)  
**Priority:** Complete Task Set A in full before starting Task Set B

---

## Codebase Audit Summary

### Current File Inventory

| File | Purpose | Route |
|------|---------|-------|
| `src/pages/ObagiMedical.jsx` | Live Obagi Medical child page | `/treatments/prescription-skincare/obagi-medical` |
| `src/pages/ObagiPrescriptionSkincare.jsx` | Legacy page (redirected) | `/treatments/obagi-prescription-skincare` → redirects to above |
| `src/components/Navbar.jsx` | Navigation — desktop (line ~252) and mobile (line ~555) | Sitewide |
| `src/components/Footer.jsx` | Footer treatment links (line ~69) | Sitewide |
| `src/main.jsx` | Route definitions (lines ~91–96) | Router config |
| `vite.config.js` | SSG path list (line ~64) | Build config |
| `vercel.json` | Redirect rules (lines ~716–717) | Hosting config |
| `src/data/pageContents/blogs/blogs.js` | Blog CTAs referencing Obagi (lines ~9118, ~9323, ~9512) | Blog content |

### Key Observations

1. **`HeroText` component** wraps the H1 content in `ObagiMedical.jsx` (line ~300). The H1 text passed is `Obagi Medical Prescription Skincare` — this is the string that may be rendering incorrectly if `HeroText` is splitting on camelCase/PascalCase or stripping spaces.
2. **No parent page** exists at `/treatments/prescription-skincare`. The route does not exist in `main.jsx`. The `treatments/:category` catch-all currently handles it but would render a generic category page or 404.
3. **Navigation** (Navbar.jsx) links "Prescription Skincare" directly to `/treatments/prescription-skincare/obagi-medical` in both desktop and mobile menus.
4. **Footer** also links to `/treatments/prescription-skincare/obagi-medical`.
5. **Areas Served** section (ObagiMedical.jsx line ~638) renders `areasServed` array using `<span>` tags with no separators — the array items are individual spa badges, not a delimited string. This is likely rendering without visible separators because the layout uses `flex-wrap gap-3` on small screens but there's no textual separator.
6. **CTAs** — The introduction section CTA links to `/treatments/advanced-skin-health-consultation` (internal page). The final CTA at the bottom (line ~668) correctly uses the direct Square booking URL.
7. **"Refinement now. Regeneration ahead."** tagline appears on the Obagi page (lines ~363, ~516, ~673) — this must be replaced with "Skin Understood. Then Transformed." per brand standards.
8. **Location pages** (`/contact/locations/aesthetic-clinic-*`) do not exist yet — they are planned for later. The Areas Served section should be updated with links once those pages are live.
9. **`ObagiPrescriptionSkincare.jsx`** is a legacy page that redirects — no work needed on this file.
10. **Signature pages** exist as data-driven pages via `src/data/pageContents/signature/signatureData.js` — these need homecare sections added for Task B4.

---

## TASK SET A — Obagi Medical Page Fixes

### A1 — Fix the H1 Heading
**Priority:** CRITICAL — Most urgent  
**Status:** Ready to implement

**Problem:** The H1 currently reads `Obagi Medical Prescription Skincare` wrapped in `<HeroText>`. If the HeroText animation component splits text on character boundaries or the CMS field has a slug value, it renders as `ObagiMedicalPrescriptionSkincare` without spaces.

**Fix location:** `src/pages/ObagiMedical.jsx` — line ~300

**Current code:**
```jsx
<h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-4">
  <HeroText>Obagi Medical Prescription Skincare</HeroText>
</h1>
```

**Required change:**
```jsx
<h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-4">
  <HeroText>Obagi Medical — Prescription Skincare</HeroText>
</h1>
```

**Additional:** Add location line below the H1 (before or as part of the tagline):
```
Ware, Hertfordshire
```

**Investigate:** Check `src/components/animations/HeroText.jsx` to confirm how it processes its children text. If it splits on word boundaries or uses PascalCase detection, the fix may also need to address the HeroText component logic.

---

### A2 — Fix the Navigation Link
**Priority:** HIGH — but deferred until Task Set B is live  
**Status:** Noted — do not change yet

**Files to update (when ready):**
- `src/components/Navbar.jsx` — line ~252 (desktop dropdown)
- `src/components/Navbar.jsx` — line ~555 (mobile drawer)
- `src/components/Footer.jsx` — line ~69

**Current:** All three link to `/treatments/prescription-skincare/obagi-medical`  
**Target:** Change to `/treatments/prescription-skincare`

**ACTION:** Update simultaneously with Task Set B publication. Do not update before the parent page is live.

---

### A3 — Update Mid-Page Consultation Booking CTA
**Priority:** HIGH  
**Status:** Ready to implement

**Problem:** The introduction section CTA (line ~358) links to the internal consultation page:
```jsx
<Link to="/treatments/advanced-skin-health-consultation" className="btn btn-primary text-white">
  Book Advanced Skin Health Consultation →
</Link>
```

The mid-page CTA box in "How to Access" section (line ~513) also uses the internal page link:
```jsx
<Link to="/treatments/advanced-skin-health-consultation" className="btn btn-primary text-white">
  Book Consultation →
</Link>
```

The **final CTA** at the bottom (line ~668) correctly uses the direct Square booking URL.

**Required change:** The final CTA should use the direct Square booking URL (confirmed correct). The mid-page CTAs linking to the consultation page are acceptable as secondary routing. **Confirm the pattern matches other treatment pages** — typically mid-page CTAs use internal links and the final/primary CTA uses the direct booking URL.

**Square booking URL:**
```
https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ
```

---

### A5 — Refine Bullet-Heavy Sections to Prose
**Priority:** MEDIUM — before paid traffic  
**Status:** Ready to implement

#### Section 1: "How Obagi Medical Is Prescribed at ULANDA"
**File:** `src/pages/ObagiMedical.jsx` — lines ~465–505

**Current:** Two bullet lists ("This process includes" and "Your prescription includes")

**Replace the entire section body** (after the h2) with:

> Obagi Medical systems are prescribed following a full clinical assessment that establishes your barrier integrity, inflammatory patterns, pigmentation activity and hormonal context before any system is selected.
>
> Your prescription is documented in a written treatment plan that specifies the system prescribed, the morning and evening protocol, the adjustment timeline and the review schedule. The prescription is reviewed and adjusted at programme appointments as your skin responds.

#### Section 2: "How to Access Obagi Medical at ULANDA"
**File:** `src/pages/ObagiMedical.jsx` — lines ~510–520

**Current:** Bullet list ("This consultation establishes: Skin condition, Treatment goals, Suitability")

**Replace with:**

> The consultation establishes your skin's current biological state — barrier integrity, inflammatory load, hormonal context and treatment readiness — and determines which Obagi system is appropriate, at what concentration, and at what point in your programme it is introduced.

---

### A6 — Add Internal Link to Parent Prescription Skincare Page
**Priority:** HIGH — but deferred until Task Set B is live  
**Status:** Noted — do not add yet

**File:** `src/pages/ObagiMedical.jsx` — Introduction section (line ~322, before the first `<p>` in the introduction)

**Add before the "ULANDA is an authorised Obagi Medical Practitioner" paragraph:**
```jsx
<FadeInWhenVisible>
  <p className="text-base-content/80 text-lg leading-relaxed mb-3">
    Part of the ULANDA{' '}
    <Link to="/treatments/prescription-skincare" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
      Prescription Skincare
    </Link>{' '}
    programme.
  </p>
  <Link
    to="/treatments/prescription-skincare"
    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary mb-6 transition-colors text-sm"
  >
    &larr; View all prescription skincare at ULANDA
  </Link>
</FadeInWhenVisible>
```

**ACTION:** Add simultaneously with Task Set B publication.

---

### A7 — Fix Areas Served Rendering
**Priority:** HIGH  
**Status:** Ready to implement

**File:** `src/pages/ObagiMedical.jsx` — lines ~260–270 (data) and ~632–650 (render)

**Problem:** The `areasServed` array renders as individual `<span>` badges with `flex-wrap gap-3` layout but no textual separators — on small screens this can look concatenated.

**Step 1 — Update the `areasServed` data array** (line ~260) to include the correct locations with links:

```js
const areasServed = [
  { name: 'Hertfordshire', link: '/contact/locations/aesthetic-clinic-Hertfordshire' },
  { name: 'Hertford', link: '/contact/locations/aesthetic-clinic-hertford' },
  { name: 'Hoddesdon', link: '/contact/locations/aesthetic-clinic-hoddesdon' },
  { name: 'Broxbourne', link: '/contact/locations/aesthetic-clinic-broxbourne' },
  { name: "Bishop's Stortford", link: '/contact/locations/aesthetic-clinic-bishops-stortford' },
  { name: 'Cheshunt', link: '/contact/locations/aesthetic-clinic-Cheshunt' },
  { name: 'Stevenage', link: '/contact/locations/aesthetic-clinic-stevenage' },
  { name: 'Welwyn Garden City', link: '/contact/locations/aesthetic-clinic-welwyn-garden-city' },
  { name: 'Sawbridgeworth', link: '/contact/locations/aesthetic-clinic-Sawbridgeworth' },
  { name: 'Harlow', link: '/contact/locations/aesthetic-clinic-Harlow' },
];
```

**Step 2 — Update the render** (line ~638) to use `·` separators and links:

```jsx
<div className="text-base-content/80 text-lg leading-relaxed">
  {areasServed.map((area, i) => (
    <React.Fragment key={i}>
      {i > 0 && <span className="mx-2">&middot;</span>}
      <Link
        to={area.link}
        className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
      >
        {area.name}
      </Link>
    </React.Fragment>
  ))}
</div>
```

**NOTE:** Location pages don't exist yet. The links should be added structurally now so they work automatically once those pages are created. Alternatively, if location pages aren't ready, render as plain text with `·` separators and convert to links later.

---

### A-Extra — Replace incorrect tagline
**Priority:** MEDIUM  
**Status:** Ready to implement

**Problem:** "Refinement now. Regeneration ahead." appears 3 times on ObagiMedical.jsx (lines ~363, ~516, ~673). This is the old tagline.

**Fix:** Remove all three instances. The correct tagline "Skin Understood. Then Transformed." already appears in the hero section. The old tagline lines should be removed entirely.

---

## TASK SET A — Completion Checklist

| ☐ | Task | Description |
|---|------|-------------|
| ☐ | A1 | H1 fixed — reads "Obagi Medical — Prescription Skincare" with subtitle "Ware, Hertfordshire" |
| ☐ | A2 | Navigation link noted for update once Task Set B is live (do not update yet) |
| ☐ | A3 | Final CTA booking link confirmed as direct Square URL |
| ☐ | A5 | Bullet-heavy sections converted to prose paragraphs |
| ☐ | A6 | Parent page internal link noted for addition once Task Set B is live |
| ☐ | A7 | Areas Served rendering fixed — separators added, location links applied |
| ☐ | Extra | "Refinement now. Regeneration ahead." removed from all instances |

---

## TASK SET B — Create Parent Page `/treatments/prescription-skincare`

### B1 — Create PrescriptionSkincare.jsx Page Component
**Priority:** HIGH  
**Status:** Ready to implement after Task Set A

**Create file:** `src/pages/PrescriptionSkincare.jsx`

This is a new React component at ~600–800 lines containing all content specified in the instruction document Section B3. The page structure follows the same patterns used in `ObagiMedical.jsx`:

- `Head` component with SEO meta tags (from B2)
- `Breadcrumbs` component
- Hero section with H1, tagline, introduction
- 6 content sections
- FAQ accordion
- Areas served
- Final CTA

**Section-by-section mapping:**

| Section | Content Source |
|---------|--------------|
| H1 + Tagline + Intro | B3 — H1 Heading, Tagline, Introduction, Authorisation Line |
| Primary CTA | B3 — Direct Square booking URL |
| Section 1 | "Why Prescription Skincare Requires Clinical Oversight" — two subsections |
| Section 2 | "The Prescription Skincare Brands at ULANDA" — Obagi Medical entry + future brand placeholder |
| Section 3 | "How Prescription Skincare Is Integrated at ULANDA" |
| Section 4 | "The ULANDA Prescription Skincare Process" — 5 numbered steps |
| Section 5 | "Prescription Skincare and the Signature Programmes" — 6 linked cards |
| Section 6 | "Accessing Prescription Skincare at ULANDA" + CTA |
| FAQ | 7 questions from B3 |
| Serving | Areas list from B3 |

**Schema (B2):** Use `MedicalWebPage` type consistent with other treatment pages. Include `BreadcrumbList` and `FAQPage` schemas.

**SEO meta tags (B2):**
```
title: Prescription Skincare Ware | Medical Grade Skincare Hertfordshire | ULANDA Skin Clinic
description: ULANDA is an authorised prescription skincare clinic in Ware, Hertfordshire. Medical grade prescription skincare prescribed by a Nurse Independent Prescriber as part of a structured clinical programme. Currently stocking Obagi Medical.
canonical: https://www.ulanda.co.uk/treatments/prescription-skincare
```

**Future-proofing (B5):** Include a placeholder section after the Obagi Medical entry in Section 2:
```
Further Prescription Skincare Brands — Coming Soon
```
This placeholder gets removed when a second brand is added.

---

### B2 — Add Route to main.jsx
**Priority:** HIGH  
**Status:** Ready to implement

**File:** `src/main.jsx`

**Add:**
1. Lazy import at top:
   ```js
   const PrescriptionSkincare = lazy(() => import('./pages/PrescriptionSkincare.jsx'))
   ```

2. Route entry (before the `treatments/prescription-skincare/obagi-medical` route):
   ```js
   {
     path: 'treatments/prescription-skincare',
     element: <PrescriptionSkincare />,
   },
   ```

---

### B3 — Add SSG Path to vite.config.js
**Priority:** HIGH  
**Status:** Ready to implement

**File:** `vite.config.js` — near line ~64

**Add:**
```js
paths.push('/treatments/prescription-skincare');
```

---

### B4 — Internal Linking Updates (Simultaneous with publication)
**Priority:** HIGH  
**Status:** Implement simultaneously with B1

#### B4.1 — Navigation Dropdown (Navbar.jsx)
Update both desktop (~252) and mobile (~555) "Prescription Skincare" links:
```
/treatments/prescription-skincare/obagi-medical → /treatments/prescription-skincare
```

#### B4.2 — Footer (Footer.jsx)
Update line ~69:
```
/treatments/prescription-skincare/obagi-medical → /treatments/prescription-skincare
```

#### B4.3 — Obagi Page Upward Link (Task A6 — deferred to now)
Add breadcrumb-style link in `ObagiMedical.jsx` introduction section as specified in A6.

#### B4.4 — Consultation Page
**File:** `src/pages/AdvancedSkinHealthConsultation.jsx`
**Action:** Check if Obagi Medical is referenced. If so, confirm the link points to `/treatments/prescription-skincare` (parent page) rather than the child page directly.

#### B4.5 — Signature Pages
**File:** `src/data/pageContents/signature/signatureData.js`
**Action:** Add a homecare section to each of the 6 Signature programmes referencing `/treatments/prescription-skincare`:

| Signature | Homecare Text |
|-----------|--------------|
| Skin Barrier Repair & Recovery | Barrier-compatible hydration and gentle barrier-supportive systems |
| Rosacea & Redness Control | Obagi Rosaclear System |
| Menopause Skin Rebuild | Obagi Nu-Derm Fx transitioning to Rx |
| Photoaging & Skin Architecture | Obagi-C Fx System and Professional-C Serums |
| Structural Skin Regeneration | Obagi Elastiderm range |
| Under-Eye Renewal | Obagi Elastiderm Eye products |

#### B4.6 — Location Pages (10 pages)
**Status:** Location pages do not exist yet. The instruction document notes these will be provided after this work is complete. **No action required now** — but when location pages are created, the Obagi/prescription skincare rows in their treatment tables should link to `/treatments/prescription-skincare`.

#### B4.7 — Medical Aesthetics Commercial Pillar Page
**File:** Handled by the dynamic `TreatmentCategory` component via `treatments_restructured_draft.js`
**Action:** Check if there's a specific "medical-aesthetics" category page or if Obagi is referenced in the treatment data. If a manual page exists, update Obagi row link to `/treatments/prescription-skincare`.

**NOTE:** The commercial pillar at `/treatments/medical-aesthetics` is likely rendered by the catch-all route `treatments/:category` using the restructured treatments data. If this category exists in the data and references Obagi, the link needs updating in the data file.

---

### B5 — Sitemap Update
**File:** `public/sitemap.xml`

**Add entry:**
```xml
<url>
  <loc>https://www.ulanda.co.uk/treatments/prescription-skincare</loc>
  <lastmod>2026-03-19</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Also update** the existing Obagi Medical entry's `lastmod` date to the publication date.

---

### B6 — Google Search Console Indexing
**Status:** Manual action required — cannot be automated

**Instructions for manual submission:**
1. Go to https://search.google.com/search-console
2. URL Inspection → paste `https://www.ulanda.co.uk/treatments/prescription-skincare`
3. Request Indexing
4. URL Inspection → paste `https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical`
5. Request Indexing
6. Confirm both URLs return 200 status before submission

---

## Implementation Order

### Phase 1 — Task Set A (implement immediately)
1. **A1** — Fix H1 in ObagiMedical.jsx
2. **A5** — Convert bullet sections to prose
3. **A3** — Confirm/fix CTA booking links
4. **A7** — Fix Areas Served rendering
5. **A-Extra** — Remove "Refinement now. Regeneration ahead." tagline
6. Build and verify locally

### Phase 2 — Task Set B (implement after A is verified)
1. **B1** — Create `PrescriptionSkincare.jsx` with all content
2. **B2** — Add route to `main.jsx`
3. **B3** — Add SSG path to `vite.config.js`
4. **B5** — Update `sitemap.xml`
5. Build and verify locally

### Phase 3 — Simultaneous Publication (deploy together)
1. **A2/B4.1** — Update Navbar links to parent page
2. **B4.2** — Update Footer link
3. **A6/B4.3** — Add upward breadcrumb link to Obagi page
4. **B4.4** — Update Consultation page Obagi reference
5. **B4.5** — Add homecare sections to Signature pages
6. Deploy all changes together
7. **B6** — Submit both URLs to Google Search Console

---

## Task Set B — Completion Checklist

| ☐ | Task | Description |
|---|------|-------------|
| ☐ | B1 | Page created at `/treatments/prescription-skincare` — returns 200 |
| ☐ | B2 | Meta title, meta description and canonical tag set correctly |
| ☐ | B3 | All page content entered — H1, introduction, all six sections, FAQ, serving |
| ☐ | B4 | Navigation dropdown updated to link to parent page |
| ☐ | B4 | Obagi page upward breadcrumb link added (Task A6) |
| ☐ | B4 | Signature pages homecare sections added |
| ☐ | B4 | Consultation page Obagi reference link updated |
| ☐ | B4 | Footer link updated |
| ☐ | B5 | Sitemap updated with new URL |
| ☐ | B5 | Future-proofing confirmed — placeholder section present for second brand |
| ☐ | B6 | Both URLs submitted to Google Search Console for indexing |

---

## Files Modified (Summary)

| File | Tasks | Changes |
|------|-------|---------|
| `src/pages/ObagiMedical.jsx` | A1, A3, A5, A6, A7, Extra | H1, prose sections, CTAs, areas served, tagline, parent link |
| `src/pages/PrescriptionSkincare.jsx` | B1, B2, B3 | **NEW FILE** — full parent page |
| `src/main.jsx` | B2 | Add route + lazy import |
| `src/components/Navbar.jsx` | A2/B4.1 | Update 2 link targets |
| `src/components/Footer.jsx` | B4.2 | Update 1 link target |
| `vite.config.js` | B3 | Add SSG path |
| `public/sitemap.xml` | B5 | Add new URL entry |
| `src/data/pageContents/signature/signatureData.js` | B4.5 | Add homecare sections to 6 programmes |
| `src/pages/AdvancedSkinHealthConsultation.jsx` | B4.4 | Confirm/update Obagi reference link |
