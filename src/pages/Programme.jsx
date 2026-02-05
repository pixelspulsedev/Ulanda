import React from 'react';
import { useState, useEffect } from 'react';
import { Head } from 'vite-react-ssg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { programmes } from '../data/pageContents/programmes/programmes';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function Programme() {
  const method = [
    {
      decade: 'Assess',
      list: [
        'Full skin analysis',
        'hormonal & metabolic review',
        'lifestyle mapping',
      ],
      //   description: '',
      theme: 'light',
    },
    {
      decade: 'Treat',
      // list: ['Full skin analysis', 'hormonal & metabolic review', 'lifestyle mapping'],
      description:
        'Layered regenerative interventions sequenced correctly(Cellular → Structural → Surface → Internal)',
      theme: 'dark',
    },
    {
      decade: 'Support',
      list: ['Nutrition', 'sleep', 'stress regulation', 'lifestyle guidance'],
      description: '(hormone-aware support optional)',
      theme: 'light',
    },
    {
      decade: 'Maintain',
      list: [
        'Quarterly boosters',
        'seasonal adjustments',
        'longevity alignment',
      ],
      description: 'This ensures your results evolve and stay harmonious.',
      theme: 'dark',
    },
  ];

  return (
    <>
      <Head>
        <title>Radiate Programmes | ULANDA Regenerative Wellness</title>
        <meta name="description" content="ULANDA Radiate programmes combine regenerative science with personalised wellness. Multi-week treatment pathways for transformational skin and body results." />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments/radiate/programmes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radiate Programmes | ULANDA" />
        <meta name="twitter:description" content="Multi-week regenerative treatment pathways for transformational skin and body results." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Ulanda Programme"
            className="w-full h-full object-cover object-right"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="hero min-h-screen relative z-10">
          <div className="hero-content text-neutral-content text-left w-full justify-start px-4 md:px-20">
            <div className="max-w-2xl">
              <h1 className="mb-5 font-medium text-2xl md:text-4xl xl:text-5xl font-serif leading-tight text-white">
                <HeroText>
                Where Regenerative Science Becomes a{' '}
                <span className="italic font-light">Personalised Journey</span>
                </HeroText>
              </h1>
              <div className="space-y-4">
              <HeroText delay={0.2}>
                <p className="mb-2 font-sans text-white">
                  ULANDA • Regenerative Aesthetics & Women’s Wellness
                </p>
              </HeroText>
              <HeroText delay={0.4}>
                <p className="mb-4 text-base font-sans font-light text-white/80 max-w-xl">
                  Ware SG12 • Hertford • Broxbourne • Hertfordshire
                </p>
              </HeroText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <HeroText className="text-3xl mb-4 block">
              {' '}
              <span className="italic text-primary"> Introduction</span> — The
              ULANDA Way
            </HeroText>
            <FadeInWhenVisible>
              <div className="space-y-4 md:text-lg text-base-content/80 font-sans mb-8 leading-relaxed">
                <p>
                  At ULANDA, we combine regenerative aesthetics, longevity
                  principles and midlife hormone-smart care to deliver
                  transformations that feel natural, balanced and deeply
                  restorative.
                </p>
                <p>
                  Our Signature Programmes bring together the four ULANDA pillars:
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <ul className="space-y-3 font-sans text-base-content/90 md:text-lg mb-8">
                {[
                  'Refresh — Skin surface renewal',
                  'Renew — Cellular regeneration',
                  'Restore — Structural support',
                  'Radiate — Internal wellness and metabolic balance',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-base-content/80 font-sans leading-relaxed">
                Together, they form tailored journeys that help women age
                gracefully, confidently and powerfully.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Why Programmes */}
      <section className="py-20 px-4 md:px-8 bg-base-100 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr,1.1fr] gap-12 items-center">
          <div className="relative w-full mx-auto md:mx-0">
            <div className="bg-primary/10 backdrop-blur-xl px-12 py-10">
              <p className="text-3xl md:text-3xl font-serif text-primary">
                Why Programmes?
              </p>
            </div>
          </div>

          <FadeInWhenVisible>
            <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans text-base-content/90">
              <p>
                Women don’t age in isolated parts — skin, hormones, metabolism and
                collagen decline are interconnected. ULANDA Programmes deliver:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Multi-layered results</li>
                <li>Long-term regeneration</li>
                <li>Hormone-aware transformations</li>
                <li>Personalised sequencing</li>
                <li>Internal + external alignment</li>
                <li>Visible, sustainable outcomes</li>
              </ul>
              <p>
                Programmes ensure clients experience complete transformation, not
                just a treatment.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="py-20 px-4 md:px-0 mx-auto">
        <div className="w-full text-center">
          <HeroText className="text-3xl md:text-4xl font-serif text-base-content mb-4">
            <span className="italic font-light text-primary">Age Related</span>{' '}
            Conditions We Treat
          </HeroText>
        </div>
        <div className="md:hidden flex flex-col">
          {programmes.map((programme, index) => (
            <section
              key={programme.id}
              className="md:hidden py-12 flex items-center bg-base-100 overflow-hidden"
            >
              <div className="w-full flex flex-col gap-16 items-center justify-end">
                {/* Left Content */}
                <div className=" flex justify-center w-full ">
                  <div className=" w-full px-4">
                    <FadeInWhenVisible>
                      <h2 className="mb-4 mt-12 text-2xl font-serif text-base-content">
                        {programme.title}
                      </h2>

                      <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                        {programme.summary.description}
                      </p>
                      <ul>
                        {programme.summary.idealFor.map((item) => (
                          <li
                            key={item}
                            className="text-lg text-base-content/80 font-sans font-light leading-relaxed "
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                      <br />
                      <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                        Includes: {programme.summary.includes}
                      </p>

                      <Link
                        to={`/programmes/${programme.id}`}
                        className="mt-4 btn btn-primary text-white"
                      >
                        Explore Programme
                      </Link>
                    </FadeInWhenVisible>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="md:flex flex-col hidden">
          {programmes.map((programme, index) =>
            index % 2 === 0 ? (
              <section
                key={programme.id}
                className="hidden py-24 md:flex items-center bg-base-100 overflow-hidden"
              >
                <div className="w-full  flex flex-col  md:flex-row gap-16 items-center justify-end">
                  {/* Left Content */}
                  <div className="flex-1 flex justify-center w-full ">
                    <div className="w-full max-w-3xl px-4">
                      <FadeInWhenVisible>
                        <h2 className="mb-4 mt-12 text-2xl font-serif text-base-content">
                          {programme.title}
                        </h2>

                        <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                          {programme.summary.description}
                        </p>
                        <ul>
                          {programme.summary.idealFor.map((item) => (
                            <li
                              key={item}
                              className="text-lg text-base-content/80 font-sans font-light leading-relaxed "
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                        <br />
                        <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                          Includes: {programme.summary.includes}
                        </p>

                        <Link
                          to={`/programmes/${programme.id}`}
                          className="mt-4 btn btn-primary text-white"
                        >
                          Explore Programme
                        </Link>
                      </FadeInWhenVisible>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section
                key={programme.id}
                className="hidden py-24 md:flex items-center bg-base-100 overflow-hidden"
              >
                <div className="w-full  flex flex-col md:flex-row-reverse gap-16 items-center justify-end">
                  {/* Left Content */}
                  <div className="flex-1 flex justify-center w-full ">
                    <div className="w-full max-w-3xl px-4">
                      <FadeInWhenVisible>
                        <h2 className="mb-4 mt-12 text-2xl font-serif text-base-content">
                          {programme.title}
                        </h2>

                        <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                          {programme.summary.description}
                        </p>
                        <ul>
                          {programme.summary.idealFor.map((item) => (
                            <li
                              key={item}
                              className="text-lg text-base-content/80 font-sans font-light leading-relaxed "
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                        <br />
                        <p className="text-lg text-base-content/80 font-sans font-light leading-relaxed ">
                          Includes: {programme.summary.includes}
                        </p>

                        <Link
                          to={`/programmes/${programme.id}`}
                          className="mt-4 btn btn-primary text-white"
                        >
                          Explore Programme
                        </Link>
                      </FadeInWhenVisible>
                    </div>
                  </div>
                </div>
              </section>
            )
          )}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-base-content">
            Ageing by Decade —{' '}
            <span className="italic font-light">What Your Skin Needs</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-24">
          {method.map((item, index) => (
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
                <FadeInWhenVisible>
                  <p
                    className={`text-2xl md:text-3xl font-serif italic mb-2 ${
                      item.theme === 'dark' ? 'text-secondary' : 'text-primary'
                    }`}
                  >
                    {item.decade}
                  </p>
                  {/* <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                    {item.title}
                  </h3> */}
                  <div
                    className={`md:hidden flex flex-col flex-1 w-full mt-4 ${
                      item.theme === 'dark' ? 'text-secondary' : 'text-primary'
                    }`}
                  >
                    {item.list ? (
                      <ul>
                        {item.list.map((listItem) => (
                          <li key={listItem}>{listItem}</li>
                        ))}
                      </ul>
                    ) : null}
                    <p className="text-lg font-light /80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeInWhenVisible>
              </div>

              {/* Focus Text */}
              <div className="hidden md:flex flex-col flex-1 w-full px-4 md:px-0">
                <FadeInWhenVisible>
                  <div className={`hidden md:flex flex-col flex-1 w-full mt-4`}>
                    {item.list ? (
                      <ul>
                        {item.list.map((listItem) => (
                          <li key={listItem}>{listItem}</li>
                        ))}
                      </ul>
                    ) : null}
                    <p className="text-lg font-light /80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
        <section className="px-4">
          <FadeInWhenVisible>
            <h1 className="text-3xl font-serif mb-4">
              <span className="italic text-primary">Who</span> Our Programmes Are
              For
            </h1>
            <p>Women who want:</p>
            <ul className="list-disc">
              <li>natural, refined aesthetic transformations</li>
              <li>hormonal + metabolic awareness in their care</li>
              <li>structural and cellular regeneration</li>
              <li>internal + external alignment</li>
              <li>a holistic, high-end clinical experience</li>
            </ul>
          </FadeInWhenVisible>
        </section>
        <section className="px-4">
          <FadeInWhenVisible>
            <h1 className="text-3xl font-serif mb-4">
              <span className="italic text-primary">Who</span> Our Programmes Are
              NOT For
            </h1>
            <p>Women looking for:</p>
            <ul className="list-disc">
              <li>quick fixes</li>
              <li>overfilled cosmetic changes</li>
              <li>one-off treatments</li>
              <li>aggressive correction</li>
            </ul>
          </FadeInWhenVisible>
        </section>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 bg-secondary text-center">
        <div className="max-w-4xl mx-auto">
          <HeroText className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">
            Start Your <span className="italic">Regenerative</span> Journey
          </HeroText>
          {/* <span className="block my-4">Feel like yourself again.</span> */}
          <FadeInWhenVisible>
            <p className="text-lg md:text-xl text-text font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover the pathway that aligns with your goals.
            </p>

            <Link to="/book-consultation" className="btn btn-primary text-white px-10 py-4 h-auto text-lg rounded-lg">
              Book Your Consultation
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}
