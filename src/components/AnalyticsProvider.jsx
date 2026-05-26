import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  captureUtmParams,
  inferContentType,
  isBookingUrl,
  loadGTM,
  restoreConsent,
  trackEvent,
  trackPageView,
} from '../lib/analytics';

/**
 * ULANDA Phase 1 analytics provider.
 * - Restores stored consent (so returning visitors who accepted aren't
 *   re-prompted; Consent Mode v2 defaults in index.html keep first-time
 *   visitors gated until the banner is answered).
 * - Loads GTM (no-op until VITE_GTM_ID is configured).
 * - Persists UTMs per session.
 * - Fires a page_view on every SPA route change.
 * - Fires consultation_page_view / regenerative_treatment_view /
 *   facial_refinement_view / barrier_skin_stability_view / authority_content_engagement
 *   based on the URL pattern.
 * - Installs a global click delegate to track booking_started,
 *   consultation_cta_click, phone_click, whatsapp_click, email_signup.
 * - Tracks scroll depth (50% / 75% / 90%) and authority dwell time.
 *
 * No DOM is rendered.
 */
export default function AnalyticsProvider() {
  const location = useLocation();
  const lastPathRef = useRef(null);
  const dwellStartRef = useRef(0);
  const dwellFiredRef = useRef({ deep: false, normal: false });
  const scrollFiredRef = useRef({ p50: false, p75: false, p90: false });

  /* One-time bootstrap. */
  useEffect(() => {
    captureUtmParams();
    restoreConsent();
    loadGTM(); // safe no-op if no GTM id; respects Consent Mode defaults

    const onClick = handleDocumentClick;
    document.addEventListener('click', onClick, true);

    const onScroll = handleScroll(scrollFiredRef);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Page-view + per-route events. */
  useEffect(() => {
    const path = location.pathname + location.search;
    if (lastPathRef.current === path) return;
    lastPathRef.current = path;

    // Reset per-page engagement tracking.
    scrollFiredRef.current = { p50: false, p75: false, p90: false };
    dwellFiredRef.current = { deep: false, normal: false };
    dwellStartRef.current = Date.now();

    // Defer slightly so document.title (set via vite-react-ssg Head) is updated.
    const t = setTimeout(() => {
      trackPageView();
      fireRouteSpecificEvents(location.pathname);
    }, 50);

    return () => clearTimeout(t);
  }, [location.pathname, location.search]);

  /* Dwell timer for authority content. */
  useEffect(() => {
    const type = inferContentType(location.pathname);
    if (type !== 'authority_content') return;
    const normalAt = setTimeout(() => {
      if (!dwellFiredRef.current.normal) {
        dwellFiredRef.current.normal = true;
        trackEvent('authority_content_engagement', { engagement_trigger: 'dwell_90s' });
      }
    }, 90_000);
    const deepAt = setTimeout(() => {
      if (!dwellFiredRef.current.deep) {
        dwellFiredRef.current.deep = true;
        trackEvent('deep_authority_engagement', { engagement_trigger: 'dwell_180s' });
      }
    }, 180_000);
    return () => {
      clearTimeout(normalAt);
      clearTimeout(deepAt);
    };
  }, [location.pathname]);

  return null;
}

/* ------------------------------------------------------------------ */

function fireRouteSpecificEvents(path) {
  const p = path.toLowerCase();

  if (/consultation/.test(p)) {
    trackEvent('consultation_page_view', { consultation_stage: 'awareness' });
  }
  if (/polynucleotide|profhilo|skin-booster|jalupro|seventy-hyal|microneedling|biorepeel|regenerat/.test(p)) {
    trackEvent('regenerative_treatment_view');
  }
  if (/anti-wrinkle|wrinkle|facial-balance|refinement|profile-balanc/.test(p)) {
    trackEvent('facial_refinement_view');
  }
  if (/barrier|redness|sensitivity|reactive|skin-stability|skin-barrier/.test(p)) {
    trackEvent('barrier_skin_stability_view');
  }
  if (/^\/(journal|blog)/.test(p)) {
    trackEvent('authority_content_engagement', { engagement_trigger: 'page_view' });
  }
}

function handleDocumentClick(e) {
  // Only react to primary-button clicks.
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

  const el = e.target.closest('a, button, [data-track]');
  if (!el) return;

  const href = el.getAttribute('href') || '';
  const text = (el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 120);
  const lowerText = text.toLowerCase();

  // Explicit data-track attribute wins over heuristics.
  const dataTrack = el.getAttribute('data-track');
  if (dataTrack) {
    trackEvent(dataTrack, {
      cta_text: text,
      cta_href: href || undefined,
      location_page: window.location.pathname,
    });
    // Don't return — still allow secondary classification below
    // (e.g. a newsletter link is both `email_signup` and external).
  }

  // tel: links
  if (href.startsWith('tel:')) {
    trackEvent('phone_click', { cta_text: text, location_page: window.location.pathname });
    return;
  }
  // mailto: links
  if (href.startsWith('mailto:')) {
    trackEvent('email_click', { cta_text: text, location_page: window.location.pathname });
    return;
  }
  // WhatsApp
  if (/wa\.me|whatsapp\.com/i.test(href) || /whatsapp/.test(lowerText)) {
    trackEvent('whatsapp_click', { cta_text: text, location_page: window.location.pathname });
    return;
  }
  // Newsletter signup (Mailchimp eepurl etc.). Skip if data-track already
  // emitted email_signup to avoid duplicates.
  if (
    dataTrack !== 'email_signup' &&
    (/eepurl\.com|list-manage\.com|mailchi\.mp/i.test(href) || /newsletter|subscribe/.test(lowerText))
  ) {
    trackEvent('email_signup', {
      cta_text: text,
      signup_source: 'footer_newsletter',
      location_page: window.location.pathname,
    });
    return;
  }

  // Square booking link -> booking_started
  if (isBookingUrl(href)) {
    trackEvent('booking_started', {
      cta_text: text,
      booking_destination: 'square',
      location_page: window.location.pathname,
    });
    // Also fire consultation_cta_click for any "book"-style language.
    trackEvent('consultation_cta_click', {
      cta_text: text,
      cta_type: 'booking_external',
      location_page: window.location.pathname,
    });
    return;
  }

  // Internal consultation CTA (e.g. /treatments/advanced-skin-health-consultation)
  if (/consultation/.test(href) || /book.*consultation|book consult|start consult|book now/i.test(text)) {
    trackEvent('consultation_cta_click', {
      cta_text: text,
      cta_type: /book/i.test(text) ? 'booking_internal' : 'learn_more',
      cta_href: href,
      location_page: window.location.pathname,
    });
  }
}

function handleScroll(scrollFiredRef) {
  return () => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop || 0;
    const viewport = window.innerHeight || 0;
    const full = (doc.scrollHeight || 0) - viewport;
    if (full <= 0) return;
    const pct = scrollTop / full;
    const fired = scrollFiredRef.current;
    if (!fired.p50 && pct >= 0.5) {
      fired.p50 = true;
      trackEvent('scroll_depth', { percent: 50 });
    }
    if (!fired.p75 && pct >= 0.75) {
      fired.p75 = true;
      trackEvent('scroll_depth', { percent: 75 });
    }
    if (!fired.p90 && pct >= 0.9) {
      fired.p90 = true;
      trackEvent('scroll_depth', { percent: 90 });
    }
  };
}
