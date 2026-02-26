import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * RelatedSignatures — reusable cross-link component
 * Renders cards linking to Signature pathway pages.
 * Used on Journal pages for forward linking to signatures.
 */
export default function RelatedSignatures({
  signatures,
  title = "Related Signatures",
  subtitle = "Explore the structured regenerative pathways related to this topic.",
  className = ""
}) {
  if (!signatures || signatures.length === 0) return null;

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
        {signatures.map((signatureSlug) => (
          <Link
            key={signatureSlug}
            to={`/signature/${signatureSlug}`}
            className="group block p-6 bg-base-100 border border-base-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-sans font-medium text-primary capitalize group-hover:text-primary-focus transition-colors">
                {signatureSlug.replace(/-/g, ' ')}
              </h3>
              <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
