/**
 * DRAFT: Treatment Menu Restructure
 * This file restructures treatments from "Refresh, Renew, Restore, Radiate" 
 * to 6 functional categories + 1 gated category (Pelvic & Intimate).
 * 
 * NOTE: This references existing treatments from the original treatments.js
 * No new treatments or conditions are created - this is purely restructuring.
 * 
 * IMPORTANT: Post-Procedure Recovery Facial is REMOVED completely.
 * 
 * New Categories:
 * 1. Skin Health & Facial Therapies (skin-health-facial-therapies)
 * 2. Skin Renewal & Regeneration (skin-renewal-regeneration)
 * 3. Injectable Skin Optimisation (injectable-skin-optimisation)
 * 4. Structural & Collagen Support (structural-collagen-support)
 * 5. Body Regeneration & Tissue Support (body-regeneration-tissue-support)
 * 6. Wellness & Regenerative Recovery (wellness-regenerative-recovery)
 * 7. Pelvic & Intimate Regeneration (pelvic-intimate-regeneration) - GATED
 */

import { treatments as originalTreatments } from '../treatments.js';

// Helper function to get treatment from original structure
const getOriginalTreatment = (categoryId, subCategoryId, treatmentId) => {
  return originalTreatments[categoryId]?.subCategories?.[subCategoryId]?.treatments?.[treatmentId] || null;
};

// ═══════════════════════════════════════════════════════════════
// CATEGORY 1: Skin Health & Facial Therapies
// ═══════════════════════════════════════════════════════════════
// Medical-grade facial and skin optimisation treatments designed to 
// support barrier health, circulation, hydration and skin function.
// Often searched as: advanced facial, skin clinic Ware, skin care clinic near me
// 
// Conditions linked:
// - Dull skin (dull-dehydrated-skin)
// - Dehydration (dull-dehydrated-skin)
// - Sensitivity (dryness-sensitivity)
// - Treatment fatigue (non-responsive-skin) - NEW CONDITION
// ═══════════════════════════════════════════════════════════════

const skinHealthFacialTherapies = {
  id: "skin-health-facial-therapies",
  title: "Skin Health & Facial Therapies",
  subtitle: "Medical-grade facial and skin optimisation treatments designed to support barrier health, circulation, hydration and skin function.",
  description: "Often searched as advanced facial, skin clinic Ware or skin care clinic near me.",
  image: "/assets/img/treatments/renew/skin-clinic-ware-Facials-Refresh.webp",
  placeholderUrl: "/assets/img/treatments/renew/skin-clinic-ware-Facials-Refresh.webp",
  hidden: false,
  linkedConditions: [
    { id: "dull-dehydrated-skin", title: "Dull skin", url: "/conditions/pigmentation-and-skin-tone/dull-dehydrated-skin" },
    { id: "dull-dehydrated-skin", title: "Dehydration", url: "/conditions/pigmentation-and-skin-tone/dull-dehydrated-skin" },
    { id: "dryness-sensitivity", title: "Sensitivity", url: "/conditions/dryness-sensitivity" },
    { id: "non-responsive-skin", title: "Non-Responsive Skin & Treatment Fatigue", url: "/conditions/non-responsive-skin" }
  ],
  treatments: {
    // HydraFacial
    "hydrafacial": getOriginalTreatment("refresh", "signature-facials", "hydrafacial"),
    // Enzyme Facial (also known as Advanced Rejuvenating Facial / Vital Glow)
    "enzyme-therapy": getOriginalTreatment("refresh", "signature-facials", "enzyme-therapy"),
    // Oxygen Facial
    "oxygen-vitamin-infusion-facial": getOriginalTreatment("refresh", "signature-facials", "oxygen-vitamin-infusion-facial"),
    // Dermaplaning
    "dermaplaning": getOriginalTreatment("refresh", "signature-facials", "dermaplaning"),
    // LED Light Therapy
    "led-light-therapy": getOriginalTreatment("refresh", "light-based", "led-light-therapy"),
    // Lymphatic Drainage Facial
    "lymphatic-drainage-facial": getOriginalTreatment("refresh", "signature-facials", "lymphatic-drainage-facial"),
    // Barrier Repair Facial
    "barrier-repair-facial": getOriginalTreatment("restore", "skin-barrier-repair", "barrier-repair-facial"),
  }
};

