import React from 'react';
import { useEffect, useState } from 'react';
import { Head } from 'vite-react-ssg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const differentiators = [
  'Science-backed regenerative aesthetics',
  'Women’s hormonal health awareness',
  'Internal wellness (IV/IM therapies & metabolism support)',
  'High-performance skincare guided by AI Skin Analysis',
  'Individualised treatment pathways that evolve with you',
];

// const pathways = [
//   {
//     id: '1️⃣',
//     title: 'REFRESH',
//     subtitle: 'Instant brightness. Hydration. Surface renewal.',
//     note: 'Your pathway to glowing, healthy skin.',
//   },
//   {
//     id: '2️⃣',
//     title: 'RENEW',
//     subtitle: 'Deep regeneration. Collagen. Elasticity. Repair.',
//     note: 'Your pathway to resilient, youthful-looking skin.',
//   },
//   {
//     id: '3️⃣',
//     title: 'RESTORE',
//     subtitle: 'Structure. Lift. Shape. Confidence.',
//     note: 'Your pathway to natural enhancement without looking “done.”',
//   },
//   {
//     id: '4️⃣',
//     title: 'RADIATE',
//     subtitle: 'Hormones. Energy. Metabolism. Vitality.',
//     note: 'Your pathway to internal balance and long-term wellness. In collaboration with 360Medicx Harley Street Clinic.',
//   },
// ];

const stages = [
  'Postpartum skin + body changes',
  'Hormonal breakouts & pigmentation',
  'Perimenopause dryness, sensitivity & texture decline',
  'Menopause-driven thinning, laxity & collagen loss',
  'Fatigue, inflammation & slow metabolism',
  'Confidence changes linked to ageing',
];

const experience = [
  'welcomed',
  'understood',
  'seen without judgement',
  'supported without pressure',
  'confident in your results',
];

const safety = [
  '20+ years clinical experience in women’s health',
  'Advanced aesthetics training',
  'Specialist menopause/hormone knowledge',
  'Masters-level training in patient safety & quality improvement',
  'Full medical oversight protocols',
  'Clinical partnerships with industry-leading medical providers',
];

const promise = [
  'Natural results',
  'Never overfilled, overtreated or oversold',
  'Evidence-based care',
  'A regenerative-first approach',
  'Treatment plans built for women’s real physiology',
  'A focus on confidence, not perfection',
  'Skin, body and wellness treated as one system',
];

