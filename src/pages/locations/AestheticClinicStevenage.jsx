import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import HeroText from '../../components/animations/HeroText';
import FadeInWhenVisible from '../../components/animations/FadeInWhenVisible';

const locationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.ulanda.co.uk/#medicalbusiness",
      "name": "ULANDA Skin Clinic",
      "url": "https://www.ulanda.co.uk",
      "image": "https://www.ulanda.co.uk/og-image.jpg",
      "telephone": "+44 7904 336031",
      "email": "info@ulanda.co.uk",
      "priceRange": "£££",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Uphaven, 6 Hampden Hill",
        "addressLocality": "Ware",
        "addressRegion": "Hertfordshire",
        "postalCode": "SG12 7JT",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.8094",
        "longitude": "-0.0316"
      },
      "areaServed": [
        { "@type": "City", "name": "Stevenage" },
        { "@type": "Place", "name": "Great Ashby" },
        { "@type": "Place", "name": "Knebworth" },
        { "@type": "City", "name": "Hitchin" },
        { "@type": "City", "name": "Welwyn Garden City" },
        { "@type": "City", "name": "Hertford" },
        { "@type": "City", "name": "Ware" },
        { "@type": "City", "name": "Hoddesdon" },
        { "@type": "City", "name": "Broxbourne" },
        { "@type": "AdministrativeArea", "name": "Hertfordshire" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:30",
        "closes": "18:30"
      },
      "sameAs": [
        "https://www.instagram.com/ulandamedspa",
        "https://www.facebook.com/ulandamedspa"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.ulanda.co.uk/locations/aesthetic-clinic-stevenage#breadcrumb",
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
          "name": "Contact",
          "item": "https://www.ulanda.co.uk/contact"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Skin Clinic Near Stevenage",
          "item": "https://www.ulanda.co.uk/locations/aesthetic-clinic-stevenage"
        }
      ]
    }
  ]
};

const skinConcerns = [
  {
    title: 'Damaged or compromised skin barrier',
    description: 'Barrier dysfunction can develop following over-exfoliation, strong skincare actives, chronic inflammation or hormonal change. During your consultation the barrier\u2019s current state is assessed before any repair or treatment programme begins because what is driving the compromise determines what the appropriate clinical response looks like.',
    link: '/conditions/dehydration-dullness-skin-recovery',
    linkText: 'Explore: Dehydration & Dullness',
  },
  {
    title: 'Pigmentation and uneven skin tone',
    description: 'Pigmentation often develops following inflammation, hormonal shifts or cumulative UV exposure. At ULANDA the underlying triggers are assessed before any treatment pathway is recommended because pigmentation driven by inflammation requires a different clinical response from pigmentation driven by sun damage.',
    link: '/conditions/pigmentation-and-skin-tone',
    linkText: 'Explore: Pigmentation & Skin Tone',
  },
  {
    title: 'Hormonal skin changes',
    description: 'Hormonal fluctuations across adult life \u2014 postpartum recovery, the shifts of the late 30s, hormonal transition \u2014 directly influence skin hydration, barrier function, collagen synthesis and inflammatory response. Consultation establishes the hormonal context as clinical data that shapes every treatment recommendation.',
    link: '/conditions/menopause-hormone-skin-changes',
    linkText: 'Explore: Menopause & Hormonal Change',
  },
  {
    title: 'Redness, sensitivity and reactive skin',
    description: 'Chronic redness and reactive skin are almost always driven by a combination of barrier compromise, vascular instability and inflammatory dysregulation. The assessment establishes what is driving the pattern before any treatment is introduced.',
    link: '/conditions/redness-sensitivity-reactive-skin',
    linkText: 'Explore: Redness & Sensitivity',
  },
  {
    title: 'Early structural skin ageing',
    description: 'Reduced elasticity, early laxity and the loss of skin resilience that accompanies collagen decline require a different clinical approach from surface correction. Consultation determines the regenerative programme most appropriate for supporting skin architecture over time.',
    link: '/conditions',
    linkText: 'Explore: Skin Conditions',
  },
];

