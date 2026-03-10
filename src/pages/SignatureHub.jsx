import React, { useState, useEffect } from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { signatureHubData, signaturePathways } from '../data/pageContents/signature/signatureData';
import { Check, ArrowRight, Shield, Heart, Sparkles, Activity } from 'lucide-react';

export default function SignatureHub() {
  const data = signatureHubData;
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillarIcons = {
    Refresh: Sparkles,
    Renew: Activity,
    Restore: Shield,
    Radiate: Heart
  };

  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <link rel="canonical" href={data.seo.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.seo.title} />
        <meta name="twitter:description" content={data.seo.description} />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center">
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <img
              src="/assets/img/home/ulanda-homepage-hero-ware-sg12.webp"
              alt="ULANDA Signature Pathways"
              className="w-full h-full object-cover brightness-75"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-black/45"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="max-w-3xl text-white">
              <HeroText>
                <span className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-sm font-bold tracking-widest uppercase">
                  Signature
                </span>
              </HeroText>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                <HeroText delay={0.2}>
                  {data.hero.h1}
                </HeroText>
              </h1>

              <div className="space-y-2 text-lg md:text-xl font-light text-white/90 leading-relaxed">
                <HeroText delay={0.4}>
                  <p className="font-medium">{data.hero.clinic}</p>
                </HeroText>
                <HeroText delay={0.5}>
                  <p className="text-base text-white/70">{data.hero.credential}</p>
                </HeroText>
                <HeroText delay={0.6}>
                  <p className="text-base text-white/70">{data.hero.location}</p>
                </HeroText>
              </div>

              <FadeInWhenVisible delay={0.8}>
                <Link
                  to={data.hero.cta.url}
                  className="btn btn-primary text-white mt-8 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  {data.hero.cta.label}
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Introduction - The ULANDA Way */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
                <span className="italic font-light text-primary">Introduction</span> {'\u2014'} {data.introduction.title}
              </h2>
            </FadeInWhenVisible>

            <div className="space-y-6 text-lg text-base-content/80 font-light leading-relaxed">
              {data.introduction.paragraphs.map((p, i) => (
                <FadeInWhenVisible key={i} delay={0.1 * i}>
                  <p>{p}</p>
                </FadeInWhenVisible>
              ))}
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {data.introduction.pillars.map((pillar, i) => {
                const IconComp = pillarIcons[pillar.name] || Sparkles;
                return (
                  <FadeInWhenVisible key={i} delay={0.1 * i}>
                    <div className="bg-secondary rounded-xl p-6 text-center">
                      <IconComp className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-serif text-lg font-medium text-primary mb-1">{pillar.name}</h3>
                      <p className="text-sm text-base-content/70">{pillar.description}</p>
                    </div>
                  </FadeInWhenVisible>
                );
              })}
            </div>

            <FadeInWhenVisible delay={0.3}>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mt-8 text-center">
                {data.introduction.closing}
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Why Signatures? */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{data.whySignature.title}</h2>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <p className="text-lg text-base-content/80 font-light leading-relaxed mb-8">
                {data.whySignature.intro}
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <h3 className="text-xl font-medium mb-4">{data.whySignature.subtitle}</h3>
            </FadeInWhenVisible>

            <ul className="space-y-3 mb-8">
              {data.whySignature.points.map((point, i) => (
                <FadeInWhenVisible key={i} delay={0.1 * i}>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base-content/80">{point}</span>
                  </li>
                </FadeInWhenVisible>
              ))}
            </ul>

            <FadeInWhenVisible delay={0.4}>
              <p className="text-lg font-serif italic text-primary">
                {data.whySignature.closing}
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Book Advanced Skin Health Consultation Section */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <div className="bg-white border border-secondary rounded-2xl p-8 md:p-12 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">{data.consultation.title}</h2>
                <p className="text-lg font-medium text-primary mb-4">{data.consultation.intro}</p>
                <p className="text-base-content/80 text-lg font-light leading-relaxed mb-8">
                  {data.consultation.description}
                </p>

                <Link
                  to={data.consultation.cta.url}
                  className="btn btn-primary text-white px-8 rounded-full mb-8"
                >
                  {data.consultation.cta.label}
                </Link>

                <ul className="space-y-3">
                  {data.consultation.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base-content/70 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Explore Our Signatures */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-base-100">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Explore Our <span className="italic font-light text-primary">Signatures</span>
                </h2>
                <p className="text-lg text-base-content/70 font-light max-w-2xl mx-auto">
                  Each Signature is designed to meet you at your current stage of skin change and guide you through a structured plan toward stability, strength and long-term regeneration.
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signaturePathways.map((pathway, i) => (
                <FadeInWhenVisible key={pathway.id} delay={0.1 * i}>
                  <div className="bg-white border border-secondary/50 rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-500 flex flex-col h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={pathway.image}
                        alt={pathway.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-primary transition-colors">
                        {pathway.title}
                      </h3>
                      <p className="text-base-content/70 text-sm font-light leading-relaxed mb-4 flex-1">
                        {pathway.description}
                      </p>
                      <p className="text-xs text-base-content/50 mb-4">
                        <span className="font-medium">Common concerns:</span> {pathway.concerns}
                      </p>
                      <Link
                        to={pathway.url}
                        className="btn btn-primary text-white w-full rounded-full group-hover:shadow-md transition-all"
                      >
                        Explore This Signature
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Ageing by Decade */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">{data.ageingByDecade.title}</h2>
            </FadeInWhenVisible>
            <div className="space-y-6">
              {data.ageingByDecade.paragraphs.map((p, i) => (
                <FadeInWhenVisible key={i} delay={0.1 * i}>
                  <p className="text-lg text-base-content/80 font-light leading-relaxed">{p}</p>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* The ULANDA Method */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">{data.method.title}</h2>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.method.steps.map((step, i) => (
                <FadeInWhenVisible key={i} delay={0.1 * i}>
                  <div className="bg-white border border-secondary/50 rounded-2xl p-6 h-full">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg mb-4">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-serif font-medium text-primary mb-4">{step.name}</h3>
                    <ul className="space-y-2">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-base-content/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>

            <FadeInWhenVisible delay={0.3}>
              <p className="text-center text-lg text-base-content/70 font-light mt-10 italic">
                {data.method.closing}
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Who Our Signatures Are For */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{data.whoFor.title}</h2>
              <p className="text-lg text-base-content/80 font-light mb-8">{data.whoFor.intro}</p>
            </FadeInWhenVisible>

            <ul className="space-y-3">
              {data.whoFor.points.map((point, i) => (
                <FadeInWhenVisible key={i} delay={0.1 * i}>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base-content/80 text-lg">{point}</span>
                  </li>
                </FadeInWhenVisible>
              ))}
            </ul>
          </div>
        </section>

        {/* Start Your Regenerative Journey CTA */}
        <section className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{data.finalCta.title}</h2>
              <p className="text-lg text-base-content/70 font-light leading-relaxed mb-8">
                {data.finalCta.description}
              </p>
              <Link
                to={data.finalCta.cta.url}
                className="btn btn-primary btn-lg text-white px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                {data.finalCta.cta.label}
              </Link>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Sticky CTA */}
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
            showSticky ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <Link
            to={data.stickyCta.url}
            className="btn btn-primary text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <span className="hidden sm:inline">{data.stickyCta.label}</span>
            <span className="sm:hidden">Book Advanced Skin Health Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
