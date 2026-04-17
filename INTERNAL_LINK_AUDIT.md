# ULANDA Internal Link Audit Report

**Date:** 14 April 2026  
**Scope:** All `.jsx` files in `src/pages/`, `src/components/`, `src/data/`, plus `vercel.json`, `sitemap.xml`, `main.jsx`

---

## 1. BROKEN INTERNAL LINKS (Critical)

These links use client-side `<Link to="...">` navigation and point to **legacy paths** that only have server-side redirects in `vercel.json`. React Router SPA navigation **bypasses** Vercel redirects, so these resolve to the catch-all route or render missing data.

### 1a. Hardcoded Legacy Links in Page Components

| File | Line | Link Target | Issue | Fix |
|------|------|-------------|-------|-----|
| `Manifesto.jsx` | 65 | `/treatments/renew` | Legacy category. Hits `/treatments/:category` but "renew" no longer exists in data. | Change to `/treatments/skin-renewal-regeneration` |
| `Philosophy.jsx` | 279 | `/conditions/age-and-regeneration` | Legacy category. "age-and-regeneration" removed from condition structure. | Change to `/conditions` or a valid category |

### 1b. `getConditionUrl()` in `crosslinks.js` — STALE CATEGORY MAPPINGS

The `getConditionUrl()` function generates URLs using **two legacy categories** that no longer exist. Every `<RelatedConditions>` component and Navbar search result using these mappings produces a broken client-side navigation.

**Legacy category: `age-and-regeneration`** (mapped conditions → correct category):

| Condition Slug | Generated URL | Should Be |
|---------------|---------------|-----------|
| `crepey-skin` | `/conditions/age-and-regeneration/crepey-skin` | `/conditions/menopause-hormone-skin-changes` *(redirect destination)* |
| `skin-laxity` | `/conditions/age-and-regeneration/skin-laxity` | `/conditions/menopause-hormone-skin-changes` |
| `volume-loss` | `/conditions/age-and-regeneration/volume-loss` | `/conditions/menopause-hormone-skin-changes` |
| `fine-lines-wrinkles` | `/conditions/age-and-regeneration/fine-lines-wrinkles` | `/conditions/menopause-hormone-skin-changes` |
| `enlarged-pores` | `/conditions/age-and-regeneration/enlarged-pores` | `/conditions/acne-texture/enlarged-pores` |
| `uneven-texture` | `/conditions/age-and-regeneration/uneven-texture` | `/conditions/acne-texture/uneven-texture` |
| `acne-scarring` | `/conditions/age-and-regeneration/acne-scarring` | `/conditions/acne-texture/acne-scarring` |

**Legacy category: `hormonal-skin`** (mapped conditions → correct category):

| Condition Slug | Generated URL | Should Be |
|---------------|---------------|-----------|
| `hormonal-breakouts` | `/conditions/hormonal-skin/hormonal-breakouts` | `/conditions/acne-texture/hormonal-breakouts` |
| `dryness-sensitivity` | `/conditions/hormonal-skin/dryness-sensitivity` | `/conditions/menopause-hormone-skin-changes` |
| `hormonal-pigmentation` | `/conditions/hormonal-skin/hormonal-pigmentation` | `/conditions/menopause-hormone-skin-changes/hormonal-skin-pigmentation` |
| `loss-of-definition` | `/conditions/hormonal-skin/loss-of-definition` | `/conditions/menopause-hormone-skin-changes` |

> **Impact:** Any page using `<RelatedConditions>` that references these 11 condition slugs will generate broken links. The Navbar search also uses `getConditionUrl()` for condition results.

---

## 2. INDIRECT / UNNECESSARY REDIRECT LINKS (Low Priority)

These links target routes that exist as `<Navigate>` redirects in `main.jsx`. They work but add unnecessary client-side redirect hops.

| File | Line | Link Target | Redirects To |
|------|------|-------------|-------------|
| `Programme.jsx` | 238, 285, 328 | `/programmes/${programme.id}` | `/signature` |
| `Pathways.jsx` | 250 | `/pathways/${pathway.id}` | via catch-all, undefined behavior |
| `Pathways.jsx` | 118 | `/treatments/${pathway.id}` | Hits `:category` — may or may not match data |

---

## 3. EXTERNAL LINKS

All external links found across the codebase:

