# ULANDA Phase 1 — Analytics implementation notes

This document covers the developer-facing details of the Meta Pixel + GA4 + GTM
implementation delivered for Phase 1.

## 1. What is installed in code

| Concern | File |
| --- | --- |
| Consent Mode v2 defaults (denied) + `dataLayer` shim | [index.html](../index.html) |
| GTM loader, event API, consent updates, UTM persistence, page context | [src/lib/analytics.js](../src/lib/analytics.js) |
| Page view + click + scroll + dwell tracking, wired once at app root | [src/components/AnalyticsProvider.jsx](../src/components/AnalyticsProvider.jsx) |
| Cookie consent banner (UI) | [src/components/ConsentBanner.jsx](../src/components/ConsentBanner.jsx) |
| Mounted into the app shell | [src/App.jsx](../src/App.jsx) |
| Booking enquiry form events (no PII) | [src/pages/BookConsultation.jsx](../src/pages/BookConsultation.jsx) |
| Env example | [.env.example](../.env.example) |

GA4 and Meta Pixel are **not** loaded as standalone scripts. They are configured
as tags **inside the GTM container** so that consent, throttling, and event
mapping live in one place. The site only loads GTM.

## 2. One-time setup

1. Create the GTM container, GA4 property, and Meta Pixel asset.
2. Copy `.env.example` → `.env.local` and set `VITE_GTM_ID=GTM-XXXXXXX`.
3. Inside GTM:
   - Add a **Google Tag (GA4 configuration)** tag with the GA4 measurement ID.
     Trigger: *Consent Initialization – All Pages* + *All Pages* (with
     `analytics_storage` required).
   - Add a **Meta Pixel base** tag (Custom HTML or community template) with
     the Pixel ID. Trigger: *All Pages* with `ad_storage` required.
   - Create a **Custom Event trigger** for every ULANDA event name listed in
     section 4 and attach it to GA4 Event tags + Meta Pixel event tags as per
     section 5.
4. In GA4, mark the events in section 6 as **Key events / conversions**.

## 3. Consent model

- `index.html` sets Consent Mode v2 defaults to **denied** for
  `ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage` so
  no measurement happens before the user chooses.
- [ConsentBanner.jsx](../src/components/ConsentBanner.jsx) lets the user
  Accept all / Reject non-essential / save granular preferences.
- The choice is stored in `localStorage` (`ulanda_consent_v1`) and replayed
  on subsequent visits via `restoreConsent()`.
- All GTM tags must use **Consent settings → Require additional consent for
  tag to fire** so the gating actually takes effect.

## 4. Canonical event names (sent to `dataLayer`)

| Event | When it fires (in code) |
| --- | --- |
| `page_view` | Every SPA route change |
| `consultation_page_view` | URL contains `consultation` |
| `consultation_cta_click` | Click on any consultation/book CTA (internal or external) |
| `booking_started` | Click on any Square booking URL **or** booking-enquiry form submit |
| `regenerative_treatment_view` | URL matches polynucleotides / profhilo / skin boosters / jalupro / seventy hyal / microneedling / biorepeel |
| `facial_refinement_view` | URL matches anti-wrinkle / facial-balance / refinement |
| `barrier_skin_stability_view` | URL matches barrier / redness / sensitivity / reactive / skin-stability |
| `authority_content_engagement` | `/journal` or `/blog` page view, **and** 90 s dwell on those pages, **and** scroll ≥ 50 % |
| `deep_authority_engagement` | 180 s dwell on a journal page (scroll ≥ 75 % also recommended in GTM) |
| `scroll_depth` | 50 / 75 / 90 % thresholds, `percent` parameter |
| `contact_form_submit` | Booking enquiry form successful submit |
| `phone_click` | `tel:` link click |
| `email_click` | `mailto:` link click |
| `whatsapp_click` | wa.me / whatsapp.com link click |
| `consent_update` | User accepted/rejected in the banner |

The spec also lists `investment_view`, `reviews_view`, `faq_engagement` and
`email_signup`. These rely on UI elements that don’t yet exist as discrete
components — wire them in GTM (recommended) using:

- `investment_view`: GTM **Element Visibility** trigger on the pricing
  sections (give them `data-track="investment"`).
- `reviews_view`: Element Visibility on the reviews section
  (`data-track="reviews"`).
- `faq_engagement`: Click trigger on `.collapse-title` / `[data-faq]`.
- `email_signup`: form-submit trigger on the newsletter form once it exists.

All events automatically receive the parameters built by
`buildPageContext()` in [analytics.js](../src/lib/analytics.js):

```
page_url, page_path, page_title,
content_type, content_theme, treatment_category,
utm_source, utm_medium, utm_campaign, utm_content, utm_term  // if present
```

## 5. Meta Pixel mapping (configure inside GTM)

