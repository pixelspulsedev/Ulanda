import { useState } from 'react';
import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { signaturePathways } from '../data/pageContents/signature/signatureData';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import ConsultationCTA from '../components/ConsultationCTA';

const BOOKING_URL = "https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.ulanda.co.uk/#medicalbusiness",
      "name": "ULANDA Skin Clinic",
      "url": "https://www.ulanda.co.uk/",
      "logo": "https://www.ulanda.co.uk/assets/img/ui/Logo.webp",
      "image": "https://www.ulanda.co.uk/assets/img/home/ulanda-homepage-hero-ware-sg12.webp",
      "description": "ULANDA is a nurse-led skin clinic in Ware, Hertfordshire specialising in regenerative skin treatments, clinical skin health consultations and structured aesthetic care.",
      "telephone": "+44 7904 336031",
      "email": "info@ulanda.co.uk",
      "priceRange": "\u00a3\u00a3\u00a3",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6 Hampden Hill",
        "addressLocality": "Ware",
        "addressRegion": "Hertfordshire",
        "postalCode": "SG12 7JT",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.8090",
        "longitude": "-0.0287"
      },
      "areaServed": [
        { "@type": "City", "name": "Ware" },
        { "@type": "City", "name": "Hertford" },
        { "@type": "City", "name": "Hoddesdon" },
        { "@type": "City", "name": "Broxbourne" },
        { "@type": "Place", "name": "Wormley" },
        { "@type": "Place", "name": "Turnford" },
        { "@type": "City", "name": "Cheshunt" },
        { "@type": "City", "name": "Bishop\u2019s Stortford" },
        { "@type": "Place", "name": "Stanstead Abbotts" },
        { "@type": "Place", "name": "Sawbridgeworth" },
        { "@type": "City", "name": "Harlow" },
        { "@type": "City", "name": "Welwyn Garden City" },
        { "@type": "City", "name": "Stevenage" },
        { "@type": "AdministrativeArea", "name": "East Hertfordshire" },
        { "@type": "AdministrativeArea", "name": "Hertfordshire" }
      ],
      "sameAs": [
        "https://www.instagram.com/ulandamedspa",
        "https://www.facebook.com/ulandamedspa",
        "https://www.linkedin.com/company/ulanda"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ulanda.co.uk/#website",
      "name": "ULANDA Skin Clinic",
      "url": "https://www.ulanda.co.uk/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.ulanda.co.uk/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.ulanda.co.uk/"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.ulanda.co.uk/#organization",
      "name": "ULANDA Skin Clinic",
      "url": "https://www.ulanda.co.uk/",
      "logo": "https://www.ulanda.co.uk/assets/img/ui/Logo.webp",
      "sameAs": [
        "https://www.instagram.com/ulandamedspa",
        "https://www.facebook.com/ulandamedspa",
        "https://www.linkedin.com/company/ulanda"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44 7904 336031",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "en-GB"
      }
    }
  ]
};

