import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Award,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  Train,
  Car,
  BookOpen,
  ChevronDown,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import HeroText from '../../components/animations/HeroText';
import FadeInWhenVisible from '../../components/animations/FadeInWhenVisible';
import { RevealImage } from '../../components/animations';

const BOOKING_URL =
  'https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ';
const NEWSLETTER_URL = 'http://eepurl.com/jsdn42';

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness', 'MedicalBusiness'],
      '@id': 'https://www.ulanda.co.uk/#medicalbusiness',
      name: 'ULANDA Skin Clinic Ware',
      url: 'https://www.ulanda.co.uk/locations/aesthetic-clinic-ware',
      image: 'https://www.ulanda.co.uk/og-image.jpg',
      telephone: '+44 7904 336031',
      email: 'info@ulanda.co.uk',
      priceRange: '£££',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Uphaven, 6 Hampden Hill',
        addressLocality: 'Ware',
        addressRegion: 'Hertfordshire',
        postalCode: 'SG12 7JT',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '51.8094',
        longitude: '-0.0316',
      },
      areaServed: [
        { '@type': 'City', name: 'Ware' },
        { '@type': 'City', name: 'Hertford' },
        { '@type': 'City', name: 'Broxbourne' },
        { '@type': 'City', name: 'Hoddesdon' },
        { '@type': 'City', name: "Bishop's Stortford" },
        { '@type': 'City', name: 'Buntingford' },
        { '@type': 'City', name: 'Stanstead Abbotts' },
        { '@type': 'City', name: 'Great Amwell' },
        { '@type': 'AdministrativeArea', name: 'Hertfordshire' },
        { '@type': 'AdministrativeArea', name: 'North London' },
      ],
      hasMap:
        'https://maps.google.com/maps?q=Uphaven,+6+Hampden+Hill,+Ware+SG12+7JT',
      sameAs: [
        'https://www.instagram.com/ulandamedspa',
        'https://www.facebook.com/ulandamedspa',
      ],
    },
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://www.ulanda.co.uk/locations/aesthetic-clinic-ware',
      url: 'https://www.ulanda.co.uk/locations/aesthetic-clinic-ware',
      name: 'Skin Clinic in Ware | ULANDA',
      description:
        'Consultation-led aesthetic clinic in Ware, Hertfordshire specializing in skin health, healthy ageing, and regenerative aesthetics.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://www.ulanda.co.uk/locations/aesthetic-clinic-ware#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.ulanda.co.uk/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Locations',
          item: 'https://www.ulanda.co.uk/locations/aesthetic-clinic-hertfordshire',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ware Clinic',
          item: 'https://www.ulanda.co.uk/locations/aesthetic-clinic-ware',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is ULANDA a skin clinic in Ware?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ULANDA is a consultation-led Skin Clinic & Women\'s Health Practice located in Ware, Hertfordshire (SG12 7JT).',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do clients travel to ULANDA from outside Ware?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many clients travel from across Hertfordshire and North London because they are looking for a consultation-led approach to skin health rather than a treatment-led experience.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is parking available at ULANDA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Complimentary client parking is available on site with no parking charges or town-centre restrictions.',
          },
        },
      ],
    },
  ],
};

const areasServed = [
  { name: 'Ware', link: '/locations/aesthetic-clinic-ware' },
  { name: 'Hertford', link: '/locations/aesthetic-clinic-hertford' },
  { name: 'Broxbourne', link: '/locations/aesthetic-clinic-broxbourne' },
  { name: 'Hoddesdon', link: '/locations/aesthetic-clinic-hoddesdon' },
  { name: "Bishop's Stortford", link: '/locations/aesthetic-clinic-bishops-stortford' },
  { name: 'Buntingford', link: '/locations/aesthetic-clinic-buntingford' },
  { name: 'Stanstead Abbotts', link: '/locations/aesthetic-clinic-stanstead-abbotts' },
  { name: 'Great Amwell', link: '/locations/aesthetic-clinic-great-amwell' },
];

