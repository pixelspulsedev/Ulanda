import React, { useState, useEffect } from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { getSignaturePathway, signaturePathways } from '../data/pageContents/signature/signatureData';
import { getJournalsForSignature } from '../data/pageContents/journal/journalArticles';
import RelatedJournals from '../components/RelatedJournals';
import { Check, ArrowRight, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

export default function SignatureDetail() {
  const { id: rawId } = useParams();
  const id = rawId?.toLowerCase();
  const pathway = getSignaturePathway(id);
  const [showSticky, setShowSticky] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!pathway) {
    return <Navigate to="/signature" replace />;
  }

  const { title, subtitle, description, heroIntro, credential, concerns, image, seo, content } = pathway;
  const isExpanded = !!content.whatThisIs;

  // Find adjacent pathways for navigation
  const currentIndex = signaturePathways.findIndex(p => p.id === id);
  const prevPathway = currentIndex > 0 ? signaturePathways[currentIndex - 1] : null;
  const nextPathway = currentIndex < signaturePathways.length - 1 ? signaturePathways[currentIndex + 1] : null;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <div className="flex-1 max-w-2xl">
              <FadeInWhenVisible>
                <Link
                  to="/signature"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Signatures
                </Link>
              </FadeInWhenVisible>

              <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-6 text-[#2A2A2A]">
                <HeroText>
                  <span className="italic font-light text-primary">
                    {title.split(' ')[0]}
                  </span>{' '}
                  {title.split(' ').slice(1).join(' ')}
                </HeroText>
              </h1>

              {subtitle && (
                <FadeInWhenVisible delay={0.15}>
                  <p className="text-lg md:text-xl font-serif italic text-primary/80 mb-4">{subtitle}</p>
                </FadeInWhenVisible>
              )}

              <div className="text-lg font-sans font-light text-base-content/80 mb-4 leading-relaxed">
                <HeroText delay={0.2}>
                  {description}
                </HeroText>
              </div>

              {heroIntro && (
                <FadeInWhenVisible delay={0.25}>
                  <p className="text-base font-sans font-light text-base-content/70 mb-4 leading-relaxed">{heroIntro}</p>
                </FadeInWhenVisible>
              )}

              {credential && (
                <FadeInWhenVisible delay={0.28}>
                  <p className="text-sm text-primary/70 font-medium mb-4">{credential}</p>
                </FadeInWhenVisible>
              )}

              <FadeInWhenVisible delay={0.3}>
                <p className="text-sm text-base-content/50 mb-8">
                  <span className="font-medium">Common concerns:</span> {concerns}
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.4}>
                <Link to="/book-consultation" className="btn btn-primary text-white px-8 rounded-full">
                  Book Skin Health Consultation
                </Link>
              </FadeInWhenVisible>
            </div>

            {/* Image */}
            <div className="flex-1 relative w-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-none overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction / What This Is */}
        {isExpanded ? (
          <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-8">
                  {content.whatThisIs.title}
                </h2>
              </FadeInWhenVisible>
              <div className="space-y-6">
                {content.whatThisIs.paragraphs.map((paragraph, i) => (
                  <FadeInWhenVisible key={i} delay={0.1 * i}>
                    <p className="text-lg text-base-content/80 font-light leading-relaxed">{paragraph}</p>
                  </FadeInWhenVisible>
                ))}
              </div>
              {content.whatThisIs.cta && (
                <FadeInWhenVisible delay={0.3}>
                  <div className="mt-8">
                    <Link to={content.whatThisIs.cta.url} className="btn btn-primary text-white px-8 rounded-full">
                      {content.whatThisIs.cta.label}
                    </Link>
                    {content.whatThisIs.note && (
                      <p className="text-sm text-base-content/50 mt-3 italic">{content.whatThisIs.note}</p>
                    )}
                  </div>
                </FadeInWhenVisible>
              )}
            </div>
          </section>
        ) : (
          <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-8">
                  Understanding <span className="italic font-light text-primary">{title}</span>
                </h2>
              </FadeInWhenVisible>
              <div className="space-y-6">
                {content.intro.map((paragraph, i) => (
                  <FadeInWhenVisible key={i} delay={0.1 * i}>
                    <p className="text-lg text-base-content/80 font-light leading-relaxed">{paragraph}</p>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why This Feels Different */}
        {content.whyDifferent && (
          <section className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-6">
                  {content.whyDifferent.title}
                </h2>
                <p className="text-lg text-base-content/80 font-light leading-relaxed mb-8">{content.whyDifferent.intro}</p>
              </FadeInWhenVisible>
              {content.whyDifferent.subtitle && (
                <FadeInWhenVisible delay={0.1}>
                  <p className="text-base font-medium text-base-content/90 mb-4">{content.whyDifferent.subtitle}</p>
                </FadeInWhenVisible>
              )}
              <ul className="space-y-3 mb-8">
                {content.whyDifferent.points.map((point, i) => (
                  <FadeInWhenVisible key={i} delay={0.1 * (i + 1)}>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{point}</span>
                    </li>
                  </FadeInWhenVisible>
                ))}
              </ul>
              {content.whyDifferent.closing && (
                <FadeInWhenVisible delay={0.4}>
                  <p className="text-base text-base-content/70 font-light italic">{content.whyDifferent.closing}</p>
                </FadeInWhenVisible>
              )}
            </div>
          </section>
        )}

        {/* Why This Exists */}
        {content.whyExists && (
          <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-8">
                  {content.whyExists.title}
                </h2>
              </FadeInWhenVisible>
              <div className="space-y-6 mb-8">
                {content.whyExists.paragraphs.map((paragraph, i) => (
                  <FadeInWhenVisible key={i} delay={0.1 * i}>
                    <p className="text-lg text-base-content/80 font-light leading-relaxed">{paragraph}</p>
                  </FadeInWhenVisible>
                ))}
              </div>
              {content.whyExists.subtitle && (
                <FadeInWhenVisible delay={0.3}>
                  <p className="text-base font-medium text-base-content/90 mb-4">{content.whyExists.subtitle}</p>
                </FadeInWhenVisible>
              )}
              <ul className="space-y-3 mb-8">
                {content.whyExists.points.map((point, i) => (
                  <FadeInWhenVisible key={i} delay={0.1 * (i + 3)}>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{point}</span>
                    </li>
                  </FadeInWhenVisible>
                ))}
              </ul>
              {content.whyExists.closing && (
                <FadeInWhenVisible delay={0.5}>
                  <p className="text-base text-base-content/70 font-light italic">{content.whyExists.closing}</p>
                </FadeInWhenVisible>
              )}
            </div>
          </section>
        )}

        {/* Designed For / Who Is It For */}
        {isExpanded ? (
          <section className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-8">
                  {content.designedFor.title}
                </h2>
              </FadeInWhenVisible>
              <ul className="space-y-3 mb-8">
                {content.designedFor.items.map((item, i) => (
                  <FadeInWhenVisible key={i} delay={0.05 * i}>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  </FadeInWhenVisible>
                ))}
              </ul>
              {content.designedFor.note && (
                <FadeInWhenVisible delay={0.5}>
                  <p className="text-base text-base-content/70 font-light italic">{content.designedFor.note}</p>
                </FadeInWhenVisible>
              )}
            </div>
          </section>
        ) : (
          <>
            {/* Treatment Phases (simple layout) */}
            <section className="py-16 md:py-24 px-4 md:px-8">
              <div className="max-w-5xl mx-auto">
                <FadeInWhenVisible>
                  <h2 className="text-3xl font-serif mb-12 text-center">
                    Your <span className="italic font-light text-primary">Structured</span> Journey
                  </h2>
                </FadeInWhenVisible>
                <div className="space-y-8">
                  {content.phases.map((phase, i) => (
                    <FadeInWhenVisible key={i} delay={0.1 * i}>
                      <div className="bg-white border border-secondary/50 rounded-2xl p-8 md:p-10">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg flex-shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <h3 className="text-xl font-serif font-medium text-primary">{phase.name}</h3>
                            <p className="text-base-content/60 mt-1">{phase.description}</p>
                          </div>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-14">
                          {phase.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-base-content/70">
                              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeInWhenVisible>
                  ))}
                </div>
              </div>
            </section>

            {/* Who Is It For (simple layout) */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
              <div className="max-w-4xl mx-auto">
                <FadeInWhenVisible>
                  <h2 className="text-3xl font-serif mb-6">
                    Is This Signature <span className="italic font-light text-primary">Right for You?</span>
                  </h2>
                  <p className="text-lg text-base-content/80 font-light mb-8">{content.whoIsItFor.description}</p>
                </FadeInWhenVisible>
                <ul className="space-y-3">
                  {content.whoIsItFor.items.map((item, i) => (
                    <FadeInWhenVisible key={i} delay={0.1 * i}>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base-content/80">{item}</span>
                      </li>
                    </FadeInWhenVisible>
                  ))}
                </ul>
              </div>
            </section>
          </>
        )}

        {/* Overlapping Conditions */}
        {content.overlappingConditions && (
          <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <p className="text-lg text-base-content/80 font-light leading-relaxed mb-8">{content.overlappingConditions.intro}</p>
                <h3 className="text-xl font-serif font-medium text-primary mb-6">{content.overlappingConditions.title}</h3>
              </FadeInWhenVisible>
              <ul className="space-y-3">
                {content.overlappingConditions.items.map((item, i) => (
                  <FadeInWhenVisible key={i} delay={0.1 * i}>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  </FadeInWhenVisible>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* The ULANDA Difference */}
        {content.ulandaDifference && (
          <section className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-6">
                  The <span className="italic font-light text-primary">ULANDA</span> Difference
                </h2>
                <p className="text-lg text-base-content/80 font-light leading-relaxed mb-4">{content.ulandaDifference.intro}</p>
                {content.ulandaDifference.concern && (
                  <p className="text-base text-base-content/70 font-light leading-relaxed mb-8">{content.ulandaDifference.concern}</p>
                )}
              </FadeInWhenVisible>
              {content.ulandaDifference.subtitle && (
                <FadeInWhenVisible delay={0.1}>
                  <p className="text-base font-medium text-base-content/90 mb-4">{content.ulandaDifference.subtitle}</p>
                </FadeInWhenVisible>
              )}
              <ul className="space-y-3 mb-8">
                {content.ulandaDifference.points.map((point, i) => (
                  <FadeInWhenVisible key={i} delay={0.1 * (i + 1)}>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{point}</span>
                    </li>
                  </FadeInWhenVisible>
                ))}
              </ul>
              {content.ulandaDifference.closing && (
                <FadeInWhenVisible delay={0.4}>
                  <p className="text-base text-base-content/70 font-light italic">{content.ulandaDifference.closing}</p>
                </FadeInWhenVisible>
              )}
            </div>
          </section>
        )}

        {/* Related Condition Reading */}
        {content.relatedConditions && (
          <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-8">
                  Explore Related <span className="italic font-light text-primary">Conditions</span>
                </h2>
              </FadeInWhenVisible>
              <ul className="space-y-4 mb-8">
                {content.relatedConditions.map((condition, i) => (
                  <FadeInWhenVisible key={i} delay={0.1 * i}>
                    <li>
                      <Link
                        to={condition.url}
                        className="flex items-center gap-3 group text-base-content/80 hover:text-primary transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        <span className="font-light">{condition.title}</span>
                      </Link>
                    </li>
                  </FadeInWhenVisible>
                ))}
              </ul>
              {content.relatedConditionsNote && (
                <FadeInWhenVisible delay={0.5}>
                  <p className="text-sm text-base-content/60 italic">{content.relatedConditionsNote}</p>
                </FadeInWhenVisible>
              )}
            </div>
          </section>
        )}

        {/* Related Journal Reading */}
        {/* {content.relatedJournal && (
          <section className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-6">
                  Related <span className="italic font-light text-primary">Journals</span>
                </h2>
                <p className="text-lg text-base-content/80 font-light leading-relaxed mb-10">{content.relatedJournal.intro}</p>
              </FadeInWhenVisible>

              {content.relatedJournal.core && (
                <div className="mb-10">
                  <FadeInWhenVisible delay={0.1}>
                    <h3 className="text-lg font-serif font-medium text-primary mb-4">Recommended Reading (Core Journals)</h3>
                  </FadeInWhenVisible>
                  <ul className="space-y-3">
                    {content.relatedJournal.core.map((article, i) => (
                      <FadeInWhenVisible key={i} delay={0.1 * (i + 1)}>
                        <li>
                          <Link
                            to={article.url}
                            className="flex items-center gap-3 group text-base-content/80 hover:text-primary transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            <span className="font-light">{article.title}</span>
                          </Link>
                        </li>
                      </FadeInWhenVisible>
                    ))}
                  </ul>
                </div>
              )}

              {content.relatedJournal.signatureSpecific && (
                <div className="mb-8">
                  <FadeInWhenVisible delay={0.3}>
                    <h3 className="text-lg font-serif font-medium text-primary mb-4">Recommended Reading (Signature-Specific Deep Dives)</h3>
                  </FadeInWhenVisible>
                  <ul className="space-y-3">
                    {content.relatedJournal.signatureSpecific.map((article, i) => (
                      <FadeInWhenVisible key={i} delay={0.1 * (i + 3)}>
                        <li>
                          <Link
                            to={article.url}
                            className="flex items-center gap-3 group text-base-content/80 hover:text-primary transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            <span className="font-light">{article.title}</span>
                          </Link>
                        </li>
                      </FadeInWhenVisible>
                    ))}
                  </ul>
                </div>
              )}

              {content.relatedJournal.closing && (
                <FadeInWhenVisible delay={0.5}>
                  <p className="text-sm text-base-content/60 italic">{content.relatedJournal.closing}</p>
                </FadeInWhenVisible>
              )}
            </div>
          </section>
        )} */}

        {/* Best Next Step */}
        {content.bestNextStep && (
          <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-3xl mx-auto text-center">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-6">{content.bestNextStep.title}</h2>
                <p className="text-lg text-base-content/80 font-light leading-relaxed mb-4">{content.bestNextStep.description}</p>
                {content.bestNextStep.detail && (
                  <p className="text-base text-base-content/70 font-light leading-relaxed mb-4">{content.bestNextStep.detail}</p>
                )}
                {content.bestNextStep.closing && (
                  <p className="text-base text-base-content/70 font-light leading-relaxed mb-8">{content.bestNextStep.closing}</p>
                )}
                <Link
                  to={content.bestNextStep.cta.url}
                  className="btn btn-primary btn-lg text-white px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  {content.bestNextStep.cta.label}
                </Link>
              </FadeInWhenVisible>
            </div>
          </section>
        )}

        {/* FAQs */}
        {content.faqs && content.faqs.length > 0 && (
          <section className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-10 text-center">
                  Frequently Asked <span className="italic font-light text-primary">Questions</span>
                </h2>
              </FadeInWhenVisible>
              <div className="space-y-3">
                {content.faqs.map((faq, i) => (
                  <FadeInWhenVisible key={i} delay={0.05 * i}>
                    <div className="bg-white border border-secondary/50 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-secondary/20 transition-colors"
                      >
                        <span className="font-serif font-medium text-base md:text-lg text-base-content/90">{faq.q}</span>
                        {openFaq === i ? (
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="px-5 md:px-6 pb-5 md:pb-6 text-base-content/70 font-light leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        {content.finalCta ? (
          <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-3xl mx-auto text-center">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-6">{content.finalCta.title}</h2>
                <p className="text-lg text-base-content/70 font-light leading-relaxed mb-4">
                  {content.finalCta.description}
                </p>
                {content.finalCta.closing && (
                  <p className="text-base text-base-content/70 font-light leading-relaxed mb-8">
                    {content.finalCta.closing}
                  </p>
                )}
                <Link
                  to={content.finalCta.cta.url}
                  className="btn btn-primary btn-lg text-white px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  {content.finalCta.cta.label}
                </Link>
              </FadeInWhenVisible>
            </div>
          </section>
        ) : (
          <section className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-6">Ready to Begin?</h2>
                <p className="text-lg text-base-content/70 font-light leading-relaxed mb-8">
                  The most effective way to start your {title} Signature is with a Skin Health Consultation so your plan is personalised, safe and sequenced correctly.
                </p>
                <Link
                  to="/book-consultation"
                  className="btn btn-primary btn-lg text-white px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book Skin Health Consultation
                </Link>
              </FadeInWhenVisible>
            </div>
          </section>
        )}

        {/* Evidence & Clinical Insight — Bidirectional Journal Links */}
        {(() => {
          const relatedJournals = getJournalsForSignature(id);
          return relatedJournals.length > 0 ? (
            <RelatedJournals
              journals={relatedJournals}
              title="Evidence & Clinical Insight"
              subtitle="Related clinical authority from the ULANDA Authority Journal."
            />
          ) : null;
        })()}

        {/* Other Signatures */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-serif mb-8 text-center">
                Explore Other <span className="italic font-light text-primary">Signatures</span>
              </h2>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {signaturePathways
                .filter(p => p.id !== id)
                .slice(0, 3)
                .map((p, i) => (
                  <FadeInWhenVisible key={p.id} delay={0.1 * i}>
                    <Link
                      to={p.url}
                      className="bg-white border border-secondary/30 rounded-xl p-6 block hover:shadow-md transition-all duration-300 group"
                    >
                      <h3 className="font-serif font-medium text-lg mb-2 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-base-content/60 font-light line-clamp-2">{p.description}</p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm mt-3 group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </FadeInWhenVisible>
                ))}
            </div>

            <FadeInWhenVisible delay={0.3}>
              <div className="text-center mt-8">
                <Link
                  to="/signature"
                  className="text-primary hover:text-primary/80 transition-colors font-medium inline-flex items-center gap-2"
                >
                  View All Signatures <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Previous/Next Navigation */}
        <section className="py-8 px-4 md:px-8 border-t border-secondary/30">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            {prevPathway ? (
              <Link
                to={prevPathway.url}
                className="flex items-center gap-2 text-sm text-base-content/60 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevPathway.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : <div />}
            {nextPathway ? (
              <Link
                to={nextPathway.url}
                className="flex items-center gap-2 text-sm text-base-content/60 hover:text-primary transition-colors"
              >
                <span className="hidden sm:inline">{nextPathway.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </section>

        {/* Sticky CTA */}
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
            showSticky ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <Link
            to="/book-consultation"
            className="btn btn-primary text-white px-6 py-3 rounded-full shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <span className="hidden sm:inline">Book Skin Health Consultation</span>
            <span className="sm:hidden">Book Skin Health Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
