# GTM — Meta Pixel Tag Reference

Copy-paste reference for **every Meta Pixel tag** to create in the ULANDA GTM
container, per [PHASE-1-SETUP-GUIDE.md](PHASE-1-SETUP-GUIDE.md) step 7.

Build the **base tag first** (section 1), then the 15 per-event tags
(sections 2–16). Each block lists every field you need to fill in.

---

## Conventions used in every per-event tag

These four fields are identical on all 15 per-event tags (sections 2–16) —
set them once per tag:

```
Tag type:           Custom HTML
Consent settings:   Require additional consent → ad_storage
Tag firing options: Once per event
Triggering:         ce – <matching event name>
```

Replace `YOUR_PIXEL_ID` everywhere it appears with the 16-digit Pixel ID
copied from Meta Events Manager in [PHASE-1-SETUP-GUIDE.md](PHASE-1-SETUP-GUIDE.md)
step 4.4.

**Important — do NOT create a tag for the `page_view` dataLayer event.**
The base tag (section 1) already fires `PageView` once per page load. See
section 17 (FAQ) for what to do if you want per-route SPA `PageView` calls.

---

## 1. Meta Pixel Base

```
Tag name:           Meta Pixel Base
Tag type:           Custom HTML
Tag firing options: Once per page
Consent settings:   Require additional consent → ad_storage
Triggering:         Consent Initialization – All Pages   (built-in)
```

