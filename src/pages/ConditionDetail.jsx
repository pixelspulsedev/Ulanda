import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getIndividualCondition } from '../data/pageContents/conditions/individualConditions';
import { conditions } from '../data/pageContents/conditions/conditions';
import { getTreatmentsForCondition, getTreatmentUrl, getConditionUrl } from '../data/crosslinks';
import Conditions from './Conditions';
import ConsultationCTA from '../components/ConsultationCTA';
import { ChevronRight } from 'lucide-react';
import RelatedTreatments from '../components/RelatedTreatments';
import RelatedJournals from '../components/RelatedJournals';
import { getTreatmentById } from '../data/pageContents/treatments/treatments';
import { getJournalsForCondition } from '../data/pageContents/journal/journalArticles';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { BreadcrumbSchema } from '../components/Schema';

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

  let treatmentsRecommended = [];

  if (condition?.treatmentsRecommended) {
    treatmentsRecommended = condition.treatmentsRecommended;
  } else {
    const relatedTreatmentIds = getTreatmentsForCondition(conditionId);
    treatmentsRecommended = relatedTreatmentIds.map(tid => {
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

  // Support FAQ schema for hubs that opt in (e.g. Facial Balance & Vitality)
  const faqItems = condition.faq?.items || condition.faqs || [];
  const faqSchema = (condition.faq?.schema && faqItems.length > 0) ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": seoTitle,
    "description": seoDescription,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": condition.hero.title + (condition.hero.highlight ? ` ${condition.hero.highlight}` : ''),
      "alternateName": condition.hero.titleSuffix || undefined,
      "description": seoDescription,
      "possibleTreatment": relatedTreatments.slice(0, 5).map(t => ({
        "@type": "MedicalProcedure",
        "name": typeof t === 'string' ? t : (t.title || t.id)
      }))
    }
  };

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Conditions', url: '/conditions' },
    { name: condition.hero.title + (condition.hero.highlight ? ` ${condition.hero.highlight}` : ''), url: preferredPath }
  ];

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
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <BreadcrumbSchema items={breadcrumbItems} />

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

              {condition.hero.subheading && (
                <p className="text-xl md:text-2xl font-serif italic text-primary/90 mb-6 -mt-2">
                  {condition.hero.subheading}
                </p>
              )}

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
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={
                      condition.hero.buttonLink ||
                      'https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {condition.hero.buttonText}
                  </a>
                  {condition.hero.secondaryButtonText && (
                    <a
                      href={condition.hero.secondaryButtonLink || '#treatments-recommended'}
                      className="btn btn-outline "
                    >
                      {condition.hero.secondaryButtonText}
                    </a>
                  )}
                </div>

                {/* Anchor Navigation */}
                {condition.hero.anchorLinks && condition.hero.anchorLinks.length > 0 && (
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm font-sans">
                    {condition.hero.anchorLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.anchor}
                        className="flex items-center gap-1 text-primary/80 hover:text-primary border-b border-primary/30 hover:border-primary transition-colors"
                      >
                        {link.label} <ChevronRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
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

        {/* At A Glance Section */}
        {condition.atAGlance && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
            <div className="bg-secondary/40 rounded-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif text-base-content text-center mb-6 tracking-wide uppercase">
                {condition.atAGlance.title}
              </h2>
              <p className="text-base-content/80 leading-relaxed max-w-3xl mx-auto text-center mb-10">
                {condition.atAGlance.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {condition.atAGlance.commonConcerns && (
                  <div className="bg-base-100 p-6 rounded-lg">
                    <h3 className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Common Concerns</h3>
                    <ul className="space-y-2">
                      {condition.atAGlance.commonConcerns.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-base-content/80 font-light">
                          <span className="text-primary mt-1">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {condition.atAGlance.commonTreatments && (
                  <div className="bg-base-100 p-6 rounded-lg">
                    <h3 className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Commonly Recommended Treatments</h3>
                    <div className="flex flex-wrap gap-2">
                      {condition.atAGlance.commonTreatments.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.url}
                          className="px-4 py-2 bg-secondary border border-primary/20 rounded-full text-sm text-base-content/80 hover:border-primary hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {condition.atAGlance.footer && (
                <p className="mt-10 text-center text-base-content/70 font-sans italic">{condition.atAGlance.footer}</p>
              )}
            </div>
          </section>
        )}

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

        {/* Introduction Section */}
        {condition.introduction && (
          <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif text-base-content leading-tight">
                  {condition.introduction.title}
                </h2>
                <div className="space-y-4 text-lg font-sans font-light text-base-content/80 leading-relaxed">
                  {condition.introduction.content?.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                  {condition.introduction.goals && (
                    <ul className="list-disc list-inside space-y-2 pt-2 marker:text-primary">
                      {condition.introduction.goals.map((goal, idx) => <li key={idx}>{goal}</li>)}
                    </ul>
                  )}
                </div>
                {condition.introduction.highlightBox && (
                  <div className="bg-secondary p-6 rounded-lg border-l-4 border-primary">
                    <p className="font-serif text-xl text-primary leading-snug">{condition.introduction.highlightBox.text1}</p>
                    <p className="font-serif text-xl italic text-base-content/80 leading-snug">{condition.introduction.highlightBox.text2}</p>
                  </div>
                )}
              </div>
              {(condition.introduction.placeholderUrl || condition.introduction.image) && (
                <RevealImage className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={condition.introduction.placeholderUrl || condition.introduction.image}
                    alt={condition.introduction.title}
                    className="w-full h-full object-cover"
                  />
                </RevealImage>
              )}
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

        {/* Conditions We Treat — Card Grid Section */}
        {condition.conditionsWeTreat && (
          <section id="conditions-we-treat" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-base-content">
                {condition.conditionsWeTreat.title}{' '}
                <span className="italic font-light text-primary">{condition.conditionsWeTreat.highlight}</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {condition.conditionsWeTreat.cards.map((card, idx) => (
                <div key={idx} className="bg-secondary p-8 rounded-lg flex flex-col space-y-4">
                  <h3 className="text-xl font-serif text-primary">{card.title}</h3>
                  {card.summary && (
                    <p className="text-base-content/80 font-light leading-relaxed">{card.summary}</p>
                  )}
                  {card.commonSigns && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-base-content/50 font-medium mb-2">Common Signs</h4>
                      <ul className="space-y-1">
                        {card.commonSigns.map((sign, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-base-content/70 font-light">
                            <span className="text-primary mt-1">•</span>
                            <span>{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {card.bestTreatments && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-base-content/50 font-medium mb-2">Best Treatments</h4>
                      <div className="flex flex-wrap gap-2">
                        {card.bestTreatments.map((t, i) => (
                          <Link
                            key={i}
                            to={t.url}
                            className="px-3 py-1 bg-base-100 border border-primary/20 rounded-full text-xs text-base-content/70 hover:border-primary hover:text-primary transition-colors"
                          >
                            {t.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* {card.exploreLink && (
                    <Link to={card.exploreLink.url} className="text-primary text-sm font-medium hover:underline pt-2">
                      {card.exploreLink.text}
                    </Link>
                  )} */}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Treatments Recommended Section */}
        {condition.treatmentsRecommended && (
          <section id="treatments-recommended" className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-secondary/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-base-content">
                {condition.treatmentsRecommended.title}{' '}
                <span className="italic font-light text-primary">{condition.treatmentsRecommended.highlight}</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {condition.treatmentsRecommended.items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.url}
                  className="bg-base-100 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group block border-l-4 border-primary"
                >
                  {/* <img src={item.image} alt={item.name} className="w-full h-auto mb-4" /> */}
                  <h3 className="text-xl font-serif text-primary mb-2 group-hover:underline">{item.name}</h3>
                  <p className="text-sm text-base-content/70 mb-4 leading-relaxed">{item.description}</p>
                  <span className="text-xs uppercase tracking-widest border-b border-primary pb-1 group-hover:border-b-2">Learn More</span>
                </Link>
              ))}
            </div>
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

        {/* Related Clinical Insights (manual/curated list) */}
        {condition.relatedClinicalInsights && (
          <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-base-content">
                {condition.relatedClinicalInsights.title}{' '}
                <span className="italic font-light text-primary">{condition.relatedClinicalInsights.highlight}</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {condition.relatedClinicalInsights.items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.url}
                  className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow duration-300 group block"
                >
                  <h3 className="font-serif text-lg text-base-content group-hover:text-primary transition-colors">{item.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}

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
                {condition.whyChoose.highlight && (
                  <span className="italic font-light text-primary">
                    {condition.whyChoose.highlight}
                  </span>
                )}
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

            {(condition.whyChoose.placeholderUrl || condition.whyChoose.image) && (
              <div className="flex-1 w-full">
                <RevealImage className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={condition.whyChoose.placeholderUrl || condition.whyChoose.image}
                    alt={condition.whyChoose.title}
                    className="w-full h-full object-cover"
                  />
                </RevealImage>
              </div>
            )}
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

        {/* Advanced Skin Health Consultation Section */}
        {condition.advancedSkinHealthConsultation && (
          <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8 md:p-12 text-center space-y-6">
              <span className="text-xs uppercase tracking-widest text-primary font-medium">
                {condition.advancedSkinHealthConsultation.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-base-content">
                {condition.advancedSkinHealthConsultation.title}
              </h2>
              {condition.advancedSkinHealthConsultation.description && (
                <p className="text-base-content/80 leading-relaxed max-w-xl mx-auto">
                  {condition.advancedSkinHealthConsultation.description}
                </p>
              )}
              {condition.advancedSkinHealthConsultation.includes && (
                <ul className="grid sm:grid-cols-2 gap-2 text-left max-w-md mx-auto">
                  {condition.advancedSkinHealthConsultation.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-base-content/80 font-light">
                      <span className="text-primary mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-lg font-serif text-primary">{condition.advancedSkinHealthConsultation.investment}</p>
              {condition.advancedSkinHealthConsultation.url && (
                <Link
                  to={condition.advancedSkinHealthConsultation.url}
                  className="inline-block btn btn-primary text-white px-10 py-3 h-auto text-lg rounded-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book Skin Health Consultation
                </Link>
              )}
              {condition.advancedSkinHealthConsultation.tagline && (
                <p className="text-sm font-medium text-primary/80 tracking-wide">
                  {condition.advancedSkinHealthConsultation.tagline}
                </p>
              )}
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {((condition.faq && condition.faq.items && condition.faq.items.length > 0) || (condition.faqs && condition.faqs.length > 0)) && (
          <section id="faq" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2A2A2A]">
              {condition.faq?.title ? (
                <>{condition.faq.title}{' '}<span className="italic font-light text-primary">{condition.faq.highlight}</span></>
              ) : (
                <>Frequently Asked <span className="italic font-light text-primary">Questions</span></>
              )}
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
                    {faq.internalLinks && faq.internalLinks.length > 0 && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm">
                        {faq.internalLinks.map((link, i) => (
                          <Link key={i} to={link.url} className="text-primary hover:underline font-medium">
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    )}
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

            <a
              href={condition.cta.buttonLink || 'https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#4A3024] transition-colors duration-300"
            >
              {condition.cta.buttonText}
            </a>
          </div>
        </section>
        <ConsultationCTA />
      </div>
    </>
  );
}