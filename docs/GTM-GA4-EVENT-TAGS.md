# GTM — GA4 Event Tag Reference

Copy-paste reference for **every GA4 Event tag** to create in the ULANDA GTM
container, per [PHASE-1-SETUP-GUIDE.md](PHASE-1-SETUP-GUIDE.md) step 6.2.

Build these in order. Each block lists every field you need to fill in. Where a
parameter row is marked **(extra)**, it is specific to that event and must be
added in addition to the standard nine rows.

---

## Conventions used in every tag

These three fields are identical on all 19 tags below — set them once per tag:

```
Tag type:           Google Analytics: GA4 Event
Configuration tag:  GA4 Configuration            (the one created in step 6.1)
Consent settings:   Require additional consent → analytics_storage
```

The **standard event-parameter block** appears on every tag:

```
page_location       = {{dlv – page_url}}
page_path           = {{dlv – page_path}}
page_title          = {{dlv – page_title}}
content_type        = {{dlv – content_type}}
content_theme       = {{dlv – content_theme}}
treatment_category  = {{dlv – treatment_category}}
cta_text            = {{dlv – cta_text}}
location_page       = {{dlv – location_page}}
consultation_stage  = {{dlv – consultation_stage}}
```

Empty values are auto-omitted by GA4, so it is safe to include all nine on
every tag.

---

## 1. GA4 – page_view

```
Tag name:           GA4 – page_view
Event name:         page_view

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – page_view
```

---

## 2. GA4 – consultation_page_view

```
Tag name:           GA4 – consultation_page_view
Event name:         consultation_page_view

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – consultation_page_view
```

---

## 3. GA4 – consultation_cta_click

```
Tag name:           GA4 – consultation_cta_click
Event name:         consultation_cta_click

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}
  cta_type            = {{dlv – cta_type}}        ← (extra) consultation_cta_click-specific
  cta_href            = {{dlv – cta_href}}        ← (extra) consultation_cta_click-specific

Triggering:         ce – consultation_cta_click
```

---

## 4. GA4 – booking_started

```
Tag name:           GA4 – booking_started
Event name:         booking_started

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}
  booking_destination = {{dlv – booking_destination}}   ← (extra) booking_started-specific

Triggering:         ce – booking_started
```

---

## 5. GA4 – contact_form_submit

```
Tag name:           GA4 – contact_form_submit
Event name:         contact_form_submit

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – contact_form_submit
```

---

## 6. GA4 – phone_click

```
Tag name:           GA4 – phone_click
Event name:         phone_click

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – phone_click
```

---

## 7. GA4 – email_click

```
Tag name:           GA4 – email_click
Event name:         email_click

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – email_click
```

---

## 8. GA4 – whatsapp_click

```
Tag name:           GA4 – whatsapp_click
Event name:         whatsapp_click

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – whatsapp_click
```

---

## 9. GA4 – email_signup

```
Tag name:           GA4 – email_signup
Event name:         email_signup

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}
  signup_source       = {{dlv – signup_source}}   ← (extra) email_signup-specific

Triggering:         ce – email_signup
```

---

## 10. GA4 – regenerative_treatment_view

```
Tag name:           GA4 – regenerative_treatment_view
Event name:         regenerative_treatment_view

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – regenerative_treatment_view
```

---

## 11. GA4 – facial_refinement_view

```
Tag name:           GA4 – facial_refinement_view
Event name:         facial_refinement_view

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – facial_refinement_view
```

---

## 12. GA4 – barrier_skin_stability_view

```
Tag name:           GA4 – barrier_skin_stability_view
Event name:         barrier_skin_stability_view

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – barrier_skin_stability_view
```

---

## 13. GA4 – authority_content_engagement

```
Tag name:           GA4 – authority_content_engagement
Event name:         authority_content_engagement

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}
  engagement_trigger  = {{dlv – engagement_trigger}}   ← (extra) authority_content_engagement-specific

Triggering:         ce – authority_content_engagement
```

---

## 14. GA4 – deep_authority_engagement

```
Tag name:           GA4 – deep_authority_engagement
Event name:         deep_authority_engagement

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}
  engagement_trigger  = {{dlv – engagement_trigger}}   ← (extra) deep_authority_engagement-specific

Triggering:         ce – deep_authority_engagement
```

---

## 15. GA4 – scroll_depth

```
Tag name:           GA4 – scroll_depth
Event name:         scroll_depth

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}
  percent             = {{dlv – percent}}        ← (extra) scroll_depth-specific

Triggering:         ce – scroll_depth
```

---

## 16. GA4 – investment_view

```
Tag name:           GA4 – investment_view
Event name:         investment_view

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – investment_view

Notes: Fires only once you add data-track="investment_view" to pricing
sections in the markup. Safe to create the tag now — it simply won’t fire
until the markup is tagged.
```

---

## 17. GA4 – reviews_view

```
Tag name:           GA4 – reviews_view
Event name:         reviews_view

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – reviews_view

Notes: Fires only once you add data-track="reviews_view" to the reviews
section in the markup.
```

---

## 18. GA4 – faq_engagement

```
Tag name:           GA4 – faq_engagement
Event name:         faq_engagement

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}

Triggering:         ce – faq_engagement

Notes: Fires only once you add data-track="faq_engagement" to FAQ accordion
items in the markup.
```

---

## 19. GA4 – consent_update

```
Tag name:           GA4 – consent_update
Event name:         consent_update

Event parameters:
  page_location       = {{dlv – page_url}}
  page_path           = {{dlv – page_path}}
  page_title          = {{dlv – page_title}}
  content_type        = {{dlv – content_type}}
  content_theme       = {{dlv – content_theme}}
  treatment_category  = {{dlv – treatment_category}}
  cta_text            = {{dlv – cta_text}}
  location_page       = {{dlv – location_page}}
  consultation_stage  = {{dlv – consultation_stage}}
  analytics_consent   = {{dlv – analytics_consent}}    ← (extra) consent_update-specific
  marketing_consent   = {{dlv – marketing_consent}}    ← (extra) consent_update-specific

Triggering:         ce – consent_update

Notes: This tag is optional. It lets you see in GA4 how many users grant /
deny each consent type. If you don't want this signal, skip the tag — the
GA4 Consent Mode state is already updated by the gtag('consent','update')
call the site makes before this dataLayer event.
```

---

## Per-event extras at a glance

| Event                            | Extra parameter(s)                                          |
| -------------------------------- | ----------------------------------------------------------- |
| `consultation_cta_click`         | `cta_type`, `cta_href`                                      |
| `booking_started`                | `booking_destination`                                       |
| `email_signup`                   | `signup_source`                                             |
| `authority_content_engagement`   | `engagement_trigger`                                        |
| `deep_authority_engagement`      | `engagement_trigger`                                        |
| `scroll_depth`                   | `percent`                                                   |
| `consent_update`                 | `analytics_consent`, `marketing_consent`                    |

All other events use only the standard nine parameters.

---

## Fast-build workflow in GTM

1. Build **GA4 – page_view** in full (the simplest standard tag).
2. In the tag list, right-click it → **Copy**. Rename the copy, change the
   **Event name** field, swap the **Trigger** to the matching `ce – <event>`,
   add any (extra) rows from the table above, save.
3. Repeat for each of the remaining 18 events.
4. After all 19 are built, click **Preview** and walk through step 11 of
   [PHASE-1-SETUP-GUIDE.md](PHASE-1-SETUP-GUIDE.md) to verify each one fires.
