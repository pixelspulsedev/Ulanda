import React, { useState } from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getJournalArticle } from '../data/pageContents/journal/journalArticles';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import RelatedTreatments from '../components/RelatedTreatments';
import RelatedConditions from '../components/RelatedConditions';
import RelatedSignatures from '../components/RelatedSignatures';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '../components/Schema';
import { getTreatmentById } from '../data/pageContents/treatments/treatments';
import { Check, X, Bookmark, ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Reusable article content renderer — mirrors BlogContent from BlogDetail.jsx
 * Renders structured content arrays (section, subsection, list, shoutout, table, etc.)
 */
const ArticleContent = ({ content }) => {
  if (!content) return null;

  if (typeof content === 'string') {
    return (
      <p className="mb-4 text-base-content/80 font-sans font-light leading-relaxed whitespace-pre-wrap">
        {content}
      </p>
    );
  }

  switch (content.type) {
    case 'section':
      return (
        <div className="mb-12">
          {content.title && (
            <h2 className="text-3xl font-serif text-base-content mb-4 mt-8 flex items-center gap-3">
              <span>{content.title}</span>
            </h2>
          )}
          {content.subtitle && (
            <h3 className="text-xl font-sans text-primary mb-6 font-medium italic">
              {content.subtitle}
            </h3>
          )}
          {content.content &&
            content.content.map((item, index) => (
              <ArticleContent key={index} content={item} />
            ))}
        </div>
      );

    case 'subsection':
      return (
        <div className="mb-8 pl-0 md:pl-4">
          <h3 className="text-xl font-medium font-sans text-base-content mb-4">
            {content.title}
          </h3>
          {content.content &&
            content.content.map((item, index) => (
              <ArticleContent key={index} content={item} />
            ))}
        </div>
      );

    case 'list':
      return (
        <ul className="space-y-3 mb-6 my-4">
          {content.items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-base-content/80 font-light"
            >
              {content.style === 'check' && (
                <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
              )}
              {content.style === 'cross' && (
                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
              )}
              {content.style === 'dict' && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              )}
              {content.style !== 'check' && content.style !== 'cross' && content.style !== 'dict' && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              )}
              <span className="leading-relaxed">
                {typeof item === 'object' && item.label && item.link ? (
                  <>
                    <Link to={item.link} className="text-primary hover:underline font-medium">{item.label}</Link>
                    {item.text ? <span className="text-base-content/70"> — {item.text}</span> : null}
                  </>
                ) : content.style === 'dict' && typeof item === 'object' && item.label ? (
                  <>
                    <strong className="text-base-content">{item.label}:</strong> {item.text}
                  </>
                ) : typeof item === 'object' && item.label ? (
                  <>
                    <strong className="text-base-content">{item.label}:</strong> {item.text}
                  </>
                ) : (
                  item
                )}
              </span>
            </li>
          ))}
        </ul>
      );

    case 'shoutout':
      return (
        <div className="bg-secondary/50 p-6 rounded-lg my-6 border border-primary/10">
          {content.title && (
            <h4 className="font-serif text-lg text-primary mb-2">
              {content.title}
            </h4>
          )}
          {content.content && <ArticleContent content={content.content} />}
        </div>
      );

    case 'reference':
      return (
        <div className="text-xs text-base-content/50 my-2 italic flex items-start gap-2 pl-4">
          <Bookmark className="w-3 h-3 mt-0.5 shrink-0" />
          {content.text}
        </div>
      );

    case 'button':
      return (
        <div className="my-8">
          <Link to={content.link} className="btn btn-primary text-white">
            {content.text}
          </Link>
        </div>
      );

    case 'references':
      return (
        <div className="mt-16 pt-8 border-t border-base-200">
          <h3 className="text-lg font-serif text-base-content mb-4 opacity-70">
            {content.title}
          </h3>
          <ul className="space-y-2">
            {content.items.map((item, index) => (
              <li key={index} className="text-xs text-base-content/50 italic">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'paragraph':
      const pText = content.content || content.text;
      return (
        <p className="mb-4 text-base-content/80 font-sans font-light leading-relaxed whitespace-pre-wrap">
          {pText}
        </p>
      );

    case 'heading':
      const HeadingTag = `h${content.level || 2}`;
      const headingClass =
        content.level === 2
          ? 'text-3xl font-serif text-base-content mb-4 mt-8 flex items-center gap-3'
          : 'text-xl font-medium font-sans text-base-content mb-4 mt-6';
      return (
        <HeadingTag className={headingClass}>
          <span>{content.text || content.title}</span>
        </HeadingTag>
      );

    case 'h3':
      return (
        <h3 className="text-xl font-medium font-sans text-base-content mb-4 mt-6">
          {content.content || content.text}
        </h3>
      );

    case 'table':
      return (
        <div className="overflow-x-auto my-8 border border-base-200 rounded-lg">
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200">
                {content.headers &&
                  content.headers.map((header, index) => (
                    <th key={index} className="normal-case text-sm font-semibold">
                      {header}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {content.rows &&
                content.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-t border-base-200">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="align-top py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
};

export default function JournalDetail() {
  const { slug: rawSlug } = useParams();
  const slug = rawSlug?.toLowerCase();
  const article = getJournalArticle(slug);
  const [openFaq, setOpenFaq] = useState(null);

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-serif mb-4">Article not found</h1>
        <Link to="/journal" className="text-primary hover:underline">
          Back to Journal
        </Link>
      </div>
    );
  }

  // Resolve related treatments to full objects where possible
  const relatedTreatments = article.relatedTreatments
    ? article.relatedTreatments.map((tid) => getTreatmentById(tid)).filter(Boolean)
    : [];

  return (
    <>
      <Head>
        <title>{article.seo?.title || `${article.title} | ULANDA Authority Journal`}</title>
        <meta name="description" content={article.seo?.description || article.subtitle} />
        <link rel="canonical" href={article.seo?.canonical || `https://www.ulanda.co.uk/journal/${article.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.seo?.title || article.title} />
        <meta name="twitter:description" content={article.seo?.description || article.subtitle} />
        <meta name="twitter:image" content={article.image ? `https://www.ulanda.co.uk${article.image}` : "https://www.ulanda.co.uk/assets/img/ui/Logo.webp"} />
      </Head>

      {/* Structured Data */}
      <ArticleSchema article={article} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Journal", url: "/journal" },
        { name: article.title, url: `/journal/${article.id}` }
      ]} />
      {article.faqs && <FAQSchema faqs={article.faqs} />}

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="pb-6 pt-4 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-start gap-4 md:gap-4">
            {/* Text Content */}
            <div className="flex-1">
              <div className="hidden md:inline-block text-primary px-4 py-1 mb-8 border border-primary/30 rounded-full bg-secondary/30">
                Journal
              </div>
              <h1 className="text-3xl w-full md:text-5xl font-serif leading-tight mb-2 text-[#2A2A2A]">
                <HeroText className="w-full">{article.title}</HeroText>
              </h1>

              <div className="text-lg font-sans font-light text-base-content/80 mb-2 leading-relaxed italic">
                <HeroText delay={0.2}>{article.subtitle}</HeroText>
              </div>

              <div className="flex items-center gap-4 text-sm text-base-content/60 mb-2">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              {article.author && (
                <div className="text-sm text-primary/70 font-medium">
                  By {article.author}{article.authorCredential ? ` — ${article.authorCredential}` : ''}
                </div>
              )}

              <div className="mt-4">
                <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm text-white">
                  Book Advanced Skin Health Consultation
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 relative w-full flex justify-center md:justify-end">
              {article.image && (
                <RevealImage delay={0.2} className="w-full h-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="aspect-video w-full h-full object-cover"
                    fetchpriority="high"
                  />
                </RevealImage>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-6 px-4 md:px-8 max-w-5xl mx-auto">
          {article.content.map((item, index) => (
            <div key={index}>
              <FadeInWhenVisible delay={index * 0.05} threshold={0.1}>
                <ArticleContent content={item} />
              </FadeInWhenVisible>
            </div>
          ))}
        </section>

        {/* Related Treatments */}
        {relatedTreatments.length > 0 && (
          <RelatedTreatments
            treatments={relatedTreatments}
            title="Mentioned Treatments"
            subtitle="Explore the treatments discussed in this article."
          />
        )}

        {/* Related Conditions */}
        {article.relatedConditions && article.relatedConditions.length > 0 && (
          <RelatedConditions
            conditions={article.relatedConditions}
            title="Related Conditions"
            subtitle="Conditions discussed in this clinical journal article."
          />
        )}

        {/* Related Signatures */}
        {article.relatedSignatures && article.relatedSignatures.length > 0 && (
          <RelatedSignatures
            signatures={article.relatedSignatures}
            title="Related Signatures"
            subtitle="Structured regenerative pathways related to this topic."
          />
        )}

        {/* FAQs — Accordion style */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="text-3xl font-serif mb-10 text-center">
                  Frequently Asked <span className="italic font-light text-primary">Questions</span>
                </h2>
              </FadeInWhenVisible>
              <div className="space-y-3">
                {article.faqs.map((faq, i) => (
                  <FadeInWhenVisible key={i} delay={0.05 * i}>
                    <div className="bg-white border border-secondary/50 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-secondary/20 transition-colors"
                      >
                        <span className="font-serif font-medium text-base md:text-lg text-base-content/90">{faq.question}</span>
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
                        <p className="px-5 md:px-6 pb-5 md:pb-6 text-base-content/70 font-light leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 flex justify-center bg-secondary/10 mt-12 border-t border-primary/5">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-serif text-primary mb-4">
              Ready to restore your skin?
            </h2>
            <p className="mb-8 font-light text-base-content/80 text-lg">
              Book a Advanced Skin Health Consultation with our Advanced Nurse Practitioner to discuss a personalised clinical plan for your skin.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white px-8">
                Book Advanced Skin Health Consultation
              </a>
              <Link to="/journal" className=" text-primary btn bg-transparent border-none shadow-none hover:bg-transparent px-8">
                Back to Journal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
