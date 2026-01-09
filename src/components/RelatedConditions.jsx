import React from 'react';
import { Link } from 'react-router-dom';
import { getConditionUrl } from '../data/crosslinks';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function RelatedConditions({
  conditions,
  title = 'Related Conditions',
  subtitle = 'Based on your interest, we recommend the following conditions.',
  className = '',
}) {
  if (!conditions || conditions.length === 0) return null;

  // Helper to formatting title with italic last word if needed, or just standard text
  // The original design had "Addresses <span class='italic'>Conditions</span>"
  // We can try to preserve that logic if a string is passed, or just render the string.
  // For simplicity and reusability, let's assume the caller passes a string and we style the last word,
  // or we can make it more robust.
  // Let's copy the RelatedTreatments logic: split spaces, make last word italic/primary.

  return (
    <section className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">
          {title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="italic font-light text-primary">
            {title.split(' ').slice(-1)}
          </span>
        </h2>
        {subtitle && (
          <p className="text-lg text-base-content/80 font-sans max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conditions.map((conditionSlug) => (
          <Link
            key={conditionSlug}
            to={getConditionUrl(conditionSlug)}
            className="group block p-6 bg-base-100 border border-base-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-sans font-medium  text-primary capitalize group-hover:text-primary-focus transition-colors">
                {conditionSlug.replace(/-/g, ' ')}
              </h3>
              <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* <span className="flex items-center text-sm font-sans text-base-content/60 uppercase tracking-wide group-hover:text-primary transition-colors gap-2">
              View Condition <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </span> */}
          </Link>
        ))}
      </div>
    </section>
  );
}
