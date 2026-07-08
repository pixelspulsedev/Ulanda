import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { conditionsLandingData } from '../data/pageContents/conditions/landing';
import { signaturePathways } from '../data/pageContents/signature/signatureData';
import { FAQSchema } from '../components/Schema';
import ConsultationCTA from '../components/ConsultationCTA';

const BOOKING_URL = "https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ";

const filteredSignatures = signaturePathways.filter(s =>
  ['skin-barrier-repair-recovery', 'rosacea-redness-control', 'menopause-skin-rebuild', 'photoaging-skin-architecture', 'structural-skin-regeneration', 'under-eye-renewal'].includes(s.id)
);

const journalCards = [
  { id: "menopause-skin-biology", title: "Menopause and Skin Biology", description: "How hormonal shifts change skin behaviour.", image: "/assets/img/journal/menopause-skin-biology.webp" },
  { id: "hard-water-skin-barrier", title: "Hard Water, Inflammation & Skin Sensitivity", description: "The hidden trigger in Hertfordshire.", image: "/assets/img/journal/hard-water-skin-barrier.webp" },
  { id: "regenerative-injectables-explained", title: "Regenerative Injectables Explained", description: "The science behind regenerative therapies.", image: "/assets/img/journal/regenerative-injectables-explained.webp" },
];

const faqs = [
  {
    question: "Do I need to know which treatment I need?",
    answer: "No. Most clients begin with a Skin Health Consultation where clinicians assess skin behaviour and recommend the most appropriate treatment pathway."
  },
  {
    question: "Can skin concerns be treated with one session?",
    answer: "Many regenerative treatments are delivered as a course to support gradual improvement."
  },
  {
    question: "Can multiple skin concerns be treated together?",
    answer: "Yes. Treatment plans often address several concerns simultaneously."
  },
  {
    question: "Are treatments suitable for sensitive skin?",
    answer: "Treatments are always introduced following a Barrier & Skin Readiness Assessment to ensure suitability."
  }
];