// ═══════════════════════════════════════════════════════════════
// CATEGORY 2: Skin Renewal & Regeneration
// ═══════════════════════════════════════════════════════════════
// Treatments focused on collagen stimulation, texture refinement, 
// pigmentation management and acne scarring. Only introduced when 
// the skin is biologically ready to respond.
// Often searched as: microneedling Ware, acne scar treatment, skin rejuvenation treatment
//
// Conditions linked:
// - Pigmentation (hyperpigmentation)
// - Melasma (melasma)
// - Acne scarring (acne-scarring) - NEW CONDITION
// - Texture decline (age-and-regeneration)
// - Under-eye ageing (eye-area)
// ═══════════════════════════════════════════════════════════════

const skinRenewalRegeneration = {
  id: "skin-renewal-regeneration",
  title: "Skin Renewal & Regeneration",
  subtitle: "Treatments focused on collagen stimulation, texture refinement, pigmentation management and acne scarring.",
  description: "Treatments only introduced when the skin is biologically ready to respond. Often searched as microneedling Ware, acne scar treatment or skin rejuvenation treatment.",
  image: "https://images.unsplash.com/photo-1670201202784-ec638a82bca8?q=80&w=698&auto=format&fit=crop",
  placeholderUrl: "https://images.unsplash.com/photo-1670201202784-ec638a82bca8?q=80&w=698&auto=format&fit=crop",
  hidden: false,
  linkedConditions: [
    { id: "hyperpigmentation", title: "Pigmentation", url: "/conditions/pigmentation-and-skin-tone/hyperpigmentation" },
    { id: "melasma", title: "Melasma", url: "/conditions/pigmentation-and-skin-tone/melasma" },
    { id: "acne-scarring", title: "Acne Scarring", url: "/conditions/acne-scarring" },
    { id: "age-and-regeneration", title: "Texture decline", url: "/conditions/age-and-regeneration" },
    { id: "eye-area", title: "Under-eye ageing", url: "/conditions/eye-area" }
  ],
  treatments: {
    // Chemical Peels
    "chemical-peel": getOriginalTreatment("refresh", "skin-resurfacing", "chemical-peel"),
    // BioRePeel
    "biorepeel": getOriginalTreatment("refresh", "skin-resurfacing", "biorepeel"),
    // Microneedling
    "microneedling": getOriginalTreatment("renew", "microneedling", "microneedling"),
    // PRP (Skin)
    "prp-skin-regeneration": getOriginalTreatment("renew", "injectables", "prp-skin-regeneration"),
    // Polynucleotides
    "polynucleotides": getOriginalTreatment("renew", "injectables", "polynucleotides"),
    // Under-Eye Regeneration Treatments
    "under-eye-regeneration": getOriginalTreatment("radiate", "programmes", "under-eye-regeneration"),
  }
};

// ═══════════════════════════════════════════════════════════════
// CATEGORY 3: Injectable Skin Optimisation
// ═══════════════════════════════════════════════════════════════
// Clinician-led injectable treatments used conservatively to improve 
// skin quality, hydration, elasticity, non-volumising and regenerative capacity.
// Often searched as: Profhilo Ware, skin boosters near me, medical aesthetics Hertfordshire
//
// Conditions linked:
// - Dehydrated skin
// - Crepey skin
// - Menopause skin thinning
// - Loss of elasticity
// - Under-eye crepiness
// - Fine lines
// ═══════════════════════════════════════════════════════════════

