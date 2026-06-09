/**
 * ULANDA Phase 1 analytics utility.
 *
 * Central layer for:
 *   - Loading Google Tag Manager (which in turn loads GA4 + Meta Pixel tags
 *     configured inside the GTM container).
 *   - Pushing structured events to window.dataLayer.
 *   - Persisting UTM parameters across the session.
 *   - Managing Google Consent Mode v2 state from the consent banner.
 *   - Inferring ULANDA content themes / treatment categories from the URL.
 *
 * Privacy: never pass names, emails, phone numbers, medical history,
 * skin diagnosis details or any PII into events. Event parameters are
 * sanitised at the boundary in `sanitiseParams()`.
 */

const GTM_ID = import.meta.env.VITE_GTM_ID;
const CONSENT_STORAGE_KEY = 'ulanda_consent_v1';
const UTM_STORAGE_KEY = 'ulanda_utm_v1';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

const isBrowser = () => typeof window !== 'undefined';

/* ------------------------------------------------------------------ */
/* dataLayer primitives                                                */
/* ------------------------------------------------------------------ */

const getDataLayer = () => {
  if (!isBrowser()) return null;
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
};

const gtag = (...args) => {
  const dl = getDataLayer();
  if (dl) dl.push(args);
};

/* ------------------------------------------------------------------ */
/* GTM loader                                                          */
/* ------------------------------------------------------------------ */

let gtmLoaded = false;

export function loadGTM() {
  if (!isBrowser() || gtmLoaded) return;
  if (!GTM_ID) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info('[analytics] VITE_GTM_ID not set — GTM not loaded.');
    }
    return;
  }
  gtmLoaded = true;

  // Standard GTM snippet (head portion).
  getDataLayer().push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  document.head.appendChild(script);

  // noscript fallback.
  const ns = document.getElementById('gtm-noscript');
  if (ns && !ns.firstChild) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(GTM_ID)}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    ns.appendChild(iframe);
  }
}

/* ------------------------------------------------------------------ */
/* Consent Mode v2                                                     */
/* ------------------------------------------------------------------ */

export const CONSENT_STATE = {
  UNKNOWN: 'unknown',
  GRANTED: 'granted',
  DENIED: 'denied',
};

export function getStoredConsent() {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function persistConsent(state) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ ...state, ts: Date.now() })
    );
  } catch {
    /* ignore */
  }
}

/**
 * Clear the stored consent choice so the banner reappears on next render.
 * Resets Consent Mode to denied for non-essential storage.
 */
export function resetConsent() {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* ignore */
  }
  gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
}

/**
 * Update Google Consent Mode and, if analytics consent is granted,
 * make sure GTM is loaded so downstream tags can fire.
 *
 * @param {{ analytics?: boolean, marketing?: boolean }} choice
 */
export function updateConsent({ analytics = false, marketing = false } = {}) {
  const consent = {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
  };
  gtag('consent', 'update', consent);
  persistConsent({ analytics, marketing });

  // Tell tags inside GTM that consent has been resolved.
  trackEvent('consent_update', { 
    analytics_consent: analytics, 
    marketing_consent: marketing 
  });

  if (analytics || marketing) loadGTM();
}

/**
 * Restore consent on page load. Returns true if a stored choice was applied.
 */
export function restoreConsent() {
  const stored = getStoredConsent();
  if (!stored) return false;
  updateConsent({ analytics: !!stored.analytics, marketing: !!stored.marketing });
  return true;
}

/* ------------------------------------------------------------------ */
/* UTM persistence                                                     */
/* ------------------------------------------------------------------ */

export function captureUtmParams() {
  if (!isBrowser()) return null;
  const url = new URL(window.location.href);
  const found = {};
  let hasAny = false;
  for (const key of UTM_KEYS) {
    const v = url.searchParams.get(key);
    if (v) {
      found[key] = v.slice(0, 100);
      hasAny = true;
    }
  }
  if (!hasAny) return getStoredUtmParams();
  try {
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
  } catch {
    /* ignore */
  }
  return found;
}

