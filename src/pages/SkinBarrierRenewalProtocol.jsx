import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

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
    image: "/assets/img/treatments/refresh/skin-clinic-ware-deep-hydration.webp"
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
        <title>Skin Barrier Renewal Protocol | Ware Hertfordshire</title>
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
            <h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-6">
              <HeroText>Skin Barrier Renewal Protocol in Ware, Hertfordshire</HeroText>
            </h1>
            <div className="space-y-4 text-base-content/80 text-lg leading-relaxed max-w-3xl">
              <FadeInWhenVisible delay={0.2}>
                <p>The Skin Barrier Renewal Protocol at ULANDA is a clinician-led stabilisation framework designed to repair and optimise compromised skin barrier function before advanced regenerative treatment begins.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-sm text-base-content/60">ULANDA operates as a clinician-led Skin Clinic in Ware and Medical Aesthetic Clinic serving Ware, Hertford, Broxbourne, Hoddesdon and surrounding Hertfordshire areas.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p>If the barrier is unstable, no pigmentation correction, collagen stimulation, bio-remodelling or injectable treatment will perform as predictably as it should.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <div className="space-y-1 font-medium text-base-content">
                  <p>Barrier integrity is never assumed.</p>
                  <p>It is assessed, stabilised and strengthened first.</p>
                </div>
              </FadeInWhenVisible>
            </div>
            <FadeInWhenVisible delay={0.6}>
              <Link to="/book-consultation" className="btn btn-primary text-white mt-6 shadow-md">
                Book Skin Health Consultation
              </Link>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Clinician-Selected Variations */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10 max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">Clinician-Selected Variations Within the Protocol</h2>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Following your consultation, your clinician selects the most appropriate variation based on your dominant biological presentation. Possible prescribed variations include:</p>
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
                <div className="mt-12 space-y-2 text-base-content/60 text-center">
                  <p>Each variation links to its dedicated page for deeper explanation.</p>
                  <p className="font-medium text-base-content">Selection is clinician-determined.</p>
                  <p className="font-medium text-base-content">It is never chosen from a menu.</p>
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
                <Link 
                  to="/book-consultation"
                  className="btn btn-primary text-white px-10 py-3 h-auto text-lg rounded-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Begin With an Advanced Skin Health Consultation →
                </Link>
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
                  <p>Clients with persistent instability may progress into our <Link to="/signature/skin-barrier-repair-recovery" className="text-primary hover:underline">Skin Barrier Repair &amp; Recovery Signature</Link> — a structured programme designed to rebuild resilience and prevent recurrence.</p>
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
                <Link
                  to="/book-consultation"
                  className="btn btn-primary text-white px-10 py-3 h-auto text-lg rounded-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Begin With an Advanced Skin Health Consultation →
                </Link>
              </div>
            </FadeInWhenVisible>
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
      </div>
    </>
  );
}
