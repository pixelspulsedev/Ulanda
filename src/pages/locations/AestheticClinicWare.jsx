import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import HeroText from '../../components/animations/HeroText';
import FadeInWhenVisible from '../../components/animations/FadeInWhenVisible';

const BOOKING_URL = 'https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ';
const NEWSLETTER_URL = 'http://eepurl.com/jsdn42';

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness', 'MedicalBusiness'],
      '@id': 'https://www.ulanda.co.uk/#medicalbusiness',
      name: 'ULANDA Skin Clinic',
      url: 'https://www.ulanda.co.uk',
      image: 'https://www.ulanda.co.uk/og-image.jpg',
      telephone: '+44 7904 336031',
      email: 'info@ulanda.co.uk',
      priceRange: '£££',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Uphaven, 6 Hampden Hill',
        addressLocality: 'Ware',
        addressRegion: 'Hertfordshire',
        postalCode: 'SG12 7JT',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '51.8094',
        longitude: '-0.0316',
      },
      areaServed: [
        { '@type': 'City', name: "Ware" },
        { '@type': 'Place', name: 'Thorley' },
        { '@type': 'Place', name: "St Michael's Mead" },
        { '@type': 'Place', name: 'Stansted Mountfitchet' },
        { '@type': 'City', name: 'Sawbridgeworth' },
        { '@type': 'City', name: 'Ware' },
        { '@type': 'City', name: 'Hertford' },
        { '@type': 'City', name: 'Hoddesdon' },
        { '@type': 'City', name: 'Broxbourne' },
        { '@type': 'AdministrativeArea', name: 'East Hertfordshire' },
        { '@type': 'AdministrativeArea', name: 'Hertfordshire' },
      ],
      hasMap: 'https://maps.google.com/maps?q=Uphaven,+6+Hampden+Hill,+Ware+SG12+7JT',
      sameAs: [
        'https://www.instagram.com/ulandamedspa',
        'https://www.facebook.com/ulandamedspa',
      ],
      parentOrganization: {
        '@type': 'Organization',
        name: 'ULANDA',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.ulanda.co.uk/locations/aesthetic-clinic-ware#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ulanda.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.ulanda.co.uk/contact' },
        { '@type': 'ListItem', position: 3, name: "Skin Clinic Near Ware", item: 'https://www.ulanda.co.uk/locations/aesthetic-clinic-ware' },
      ],
    },
  ],
};

const concerns = [
  {
    title: 'Damaged or compromised skin barrier',
    description: 'Barrier dysfunction can develop following over-exfoliation, strong skincare actives, chronic inflammation or hormonal change. During your consultation the barrier\'s current state is assessed before any repair or treatment programme begins because what is driving the compromise determines what the appropriate clinical response looks like.',
    link: '/conditions/dehydration-dullness-skin-recovery',
    text: 'Explore: Dehydration & Dullness',
  },
  {
    title: 'Pigmentation and uneven skin tone',
    description: 'Pigmentation often develops following inflammation, hormonal shifts or cumulative UV exposure. At ULANDA the underlying triggers are assessed before any treatment pathway is recommended because pigmentation driven by inflammation requires a different clinical response from pigmentation driven by sun damage.',
    link: '/conditions/pigmentation-and-skin-tone',
    text: 'Explore: Pigmentation & Skin Tone',
  },
  {
    title: 'Hormonal skin changes',
    description: 'Hormonal fluctuations across adult life, postpartum recovery, the shifts of the late 30s and hormonal transition directly influence skin hydration, barrier function, collagen synthesis and inflammatory response. Consultation establishes the hormonal context as clinical data that shapes every treatment recommendation.',
    link: '/conditions/menopause-hormone-skin-changes',
    text: 'Explore: Menopause & Hormonal Change',
  },
  {
    title: 'Redness, sensitivity and reactive skin',
    description: 'Chronic redness and reactive skin are almost always driven by a combination of barrier compromise, vascular instability and inflammatory dysregulation. The assessment establishes what is driving the pattern before any treatment is introduced.',
    link: '/conditions/redness-sensitivity-reactive-skin',
    text: 'Explore: Redness & Sensitivity',
  },
  {
    title: 'Early structural skin ageing',
    description: 'Reduced elasticity, early laxity and the loss of skin resilience that accompanies collagen decline require a different clinical approach from surface correction. Consultation determines the regenerative programme most appropriate for supporting skin architecture over time.',
    link: '/conditions',
    text: 'Explore: Skin Conditions',
  },
];

