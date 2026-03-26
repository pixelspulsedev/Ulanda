import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "name": "Medical Aesthetics Clinic in Ware, Hertfordshire",
      "url": "https://www.ulanda.co.uk/treatments/medical-aesthetics-clinic/",
      "description": "Nurse-led medical aesthetics clinic in Ware, Hertfordshire offering regenerative injectables, skin boosters, microneedling and barrier-first skin treatments within a structured clinical programme.",
      "inLanguage": "en-GB",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://www.ulanda.co.uk/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.ulanda.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.ulanda.co.uk/treatments/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Medical Aesthetics Clinic",
          "item": "https://www.ulanda.co.uk/treatments/medical-aesthetics-clinic/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer Botox and anti-wrinkle injections in Ware?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Anti-wrinkle injections are available following the Advanced Skin Health Consultation which determines treatment suitability and sequencing."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a consultation before booking Botox or fillers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All new clients begin with the Advanced Skin Health Consultation."
          }
        },
        {
          "@type": "Question",
          "name": "How is ULANDA different from other medical aesthetics clinics in Ware?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ULANDA follows an assessment-first clinical model where treatment is introduced only after clinical skin assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Is the consultation fee refundable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The £175 consultation investment is fully redeemable against your treatment plan."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know which injectable I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment selection is based on assessment of your skin's biology, structural needs and long-term goals."
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Medical Aesthetic Treatments at ULANDA Ware",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Anti-Wrinkle Injections",
          "url": "https://www.ulanda.co.uk/treatments/structural-collagen-support/anti-wrinkle/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dermal Fillers",
          "url": "https://www.ulanda.co.uk/treatments/structural-collagen-support/dermal-fillers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Profhilo",
          "url": "https://www.ulanda.co.uk/treatments/injectable-skin-optimisation/profhilo/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Polynucleotides",
          "url": "https://www.ulanda.co.uk/treatments/skin-renewal-regeneration/polynucleotides"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Microneedling",
          "url": "https://www.ulanda.co.uk/treatments/skin-renewal-regeneration/microneedling/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Chemical Peels",
          "url": "https://www.ulanda.co.uk/treatments/skin-renewal-regeneration/chemical-peel/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Prescription Skincare",
          "url": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical/"
        }
      ]
    }
  ]
};

