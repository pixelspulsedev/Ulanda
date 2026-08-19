import React, { useState } from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const CONSULTATION_URL = '/treatments/advanced-skin-health-consultation';

const clinicalPrinciples = [
  {
    title: 'Assessment before recommendation',
    body: 'Understanding comes before advice.',
  },
  {
    title: 'Biology before intervention',
    body: 'We seek to understand what may be influencing your skin beneath the surface.',
  },
  {
    title: 'Treatment sequencing before treatment stacking',
    body: 'The right order often matters as much as the treatment itself.',
  },
  {
    title: 'Long-term skin health over short-term correction',
    body: 'We focus on sustainable skin health rather than temporary improvement.',
  },
  {
    title: 'Personalised care guided by clinical understanding',
    body: 'Every recommendation is based on your presentation rather than a standard protocol.',
  },
];

const biologicalFactors = [
  { title: 'Skin Barrier', body: 'Supports resilience and comfort.' },
  { title: 'Inflammation', body: 'Can influence redness, sensitivity and recovery.' },
  { title: 'Collagen', body: 'Changes skin strength, elasticity and structure.' },
  { title: 'Hormones', body: 'Influence skin behaviour throughout life.' },
  { title: 'Environment', body: 'Daily exposures affect skin function.' },
  { title: 'Tissue Structure', body: 'Supports long-term facial integrity.' },
];

const systemSteps = [
  'Recognition',
  'Understanding',
  'Clinical Assessment',
  'Biological Interpretation',
  'Personalised Planning',
  'Treatment Sequencing',
  'Regeneration',
  'Review & Optimisation',
];

const journeySteps = [
  'Choose How You Begin',
  'Comprehensive or Focused Clinical Assessment',
  'Clinical Understanding',
  'Personalised Treatment Strategy',
  'Structured Treatment Delivery',
  'Review & Optimisation',
  'Long-Term Skin & Tissue Health',
];

const comparisonRows = [
  ['Best for', 'Multiple, complex or changing concerns', 'Specific treatment requests'],
  ['Assessment depth', 'Comprehensive', 'Focused'],
  ['Treatment timing', 'May begin same day where appropriate', 'Usually same day if appropriate'],
  ['AI skin analysis', 'Used where clinically appropriate', 'Not routinely required'],
  ['Treatment plan', 'Full roadmap', 'Treatment-specific plan'],
  ['Programme planning', 'Yes', 'If clinically indicated'],
];

const treatmentStrategyItems = [
  'barrier repair protocols',
  'medical skincare',
  'chemical peels',
  'microneedling',
  'polynucleotides',
  'PRP',
  'Profhilo',
  'skin boosters',
  'anti-wrinkle injections',
  'dermal fillers',
  'collagen biostimulators',
  'thread lifting',
  "women's health regeneration",
];

const signatureProgrammes = [
  'Skin Barrier Repair & Recovery',
  'Rosacea & Redness Control',
  'Menopause Skin Rebuild',
  'Photoaging & Skin Architecture',
  'Structural Skin Regeneration',
  'Under-Eye Renewal',
];

const womensHealthAreas = [
  'postpartum recovery',
  'perimenopause',
  'menopause',
  'intimate and pelvic tissue regeneration',
];

