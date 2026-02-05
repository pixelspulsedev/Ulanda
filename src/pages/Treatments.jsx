import React, { useState, useMemo } from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getAllTreatments, treatmentsPageData } from '../data/pageContents/treatments/treatments';
import { ArrowRight, Search, X } from 'lucide-react';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';

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
          const matchesSearch = 
            treatment.title?.toLowerCase().includes(query) ||
            treatment.subtitle?.toLowerCase().includes(query) ||
            treatment.description?.toLowerCase().includes(query) ||
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
          const matchesSearch = 
            treatment.title?.toLowerCase().includes(query) ||
            treatment.subtitle?.toLowerCase().includes(query) ||
            treatment.description?.toLowerCase().includes(query) ||
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
          content="Explore ULANDA's regenerative treatments in Ware SG12, Hertfordshire. Four pathways — Refresh, Renew, Restore, Radiate — designed for midlife skin regeneration and wellness."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Regenerative Treatments in Ware SG12 | ULANDA" />
        <meta name="twitter:description" content="Explore ULANDA's regenerative treatments. Four pathways — Refresh, Renew, Restore, Radiate — designed for midlife skin regeneration." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/treatments/treatments-hero.webp" />
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
            </div>
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
      </div>
    </>
  );
}
