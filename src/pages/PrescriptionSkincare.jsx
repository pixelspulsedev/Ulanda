import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
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
          "name": "What is prescription skincare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prescription skincare contains active ingredients at concentrations that require clinical supervision. These formulations influence cellular skin behaviour rather than simply improving the surface appearance of the skin."
          }
        },
        {
          "@type": "Question",
          "name": "Why does prescription skincare require a consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prescription-strength ingredients affect skin cell turnover, pigment regulation, collagen stimulation and inflammatory behaviour. Without proper assessment, there is a risk of barrier disruption, irritation and pigmentation rebound."
          }
        },
        {
          "@type": "Question",
          "name": "Which prescription skincare brands does ULANDA stock?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ULANDA currently stocks Obagi Medical, one of the world's most recognised physician-dispensed skincare ranges. Further brands will be introduced as the programme expands."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy prescription skincare without a consultation at ULANDA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. All prescription skincare at ULANDA is dispensed following clinical assessment and documented within a structured treatment plan."
          }
        },
        {
          "@type": "Question",
          "name": "How is prescription skincare integrated into my treatment programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prescription skincare is prescribed as part of your overall treatment plan alongside in-clinic procedures. The homecare protocol is adjusted at each review appointment as your skin responds."
          }
        },
        {
          "@type": "Question",
          "name": "Is ULANDA a prescription skincare clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ULANDA is led by a Nurse Independent Prescriber with the authority to prescribe, dispense and supervise prescription skincare as part of structured clinical programmes."
          }
        },
        {
          "@type": "Question",
          "name": "How long before I see results from prescription skincare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visible changes typically develop over 6 to 12 weeks depending on the system prescribed, the presenting condition and the skin's baseline barrier stability."
          }
        }
      ]
    }
  ]
};

const signatureProgrammes = [
  {
    name: 'Skin Barrier Repair & Recovery',
    path: '/signature/skin-barrier-repair-recovery',
    homecare: 'Barrier-compatible hydration and gentle barrier-supportive systems prescribed to stabilise skin before corrective treatments begin.',
  },
  {
    name: 'Rosacea & Redness Control',
    path: '/signature/rosacea-redness-control',
    homecare: 'Obagi Rosaclear System prescribed to target inflammatory pathways and manage chronic redness alongside in-clinic anti-inflammatory protocols.',
  },
  {
    name: 'Menopause Skin Rebuild',
    path: '/signature/menopause-skin-rebuild',
    homecare: 'Obagi Nu-Derm Fx transitioning to Rx as barrier stability allows, supporting pigmentation correction and cellular renewal through hormonal transition.',
  },
  {
    name: 'Photoaging & Skin Architecture',
    path: '/signature/photoaging-skin-architecture',
    homecare: 'Obagi-C Fx System and Professional-C Serums prescribed to support antioxidant protection, brightening and photoageing correction.',
  },
  {
    name: 'Structural Skin Regeneration',
    path: '/signature/structural-skin-regeneration',
    homecare: 'Obagi Elastiderm range prescribed to support collagen and elastin integrity alongside regenerative in-clinic treatments.',
  },
  {
    name: 'Under-Eye Renewal',
    path: '/signature/under-eye-renewal',
    homecare: 'Obagi Elastiderm Eye products prescribed to support periorbital skin firmness and resilience as part of the under-eye regenerative programme.',
  },
];

const faqs = [
  {
    question: 'What is prescription skincare?',
    answer: 'Prescription skincare contains active ingredients at concentrations that require clinical supervision. These formulations influence cellular skin behaviour \u2014 cell turnover, pigment regulation, collagen stimulation and inflammatory response \u2014 rather than simply improving the surface appearance of the skin.',
  },
  {
    question: 'Why does prescription skincare require a consultation?',
    answer: 'Prescription-strength ingredients affect skin cell turnover, pigment regulation, collagen stimulation and inflammatory behaviour. Without proper assessment of barrier stability, hormonal context and treatment readiness, there is a risk of barrier disruption, irritation and pigmentation rebound.',
  },
  {
    question: 'Which prescription skincare brands does ULANDA stock?',
    answer: 'ULANDA currently stocks Obagi Medical, one of the world\u2019s most recognised physician-dispensed skincare ranges. Further brands will be introduced as the programme expands.',
  },
  {
    question: 'Can I buy prescription skincare without a consultation at ULANDA?',
    answer: 'No. All prescription skincare at ULANDA is dispensed following clinical assessment and documented within a structured treatment plan. Products are not sold over the counter.',
  },
  {
    question: 'How is prescription skincare integrated into my treatment programme?',
    answer: 'Prescription skincare is prescribed as part of your overall treatment plan alongside in-clinic procedures. The homecare protocol supports and extends the results achieved during appointments and is adjusted at each review as your skin responds.',
  },
  {
    question: 'Is ULANDA a prescription skincare clinic?',
    answer: 'Yes. ULANDA is led by a Nurse Independent Prescriber with the authority to prescribe, dispense and supervise prescription skincare as part of structured clinical programmes in Ware, Hertfordshire.',
  },
  {
    question: 'How long before I see results from prescription skincare?',
    answer: 'Visible changes typically develop over 6 to 12 weeks depending on the system prescribed, the presenting condition and the skin\u2019s baseline barrier stability.',
  },
];

