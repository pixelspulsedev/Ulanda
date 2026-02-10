/**
 * ConditionDetail page for Non-Responsive Skin
 * Route: /conditions/non-responsive-skin
 */

import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { nonResponsiveSkinCondition as condition } from './nonResponsiveSkin_draft';
import { ChevronRight, Check, AlertTriangle, ArrowRight } from 'lucide-react';
import HeroText from '../../../../components/animations/HeroText';
import FadeInWhenVisible from '../../../../components/animations/FadeInWhenVisible';

// Helper component for FAQ Schema
const FAQSchema = ({ faq }) => {
  if (!faq || faq.length === 0) return null;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function NonResponsiveSkinDraft() {
  if (!condition) {
    return <div className="text-center py-20">Condition not found</div>;
  }

  return (
    <>
      <Head>
        <title>{condition.seo.title}</title>
        <meta name="description" content={condition.seo.description} />
        <link rel="canonical" href={`https://www.ulanda.co.uk/conditions/${condition.id}`} />
      </Head>

      {/* FAQ Schema */}
      {condition.faq && <FAQSchema faq={condition.faq} />}

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
                    {condition.hero.title}
                  </span>{' '}
                  <span className="text-primary">{condition.hero.highlight}</span>
                </HeroText>
              </h1>

              <div className="text-lg font-sans font-light text-base-content/80 mb-4 leading-relaxed">
                <HeroText delay={0.2}>{condition.hero.description}</HeroText>
              </div>

              {condition.hero.note && (
                <div className="text-base font-sans text-base-content/70 mb-8 leading-relaxed italic border-l-2 border-primary/30 pl-4">
                  {condition.hero.note}
                </div>
              )}

              <FadeInWhenVisible delay={0.4}>
                <Link to={condition.hero.buttonLink || "/book-consultation"} className="btn btn-primary">
                  {condition.hero.buttonText}
                </Link>
              </FadeInWhenVisible>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full max-w-lg">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={condition.hero.image}
                  alt={`${condition.hero.title} ${condition.hero.highlight}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Is Non-Responsive Skin */}
        {condition.whatIs && (
          <section className="py-16 px-4 md:px-8 bg-secondary/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-6 text-primary">
                {condition.whatIs.title}
              </h2>
              <p className="text-base-content/80 mb-6 text-lg">
                {condition.whatIs.description}
              </p>
              <p className="text-base-content/70 mb-4">It may look like:</p>
              <ul className="space-y-3 mb-6">
                {condition.whatIs.signs.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base-content/80">{sign}</span>
                  </li>
                ))}
              </ul>
              {condition.whatIs.note && (
                <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                  {condition.whatIs.note}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Why It Develops */}
        {condition.whyItDevelops && (
          <section className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-6 text-primary">
                {condition.whyItDevelops.title}
              </h2>
              <p className="text-base-content/80 mb-6">
                {condition.whyItDevelops.description}
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                {condition.whyItDevelops.factors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-base-200">
                    <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-base-content/80">{factor}</span>
                  </li>
                ))}
              </ul>
              {condition.whyItDevelops.note && (
                <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                  {condition.whyItDevelops.note}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Differentiation */}
        {condition.differentiation && (
          <section className="py-16 px-4 md:px-8 bg-secondary/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-6 text-primary">
                {condition.differentiation.title}
              </h2>
              <p className="text-base-content/80 mb-6">
                {condition.differentiation.description}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {condition.differentiation.comparisons.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-base-200">
                    <h4 className="font-medium text-primary mb-2">{item.condition}</h4>
                    <p className="text-sm text-base-content/70">{item.description}</p>
                  </div>
                ))}
              </div>
              {condition.differentiation.note && (
                <p className="text-sm text-base-content/60 italic border-l-2 border-amber-500/50 pl-4 bg-amber-50 p-4 rounded">
                  <AlertTriangle className="w-4 h-4 inline mr-2 text-amber-600" />
                  {condition.differentiation.note}
                </p>
              )}
              {condition.differentiation.relatedConditions && (
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="text-sm text-base-content/60">Related guidance:</span>
                  {condition.differentiation.relatedConditions.map((rc, index) => (
                    <Link 
                      key={index}
                      to={rc.url}
                      className="text-sm text-primary hover:underline"
                    >
                      {rc.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Common Signs */}
        {condition.commonSigns && (
          <section className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-6 text-primary">
                {condition.commonSigns.title}
              </h2>
              <p className="text-base-content/80 mb-6">
                {condition.commonSigns.description}
              </p>
              <ul className="space-y-3 mb-6">
                {condition.commonSigns.signs.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base-content/80">{sign}</span>
                  </li>
                ))}
              </ul>
              {condition.commonSigns.note && (
                <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                  {condition.commonSigns.note}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Why Repeating Doesn't Work */}
        {condition.whyRepeatingDoesntWork && (
          <section className="py-16 px-4 md:px-8 bg-amber-50/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-6 text-primary">
                {condition.whyRepeatingDoesntWork.title}
              </h2>
              <p className="text-base-content/80 mb-6 text-lg">
                {condition.whyRepeatingDoesntWork.description}
              </p>
              <p className="text-base-content/70 mb-4">Instead, this can:</p>
              <ul className="space-y-3 mb-6">
                {condition.whyRepeatingDoesntWork.consequences.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-amber-600 mt-0.5 flex-shrink-0">✕</span>
                    <span className="text-base-content/80">{item}</span>
                  </li>
                ))}
              </ul>
              {condition.whyRepeatingDoesntWork.note && (
                <p className="text-base font-medium text-primary">
                  {condition.whyRepeatingDoesntWork.note}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Regenerative Interpretation */}
        {condition.regenerativeInterpretation && (
          <section className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-6 text-primary">
                {condition.regenerativeInterpretation.title}
              </h2>
              <p className="text-base-content/80 mb-6">
                {condition.regenerativeInterpretation.description}
              </p>
              <ul className="space-y-3 mb-6">
                {condition.regenerativeInterpretation.actions.map((action, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base-content/80">{action}</span>
                  </li>
                ))}
              </ul>
              {condition.regenerativeInterpretation.note && (
                <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4 mb-4">
                  {condition.regenerativeInterpretation.note}
                </p>
              )}
              {condition.regenerativeInterpretation.relatedPage && (
                <Link 
                  to={condition.regenerativeInterpretation.relatedPage.url}
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more: {condition.regenerativeInterpretation.relatedPage.title}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </section>
        )}

        {/* How Addressed */}
        {condition.howAddressed && (
          <section className="py-16 px-4 md:px-8 bg-secondary/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-6 text-primary">
                {condition.howAddressed.title}
              </h2>
              <p className="text-base-content/80 mb-6">
                {condition.howAddressed.description}
              </p>
              <p className="text-base-content/70 mb-4">This may involve exploring:</p>
              <ul className="space-y-3 mb-6">
                {condition.howAddressed.explorations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base-content/80">{item}</span>
                  </li>
                ))}
              </ul>
              {condition.howAddressed.note && (
                <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4 mb-4">
                  {condition.howAddressed.note}
                </p>
              )}
              {condition.howAddressed.relatedPage && (
                <Link 
                  to={condition.howAddressed.relatedPage.url}
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  {condition.howAddressed.relatedPage.title}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </section>
        )}

        {/* When Radiate Is Right */}
        {condition.whenRadiateIsRight && (
          <section className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-6 text-primary">
                {condition.whenRadiateIsRight.title}
              </h2>
              <p className="text-base-content/80 mb-6">
                {condition.whenRadiateIsRight.description}
              </p>
              <ul className="space-y-3 mb-6">
                {condition.whenRadiateIsRight.indicators.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base-content/80">{item}</span>
                  </li>
                ))}
              </ul>
              {condition.whenRadiateIsRight.note && (
                <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                  {condition.whenRadiateIsRight.note}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Consultation Expectations */}
        {condition.consultationExpectations && (
          <section className="py-16 px-4 md:px-8 bg-secondary/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-6 text-primary">
                {condition.consultationExpectations.title}
              </h2>
              <p className="text-base-content/80 mb-6">
                {condition.consultationExpectations.description}
              </p>
              <ul className="space-y-3 mb-6">
                {condition.consultationExpectations.focus.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base-content/80">{item}</span>
                  </li>
                ))}
              </ul>
              {condition.consultationExpectations.note && (
                <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                  {condition.consultationExpectations.note}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Key Principle */}
        {condition.keyPrinciple && (
          <section className="py-16 px-4 md:px-8 bg-primary text-white">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
                {condition.keyPrinciple.text}
              </p>
            </div>
          </section>
        )}

        {/* FAQ */}
        {condition.faq && condition.faq.length > 0 && (
          <section className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif mb-8 text-center text-primary">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {condition.faq.map((item, index) => (
                  <details key={index} className="group bg-white rounded-lg border border-base-200">
                    <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-base-content hover:text-primary transition-colors">
                      {item.question}
                      <span className="ml-4 text-primary group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-base-content/70">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        {condition.cta && (
          <section className="py-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">
                {condition.cta.title}{' '}
                <span className="italic">{condition.cta.highlight}</span>
                {condition.cta.titleSuffix && ` ${condition.cta.titleSuffix}`}
              </h2>
              <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
                {condition.cta.description}
              </p>
              <Link 
                to={condition.cta.buttonLink || "/book-consultation"}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                {condition.cta.buttonText}
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
