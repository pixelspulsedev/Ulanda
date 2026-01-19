import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getIndividualCondition } from '../data/pageContents/conditions/individualConditions';
import { getCondition } from '../data/pageContents/conditions/conditions';
import { getTreatmentsForCondition, getTreatmentUrl } from '../data/crosslinks';
import Conditions from './Conditions';
import { ChevronRight } from 'lucide-react';
import RelatedTreatments from '../components/RelatedTreatments';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function ConditionDetail() {
  const { id, category } = useParams();
  const conditionId = id || category;
  
  // Check if it's a master condition first
  const masterCondition = getCondition(conditionId);
  if (masterCondition) {
    return <Conditions />;
  }

  const condition = getIndividualCondition(conditionId);
  const relatedTreatments = getTreatmentsForCondition(conditionId);

  if (!condition) {
    return <div className="text-center py-20">Condition not found</div>;
  }

  return (
    <>
      <Head>
        <title>
          Ulanda - {condition.hero.title} {condition.hero.highlight}
        </title>
        <meta name="description" content={condition.hero.description} />
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
                <HeroText delay={0.2}>
                {condition.hero.description}
                </HeroText>
              </div>

              <FadeInWhenVisible delay={0.4}>
              <a 
                href={condition.hero.buttonLink || "https://ulanda-100633.square.site/"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {condition.hero.buttonText}
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
                    className="w-full h-full  object-cover"
                  />
                  </RevealImage>
                </div>
                {/* Main image */}
                <RevealImage className="relative z-10 w-full h-full overflow-hidden">
                  <img
                    src={condition.hero.image}
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

        {/* Treatment Model Section */}
        <section className="py-8 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-base-content mb-4 leading-tight">
              {condition.treatmentModel.title}{' '}
              <span className="italic text-primary">
                {condition.treatmentModel.highlight}
              </span>
            </h2>
          </div>
        </section>

        {condition.treatmentModel.items.map((section, index) => (
          <div key={index}>
            {/* Mobile View */}
            <section className="md:hidden pb-12 flex items-center bg-base-100 overflow-hidden">
              <div className="w-full flex flex-col gap-16 items-center justify-end">
                <div className="flex justify-center w-full">
                  <div className="w-full px-4">
                    <h3 className="text-2xl font-serif text-base-content mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm font-sans text-primary mb-6 font-medium uppercase tracking-wide">
                      {section.subtitle}
                    </p>

                    <div className="flex-1 w-full relative flex justify-center pb-12">
                      <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>
                      <div className="relative w-full max-w-sm aspect-[4/5]">
                        <div className="absolute top-20 right-20 w-full h-full z-0">
                          <RevealImage className="w-full h-full">
                          <img
                            src="/assets/img/ui/accent.webp"
                            alt="Decorative shadow"
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>
                        <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                          <RevealImage className="w-full h-full">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-base-content/80 font-sans font-light mt-12 leading-relaxed">
                      {section.description}
                    </p>

                    <ul className="my-6 space-y-6">
                      {section.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-base-content/80 font-light flex flex-col gap-1"
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-primary mt-1.5 text-xs">
                              ●
                            </span>
                            <span className="font-medium text-[#2A2A2A]">{point.name}</span>
                          </div>
                          <p className="pl-5 text-sm text-base-content/70 leading-relaxed">
                            {point.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Desktop View */}
            <section className="hidden py-24 md:flex items-center bg-base-100">
              <div
                className={`w-full flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse gap-24'
                } gap-16 items-center justify-end max-w-7xl mx-auto px-4 md:px-8`}
              >
                {/* Content */}
                <div className="flex-1 flex justify-center w-full">
                  <div className="w-full max-w-3xl px-4">
                    <h3 className="text-3xl font-serif text-base-content mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm font-sans text-primary mb-6 font-medium uppercase tracking-wide">
                      {section.subtitle}
                    </p>

                    <p className="text-lg text-base-content/80 font-sans font-light mb-8 leading-relaxed max-w-lg">
                      {section.description}
                    </p>

                    <ul className="mb-6 space-y-6">
                      {section.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-base-content/80 font-light flex flex-col gap-1"
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-primary mt-1.5 text-xs">
                              ●
                            </span>
                            <span className="font-medium text-[#2A2A2A]">{point.name}</span>
                          </div>
                          <p className="pl-5 text-sm text-base-content/70 leading-relaxed max-w-md">
                            {point.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`flex-1 max-w-sm relative flex justify-center ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  } mt-12 md:mt-0`}
                >
                  <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>

                  <div className="relative w-full max-w-sm aspect-[4/5]">
                    <div
                      className={`absolute top-20 ${
                        index % 2 === 0
                          ? 'right-10 lg:right-20'
                          : 'left-10 lg:left-20'
                      } w-full h-full z-0`}
                    >
                      <RevealImage className="w-full h-full">
                      <img
                        src="/assets/img/ui/accent.webp"
                        alt="Decorative shadow"
                        className="w-full h-full object-cover"
                      />
                      </RevealImage>
                    </div>

                    <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                      <RevealImage className="w-full h-full">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                      </RevealImage>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}

        {/* Pathway Section */}
        {/* <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-base-content hover:text-primary transition-colors">
              <Link to={`/pathways/${condition.pathway.title.toLowerCase().split(' ')[0]}`}>
                {condition.pathway.title}
              </Link>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {condition.pathway.steps.map((step, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg flex flex-col justify-center min-h-[160px]"
              >
                <h3 className="text-2xl font-sans font-medium text-primary mb-2">
                  {step.time}
                </h3>
                <p className="text-base-content/80 font-sans font-light">
                  {step.treatment}
                </p>
              </div>
            ))}
          </div>
        </section> */}

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

            {/* Image Content */}
            <div className="flex-1 relative w-full max-w-sm flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm aspect-[4/5]">
                {/* Accent / shadow image (background) */}
                <div className="absolute -top-12 -right-12 w-full h-full z-0">
                  <RevealImage className="w-full h-full">
                  <img
                    src="/assets/img/ui/accent.webp"
                    alt="Decorative shadow"
                    className="w-full h-full object-cover opacity-50"
                  />
                  </RevealImage>
                </div>

                {/* Main image (foreground) */}
                <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                  <RevealImage className="w-full h-full">
                  <img
                    src={condition.whyChoose.image}
                    alt="Why Choose ULANDA"
                    className="w-full h-full object-cover"
                  />
                  </RevealImage>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Treatments Section */}
        <RelatedTreatments 
          treatments={relatedTreatments} 
          title="Recommended Treatments" 
          subtitle="Based on your condition, we recommend the following treatments." 
        />

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

            <a 
              href={condition.cta.buttonLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#4A3024] transition-colors duration-300"
            >
              {condition.cta.buttonText}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