const signatureProgrammes = [
  { name: 'Skin Barrier Repair & Recovery', path: '/signature/skin-barrier-repair-recovery', description: 'For skin requiring foundational barrier restoration before more active treatments can be safely introduced.' },
  { name: 'Rosacea & Redness Control', path: '/signature/rosacea-redness-control', description: 'For chronic inflammatory redness, vascular reactivity and rosacea-spectrum presentations.' },
  { name: 'Menopause Skin Rebuild', path: '/signature/menopause-skin-rebuild', description: 'For skin navigating barrier thinning, collagen decline and the changes of hormonal transition.' },
  { name: 'Photoaging & Skin Architecture', path: '/signature/photoaging-skin-architecture', description: 'For cumulative UV damage, pigmentation irregularity and early architectural change.' },
  { name: 'Structural Skin Regeneration', path: '/signature/structural-skin-regeneration', description: 'For skin requiring regenerative injectable and biostimulation support.' },
  { name: 'Under-Eye Renewal', path: '/signature/under-eye-renewal', description: 'For hollowing, dark discolouration, fine crepiness and periorbital tissue quality decline.' },
];

const treatmentCategories = [
  {
    heading: 'Corrective and Structural Treatments',
    treatments: [
      { name: 'Anti-wrinkle injections', aka: 'Botox \u00b7 frown lines \u00b7 forehead lines \u00b7 crow\u2019s feet \u00b7 brow lift \u00b7 lip flip', from: '\u00a3180', link: '/treatments/structural-collagen-support/anti-wrinkle-injection' },
      { name: 'Dermal fillers', aka: 'Lip filler \u00b7 cheek filler \u00b7 jawline filler \u00b7 tear trough \u00b7 nasolabial folds \u00b7 marionette lines', from: '\u00a3140', link: '/treatments/structural-collagen-support/dermal-fillers' },
      { name: 'Jawline sculpting', aka: 'Jawline filler \u00b7 chin filler \u00b7 masseter Botox \u00b7 face slimming injection \u00b7 lower face contouring', from: '\u00a3140', link: '/treatments/structural-collagen-support/jawline-sculpting' },
      { name: 'Biostimulators', aka: 'Sculptra \u00b7 Radiesse \u00b7 collagen stimulator \u00b7 skin tightening injection \u00b7 volume restoration', from: '\u00a3POA', link: '/treatments/structural-collagen-support/biostimulators' },
      { name: 'Thread lifts', aka: 'PDO threads \u00b7 PLLA threads \u00b7 non-surgical facelift \u00b7 jowl lift \u00b7 brow lift threads \u00b7 neck lift', from: '\u00a3POA', link: '/treatments/structural-collagen-support/thread-lifts' },
      { name: 'Neck and lower face structural lift', aka: 'Neck tightening \u00b7 lower face lift \u00b7 non-surgical neck lift', from: '\u00a3POA', link: '/treatments/structural-collagen-support/neck-lower-face-lift' },
    ],
  },
  {
    heading: 'Regenerative Injectables',
    treatments: [
      { name: 'Polynucleotides', aka: 'PN treatment \u00b7 PDRN \u00b7 skin regeneration injection \u00b7 PN for under eyes \u00b7 PN for rosacea', from: '\u00a3250', link: '/treatments/injectable-skin-optimisation/polynucleotides' },
      { name: 'PRP \u2014 Platelet Rich Plasma', aka: 'Vampire facial \u00b7 PRP skin rejuvenation \u00b7 PRP hair loss \u00b7 blood facial', from: '\u00a3POA', link: '/treatments/injectable-skin-optimisation/prp-skin-regeneration' },
      { name: 'Profhilo', aka: 'Skin booster \u00b7 injectable moisturiser \u00b7 bio-remodelling \u00b7 skin hydration injection', from: '\u00a3230', link: '/treatments/injectable-skin-optimisation/profhilo' },
      { name: 'Jalupro', aka: 'Skin booster \u00b7 amino acid injectable \u00b7 skin rejuvenation injection', from: '\u00a3160', link: '/treatments/injectable-skin-optimisation/jalupro' },
      { name: 'Seventy Hyal', aka: 'Skin booster \u00b7 hyaluronic acid injectable \u00b7 skin hydration', from: '\u00a3180', link: '/treatments/injectable-skin-optimisation/seventy-hyal' },
      { name: 'Definisse Hydrobooster', aka: 'Skin booster \u00b7 deep hydration injectable', from: '\u00a3210', link: '/treatments/injectable-skin-optimisation/definisse-hydrobooster' },
    ],
  },
  {
    heading: 'Skin Renewal and Resurfacing',
    treatments: [
      { name: 'Microneedling', aka: 'Skin needling \u00b7 collagen induction therapy \u00b7 dermaroller', from: '\u00a375', link: '/treatments/skin-renewal-regeneration/microneedling' },
      { name: 'RF microneedling', aka: 'Radiofrequency microneedling \u00b7 Morpheus8 \u00b7 skin tightening \u00b7 collagen remodelling', from: '\u00a3POA', link: '/treatments/skin-renewal-regeneration' },
      { name: 'Chemical peels', aka: 'Skin peel \u00b7 acid peel \u00b7 resurfacing treatment \u00b7 pigmentation peel \u00b7 acne peel', from: '\u00a3120', link: '/treatments/skin-renewal-regeneration/chemical-peel' },
      { name: 'BioRePeel', aka: 'TCA peel \u00b7 no-downtime peel \u00b7 biorevitalisation peel', from: '\u00a3150', link: '/treatments/skin-renewal-regeneration/biorepeel' },
      { name: 'Obagi Medical prescription skincare', aka: 'Obagi Nu-Derm \u00b7 Obagi Rosaclear \u00b7 Obagi Elastiderm \u00b7 prescription skincare \u00b7 medical grade skincare \u00b7 Obagi stockist Hertfordshire', from: '\u00a3150', link: '/treatments/prescription-skincare' },
      { name: 'LED light therapy', aka: 'LED facial \u00b7 photobiomodulation \u00b7 red light therapy \u00b7 rosacea light treatment', from: '\u00a3POA', link: '/treatments/skin-barrier-renewal-protocol' },
    ],
  },
  {
    heading: 'Body, Wellness and Clinical Treatments',
    treatments: [
      { name: 'Fat dissolving injections', aka: 'Lemon Bottle \u00b7 double chin treatment \u00b7 lipolytic injections \u00b7 Aqualyx', from: '\u00a3POA', link: '/treatments/injectable-skin-optimisation/lemon-bottle' },
      { name: 'Medical weight management', aka: 'Weight loss injections \u00b7 semaglutide \u00b7 GLP-1 \u00b7 Ozempic \u00b7 Wegovy', from: '\u00a3POA', link: '/treatments/wellness-regenerative-recovery' },
      { name: 'IV drips and vitamin therapy', aka: 'IV vitamin drip \u00b7 vitamin B12 injection \u00b7 IV infusion \u00b7 wellness drip', from: '\u00a3POA', link: '/treatments/wellness-regenerative-recovery/nad-iv' },
      { name: 'Minor skin lesion removal', aka: 'Skin tag removal \u00b7 mole removal \u00b7 wart removal \u00b7 milia removal \u00b7 cherry angioma', from: '\u00a375', link: '/treatments' },
    ],
  },
];