const areasServed = [
  { name: 'Hertfordshire', link: '/contact/locations/aesthetic-clinic-hertfordshire' },
  { name: 'Hertford', link: '/contact/locations/aesthetic-clinic-hertford' },
  { name: 'Hoddesdon', link: '/contact/locations/aesthetic-clinic-hoddesdon' },
  { name: 'Broxbourne', link: '/contact/locations/aesthetic-clinic-broxbourne' },
  { name: "Bishop\u2019s Stortford", link: '/contact/locations/aesthetic-clinic-bishops-stortford' },
  { name: 'Cheshunt', link: '/contact/locations/aesthetic-clinic-cheshunt' },
  { name: 'Stevenage', link: '/contact/locations/aesthetic-clinic-stevenage' },
  { name: 'Welwyn Garden City', link: '/contact/locations/aesthetic-clinic-welwyn-garden-city' },
  { name: 'Sawbridgeworth', link: '/contact/locations/aesthetic-clinic-sawbridgeworth' },
  { name: 'Harlow', link: '/contact/locations/aesthetic-clinic-harlow' },
];

const prescriptionProcess = [
  {
    step: 1,
    title: 'Advanced Skin Health Consultation',
    description: 'A nurse-led clinical assessment evaluates barrier integrity, inflammatory patterns, pigmentation activity, hormonal context and treatment readiness.',
  },
  {
    step: 2,
    title: 'Clinical Prescription',
    description: 'The appropriate prescription skincare system is selected based on your assessment. The system, concentration, protocol and adjustment timeline are documented in your treatment plan.',
  },
  {
    step: 3,
    title: 'Dispensing & Protocol Guidance',
    description: 'Products are dispensed directly through the clinic with detailed guidance on morning and evening application, expected responses and when to contact the clinic.',
  },
  {
    step: 4,
    title: 'Programme Integration',
    description: 'Prescription skincare is sequenced alongside your in-clinic treatments. The homecare protocol supports and extends the clinical results achieved during appointments.',
  },
  {
    step: 5,
    title: 'Review & Adjustment',
    description: 'Your prescription is reviewed at each programme appointment. Systems are adjusted, concentrations modified and protocols refined as your skin responds and strengthens.',
  },
];