**HTML (paste into the tag's HTML field; replace `YOUR_PIXEL_ID`):**

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

---

## 2. Meta – consultation_page_view

```
Tag name:           Meta – consultation_page_view
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – consultation_page_view
```

**HTML:**

```html
<script>
  fbq('track','ViewContent',{
    content_category: 'consultation',
    content_name: {{dlv – page_title}}
  });
</script>
```

---

## 3. Meta – regenerative_treatment_view

```
Tag name:           Meta – regenerative_treatment_view
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – regenerative_treatment_view
```

**HTML:**

```html
<script>
  fbq('track','ViewContent',{
    content_category: 'regenerative',
    content_name: {{dlv – page_title}}
  });
</script>
```

---

## 4. Meta – facial_refinement_view

```
Tag name:           Meta – facial_refinement_view
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – facial_refinement_view
```

**HTML:**

```html
<script>
  fbq('track','ViewContent',{
    content_category: 'facial_refinement',
    content_name: {{dlv – page_title}}
  });
</script>
```

---

## 5. Meta – barrier_skin_stability_view

```
Tag name:           Meta – barrier_skin_stability_view
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – barrier_skin_stability_view
```

**HTML:**

```html
<script>
  fbq('track','ViewContent',{
    content_category: 'barrier_skin_stability',
    content_name: {{dlv – page_title}}
  });
</script>
```

---

## 6. Meta – booking_started

```
Tag name:           Meta – booking_started
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – booking_started
```

**HTML:**

```html
<script>
  fbq('track','Lead',{
    content_name: 'booking_started',
    content_category: {{dlv – content_theme}}
  });
</script>
```

---

## 7. Meta – contact_form_submit

```
Tag name:           Meta – contact_form_submit
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – contact_form_submit
```

**HTML:**

```html
<script>
  fbq('track','Lead',{
    content_name: 'contact_form',
    content_category: {{dlv – content_theme}}
  });
</script>
```

---

## 8. Meta – email_signup

```
Tag name:           Meta – email_signup
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – email_signup
```

**HTML:**

```html
<script>
  fbq('track','CompleteRegistration',{
    content_name: 'newsletter',
    content_category: {{dlv – signup_source}}
  });
</script>
```

---

## 9. Meta – phone_click

```
Tag name:           Meta – phone_click
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – phone_click
```

**HTML:**

```html
<script>
  fbq('track','Contact',{
    content_category: 'phone'
  });
</script>
```

---

## 10. Meta – whatsapp_click

```
Tag name:           Meta – whatsapp_click
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – whatsapp_click
```

**HTML:**

```html
<script>
  fbq('track','Contact',{
    content_category: 'whatsapp'
  });
</script>
```

---

## 11. Meta – consultation_cta_click

```
Tag name:           Meta – consultation_cta_click
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – consultation_cta_click
```

**HTML:**

```html
<script>
  fbq('trackCustom','ConsultationReadiness',{
    cta_text: {{dlv – cta_text}},
    content_theme: {{dlv – content_theme}}
  });
</script>
```

---

## 12. Meta – authority_content_engagement

```
Tag name:           Meta – authority_content_engagement
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – authority_content_engagement
```

**HTML:**

```html
<script>
  fbq('trackCustom','AuthorityEngagement',{
    content_theme: {{dlv – content_theme}}
  });
</script>
```

---

## 13. Meta – deep_authority_engagement

```
Tag name:           Meta – deep_authority_engagement
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – deep_authority_engagement
```

**HTML:**

```html
<script>
  fbq('trackCustom','DeepAuthorityEngagement',{
    content_theme: {{dlv – content_theme}}
  });
</script>
```

---

## 14. Meta – reviews_view

```
Tag name:           Meta – reviews_view
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – reviews_view
```

**HTML:**

```html
<script>
  fbq('trackCustom','ReviewEngagement');
</script>
```

Notes: Fires only once you add `data-track="reviews_view"` to the reviews
section in the markup.

---

## 15. Meta – faq_engagement

```
Tag name:           Meta – faq_engagement
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – faq_engagement
```

**HTML:**

```html
<script>
  fbq('trackCustom','FAQEngagement');
</script>
```

Notes: Fires only once you add `data-track="faq_engagement"` to FAQ
accordion items in the markup.

---

## 16. Meta – investment_view

```
Tag name:           Meta – investment_view
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – investment_view
```

**HTML:**

```html
<script>
  fbq('trackCustom','InvestmentView',{
    content_theme: {{dlv – content_theme}}
  });
</script>
```

Notes: Fires only once you add `data-track="investment_view"` to pricing
sections in the markup.

---

## (Future) Meta – consultation_booking_completed

Do NOT create this tag in Phase 1. It is only meaningful once Phase 2 ships
the Square booking-confirmation pipeline (see Step 16.1 of the setup guide).

When you do build it later:

```
Tag name:           Meta – consultation_booking_completed
Tag type:           Custom HTML
Tag firing options: Once per event
Consent settings:   Require additional consent → ad_storage
Triggering:         ce – consultation_booking_completed
```

**HTML:**

```html
<script>
  fbq('track','Schedule',{
    content_name: 'consultation',
    content_category: {{dlv – content_theme}}
  });
</script>
```

---

## 17. FAQ — what about `page_view`?

**Do not create a Meta tag for `page_view`.** The base tag in section 1
already fires `PageView` once per page load, which is what Meta Pixel Helper
and Events Manager expect.

The site fires its own `page_view` event on every React Router route change
(SPA navigation). The GA4 side handles those — the Meta side intentionally
ignores them, because firing `fbq('track','PageView')` on every SPA route
would inflate PageView counts in Meta's reporting.

If you later decide you *do* want per-route SPA PageView calls in Meta:

1. Edit the base tag (section 1) and **remove** the `fbq('track','PageView')`
   line so it only initialises the pixel.
2. Create a new Custom HTML tag named `Meta – page_view` with
   `<script>fbq('track','PageView');</script>`, fire-once-per-event, consent
   `ad_storage`, triggered by `ce – page_view`.

That swap makes route-change PageViews the source of truth, instead of the
single load-time PageView.

---

## Per-event call summary (at a glance)

| Tag # | Tag name                              | fbq call               | Standard event / custom |
| ----- | ------------------------------------- | ---------------------- | ----------------------- |
| 1     | Meta Pixel Base                       | `PageView`             | Standard                |
| 2     | Meta – consultation_page_view         | `ViewContent`          | Standard                |
| 3     | Meta – regenerative_treatment_view    | `ViewContent`          | Standard                |
| 4     | Meta – facial_refinement_view         | `ViewContent`          | Standard                |
| 5     | Meta – barrier_skin_stability_view    | `ViewContent`          | Standard                |
| 6     | Meta – booking_started                | `Lead`                 | Standard                |
| 7     | Meta – contact_form_submit            | `Lead`                 | Standard                |
| 8     | Meta – email_signup                   | `CompleteRegistration` | Standard                |
| 9     | Meta – phone_click                    | `Contact`              | Standard                |
| 10    | Meta – whatsapp_click                 | `Contact`              | Standard                |
| 11    | Meta – consultation_cta_click         | `ConsultationReadiness`| Custom (trackCustom)    |
| 12    | Meta – authority_content_engagement   | `AuthorityEngagement`  | Custom (trackCustom)    |
| 13    | Meta – deep_authority_engagement      | `DeepAuthorityEngagement` | Custom (trackCustom) |
| 14    | Meta – reviews_view                   | `ReviewEngagement`     | Custom (trackCustom)    |
| 15    | Meta – faq_engagement                 | `FAQEngagement`        | Custom (trackCustom)    |
| 16    | Meta – investment_view                | `InvestmentView`       | Custom (trackCustom)    |
| —     | Meta – consultation_booking_completed | `Schedule`             | Phase 2 only            |

---

## Fast-build workflow in GTM

1. Build **Meta Pixel Base** (section 1) and verify it appears in Meta Pixel
   Helper after accepting consent on the site.
2. Build **Meta – consultation_page_view** in full as the per-event template.
3. In the tag list, right-click it → **Copy**. Rename the copy, swap the
   `<script>` body for the next event's `fbq(...)` call, change the
   **Trigger** to the matching `ce – <event>`, save.
4. Repeat for each of the remaining 13 events.
5. Verify each fires in **Meta Events Manager → Test Events** per step 14 of
   [PHASE-1-SETUP-GUIDE.md](PHASE-1-SETUP-GUIDE.md).
