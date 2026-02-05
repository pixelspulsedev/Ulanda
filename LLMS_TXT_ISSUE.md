# llms.txt Missing H1 Issue
**Date:** February 5, 2026
**Issue:** Missing H1 on `https://www.ulanda.co.uk/llms.txt`

## Issue Analysis
The SEO audit is flagging "Missing H1" for the URL `/llms.txt`.
*   **Root Cause:** The file `public/llms.txt` does not exist.
*   **Result:** The website serves the 404 "Not Found" page (HTML) instead of a text file.
*   **Scanner Behavior:** The scanner tries to parse the returned HTML for an H1 tag. While our 404 page *does* have an H1, the discrepancy between the expected file type (text) and the served type (HTML representation of a 404) likely triggers the error, or the scanner simply considers the 404 response itself an issue regarding the expected content of that URL.

**Note:** `llms.txt` is a standardized text file used by Large Language Models (LLMs) to better understand and index website content. It is separate from `robots.txt` but serves a similar helper purpose for AI agents.

## Proposed Fix
We should create the `public/llms.txt` file. This will:
1.  Resolve the 404 error for this URL.
2.  Serve a proper `text/plain` file (which does not require H1 tags).
3.  Improve SEO and discoverability for AI agents.

## Content Plan for `llms.txt`
The file will contain:
*   Site Name and Description.
*   Key navigation sections (Conditions, Treatments, About).
*   Contact information.

## Next Steps
1.  **Create File**: Add `public/llms.txt` with the site summary.
2.  **Verify**: Ensure it serves as plain text.
3.  **Deploy**.