const treatments = [
  {
    title: "Anti-Wrinkle Injections",
    alsoKnownAs: "Botox · frown lines · forehead lines · crow's feet · brow lift · lip flip",
    description: "Relaxation of targeted facial muscles softens dynamic expression lines while maintaining natural facial movement.",
    detail: "At ULANDA anti-wrinkle injections are introduced following barrier assessment because inflamed or barrier-compromised skin responds less predictably to injectable treatments.",
    linkText: "Anti-wrinkle injections at ULANDA",
    linkUrl: "/treatments/structural-collagen-support/anti-wrinkle-injection"
  },
  {
    title: "Dermal Fillers",
    alsoKnownAs: "lip filler · cheek filler · jawline filler · tear trough · nasolabial folds · marionette lines",
    description: "Hyaluronic acid injectables restore volume, improve facial contour and address structural changes associated with skin ageing.",
    detail: "Placement is guided by structural assessment findings from the consultation rather than a pre-determined aesthetic template.",
    linkText: "Dermal filler treatments at ULANDA",
    linkUrl: "/treatments/structural-collagen-support/dermal-fillers"
  },
  {
    title: "Profhilo",
    alsoKnownAs: "skin booster · injectable moisturiser · bio-remodelling · skin hydration injection",
    description: "Profhilo is a bio-remodelling injectable that distributes through the dermis to stimulate collagen and elastin production while improving dermal hydration.",
    detail: "At ULANDA Profhilo is introduced as a regenerative treatment within a structured programme rather than delivered as a standalone hydration appointment.",
    linkText: "Profhilo bio-remodelling at ULANDA",
    linkUrl: "/treatments/injectable-skin-optimisation/profhilo"
  },
  {
    title: "Polynucleotides",
    alsoKnownAs: "PN treatment · PDRN · skin regeneration injection · PN for under eyes · PN for rosacea",
    description: "Regenerative injectable therapy using purified DNA fragments that activate cellular repair mechanisms, stimulate fibroblast activity and improve skin quality at tissue level.",
    detail: null,
    linkText: "Polynucleotide treatments at ULANDA",
    linkUrl: "/treatments/skin-renewal-regeneration/polynucleotides"
  },
  {
    title: "Skin Boosters",
    alsoKnownAs: "injectable moisturiser · Seventy Hyal · Jalupro · Definisse Hydrobooster",
    description: "Micro-hydration injectables improve dermal hydration, skin texture and surface quality.",
    detail: "Specific formulations are selected according to the hydration and structural picture identified during assessment.",
    linkText: "Injectable skin optimisation",
    linkUrl: "/treatments/injectable-skin-optimisation"
  },
  {
    title: "Microneedling",
    alsoKnownAs: "collagen induction therapy · skin needling · dermaroller · RF microneedling",
    description: "Microneedling stimulates collagen production through controlled micro-channels that activate the dermal wound-healing response.",
    detail: "At ULANDA microneedling is introduced only when the skin barrier is confirmed stable.",
    linkText: "Microneedling at ULANDA",
    linkUrl: "/treatments/skin-renewal-regeneration/microneedling"
  },
  {
    title: "Chemical Peels",
    alsoKnownAs: "skin peel · acid peel · resurfacing · BioRePeel · TCA peel",
    description: "Controlled epidermal renewal treatments accelerate cellular turnover, improve surface clarity and address pigmentation irregularity.",
    detail: "Peels are introduced at the stage where barrier stability and cellular readiness make them most effective.",
    linkText: "Chemical peel treatments",
    linkUrl: "/treatments/skin-renewal-regeneration/chemical-peel"
  },
  {
    title: "Prescription Skincare",
    alsoKnownAs: "Obagi Medical · medical grade skincare · physician-dispensed skincare · prescription retinol · Nu-Derm",
    description: "Prescription skincare forms part of the clinical programme when indicated following consultation.",
    detail: "These treatments support skin repair, pigmentation control and long-term skin behaviour.",
    linkText: "Prescription skincare at ULANDA",
    linkUrl: "/treatments/prescription-skincare/obagi-medical"
  }
];

const skinConcerns = [
  "Fine lines and dynamic wrinkles",
  "Loss of facial firmness and structure",
  "Dermal dehydration",
  "Uneven pigmentation",
  "Rosacea and skin sensitivity",
  "Under-eye hollowing",
  "Acne and congestion",
  "Jawline softening",
  "Hormonal skin changes"
];

const signatureProgrammes = [
  { title: "Skin Barrier Repair & Recovery", url: "/signature/skin-barrier-repair-recovery" },
  { title: "Rosacea & Redness Control", url: "/signature/rosacea-redness-control" },
  { title: "Menopause Skin Rebuild", url: "/signature/menopause-skin-rebuild" },
  { title: "Photoaging & Skin Architecture", url: "/signature/photoaging-skin-architecture" },
  { title: "Structural Skin Regeneration", url: "/signature/structural-skin-regeneration" },
  { title: "Under-Eye Renewal", url: "/signature/under-eye-renewal" }
];

const journalArticles = [
  { title: "Why Treatments Fail: When Skin Is Not Ready for Correction", url: "/journal/why-treatments-fail-barrier-instability/" },
  { title: "Skin Barrier Function: Why Your Skin Reacts Even When Products Are \u201CGentle\u201D", url: "/journal/skin-barrier-function/" },
  { title: "Oestrogen, Collagen and Elasticity: Why Skin Changes Rapidly in Midlife", url: "/journal/oestrogen-collagen-elasticity/" }
];

