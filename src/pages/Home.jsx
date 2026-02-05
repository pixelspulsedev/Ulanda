import { useState, useEffect } from 'react';
import React from 'react';
import { Head } from 'vite-react-ssg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { homeFaqs } from '../data/faqs';
import { homePageData } from '../data/pageContents/home/home';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function Home() {
  const [activeTab, setActiveTab] = useState('refresh');
  const [activeFaq, setActiveFaq] = useState(null);

  const { pathways, hero, introduction } = homePageData;

  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveTab(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = Object.keys(pathways);
    
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>ULANDA Skin Clinic | Regenerative Aesthetics in Ware SG12 Hertfordshire</title>
        <meta name="description" content="ULANDA is a regenerative aesthetics clinic in Ware SG12, Hertfordshire. Specialising in skin regeneration, bio-remodelling and hormone-smart treatments for midlife women." />
        <link rel="canonical" href="https://www.ulanda.co.uk/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ULANDA Skin Clinic | Regenerative Aesthetics in Ware SG12" />
        <meta name="twitter:description" content="Regenerative aesthetics clinic specialising in skin regeneration, bio-remodelling and hormone-smart treatments for midlife women." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/home/ulanda-homepage-hero-ware-sg12.webp" />
        <link 
          rel="preload" 
          as="image" 
          href="/assets/img/home/ulanda-homepage-hero-ware-sg12.webp" 
          fetchpriority="high"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={hero.placeholderUrl || hero.image}
            alt="Ulanda Hero Background"
            className="w-full h-full object-cover object-right"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 hero min-h-screen">
          <div className="hero-content text-neutral-content text-left w-full justify-start px-4 md:px-20">
            <div className="max-w-2xl">
            <h1 className="mb-5 font-medium text-3xl md:text-5xl xl:text-6xl font-serif leading-tight text-white">
              <HeroText>
              Where{' '}
              <span className="italic font-extralight">
                Skin, Hormones & <br />
                Wellness
              </span>{' '}
              Come Together
              </HeroText>
            </h1>
            <div className="mb-4 font-sans text-white">
              <HeroText delay={0.2}>
              For women navigating postpartum changes, perimenopause transitions
              and the menopause journey.
              </HeroText>
            </div>
            <div className="mb-4 text-base font-sans font-light text-white/80 max-w-xl">
              <HeroText delay={0.4}>
              At ULANDA, we create personalised aesthetic and wellness pathways
              that help your skin look brighter, firmer and more radiant, while
              supporting your inner balance and confidence.
              <br />
              <span className="block mt-2">
                Natural results. Personalised care. Regeneration that works with
                your body.
              </span>
              </HeroText>
            </div>
            <FadeInWhenVisible delay={0.6}>
              <Link to="/book-consultation" className="btn btn-primary">Book Your Consultation</Link>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="mb-16 md:hidden inline-block px-4 py-1 border border-primary/30 rounded-full bg-secondary">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Our Approach
          </span>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <FadeInWhenVisible className="order-2 md:order-1">
            <div className="hidden md:inline-block px-4 py-1 mb-8 border border-primary/30 rounded-full bg-secondary/30">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Our Approach
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6 leading-tight">
              A{' '}
              <span className="italic font-light text-primary">
                simpler way
              </span>{' '}
              to understand regeneration.
            </h2>

            <div className="space-y-4 md:text-lg text-base-content/80 font-sans mb-8 leading-relaxed">
              <p>
                Your skin doesn’t age on its own, it’s connected to your
                hormones, stress levels, sleep, energy and overall wellbeing.
              </p>
              <p>
                That’s why our treatments don’t just focus on the surface.{' '}
                <br className="hidden md:block" />
                We look at the full picture.
              </p>
              <p>
                Our approach is designed for real women with real lives —
                especially those experiencing the shifts of:
              </p>
            </div>

            <ul className="space-y-3 font-sans text-base-content/90 md:text-lg mb-8">
              {['Postpartum recovery', 'Perimenopause', 'Menopause'].map(
                (item) => (
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
                )
              )}
            </ul>
            <p className="text-lg text-base-content/80 font-sans leading-relaxed">
              We help you glow today while supporting the deeper systems that
              keep your skin healthy long-term.
            </p>
          </FadeInWhenVisible>

          {/* Right Image */}
          <div className="relative order-1 md:order-2 flex justify-center">
            {/* Background decorative element (Accent Image) */}
            <RevealImage className="absolute bottom-10 right-0 md:-right-2 w-3/4 h-full">
              <img
                src="/assets/img/ui/accent.webp"
                alt="Decorative shadow"
                className="w-full h-full object-cover opacity-60 mix-blend-multiply"
              />
            </RevealImage>

            {/* Main Image */}
            <RevealImage className="relative rounded-t-full w-full max-w-xs max-h-xs aspect-[3/4]">
              <img
                src={introduction.placeholderUrl || introduction.image}
                alt="Facial treatment"
                width="1200"
                height="1600"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </RevealImage>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <FadeInWhenVisible className="mb-16 flex items-center justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6">
                The{' '}
                <span className="italic font-light text-primary">
                  Four Pathways
                </span>{' '}
                to your <br />
                Ulanda Journey
              </h2>
              <p className="text-lg text-base-content/80 font-sans max-w-2xl">
                We’ve made regeneration easy to understand. <br />
                Every treatment you receive sits within one of four simple
                pathways:
              </p>
            </div>
            <div className='hidden md:flex'>
              <Link
              to='/pathways'
              className='btn btn-primary'>
                Learn More About Our Pathways
              </Link>
            </div>
          </FadeInWhenVisible>

          {/* Tabs */}
          <div className="sticky top-16 z-30 bg-base-100 mb-16 border-b border-base-300 transition-all duration-300">
            <div className="pt-4 flex items-center justify-between max-w-7xl mx-auto">
              {Object.keys(pathways).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    const el = document.getElementById(key);
                    if (el) {
                      const offset = 150;
                      const bodyRect =
                        document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                      });
                    }
                    setActiveTab(key);
                  }}
                  className={`flex-1 pb-4 text-lg font-sans transition-all duration-300 ${
                    activeTab === key
                      ? 'border-b-2 border-primary text-primary font-medium'
                      : 'text-base-content/60 hover:text-primary'
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-24">
            {Object.entries(pathways).map(([key, pathway]) => (
              <motion.div
                // initial={{ opacity: 0.5 }}
                // whileInView={{ opacity: 1 }}
                // viewport={{ amount: 0.8, once: false }}
                // transition={{ duration: 0.4, ease: 'easeIn' }}
                key={key}
                id={key}
                className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center scroll-mt-32"
              >
                {/* Left Image */}
                <div className="relative hidden md:flex justify-center md:justify-start">
                  {/* Background decorative element */}
                  <div className="absolute bottom-10 left-10 w-3/4 max-w-xs h-full">
                    <RevealImage className="w-full h-full">
                        <img
                        src="/assets/img/ui/accent.webp"
                        alt="Decorative shadow"
                        className="w-full h-full object-cover"
                        />
                    </RevealImage>
                  </div>

                  {/* Main Image */}
                  <RevealImage className="relative rounded-t-full shadow-xl w-full max-w-xs max-h-xs aspect-[3/4]">
                    <img
                      src={pathway.placeholderUrl || pathway.image}
                      alt={`${pathway.titlePrefix} ${pathway.highlight} ${pathway.titleSuffix}`}
                      className="w-full h-full object-cover transition-opacity duration-500"
                      loading="lazy"
                    />
                  </RevealImage>
                </div>

                {/* Right Content */}
                <FadeInWhenVisible>
                  <h3 className="text-3xl md:text-4xl font-serif text-base-content mb-4 leading-tight">
                    {pathway.titlePrefix}{' '}
                    <span className="italic font-serif text-primary">
                      {pathway.highlight}
                    </span>{' '}
                    {pathway.titleSuffix}
                  </h3>
                  <p className="text-lg text-base-content/80 font-sans mb-8">
                    {pathway.description}
                  </p>

                  <div className="grid grid-cols-1 gap-8 mb-8">
                    <div>
                      <h4 className="font-medium font-sans text-base-content mb-2">
                        Includes:
                      </h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-base-content/80">
                        {pathway.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium font-sans text-base-content mb-2">
                        Perfect for:
                      </h4>
                      <p className="text-base-content/80">
                        {pathway.perfectFor}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/treatments/${key}`}
                    className="btn btn-primary text-white px-8"
                  >
                    Explore
                  </Link>
                </FadeInWhenVisible>
              </motion.div>
            ))}
          </div>

          <div className='md:hidden flex mt-8'>
              <Link
              to='/pathways'
              className='btn btn-primary'>
                Learn More About Our Pathways
              </Link>
            </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-4">
              <span className="italic font-light text-primary">Who</span> We
              Help
            </h2>
            <p className="text-lg text-base-content/80 font-sans max-w-2xl">
              If your skin feels different, we help you understand <br />
              why, and what to do next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Postpartum */}
            <div className="group relative h-[500px] overflow-hidden cursor-pointer">
              <RevealImage className="absolute inset-0 w-full h-full">
              <img
                src="/assets/img/conditions/Postpartum.webp"
                alt="Postpartum Women"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              </RevealImage>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-sans font-medium mb-2">
                  Postpartum Women
                </h3>
                <p className="text-sm text-white/90 font-light leading-relaxed">
                  Pigmentation, skin dryness, abdominal laxity, sleep-deprived
                  dullness, fatigue.
                </p>
              </div>
            </div>

            {/* Card 2: Perimenopausal */}
            <div className="group relative h-[500px] overflow-hidden cursor-pointer">
              <RevealImage className="absolute inset-0 w-full h-full">
              <img
                src="/assets/img/conditions/Uneven tone.webp"
                alt="Perimenopausal Women"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              </RevealImage>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-sans font-medium mb-2">
                  Perimenopausal Women
                </h3>
                <p className="text-sm text-white/90 font-light leading-relaxed">
                  Unpredictable skin changes, new breakouts, uneven tone,
                  sensitivity, stress-related inflammation.
                </p>
              </div>
            </div>

            {/* Card 3: Menopausal */}
            <div className="group relative h-[500px] overflow-hidden cursor-pointer">
              <RevealImage className="absolute inset-0 w-full h-full">
              <img
                src="/assets/img/conditions/Menopausal skin condition.webp"
                alt="Menopausal Women"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              </RevealImage>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-sans font-medium mb-2">
                  Menopausal Women
                </h3>
                <p className="text-sm text-white/90 font-light leading-relaxed">
                  Loss of firmness, neck and jawline softening, thinning skin,
                  chronic dehydration, texture decline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-4">
                <span className="italic font-light text-primary">Ulanda</span>{' '}
                Programs
              </h2>
              <p className="text-lg text-base-content/80 font-sans">
                For women who want real, lasting transformation.
              </p>
            </div>
            <Link
              to="/treatments/radiate/programmes"
              className="btn hidden md:flex btn-primary text-white px-8 mt-6 md:mt-0"
            >
              Explore
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* Program 1 */}
            <Link
              to="/treatments/radiate/programmes/menopause-regeneration"
              className="group relative h-[400px] overflow-hidden cursor-pointer block"
            >
              <RevealImage className="absolute inset-0 w-full h-full">
              <img
                src="/assets/img/treatments/radiate/12 weeks menopause regeneration plan.webp"
                alt="12-Week Menopause Regeneration Plan"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              </RevealImage>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-medium font-sans leading-tight">
                  12-Week Menopause Regeneration Plan
                </h3>
              </div>
            </Link>

            {/* Program 2 */}
            <Link
              to="/treatments/radiate/programmes/under-eye-regeneration"
              className="group relative h-[400px] overflow-hidden cursor-pointer block"
            >
              <RevealImage className="absolute inset-0 w-full h-full">
              <img
                src="/assets/img/treatments/radiate/Under eye regeneration treatment.webp"
                alt="Under-Eye Regeneration Blueprint"
                width="1200"
                height="1600"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              </RevealImage>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-medium font-sans leading-tight">
                  Under-Eye Regeneration Blueprint
                </h3>
              </div>
            </Link>

            {/* Program 3 */}
            <Link
              to="/treatments/radiate/programmes/collagen-reset"
              className="group relative h-[400px] overflow-hidden cursor-pointer block"
            >
              <RevealImage className="absolute inset-0 w-full h-full">
              <img
                src="/assets/img/treatments/radiate/Collagen reset journey.webp"
                alt="Collagen Reset Journey"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              </RevealImage>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-medium font-sans leading-tight">
                  Collagen Reset Journey
                </h3>
              </div>
            </Link>

            {/* Program 4 */}
            <Link
              to="/treatments/radiate/programmes/hormone-smart-skin"
              className="group relative h-[400px] overflow-hidden cursor-pointer block"
            >
              <RevealImage className="absolute inset-0 w-full h-full">
              <img
                src="/assets/img/treatments/radiate/Radiate hormone smart skin programme.webp"
                alt="Radiate Hormone-Smart Skin Programme"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              </RevealImage>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-medium font-sans leading-tight">
                  Radiate Hormone-Smart Skin Programme
                </h3>
              </div>
            </Link>

            {/* Program 5 */}
            <Link
              to="/treatments/radiate/pathways/shape-and-regenerate"
              className="group relative h-[400px] overflow-hidden cursor-pointer block"
            >
              <RevealImage className="absolute inset-0 w-full h-full">
              <img
                src="/assets/img/treatments/radiate/Ulanda shape regenerate.webp"
                alt="ULANDA Shape & Regenerate™"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              </RevealImage>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-medium font-sans leading-tight">
                  ULANDA Shape & Regenerate™ <br />
                  <span className="text-sm font-light opacity-90">
                    (Body + Weight + Longevity)
                  </span>
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions We Treat Section */}
      <section className="py-24 bg-base-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex justify-between items-center w-full">
          <div className=" px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-4">
              <span className="italic font-light text-primary">Conditions</span>{' '}
              We Treat
            </h2>
            <p className="text-lg text-base-content/80 font-sans">
              We support a wide range of concerns, including:
            </p>
          </div>
          {/* <div className="max-w-7xl  px-4 md:px-8 mt-12 md:flex hidden justify-end">
            <button className="btn btn-primary text-white px-8">
              View All
            </button>
          </div> */}
        </div>

        <div className="flex flex-col gap-4 relative">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-scroll {
              animation: scroll 80s linear infinite;
            }
            .animate-scroll-reverse {
              animation: scroll-reverse 80s linear infinite;
            }
            .marquee-content:hover {
              animation-play-state: paused;
            }
          `}</style>

          {[
            [
              {
                text: 'Skin laxity',
                link: '/conditions/menopause-hormone-skin-changes',
              },
              {
                text: 'Uneven tone & pigmentation',
                link: '/conditions/pigmentation-and-skin-tone',
              },
              {
                text: 'Texture & pores',
                link: '/conditions/skin-texture-quality',
              },
              {
                text: 'Dark circles',
                link: '/conditions/eye-area/dark-circles',
              },
            ],
            [
              {
                text: 'Under-eye hollows',
                link: '/conditions/eye-area/tear-troughs',
              },
              {
                text: 'Crepey or thinning skin',
                link: '/conditions/menopause-hormone-skin-changes',
              },
              {
                text: 'Menopause skin changes',
                link: '/conditions/menopause-hormone-skin-changes',
              },
              {
                text: 'Postpartum skin changes',
                link: '/conditions/body-skin-concerns/post-weightloss-postpartum',
              },
            ],
            [
              {
                text: 'Body tightening needs',
                link: '/conditions/body-skin-concerns',
              },
              {
                text: 'Fatigue / inflammation-driven skin dullness',
                link: '/conditions/wellness-life-stage/fatigue-low-energy',
              },
              {
                text: 'Skin laxity',
                link: '/conditions/menopause-hormone-skin-changes',
              },
              {
                text: 'Uneven tone & pigmentation',
                link: '/conditions/pigmentation-and-skin-tone',
              },
            ],
          ].map((row, i) => (
            <div key={i} className="flex overflow-hidden w-full">
              <div
                className={`flex gap-4 whitespace-nowrap ${
                  i % 2 === 0 ? 'animate-scroll' : 'animate-scroll-reverse'
                } marquee-content px-3`}
              >
                {[...row, ...row, ...row, ...row].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="inline-block px-8 py-4 rounded-full text-lg font-medium bg-[#F5EFE7] text-[#6B3614] transition-all duration-300 hover:bg-[#6B3614] hover:text-white cursor-pointer"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:hidden flex justify-end">
          <button className="btn btn-primary text-white px-8">View All</button>
        </div> */}
      </section>

      {/* About Ulanda Section */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <FadeInWhenVisible className="order-1 ">
            <div className="inline-block px-8 py-2 rounded-full border bg-secondary border-primary/30 text-primary text-sm font-bold tracking-wider mb-8 uppercase">
              About Ulanda
            </div>

            <p className="text-lg text-base-content/80 font-sans mb-6 leading-relaxed">
              ULANDA was founded by{' '}
              <span className="font-bold text-[#6B3614]">
                Helen Balogun MSc, RN, RM, NIP
              </span>
              , an Advanced Nurse Practitioner with over 20 years of clinical
              experience in women's health.
            </p>

            <p className="text-lg text-base-content/80 font-sans mb-4">
              Her background spans:
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'nursing and midwifery',
                'postpartum and menopause support',
                'hormone education (HRT/BHRT)',
                'regenerative aesthetics',
                'patient safety and evidence-based care',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-base-content/80 font-sans"
                >
                  <span className="text-[#6B3614] mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-base-content/80 font-sans mb-8 leading-relaxed">
              ULANDA reflects her vision of a space where women feel genuinely
              understood, medically, hormonally and emotionally.
            </p>

            <button
              onClick={() => (window.location.href = '/about/our-founder')}
              className="hidden md:flex btn btn-primary text-white px-8"
            >
              Meet Helen
            </button>
          </FadeInWhenVisible>

          {/* Right Image */}
          <div className="relative flex justify-center order-2">
            {/* Arch Container */}
            <RevealImage className="max-w-sm aspect-[3/4] w-full">
                <img
                src="assets/img/home/ulanda-helen-balogun-founder-ware.webp"
                alt=""
                width="384"
                height="500"
                className="w-full h-full object-cover"
                />
            </RevealImage>
          </div>
        </div>
        <button
          onClick={() => (window.location.href = '/about/our-founder')}
          className="md:hidden mt-4 flex btn btn-primary text-white px-8"
        >
          Meet Helen
        </button>
      </section>

      {/* Why Choose Ulanda Section */}
      <section className="py-24 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-12">
            Why <span className="italic font-light text-primary">Women</span>{' '}
            Choose Ulanda
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Natural-looking results — never overdone',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 22c1.25-.97 2.56-2.2 3.8-3.6 2.6-3 4.2-6.8 4.2-10.4C10 4.1 6.9 1 3 1c0 3.9 3.1 7 7 7 3.6 0 7.4-1.6 10.4-4.2 1.4-1.24 2.63-2.55 3.6-3.8-1.25.97-2.56 2.2-3.8 3.6-2.6 3-4.2 6.8-4.2 10.4 0 3.9 3.1 7 7 7 0-3.9-3.1-7-7-7-3.6 0-7.4 1.6-10.4 4.2-1.4 1.24-2.63 2.55-3.6 3.8z" />
                  </svg>
                ),
              },
              {
                title: 'Aesthetic expertise + hormone insight',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                ),
              },
              {
                title: 'Personalised plans, not one-size-fits-all',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ),
              },
              {
                title: 'Advanced regenerative treatments',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                  </svg>
                ),
              },
              {
                title: 'Internal wellness integration',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2.5c0 0-4.5 4.5-4.5 9.5a4.5 4.5 0 0 0 9 0c0-5-4.5-9.5-4.5-9.5z" />
                    <path d="M12 21.5c0 0 4.5-4.5 4.5-9.5a4.5 4.5 0 0 0-9 0c0 5 4.5 9.5 4.5 9.5z" />
                    <path d="M2.5 12c0 0 4.5-4.5 9.5-4.5a4.5 4.5 0 0 1 0 9c-5 0-9.5-4.5-9.5-4.5z" />
                    <path d="M21.5 12c0 0-4.5 4.5-9.5 4.5a4.5 4.5 0 0 1 0-9c5 0 9.5 4.5 9.5 4.5z" />
                  </svg>
                ),
              },
              {
                title: 'AI Skin Analysis for precision',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                  </svg>
                ),
              },
              {
                title: 'A warm, private, luxurious environment',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 3h12l4 6-10 13L2 9Z" />
                    <path d="M11 3 8 9l4 13 4-13-3-6" />
                    <path d="M2 9h20" />
                  </svg>
                ),
              },
              {
                title: 'Nurse-led, safety-first care',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M8 11h8" />
                    <path d="M12 7v8" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-secondary rounded-xl p-8 h-48 overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Background Icon */}
                <div className="absolute -top-4 -left-4 w-40 h-40 text-primary opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-end">
                  <h3 className="text-xl font-medium text-primary font-sans leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 bg-secondary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">
            Feel <span className="italic font-light">brighter</span>. Feel{' '}
            <span className="italic font-light">firmer</span>. Feel{' '}
            <span className="italic font-light">balanced</span>.
            <br />
          </h2>
          <span className="block my-4">Feel like yourself again.</span>
          <p className="text-lg md:text-xl text-text font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
            ULANDA is here to support your skin, your confidence and your
            wellbeing at every stage, postpartum, perimenopause or menopause.
          </p>

          <a href="https://ulanda-100633.square.site/" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white px-10 py-4 h-auto text-lg rounded-lg">
            Book Your Consultation
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">FAQs</h2>
            <p className="text-white/80 font-sans text-lg">
              Common questions about our regenerative approach
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-black text-lg pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 text-black ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === index
                      ? 'max-h-96 opacity-100' // Increased max-height for potential long answers
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 font-sans">
                    {faq.answer}
                    {faq.linkId && (
                      <div className="mt-3">
                        <Link
                          to={
                            faq.linkId.startsWith('/')
                              ? faq.linkId
                              : `/conditions/${faq.linkId.split('/')[1] || ''}`
                          }
                          className="text-primary font-medium hover:underline"
                        >
                          {faq.linkText || 'Learn more'}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/help-and-support"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
