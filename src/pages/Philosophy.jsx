import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import ConsultationCTA from '../components/ConsultationCTA';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { signaturePathways } from '../data/pageContents/signature/signatureData';
import { philosophyData } from '../data/pageContents/philosophy/philosophy';

const regenerativeSystems = philosophyData.regenerativeSystems.list;

const clinicValues = [
  'science meets sanctuary',
  "aesthetics meets women's health",
  'hormones meet skin regeneration',
  'internal wellness supports external beauty',
  'your confidence grows as naturally as your collagen',
];

const respectPoints = [
  'their biology',
  'their ageing process',
  'their hormonal journey',
  'their lived experience',
  'their time',
  'their individuality',
];

export default function Philosophy() {

  return (
    <>
      <Head>
        <title>Our Philosophy | ULANDA Skin Clinic Ware</title>
        <meta
          name="description"
          content="ULANDA philosophy: Regeneration, Hormone Intelligence & Personalised Care for every stage of womanhood. Treating root causes, not just symptoms."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/about/our-philosophy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Philosophy | ULANDA" />
        <meta name="twitter:description" content="Regeneration, Hormone Intelligence & Personalised Care for every stage of womanhood. Treating root causes, not just symptoms." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <div className="bg-base-100 text-base-content">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
          <FadeInWhenVisible>
            <div className="inline-block px-8 py-2 rounded-full border bg-secondary border-primary/30 text-primary text-sm font-bold tracking-wider mb-4 uppercase">
              Our Philosophy
            </div>
          </FadeInWhenVisible>
          <HeroText className="text-3xl md:text-4xl font-serif leading-tight">
            <span className="italic text-primary">Regeneration.</span> Hormone
            Intelligence.{' '}
            <span className="italic text-primary">Personalised Care</span> for
            Every Stage of Womanhood.
          </HeroText>
          <FadeInWhenVisible>
            <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
              <p>
                At ULANDA, we believe that a woman's skin, health and confidence
                are shaped by her biology — and that biology evolves through
                postpartum recovery, perimenopause transition and the menopause
                journey.
              </p>
              <p>
                These stages share the same underlying changes: deeper collagen
                loss, disrupted hormones, inflammation, dryness, slower repair,
                stress reactivity and energy decline.
              </p>
              <p className="font-medium text-base-content">
                That is why our philosophy is simple:
              </p>
              <div className="pl-4 border-l-2 border-primary space-y-2">
                <p>To regenerate your skin, we must understand your hormones.</p>
                <p>
                  To support your hormones, we must care for your cellular health.
                </p>
                <p>
                  To elevate your confidence, we must honour your entire journey.
                </p>
              </div>
              <p className="font-medium text-base-content">
                ULANDA exists to bring all of these together.
              </p>
            </div>
          </FadeInWhenVisible>
          <div className="aspect-video w-full overflow-hidden">
            <img
              src="/assets/img/treatments/renew/skin-clinic-ware-Facials-Refresh.webp"
              alt=""
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* The ULANDA Way */}
        <section className="py-24 px-4 md:px-8 bg-secondary/40">
          <FadeInWhenVisible>
            <div className="max-w-6xl mx-auto space-y-6 text-center">
              <p className="font-medium font-serif text-3xl">
                The <span className="italic text-primary">Ulanda</span> Way
              </p>
              <h2 className="text-xl font-sans italic leading-relaxed">
                <span className="italic font-serif">Regeneration</span> before
                correction.
                <br />
                <span className="italic font-serif">Biology</span> before beauty.
                <br />
                <span className="italic font-serif">You</span> before the
                treatment.
              </h2>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Regenerative-First Approach */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  A{' '}
                  <span className="italic text-primary">Regenerative-First</span>{' '}
                  Approach
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  Traditional aesthetics focus on covering signs of ageing. ULANDA
                  focuses on correcting the cause.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  We rebuild the systems beneath your skin:
                </p>
                <div className="mt-4">
                  <ul className="grid sm:grid-cols-2 gap-3 text-base md:text-lg font-sans font-light text-base-content/90">
                    {regenerativeSystems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-base md:text-lg font-sans font-light text-base-content/90 mt-6">
                    When these systems are healed, your skin regenerates naturally
                    — brighter, firmer, healthier and more resilient. This is why
                    our results look so natural, and why they last longer.
                    <br />
                    <span className="block mt-4">
                      This approach is grounded in our <Link to="/about/manifesto" className="text-primary font-bold hover:underline inline-flex items-center gap-0.5">Scientific Manifesto <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg></Link>.
                    </span>
                  </p>
                </div>
              </FadeInWhenVisible>
            </div>
            <div className="relative order-1 md:order-2 flex justify-center">
              {/* Background decorative element (Accent Image) */}
              <div className="absolute bottom-10 right-0 md:-right-2 w-3/4 h-full">
                <RevealImage className="w-full h-full">
                  <img
                    src="/assets/img/ui/accent.webp"
                    alt="Decorative shadow"
                    className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                  />
                </RevealImage>
              </div>

              {/* Main Image */}
              <div className="relative rounded-t-full overflow-hidden w-full max-w-xs max-h-xs aspect-[3/4]">
                <RevealImage className="w-full h-full">
                  <img
                    src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Facial treatment"
                    width="1200"
                    height="1600"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </RevealImage>
              </div>
            </div>
          </div>
        </section>

        {/* Personalised for Your Hormonal Life Stage */}
        <section className="py-16 px-4 md:px-8 bg-secondary/40">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  Personalised for Your{' '}
                  <span className="italic text-primary">
                    Hormonal Life Stage
                  </span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  Every woman's journey is unique. Every treatment plan must
                  honour where she is today.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
                  ULANDA specialises in the three major hormonal transitions:
                </p>
              </FadeInWhenVisible>
            </div>
            <FadeInWhenVisible>
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
            </FadeInWhenVisible>
            <p className="text-base md:text-lg font-sans font-light text-base-content/90">
              We design your plan based on the physiology driving your skin —
              not just what is visible on the surface. Learn more about <Link to="/conditions/menopause-hormone-skin-changes" className="text-primary font-bold hover:underline inline-flex items-center gap-0.5">Menopause & Hormone Skin Changes <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg></Link>.
            </p>
          </div>
        </section>

        {/* Signatures Section */}
        <section className="py-24 px-4 md:px-8 bg-base-100">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible className="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6">
                  ULANDA{' '}
                  <span className="italic font-light text-primary">
                    Signatures
                  </span>
                </h2>
                <p className="text-lg text-base-content/80 font-sans max-w-2xl">
                  Structured, nurse-led programmes designed around your skin
                  behaviour, biology and long-term goals.
                </p>
              </div>
              <Link to="/signature" className="btn btn-primary whitespace-nowrap">
                Explore All Signatures
              </Link>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {signaturePathways.map((sig) => (
                <FadeInWhenVisible key={sig.id}>
                  <Link
                    to={sig.url}
                    className="group block bg-secondary/30 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={sig.image}
                        alt={sig.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif text-base-content mb-1">
                        {sig.title}
                      </h3>
                      <p className="text-sm text-primary font-sans mb-3">
                        {sig.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sig.concerns.split(', ').slice(0, 3).map((c) => (
                          <span
                            key={c}
                            className="text-xs bg-secondary px-3 py-1 rounded-full text-base-content/70"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Learn More <span className="ml-1">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Clinic Values */}
        <section className="py-24 px-4 md:px-8 bg-secondary/40">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 mx-auto">
            <div className="mx-auto space-y-6">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  A Clinic Designed for Women Who Want{' '}
                  <span className="italic text-primary">
                    More Than A Quick Fix
                  </span>
                </h2>
                <p className="text-base md:text-lg font-sans font-light text-base-content/90">
                  ULANDA is a sanctuary where:
                </p>
                <ul className="grid gap-3 text-base md:text-lg font-sans font-light text-base-content/90">
                  {clinicValues.map((value) => (
                    <li key={value} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base md:text-lg font-sans font-light text-base-content/90">
                  We bring medical expertise into a space that feels warm,
                  feminine and deeply supportive.
                </p>
              </FadeInWhenVisible>
            </div>
            <RevealImage className="w-full h-full">
              <img
                src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                className="h-full object-cover"
              />
            </RevealImage>
          </div>
        </section>

        {/* Why Regenerative Care Matters */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <FadeInWhenVisible>
                <h2 className="text-2xl md:text-3xl font-serif">
                  Why{' '}
                  <span className="italic text-primary">Regenerative Care</span>{' '}
                  Matters
                </h2>
                <p className="text-base md:text-lg font-sans font-light text-base-content/90">
                  Women deserve care that respects:
                </p>
                <ul className="space-y-2 text-base md:text-lg font-sans font-light text-base-content/90">
                  {respectPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
            </div>
            <div className="space-y-4 text-base md:text-lg leading-relaxed font-sans font-light text-base-content/90">
              <FadeInWhenVisible>
                <p>We don't rush.</p>
                <p>We don't overfill.</p>
                <p>We don't ignore the systems beneath the skin.</p>
                <p>
                  We take a complete view of you — your skin, your hormones, your
                  lifestyle, your stress, your sleep, your energy — and support
                  all of it.
                </p>
                <div className="pt-4 space-y-2 font-medium text-base-content">
                  <p>This is regenerative aesthetics.</p>
                  <p>This is biology-informed skincare.</p>
                  <p>This is women's health done properly.</p>
                  <p className="text-primary">This is ULANDA.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-24 px-4 md:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <FadeInWhenVisible>
              <p className="text-secondary font-serif text-3xl md:text-4xl">
                A <span className="italic ">Promise</span> to Every Woman Who
                Walks Through Our Door
              </p>
              <blockquote className="text-xl md:text-2xl font-sans leading-relaxed text-secondary font-normal space-y-3">
                <p>"We will see you.</p>
                <p>We will listen to you.</p>
                <p>We will understand your biology.</p>
                <p>We will honour your journey.</p>
                <p>And we will regenerate your skin from the inside out."</p>
              </blockquote>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <HeroText className="text-3xl md:text-4xl font-serif leading-tight text-center">
              Ready to experience{' '}
              <span className="italic text-primary">regenerative care</span>?
            </HeroText>
            <FadeInWhenVisible>
              <p className="text-base md:text-lg font-sans font-light text-base-content/90 leading-relaxed">
                Your journey to natural, long-lasting transformation starts with a
                personalised consultation.
              </p>
              <a href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white px-8 py-3 h-auto rounded-lg">
                Book Advanced Skin Health Consultation
              </a>
            </FadeInWhenVisible>
          </div>
        </section>
        <ConsultationCTA />
      </div>
    </>
  );
}