const injectableSkinOptimisation = {
  id: "injectable-skin-optimisation",
  title: "Injectable Skin Optimisation",
  subtitle: "Clinician-led injectable treatments used conservatively to improve skin quality, hydration, elasticity, non-volumising and regenerative capacity.",
  description: "Often searched as Profhilo Ware, skin boosters near me or medical aesthetics Hertfordshire.",
  image: "/assets/img/treatments/renew/Renew.webp",
  placeholderUrl: "/assets/img/treatments/renew/Renew.webp",
  hidden: false,
  linkedConditions: [
    { id: "dull-dehydrated-skin", title: "Dehydrated skin", url: "/conditions/pigmentation-and-skin-tone/dull-dehydrated-skin" },
    { id: "crepey-skin-general", title: "Crepey skin", url: "/conditions/crepey-skin" },
    { id: "menopause-skin-decline", title: "Menopause skin thinning", url: "/conditions/menopause-skin" },
    { id: "loss-of-elasticity", title: "Loss of elasticity", url: "/conditions/loss-of-elasticity" },
    { id: "crepey-under-eye", title: "Under-eye crepiness", url: "/conditions/eye-area" },
    { id: "fine-lines", title: "Fine lines", url: "/conditions/fine-lines" }
  ],
  treatments: {
    // Skin Boosters (category title)
    // Profhilo
    "profhilo": getOriginalTreatment("renew", "skin-boosters", "profhilo"),
    // Jalupro
    "jalupro": getOriginalTreatment("renew", "skin-boosters", "jalupro"),
    // Seventy Hyal
    "seventy-hyal": getOriginalTreatment("renew", "skin-boosters", "seventy-hyal"),
    // Definisse Hydrobooster
    "definisse-hydrobooster": getOriginalTreatment("renew", "skin-boosters", "definisse-hydrobooster"),
    // Lemon Bottle
    "lemon-bottle": getOriginalTreatment("renew", "skin-boosters", "lemon-bottle"),
    // Lumi Eyes (under-eyes)
    "lumi-eyes": getOriginalTreatment("renew", "skin-boosters", "lumi-eyes"),
  }
};

// ═══════════════════════════════════════════════════════════════
// CATEGORY 4: Structural & Collagen Support
// ═══════════════════════════════════════════════════════════════
// Nurse-Led clinical treatments addressing facial structure, jawline 
// definition and tissue support using regenerative and anatomy-respecting techniques.
// Often searched as: non-surgical facelift, jawline sculpting Ware, thread lift near me
//
// Conditions linked:
// - Jowls
// - Jawline softening
// - Facial laxity
// - Collagen loss
// ═══════════════════════════════════════════════════════════════

const structuralCollagenSupport = {
  id: "structural-collagen-support",
  title: "Structural & Collagen Support",
  subtitle: "Nurse-Led clinical treatments addressing facial structure, jawline definition and tissue support using regenerative and anatomy-respecting techniques.",
  description: "Often searched as non-surgical facelift, jawline sculpting Ware or thread lift near me.",
  image: "https://plus.unsplash.com/premium_photo-1682096537666-3621cc51c4b8?w=500&auto=format&fit=crop",
  placeholderUrl: "https://plus.unsplash.com/premium_photo-1682096537666-3621cc51c4b8?w=500&auto=format&fit=crop",
  hidden: false,
  linkedConditions: [
    { id: "jowls", title: "Jowls", url: "/conditions/jowls" },
    { id: "jawline-softening", title: "Jawline softening", url: "/conditions/jawline-softening" },
    { id: "facial-laxity", title: "Facial laxity", url: "/conditions/facial-laxity" },
    { id: "collagen-loss", title: "Collagen loss", url: "/conditions/age-and-regeneration" }
  ],
  treatments: {
    // Anti-Wrinkle Injections (Subtle / Natural)
    "anti-wrinkle": getOriginalTreatment("radiate", "structural-lifting", "anti-wrinkle"),
    // Dermal Fillers (Conservative / Structural)
    "dermal-fillers": getOriginalTreatment("radiate", "structural-lifting", "dermal-fillers"),
    // Biostimulators (Collagen Therapy)
    "biostimulators": getOriginalTreatment("radiate", "structural-lifting", "biostimulators"),
    // PDO Thread Lifts
    "thread-lifts": getOriginalTreatment("radiate", "structural-lifting", "thread-lifts"),
    // Jawline Sculpting
    "jawline-sculpting": getOriginalTreatment("radiate", "structural-lifting", "jawline-sculpting"),
    // Neck & Lower Face Support
    "neck-lower-face-lift": getOriginalTreatment("radiate", "structural-lifting", "neck-lower-face-lift"),
  }
};