const faqs = [
  {
    question: 'Why doesn’t ULANDA begin with treatment?',
    answer:
      'ULANDA does not begin with treatment because the same visible skin concern can have different underlying causes. Redness, pigmentation, breakouts, texture change or skin ageing may be influenced by barrier dysfunction, inflammation, hormonal change, collagen decline or previous treatment history. Understanding these drivers first allows treatment to be selected more accurately and sequenced more effectively.',
  },
  {
    question: 'Can I book treatment without the Advanced Skin Health Consultation?',
    answer:
      'Yes. If you already have a specific treatment in mind, you may begin through a Treatment Appointment. Every Treatment Appointment includes a Focused Clinical Assessment before treatment proceeds. This confirms whether the requested treatment is appropriate on the day and whether any modification, deferral or further assessment is needed.',
  },
  {
    question:
      'What is the difference between the Advanced Skin Health Consultation and a Treatment Appointment?',
    answer:
      'The Advanced Skin Health Consultation provides a comprehensive assessment for patients with complex, multiple or unclear skin concerns. It is designed to create a personalised treatment roadmap. A Treatment Appointment is for patients with a specific treatment request and includes a Focused Clinical Assessment to confirm suitability before treatment.',
  },
  {
    question: 'What happens during a Focused Clinical Assessment?',
    answer:
      'A Focused Clinical Assessment reviews the treatment request, relevant medical history, contraindications, skin or tissue condition and whether the requested treatment remains appropriate. It is proportionate to the appointment type and is designed to ensure treatment is safe, suitable and clinically aligned.',
  },
  {
    question: 'Is the Focused Clinical Assessment free?',
    answer:
      'The Focused Clinical Assessment is included within a Treatment Appointment. It is not a separate diagnostic consultation and does not replace the Advanced Skin Health Consultation where deeper assessment, treatment planning or complex skin analysis is required.',
  },
  {
    question: 'When should I choose the Advanced Skin Health Consultation?',
    answer:
      'You should choose the Advanced Skin Health Consultation if you have multiple concerns, are unsure which treatment is right, have sensitive or reactive skin, pigmentation, rosacea, hormonal skin changes, previous unsuccessful treatments or want a long-term regenerative treatment plan.',
  },
  {
    question: 'What happens if my requested treatment is not appropriate?',
    answer:
      'If the requested treatment is not appropriate, your clinician will explain why. Treatment may be modified, deferred or replaced with a more suitable recommendation. In some cases, you may be advised to proceed through the Advanced Skin Health Consultation before treatment continues.',
  },
  {
    question: 'Can treatment happen on the same day?',
    answer:
      'Yes, treatment may take place on the same day where clinically appropriate. This applies to both the Advanced Skin Health Consultation and Treatment Appointments, depending on assessment findings, treatment suitability and available appointment time.',
  },
  {
    question: 'Why might treatment be deferred?',
    answer:
      'Treatment may be deferred if the skin is inflamed, barrier-compromised, medically unsuitable, not biologically ready or if a different sequence would produce a safer or more predictable outcome. Deferring treatment is sometimes the most clinically responsible decision.',
  },
  {
    question: 'Why are treatments sequenced?',
    answer:
      'Treatments are sequenced because skin responds better when interventions are introduced at the right stage. For example, barrier repair may be needed before microneedling, polynucleotides or injectable treatments. Sequencing improves tolerance, predictability and long-term results.',
  },
  {
    question: 'Do all patients receive AI skin analysis?',
    answer:
      'AI-supported skin analysis may be used where clinically appropriate, particularly within the Advanced Skin Health Consultation. It is not required for every Treatment Appointment and is used as a support tool, not a replacement for clinical assessment.',
  },
  {
    question: 'Are treatments personalised?',
    answer:
      'Yes. Every treatment recommendation is based on the individual’s skin behaviour, clinical history, treatment goals, readiness and response over time. ULANDA does not select treatments from a generic menu.',
  },
  {
    question: 'Can I move from one pathway to the other?',
    answer:
      'Yes. A patient may begin with a Treatment Appointment and be advised to move into the Advanced Skin Health Consultation if greater clinical understanding is needed. Likewise, patients who complete the Advanced Skin Health Consultation may later book focused Treatment Appointments as part of their plan.',
  },
  {
    question: 'Does this system apply to Women’s Health services?',
    answer:
      'Yes. The same assessment-first principle applies to ULANDA’s women’s health services, including intimate and pelvic tissue regeneration. The clinical context is different, but the principle remains the same: understanding comes before treatment.',
  },
  {
    question: 'Why is this different from a standard aesthetic clinic?',
    answer:
      'Many aesthetic clinics are treatment-led. ULANDA is system-led. This means treatment decisions are based on clinical assessment, biological readiness, treatment sequencing and long-term planning rather than isolated treatment requests.',
  },
];

const clinicalSystemSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.ulanda.co.uk/clinical-system#faq',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

const FlowArrow = () => (
  <div className="flex justify-center py-3 text-primary/50" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  </div>
);

export default function ClinicalSystem() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <Head>
        <title>The ULANDA Clinical System | Diagnostic-Led Skin Clinic Ware</title>
        <meta
          name="description"
          content="Discover how ULANDA’s diagnostic-led clinical system combines comprehensive skin assessment, focused treatment appointments, regenerative treatments and personalised treatment sequencing in Ware, Hertfordshire."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/clinical-system" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="The ULANDA Clinical System | Diagnostic-Led Skin Clinic Ware" />
        <meta
          property="og:description"
          content="ULANDA’s diagnostic-led clinical system: comprehensive skin assessment, focused treatment appointments, regenerative treatments and personalised treatment sequencing in Ware, Hertfordshire."
        />
        <meta property="og:url" content="https://www.ulanda.co.uk/clinical-system" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicalSystemSchema) }}
      />

      <div className="bg-base-100">
        {/* HERO */}
        <section className="relative py-24 md:py-32 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <HeroText>
              <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.2em] text-primary/70 font-sans">
                The ULANDA Clinical System
              </p>
            </HeroText>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-base-content mb-6">
              <HeroText delay={0.1}>
                Understanding <span className="italic font-light text-primary">Before Treatment</span>
              </HeroText>
            </h1>
            <FadeInWhenVisible delay={0.2}>
              <p className="text-lg text-base-content/80 font-sans max-w-2xl mx-auto leading-relaxed">
                Our diagnostic-led model of care. Every recommendation, every treatment and every
                long-term programme follows a structured clinical system designed to understand the
                biology behind your skin or tissue before deciding how best to support it.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* WHEN YOUR SKIN CHANGES */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6 leading-tight">
                When your skin changes, it&rsquo;s natural to want a solution.
              </h2>
              <div className="space-y-4 text-lg text-base-content/80 font-sans leading-relaxed">
                <p>Many people arrive believing they need a specific treatment.</p>
                <p>In reality, what they often need first is an explanation.</p>
                <p>
                  Because when we understand why your skin or tissue has changed, we can make better
                  clinical decisions together.
                </p>
                <p className="font-serif italic text-primary text-xl">
                  That simple idea became the foundation of The ULANDA Clinical System&trade;.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* UNDERSTANDING BEFORE TREATMENT — intro */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <div className="border-l-4 border-primary pl-6 space-y-2 mb-8">
                <p className="text-xl md:text-2xl font-serif text-base-content">Every skin tells a story.</p>
                <p className="text-xl md:text-2xl font-serif text-base-content/70">Treatment should never begin with assumption.</p>
                <p className="text-xl md:text-2xl font-serif italic text-primary">It should begin with understanding.</p>
              </div>
              <div className="space-y-4 text-lg text-base-content/80 font-sans leading-relaxed">
                <p>
                  At ULANDA, every recommendation, every treatment and every long-term programme
                  follows a structured clinical system designed to understand the biology behind your
                  skin or tissue before deciding how best to support it.
                </p>
                <p>
                  Whether you begin with a comprehensive assessment or a treatment appointment, every
                  patient enters the same clinical system built on biological understanding,
                  evidence-informed clinical decision-making and personalised care.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* CLINICAL PRINCIPLES */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content text-center mb-12">
                Our Clinical Principles
              </h2>
            </FadeInWhenVisible>
            <div className="grid md:grid-cols-2 gap-6">
              {clinicalPrinciples.map((p, i) => (
                <FadeInWhenVisible key={p.title} delay={0.05 * i}>
                  <div className="bg-secondary/30 rounded-2xl p-8 h-full">
                    <h3 className="text-xl font-serif text-primary mb-2">{p.title}</h3>
                    <p className="text-base-content/80 font-sans leading-relaxed">{p.body}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ULANDA EXISTS */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content text-center mb-12">
                Why ULANDA Exists
              </h2>
              <div className="max-w-xl mx-auto text-center space-y-1 mb-6">
                <p className="text-sm uppercase tracking-widest text-primary/60">Most clinics ask:</p>
                <p className="text-2xl font-serif text-base-content/70">What treatment would you like?</p>
              </div>
              <FlowArrow />
              <div className="max-w-xl mx-auto text-center space-y-1 mb-6">
                <p className="text-sm uppercase tracking-widest text-primary/60">We ask:</p>
                <p className="text-2xl font-serif italic text-primary">What is your skin trying to tell us?</p>
              </div>
              <FlowArrow />
              <div className="max-w-2xl mx-auto text-center space-y-4 text-lg text-base-content/80 font-sans leading-relaxed">
                <p>Visible skin changes are often signs of underlying biological processes.</p>
                <p>So we understand the biology before recommending treatment. These may include:</p>
              </div>
            </FadeInWhenVisible>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {biologicalFactors.map((f, i) => (
                <FadeInWhenVisible key={f.title} delay={0.05 * i}>
                  <div className="bg-base-100 rounded-lg p-6 h-full border border-secondary/40">
                    <h3 className="font-medium font-sans text-primary mb-1">{f.title}</h3>
                    <p className="text-base-content/80 font-sans leading-relaxed">{f.body}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
            <FadeInWhenVisible delay={0.2}>
              <div className="max-w-2xl mx-auto text-center mt-12 space-y-4 text-lg text-base-content/80 font-sans leading-relaxed">
                <p>
                  Treating only the visible concern may provide temporary improvement, but often fails
                  to produce predictable, long-term outcomes.
                </p>
                <p className="font-serif italic text-primary text-xl">
                  ULANDA exists to understand the biology first, then determine the most appropriate
                  clinical pathway.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* UNDERSTANDING BEFORE TREATMENT — detail */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6 leading-tight">
                Understanding Before Treatment
              </h2>
              <p className="text-lg text-base-content/80 font-sans leading-relaxed mb-10">
                Understanding Before Treatment is the clinical principle that guides every
                recommendation at ULANDA.
              </p>
            </FadeInWhenVisible>
            <div className="grid md:grid-cols-2 gap-10">
              <FadeInWhenVisible>
                <h3 className="text-xl font-serif text-primary mb-4">
                  During every consultation we seek to understand:
                </h3>
                <ul className="space-y-2 text-base-content/80 font-sans">
                  {[
                    "what you're experiencing",
                    'what may be contributing to those changes',
                    'whether treatment is appropriate today',
                    'whether your skin or tissue is ready',
                    "how today's decisions support your long-term skin health",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-serif italic text-primary text-lg">
                  Treatment is never the starting point. Understanding is.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <h3 className="text-xl font-serif text-primary mb-4">What this means for you</h3>
                <p className="text-base-content/80 font-sans mb-3">You don&rsquo;t need to know:</p>
                <ul className="space-y-2 text-base-content/80 font-sans mb-6">
                  {['which treatment to ask for', 'whether your skin is suitable', "whether you're choosing correctly"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <p className="text-base-content/80 font-sans leading-relaxed">
                  That&rsquo;s our responsibility. Your role is simply to tell us what you&rsquo;ve
                  noticed. We&rsquo;ll help you understand what your skin may be telling us and discuss
                  the most appropriate way forward together.
                </p>
              </FadeInWhenVisible>
            </div>

            <FadeInWhenVisible delay={0.15}>
              <div className="bg-secondary/40 rounded-2xl p-8 md:p-12 mt-16">
                <h3 className="text-xl font-serif text-primary mb-4">Helen&rsquo;s Clinical Reflection</h3>
                <div className="space-y-3 text-lg text-base-content/80 font-sans italic leading-relaxed">
                  <p>
                    &ldquo;I&rsquo;ve found that the most successful outcomes rarely come from starting
                    with the newest treatment.
                  </p>
                  <p>They come from taking the time to understand what the skin is actually asking for.</p>
                  <p>That is why every recommendation at ULANDA begins with understanding.&rdquo;</p>
                </div>
                <p className="mt-4 font-medium text-base-content">— Helen Balogun</p>
                <p className="text-sm text-base-content/60">Clinical Director</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* HOW THE SYSTEM WORKS */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content text-center mb-4">
                How the ULANDA Clinical System Works
              </h2>
              <p className="text-center text-base-content/80 font-sans mb-12">
                The ULANDA Clinical System follows a structured sequence:
              </p>
            </FadeInWhenVisible>
            <div className="max-w-md mx-auto">
              {systemSteps.map((step, i) => (
                <FadeInWhenVisible key={step} delay={0.04 * i}>
                  <div className="bg-base-100 rounded-lg py-4 px-6 text-center font-serif text-lg text-base-content border border-secondary/40">
                    {step}
                  </div>
                  {i < systemSteps.length - 1 && <FlowArrow />}
                </FadeInWhenVisible>
              ))}
            </div>
            <FadeInWhenVisible delay={0.2}>
              <div className="max-w-xl mx-auto text-center mt-10 space-y-2 text-base-content/80 font-sans">
                <p>Every patient follows an individual journey. The sequence changes.</p>
                <p className="font-serif italic text-primary text-lg">The clinical principles do not.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* TWO CLINICAL ENTRY PATHWAYS */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeInWhenVisible>
              <p className="text-center text-sm uppercase tracking-widest text-primary/60 mb-3">One Clinical System</p>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content text-center mb-6">
                Two Clinical Entry Pathways
              </h2>
              <div className="max-w-2xl mx-auto text-center space-y-2 text-lg text-base-content/80 font-sans leading-relaxed mb-12">
                <p>Every patient enters the same ULANDA Clinical System.</p>
                <p>The difference is not the quality of care.</p>
                <p>
                  The difference is the depth of understanding required to achieve the best clinical
                  outcome.
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <h3 className="text-2xl font-serif text-base-content text-center mb-2">Which Best Describes You?</h3>
              <p className="text-center text-base-content/70 font-sans mb-10">
                Not sure where to begin? Use the guide below to identify the most appropriate starting
                point.
              </p>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeInWhenVisible>
                <div className="bg-secondary/30 rounded-2xl p-8 h-full flex flex-col">
                  <h3 className="text-xl font-serif text-primary mb-4">
                    🟦 Comprehensive Clinical Assessment
                  </h3>
                  <p className="text-base-content/80 font-sans mb-3">Choose this if:</p>
                  <ul className="space-y-2 text-base-content/80 font-sans mb-6 flex-1">
                    {[
                      'I do not know what is causing my skin changes.',
                      'I have several concerns I want addressed together.',
                      'My skin has stopped responding to products or treatments.',
                      'I have redness, pigmentation, sensitivity or hormonal skin changes.',
                      'I want a long-term regenerative treatment plan.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>&ldquo;{item}&rdquo;</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={CONSULTATION_URL} className="btn btn-primary">
                    Advanced Skin Health Consultation &rarr;
                  </Link>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.1}>
                <div className="bg-secondary/30 rounded-2xl p-8 h-full flex flex-col">
                  <h3 className="text-xl font-serif text-primary mb-4">🟩 Treatment Appointment</h3>
                  <p className="text-base-content/80 font-sans mb-3">Choose this if:</p>
                  <ul className="space-y-2 text-base-content/80 font-sans mb-6 flex-1">
                    {[
                      'I already know the treatment I am interested in.',
                      'I am returning for maintenance.',
                      'I have had this type of treatment before.',
                      'I have one specific concern I want assessed.',
                      'I want treatment if it is clinically appropriate on the day.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>&ldquo;{item}&rdquo;</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/treatments" className="btn btn-primary">
                    Explore Treatments &rarr;
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>

            {/* Related pathways */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <FadeInWhenVisible>
                <div className="bg-base-100 rounded-lg p-6 border border-secondary/40 h-full">
                  <h4 className="font-serif text-lg text-primary mb-2">Skin Concerns</h4>
                  <p className="text-base-content/80 font-sans mb-4 leading-relaxed">
                    Understand the biological drivers behind rosacea, pigmentation, acne,
                    menopause-related skin changes, skin ageing and other common concerns.
                  </p>
                  <Link to="/conditions" className="text-primary hover:underline font-medium">
                    Explore Skin Concerns &rarr;
                  </Link>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="bg-base-100 rounded-lg p-6 border border-secondary/40 h-full">
                  <h4 className="font-serif text-lg text-primary mb-2">Signature Programmes</h4>
                  <p className="text-base-content/80 font-sans mb-4 leading-relaxed">
                    Discover structured regenerative programmes designed for long-term skin health
                    rather than isolated treatments.
                  </p>
                  <Link to="/signature" className="text-primary hover:underline font-medium">
                    Explore Signature Programmes &rarr;
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* PATHWAY COMPARISON */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content text-center mb-12">
                Pathway Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-base-100 rounded-lg overflow-hidden text-left">
                  <thead>
                    <tr className="border-b border-secondary/40">
                      <th className="p-4 font-sans text-sm uppercase tracking-widest text-primary/60"></th>
                      <th className="p-4 font-serif text-base-content">Comprehensive Clinical Assessment</th>
                      <th className="p-4 font-serif text-base-content">Focused Clinical Assessment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row[0]} className="border-b border-secondary/20">
                        <td className="p-4 font-medium text-base-content/70 font-sans">{row[0]}</td>
                        <td className="p-4 text-base-content/80 font-sans">{row[1]}</td>
                        <td className="p-4 text-base-content/80 font-sans">{row[2]}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="p-4 font-medium text-base-content/70 font-sans">Next step</td>
                      <td className="p-4">
                        <Link to={CONSULTATION_URL} className="text-primary hover:underline font-medium">
                          Advanced Skin Health Consultation
                        </Link>
                      </td>
                      <td className="p-4">
                        <Link to="/treatments" className="text-primary hover:underline font-medium">
                          Explore Treatments
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* CLINICAL DECISION GATE */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">Clinical Decision Gate</h2>
              <p className="text-base-content/80 font-sans mb-10 leading-relaxed">
                Before treatment proceeds, the clinician confirms whether today&rsquo;s treatment is
                appropriate.
              </p>
              <div className="space-y-0">
                <div className="bg-secondary/30 rounded-lg py-4 px-6 font-serif text-lg text-base-content">
                  Focused or Comprehensive Assessment
                </div>
                <FlowArrow />
                <div className="bg-secondary/30 rounded-lg py-4 px-6 font-serif text-lg text-primary">
                  Is treatment appropriate today?
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-base-100 rounded-lg py-4 px-6 border border-primary/30">
                    <p className="font-medium text-primary">YES</p>
                    <p className="text-base-content/80 font-sans text-sm">Treatment proceeds</p>
                  </div>
                  <div className="bg-base-100 rounded-lg py-4 px-6 border border-secondary/40">
                    <p className="font-medium text-base-content/70">NO</p>
                    <p className="text-base-content/80 font-sans text-sm">
                      Treatment is modified, deferred or redirected
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-base-content/80 font-sans leading-relaxed">
                This decision gate protects clinical outcomes and ensures every treatment remains
                aligned with Understanding Before Treatment.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* HOW WE DECIDE */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">How We Decide</h2>
              <p className="text-lg text-base-content/80 font-sans leading-relaxed mb-4">
                Clinical understanding forms the foundation of every recommendation. Assessment may
                include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-base-content/80 font-sans mb-8">
                {[
                  'skin behaviour',
                  'barrier integrity',
                  'inflammatory activity',
                  'hormonal influences',
                  'lifestyle factors',
                  'visible ageing patterns',
                  'structural facial assessment',
                  'tissue quality',
                  'AI-supported skin imaging where appropriate',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base-content/80 font-sans leading-relaxed">
                The objective is not simply to identify what is visible.
              </p>
              <p className="font-serif italic text-primary text-lg mt-2">
                It is to understand why it is occurring.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* FROM UNDERSTANDING TO TREATMENT */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">
                From Understanding to Treatment
              </h2>
              <p className="text-lg text-base-content/80 font-sans leading-relaxed mb-4">
                Once sufficient clinical understanding has been established, an individual treatment
                strategy is created. This may include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-base-content/80 font-sans mb-8">
                {treatmentStrategyItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base-content/80 font-sans leading-relaxed">
                Treatment is never selected in isolation. Every recommendation forms part of a wider
                clinical strategy designed around your individual presentation, biological readiness
                and long-term objectives.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* TREATMENT INTEGRATION */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">Treatment Integration</h2>
              <div className="space-y-4 text-lg text-base-content/80 font-sans leading-relaxed">
                <p>
                  One of the defining characteristics of the ULANDA Clinical System is treatment
                  sequencing.
                </p>
                <p>
                  Rather than selecting treatments independently, interventions are introduced
                  according to biological readiness, tissue response and long-term treatment
                  objectives.
                </p>
                <p>
                  For example, skin may need to be stabilised before regenerative treatments are
                  introduced. Collagen stimulation may need to occur before structural refinement.
                  Maintenance may then be used to preserve and extend results.
                </p>
                <p>
                  Treatment integration ensures regenerative therapies, injectable treatments, medical
                  skincare and long-term maintenance work together as one clinical strategy.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* WHAT MAKES IT DIFFERENT */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">
                What Makes the ULANDA Clinical System Different?
              </h2>
              <div className="space-y-4 text-lg text-base-content/80 font-sans leading-relaxed">
                <p>Traditional aesthetics often begins with treatment selection.</p>
                <p className="font-serif italic text-primary text-xl">ULANDA begins with clinical understanding.</p>
                <p>
                  That means treatment is not chosen because it is popular, requested or available. It
                  is selected because it fits the clinical picture, the biological readiness of the
                  skin or tissue and the long-term outcome being planned.
                </p>
                <p>This distinction influences every recommendation we make.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* SIGNATURE PROGRAMMES */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">Signature Programmes</h2>
              <p className="text-lg text-base-content/80 font-sans leading-relaxed mb-4">
                For patients requiring more comprehensive care, individual treatments are integrated
                into structured Signature Programmes. These programmes combine multiple therapies over
                time to address common biological patterns rather than isolated symptoms.
              </p>
              <p className="text-base-content/80 font-sans mb-4">Examples include:</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-base-content/80 font-sans mb-8">
                {signatureProgrammes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base-content/80 font-sans leading-relaxed mb-8">
                Each programme evolves as your skin responds, ensuring treatment remains aligned with
                your progress and long-term goals.
              </p>
              <Link to="/signature" className="btn btn-primary">
                Explore Signature Programmes &rarr;
              </Link>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* WOMEN'S HEALTH */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">Women&rsquo;s Health</h2>
              <p className="text-lg text-base-content/80 font-sans leading-relaxed mb-4">
                The same clinical principles extend beyond skin health. ULANDA also provides
                clinician-led women&rsquo;s health services where tissue regeneration and physiological
                change are approached using the same assessment-first methodology.
              </p>
              <p className="text-base-content/80 font-sans mb-4">Areas include:</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-base-content/80 font-sans mb-6">
                {womensHealthAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base-content/80 font-sans mb-8">
                Different tissues. <span className="font-serif italic text-primary">The same clinical system.</span>
              </p>
              <Link to="/conditions/menopause-hormone-skin-changes" className="btn btn-primary">
                Explore Women&rsquo;s Health &rarr;
              </Link>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* CLINICAL KNOWLEDGE */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">Clinical Knowledge</h2>
              <div className="space-y-4 text-lg text-base-content/80 font-sans leading-relaxed mb-8">
                <p>Clinical understanding extends beyond the consultation room.</p>
                <p>
                  The ULANDA Clinical Journal explores the science behind skin behaviour, regenerative
                  medicine, women&rsquo;s health and treatment sequencing to help patients understand
                  the reasons behind every recommendation.
                </p>
                <p className="font-serif italic text-primary">
                  Because informed patients make better long-term decisions.
                </p>
              </div>
              <Link to="/journal" className="btn btn-primary">
                Explore the Clinical Journal &rarr;
              </Link>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* SKIN SHIFT */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-6">
                Start With The Skin Shift&trade;
              </h2>
              <div className="space-y-4 text-lg text-base-content/80 font-sans leading-relaxed mb-8">
                <p>New to ULANDA? Start with our free educational guide.</p>
                <p>
                  The Skin Shift&trade; explains why skin changes over time, how barrier function
                  influences treatment outcomes and why long-term skin health begins with
                  understanding.
                </p>
              </div>
              <Link to="/downloads/skin-health" className="btn btn-primary">
                Start With The Skin Shift &rarr;
              </Link>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content text-center mb-12">
                Frequently Asked Questions
              </h2>
            </FadeInWhenVisible>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={faq.question} className="bg-base-100 border border-secondary/40 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    aria-expanded={activeFaq === idx}
                  >
                    <span className="font-medium font-sans text-primary text-lg">{faq.question}</span>
                    <span className={`text-primary shrink-0 transition-transform ${activeFaq === idx ? 'rotate-45' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <div className="px-6 pb-6 text-base-content/80 font-sans font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ULANDA CLINICAL JOURNEY */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <FadeInWhenVisible>
              <p className="text-center text-sm uppercase tracking-widest text-primary/60 mb-3">
                The ULANDA Clinical Journey
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content text-center mb-12">
                Choose How You Begin
              </h2>
            </FadeInWhenVisible>
            <div className="max-w-md mx-auto">
              {journeySteps.map((step, i) => (
                <FadeInWhenVisible key={step} delay={0.04 * i}>
                  <div className="bg-secondary/30 rounded-lg py-4 px-6 text-center font-serif text-lg text-base-content">
                    {step}
                  </div>
                  {i < journeySteps.length - 1 && <FlowArrow />}
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* BEGIN WITH THE RIGHT LEVEL */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content text-center mb-4">
                Begin With the Right Level of Understanding
              </h2>
              <p className="max-w-2xl mx-auto text-center text-base-content/80 font-sans leading-relaxed mb-12">
                Whether you are looking for answers, long-term planning or a specific treatment, every
                patient enters the same ULANDA Clinical System. The only difference is how much
                understanding is required before treatment begins.
              </p>
            </FadeInWhenVisible>
            <div className="grid md:grid-cols-2 gap-8">
              <FadeInWhenVisible>
                <div className="bg-base-100 rounded-2xl p-8 h-full flex flex-col">
                  <h3 className="text-xl font-serif text-primary mb-3">I Need a Comprehensive Assessment</h3>
                  <p className="text-base-content/80 font-sans leading-relaxed flex-1 mb-6">
                    Recommended if you have multiple concerns, want a long-term treatment strategy or
                    would benefit from a detailed diagnostic assessment.
                  </p>
                  <Link to={CONSULTATION_URL} className="btn btn-primary">
                    Advanced Skin Health Consultation &rarr;
                  </Link>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.1}>
                <div className="bg-base-100 rounded-2xl p-8 h-full flex flex-col">
                  <h3 className="text-xl font-serif text-primary mb-3">I Already Have a Treatment in Mind</h3>
                  <p className="text-base-content/80 font-sans leading-relaxed flex-1 mb-6">
                    Recommended if you have a specific treatment request or are continuing your
                    treatment journey. Every appointment includes a Focused Clinical Assessment before
                    treatment proceeds.
                  </p>
                  <Link to="/treatments" className="btn btn-primary">
                    Explore Treatments &rarr;
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>

            <FadeInWhenVisible delay={0.2}>
              <div className="max-w-2xl mx-auto text-center mt-16 space-y-2 text-base-content/80 font-sans leading-relaxed">
                <p>Every patient enters the ULANDA Clinical System through one of two clinical entry pathways.</p>
                <p>The pathway may differ. The standard of care does not.</p>
                <p>Everything begins with the same commitment:</p>
                <p className="font-serif italic text-primary text-2xl pt-2">Understanding Before Treatment</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </>
  );
}