export default function PrescriptionSkincare() {
  return (
    <>
      <Head>
        <title>Prescription Skincare Ware | Medical Grade Skincare Hertfordshire | ULANDA Skin Clinic</title>
        <meta name="description" content="ULANDA is an authorised prescription skincare clinic in Ware, Hertfordshire. Medical grade prescription skincare prescribed by a Nurse Independent Prescriber as part of a structured clinical programme. Currently stocking Obagi Medical." />
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
                <HeroText>Prescription Skincare &mdash; ULANDA Skin Clinic</HeroText>
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
                  ULANDA is an authorised prescription skincare clinic in Ware, Hertfordshire. Prescription skincare is prescribed by a Nurse Independent Prescriber as part of a structured clinical programme &mdash; not sold over the counter.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Prescription-strength formulations contain active ingredients at concentrations that influence cellular skin behaviour &mdash; cell turnover, pigment regulation, collagen stimulation and inflammatory response. These ingredients require clinical assessment and supervision to ensure they are introduced safely and at the right stage of your programme.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  At ULANDA, prescription skincare is never prescribed in isolation. It is integrated into your treatment plan alongside in-clinic procedures, with the homecare protocol supporting and extending the clinical results achieved during appointments. The prescription is reviewed and adjusted as your skin responds.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/60 text-sm tracking-wide mb-8">
                  Authorised prescription skincare clinic &middot; Nurse Independent Prescriber &middot; Ware, Hertfordshire
                </p>
                <div className="text-center md:text-left">
                  <Link to="/treatments/advanced-skin-health-consultation" className="btn btn-primary text-white">
                    Book Advanced Skin Health Consultation &rarr;
                  </Link>
                  <p className="text-base-content/60 text-sm mt-3">&pound;175 &mdash; Fully redeemable against treatment plan</p>
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
                <h3 className="text-xl font-serif text-base-content mb-4">How Prescription Skincare Differs from Over-the-Counter Products</h3>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Over-the-counter skincare products are formulated at concentrations that are safe for unsupervised use. Prescription skincare contains active ingredients &mdash; such as hydroquinone, tretinoin and high-strength retinoids &mdash; at concentrations that directly influence skin cell turnover, pigment production, collagen synthesis and inflammatory signalling.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  These formulations are designed to produce measurable biological change within the skin. That level of potency is where the clinical benefit lies &mdash; but it is also where the risk of adverse outcomes increases without appropriate assessment and monitoring.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <h3 className="text-xl font-serif text-base-content mb-4">The Risks of Unsupervised Prescription Skincare</h3>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Introducing prescription-strength ingredients without assessment of barrier integrity, inflammatory load and hormonal context can result in barrier disruption, chronic irritation, pigmentation rebound and reduced tolerance for future treatments.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  At ULANDA, prescription skincare is introduced within a Skin Barrier Renewal Protocol to protect skin integrity and improve long-term treatment outcomes.
                </p>
                <Link to="/treatments/skin-barrier-renewal-protocol" className="btn btn-primary text-white">
                  Explore the Skin Barrier Renewal Protocol &rarr;
                </Link>
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
                    Obagi Medical is widely recognised as one of the world&rsquo;s leading physician-dispensed skincare ranges. Its systems are designed to influence cellular skin behaviour &mdash; targeting pigmentation, barrier function, collagen stimulation and inflammatory regulation at concentrations that require clinical prescription and monitoring.
                  </p>
                  <p className="text-base-content/80 leading-relaxed mb-4">
                    ULANDA is an authorised Obagi Medical Practitioner &amp; stockist in Ware, Hertfordshire. Obagi systems are prescribed following clinical assessment and dispensed as part of documented treatment plans.
                  </p>
                  <p className="text-base-content/80 leading-relaxed mb-6">
                    Systems available include Obagi Nu-Derm, Rosaclear, Obagi-C Fx, Professional-C Serums, Elastiderm, Hydrate &amp; Hydrate Luxe and Sun Shield Matte SPF 50.
                  </p>
                  <Link
                    to="/treatments/prescription-skincare/obagi-medical"
                    className="btn btn-primary text-white"
                  >
                    View Obagi Medical at ULANDA &rarr;
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
                  Prescription skincare at ULANDA is not a standalone purchase. It is prescribed as one component of a structured clinical programme that combines in-clinic procedures with a supervised homecare protocol.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  The homecare protocol supports and extends the results achieved during appointments. Prescription products are selected to work alongside the specific treatments in your programme &mdash; preparing the skin before procedures, supporting recovery between appointments and maintaining results long-term.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  The prescription is reviewed and adjusted at each programme appointment. Systems may be stepped up in concentration, transitioned between formulations or paused depending on how your skin responds and what your treatment plan requires at each stage.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="text-base-content/80 text-lg leading-relaxed">
                  This integration ensures that the products you use at home are clinically aligned with the treatments you receive in clinic &mdash; producing more consistent, predictable and sustainable results than prescription skincare used in isolation.
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
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-4">Prescription Skincare and the Signature Programmes</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  Prescription skincare is integrated into each of the six ULANDA Signature programmes. The homecare protocol is tailored to the clinical objectives of each Signature and adjusted as your programme progresses.
                </p>
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
                  Prescription skincare is accessed through the Advanced Skin Health Consultation. This nurse-led clinical assessment evaluates your barrier integrity, inflammatory patterns, pigmentation activity, hormonal context and treatment goals to determine which prescription system is appropriate, at what concentration, and at what point in your programme it is introduced.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  You will never be pressured into purchasing products. Recommendations are based only on what your skin is clinically ready for.
                </p>
                <div className="bg-base-100 rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm text-center">
                  <h3 className="text-xl font-serif text-base-content mb-2">Advanced Skin Health Consultation</h3>
                  <p className="text-3xl font-bold text-base-content mb-1">&pound;175</p>
                  <p className="text-base-content/60 mb-4">Redeemable against treatment plan</p>
                  <Link to="/treatments/advanced-skin-health-consultation" className="btn btn-primary text-white">
                    Book Consultation &rarr;
                  </Link>
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
                      <Link
                        to={area.link}
                        className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                      >
                        {area.name}
                      </Link>
                    </React.Fragment>
                  ))}
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
      </div>
    </>
  );
}