const faqs = [
  { q: "Do you offer Botox and anti-wrinkle injections in Ware?", a: "Yes. Anti-wrinkle injections are available following the Advanced Skin Health Consultation which determines treatment suitability and sequencing." },
  { q: "Do you offer Profhilo in Ware?", a: "Yes. Profhilo bio-remodelling treatments are available following consultation." },
  { q: "Are polynucleotides available at ULANDA?", a: "Yes. Polynucleotide therapy is introduced where regenerative repair support is clinically indicated." },
  { q: "Do I need a consultation before booking Botox or fillers?", a: "Yes. All new clients begin with the Advanced Skin Health Consultation." },
  { q: "Is the consultation fee refunded if I proceed with treatment?", a: "The £175 consultation investment is fully redeemable against your treatment plan." },
  { q: "How do I know which injectable I need?", a: "Treatment selection is based on assessment of your skin\u2019s biology, structural needs and long-term goals." },
  { q: "Where is ULANDA located?", a: "ULANDA is located at Uphaven, 6 Hampden Hill, Ware, Hertfordshire SG12 7JT with free dedicated parking on site." }
];

const servingAreas = [
  "Ware", "Hertford", "Hoddesdon", "Broxbourne", "Bishop\u2019s Stortford",
  "Harlow", "Cheshunt", "Stevenage", "Welwyn Garden City", "Sawbridgeworth"
];

function BookingCTA() {
  return (
    <div className="mt-8">
      <a
        href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary text-white shadow-md"
      >
        Book Your Advanced Skin Health Consultation →
      </a>
      <p className="text-base-content/60 mt-3 text-sm">£175 · Fully redeemable against your treatment plan · Free parking on site</p>
      <p className="text-sm font-medium text-primary/80 mt-1 tracking-wide">Refinement now. Regeneration ahead.</p>
    </div>
  );
}

