import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { pathways } from '../data/pageContents/pathways/pathways';
import { ArrowRight, ChevronRight } from 'lucide-react';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';

export default function Pathways() {
  return (
    <>
      <Head>
        <title>Treatment Pathways | ULANDA Regenerative Aesthetics</title>
        <meta
          name="description"
          content="Discover ULANDA's four treatment pathways: Refresh, Renew, Restore, Radiate. A simple, intelligent way to understand your regenerative skincare journey."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/pathways" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Treatment Pathways | ULANDA" />
        <meta name="twitter:description" content="Discover ULANDA's four treatment pathways: Refresh, Renew, Restore, Radiate." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] w-full flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=2070"
              alt="Ulanda Pathways Treatment"
              className="w-full h-full object-cover brightness-75"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className=" w-full relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                <HeroText>
                A simple,{' '}
                <span className="italic font-extralight">intelligent</span> way
                to understand your{' '}
                <span className="italic font-extralight">regenerative</span>{' '}
                journey.
                </HeroText>
              </h1>

              <div className="space-y-4 text-lg md:text-xl font-light text-white/90 leading-relaxed">
                <HeroText delay={0.2}>
                <p>
                  Every ULANDA treatment fits into one of four pathways —
                  designed to help you understand what your skin and body truly
                  need, without confusion or overwhelm.
                </p>
                </HeroText>
                <HeroText delay={0.3}>
                <p>
                  Each pathway addresses a different layer of skin health,
                  structure and internal balance.
                </p>
                </HeroText>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Pathways Sections */}
        {pathways.map((pathway, index) => (
          <section
            key={pathway.id}
            className="hidden py-24 md:flex items-center bg-base-100 last:border-0 relative overflow-hidden"
          >
            <div
              className={`w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 w-full md:max-w-xl z-10">
                <div className="inline-block px-8 py-2 rounded-full border border-primary/30 bg-secondary text-primary font-medium mb-6">
                  {pathway.title}
                </div>

                <h2
                  className="text-3xl md:text-5xl font-serif mb-6 leading-tight"
                  dangerouslySetInnerHTML={{ __html: typeof pathway.heading === 'function' ? pathway.heading() : pathway.heading }}
                />

                <p className="text-lg text-base-content/80 font-light mb-8 leading-relaxed">
                  {pathway.subtitle}
                </p>

                <div className="mb-8">
                  <h3 className="font-bold mb-4 text-base-content uppercase text-sm tracking-wide">
                    Includes:
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base-content/70 font-light text-sm">
                    {pathway.includes.slice(0, 6).map((item, i) => (
                      <div key={i}>
                        • {typeof item === 'string' ? item : item.name}
                      </div>
                    ))}
                    {pathway.includes.length > 6 && (
                      <div className="italic text-primary">+ more</div>
                    )}
                  </div>
                </div>

                <Link
                  to={`/treatments/${pathway.id}`}
                  className="group inline-flex items-center gap-2 text-primary font-medium hover:text-primary-focus transition-colors"
                >
                  Explore {pathway.title} Pathway{' '}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full max-w-sm relative">
                {/* Decorative Background */}
                <div
                  className={`absolute top-12 w-3/4 h-full -z-10 bg-secondary/50 rounded-lg ${
                    index % 2 === 0 ? '-left-12' : '-right-12'
                  }`}
                ></div>

                <div className="relative aspect-[4/5] w-full">
                  {/* Accent Shadow */}
                  <div
                    className={`absolute top-10 w-full h-full z-0 ${
                      index % 2 === 0 ? 'right-10' : 'left-10'
                    }`}
                  >
                    <RevealImage className="w-full h-full">
                    <img
                      src="/assets/img/ui/accent.webp"
                      alt=""
                      className="w-full h-full object-cover opacity-60"
                    />
                    </RevealImage>
                  </div>

                  {/* Main Image */}
                  <div className="relative z-10 w-full h-full overflow-hidden shadow-xl rounded-sm">
                    <RevealImage className="w-full h-full">
                    <img
                      src={pathway.image}
                      alt={pathway.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    </RevealImage>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {pathways.map((pathway, index) => (
          <section
            key={pathway.id}
            className="md:hidden py-24 flex items-center bg-base-100 relative overflow-hidden"
          >
            <div
              className={`w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 w-full md:max-w-xl z-10">
                <div className="inline-block px-8 py-2 rounded-full border border-primary/30 bg-secondary text-primary font-medium mb-6">
                  {pathway.title}
                </div>

                <h2
                  className="text-3xl md:text-5xl font-serif mb-6 leading-tight"
                  dangerouslySetInnerHTML={{ __html: typeof pathway.heading === 'function' ? pathway.heading() : pathway.heading }}
                />

                <p className="text-lg text-base-content/80 font-light mb-8 leading-relaxed">
                  {pathway.subtitle}
                </p>

                {/* Image Side */}
                <div className="flex-1 w-full max-w-md relative">
                  {/* Decorative Background */}
                  <div
                    className={`absolute top-12 w-3/4 h-full -z-10 bg-secondary/50 rounded-lg ${
                      index % 2 === 0 ? '-left-12' : '-right-12'
                    }`}
                  ></div>

                  <div className="relative aspect-[4/5] w-full">
                    {/* Accent Shadow */}
                    <div
                      className={`absolute top-10 w-full h-full z-0 ${
                        index % 2 === 0 ? 'right-10' : 'left-10'
                      }`}
                    >
                      <RevealImage className="w-full h-full">
                      <img
                        src="/assets/img/ui/accent.webp"
                        alt=""
                        className="w-full h-full object-cover opacity-60"
                      />
                      </RevealImage>
                    </div>

                    {/* Main Image */}
                    <div className="relative z-10 w-full h-full overflow-hidden shadow-xl rounded-sm">
                      <RevealImage className="w-full h-full">
                      <img
                        src={pathway.image}
                        alt={pathway.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      </RevealImage>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="font-bold mb-4 text-base-content uppercase text-sm tracking-wide font-sans">
                    Includes:
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base-content/70 font-light text-sm">
                    {pathway.includes.slice(0, 6).map((item, i) => (
                      <div key={i}>
                        • {typeof item === 'string' ? item : item.name}
                      </div>
                    ))}
                    {pathway.includes.length > 6 && (
                      <div className="italic text-primary">+ more</div>
                    )}
                  </div>
                </div>

                <Link
                  to={`/pathways/${pathway.id}`}
                  className="group inline-flex items-center gap-2 text-primary font-medium hover:text-primary-focus transition-colors mt-4"
                >
                  Explore {pathway.title} Pathway{' '}
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* How the Four Pathways Work Together Section */}
        <section className="py-24 px-4 md:px-8 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-base-content mb-4">
                How the{' '}
                <span className="italic font-light text-primary">
                  Four Pathways
                </span>{' '}
                Work Together
              </h2>
              <p className="text-lg text-base-content/80 font-sans max-w-2xl mx-auto">
                ULANDA is built on integrated regenerative care, meaning each
                pathway supports the others.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { number: '01', title: 'REFRESH', desc: 'Prepares the skin' },
                { number: '02', title: 'RENEW', desc: 'Regenerates the cells' },
                { number: '03', title: 'RESTORE', desc: 'Rebuilds structure' },
                {
                  number: '04',
                  title: 'RADIATE',
                  desc: 'Strengthens internal balance',
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="relative bg-secondary rounded-lg p-8 h-40 overflow-hidden flex items-end hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-secondary"
                >
                  <span className="absolute -top-2 left-0 text-[140px] font-bold text-primary/10 leading-none select-none font-sans">
                    {item.number}
                  </span>
                  <p className="relative z-10 text-lg text-primary font-sans">
                    <span className="font-medium">{item.title}</span> <br />{' '}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 md:px-8 bg-secondary text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">
              The <span className="italic">Ulanda</span> Promise
            </h2>

            <div className="space-y-2 text-lg font-sans mb-12 leading-relaxed text-base-content/80">
              <p>Simple, personalised pathways.</p>
              <p>Evidence-based care.</p>
              <p>
                Natural, regenerative results — guided by women’s physiology.
              </p>
            </div>

            <a
              href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-white border-none px-10 py-3 h-auto text-lg rounded-full"
            >
              Book Advanced Skin Health Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
