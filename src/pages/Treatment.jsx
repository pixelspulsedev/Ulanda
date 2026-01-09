import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { getTreatment } from '../data/pageContents/treatments/treatments';
import { tools } from '../data/pageContents/tools/tools';
import { getConditionsForTreatment, getConditionUrl } from '../data/crosslinks';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedConditions from '../components/RelatedConditions';

const SafetyIcon = ({ type }) => {
  switch (type) {
    case 'clinician':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      );
    case 'cqc':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      );
    case 'prescribed':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    default:
      return null;
  }
};

const Treatment = () => {
  const { category, id } = useParams();
  const treatment = getTreatment(id);
  const relatedConditions = getConditionsForTreatment(id);

  if (!treatment) {
    // In a real app, you might want to redirect to a 404 page or the treatments list
    return <div className="text-center py-20">Treatment not found</div>;
  }

  const seoTitle = treatment.seo?.title || `Ulanda - ${treatment.hero.title} ${treatment.hero.highlight || ''}`;
  const seoDescription = treatment.seo?.description || treatment.hero.introduction || '';

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight">
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
          </h1>

          <div className="flex flex-wrap text-base-content/80 text-lg font-light tracking-wide">
            {treatment.benefits.map((benefit, index) => (
              <span key={index} className="flex items-center">
                {benefit}
                {index < treatment.benefits.length - 1 && (
                  <span className="mx-1">•</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap font-light text-base-content/60 text-sm md:text-base">
            {treatment.locations.map((loc, index) => (
              <span key={index} className="flex items-center">
                {loc}
                {index < treatment.locations.length - 1 && (
                  <span className="mx-1">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="absolute bottom-10 right-0 md:-right-2 w-3/4 h-full">
            <img
              src="/assets/img/ui/accent.webp"
              alt="Decorative shadow"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Arch Image */}
          <div className="relative w-full max-w-xs aspect-[3/4] overflow-hidden rounded-t-full">
            <img
              src={treatment.image}
              alt={`${treatment.title} ${treatment.highlight}`}
              className="w-full h-full object-cover"
              fetchpriority="high"
            />
          </div>
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
                <button className="btn btn-primary text-white px-8 rounded-md normal-case font-normal hover:bg-primary/90 border-none">
                  Book Now
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
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif text-base-content leading-tight">
                {treatment.introduction.title}
              </h2>

              <div className="space-y-4 text-base-content/80 leading-relaxed">
                {treatment.introduction.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <ul className="list-disc list-inside space-y-2 pt-2 marker:text-primary">
                  {treatment.introduction.goals.map((goal, idx) => (
                    <li key={idx}>{goal}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content - Image with Overlay */}
            <div className="relative mt-8 md:mt-0 flex justify-end">
              {/* Image Container */}
              <div className="w-full max-w-sm aspect-[4/5] relative z-0">
                <img
                  src={treatment.introduction.image}
                  alt="Treatment Introduction"
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>

              {/* Overlay Box */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3/5 bg-secondary/46 backdrop-blur-xl p-6 md:p-8 z-10">
                <div className="space-y-6 text-primary">
                  <p className=" leading-relaxed">
                    {treatment.introduction.highlightBox.text1}
                  </p>
                  <p className=" leading-relaxed font-medium">
                    {treatment.introduction.highlightBox.text2
                      .split('30–65+')
                      .map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="font-bold text-primary">
                              30–65+
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Internal Support Section */}
      {treatment.internalSupport && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content - Image with Text Overlay */}
            <div className="relative w-full">
              {/* Background Image */}
              <img
                src={treatment.internalSupport.image}
                alt="Background"
                className="w-full h-full object-cover aspect-square md:aspect-square max-w-sm"
              />

              {/* Overlay Text Box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary/60 backdrop-blur-xl p-8 md:p-12 text-center w-3/4 ">
                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                  {treatment.internalSupport.title} <br />
                  <span className="italic">
                    {treatment.internalSupport.titleSuffix}
                  </span>
                </h2>
              </div>
            </div>

            {/* Right Content - List */}
            <div className="space-y-4">
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
            {treatment.ingredients.items.map((item, idx) => (
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
              {treatment.ingredients.footer
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

      {/* Ulanda Connection Section */}
      {treatment.ulandaConnection && (
        <>
          <section className="py-8 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-8 md:mb-16">
              <h1 className="text-3xl md:text-5xl font-serif text-base-content mb-4 leading-tight">
                The Ulanda Connection — How{' '}
                <span className="italic text-primary">
                  Beauty & Skin Glow IV
                </span>{' '}
                Elevates Refresh, Renew & Restore
              </h1>
              <p className="text-base-content/80 font-sans">
                {treatment.ulandaConnection.subtitle}
              </p>
            </div>
          </section>

          {treatment.ulandaConnection.sections.map((section, index) => (
            <div key={index}>
              {/* Mobile View */}
              <section className="md:hidden pb-12 flex items-center bg-base-100">
                <div className="w-full flex flex-col gap-16 items-center justify-end">
                  <div className="flex justify-center w-full">
                    <div className="w-full px-4">
                      <h3 className="text-2xl font-serif text-base-content mb-6">
                        {section.title}
                      </h3>

                      <div className="flex-1 w-full relative flex justify-center pb-12">
                        <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>
                        <div className="relative w-full max-w-md aspect-[4/5]">
                          <div className="absolute top-20 right-20 w-full h-full z-0">
                            <img
                              src="/assets/img/ui/accent.webp"
                              alt="Decorative shadow"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                            <img
                              src={section.image}
                              alt={section.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-base-content/80 font-sans font-light mt-12 leading-relaxed">
                        {section.description}
                      </p>

                      <ul className="my-4 space-y-2">
                        {section.points.map((point, idx) => (
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
                <div
                  className={`w-full flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-16 items-center justify-end max-w-7xl mx-auto px-4 md:px-8`}
                >
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
                        {section.points.map((point, idx) => (
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

                  {/* Image */}
                  <div
                    className={`flex-1 max-w-xl relative flex justify-center ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    } mt-12 md:mt-0`}
                  >
                    <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>

                    <div className="relative w-full max-w-md aspect-[4/5]">
                      <div
                        className={`absolute top-20 ${
                          index % 2 === 0
                            ? 'right-10 lg:right-20'
                            : 'left-10 lg:left-20'
                        } w-full h-full z-0`}
                      >
                        <img
                          src="/assets/img/ui/accent.webp"
                          alt="Decorative shadow"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </>
      )}

      {/* Ideal For Section */}
      {treatment.idealFor && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif text-base-content leading-tight">
                {treatment.idealFor.title}{' '}
                <span className="italic text-primary font-serif">
                  {treatment.idealFor.highlight}
                </span>{' '}
                {treatment.idealFor.titleSuffix}
              </h2>

              <ul className="space-y-1">
                {treatment.idealFor.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-lg text-base-content/80 font-light"
                  >
                    <span className="text-base-content mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              <div className="absolute bottom-10 right-0 md:-right-2 w-3/4 h-full">
                <img
                  src="/assets/img/ui/accent.webp"
                  alt="Decorative shadow"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Arch Image */}
              <div className="relative w-full max-w-xs aspect-[3/4] overflow-hidden rounded-t-full">
                <img
                  src={treatment.image}
                  alt={`${treatment.title} ${treatment.highlight}`}
                  className="w-full h-full object-cover"
                />
              </div>
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
              {treatment.safetyOversight.items.map((item, idx) => (
                <div key={idx} className="bg-secondary p-8 rounded-lg flex flex-col items-center text-center space-y-4">
                  <div className="text-primary mb-2">
                    <SafetyIcon type={item.icon} />
                  </div>
                  <h3 className="text-xl font-medium  font-sans text-primary">{item.title}</h3>
                  <p className="text-base-content/80 font-light">{item.description}</p>
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
              Deep Dive <span className="italic text-primary">Technology</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatment.relatedTools.map(toolId => {
                const tool = tools.find(t => t.id === toolId);
                if (!tool) return null;
                return (
                  <Link 
                    key={tool.id} 
                    to={`/treatments/${category}/${id}/${tool.id}`}
                    className="bg-base-100 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group block border-l-4 border-primary"
                  >
                     <h3 className="text-xl font-serif text-primary mb-2 group-hover:underline">{tool.title}</h3>
                     <p className="text-sm text-base-content/70 mb-4 line-clamp-2">{tool.subtitle}</p>
                     <span className="text-xs uppercase tracking-widest border-b border-primary pb-1 group-hover:border-b-2">Learn More</span>
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
        <section className="py-24 px-4 md:px-8 bg-secondary text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              {treatment.cta.title}{' '}
              <span className="italic font-light">{treatment.cta.highlight}</span>
            </h2>
            <p className="text-lg md:text-xl text-base-content font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
              {treatment.cta.description}
            </p>

            <button className="btn btn-primary text-white px-10 py-4 h-auto text-lg rounded-lg">
              {treatment.cta.buttonText}
            </button>
          </div>
        </section>
      )}
    </div>
    </>
  );
};

export default Treatment;