export default function MedicalAestheticsClinic() {
  return (
    <>
      <Head>
        <title>Medical Aesthetics Clinic in Ware | Nurse-Led Skin Clinic | ULANDA</title>
        <meta name="description" content="Nurse-led medical aesthetics clinic in Ware, Hertfordshire delivering regenerative injectables, skin boosters, microneedling and barrier-first skin treatments within a structured clinical programme. Consultation required. Free parking on site." />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments/medical-aesthetics-clinic/" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Head>

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-4xl">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-primary/70 hover:text-primary mb-6 transition-colors text-sm"
            >
              ← Back to All Treatments
            </Link>
            <h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-4">
              <HeroText>Medical Aesthetics Clinic in Ware, Hertfordshire</HeroText>
            </h1>
            <p className="text-lg md:text-xl text-primary/80 font-light mb-2">
              Nurse-Led · Regenerative · Assessment-First
            </p>
            <p className="text-2xl md:text-3xl font-serif text-primary mt-6 mb-8 italic">
              Skin Understood. Then Transformed.
            </p>
          </div>
        </section>

        {/* Opening Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
          <div className="max-w-4xl space-y-6 text-base-content/80 text-lg leading-relaxed">
            <FadeInWhenVisible delay={0.1}>
              <p>If you are looking for a medical aesthetics clinic in Ware or Hertfordshire, you are likely looking for clinically delivered injectable and skin treatments that improve skin quality, facial structure and long-term skin behaviour without an over-treated appearance.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <p>ULANDA is a nurse-led medical aesthetics clinic in Ware, Hertfordshire delivering regenerative injectable treatments and barrier-first skin health within a structured clinical programme.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <p>Treatments are not selected from a menu. They are assessed, clinically sequenced and introduced according to the biological state of your skin. This ensures treatments are delivered at the point where they can produce the best and most durable results.</p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Begin With Structured Clinical Assessment */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">Begin With Structured Clinical Assessment</h2>
              </FadeInWhenVisible>
              <div className="space-y-6 text-base-content/80 text-lg leading-relaxed">
                <FadeInWhenVisible delay={0.1}>
                  <p>The ULANDA <Link to="/treatments/advanced-skin-health-consultation" className="text-primary font-bold hover:text-primary/80 underline">Advanced Skin Health Consultation</Link> is a full clinical skin assessment.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.15}>
                  <p className="font-medium text-base-content">
                    <Link to="/treatments/advanced-skin-health-consultation" className="text-primary hover:text-primary/80 underline">Why the ULANDA Consultation Costs £175.</Link>
                  </p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.2}>
                  <p>During this appointment your clinician evaluates barrier integrity, inflammatory activity, hormonal context and treatment readiness before any treatment is recommended.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.25}>
                  <p>This process establishes the biological foundation that determines which treatments are appropriate, when they should be introduced and how they should be sequenced.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.3}>
                  <p>Where appropriate, the first stage of treatment may be delivered during the same appointment so that you leave with both visible improvement and a structured clinical plan for the months ahead.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.35}>
                  <p>Your consultation concludes with a selected homecare layer — not a generic skincare regime but a clinically targeted protocol designed around your barrier assessment findings, your hormonal context and the treatment plan you are beginning.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.4}>
                  <p className="font-medium text-base-content text-xl italic mt-6">The difference is between knowing your treatment is safe — and knowing your treatment is right.</p>
                </FadeInWhenVisible>
              </div>
              <FadeInWhenVisible delay={0.45}>
                <BookingCTA />
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* What a Medical Aesthetics Clinic Provides */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">What a Medical Aesthetics Clinic Provides</h2>
              </FadeInWhenVisible>
              <div className="space-y-6 text-base-content/80 text-lg leading-relaxed">
                <FadeInWhenVisible delay={0.1}>
                  <p>A medical aesthetics clinic provides regulated injectable and skin treatments designed to improve skin quality, dermal hydration, facial structure and the visible effects of ageing.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.2}>
                  <p>At ULANDA these treatments are delivered within a biological framework rather than as isolated cosmetic procedures.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.3}>
                  <p>The sequence in which treatments are introduced — and the biological state of the skin when they are delivered — determines how well they perform and how long the results last.</p>
                </FadeInWhenVisible>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Medical Aesthetic Treatments */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">Popular Medical Aesthetic Treatments in Ware</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-10">Clients searching for a medical aesthetics clinic in Ware or Hertfordshire often explore treatments designed to improve skin quality, hydration and facial structure. At ULANDA these treatments are introduced within a clinically guided regenerative framework.</p>
              </FadeInWhenVisible>

              <div className="space-y-10">
                {treatments.map((treatment, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-secondary/20">
                      <h3 className="text-2xl font-serif text-base-content mb-2">{treatment.title}</h3>
                      <p className="text-sm text-primary/60 mb-4 italic">Also known as: {treatment.alsoKnownAs}</p>
                      <p className="text-base-content/80 text-lg leading-relaxed mb-3">{treatment.description}</p>
                      {treatment.detail && (
                        <p className="text-base-content/80 text-lg leading-relaxed mb-4">{treatment.detail}</p>
                      )}
                      <Link to={treatment.linkUrl} className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                        {treatment.linkText} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>

              <FadeInWhenVisible delay={0.2}>
                <div className="mt-8 text-center">
                  <Link to="/treatments" className="btn btn-primary text-white rounded-full px-8">
                    Explore All Skin Treatments
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Treatment Readiness */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">Treatment Readiness — Why It Matters</h2>
              </FadeInWhenVisible>
              <div className="space-y-6 text-base-content/80 text-lg leading-relaxed">
                <FadeInWhenVisible delay={0.1}>
                  <p>For most clients, treatment outcomes improve when the skin barrier is stable and inflammatory load is within a normal range.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.2}>
                  <p>Treatments delivered to barrier-compromised or inflamed skin produce unpredictable results, slower recovery and results that fade sooner than they should.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.3}>
                  <p>Where barrier instability or inflammatory activity is identified at consultation, treatment begins with the <Link to="/treatments/skin-barrier-renewal-protocol" className="text-primary font-bold hover:text-primary/80 underline">Skin Barrier Renewal Protocol</Link> to stabilise the skin before regenerative procedures are introduced.</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.4}>
                  <p className="font-medium text-base-content text-xl italic">This step separates a treatment sequence from a treatment programme.</p>
                </FadeInWhenVisible>
              </div>
              <FadeInWhenVisible delay={0.5}>
                <div className="mt-8">
                  <Link to="/treatments/skin-barrier-renewal-protocol" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors text-lg">
                    Explore the Skin Barrier Renewal Protocol <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Skin Concerns Commonly Treated */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">Skin Concerns Commonly Treated</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">Clients visiting ULANDA most commonly present with:</p>
              </FadeInWhenVisible>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skinConcerns.map((concern, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                    <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-secondary/20">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{concern}</span>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
              <FadeInWhenVisible delay={0.5}>
                <div className="mt-8">
                  <Link to="/conditions" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors text-lg">
                    Explore all skin conditions <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Structured Skin Health Programmes */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">Structured Skin Health Programmes</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">Some skin presentations benefit from structured treatment pathways combining several therapies over time. ULANDA's six Signature programmes address the most common clinical patterns seen in practice.</p>
              </FadeInWhenVisible>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {signatureProgrammes.map((programme, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                    <Link
                      to={programme.url}
                      className="group flex items-center justify-between bg-white rounded-xl p-5 border border-secondary/20 hover:shadow-md hover:border-primary/20 transition-all"
                    >
                      <span className="text-base-content group-hover:text-primary transition-colors font-medium">{programme.title}</span>
                      <ArrowRight className="w-4 h-4 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </FadeInWhenVisible>
                ))}
              </div>
              <FadeInWhenVisible delay={0.35}>
                <div className="mt-8 text-center">
                  <Link to="/signature" className="btn btn-primary text-white rounded-full px-8">
                    Explore all Signature Programmes
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Clinical Insights */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">Clinical Insights</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Understanding how skin behaves biologically helps explain why some treatments succeed and others disappoint. ULANDA maintains a growing collection of clinical insights exploring the science behind skin regeneration, barrier health and injectable treatments.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">These articles help clients better understand:</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <ul className="space-y-2 mb-8 text-base-content/80 text-lg">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> collagen decline and skin ageing</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> hormonal influences on skin behaviour</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> regenerative injectable treatments</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> barrier function and skin resilience</li>
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.15}>
                <p className="text-base-content/80 text-lg mb-6">Recent ULANDA clinical insights include:</p>
              </FadeInWhenVisible>
              <div className="space-y-3 mb-8">
                {journalArticles.map((article, idx) => (
                  <FadeInWhenVisible key={idx} delay={0.2 + idx * 0.05}>
                    <Link
                      to={article.url}
                      className="group flex items-center gap-3 bg-white rounded-xl p-4 border border-secondary/20 hover:shadow-md hover:border-primary/20 transition-all"
                    >
                      <BookOpen className="w-5 h-5 text-primary/50 group-hover:text-primary flex-shrink-0" />
                      <span className="text-base-content group-hover:text-primary transition-colors">{article.title}</span>
                    </Link>
                  </FadeInWhenVisible>
                ))}
              </div>
              <FadeInWhenVisible delay={0.4}>
                <Link to="/journal" className="btn btn-primary text-white rounded-full px-8">
                  Explore Clinical Insights
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-8">Frequently Asked Questions</h2>
              </FadeInWhenVisible>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                    <details className="group bg-white rounded-xl border border-secondary/20 overflow-hidden">
                      <summary className="cursor-pointer p-5 md:p-6 text-base-content font-medium text-lg flex items-center justify-between gap-4 hover:text-primary transition-colors">
                        {faq.q}
                        <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-base-content/80 text-lg leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Serving Ware and Hertfordshire */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">Serving Ware and Hertfordshire</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">ULANDA's medical aesthetics clinic serves clients from:</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="flex flex-wrap gap-3">
                  {servingAreas.map((area, idx) => (
                    <span key={idx} className="bg-white px-4 py-2 rounded-full text-base-content/70 border border-secondary/20 text-sm">
                      {area}
                    </span>
                  ))}
                  <span className="bg-white px-4 py-2 rounded-full text-base-content/70 border border-secondary/20 text-sm">
                    the wider East Hertfordshire region
                  </span>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <FadeInWhenVisible>
                <p className="text-base-content/80 text-xl leading-relaxed mb-8">If you are comparing medical aesthetics clinics in Ware, begin with clinical clarity rather than a treatment selection.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <a
                  href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg text-white shadow-md"
                >
                  Book Your Advanced Skin Health Consultation →
                </a>
                <p className="text-base-content/60 mt-4 text-sm">£175 · Fully redeemable against your treatment plan · Free parking on site</p>
                <p className="text-lg font-medium text-primary/80 mt-2 tracking-wide font-serif italic">Refinement now. Regeneration ahead.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
