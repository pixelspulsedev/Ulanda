import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import ConsultationCTA from '../components/ConsultationCTA';

const obagiSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.ulanda.co.uk/#medicalbusiness",
    "name": "ULANDA Skin Clinic",
    "url": "https://www.ulanda.co.uk",
    "image": "https://www.ulanda.co.uk/assets/img/home/ulanda-homepage-hero-ware-sg12.webp",
    "telephone": "+44 7904 336031",
    "email": "info@ulanda.co.uk",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Uphaven, 6 Hampden Hill",
      "addressLocality": "Ware",
      "addressRegion": "Hertfordshire",
      "postalCode": "SG12 7JT",
      "addressCountry": "GB"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Prescription Skincare",
    "description": "Consultation-led prescription skincare including Obagi Medical® systems, introduced as part of structured treatment planning at ULANDA skin clinic in Ware, Hertfordshire.",
    "provider": {
      "@type": "MedicalClinic",
      "name": "ULANDA",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ware",
        "addressRegion": "Hertfordshire",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Ware, Hertfordshire"
    },
    "serviceType": "Prescription Skincare"
  },
  {
    "@context": "https://schema.org",
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
        "item": "https://www.ulanda.co.uk/treatments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Obagi Medical® Skincare",
        "item": "https://www.ulanda.co.uk/treatments/obagi-prescription-skincare"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is medical-grade prescription skincare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medical-grade prescription skincare refers to topical formulations designed to influence skin biology, including cellular turnover, melanin production and collagen signalling. These formulations are introduced under clinical supervision to ensure appropriate use and skin barrier stability."
        }
      },
      {
        "@type": "Question",
        "name": "Is Obagi prescription skincare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some Obagi systems contain prescription-strength ingredients and should be introduced under clinical guidance to ensure safe and effective use."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need prescription skincare before aesthetic treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not always. However, improving skin quality through appropriate skincare can enhance the results of regenerative treatments such as injectables or skin renewal procedures."
        }
      },
      {
        "@type": "Question",
        "name": "Can prescription skincare improve pigmentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Certain formulations are designed to regulate melanin production and gradually improve uneven skin tone."
        }
      },
      {
        "@type": "Question",
        "name": "Can I buy Obagi without consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At ULANDA, prescription skincare is introduced only following consultation to ensure suitability and protect skin barrier stability."
        }
      }
    ]
  }
];

