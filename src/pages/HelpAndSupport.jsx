import React, { useState } from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import faqData from '../data/faqs';
import { HeroText, FadeInWhenVisible } from '../components/animations';

const HelpAndSupport = () => {
  // State to track which question is active in each section
  // key: section key, value: active item index or null
  const [activeItems, setActiveItems] = useState({});

  const toggleItem = (sectionKey, index) => {
    setActiveItems(prev => ({
      ...prev,
      [sectionKey]: prev[sectionKey] === index ? null : index
    }));
  };

  // Generate Schema.org JSON-LD
  const generateSchema = () => {
    const questions = [];
    Object.values(faqData).forEach(section => {
      section.items.forEach(item => {
        questions.push({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        });
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": questions
    };
  };

  return (
    <>
      <Head>
        <title>Help & Support | ULANDA Skin Clinic</title>
        <meta
          name="description"
          content="Frequently asked questions about ULANDA's regenerative aesthetics, menopausal wellness treatments, safety protocols and booking process."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/help-and-support" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Help & Support | ULANDA" />
        <meta name="twitter:description" content="Frequently asked questions about ULANDA's regenerative aesthetics and menopausal wellness treatments." />
        <script type="application/ld+json">
          {JSON.stringify(generateSchema())}
        </script>
      </Head>

      <div className="bg-base-100 pb-20 pt-32">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
                <HeroText>
                    <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg opacity-80 max-w-2xl mx-auto mb-10">
                        Everything you need to know about our regenerative approach, treatments, and clinic policies.
                    </p>
                </HeroText>

                {/* Quick Navigation */}
                <FadeInWhenVisible delay={0.2} className="flex flex-wrap gap-3 justify-center">
                    {Object.entries(faqData).map(([key, section]) => (
                        <a
                            key={key}
                            href={`#${key}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(key);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="btn btn-sm btn-outline border-zinc-200 text-zinc-600 hover:border-primary hover:bg-primary hover:text-white rounded-full normal-case font-medium"
                        >
                            {section.title}
                        </a>
                    ))}
                </FadeInWhenVisible>
            </div>

            <div className="space-y-12">
                {Object.entries(faqData).map(([key, section], index) => (
                    <FadeInWhenVisible key={key} delay={index * 0.1}>
                        <div 
                            id={key}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100 scroll-mt-32"
                        >
                            <h2 className="text-2xl font-sans font-medium text-primary mb-6 border-b border-stone-100 pb-4">
                                {section.title}
                            </h2>
                            
                            <div className="space-y-4">
                                {section.items.map((item, itemIndex) => {
                                    const isOpen = activeItems[key] === itemIndex;
                                    return (
                                        <div key={itemIndex} className="border border-stone-100 rounded-lg overflow-hidden">
                                            <button
                                                onClick={() => toggleItem(key, itemIndex)}
                                                className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-stone-50 transition-colors"
                                                aria-expanded={isOpen}
                                            >
                                                <span className="font-medium text-lg pr-4">{item.question}</span>
                                                <span className={`transform transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : ''}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </span>
                                            </button>
                                            
                                            <div 
                                                className={`transition-all duration-300 ease-in-out overflow-hidden bg-stone-50/50 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <div className="p-6 pt-2 text-gray-600 leading-relaxed">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>

            <FadeInWhenVisible className="mt-16 text-center bg-primary/5 rounded-2xl p-8 md:p-12">
                <h3 className="text-3xl md:text-5xl text-primary font-serif mb-4">Still have questions?</h3>
                <p className="mb-8 opacity-80">We're here to help guide you on your wellness journey.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/book-consultation" className="btn btn-primary px-8">
                        Book Skin Health Consultation
                    </Link>
                    <Link to="/contact" className="btn btn-outline px-8 border-primary text-primary hover:bg-primary hover:text-white">
                        Contact Us
                    </Link>
                </div>
            </FadeInWhenVisible>
        </div>
      </div>
    </>
  );
};

export default HelpAndSupport;
