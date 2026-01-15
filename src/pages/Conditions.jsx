import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getCondition } from '../data/pageContents/conditions/conditions';
import ConditionsLanding from './ConditionsLanding';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function Conditions() {
  const { id } = useParams();
  
  // If no ID is present, render the landing page
  if (!id) {
    return <ConditionsLanding />;
  }

  const conditionId = id || 'skin-texture-quality'; // Fallback to first category if logic fails but ID present? Or keep old fallback?
  // Actually, if we are here, 'id' IS present. So conditionId = id.
  // But wait, older logic had `id || 'ageing'`. This fallback was for when user hits /condition without param? 
  // But now /condition route has no param. 
  // So:
  const condition = getCondition(id);

  if (!condition) {
    return <div className="text-center py-20">Condition not found</div>;
  }

  // Generate proper SEO title following locked format
  const seoTitle = `${condition.hero.title} ${condition.hero.highlight || ''} Treatment in Ware SG12 | ULANDA`.trim();
  const canonicalUrl = `https://www.ulanda.co.uk/conditions/${id}`;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta
          name="description"
          content={condition.hero.description[0]}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <div className="bg-base-100">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] w-full flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <img
              src={condition.hero.image}
              alt={`${condition.hero.title} ${condition.hero.highlight}`}
              className="w-full h-full object-cover brightness-75"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-white w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4">
                <HeroText>
                {condition.hero.title}{' '}
                <span className="italic font-light">{condition.hero.highlight}</span>
                </HeroText>
              </h1>

              <div className="text-sm md:text-base font-sans font-light tracking-wide opacity-90 mb-8">
                <HeroText delay={0.2}>
                {condition.hero.subtitle}
                </HeroText>
              </div>

              <div className="space-y-4 text-lg md:text-xl font-sans font-light text-white/90 leading-relaxed">
                {condition.hero.description.map((paragraph, index) => (
                  <HeroText key={index} delay={0.4 + (index * 0.1)}>
                  <p>{paragraph}</p>
                  </HeroText>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">
              {condition.science.title}{' '}
              <span className="italic font-light text-primary">
                {condition.science.highlight}
              </span>
            </h2>
            <p className="text-lg text-base-content/80 font-sans max-w-2xl mx-auto">
              {condition.science.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {condition.science.items.map((item, index) => (
              <div
                key={index}
                className="relative group p-4 flex flex-col justify-end bg-secondary rounded-lg"
              >
                <span className="absolute -top-2 left-0 text-[140px] font-bold text-primary/5 leading-none select-none font-sans">
                  {item.number}
                </span>
                <h3 className="mt-8 text-2xl font-sans mb-2 text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-primary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>{' '}
          <p className="mt-4 text-lg text-base-content/80 font-sans w-full max-w-5xl text-center mx-auto">
            {condition.science.footer}
          </p>
        </section>

        {/* Sub Conditions Section */}
        <section className="py-20 px-4 md:px-0 mx-auto">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">
              {condition.subConditions.titlePrefix}{' '}
              <span className="italic font-light text-primary">
                {condition.subConditions.highlight}
              </span>{' '}
              {condition.subConditions.titleSuffix}
            </h2>
          </div>
          <div className="md:hidden flex flex-col">
            {condition.subConditions.items.map((item, index) => (
              <section key={index} className="md:hidden py-12 flex items-center bg-base-100 overflow-hidden">
                <div className="w-full flex flex-col gap-16 items-center justify-end">
                  {/* Left Content */}
                  <div className=" flex justify-center w-full ">
                    <div className=" w-full px-4">
                      <div className="flex-1 w-full relative flex justify-center pb-12">
                        {/* Decorative Background */}
                        <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>

                        <div className="relative w-full max-w-sm aspect-[4/5]">
                          {/* Accent / shadow image (background) */}
                          <div className="absolute top-20 right-20 w-full h-full z-0">
                            <RevealImage className="w-full h-full">
                            <img
                              src="/assets/img/ui/accent.webp"
                              alt="Decorative shadow"
                              className="w-full h-full object-cover"
                            />
                            </RevealImage>
                          </div>

                          {/* Main image (foreground) */}
                          <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                            <RevealImage className="w-full h-full">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            </RevealImage>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 mt-12 text-2xl font-serif text-base-content">
                        <h1 className="font-serif text-3xl">
                          {item.title}{' '}
                          <span className="italic text-primary">{item.highlight}</span>
                        </h1>
                      </div>

                      <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                        {item.description}
                      </p>
                      <br />
                      <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                        {item.text}
                      </p>

                      {item.link ? (
                        <Link to={item.link} className="mt-4 btn btn-primary">Explore</Link>
                      ) : (
                        <button className="mt-4 btn btn-primary">Explore</button>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="md:flex flex-col hidden">
            {condition.subConditions.items.map((item, index) =>
              index % 2 === 0 ? (
                <section key={index} className="hidden py-24 md:flex items-center bg-base-100 overflow-hidden">
                  <div className="w-full  flex flex-col  md:flex-row gap-16 items-center justify-end">
                    {/* Left Content */}
                    <div className="flex-1 flex justify-center w-full ">
                      <div className="w-full max-w-3xl px-4">
                        <div className="mb-4 mt-12 text-2xl font-serif text-base-content">
                          <h1 className="font-serif text-3xl">
                            {item.title}{' '}
                            <span className="italic text-primary">{item.highlight}</span>
                          </h1>
                        </div>

                        <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                          {item.description}
                        </p>
                        <br />
                        <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                          {item.text}
                        </p>

                        {item.link ? (
                          <Link to={item.link} className="mt-4 btn btn-primary">
                            Explore
                          </Link>
                        ) : (
                          <button className="mt-4 btn btn-primary">
                            Explore
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 max-w-sm  relative flex justify-center md:justify-end mt-12 md:mt-0">
                      {/* Decorative Background */}
                      <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>

                      <div className="relative w-full max-w-sm aspect-[4/5]">
                        {/* Accent / shadow image (background) */}
                        <div className="absolute top-20 right-10 lg:right-20 w-full h-full z-0">
                          <RevealImage className="w-full h-full">
                          <img
                            src="/assets/img/ui/accent.webp"
                            alt="Decorative shadow"
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>

                        {/* Main image (foreground) */}
                        <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                          <RevealImage className="w-full h-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <section key={index} className="hidden py-24 md:flex items-center bg-base-100 overflow-hidden">
                  <div className="w-full  flex flex-col md:flex-row-reverse gap-16 items-center justify-end">
                    {/* Left Content */}
                    <div className="flex-1 flex justify-center w-full ">
                      <div className="w-full max-w-3xl px-4">
                        <div className="mb-4 mt-12 text-2xl font-serif text-base-content">
                          <h1 className="font-serif text-3xl">
                            {item.title}{' '}
                            <span className="italic text-primary">{item.highlight}</span>
                          </h1>
                        </div>

                        <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                          {item.description}
                        </p>
                        <br />
                        <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                          {item.text}
                        </p>

                        {item.link ? (
                          <Link to={item.link} className="mt-4 btn btn-primary">
                            Explore
                          </Link>
                        ) : (
                          <button className="mt-4 btn btn-primary">
                            Explore
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 max-w-sm  relative flex justify-center md:justify-start mt-12 md:mt-0">
                      {/* Decorative Background */}
                      <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>

                      <div className="relative w-full max-w-sm aspect-[4/5]">
                        {/* Accent / shadow image (background) */}
                        <div className="absolute top-20 left-10 lg:left-20 w-full h-full z-0">
                          <RevealImage className="w-full h-full">
                          <img
                            src="/assets/img/ui/accent.webp"
                            alt="Decorative shadow"
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>

                        {/* Main image (foreground) */}
                        <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                          <RevealImage className="w-full h-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            )}
          </div>
        </section>

        {/* Pathways Section */}
        <section className="py-20 px-4 md:px-0 mx-auto">
          <div className=" text-center w-full max-w-3xl mx-auto mb-4">
            <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">
              {condition.pathways.title}{' '}
              <span className="italic text-primary font-light">
                {condition.pathways.highlight}
              </span>{' '}
              {condition.pathways.titleSuffix}
            </h2>
            <p>
              {condition.pathways.description}
            </p>
          </div>
          <div className="md:hidden flex flex-col">
            {condition.pathways.items.map((item, index) => (
              <section key={index} className="md:hidden py-12 flex items-center bg-base-100 overflow-hidden">
                <div className="w-full flex flex-col gap-16 items-center justify-end">
                  {/* Left Content */}
                  <div className=" flex justify-center w-full ">
                    <div className=" w-full px-4">
                      <div className="flex-1 w-full relative flex justify-center pb-12">
                        {/* Decorative Background */}
                        <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>

                        <div className="relative w-full max-w-sm aspect-[4/5]">
                          {/* Accent / shadow image (background) */}
                          <div className="absolute top-20 right-20 w-full h-full z-0">
                            <img
                              src="/assets/img/ui/accent.webp"
                              alt="Decorative shadow"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Main image (foreground) */}
                          <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                            <img
                              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                              alt="Refresh Treatment"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 mt-12 text-2xl font-serif text-base-content">
                        <h1 className="text-3xl font-serif ">
                          <span className="italic font-light text-primary">{item.highlight}</span> {item.titleSuffix}
                        </h1>
                      </div>

                      <ul className="text-sm">
                        {item.includes.map((inc, idx) => (
                          <li key={idx}>
                            <span className="text-primary mr-3 mt-1">✓</span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                      <br />
                      <h3 className="font-sans font-medium">Includes:</h3>
                      <div className="grid grid-cols-3">
                        {item.constent.map((c, idx) => (
                          <p key={idx}>{c}</p>
                        ))}
                      </div>

                      {/* <button className="mt-4 btn btn-primary">Explore</button> */}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="md:flex flex-col hidden">
            {condition.pathways.items.map((item, index) =>
              index % 2 === 0 ? (
                <section key={index} className="hidden py-24 md:flex items-center bg-base-100 overflow-hidden">
                  <div className="w-full  flex flex-col  md:flex-row gap-16 items-center justify-end">
                    {/* Left Content */}
                    <div className="flex-1 flex justify-center w-full ">
                      <div className="w-full max-w-3xl px-4">
                        <div className="mb-4 mt-12 text-2xl font-serif text-base-content">
                          <h1 className="text-3xl font-serif ">
                            <span className="italic font-light text-primary">{item.highlight}</span> {item.titleSuffix}
                          </h1>
                        </div>

                        <ul className="text-sm">
                          {item.includes.map((inc, idx) => (
                            <li key={idx}>
                              <span className="text-primary mr-3 mt-1">✓</span>
                              {inc}
                            </li>
                          ))}
                        </ul>
                        <br />
                        <h3 className="font-sans font-medium">Includes:</h3>
                        <div className="grid grid-cols-2">
                          {item.constent.map((c, idx) => (
                            <p key={idx}>{c}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 max-w-sm  relative flex justify-center md:justify-end mt-12 md:mt-0">
                      {/* Decorative Background */}
                      <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>

                      <div className="relative w-full max-w-sm aspect-[4/5]">
                        {/* Accent / shadow image (background) */}
                        <div className="absolute top-20 right-10 lg:right-20 w-full h-full z-0">
                          <RevealImage className="w-full h-full">
                          <img
                            src="/assets/img/ui/accent.webp"
                            alt="Decorative shadow"
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>

                        {/* Main image (foreground) */}
                        <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                          <RevealImage className="w-full h-full">
                          <img
                            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                            alt="Refresh Treatment"
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <section key={index} className="hidden py-24 md:flex items-center bg-base-100 overflow-hidden">
                  <div className="w-full  flex flex-col md:flex-row-reverse gap-16 items-center justify-end">
                    {/* Left Content */}
                    <div className="flex-1 flex justify-center w-full ">
                      <div className="w-full max-w-3xl px-4">
                        <div className="mb-4 mt-12 text-2xl font-serif text-base-content">
                          <h1 className="text-3xl font-serif ">
                            <span className="italic font-light text-primary">{item.highlight}</span> {item.titleSuffix}
                          </h1>
                        </div>

                        <ul className="text-sm">
                          {item.includes.map((inc, idx) => (
                            <li key={idx}>
                              <span className="text-primary mr-3 mt-1">✓</span>
                              {inc}
                            </li>
                          ))}
                        </ul>
                        <br />
                        <h3 className="font-sans font-medium">Includes:</h3>
                        <div className="grid grid-cols-2">
                          {item.constent.map((c, idx) => (
                            <p key={idx}>{c}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 max-w-sm  relative flex justify-center md:justify-start mt-12 md:mt-0">
                      {/* Decorative Background */}
                      <div className="absolute top-12 -left-12 w-3/4 h-full -z-10"></div>

                      <div className="relative w-full max-w-sm aspect-[4/5]">
                        {/* Accent / shadow image (background) */}
                        <div className="absolute top-20 left-10 lg:left-20 w-full h-full z-0">
                          <RevealImage className="w-full h-full">
                          <img
                            src="/assets/img/ui/accent.webp"
                            alt="Decorative shadow"
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>

                        {/* Main image (foreground) */}
                        <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                          <RevealImage className="w-full h-full">
                          <img
                            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                            alt="Refresh Treatment"
                            className="w-full h-full object-cover"
                          />
                          </RevealImage>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            )}
          </div>
        </section>

        {/* Ageing by Decade Section */}
        {condition.decades && (
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-base-content">
              {condition.decades.title}{' '}
              <span className="italic font-light">{condition.decades.highlight}</span>
            </h2>
          </div>

          <div className="space-y-12 md:space-y-24">
            {condition.decades.items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Box Content */}
                <div
                  className={`flex-1 w-full p-12 md:p-16 ${
                    item.theme === 'dark'
                      ? 'bg-primary text-secondary'
                      : 'bg-secondary text-primary'
                  }`}
                >
                  <p
                    className={`text-2xl md:text-3xl font-serif italic mb-2 ${
                      item.theme === 'dark' ? 'text-secondary' : 'text-primary'
                    }`}
                  >
                    {item.decade}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                    {item.title}
                  </h3>
                  <div className={`md:hidden flex flex-col flex-1 w-full mt-4 ${item.theme === 'dark' ? 'text-secondary' : 'text-primary'}`}>
                    <h4 className="text-lg font-sans font-medium ">
                      Focus:
                    </h4>
                    <p className="text-lg font-light /80 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                </div>

                {/* Focus Text */}
                <div className="hidden md:flex flex-col flex-1 w-full px-4 md:px-0">
                  <h4 className="text-lg font-sans font-medium text-base-content ">
                    Focus:
                  </h4>
                  <p className="text-lg font-light text-base-content/80 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* Why Choose ULANDA Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-8">
                {condition.whyChoose.title} <span className="italic font-light text-primary">{condition.whyChoose.highlight}</span> {condition.whyChoose.titleSuffix}
              </h2>

              <ul className="space-y-4">
                {condition.whyChoose.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg font-sans font-light text-base-content/80"
                  >
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="flex-1 relative w-full max-w-sm flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm aspect-[4/5]">
                {/* Accent / shadow image (background) */}
                <div className="absolute -top-12 -right-12 w-full h-full z-0">
                  <RevealImage className="w-full h-full">
                  <img
                    src="/assets/img/ui/accent.webp"
                    alt="Decorative shadow"
                    className="w-full h-full object-cover opacity-50"
                  />
                  </RevealImage>
                </div>

                {/* Main image (foreground) */}
                <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                  <RevealImage className="w-full h-full">
                  <img
                    src={condition.whyChoose.image}
                    alt="Facial Treatment at ULANDA"
                    className="w-full h-full object-cover"
                  />
                  </RevealImage>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-[#F5F0EB]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-[#5C3D2E] mb-6">
              {condition.cta.title} <span className="italic font-light">{condition.cta.highlight}</span> {condition.cta.titleSuffix}
            </h2>
            
            <p className="text-lg md:text-xl font-sans font-light text-[#5C3D2E]/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {condition.cta.description}
            </p>

            <a 
              href={condition.cta.buttonLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#5C3D2E] text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#4A3024] transition-colors duration-300"
            >
              {condition.cta.buttonText}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
