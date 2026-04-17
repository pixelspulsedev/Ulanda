import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import ConsultationCTA from '../components/ConsultationCTA';

const barrierSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "ULANDA",
    "description": "Nurse-led medical aesthetic clinic in Ware specialising in barrier-first skin assessment, regenerative treatment sequencing and structured skin health planning.",
    "medicalSpecialty": "Dermatologic",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ware",
      "addressRegion": "Hertfordshire",
      "addressCountry": "GB"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Ware" },
      { "@type": "AdministrativeArea", "name": "Hertford" },
      { "@type": "AdministrativeArea", "name": "Broxbourne" },
      { "@type": "AdministrativeArea", "name": "Hoddesdon" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Skin Barrier Renewal Protocol",
    "description": "A clinician-led stabilisation framework prescribing the appropriate skin barrier treatment modality following consultation. Used to restore barrier integrity before advanced regenerative treatment.",
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
      "name": "Hertfordshire"
    },
    "serviceType": "Clinical Skin Barrier Stabilisation"
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
        "name": "Skin Barrier Renewal Protocol",
        "item": "https://www.ulanda.co.uk/treatments/skin-barrier-renewal-protocol"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the Skin Barrier Renewal Protocol a treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. It is a clinician-led framework used to prescribe the appropriate barrier modality following consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a barrier treatment directly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All first-time clients begin with an Advanced Skin Health Consultation to ensure biological suitability and correct sequencing."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my skin barrier is compromised?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common signs include sensitivity, redness, dehydration, stinging, breakouts and poor tolerance to skincare. Clinical assessment confirms barrier status."
        }
      },
      {
        "@type": "Question",
        "name": "How many barrier sessions will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This depends on the severity of instability identified during consultation. Some clients require a single stabilisation phase; others benefit from structured sequencing before progressing into Signature treatment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I proceed straight to injectables?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If barrier instability is present, stabilisation may be recommended first to support safer recovery and more predictable outcomes."
        }
      }
    ]
  }
];

const barrierModalities = [
  {
    title: "Skin Barrier Deep Cleanse",
    slug: "skin-barrier-deep-cleanse",
    description: "For congestion-dominant presentations requiring careful removal of debris without stripping protective lipids.",
    image: "https://media.istockphoto.com/id/1755416967/photo/close-up-shot-of-a-young-beautiful-woman-lying-on-a-couch-in-a-cosmetology-center-young-woman.jpg?s=612x612&w=0&k=20&c=50Pk3m1CtnfKvvUA64-Qzc6amy9pvKpJZtphtRYL3mI="
  },
  {
    title: "Skin Barrier Hydration",
    slug: "skin-barrier-hydration",
    description: "For dehydration-dominant presentations requiring structured multi-level hydration restoration.",
    image: "/assets/img/treatments/skin-barrier-hydration.webp"
  },
  {
    title: "Skin Barrier Enzyme Renewal",
    slug: "skin-barrier-enzyme-renewal",
    description: "For dull, uneven or turnover-impaired presentations requiring controlled enzymatic support.",
    image: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW56eW1lJTIwZmFjZSUyMHRyZWF0bWVudHxlbnwwfDF8MHx8fDA%3D"
  },
  {
    title: "Skin Barrier Oxygenation",
    slug: "skin-barrier-oxygenation",
    description: "For environmentally stressed or circulation-compromised skin requiring oxygenation support.",
    image: "/assets/img/treatments/refresh/aesthetic-treatment-anti-aging-oxygen-facials.webp"
  },
  {
    title: "Skin Barrier Restore",
    slug: "skin-barrier-restore",
    description: "For highly reactive, compromised or over-treated skin requiring intensive barrier rebuilding.",
    image: "https://images.unsplash.com/photo-1670201202784-ec638a82bca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW4lMjBiYXJyaWVyfGVufDB8MXwwfHx8MA%3D%3D"
  }
];

