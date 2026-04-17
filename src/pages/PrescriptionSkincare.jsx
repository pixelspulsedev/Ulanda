import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import ConsultationCTA from '../components/ConsultationCTA';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const prescriptionSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare#breadcrumb",
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
          "name": "Prescription Skincare",
          "item": "https://www.ulanda.co.uk/treatments/prescription-skincare"
        }
      ]
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/#webpage",
      "name": "Prescription Skincare at ULANDA Skin Clinic",
      "url": "https://www.ulanda.co.uk/treatments/prescription-skincare",
      "description": "ULANDA is an authorised prescription skincare clinic in Ware, Hertfordshire. Medical grade prescription skincare prescribed by a Nurse Independent Prescriber as part of a structured clinical programme.",
      "provider": {
        "@type": "MedicalBusiness",
        "@id": "https://www.ulanda.co.uk/#medicalbusiness",
        "name": "ULANDA Skin Clinic",
        "url": "https://www.ulanda.co.uk",
        "telephone": "+447904336031",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "6 Hampden Hill",
          "addressLocality": "Ware",
          "addressRegion": "Hertfordshire",
          "postalCode": "SG12 7JT",
          "addressCountry": "GB"
        }
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Hertfordshire" },
        { "@type": "City", "name": "Hertford" },
        { "@type": "City", "name": "Hoddesdon" },
        { "@type": "City", "name": "Broxbourne" },
        { "@type": "City", "name": "Bishop's Stortford" },
        { "@type": "City", "name": "Cheshunt" },
        { "@type": "City", "name": "Stevenage" },
        { "@type": "City", "name": "Welwyn Garden City" },
        { "@type": "City", "name": "Sawbridgeworth" },
        { "@type": "City", "name": "Harlow" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is prescription skincare and how is it different from over-the-counter products?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prescription skincare contains active ingredients at concentrations that require a prescribing clinician to dispense — because their potency is real and clinically significant. Ingredients like hydroquinone, tretinoin and high-strength retinoids produce genuine cellular change at therapeutic concentrations. Over-the-counter products may contain the same ingredient names but at concentrations too low to replicate those effects. The prescription requirement exists because potency that is effective is also potency that requires clinical oversight."
          }
        },
        {
          "@type": "Question",
          "name": "Can I access prescription skincare without a full consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Prescription skincare at ULANDA requires the Advanced Skin Health Consultation — a full clinical assessment that establishes barrier integrity, inflammatory patterns, hormonal context and treatment readiness before any prescription is written."
          }
        },
        {
          "@type": "Question",
          "name": "I have been using prescription skincare from another clinic — can I replenish through ULANDA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly. Contact the clinic directly at info@ulanda.co.uk with details of your current prescription. Helen will review your protocol and confirm whether replenishment can be supported at ULANDA."
          }
        },
        {
          "@type": "Question",
          "name": "How long does prescription skincare take to produce results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This depends entirely on the system prescribed and the presenting concern. Barrier-supportive systems produce noticeable improvement within two to four weeks. Pigmentation correction systems typically show visible improvement from weeks six to eight, with significant transformation by weeks twelve to eighteen."
          }
        },
        {
          "@type": "Question",
          "name": "Is prescription skincare safe during pregnancy or breastfeeding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some prescription skincare ingredients — including tretinoin and hydroquinone — are contraindicated during pregnancy and breastfeeding. Helen reviews contraindications at the consultation and adjusts the prescription accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "Are the products genuine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All prescription skincare products dispensed through ULANDA are genuine and sourced directly from authorised UK distributors."
          }
        },
        {
          "@type": "Question",
          "name": "Does ULANDA stock prescription skincare brands other than Obagi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ULANDA currently stocks Obagi Medical as its primary prescription skincare range. If you are looking for a specific prescription skincare brand, contact the clinic to discuss whether it can be sourced or whether an equivalent system would be appropriate."
          }
        }
      ]
    }
  ]
};

