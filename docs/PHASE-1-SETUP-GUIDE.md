# ULANDA Phase 1 — Non-Code Setup Guide

This document is the step-by-step playbook for the **configuration work** that
sits outside the codebase: creating the GTM container, GA4 property, Meta Pixel,
wiring the tags, mapping conversions, building audiences, setting UTM standards,
and signing off the QA checklist.

The codebase already pushes a clean, privacy-safe stream of events to
`window.dataLayer` (see [docs/ANALYTICS.md](ANALYTICS.md)). All of the work in
this guide happens **inside Google Tag Manager, GA4 and Meta Business Manager** —
you do not need to touch the repo for any of the steps below, except step 1
(setting the `VITE_GTM_ID` environment variable) and step 12 (Privacy Policy
copy update).

---

## Prerequisites

- Admin access to a Google account that will own GTM + GA4.
- Admin access to ULANDA’s Meta Business Manager (or ability to have it
  granted by the page owner).
- Access to the Vercel project (to set the `VITE_GTM_ID` env var).
- Access to the WordPress / repo to update the Privacy Policy copy.
- Chrome with the following extensions installed:
  - **Tag Assistant Companion** (Google)
  - **Meta Pixel Helper** (Meta)

---

## Step 1 — Create the Google Tag Manager container

1. Go to <https://tagmanager.google.com> and sign in with the ULANDA Google
   account.
2. Click **Create Account**.
   - Account name: `ULANDA`
   - Country: `United Kingdom`
   - Container name: `www.ulanda.co.uk`
   - Target platform: `Web`
3. Accept the GTM Terms of Service (tick the GDPR box at the bottom).
4. **Copy the container ID** — it looks like `GTM-XXXXXXX`. You will need this
   in step 2.
5. Close the install-snippet dialog without copying it — the site already
   loads GTM dynamically from code; you only need the ID.

## Step 2 — Set the GTM ID on the website

1. In Vercel → **Project → Settings → Environment Variables**, add:
   - Name: `VITE_GTM_ID`
   - Value: the `GTM-XXXXXXX` value from step 1
   - Environments: **Production** and **Preview**
2. Redeploy the latest production build (Vercel → Deployments → Redeploy).
3. Open <https://www.ulanda.co.uk> in an Incognito window with Tag Assistant
   running. Tag Assistant should detect the GTM container (the GA4 / Meta tags
   won’t fire yet — that’s expected until later steps).

## Step 3 — Create the GA4 property

1. Go to <https://analytics.google.com> with the same Google account.
2. **Admin** (cog icon) → **Create → Property**.
   - Property name: `ULANDA – www.ulanda.co.uk`
   - Reporting time zone: `(GMT+00:00) United Kingdom`
   - Currency: `British Pound (£)`
3. Business details:
   - Industry: `Health & beauty`
   - Business size: as appropriate
4. Business objectives: tick **Generate leads** and **Examine user behaviour**.
5. **Set up a data stream → Web**.
   - URL: `https://www.ulanda.co.uk`
   - Stream name: `ULANDA Web`
   - Leave **Enhanced measurement** ON, then click the cog and **uncheck
     "Page views"** (we send page views from the dataLayer ourselves to avoid
     duplicates). Leave the rest (scrolls, outbound clicks, file downloads,
     form interactions, video) enabled — they are useful defaults.
6. Copy the **Measurement ID** (`G-XXXXXXXXXX`). You will paste it into the
   GTM tag in step 6.
7. **Admin → Data Settings → Data Collection**:
   - Enable **Google signals** (only after consent banner is verified live).
   - **IP anonymisation** — confirm GA4 does this automatically (UK
     instances). No action required, just confirm.
   - **Data retention**: set Event data retention to **14 months** (max for
     standard GA4) so we can year-on-year compare.

## Step 4 — Create the Meta Pixel

1. Go to <https://business.facebook.com> → **Events Manager → Connect Data
   Sources → Web → Meta Pixel**.
2. Name the pixel `ULANDA Web Pixel`. Enter `https://www.ulanda.co.uk`.
3. Choose **Install code manually** (we install via GTM, so do **not** install
   the partner integration or paste anything on-site).
4. Copy the **Pixel ID** (16-digit number). You will paste it into the GTM
   tag in step 7.
