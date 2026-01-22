import { getAllTreatments } from './pageContents/treatments/treatments';

// ═══════════════════════════════════════════════════════════════
// ULANDA INTERNAL CROSSLINKING SYSTEM (2025)
// Complete SEO-optimised internal linking architecture
// ═══════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────
// 1. CONDITIONS → TREATMENTS MAPPING
// ───────────────────────────────────────────────────────────────

export const conditionToTreatments = {
  // PIGMENTATION & SKIN TONE
  "hyperpigmentation": [
    "chemical-peel",
    "biorepeel",
    "microneedling",

    "polynucleotides",
    "medical-weight-management",
    "barrier-repair-facial",
    "oxygen-facial",
    "oxygen-vitamin-infusion-facial",
    "led-light-therapy"
  ],

  "melasma": [
    "chemical-peel",
    "biorepeel",
    "enzyme-therapy",
    "polynucleotides",
    "microneedling",
    "oxygen-facial",
    "led-light-therapy",
    "hormone-smart-skin"
  ],

  "post-inflammatory-hyperpigmentation": [
    "chemical-peel",
    "biorepeel",
    "polynucleotides",
    "microneedling",
    "prp-skin-regeneration",
    "barrier-repair-facial",
    "enzyme-therapy",
    "led-light-therapy"
  ],

  "uneven-skin-tone": [
    "oxygen-vitamin-infusion-facial",
    "hydrafacial",
    "biorepeel",
    "chemical-peel",
    "medical-weight-management",
    "profhilo",
    "polynucleotides",
    "barrier-repair-facial"
  ],

  "dull-dehydrated-skin": [
    "oxygen-facial",
    "hydrafacial",
    "oxygen-vitamin-infusion-facial",
    "jalupro",
    "profhilo",
    "definisse-hydrobooster",
    "polynucleotides",
    "led-light-therapy"
  ],

  // MENOPAUSE & HORMONE-LINKED SKIN CHANGES
  "menopause-skin-decline": [
    "hydrafacial",
    "polynucleotides",
    "prp-skin-regeneration",
    "biostimulators",
    "profhilo",
    "definisse-hydrobooster",
    "microneedling",
    "barrier-repair-facial",
    "hormone-smart-skin",
    "nad-iv",
    "skin-glow-iv"
  ],

  "jawline-softening": [
    "thread-lifts",
    "biostimulators",
    "jawline-sculpting",
    "neck-lower-face-lift",
  ],

  "neck-crepiness": [
    "polynucleotides",
    "biostimulators",
    "profhilo",
    "thread-lifts",
    "neck-lower-face-lift"
  ],

  "texture-decline": [
    "prp-skin-regeneration",
    "polynucleotides",
    "microneedling",
    "chemical-peel",
    "enzyme-therapy",
    "profhilo",
    "definisse-hydrobooster"
  ],

  // EYE AREA CONDITIONS
  "dark-circles": [
    "lumi-eyes",
    "polynucleotides",
    "under-eye-regeneration",
    "oxygen-facial",
    "led-light-therapy"
  ],

  "tear-troughs": [
    "polynucleotides",
    "lumi-eyes",
    "dermal-fillers",
    "under-eye-regeneration"
  ],

  "crepey-under-eye": [
    "lumi-eyes",
    "polynucleotides",
    "jalupro",
    "under-eye-regeneration",
  ],

  "under-eye-pigmentation": [
    "lumi-eyes",
    "polynucleotides",
    "enzyme-therapy",
    "biorepeel",
    "led-light-therapy",
    "under-eye-regeneration"
  ],

  "under-eye-puffiness": [
    "polynucleotides",
    "lumi-eyes",
    "led-light-therapy",
    "oxygen-facial",
    "under-eye-regeneration"
  ],

  // AGE & SKIN REGENERATION
  "crepey-skin-general": [
    "polynucleotides",
    "profhilo",
    "definisse-hydrobooster",
    "prp-skin-regeneration",
    "biostimulators",
  ],

  "skin-laxity": [
    "thread-lifts",
    "biostimulators",
    "polynucleotides",
    "neck-lower-face-lift"
  ],

  "volume-loss": [
    "biostimulators",
    "dermal-fillers",
    "thread-lifts",
    "jawline-sculpting"
  ],

  "uneven-texture": [
    "microneedling",

    "chemical-peel",
    "biorepeel",
    "prp-skin-regeneration",
    "polynucleotides",
    "enzyme-therapy"
  ],

  "enlarged-pores": [
    "hydrafacial",

    "microneedling",
    "chemical-peel",
    "biorepeel",
    "prp-skin-regeneration"
  ],

  // HORMONAL SKIN CONDITIONS
  "hormonal-breakouts": [
    "chemical-peel",
    "biorepeel",
    "led-light-therapy",
    "barrier-repair-facial",
    "hormone-smart-skin"
  ],

  "dryness-sensitivity": [
    "oxygen-facial",
    "enzyme-therapy",
    "profhilo",
    "jalupro",
    "skin-glow-iv"
  ],

  "hormonal-pigmentation": [
    "chemical-peel",
    "biorepeel",
    "enzyme-therapy",
    "polynucleotides",
    "microneedling",
    "hormone-smart-skin"
  ],

  "loss-of-definition": [
    "thread-lifts",
    "jawline-sculpting",
    "biostimulators",
    "biostimulators",
    "biostimulators",
    "thread-lifts"
  ],

  // BODY SKIN & STRUCTURAL CONDITIONS
  "body-skin-laxity": [
    "biostimulators",
    "body-tightening",
    "polynucleotides"
  ],

  "cellulite": [
    "biostimulators",
    "body-tightening"
  ],

  "stretch-marks": [
    "microneedling",
    "polynucleotides",
    "prp-skin-regeneration",
  ],

  "post-weightloss-postpartum": [
    "biostimulators",
    "polynucleotides",
    "body-tightening"
  ],

  // INTERNAL WELLNESS CONDITIONS
  "fatigue-low-energy": [
    "nad-iv",
    "energy-iv",
    "vitamin-b12-im",
    "womens-longevity-iv"
  ],

  "low-immunity": [
    "immunity-iv",
    "vitamin-b12-im",
    "glutathione-iv"
  ],

  "slow-metabolism": [
    "medical-weight-management",
    "nad-iv",
    "vitamin-b12-im",
    "womens-longevity-iv",
    "shape-and-regenerate"
  ],

  "stress-inflammation": [
    "glutathione-iv",
    "nad-iv",
    "led-light-therapy",
    "oxygen-vitamin-infusion-facial",
    "hormone-smart-skin"
  ],

  "nutrient-deficiency-skin": [
    "vitamin-b12-im",
    "vitamin-b12-im",
    "skin-glow-iv",
    "skin-glow-iv"
  ]
};

