import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const consultationSchema = [
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
    "name": "Advanced Skin Health Consultation",
    "description": "A clinician-led medical skin consultation including AI Skin Analysis, barrier assessment and personalised regenerative treatment planning.",
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
    "serviceType": "Medical Skin Consultation",
    "offers": {
      "@type": "Offer",
      "price": "175",
      "priceCurrency": "GBP",
      "description": "60–90 minute consultation fully redeemable against personalised treatment plan."
    }
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
        "name": "Advanced Skin Health Consultation",
        "item": "https://www.ulanda.co.uk/treatments/advanced-skin-health-consultation"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happens during a skin consultation in Ware?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A medical skin consultation at ULANDA includes clinical examination, AI Skin Analysis, barrier assessment and a personalised treatment roadmap. Where clinically indicated, stabilisation may begin the same day."
        }
      },
      {
        "@type": "Question",
        "name": "How much is a skin consultation in Hertfordshire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Advanced Skin Health Consultation is £175 and fully redeemable against your treatment plan."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a medical skin consultation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The consultation lasts between 60 and 90 minutes to allow comprehensive assessment and discussion."
        }
      },
      {
        "@type": "Question",
        "name": "Is AI skin analysis accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI imaging provides objective measurement of skin parameters and supports clinical diagnosis. It improves treatment planning precision."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book injectables without a consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "New clients begin with consultation to ensure clinical appropriateness and correct sequencing."
        }
      },
      {
        "@type": "Question",
        "name": "Will I receive treatment during the consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Where barrier instability is identified, targeted stabilisation may be introduced during the consultation itself. Many clients leave with visible improvement in hydration balance and skin comfort."
        }
      }
    ]
  }
];