5. In Events Manager → **Settings**:
   - Enable **Automatic advanced matching**: **OFF** (we do not pass
     hashed PII; keeping this off is the conservative privacy stance).
   - **Event matching priorities**: leave default for now.
   - **Domains**: add `ulanda.co.uk` and verify the domain (Meta tab →
     Brand Safety → Domains → DNS or meta-tag verification).

## Step 5 — Configure GTM built-in variables, triggers and the consent system

1. Open the GTM container → **Variables → Configure** and tick:
   - Click URL, Click Text, Click Element, Click Classes
   - Page URL, Page Path, Page Hostname
   - Form ID, Form Classes, Form Element
   - Scroll Depth Threshold
2. **Variables → User-Defined Variables → New** — create one **Data Layer
   Variable** for each parameter the site pushes:

   | Variable name (in GTM)     | Data layer variable name |
   | -------------------------- | ------------------------ |
   | `dlv – page_path`          | `page_path`              |
   | `dlv – page_title`         | `page_title`             |
   | `dlv – page_url`           | `page_url`               |
   | `dlv – content_type`       | `content_type`           |
   | `dlv – content_theme`      | `content_theme`          |
   | `dlv – treatment_category` | `treatment_category`     |
   | `dlv – cta_text`           | `cta_text`               |
   | `dlv – cta_href`           | `cta_href`               |
   | `dlv – cta_type`           | `cta_type`               |
   | `dlv – consultation_stage` | `consultation_stage`     |
   | `dlv – location_page`      | `location_page`          |
   | `dlv – percent`            | `percent`                |
   | `dlv – engagement_trigger` | `engagement_trigger`     |
   | `dlv – signup_source`      | `signup_source`          |
   | `dlv – booking_destination`| `booking_destination`    |
   | `dlv – utm_source`         | `utm_source`             |
   | `dlv – utm_medium`         | `utm_medium`             |
   | `dlv – utm_campaign`       | `utm_campaign`           |
   | `dlv – utm_content`        | `utm_content`            |
   | `dlv – analytics_consent`  | `analytics_consent`      |
   | `dlv – marketing_consent`  | `marketing_consent`      |

3. **Admin → Container Settings → Additional Settings → Consent Overview →
   Enable consent overview**. This lets you tick the consent boxes on each tag.
4. **Triggers → New** — create one **Custom Event** trigger per ULANDA event
   name. Tick "Use regex matching" on the Event name field if you want to
   group several into one trigger, otherwise keep them separate:

   - `ce – page_view`             → Event name = `page_view`
   - `ce – consultation_page_view`
   - `ce – consultation_cta_click`
   - `ce – booking_started`
   - `ce – contact_form_submit`
   - `ce – phone_click`
   - `ce – email_click`
   - `ce – whatsapp_click`
   - `ce – email_signup`
   - `ce – regenerative_treatment_view`
   - `ce – facial_refinement_view`
   - `ce – barrier_skin_stability_view`
   - `ce – authority_content_engagement`
   - `ce – deep_authority_engagement`
   - `ce – scroll_depth`
   - `ce – investment_view`           *(used once you tag pricing sections)*
   - `ce – reviews_view`              *(used once you tag the reviews section)*
   - `ce – faq_engagement`            *(used once you tag FAQ accordions)*
   - `ce – consent_update`

## Step 6 — Install the GA4 configuration + event tags

1. **Tags → New → Google Tag (GA4 configuration)**
   - Tag ID: paste the `G-XXXXXXXXXX` from step 3. 
   - Configuration parameters (Add row):
     - `send_page_view` → `false`  *(we send page views manually)*
   - **Advanced → Consent Settings → Require additional consent for tag to
     fire** → tick `analytics_storage`.
   - Trigger: **Consent Initialization – All Pages** (built-in).
