# ULANDA Treatment Menu Restructure Implementation Plan

## Executive Summary
This document outlines the technical plan to restructure the ULANDA website's treatment menu from the current "Refresh, Renew, Restore, Radiate" framework to a functional, 6-category navigation system. This change aims to improve user navigation and SEO while retaining the clinical sequencing logic in the background.

## 1. Information Architecture Changes

The 4 existing visible pathways will be replaced by 6 functional categories plus one gated category.

### New Categories (Public)
1.  **Skin Health & Facial Therapies** (`skin-health-facial-therapies`)
2.  **Skin Renewal & Regeneration** (`skin-renewal-regeneration`)
3.  **Injectable Skin Optimisation** (`injectable-skin-optimisation`)
4.  **Structural & Collagen Support** (`structural-collagen-support`)
5.  **Body Regeneration & Tissue Support** (`body-regeneration-tissue-support`)
6.  **Wellness & Regenerative Recovery** (`wellness-regenerative-recovery`)

### Gated Category
7.  **Pelvic & Intimate Regeneration** (`pelvic-intimate-regeneration`)
    *   *Not visible in the main Treatment Menu Hub.*
    *   *Linked only from specific context pages (Hormonal skin, Postpartum).*

### Concept Retention
The "Refresh → Radiate" concept will remain as an underlying philosophy referenced on the Home page, but will no longer serve as the primary navigation structure for treatments.

## 2. Data Structure Migration

The core data file `src/data/pageContents/treatments/treatments.js` requires significant restructuring.

### Current Structure
```javascript
export const treatments = {
  "refresh": { ... },
  "renew": { ... },
  "restore": { ... },
  "radiate": { ... }
}
```

### Proposed Structure
We will flatten the structure to top-level categories matching the new IA. The individual treatments will be moved from their old buckets to these new ones.

```javascript
export const treatmentCategories = [
  {
    id: "skin-health-facial-therapies",
    title: "Skin Health & Facial Therapies",
    description: "Medical-grade facial and skin optimisation...",
    treatments: [
      { id: "advanced-rejuvenating-facial", ... },
      { id: "hydrafacial", ... },
      // ... moved from Refresh/Restore
    ]
  },
  // ... other 5 categories
];
```

**Note:** To preserve existing logic if needed, we can add a `systemCategory` field to each treatment object (e.g., `systemCategory: 'refresh'`).

### Content Updates
*   **Remove:** "Post-Procedure Recovery Facial".
*   **Add:** "Barrier Repair Facial", "Under-Eye Regeneration Treatments".
*   **Move:** "Wellness" treatments to the new "Wellness & Regenerative Recovery" category.
*   **Add:** "Pelvic & Intimate Regeneration" data (marked as `hidden: true` or similar for the menu loop).

## 3. Routing & URL Structure

### URL Schema
The URL structure will change to reflect the new categories:
-   **Old:** `/treatments/refresh/signature-facials/dermaplaning`
-   **New:** `/treatments/skin-health-facial-therapies/dermaplaning` (Simplified)
    *   *Or keeping the subcategory if strictly needed, but the brief suggests a flatter structure.*

### Routing Updates (`src/App.jsx` & `src/main.jsx`)
*   Update `/treatments/:category` route to accept the 6 new slugs.
*   Update `/treatments/:category/:treatmentId` to handle the flattened structure.
*   **Redirects:** If possible, implement client-side redirects from old URLs (e.g., `/treatments/refresh`) to `/treatments` or the most relevant new category to prevent 404s for bookmarked users.

## 4. Component Updates

### `src/pages/Treatments.jsx` (Treatment Menu Hub)
*   **Remove:** The "Refresh, Renew, Restore, Radiate" cards.
*   **Add:** Grid of 6 cards representing the new categories.
*   **Logic:** Filter out "Pelvic & Intimate Regeneration" from this view.
*   **Header:** Update text to "Treatments: Clinician-led regenerative aesthetic care". Remove "Refresh → Radiate" explanation if it confuses the navigation.

### `src/pages/TreatmentCategory.jsx`
*   Update to render the list of treatments for the new categories.
*   Ensure the "Conditions linked" section works with the new mapping.

### `src/pages/Home.jsx`
*   Review links to treatments. The user specified: *"We will reference all treatment from the Home page (Refresh → Radiate) but the treatment will no longer go through... pages"*.
*   **Action:** Update Home page Call-to-Actions (CTAs) for "Refresh", "Renew", etc., to point to the *Concept* explanation or the main Booking page, rather than the old category pages, OR redirect them to the relevant new category section relative to that concept.

## 5. New Content Injection

The following content from the "February folder" needs to be integrated:
1.  **Conditions:**
    *   Non-Responsive Skin & Treatment Fatigue
    *   Acne Scarring
    *   Stretch Mark Support
2.  **Treatments:**
    *   Pelvic & Intimate Regeneration ingredients/content.

**Action:** Since the folder is not directly accessible in this environment, placeholders will be created in `src/data/pageContents/` with `TODO` comments to populate text.

## 6. Implementation Checklist

1.  [ ] **Backup:** Duplicate `treatments.js` to `treatments.backup.js`.
2.  [ ] **Data Refactor:** Rewrite `treatments.js` with the 6+1 category structure.
3.  [ ] **Conditions:** Add new entries to `conditions.js` (placeholders for "February" content).
4.  [ ] **Routing:** Verify `src/main.jsx` handles the new category slugs.
5.  [ ] **Menu Hub:** Rewrite `Treatments.jsx` to display the 6 categories.
6.  [ ] **Category Page:** Update `TreatmentCategory.jsx` to display treatments list.
7.  [ ] **Review:** Verify "Pelvic & Intimate" is reachable via URL but hidden from the main menu.
8.  [ ] **Cleanup:** Remove "Post-Procedure Recovery Facial" code.
9.  [ ] **Home Page:** Update/Verify links on Home page.

## 7.Agent Note
    Do not make changes directly in the treatments or conditions data files, create new ones and name them draft, this will make debugging easier. Make sure to cause no syntax errors or encoding issues. we are not creating new treatments or conditions, we are using the same data we have right now. so instead of creating new treatments or conditions, use the reference the current data in the new draft data file, like restructuring the crosslinks without changing current data or creating new data.
    Do not use scripts.