export default function ObagiPrescriptionSkincare() {
  return (
    <>
      <Head>
        <title>Obagi Medical® Skincare Ware | ULANDA Clinic</title>
        <meta name="description" content="Prescription skincare in Ware including Obagi medical-grade products introduced through consultation-led skin assessment and barrier-first treatment planning." />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments/obagi-prescription-skincare" />
        {obagiSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
        <meta property="og:title" content="Obagi Medical® Skincare Ware | ULANDA Clinic" />
        <meta property="og:description" content="Prescription skincare in Ware including Obagi medical-grade products introduced through consultation-led skin assessment and barrier-first treatment planning." />
        <meta property="og:url" content="https://www.ulanda.co.uk/treatments/obagi-prescription-skincare" />
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
                ← Back to All Treatments
              </Link>
              <h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-4">
                <HeroText>Obagi Medical® Skincare</HeroText>
              </h1>
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

        {/* Medical-Grade Skincare Introduction */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Medical-Grade Skincare Within Clinical Skin Treatment Planning</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Prescription skincare may be introduced when certain skin concerns cannot be fully addressed through over-the-counter products alone.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">At ULANDA, prescription-strength skincare includes clinically proven systems such as Obagi Medical® — may be introduced as part of a structured treatment plan following your Skin Health Consultation at our skin clinic in Ware, Hertfordshire.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Obagi Medical® prescription skincare refers to medical-grade topical formulations used within clinical aesthetic practice to regulate pigmentation, stimulate collagen renewal and improve overall skin quality under professional supervision. It is commonly introduced as part of a consultation-led treatment pathway within medical aesthetics clinics.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="text-base-content/80 text-lg leading-relaxed font-medium mb-6">These products are not sold as retail skincare.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <Link to="/treatments/advanced-skin-health-consultation" className="btn btn-primary text-white">
                  Explore the Skin Health Consultation →
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Why Prescription Skincare Requires Clinical Assessment */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Why Prescription Skincare Requires Clinical Assessment</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Many skin concerns — including persistent pigmentation, acne, premature ageing and texture irregularities — are influenced by deeper biological processes.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Prescription-strength formulations can influence:</p>
                <ul className="space-y-2 mb-8">
                  {['Cellular turnover', 'Melanin production', 'Collagen signalling', 'Sebaceous activity', 'Inflammatory response'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Because of their potency, these treatments require appropriate guidance and monitoring. Prescription-strength skincare is commonly used within advanced skin care and medical aesthetics to prepare the skin for advanced treatments.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Introducing prescription skincare without proper assessment may increase the risk of:</p>
                <ul className="space-y-2 mb-8">
                  {['Barrier disruption', 'Irritation or inflammation', 'Pigmentation rebound', 'Reduced treatment tolerance'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-red-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">At ULANDA, prescription skincare is introduced within a Skin Barrier Renewal Protocol to protect skin integrity and improve long-term outcomes.</p>
                <Link to="/treatments/skin-barrier-renewal-protocol" className="btn btn-primary text-white">
                  Explore the Skin Barrier Renewal Protocol →
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* How Obagi Medical® Supports Skin Treatment Pathways */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">How Obagi Medical® Supports Skin Treatment Pathways</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">ULANDA may prescribe Obagi Medical® skincare systems where clinically appropriate.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Obagi Medical® Products have been specifically formulated to transform the skin from within to result in younger, healthier-looking skin. The Obagi Medical® Product range helps reduce the visible signs of ageing such as fine-lines, wrinkles, melasma (dark spots), hyper-pigmentation, laxity and uneven texture with additional targeted treatments for acne.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Commonly addressed concerns include:</p>
                <ul className="space-y-2 mb-8">
                  {['Hyperpigmentation', 'Uneven skin tone', 'Early signs of ageing', 'Acne and congestion', 'Skin texture irregularities'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Key ingredients used in prescription-level skincare may include:</p>
                <ul className="space-y-2 mb-8">
                  {['Retinoids', 'Hydroquinone (when appropriate)', 'Medical-grade antioxidants', 'Targeted pigment inhibitors'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">These formulations are often introduced gradually to ensure the skin barrier remains stable while treatment progresses.</p>
                <p className="text-base-content/80 text-lg leading-relaxed">Obagi Medical® is not introduced as a stand-alone cosmetic product, but as part of a clinician-guided skin treatment pathway, tailored to your skin's biological behaviour.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Preparing the Skin for Advanced Treatments */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Preparing the Skin for Advanced Treatments</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">At ULANDA, prescription skincare is sometimes used to improve skin stability and epidermal renewal before more advanced treatments are introduced.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">When the skin barrier is stable and inflammatory activity is controlled, clinicians may introduce treatments designed to support:</p>
                <ul className="space-y-2 mb-8">
                  {['Collagen regeneration and dermal repair treatments', 'Deep hydration and skin bio-remodelling therapies'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">These treatments are introduced gradually and only when appropriate for the individual's skin condition.</p>
              </FadeInWhenVisible>

              {/* Treatment Pathway Stages */}
              <FadeInWhenVisible delay={0.4}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Your treatment pathway may involve:</p>
                <div className="space-y-6 mb-8">
                  {[
                    { stage: 'Stage 1', title: 'Skin Health Consultation', description: 'Comprehensive clinical assessment including barrier analysis and AI skin imaging.' },
                    { stage: 'Stage 2', title: 'Barrier Stabilisation', description: 'Where necessary, the Skin Barrier Renewal Protocol is introduced to restore skin stability.' },
                    { stage: 'Stage 3', title: 'Skin Optimisation', description: 'Prescription skincare may be introduced to regulate pigmentation, improve collagen behaviour or manage congestion.' },
                    { stage: 'Stage 4', title: 'Regenerative Treatments', description: 'Injectables, structural treatments or advanced renewal therapies may be introduced once the skin is biologically prepared.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                      <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">{item.stage}</p>
                      <h3 className="text-xl font-serif text-base-content mb-2">{item.title}</h3>
                      <p className="text-base-content/80 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <p className="text-base-content/80 text-lg leading-relaxed">This sequencing improves treatment predictability and long-term skin resilience.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Who May Benefit */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Who May Benefit From Prescription Skincare?</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Prescription skincare may be appropriate for clients experiencing:</p>
                <ul className="space-y-2 mb-8">
                  {['Persistent pigmentation', 'Acne that has not responded to standard skincare', 'Early signs of collagen decline', 'Uneven texture or dull tone', 'Post-inflammatory pigmentation'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Clients navigating hormonal skin changes, including postpartum recovery or perimenopause, may also benefit from clinically supervised skincare optimisation.</p>
                <p className="text-base-content/80 text-lg leading-relaxed">Suitability is determined following consultation.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Clinical Insights */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-4">Clinical Insights on Skin Behaviour</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Understanding how skin responds to environmental stress, hormonal change and treatment sequencing helps improve long-term outcomes.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">ULANDA publishes clinical insights exploring these topics in more detail.</p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg mb-4">Recommended reading:</p>
              </FadeInWhenVisible>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Why Barrier Repair Is Essential Before Structural Regeneration",
                    slug: "barrier-repair-before-skin-regeneration",
                    description: "Collagen stimulation depends on stable inflammatory signalling. Learn why barrier-first sequencing improves predictability."
                  },
                  {
                    title: "How to Repair a Damaged Skin Barrier Professionally",
                    slug: "how-to-repair-damaged-skin-barrier",
                    description: "A clinical guide to restoring lipid matrix integrity, reducing inflammatory instability and improving treatment tolerance."
                  },
                  {
                    title: "Where to Get a Medical Skin Consultation in Ware",
                    slug: "medical-skin-consultation-ware",
                    description: "What to expect from a clinician-led assessment of barrier integrity, inflammatory load and treatment suitability."
                  }
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

        {/* Why Prescription Skincare Is Not Sold Online */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Why Prescription Skincare Is Not Sold Online</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Prescription skincare is often marketed as a product purchase.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">At ULANDA it is treated differently.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">These formulations influence skin biology and therefore require:</p>
                <ul className="space-y-2 mb-8">
                  {['Appropriate diagnosis', 'Barrier assessment', 'Gradual introduction', 'Ongoing monitoring'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">For this reason, prescription skincare is introduced only after consultation rather than being sold as retail skincare.</p>
                <p className="text-base-content/80 text-lg leading-relaxed">This protects skin integrity and ensures treatment is appropriate for your individual skin behaviour.</p>
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
                {[
                  {
                    question: "What is medical-grade prescription skincare?",
                    answer: "Medical-grade prescription skincare refers to topical formulations designed to influence skin biology, including cellular turnover, melanin production and collagen signalling. These formulations are introduced under clinical supervision to ensure appropriate use and skin barrier stability."
                  },
                  {
                    question: "Is Obagi prescription skincare?",
                    answer: "Some Obagi systems contain prescription-strength ingredients and should be introduced under clinical guidance to ensure safe and effective use."
                  },
                  {
                    question: "Do I need prescription skincare before aesthetic treatments?",
                    answer: "Not always. However, improving skin quality through appropriate skincare can enhance the results of regenerative treatments such as injectables or skin renewal procedures."
                  },
                  {
                    question: "Can prescription skincare improve pigmentation?",
                    answer: "Yes. Certain formulations are designed to regulate melanin production and gradually improve uneven skin tone."
                  },
                  {
                    question: "Can I buy Obagi without consultation?",
                    answer: "At ULANDA, prescription skincare is introduced only following consultation to ensure suitability and protect skin barrier stability."
                  }
                ].map((faq, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.05}>
                    <div className="collapse collapse-arrow bg-secondary/30 border border-primary/10 rounded-lg">
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

        {/* Local Area */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">Obagi Prescription Skincare in Ware, Hertfordshire</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">ULANDA provides consultation-led prescription skincare including Obagi Medical systems at our skin clinic in Ware, Hertfordshire.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Clients visit ULANDA from across East Hertfordshire seeking clinically supervised skincare and structured treatment planning.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Areas commonly served include:</p>
                <ul className="space-y-2 mb-6">
                  {['Ware', 'Hertford', 'Broxbourne', 'Hoddesdon', "Bishop's Stortford"].map((area, i) => (
                    <li key={i} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed">Prescription skincare recommendations are made following consultation to ensure suitability for your skin condition and barrier stability.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">Begin With a Skin Health Consultation</h2>
              <div className="mt-6 space-y-2 mb-8">
                <p className="text-2xl font-serif text-primary">Consultation Investment</p>
                <p className="text-4xl font-bold text-base-content">£175</p>
                <p className="text-base-content/60">Duration: 60–90 minutes</p>
                <p className="text-base-content/80 font-medium">Fully redeemable against your treatment plan.</p>
              </div>
              <a
                href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white shadow-md btn-lg"
              >
                Begin With a Skin Health Consultation →
              </a>
              <p className="text-sm font-medium text-primary/80 mt-4 tracking-wide">Skin Understood. Then Transformed.</p>
              <p className="text-base-content/60 text-sm mt-6">ULANDA is a nurse-led skin clinic in Ware specialising in medical aesthetics and barrier-first skin health.</p>
            </FadeInWhenVisible>
          </div>
        </section>
        <ConsultationCTA />
      </div>
    </>
  );
}