// ═══════════════════════════════════════════════════════════════
// CATEGORY 5: Body Regeneration & Tissue Support
// ═══════════════════════════════════════════════════════════════
// Nurse-Led non-surgical treatments supporting skin firmness, 
// connective tissue quality and post-pregnancy or post-weight-loss changes.
// Often searched as: body skin tightening Ware
//
// Includes:
// - Body Skin Tightening
// - Shape & Regenerate Treatments
// - Stretch Mark Support
// - Post-Weight Loss / Postpartum Tissue Support
// ═══════════════════════════════════════════════════════════════

const bodyRegenerationTissueSupport = {
  id: "body-regeneration-tissue-support",
  title: "Body Regeneration & Tissue Support",
  subtitle: "Nurse-Led non-surgical treatments delivered from our skin clinic in Ware SG12 supporting skin firmness, connective tissue quality and post-pregnancy or post-weight-loss changes.",
  description: "Often searched as body skin tightening Ware.",
  image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format&fit=crop",
  placeholderUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format&fit=crop",
  hidden: false,
  linkedConditions: [
    { id: "body-skin-laxity", title: "Body skin laxity", url: "/conditions/body-skin-laxity" },
    { id: "stretch-marks", title: "Stretch marks", url: "/conditions/stretch-marks" },
    { id: "postpartum-skin", title: "Postpartum skin changes", url: "/conditions/postpartum-skin" }
  ],
  treatments: {
    // Body Skin Tightening
    "body-tightening": getOriginalTreatment("radiate", "structural-lifting", "body-tightening"),
    // Shape & Regenerate Treatments
    "shape-and-regenerate": getOriginalTreatment("radiate", "programmes", "shape-and-regenerate"),
    // Body Contouring
    "body-contouring": getOriginalTreatment("radiate", "structural-lifting", "body-contouring"),
    // Stretch Mark Support (uses microneedling for textural regeneration)
    "stretch-mark-support": getOriginalTreatment("renew", "microneedling", "microneedling"),
  }
};

// ═══════════════════════════════════════════════════════════════
// CATEGORY 6: Wellness & Regenerative Recovery
// ═══════════════════════════════════════════════════════════════
// Advanced Nurse Practitioner delivered and medically supported 
// internal therapies used to enhance recovery, resilience and regenerative readiness.
// Delivered in collaboration with 360 Medicx - CQC-registered Harley Street medical clinic.
// Often searched as: IV drip Ware, NAD+ IV Hertfordshire
//
// Includes:
// - Wellness & IV Therapy
// - NAD+ IV / IM
// - Glutathione IV / IM
// - Energy IV
// - Immunity IV
// - Women's Longevity Support
// ═══════════════════════════════════════════════════════════════