const skinConcerns = [
  { title: 'Healthy Ageing', link: '/conditions' },
  { title: 'Skin Quality Decline', link: '/conditions' },
  { title: 'Under-Eye Concerns', link: '/conditions/eye-area' },
  { title: 'Menopause Skin Changes', link: '/conditions/menopause-hormone-skin-changes' },
  { title: 'Hormonal Skin Concerns', link: '/conditions/menopause-hormone-skin-changes' },
  { title: 'Pigmentation', link: '/conditions/pigmentation-and-skin-tone' },
  { title: 'Rosacea & Redness', link: '/conditions/redness-sensitivity-reactive-skin' },
  { title: 'Acne & Texture', link: '/conditions/acne-texture' },
  { title: 'Skin Sensitivity', link: '/conditions/redness-sensitivity-reactive-skin' },
  { title: 'Skin Barrier Issues', link: '/conditions/dehydration-dullness-skin-recovery' },
  { title: 'Collagen Decline', link: '/conditions/menopause-hormone-skin-changes' },
  { title: 'Dehydration', link: '/conditions/dehydration-dullness-skin-recovery' },
];

const treatments = [
  {
    title: 'Anti-Wrinkle Injections',
    description: 'Conservative treatments for expression lines',
    link: '/treatments/structural-collagen-support/anti-wrinkle-injections',
  },
  {
    title: 'Skin Boosters',
    description: 'Hydration-focused injectables',
    link: '/treatments/injectable-skin-optimisation/profhilo',
  },
  {
    title: 'Polynucleotides',
    description: 'Regenerative injectables for tissue repair',
    link: '/treatments/skin-renewal-regeneration/polynucleotides',
  },
  {
    title: 'Microneedling',
    description: 'Collagen induction therapy',
    link: '/treatments/skin-renewal-regeneration/microneedling',
  },
  {
    title: 'Chemical Peels',
    description: 'Professional skin renewal treatments',
    link: '/treatments/skin-renewal-regeneration/chemical-peel',
  },
  {
    title: 'Dermal Fillers',
    description: 'Structural collagen support',
    link: '/treatments/structural-collagen-support/dermal-fillers',
  },
];

const whyChoosePoints = [
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Consultation-Led Approach',
    description:
      'We begin with understanding your skin, not recommending treatments',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Advanced Nurse Practitioner',
    description: 'Led by Helen Balogun MSc RN ANP with deep clinical expertise',
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Time & Attention',
    description:
      'Unhurried consultations focused on understanding your unique needs',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Natural Results',
    description: 'Long-term skin health prioritized over quick fixes',
  },
];