const signatureProgrammes = [
  { name: 'Skin Barrier Repair & Resilience', path: '/signature/skin-barrier-repair-recovery', description: 'For skin requiring foundational barrier restoration before more active treatments can be safely introduced.' },
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
      { name: 'Anti-wrinkle injections', aka: 'Botox · frown lines · forehead lines · crow\'s feet · brow lift · lip flip', from: '£180', link: '/treatments/structural-collagen-support/anti-wrinkle-injections' },
      { name: 'Dermal fillers', aka: 'Lip filler · cheek filler · jawline filler · tear trough · nasolabial folds · marionette lines', from: '£140', link: '/treatments/structural-collagen-support/dermal-fillers' },
      { name: 'Jawline sculpting', aka: 'Jawline filler · chin filler · masseter Botox · face slimming injection · lower face contouring', from: '£140', link: '/treatments/structural-collagen-support/jawline-sculpting' },
      { name: 'Biostimulators', aka: 'Sculptra · Radiesse · collagen stimulator · skin tightening injection · volume restoration', from: '£POA', link: '/treatments/structural-collagen-support/biostimulators' },
      { name: 'Thread lifts', aka: 'PDO threads · PLLA threads · non-surgical facelift · jowl lift · brow lift threads · neck lift', from: '£POA', link: '/treatments/structural-collagen-support/thread-lifts' },
      { name: 'Neck and lower face structural lift', aka: 'Neck tightening · lower face lift · non-surgical neck lift', from: '£POA', link: '/treatments/structural-collagen-support/neck-lower-face-lift' },
    ],
  },
  {
    heading: 'Regenerative Injectables',
    treatments: [
      { name: 'Polynucleotides', aka: 'PN treatment · PDRN · skin regeneration injection · PN for under eyes · PN for rosacea', from: '£250', link: '/treatments/injectable-skin-optimisation/polynucleotides' },
      { name: 'PRP — Platelet Rich Plasma', aka: 'Vampire facial · PRP skin rejuvenation · PRP hair loss · blood facial', from: '£POA', link: '/treatments/injectable-skin-optimisation/prp-skin-regeneration' },
      { name: 'Profhilo', aka: 'Skin booster · injectable moisturiser · bio-remodelling · skin hydration injection', from: '£230', link: '/treatments/injectable-skin-optimisation/profhilo' },
      { name: 'Jalupro', aka: 'Skin booster · amino acid injectable · skin rejuvenation injection', from: '£160', link: '/treatments/injectable-skin-optimisation/jalupro' },
      { name: 'Seventy Hyal', aka: 'Skin booster · hyaluronic acid injectable · skin hydration', from: '£180', link: '/treatments/injectable-skin-optimisation/seventy-hyal' },
      { name: 'Definisse Hydrobooster', aka: 'Skin booster · deep hydration injectable', from: '£210', link: '/treatments/injectable-skin-optimisation/definisse-hydrobooster' },
    ],
  },
  {
    heading: 'Skin Renewal and Resurfacing',
    treatments: [
      { name: 'Microneedling', aka: 'Skin needling · collagen induction therapy · dermaroller', from: '£75', link: '/treatments/skin-renewal-regeneration/microneedling' },
      { name: 'RF microneedling', aka: 'Radiofrequency microneedling · Morpheus8 · skin tightening · collagen remodelling', from: '£POA', link: '/treatments/skin-renewal-regeneration' },
      { name: 'Chemical peels', aka: 'Skin peel · acid peel · resurfacing treatment · pigmentation peel · acne peel', from: '£120', link: '/treatments/skin-renewal-regeneration/chemical-peel' },
      { name: 'BioRePeel', aka: 'TCA peel · no-downtime peel · biorevitalisation peel', from: '£150', link: '/treatments/skin-renewal-regeneration/biorepeel' },
      { name: 'Obagi Medical prescription skincare', aka: 'Obagi Nu-Derm · Obagi Rosaclear · Obagi Elastiderm · prescription skincare · medical grade skincare · Obagi stockist Hertfordshire', from: '£150', link: '/treatments/prescription-skincare' },
      { name: 'LED light therapy', aka: 'LED facial · photobiomodulation · red light therapy · rosacea light treatment', from: '£POA', link: '/treatments/skin-barrier-renewal-protocol' },
    ],
  },
  {
    heading: 'Body, Wellness and Clinical Treatments',
    treatments: [
      { name: 'Fat dissolving injections', aka: 'Lemon Bottle · double chin treatment · lipolytic injections · Aqualyx', from: '£POA', link: '/treatments/injectable-skin-optimisation/lemon-bottle' },
      { name: 'Medical weight management', aka: 'Weight loss injections · semaglutide · GLP-1 · Ozempic · Wegovy', from: '£POA', link: '/treatments/wellness-regenerative-recovery' },
      { name: 'IV drips and vitamin therapy', aka: 'IV vitamin drip · vitamin B12 injection · IV infusion · wellness drip', from: '£POA', link: '/treatments/wellness-regenerative-recovery/nad-iv' },
      { name: 'Minor skin lesion removal', aka: 'Skin tag removal · mole removal · wart removal · milia removal · cherry angioma', from: '£75', link: '/treatments' },
    ],
  },
];

