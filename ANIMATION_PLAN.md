# Sleek, Elegant, & Luxurious Animation Plan

This plan outlines the integration of high-end animations into the Ulanda application using `framer-motion`. The goal is to create a feeling of luxury through slow, smooth, and deliberate movements, avoiding chaotic or fast-paced transitions.

## 1. Design & Motion Principles

*   **Luxurious Feel:** use long durations (e.g., `0.8s` to `1.2s`) with custom easing (CSS cubic-bezier equivalents) like `[0.22, 1, 0.36, 1]` (ease-out-quint) to make things feel heavy and premium.
*   **Restraint:** Only animate what adds value.
    *   **Text:** ONLY animate in **Hero Sections**. All other body text must remain static to ensure readability and stability.
    *   **Images:** Must be animated. Use "reveal" effects (mask reveals, opacity fading, or subtle parallax).
*   **Orchestration:** Use `staggerChildren` to make elements appear one after another gracefully rather than all at once.

## 2. Shared Components to Create

We will build reusable wrapper components in `src/components/animations/` to ensure consistency and ease of use.

### A. `<RevealImage />`
*   **Purpose:** Wraps any `<img>` or background image container.
*   **Effect:** The image can slightly scale down from 1.1 to 1.0 (zoom out effect) while fading in, or use a "curtain" reveal where a solid color slides away to reveal the photo.
*   **Usage:**
    ```jsx
    <RevealImage>
      <img src="..." />
    </RevealImage>
    ```

### B. `<HeroText />`
*   **Purpose:** Specifically for Hero sections.
*   **Effect:** Split text by lines or words. Words slide up from 100% y-offset with opacity fading from 0 to 1.
*   **Usage:**
    ```jsx
    <HeroText>
      Luxury Skin Treatments
    </HeroText>
    ```

### C. `<FadeInWhenVisible />`
*   **Purpose:** For general sections that need to appear as the user scrolls.
*   **Effect:** Simple opacity `0` -> `1` and slight y-axis movement (`20px` -> `0`).
*   **Usage:** Wrap entire sections or grid items.

### D. `<PageTransition />`
*   **Purpose:** Smooth transition between routes.
*   **Effect:** Cross-fade (opacity) with a very subtle blur filter clearing up.

## 3. Implementation Plan by Page/Section

### Step 1: Global Setup (`src/App.jsx`)
*   Wrap the application content (specifically the `Outlet`) in `AnimatePresence` with `mode="wait"`.
*   This ensures the old page fades out before the new one fades in.

### Step 2: Hero Sections (All Pages)
*   **Target Files:** `Home.jsx`, `Treatment.jsx`, `About.jsx`, etc.
*   **Action:**
    *   Find the `<h1>` and subheadlines in the first section.
    *   Wrap them in the `<HeroText />` component.
    *   Apply staggered delays so the title appears first, then the subtitle.

### Step 3: Image Animations
*   **Target Files:** `ConditionsLanding.jsx`, `Treatment.jsx` `Programme.jsx`, component files like `RelatedTreatments.jsx`.
*   **Action:**
    *   Identify every `<img>` tag or `div` with a background image.
    *   Replace them or wrap them with `<RevealImage />`.
    *   Ensure the `viewport={{ once: true }}` prop is used so animations don't replay annoyingly when scrolling up and down.

### Step 4: Section Scroll Reveals
*   **Target Files:** Long scrolling pages like `Manifeso.jsx`, `Philosophy.jsx`, data-heavy lists.
*   **Action:** Wrap major content blocks (divs) in `<FadeInWhenVisible />`.

## 4. Technical Configuration

**Standard Transition Config:**
```javascript
export const luxuryTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1], // Custom "Luxurious" ease
};
```

**Hero Text Animation Variant:**
```javascript
export const heroTextVariant = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 }
};
```

## 5. Next Steps
1.  Create the `src/components/animations/` folder.
2.  Implement the base components defined in Section 2.
3.  Inject animations into `Home.jsx` first as a prototype.
4.  Roll out to `Treatment.jsx` and other detail pages.
