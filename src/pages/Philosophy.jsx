import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const regenerativeSystems = [
  'Collagen & elastin',
  'Cellular repair',
  'Barrier function',
  'Hormone balance',
  'Inflammation control',
  'Mitochondrial energy',
  'Facial structure',
  'Internal wellness',
];

const clinicValues = [
  'science meets sanctuary',
  "aesthetics meets women's health",
  'hormones meet skin regeneration',
  'internal wellness supports external beauty',
  'your confidence grows as naturally as your collagen',
];

const respectPoints = [
  'their biology',
  'their ageing process',
  'their hormonal journey',
  'their lived experience',
  'their time',
  'their individuality',
];

export default function Philosophy() {
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

  const pathwaysMap = {
    refresh: {
      title: (
        <>
          Healthy,{' '}
          <span className="italic font-serif text-primary">Glowing</span> Skin
          Starts Here
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
      image:
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
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
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop',
    },
    restore: {
      title: (
        <>
          Lift, Firm &{' '}
          <span className="italic font-serif text-primary">Define</span>{' '}
          Naturally
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
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
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
          Because when you feel balanced on the inside, your skin shows it on
          the outside.
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
        'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop',
    },
  };

  return (
    <>
      <Head>
        <title>Ulanda - Our Philosophy</title>
        <meta
          name="description"
          content="Regeneration. Hormone Intelligence. Personalised Care for Every Stage of Womanhood at ULANDA."
        />
      </Head>

      <div className="bg-base-100 text-base-content">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
          <FadeInWhenVisible>
            <div className="inline-block px-8 py-2 rounded-full border bg-secondary border-primary/30 text-primary text-sm font-bold tracking-wider mb-4 uppercase">
              Our Philosophy
            </div>
          </FadeInWhenVisible>
          <HeroText className="text-3xl md:text-4xl font-serif leading-tight">
            <span className="italic text-primary">Regeneration.</span> Hormone
            Intelligence.{' '}
            <span className="italic text-primary">Personalised Care</span> for
            Every Stage of Womanhood.
          </HeroText>
          <FadeInWhenVisible>
            <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
              <p>
                At ULANDA, we believe that a woman's skin, health and confidence
                are shaped by her biology — and that biology evolves through
                postpartum recovery, perimenopause transition and the menopause
                journey.
              </p>
              <p>
                These stages share the same underlying changes: deeper collagen
                loss, disrupted hormones, inflammation, dryness, slower repair,
                stress reactivity and energy decline.
              </p>
              <p className="font-medium text-base-content">
                That is why our philosophy is simple:
              </p>
              <div className="pl-4 border-l-2 border-primary space-y-2">
                <p>To regenerate your skin, we must understand your hormones.</p>
                <p>
                  To support your hormones, we must care for your cellular health.
                </p>
                <p>
                  To elevate your confidence, we must honour your entire journey.
                </p>
              </div>
              <p className="font-medium text-base-content">
                ULANDA exists to bring all of these together.
              </p>
            </div>
          </FadeInWhenVisible>
          <div className="aspect-video w-full overflow-hidden">
            <img
              src="/assets/img/home/ulanda-homepage-hero-ware-sg12.webp"
              alt=""
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* The ULANDA Way */}
        <section className="py-24 px-4 md:px-8 bg-secondary/40">
          <FadeInWhenVisible>
            <div className="max-w-6xl mx-auto space-y-6 text-center">
              <p className="font-medium font-serif text-3xl">
                The <span className="italic text-primary">Ulanda</span> Way
              </p>
              <h2 className="text-xl font-sans italic leading-relaxed">
                <span className="italic font-serif">Regeneration</span> before
                correction.
                <br />
                <span className="italic font-serif">Biology</span> before beauty.
                <br />
                <span className="italic font-serif">You</span> before the
                treatment.
              </h2>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Regenerative-First Approach */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  A{' '}
                  <span className="italic text-primary">Regenerative-First</span>{' '}
                  Approach
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  Traditional aesthetics focus on covering signs of ageing. ULANDA
                  focuses on correcting the cause.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  We rebuild the systems beneath your skin:
                </p>
                <div className="mt-4">
                  <ul className="grid sm:grid-cols-2 gap-3 text-base md:text-lg font-sans font-light text-base-content/90">
                    {regenerativeSystems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-base md:text-lg font-sans font-light text-base-content/90 mt-6">
                    When these systems are healed, your skin regenerates naturally
                    — brighter, firmer, healthier and more resilient. This is why
                    our results look so natural, and why they last longer.
                    <br />
                    <span className="block mt-4">
                      This approach is grounded in our <Link to="/about/manifesto" className="text-primary font-bold hover:underline inline-flex items-center gap-0.5">Scientific Manifesto <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg></Link>.
                    </span>
                  </p>
                </div>
              </FadeInWhenVisible>
            </div>
            <div className="relative order-1 md:order-2 flex justify-center">
              {/* Background decorative element (Accent Image) */}
              <div className="absolute bottom-10 right-0 md:-right-2 w-3/4 h-full">
                <RevealImage className="w-full h-full">
                  <img
                    src="/assets/img/ui/accent.webp"
                    alt="Decorative shadow"
                    className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                  />
                </RevealImage>
              </div>

              {/* Main Image */}
              <div className="relative rounded-t-full overflow-hidden w-full max-w-xs max-h-xs aspect-[3/4]">
                <RevealImage className="w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop"
                    alt="Facial treatment"
                    width="1200"
                    height="1600"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </RevealImage>
              </div>
            </div>
          </div>
        </section>

        {/* Personalised for Your Hormonal Life Stage */}
        <section className="py-16 px-4 md:px-8 bg-secondary/40">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  Personalised for Your{' '}
                  <span className="italic text-primary">
                    Hormonal Life Stage
                  </span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  Every woman's journey is unique. Every treatment plan must
                  honour where she is today.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  ULANDA specialises in the three major hormonal transitions:
                </p>
              </FadeInWhenVisible>
            </div>
            <FadeInWhenVisible>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1: Postpartum */}
                <div className="group relative h-[500px] overflow-hidden cursor-pointer">
                  <RevealImage className="absolute inset-0 w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
                    alt="Postpartum Women"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  </RevealImage>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-2xl font-sans font-medium mb-2">
                      Postpartum Women
                    </h3>
                    <p className="text-sm text-white/90 font-light leading-relaxed">
                      Pigmentation, skin dryness, abdominal laxity, sleep-deprived
                      dullness, fatigue.
                    </p>
                  </div>
                </div>

                {/* Card 2: Perimenopausal */}
                <div className="group relative h-[500px] overflow-hidden cursor-pointer">
                  <RevealImage className="absolute inset-0 w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1588510904409-47e2f767540d?q=80&w=1887&auto=format&fit=crop"
                    alt="Perimenopausal Women"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  </RevealImage>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-2xl font-sans font-medium mb-2">
                      Perimenopausal Women
                    </h3>
                    <p className="text-sm text-white/90 font-light leading-relaxed">
                      Unpredictable skin changes, new breakouts, uneven tone,
                      sensitivity, stress-related inflammation.
                    </p>
                  </div>
                </div>

                {/* Card 3: Menopausal */}
                <div className="group relative h-[500px] overflow-hidden cursor-pointer">
                  <RevealImage className="absolute inset-0 w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=2070&auto=format&fit=crop"
                    alt="Menopausal Women"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  </RevealImage>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-2xl font-sans font-medium mb-2">
                      Menopausal Women
                    </h3>
                    <p className="text-sm text-white/90 font-light leading-relaxed">
                      Loss of firmness, neck and jawline softening, thinning skin,
                      chronic dehydration, texture decline.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
            <p className="text-base md:text-lg font-sans font-light text-base-content/90">
              We design your plan based on the physiology driving your skin —
              not just what is visible on the surface. Learn more about <Link to="/conditions/skin-texture-quality" className="text-primary font-bold hover:underline inline-flex items-center gap-0.5">Age & Regeneration <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg></Link>.
            </p>
          </div>
        </section>

        {/* Pathways Section */}
        <section className="py-24 px-4 md:px-8 bg-base-100">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6">
                The{' '}
                <span className="italic font-light text-primary">
                  Four Pathways
                </span>{' '}
                to your <br />
                Ulanda Journey
              </h2>
              <p className="font-light text-base-content/80 font-sans max-w-2xl">
                We’ve made regeneration easy to understand. <br />
                Every treatment you receive sits within one of four simple
                pathways:
              </p>
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
                        const offset = 100;
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
                        : 'text-base-content/60 hover:text-primary'
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
                <FadeInWhenVisible
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
                    <div className="relative rounded-t-full overflow-hidden shadow-xl w-full max-w-xs max-h-xs aspect-[3/4]">
                      <RevealImage className="w-full h-full">
                        <img
                          src={pathway.image}
                          alt={pathway.title}
                          className="w-full h-full object-cover transition-opacity duration-500"
                          loading="lazy"
                        />
                      </RevealImage>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div>
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
                    >
                      Explore
                    </Link>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Clinic Values */}
        <section className="py-24 px-4 md:px-8 bg-secondary/40">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 mx-auto">
            <div className="mx-auto space-y-6">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  A Clinic Designed for Women Who Want{' '}
                  <span className="italic text-primary">
                    More Than A Quick Fix
                  </span>
                </h2>
                <p className="text-base md:text-lg font-sans font-light text-base-content/90">
                  ULANDA is a sanctuary where:
                </p>
                <ul className="grid gap-3 text-base md:text-lg font-sans font-light text-base-content/90">
                  {clinicValues.map((value) => (
                    <li key={value} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base md:text-lg font-sans font-light text-base-content/90">
                  We bring medical expertise into a space that feels warm,
                  feminine and deeply supportive.
                </p>
              </FadeInWhenVisible>
            </div>
            <RevealImage className="w-full h-full">
              <img
                src="/assets/img/home/ulanda-homepage-hero-ware-sg12.webp"
                alt=""
                className="h-full object-cover"
              />
            </RevealImage>
          </div>
        </section>

        {/* Why Regenerative Care Matters */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  Why{' '}
                  <span className="italic text-primary">Regenerative Care</span>{' '}
                  Matters
                </h2>
                <p className="text-base md:text-lg font-sans font-light text-base-content/90">
                  Women deserve care that respects:
                </p>
                <ul className="space-y-2 text-base md:text-lg font-sans font-light text-base-content/90">
                  {respectPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
            </div>
            <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
              <FadeInWhenVisible>
                <p>We don't rush.</p>
                <p>We don't overfill.</p>
                <p>We don't ignore the systems beneath the skin.</p>
                <p>
                  We take a complete view of you — your skin, your hormones, your
                  lifestyle, your stress, your sleep, your energy — and support
                  all of it.
                </p>
                <div className="pt-4 space-y-2 font-medium text-base-content">
                  <p>This is regenerative aesthetics.</p>
                  <p>This is biology-informed skincare.</p>
                  <p>This is women's health done properly.</p>
                  <p className="text-primary">This is ULANDA.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-24 px-4 md:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <FadeInWhenVisible>
              <p className="text-secondary font-serif text-3xl md:text-4xl">
                A <span className="italic ">Promise</span> to Every Woman Who
                Walks Through Our Door
              </p>
              <blockquote className="text-xl md:text-2xl font-sans leading-relaxed text-secondary font-normal space-y-3">
                <p>"We will see you.</p>
                <p>We will listen to you.</p>
                <p>We will understand your biology.</p>
                <p>We will honour your journey.</p>
                <p>And we will regenerate your skin from the inside out."</p>
              </blockquote>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <HeroText className="text-3xl md:text-4xl font-serif leading-tight text-center">
              Ready to experience{' '}
              <span className="italic text-primary">regenerative care</span>?
            </HeroText>
            <FadeInWhenVisible>
              <p className="text-base md:text-lg font-sans font-light text-base-content/90 leading-relaxed">
                Your journey to natural, long-lasting transformation starts with a
                personalised consultation.
              </p>
              <button className="btn btn-primary text-white px-8 py-3 h-auto rounded-lg">
                Book Your Consultation
              </button>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </>
  );
}