// ───────────────────────────────────────────────────────────────
// 2. TREATMENTS → CONDITIONS MAPPING
// ───────────────────────────────────────────────────────────────

export const treatmentToConditions = {
  // REFRESH (Skin Surface)
  "barrier-repair-facial": [
    "dull-dehydrated-skin",
    "uneven-skin-tone",
    "uneven-texture",
    "enlarged-pores",
    "dryness-sensitivity",
    "hormonal-pigmentation",
    "post-inflammatory-hyperpigmentation",
    "texture-decline"
  ],

  "oxygen-facial": [
    "dull-dehydrated-skin",
    "enlarged-pores",
    "uneven-texture",
    "hormonal-breakouts",
    "dryness-sensitivity",
    "skin-laxity",
    "uneven-skin-tone"
  ],

  "biorepeel": [
    "hormonal-breakouts",
    "post-inflammatory-hyperpigmentation",
    "uneven-skin-tone",
    "uneven-texture",
    "enlarged-pores",
    "hyperpigmentation",
    "melasma",
    "texture-decline"
  ],

  "chemical-peel": [
    "hyperpigmentation",
    "melasma",
    "post-inflammatory-hyperpigmentation",
    "uneven-texture",
    "hormonal-breakouts",
    "dull-dehydrated-skin",
    "enlarged-pores"
  ],

  "enzyme-therapy": [
    "dryness-sensitivity",
    "dull-dehydrated-skin",
    "texture-decline",
    "crepey-skin",
    "hormonal-pigmentation",
    "dryness-sensitivity"
  ],

  "led-light-therapy": [
    "hormonal-breakouts",
    "stress-inflammation",
    "dull-dehydrated-skin",
    "dryness-sensitivity"
  ],

  "oxygen-vitamin-infusion-facial": [
    "dull-dehydrated-skin",
    "uneven-skin-tone",
    "dryness-sensitivity",
    "uneven-texture",
    "menopause-skin-decline"
  ],

  "body-tightening": [
    "body-skin-laxity",
    "stretch-marks",
    "post-weightloss-postpartum",
    "uneven-texture"
  ],

  // RENEW (Cellular Regeneration)
  "polynucleotides": [
    "crepey-skin",
    "skin-laxity",
    "dark-circles",
    "crepey-under-eye",
    "under-eye-pigmentation",
    "texture-decline",
    "uneven-texture",
    "dull-dehydrated-skin"
  ],

  "prp-skin-regeneration": [
    "crepey-skin",
    "under-eye-pigmentation",
    "volume-loss",
    "menopause-skin-decline",
    "uneven-texture",
    "enlarged-pores"
  ],

  "microneedling": [
    "enlarged-pores",
    "uneven-texture",
    "post-inflammatory-hyperpigmentation",
    "stretch-marks",
    "texture-decline"
  ],

  "profhilo": [
    "crepey-skin",
    "dull-dehydrated-skin",
    "skin-laxity",
    "neck-crepiness",
    "dull-dehydrated-skin",
    "texture-decline"
  ],

  "definisse-hydrobooster": [
    "crepey-under-eye",
    "texture-decline",
    "dull-dehydrated-skin",
    "volume-loss"
  ],

  "jalupro": [
    "dull-dehydrated-skin",
    "uneven-texture",
    "enlarged-pores",
    "dryness-sensitivity"
  ],

  "lumi-eyes": [
    "dark-circles",
    "under-eye-pigmentation",
    "crepey-under-eye",
    "tear-troughs",
    "menopause-skin-decline"
  ],

  "jalupro": [
    "crepey-under-eye",
    "texture-decline",
    "dull-dehydrated-skin"
  ],

  "medical-weight-management": [
    "uneven-skin-tone",
    "dull-dehydrated-skin",
    "texture-decline"
  ],

  "polynucleotides": [
    "tear-troughs",
    "crepey-under-eye",
    "dark-circles",
    "menopause-skin-decline"
  ],

  "polynucleotides": [
    "neck-crepiness",
    "skin-laxity",
    "crepey-skin",
    "menopause-skin-decline"
  ],

  "lumi-eyes": [
    "under-eye-pigmentation",
    "dark-circles",
    "crepey-under-eye",
    "tear-troughs"
  ],

  "under-eye-regeneration": [
    "dark-circles",
    "tear-troughs",
    "crepey-under-eye",
    "under-eye-pigmentation",
    "under-eye-puffiness"
  ],

  "polynucleotides": [
    "texture-decline",
    "enlarged-pores",
    "post-inflammatory-hyperpigmentation",
    "crepey-skin"
  ],

  "prp-skin-regeneration": [
    "enlarged-pores",
    "uneven-texture",
    "crepey-skin",
    "post-weightloss-postpartum"
  ],

  "polynucleotides": [
    "crepey-skin",
    "menopause-skin-decline",
    "texture-decline"
  ],

  // RESTORE (Structural Regeneration)
  "biostimulators": [
    "menopause-skin-decline",
    "skin-laxity",
    "volume-loss",
    "loss-of-definition",
    "jawline-softening",
    "neck-crepiness",
    "body-skin-laxity",
    "cellulite"
  ],

  "biostimulators": [
    "menopause-skin-decline",
    "skin-laxity",
    "volume-loss",
    "loss-of-definition",
    "jawline-softening",
    "body-skin-laxity"
  ],

  "biostimulators": [
    "menopause-skin-decline",
    "skin-laxity",
    "volume-loss",
    "loss-of-definition",
    "jawline-softening"
  ],

  "biostimulators": [
    "menopause-skin-decline",
    "skin-laxity",
    "volume-loss",
    "loss-of-definition",
    "jawline-softening",
    "neck-crepiness",
    "cellulite"
  ],

  "biostimulators": [
    "menopause-skin-decline",
    "skin-laxity",
    "volume-loss",
    "loss-of-definition"
  ],

  "thread-lifts": [
    "skin-laxity",
    "jawline-softening",
    "menopause-skin-decline",
    "neck-crepiness",
    "loss-of-definition"
  ],

  "collagen-therapy": [
    "crepey-skin",
    "neck-crepiness",
    "post-weightloss-postpartum",
    "texture-decline"
  ],

  "dermal-fillers": [
    "loss-of-definition",
    "texture-decline"
  ],

  "dermal-fillers": [
    "tear-troughs",
    "volume-loss",
    "loss-of-definition",
    "jawline-softening"
  ],

  "jawline-sculpting": [
    "jawline-softening",
    "loss-of-definition",
    "menopause-skin-decline"
  ],

  "body-tightening": [
    "body-skin-laxity",
    "menopause-skin-decline",
    "post-weightloss-postpartum"
  ],

  "body-tightening": [
    "slow-metabolism",
    "post-weightloss-postpartum"
  ],

  "threads-biostimulators": [
    "skin-laxity",
    "menopause-skin-decline",
    "jawline-softening",
    "volume-loss"
  ],

  "thread-lifts": [
    "menopause-skin-decline",
    "skin-laxity",
    "volume-loss",
    "loss-of-definition"
  ],

  "neck-lower-face-lift": [
    "neck-crepiness",
    "jawline-softening",
    "skin-laxity",
    "menopause-skin-decline"
  ],

  "body-tightening": [
    "cellulite",
    "body-skin-laxity"
  ],

  "body-tightening": [
    "post-weightloss-postpartum",
    "menopause-skin-decline"
  ],

  // RADIATE WELLNESS (Internal)
  "nad-iv": [
    "fatigue-low-energy",
    "slow-metabolism",
    "stress-inflammation",
    "menopause-skin-decline"
  ],

  "energy-iv": [
    "fatigue-low-energy"
  ],

  "immunity-iv": [
    "low-immunity"
  ],

  "skin-glow-iv": [
    "dull-dehydrated-skin",
    "dryness-sensitivity"
  ],

  "glutathione-iv": [
    "stress-inflammation",
    "low-immunity"
  ],

  "womens-longevity-iv": [
    "fatigue-low-energy",
    "slow-metabolism"
  ],

  "skin-glow-iv": [
    "nutrient-deficiency-skin",
    "dull-dehydrated-skin"
  ],

  "vitamin-b12-im": [
    "nutrient-deficiency-skin",
    "low-immunity"
  ],

  "vitamin-b12-im": [
    "fatigue-low-energy",
    "nutrient-deficiency-skin",
    "slow-metabolism"
  ],

  "nad-iv": [
    "fatigue-low-energy"
  ],

  "glutathione-iv": [
    "stress-inflammation"
  ],

  "medical-weight-management": [
    "slow-metabolism"
  ]
};

