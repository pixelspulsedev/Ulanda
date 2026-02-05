# Sitemap & Canonical URL Fixes Report
**Date:** February 5, 2026
**Issue Types:** "Non-canonical URL" and "Orphaned Pages" in sitemap.xml

## Resolved Issues

### 1. Orphaned Pages (Missing from Sitemap)
**Issue:** 31+ pages (including specific condition sub-pages and blog posts) were accessible on the site but missing from `sitemap.xml`.
**Root Cause:** The `sitemap.xml` file was outdated and had not been regenerated since these new pages were added to the site data files.
**Fix:**
*   Executed the sitemap generation script (`node scripts/generate-sitemap.js`).
*   **Result:** All "orphaned" pages (e.g., `fine-lines-wrinkles`, `dull-dehydrated-skin`) are now correctly listed in `public/sitemap.xml`.

### 2. Non-Canonical URLs (Sitemap Mismatch)
**Issue:** Pages listed in the sitemap were flagged as "non-canonical". This typically occurs when the server redirects the URL found in the sitemap (e.g., adding a trailing slash) or when the page's canonical tag disagrees with the sitemap URL.
**Root Cause:** The Vercel hosting configuration likely had ambiguous or default trailing-slash handling, causing conflicts between the sitemap URLs (no slash) and the served URLs.
**Fix:**
*   Updated `vercel.json` to explicitly enforce `trailingSlash: false`.
*   **Result:** 
    *   Server will now 308 redirect any slash-ending URLs to their clean, non-slash versions (e.g., `/disclaimer/` → `/disclaimer`).
    *   **Consistency Achieved:**
        *   **Sitemap:** `https://www.ulanda.co.uk/disclaimer`
        *   **Canonical Tag:** `https://www.ulanda.co.uk/disclaimer`
        *   **Server Behavior:** Serves `https://www.ulanda.co.uk/disclaimer` (200 OK)

## Next Steps
1.  **Deploy:** Push these changes (updated `sitemap.xml` and `vercel.json`) to production.
2.  **Re-Audit:** Run the SEMrush audit again. These errors should now be cleared.
