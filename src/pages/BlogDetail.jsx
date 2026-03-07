import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBlog } from '../data/pageContents/blogs/blogs';
import { getTreatmentsForCondition } from '../data/crosslinks'; // repurpose or create new
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import RelatedTreatments from '../components/RelatedTreatments';
import { Crown, Check, X, Bookmark, ExternalLink } from 'lucide-react';
import { getTreatmentById } from '../data/pageContents/treatments/treatments';

const BlogContent = ({ content }) => {
  if (!content) return null;

  if (typeof content === 'string') {
    return (
      <p className="mb-4 text-base-content/80 font-sans font-light leading-relaxed whitespace-pre-wrap">
        {content}
      </p>
    );
  }

  // Handle structural elements
  switch (content.type) {
    case 'section':
      return (
        <div className="mb-12">
          {content.title && (
            <h2 className="text-3xl font-serif text-base-content mb-4 mt-8 flex items-center gap-3">
              {/* <Crown className="w-6 h-6 text-primary hidden md:block" /> */}
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
              <BlogContent key={index} content={item} />
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
              <BlogContent key={index} content={item} />
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
                {content.style === 'dict' && typeof item === 'object' && item.label ? (
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
          {content.content && <BlogContent content={content.content} />}
        </div>
      );

    case 'treatment_highlight':
      return (
        <div className="bg-base-100 p-6 rounded-lg my-6 shadow-sm border border-base-200">
          <h4 className="text-xl font-serif text-primary mb-2">
            {content.title}
          </h4>
          {content.subtitle && (
            <p className="text-sm font-sans text-base-content/70 mb-4">
              {content.subtitle}
            </p>
          )}

          {content.items && (
            <ul className="mb-4 space-y-2">
              {content.items.map((it, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-base-content/80 font-light"
                >
                  <span className="text-primary mt-1.5 text-xs">●</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          )}

          {content.note && (
            <div className="text-sm text-base-content/70 italic border-l-2 border-primary pl-3 mt-4">
              {content.note}
            </div>
          )}

          {content.reference && (
            <div className="mt-4 text-xs text-base-content/50 flex items-center gap-1">
              <Bookmark className="w-3 h-3" />
              {content.reference}
            </div>
          )}
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
                    <th
                      key={index}
                      className="normal-case text-sm font-semibold"
                    >
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

export default function BlogDetail() {
  const { id: rawId } = useParams();
  const id = rawId?.toLowerCase();
  const blog = getBlog(id);

  if (!blog) {
    return <div className="text-center py-20">Blog post not found</div>;
  }

  // Handle multiple images
  const displayImages = blog.images && blog.images.length > 0 
    ? blog.images 
    : (blog.heroImage ? [blog.heroImage] : []);
  
  const heroImage = displayImages[0];
  const contentImages = displayImages.slice(1);

  // Resolve related treatments
  const relatedTreatments = blog.relatedTreatments
    ? blog.relatedTreatments.map((tid) => getTreatmentById(tid)).filter(Boolean)
    : [];

  return (
    <>
      <Head>
        <title>{blog.seo?.title || blog.title} | ULANDA Journal</title>
        <meta name="description" content={blog.seo?.description || blog.subtitle} />
        <link rel="canonical" href={`https://www.ulanda.co.uk/blogs/${blog.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} | ULANDA`} />
        <meta name="twitter:description" content={blog.subtitle} />
        <meta name="twitter:image" content={blog.heroImage || "https://www.ulanda.co.uk/assets/img/ui/Logo.webp"} />
      </Head>

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="pb-6 pt-4 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-start gap-4 md:gap-4">
            {/* Text Content */}
            <div className="flex-1">
              <div className="hidden md:inline-block text-primary px-4 py-1 mb-8 border border-primary/30 rounded-full bg-secondary/30">
                Blog
              </div>
              <h1 className="text-3xl w-full md:text-5xl font-serif leading-tight mb-2 text-[#2A2A2A]">
                <HeroText className="w-full">{blog.title}</HeroText>
              </h1>

              <div className="text-lg font-sans font-light text-base-content/80 mb-2 leading-relaxed italic">
                <HeroText delay={0.2}>{blog.subtitle}</HeroText>
              </div>

              <div className="flex items-center gap-4 text-sm text-base-content/60">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 relative w-full flex justify-center md:justify-end">
              {heroImage && (
                <RevealImage delay={0.2} className="w-full h-full">
                  <img
                    src={heroImage}
                    alt={blog.title}
                    className="aspect-video w-full h-full object-cover"
                  />
                </RevealImage>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-6 px-4 md:px-8 max-w-5xl mx-auto">
          {blog.content.map((item, index) => (
            <div key={index}>
              <FadeInWhenVisible delay={index * 0.05} threshold={0.1}>
                <BlogContent content={item} />
              </FadeInWhenVisible>
              
              {/* Interleaved Image */}
              {contentImages[index] && (
                <FadeInWhenVisible delay={0.2} threshold={0.1}>
                   <div className="my-12 w-full">
                       <RevealImage className="w-full">
                           <img
                             src={contentImages[index]}
                             alt={`Illustration`}
                             className="w-full h-auto object-cover rounded-xl shadow-sm"
                           />
                       </RevealImage>
                   </div>
                </FadeInWhenVisible>
              )}
            </div>
          ))}
        </section>

        {/* Related Treatments */}
        {relatedTreatments.length > 0 && (
          <RelatedTreatments
            treatments={relatedTreatments}
            title="Mentioned Treatments"
            subtitle="Explore the treatments discussed in this article"
          />
        )}

        {/* FAQs Section */}
        {blog.faqs && blog.faqs.length > 0 && (
          <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
            <FadeInWhenVisible threshold={0.1}>
              <h2 className="text-3xl font-serif text-base-content mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {blog.faqs.map((faq, index) => (
                  <div key={index} className="collapse collapse-arrow bg-secondary/30 border border-primary/10 rounded-lg">
                    <input type="radio" name={`blog-faq-${blog.id}`} defaultChecked={index === 0} />
                    <div className="collapse-title text-lg font-medium font-sans text-base-content">
                      {faq.question}
                    </div>
                    <div className="collapse-content">
                      <p className="text-base-content/80 font-light leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": blog.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}} />
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 flex justify-center bg-secondary/10 mt-12 border-t border-primary/5">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-serif text-primary mb-4">
              Ready to restore your skin?
            </h2>
            <p className="mb-8 font-light text-base-content/80 text-lg">
              Book a consultation with our specialists at ULANDA to discuss a personalized treatment plan for your skin needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/book-consultation" className="btn btn-primary text-white px-8">
                Book Skin Health Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
