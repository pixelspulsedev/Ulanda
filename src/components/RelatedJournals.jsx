import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getJournalUrl } from '../data/crosslinks';

/**
 * RelatedJournals — reusable cross-link component
 * Renders cards linking to Authority Journal articles.
 * Used on Condition, Treatment and Signature pages for bidirectional linking.
 */
export default function RelatedJournals({
  journals,
  title = "Clinical Insight",
  subtitle = "Evidence-based clinical context from the ULANDA Authority Journal.",
  className = ""
}) {
  if (!journals || journals.length === 0) return null;

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
        {journals.map((article) => {
          const slug = typeof article === 'string' ? article : article.id;
          const displayTitle = typeof article === 'object' ? article.title : slug.replace(/-/g, ' ');
          const displaySubtitle = typeof article === 'object' ? article.subtitle : null;
          const displayDate = typeof article === 'object' ? article.date : null;
          const displayReadTime = typeof article === 'object' ? article.readTime : null;

          return (
            <Link
              key={slug}
              to={getJournalUrl(slug)}
              className="group block p-6 bg-base-100 border border-base-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-sans font-medium text-primary capitalize group-hover:text-primary-focus transition-colors">
                  {displayTitle}
                </h3>
                <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              {displaySubtitle && (
                <p className="text-sm font-sans text-base-content/70 leading-relaxed mb-3">
                  {displaySubtitle}
                </p>
              )}
              {(displayDate || displayReadTime) && (
                <div className="flex items-center gap-3 text-xs text-base-content/50">
                  {displayDate && <span>{displayDate}</span>}
                  {displayDate && displayReadTime && <span>•</span>}
                  {displayReadTime && <span>{displayReadTime}</span>}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
