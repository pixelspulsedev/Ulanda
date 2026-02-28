import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getIndividualCondition } from '../data/pageContents/conditions/individualConditions';
import { conditions } from '../data/pageContents/conditions/conditions';
import { getTreatmentsForCondition, getTreatmentUrl, getConditionUrl } from '../data/crosslinks';
import Conditions from './Conditions';
import { ChevronRight } from 'lucide-react';
import RelatedTreatments from '../components/RelatedTreatments';
import RelatedJournals from '../components/RelatedJournals';
import { getTreatmentById } from '../data/pageContents/treatments/treatments';
import { getJournalsForCondition } from '../data/pageContents/journal/journalArticles';
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
  
  let relatedTreatments = [];

  if (condition?.relatedTreatments) {
    relatedTreatments = condition.relatedTreatments;
  } else {
    const relatedTreatmentIds = getTreatmentsForCondition(conditionId);
    relatedTreatments = relatedTreatmentIds.map(tid => {
      // try to resolve full object to get proper casing title
      const tObj = getTreatmentById(tid);
      // fallback to id if object not found (though object is preferred)
      return tObj || tid;
    });
  }

  if (!condition) {
    return <div className="text-center py-20">Condition not found</div>;
  }

  const preferredPath = getConditionUrl(conditionId);
  const canonicalUrl = `https://www.ulanda.co.uk${preferredPath}`.toLowerCase();
  const seoDescription = condition.seo?.description || (Array.isArray(condition.hero.description) ? condition.hero.description.join(' ') : condition.hero.description);
  const seoTitle = condition.seo?.title || `${condition.hero.title} ${condition.hero.highlight} Treatment | ULANDA Ware SG12`;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
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

              <div className="text-lg font-sans font-light text-base-content/80 mb-8 leading-relaxed space-y-4">
                {Array.isArray(condition.hero.description) ? (
                  condition.hero.description.map((desc, index) => (
                    <HeroText key={index} delay={0.2 + (index * 0.1)}>{desc}</HeroText>
                  ))
                ) : (
                  <HeroText delay={0.2}>{condition.hero.description}</HeroText>
                )}
              </div>

              <FadeInWhenVisible delay={0.4}>
                {condition.hero.buttonText === 'Book Skin Health Consultation' ? (
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

        {/* Content Section */}
        {condition.content && (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {condition.content.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-2xl font-serif text-primary">
                  {item.title}
                </h3>
                <p className="text-lg font-sans font-light text-base-content/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        )}

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

        {/* Clinical Insights — Bidirectional Journal Links */}
        {(() => {
          const relatedJournals = getJournalsForCondition(conditionId);
          return relatedJournals.length > 0 ? (
            <RelatedJournals
              journals={relatedJournals}
              title="Clinical Insights"
              subtitle="ULANDA Clinical Perspectives."
            />
          ) : null;
        })()}

        {/* Content Sections */}
        {condition.contentSections && condition.contentSections.map((section, index) => (
          <section key={index} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-8">
                  {section.title}{' '}
                  {section.highlight && (
                    <span className="italic font-light text-primary">
                      {section.highlight}
                    </span>
                  )}
                </h2>

                {section.description && (
                  <div className="text-lg font-sans font-light text-base-content/80 mb-8 leading-relaxed space-y-4">
                    {Array.isArray(section.description) ? (
                        section.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))
                      ) : (
                        <p>{section.description}</p>
                      )}
                  </div>
                )}

                {section.items && (
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg font-sans font-light text-base-content/80">
                        <span className="text-primary font-bold mt-1">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                 
                 {section.link && (
                    <div className="mt-8">
                      <Link to={section.link.url} className="text-primary hover:text-primary/80 transition-colors font-medium">
                        {section.link.text}
                      </Link>
                    </div>
                  )}
              </div>
            </div>
          </section>
        ))}

        {/* Programme Pathway Section */}
        {condition.programmePathway && (
             <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-serif text-base-content mb-2">{condition.programmePathway.title}:</h3>
                {condition.programmePathway.pathwayLink ? (
                  <Link to={condition.programmePathway.pathwayLink} className="text-xl text-primary font-medium italic mb-2 hover:underline block">{condition.programmePathway.pathway}</Link>
                ) : (
                  <p className="text-xl text-primary font-medium italic mb-2">{condition.programmePathway.pathway}</p>
                )}
                {condition.programmePathway.secondary && (
                    condition.programmePathway.secondaryLink ? (
                      <Link to={condition.programmePathway.secondaryLink} className="text-base text-base-content/60 hover:underline block">{condition.programmePathway.secondary}</Link>
                    ) : (
                      <p className="text-base text-base-content/60">{condition.programmePathway.secondary}</p>
                    )
                )}
             </section>
        )}

        {/* Why Choose Section */}
        {condition.whyChoose && (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-8">
                {condition.whyChoose.title}{' '}
                {/* <span className="italic font-light text-primary">
                  {condition.whyChoose.highlight}
                </span> */}
              </h2>

              {condition.whyChoose.description && (
                <div className="text-lg font-sans font-light text-base-content/80 mb-8 leading-relaxed space-y-4">
                  {condition.whyChoose.description}
                </div>
              )}

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
              {condition.whyChoose.link && (
                    <div className="mt-8">
                      <Link to={condition.whyChoose.link.url} className="text-primary hover:text-primary/80 transition-colors font-medium">
                        {condition.whyChoose.link.text}
                      </Link>
                    </div>
                  )}
            </div>
          </div>
        </section>
        )}

        {/* Content Sections 2 */}
        {condition.contentSections2 && condition.contentSections2.map((section, index) => (
          <section key={`cs2-${index}`} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-8">
                  {section.title}{' '}
                  {section.highlight && (
                    <span className="italic font-light text-primary">
                      {section.highlight}
                    </span>
                  )}
                </h2>

                {section.description && (
                  <div className="text-lg font-sans font-light text-base-content/80 mb-8 leading-relaxed space-y-4">
                    {Array.isArray(section.description) ? (
                        section.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))
                      ) : (
                        <p>{section.description}</p>
                      )}
                  </div>
                )}

                {section.items && (
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg font-sans font-light text-base-content/80">
                        <span className="text-primary font-bold mt-1">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                 
                 {section.link && (
                    <div className="mt-8">
                      <Link to={section.link.url} className="text-primary hover:text-primary/80 transition-colors font-medium">
                        {section.link.text}
                      </Link>
                    </div>
                  )}
              </div>
            </div>
          </section>
        ))}

        {/* FAQs Section */}
        {((condition.faq && condition.faq.items && condition.faq.items.length > 0) || (condition.faqs && condition.faqs.length > 0)) && (
          <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2A2A2A]">
              Frequently Asked <span className="italic font-light text-primary">Questions</span>
            </h2>
            <div className="space-y-4">
              {(condition.faq?.items || condition.faqs).map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-base-100 border border-base-200 rounded-lg">
                  <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
                  <div className="collapse-title text-xl font-medium font-sans text-primary">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p className="font-sans font-light text-base-content/80 text-left">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            {condition.faq?.footer && (
              <p className="mt-8 text-center text-base-content/80 font-sans max-w-2xl mx-auto">
                {condition.faq.footer}
              </p>
            )}
            {condition.seoFooter && (
              <p className="mt-8 text-center text-base-content/60 font-sans text-sm max-w-2xl mx-auto italic">
                {condition.seoFooter}
              </p>
            )}
          </section>
        )}

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

            {condition.cta.buttonText === 'Book Skin Health Consultation' ? (
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
