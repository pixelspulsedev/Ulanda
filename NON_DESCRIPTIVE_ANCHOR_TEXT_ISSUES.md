# Non-Descriptive Anchor Text Report
**Date:** February 5, 2026
**Source:** SEMrush Audit (`ulanda.co.uk_links_with_non-descriptive_anchor_text_20260205.csv`)

## Executive Summary
The audit has identified a recurring issue with non-descriptive anchor text across the entire website. The link text "More +" is used extensively to link to the `/conditions` page. Search engines require descriptive anchor text (e.g., "See all Conditions") to understand the context and relevance of the linked page.

## Detected Issues

### 1. Non-Descriptive Anchor Text: "More +"
**Status:** Warning (SEO Best Practice)
**Affected Pages:** All Site Pages (Global Components)
**Target URL:** `https://www.ulanda.co.uk/conditions`
**Current Anchor Text:** "More +"

#### Problem Analysis
The issue originates from global navigation components that are present on every page.
1.  **Navbar (Desktop & Mobile):** The main navigation menu includes a "More +" link pointing to the Conditions landing page.
2.  **Footer:** The footer navigation also uses "More +" for the same link.

Code citations identified via search:
*   `src/components/Navbar.jsx` (Line ~212): Data definition `{ name: 'More +', path: '/conditions' }`
*   `src/components/Navbar.jsx` (Line ~366): Mobile menu link `<Link ...>More +</Link>`
*   `src/components/Footer.jsx` (Line ~88): Footer list item `<Link ...>More +</Link>`

## Proposed Fixes

To satisfy SEO requirements, we must replace the generic "More +" text with descriptive text that clearly indicates the destination content.

### Solution: Rename "More +" to "All Conditions"

#### 1. Update `src/components/Navbar.jsx`
We need to update both the menu data structure and the mobile menu markup.

**Change 1 (Data):**
```jsx
// Before
{ name: 'More +', path: '/conditions' }

// After (Recommended)
{ name: 'All Conditions', path: '/conditions' }
```

**Change 2 (Mobile Menu):**
```jsx
// Before
<Link to="/conditions" ...>More +</Link>

// After
<Link to="/conditions" ...>All Conditions</Link>
```

#### 2. Update `src/components/Footer.jsx`
Update the footer link text.

**Change:**
```jsx
// Before
<li><Link to="/conditions" ...>More +</Link></li>

// After
<li><Link to="/conditions" ...>All Conditions</Link></li>
```

## Next Steps
1.  **Apply Fixes**: Edit `Navbar.jsx` and `Footer.jsx`.
2.  **Verify**: Ensure the layout (spacing) typically accommodates the slightly longer text "All Conditions".
3.  **Deploy**: Push changes to start using the descriptive anchor text.