const wellnessRegenerativeRecovery = {
  id: "wellness-regenerative-recovery",
  title: "Wellness & Regenerative Recovery",
  subtitle: "Advanced Nurse Practitioner delivered and medically supported internal therapies used to enhance recovery, resilience and regenerative readiness.",
  description: "Delivered in collaboration with 360 Medicx, a CQC-registered Harley Street medical clinic. Often searched as IV drip Ware or NAD+ IV Hertfordshire.",
  collaborationPartner: {
    name: "360 Medicx",
    url: "https://360medicx.co.uk/",
    description: "CQC-registered Harley Street medical clinic"
  },
  image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500&auto=format&fit=crop",
  placeholderUrl: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500&auto=format&fit=crop",
  hidden: false,
  linkedConditions: [
    { id: "fatigue-low-energy", title: "Fatigue & low energy", url: "/conditions/fatigue-low-energy" },
    { id: "low-immunity", title: "Low immunity", url: "/conditions/low-immunity" }
  ],
  treatments: {
    // NAD+ IV / IM
    "nad-iv": getOriginalTreatment("radiate", "wellness", "nad-iv"),
    // Glutathione IV / IM
    "glutathione-iv": getOriginalTreatment("radiate", "wellness", "glutathione-iv"),
    "glutathione-im": getOriginalTreatment("radiate", "wellness", "glutathione-im"),
    // Energy IV
    "energy-iv": getOriginalTreatment("radiate", "wellness", "energy-iv"),
    // Immunity IV
    "immunity-iv": getOriginalTreatment("radiate", "wellness", "immunity-iv"),
    // Women's Longevity Support
    "womens-longevity-iv": getOriginalTreatment("radiate", "wellness", "womens-longevity-iv"),
    // Skin Glow IV
    "skin-glow-iv": getOriginalTreatment("radiate", "wellness", "skin-glow-iv"),
    // Vitamin B12 IM
    "vitamin-b12-im": getOriginalTreatment("radiate", "wellness", "vitamin-b12-im"),
    // Vitamin D IM
    "vitamin-d-im": getOriginalTreatment("radiate", "wellness", "vitamin-d-im"),
  }
};

// ═══════════════════════════════════════════════════════════════
// CATEGORY 7: Pelvic & Intimate Regeneration (GATED)
// ═══════════════════════════════════════════════════════════════
// Specialised regenerative treatments for pelvic and intimate health.
// NOT visible in main Treatment Menu Hub.
// NOT in GBP Services.
// NOT in primary navigation.
//
// Linked contextually from:
// - Hormonal skin pages
// - Postpartum recovery pages
// ═══════════════════════════════════════════════════════════════