const signatureProgrammes = [
  {
    name: 'Skin Barrier Repair & Resilience',
    path: '/signature/skin-barrier-repair-recovery',
    homecare: 'Prescription homecare: barrier-compatible hydration and gentle barrier-supportive systems during stabilisation phase. Transition to active systems once barrier integrity is confirmed.',
  },
  {
    name: 'Rosacea & Redness Control',
    path: '/signature/rosacea-redness-control',
    homecare: 'Prescription homecare: Obagi Rosaclear System \u2014 addressing both visible redness and the inflammatory mechanism driving it alongside the clinical programme.',
  },
  {
    name: 'Menopause Skin Rebuild',
    path: '/signature/menopause-skin-rebuild',
    homecare: 'Prescription homecare: Obagi Nu-Derm Fx transitioning to Rx where indicated \u2014 supporting cellular renewal and hormonal pigmentation correction in parallel with the regenerative programme.',
  },
  {
    name: 'Photoaging & Skin Architecture',
    path: '/signature/photoaging-skin-architecture',
    homecare: 'Prescription homecare: Obagi-C Fx System and Professional-C Serums \u2014 antioxidant protection, pigmentation correction and collagen support matched to UV damage presentation.',
  },
  {
    name: 'Structural Skin Regeneration',
    path: '/signature/structural-skin-regeneration',
    homecare: 'Prescription homecare: Obagi Elastiderm range \u2014 supporting collagen and elastin architecture between regenerative injectable appointments.',
  },
  {
    name: 'Under-Eye Renewal',
    path: '/signature/under-eye-renewal',
    homecare: 'Prescription homecare: Obagi Elastiderm Eye products \u2014 periorbital collagen support and under-eye resilience as the homecare complement to the clinical programme.',
  },
];

const faqs = [
  {
    question: 'What is prescription skincare and how is it different from over-the-counter products?',
    answer: 'Prescription skincare contains active ingredients at concentrations that require a prescribing clinician to dispense \u2014 because their potency is real and clinically significant. Ingredients like hydroquinone, tretinoin and high-strength retinoids produce genuine cellular change at therapeutic concentrations. Over-the-counter products may contain the same ingredient names but at concentrations too low to replicate those effects. The prescription requirement exists because potency that is effective is also potency that requires clinical oversight.',
  },
  {
    question: 'Can I access prescription skincare without a full consultation?',
    answer: 'No. Prescription skincare at ULANDA requires the Advanced Skin Health Consultation \u2014 a full clinical assessment that establishes barrier integrity, inflammatory patterns, hormonal context and treatment readiness before any prescription is written.',
  },
  {
    question: 'I have been using prescription skincare from another clinic \u2014 can I replenish through ULANDA?',
    answer: 'Possibly. Contact the clinic directly at info@ulanda.co.uk with details of your current prescription. Helen will review your protocol and confirm whether replenishment can be supported at ULANDA.',
  },
  {
    question: 'How long does prescription skincare take to produce results?',
    answer: 'This depends entirely on the system prescribed and the presenting concern. Barrier-supportive systems produce noticeable improvement within two to four weeks. Pigmentation correction systems typically show visible improvement from weeks six to eight, with significant transformation by weeks twelve to eighteen.',
  },
  {
    question: 'Is prescription skincare safe during pregnancy or breastfeeding?',
    answer: 'Some prescription skincare ingredients \u2014 including tretinoin and hydroquinone \u2014 are contraindicated during pregnancy and breastfeeding. Helen reviews contraindications at the consultation and adjusts the prescription accordingly.',
  },
  {
    question: 'Are the products genuine?',
    answer: 'Yes. All prescription skincare products dispensed through ULANDA are genuine and sourced directly from authorised UK distributors.',
  },
  {
    question: 'Does ULANDA stock prescription skincare brands other than Obagi?',
    answer: 'ULANDA currently stocks Obagi Medical as its primary prescription skincare range. If you are looking for a specific prescription skincare brand, contact the clinic to discuss whether it can be sourced or whether an equivalent system would be appropriate.',
  },
];

