/**
 * DRAFT: Treatments.jsx - Restructured Treatment Menu Hub
 *
 * This is a draft version that displays the 6 new functional categories
 * instead of the old "Refresh, Renew, Restore, Radiate" framework.
 *
 * Changes from original:
 * - Displays 6 categories (not 4 pathways)
 * - Filters out hidden "Pelvic & Intimate Regeneration" category
 * - Updated hero text and descriptions
 * - Uses flattened treatment structure for search
 */

import React, { useState, useMemo } from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import {
  getVisibleTreatmentCategories,
  treatmentsPageDataDraft,
  treatmentCategories,
} from './treatments_restructured_draft';
import { ArrowRight, Search, X } from 'lucide-react';
import HeroText from '../../../../components/animations/HeroText';
import RevealImage from '../../../../components/animations/RevealImage';

export default function TreatmentsDraft() {
  const categories = getVisibleTreatmentCategories();
  const [searchQuery, setSearchQuery] = useState('');

  // Get search results as individual treatments (flattened structure)
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    const results = [];

    categories.forEach((category) => {
      Object.entries(category.treatments || {}).forEach(
        ([treatmentKey, treatment]) => {
          if (!treatment) return; // Skip null treatments

          const matchesSearch =
            treatment.title?.toLowerCase().includes(query) ||
            treatment.subtitle?.toLowerCase().includes(query) ||
            treatment.description?.toLowerCase().includes(query) ||
            category.title?.toLowerCase().includes(query);

          if (matchesSearch) {
            results.push({
              ...treatment,
              categoryId: category.id,
              categoryTitle: category.title,
              treatmentKey: treatmentKey,
            });
          }
        },
      );
    });

    return results;
  }, [searchQuery, categories]);

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categories;
    }

    const query = searchQuery.toLowerCase();

    return categories
      .map((category) => {
        const filteredTreatments = {};
        let hasMatches = false;

        Object.entries(category.treatments || {}).forEach(
          ([treatmentKey, treatment]) => {
            if (!treatment) return; // Skip null treatments

            const matchesSearch =
              treatment.title?.toLowerCase().includes(query) ||
              treatment.subtitle?.toLowerCase().includes(query) ||
              treatment.description?.toLowerCase().includes(query) ||
              category.title?.toLowerCase().includes(query);

            if (matchesSearch) {
              filteredTreatments[treatmentKey] = treatment;
              hasMatches = true;
            }
          },
        );

        return {
          ...category,
          treatments: filteredTreatments,
          hasMatches,
        };
      })
      .filter((category) => category.hasMatches);
  }, [searchQuery, categories]);

  return (
    <>
      <Head>
        <title>Regenerative Treatments in Ware SG12 | ULANDA</title>
        <meta
          name="description"
          content="Explore ULANDA's regenerative treatments in Ware SG12, Hertfordshire. Clinician-led aesthetic care organised into six functional categories for skin, body and wellness."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments" />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section - Updated messaging */}
        <section className="relative min-h-[85vh] w-full flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <img
              src={
                treatmentsPageDataDraft.hero.placeholderUrl ||
                treatmentsPageDataDraft.hero.image
              }
              alt={treatmentsPageDataDraft.hero.title}
              className="w-full h-full object-cover brightness-75"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content - Updated copy */}
          <div className="w-full relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                <HeroText>Treatments</HeroText>
              </h1>
              <p className="text-lg md:text-xl font-light text-white/90 mb-8">
                {/* <HeroText delay={0.1}>
                  Clinician-led regenerative aesthetic care
                </HeroText> */}
                <div className="space-y-4 text-white/90 leading-relaxed text-left">
                  <p>
                    ULANDA is a private skin care and aesthetic clinic in Ware,
                    Hertfordshire, operating within a clinically sequenced
                    regenerative model.
                  </p>
                  <p>
                    All treatments are delivered by an Advanced Nurse
                    Practitioner, by appointment only, and are selected based on
                    skin biology, tissue readiness and hormonal context — not
                    trends or walk-in demand.
                  </p>
                  <p className="font-medium text-white/90">
                    This is not a high-street aesthetics menu.
                    <br />
                    It is a clinically governed treatment system.
                  </p>
                  <p>
                    Treatments are accessed clinically and may be sequenced as
                    part of structured care. Not all treatments are appropriate
                    for all clients at all times.
                  </p>
                </div>
              </p>
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
                    : `Found ${searchResults.length} ${searchResults.length === 1 ? 'treatment' : 'treatments'}`}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Search Results List */}
        {searchQuery && searchResults.length > 0 && (
          <section className="py-16 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="text-2xl md:text-3xl font-serif mb-8">
                Search Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((treatment, index) => (
                  <Link
                    key={`${treatment.categoryId}-${treatment.treatmentKey}-${index}`}
                    to={`/treatments-draft/${treatment.categoryId}/${treatment.treatmentKey}`}
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
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                          {treatment.categoryTitle}
                        </span>
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

        {/* Category Grid - New 6-category layout */}
        {!searchQuery && (
          <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Clinical Description Section */}
            <div className="max-w-4xl mx-auto mb-16 text-center"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/treatments-draft/${category.id}`}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-base-200">
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={category.placeholderUrl || category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col items-start">
                      <h3 className="text-xl font-serif mb-2 text-stone-900 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-base-content/70 mb-4 flex-grow font-light leading-relaxed">
                        {category.subtitle}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                        View Treatments <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Clinical Footer Note */}
        {!searchQuery && (
          <section className="py-16 bg-secondary/30 border-t border-base-200">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
              <p className="text-base-content/70 font-light leading-relaxed italic">
                Clinical note: Not all treatments are suitable for direct
                booking. Some treatments require prior assessment or preparatory
                care.
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
