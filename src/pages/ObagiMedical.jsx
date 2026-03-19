import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const obagiSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Obagi Medical",
          "item": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical/#service",
      "name": "Obagi Medical Prescription Skincare",
      "serviceType": "Prescription Skincare Treatment",
      "url": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical",
      "description": "Prescription Obagi Medical skincare systems prescribed as part of personalised skin health programmes including pigmentation correction, barrier restoration and regenerative skin support.",
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
        { "@type": "City", "name": "Broxbourne" },
        { "@type": "Place", "name": "Wormley" },
        { "@type": "Place", "name": "Turnford" },
        { "@type": "City", "name": "Hoddesdon" },
        { "@type": "City", "name": "Cheshunt" },
        { "@type": "City", "name": "Ware" },
        { "@type": "City", "name": "Hertford" },
        { "@type": "City", "name": "Bishop's Stortford" },
        { "@type": "Place", "name": "Stanstead Abbotts" },
        { "@type": "City", "name": "Welwyn Garden City" },
        { "@type": "City", "name": "Stevenage" },
        { "@type": "AdministrativeArea", "name": "East Hertfordshire" },
        { "@type": "AdministrativeArea", "name": "Hertfordshire" }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceLocation": {
          "@type": "Place",
          "name": "ULANDA Skin Clinic",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6 Hampden Hill",
            "addressLocality": "Ware",
            "addressRegion": "Hertfordshire",
            "postalCode": "SG12 7JT",
            "addressCountry": "GB"
          }
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I buy Obagi products without a consultation at ULANDA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. At ULANDA, Obagi Medical products are prescribed following clinical assessment and dispensed as part of a documented treatment plan."
          }
        },
        {
          "@type": "Question",
          "name": "Which Obagi system is right for my skin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The appropriate Obagi system depends on your skin condition, barrier stability and treatment goals. The consultation determines the correct system and concentration."
          }
        },
        {
          "@type": "Question",
          "name": "Is ULANDA an authorised Obagi Medical stockist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ULANDA is an authorised Obagi Medical stockist in Ware, Hertfordshire and sources products directly from authorised distributors."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an Obagi programme take to produce results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visible changes often develop over 6 to 12 weeks depending on the system prescribed and the presenting condition."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical#nuderm",
      "name": "Obagi Nu-Derm System",
      "brand": { "@type": "Brand", "name": "Obagi Medical" },
      "manufacturer": { "@type": "Organization", "name": "Obagi Medical" },
      "category": "Prescription Skincare",
      "description": "Prescription-led skincare system used to support pigmentation correction, uneven tone management and cellular skin renewal as part of a clinically supervised programme.",
      "seller": { "@type": "MedicalBusiness", "name": "ULANDA Skin Clinic", "url": "https://www.ulanda.co.uk" }
    },
    {
      "@type": "Product",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical#rosaclear",
      "name": "Obagi Rosaclear System",
      "brand": { "@type": "Brand", "name": "Obagi Medical" },
      "manufacturer": { "@type": "Organization", "name": "Obagi Medical" },
      "category": "Medical Skincare",
      "description": "Clinically dispensed skincare system used to support rosacea-prone, redness-prone and inflammatory skin presentations within a structured treatment plan.",
      "seller": { "@type": "MedicalBusiness", "name": "ULANDA Skin Clinic", "url": "https://www.ulanda.co.uk" }
    },
    {
      "@type": "Product",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical#obagicfx",
      "name": "Obagi-C Fx System",
      "brand": { "@type": "Brand", "name": "Obagi Medical" },
      "manufacturer": { "@type": "Organization", "name": "Obagi Medical" },
      "category": "Medical Skincare",
      "description": "Vitamin C-based medical skincare system used to support brightening, antioxidant protection and photoageing management.",
      "seller": { "@type": "MedicalBusiness", "name": "ULANDA Skin Clinic", "url": "https://www.ulanda.co.uk" }
    },
    {
      "@type": "Product",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical#professionalc",
      "name": "Obagi Professional-C Serums",
      "brand": { "@type": "Brand", "name": "Obagi Medical" },
      "manufacturer": { "@type": "Organization", "name": "Obagi Medical" },
      "category": "Medical Skincare",
      "description": "Professional vitamin C serums used within clinically guided skincare programmes to support antioxidant defence and skin brightness.",
      "seller": { "@type": "MedicalBusiness", "name": "ULANDA Skin Clinic", "url": "https://www.ulanda.co.uk" }
    },
    {
      "@type": "Product",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical#elastiderm",
      "name": "Obagi Elastiderm Range",
      "brand": { "@type": "Brand", "name": "Obagi Medical" },
      "manufacturer": { "@type": "Organization", "name": "Obagi Medical" },
      "category": "Medical Skincare",
      "description": "Medical skincare range used to support skin firmness, elasticity and structural resilience as part of regenerative care.",
      "seller": { "@type": "MedicalBusiness", "name": "ULANDA Skin Clinic", "url": "https://www.ulanda.co.uk" }
    },
    {
      "@type": "Product",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical#hydrate",
      "name": "Obagi Hydrate and Hydrate Luxe",
      "brand": { "@type": "Brand", "name": "Obagi Medical" },
      "manufacturer": { "@type": "Organization", "name": "Obagi Medical" },
      "category": "Medical Skincare",
      "description": "Barrier-supporting moisturising products used within clinically guided skin programmes for hydration and skin comfort.",
      "seller": { "@type": "MedicalBusiness", "name": "ULANDA Skin Clinic", "url": "https://www.ulanda.co.uk" }
    },
    {
      "@type": "Product",
      "@id": "https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical#sunshield",
      "name": "Obagi Sun Shield Matte Broad Spectrum SPF 50",
      "brand": { "@type": "Brand", "name": "Obagi Medical" },
      "manufacturer": { "@type": "Organization", "name": "Obagi Medical" },
      "category": "Sun Protection",
      "description": "Broad spectrum sunscreen used as a clinically essential part of active skincare and pigmentation management programmes.",
      "seller": { "@type": "MedicalBusiness", "name": "ULANDA Skin Clinic", "url": "https://www.ulanda.co.uk" }
    }
  ]
};

