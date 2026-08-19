import React, { useState, useMemo } from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getAllTreatments, treatmentsPageData } from '../data/pageContents/treatments/treatments';
import { ArrowRight, Search, X } from 'lucide-react';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import ConsultationCTA from '../components/ConsultationCTA';
import { BreadcrumbSchema } from '../components/Schema';

export default function Treatments() {
  const treatments = getAllTreatments();
  const treatmentList = Object.values(treatments);
  const [searchQuery, setSearchQuery] = useState('');

  // Get search results as individual treatments
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    const results = [];

    treatmentList.forEach(category => {
      Object.entries(category.subCategories || {}).forEach(([subKey, subCategory]) => {
        Object.entries(subCategory.treatments || {}).forEach(([treatmentKey, treatment]) => {
          let description = treatment.description || '';
          if (Array.isArray(description)) {
            description = description.join(' ');
          }
          
          const matchesSearch = 
            treatment.title?.toLowerCase().includes(query) ||
            treatment.subtitle?.toLowerCase().includes(query) ||
            description.toLowerCase().includes(query) ||
            category.title?.toLowerCase().includes(query) ||
            subCategory.title?.toLowerCase().includes(query);

          if (matchesSearch) {
            results.push({
              ...treatment,
              categoryId: category.id,
              categoryTitle: category.title,
              subCategoryTitle: subCategory.title,
              subCategoryKey: subKey,
              treatmentKey: treatmentKey
            });
          }
        });
      });
    });

    return results;
  }, [searchQuery, treatmentList]);

  // Filter treatments based on search
  const filteredTreatments = useMemo(() => {
    if (!searchQuery.trim()) {
      return treatmentList;
    }

    const query = searchQuery.toLowerCase();
    
    // Filter categories and their treatments
    return treatmentList.map(category => {
      const filteredSubCategories = {};
      let hasMatches = false;

      Object.entries(category.subCategories || {}).forEach(([subKey, subCategory]) => {
        const filteredTreatments = {};
        
        Object.entries(subCategory.treatments || {}).forEach(([treatmentKey, treatment]) => {
          let description = treatment.description || '';
          if (Array.isArray(description)) {
            description = description.join(' ');
          }

          const matchesSearch = 
            treatment.title?.toLowerCase().includes(query) ||
            treatment.subtitle?.toLowerCase().includes(query) ||
            description.toLowerCase().includes(query) ||
            category.title?.toLowerCase().includes(query) ||
            subCategory.title?.toLowerCase().includes(query);

          if (matchesSearch) {
            filteredTreatments[treatmentKey] = treatment;
            hasMatches = true;
          }
        });

        if (Object.keys(filteredTreatments).length > 0) {
          filteredSubCategories[subKey] = {
            ...subCategory,
            treatments: filteredTreatments
          };
        }
      });

      return {
        ...category,
        subCategories: filteredSubCategories,
        hasMatches
      };
    }).filter(category => category.hasMatches);
  }, [searchQuery, treatmentList]);

  return (
    <>
      <Head>
        <title>Regenerative Treatments in Ware SG12 | ULANDA</title>
        <meta
          name="description"
          content="Regenerative treatments in Ware, Hertfordshire. Four pathways — Refresh, Renew, Restore, Radiate — for midlife skin regeneration and wellness."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Regenerative Treatments in Ware SG12 | ULANDA" />
        <meta name="twitter:description" content="Explore ULANDA's regenerative treatments. Four pathways — Refresh, Renew, Restore, Radiate — designed for midlife skin regeneration." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/treatments/treatments-hero.webp" />
        <meta property="og:title" content="Regenerative Treatments in Ware SG12 | ULANDA" />
        <meta property="og:description" content="Regenerative treatments in Ware, Hertfordshire. Four pathways — Refresh, Renew, Restore, Radiate — for midlife skin regeneration and wellness." />
        <meta property="og:url" content="https://www.ulanda.co.uk/treatments" />
        <meta property="og:image" content="https://www.ulanda.co.uk/assets/img/treatments/treatments-hero.webp" />
      </Head>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Treatments', url: '/treatments' }]} />

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] w-full flex items-center justify-center bg-secondary">
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
                  Every ULANDA treatment fits into one of four categories:
                  Refresh, Renew, Restore, and Radiate.
                </p>
                </HeroText>
                <HeroText delay={0.3}>
                <p>
                  Designed to help you understand what your skin and body truly need.
                </p>
                </HeroText>
              </div>
              <FadeInWhenVisible delay={0.5}>
                <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white mt-8">
                  Book Advanced Skin Health Consultation
                </a>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* How We Decide Whether This Treatment Is Right For You */}
        <section className="py-20 px-4 md:px-8 bg-base-100">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-base-content">
                How We Decide Whether This Treatment Is{' '}
                <span className="italic font-light text-primary">Right For You</span>
              </h2>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-4">
                Choosing the right treatment is not simply about selecting a popular procedure.
              </p>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-4">
                It is about understanding whether it is the right treatment for your skin, at the right time, and for the outcome you are hoping to achieve.
              </p>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-6">
                At ULANDA, every recommendation follows our Understanding Before Treatment&trade; philosophy.
              </p>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-4">
                Rather than treating every concern in the same way, we consider how your skin is behaving today, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Skin barrier health',
                  'Hydration and skin quality',
                  'Inflammation and sensitivity',
                  'Hormonal influences',
                  'Tissue readiness',
                  'Your longer-term skin health goals'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base-content/70 font-light">
                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-4">
                Some treatments are suitable for direct booking because they can be safely assessed at the start of your appointment.
              </p>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-4">
                Others are best introduced following consultation, where they can be incorporated into a personalised regenerative treatment plan.
              </p>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-8">
                Before treatment begins, we carry out a Barrier &amp; Skin Readiness Assessment to help ensure your skin is ready to respond well and that today&apos;s treatment is the most appropriate choice. Learn how care is decided within{' '}
                <Link to="/clinical-system" className="text-primary hover:underline">
                  The ULANDA Clinical System&trade;
                </Link>
                .
              </p>

              <div className="bg-secondary border border-base-200 rounded-xl p-6 md:p-8 mb-8">
                <h3 className="text-xl font-serif text-primary mb-4">Helen&apos;s Clinical Reflection</h3>
                <p className="text-base-content/80 font-light leading-relaxed mb-3">
                  &quot;One of the most common misconceptions is that the newest or most popular treatment is automatically the best one.
                </p>
                <p className="text-base-content/80 font-light leading-relaxed mb-3">
                  In reality, the best results usually come from choosing the right treatment at the right stage of your skin journey.
                </p>
                <p className="text-base-content/80 font-light leading-relaxed mb-3">
                  Sometimes that confirms your original choice. Sometimes it leads us in a different direction - and that is often where the best long-term outcomes begin.&quot;
                </p>
                <p className="text-sm text-base-content/70">- Helen Balogun, Clinical Director</p>
              </div>

              <h3 className="text-2xl font-serif mb-4 text-base-content">What this means for you</h3>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-3">
                You do not need to know whether this treatment is the right choice. That is our responsibility.
              </p>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-3">
                Our role is to assess your skin, explain our findings and recommend the treatment, or combination of treatments, that best supports your skin today and your long-term goals.
              </p>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-3">
                If today&apos;s treatment is appropriate, we will explain why. If another approach would be more beneficial, we will explain that too.
              </p>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-3">
                Either way, you will understand the reasoning behind every recommendation.
              </p>
              <p className="text-lg text-primary font-serif italic">
                The right treatment at the wrong time can produce disappointing results. The right treatment at the right time can make all the difference.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-12 bg-base-200/50 border-b border-base-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for treatments..."
                  className="w-full pl-12 pr-12 py-4 text-base bg-white border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/40 hover:text-base-content transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-3 text-sm text-base-content/60 text-center">
                  {searchResults.length === 0 
                    ? 'No treatments found matching your search'
                    : `Found ${searchResults.length} ${searchResults.length === 1 ? 'treatment' : 'treatments'}`
                  }
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Search Results List */}
        {searchQuery && searchResults.length > 0 && (
          <section className="py-16 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="text-2xl md:text-3xl font-serif mb-8">Search Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((treatment, index) => (
                  <Link
                    key={`${treatment.categoryId}-${treatment.treatmentKey}-${index}`}
                    to={`/treatments/${treatment.categoryId}/${treatment.subCategoryKey}/${treatment.treatmentKey}`}
                    className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-base-200"
                  >
                    {treatment.image && (
                      <div className="aspect-[4/3] overflow-hidden bg-base-200">
                        <img
                          src={treatment.placeholderUrl || treatment.image}
                          alt={treatment.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-xs text-base-content/60">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded">{treatment.categoryTitle}</span>
                        <span>•</span>
                        <span>{treatment.subCategoryTitle}</span>
                      </div>
                      <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                        {treatment.title}
                      </h3>
                      {treatment.subtitle && (
                        <p className="text-sm text-base-content/70 mb-3">
                          {treatment.subtitle}
                        </p>
                      )}
                      {treatment.booking && (
                        <div className="flex items-center gap-4 text-sm text-base-content/60 mt-4 pt-4 border-t border-base-200">
                          {treatment.booking.duration && (
                            <span>{treatment.booking.duration} mins</span>
                          )}
                          {treatment.booking.price && (
                            <span>£{treatment.booking.price}</span>
                          )}
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-3 transition-all">
                        Learn more
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Dynamic Treatment Categories Sections */}
        {!searchQuery && treatmentList.map((category, index) => (
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
        <ConsultationCTA />
      </div>
    </>
  );
}
