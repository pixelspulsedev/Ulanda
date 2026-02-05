# Structured Data Issues Report
**Date:** February 5, 2026
**Source:** SEMrush Audit (`ulanda.co.uk_structured_data_that_contains_markup_errors_20260205.csv`)

## Executive Summary
An analysis of the latest structured data audit reveals a consistent critical error across 40+ site pages. The `LocalBusiness` (specifically `MedicalBusiness`) schema is flagging the `medicalSpecialty` property as unrecognized or invalid according to Schema.org vocabulary.

## Detected Issues

### 1. Property `medicalSpecialty` not recognized
**Status:** Critical
**Affected Pages:** All pages (Global Schema) - ~42 URLs listed
**Error Message:** "The property medicalSpecialty is not recognized by Schema.org vocabulary."

#### Problem Analysis
The site uses a global Schema.org script defined in `src/components/Schema.jsx`. This script defines the entity as a `MedicalBusiness`.

Key findings from the codebase:
1.  **Type Definition:** The code correctly defines `"@type": "MedicalBusiness"`.
2.  **Property Usage:** The `medicalSpecialty` property is implemented as an array of raw strings:
    ```javascript
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Skin Regeneration"
    ]
    ```
3.  **Root Cause:**
    *   **Vocabulary Mismatch:** While `medicalSpecialty` is a valid property of `MedicalBusiness` (inherited from `MedicalOrganization`), strict validators often expect **Enumeration** references (e.g., `https://schema.org/Dermatology`) or `MedicalSpecialty` objects rather than simple strings.
    *   **Type Confusion:** Some validators report the entity as `LocalBusiness` (the parent type) and flag specific medical properties if the specific Type isn't fully recognized or valid.

## Proposed Fixes

To resolve these validation errors, we must update the `LocalBusinessSchema` component in `src/components/Schema.jsx` to use compliant Schema.org formatting for the `medicalSpecialty` property.

### Corrective Action: Update `src/components/Schema.jsx`

We should replace the string array with `MedicalSpecialty` objects or direct Schema.org enumeration URLs.

**Current Code:**
```javascript
"medicalSpecialty": [
  "Dermatology",
  "Aesthetic Medicine",
  "Skin Regeneration"
],
```

**Recommended Fix:**
Use the correctly mapped Schema.org URL for "Dermatology" and wrap custom specialties in the correct object type.

```javascript
"medicalSpecialty": [
  // Use the standard Schema.org enumeration URL for Dermatology
  "https://schema.org/Dermatology",
  
  // Wrap custom specialties in an object if strictly needed,
  // OR move them to 'keywords' if 'medicalSpecialty' remains strictly enum-only.
  {
    "@type": "MedicalSpecialty",
    "name": "Aesthetic Medicine"
  },
  {
    "@type": "MedicalSpecialty",
    "name": "Skin Regeneration"
  }
],
```

*Note: If validation remains strict, we may need to list only "https://schema.org/Dermatology" under `medicalSpecialty` and move "Aesthetic Medicine" and "Skin Regeneration" to the `keywords` property or `knowsAbout` property.*

### Alternative (Strict Compliance)
If the validator rejects custom names in `medicalSpecialty`:

```javascript
"medicalSpecialty": "https://schema.org/Dermatology",
"keywords": "Aesthetic Medicine, Skin Regeneration, Regenerative Aesthetics, Menopause Skin",
```

## Next Steps
1.  **Apply Fix**: Edit `src/components/Schema.jsx` with the updated structure.
2.  **Verify**: Deploy to a staging URL (or preview) and run through Google's Rich Results Test or Schema.org Validator.
3.  **Deploy**: Push changes to production.
