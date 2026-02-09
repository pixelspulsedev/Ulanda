import React, { useState, useEffect, useRef } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { getTreatment } from '../data/pageContents/treatments/treatments';
import { tools } from '../data/pageContents/tools/tools';
import { getConditionsForTreatment, getConditionUrl } from '../data/crosslinks';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedConditions from '../components/RelatedConditions';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { ServiceSchema } from '../components/Schema';

const SafetyIcon = ({ type }) => {
  switch (type) {
    case 'clinician':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      );
    case 'cqc':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      );
    case 'prescribed':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      );
    default:
      return null;
  }
};

const getBookingButtonLabel = (booking) => {
  if (booking?.bookingType?.toLowerCase().includes('consultation')) {
    return 'Book Consultation';
  }
  return 'Book Now';
};

const Treatment = () => {
  const navigate = useNavigate();
  const { category: rawCategory, subcategory: rawSubcategory, id: rawId } = useParams();
  const category = rawCategory?.toLowerCase();
  const subcategory = rawSubcategory?.toLowerCase();
  const id = rawId?.toLowerCase();

  // Using new call signature: (categoryId, subId, treatmentId)
  const treatment = getTreatment(category, subcategory, id);
  // relatedConditions expects ID, which corresponds to treatmentId
  const relatedConditions = getConditionsForTreatment(id);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        // Show sticky bar when scrolled past roughly the hero section (minus some offset)
        setIsStickyVisible(window.scrollY > heroHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!treatment) {
    // In a real app, you might want to redirect to a 404 page or the treatments list
    return <div className="text-center py-20">Treatment not found</div>;
  }

  // Handle data structure variations (some have nested hero object, some represent hero at root)
  const heroData = treatment.hero || treatment;

  const seoTitle =
    treatment.seo?.title ||
    `Ulanda - ${heroData.title} ${heroData.highlight || ''}`;

  const seoDescription =
    treatment.seo?.description ||
    (typeof heroData.introduction === 'string'
      ? heroData.introduction
      : treatment.description) ||
    '';

  // Canonical URL for the treatment page
  const canonicalUrl = `https://www.ulanda.co.uk/treatments/${category}/${subcategory}/${id}`.toLowerCase();

  const Book = () => {
    const label = treatment.booking ? getBookingButtonLabel(treatment.booking) : 'Book Consultation';
    if (label === 'Book Consultation') {
      navigate('/book-consultation');
    } else {
      window.open('https://ulanda-100633.square.site/', '_blank');
    }
  };

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>
      
      {/* Service Schema for this treatment page */}
      <ServiceSchema 
        treatment={treatment} 
        pathway={category} 
        subcategory={subcategory} 
      />

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        {/* Sticky Booking Details Header */}
        <div
          className={`fixed left-0 w-full bg-base-100/95 backdrop-blur-md z-40 transition-all duration-300 transform 
            bottom-0 border-t border-secondary/20
            md:top-[65px] md:bottom-auto md:border-t-0 md:border-b
            ${
              isStickyVisible
                ? 'translate-y-0 opacity-100 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)] md:shadow-sm'
                : 'translate-y-full opacity-0 pointer-events-none md:-translate-y-full'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-3 flex items-center justify-between">
            <div className="hidden md:block text-lg font-serif text-base-content leading-tight">
              {treatment.title}{' '}
              <span className="italic text-primary">{treatment.highlight}</span>
            </div>

            {treatment.booking && (
              <div className="flex items-center gap-6 ml-auto w-full md:w-auto justify-between md:justify-end">
                {/* Prices and Duration */}
                <div className="flex items-center gap-6 text-sm">
                  {treatment.booking.price && (
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] uppercase tracking-widest opacity-60">
                        Investment
                      </span>
                      <span className="font-serif text-primary text-lg">
                        {treatment.booking.starting && (
                          <span className="text-sm font-sans font-light text-base-content/60 mr-1">
                            From
                          </span>
                        )}
                        £{treatment.booking.price}
                      </span>
                    </div>
                  )}
                  {treatment.booking.duration && (
                    <div className="hidden sm:flex flex-col items-start leading-none border-l border-secondary/30 pl-6">
                      <span className="text-[10px] uppercase tracking-widest opacity-60">
                        Duration
                      </span>
                      <span className="font-medium text-lg">
                        {treatment.booking.duration} min
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
            {treatment.booking ? (
              <button onClick={() => Book()} className="ml-4 btn btn-primary">
                {getBookingButtonLabel(treatment.booking) ||
                  'Book Consultation'}
              </button>
            ) : (
              <button onClick={() => Book()} className="ml-4 btn btn-primary">
                Book Consultation
              </button>
            )}
          </div>
        </div>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-3xl md:text-5xl font-serif text-base-content leading-tight">
              <HeroText>
                {treatment.seoHeadings?.h1 ? (
                  treatment.seoHeadings.h1
                ) : (
                  <>
                    {treatment.title}{' '}
                    <span className="italic text-primary font-serif">
                      {treatment.highlight}
                    </span>{' '}
                    {treatment.titleSuffix}
                  </>
                )}
              </HeroText>
            </div>

            <div className="flex flex-wrap text-base-content/80 text-lg font-light tracking-wide">
              {treatment.benefits?.map((benefit, index) => (
                <span key={index} className="flex items-center">
                  <FadeInWhenVisible delay={index * 0.1}>
                    {benefit}
                    {index < (treatment.benefits?.length || 0) - 1 && (
                      <span className="mx-1">•</span>
                    )}
                  </FadeInWhenVisible>
                </span>
              ))}
            </div>

            <div className="font-extralight text-base-content/60 text-sm">
              <FadeInWhenVisible delay={0.4} className="flex flex-wrap">
                {treatment.locations?.map((loc, index) => (
                  <span key={index} className="flex items-center">
                    {loc}
                    {index < (treatment.locations?.length || 0) - 1 && (
                      <span className="mx-1">•</span>
                    )}
                  </span>
                ))}
              </FadeInWhenVisible>
            </div>

            {/* Booking Details */}
            {treatment.booking && (
              <FadeInWhenVisible delay={0.5}>
                <div className="pt-6 flex flex-wrap justify items-center gap-12 mt-8 border-t border-secondary/50">
                  <div className="flex items-center flex-wrap gap-8">
                    {treatment.booking.price && (
                      <div className="flex items-center flex-col gap-1">
                        <span className="text-xs uppercase tracking-widest text-base-content/60">
                          Price
                        </span>
                        <span className="text-2xl font-serif text-primary">
                          {treatment.booking.starting && (
                            <span className="text-lg font-sans font-light text-base-content/60 mr-1">
                              From
                            </span>
                          )}
                          £{treatment.booking.price}
                        </span>
                      </div>
                    )}
                    {treatment.booking.duration && (
                      <div className="flex items-center flex-col gap-1">
                        <span className="text-xs uppercase tracking-widest text-base-content/60">
                          Duration
                        </span>
                        <span className="text-2xl font-serif text-base-content">
                          {treatment.booking.duration} min
                        </span>
                      </div>
                    )}
                    {/* {treatment.booking.bookingType && (
                      <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-widest text-base-content/60">
                          Session Type
                        </span>
                        <span className="text-2xl font-serif text-base-content capitalize">
                          {treatment.booking.bookingType}
                        </span>
                      </div>
                    )} */}
                  </div>

                  <button
                    onClick={() => Book()}
                    className="btn btn-primary text-white rounded-sm px-10 py-3 h-auto text-lg font-light tracking-wide hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {getBookingButtonLabel(treatment.booking)}
                  </button>
                </div>
              </FadeInWhenVisible>
            )}
          </div>

          {/* Right Image */}
          <div className="relative mt-8 md:mt-0 flex justify-center">
            <div className="absolute bottom-10 right-0 md:-right-2 w-3/4 h-full">
              <RevealImage className="w-full h-full">
                <img
                  src="/assets/img/ui/accent.webp"
                  alt="Decorative shadow"
                  className="w-full h-full object-cover"
                />
              </RevealImage>
            </div>
            {/* Arch Image */}
            <RevealImage className="relative w-full max-w-xs aspect-[3/4] overflow-hidden rounded-t-full">
              <img
                src={treatment.placeholderUrl || treatment.image}
                alt={`${treatment.title} ${treatment.highlight}`}
                className="w-full h-full object-cover"
                fetchpriority="high"
              />
            </RevealImage>
          </div>
        </section>

        {/* Collaboration Section */}
        {treatment.collaboration && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif text-base-content leading-tight">
                  In <span className="italic text-primary">Collaboration</span>{' '}
                  with
                  <br />
                  <span className="font-sans font-normal mt-2 block">
                    {treatment.collaboration.partner}
                  </span>
                </h2>

                <div className="space-y-1">
                  <p className="font-medium text-base-content/80">
                    {treatment.collaboration.subtitle}
                  </p>
                  <p className="text-sm text-base-content/60 uppercase tracking-wide">
                    {treatment.collaboration.features.join(' • ')}
                  </p>
                </div>

                <p className="text-base-content/80 leading-relaxed max-w-lg">
                  {treatment.collaboration.description}
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => Book()}
                    className="btn btn-primary text-white px-8 rounded-md normal-case font-normal hover:bg-primary/90 border-none"
                  >
                    {getBookingButtonLabel(treatment.booking)}
                  </button>
                </div>
              </div>

              {/* Right Image Placeholder */}
              <div className="bg-[#C4C4C4] w-full aspect-square md:aspect-[5/4] rounded-sm">
                {/* Placeholder for image */}
              </div>
            </div>
          </section>
        )}

        {/* Introduction Section */}
        {treatment.introduction && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInWhenVisible className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif text-base-content leading-tight">
                  {treatment.introduction.title}
                </h2>

                <div className="space-y-4 text-base-content/80 leading-relaxed">
                  {treatment.introduction.content?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}

                  <ul className="list-disc list-inside space-y-2 pt-2 marker:text-primary">
                    {treatment.introduction.goals?.map((goal, idx) => (
                      <li key={idx}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </FadeInWhenVisible>
            </div>
          </section>
        )}

        {/* Internal Support Section */}
        {treatment.internalSupport && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-base-content">
                  {treatment.internalSupport.title}{' '}
                  <span className="italic text-primary">
                    {treatment.internalSupport.titleSuffix}
                  </span>
                </h2>
              </div>

              {/* Content - List */}
              <div className="grid md:grid-cols-2 gap-6">
                {treatment.internalSupport.points.map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    {/* Checkmark Icon */}
                    <div className="mt-1 text-primary shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium font-sans text-base-content text-lg">
                        {point.title}
                      </h3>
                      <p className="text-base-content/70 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Ingredients Section */}
        {treatment.ingredients && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif text-base-content">
                {treatment.ingredients.title}{' '}
                <span className="italic text-primary">
                  {treatment.ingredients.highlight}
                </span>{' '}
                {treatment.ingredients.titleSuffix}
              </h2>
              <p className="text-base-content/70 text-lg">
                {treatment.ingredients.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatment.ingredients.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-secondary p-8 rounded-lg space-y-1 transition-colors"
                >
                  <h3 className="font-medium font-sans text- text-primary">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-base-content/60 font-medium">
                {treatment.ingredients.footer &&
                  treatment.ingredients.footer
                    .split('360Medicx')
                    .map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-bold text-base-content/80">
                            360Medicx
                          </span>
                        )}
                      </React.Fragment>
                    ))}
              </p>
            </div>
          </section>
        )}

        {/* Detailed Benefits Section */}
        {treatment.detailedBenefits && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 bg-base-100">
            <h2 className="text-3xl md:text-5xl font-serif text-base-content text-center mb-12">
              {treatment.detailedBenefits.title}
            </h2>
            <div
              className={`grid md:grid-cols-${
                treatment.detailedBenefits.sections.length > 2 ? '3' : '2'
              } gap-8`}
            >
              {treatment.detailedBenefits.sections?.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xl font-serif text-primary uppercase tracking-wide border-b border-primary/20 pb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items?.map((item, i) => {
                      const hasCheckmark = typeof item === 'string' && (item.trim().startsWith('✔') || item.trim().startsWith('✓'));
                      const displayItem = hasCheckmark ? item.trim().substring(1).trim() : item;
                      const displayIcon = section.icon || (hasCheckmark ? '✔' : '•');
                      
                      return (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-base-content/80 font-light"
                        >
                          <span className="text-primary mt-1">
                            {displayIcon}
                          </span>
                          <span>{displayItem}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ideal For Section */}
        {treatment.idealFor && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
            <div className="max-w-4xl mx-auto">
              {/* Content */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif text-base-content leading-tight text-center">
                  {treatment.idealFor.title}{' '}
                  <span className="italic text-primary font-serif">
                    {treatment.idealFor.highlight}
                  </span>{' '}
                  {treatment.idealFor.titleSuffix}
                </h2>

                <ul className="grid md:grid-cols-2 gap-4">
                  {treatment.idealFor.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-lg text-base-content/80 font-light"
                    >
                      <span className="text-primary mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Safety & Medical Oversight Section */}
        {treatment.safetyOversight && (
          <section className="bg-base-100 py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-serif text-center text-base-content mb-12">
                {treatment.safetyOversight.title}
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {treatment.safetyOversight.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-secondary p-8 rounded-lg flex flex-col items-center text-center space-y-4"
                  >
                    <div className="text-primary mb-2">
                      <SafetyIcon type={item.icon} />
                    </div>
                    <h3 className="text-xl font-medium  font-sans text-primary">
                      {item.title}
                    </h3>
                    <p className="text-base-content/80 font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Treatment Areas Section */}
        {treatment.treatmentAreas && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 bg-secondary/10">
            <div className="grid gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif text-base-content leading-tight">
                  {treatment.treatmentAreas.title}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.treatmentAreas.items?.map((area, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-lg text-base-content/80 font-light"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="bg-primary p-8 aspect-square flex items-center justify-center min-h-[300px]">
                <p className="text-center font-serif italic text-base-content/60 text-3xl text-secondary">
                  Targeted precision for natural results.
                </p>
              </div> */}
            </div>
          </section>
        )}

        {/* Process Section */}
        {treatment.process && (
          <section className="bg-base-100 py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-serif text-base-content text-center mb-16">
                {treatment.process.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {treatment.process.steps?.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative bg-secondary/50 p-8 rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    {/* <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-secondary flex items-center justify-center rounded-full font-serif text-xl border-4 border-base-100 shadow-sm">
                      {idx + 1}
                   </div> */}
                    <h3 className="text-xl font-sans text-base-content mb-3 mt-2">
                      {step.title}
                    </h3>
                    <p className="text-base-content/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Results Timeline Section */}
        {treatment.resultsTimeline && (
          <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-24">
            <h2 className="text-3xl md:text-5xl font-serif text-base-content text-center mb-16">
              {treatment.resultsTimeline.title}
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
              {treatment.resultsTimeline.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-base-100 text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-base-100 p-6 rounded-lg border border-base-200 shadow-sm md:hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-serif text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base-content/80 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Frequency Section */}
        {treatment.frequency && (
          <section className="bg-primary text-secondary py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-12">
                {treatment.frequency.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                {treatment.frequency.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-primary-focus/10 rounded-lg"
                  >
                    <span className="mt-2 w-2 h-2 bg-secondary rounded-full shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    <p className="text-lg font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Tools Section */}
        {treatment.relatedTools && treatment.relatedTools.length > 0 && (
          <section className="bg-secondary/30 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-serif text-base-content text-center mb-12">
                Deep Dive{' '}
                <span className="italic text-primary">Technology</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {treatment.relatedTools?.map((toolId) => {
                  const tool = tools.find((t) => t.id === toolId);
                  if (!tool) return null;
                  return (
                    <Link
                      key={tool.id}
                      to={`/tools/${tool.id}`}
                      className="bg-base-100 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group block border-l-4 border-primary"
                    >
                      <h3 className="text-xl font-serif text-primary mb-2 group-hover:underline">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-base-content/70 mb-4 line-clamp-2">
                        {tool.subtitle}
                      </p>
                      <span className="text-xs uppercase tracking-widest border-b border-primary pb-1 group-hover:border-b-2">
                        Learn More
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Related Conditions Section */}
        <RelatedConditions
          conditions={relatedConditions}
          title="Treats Conditions"
          subtitle="This treatment is effective for the following conditions."
        />

        {/* CTA Section */}
        {treatment.cta && (
          <section className="py-40 px-4 md:px-8 bg-secondary text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                {treatment.cta.title}{' '}
                <span className="italic font-light">
                  {treatment.cta.highlight}
                </span>
              </h2>
              <p className="text-lg md:text-xl text-base-content font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
                {treatment.cta.description}
              </p>

              {treatment.booking && (
                <div className="flex justify-center flex-wrap gap-x-12 gap-y-4 mb-10 text-base-content/70 font-light">
                  {treatment.booking.price && (
                    <span className="flex flex-col items-center gap-1">
                      <span className="uppercase text-xs tracking-widest opacity-70">
                        Investment
                      </span>
                      <span className="text-2xl font-serif text-primary">
                        {treatment.booking.starting && (
                          <span className="text-lg font-sans font-light text-base-content/60 mr-1">
                            From
                          </span>
                        )}
                        £{treatment.booking.price}
                      </span>
                    </span>
                  )}
                  {treatment.booking.duration && (
                    <span className="flex flex-col items-center gap-1">
                      <span className="uppercase text-xs tracking-widest opacity-70">
                        Duration
                      </span>
                      <span className="text-2xl font-serif text-base-content">
                        {treatment.booking.duration} min
                      </span>
                    </span>
                  )}
                </div>
              )}

              <button
                onClick={() => Book()}
                className="btn btn-primary text-white px-12 py-4 h-auto text-lg rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {treatment.booking
                  ? getBookingButtonLabel(treatment.booking)
                  : "Book Consultation"}
              </button>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {treatment.faq && (
          <section className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-24">
            <h2 className="text-3xl md:text-5xl font-serif text-base-content text-center mb-12">
              {treatment.faq.title}
            </h2>
            <div className="space-y-4">
              {treatment.faq.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="collapse collapse-plus bg-secondary/20 border border-base-200 rounded-lg"
                >
                  <input
                    type="radio"
                    name="treatment-faq"
                    defaultChecked={idx === 0}
                  />
                  <div className="collapse-title text-xl font-medium font-sans text-base-content py-6 text-primary">
                    {item.question}
                  </div>
                  <div className="collapse-content pb-6">
                    <p className="text-base-content/80 font-light leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ulanda Connection Section */}
        {treatment.ulandaConnection && (
          <>
            <section className="py-8 bg-base-100">
              <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-8 md:mb-16">
                <h1 className="text-3xl md:text-5xl font-serif text-base-content mb-4 leading-tight">
                  {treatment.ulandaConnection.title ? (
                    treatment.ulandaConnection.title
                  ) : (
                    <>
                      The Ulanda Connection — How{' '}
                      <span className="italic text-primary">
                        {treatment.title}
                      </span>{' '}
                      Elevates Refresh, Renew & Restore
                    </>
                  )}
                </h1>
                {/* <p className="text-base-content/80 font-sans">
                {treatment.ulandaConnection.subtitle}
              </p> */}
              </div>
            </section>

            {treatment.ulandaConnection.sections?.map((section, index) => (
              <div key={index}>
                {/* Mobile View */}
                <section className="md:hidden pb-12 flex items-center bg-base-100">
                  <div className="w-full flex flex-col gap-16 items-center justify-end">
                    <div className="flex justify-center w-full">
                      <div className="w-full px-4">
                        <h3 className="text-2xl font-serif text-base-content mb-6">
                          {section.title}
                        </h3>

                        <p className="text-lg text-base-content/80 font-sans font-light mt-6 leading-relaxed">
                          {section.description}
                        </p>

                        <ul className="my-4 space-y-2">
                          {section.points?.map((point, idx) => (
                            <li
                              key={idx}
                              className="text-base-content/80 font-light flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5 text-xs">
                                ●
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-lg font-medium text-primary font-serif italic mt-6">
                          {section.conclusion}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Desktop View */}
                <section className="hidden py-24 md:flex items-center bg-base-100">
                  <div className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-8">
                    {/* Content */}
                    <div className="flex-1 flex justify-center w-full">
                      <div className="w-full max-w-3xl px-4">
                        <h3 className="text-3xl font-serif text-base-content mb-6">
                          {section.title}
                        </h3>

                        <p className="text-lg text-base-content/80 font-sans font-light mb-4 leading-relaxed max-w-lg">
                          {section.description}
                        </p>

                        <ul className="mb-6 space-y-2">
                          {section.points?.map((point, idx) => (
                            <li
                              key={idx}
                              className="text-base-content/80 font-light flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5 text-xs">
                                ●
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-lg font-medium text-primary font-serif italic">
                          {section.conclusion}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Treatment;
