import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { conditionsLandingData } from '../data/pageContents/conditions/landing';

export default function ConditionsLanding() {
  const { hero, categories } = conditionsLandingData;

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
              src={hero.image}
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
                {hero.title} <span className="italic font-light">{hero.subtitle}</span>
                </HeroText>
              </h1>

              <div className="text-xl md:text-2xl font-serif italic mb-8">
                <HeroText delay={0.2}>
                A regenerative approach to women’s skin, structure and internal
                wellness.
                </HeroText>
              </div>

              <div className="space-y-4 text-lg font-sans font-light text-white/90 leading-relaxed mx-auto">
                {hero.description.map((paragraph, index) => (
                    <HeroText delay={0.4 + (index * 0.1)} key={index}>
                    <p>
                      {paragraph}
                    </p>
                    </HeroText>
                ))}
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
            <a href="https://ulanda-100633.square.site/" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white px-10 py-4 h-auto text-lg rounded-lg">
              Book Your Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