const obagiSystems = [
  {
    name: 'Obagi Nu-Derm System',
    description: 'The Nu-Derm System is Obagi\u2019s most recognised corrective skincare programme. It uses a sequenced combination of ingredients designed to influence skin cell behaviour and improve pigmentation patterns and uneven tone. The Rx version \u2014 containing prescription hydroquinone and tretinoin \u2014 is available through clinical prescription.',
    indicatedFor: ['Hyperpigmentation', 'Uneven skin tone', 'Early signs of ageing', 'Acne and congestion', 'Skin texture irregularities'],
    integratedWith: [
      { name: 'Photoaging & Skin Architecture programme', path: '/signature/photoaging-skin-architecture' },
      { name: 'Menopause Skin Rebuild programme', path: '/signature/menopause-skin-rebuild' },
    ],
  },
  {
    name: 'Obagi Rosaclear System',
    description: 'The Rosaclear System is designed for rosacea-prone or chronically inflamed skin. It targets both visible redness and inflammatory pathways. Often used alongside the ULANDA Rosacea & Redness Control programme.',
    indicatedFor: ['Rosacea', 'Persistent facial redness', 'Inflammatory skin conditions'],
    integratedWith: [
      { name: 'Rosacea & Redness Control programme', path: '/signature/rosacea-redness-control' },
    ],
  },
  {
    name: 'Obagi-C Fx System & Professional-C Serums',
    description: 'Vitamin C systems designed to support antioxidant protection and pigmentation management. Professional-C serums are available in multiple concentrations depending on skin stability.',
    indicatedFor: ['UV damage', 'Pigmentation', 'Skin dullness', 'Early collagen decline'],
    integratedWith: [],
  },
  {
    name: 'Obagi Elastiderm Range',
    description: 'Elastiderm formulations support collagen and elastin integrity. Often prescribed alongside regenerative treatments.',
    indicatedFor: ['Loss of elasticity', 'Structural ageing', 'Under-eye resilience'],
    integratedWith: [
      { name: 'Structural Skin Regeneration programme', path: '/signature/structural-skin-regeneration' },
      { name: 'Under-Eye Renewal programme', path: '/signature/under-eye-renewal' },
    ],
  },
  {
    name: 'Obagi Hydrate & Hydrate Luxe',
    description: 'Barrier-support moisturisers designed for sensitive or compromised skin. Often prescribed during early barrier stabilisation phases.',
    indicatedFor: ['Barrier dysfunction', 'Reactive skin', 'Treatment fatigue'],
    integratedWith: [
      { name: 'Skin Barrier Repair & Recovery programme', path: '/signature/skin-barrier-repair-recovery' },
    ],
  },
  {
    name: 'Obagi Sun Shield Matte SPF 50',
    description: 'UV protection is essential during any active skincare programme. Sun Shield Matte SPF 50 is prescribed as part of Obagi programmes to protect results and reduce pigment relapse.',
    indicatedFor: [],
    integratedWith: [],
  },
];