const pelvicIntimateRegeneration = {
  id: "pelvic-intimate-regeneration",
  title: "Pelvic & Intimate Regeneration",
  subtitle: "A Radiate Pathway for Tissue Integrity, Comfort & Functional Confidence",
  description: "Clinician-led pelvic and intimate regeneration supporting tissue health, comfort and recovery across life stages.",
  image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format&fit=crop",
  placeholderUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format&fit=crop",
  hidden: true, // GATED - Not visible in main Treatment Menu Hub
  gated: true,
  seo: {
    title: "Pelvic & Intimate Regeneration in Ware SG12 | Radiate Pathway | ULANDA",
    description: "Clinician-led pelvic and intimate regeneration in Ware, Hertfordshire. A consultation-first Radiate pathway supporting tissue health, comfort and recovery across life stages."
  },
  linkedConditions: [
    { id: "hormonal-skin", title: "Hormonal skin changes", url: "/conditions/hormonal-skin" },
    { id: "postpartum-skin", title: "Postpartum skin changes", url: "/conditions/postpartum-skin" }
  ],
  contextualLinks: [
    { title: "Hormonal skin pages", description: "Linked from hormonal skin content" },
    { title: "Postpartum recovery pages", description: "Linked from postpartum content" }
  ],
  introduction: {
    title: "Pelvic & Intimate Regeneration",
    content: [
      "Pelvic and intimate tissue changes are a biological reality across a woman's life course — particularly following childbirth, during perimenopause, and through menopause.",
      "These changes are rarely cosmetic in nature.",
      "They are functional, structural and deeply embodied.",
      "The Pelvic & Intimate Regeneration pathway exists to support tissue quality, resilience and comfort in areas where biology, identity and recovery capacity intersect — using regenerative principles, clinical restraint and life-stage awareness.",
      "This pathway is not about enhancement or correction.",
      "It is about restoring tissue conditions that allow women to feel at ease in their bodies again."
    ]
  },
  whatThisPathwayAddresses: {
    title: "What This Pathway Addresses",
    description: "This Radiate pathway may be appropriate for women experiencing:",
    items: [
      "Tissue laxity following childbirth",
      "Changes in tissue quality associated with hormonal transition",
      "Pelvic or intimate discomfort linked to tissue integrity",
      "Reduced tissue resilience, hydration or elasticity",
      "A sense that the body \"does not feel the same\" despite time and recovery"
    ],
    note: "Importantly, this pathway recognises that many intimate concerns are not visible, and often go unspoken — yet have a meaningful impact on comfort, confidence and wellbeing."
  },
  whyRadiatePathway: {
    title: "What Makes This a Radiate Pathway (Not a Treatment)",
    description: "Pelvic & Intimate Regeneration sits firmly within Radiate because it:",
    items: [
      "Requires high anatomical and biological judgement",
      "Involves micro-architecture and tissue behaviour, not surface aesthetics",
      "Is strongly influenced by hormonal context",
      "Demands sequencing, restraint and proportionality",
      "Must never be approached as a standalone or cosmetic service"
    ],
    note: "Care within this pathway is planned, reviewed and adapted — not booked from a menu."
  },
  hormonalContext: {
    title: "Hormonal Context & Life-Stage Awareness",
    content: [
      "Pelvic and intimate tissues are highly hormone-responsive.",
      "Changes in oestrogen, progesterone and androgen balance influence:"
    ],
    factors: [
      "Tissue hydration",
      "Collagen integrity",
      "Elasticity",
      "Vascularity",
      "Recovery capacity"
    ],
    note: "For this reason, Pelvic & Intimate Regeneration is closely aligned with ULANDA's Hormones & Regeneration framework. Hormonal status is understood as biological context, not a standalone intervention — ensuring care remains safe, ethical and appropriate within the UK clinical landscape.",
    relatedPages: [
      { title: "Hormones & Regeneration", url: "/pathways/hormones-regeneration" },
      { title: "Hormone-Smart Skin Programme", url: "/treatments/radiate/programmes/hormone-smart-skin" }
    ]
  },
  howCareIsApproached: {
    title: "How Care Is Approached",
    description: "Care within this pathway follows the Radiate Method™, meaning:",
    items: [
      "Tissue readiness is assessed before intervention",
      "Inflammation, sensitivity and recovery capacity are respected",
      "Intervention intensity is conservative and progressive",
      "Outcomes are reviewed over time, not assumed"
    ],
    note: "The aim is not to \"do more\", but to support tissue conditions that allow the body to respond naturally and sustainably."
  },
  modalities: {
    title: "Modalities This Pathway May Draw From",
    subtitle: "(Not Exhaustive)",
    description: "Depending on assessment and readiness, this pathway may draw from:",
    items: [
      "Regenerative energy-based support",
      "Tissue stimulation techniques appropriate to intimate anatomy",
      "Supportive regenerative adjuncts",
      "Recovery-focused protocols",
      "Integration with wider Radiate or Restore pathways where required"
    ],
    note: "Specific modalities are never pre-selected and are discussed only within a consultation context."
  },
  outcomes: {
    title: "What You Leave With",
    description: "Women progressing through this pathway typically leave with:",
    items: [
      "Improved tissue comfort and resilience",
      "A clearer understanding of bodily changes",
      "Reduced self-consciousness or uncertainty",
      "Confidence that care has been proportionate and safe",
      "A sense of being supported, not sold to"
    ],
    note: "Outcomes are functional, embodied and personal — not cosmetic promises."
  },
  guardrails: {
    title: "Guardrails & Safety",
    description: "This pathway is not appropriate where:",
    items: [
      "Concerns are purely aesthetic or enhancement-driven",
      "A quick-fix or one-off intervention is expected",
      "Clinical readiness has not been established",
      "Alternative medical care is more appropriate"
    ],
    note: "ULANDA prioritises long-term tissue health over short-term intervention."
  },
  access: {
    title: "How This Pathway Is Accessed",
    description: "Pelvic & Intimate Regeneration is accessed only via the Radiate Consultation.",
    ensures: [
      "Proper assessment",
      "Clear expectation setting",
      "Ethical decision-making",
      "Protection of outcomes and patient trust"
    ],
    relatedPage: {
      title: "The Radiate Consultation (Vitality, Longevity & Regenerative Assessment)",
      url: "/book-consultation"
    }
  },
  relatedPathways: {
    title: "Relationship to Other Radiate Pathways",
    description: "This pathway may sit alongside or intersect with:",
    items: [
      { title: "Hormone-Smart Skin Programme", url: "/treatments/radiate/programmes/hormone-smart-skin" },
      { title: "Structural Lift & Facial Architecture", url: "/treatments/structural-collagen-support" },
      { title: "Shape & Regenerate", url: "/treatments/body-regeneration-tissue-support/shape-and-regenerate" },
      { title: "Collagen Reset", url: "/treatments/structural-collagen-support/biostimulators" }
    ],
    note: "All intersections are clinician-guided, never bundled commercially."
  },
  cta: {
    title: "When Comfort, Identity and Biology Intersect",
    description: "Care in intimate areas deserves time, expertise and restraint. If you are seeking clarity rather than correction, a Radiate consultation offers space to explore whether regenerative support is appropriate for you.",
    buttonText: "Request a Radiate Consultation"
  },
  faq: [
    {
      question: "Is this the same as vaginal rejuvenation?",
      answer: "No. This pathway focuses on tissue health, comfort and regeneration — not cosmetic enhancement."
    },
    {
      question: "Is hormonal treatment included?",
      answer: "Hormonal status is assessed as biological context. Where appropriate, referral or collaboration with hormone specialists may be advised."
    },
    {
      question: "Is this suitable postpartum or during menopause?",
      answer: "Yes — when assessed and approached appropriately within a life-stage context."
    },
    {
      question: "Is treatment always required?",
      answer: "Not necessarily. Some consultations result in reassurance, monitoring or alternative guidance."
    }
  ],
  treatments: {
    // Pelvic regeneration treatments are accessed via consultation only
    // No direct booking - pathway-based care
  }
};