2. **Tags → New → Google Analytics: GA4 Event** — create one per event name.
   Use this naming convention: `GA4 – <event_name>`
   For each tag:
   - Configuration tag: select the GA4 config from step 6.1.
   - Event name: the literal ULANDA event name (e.g. `consultation_cta_click`).
   - Event parameters (Add row, copying from the dataLayer variables in step 5):

     | Parameter           | Value                          |
     | ------------------- | ------------------------------ |
     | `page_location`     | `{{dlv – page_url}}`           |
     | `page_path`         | `{{dlv – page_path}}`          |
     | `page_title`        | `{{dlv – page_title}}`         |
     | `content_type`      | `{{dlv – content_type}}`       |
     | `content_theme`     | `{{dlv – content_theme}}`      |
     | `treatment_category`| `{{dlv – treatment_category}}` |
     | `cta_text`          | `{{dlv – cta_text}}`           |
     | `location_page`     | `{{dlv – location_page}}`      |
     | `consultation_stage`| `{{dlv – consultation_stage}}` |

     Event-specific extras (only add where relevant):
     - `scroll_depth` → also add `percent = {{dlv – percent}}`
     - `booking_started` → also add `booking_destination = {{dlv – booking_destination}}`
     - `email_signup` → also add `signup_source = {{dlv – signup_source}}`

   - Consent: tick `analytics_storage` under Require additional consent.
   - Trigger: the matching `ce – <event_name>` custom event trigger.

3. Repeat 6.2 for every event listed in step 5.4.
   Use **Templates → Variable templates** later if you want to DRY this up;
   for Phase 1 the explicit per-event tags are easier to QA.

## Step 7 — Install the Meta Pixel base + event tags

1. **Tags → New → Custom HTML** named `Meta Pixel Base`.
   Paste this (replace `YOUR_PIXEL_ID`):

   ```html
   <script>
     !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
     n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
     n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
     t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
     document,'script','https://connect.facebook.net/en_US/fbevents.js');
     fbq('init', 'YOUR_PIXEL_ID');
     fbq('track', 'PageView');
   </script>
   ```

   - **Advanced → Consent Settings → Require additional consent** → tick
     `ad_storage`.
   - Trigger: **Consent Initialization – All Pages**.
   - Tag firing options: **Once per page**.

2. **Per-event Meta Pixel tags** — create one Custom HTML tag per row of the
   table below. Tag firing: **Once per event**. Consent: require
   `ad_storage`. Trigger: the matching `ce – <event_name>` trigger.

   | ULANDA event                       | Pixel call (paste into a `<script>fbq(...)</script>` tag)                                                                                       |
   | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
   | `consultation_page_view`           | `fbq('track','ViewContent',{content_category:'consultation', content_name:'{{dlv – page_title}}'});`                                            |
   | `regenerative_treatment_view`      | `fbq('track','ViewContent',{content_category:'regenerative', content_name:'{{dlv – page_title}}'});`                                            |
   | `facial_refinement_view`           | `fbq('track','ViewContent',{content_category:'facial_refinement', content_name:'{{dlv – page_title}}'});`                                       |
   | `barrier_skin_stability_view`      | `fbq('track','ViewContent',{content_category:'barrier_skin_stability', content_name:'{{dlv – page_title}}'});`                                  |
   | `booking_started`                  | `fbq('track','Lead',{content_name:'booking_started', content_category:'{{dlv – content_theme}}'});`                                             |
   | `contact_form_submit`              | `fbq('track','Lead',{content_name:'contact_form', content_category:'{{dlv – content_theme}}'});`                                                |
   | `email_signup`                     | `fbq('track','CompleteRegistration',{content_name:'newsletter', content_category:'{{dlv – signup_source}}'});`                                  |
   | `phone_click`                      | `fbq('track','Contact',{content_category:'phone'});`                                                                                            |
   | `whatsapp_click`                   | `fbq('track','Contact',{content_category:'whatsapp'});`                                                                                         |
   | `consultation_cta_click`           | `fbq('trackCustom','ConsultationReadiness',{cta_text:'{{dlv – cta_text}}', content_theme:'{{dlv – content_theme}}'});`                          |
   | `authority_content_engagement`     | `fbq('trackCustom','AuthorityEngagement',{content_theme:'{{dlv – content_theme}}'});`                                                           |
   | `deep_authority_engagement`        | `fbq('trackCustom','DeepAuthorityEngagement',{content_theme:'{{dlv – content_theme}}'});`                                                       |
   | `reviews_view`                     | `fbq('trackCustom','ReviewEngagement');`                                                                                                        |
   | `faq_engagement`                   | `fbq('trackCustom','FAQEngagement');`                                                                                                           |
   | `investment_view`                  | `fbq('trackCustom','InvestmentView',{content_theme:'{{dlv – content_theme}}'});`                                                                |
   | (future) `consultation_booking_completed` | `fbq('track','Schedule',{content_name:'consultation', content_category:'{{dlv – content_theme}}'});`                                     |

   **Important**: Do NOT add a Pixel tag for `page_view`. The base Pixel tag
   in step 7.1 already fires `PageView` once per page load. The SPA route
   change `page_view` event is handled by GA4 only — sending another Pixel
   `PageView` on every SPA route would inflate counts. If you need
   per-route Pixel page views, change the base tag to **not** call
   `fbq('track','PageView')` and instead create a separate Custom HTML tag
   triggered by `ce – page_view` that calls `fbq('track','PageView')`.