const faqs = [
  {
    q: 'Is ULANDA near Bishop\'s Stortford?',
    a: 'Yes. ULANDA is located in Ware, approximately 20 minutes from Bishop\'s Stortford by car.',
  },
  {
    q: 'Is there parking?',
    a: 'Yes. Free client parking is available on site.',
  },
  {
    q: 'Do I need a consultation first?',
    a: 'Yes. All new clients begin with the Advanced Skin Health Consultation. The £175 fee is fully redeemable against your treatment plan when you proceed.',
  },
  {
    q: 'Does ULANDA offer Botox and dermal fillers near Bishop\'s Stortford?',
    a: 'Yes. Anti-wrinkle injections, dermal fillers and regenerative injectables are available following consultation.',
  },
];

const areasServed = [
  { name: 'Ware', link: '/locations/aesthetic-clinic-ware' },
  { name: 'Thorley', link: null },
  { name: "St Michael's Mead", link: null },
  { name: 'Stansted Mountfitchet', link: null },
  { name: 'Sawbridgeworth', link: '/locations/aesthetic-clinic-sawbridgeworth' },
  { name: 'Hertford', link: '/locations/aesthetic-clinic-hertford' },
  { name: 'Hoddesdon', link: '/locations/aesthetic-clinic-hoddesdon' },
  { name: 'Broxbourne', link: '/locations/aesthetic-clinic-broxbourne' },
  { name: 'East Hertfordshire', link: null },
  { name: 'Hertfordshire', link: '/locations/aesthetic-clinic-hertfordshire' },
  { name: 'Stanstead Abbotts', link: '/locations/aesthetic-clinic-stanstead-abbotts' },
  { name: 'Great Amwell', link: '/locations/aesthetic-clinic-great-amwell' },
  { name: 'Buntingford', link: '/locations/aesthetic-clinic-buntingford' },
];

