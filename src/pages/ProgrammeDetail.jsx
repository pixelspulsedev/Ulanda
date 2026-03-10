import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { getTreatment, getTreatmentById } from '../data/pageContents/treatments/treatments';
import { getConditionsForProgramme, getTreatmentsForProgramme } from '../data/crosslinks';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedConditions from '../components/RelatedConditions';
import RelatedTreatments from '../components/RelatedTreatments';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function ProgrammeDetail() {
  const { id: rawId } = useParams();
  const id = rawId?.toLowerCase();
  // Programmes are now stored under treatments -> radiate -> programmes
  const programme = getTreatment('radiate', 'programmes', id);
  const relatedConditions = getConditionsForProgramme(id);
  const relatedTreatmentIds = getTreatmentsForProgramme(id);
  const relatedTreatments = relatedTreatmentIds.map(tid => {
      // try to resolve full object to get proper casing title
      const tObj = getTreatmentById(tid);
      return tObj || tid;
  });

  if (!programme) {
    return <Navigate to="/signature" replace />;
  }

  const { title, subtitle, content = {}, summary = {} } = programme;
  const intro = content.intro || [];
  const whoIsItFor = content.whoIsItFor || {};
  const scientificContext = content.scientificContext;
  const framework = content.framework;
  const summaryImage = summary.placeholderUrl || summary.image || '';

  // Generate SEO following Signature format: [Outcome-Led Pathway Name] | Signature | Ware SG12 | ULANDA
  const seoTitle = `${title} | Signature | Ware SG12 | ULANDA`;
  const canonicalUrl = `https://www.ulanda.co.uk/signature/${id}`;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={subtitle} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <div className="bg-base-100 text-base-content">
        <Breadcrumbs />
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-6 text-[#2A2A2A]">
                <HeroText>
                  <span className="italic font-light text-primary">
                    {title.split(' ')[0]}
                  </span>{' '}
                  {title.split(' ').slice(1).join(' ')}
                </HeroText>
              </h1>

              {subtitle && (
                <div className="text-xl font-serif italic text-primary mb-4">
                  <HeroText delay={0.1}>
                    {subtitle}
                  </HeroText>
                </div>
              )}

              <div className="text-lg font-sans font-light text-base-content/80 mb-8 leading-relaxed">
                <HeroText delay={0.2}>
                  {summary.description}
                </HeroText>
              </div>

              <FadeInWhenVisible delay={0.4}>
                <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white">
                  Book Advanced Skin Health Consultation
                </a>
              </FadeInWhenVisible>
            </div>

            {/* Image Content */}
            <div className="flex-1 relative w-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm aspect-[4/5]">
                <div className="absolute top-20 right-20 w-full h-full z-0">
                  <RevealImage delay={0.2} className="w-full h-full">
                    <img
                      src="/assets/img/ui/accent.webp"
                      alt="Decorative shadow"
                      className="w-full h-full object-cover"
                    />
                  </RevealImage>
                </div>

                {/* Main image */}
                <RevealImage className="relative z-10 w-full h-full overflow-hidden">
                  <img
                    src={summaryImage}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </RevealImage>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-6">
          <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
            {intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Who Is It For */}
        {whoIsItFor.list && (
          <section className="py-16 grid  px-4 md:px-8 bg-secondary/40">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid gap-4 items-start">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-serif">
                    {whoIsItFor.title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                    {whoIsItFor.note}
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 text-base md:text-lg font-sans font-light text-base-content/90">
                    {whoIsItFor.list.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Scientific Context */}
        {scientificContext && (
          <section className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <h2 className="text-2xl md:text-3xl font-serif">
                {scientificContext.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                {scientificContext.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                {scientificContext.list.map((item, index) => (
                  <li key={index} className="flex items-center justify-center gap-3 bg-secondary p-3 rounded-full">
                    <span className="text-primary text-lg">!</span>
                    <span className="font-sans font-light text-primary">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-primary italic pt-4">
                {scientificContext.note}
              </p>
            </div>
          </section>
        )}

        {/* Framework */}
        {framework && (
          <section className="py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-serif">
                  {/* <span className="text-primary">⭐</span>{' '} */}
                  {framework.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  {framework.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {framework.pillars.map((pillar, index) => (
                  <Link 
                    key={index}
                    to={`/treatments/${pillar.name.toLowerCase()}`}
                    className="group relative h-[300px] overflow-hidden cursor-pointer block bg-secondary"
                  >
                    <div className="absolute inset-0 bg-secondary to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-primary">
                      <h3 className="text-2xl font-sans font-medium mb-2">
                        {pillar.name}
                      </h3>
                      {/* <p className="text-sm text-white/90 font-light leading-relaxed">
                        {pillar.subtitle}
                      </p> */}
                      <p className="mt-4 text-sm font-sans font-light text-primary italic">
                        {pillar.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90 italic">
                {content.framework.note}
              </p>
            </div>
          </section>
        )}

        {/* Structure */}
        {content.structure && (
          <section className="py-16 px-4 md:px-8 bg-base-50">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif">
                  {/* <span className="text-primary">⭐</span>{' '} */}
                  {content.structure.title}
                </h2>
                <p className="font-sans italic text-base-content/80">
                  {content.structure.subtitle}
                </p>
              </div>

              <div className="space-y-12">
                {content.structure.phases.map((phase, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-12 gap-8 border-b border-base-200 pb-12 last:border-0"
                  >
                    <div className="md:col-span-4 space-y-2">
                      <div className="inline-block px-4 py-1 bg-secondary border border-primary/30 text-primary text-sm font-medium rounded-full mb-2">
                        {phase.weeks}
                      </div>
                      <h3 className="text-2xl font-serif text-base-content">
                        {phase.title}
                      </h3>
                    </div>
                    <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-medium font-sans text-base-content uppercase tracking-wide text-sm">
                          Goals
                        </h4>
                        <ul className="space-y-2 text-base font-sans font-light text-base-content/90">
                          {phase.goals.map((goal, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium font-sans text-base-content uppercase tracking-wide text-sm">
                          Treatments
                        </h4>
                        <ul className="space-y-2 text-base font-sans font-light text-base-content/90">
                          {phase.treatments.map((treatment, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">✔</span>
                              <span>{treatment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:col-span-2 mt-4">
                        <p className="text-base font-sans font-light text-base-content/90 italic border-l-4 border-primary pl-4 py-2 bg-secondary/20">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Results & Why It Works */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Results */}
            {content.results && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif">
                  {/* <span className="text-primary">⭐</span>{' '} */}
                  {content.results.title}
                </h2>
                <p className="font-sans italic text-base-content/80">
                  {content.results.subtitle}
                </p>
                <ul className="space-y-1 text-base font-sans font-light text-base-content/90">
                  {content.results.list.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-medium text-primary italic">
                  {content.results.note}
                </p>
              </div>
            )}

            {/* Why It Works */}
            {content.whyItWorks && (
              <div className="space-y-6 bg-secondary p-8">
                <h2 className="text-2xl md:text-3xl font-serif">
                  {/* <span className="text-primary">⭐</span>{' '} */}
                  {content.whyItWorks.title}
                </h2>
                <p className="text-base font-sans font-light text-base-content/90">
                  {content.whyItWorks.description}
                </p>
                <ul className="space-y-1 text-base font-sans font-light text-base-content/90">
                  {content.whyItWorks.list.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base font-sans font-medium text-base-content/90 border-t border-primary/20 pt-4 mt-4">
                  {content.whyItWorks.note}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Difference & Suitability */}
        <section className="py-16 px-4 md:px-8 bg-base-50">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Difference */}
            {content.difference && (
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif">
                  {/* <span className="text-primary">⭐</span>{' '} */}
                  {content.difference.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {content.difference.list.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary rounded-full shadow-sm text-primary font-medium font-sans font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="font-sans italic">
                  {content.difference.note}
                </p>
              </div>
            )}

            {/* Suitability */}
            {content.suitability && (
              <div className="grid md:grid-cols-2 gap-8">
                {content.suitability.ideal && (
                  <div className=" p-8">
                    <h3 className="text-xl font-serif text-green-800 mb-6 flex items-center gap-2">
                      {/* <span className="text-2xl">✔</span>{' '} */}
                      {content.suitability.ideal.title}
                    </h3>
                    <ul className="space-y-3 text-base font-sans font-light text-base-content/90">
                      {content.suitability.ideal.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-green-600 mt-1">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {content.suitability.notIdeal && (
                  <div className="p-8">
                    <h3 className="text-xl font-serif text-red-800 mb-6 flex items-center gap-2">
                      {/* <span className="text-2xl">✘</span>{' '} */}
                      {content.suitability.notIdeal.title}
                    </h3>
                    <ul className="space-y-3 text-base font-sans font-light text-base-content/90">
                      {content.suitability.notIdeal.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-red-600 mt-1">✘</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Related Conditions Section */}
        <RelatedConditions 
          conditions={relatedConditions} 
          title="Addresses Conditions" 
          subtitle="This programme is designed to address the following conditions." 
        />

        {/* Related Treatments Section */}
        <RelatedTreatments 
          treatments={relatedTreatments} 
          title="Included Treatments" 
          subtitle="This programme includes or utilizes the following treatments."
          className="bg-base-200/30"
        />

        {/* Investment & CTA */}
        <section className="py-24 px-4 md:px-8 bg-secondary text-primary">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {content.investment && (
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif">
                  {/* <span className="text-secondary">⭐</span>{' '} */}
                  {content.investment.title}
                </h2>
                <p className="text-lg md:text-xl font-sans font-light  leading-relaxed">
                  {content.investment.description}
                </p>
              </div>
            )}

            <div className="space-y-8 pt-8 border-t border-primary/20">
              <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                Your next decade of skin begins here.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book Advanced Skin Health Consultation
                </a>
                {/* <button className="btn btn-outline border border-primary text-primary shadow-none hover:bg-primary/10 hover:text-primary"> 
                  Speak to a Practitioner
                </button> */}
              </div>
              <div className="pt-4">
                <Link
                  to="/signature"
                  className="hover:underline font-sans font-light inline-flex items-center gap-2"
                >
                  Explore Other Signature Programmes{' '}
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