const areasServed = [
  { name: 'Ware' },
  { name: 'Hertford', link: '/locations/aesthetic-clinic-hertford' },
  { name: 'Hoddesdon', link: '/locations/aesthetic-clinic-hoddesdon' },
  { name: 'Broxbourne', link: '/locations/aesthetic-clinic-broxbourne' },
  { name: "Bishop\u2019s Stortford", link: '/locations/aesthetic-clinic-bishops-stortford' },
  { name: 'Harlow', link: '/locations/aesthetic-clinic-harlow' },
  { name: 'Cheshunt', link: '/locations/aesthetic-clinic-cheshunt' },
  { name: 'Stevenage', link: '/locations/aesthetic-clinic-stevenage' },
  { name: 'Welwyn Garden City', link: '/locations/aesthetic-clinic-welwyn-garden-city' },
  { name: 'St Albans' },
  { name: 'Sawbridgeworth', link: '/locations/aesthetic-clinic-sawbridgeworth' },
];

const prescriptionProcess = [
  {
    step: 1,
    title: 'Advanced Skin Health Consultation',
    description: 'Every prescription skincare client begins with the Advanced Skin Health Consultation \u2014 a full clinical assessment that establishes barrier integrity, inflammatory patterns, pigmentation activity, hormonal context and treatment readiness. The consultation determines whether prescription skincare is appropriate, which system is indicated, at what concentration and in what sequence within the programme.',
  },
  {
    step: 2,
    title: 'Prescription Documentation',
    description: 'The prescription is documented in the written treatment plan \u2014 the system, the clinical rationale, the morning and evening protocol, the adjustment period, the review timeline and what the client should expect at each stage.',
  },
  {
    step: 3,
    title: 'Programme Integration',
    description: 'The prescription skincare protocol is matched to the client\u2019s Signature programme \u2014 positioned in the correct phase and at the appropriate concentration for where the skin is in its clinical programme at that point.',
  },
  {
    step: 4,
    title: 'Review and Adjustment',
    description: 'The prescription is reviewed at programme appointments. As the skin responds the protocol is adjusted. A client who began Phase 1 on Obagi Hydrate Luxe may transition to Obagi Nu-Derm Fx in Phase 2 as her barrier stabilises.',
  },
  {
    step: 5,
    title: 'Replenishment',
    description: 'Replenishment of prescription skincare products is managed through the clinic directly \u2014 not through third-party retailers. All products dispensed through ULANDA are genuine and sourced directly from authorised distributors.',
  },
];