## Step 8 — Mark GA4 conversions (Key events)

In GA4 → **Admin → Events → Key events**, toggle these ON (you may need to
wait 24 h after first event ingestion for them to appear):

- `booking_started`                *(Phase 1 primary conversion)*
- `consultation_cta_click` done
- `contact_form_submit`
- `phone_click` done
- `whatsapp_click` done
- `email_signup` done
- `consultation_booking_completed` *(only once Phase 2 Square integration ships)*

Then **Admin → Data display → Reporting identity** → choose **Blended**.

## Step 9 — Build audiences

### 9a. GA4 audiences

GA4 → **Admin → Audiences → New audience → Create a custom audience** for each:

| Audience name                          | Condition                                                                                          |
| -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| All website visitors  done                 | `session_start` is any value (or use the built-in "All Users")                                      |
| Consultation page visitors   done          | Event `consultation_page_view` count ≥ 1 in 30 days                                                 |
| Booking starters who did not complete  | `booking_started` ≥ 1 AND `consultation_booking_completed` = 0 in 30 days                           |
| Regenerative treatment interest    done     | `regenerative_treatment_view` ≥ 1 in 30 days                                                        |
| Barrier / sensitivity interest done        | `barrier_skin_stability_view` ≥ 1 in 30 days                                                        |
| Hormonal skin interest   done              | `page_path` contains `hormonal` OR `menopause` OR `peri` in 30 days                                 |
| Deep authority readers    done             | `deep_authority_engagement` ≥ 1 in 30 days                                                          |
| Repeat visitors   done                     | Sessions > 1 in 30 days                                                                              |
| Ware / Hertford / Broxbourne / Hoddesdon / Bishop’s Stortford / St Albans | `page_path` contains `aesthetic-clinic-<town>` in 30 days  *(one audience per town)* | done

### 9b. Meta audiences

Meta Business → **Audiences → Create a Custom Audience → Website**. Repeat for
each behaviour, choosing the matching Pixel event.

**Note on "Source" error:** If you see an error in the Source field or the
Pixel is missing:
1. Go to **Business Settings → Data Sources → Pixels (or Datasets)**.
2. Select the Pixel → **Add People** → add yourself with "Full control".
3. Select the Pixel → **Connected Assets** → add your Ad Account.
4. Refresh the audience creator page.

- All website visitors → "All website visitors", 180 days.
- Consultation page visitors → Event `ViewContent` where
  `content_category = consultation`, 180 days.
- Booking starters who didn’t complete → Include `Lead` (where
  `content_name = booking_started`), Exclude `Schedule`, 30 days.
- Regenerative interest → `ViewContent` where `content_category = regenerative`,
  90 days.
- Barrier / sensitivity interest → `ViewContent` where
  `content_category = barrier_skin_stability`, 90 days.
- Hormonal skin interest → URL contains `hormonal`/`menopause`/`peri`, 90 days.
- Deep authority readers → custom event `DeepAuthorityEngagement`, 180 days.
- Repeat visitors → "All website visitors" + visit frequency ≥ 2 in 90 days.
- **Local town audiences**: one Custom Audience per town with URL contains
  `aesthetic-clinic-ware`, etc. Note: Meta no longer supports postcode-level
  targeting in the UK without local audience volume, so URL-based works best.

Then create a **Lookalike** off the *Booking starters who did not complete*
audience at 1 % UK once it has > 100 people.

## Step 10 — UTM tagging standard for campaigns

