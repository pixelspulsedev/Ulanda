# Treatment Architecture Implementation Plan

This document outlines the plan to implement the refined treatment architecture, encompassing the renaming of 'Pathways' to 'Treatments', the merging of 'Programmes' into 'Radiate', and the restructuring of content into Refresh, Renew, Restore, and Radiate categories.

## 1. Overview of Changes

*   **Menu & Navigation:**
    *   Rename top-level 'Pathways' to '**Treatments**'.
    *   Remove 'Programmes' as a top-level menu item.
    *   'Treatments' dropdown will now feature guidelines for Refresh, Renew, Restore, and Radiate.
*   **Routing Structure:**
    *   Deprecate /pathways and /programmes routes.
    *   Establish a hierarchical URL structure: /treatments/:category/:subcategory/:treatmentId.
    *   Redirect old URLs to new counterparts:
        *   /pathways -> /treatments
        *   /programmes -> /treatments/radiate
        *   /programmes/:id -> /treatments/radiate/:id (where applicable)
*   **Content Hierarchy:**
    *   **Refresh:** Entry-level, surface-focused (formatted with sub-categories).
    *   **Renew:** Targeted aesthetic treatments (formatted with sub-categories).
    *   **Restore:** Recovery and support (formatted with sub-categories).
    *   **Radiate:** Advanced, consultation-led (absorbs Programmes, formatted with hubs and pathways).

## 2. Data Restructuring

The core data structure in src/data/pageContents/treatments/treatments.js will be updated to reflect the 3-level hierarchy (Category -> Sub-category -> Treatment).

### src/data/pageContents/treatments/treatments.js
This file will become the single source of truth for all treatment data.

*   **Action:** Consolidate data from pathways/pathways.js and programmes/programmes.js into this file.
*   **Structure:**
    `javascript
    export const treatments = {
      refresh: {
        title: 'Refresh',
        description: '...',
        subCategories: {
          'signature-facials': {
            title: 'Signature Facials',
            treatments: { ... }
          },
          // ... other sub-categories
        }
      },
      renew: { ... },
      restore: { ... },
      radiate: {
        title: 'Radiate',
        // Merged content from Programmes
        subCategories: {
          'vitality-energy': { ... },
          // ...
          'structural-lift-facial-architecture': { ... } // Former Programme content
        }
      }
    };
    `

### Cleanup
*   src/data/pageContents/programmes/ -> Deprecate/Delete after merge.
*   src/data/pageContents/pathways/ -> Deprecate/Delete after merge or keep as redirect mapping.

## 3. Component Updates

### src/components/Navbar.jsx
*   Replace 'Pathways' link with 'Treatments'.
*   Remove 'Programmes' link.
*   Update dropdown structure to reflect the 4 main categories clearly.

### src/pages/ Restructuring
*   **Conditions.jsx / ConditionsLanding.jsx**: Unchanged.
*   **Pathways.jsx** -> Rename to **Treatments.jsx**.
    *   Update to serve as the landing page for /treatments.
    *   Display the 4 pillars: Refresh, Renew, Restore, Radiate.
*   **PathwayDetail.jsx** -> Rename/Refactor to **TreatmentCategory.jsx**.
    *   Handle /treatments/:category (e.g., /treatments/refresh).
    *   Display list of Sub-Categories.
*   **New Component: TreatmentSubCategory.jsx**
    *   Handle /treatments/:category/:subcategory.
    *   Display list of Treatments within that sub-category.
*   **Treatment.jsx**
    *   Handle /treatments/:category/:subcategory/:treatmentId.
    *   Display full treatment detail.

## 4. Routing Updates (src/main.jsx)

Update the React Router configuration to support the deep nesting.

`jsx
// Concept
{
  path: 'treatments',
  element: <Treatments />, // Was Pathways.jsx
},
{
  path: 'treatments/:category',
  element: <TreatmentCategory />, // Was PathwayDetail.jsx
},
{
  path: 'treatments/:category/:subcategory',
  element: <TreatmentSubCategory />, // New
},
{
  path: 'treatments/:category/:subcategory/:id',
  element: <Treatment />, // Deep treatment detail
},
// Redirects for backward compatibility
{
  path: 'pathways',
  element: <Navigate to='/treatments' replace />
},
{
  path: 'programmes',
  element: <Navigate to='/treatments/radiate' replace />
},
{
  path: 'programmes/:id',
  // Custom logic or direct component rendering might be needed depending on ID mapping
  element: <Navigate to='/treatments/radiate' replace /> 
}
`

## 5. Implementation Steps

1.  **Backup:** Ensure current state is committed.
2.  **Data Migration:**
    *   Create the new data structure in src/data/pageContents/treatments/treatments.js containing all content for Refresh, Renew, Restore, and Radiate (including old Programmes).
3.  **Route Configuration:**
    *   Update src/main.jsx with the new nested routes.
4.  **Component Refactoring:**
    *   Update Navbar to reflect the menu changes.
    *   Create/Update page components (Treatments.jsx, TreatmentCategory.jsx, TreatmentSubCategory.jsx) to consume the new nested data structure.
5.  **Page Content Implementation:**
    *   Apply the specific copy provided in the 'Developer Handover' documents for each landing page and sub-category.
6.  **Verification:**
    *   Verify all links navigate correctly.
    *   Check mobile menu responsiveness.
    *   Ensure old URLs redirect or 404 gracefully (prefer redirect).

## 6. Specific Content Mappings (Summary)

*   **Radiate:** Includes Vitality, Longevity, Skin Regeneration, Metabolic, Structural Lift, Shape & Regenerate, Collagen Reset, Menopause, Under-Eye.
*   **Refresh:** Signature Facials, Light-Based, Skin Resurfacing, Body Surface.
*   **Renew:** Skin Boosters, Microneedling, Eye-Area, Injectables, Body Tightening.
*   **Restore:** Skin Barrier, Light-Based Recovery, Oxygenation, Lymphatic.

This plan ensures a structural update without losing existing content intent, while aligning strictly with the new 'Treatments' architecture.