// ───────────────────────────────────────────────────────────────
// 3. PROGRAMMES → CONDITIONS MAPPING
// ───────────────────────────────────────────────────────────────

export const programmeToConditions = {
  "menopause-regeneration": [
    "menopause-skin-decline",
    "jawline-softening",
    "neck-crepiness",
    "texture-decline",
    "crepey-skin",
    "loss-of-definition",
    "hormonal-pigmentation",
    "dryness-sensitivity",
    "dull-dehydrated-skin",
    "skin-laxity",
    "uneven-skin-tone",
    "dark-circles",
    "crepey-under-eye",
    "under-eye-pigmentation",
    "under-eye-puffiness",
    "hyperpigmentation",
    "melasma",
    "post-inflammatory-hyperpigmentation",
    "fatigue-low-energy",
    "slow-metabolism",
    "stress-inflammation",
    "nutrient-deficiency-skin"
  ],

  "under-eye-regeneration": [
    "dark-circles",
    "tear-troughs",
    "crepey-under-eye",
    "under-eye-pigmentation",
    "under-eye-puffiness",
    "crepey-skin",
    "volume-loss"
  ],

  "collagen-reset": [
    "crepey-skin",
    "menopause-skin-decline",
    "skin-laxity",
    "uneven-texture",
    "enlarged-pores",
    "volume-loss"
  ],

  "hormone-smart-skin": [
    "hormonal-breakouts",
    "hormonal-pigmentation",
    "stress-inflammation",
    "dryness-sensitivity",
    "menopause-skin-decline",
    "post-weightloss-postpartum",
    "dull-dehydrated-skin",
    "under-eye-pigmentation",
    "under-eye-puffiness"
  ],

  "shape-and-regenerate": [
    "slow-metabolism",
    "body-skin-laxity",
    "stretch-marks",
    "cellulite",
    "post-weightloss-postpartum",
    "fatigue-low-energy",
    "nutrient-deficiency-skin"
  ]
};

