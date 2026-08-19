import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { getPublishedJournals } from '../data/pageContents/journal/journalArticles';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import RevealImage from '../components/animations/RevealImage';
import ConsultationCTA from '../components/ConsultationCTA';
import { BreadcrumbSchema } from '../components/Schema';

export default function JournalLanding() {
  const articles = getPublishedJournals();

  return (
    <div>
      <Head>
        <title>Authority Journal | ULANDA — Clinical Skin Science</title>
        <meta name="description" content="ULANDA Authority Journal — clinical insights on skin barrier science, regenerative aesthetics, inflammation, pigmentation and hormone-aware skincare from Ware, Hertfordshire." />
        <link rel="canonical" href="https://www.ulanda.co.uk/journal" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Authority Journal | ULANDA — Clinical Skin Science" />
        <meta name="twitter:description" content="Clinical insights on skin barrier science, regenerative aesthetics and hormone-aware skincare." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
        <meta property="og:title" content="Authority Journal | ULANDA — Clinical Skin Science" />
        <meta property="og:description" content="ULANDA Authority Journal — clinical insights on skin barrier science, regenerative aesthetics, inflammation, pigmentation and hormone-aware skincare from Ware, Hertfordshire." />
        <meta property="og:url" content="https://www.ulanda.co.uk/journal" />
        <meta property="og:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Journal", url: "/journal" }
      ]} />

      <div className="bg-[#FAF9F6] min-h-screen">
        {/* Hero Section */}
        <section className="relative pb-8 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto z-10 relative">
            <Breadcrumbs />
            <div className="mt- max-w-4xl">
              <h1 className="font-serif text-5xl md:text-7xl text-gray-900 mb-6">
                <HeroText>Authority Journal</HeroText>
              </h1>
              <FadeInWhenVisible>
                <p className="text-3xl font-serif font-medium leading-relaxed max-w-4xl">
                  <span className="italic text-primary">Clinical</span> insights into skin barrier science, regenerative aesthetics and the biology of lasting transformation.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <p className="text-lg text-base-content/70 font-light mt-6 max-w-2xl">
                  Written by Helen Balogun, Advanced Nurse Practitioner & Nurse Independent Prescriber — ULANDA, Ware SG12, Hertfordshire.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {articles.map((article, index) => (
                <FadeInWhenVisible key={article.id} delay={index * 0.1}>
                  <Link to={`/journal/${article.id}`} className="group block h-full">
                    <article className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                        {article.image ? (
                          <RevealImage className="w-full h-full">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </RevealImage>
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                            No Image
                          </div>
                        )}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider uppercase text-gray-900 rounded-full">
                          Clinical Journal
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                          <time dateTime={article.date}>{article.date}</time>
                          {article.readTime && (
                            <>
                              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span>{article.readTime}</span>
                            </>
                          )}
                        </div>

                        <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                          {article.subtitle}
                        </p>

                        <div className="flex items-center text-primary font-medium group/btn">
                          <span className="mr-2 group-hover/btn:mr-3 transition-all">Read Article</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 flex justify-center bg-secondary/10 border-t border-primary/5">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-serif text-primary mb-4">
              Questions about your skin?
            </h2>
            <p className="mb-8 font-light text-base-content/80 text-lg">
              Book a Advanced Skin Health Consultation with our Advanced Nurse Practitioner to discuss a personalised clinical plan.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white px-8">
                Book Advanced Skin Health Consultation
              </a>
            </div>
            <p className="mt-6 text-sm text-base-content/70">
              Learn how every recommendation is made within{' '}
              <Link to="/clinical-system" className="text-primary hover:underline font-medium">
                The ULANDA Clinical System™
              </Link>
              .
            </p>
          </div>
        </section>
        <ConsultationCTA />
      </div>
    </div>
  );
}
