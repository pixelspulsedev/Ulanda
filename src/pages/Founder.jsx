import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { HeroText, FadeInWhenVisible, RevealImage } from '../components/animations';

const qualifications = [
  'Registered Nurse & Registered Midwife',
  'Nurse Independent Prescriber',
  'Advanced Aesthetic Practitioner',
  <>
    MSc in Quality Improvement & Patient Safety —{' '}
    <a
      href="https://www.imperial.ac.uk/"
      target="_blank"
      rel="noreferrer"
      className="text-primary font-bold hover:underline inline-flex items-center gap-0.5"
    >
      Imperial College London{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </>,
  'BSc (Hons) in Professional Practice — Women’s Health',
  <>
    Trained BHRT Practitioner (
    <a
      href="https://www.marionglucktraining.com/"
      target="_blank"
      rel="noreferrer"
      className="text-primary font-bold hover:underline inline-flex items-center gap-0.5"
    >
      Marion Gluck Academy{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </a>
    )
  </>,
  <>
    Member of the{' '}
    <a
      href="https://thebms.org.uk/"
      target="_blank"
      rel="noreferrer"
      className="text-primary font-bold hover:underline inline-flex items-center gap-0.5"
    >
      British Menopause Society{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </>,
];

const philosophyPillars = [
  {
    title: 'Treat the Root, Not the Symptom',
    description:
      'Understanding the physiology of postpartum, perimenopause and menopause allows her to design treatment plans that work with the body, not against it.',
  },
  {
    title: 'Natural, Elegant, You-Led Results',
    description:
      'Helen believes in restoring strength, balance and glow — never altering identity or creating artificial volume.',
  },
  {
    title: 'Integrating Skin, Hormones & Internal Wellness',
    description:
      'Her ULANDA model aligns external regenerative treatments with internal hormonal and metabolic health to deliver outcomes that truly last.',
  },
];

const trainingAreas = [
  'Polynucleotides (PN) & PRP',
  'Biostimulators (PLLA, PDLLA, CaHA)',
  'Threads',
  'Skin boosters (Profhilo, Hydrobooster, Jalupro, Seventy Hyal)',
  'Medical peels & regenerative facials',
  'Bio-identical hormone therapy (BHRT)',
  'Intimate wellness',
  'Internal wellness (IV, IM)',
  <>
    Body contouring &{' '}
    <Link
      to="/programmes"
      className="text-primary font-bold hover:underline inline-flex items-center gap-0.5"
    >
      postpartum / menopause programmes{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  </>,
];

const whyChoose = [
  'A clinician who understands women’s physiology as deeply as she understands their skin',
  'A practitioner who treats the whole woman — not just the visible concern',
  'A safe, honest space where women feel supported, not sold to',
  'Natural, regenerative results that evolve beautifully over time',
  'The reassurance of being cared for by a medically trained, menopause-literate expert',
];

const feelings = [
  'Heard',
  'Understood',
  'Safe',
  'Supported',
  'Beautifully herself',
];

export default function Founder() {
  return (
    <>
      <Head>
        <title>Ulanda - Our Founder</title>
        <meta
          name="description"
          content="Meet Helen Balogun, Founder of ULANDA. Advanced Nurse Practitioner, Regenerative Aesthetics Specialist & Women’s Health Advocate."
        />
      </Head>

      <div className="bg-base-100 text-base-content">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90 mt-8">
              <HeroText>
                <h1 className="text-3xl md:text-4xl font-serif leading-tight">
                  Helen Balogun{' '}
                  <span className="text-lg md:text-xl block mt-2 font-sans font-light text-base-content/80">
                    MSc, BSc (Hons), RN, RM, NIP
                  </span>
                </h1>
                <p className="text font-sans italic">
                  Advanced Nurse Practitioner, Regenerative Aesthetics Specialist
                  & Women’s Health Advocate
                </p>{' '}
                <h2 className="text-2xl font-serif text-base-content mb-4">
                  A Vision Built on{' '}
                  <span className="italic text-primary">
                    Care, Science & Women’s Wellbeing
                  </span>
                </h2>
                <p>
                  ULANDA was created by Helen Balogun, an Advanced Nurse
                  Practitioner with over 20 years of clinical experience across
                  Nursing, Midwifery, Women’s Health and Medical Aesthetics.
                </p>
                <p>Her vision was simple but bold:</p>
                <p className="font-medium text-base-content">
                  To give women a place where their skin, hormones and wellbeing
                  are treated with equal importance — with care that is
                  scientific, personal and deeply respectful of each woman’s
                  journey.
                </p>
                <p>
                  Helen’s approach is grounded in evidence, shaped by compassion
                  and fuelled by a lifelong dedication to supporting women through
                  every stage of life.
                </p>
              </HeroText>
            </div>

            <div className="w-full flex justify-center">
              <RevealImage className="max-w-sm aspect-[3/4] w-full">
                <img
                  src="/assets/img/home/ulanda-helen-balogun-founder-ware.webp"
                  alt=""
                  className="w-full h-full object-cover"
                  fetchpriority="high"
                />
              </RevealImage>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section className="py-16 px-4 md:px-8 bg-secondary/40">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  A Career Dedicated to{' '}
                  <span className="italic text-primary">Women’s Health</span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  Helen has built her career across disciplines that uniquely
                  position her to lead a regenerative-first women’s clinic.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  This blend of clinical expertise, women’s health knowledge and
                  aesthetic mastery allows Helen to understand not only how a
                  woman looks — but how she feels, functions and evolves
                  biologically across the decades.
                </p>
              </FadeInWhenVisible>
            </div>
            <div>
              <FadeInWhenVisible>
                <ul className="space-y-3 text-base md:text-lg font-sans font-light text-base-content/90">
                  {qualifications.map((item) => (
                    <li key={typeof item === 'string' ? item : 'qual-item'} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4 max-w-3xl">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  A{' '}
                  <span className="italic text-primary">Regenerative-First</span>{' '}
                  Philosophy
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  Helen is part of the new wave of clinicians leading the shift
                  away from “quick fix aesthetics” toward regeneration, internal
                  balance and long-term wellness.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  Her philosophy is built on three pillars:
                </p>
              </FadeInWhenVisible>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {philosophyPillars.map((pillar, index) => (
                <FadeInWhenVisible
                  key={pillar.title}
                  delay={index * 0.1}
                  className="h-full"
                >
                  <article
                    className="relative rounded-lg p-6 bg-secondary space-y-3 h-full"
                  >
                    <div className="absolute flex items-center gap-2 text-primary">
                      <span className="font-sans text-9xl font-bold text-primary/10">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-sans font-medum text-primary">
                      {pillar.title}
                    </h3>
                    <p className="text-base font-sans leading-relaxed font-light text-primary/80">
                      {pillar.description}
                    </p>
                  </article>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="py-16 px-4 md:px-8 bg-secondary/40">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2">
              <FadeInWhenVisible>
                <ul className="grid sm:grid-cols-1 gap-3 text-base md:text-lg font-sans font-light text-base-content/90">
                  {trainingAreas.map((item) => (
                    <li key={typeof item === 'string' ? item : 'training-item'} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
            </div>
            <div className="space-y-4 order-1">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  Trained Across the Full{' '}
                  <span className="italic text-primary">
                    Regenerative Spectrum
                  </span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  Helen has completed advanced training across every treatment
                  within ULANDA, allowing her to deliver — and oversee — every
                  service with clinical precision.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  Her multidisciplinary experience ensures the highest standard of
                  safety, artistry and medical governance.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <FadeInWhenVisible>
              <h2 className="text-2xl md:text-3xl font-serif">
                Why Women Choose{' '}
                <span className="italic text-primary">Helen & ULANDA</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                Women choose Helen because she offers something rare in today’s
                aesthetic industry:
              </p>
            </FadeInWhenVisible>
            <div className="grid md:grid-cols-2 gap-6">
              {whyChoose.map((item, index) => (
                <FadeInWhenVisible key={item} delay={index * 0.1}>
                  <div
                    className="flex items-start gap-3 p-4 bg-secondary rounded-lg text-primary h-full"
                  >
                    <span className="text-base font-sans">{item}</span>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4 md:px-8 bg-secondary/40">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <FadeInWhenVisible>
              <h2 className="text-2xl md:text-3xl font-serif">
                Helen’s Vision for{' '}
                <span className="italic text-primary">ULANDA</span>
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="max-w-3xl mx-auto space-y-4 text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                <p>
                  ULANDA was created to be more than a clinic. It is a sanctuary,
                  a partner in ageing, and a trusted guide for women who want to
                  feel well, balanced and confident at every stage of life.
                </p>
                <p>
                  Helen’s mission is to ensure every woman who enters ULANDA
                  feels:
                </p>
              </div>
            </FadeInWhenVisible>
            <div className="flex flex-wrap justify-center gap-4">
              {feelings.map((item, index) => (
                <FadeInWhenVisible key={item} delay={0.3 + index * 0.1}>
                  <span
                    className="px-6 py-3 rounded-full bg-secondary text-primary font-sans text-lg inline-block"
                  >
                    {item}
                  </span>
                </FadeInWhenVisible>
              ))}
            </div>
            <FadeInWhenVisible delay={0.5}>
              <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                ULANDA is her life’s work — a carefully built ecosystem where
                clinical excellence meets warmth, and where women are celebrated,
                never judged.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Message Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="relative flex justify-center">
              <RevealImage className="max-w-sm aspect-[3/4] w-full">
                <img
                  src="/assets/img/home/ulanda-helen-balogun-founder-ware-1.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </RevealImage>
            </div>
            <div className="max-w-4xl mx-auto text-start space-y-8">
              <FadeInWhenVisible>
                <p className="font-serif text-3xl">
                  A <span className="italic text-primary">Message </span>From
                  Helen
                </p>
                <blockquote className="text-xl md:text-2xl font-sans italic font-light leading-relaxed  space-y-4">
                  <p>
                    “Women deserve care that understands everything they are
                    carrying — physically, emotionally and hormonally.
                  </p>
                  <p>
                    My role is to guide you, to support you, and to help you feel
                    like yourself again.
                  </p>
                  <p>Not a new you.</p>
                  <p>A renewed you.”</p>
                </blockquote>
                <div className="/80 font-sans font-light mt-6">
                  Helen Balogun, Founder of ULANDA
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