// ───────────────────────────────────────────────────────────────
// 4. PROGRAMMES → TREATMENTS MAPPING
// ───────────────────────────────────────────────────────────────

export const programmeToTreatments = {
  "menopause-regeneration": [
    "polynucleotides",
    "prp-skin-regeneration",
    "microneedling",

    "biostimulators",
    "biostimulators",
    "biostimulators",
    "biostimulators",
    "biostimulators",
    "thread-lifts",
    "profhilo",
    "definisse-hydrobooster",
    "jalupro",
    "polynucleotides",
    "polynucleotides",
    "chemical-peel",
    "biorepeel",
    "led-light-therapy",
    "enzyme-therapy",
    "oxygen-facial",
    "hormone-smart-skin"
  ],

  "under-eye-regeneration": [
    "lumi-eyes",
    "polynucleotides",
    "polynucleotides",
    "polynucleotides",
    "lumi-eyes",
    "jalupro",
    "microneedling",

    "collagen-therapy",
    "enzyme-therapy",
    "led-light-therapy"
  ],

  "collagen-reset": [
    "biostimulators",
    "biostimulators",
    "biostimulators",
    "biostimulators",
    "polynucleotides",
    "prp-skin-regeneration",
    "microneedling",

    "profhilo",
    "definisse-hydrobooster",
    "collagen-therapy",
    "thread-lifts"
  ],

  "hormone-smart-skin": [
    "oxygen-facial",
    "enzyme-therapy",
    "led-light-therapy",
    "chemical-peel",
    "biorepeel",
    "polynucleotides",
    "jalupro",
    "microneedling",
    "prp-skin-regeneration",
    "nad-iv",
    "energy-iv",
    "womens-longevity-iv",
    "skin-glow-iv",
    "vitamin-b12-im",
    "vitamin-b12-im"
  ],

  "shape-and-regenerate": [

    "body-tightening",
    "collagen-therapy",

    "biostimulators",
    "biostimulators",
    "body-tightening",
    "polynucleotides",
    "prp-skin-regeneration",
    "nad-iv",
    "vitamin-b12-im",
    "vitamin-b12-im",
    "medical-weight-management"
  ]
};

