# Ulanda Performance Optimization Plan

This document outlines the strategy to improve the performance of the Ulanda web application by implementing Code Splitting, Self-Hosted Fonts, and Caching via Service Workers.

## Phase 1: Dependencies

To support self-hosted fonts and offline caching capabilities, we need to install specific packages.

**Actions:**
1.  Run the following command to install font packages and the PWA plugin:
    ```bash
    npm install @fontsource/inter @fontsource/playfair-display vite-plugin-pwa -D
    ```

## Phase 2: Self-Host Fonts

Moving from Google CDN to self-hosted fonts reduces DNS lookups and improves layout stability (CLS).

**Actions:**
1.  **Clean `index.html`**:
    *   Remove `<link>` tags pointing to `fonts.googleapis.com` and `fonts.gstatic.com`.
2.  **Update `src/main.jsx`**:
    *   Import the font CSS files directly.
    *   `import '@fontsource/inter';`
    *   `import '@fontsource/playfair-display';`

## Phase 3: Route Lazy Loading (Code Splitting)

Currently, the app loads every single page on the initial load. We will implement Route-based Code Splitting to load pages only when requested.

**Actions:**
1.  **Update `src/App.jsx`**:
    *   Import `Suspense` from 'react'.
    *   Wrap the `<Outlet />` component with `<Suspense fallback={<div className="min-h-screen"></div>}>`. This ensures the app doesn't crash while fetching the new chunk.
2.  **Update `src/main.jsx`**:
    *   Remove static imports for pages (e.g., `import Home from './pages/Home.jsx'`).
    *   Replace them with `React.lazy` imports:
        ```jsx
        // Example
        const Home = React.lazy(() => import('./pages/Home.jsx'))
        const Pathways = React.lazy(() => import('./pages/Pathways.jsx'))
        // ... repeat for all pages
        ```

## Phase 4: Caching & PWA (Service Worker)

We will use `vite-plugin-pwa` to generate a Service Worker. This will cache static assets (JS, CSS, Images) and fonts, making subsequent visits nearly instant and allowing the app to work offline.

**Actions:**
1.  **Update `vite.config.js`**:
    *   Import `VitePWA` from `vite-plugin-pwa`.
    *   Add `VitePWA` to the `plugins` array with the following configuration:
        ```javascript
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
          manifest: {
            name: 'Ulanda',
            short_name: 'Ulanda',
            theme_color: '#6B3614',
            icons: [
              // ... icon configuration
            ]
          },
          workbox: {
            // Define caching strategies
            globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'] 
          }
        })
        ```

## Phase 5: Component Optimization (Future Step)

After the architectural changes, we should address the file size of `src/pages/Home.jsx` (currently >1000 lines).

**Actions:**
1.  Identify logical sections in `Home.jsx` (Hero, Pathways, Reviews).
2.  Extract them into separate components in `src/components/home/`.