export default function ConditionsLanding() {
  const { categories } = conditionsLandingData;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.ulanda.co.uk/#medicalbusiness",
        "name": "ULANDA",
        "url": "https://www.ulanda.co.uk",
        "telephone": "+44 7904 336031",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Uphaven, 6 Hampden Hill",
          "addressLocality": "Ware",
          "postalCode": "SG12 7JT",
          "addressRegion": "Hertfordshire",
          "addressCountry": "UK"
        },
        "medicalSpecialty": "https://schema.org/Dermatology"
      },
      {
        "@type": "LocalBusiness",
        "name": "ULANDA Skin Clinic",
        "url": "https://www.ulanda.co.uk",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Uphaven, 6 Hampden Hill",
          "addressLocality": "Ware",
          "postalCode": "SG12 7JT",
          "addressRegion": "Hertfordshire",
          "addressCountry": "UK"
        },
        "areaServed": ["Ware", "Broxbourne", "Hoddesdon", "Hertford", "Bishop's Stortford"]
      },
      {
        "@type": "MedicalWebPage",
        "name": "Skin Concerns & Skin Conditions Treated | Skin Clinic in Ware Hertfordshire | ULANDA",
        "url": "https://www.ulanda.co.uk/conditions",
        "about": [
          { "@type": "MedicalCondition", "name": "Dehydration & Dull Skin" },
          { "@type": "MedicalCondition", "name": "Menopause Skin Changes" },
          { "@type": "MedicalCondition", "name": "Rosacea & Redness" },
          { "@type": "MedicalCondition", "name": "Pigmentation & Melasma" },
          { "@type": "MedicalCondition", "name": "Acne Scarring" },
          { "@type": "MedicalCondition", "name": "Under-Eye Concerns" }
        ],
        "mentions": [
          { "@type": "MedicalProcedure", "name": "Skin Boosters" },
          { "@type": "MedicalProcedure", "name": "Polynucleotides" },
          { "@type": "MedicalProcedure", "name": "LED Light Therapy" },
          { "@type": "MedicalProcedure", "name": "Chemical Peels" },
          { "@type": "MedicalProcedure", "name": "Microneedling" },
          { "@type": "MedicalProcedure", "name": "Biostimulators" }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Skin Concerns &amp; Conditions | ULANDA Clinic Ware</title>
        <meta
          name="description"
          content="Skin concerns treated at ULANDA, a nurse-led clinic in Ware, Hertfordshire. Regenerative treatments for ageing, pigmentation, acne scarring and skin quality."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/conditions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skin Concerns & Conditions | ULANDA Clinic Ware" />
        <meta name="twitter:description" content="Skin concerns treated at ULANDA, a nurse-led clinic in Ware, Hertfordshire. Regenerative treatments for ageing, pigmentation and acne scarring." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FAQSchema faqs={faqs} />

      <div className="bg-base-100">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] w-full flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <img
              src={conditionsLandingData.hero.placeholderUrl || conditionsLandingData.hero.image}
              alt="ULANDA Skin Conditions"
              className="w-full h-full object-cover brightness-75"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-start w-full">
            <div className="max-w-4xl">
              <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                <HeroText>
                  Where Skin Changes Begin To{' '}
                  <span className="italic font-light">Make Sense</span>
                </HeroText>
              </h1>

              <HeroText delay={0.15}>
                <p className="text-xl md:text-2xl font-serif italic text-white/90 mb-6">
                  Skin Understood. Then Transformed.
                </p>
              </HeroText>

              <div className="space-y-4 text font-sans text-white/90 font-extralight leading-relaxed mx-auto">
                <HeroText delay={0.2}>
                  <p>Perhaps your skin no longer feels as healthy, comfortable or predictable as it once did.</p>
                </HeroText>
                <HeroText delay={0.3}>
                  <p>You may have noticed redness that does not settle, increased sensitivity, persistent breakouts, pigmentation, dryness or changes linked to hormones or ageing.</p>
                </HeroText>
                <HeroText delay={0.4}>
                  <p>Sometimes the concern is obvious. Sometimes you simply know your skin does not feel like it used to.</p>
                </HeroText>
                <HeroText delay={0.5}>
                  <p>These changes often reflect how your skin is behaving beneath the surface, not just what you can see.</p>
                </HeroText>
                <HeroText delay={0.6}>
                  <p>At ULANDA, we believe the most important step is not choosing a treatment.</p>
                </HeroText>
                <HeroText delay={0.7}>
                  <p>It is understanding what your skin is trying to tell you.</p>
                </HeroText>
                <HeroText delay={0.8}>
                  <p>That understanding allows us to recommend the most appropriate pathway for your skin today and your longer-term skin health.</p>
                </HeroText>
              </div>

              <FadeInWhenVisible delay={0.9}>
                <div className="mt-10 space-y-4">
                  <div>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white">
                      Book Skin Health Consultation
                    </a>
                    <p className="text-sm text-white/60 mt-2 font-sans">&pound;175 &mdash; Fully redeemable against your treatment plan</p>
                    <p className="text-sm text-white/80 italic mt-1 font-serif">Skin Understood. Then Transformed.</p>
                  </div>
                  <div>
                    <Link to="/treatments" className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors font-sans">
                      Explore Skin Treatments <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={1.0}>
                <div className="mt-8 p-4 bg-white/10 border border-white/20 rounded-lg">
                  <p className="text-sm font-sans text-white/70">
                    Every treatment begins with a Barrier &amp; Skin Readiness Assessment to ensure biological suitability.
                  </p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Section 1 Continuation */}
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {[
                'Understanding Before Treatment\u2122',
                'Personalised Care',
                'Regenerative Medicine',
                'Natural-Looking Results'
              ].map((item) => (
                <div key={item} className="bg-secondary rounded-lg px-4 py-3 text-center text-sm font-medium text-base-content/80">
                  {item}
                </div>
              ))}
            </div>

            <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed mb-5">
              You might recognise one or more of these.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'My skin has become more sensitive.',
                'I have redness that will not settle.',
                'My pigmentation keeps returning.',
                'My skin suddenly feels drier.',
                'My skin has changed after 40.',
                'I do not know what is causing the problem.',
                'I have tried different products without lasting improvement.',
                'I do not know which treatment is actually right for me.'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base-content/80 font-light">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg font-serif italic text-primary mb-8">
              If you recognised yourself in any of these, you&apos;re exactly where we begin.
            </p>

            <div className="bg-secondary/60 border border-base-200 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-serif text-primary mb-4">Helen&apos;s Clinical Reflection</h3>
              <p className="text-base-content/80 font-light leading-relaxed mb-3">
                &quot;One of the biggest misconceptions is that the visible concern tells us everything we need to know.
              </p>
              <p className="text-base-content/80 font-light leading-relaxed mb-3">
                Two people can arrive with similar-looking skin but require completely different treatment approaches.
              </p>
              <p className="text-base-content/80 font-light leading-relaxed mb-3">
                That&apos;s why we always begin by understanding how the skin is behaving before recommending a pathway.&quot;
              </p>
              <p className="text-sm text-base-content/70">- Helen Balogun, Clinical Director</p>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Common Skin Concerns We Treat */}
        <section className="py-20 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">
                  Common Skin Concerns{' '}
                  <span className="italic font-light text-primary">We Treat</span>
                </h2>
              </div>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, idx) => (
                <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                  <Link
                    to={cat.link}
                    className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 h-full"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={cat.placeholderUrl || cat.image}
                        alt={`${cat.title} ${cat.subtitle}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif mb-2 text-base-content group-hover:text-primary transition-colors">
                        {cat.title} <span className="italic text-primary">{cat.subtitle}</span>
                      </h3>
                      <p className="text-sm text-base-content/70 mb-4 flex-grow font-light leading-relaxed">{cat.description}</p>
                      <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:translate-x-1 transition-transform text-sm">
                        {cat.linkText} <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* How ULANDA Determines the Right Treatment */}
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-base-content">
              How ULANDA Determines the{' '}
              <span className="italic font-light text-primary">Right Treatment</span>
            </h2>
            <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed mb-6">
              Every skin journey begins with understanding the current condition of your skin. During consultation clinicians evaluate:
            </p>
            <ul className="space-y-3 mb-8">
              {['Barrier stability', 'Hydration levels', 'Inflammation or sensitivity', 'Collagen decline', 'Hormonal influences', 'Previous treatment history'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-base-content/70 font-sans font-light">
                  <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed mb-8">
              For first-time clients, treatment suitability is confirmed during your Skin Health Consultation to ensure the most appropriate treatment pathway and the best possible outcome for your skin.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white">
              Book Skin Health Consultation
            </a>
          </FadeInWhenVisible>
        </section>

        {/* Treatment Pathways */}
        <section className="py-20 px-4 md:px-8 bg-base-200/30">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-base-content">
                Treatment{' '}
                <span className="italic font-light text-primary">Pathways</span>
              </h2>
              <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed mb-6">
                Skin concerns are often addressed through a combination of therapies delivered over time. These pathways may include:
              </p>
              <ul className="space-y-3 mb-6">
                {['Barrier stabilisation protocols', 'Skin renewal therapies', 'Regenerative injectables', 'Structural support treatments'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base-content/70 font-sans font-light">
                    <span className="text-primary mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed">
                This approach supports gradual improvement and long-term skin health.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Signature Skin Health Programmes */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">
                  Signature Skin Health{' '}
                  <span className="italic font-light text-primary">Programmes</span>
                </h2>
                <p className="text-lg text-base-content/80 font-sans max-w-2xl mx-auto mb-2">
                  For clients seeking a structured approach, ULANDA offers signature programmes designed to address specific skin concerns. These programmes combine treatments into regenerative pathways tailored to the skin&#39;s biological needs.
                </p>
              </div>
            </FadeInWhenVisible>

            <h3 className="text-2xl font-serif text-center mb-12 text-base-content">
              <span className="italic font-light text-primary">Signature</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredSignatures.map((sig, idx) => (
                <FadeInWhenVisible key={sig.id} delay={idx * 0.08}>
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
                      <h4 className="text-xl font-serif text-base-content mb-2 group-hover:text-primary transition-colors">
                        {sig.title}
                      </h4>
                      {sig.subtitle && (
                        <p className="text-sm text-primary/80 font-light mb-3">{sig.subtitle}</p>
                      )}
                      <p className="text-sm text-base-content/70 font-light leading-relaxed mb-4 line-clamp-3">
                        {sig.concerns}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Learn More <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </FadeInWhenVisible>
              ))}
            </div>

            <div className="text-center">
              <Link to="/signature" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-focus transition-colors font-sans">
                Explore Signature Programmes <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Clinical Insights & Skin Health Education */}
        <section className="py-20 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">
                  Clinical Insights &amp; Skin Health{' '}
                  <span className="italic font-light text-primary">Education</span>
                </h2>
                <p className="text-lg text-base-content/80 font-sans max-w-3xl mx-auto">
                  ULANDA maintains a growing collection of clinical insights exploring the biological mechanisms behind common skin concerns and regenerative treatments. These articles provide deeper understanding of topics such as collagen decline, hormonal skin changes, pigmentation pathways, and the science behind regenerative therapies.
                </p>
                <p className="text-base text-base-content/70 font-sans max-w-3xl mx-auto mt-4">
                  For clients interested in learning more about how skin behaviour influences treatment outcomes, the journal offers practical and evidence-informed guidance.
                </p>
              </div>
            </FadeInWhenVisible>

            <h3 className="text-2xl font-serif text-center mb-12 mt-8 text-base-content">
              ULANDA Skin Health{' '}
              <span className="italic font-light text-primary">Journal</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {journalCards.map((journal, idx) => (
                <FadeInWhenVisible key={journal.id} delay={idx * 0.08}>
                  <Link
                    to={`/journal/${journal.id}`}
                    className="group block bg-white border border-secondary/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-base-200">
                      <img
                        src={journal.image}
                        alt={journal.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-serif text-base-content mb-2 group-hover:text-primary transition-colors">
                        {journal.title}
                      </h4>
                      <p className="text-sm text-base-content/70 font-light leading-relaxed mb-4">
                        {journal.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </FadeInWhenVisible>
              ))}
            </div>

            <div className="text-center">
              <Link to="/journal" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-focus transition-colors font-sans">
                Explore Clinical Insights <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-base-content text-center">
              Frequently Asked{' '}
              <span className="italic font-light text-primary">Questions</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-base-200 pb-6">
                  <h3 className="text-lg font-sans font-medium text-base-content mb-3">{faq.question}</h3>
                  <p className="text-base-content/70 font-sans font-light leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 md:px-8 bg-secondary text-primary">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Begin Your Personalised Skin{' '}
                <span className="italic font-light">Regeneration Pathway</span>
              </h2>
              <p className="font-sans font-light mb-8 text-base-content/80 text-lg leading-relaxed">
                Whether you are exploring treatment options for the first time or seeking targeted improvement for a specific concern, ULANDA clinicians will guide you through the most appropriate regenerative approach.
              </p>
              <div className="space-y-4">
                <div>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-white px-10 py-4 h-auto text-lg rounded-lg"
                  >
                    Book Skin Health Consultation
                  </a>
                  <p className="text-sm text-base-content/60 mt-2 font-sans">&pound;175 &mdash; Fully redeemable against your treatment plan</p>
                  <p className="text-sm text-primary italic mt-1 font-serif">Skin Understood. Then Transformed.</p>
                </div>
                <div>
                  <Link to="/treatments" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-focus transition-colors font-sans">
                    Explore Skin Treatments <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Visiting Our Skin Clinic */}
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-base-content">
              Visiting Our Skin Clinic in{' '}
              <span className="italic font-light text-primary">Ware</span>
            </h2>
            <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed mb-4">
              ULANDA is a nurse-led skin clinic providing regenerative medical aesthetic treatments in Ware, Hertfordshire.
            </p>
            <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed">
              Clients visit from Ware, Broxbourne, Hoddesdon, Hertford, and Bishop&#39;s Stortford for barrier-first skin treatments, regenerative injectables, and clinically guided aesthetic care.
            </p>
          </FadeInWhenVisible>
        </section>
        <ConsultationCTA />
      </div>
    </>
  );
}