// ═══════════════════════════════════════════════════════════════
// EXPORT: Treatment Categories
// ═══════════════════════════════════════════════════════════════

export const treatmentCategories = {
  "skin-health-facial-therapies": skinHealthFacialTherapies,
  "skin-renewal-regeneration": skinRenewalRegeneration,
  "injectable-skin-optimisation": injectableSkinOptimisation,
  "structural-collagen-support": structuralCollagenSupport,
  "body-regeneration-tissue-support": bodyRegenerationTissueSupport,
  "wellness-regenerative-recovery": wellnessRegenerativeRecovery,
  "pelvic-intimate-regeneration": pelvicIntimateRegeneration,
};

// ═══════════════════════════════════════════════════════════════
// SEO Metadata for Category Landing Pages
// ═══════════════════════════════════════════════════════════════

export const categorySEO = {
  "skin-health-facial-therapies": {
    title: "Skin Health & Facial Therapies in Ware SG12 | ULANDA",
    description: "Medical-grade facial treatments at ULANDA in Ware SG12. HydraFacial, dermaplaning, LED therapy and barrier repair. Professional skin optimisation for healthy, radiant skin."
  },
  "skin-renewal-regeneration": {
    title: "Skin Renewal & Regeneration Treatments in Ware SG12 | ULANDA",
    description: "Skin resurfacing and renewal treatments at ULANDA in Ware SG12. Chemical peels, BioRePeel, microneedling and PRP for texture improvement, pigmentation and scarring."
  },
  "injectable-skin-optimisation": {
    title: "Injectable Skin Optimisation in Ware SG12 | ULANDA",
    description: "Advanced injectable treatments at ULANDA in Ware SG12. Profhilo, Jalupro, skin boosters and Lumi Eyes for hydration, elasticity and skin quality."
  },
  "structural-collagen-support": {
    title: "Structural & Collagen Support in Ware SG12 | ULANDA",
    description: "Structural lifting treatments at ULANDA in Ware SG12. Anti-wrinkle, dermal fillers, biostimulators and thread lifts for natural contouring and definition."
  },
  "body-regeneration-tissue-support": {
    title: "Body Regeneration & Tissue Support in Ware SG12 | ULANDA",
    description: "Body regeneration treatments at ULANDA in Ware SG12. Skin tightening, shape & regenerate and tissue support for midlife body changes."
  },
  "wellness-regenerative-recovery": {
    title: "Wellness & Regenerative Recovery in Ware SG12 | ULANDA",
    description: "Internal wellness treatments at ULANDA in Ware SG12. NAD+ IV, glutathione, energy IV and immunity support in partnership with 360 Medicx Harley Street."
  },
  "pelvic-intimate-regeneration": {
    title: "Pelvic & Intimate Regeneration in Ware SG12 | Radiate Pathway | ULANDA",
    description: "Clinician-led pelvic and intimate regeneration in Ware, Hertfordshire. A consultation-first Radiate pathway supporting tissue health, comfort and recovery across life stages."
  }
};

