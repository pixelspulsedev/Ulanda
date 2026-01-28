export const faqData = {
  about: {
    title: "About ULANDA",
    items: [
      {
        question: "What is ULANDA?",
        answer: "ULANDA is a regenerative aesthetics and women’s wellness clinic based in Ware, Hertfordshire (SG12). We specialise in natural, science-led skin regeneration, longevity wellness, and preventive women’s health across all life stages — including postpartum, perimenopause, menopause, and beyond."
      },
      {
        question: "How is ULANDA different from other aesthetics clinics?",
        answer: "ULANDA is regenerative-first, not correction-first. Rather than chasing quick cosmetic fixes, we focus on restoring skin health, collagen function, cellular repair, and internal balance, so results look natural, last longer, and support long-term wellbeing."
      },
      {
        question: "Who is ULANDA designed for?",
        answer: "ULANDA is designed for women who want: Natural, non-overdone results; Skin health, not just surface correction; Support through hormonal life stages; A clinic that treats skin, structure, and internal health together. We work with women in their 30s, 40s, 50s, 60s+ — including postpartum and menopausal clients."
      }
    ]
  },
  treatments: {
    title: "Treatments & Approach",
    items: [
      {
        question: "What does “regenerative aesthetics” mean?",
        answer: "Regenerative aesthetics focuses on stimulating the body’s own repair systems rather than masking ageing with volume or paralysis. This includes: Collagen stimulation (biostimulators, threads); Cellular repair (polynucleotides, PRP); Skin barrier restoration (medical-grade facials, peels); Internal support (IV & IM wellness therapies)."
      },
      {
        question: "Do you still offer fillers and anti-wrinkle injections?",
        answer: "Yes — but selectively and conservatively. At ULANDA, fillers are used only where structurally appropriate and anti-wrinkle injections are tailored for natural expression. We prioritise regenerative treatments first. We believe fillers and neurotoxins should complement regeneration, not replace it."
      },
      {
        question: "I’ve never had aesthetic treatment before. Is ULANDA suitable for me?",
        answer: "Absolutely. Many ULANDA clients are first-timers. We specialise in gentle entry-level treatments, education-led consultations, progressive treatment planning, and building trust before advanced treatments. You will never be rushed or pressured."
      },
      {
        question: "Do treatments look natural?",
        answer: "Yes. Natural outcomes are central to the ULANDA philosophy. Our approach avoids overfilling, over-tightening, or frozen expressions. Instead, we focus on skin quality, collagen health, and subtle structural support."
      }
    ]
  },
  consultations: {
    title: "Consultations & Personalisation",
    items: [
      {
        question: "Do you offer consultations before treatment?",
        answer: "Yes. Every client begins with a comprehensive consultation. This includes: Medical and lifestyle review, Hormonal life-stage assessment, AI skin analysis (where appropriate), Discussion of goals and concerns, and A personalised treatment plan."
      },
      {
        question: "Are treatments customised?",
        answer: "Always. No two women — or faces — are the same. Your plan is tailored to your skin biology, your hormonal stage, your lifestyle and downtime needs, and your comfort level with treatments."
      },
      {
        question: "Can treatments be combined?",
        answer: "Yes — and often they should be. ULANDA specialises in layered treatment plans, combining facials + regenerative injectables, cellular repair + structural support, and external treatments + internal wellness. This delivers better, longer-lasting results."
      }
    ]
  },
  menopause: {
    title: "Menopause, Hormones & Wellness",
    items: [
      {
        question: "Do you treat menopausal and perimenopausal skin?",
        answer: "Yes — this is one of ULANDA’s core specialisms. We address skin thinning and laxity, jawline and neck softening, pigmentation and dryness, poor healing and inflammation, and sleep, fatigue, and internal stress affecting skin."
      },
      {
        question: "Do you offer hormone support?",
        answer: "ULANDA focuses on skin and wellness optimisation, and works with trusted medical partners for hormone-related care where appropriate. This allows us to support hormone-related skin changes, energy and metabolic health, and longevity-focused internal wellness."
      }
    ]
  },
  safety: {
    title: "Safety & Credentials",
    items: [
      {
        question: "Who performs the treatments at ULANDA?",
        answer: "All treatments are performed or overseen by medically qualified professionals, led by an Advanced Nurse Practitioner with extensive experience in women’s health and medical aesthetics."
      },
      {
        question: "Are treatments safe?",
        answer: "Yes. Safety is non-negotiable at ULANDA. We operate with medical-grade products only, evidence-based protocols, conservative dosing, full consent and aftercare, and continuous professional training."
      },
      {
        question: "Is ULANDA regulated?",
        answer: "ULANDA adheres to UK medical and aesthetic regulatory standards and works with CQC-registered medical partners where required for advanced wellness services."
      }
    ]
  },
  results: {
    title: "Results, Downtime & Expectations",
    items: [
      {
        question: "How soon will I see results?",
        answer: "This depends on the treatment. Facials & hydration: immediate glow. Skin boosters: 1–3 weeks. Polynucleotides & biostimulators: gradual improvement over weeks. Structural treatments: progressive over months. Regenerative results build over time — and last longer."
      },
      {
        question: "Is there downtime?",
        answer: "Most treatments involve minimal downtime. We will always discuss recovery expectations, social downtime, and aftercare instructions. Many clients return to normal activities the same day."
      },
      {
        question: "How long do results last?",
        answer: "Regenerative treatments are designed for longevity. Skin quality improvements can last months to years. Collagen stimulation continues long after treatment. Maintenance plans are personalised."
      }
    ]
  },
  booking: {
    title: "Booking & Next Steps",
    items: [
      {
        question: "How do I book?",
        answer: "You can book online via the booking system, by contacting the clinic directly, or after an initial consultation."
      },
      {
        question: "What if I’m not sure what treatment I need?",
        answer: "That’s completely normal. Simply book a consultation — we’ll guide you through options and create a plan aligned with your goals, comfort level, and timeline."
      },
      {
        question: "Where is ULANDA located?",
        answer: "ULANDA is located in Ware, Hertfordshire (SG12) and serves clients from Hertford and surrounding areas."
      }
    ]
  }
};

export const homeFaqs = [
  ...faqData.about.items.filter(i => i.question.includes("different")),
  ...faqData.treatments.items.filter(i => i.question.includes("look natural")),
  ...faqData.treatments.items.filter(i => i.question.includes("never had aesthetic treatment")),
  ...faqData.booking.items.filter(i => i.question.includes("How do I book")),
  {
    question: "Is this safe for menopausal conditions?",
    answer: "Yes, we specialise in menopausal skin changes. We address skin thinning, laxity, and dryness with treatments specifically safe and effective for hormonal skin changes.",
    linkId: "conditions/menopause-hormone-skin-changes",
    linkText: "Learn about menopause skin treatments"
  }
];

export default faqData;