export default function AdvancedSkinHealthConsultation() {
  return (
    <>
      <Head>
        <title>Advanced Skin Health Consultation | Ware &amp; Hertfordshire</title>
        <meta name="description" content="Medical skin consultation in Ware, Hertford & Broxbourne including AI Skin Analysis, barrier assessment and structured regenerative planning at ULANDA." />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments/advanced-skin-health-consultation" />
        {consultationSchema.map((schema, i) => (
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
              <HeroText>Advanced Skin Health Consultation in Ware, Hertfordshire</HeroText>
            </h1>
            <div className="space-y-4 text-base-content/80 text-lg leading-relaxed max-w-3xl">
              <FadeInWhenVisible delay={0.2}>
                <p>The Advanced Skin Health Consultation at ULANDA is a 60–90 minute clinician-led medical skin assessment designed for clients in Ware, Hertford, Broxbourne, Hoddesdon, Bishop's Stortford and surrounding Hertfordshire villages.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p>It includes AI Skin Analysis, barrier evaluation and a personalised treatment roadmap.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <p className="font-medium text-base-content">This is the required first step for all new clients.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <p>Before any injectable, regenerative or structural treatment is recommended, your skin is clinically assessed, digitally analysed and biologically mapped to ensure safety, correct sequencing and predictable outcomes.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.6}>
                <p className="text-sm text-base-content/60">ULANDA operates as a nurse-led Skin Clinic in Ware and Medical Aesthetic Clinic serving Hertfordshire with structured, barrier-first assessment.</p>
              </FadeInWhenVisible>
            </div>
            <FadeInWhenVisible delay={0.7}>
              <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white mt-6 shadow-md">
                Book Your Advanced Skin Health Consultation
              </a>
              <p className="text-sm font-medium text-primary/80 mt-3 tracking-wide">Immediate visible refinement. Structured long-term plan.</p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* What Most Clients Notice */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">What Most Clients Notice Before They Leave</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">Although the Advanced Skin Health Consultation is primarily designed to assess your skin and develop a personalised treatment strategy, many clients notice visible improvement before they leave the clinic.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Where appropriate, targeted barrier stabilisation may be introduced during the consultation itself, helping to:</p>
                <ul className="space-y-3 mb-8">
                  {["Calm visible redness", "Restore hydration balance", "Improve skin comfort", "Enhance natural luminosity"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed">This immediate refinement allows clients to leave their consultation with both clear understanding and visibly healthier-looking skin.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* What Is the Consultation */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">What Is the Advanced Skin Health Consultation?</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">The Advanced Skin Health Consultation is a comprehensive medical skin consultation that:</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <ul className="space-y-3 mb-8">
                  {[
                    "Diagnoses your dominant biological skin presentation",
                    "Identifies underlying drivers of concern",
                    "Assesses barrier integrity",
                    "Uses AI Skin Analysis for measurable data",
                    "Creates a structured treatment roadmap",
                    "Initiates the Skin Barrier Renewal Protocol where clinically indicated"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80 text-lg">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <div className="space-y-4 text-base-content/80 text-lg leading-relaxed">
                  <p className="font-medium text-base-content">It is not a cosmetic discussion.</p>
                  <p className="font-medium text-base-content">It is a diagnostic and strategic appointment.</p>
                  <p>If barrier compromise is identified, stabilisation begins during the same visit to optimise the skin before progression into advanced treatment.</p>
                  <p>You leave with measurable baseline data, written clarity and, in many cases, visible refinement.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-5">Investment</h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-base-100 rounded-2xl p-10 md:p-14 shadow-sm max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif text-base-content mb-2">Advanced Skin Health Consultation</h3>
                <p className="text-base-content/60 mb-2">Including AI Skin Analysis</p>
                <p className="text-base-content/60 mb-6">Including Skin Barrier Renewal Protocol where clinically indicated</p>
                <p className="text-5xl font-serif text-primary mb-2">£175</p>
                <p className="text-lg text-base-content/70 mb-2">Duration: 60–90 Minutes</p>
                <p className="text-base-content/80 font-medium mb-4">Immediate visible refinement where appropriate.</p>
                <p className="text-base-content/60 mb-6">Fully redeemable against your personalised treatment plan.</p>
                <p className="text-sm text-base-content/50 mb-8">Consultations are intentionally limited each week to ensure unhurried, clinician-led care.</p>
                <a 
                  href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white px-12 py-4 h-auto text-lg rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Book Your Advanced Skin Health Consultation
                </a>
                <p className="text-sm font-medium text-primary/80 mt-4 tracking-wide">Immediate visible refinement. Structured long-term plan.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* What Is AI Skin Analysis */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">What Is AI Skin Analysis?</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-6">AI Skin Analysis is a diagnostic imaging system that uses artificial intelligence to measure skin parameters beyond visible inspection.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">It evaluates:</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Pigmentation density", "UV exposure markers", "Vascular patterns", "Pore metrics",
                    "Wrinkle depth", "Texture variation", "Hydration behaviour"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-base-content/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">This creates an objective baseline that supports:</p>
                <ul className="space-y-2 mb-6">
                  {["Treatment prioritisation", "Progress tracking", "Early detection of change", "Evidence-based sequencing"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base-content/60 italic">AI supports clinical expertise. It does not replace it.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* What Is the Skin Barrier */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">What Is the Skin Barrier — And Why Is It Assessed?</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">The skin barrier is the outermost protective layer of the epidermis responsible for retaining moisture and regulating inflammatory signalling.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.15}>
                <h3 className="text-2xl font-serif text-base-content mb-4">Treatment Readiness</h3>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Understanding barrier behaviour is essential before introducing corrective procedures.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">When the skin barrier is stable, the skin is typically more responsive to regenerative treatments and aesthetic procedures.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Where instability is identified, targeted stabilisation may be introduced first to restore hydration balance, regulate inflammatory signalling and improve overall treatment readiness.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">This ensures treatments are introduced when the skin is biologically prepared to respond well.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Barrier dysfunction contributes to:</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <ul className="space-y-2 mb-8">
                  {["Sensitivity", "Dehydration", "Premature ageing", "Poor tolerance of aesthetic procedures", "Inconsistent outcomes"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base-content/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-2">If instability is identified, your <Link to="/treatments/skin-barrier-renewal-protocol" className="text-primary hover:underline">Skin Barrier Renewal Protocol</Link> may begin during the same appointment.</p>
                <p className="text-base-content/80 text-lg leading-relaxed mb-2">Stabilising the barrier improves skin comfort and supports healthier inflammatory regulation.</p>
                <p className="text-base-content font-medium">This also improves treatment readiness, ensuring the skin is better prepared to tolerate regenerative procedures and respond predictably to clinical intervention.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* How This Differs */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">How This Differs From a Standard Aesthetic Consultation</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-4">Most aesthetic consultations are treatment-led.</p>
                <p className="text-base-content font-medium text-lg mb-8">This consultation is diagnosis-led.</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-base-200/50 rounded-lg p-8">
                    <h3 className="font-serif text-xl text-base-content mb-4">Standard consultations typically:</h3>
                    <ul className="space-y-3 text-base-content/70">
                      <li className="flex items-start gap-2"><span className="text-base-content/40">•</span> Confirm suitability for a requested treatment</li>
                      <li className="flex items-start gap-2"><span className="text-base-content/40">•</span> Book the procedure</li>
                    </ul>
                  </div>
                  <div className="bg-secondary rounded-lg p-8 border border-primary/20">
                    <h3 className="font-serif text-xl text-primary mb-4">At ULANDA, the consultation:</h3>
                    <ul className="space-y-3 text-base-content/80">
                      {[
                        "Determines whether your requested treatment is biologically appropriate",
                        "Identifies whether barrier correction is required first",
                        "Uses AI data to validate assessment",
                        "Structures sequencing to improve predictability",
                        "Builds a long-term skin strategy rather than a single appointment"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2"><span className="text-primary">•</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mt-8">This significantly reduces mismatched treatments and corrective work.</p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* What Happens During Appointment */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">What Happens During Your Appointment?</h2>
                <p className="text-base-content/60 mb-10">Conducted personally by an Advanced Nurse Practitioner &amp; Independent Prescriber.</p>
              </FadeInWhenVisible>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Clinical Examination", desc: "Hydration, laxity, pigmentation, inflammation and structural ageing are assessed." },
                  { title: "AI Imaging", desc: "Objective digital mapping and baseline capture." },
                  { title: "Medical & Lifestyle Review", desc: "Hormonal, medical and environmental influences are evaluated." },
                  { title: "Immediate Barrier Stabilisation", desc: "The Skin Barrier Renewal Protocol is initiated if clinically indicated.", note: "Where Required" },
                  { title: "Personalised Treatment Roadmap", desc: "Clear explanation of sequencing, timelines and realistic outcomes." }
                ].map((step, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                    <div className="bg-base-100 rounded-lg p-8 shadow-sm h-full">
                      <h3 className="font-serif text-xl text-primary mb-2">{step.title}</h3>
                      {step.note && <span className="text-xs uppercase tracking-widest text-base-content/50 mb-2 block">{step.note}</span>}
                      <p className="text-base-content/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Pathway */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-8">How This Fits Into Your Treatment Pathway</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="space-y-4">
                  {[
                    { step: "Step 1", label: "Advanced Skin Health Consultation", active: true },
                    { step: "Step 2", label: "Skin Barrier Renewal Protocol", subtitle: "where required", link: "/treatments/skin-barrier-renewal-protocol" },
                    { step: "Step 3", label: "Signature Treatment Programme", link: "/signature" },
                    { step: "Step 4", label: "Adjunct Programmes", subtitle: "where appropriate" }
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-6 rounded-lg ${item.active ? 'bg-primary text-white' : 'bg-secondary'}`}>
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
                  <p className="font-medium text-base-content">It is a structured clinical relationship.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-5">Who Is This Consultation For?</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-4">Suitable for clients in:</h3>
                    <ul className="space-y-2">
                      {["Ware", "Hertford", "Broxbourne", "Hoddesdon", "Bishop's Stortford", "Surrounding Hertfordshire villages"].map((loc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-base-content/70">
                          <span className="text-primary">•</span> {loc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-4">Appropriate if you:</h3>
                    <ul className="space-y-2">
                      {[
                        "Are new to medical aesthetics",
                        "Are considering injectables",
                        "Have had disappointing results elsewhere",
                        "Want objective AI-supported insight",
                        "Prefer structured long-term regenerative planning"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-base-content/70">
                          <span className="text-primary">✔</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
              { q: "What happens during a skin consultation in Ware?", a: "A medical skin consultation at ULANDA includes clinical examination, AI Skin Analysis, barrier assessment and a personalised treatment roadmap. Where clinically indicated, stabilisation may begin the same day." },
              { q: "How much is a skin consultation in Hertfordshire?", a: "The Advanced Skin Health Consultation is £175 and fully redeemable against your treatment plan." },
              { q: "How long does a medical skin consultation take?", a: "The consultation lasts between 60 and 90 minutes to allow comprehensive assessment and discussion." },
              { q: "Is AI skin analysis accurate?", a: "AI imaging provides objective measurement of skin parameters and supports clinical diagnosis. It improves treatment planning precision." },
              { q: "Can I book injectables without a consultation?", a: "New clients begin with consultation to ensure clinical appropriateness and correct sequencing." },
              { q: "Will I receive treatment during the consultation?", a: "Where barrier instability is identified, targeted stabilisation may be introduced during the consultation itself. Many clients leave with visible improvement in hydration balance and skin comfort." },
              { q: "Do I need a consultation before anti-wrinkle or fillers?", a: "Yes. Consultation ensures medical suitability, appropriate dosing strategy and correct treatment sequencing." },
              { q: "What should I bring to my consultation?", a: "Bring details of your skincare routine, medications and previous aesthetic treatments." }
            ].map((faq, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                <div className="collapse collapse-plus bg-secondary/20 border border-base-200 rounded-lg">
                  <input type="radio" name="consultation-faq" defaultChecked={idx === 0} />
                  <div className="collapse-title text-xl font-medium font-sans text-primary py-6">{faq.q}</div>
                  <div className="collapse-content pb-6">
                    <p className="text-base-content/80 font-light leading-relaxed text-lg">{faq.a}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Clinical Insight */}
        <section className="py-12 md:py-16 bg-base-100">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-3">Clinical Insight</h2>
              <p className="text-base-content/60 text-lg mb-8">Evidence-based reading from the ULANDA clinical journal exploring consultation, barrier assessment and regenerative treatment planning.</p>
            </FadeInWhenVisible>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Do You Need a Consultation Before Botox?",
                  slug: "consultation-before-botox-ware",
                  description: "Why structured medical assessment protects safety, dosing precision and long-term results before anti-wrinkle treatment."
                },
                {
                  title: "Where to Get a Medical Skin Consultation in Ware",
                  slug: "medical-skin-consultation-ware",
                  description: "What to expect from a clinician-led assessment of barrier integrity, inflammatory load and treatment suitability."
                },
                {
                  title: "Why Barrier Repair Is Essential Before Structural Regeneration",
                  slug: "barrier-repair-before-skin-regeneration",
                  description: "Collagen stimulation depends on stable inflammatory signalling. Learn why barrier-first sequencing improves predictability."
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

        {/* Clinical Authority */}
        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-2xl md:text-3xl font-serif text-base-content mb-4">Clinical Authority</h2>
              <p className="text-base-content/70 leading-relaxed mb-2">ULANDA is a nurse-led Medical Aesthetic Clinic in Ware specialising in structured skin assessment, barrier-first sequencing and regenerative planning.</p>
              <p className="text-base-content/70 leading-relaxed mb-2">All consultations are conducted by a qualified prescribing practitioner.</p>
              <p className="text-base-content font-medium">Clinical decisions are not delegated.</p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary text-center">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">Ready to Begin?</h2>
              <p className="text-lg md:text-xl text-base-content font-sans mb-4 max-w-2xl mx-auto leading-relaxed">Your skin deserves measurable insight and clinical clarity.</p>
              <p className="text-lg text-base-content/70 mb-12 max-w-2xl mx-auto">Book your Advanced Skin Health Consultation in Ware, Hertfordshire and begin your structured skin health strategy.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <div className="flex justify-center flex-wrap gap-x-12 gap-y-4 mb-10 text-base-content/70 font-light">
                <span className="flex flex-col items-center gap-1">
                  <span className="uppercase text-xs tracking-widest opacity-70">Investment</span>
                  <span className="text-2xl font-serif text-primary">£175</span>
                </span>
                <span className="flex flex-col items-center gap-1">
                  <span className="uppercase text-xs tracking-widest opacity-70">Duration</span>
                  <span className="text-2xl font-serif text-base-content">60–90 Minutes</span>
                </span>
              </div>
              <a 
                href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white px-12 py-4 h-auto text-lg rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Book Your Advanced Skin Health Consultation
              </a>
              <p className="text-sm font-medium text-primary/80 mt-6 tracking-wide">Immediate visible refinement. Structured long-term plan.</p>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </>
  );
}