export default function AestheticClinicWare() {
  return (
    <>
      <Head>
        <title>Skin Clinic Ware | Consultation-Led Aesthetics | ULANDA</title>
        <meta
          name="description"
          content="ULANDA is a consultation-led skin clinic in Ware, Hertfordshire, specializing in skin barrier repair, hormonal skin changes, and regenerative aesthetics. Free parking."
        />
        <meta
          name="keywords"
          content="skin clinic Ware, aesthetic clinic Ware, dermatology Ware, skin health Hertfordshire"
        />
        <link
          rel="canonical"
          href="https://www.ulanda.co.uk/locations/aesthetic-clinic-ware"
        />
        <script type="application/ld+json">
          {JSON.stringify(locationSchema)}
        </script>
      </Head>

      <div className="bg-base-100 min-h-screen font-sans">
        <Breadcrumbs />

        {/* ===== HERO SECTION ===== */}
        <section className=" overflow-hidden">
          {/* <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" /> */}
          <div className="max-w-7xl mx-auto px-4 py-10 relative z-10">
            <div className="max-w-4xl">
              <FadeInWhenVisible>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                  <MapPin className="w-4 h-4" /> Ware, Hertfordshire (SG12 7JT)
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-base-content leading-tight mb-8">
                  <HeroText>
                    A Consultation-Led Skin Clinic for Healthy Ageing & Skin Health
                  </HeroText>
                </h1>
                <p className="text-xl md:text-2xl font-light text-base-content/80 mb-10 leading-relaxed">
                  Understanding Before Treatment™
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-12">
                  <div className="flex items-center gap-2 text-sm font-medium text-base-content/70">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Free On-Site Parking
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-base-content/70">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Advanced Nurse Practitioner Led
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-base-content/70">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Appointment Only
                  </div>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white btn-lg no-animation shadow-lg shadow-primary/20"
                >
                  Book Your Consultation
                  
                </a>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* ===== UNDERSTANDING BEFORE TREATMENT ===== */}
        <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
            <FadeInWhenVisible>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-8">
                  Many women know their skin has changed but are unsure why.
                </h2>
                <div className="space-y-6 text-base-content/80 text-lg leading-relaxed">
                  <p>
                    Perhaps your skin looks more tired than you feel. Perhaps it feels drier,
                    less radiant or less like itself than it once did. Perhaps pigmentation has
                    become more noticeable, your under-eye area has changed, or your skin no
                    longer seems to respond the way it used to.
                  </p>
                  <p className="text-xl font-medium text-base-content border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-xl">
                    At ULANDA, we believe understanding those changes should come before treatment.
                  </p>
                  <p>
                    Located in Ware, Hertfordshire, ULANDA is a consultation-led Skin Clinic &
                    Women's Health Practice supporting clients from across Hertfordshire and North
                    London with healthy ageing, skin quality concerns, hormonal skin changes and
                    regenerative aesthetics.
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-10 lg:p-12 border border-primary/20 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-base-content mb-8 flex items-center gap-3">
                    <HeartPulse className="w-6 h-6 text-primary flex-shrink-0" /> Understanding
                    Before Treatment™
                  </h3>
                  <ul className="space-y-5">
                    {[
                      'What has changed',
                      'Why it may be changing',
                      'What is influencing skin behaviour',
                      'Which treatment options are appropriate',
                      'Whether treatment is needed at all',
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-base-content/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* ===== WHY CHOOSE ULANDA ===== */}
        <section className="bg-base-200/50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeInWhenVisible>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6">
                  Why Clients Travel to ULANDA
                </h2>
                <p className="text-lg text-base-content/80 leading-relaxed">
                  Many of our clients travel from Hertford, Broxbourne, Hoddesdon, Bishop's
                  Stortford, Cheshunt, St Albans, and North London because they are looking for
                  more than just a treatment appointment.
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoosePoints.map((point, idx) => (
                <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                  <div className="bg-base-100 rounded-2xl p-8 shadow-sm border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-serif text-base-content mb-3">{point.title}</h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CLIENT QUOTES ===== */}
        <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-8">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-serif text-center text-base-content mb-16">
              What Clients Often Tell Us
            </h2>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              'My skin looks more tired than I feel.',
              'My skin feels drier than it used to.',
              "My skin doesn't feel as firm or bouncy as it once did.",
              'My under-eye area has changed.',
              'Pigmentation seems more noticeable than before.',
              "My skin doesn't seem to behave the way it used to.",
            ].map((quote, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/30 relative">
                  <span className="text-6xl text-primary/20 font-serif leading-none absolute top-3 left-4">
                    "
                  </span>
                  <p className="text-lg font-serif text-base-content/90 relative z-10 pt-4 italic">
                    "{quote}"
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10 max-w-3xl mx-auto">
              <p className="text-center text-base-content/80 text-lg leading-relaxed">
                These changes often become more noticeable during periods of hormonal change,
                collagen decline, increased skin sensitivity, environmental stress or natural
                ageing processes. Understanding what is driving these changes is the first step
                towards improving confidence in your skin.
              </p>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* ===== MEET HELEN ===== */}
        <section className="py-20 md:py-32 bg-base-200/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
              <FadeInWhenVisible>
                <div className="relative flex justify-center">
                  <RevealImage className="max-w-sm aspect-[3/4] w-full">
                    <img
                      src="/assets/img/home/ulanda-helen-balogun-founder-ware.webp"
                      alt="Helen Balogun, Founder & Clinical Director"
                      className="w-full h-full object-cover rounded-2xl"
                      fetchpriority="high"
                    />
                  </RevealImage>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-primary text-sm font-medium mb-6">
                    <Award className="w-4 h-4" /> Clinical Director
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-2">
                    Meet Helen Balogun
                  </h2>
                  <p className="text-xl text-base-content/60 font-light mb-8">MSc RN ANP</p>
                  
                  <div className="space-y-6 text-base-content/80 text-lg leading-relaxed mb-10">
                    <p>
                      ULANDA was founded by Helen Balogun, an Advanced Nurse Practitioner with a
                      passion for helping women understand the changes occurring within their skin
                      and overall wellbeing.
                    </p>
                    <p>
                      Her approach combines clinical assessment, skin health expertise, and
                      personalised treatment planning to help clients make informed decisions about
                      their skin.
                    </p>
                    <p>
                      Rather than focusing solely on procedures, Helen's consultations explore the
                      wider factors influencing skin behaviour, including skin barrier health,
                      hormonal influences, healthy ageing, collagen decline, and environmental
                      factors.
                    </p>
                  </div>

                  <Link
                    to="/about/our-founder"
                    className="group inline-flex items-center gap-2 text-primary font-medium text-lg hover:gap-3 transition-all"
                  >
                    Read Helen's Full Credentials
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* ===== COMMON CONCERNS & TREATMENTS ===== */}
        <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-8">
          <FadeInWhenVisible>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6">
                Common Skin Concerns We Support
              </h2>
              <p className="text-lg text-base-content/80">
                Every concern is different. Our consultation-led approach ensures personalized
                recommendations tailored to your unique skin needs.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {skinConcerns.map((concern, idx) => (
              // <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                <Link
                  to={concern.link}
                  className="group bg-base-100 border border-base-content/5 hover:border-primary/30 rounded-xl p-5 transition-all hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-base-content group-hover:text-primary transition-colors">
                      {concern.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-base-content/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              // </FadeInWhenVisible>
            ))}
          </div>

          {/* Popular Treatment Pathways */}
          <FadeInWhenVisible>
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-serif text-base-content mb-12 text-center">
                Popular Treatment Pathways
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatments.map((treatment, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                    <Link to={treatment.link}>
                      <div className="group bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:border-primary/50 rounded-2xl p-8 h-full transition-all hover:shadow-lg cursor-pointer">
                        <h4 className="text-xl font-serif text-base-content mb-2 group-hover:text-primary transition-colors">
                          {treatment.title}
                        </h4>
                        <p className="text-base-content/70 mb-6">{treatment.description}</p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="bg-primary text-primary-content py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-white">
                Client Experiences
              </h2>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: '"I finally understood what was happening with my skin."',
                  description:
                    'Many clients tell us that the consultation helped them make sense of changes they had been struggling to understand for months or even years.',
                },
                {
                  quote: '"I felt listened to rather than sold to."',
                  description:
                    'Many clients appreciate the calm, educational and clinically guided experience that allows them to make informed decisions without pressure.',
                },
                {
                  quote: '"I left with a clear plan and confidence in what to do next."',
                  description:
                    'Whether treatment is recommended immediately or not, our goal is for every client to leave with a clear pathway forward.',
                },
              ].map((testimonial, idx) => (
                <FadeInWhenVisible key={idx} delay={idx * 0.15}>
                  <div className="bg-primary-content/10 backdrop-blur-sm border border-primary-content/20 rounded-2xl p-8 h-full">
                    <p className="font-serif text-xl text-white mb-6 leading-snug">
                      {testimonial.quote}
                    </p>
                    <p className="text-primary-content/80 text-sm leading-relaxed">
                      {testimonial.description}
                    </p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ACCESSIBILITY SECTION ===== */}
        <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-8">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-16 text-center">
              Easy To Reach From Across Hertfordshire & North London
            </h2>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-3 gap-8">
            {/* By Train */}
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-base-100 rounded-2xl p-10 border border-base-content/5 hover:border-primary/20 transition-all h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Train className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif text-base-content mb-4">By Train</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ware Railway Station is located a short distance from the clinic and provides
                  convenient rail connections from Hertford East, Broxbourne, Cheshunt, Tottenham
                  Hale and London Liverpool Street.
                </p>
                <p className="text-sm text-base-content/60">
                  Many clients travelling from North London find Ware an accessible and convenient
                  alternative to city-centre clinics.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* By Car */}
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-base-100 rounded-2xl p-10 border border-base-content/5 hover:border-primary/20 transition-all h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Car className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif text-base-content mb-4">By Car</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  The clinic is easily accessible from the A10 and surrounding Hertfordshire road
                  network. Many clients travel from across the region because of convenient access.
                </p>
                <p className="text-sm text-base-content/60">
                  Also just a short distance from Ware High Street, making appointments easy to
                  combine with shopping or lunch in town.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Free Parking */}
            <FadeInWhenVisible delay={0.3}>
              <div className="bg-base-100 rounded-2xl p-10 border border-base-content/5 hover:border-primary/20 transition-all h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif text-base-content mb-4">Free Client Parking</h3>
                <ul className="text-base-content/80 space-y-2 mb-4 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span> No parking charges
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span> No permit restrictions
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span> No town-centre parking stress
                  </li>
                </ul>
                <p className="text-sm text-base-content/60">
                  Simply arrive, park and focus on your appointment.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* ===== CONSULTATION CTA ===== */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-secondary/5 via-base-100 to-primary/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
            <FadeInWhenVisible>
              <Award className="w-16 h-16 text-primary mx-auto mb-8 opacity-80" />
              <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-8">
                The Advanced Skin Health Consultation
              </h2>
              <p className="text-xl text-base-content/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Every new client begins here. This appointment provides the foundation for
                understanding your skin and developing a personalised treatment plan.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
                {[
                  'Clinical Assessment',
                  'AI Skin Analysis',
                  'Barrier Evaluation',
                  'Personalised Plan',
                ].map((item, idx) => (
                  <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                    <div className="bg-white shadow-sm px-5 py-3 rounded-full border border-base-content/5 text-sm font-medium text-base-content/80">
                      {item}
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>

              <div className="bg-white shadow-xl rounded-3xl p-12 mb-8 border border-base-content/10 max-w-2xl mx-auto">
                <p className="text-5xl font-serif text-base-content mb-3">£175</p>
                <p className="text-base-content/70 mb-10 text-lg">
                  Fully redeemable against eligible treatment plans.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white btn-wide btn-lg h-16 text-lg rounded-full no-animation shadow-lg shadow-primary/20"
                >
                  Book Your Consultation
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* ===== LOCATION & CONTACT ===== */}
        <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            <FadeInWhenVisible>
              <div className="bg-white rounded-3xl p-12 border border-base-content/10 shadow-xl shadow-base-content/5">
                <h3 className="text-2xl lg:text-3xl font-serif text-base-content mb-8 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" /> Location & Contact
                </h3>
                
                <address className="not-italic mb-10">
                  <p className="font-bold text-base-content text-lg mb-2">ULANDA Skin Clinic</p>
                  <p className="text-base-content/80 text-lg leading-relaxed">
                    Uphaven, 6 Hampden Hill
                    <br />
                    Ware, Hertfordshire
                    <br />
                    SG12 7JT
                  </p>
                </address>

                <div className="space-y-4 pt-8 border-t border-base-content/5">
                  <a
                    href="tel:+447904336031"
                    className="flex items-center gap-4 hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-base-content/60">Phone</p>
                      <p className="font-medium text-base-content">+44 7904 336031</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@ulanda.co.uk"
                    className="flex items-center gap-4 hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-base-content/60">Email</p>
                      <p className="font-medium text-base-content">info@ulanda.co.uk</p>
                    </div>
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div>
                <h3 className="text-2xl lg:text-3xl font-serif text-base-content mb-8">
                  Serving Ware & Surrounding Areas
                </h3>
                <p className="text-base-content/80 text-lg mb-10 leading-relaxed">
                  Clients visiting ULANDA from Ware often travel from surrounding areas. We also
                  welcome clients from across Hertfordshire and North London.
                </p>

                <div className="flex flex-wrap gap-3">
                  {areasServed.map((area, i) => (
                    <Link
                      key={i}
                      to={area.link}
                      className="px-5 py-3 bg-base-100 rounded-full text-sm font-medium border border-primary/30 hover:border-primary/50 text-base-content hover:bg-primary/5 transition-all shadow-sm"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                  <h4 className="font-serif text-lg text-base-content mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" /> Newsletter
                  </h4>
                  <p className="text-base-content/80 text-sm mb-6 leading-relaxed">
                    Join women across Ware, Hertfordshire and North London receiving clinical
                    insights from Helen Balogun. No promotions, no sales—just clinical
                    intelligence when it's useful.
                  </p>
                  <a
                    href={NEWSLETTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium text-sm hover:gap-2 inline-flex items-center gap-1 transition-all"
                  >
                    Subscribe Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="bg-base-200/50 py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-16 text-center">
                Frequently Asked Questions
              </h2>
            </FadeInWhenVisible>

            <div className="space-y-6">
              {[
                {
                  q: 'Is ULANDA a skin clinic in Ware?',
                  a: 'Yes. ULANDA is a consultation-led Skin Clinic & Women\'s Health Practice located in Ware, Hertfordshire (SG12 7JT), supporting clients from Ware, Hertford, Broxbourne, Hoddesdon, Bishop\'s Stortford, St Albans and North London.',
                },
                {
                  q: 'Why do clients travel to ULANDA from outside Ware?',
                  a: 'Many clients travel from across Hertfordshire and North London because they are looking for a consultation-led approach to skin health rather than a treatment-led experience. ULANDA is built around Understanding Before Treatment™.',
                },
                {
                  q: 'What makes ULANDA different from other skin clinics?',
                  a: 'Many clinics begin with treatment selection. ULANDA begins with understanding. Our consultation process focuses on understanding skin behaviour, barrier health, hormonal influences, and skin quality before developing treatment recommendations.',
                },
                {
                  q: 'Do I need a consultation before treatment?',
                  a: 'Yes. All new clients begin with an Advanced Skin Health Consultation. This ensures recommendations are personalised, appropriate and aligned with your skin concerns and goals.',
                },
                {
                  q: 'Do you support menopause-related skin changes?',
                  a: 'Yes. Many clients seek support for concerns associated with perimenopause and menopause including dryness, skin thinning, reduced elasticity, increased sensitivity, pigmentation changes, and collagen decline.',
                },
                {
                  q: 'Can ULANDA help with under-eye concerns?',
                  a: 'Yes. Under-eye concerns are among the most common reasons clients visit ULANDA. We support dark circles, fine lines, crepey skin, tear trough concerns and skin thinning.',
                },
                {
                  q: 'Is parking available at ULANDA?',
                  a: 'Yes. Complimentary client parking is available on site with no parking charges or town-centre parking restrictions.',
                },
              ].map((item, idx) => (
                <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                  <details className="group bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 transition-all overflow-hidden">
                    <summary className="cursor-pointer p-8 font-serif text-lg text-base-content flex items-start justify-between gap-4">
                      {item.q}
                      <ChevronDown className="w-5 h-5 text-base-content/60 group-open:rotate-180 transition-transform flex-shrink-0 mt-1" />
                    </summary>
                    <div className="px-8 pb-8 text-base-content/80 leading-relaxed border-t border-base-content/5">
                      {item.a}
                    </div>
                  </details>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-primary-content">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">
                Ready to Understand Your Skin?
              </h2>
              <p className="text-xl text-primary-content/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Book your Advanced Skin Health Consultation and begin your journey with clearer
                understanding, personalised recommendations, and a treatment plan designed around
                your individual needs.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-white border-white hover:bg-white hover:text-primary btn-lg text-lg no-animation"
              >
                Book Your Consultation Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-primary-content/80 text-sm mt-8 font-medium tracking-wide">
                Understanding Before Treatment™
              </p>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </>
  );
}