const pathwaysMap = {
  refresh: {
    title: (
      <>
        Healthy, <span className="italic font-serif text-primary">Glowing</span>{' '}
        Skin Starts Here
      </>
    ),
    description:
      'Gently renews the surface of your skin for instant brightness and hydration.',
    includes: [
      'HydraFacial',
      'Enzyme Therapy',
      'Oxygen Facials',
      'BioRePeel',
      'Chemical Peels',
      'LED',
      'Body Peels',
    ],
    perfectFor:
      'Dullness, dryness, uneven tone, postpartum fatigue skin, perimenopause dehydration.',
    image: '/assets/img/treatments/renew/skin-clinic-ware-Facials-Refresh.webp',
  },
  renew: {
    title: (
      <>
        Strengthen Your Skin{' '}
        <span className="italic font-serif text-primary">From Within</span>
      </>
    ),
    description:
      'Boosts your skin’s natural ability to repair, firm and glow over time.',
    includes: [
      'Polynucleotides (PN)',
      'PRP',
      'Microneedling',
      'RF Microneedling',
      'Profhilo',
      'Hydrobooster',
      'Jalupro',
      'Lumi Eyes',
    ],
    perfectFor:
      'Fine lines, thinning skin, early collagen loss, tired-looking eyes, long-term glow.',
    image:
      'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  restore: {
    title: (
      <>
        Lift, Firm &{' '}
        <span className="italic font-serif text-primary">Define</span> Naturally
      </>
    ),
    description:
      'Subtle enhancements that support your structure without looking “done.”',
    includes: [
      'Biostimulators',
      'Thread Lifts',
      'Natural Fillers',
      'Collagen Therapy',
      'Jawline Contouring',
      'Neck Tightening',
      'Body Tightening',
    ],
    perfectFor:
      'Jawline softening, mid-face changes, neck laxity, postpartum body changes.',
    image:
      'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  radiate: {
    title: (
      <>
        Support Your Energy,{' '}
        <span className="italic font-serif text-primary">Hormones</span> &
        Wellness
      </>
    ),
    description: (
      <>
        Because when you feel balanced on the inside, your skin shows it on the
        outside.
        <br />
        <span className="text-sm mt-2 block opacity-80">
          Delivered in collaboration with 360Medicx Harley Street Clinic
          (Longevity Partners).
        </span>
      </>
    ),
    includes: [
      'NAD+ IV/IM',
      'Glutathione IV/IM',
      'Energy IV',
      'Immunity IV',
      'Women’s Longevity IV',
      'Vitamin D & B12 IM',
      'Weight Management',
    ],
    perfectFor:
      'Fatigue, poor sleep, slow metabolism, inflammation, hormone-transition symptoms.',
    image:
      'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
};

export default function About() {
  const [activeTab, setActiveTab] = useState('refresh');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset for trigger point
      const sections = Object.keys(pathwaysMap);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>About ULANDA | Regenerative Aesthetics Ware SG12 | Hertfordshire</title>
        <meta
          name="description"
          content="ULANDA is a regenerative aesthetics clinic in Ware SG12, Hertfordshire. Hormone-aware care, internal wellness, and women-first treatments for midlife skin regeneration."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/about/our-story" />
      </Head>

      <div className="bg-base-100 text-base-content">
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
          <div className="inline-block px-8 py-2 rounded-full border bg-secondary border-primary/30 text-primary text-sm font-bold tracking-wider mb-4 uppercase">
            About Ulanda
          </div>
          <div className="text-3xl md:text-4xl font-serif leading-tight">
            <HeroText>
            Where women’s{' '}
            <span className="italic text-primary">
              skin, hormones and wellbeing
            </span>{' '}
            meet in one regenerative sanctuary.
            </HeroText>
          </div>
          <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
            <FadeInWhenVisible delay={0.2}>
            <p>
              ULANDA was created by{' '}
              <Link
                to="/about/our-founder"
                className="text-primary font-bold hover:underline inline-flex items-center gap-0.5"
              >
                Helen Balogun{' '}
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
              </Link>{' '}
              from a simple belief: women deserve care that understands them
              fully, not in fragments. Skin concerns are rarely “just skin.”
              Hormonal changes are rarely “just hormones.” Fatigue and stress
              are rarely “just lifestyle.” At ULANDA, we connect the dots.
            </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
            <p>
              We support women through the full physiology of change
              (postpartum, perimenopause, menopause and beyond), blending our{' '}
              <Link
                to="/about/our-philosophy"
                className="text-primary font-bold hover:underline inline-flex items-center gap-0.5"
              >
                regenerative-first clinical model{' '}
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
              </Link>{' '}
              with wellness, hormone-aware care and medical-grade skin health
              solutions.
            </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
            <p>
              Our mission is to help every woman feel confident, balanced and
              radiant in her own skin, at every stage of her life.
            </p>
            </FadeInWhenVisible>
          </div>
          <div className="aspect-video w-full overflow-hidden">
            <img
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt=""
                fetchpriority="high"
                className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 space-y-3">
              <p className="font-medium font-sans">
                What makes ULANDA different
              </p>
              <h2 className="text-2xl md:text-3xl font-serif">
                A{' '}
                <span className="italic text-primary">Regenerative-First</span>{' '}
                MedSpa for Real Women
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                Unlike traditional clinics that chase temporary fixes, ULANDA
                focuses on treatments that work with your biology, stimulating
                collagen, strengthening cellular repair, restoring hormonal
                balance and rebuilding long-term skin health.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="grid sm:grid-cols-2 gap-4">
                {differentiators.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-secondary p-4 text-primary font-sans leading-relaxed"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="font-light text-base md:text-lg font-sans text-base-content/80 mt-6">
                Every woman receives a care plan crafted around her unique
                physiology, whether she is navigating postpartum recovery,
                hormonal fluctuations in perimenopause, or the deeper structural
                changes of menopause.
              </p>
            </div>
          </div>
        </section>

        {/* Pathways Section */}
        <section className="py-24 px-4 md:px-8 bg-base-100">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16 flex items-center justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6">
                  The{' '}
                  <span className="italic font-light text-primary">
                    Four Pathways
                  </span>{' '}
                  to your <br />
                  Ulanda Journey
                </h2>
                <p className="text-lg text-base-content/80 font-sans max-w-2xl">
                  We’ve made regeneration easy to understand. <br />
                  Every treatment you receive sits within one of four simple
                  pathways:
                </p>
              </div>
              <div className="hidden md:flex">
                <Link
                  to="/treatments"
                  className="btn btn-primary"
                >
                  Learn More About Our Pathways
                </Link>
              </div>
            </div>

            {/* Tabs */}
            <div className="sticky pt-4 top-16 z-30 bg-base-100 mb-16 border-b border-base-300 transition-all duration-300">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                {Object.keys(pathwaysMap).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      const el = document.getElementById(key);
                      if (el) {
                        const offset = 150;
                        const bodyRect =
                          document.body.getBoundingClientRect().top;
                        const elementRect = el.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth',
                        });
                      }
                      setActiveTab(key);
                    }}
                    className={`flex-1 pb-4 text-lg font-sans transition-all duration-300 ${
                      activeTab === key
                        ? 'border-b-2 border-primary text-primary font-medium'
                        : 'text-base-content hover:text-primary'
                    }`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-24">
              {Object.entries(pathwaysMap).map(([key, pathway]) => (
                <div
                  // initial={{ opacity: 0 }}
                  // whileInView={{ opacity: 1 }}
                  // viewport={{ amount: 0.9, once: false }}
                  // transition={{ duration: 0.6, ease: 'easeIn' }}
                  key={key}
                  id={key}
                  className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center scroll-mt-32"
                >
                  {/* Left Image */}
                  <div className="relative hidden md:flex justify-center md:justify-start">
                    {/* Background decorative element */}
                    <div className="absolute bottom-10 left-10 w-3/4 max-w-xs h-full">
                        <RevealImage className="w-full h-full">
                      <img
                        src="/assets/img/ui/accent.webp"
                        alt="Decorative shadow"
                        className="w-full h-full object-cover"
                      />
                      </RevealImage>
                    </div>

                    {/* Main Image */}
                    <RevealImage className="relative rounded-t-full shadow-xl w-full max-w-xs max-h-xs aspect-[3/4]">
                      <img
                        src={pathway.image}
                        alt={pathway.title}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        loading="lazy"
                      />
                    </RevealImage>
                  </div>

                  {/* Right Content */}
                  <FadeInWhenVisible>
                    <h3 className="text-3xl md:text-4xl font-serif text-base-content mb-4 leading-tight">
                      {pathway.title}
                    </h3>
                    <p className="text-lg text-base-content/80 font-sans mb-8">
                      {pathway.description}
                    </p>

                    <div className="grid grid-cols-1 gap-8 mb-8">
                      <div>
                        <h4 className="font-medium font-sans text-base-content mb-2">
                          Includes:
                        </h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-base-content/80">
                          {pathway.includes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium font-sans text-base-content mb-2">
                          Perfect for:
                        </h4>
                        <p className="text-base-content/80">
                          {pathway.perfectFor}
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/treatments/${key}`}
                      className="btn btn-primary text-white px-8"
                      aria-label={`Explore ${pathway.title} pathway`}
                    >
                      Explore
                    </Link>
                  </FadeInWhenVisible>
                </div>
              ))}
            </div>

            <div className="md:hidden flex mt-8">
              <Link
                to="/pathways"
                className="btn btn-primary"
              >
                Learn More About Our Pathways
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-3 mb-8">
                <h2 className="font-serif font-medium text-3xl">
                  Designed for{' '}
                  <span className="font-light italic text-primary">
                    women at every stage
                  </span>
                </h2>
                <p className="text-base md:text-lg font-light font-sans text-base-content/90">
                  Instead of choosing between “a medical clinic” or “a beauty
                  spa,” ULANDA brings both worlds together, safely,
                  compassionately and intelligently.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 text-base font-sans text-base-content/90">
                {stages.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full mt-16 relative flex items-center justify-center">
              <RevealImage className="w-full max-w-sm aspect-square">
                <img
                    src="/assets/img/ui/accent.webp"
                    alt="Women at every stage"
                    className="w-full h-full object-cover"
                />
              </RevealImage>
              <RevealImage className="absolute w-full max-w-xs aspect-square top-20 left-8">
                <img
                    src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Women at every stage"
                    className="w-full h-full object-cover"
                />
              </RevealImage>
              <RevealImage className="hidden md:block absolute w-full max-w-xs aspect-square bottom-20 right-8">
                <img
                    src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Women at every stage"
                    className="w-full h-full object-cover"
                />
              </RevealImage>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-3">
              <h2 className="font-serif text-3xl">
                The ULANDA{' '}
                <span className="text-primary italic">experience</span>
              </h2>
              <p className="text-base font-sans text-base-content/90">
                Science-led. Woman-led. Comfort-led. Our environment is designed
                to feel calming, uplifting and deeply personal. Every
                appointment is unhurried. Every treatment is performed with
                precision and warmth. Every plan is guided by real clinical
                insight.
              </p>
              <p className="text-base md:text-lg font-sans font-bold text-base-content/90">
                You will feel:
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-full border border-base-300 bg-base-100 text-sm font-sans"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="font-serif text-3xl">Safety & accreditation</h2>
              <ul className="space-y-2 text-base font-sans text-base-content/90">
                {safety.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base md:text-lg font-sans text-base-content/90">
                You’re in safe, experienced, regulated hands.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-primary">
          <div className="max-w-6xl mx-auto space-y-6 text-center">
            <h2 className="text-secondary italic font-serif text-3xl">
              Our promise
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {promise.map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-base-100 text-primary p-4 text-base font-sans leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-secondary font-light font-sans text-base-content/90">
              At ULANDA, we don’t just make you look good — we help you feel
              well, age confidently and thrive.
            </p>
          </div>
        </section>

        <section className="py-40 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="font-sans text-lg font-medium">
              Begin your <span className="font-light italic">journey</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">
              Glow <span className="font-light italic">naturally</span>. Age{' '}
              <span className="font-light italic">beautifully</span>. Feel like
              you <span className="font-light italic">again</span>.
            </h2>
            <p className="text-base py-8 font-sans text-base-content/90 leading-relaxed">
              Whether your goal is brighter skin, improved firmness, hormonal
              balance, more energy or simply feeling like “yourself” again,
              we are here to guide you. Your journey starts with a personalised
              consultation.
            </p>
            <Link to="/book-consultation" className="btn btn-primary text-white px-8 py-3 h-auto rounded-lg">
              Book Your Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