// ───────────────────────────────────────────────────────────────
// 5. BLOG CATEGORIES → CONDITIONS MAPPING
// ───────────────────────────────────────────────────────────────

export const blogCategories = {
  "collagen-ageing-menopause": {
    conditions: [
      "skin-laxity",
      "crepey-skin",
      "menopause-skin-decline",
      "volume-loss",
      "uneven-texture",
      "hormonal-pigmentation",
      "neck-crepiness",
      "jawline-softening"
    ],
    treatments: [
      "biostimulators",
      "biostimulators",
      "biostimulators",
      "biostimulators",
      "collagen-therapy",
      "polynucleotides",
      "thread-lifts",
      "profhilo",
      "microneedling",

      "barrier-repair-facial"
    ]
  },

  "pigmentation": {
    conditions: [
      "melasma",
      "hyperpigmentation",
      "uneven-skin-tone",
      "post-inflammatory-hyperpigmentation",
      "hormonal-pigmentation"
    ],
    treatments: [
      "chemical-peel",
      "biorepeel",
      "polynucleotides",
      "jalupro",
      "barrier-repair-facial",
      "hormone-smart-skin"
    ]
  },

  "under-eye": {
    conditions: [
      "dark-circles",
      "tear-troughs",
      "crepey-under-eye",
      "under-eye-pigmentation",
      "under-eye-puffiness"
    ],
    treatments: [
      "lumi-eyes",
      "polynucleotides",
      "polynucleotides",
      "lumi-eyes",
      "thread-lifts",
      "jalupro"
    ]
  },

  "wellness-radiate": {
    conditions: [
      "fatigue-low-energy",
      "stress-inflammation",
      "low-immunity",
      "slow-metabolism",
      "nutrient-deficiency-skin"
    ],
    treatments: [
      "nad-iv",
      "nad-iv",
      "vitamin-b12-im",
      "vitamin-b12-im",
      "womens-longevity-iv",
      "skin-glow-iv",
      "medical-weight-management",
      "hormone-smart-skin"
    ]
  }
};

// ───────────────────────────────────────────────────────────────
// 6. URL PATH HELPERS
// ───────────────────────────────────────────────────────────────