const faqs = [
  {
    question: 'Can I buy Obagi products without a consultation?',
    answer: 'No. At ULANDA, Obagi Medical products are prescribed following clinical assessment and are dispensed as part of a documented treatment plan.',
  },
  {
    question: 'Which Obagi system is right for my skin?',
    answer: 'The appropriate system depends on your skin condition, barrier stability and treatment goals. The consultation determines the correct system and concentration.',
  },
  {
    question: 'Is ULANDA an authorised Obagi stockist?',
    answer: 'Yes. ULANDA is an authorised Obagi Medical Practitioner & stockist in Ware, Hertfordshire and sources products directly from authorised distributors.',
  },
  {
    question: 'How long does an Obagi programme take to produce results?',
    answer: 'Visible changes often develop over 6\u201312 weeks depending on the system prescribed and the presenting condition.',
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

export default function ObagiMedical() {
  return (
    <>
      <Head>
        <title>Obagi Medical Prescription Skincare Ware | Obagi Stockist Hertfordshire | ULANDA Skin Clinic</title>
        <meta name="description" content="Authorised Obagi Medical stockist in Ware, Hertfordshire. Prescription Obagi skincare prescribed by a Nurse Independent Prescriber as part of personalised clinical skin programmes." />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments/prescription-skincare/obagi-medical" />
        <script type="application/ld+json">{JSON.stringify(obagiSchemas)}</script>
      </Head>

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Link
                to="/treatments/prescription-skincare"
                className="inline-flex items-center gap-2 text-primary/70 hover:text-primary mb-6 transition-colors text-sm"
              >
                &larr; View all prescription skincare at ULANDA
              </Link>
              <h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-4">
                <HeroText>Obagi Medical — Prescription Skincare</HeroText>
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
                  alt="Obagi Medical prescription skincare at ULANDA skin clinic in Ware, Hertfordshire"
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
                <p className="text-base-content/80 text-lg leading-relaxed mb-3">
                  Part of the ULANDA{' '}
                  <Link to="/treatments/prescription-skincare" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                    Prescription Skincare
                  </Link>{' '}
                  programme.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  ULANDA is an authorised Obagi Medical Practitioner &amp; stockist in Ware, Hertfordshire &mdash; one of a limited number of clinics in East Hertfordshire with the prescribing authority required to dispense Obagi Medical&rsquo;s prescription skincare systems.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Obagi Medical is widely recognised as the world&rsquo;s leading physician-dispensed skincare range. Its formulations are designed to influence cellular skin behaviour rather than simply improve the surface appearance of the skin.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  At ULANDA, Obagi Medical systems are prescribed as part of a structured clinical programme following assessment of the skin barrier, inflammatory patterns, pigmentation activity, hormonal context and treatment goals.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Products are dispensed through the clinic as part of a documented treatment plan.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="text-base-content/60 text-sm tracking-wide mb-8">
                  Authorised Obagi Medical Practitioner &amp; stockist &middot; Prescription skincare &middot; Ware, Hertfordshire
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

        {/* Why Obagi Medical Requires a Prescribing Clinician Assessment */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Why Obagi Medical Requires a Prescribing Clinician Assessment</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Certain Obagi Medical systems contain prescription-strength ingredients such as:</p>
                <ul className="space-y-2 mb-8">
                  {['Hydroquinone', 'Tretinoin', 'High-strength retinoids'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">These ingredients influence:</p>
                <ul className="space-y-2 mb-8">
                  {['Skin cell turnover', 'Pigment regulation', 'Collagen stimulation', 'Inflammatory behaviour', 'Sebaceous activity'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Because of their potency, these treatments require appropriate guidance and monitoring. These formulations are often introduced gradually to ensure the skin barrier remains stable while treatment progresses. Prescription-strength skincare is commonly used within advanced skin care and medical aesthetics to prepare the skin for advanced treatments.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Introducing prescription skincare without proper assessment may increase the risk of:</p>
                <ul className="space-y-2 mb-8">
                  {['Barrier disruption', 'Irritation or inflammation', 'Pigmentation rebound', 'Reduced treatment tolerance'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-red-400 mt-1">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  At ULANDA, Obagi Medical prescription skincare is introduced within a Skin Barrier Renewal Protocol to protect skin integrity and improve long-term outcomes.
                </p>
                <Link to="/treatments/skin-barrier-renewal-protocol" className="btn btn-primary text-white">
                  Explore the Skin Barrier Renewal Protocol &rarr;
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Obagi Medical Systems Available at ULANDA */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-8">Obagi Medical Systems Available at ULANDA</h2>
              </FadeInWhenVisible>
              <div className="space-y-8">
                {obagiSystems.map((system, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.08}>
                    <div className="bg-base-100 rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm">
                      <h3 className="text-xl font-serif text-base-content mb-3">{system.name}</h3>
                      <p className="text-base-content/80 leading-relaxed mb-4">{system.description}</p>
                      {system.indicatedFor.length > 0 && (
                        <>
                          <p className="text-sm font-medium text-base-content/70 mb-2">
                            {system.name === 'Obagi Nu-Derm System' ? 'Commonly prescribed for:' : 'Indicated for:'}
                          </p>
                          <ul className="space-y-1 mb-4">
                            {system.indicatedFor.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-base-content/80">
                                <span className="text-primary mt-0.5">&bull;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {system.integratedWith.length > 0 && (
                        <>
                          <p className="text-sm font-medium text-base-content/70 mb-2">Often integrated into:</p>
                          <div className="flex flex-wrap gap-2">
                            {system.integratedWith.map((prog, i) => (
                              <Link
                                key={i}
                                to={prog.path}
                                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                              >
                                {prog.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Obagi Medical Is Prescribed at ULANDA */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">How Obagi Medical Is Prescribed at ULANDA</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Obagi Medical systems are prescribed following a full clinical assessment that establishes your barrier integrity, inflammatory patterns, pigmentation activity and hormonal context before any system is selected.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed">
                  Your prescription is documented in a written treatment plan that specifies the system prescribed, the morning and evening protocol, the adjustment timeline and the review schedule. The prescription is reviewed and adjusted at programme appointments as your skin responds.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* How to Access Obagi Medical at ULANDA */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">How to Access Obagi Medical at ULANDA</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Prescription skincare is accessed through the Advanced Skin Health Consultation. The consultation establishes your skin&rsquo;s current biological state &mdash; barrier integrity, inflammatory load, hormonal context and treatment readiness &mdash; and determines which Obagi system is appropriate, at what concentration, and at what point in your programme it is introduced.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  Your Obagi prescription is documented within your personalised treatment plan.
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

        {/* Clinical Insights on Skin Behaviour */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-4">Clinical Insights on Skin Behaviour</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">
                  Understanding how skin responds to environmental stress, hormonal change and treatment sequencing helps improve long-term outcomes.
                </p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  ULANDA publishes clinical insights exploring these topics in more detail.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg mb-4">Recommended reading:</p>
              </FadeInWhenVisible>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Why Barrier Repair Is Essential Before Structural Regeneration',
                    slug: 'barrier-repair-before-skin-regeneration',
                    description: 'Collagen stimulation depends on stable inflammatory signalling. Learn why barrier-first sequencing improves predictability.',
                  },
                  {
                    title: 'How to Repair a Damaged Skin Barrier Professionally',
                    slug: 'how-to-repair-damaged-skin-barrier',
                    description: 'A clinical guide to restoring lipid matrix integrity, reducing inflammatory instability and improving treatment tolerance.',
                  },
                  {
                    title: 'Where to Get a Medical Skin Consultation in Ware',
                    slug: 'medical-skin-consultation-ware',
                    description: 'What to expect from a clinician-led assessment of barrier integrity, inflammatory load and treatment suitability.',
                  },
                ].map((article, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                    <Link
                      to={`/blogs/${article.slug}`}
                      className="group block bg-secondary/30 rounded-xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <BookOpen className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <h3 className="font-serif text-lg text-base-content group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                      </div>
                      <p className="text-sm text-base-content/60 leading-relaxed pl-8">{article.description}</p>
                    </Link>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-8">Frequently Asked Questions</h2>
              </FadeInWhenVisible>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.05}>
                    <div className="collapse collapse-arrow bg-base-100 border border-primary/10 rounded-lg">
                      <input type="radio" name="obagi-faq" defaultChecked={index === 0} />
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
        <section className="py-12 md:py-16 bg-base-100">
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
                  ULANDA is a nurse-led skin clinic in Ware specialising in medical aesthetics and barrier-first skin health.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary/20">
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
