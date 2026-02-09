import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getIndividualCondition } from '../data/pageContents/conditions/individualConditions';
import { conditions } from '../data/pageContents/conditions/conditions';
import { getTreatmentsForCondition, getTreatmentUrl } from '../data/crosslinks';
import Conditions from './Conditions';
import { ChevronRight } from 'lucide-react';
import RelatedTreatments from '../components/RelatedTreatments';
import { getTreatmentById } from '../data/pageContents/treatments/treatments';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function ConditionDetail() {
  const { id: rawId, category: rawCategory } = useParams();
  const id = rawId?.toLowerCase();
  const category = rawCategory?.toLowerCase();
  const conditionId = id || category;

  // Check if it's a master condition first
  const isMasterCondition = conditions.some(c => c.id === conditionId || (conditionId === 'aging' && c.id === 'ageing'));
  
  if (isMasterCondition) {
    return <Conditions />;
  }

  const condition = getIndividualCondition(conditionId);
  const relatedTreatmentIds = getTreatmentsForCondition(conditionId);
  const relatedTreatments = relatedTreatmentIds.map(tid => {
    // try to resolve full object to get proper casing title
    const tObj = getTreatmentById(tid);
    // fallback to id if object not found (though object is preferred)
    return tObj || tid;
  });

  if (!condition) {
    return <div className="text-center py-20">Condition not found</div>;
  }

  const canonicalPath = category ? `${category}/${id}` : id;
  const canonicalUrl = `https://www.ulanda.co.uk/conditions/${canonicalPath}`.toLowerCase();
  const seoDescription = condition.hero.description;

  return (
    <>
      <Head>
        <title>
          {condition.hero.title} {condition.hero.highlight} Treatment | ULANDA Ware SG12
        </title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${condition.hero.title} ${condition.hero.highlight} Treatment | ULANDA`} />
        <meta name="twitter:description" content={condition.hero.description} />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <div className="bg-base-100">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-6 text-[#2A2A2A]">
                <HeroText>
                  <span className="italic font-light text-primary">
                    {condition.hero.title.split(' ')[0]}
                  </span>{' '}
                  {condition.hero.title.split(' ').slice(1).join(' ')}{' '}
                  {condition.hero.highlight}
                </HeroText>
              </h1>

              <div className="text-lg font-sans font-light text-base-content/80 mb-8 leading-relaxed">
                <HeroText delay={0.2}>{condition.hero.description}</HeroText>
              </div>

              <FadeInWhenVisible delay={0.4}>
                {condition.hero.buttonText === 'Book Consultation' ? (
                  <Link to="/book-consultation" className="btn btn-primary">
                    {condition.hero.buttonText}
                  </Link>
                ) : (
                  <a
                    href={
                      condition.hero.buttonLink ||
                      'https://ulanda-100633.square.site/'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {condition.hero.buttonText}
                  </a>
                )}
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
                      className="w-full h-full  object-cover"
                    />
                  </RevealImage>
                </div>
                {/* Main image */}
                <RevealImage className="relative z-10 w-full h-full overflow-hidden">
                  <img
                    src={condition.hero.placeholderUrl || condition.hero.image}
                    alt={`${condition.hero.title} ${condition.hero.highlight}`}
                    className="w-full h-full object-cover"
                    fetchpriority="high"
                  />
                </RevealImage>
              </div>
            </div>
          </div>
        </section>

        {/* Science Section */}
        {condition.science && (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">
              {condition.science.title}{' '}
              <span className="italic font-light text-primary">
                {condition.science.highlight}
              </span>
            </h2>
            <p className="text-lg text-base-content/80 font-sans max-w-2xl mx-auto">
              {condition.science.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {condition.science.items.map((item, index) => (
              <div
                key={index}
                className="relative p-8 bg-secondary rounded-lg  flex flex-col justify-end overflow-hidden group"
              >
                {/* Background Number */}
                <span className="absolute top-0 left-4 text-[120px] font-bold text-primary/5 leading-none select-none font-sans pointer-events-none">
                  {item.number}
                </span>

                <div className="relative z-10">
                  <h3 className="text-xl font-sans font-medium mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-base-content/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg text-base-content/80 font-sans w-full max-w-3xl text-center mx-auto leading-relaxed">
            {condition.science.footer}
          </p>
        </section>
        )}
        
        {/* Related Treatments Section */}
        <RelatedTreatments
          treatments={relatedTreatments}
          title="Recommended Treatments"
          subtitle="Based on your condition, we recommend the following treatments."
        />

        {/* Why Choose Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-8">
                {condition.whyChoose.title}{' '}
                <span className="italic font-light text-primary">
                  {condition.whyChoose.highlight}
                </span>
              </h2>

              <ul className="space-y-4">
                {condition.whyChoose.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg font-sans font-light text-base-content/80"
                  >
                    <span className="text-primary font-bold mt-1">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-4 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-[#2A2A2A] mb-6">
              {condition.cta.title}{' '}
              <span className="italic font-light text-primary">
                {condition.cta.highlight}
              </span>{' '}
              {condition.cta.titleSuffix}
            </h2>

            <p className="text-lg md:text-xl font-sans font-light text-base-content/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {condition.cta.description}
            </p>

            {condition.cta.buttonText === 'Book Consultation' ? (
              <Link
                to="/book-consultation"
                className="inline-block bg-primary text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#4A3024] transition-colors duration-300"
              >
                {condition.cta.buttonText}
              </Link>
            ) : (
              <a
                href={condition.cta.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#4A3024] transition-colors duration-300"
              >
                {condition.cta.buttonText}
              </a>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