export const getConditionUrl = (slug) => {
  const conditionCategories = {
    // 1) Pigmentation & Skin Tone
    "hyperpigmentation": "pigmentation-and-skin-tone",
    "melasma": "pigmentation-and-skin-tone",
    "post-inflammatory-hyperpigmentation": "pigmentation-and-skin-tone",
    "uneven-skin-tone": "pigmentation-and-skin-tone",
    "dull-dehydrated-skin": "pigmentation-and-skin-tone",

    // 2) Menopause & Hormone-Linked Skin Changes
    "menopause-skin-decline": "menopause-hormone-skin-changes",
    "jawline-softening": "menopause-hormone-skin-changes",
    "neck-crepiness": "menopause-hormone-skin-changes",
    "texture-decline": "menopause-hormone-skin-changes",

    // 3) Eye Area Conditions
    "dark-circles": "eye-area",
    "tear-troughs": "eye-area",
    "crepey-under-eye": "eye-area",
    "under-eye-pigmentation": "eye-area",
    "under-eye-puffiness": "eye-area",

    // 4) Age & Skin Regeneration
    "crepey-skin": "age-and-regeneration",
    "skin-laxity": "age-and-regeneration",
    "volume-loss": "age-and-regeneration",
    "uneven-texture": "age-and-regeneration",
    "enlarged-pores": "age-and-regeneration",

    // 5) Hormonal Skin Conditions
    "hormonal-breakouts": "hormonal-skin",
    "dryness-sensitivity": "hormonal-skin",
    "hormonal-pigmentation": "hormonal-skin",
    "loss-of-definition": "hormonal-skin",

    // 6) Body Skin & Structural Conditions
    "body-skin-laxity": "body-skin-structural",
    "cellulite": "body-skin-structural",
    "stretch-marks": "body-skin-structural",
    "post-weightloss-postpartum": "body-skin-structural",

    // 7) Internal Wellness Conditions
    "fatigue-low-energy": "internal-wellness",
    "low-immunity": "internal-wellness",
    "slow-metabolism": "internal-wellness",
    "stress-inflammation": "internal-wellness",
    "nutrient-deficiency-skin": "internal-wellness"
  };

  const category = conditionCategories[slug];
  return category ? `/conditions/${category}/${slug}` : `/conditions/${slug}`;
};

// Dynamic Lookup Cache for Treatments
let treatmentLookupCache = null;

export const getTreatmentUrl = (slug) => {
  if (!treatmentLookupCache) {
    const treatments = getAllTreatments();
    const lookup = {};
    for (const [catId, cat] of Object.entries(treatments)) {
      if (cat.subCategories) {
        for (const [subId, sub] of Object.entries(cat.subCategories)) {
          if (sub.treatments) {
            for (const tId of Object.keys(sub.treatments)) {
              lookup[tId] = { catId, subId };
            }
          }
        }
      }
    }
    treatmentLookupCache = lookup;
  }

  const info = treatmentLookupCache[slug];
  if (info) {
    return `/treatments/${info.catId}/${info.subId}/${slug}`;
  }
  
  // Fallback for non-migrated or missing items
  return `/treatments/other/other/${slug}`;
};

export const getProgrammeUrl = (slug) => {
   // Assuming programmes are under radiate/programmes (or check lookup)
   const url = getTreatmentUrl(slug);
   if (url && !url.includes('other/other')) return url;
   return `/treatments/radiate/programmes/${slug}`;
};

// ───────────────────────────────────────────────────────────────
// 7. HELPER FUNCTIONS
// ───────────────────────────────────────────────────────────────

/**
 * Get all treatments for a specific condition
 */
export const getTreatmentsForCondition = (conditionSlug) => {
  return conditionToTreatments[conditionSlug] || [];
};

/**
 * Get all conditions for a specific treatment
 */
export const getConditionsForTreatment = (treatmentSlug) => {
  return treatmentToConditions[treatmentSlug] || [];
};

/**
 * Get all conditions for a specific programme
 */
export const getConditionsForProgramme = (programmeSlug) => {
  return programmeToConditions[programmeSlug] || [];
};

/**
 * Get all treatments for a specific programme
 */
export const getTreatmentsForProgramme = (programmeSlug) => {
  return programmeToTreatments[programmeSlug] || [];
};

/**
 * Get blog category mappings
 */
export const getBlogCategoryLinks = (category) => {
  return blogCategories[category] || { conditions: [], treatments: [] };
};

export default {
  conditionToTreatments,
  treatmentToConditions,
  programmeToConditions,
  programmeToTreatments,
  blogCategories,
  getConditionUrl,
  getTreatmentUrl,
  getProgrammeUrl,
  getTreatmentsForCondition,
  getConditionsForTreatment,
  getConditionsForProgramme,
  getTreatmentsForProgramme,
  getBlogCategoryLinks
};
