/**
 * DRAFT: TreatmentCategory.jsx - Restructured Category Page
 * 
 * This is a draft version that displays treatments for the new 6 functional categories
 * instead of the old "Refresh, Renew, Restore, Radiate" framework.
 * 
 * Changes from original:
 * - Displays treatments directly (no subcategories)
 * - Uses flattened structure from new data file
 * - Updated SEO metadata for new categories
 * - Handles 6 new category slugs
 * - Shows linked conditions for each category
 * - Special rendering for Pelvic & Intimate Regeneration (pathway page)
 */

import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { 
  getTreatmentCategoryById, 
  categorySEO,
  getLinkedConditionsForCategory 
} from './treatments_restructured_draft';
import { ArrowRight, Check, Shield, Heart, ExternalLink } from 'lucide-react';
import HeroText from '../../../../components/animations/HeroText';
import RevealImage from '../../../../components/animations/RevealImage';

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

export default function TreatmentCategoryDraft() {
  const { category: categoryId } = useParams();
  const category = getTreatmentCategoryById(categoryId);
  const linkedConditions = getLinkedConditionsForCategory(categoryId);

  if (!category) {
    return <Navigate to="/treatments" replace />;
  }

  // Check if this is the Pelvic & Intimate Regeneration page (special pathway rendering)
  const isPelvicPathway = categoryId === 'pelvic-intimate-regeneration';

  // Get category-specific SEO or fall back to generic
  const seo = category.seo || categorySEO[categoryId] || {
    title: `${category.title} in Ware SG12 | ULANDA`,
    description: category.subtitle || category.description
  };

  // Filter out null treatments (those that couldn't be resolved from original data)
  const validTreatments = Object.entries(category.treatments || {}).filter(
    ([_, treatment]) => treatment !== null
  );

  // Special rendering for Pelvic & Intimate Regeneration pathway
  if (isPelvicPathway) {
    return (
      <>
        <Head>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <link rel="canonical" href={`https://www.ulanda.co.uk/treatments/${categoryId}`} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:url" content={`https://www.ulanda.co.uk/treatments/${categoryId}`} />
        </Head>

        {/* FAQ Schema */}
        {category.faq && <FAQSchema faq={category.faq} />}

        <div className="bg-base-100 font-sans text-base-content">
          <Breadcrumbs />

          {/* Hero Section */}
          <section className="relative min-h-[50vh] flex items-center bg-secondary">
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-base-content">
              <div className="max-w-4xl">
                <Link 
                  to="/treatments" 
                  className="inline-flex items-center gap-2 text-primary/70 hover:text-primary mb-6 transition-colors text-sm"
                >
                  ← Back to All Treatments
                </Link>
                <div className="inline-block px-2 py-1 mb-6 ml-4 border border-primary/50 rounded-full bg-secondary backdrop-blur-sm text-xs font-bold tracking-widest uppercase text-primary">
                  Radiate Pathway
                </div>
                <h1 className="text-4xl text-primary md:text-6xl font-serif mb-6 leading-tight">
                  <HeroText>{category.title}</HeroText>
                </h1>
                <p className="text md:text-lg font-light text-base-content/80 leading-relaxed max-w-2xl mb-4">
                  <HeroText delay={0.2}>{category.subtitle}</HeroText>
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          {category.introduction && (
            <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {category.introduction.content.map((paragraph, index) => (
                  <p key={index} className="text-base-content/80 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          )}

          {/* What This Pathway Addresses */}
          {category.whatThisPathwayAddresses && (
            <section className="py-16 px-4 md:px-8 bg-secondary/20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-6 text-primary">
                  {category.whatThisPathwayAddresses.title}
                </h2>
                <p className="text-base-content/70 mb-6">
                  {category.whatThisPathwayAddresses.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {category.whatThisPathwayAddresses.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  ))}
                </ul>
                {category.whatThisPathwayAddresses.note && (
                  <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                    {category.whatThisPathwayAddresses.note}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Why Radiate Pathway */}
          {category.whyRadiatePathway && (
            <section className="py-16 px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-6 text-primary">
                  {category.whyRadiatePathway.title}
                </h2>
                <p className="text-base-content/70 mb-6">
                  {category.whyRadiatePathway.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {category.whyRadiatePathway.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  ))}
                </ul>
                {category.whyRadiatePathway.note && (
                  <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                    {category.whyRadiatePathway.note}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Hormonal Context */}
          {category.hormonalContext && (
            <section className="py-16 px-4 md:px-8 bg-secondary/20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-6 text-primary">
                  {category.hormonalContext.title}
                </h2>
                {category.hormonalContext.content.map((paragraph, index) => (
                  <p key={index} className="text-base-content/80 mb-4">
                    {paragraph}
                  </p>
                ))}
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {category.hormonalContext.factors.map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-base-content/70">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {factor}
                    </li>
                  ))}
                </ul>
                {category.hormonalContext.note && (
                  <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4 mb-6">
                    {category.hormonalContext.note}
                  </p>
                )}
                {category.hormonalContext.relatedPages && (
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm text-base-content/60">Related:</span>
                    {category.hormonalContext.relatedPages.map((page, index) => (
                      <Link 
                        key={index}
                        to={page.url}
                        className="text-sm text-primary hover:underline"
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* How Care Is Approached */}
          {category.howCareIsApproached && (
            <section className="py-16 px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-6 text-primary">
                  {category.howCareIsApproached.title}
                </h2>
                <p className="text-base-content/70 mb-6">
                  {category.howCareIsApproached.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {category.howCareIsApproached.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  ))}
                </ul>
                {category.howCareIsApproached.note && (
                  <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                    {category.howCareIsApproached.note}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Modalities */}
          {category.modalities && (
            <section className="py-16 px-4 md:px-8 bg-secondary/20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-2 text-primary">
                  {category.modalities.title}
                </h2>
                {category.modalities.subtitle && (
                  <p className="text-sm text-base-content/60 mb-6">{category.modalities.subtitle}</p>
                )}
                <p className="text-base-content/70 mb-6">
                  {category.modalities.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {category.modalities.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  ))}
                </ul>
                {category.modalities.note && (
                  <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                    {category.modalities.note}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Outcomes */}
          {category.outcomes && (
            <section className="py-16 px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-6 text-primary">
                  {category.outcomes.title}
                </h2>
                <p className="text-base-content/70 mb-6">
                  {category.outcomes.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {category.outcomes.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  ))}
                </ul>
                {category.outcomes.note && (
                  <p className="text-sm text-base-content/60 italic border-l-2 border-primary/30 pl-4">
                    {category.outcomes.note}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Guardrails & Safety */}
          {category.guardrails && (
            <section className="py-16 px-4 md:px-8 bg-amber-50/50">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-serif text-primary">
                    {category.guardrails.title}
                  </h2>
                </div>
                <p className="text-base-content/70 mb-6">
                  {category.guardrails.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {category.guardrails.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 flex items-center justify-center text-amber-600 mt-0.5 flex-shrink-0">✕</span>
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  ))}
                </ul>
                {category.guardrails.note && (
                  <p className="text-sm font-medium text-primary">
                    {category.guardrails.note}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* How This Pathway Is Accessed */}
          {category.access && (
            <section className="py-16 px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-6 text-primary">
                  {category.access.title}
                </h2>
                <p className="text-base-content/80 mb-6 text-lg">
                  {category.access.description}
                </p>
                <p className="text-base-content/70 mb-4">This ensures:</p>
                <ul className="space-y-3 mb-6">
                  {category.access.ensures.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  ))}
                </ul>
                {category.access.relatedPage && (
                  <Link 
                    to={category.access.relatedPage.url}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {category.access.relatedPage.title}
                  </Link>
                )}
              </div>
            </section>
          )}

          {/* Related Pathways */}
          {category.relatedPathways && (
            <section className="py-16 px-4 md:px-8 bg-secondary/20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-6 text-primary">
                  {category.relatedPathways.title}
                </h2>
                <p className="text-base-content/70 mb-6">
                  {category.relatedPathways.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {category.relatedPathways.items.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.url}
                      className="px-4 py-2 bg-white border border-primary/20 rounded-full text-sm text-base-content/80 hover:border-primary hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                {category.relatedPathways.note && (
                  <p className="text-sm text-base-content/60 italic">
                    {category.relatedPathways.note}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* CTA */}
          {category.cta && (
            <section className="py-20 px-4 md:px-8 bg-primary text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                  {category.cta.title}
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  {category.cta.description}
                </p>
                <Link 
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-colors"
                >
                  {category.cta.buttonText}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </section>
          )}

          {/* FAQ */}
          {category.faq && category.faq.length > 0 && (
            <section className="py-16 px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif mb-8 text-center text-primary">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {category.faq.map((item, index) => (
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
        </div>
      </>
    );
  }

  // Standard category rendering (non-pelvic)
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://www.ulanda.co.uk/treatments/${categoryId}`} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={`https://www.ulanda.co.uk/treatments/${categoryId}`} />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center bg-secondary">
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-base-content">
            <div className="max-w-4xl">
              <Link 
                to="/treatments" 
                className="inline-flex items-center gap-2 text-primary/70 hover:text-primary mb-6 transition-colors text-sm"
              >
                ← Back to All Treatments
              </Link>
              <div className="inline-block px-2 py-1 mb-6 ml-4 border border-primary/50 rounded-full bg-secondary backdrop-blur-sm text-xs font-bold tracking-widest uppercase text-primary">
                Treatment Category
              </div>
              <h1 className="text-4xl text-primary md:text-6xl font-serif mb-6 leading-tight">
                <HeroText>{category.title}</HeroText>
              </h1>
              <p className="text md:text-lg font-light text-base-content/80 leading-relaxed max-w-2xl mb-4">
                <HeroText delay={0.2}>{category.subtitle}</HeroText>
              </p>
              {category.description && (
                <p className="text-sm text-base-content/60 leading-relaxed max-w-2xl">
                  {category.description}
                </p>
              )}
              
              {/* 360 Medicx collaboration notice for Wellness category */}
              {category.collaborationPartner && (
                <div className="mt-6 p-4 bg-white/50 rounded-lg border border-primary/20">
                  <p className="text-sm text-base-content/70">
                    Delivered in collaboration with{' '}
                    <a 
                      href={category.collaborationPartner.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      {category.collaborationPartner.name}
                    </a>
                    , {category.collaborationPartner.description}.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Treatments Grid - Direct list (no subcategories) */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center">
            {category.title} Treatments
          </h2>
          
          {validTreatments.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-base-content/60">
                Treatments for this category are coming soon.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {validTreatments.map(([treatmentKey, treatment]) => (
                <Link 
                  key={treatmentKey} 
                  to={`/treatments/${category.id}/${treatmentKey}`} 
                  className="group block h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-base-200">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={treatment.placeholderUrl || treatment.image || category.placeholderUrl || category.image} 
                        alt={treatment.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col items-start">
                      <h3 className="text-lg font-serif mb-2 text-stone-900 group-hover:text-primary transition-colors">
                        {treatment.title} {treatment.highlight && <span className="text-primary italic">{treatment.highlight}</span>}
                      </h3>
                      {treatment.subtitle && (
                        <p className="text-sm text-base-content/70 mb-4 flex-grow font-light leading-relaxed line-clamp-2">
                          {treatment.subtitle}
                        </p>
                      )}
                      {treatment.booking && (
                        <div className="flex items-center gap-4 text-xs text-base-content/60 mb-4 pt-3 border-t border-base-200 w-full">
                          {treatment.booking.duration && (
                            <span>{treatment.booking.duration} mins</span>
                          )}
                          {treatment.booking.price && (
                            <span>{treatment.booking.starting ? 'From ' : ''}£{treatment.booking.price}</span>
                          )}
                        </div>
                      )}
                      <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Learn More <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Linked Conditions Section */}
        {linkedConditions && linkedConditions.length > 0 && (
          <section className="py-16 px-4 md:px-8 bg-secondary/20">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl font-serif mb-8 text-center">
                Conditions We Treat
              </h3>
              <p className="text-center text-base-content/70 mb-8 max-w-2xl mx-auto">
                These treatments are effective for the following conditions:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {linkedConditions.map((condition, index) => (
                  <Link 
                    key={`${condition.id}-${index}`}
                    to={condition.url}
                    className="px-4 py-2 bg-white border border-primary/20 rounded-full text-sm text-base-content/80 hover:border-primary hover:text-primary transition-colors"
                  >
                    {condition.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Categories Section */}
        <section className="py-16 bg-secondary/30 border-t border-base-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h3 className="text-2xl font-serif mb-8 text-center">Explore Other Categories</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/treatments" 
                className="px-6 py-3 border border-primary/30 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                View All Treatments
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