All paid, email, and organic-social links must carry UTMs. Save this in your
campaign launch checklist:

```
?utm_source=<source>
&utm_medium=<medium>
&utm_campaign=<campaign-theme>
&utm_content=<creative-variant>
```

Allowed values (do not invent new ones without updating this list):

- **utm_source**: `meta`, `google`, `email`, `gbp`, `organic_social`
- **utm_medium**: `paid_social`, `paid_search`, `email`, `organic`, `referral`
- **utm_campaign** (one of the six ULANDA themes):
  `skin_shift`,
  `skin_stability_barrier_health`,
  `hormonal_skin_collagen_change`,
  `refined_anti_wrinkle_facial_balance`,
  `skin_quality_regeneration`,
  `intelligent_skin_planning`
- **utm_content** (creative angle): e.g. `consultation_reassurance`,
  `regenerative_education`, `redness_sensitivity`, `skin_shift_story`,
  `anti_wrinkle_refinement`.

Use the **Google Campaign URL Builder** (<https://ga-dev-tools.google/campaign-url-builder/>)
to generate URLs and keep a master sheet of every campaign URL launched.

The website automatically captures these into the session and appends them
to every event, so you can segment GA4 reports by `utm_campaign` and
`utm_content`.

## Step 11 — Submit & verify with GTM Preview

1. In GTM, click **Preview** (top right). Enter
   `https://www.ulanda.co.uk?gtm_debug=1` and connect.
2. With Consent Banner showing, click **Reject non-essential** — 
   confirm in the GTM tag-assistant pane:
   - GA4 config tag: **Not fired** (consent denied).
   - Meta Pixel Base: **Not fired** (consent denied).
3. Reload the page and click **Accept all**.
   - GA4 config: **Fired**.
   - Meta Pixel Base: **Fired**.
   - GA4 page_view event tag: Fires on the `page_view` dataLayer event.
4. Click a Square booking CTA:
   - `ce – booking_started` trigger fires.
   - `GA4 – booking_started` tag fires.
   - Meta Pixel `Lead` tag fires.
5. Navigate to a treatment page (e.g. Profhilo):
   - `ce – regenerative_treatment_view` fires.
   - GA4 + Meta ViewContent tags fire.
6. Submit the contact / booking enquiry form:
   - `ce – contact_form_submit` + `ce – booking_started` fire.
7. Click the footer **Subscribe to our Newsletter** button:
   - `ce – email_signup` fires.
8. Open a journal article, scroll past 50 %, then dwell 90 s:
   - `ce – scroll_depth` (percent=50) fires.
   - `ce – authority_content_engagement` fires.
9. Once all green: **Submit → Publish** the GTM container with a clear
   version name like `Phase 1 – tracking foundation`.

## Step 12 — Update the Privacy Policy done

Edit [src/pages/PrivacyPolicy.jsx](../src/pages/PrivacyPolicy.jsx) (or have
the copy approved and the developer commit it) to include:

- A **Cookies and tracking** section that names:
  - Google Analytics 4 (cookies `_ga`, `_ga_<container>`), retention 14 months,
    purpose: behavioural analytics. Data processor: Google Ireland Ltd.
  - Google Tag Manager (no cookies of its own).
  - Meta Pixel (cookies `_fbp`, `_fbc`), purpose: ad measurement and retargeting.
    Data processor: Meta Platforms Ireland Ltd.
- A line on **legal basis**: consent (UK GDPR Article 6(1)(a)) for analytics
  and marketing cookies; legitimate interest for strictly-necessary cookies.
- A line: *"You can withdraw or change your consent at any time by clicking
  ‘Cookie preferences’ at the bottom of any page."*
- A line confirming **no PII or health information** is sent to GA4 or Meta.

## Step 13 — Verify in GA4 DebugView

1. Install the **Google Analytics Debugger** Chrome extension (or append
   `?_gl=debug` after enabling consent).
2. GA4 → **Admin → DebugView**. Browse the site in another tab.
3. Confirm events arrive within ~5 seconds:
   - `page_view`
   - `consultation_page_view`
   - `consultation_cta_click`
   - `booking_started`
   - `scroll_depth` (50/75/90)
4. Click any event and confirm parameters include `content_theme`,
   `content_type`, `treatment_category`, `cta_text`, `utm_*` (when present).

## Step 14 — Verify in Meta Events Manager

1. Events Manager → select the ULANDA pixel → **Test Events**.
2. Enter `https://www.ulanda.co.uk` and load the site.
3. Accept consent. Confirm events show up:
   - `PageView` on every page.
   - `ViewContent` on consultation / treatment pages.
   - `Lead` on Square click + form submit.
   - `Contact` on phone / whatsapp clicks.
   - `CompleteRegistration` on newsletter click.
   - Custom events: `ConsultationReadiness`, `AuthorityEngagement`,
     `DeepAuthorityEngagement`, `ReviewEngagement`, `FAQEngagement`.
4. After 48 h, check **Events Manager → Diagnostics** for warnings (event
   match quality, redundant events, missing parameters) and fix.

## Step 15 — Final QA checklist (sign-off)

Tick every box before declaring Phase 1 complete:

- [ ] GTM container published.
- [ ] `VITE_GTM_ID` set in Vercel production.
- [ ] GA4 property receives `page_view` on every route change.
- [ ] Meta Pixel receives `PageView` on every page load.
- [ ] Consultation CTA click events fire (GA4 + Meta).
- [ ] Booking-start events fire on every Square link AND the enquiry form.
- [ ] Contact form submit fires (GA4 + Meta).
- [ ] Scroll 50 % / 75 % / 90 % events fire on long pages.
- [ ] Authority engagement fires at 90 s, deep authority at 180 s on a journal page.
- [ ] No duplicate events (GTM Preview shows each event firing once).
- [ ] All tags blocked until consent is granted.
- [ ] UTM params from a test URL appear in GA4 Realtime → User properties.
- [ ] Meta Events Manager shows event activity for the last 24 h.
- [ ] Mobile (iOS Safari + Android Chrome) tested.
- [ ] Desktop (Chrome + Safari + Firefox) tested.
- [ ] Privacy Policy updated with GA4 / GTM / Meta Pixel disclosures.
- [ ] Cookie preferences link in the footer re-opens the consent banner.
- [ ] No PII observed in any event payload (DebugView + Pixel Helper).
- [ ] Screenshots captured of: GTM Preview success, GA4 DebugView events,
      Meta Events Manager Test Events.

## Step 16 — Limitations to document & hand back to the clinic

Include in the final delivery email:

1. **Square booking confirmation is not trackable.** Phase 1 uses
   `booking_started` as the primary conversion. To capture true
   `consultation_booking_completed`, Phase 2 requires either an embedded
   booking solution that supports pixel injection, or a Square webhook →
   server → GA4 Measurement Protocol pipeline.
2. **Automatic advanced matching disabled** on Meta Pixel — conservative
   privacy default. Match quality can be improved later by hashing first-party
   data server-side with explicit consent.
3. **No Conversions API** in Phase 1. Add Meta CAPI in Phase 2 for iOS 17 +
   tracking-prevention resilience.
4. **Newsletter signup** is tracked as an **outbound click** to Mailchimp; we
   do not yet receive Mailchimp confirmations. Connect Mailchimp → GA4 via
   integration if you want true subscription confirmations.
5. **Local geography targeting** in Meta relies on URL paths
   (`/locations/aesthetic-clinic-<town>`), not postcode targeting.
6. **GA4 24–48 h delay** for some reports (Key events, audiences) before they
   become usable.

---

## Quick reference — every dataLayer event the site emits

(Pulled from [src/components/AnalyticsProvider.jsx](../src/components/AnalyticsProvider.jsx)
and [src/lib/analytics.js](../src/lib/analytics.js).)

```
page_view
consultation_page_view
consultation_cta_click
booking_started
contact_form_submit
email_signup
phone_click
email_click
whatsapp_click
regenerative_treatment_view
facial_refinement_view
barrier_skin_stability_view
authority_content_engagement
deep_authority_engagement
scroll_depth
investment_view          // fires once you add data-track="investment_view" to the element
reviews_view             // fires once you add data-track="reviews_view"
faq_engagement           // fires once you add data-track="faq_engagement"
consent_update
```

Every event automatically receives:
`page_url, page_path, page_title, content_type, content_theme,
treatment_category, utm_source, utm_medium, utm_campaign, utm_content, utm_term`
where they exist.