// ═══════════════════════════════════════════════════════════════
// Helper Functions
// ═══════════════════════════════════════════════════════════════

export const getTreatmentCategoryById = (id) => treatmentCategories[id];

export const getAllTreatmentCategories = () => treatmentCategories;

export const getVisibleTreatmentCategories = () => {
  return Object.values(treatmentCategories).filter(cat => !cat.hidden);
};

export const getGatedCategories = () => {
  return Object.values(treatmentCategories).filter(cat => cat.gated);
};

export const getTreatmentFromCategory = (categoryId, treatmentId) => {
  return treatmentCategories[categoryId]?.treatments?.[treatmentId] || null;
};

// Helper to find a treatment by ID across all new categories
export const findTreatmentById = (treatmentId) => {
  for (const category of Object.values(treatmentCategories)) {
    if (category.treatments && category.treatments[treatmentId]) {
      return {
        treatment: category.treatments[treatmentId],
        categoryId: category.id,
        categoryTitle: category.title
      };
    }
  }
  return null;
};

// Get linked conditions for a category
export const getLinkedConditionsForCategory = (categoryId) => {
  return treatmentCategories[categoryId]?.linkedConditions || [];
};

// ═══════════════════════════════════════════════════════════════
// Page Data for Treatments Hub
// ═══════════════════════════════════════════════════════════════

export const treatmentsPageDataDraft = {
  hero: {
    image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200",
    placeholderUrl: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Treatments",
    subtitle: "Clinician-led regenerative aesthetic care"
  },
  intro: {
    title: "Treatment Menu",
    // Full clinical description as specified
    description: `ULANDA is a private skin care and aesthetic clinic in Ware, Hertfordshire, operating within a clinically sequenced regenerative model.

All treatments are delivered by an Advanced Nurse Practitioner, by appointment only, and are selected based on skin biology, tissue readiness and hormonal context — not trends or walk-in demand.

This is not a high-street aesthetics menu.
It is a clinically governed treatment system.

Treatments are accessed clinically and may be sequenced as part of structured care. Not all treatments are appropriate for all clients at all times.`
  },
  clinicalNote: "Not all treatments are suitable for direct booking. Some treatments require prior assessment or preparatory care."
};

// ═══════════════════════════════════════════════════════════════
// Deprecated / Removed Treatments
// ═══════════════════════════════════════════════════════════════
// Post-Procedure Recovery Facial - REMOVED from website completely
export const removedTreatments = [
  {
    id: "post-procedure-recovery-facial",
    reason: "Removed completely from website per restructure plan",
    originalPath: "/treatments/restore/oxygen-healing-support/post-procedure-recovery-facial"
  }
];