const clientValues = [
  'Consultation-led skin assessment before treatment selection',
  'A clinical focus on skin barrier health and inflammatory regulation',
  'Structured skin programmes tailored to individual skin behaviour and hormonal context',
  'Regenerative treatments designed to support collagen and long-term skin function',
  'A calm clinical environment with free on-site parking and a straightforward journey from Stevenage',
];

const areasServed = [
  { name: 'Stevenage', link: '/locations/aesthetic-clinic-stevenage' },
  { name: 'Great Ashby', link: null },
  { name: 'Knebworth', link: null },
  { name: 'Hitchin', link: null },
  { name: 'Welwyn Garden City', link: '/locations/aesthetic-clinic-welwyn-garden-city' },
  { name: 'Hertford', link: '/locations/aesthetic-clinic-hertford' },
  { name: 'Ware', link: null },
  { name: 'Hoddesdon', link: '/locations/aesthetic-clinic-hoddesdon' },
  { name: 'Broxbourne', link: '/locations/aesthetic-clinic-broxbourne' },
  { name: 'Hertfordshire', link: '/locations/aesthetic-clinic-hertfordshire' },
];

const BOOKING_URL = 'https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ';

export default function AestheticClinicStevenage() {
  return (
    <>
      <Head>
        <title>Skin Clinic Near Stevenage | Consultation-Led Skin Health | ULANDA Ware Hertfordshire</title>
        <meta name="description" content="ULANDA is a nurse-led skin clinic near Stevenage in Ware, Hertfordshire offering consultation-led skin health, barrier assessment, regenerative treatments and structured skin programmes. Around 30 minutes from Stevenage. Free parking on site." />
        <link rel="canonical" href="https://www.ulanda.co.uk/locations/aesthetic-clinic-stevenage" />
        <script type="application/ld+json">{JSON.stringify(locationSchema)}</script>
      </Head>

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-4">
              <HeroText>Skin Clinic Near Stevenage for Consultation-Led Skin Health</HeroText>
            </h1>
            <p className="text-xl md:text-2xl font-light text-primary mb-8 leading-relaxed">
              Skin Understood. Then Transformed.
            </p>
            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-6 text-base-content/80 text-lg leading-relaxed">
                <p>
                  ULANDA is a nurse-led skin clinic near Stevenage, located in Ware and serving clients across Hertfordshire who are seeking consultation-led skin care and structured skin health programmes.
                </p>
                <p>
                  Many clients travel from Stevenage &mdash; particularly from neighbourhoods around the Old Town, Great Ashby and Knebworth &mdash; when they are looking for a more clinically guided approach to skin concerns &mdash; including damaged skin barrier, pigmentation, hormonal skin changes and early structural ageing &mdash; where treatment decisions begin with understanding the biological behaviour of the skin before any procedure is recommended.
                </p>
                <p>
                  Rather than selecting treatments in isolation, ULANDA begins with an Advanced Skin Health Consultation, where skin biology, barrier behaviour, hormonal context and treatment readiness are assessed before any treatment pathway is confirmed.
                </p>
                <p>
                  Clients leave their first appointment with visible improvement in their skin and a complete written programme recommendation.
                </p>
                <p>
                  Clients visiting from Stevenage often also explore ULANDA&rsquo;s wider <Link to="/locations/aesthetic-clinic-hertfordshire" className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">Hertfordshire skin clinic page</Link> for an overview of the conditions, programmes and treatment pathways available across the region.
                </p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <div className="mt-8 bg-secondary/30 rounded-xl p-6 md:p-8 border border-primary/10">
                <p className="text-base-content/70 text-sm mb-2">ULANDA is approximately 30 minutes from Stevenage &middot; Free parking on site</p>
                <p className="text-3xl font-bold text-base-content mb-1">&pound;175</p>
                <p className="text-base-content/60 mb-4">Fully redeemable against your treatment plan</p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white"
                >
                  Book Your Advanced Skin Health Consultation &rarr;
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Section: Why Clients from Stevenage Visit ULANDA */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-4">Why Clients from Stevenage Visit ULANDA</h2>
                <p className="text-xl font-light text-primary mb-6">A Different Starting Point</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="space-y-6 text-base-content/80 text-lg leading-relaxed mb-8">
                  <p>
                    Many clients travel from Stevenage to ULANDA when they are seeking a more structured and clinically guided approach to skin health &mdash; particularly when previous treatments have delivered temporary improvement but not lasting change.
                  </p>
                  <p>
                    ULANDA&rsquo;s consultation-led model begins with understanding how the skin behaves before deciding how it should be treated. This differs from many aesthetic clinics serving the Stevenage area where treatment selection often precedes clinical assessment.
                  </p>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg font-medium mb-4">Clients visiting from Stevenage often value:</p>
                <ul className="space-y-3 mb-8">
                  {clientValues.map((value, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80 text-lg leading-relaxed">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5" />
                      {value}
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <Link
                  to="/treatments/advanced-skin-health-consultation"
                  className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors text-lg"
                >
                  Why assessment changes what medical aesthetics can achieve &rarr;
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Section: Skin Concerns */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-4">Skin Concerns Commonly Assessed for Clients from Stevenage</h2>
                <p className="text-xl font-light text-primary mb-6">The Presentations Most Commonly Seen at ULANDA</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  Clients travelling from Stevenage visit ULANDA for support with a range of skin concerns. Each concern links to a page explaining how the condition develops, how it is assessed during consultation, and the treatment approaches used at ULANDA.
                </p>
              </FadeInWhenVisible>
              <div className="space-y-6">
                {skinConcerns.map((concern, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.08}>
                    <div className="bg-secondary/30 rounded-xl p-6 md:p-8 border border-primary/10">
                      <h3 className="text-xl font-serif text-base-content mb-3">{concern.title}</h3>
                      <p className="text-base-content/80 leading-relaxed mb-4">{concern.description}</p>
                      <Link
                        to={concern.link}
                        className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors font-medium"
                      >
                        {concern.linkText} &rarr;
                      </Link>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Structured Skin Programmes */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-4">Structured Skin Programmes</h2>
                <p className="text-xl font-light text-primary mb-6">Where the Consultation Leads</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  Following your Advanced Skin Health Consultation, your treatment pathway is built around one of ULANDA&rsquo;s six Signature programmes &mdash; structured clinical pathways designed around the six primary skin presentations seen most frequently in practice.
                </p>
              </FadeInWhenVisible>
              <div className="grid md:grid-cols-2 gap-6">
                {signatureProgrammes.map((programme, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.08}>
                    <Link
                      to={programme.path}
                      className="group block bg-base-100 rounded-xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full"
                    >
                      <h3 className="font-serif text-lg text-base-content group-hover:text-primary transition-colors leading-snug mb-3">
                        {programme.name}
                      </h3>
                      <p className="text-sm text-base-content/60 leading-relaxed">{programme.description}</p>
                    </Link>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Treatments Available */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-4">Treatments Available Near Stevenage</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  The full range of medical aesthetic treatments &mdash; around 30 minutes from Stevenage. Many visitors searching for a skin clinic near Stevenage already know the treatment they are interested in. The treatments below are available at ULANDA in Ware and are introduced following the Advanced Skin Health Consultation to ensure they are clinically appropriate.
                </p>
              </FadeInWhenVisible>

              {treatmentCategories.map((category, catIdx) => (
                <FadeInWhenVisible key={catIdx} delay={catIdx * 0.1}>
                  <div className="mb-10">
                    <h3 className="text-xl font-serif text-base-content mb-4">{category.heading}</h3>
                    <div className="overflow-x-auto">
                      <table className="table w-full">
                        <thead>
                          <tr className="border-b border-primary/10">
                            <th className="text-base-content/60 font-medium text-sm">Treatment</th>
                            <th className="text-base-content/60 font-medium text-sm hidden md:table-cell">Also known as</th>
                            <th className="text-base-content/60 font-medium text-sm text-right">From</th>
                            <th className="text-base-content/60 font-medium text-sm text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.treatments.map((treatment, tIdx) => (
                            <tr key={tIdx} className="border-b border-primary/5 hover:bg-secondary/10 transition-colors">
                              <td className="font-medium text-base-content py-4">{treatment.name}</td>
                              <td className="text-base-content/50 text-sm hidden md:table-cell py-4">{treatment.aka}</td>
                              <td className="text-base-content font-medium text-right py-4 whitespace-nowrap">{treatment.from}</td>
                              <td className="text-right py-4">
                                <Link
                                  to={treatment.link}
                                  className="text-primary hover:text-primary/80 text-sm font-medium whitespace-nowrap transition-colors"
                                >
                                  View treatment &rarr;
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Advanced Skin Health Consultation CTA */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">The Advanced Skin Health Consultation</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  Clients visiting from Stevenage begin with the Advanced Skin Health Consultation &mdash; the clinical assessment that establishes what your skin actually needs before any treatment is recommended.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="mb-8">
                  <p className="text-base-content/80 text-lg font-medium mb-4">The consultation includes:</p>
                  <ul className="space-y-3">
                    {['AI Skin Analysis', 'Barrier evaluation', 'Hormonal history review', 'Skin Barrier Renewal Protocol treatment'].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base-content/80 text-lg leading-relaxed">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <div className="bg-base-100 rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm text-center">
                  <p className="text-3xl font-bold text-base-content mb-1">&pound;175</p>
                  <p className="text-base-content/60 mb-2">Fully redeemable against your treatment plan when you proceed</p>
                  <p className="text-base-content/80 text-sm mb-6">Most clients notice a visible improvement in their skin before they leave their first appointment.</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-white btn-lg"
                  >
                    Book Your Advanced Skin Health Consultation &rarr;
                  </a>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Section: Travelling from Stevenage */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Travelling from Stevenage</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  ULANDA is approximately 30 minutes from Stevenage via the A602 and A10, connecting Stevenage town centre with Ware.
                </p>
              </FadeInWhenVisible>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <FadeInWhenVisible delay={0.2}>
                  <div className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                    <h3 className="text-lg font-serif text-base-content mb-3">Free Parking On Site</h3>
                    <p className="text-base-content/80 leading-relaxed">
                      ULANDA has dedicated free client parking directly at the clinic, making visits convenient for clients travelling from Stevenage.
                    </p>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.3}>
                  <div className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                    <h3 className="text-lg font-serif text-base-content mb-3">By Train</h3>
                    <p className="text-base-content/80 leading-relaxed">
                      Stevenage station connects to Ware via the Hertford East rail line, typically with a change at Hertford North.
                    </p>
                  </div>
                </FadeInWhenVisible>
              </div>
              <FadeInWhenVisible delay={0.4}>
                <div className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                  <h3 className="text-lg font-serif text-base-content mb-3">Address</h3>
                  <address className="text-base-content/80 leading-relaxed not-italic">
                    Uphaven<br />
                    6 Hampden Hill<br />
                    Ware<br />
                    Hertfordshire<br />
                    SG12 7JT
                  </address>
                  <div className="mt-4 space-y-1 text-base-content/80">
                    <p>Phone: <a href="tel:+447904336031" className="text-primary hover:text-primary/80 transition-colors">+44 7904 336031</a></p>
                    <p>Email: <a href="mailto:info@ulanda.co.uk" className="text-primary hover:text-primary/80 transition-colors">info@ulanda.co.uk</a></p>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-lg font-serif text-base-content mb-4">Serving Stevenage and Surrounding Areas</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="text-base-content/80 text-lg leading-relaxed mb-4">
                  <p className="mb-4">Clients visiting ULANDA from Stevenage often travel from surrounding areas including Great Ashby, Knebworth, Hitchin and Welwyn Garden City.</p>
                  <div>
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
                  </div>
                </div>
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
                href={BOOKING_URL}
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