const homeFaqs = [
  {
    question: "How is ULANDA different from other aesthetic clinics in Hertfordshire?",
    answer: "ULANDA follows an assessment-first clinical model rather than a treatment-first approach. No treatment is recommended before a full clinical skin assessment has established what the skin needs and in what sequence."
  },
  {
    question: "I have had treatments elsewhere that did not last. Is this likely to be different?",
    answer: "Many disappointing aesthetic results occur when treatments are delivered to barrier-compromised or unassessed skin. The consultation process at ULANDA is designed to identify the biological drivers behind the skin\u2019s presentation before treatment begins and to sequence treatments in the order that produces more lasting improvement."
  },
  {
    question: "Do I need a consultation before booking treatment?",
    answer: "Yes. The Advanced Skin Health Consultation is the clinical entry point for all new clients. Treatments perform better and produce more predictable results when introduced after proper assessment. The \u00a3175 fee is fully redeemable against your treatment plan when you proceed."
  },
  {
    question: "Do you offer Botox and aesthetic treatments in Ware?",
    answer: "Yes. ULANDA offers anti-wrinkle injections, dermal fillers, Profhilo, polynucleotides, microneedling and other medical aesthetic treatments within a structured clinical programme following the Advanced Skin Health Consultation."
  },
  {
    question: "Is there parking at ULANDA?",
    answer: "Yes. ULANDA has free dedicated client parking on site at Uphaven, 6 Hampden Hill, Ware SG12 7JT."
  }
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Skin Clinic in Ware | Nurse-Led Medical Aesthetics | ULANDA</title>
        <meta name="description" content="Nurse-led skin clinic in Ware, Hertfordshire. Barrier-first restoration, advanced medical aesthetics and structured Skin Health Consultation." />
        <link rel="canonical" href="https://www.ulanda.co.uk/" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skin Clinic in Ware | Nurse-Led Medical Aesthetics | ULANDA" />
        <meta name="twitter:description" content="Nurse-led skin clinic in Ware, Hertfordshire delivering barrier-first skin restoration, advanced medical aesthetics and structured Skin Health Consultation." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/home/ulanda-homepage-hero-ware-sg12.webp" />
        <link
          rel="preload"
          as="image"
          href="/assets/img/home/ulanda-homepage-hero-ware-sg12.webp"
          fetchpriority="high"
        />
        <meta property="og:title" content="Skin Clinic in Ware | Nurse-Led Medical Aesthetics | ULANDA" />
        <meta property="og:description" content="Nurse-led skin clinic in Ware, Hertfordshire. Barrier-first restoration, advanced medical aesthetics and structured Skin Health Consultation." />
        <meta property="og:url" content="https://www.ulanda.co.uk/" />
        <meta property="og:image" content="https://www.ulanda.co.uk/assets/img/home/ulanda-homepage-hero-ware-sg12.webp" />
      </Head>

      {/* Homepage Schema - single merged JSON-LD block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* ============================================================
          SECTION 1 — HERO
          ============================================================ */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/assets/img/home/ulanda-homepage-hero-ware-sg12.webp"
            alt="ULANDA Skin Clinic Ware Hertfordshire"
            className="w-full h-full object-cover object-right"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 hero min-h-screen">
          <div className="hero-content text-neutral-content text-left w-full justify-start px-4 md:px-20">
            <div className="max-w-2xl">
              <HeroText>
                <p className="mb-4 text-sm md:text-base uppercase tracking-[0.2em] text-white/70 font-sans font-light">
                  Where Skin Biology, Hormonal Change &amp; Skin Health Align
                </p>
              </HeroText>
              <h1 className="mb-6 font-medium text-3xl md:text-5xl xl:text-6xl font-serif leading-tight text-white">
                <HeroText delay={0.1}>
                  Skin <span className="italic font-extralight">Understood.</span>{' '}
                  Then <span className="italic font-extralight">Transformed.</span>
                </HeroText>
              </h1>
              <div className="mb-5 font-sans text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                <HeroText delay={0.2}>
                  <ul className="space-y-2">
                    <li className="border-l-2 border-white/40 pl-3">Perhaps your skin no longer feels like it used to.</li>
                    <li className="border-l-2 border-white/40 pl-3">Your usual skincare routine isn&rsquo;t giving you the same results.</li>
                    <li className="border-l-2 border-white/40 pl-3">Your skin feels drier, more sensitive or less radiant.</li>
                    <li className="border-l-2 border-white/40 pl-3">Or maybe you simply know something has changed, but you&rsquo;re not sure why.</li>
                  </ul>
                  <p className="mt-4">These changes are often signs that your skin is behaving differently, not that it has become impossible to improve.</p>
                  <p className="mt-3">At ULANDA, the most important question isn&rsquo;t which treatment you need. It&rsquo;s understanding what your skin is trying to tell you.</p>
                </HeroText>
              </div>
              <div className="mb-6 text-sm font-sans font-light text-white/60 tracking-wide">
                <HeroText delay={0.3}>
                  Understanding Before Treatment&trade; &middot; Personalised Care &middot; Regenerative Medicine &middot; Natural-Looking Results
                </HeroText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 1B — DOES THIS SOUND FAMILIAR?
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-3xl mx-auto">
          <FadeInWhenVisible>
            <p className="text-lg text-base-content/80 font-sans leading-relaxed mb-12">
              That clinical understanding allows us to recommend treatments that support healthier skin, restore confidence and create naturally beautiful results that respect your individuality.
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-8 leading-tight">
              Does this <span className="italic font-light text-primary">sound familiar?</span>
            </h2>
            <ul className="space-y-4 mb-10">
              {[
                "My skin has changed and I'm not sure why.",
                'My usual skincare no longer seems to work.',
                'My skin feels more sensitive than it used to.',
                'I want natural-looking results, not dramatic change.',
                "I'm unsure which treatment, if any, is actually right for me.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-base-content/80 font-sans">
                  <span className="mt-1 text-primary shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-serif italic text-primary">
              If you recognised yourself in one or more of these, you&rsquo;re exactly where we begin.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — THE ULANDA METHOD
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-secondary/30">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">The ULANDA Method</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              A <span className="italic font-light text-primary">Clinical Framework,</span> Not a Treatment Menu
            </h2>
            <p className="text-lg text-base-content/80 font-sans max-w-3xl mb-16 leading-relaxed">
              ULANDA follows a structured clinical framework built on three foundations.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Barrier Stability",
                body: "Restore and protect the skin barrier before introducing advanced treatments. A compromised barrier produces compromised results from everything applied to it \u2014 including clinically advanced procedures."
              },
              {
                title: "Biological Readiness",
                body: "Assess hydration balance, inflammatory activity and tissue condition before determining what treatment is appropriate and when. Treatments introduced to a skin environment that cannot receive them effectively do not produce the outcomes they are capable of."
              },
              {
                title: "Structured Skin Renewal",
                body: "Introduce treatments gradually and in the correct clinical sequence \u2014 supporting collagen resilience and long-term skin health rather than pursuing immediate visible results at the expense of biological stability."
              }
            ].map((col, i) => (
              <FadeInWhenVisible key={col.title} delay={0.1 * i}>
                <div className="bg-secondary/30 rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-serif text-primary mb-4">{col.title}</h3>
                  <p className="text-base-content/80 font-sans leading-relaxed">{col.body}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.3}>
            <p className="text-lg text-base-content/80 font-sans max-w-4xl mb-8 leading-relaxed">
              This framework reflects the direction modern evidence-based aesthetic medicine is moving: treatment sequencing that supports the skin&rsquo;s natural repair mechanisms rather than overriding them, so skin can recover, strengthen and return to a healthy glow.
            </p>
            <Link to="/treatments/skin-barrier-renewal-protocol" className="btn btn-primary">
              Explore the Skin Barrier Renewal Protocol &rarr;
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — WHY SKIN CHANGES
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-secondary/30">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Why Skin Changes Over Time</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              Skin rarely changes for a <span className="italic font-light text-primary">single reason.</span>
            </h2>
            <div className="text-lg text-base-content/80 font-sans max-w-3xl mb-16 leading-relaxed space-y-4">
              <p>
                Hormonal shifts, inflammatory load, environmental exposure, sleep quality and collagen behaviour all influence how the skin presents over time. Changes that appear suddenly &mdash; pigmentation, sensitivity, texture decline or loss of firmness &mdash; often reflect biological processes that have been developing beneath the surface.
              </p>
              <p>For many women these changes coincide with specific life stages.</p>
            </div>
          </FadeInWhenVisible>

          {/* Four life stage cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                image: "/assets/img/home/20_30_homepage_image.webp",
                heading: "20s and Early 30s",
                body: "Preventative skin care. Building the biological foundation that determines how skin ages."
              },
              {
                image: "/assets/img/conditions/Postpartum.webp",
                heading: "Postpartum Recovery",
                body: "Hormonal withdrawal, barrier instability, pigmentation shifts and the skin changes that follow childbirth."
              },
              {
                image: "/assets/img/conditions/Uneven tone.webp",
                heading: "Late 30s and Perimenopause",
                body: "Skin that has shifted without explanation. Products that have stopped working. The biological change most practitioners never discuss."
              },
              {
                image: "/assets/img/conditions/Menopausal skin condition.webp",
                heading: "Menopause",
                body: "Loss of firmness, thinning skin, chronic dehydration, texture decline and the structural changes that require clinical response rather than product management."
              }
            ].map((card, i) => (
              <FadeInWhenVisible key={card.heading} delay={0.1 * i}>
                <div className="group relative h-[420px] overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-serif font-medium mb-2">{card.heading}</h3>
                    <p className="text-sm text-white/90 font-light leading-relaxed">{card.body}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.4}>
            <p className="text-lg text-base-content/80 font-sans max-w-4xl mb-8 leading-relaxed">
              Treating the visible concern alone rarely produces lasting improvement. At ULANDA, treatment planning begins by understanding the biological drivers behind the change.
            </p>
            <Link to="/conditions" className="btn btn-primary">
              Explore skin conditions and concerns &rarr;
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — BARRIER-FIRST SKIN HEALTH
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-white/50">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Barrier-First Skin Health</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              Why the <span className="italic font-light text-primary">Barrier</span> Comes First
            </h2>
            <div className="text-lg text-base-content/80 font-sans leading-relaxed space-y-4 mb-8">
              <p>
                The skin barrier determines how the skin responds to everything else &mdash; clinical treatments, homecare products and the environmental stressors it encounters daily.
              </p>
              <p>
                When the barrier is compromised, even advanced aesthetic procedures may lead to irritation, reduced tolerance and less predictable results.
              </p>
              <p>
                For this reason, barrier stability sits at the foundation of treatment planning at ULANDA.
              </p>
              <p>
                Where instability is identified, we begin with stabilisation before introducing more active therapies, supporting a calm, healthy glow.
              </p>
            </div>
            <Link to="/treatments/skin-barrier-renewal-protocol" className="btn btn-primary">
              Learn about the Skin Barrier Renewal Protocol &rarr;
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — THE DIFFERENCE IS HOW WE DECIDE (BRIDGE)
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-secondary/30">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Understanding Comes Before Treatment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              The Difference Is Not the Treatment. <span className="italic font-light text-primary">It&rsquo;s How We Decide.</span>
            </h2>
            <div className="text-lg text-base-content/80 font-sans leading-relaxed space-y-4 mb-10">
              <p>Many of our clients arrive believing they need a particular treatment.</p>
              <p>In reality, the better question is often:</p>
              <p className="border-l-2 border-primary pl-4 font-serif italic text-primary text-xl">&ldquo;What is my skin trying to tell me?&rdquo;</p>
              <p>Many aesthetic clinics begin by asking which treatment you would like. At ULANDA, we begin by understanding what your skin is trying to tell you.</p>
              <p>That understanding guides every recommendation we make.</p>
            </div>

            {/* Helen's Clinical Reflection */}
            <div className="bg-secondary/40 rounded-2xl p-8 md:p-10 mb-10">
              <h3 className="text-xl font-serif text-primary mb-4">Helen&rsquo;s Clinical Reflection</h3>
              <div className="space-y-3 text-base-content/80 font-sans italic leading-relaxed">
                <p>&ldquo;One of the most common things I hear is, &lsquo;I don&rsquo;t recognise my skin anymore.&rsquo;</p>
                <p>Often, people arrive expecting a treatment recommendation.</p>
                <p>More often, what they need first is an explanation rather than another treatment.</p>
                <p>Once we understand why the skin has changed, we can make much better decisions together.&rdquo;</p>
              </div>
              <p className="mt-4 font-medium text-base-content not-italic">&mdash; Helen Balogun</p>
              <p className="text-sm text-base-content/60">Clinical Director</p>
            </div>

            <Link to="/clinical-system" className="btn btn-primary">
              Explore The ULANDA Clinical System&trade; &rarr;
            </Link>
            <p className="mt-4 text-base text-base-content/70 font-sans max-w-2xl leading-relaxed">
              Discover how Understanding Before Treatment&trade; guides every recommendation we make and why understanding your skin always comes before choosing treatment.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — STRUCTURED TREATMENT SEQUENCING
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-white/50">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Structured Treatment Sequencing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              How Treatments Are <span className="italic font-light text-primary">Introduced</span>{' '}
              <span className="block md:inline">at ULANDA</span>
            </h2>
            <div className="text-lg text-base-content/80 font-sans leading-relaxed space-y-4">
              <p>
                Rather than delivering treatments as isolated procedures, ULANDA introduces therapies through structured sequencing.
              </p>
              <p>
                Treatment pathways are built from clinical assessment findings and typically progress through:
              </p>
              <ol className="space-y-2 pl-4 list-decimal list-inside">
                <li>Barrier stabilisation</li>
                <li>Dermal hydration and skin support</li>
                <li>Collagen stimulation</li>
                <li>Structural or adjunct support where required</li>
              </ol>
              <p>
                Introducing treatments in the correct biological sequence improves tolerance, increases predictability of outcomes, supports long-term skin resilience, and helps the skin recover its natural glow.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — ADVANCED SKIN THERAPIES
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-secondary/30">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Advanced Skin Therapies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              Treatments Introduced When the <span className="italic font-light text-primary">Skin Is Ready</span>
            </h2>
            <div className="text-lg text-base-content/80 font-sans leading-relaxed space-y-4 mb-8">
              <p>
                Modern aesthetic medicine increasingly focuses on treatments that support the skin&rsquo;s own repair mechanisms rather than imposing cosmetic change at the surface.
              </p>
              <p>At ULANDA these may include:</p>
              <ul className="space-y-2 pl-4">
                {[
                  "Polynucleotide skin regeneration treatments",
                  "Bio-remodelling injectables such as Profhilo",
                  "Collagen stimulation through microneedling",
                  "Regenerative and structural therapies introduced within Signature programmes"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                These treatments are introduced only when clinical assessment establishes that the skin environment is appropriate.
              </p>
            </div>
            <Link to="/treatments" className="btn btn-primary">
              Explore treatments &rarr;
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ============================================================
          SECTION 7B — FEATURED TREATMENTS (SEO anchor links)
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="mb-12">
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-secondary/30">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Featured Treatments in Hertfordshire</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-4">
              Most-Requested <span className="italic font-light text-primary">Regenerative Treatments</span>
            </h2>
            <p className="text-lg text-base-content/80 font-sans max-w-2xl leading-relaxed">
              The treatments our clients across Hertfordshire ask for most — each one delivered as part of a structured, regenerative protocol at our Ware SG12 clinic.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Profhilo Treatment Hertfordshire",
                description: "Bio-remodelling skin booster for hydration, fine lines and crepey skin.",
                url: "/treatments/injectable-skin-optimisation/profhilo",
                image: "https://images.unsplash.com/photo-1609357912334-e96886c0212b?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Chemical Peels Hertfordshire",
                description: "Medical-grade peels for pigmentation, acne scarring and sun damage.",
                url: "/treatments/skin-renewal-regeneration/chemical-peel",
                image: "https://images.unsplash.com/photo-1580564591877-3a6578d09f5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlbWljYWwlMjBmYWNlJTIwdHJlYXRtZW50fGVufDB8fDB8fHww"
              },
              {
                title: "Microneedling Hertfordshire",
                description: "Collagen induction for pores, texture and scars — a regenerative alternative to Morpheus8.",
                url: "/treatments/skin-renewal-regeneration/microneedling",
                image: "https://plus.unsplash.com/premium_photo-1661481689382-4445fd07fd5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWljcm9uZWVkbGluZ3xlbnwwfDF8MHx8fDA%3D"
              },
              {
                title: "Rosacea Treatment Hertfordshire",
                description: "Calm redness, reduce flushing and rebuild barrier resilience.",
                url: "/conditions/redness-sensitivity-reactive-skin/rosacea",
                image: "/assets/img/conditions/skin-clinic-ware-regenerative-aesthetic-skin-texture_png.webp"
              },
              {
                title: "Menopause Clinic in Ware",
                description: "Our 12-Week Menopause Regeneration Plan — collagen, hydration and firmness for midlife skin.",
                url: "/signature/menopause-skin-rebuild",
                image: "/assets/img/treatments/radiate/12 weeks menopause regeneration plan.webp"
              },
              {
                title: "Definisse Hydrobooster (Skinvive Alternative)",
                description: "HA microbooster for hydration and fine lines — a skin-booster alternative to Skinvive.",
                url: "/treatments/injectable-skin-optimisation/definisse-hydrobooster",
                image: "https://images.unsplash.com/photo-1555820585-c5ae44394b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5fGVufDB8fDB8fHww"
              }
            ].map((t, i) => (
              <FadeInWhenVisible key={t.url} delay={0.05 * i}>
                <Link
                  to={t.url}
                  className="group block bg-white border border-secondary/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-base-content mb-2 group-hover:text-primary transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-sm text-base-content/70 font-sans leading-relaxed">
                      {t.description}
                    </p>
                    <span className="inline-block mt-4 text-sm text-primary font-sans">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8 — SIGNATURE PROGRAMMES
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-secondary/30">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">The Signature Programmes</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-4">
                Where Your <span className="italic font-light text-primary">Assessment</span> Leads
              </h2>
              <p className="text-lg text-base-content/80 font-sans max-w-2xl leading-relaxed">
                Every client completing the Advanced Skin Health Consultation receives a recommendation for one of ULANDA&rsquo;s Signature programmes.
                These structured clinical pathways address the most common skin presentations seen in practice and introduce treatments in the correct biological sequence, helping the skin look brighter, healthier and more luminous.
              </p>
            </div>
            <div className="hidden md:flex">
              <Link to="/signature" className="btn btn-primary">
                Explore All Signatures
              </Link>
            </div>
          </FadeInWhenVisible>

          {/* Signature Cards Grid - first carousel kept */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signaturePathways.map((sig, i) => (
              <FadeInWhenVisible key={sig.id} delay={0.1 * i}>
                <Link
                  to={sig.url}
                  className="group block bg-white border border-secondary/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={sig.image}
                      alt={sig.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-base-content mb-2 group-hover:text-primary transition-colors">
                      {sig.title}
                    </h3>
                    {sig.subtitle && (
                      <p className="text-sm text-primary/80 font-light mb-3">{sig.subtitle}</p>
                    )}
                    <p className="text-sm text-base-content/70 font-light leading-relaxed mb-3 line-clamp-3">
                      {sig.concerns}
                    </p>
                    {sig.homepageTeaser && (
                      <p className="text-sm text-base-content/60 font-light leading-relaxed mb-4 line-clamp-3">
                        {sig.homepageTeaser}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeInWhenVisible>
            ))}
          </div>

          <div className="md:hidden flex mt-8">
            <Link to="/signature" className="btn btn-primary">
              Explore all Signature programmes &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10 — CLINICAL LEADERSHIP
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <FadeInWhenVisible className="order-1">
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-secondary/30">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Clinical Leadership</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              Founded on 20 Years of <span className="italic font-light text-primary">Women&rsquo;s Clinical Experience</span>
            </h2>

            <div className="text-lg text-base-content/80 font-sans leading-relaxed space-y-4 mb-8">
              <p>
                ULANDA was founded by <span className="font-bold text-base-content">Helen Balogun MSc, RN, RM, NIP</span> &mdash; Advanced Nurse Practitioner, Nurse Independent Prescriber and regenerative aesthetics specialist.
              </p>
              <p>
                Her clinical background includes registered nursing, registered midwifery, an MSc from Imperial College London in Quality Improvement and Patient Safety, a BSc in Women&rsquo;s Long Term Health Management and advanced hormone training through the Marion Gluck Academy.
              </p>
              <p>
                A member of the British Menopause Society and trained BHRT practitioner, Helen brings the clinical depth of specialist women&rsquo;s health practice to every consultation and programme at ULANDA.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/about/our-founder" className="btn btn-primary">
                Meet the clinical team &rarr;
              </Link>
              <Link to="/about/our-philosophy" className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white">
                Our philosophy &rarr;
              </Link>
            </div>
          </FadeInWhenVisible>

          {/* Right Image */}
          <div className="relative flex justify-center order-2">
            <RevealImage className="max-w-sm aspect-[3/4] w-full">
              <img
                src="/assets/img/home/ulanda-helen-balogun-founder-ware.webp"
                alt="Helen Balogun, Founder of ULANDA Skin Clinic"
                width="384"
                height="500"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </RevealImage>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11 — THE CONSULTATION
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-white/50">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">The Consultation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              Every Journey Begins With <span className="italic font-light text-primary">Clinical Assessment</span>
            </h2>
            <div className="text-lg text-base-content/80 font-sans leading-relaxed space-y-4 mb-12">
              <p>
                Your first appointment at ULANDA begins with the Advanced Skin Health Consultation, where your skin is assessed clinically before any treatment is recommended.
              </p>
              <p>
                Where barrier instability is identified, the Skin Barrier Renewal Protocol is your first personalised clinical treatment and may be delivered within the same appointment.
              </p>
              <p>
                This consultation establishes the biological foundation for the treatment programme that follows.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Consultation detail box */}
          <FadeInWhenVisible delay={0.2}>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-12">
              <h3 className="text-2xl font-serif text-base-content mb-6">Advanced Skin Health Consultation</h3>
              <p className="text-base-content/80 font-sans mb-4">60 to 90 minute clinician-led assessment including:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "AI Skin Analysis",
                  "Barrier integrity evaluation",
                  "Hormonal and clinical history review",
                  "Personalised treatment planning"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base-content/80 font-sans">
                    <span className="text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-primary font-medium font-sans mb-2">&pound;175 &middot; Fully redeemable against your treatment plan</p>
              <p className="text-sm text-base-content/60 font-sans">Consultations are intentionally limited each week to ensure unhurried clinician-led care.</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <div className="text-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Book Your Advanced Skin Health Consultation &rarr;
              </a>
              <p className="mt-4 text-base text-base-content/60 font-sans italic">Refinement now. Regeneration ahead.</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ============================================================
          SECTION 12 — WHO WE HELP (Conditions ticker — kept from existing)
          ============================================================ */}
      <section className="py-24 bg-base-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex justify-between items-center w-full">
          <div className="px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-4">
              <span className="italic font-light text-primary">Conditions</span>{' '}
              We Treat
            </h2>
            <p className="text-lg text-base-content/80 font-sans">
              We support a wide range of concerns, including:
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 relative">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-scroll {
              animation: scroll 80s linear infinite;
            }
            .animate-scroll-reverse {
              animation: scroll-reverse 80s linear infinite;
            }
            .marquee-content:hover {
              animation-play-state: paused;
            }
          `}</style>

          {[
            [
              { text: 'Skin laxity', link: '/conditions/menopause-hormone-skin-changes' },
              { text: 'Uneven tone & pigmentation', link: '/conditions/pigmentation-and-skin-tone' },
              { text: 'Texture & pores', link: '/conditions/acne-texture' },
              { text: 'Dark circles', link: '/conditions/eye-area/dark-circles' },
            ],
            [
              { text: 'Under-eye hollows', link: '/conditions/eye-area/tear-troughs' },
              { text: 'Crepey or thinning skin', link: '/conditions/menopause-hormone-skin-changes' },
              { text: 'Menopause skin changes', link: '/conditions/menopause-hormone-skin-changes' },
              { text: 'Postpartum skin changes', link: '/conditions/body-skin-structural/post-weightloss-postpartum' },
            ],
            [
              { text: 'Body tightening needs', link: '/conditions/body-skin-structural' },
              { text: 'Fatigue / inflammation-driven skin dullness', link: '/conditions/internal-wellness/fatigue-low-energy' },
              { text: 'Skin laxity', link: '/conditions/menopause-hormone-skin-changes' },
              { text: 'Uneven tone & pigmentation', link: '/conditions/pigmentation-and-skin-tone' },
            ],
          ].map((row, i) => (
            <div key={i} className="flex overflow-hidden w-full">
              <div
                className={`flex gap-4 whitespace-nowrap ${
                  i % 2 === 0 ? 'animate-scroll' : 'animate-scroll-reverse'
                } marquee-content px-3`}
              >
                {[...row, ...row, ...row, ...row].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="inline-block px-8 py-4 rounded-full text-lg font-medium bg-[#F5EFE7] text-[#6B3614] transition-all duration-300 hover:bg-[#6B3614] hover:text-white cursor-pointer"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 13 — FAQs
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-black text-lg pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 text-black shrink-0 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 font-sans">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/help-and-support"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 14 — CLINICAL INSIGHTS
          ============================================================ */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-secondary/30">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Clinical Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              Understanding how skin behaves is central to achieving{' '}
              <span className="italic font-light text-primary">long-term results.</span>
            </h2>
            <p className="text-lg text-base-content/80 font-sans max-w-3xl mb-12 leading-relaxed">
              The ULANDA clinical journal explores the biology behind the most common skin changes and the treatments that address them.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="space-y-4 mb-12">
              {[
                { title: "Why Your Skin Stopped Responding", url: "/blogs" },
                { title: "Where to Get a Medical Skin Consultation in Ware", url: "/blogs/medical-skin-consultation-ware" },
                { title: "Collagen, Elastin & Fibroblast \u2013 The 3 Engines of Beautiful Skin", url: "/blogs/collagen-elastin-fibroblasts" },
                { title: "Internal Health Meets Regeneration", url: "/blogs/internal-health-regeneration" },
              ].map((article) => (
                <Link
                  key={article.title}
                  to={article.url}
                  className="group flex items-center justify-between p-5 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors"
                >
                  <span className="text-lg font-sans text-base-content group-hover:text-primary transition-colors">{article.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ))}
            </div>
            <Link to="/blogs" className="btn btn-primary">
              View all clinical insights &rarr;
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ============================================================
          SECTION 15 — FINAL CTA
          ============================================================ */}
      <section className="py-32 px-4 md:px-8 bg-secondary text-center">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-8 leading-tight">
              The Starting Point Is <span className="italic font-light text-primary">Understanding Your Skin</span>
            </h2>
            <div className="text-lg text-base-content/80 font-sans mb-12 max-w-2xl mx-auto leading-relaxed space-y-2">
              <p>Not a treatment recommendation.</p>
              <p>Not a product prescription.</p>
              <p>
                A clinical assessment that establishes what your skin actually needs and a programme designed around that understanding from the first appointment.
              </p>
            </div>

            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white px-10 py-4 h-auto text-lg rounded-lg">
              Book Your Advanced Skin Health Consultation &rarr;
            </a>
            <p className="mt-4 text-sm text-base-content/60 font-sans">&pound;175 fully redeemable</p>
            <p className="mt-6 text-base text-base-content/70 font-sans">
              Or call: <a href="tel:+447904336031" className="text-primary hover:underline">+44 7904 336031</a>
            </p>
            <p className="mt-8 text-2xl font-serif text-primary italic">Skin Understood. Then Transformed.</p>
          </FadeInWhenVisible>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