| ULANDA dataLayer event | Meta Pixel event |
| --- | --- |
| `page_view` | `PageView` |
| `consultation_page_view` | `ViewContent` (`content_category: 'consultation'`) |
| `regenerative_treatment_view` / `facial_refinement_view` / `barrier_skin_stability_view` | `ViewContent` (`content_category` = the ULANDA category) |
| `booking_started` | `Lead` |
| `contact_form_submit` | `Lead` |
| `consultation_cta_click` | Custom event `ConsultationReadiness` |
| `authority_content_engagement` | Custom event `AuthorityEngagement` |
| `deep_authority_engagement` | Custom event `DeepAuthorityEngagement` |
| `phone_click` / `whatsapp_click` | `Contact` |
| (future) booking confirmation page view | `Schedule` |

## 6. GA4 conversions

Mark as **Key events**:

- `booking_started`
- `consultation_cta_click`
- `contact_form_submit`
- `phone_click`
- `whatsapp_click`
- `email_signup` (once implemented)
- `consultation_booking_completed` (only possible if Square exposes a
  confirmation callback — see section 8)

## 7. UTM standard

The analytics layer auto-captures `utm_source/medium/campaign/content/term`
into `sessionStorage` on first load and appends them to every event. Use this
campaign vocabulary:

- **utm_source**: `meta`, `google`, `email`, `gbp`, `organic_social`
- **utm_medium**: `paid_social`, `paid_search`, `email`, `organic`, `referral`
- **utm_campaign**: one of the six ULANDA themes
  (`skin_shift`, `skin_stability_barrier_health`,
  `hormonal_skin_collagen_change`, `refined_anti_wrinkle_facial_balance`,
  `skin_quality_regeneration`, `intelligent_skin_planning`)
- **utm_content**: e.g. `consultation_reassurance`, `regenerative_education`,
  `redness_sensitivity`, `skin_shift_story`, `anti_wrinkle_refinement`

## 8. Square booking — known limitation

ULANDA bookings happen on `book.squareup.com`, a third-party domain. We
cannot inject GTM, GA4 or Meta Pixel into Square’s booking flow with the
standard Square Appointments product, and there is no documented
post-booking confirmation callback to the originating site.

Implementation consequences:

- **Primary Phase 1 conversion = `booking_started`** (fires the moment a
  visitor clicks a Square booking link or submits the enquiry form). This
  is what should be marked as the conversion in GA4 and in Meta Ads
  Manager for optimisation.
- Cross-domain tracking is **not enabled** for `squareup.com` because Square
  does not honour the `_gl` linker param.
- UTM parameters from the originating ULANDA URL are not forwarded into
  Square’s flow.

To capture true booking completions, the recommended Phase 2 options are:

1. Migrate the booking front-end to an embeddable solution that supports
   pixel injection (e.g. Square’s embedded checkout with custom HTML, or
   replace with a system that fires a confirmation event back to the parent
   page via `postMessage`).
2. Add a Square webhook → server → GA4 Measurement Protocol pipeline that
   sends `consultation_booking_completed` events server-side.

Until either is in place, treat `booking_started` as the primary conversion.

## 9. Privacy / GDPR

- PII is stripped at the boundary in `sanitiseParams()` — any key whose name
  contains `name`, `email`, `phone`, `address`, `dob`, `diagnosis`, `notes`
  or `message` is discarded before reaching `dataLayer`.
- No skin-health, consultation or form free-text content is sent to GA4 or
  Meta Pixel.
- GA4 should additionally have **IP anonymisation** enabled and any
  `User-ID` features disabled unless a DPIA is completed.
- Update the Privacy Policy to mention GA4, GTM, Meta Pixel, the categories
  of data they process, and how to withdraw consent (re-open the banner via
  a footer link — wire `window.localStorage.removeItem('ulanda_consent_v1')`
  to a “Cookie preferences” link).

## 10. QA checklist

Before sign-off, confirm in each tool:

- **GTM Preview Mode**: tags fire in the expected order on every route.
- **GA4 DebugView**: `page_view`, `consultation_cta_click`, `booking_started`,
  `contact_form_submit`, `scroll_depth` arrive with the expected parameters.
- **Meta Pixel Helper**: `PageView` + `ViewContent` + `Lead` fire on the
  matching events. No duplicates.
- **Meta Events Manager → Test Events**: events appear with correct
  `event_source_url`.
- Banner: Accept / Reject / Preferences each persist correctly across
  reloads; rejecting suppresses GA4 + Pixel network calls.
- UTMs: visit `?utm_source=meta&utm_medium=paid_social&utm_campaign=skin_shift`
  then navigate; subsequent events carry the UTM parameters.
- Mobile + iOS Safari: page views and CTA clicks still register.