| URL | Used In | Status |
|-----|---------|--------|
| `https://book.squareup.com/appointments/h7hzrz9qwytnyc/...` | ~30+ pages (booking CTA) | Verify active |
| `https://instagram.com/ulandamedspa` | Contact.jsx, Footer.jsx | Verify handle |
| `https://www.instagram.com/ulandamedspa` | Footer.jsx | Verify handle |
| `https://www.facebook.com/ulandamedspa` | Footer.jsx | Verify active |
| `https://g.page/r/CU-nYyGS8O9PEAE/review` | Footer.jsx | Verify Google page |
| `http://eepurl.com/jsdn42` | Footer.jsx (newsletter) | **HTTP not HTTPS** — verify/update |
| `https://www.ulanda.co.uk` | Disclaimer.jsx, TermsOfUse.jsx | Self-referential — OK |
| `https://www.imperial.ac.uk/` | Founder.jsx | Verify |
| `https://www.marionglucktraining.com/` | Founder.jsx | Verify |
| `https://thebms.org.uk/` | Founder.jsx | Verify |

> **Note:** The `http://eepurl.com/jsdn42` link in Footer.jsx uses HTTP. Should verify and ideally upgrade to HTTPS if available.

---

## 4. SITEMAP vs ROUTES ANALYSIS

### 4a. Sitemap Contains Legacy URLs (Should Be Removed)

These URLs in `sitemap.xml` point to old structures that are only handled by `vercel.json` redirects. Search engines should not be indexing redirect sources.

| Sitemap URL | Redirect Destination |
|------------|---------------------|
| `/conditions/age-and-regeneration/enlarged-pores` | → `/conditions/acne-texture/enlarged-pores` |
| `/conditions/age-and-regeneration/fine-lines-wrinkles` | → `/conditions/menopause-hormone-skin-changes` |
| `/conditions/age-and-regeneration/skin-laxity` | → `/conditions/menopause-hormone-skin-changes` |
| `/conditions/age-and-regeneration/crepey-skin` | → `/conditions/menopause-hormone-skin-changes` |
| `/conditions/age-and-regeneration/uneven-texture` | → `/conditions/acne-texture/uneven-texture` |
| `/conditions/age-and-regeneration/volume-loss` | → `/conditions/menopause-hormone-skin-changes` |
| `/conditions/age-and-regeneration/acne-scarring` | → `/conditions/acne-texture/acne-scarring` |
| `/conditions/hormonal-skin/dryness-sensitivity` | → `/conditions/menopause-hormone-skin-changes` |
| `/conditions/hormonal-skin/hormonal-breakouts` | → `/conditions/acne-texture/hormonal-breakouts` |
| `/conditions/hormonal-skin/hormonal-pigmentation` | → `/conditions/menopause-hormone-skin-changes/hormonal-skin-pigmentation` |
| `/conditions/hormonal-skin/loss-of-definition` | → `/conditions/menopause-hormone-skin-changes` |
| `/conditions/dehydration-dullness-skin-recovery/dull-dehydrated-skin` | → `/conditions/dehydration-dullness-skin-recovery/dehydrated-skin` *(via vercel redirect of `pigmentation-and-skin-tone/dull-dehydrated-skin`)* |
| `/treatments/radiate/pathways` | → `/signature` |
| `/treatments/radiate/pathways/menopause-regeneration` | → `/signature/menopause-skin-rebuild` |
| `/treatments/radiate/pathways/under-eye-regeneration` | → `/signature/under-eye-renewal` |
| `/treatments/radiate/pathways/collagen-reset` | → `/signature/structural-skin-regeneration` |
| `/treatments/radiate/pathways/hormone-smart-skin` | → `/signature/menopause-skin-rebuild` |
| `/treatments/radiate/pathways/shape-and-regenerate` | → `/signature/structural-skin-regeneration` |

### 4b. Valid Routes MISSING from Sitemap

These are real, indexable routes defined in `main.jsx` that are **not listed** in `sitemap.xml`:

| Missing URL | Page Component |
|------------|---------------|
| `/book-consultation` | BookConsultation |
| `/treatments/advanced-skin-health-consultation` | AdvancedSkinHealthConsultation |
| `/treatments/medical-aesthetics-clinic` | MedicalAestheticsClinic |
| `/treatments/prescription-skincare` | PrescriptionSkincare |
| `/treatments/prescription-skincare/obagi-medical` | ObagiMedical |
| `/locations/aesthetic-clinic-hertfordshire` | AestheticClinicHertfordshire |
| `/locations/aesthetic-clinic-hoddesdon` | AestheticClinicHoddesdon |
| `/locations/aesthetic-clinic-hertford` | AestheticClinicHertford |
| `/locations/aesthetic-clinic-broxbourne` | AestheticClinicBroxbourne |
| `/locations/aesthetic-clinic-cheshunt` | AestheticClinicCheshunt |
| `/locations/aesthetic-clinic-harlow` | AestheticClinicHarlow |
| `/locations/aesthetic-clinic-bishops-stortford` | AestheticClinicBishopsStortford |
| `/locations/aesthetic-clinic-welwyn-garden-city` | AestheticClinicWelwynGardenCity |
| `/locations/aesthetic-clinic-stevenage` | AestheticClinicStevenage |
| `/locations/aesthetic-clinic-sawbridgeworth` | AestheticClinicSawbridgeworth |
| `/treatments/body-regeneration-tissue-support/minor-skin-lesion-removal` | Treatment (dynamic, linked from Navbar) |
| `/treatments/wellness-regenerative-recovery/medical-weight-management` | Treatment (dynamic, redirect destination in vercel.json) |

> **SEO Impact:** These 17+ pages are live, linked, and indexable but invisible to search engine crawlers that rely on the sitemap.

---

## 5. ORPHANED ROUTES (No Inbound Internal Links)

Routes defined in `main.jsx` that have **zero** `<Link to="...">` pointing to them from any component:

| Route | Component | Used For |
|-------|-----------|----------|
| `/treatments/obagi-prescription-skincare` | `<Navigate>` redirect | Legacy redirect only — OK |
| `/treatments/radiate/programmes/:id` | `<Navigate>` redirect | Legacy redirect only — OK |
| `/treatments/radiate/pathways/:id` | `<Navigate>` redirect | Legacy redirect only — OK |
| `/treatments/radiate/pathways` | `<Navigate>` redirect | Legacy redirect only — OK |
| `/pathways` | `<Navigate>` redirect | Legacy redirect only — OK |

> All orphaned routes are redirect routes for legacy URL structures — this is expected and correct.

---

## 6. DYNAMIC ROUTE PARAMETER RISKS

### 6a. Condition Category Slugs
The route `/conditions/:category/:id` and `/conditions/:id` accept any slug. The `ConditionDetail` component presumably validates against data. If a user navigates to a slug that doesn't exist in the data (e.g., via stale `getConditionUrl()` output), the component should show a 404 — **verify** this fallback exists.

### 6b. Treatment Slugs
`/treatments/:category` and `/treatments/:category/:id` — the `TreatmentCategory_draft.jsx` has a redirect fallback:
```jsx
return <Navigate to="/treatments" replace />;
```
This is good — invalid categories redirect to the treatments hub.

### 6c. Blog/Journal Slugs
`/blogs/:id` and `/journal/:slug` — these are data-driven. If data is deleted but the sitemap still references it, search engines will hit 404s. The **BlogDetail** and **JournalDetail** components should handle missing data gracefully.

### 6d. Signature Slugs
`/signature/:id` — `SignatureDetail` has a fallback:
```jsx
return <Navigate to="/signature" replace />;
```
This handles missing IDs correctly.

---

## 7. SUMMARY & PRIORITY ACTIONS

### P0 — Fix Immediately
1. **Update `getConditionUrl()` in `crosslinks.js`** — Remove the 11 stale mappings to `age-and-regeneration` and `hormonal-skin` categories. Map them to their correct current categories per the vercel.json redirect destinations.

### P1 — Fix Before Next Deploy
2. **Fix `Manifesto.jsx:65`** — Change `to="/treatments/renew"` → `to="/treatments/skin-renewal-regeneration"`
3. **Fix `Philosophy.jsx:279`** — Change `to="/conditions/age-and-regeneration"` → `to="/conditions"` or a valid category
4. **Add 17 missing URLs to `sitemap.xml`** — All location pages, prescription skincare, advanced consultation, medical aesthetics clinic, book-consultation, minor-skin-lesion-removal, medical-weight-management

### P2 — Cleanup
5. **Remove 18 legacy URLs from `sitemap.xml`** — All `age-and-regeneration`, `hormonal-skin`, and `radiate/pathways` entries
6. **Update `http://eepurl.com` to `https://` in Footer.jsx** if available
7. **Verify all external links** return 200 responses (Square booking, Instagram, Facebook, Google, Imperial, BMS, Marion Gluck)