export function getStoredUtmParams() {
  if (!isBrowser()) return null;
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------ */
/* Page context inference                                              */
/* ------------------------------------------------------------------ */

const CONTENT_THEME_RULES = [
  { test: /skin-shift|skin-shift-guide/i, theme: 'skin_shift' },
  { test: /barrier|redness|sensitivity|reactive|stability/i, theme: 'skin_stability_barrier_health' },
  { test: /hormonal|menopause|peri|collagen-change|midlife/i, theme: 'hormonal_skin_collagen_change' },
  { test: /anti-wrinkle|wrinkle|facial-balance|refinement|profile/i, theme: 'refined_anti_wrinkle_facial_balance' },
  { test: /polynucleotide|profhilo|skin-booster|jalupro|seventy-hyal|microneedling|biorepeel|regenerat|collagen/i, theme: 'skin_quality_regeneration' },
  { test: /signature|programme|pathway|consultation|plan/i, theme: 'intelligent_skin_planning' },
];

const TREATMENT_CATEGORY_RULES = [
  { test: /polynucleotide|profhilo|skin-booster|jalupro|seventy-hyal|microneedling|biorepeel/i, category: 'regenerative' },
  { test: /anti-wrinkle|wrinkle|facial-balance|refinement/i, category: 'facial_refinement' },
  { test: /barrier|redness|sensitivity|reactive|stability/i, category: 'barrier_skin_stability' },
  { test: /obagi|prescription/i, category: 'prescription_skincare' },
];

export function inferContentTheme(path = '') {
  for (const r of CONTENT_THEME_RULES) if (r.test.test(path)) return r.theme;
  return null;
}

export function inferTreatmentCategory(path = '') {
  for (const r of TREATMENT_CATEGORY_RULES) if (r.test.test(path)) return r.category;
  return null;
}

export function inferContentType(path = '') {
  if (path === '/' || path === '') return 'home';
  if (/^\/(journal|blogs?)/.test(path)) return 'authority_content';
  if (/^\/treatments?/.test(path)) return 'treatment';
  if (/^\/conditions?/.test(path)) return 'condition';
  if (/^\/signature|programme|pathway/.test(path)) return 'programme';
  if (/consultation/.test(path)) return 'consultation';
  if (/^\/locations|^\/aesthetic-clinic|^\/medical-aesthetics-clinic/.test(path)) return 'location';
  if (/contact|book/.test(path)) return 'contact';
  return 'page';
}

/* ------------------------------------------------------------------ */
/* Event API                                                           */
/* ------------------------------------------------------------------ */

// Keys that are NEVER allowed in event parameters.
const PII_BLOCKLIST = ['name', 'first_name', 'last_name', 'email', 'phone', 'address', 'dob', 'diagnosis', 'notes', 'message'];

function sanitiseParams(params = {}) {
  const out = {};
  for (const [k, v] of Object.entries(params)) {
    if (v == null) continue;
    const lk = k.toLowerCase();
    if (PII_BLOCKLIST.some((bad) => lk.includes(bad))) continue;
    if (typeof v === 'string') out[k] = v.slice(0, 200);
    else if (typeof v === 'number' || typeof v === 'boolean') out[k] = v;
    else if (Array.isArray(v)) out[k] = v.slice(0, 20).map(String).join(',').slice(0, 200);
  }
  return out;
}

function buildPageContext() {
  if (!isBrowser()) return {};
  const path = window.location.pathname;
  return {
    page_url: window.location.href,
    page_path: path,
    page_title: document.title,
    content_type: inferContentType(path),
    content_theme: inferContentTheme(path),
    treatment_category: inferTreatmentCategory(path),
  };
}

/**
 * Push a tracked event to the dataLayer. GTM tags fan this out to GA4
 * and Meta Pixel based on container configuration.
 *
 * @param {string} eventName  Canonical ULANDA event name (see docs/ANALYTICS.md).
 * @param {object} [params]   Event parameters. PII is stripped.
 */
export function trackEvent(eventName, params = {}) {
  if (!eventName || !isBrowser()) return;
  const dl = getDataLayer();
  if (!dl) return;
  const utm = getStoredUtmParams();
  dl.push({
    event: eventName,
    ...buildPageContext(),
    ...(utm || {}),
    ...sanitiseParams(params),
  });
}

/**
 * Fire a virtual page view. GA4 page_view tag inside GTM should be
 * configured to listen for the `page_view` event.
 */
export function trackPageView(extra = {}) {
  if (!isBrowser()) return;
  const dl = getDataLayer();
  if (!dl) return;
  const utm = getStoredUtmParams();
  dl.push({
    event: 'page_view',
    ...buildPageContext(),
    ...(utm || {}),
    ...sanitiseParams(extra),
  });
}

/* ------------------------------------------------------------------ */
/* Booking URL detection                                               */
/* ------------------------------------------------------------------ */

const BOOKING_HOST_PATTERNS = [/(^|\.)squareup\.com$/i, /(^|\.)square\.site$/i];

export function isBookingUrl(href) {
  if (!href) return false;
  try {
    const u = new URL(href, isBrowser() ? window.location.href : 'https://www.ulanda.co.uk');
    return BOOKING_HOST_PATTERNS.some((p) => p.test(u.hostname));
  } catch {
    return false;
  }
}
