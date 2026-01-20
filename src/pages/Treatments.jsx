import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getAllTreatments, treatmentsPageData } from '../data/pageContents/treatments/treatments';
import { ArrowRight } from 'lucide-react';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';

export default function Treatments() {
  const treatments = getAllTreatments();
  const treatmentList = Object.values(treatments);

  return (
    <>
      <Head>
        <title>Regenerative Treatments in Ware SG12 | ULANDA</title>
        <meta
          name="description"
          content="Explore ULANDA's regenerative treatments in Ware SG12, Hertfordshire. Four pathways — Refresh, Renew, Restore, Radiate — designed for midlife skin regeneration and wellness."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments" />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] w-full flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <img
              src={treatmentsPageData.hero.placeholderUrl || treatmentsPageData.hero.image}
              alt={treatmentsPageData.hero.title}
              className="w-full h-full object-cover brightness-75"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className=" w-full relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                <HeroText>
                A simple,{' '}
                <span className="italic font-extralight">intelligent</span> way
                to understand your{' '}
                <span className="italic font-extralight">regenerative</span>{' '}
                journey.
                </HeroText>
              </h1>

              <div className="space-y-4 text-lg md:text-xl font-light text-white/90 leading-relaxed">
                <HeroText delay={0.2}>
                <p>
                  Every ULANDA treatment fits into one of four categories —
                  Refresh, Renew, Restore, and Radiate.
                </p>
                </HeroText>
                <HeroText delay={0.3}>
                <p>
                  Designed to help you understand what your skin and body truly need.
                </p>
                </HeroText>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Treatment Categories Sections */}
        {treatmentList.map((category, index) => (
          <section
            key={category.id}
            className="py-24 flex items-center bg-base-100 border-b border-base-200 last:border-0 relative overflow-hidden"
          >
            <div
              className={`w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 w-full md:max-w-xl z-10">
                <div className="inline-block px-8 py-2 rounded-full border border-primary/30 bg-secondary text-primary font-medium mb-6">
                  {category.title}
                </div>

                <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                    {category.title}
                </h2>

                <p className="text-lg text-base-content/80 font-light mb-8 leading-relaxed">
                  {category.subtitle || category.description}
                </p>

                <div className="mb-8">
                  <h3 className="font-bold mb-4 text-base-content uppercase text-sm tracking-wide">
                    Includes:
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base-content/70 font-light text-sm">
                    {Object.values(category.subCategories || {}).map((sub, i) => (
                      <div key={i}>
                        • {sub.title}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/treatments/${category.id}`}
                  className="group inline-flex items-center gap-2 text-primary font-medium hover:text-primary-focus transition-colors"
                >
                  Explore {category.title}{' '}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full max-w-sm relative">
                <div className="relative aspect-[4/5] w-full">
                  <div className="relative z-10 w-full h-full overflow-hidden shadow-xl rounded-sm">
                    <RevealImage className="w-full h-full">
                    <img
                      src={category.placeholderUrl || category.image}
                      alt={category.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    </RevealImage>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