export default function PrescriptionSkincare() {
  return (
    <>
      <Head>
        <title>Prescription Skincare Ware | ULANDA Skin Clinic</title>
        <meta name="description" content="Prescription skincare clinic in Ware, Hertfordshire. Medical-grade skincare prescribed by a Nurse Prescriber within a structured clinical programme." />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments/prescription-skincare" />
        <script type="application/ld+json">{JSON.stringify(prescriptionSchemas)}</script>
      </Head>

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 text-primary/70 hover:text-primary mb-6 transition-colors text-sm"
              >
                &larr; Back to All Treatments
              </Link>
              <h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-4">
                <HeroText>Prescription Skincare &mdash; Medical Grade Skincare Prescribed by a Nurse Independent Prescriber in Ware, Hertfordshire</HeroText>
              </h1>
              <p className="text-lg text-base-content/60 mb-2">Ware, Hertfordshire</p>
              <p className="text-xl md:text-2xl font-light text-primary mb-8 leading-relaxed">
                Skin Understood. Then Transformed.
              </p>
            </div>
            <FadeInWhenVisible delay={0.3}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/img/treatments/obagi-medical.webp"
                  alt="Prescription skincare consultation at ULANDA skin clinic in Ware, Hertfordshire"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Prescription skincare is not a product category. It is a clinical discipline &mdash; one that requires assessment before prescribing, clinical oversight during use and review at regular intervals to adjust the protocol as the skin responds.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  ULANDA is an authorised prescription skincare clinic in Ware, Hertfordshire &mdash; led by Helen Balogun MSc, RN, RM, NIP, Nurse Independent Prescriber with over 20 years of clinical experience across nursing, midwifery, women&rsquo;s health and medical aesthetics. Every prescription skincare protocol at ULANDA begins with a full clinical assessment and is documented in a written treatment plan that is reviewed and adjusted throughout the programme.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Prescription skincare at ULANDA is not available as a retail purchase. It is prescribed &mdash; following assessment of your skin barrier, inflammatory patterns, pigmentation activity, hormonal context and treatment goals &mdash; as a clinical component of your programme.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/60 text-sm tracking-wide mb-8">
                  Authorised prescription skincare clinic &middot; Nurse Independent Prescriber &middot; Ware, Hertfordshire
                </p>
                <div className="text-center md:text-left">
                  <a
                    href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-white"
                  >
                    Book Your Advanced Skin Health Consultation &rarr;
                  </a>
                  <p className="text-base-content/60 text-sm mt-3">&pound;175 &middot; Fully redeemable against your treatment plan</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Section 1: Why Prescription Skincare Requires Clinical Oversight */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Why Prescription Skincare Requires Clinical Oversight</h2>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.1}>
                <h3 className="text-xl font-serif text-base-content mb-4">The Difference Between Medical Grade and Over the Counter</h3>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  The skincare market is vast and the marketing language that surrounds it is frequently imprecise. Products described as &ldquo;clinical,&rdquo; &ldquo;professional&rdquo; or &ldquo;advanced&rdquo; may contain active ingredients at concentrations that are genuinely meaningful &mdash; or they may contain those same ingredients at concentrations too low to produce the cellular changes they claim.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Prescription skincare is different in a structurally important way. Certain ingredients &mdash; hydroquinone, tretinoin, high-strength retinoids, regulated acids &mdash; are restricted precisely because their potency is real. At therapeutic concentrations these ingredients produce genuine cellular change: they accelerate skin cell turnover, regulate melanin production, stimulate collagen synthesis and modulate inflammatory behaviour in ways that over-the-counter formulations cannot replicate.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  That potency is also why they require a prescribing clinician. Prescribing requires the authority and the clinical responsibility to assess whether an ingredient is appropriate for a specific client&rsquo;s skin, at a specific concentration, at a specific point in their clinical programme. It is not a transaction. It is a clinical decision.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <h3 className="text-xl font-serif text-base-content mb-4">Why Assessment Before Prescribing Matters</h3>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Prescription skincare introduced without assessment carries specific clinical risks that are well-documented and entirely avoidable.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">
                  <strong>Barrier disruption.</strong> Prescription-strength actives introduced to barrier-compromised skin produce inflammatory responses that worsen the presenting condition rather than addressing it. The barrier must be assessed &mdash; and where necessary stabilised &mdash; before prescription actives are introduced.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">
                  <strong>Pigmentation rebound.</strong> Prescription pigmentation correction systems require consistent UV protection and appropriate use protocols. Without clinical guidance, incorrect application or premature discontinuation produces pigmentation rebound that is worse than the original presentation.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">
                  <strong>Inflammatory escalation.</strong> Clients with inflammatory skin presentations &mdash; rosacea, reactive skin, hormonal sensitivity &mdash; require careful selection of prescription actives and gradual introduction protocols. Prescription skincare introduced at full strength to inflammatory skin escalates rather than resolves the presenting condition.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  <strong>Incorrect system selection.</strong> The appropriate prescription skincare system depends on the specific mechanism producing the presenting concern &mdash; not its visible appearance. A pigmentation presentation driven by UV damage requires a different clinical response from one driven by hormonal activity. Assessment establishes the mechanism. The prescription addresses the mechanism &mdash; not the surface.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed">
                  At ULANDA, prescription skincare is introduced within a documented clinical programme following full assessment of barrier integrity, inflammatory load, hormonal context and treatment readiness. This is how prescription skincare produces the results it is capable of.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Section 2: The Prescription Skincare Brands at ULANDA */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-8">The Prescription Skincare Brands at ULANDA</h2>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.1}>
                <div className="bg-base-100 rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm mb-8">
                  <h3 className="text-xl font-serif text-base-content mb-3">Obagi Medical</h3>
                  <p className="text-base-content/80 leading-relaxed mb-4">
                    Obagi Medical is the world&rsquo;s leading physician-dispensed skincare system &mdash; formulated to influence skin behaviour at the cellular level rather than improving surface appearance alone. ULANDA is an authorised Obagi Medical Practitioner and stockist, with prescribing authority for the full Obagi Medical range including the Rx systems that contain prescription-strength hydroquinone and tretinoin.
                  </p>
                  <p className="text-base-content/80 leading-relaxed mb-4">
                    <strong>Systems available:</strong> Obagi Nu-Derm Fx and Rx &middot; Obagi Rosaclear &middot; Obagi-C Fx System &middot; Professional-C Serums &middot; Obagi Elastiderm Range &middot; Obagi Hydrate and Hydrate Luxe &middot; Obagi Sun Shield Matte SPF 50
                  </p>
                  <p className="text-base-content/80 leading-relaxed mb-6">
                    <strong>Indicated for:</strong> pigmentation and uneven tone &middot; rosacea and redness &middot; photoageing &middot; structural skin ageing &middot; barrier-compromised skin &middot; hormonal skin changes
                  </p>
                  <Link
                    to="/treatments/prescription-skincare/obagi-medical"
                    className="btn btn-primary text-white"
                  >
                    Explore Obagi Medical at ULANDA &rarr;
                  </Link>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="bg-base-100/50 rounded-xl p-6 md:p-8 border border-dashed border-primary/20">
                  <h3 className="text-xl font-serif text-base-content/60 mb-3">Further Prescription Skincare Brands &mdash; Coming Soon</h3>
                  <p className="text-base-content/50 leading-relaxed">
                    ULANDA is expanding its prescription skincare programme. Additional clinically validated brands will be introduced as the programme develops. Each brand will be selected based on clinical evidence, formulation integrity and compatibility with the ULANDA barrier-first treatment philosophy.
                  </p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Section 3: How Prescription Skincare Is Integrated at ULANDA */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">How Prescription Skincare Is Integrated at ULANDA</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Prescription skincare at ULANDA functions as the homecare extension of the clinical programme &mdash; not as a standalone product purchase. The relationship between the in-clinic treatments and the at-home prescription protocol is clinical and intentional.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  <strong>In clinic:</strong> treatments address the skin&rsquo;s biological mechanisms &mdash; barrier restoration, regenerative stimulation, structural support &mdash; in the controlled clinical environment where the full range of clinical tools is available.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  <strong>At home:</strong> the prescription skincare protocol maintains and extends the biological changes produced in clinic between appointments &mdash; keeping the barrier in the state the clinic has worked to achieve, supporting the cellular turnover that clinical treatments stimulate, protecting against the inflammatory and UV drivers that would otherwise erode results.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  A client who attends every programme appointment but uses no prescription homecare protocol is working at reduced efficiency &mdash; because the clinical environment between appointments is returning the skin toward its baseline rather than maintaining the biological gains produced by treatment.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <p className="text-base-content/80 text-lg leading-relaxed">
                  A client whose prescription homecare protocol is correctly matched to her clinical programme and her skin&rsquo;s presenting state compounds her in-clinic results at home, every day, between appointments.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Section 4: The ULANDA Prescription Skincare Process */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-8">The ULANDA Prescription Skincare Process</h2>
              </FadeInWhenVisible>
              <div className="space-y-6">
                {prescriptionProcess.map((item, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.08}>
                    <div className="bg-base-100 rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm">
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </span>
                        <div>
                          <h3 className="text-xl font-serif text-base-content mb-2">{item.title}</h3>
                          <p className="text-base-content/80 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Prescription Skincare and the Signature Programmes */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-8">Prescription Skincare and the Signature Programmes</h2>
              </FadeInWhenVisible>
              <div className="grid md:grid-cols-2 gap-6">
                {signatureProgrammes.map((programme, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.08}>
                    <Link
                      to={programme.path}
                      className="group block bg-secondary/30 rounded-xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full"
                    >
                      <h3 className="font-serif text-lg text-base-content group-hover:text-primary transition-colors leading-snug mb-3">
                        {programme.name}
                      </h3>
                      <p className="text-sm text-base-content/60 leading-relaxed">{programme.homecare}</p>
                    </Link>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Accessing Prescription Skincare at ULANDA */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Accessing Prescription Skincare at ULANDA</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Prescription skincare is accessed through the Advanced Skin Health Consultation. This is the clinical assessment that establishes what your skin actually needs &mdash; the system, the concentration, the phase timing and the integration with your clinical programme &mdash; before any prescription is written.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  The consultation fee is &pound;175 and is fully redeemable against your treatment plan when you proceed &mdash; meaning for clients who begin a programme including prescription skincare, the consultation carries no net cost.
                </p>
                <div className="bg-base-100 rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm text-center">
                  <h3 className="text-xl font-serif text-base-content mb-2">Advanced Skin Health Consultation</h3>
                  <p className="text-3xl font-bold text-base-content mb-1">&pound;175 &middot; Fully redeemable against your treatment plan</p>
                  <p className="text-base-content/60 mb-4">Free parking on site &middot; Ware, Hertfordshire &middot; Consultations limited each week</p>
                  <a
                    href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-white"
                  >
                    Book Your Advanced Skin Health Consultation &rarr;
                  </a>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-8">Frequently Asked Questions</h2>
              </FadeInWhenVisible>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.05}>
                    <div className="collapse collapse-arrow bg-base-100 border border-primary/10 rounded-lg">
                      <input type="radio" name="prescription-faq" defaultChecked={index === 0} />
                      <div className="collapse-title text-lg font-medium font-sans text-base-content">
                        {faq.question}
                      </div>
                      <div className="collapse-content">
                        <p className="text-base-content/80 font-light leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Areas Served</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="text-base-content/80 text-lg leading-relaxed mb-8">
                  {areasServed.map((area, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="mx-2">&middot;</span>}
                      {area.link ? (
                        <Link
                          to={area.link}
                          className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                        >
                          {area.name}
                        </Link>
                      ) : (
                        <span>{area.name}</span>
                      )}
                    </React.Fragment>
                  ))}
                  <span className="mx-2">&middot;</span>
                  <span>and the wider East Hertfordshire SG12 corridor</span>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/60 text-sm">
                  ULANDA is a nurse-led prescription skincare clinic in Ware specialising in medical aesthetics and barrier-first skin health.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">Advanced Skin Health Consultation</h2>
              <div className="mt-6 space-y-2 mb-8">
                <p className="text-4xl font-bold text-base-content">&pound;175</p>
                <p className="text-base-content/80 font-medium">Redeemable against treatment plan</p>
              </div>
              <a
                href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white shadow-md btn-lg"
              >
                Book Advanced Skin Health Consultation &rarr;
              </a>
            </FadeInWhenVisible>
          </div>
        </section>
        <ConsultationCTA />
      </div>
    </>
  );
}
