import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function ConditionsLanding() {
  const categories = [
    {
      title: 'Pigmentation &',
      subtitle: 'Skin Tone',
      highlight: 'Hyperpigmentation • Melasma • Dullness • Uneven Tone',
      description:
        'Uneven skin tone, sun damage and pigmentation are often the first signs of cellular ageing. ULANDA restores clarity and brightness through targeted regenerative protocols.',
      concerns: [
        'Hyperpigmentation (Sun Damage)',
        'Melasma',
        'Post-Inflammatory Hyperpigmentation',
        'Uneven Skin Tone / Discolouration',
        'Dull, Dehydrated Skin',
      ],
      solutions: [
        'BioRePeel & Chemical Peels',
        'Polynucleotides (PN)',
        'Meso-Tox & Skin Boosters',
        'Regenerative Facials',
        'Home-care Pigmentation Protocols',
      ],
      link: '/conditions/pigmentation-and-skin-tone',
      linkText: 'Explore Pigmentation',
      color: 'bg-blue-50/50',
      dot: '🔵',
      image:
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Menopause &',
      subtitle: 'Hormone-Linked Changes',
      highlight: 'Sagginess • Jowls • Neck Crepiness • Texture Decline',
      description:
        'Menopause accelerates collagen loss by up to 30% in the first 5 years. We specialise in hormone-aware skin regeneration to restore density, firmness and lift.',
      concerns: [
        'Menopause Skin Decline',
        'Jawline Softening / Jowls',
        'Neck Crepiness / Laxity',
        'Skin Texture Decline',
      ],
      solutions: [
        'Biostimulators (PLLA, CaHA)',
        'Threads (PDO / Definisse)',
        'RF Microneedling',
        'Polynucleotides',
        'Hormone-Supporting IV Therapy',
      ],
      link: '/conditions/menopause-hormone-skin-changes',
      linkText: 'Explore Menopause Skin',
      color: 'bg-purple-50/50',
      dot: '🟣',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Eye Area',
      subtitle: 'Conditions',
      highlight: 'Dark Circles • Hollows • Crepiness • Puffiness',
      description:
        'The eye area ages faster than the rest of the face. Our specialised eye regeneration protocols treat the root cause: thin skin, poor circulation and volume loss.',
      concerns: [
        'Dark Circles',
        'Under-Eye Hollows / Tear Troughs',
        'Crepey Under-Eye Skin',
        'Under-Eye Pigmentation',
        'Under-Eye Puffiness',
      ],
      solutions: [
        'Lumi Eyes / Polynucleotides',
        'PRP Under-Eye',
        'Tear Trough Filler (when suitable)',
        'Nanosoft Mesotherapy',
      ],
      link: '/conditions/eye-area',
      linkText: 'Explore Eye Area',
      color: 'bg-yellow-50/50',
      dot: '🟡',
      image:
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Age &',
      subtitle: 'Skin Regeneration',
      highlight: 'Crepey Skin • Laxity • Volume Loss • Pores',
      description:
        'True anti-ageing is about biological regeneration. We stimulate your body to produce its own collagen, elastin and fresh cells for natural, long-term rejuvenation.',
      concerns: [
        'Thin, Crepey “Menopause Skin”',
        'Skin Laxity (Face, Neck, Jawline)',
        'Volume Loss (Cheeks, Temples)',
        'Uneven Texture / Roughness',
        'Enlarged Pores',
      ],
      solutions: [
        'Biostimulators (Sculptra / Ellansé)',
        'RF Microneedling',
        'Skin Boosters',
        'Medical Microneedling',
      ],
      link: '/conditions/age-and-regeneration',
      linkText: 'Explore Regeneration',
      color: 'bg-rose-50/50',
      dot: '🔴',
      image:
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop', // Placeholder reuse
    },
    {
      title: 'Hormonal',
      subtitle: 'Skin Conditions',
      highlight: 'Breakouts • Sensitivity • Hormonal Pigment',
      description:
        'Hormonal fluctuations (puberty, cycle, perimenopause) drive specific skin issues. We treat the skin while supporting the internal hormonal environment.',
      concerns: [
        'Hormonal Breakouts',
        'Dryness & Sensitivity',
        'Hormonal Pigmentation',
        'Loss of Facial Definition',
      ],
      solutions: [
        'BioRePeel',
        'LED Light Therapy',
        'Barrier Repair Protocols',
        'Internal Wellness Support',
      ],
      link: '/conditions/hormonal-skin',
      linkText: 'Explore Hormonal Skin',
      color: 'bg-indigo-50/50',
      dot: '🟣',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop', // Placeholder reuse
    },
    {
      title: 'Body Skin &',
      subtitle: 'Structural Conditions',
      highlight: 'Laxity • Cellulite • Stretch Marks • Postpartum',
      description:
        'Body skin requires a different approach. We focus on thickening the collagen matrix, tightening connective tissue and smoothing surface texture.',
      concerns: [
        'Body Skin Laxity',
        'Cellulite',
        'Stretch Marks',
        'Post-Weight Loss / Postpartum',
      ],
      solutions: [
        'Body RF Microneedling',
        'Body Biostimulators (Lanluma)',
        'Polynucleotides for Body',
      ],
      link: '/conditions/body-skin-structural',
      linkText: 'Explore Body',
      color: 'bg-green-50/50',
      dot: '🟢',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2073&auto=format&fit=crop',
    },
    {
      title: 'Internal',
      subtitle: 'Wellness Conditions',
      highlight: 'Fatigue • Immunity • Metabolism • Stress',
      description:
        'Skin health starts within. Our internal wellness therapies naturally enhance your energy, immune function and skin resilience.',
      concerns: [
        'Fatigue / Low Energy',
        'Low Immunity / Frequent Illness',
        'Slow Metabolism',
        'Stress & Inflammation',
        'Nutrient Dificiency Skin',
      ],
      solutions: [
        'NAD+ IV Drip',
        'Vitamin D & B12 Shots',
        'Glutathione IV',
        'Women’s Longevity IV',
      ],
      note: '(IV/IM performed in collaboration with 360Medicx Harley Street Clinic.)',
      link: '/conditions/internal-wellness',
      linkText: 'Explore Wellness',
      color: 'bg-orange-50/50',
      dot: '🟠',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <>
      <Head>
        <title>Ulanda - Conditions We Treat</title>
        <meta
          name="description"
          content="A regenerative approach to women’s skin, structure and internal wellness. Treat symptoms at the root with precise, personalised and medically led care in Ware."
        />
      </Head>

      <div className="bg-base-100">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] w-full flex items-center">
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop"
              alt="Ulanda Conditions"
              width="1200"
              height="1600"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            </div>

          <div className=" relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-white text-start w-full">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                <HeroText>
                Conditions <span className="italic font-light">We Treat</span>
                </HeroText>
              </h1>

              <div className="text-xl md:text-2xl font-serif italic mb-8">
                <HeroText delay={0.2}>
                A regenerative approach to women’s skin, structure and internal
                wellness.
                </HeroText>
              </div>

              <div className="space-y-4 text-lg font-sans font-light text-white/90 leading-relaxed mx-auto">
                <HeroText delay={0.4}>
                <p>
                  At ULANDA, we don’t treat symptoms in isolation — we treat the
                  whole woman.
                </p>
                </HeroText>
                <HeroText delay={0.5}>
                <p>
                  Every condition is assessed through the lens of regenerative
                  aesthetics, hormone-aware physiology and internal wellness so
                  we can address the root cause of the concern, not just the
                  surface.
                </p>
                </HeroText>
                <HeroText delay={0.6}>
                <p>
                  Whether you’re experiencing menopause-related skin changes,
                  texture concerns, under-eye issues or low energy, our approach
                  is precise, personalised and medically led.
                </p>
                </HeroText>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid - REFACTORED TO MATCH AGE-RELATED STYLING */}
        <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg text-base-content/80 font-sans max-w-2xl mx-auto">
              This page helps you explore the concerns we treat — grouped into
              four simple, intelligent categories to make your journey
              effortless.
            </p>
          </div>

          <div className="flex flex-col gap-0 md:gap-0">
            {categories.map((cat, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <section
                  key={idx}
                  className="py-12 md:py-24 flex items-center bg-base-100 overflow-hidden"
                >
                  <div
                    className={`w-full flex flex-col ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-12 md:gap-16 items-center justify-center`}
                  >
                    {/* Content Side */}
                    <FadeInWhenVisible className="flex-1 flex justify-center w-full max-w-3xl">
                      <div className="w-full px-4 md:px-0">
                        <div className="flex items-center gap-3 mb-6">
                          {/* <span className="text-2xl">{cat.dot}</span> */}
                          {/* <span className="text-sm font-bold tracking-widest text-primary uppercase">
                            {idx + 1}. CATEGORY
                          </span> */}
                        </div>

                        <div className="mb-6 text-2xl font-serif text-base-content">
                          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                            {cat.title}{' '}
                            <span className="italic text-primary block md:inline">
                              {cat.subtitle}
                            </span>
                          </h2>
                        </div>

                        <p className="text-primary font-medium mb-6 font-sans tracking-wide">
                          {cat.highlight}
                        </p>

                        <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed mb-8">
                          {cat.description}
                        </p>

                        <div className="md:hidden flex-1 w-full max-w-sm mx-auto relative flex justify-center mb-16 md:mt-0">
                          {/* Decorative Background Element */}
                          <RevealImage className="w-full h-full">
                          <div
                            className={`absolute top-12 ${
                              isEven
                                ? '-left-8 md:-left-12'
                                : '-right-8 md:-right-12'
                            } w-3/4 h-full -z-10 bg-primary/5 rounded-3xl`}
                          ></div>

                          <div className="relative w-full max-w-sm mx-auto aspect-[4/5]">
                            {/* Accent / shadow image (background) */}
                            <div
                              className={`absolute top-10 ${
                                isEven
                                  ? 'right-6 md:right-10'
                                  : 'left-6 md:left-10'
                              } w-full h-full z-0 opacity-80`}
                            >
                              <img
                                src="/assets/img/ui/accent.webp"
                                alt="Decorative shadow"
                                className="w-full h-full object-cover rounded-sm"
                                // Fallback if accent doesn't exist? Assuming it does based on Conditions.jsx
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            </div>

                            {/* Main image (foreground) */}
                            <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl rounded-sm">
                              <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                          </div>
                          </RevealImage>
                        </div>

                        {/* Lists Container - Styled to fit naturally in text block */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h3 className="font-sans text-xl mb-4 text-primary ">
                              Common concerns:
                            </h3>
                            <ul className="space-y-2">
                              {cat.concerns.length > 0 &&
                                cat.concerns.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-base-content/70 font-sans"
                                  >
                                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0"></span>
                                    {item}
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-sans text-xl mb-4 text-primary">
                              Solutions:
                            </h3>
                            <ul className="space-y-2">
                              {cat.solutions.length > 0 &&
                                cat.solutions.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-base-content/70 font-sans"
                                  >
                                    <span className="text-primary mt-0.5">
                                      ✓
                                    </span>
                                    {item}
                                  </li>
                                ))}
                            </ul>
                            {cat.note && (
                              <p className="mt-4 text-xs text-base-content/50 italic">
                                {cat.note}
                              </p>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => (window.location.href = cat.link)}
                          className="btn btn-primary px-8"
                        >
                          {cat.linkText}
                        </button>
                      </div>
                    </FadeInWhenVisible>

                    {/* Image Side */}
                    <div className="hidden flex-1 w-full max-w-sm relative md:flex justify-center mt-8 md:mt-0">
                      {/* Decorative Background Element */}
                      <RevealImage className="w-full h-full">
                      <div
                        className={`absolute top-12 ${
                          isEven
                            ? '-left-8 md:-left-12'
                            : '-right-8 md:-right-12'
                        } w-3/4 h-full -z-10 bg-primary/5 rounded-3xl`}
                      ></div>
                      
                      <div className="relative w-full max-w-sm aspect-[4/5]">
                        {/* Accent / shadow image (background) */}
                        <div
                          className={`absolute top-10 ${
                            isEven ? 'right-6 md:right-10' : 'left-6 md:left-10'
                          } w-full h-full z-0 opacity-80`}
                        >
                          <img
                            src="/assets/img/ui/accent.webp"
                            alt="Decorative shadow"
                            className="w-full h-full object-cover rounded-sm"
                            // Fallback if accent doesn't exist? Assuming it does based on Conditions.jsx
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>

                        {/* Main image (foreground) */}
                        <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl rounded-sm">
                          <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            fetchpriority={idx === 0 ? 'high' : undefined}
                          />
                        </div>
                      </div>
                      </RevealImage>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        {/* Guidance Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
        <FadeInWhenVisible className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-base-content">
              The Ultra Simple way{' '}
              <span className="italic font-light">Use This Page</span>
            </h2>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mb-12 text-left md:text-center">
              <p className="font-serif text-xl mb-6">
                If you’re unsure where to start:
              </p>
              <ul className="space-y-4 inline-block text-left">
                <li className="flex items-center gap-3 text-lg font-sans font-light">
                  <span className="text-primary text-xl">✔</span> Identify your
                  main concern above
                </li>
                <li className="flex items-center gap-3 text-lg font-sans font-light">
                  <span className="text-primary text-xl">✔</span> Click the
                  category that resonates most
                </li>
                <li className="flex items-center gap-3 text-lg font-sans font-light">
                  <span className="text-primary text-xl">✔</span> Explore the
                  regenerative solutions
                </li>
                <li className="flex items-center gap-3 text-lg font-sans font-light">
                  <span className="text-primary text-xl">✔</span> Book your
                  consultation for a personalised plan
                </li>
              </ul>
              <p className="mt-8 text-base-content/70 italic">
                Every treatment plan at ULANDA is bespoke — guided by AI skin
                analysis, hormonal stage assessment and your personal goals.
              </p>
            </div>
          </FadeInWhenVisible>
        </section>

        <section className="py-32 px-4 md:px-8 bg-secondary text-primary text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              Start Your Regenerative Journey
            </h3>
            <p className="font-sans font-light mb-8 ">
              A personalised, clinical assessment for skin, structure & internal
              wellness.
            </p>
            <button className="btn btn-primary text-white px-10 py-4 h-auto text-lg rounded-lg">
              Book Your Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