export default function AestheticClinicWare() {
  return (
    <>
      <Head>
        <title>Skin Clinic Near Ware | ULANDA Ware</title>
        <meta name="description" content="Nurse-led skin clinic near Ware, based in Ware. Barrier assessment, regenerative treatments and structured skin programmes. About 20 min drive." />
        <link rel="canonical" href="https://www.ulanda.co.uk/locations/aesthetic-clinic-ware" />
        <script type="application/ld+json">{JSON.stringify(locationSchema)}</script>
      </Head>

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-4">
              <HeroText>Skin Clinic Near Ware for Consultation-Led Skin Health</HeroText>
            </h1>
            <p className="text-xl md:text-2xl font-light text-primary mb-8 leading-relaxed">Skin Understood. Then Transformed.</p>
            <FadeInWhenVisible>
              <div className="space-y-6 text-base-content/80 text-lg leading-relaxed whitespace-pre-line">
                {"ULANDA in Ware, Hertfordshire\nA Consultation-Led Skin Clinic for Healthy Ageing, Skin Health & Regenerative Aesthetics\nServing clients from Ware, Hertford, Broxbourne, Bishop's Stortford and Buntingford. Free on-site parking. Appointment only.\nUnderstanding Before Treatment™\nMany women know their skin has changed but are unsure why.\nPerhaps your skin looks more tired than you feel. Perhaps it feels drier, less radiant or less like itself than it once did. Perhaps pigmentation has become more noticeable, your under-eye area has changed, or your skin no longer seems to respond the way it used to.\nAt ULANDA, we believe understanding those changes should come before treatment.\nLocated in Ware, Hertfordshire (SG12 7JT), ULANDA is a consultation-led Skin Clinic & Women's Health Practice supporting clients from across Hertfordshire and North London with healthy ageing, skin quality concerns, hormonal skin changes and regenerative aesthetics.\nBook Your Advanced Skin Health Consultation\n---\nWhy Clients Travel To ULANDA\nMany of our clients travel from:\n- Hertford\n- Broxbourne\n- Hoddesdon\n- Bishop's Stortford\n- Cheshunt\n- St Albans\n- North London\nbecause they are looking for more than a treatment appointment.\nMany arrive after spending months or years trying products, researching treatments online or feeling frustrated that their skin no longer behaves the way it once did.\nRather than beginning with treatments, we begin by understanding:\n- What has changed\n- Why it may be changing\n- What is influencing skin behaviour\n- Which treatment options are appropriate\n- Whether treatment is needed at all\nThis consultation-led approach helps ensure recommendations are personalised, clinically appropriate and aligned with long-term skin health.\nA Destination Clinic For Clients Across Hertfordshire & North London\nMany clients discover ULANDA while searching for treatments. Others find us through recommendations, educational content or our Google Business Profile.\nWhat they often have in common is a willingness to travel for a different type of clinical experience.\nClients regularly visit from:\n- Hertford\n- Broxbourne\n- Hoddesdon\n- Bishop's Stortford\n- Cheshunt\n- Buntingford\n- Stansted Abbott\n- North London\nbecause they value a consultation-led approach focused on understanding skin changes before recommending treatments.\nFor many women, the journey is not simply about finding a treatment. It is about finding clarity, confidence and trusted clinical guidance.\n---\nWhat Clients Often Tell Us Before Their First Visit\nMany women arrive at ULANDA saying:\n\"My skin looks more tired than I feel.\"\n\"My skin feels drier than it used to.\"\n\"My skin doesn't feel as firm or bouncy as it once did.\"\n\"My under-eye area has changed.\"\n\"Pigmentation seems more noticeable than before.\"\n\"My skin doesn't seem to behave the way it used to.\"\nThese changes often become more noticeable during periods of hormonal change, collagen decline, increased skin sensitivity, environmental stress or natural ageing processes.\nUnderstanding what is driving these changes is often the first step towards improving confidence in your skin.\nMeet Helen Balogun MSc RN ANP\nULANDA was founded by Helen Balogun, an Advanced Nurse Practitioner with a passion for helping women understand the changes occurring within their skin and overall wellbeing.\nHer approach combines clinical assessment, skin health expertise and personalised treatment planning to help clients make informed decisions about their skin.\nRather than focusing solely on procedures, Helen's consultations explore the wider factors influencing skin behaviour, including:\n- Skin barrier health\n- Hormonal influences\n- Healthy ageing\n- Collagen decline\n- Skin quality changes\n- Lifestyle and environmental factors\nThis commitment to understanding before treatment forms the foundation of every client journey at ULANDA.\n---\nWhat To Expect At ULANDA\nMany clients tell us they appreciate the calm, private and welcoming environment.\nUnlike busy high-street clinics where appointments can feel rushed, ULANDA is intentionally designed to provide time for discussion, assessment and personalised recommendations.\nYou can expect:\n- A private consultation environment\n- Clinical guidance without pressure\n- AI Skin Analysis\n- Detailed skin assessment\n- Honest treatment discussions\n- Personalised recommendations\n- A focus on natural-looking outcomes\n- Long-term skin health planning\nOur goal is for every client to leave feeling informed, understood and confident about their next steps.\nWhy Clients Choose ULANDA\nMany clients arrive at ULANDA after trying products, researching treatments online or feeling frustrated that their skin no longer behaves the way it once did.\nWhat they often value most is not a specific treatment, but finally understanding what is happening to their skin.\n\"I finally understood what was happening with my skin.\"\nMany clients tell us that the consultation helped them make sense of changes they had been struggling to understand for months or even years.\n---\n\"The journey was absolutely worth it.\"\nClients regularly travel from across Hertfordshire and North London because they value the personalised, consultation-led approach and the time dedicated to understanding their concerns.\n---\n\"I felt listened to rather than sold to.\"\nMany clients appreciate the calm, educational and clinically guided experience that allows them to make informed decisions without pressure.\n---\n\"I left with a clear plan and confidence in what to do next.\"\nWhether treatment is recommended immediately or not, our goal is for every client to leave with a better understanding of their skin and a clear pathway forward.\n---\nThe Advanced Skin Health Consultation\nEvery new client begins with an Advanced Skin Health Consultation.\nThis appointment provides the foundation for understanding your skin and developing a personalised treatment plan.\nYour consultation may include:\n- Clinical skin assessment\n- AI Skin Analysis\n- Skin barrier evaluation\n- Review of skin concerns and history\n- Assessment of skin behaviour patterns\n- Discussion of lifestyle and hormonal influences\n- Personalised treatment recommendations\nThe consultation fee is fully redeemable against eligible treatment plans."}
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <div className="mt-8 bg-secondary/30 rounded-xl p-6 md:p-8 border border-primary/10">
                <p className="text-base-content/70 text-sm mb-2">ULANDA is approximately 20 minutes from Ware · Free parking on site</p>
                <p className="text-3xl font-bold text-base-content mb-1">£175 fully redeemable</p>
                <p className="text-base-content/60 mb-4">Skin Understood. Then Transformed.</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white">Book Your Advanced Skin Health Consultation →</a>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif text-base-content mb-4">Why Clients from Ware Visit ULANDA</h2>
                <p className="text-xl font-light text-primary mb-6">A Different Starting Point</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed">Many clients travel from Ware to ULANDA when they are seeking a more structured and clinically guided approach to skin health, particularly when previous treatments have delivered temporary improvement but not lasting change.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mt-4">ULANDA's consultation-led model begins with understanding how the skin behaves before deciding how it should be treated. This differs from many aesthetic clinics serving the Ware area, where treatment selection often precedes clinical assessment.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg font-medium mt-6 mb-3">Clients visiting from Ware often value:</p>
                <ul className="space-y-3">
                  {[
                    'Consultation-led skin assessment before treatment selection',
                    'A clinical focus on skin barrier health and inflammatory regulation',
                    'Structured skin programmes tailored to individual skin behaviour and hormonal context',
                    'Regenerative treatments designed to support collagen and long-term skin function',
                    'A calm clinical environment with free on-site parking and a straightforward journey from Bishop\'s Stortford',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80 text-lg leading-relaxed"><span className="w-2 h-2 rounded-full bg-primary mt-2.5" />{item}</li>
                  ))}
                </ul>
                <Link to="/treatments/advanced-skin-health-consultation" className="inline-block mt-6 text-primary hover:text-primary/80 underline underline-offset-2 transition-colors text-lg">Why assessment changes what medical aesthetics can achieve →</Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif text-base-content mb-3">Skin Concerns Commonly Assessed for Clients from Ware</h2>
                <p className="text-xl font-light text-primary mb-6">The Presentations Most Commonly Seen at ULANDA</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">Clients travelling from Ware visit ULANDA for support with a range of skin concerns. Each links to the relevant authority page within the ULANDA ecosystem for the full clinical picture.</p>
              </FadeInWhenVisible>
              <div className="space-y-6">
                {concerns.map((c, i) => (
                  <FadeInWhenVisible key={i} delay={i * 0.08}>
                    <div className="bg-secondary/30 rounded-xl p-6 md:p-8 border border-primary/10">
                      <h3 className="text-xl font-serif text-base-content mb-3">{c.title}</h3>
                      <p className="text-base-content/80 leading-relaxed mb-4">{c.description}</p>
                      <Link to={c.link} className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors font-medium">{c.text} →</Link>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif text-base-content mb-4">Structured Skin Programmes</h2>
                <p className="text-xl font-light text-primary mb-6">Where the Consultation Leads</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">Following your Advanced Skin Health Consultation, your treatment pathway is built around one of ULANDA's six Signature programmes.</p>
              </FadeInWhenVisible>
              <div className="grid md:grid-cols-2 gap-6">
                {signatureProgrammes.map((programme, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.08}>
                    <Link to={programme.path} className="group block bg-base-100 rounded-xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full">
                      <h3 className="font-serif text-lg text-base-content group-hover:text-primary transition-colors leading-snug mb-3">{programme.name} →</h3>
                      <p className="text-sm text-base-content/60 leading-relaxed">{programme.description}</p>
                    </Link>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif text-base-content mb-4">Treatments Available Near Ware</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-3">The Full Range of Medical Aesthetic Treatments — Around 20 Minutes From Ware</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">Many visitors searching for a skin clinic near Ware already know the treatment they are interested in. The treatments below are available at ULANDA in Ware and are introduced following the Advanced Skin Health Consultation to ensure they are clinically appropriate.</p>
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
                          {category.treatments.map((treatment, i) => (
                            <tr key={i} className="border-b border-primary/5 hover:bg-secondary/10 transition-colors">
                              <td className="font-medium text-base-content py-4">{treatment.name}</td>
                              <td className="text-base-content/50 text-sm hidden md:table-cell py-4">{treatment.aka}</td>
                              <td className="text-base-content font-medium text-right py-4 whitespace-nowrap">{treatment.from}</td>
                              <td className="text-right py-4"><Link to={treatment.link} className="text-primary hover:text-primary/80 text-sm font-medium whitespace-nowrap transition-colors">View treatment →</Link></td>
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

        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif text-base-content mb-6">The Advanced Skin Health Consultation</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Clients visiting from Ware begin with the Advanced Skin Health Consultation — the clinical assessment that establishes what your skin actually needs before any treatment is recommended.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">The consultation includes:</p>
                <ul className="space-y-3">
                  {['AI Skin Analysis', 'Barrier evaluation', 'Hormonal history review', 'Skin Barrier Renewal Protocol treatment'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80 text-lg leading-relaxed"><span className="w-2 h-2 rounded-full bg-primary mt-2.5" />{item}</li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="bg-base-100 rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm text-center mt-6">
                  <p className="text-2xl font-bold text-base-content mb-2">£175 · Fully redeemable against your treatment plan when you proceed</p>
                  <p className="text-base-content/70 mb-4">Most clients notice a visible improvement in their skin before they leave their first appointment.</p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white btn-lg mt-2">Book Your Advanced Skin Health Consultation →</a>
                  <p className="text-base-content/70 mt-4">Skin Understood. Then Transformed.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif text-base-content mb-6">Travelling from Ware</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">ULANDA is approximately 20 minutes from Ware via the A1184, a straightforward route connecting the town centre to Ware.</p>
              </FadeInWhenVisible>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <FadeInWhenVisible delay={0.1}>
                  <div className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                    <h3 className="text-lg font-serif text-base-content mb-3">Free Parking On Site</h3>
                    <p className="text-base-content/80 leading-relaxed">ULANDA has dedicated free client parking directly at the clinic.</p>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.2}>
                  <div className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                    <h3 className="text-lg font-serif text-base-content mb-3">By Train</h3>
                    <p className="text-base-content/80 leading-relaxed">Ware station connects to Ware via the Hertford East rail line, with a short change at Broxbourne.</p>
                  </div>
                </FadeInWhenVisible>
              </div>
              <FadeInWhenVisible delay={0.3}>
                <div className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                  <h3 className="text-lg font-serif text-base-content mb-3">Address</h3>
                  <address className="text-base-content/80 leading-relaxed not-italic">
                    Uphaven, 6 Hampden Hill<br />
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
              <FadeInWhenVisible delay={0.4}>
                <p className="text-base-content/80 text-lg leading-relaxed mt-6">ULANDA also welcomes clients from Sawbridgeworth, Stansted Mountfitchet, Hertford, Hoddesdon and Broxbourne.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-serif text-base-content mb-3">Clinical Insights by Email</h2>
              <p className="text-xl font-light text-primary mb-5">Understand Your Skin Better</p>
              <p className="text-base-content/80 text-lg leading-relaxed">Join women across Hertfordshire receiving clinical insights from our lead clinician Helen Balogun — honest explanations of why skin changes and what actually works. No product promotions. No sales emails. Just clinical intelligence, when it is useful.</p>
              <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white mt-6">Subscribe to our Newsletter →</a>
              <p className="text-base-content/60 text-sm mt-3">No obligation. Unsubscribe at any time.</p>
            </FadeInWhenVisible>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif text-base-content mb-6">Frequently Asked Questions</h2>
              </FadeInWhenVisible>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FadeInWhenVisible key={i} delay={i * 0.06}>
                    <div className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                      <h3 className="font-serif text-lg text-base-content mb-2">{faq.q}</h3>
                      <p className="text-base-content/80 leading-relaxed">{faq.a}</p>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif text-base-content mb-5">Serving Ware and East Hertfordshire</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Clients visiting ULANDA from Ware often travel from surrounding areas including Thorley, St Michael's Mead, Stansted Mountfitchet and Sawbridgeworth.</p>
                <div className="text-base-content/80 text-lg leading-relaxed">
                  {areasServed.map((area, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="mx-2">·</span>}
                      {area.link ? <Link to={area.link} className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">{area.name}</Link> : <span>{area.name}</span>}
                    </React.Fragment>
                  ))}
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