export default function SkinBarrierRenewalProtocol() {
  return (
    <>
      <Head>
        <title>Skin Barrier Renewal Protocol | ULANDA Ware</title>
        <meta name="description" content="Clinical skin barrier repair in Ware, Hertford & Broxbourne. A structured protocol restoring barrier integrity before advanced treatment." />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments/skin-barrier-renewal-protocol" />
        {barrierSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
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
              <HeroText>Skin Barrier Renewal Protocol</HeroText>
            </h1>
            <p className="text-xl md:text-2xl font-light text-primary mb-8 leading-relaxed">
              Nurse-led barrier stabilisation — delivered within your Advanced Skin Health Consultation
            </p>
            <div className="space-y-4 text-base-content/80 text-lg leading-relaxed max-w-3xl">
              <FadeInWhenVisible delay={0.2}>
                <p>Your skin barrier is not simply the surface of your skin. It is the biological foundation on which every regenerative treatment either succeeds or falls short. When it is compromised whether through hormonal change, environmental stress, over-treatment or incorrect product use, no treatment applied on top of it will deliver what it is capable of delivering in stable skin.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p>The Skin Barrier Renewal Protocol is how ULANDA begins addressing that foundation. It is not a standalone bookable treatment. It is a clinician-led clinical response which is delivered within your Advanced Skin Health Consultation, on the same day as your assessment, personalised entirely to what your skin needs on that day.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="font-medium text-base-content text-xl mt-6 italic">Your results begin before you leave.</p>
              </FadeInWhenVisible>
            </div>
            <FadeInWhenVisible delay={0.5}>
              <div className="mt-8">
                <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white shadow-md">
                  Book Your Advanced Skin Health Consultation →
                </a>
                <p className="text-base-content/60 mt-3 text-sm">£175 — fully redeemable against your treatment plan</p>
                <p className="text-sm font-medium text-primary/80 mt-1 tracking-wide">Skin Understood. Then Transformed.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* How This Protocol Works Section */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-3xl font-serif text-base-content mb-6">How This Protocol Works</h2>
                <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">This Is Not a Treatment You Book. It Is a Clinical Response to What Your Skin Needs.</h3>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">The Skin Barrier Renewal Protocol sits within the Advanced Skin Health Consultation, not after it and not separately from it. The same appointment that assesses your skin is the appointment that begins restoring it.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="font-medium text-base-content text-lg mb-4">Here is how that works in practice.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">When our clinicians evaluate your skin, they use a full clinical assessment which includes AI Skin Analysis, visual and tactile barrier evaluation, inflammatory marker assessment and internal health context to build a complete picture of what your skin barrier is doing and why. Where barrier compromise is identified, which is the case for most new clients, they begin addressing it immediately using the clinical components within this protocol that your specific findings indicate.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed">You do not leave with a plan for future treatment and a skin that is no different to when you arrived. You leave with your skin already in a measurably better state and a clear, personalised roadmap for what comes next.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Clinician-Selected Variations */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10 max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <p className="uppercase tracking-widest text-sm font-semibold text-primary mb-2">THE CLINICAL COMPONENTS</p>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">The Tools Our Clinicians Draw From</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">The sub-treatments listed below are the clinical components Our clinicians select from when building your personalised protocol. They are not a treatment menu. They are not available as individual direct bookings. They are the instruments in a clinician’s hands chosen based on your assessment findings, your skin’s dominant biological presentation and what your barrier needs on that specific day.</p>
              </FadeInWhenVisible>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {barrierModalities.map((mod, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                    <Link 
                      to={`/treatments/skin-barrier-renewal-protocol/${mod.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-secondary flex flex-col h-full"
                    >
                      <div className="relative h-56 overflow-hidden">
                        {mod.image ? (
                          <img
                            src={mod.image}
                            alt={mod.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-secondary flex items-center justify-center text-primary/30">
                            <span className="text-4xl font-serif italic">Ulanda</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-primary transition-colors">
                          {mod.title}
                        </h3>
                        <p className="text-base-content/70 text-sm font-light leading-relaxed mb-4 flex-1">
                          {mod.description}
                        </p>
                        <div className="btn btn-primary text-white w-full rounded-full group-hover:shadow-md transition-all mt-4">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </FadeInWhenVisible>
                ))}
            </div>
            
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible delay={0.6}>
                <div className="mt-12 space-y-4 text-center bg-secondary/10 p-8 rounded-2xl border border-secondary">
                  <p className="font-serif text-xl text-base-content font-medium">Important — please read before booking:</p>
                  <p className="text-base-content/80 text-lg leading-relaxed">The clinical components above are not available as individual direct bookings. Each is introduced within your Advanced Skin Health Consultation where your assessment findings indicate it. Booking your consultation is how you access this protocol.</p>
                  
                  <div className="mt-6">
                    <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white shadow-md">
                      Book Your Advanced Skin Health Consultation →
                    </a>
                    <p className="text-base-content/60 mt-3 text-sm">£175 — fully redeemable against your treatment plan</p>
                    <p className="text-sm font-medium text-primary/80 mt-1 tracking-wide">Skin Understood. Then Transformed.</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* What Is the Protocol */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">What Is the Skin Barrier Renewal Protocol?</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">The Skin Barrier Renewal Protocol is a structured clinical pathway delivered following your <Link to="/treatments/advanced-skin-health-consultation" className="text-primary hover:underline">Advanced Skin Health Consultation</Link>.</p>
                <div className="space-y-2 mb-6">
                  <p className="font-medium text-base-content">It is not a single treatment.</p>
                  <p className="text-base-content/80">It is the decision-making framework used to prescribe the most appropriate barrier modality based on your skin's dominant biological presentation.</p>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg mb-4">It is designed to:</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Restore lipid matrix integrity",
                    "Reduce transepidermal water loss (TEWL)",
                    "Regulate inflammatory signalling",
                    "Improve treatment tolerance",
                    "Prepare the skin for regenerative sequencing"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <div className="space-y-2">
                  <p className="font-medium text-base-content">This is biological correction.</p>
                  <p className="font-medium text-base-content">Not cosmetic enhancement.</p>
                  <p className="text-base-content/70 mt-4">Where clinically indicated, stabilisation may begin during your consultation appointment.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* What Is the Skin Barrier */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">What Is the Skin Barrier?</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">The skin barrier is the outermost protective layer of the epidermis responsible for:</p>
                <ul className="space-y-2 mb-8">
                  {["Retaining hydration", "Preventing environmental penetration", "Regulating immune response", "Supporting fibroblast function", "Protecting collagen behaviour"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">When compromised, it presents as:</p>
                <div className="grid md:grid-cols-2 gap-2 mb-8">
                  {["Persistent dehydration", "Sensitivity or stinging", "Redness or inflammation", "Breakouts", "Dull tone", "Accelerated ageing"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-base-content/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-2">Barrier dysfunction disrupts inflammatory signalling and impairs collagen responsiveness.</p>
                <p className="font-medium text-base-content text-lg">Correcting it first improves every subsequent treatment outcome.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Why Barrier Stabilisation Comes First */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">Why Barrier Stabilisation Comes Before Advanced Treatments</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <h3 className="text-2xl font-serif text-base-content mb-4 mt-2">Improving Treatment Readiness</h3>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Barrier stabilisation does more than improve skin comfort.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">By restoring hydration balance and regulating inflammatory signalling, the Skin Barrier Renewal Protocol helps prepare the skin for future regenerative treatments.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Improved barrier integrity enhances treatment readiness, allowing procedures such as polynucleotides, bio-remodelling and regenerative therapies, injectables or collagen-support therapies to be introduced with greater predictability and tolerance.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">If the barrier is compromised:</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-base-200/50 rounded-lg p-8">
                    <h3 className="font-serif text-xl text-base-content mb-4">Risks increase:</h3>
                    <ul className="space-y-2 text-base-content/70">
                      {["Recovery time increases", "Results are less predictable", "Sensitivity worsens", "Pigmentation may rebound", "Inflammation prolongs"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2"><span className="text-red-400">•</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary rounded-lg p-8 border border-primary/20">
                    <h3 className="font-serif text-xl text-primary mb-4">Barrier-first sequencing improves:</h3>
                    <ul className="space-y-2 text-base-content/80">
                      {["Treatment tolerance", "Outcome predictability", "Long-term structural response"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2"><span className="text-primary">✔</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="font-medium text-base-content text-lg">This is risk mitigation and outcome optimisation.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Begin With Assessment CTA */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Begin With Assessment</h2>
              <p className="text-base-content/70 text-lg leading-relaxed mb-4">Barrier instability cannot be diagnosed visually alone.</p>
              <p className="text-base-content/80 text-lg leading-relaxed mb-8">All first-time clients begin with an <Link to="/treatments/advanced-skin-health-consultation" className="text-primary hover:underline font-medium">Advanced Skin Health Consultation</Link> to determine:</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <ul className="space-y-3 text-left max-w-md mx-auto mb-10">
                {[
                  "Whether stabilisation is required",
                  "Which barrier modality is appropriate",
                  "When progression into Signature treatment is safe"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base-content/80 text-lg">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-base-100 rounded-2xl p-10 shadow-sm max-w-lg mx-auto">
                <h3 className="text-xl font-serif text-base-content mb-2">Advanced Skin Health Consultation</h3>
                <p className="text-4xl font-serif text-primary mb-2">£175</p>
                <p className="text-base-content/60 mb-6">60–90 Minutes</p>
                <a 
                  href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white px-10 py-3 h-auto text-lg rounded-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Begin With an Advanced Skin Health Consultation →
                </a>
                <p className="text-sm font-medium text-primary/80 mt-4 tracking-wide">Immediate visible refinement. Structured long-term plan.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Progression Into Signature */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">Progression Into Signature Treatment</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="space-y-4 text-base-content/80 text-lg leading-relaxed">
                  <p>Once barrier stability is established, progression into your <Link to="/signature" className="text-primary hover:underline">Signature programme</Link> becomes biologically aligned and more predictable.</p>
                  <p>Clients with persistent instability may progress into our <Link to="/signature/skin-barrier-repair-recovery" className="text-primary hover:underline">Skin Barrier Repair &amp; Resilience Signature</Link> — a structured programme designed to rebuild resilience and prevent recurrence.</p>
                  <p>Where vascular instability or inflammatory redness is dominant, stabilisation may transition into our <Link to="/signature/rosacea-redness-control" className="text-primary hover:underline">Rosacea &amp; Redness Control Signature</Link>, addressing deeper inflammatory signalling and vascular behaviour.</p>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="mt-6 space-y-1">
                  <p className="font-medium text-base-content">Barrier renewal prepares the skin.</p>
                  <p className="font-medium text-base-content">Signature treatment delivers sustained correction.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Clinical Enhancements */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">Clinical Enhancements — Where Indicated</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Where biologically appropriate, the protocol may incorporate:</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <ul className="space-y-3 mb-6">
                  {["Dermaplaning Therapy", "LED Phototherapy", "Lymphatic Drainage Therapy"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-1 text-base-content/60">
                  <p className="font-medium text-base-content">These are integrated only when clinically indicated.</p>
                  <p className="font-medium text-base-content">They are not standalone bookings.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Who Benefits */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">Who Benefits From Barrier Renewal?</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Barrier stabilisation may be appropriate for clients in Ware, Hertford, Broxbourne, Hoddesdon and surrounding Hertfordshire areas presenting with:</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Sensitive or reactive skin",
                    "Over-exfoliated skin",
                    "Hormone-affected skin",
                    "Post-procedure recovery needs",
                    "Environmental stress damage",
                    "Persistent dehydration"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base-content/60">Suitability is determined during consultation.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">What to Expect</h2>
              </FadeInWhenVisible>
              <div className="grid md:grid-cols-3 gap-8">
                <FadeInWhenVisible delay={0.1}>
                  <div className="bg-secondary rounded-lg p-8">
                    <h3 className="font-serif text-xl text-primary mb-4">During Treatment</h3>
                    <ul className="space-y-2 text-base-content/70">
                      <li>A personalised barrier modality selected following clinical assessment.</li>
                      <li>No aggressive stripping.</li>
                      <li>No unnecessary irritation.</li>
                      <li>Duration varies depending on presentation severity.</li>
                    </ul>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.2}>
                  <div className="bg-secondary rounded-lg p-8">
                    <h3 className="font-serif text-xl text-primary mb-4">Immediately After</h3>
                    <p className="text-base-content/70 mb-2">Most clients notice:</p>
                    <ul className="space-y-2 text-base-content/70">
                      {["Reduced redness", "Improved comfort", "Balanced hydration", "Improved skin texture"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2"><span className="text-primary">•</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.3}>
                  <div className="bg-secondary rounded-lg p-8">
                    <h3 className="font-serif text-xl text-primary mb-4">Over the Following Weeks</h3>
                    <p className="text-base-content/70 mb-2">With appropriate homecare and progression into your Signature Treatment Plan:</p>
                    <ul className="space-y-2 text-base-content/70">
                      {["Barrier resilience strengthens", "Inflammation reduces", "Collagen responsiveness improves", "Treatment predictability increases"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2"><span className="text-primary">•</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </FadeInWhenVisible>
              </div>
              <FadeInWhenVisible delay={0.4}>
                <p className="font-medium text-base-content mt-8 text-center">Barrier repair is foundational, not cosmetic.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-serif text-base-content text-center mb-8">Frequently Asked Questions</h2>
          </FadeInWhenVisible>
          <div className="space-y-4">
            {[
              { q: "Can I book the Skin Barrier Renewal Protocol directly?", a: "No — and this is a clinical decision, not an administrative one. The protocol is personalised to your assessment findings on the day. Without a clinical assessment of your barrier status, there is no basis for determining which components are appropriate for your skin. The components that are right for skin with significant inflammatory instability are different from those indicated for skin with dehydration-led compromise. The assessment makes that determination. Booking your consultation is how you access the protocol." },
              { q: "I previously booked barrier treatments directly at ULANDA — why has this changed?", a: "The model has evolved because the evidence for assessment-led treatment is unambiguous. Delivering a barrier treatment without first evaluating the state of your barrier produces a generic response to an individual biological state. The change reflects a commitment to clinical integrity. Your results will be more precise, more appropriate and more durable because the treatment you receive will be based on what your skin specifically needs — not on what seemed reasonable without measurement." },
              { q: "What is the difference between the protocol and the individual sub-treatments listed on this page?", a: "The Skin Barrier Renewal Protocol is the clinical framework — the structured approach our clinicians use to assess and begin restoring your barrier within your consultation. The sub-treatments listed — Skin Barrier Restore, Skin Barrier Deep Cleanse, Skin Barrier Hydration, Skin Barrier Enzyme Renewal and Skin Barrier Oxygenation — are the specific clinical components they draw from when building your personalised response. They are the tools within the protocol. Your assessment determines which of those tools your skin needs." },
              { q: "Will I notice a difference on the day of my consultation?", a: "Most clients do. As barrier function begins to stabilise and inflammatory load reduces, the skin typically appears calmer, more even in tone and more hydrated in reflectivity. This is not a cosmetic surface effect — it is the visible result of improved biological stability. The degree of immediate change depends on your specific presentation and the components indicated by your assessment." },
{ q: "How does the Skin Barrier Renewal Protocol relate to the Skin Barrier Repair & Resilience Signature programme?", a: "The protocol is the beginning \u2014 delivered at your consultation. The Skin Barrier Repair & Resilience Signature is the continuation \u2014 a structured multi-session programme for clients where significant barrier compromise is the dominant clinical presentation and a single protocol session is the first step in a longer restoration pathway. Our clinicians will advise at your consultation whether the Signature is indicated for you and what it would involve." },
              { q: "Is the consultation fee separate from the protocol?", a: "No. Your Advanced Skin Health Consultation fee of £175 covers the full consultation including clinical assessment, AI Skin Analysis, barrier evaluation and the Skin Barrier Renewal Protocol where clinically indicated. The £175 is also fully redeemable against your Signature programme when you proceed — meaning it is an investment in your treatment plan, not an additional cost on top of it." },
              { q: "What is a skin barrier treatment?", a: "A skin barrier treatment is a clinician-led protocol designed to repair the outer protective layer of the skin, reduce inflammation and restore hydration balance before advanced treatments." },
              { q: "How do I know if my skin barrier is damaged?", a: "Common signs include persistent sensitivity, redness, dehydration, stinging, breakouts and poor tolerance to skincare. Clinical assessment confirms diagnosis." },
              { q: "Can I repair my skin barrier at home?", a: "Mild disruption may improve with correct homecare. Moderate to severe compromise often requires structured clinical stabilisation." },
              { q: "How many sessions will I need?", a: "Some clients require a single stabilisation session. Others benefit from structured sequencing before progressing into regenerative treatment." },
              { q: "Is this suitable for sensitive skin?", a: "Yes. The protocol is specifically designed for reactive and sensitive presentations." },
              { q: "Can I skip barrier repair and go straight to injectables?", a: "If instability is present, skipping stabilisation may reduce treatment predictability and increase recovery time." }
            ].map((faq, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                <div className="collapse collapse-plus bg-secondary/20 border border-base-200 rounded-lg">
                  <input type="radio" name="barrier-faq" defaultChecked={idx === 0} />
                  <div className="collapse-title text-xl font-medium font-sans text-primary py-6">{faq.q}</div>
                  <div className="collapse-content pb-6">
                    <p className="text-base-content/80 font-light leading-relaxed text-lg">{faq.a}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Clinical Journey */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-8">How This Fits Within Your Clinical Journey</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="space-y-4">
                  {[
                    { step: "Stage 1", label: "Advanced Skin Health Consultation", link: "/treatments/advanced-skin-health-consultation" },
                    { step: "Stage 2", label: "Skin Barrier Renewal Protocol", active: true },
                    { step: "Stage 3", label: "Signature Treatment Programme", link: "/signature" },
                    { step: "Stage 4", label: "Adjunct Programmes", subtitle: "where indicated" }
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-6 rounded-lg ${item.active ? 'bg-primary text-white' : 'bg-base-100'}`}>
                      <span className={`text-sm font-medium uppercase tracking-widest ${item.active ? 'text-white/70' : 'text-primary/60'}`}>{item.step}</span>
                      <div className="text-left">
                        {item.link ? (
                          <Link to={item.link} className={`font-serif text-lg ${item.active ? 'text-white' : 'text-base-content hover:text-primary'}`}>{item.label}</Link>
                        ) : (
                          <span className={`font-serif text-lg ${item.active ? 'text-white' : 'text-base-content'}`}>{item.label}</span>
                        )}
                        {item.subtitle && <span className={`text-sm ml-2 ${item.active ? 'text-white/60' : 'text-base-content/50'}`}>({item.subtitle})</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="mt-8 space-y-2 text-base-content/60">
                  <p>This is not a treatment menu.</p>
                  <p className="font-medium text-base-content">It is a clinical relationship.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Investment</h2>
              <p className="text-base-content/70 text-lg leading-relaxed mb-8">The Skin Barrier Renewal Protocol is delivered following your Advanced Skin Health Consultation.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-secondary rounded-2xl p-10 shadow-sm max-w-lg mx-auto">
                <p className="text-base-content/60 mb-2">Consultation investment:</p>
                <p className="text-5xl font-serif text-primary mb-2">£175</p>
                <p className="text-lg text-base-content/70 mb-4">60–90 minutes</p>
                <p className="text-base-content/60 mb-8">Fully redeemable against your personalised treatment pathway.</p>
                <p className="text-sm text-base-content/50 mb-6">All treatment planning is bespoke and sequenced according to biological presentation markers.</p>
                <a
                  href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white px-10 py-3 h-auto text-lg rounded-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Begin With an Advanced Skin Health Consultation →
                </a>
                <p className="text-sm font-medium text-primary/80 mt-4 tracking-wide">Immediate visible refinement. Structured long-term plan.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Clinical Insight */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-3">Clinical Insight</h2>
              <p className="text-base-content/60 text-lg mb-8">Evidence-based reading from the ULANDA clinical journal exploring barrier science, stabilisation and regenerative sequencing.</p>
            </FadeInWhenVisible>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Barrier Breakdown: The Science Behind Compromised Skin — And How Regeneration Restores It Naturally",
                  slug: "barrier-breakdown-science-regenerative-restoration",
                  description: "A clinician's guide to understanding barrier dysfunction and the regenerative approach to restoring your skin's first line of defence."
                },
                {
                  title: "The Skin Barrier Breakdown After 40 — A Regenerative Guide",
                  slug: "skin-barrier-breakdown-after-40",
                  description: "A clinical, menopause-aware explanation of why barrier collapse accelerates ageing and how regeneration rebuilds protection."
                },
                {
                  title: "Why Barrier Repair Is Essential Before Structural Regeneration",
                  slug: "barrier-repair-before-skin-regeneration",
                  description: "Collagen stimulation and bio-remodelling depend on stable inflammatory signalling. Barrier-first sequencing improves predictability."
                },
                {
                  title: "How to Repair a Damaged Skin Barrier Professionally",
                  slug: "how-to-repair-damaged-skin-barrier",
                  description: "A clinical guide to restoring lipid matrix integrity, reducing inflammatory instability and improving treatment tolerance."
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
        </section>

        {/* Clinical Oversight */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-2xl md:text-3xl font-serif text-base-content mb-4">Clinical Oversight</h2>
              <p className="text-base-content/70 leading-relaxed mb-2">All consultations and treatment planning are conducted by a qualified medical aesthetic practitioner with advanced training in skin biology, regenerative aesthetics and prescribing practice.</p>
              <p className="text-base-content font-medium">ULANDA operates as a clinician-led Medical Aesthetic Clinic in Ware — not a treatment studio.</p>
            </FadeInWhenVisible>
          </div>
        </section>
        <ConsultationCTA />
      </div>
    </>
  );
}
