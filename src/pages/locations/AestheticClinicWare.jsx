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
      name: 'ULANDA Skin Clinic',
      url: 'https://www.ulanda.co.uk',
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
        { '@type': 'Place', name: 'Thorley' },
        { '@type': 'Place', name: "St Michael's Mead" },
        { '@type': 'Place', name: 'Stansted Mountfitchet' },
        { '@type': 'City', name: 'Sawbridgeworth' },
        { '@type': 'City', name: 'Hertford' },
        { '@type': 'City', name: 'Hoddesdon' },
        { '@type': 'City', name: 'Broxbourne' },
        { '@type': 'AdministrativeArea', name: 'East Hertfordshire' },
        { '@type': 'AdministrativeArea', name: 'Hertfordshire' },
      ],
      hasMap:
        'https://maps.google.com/maps?q=Uphaven,+6+Hampden+Hill,+Ware+SG12+7JT',
      sameAs: [
        'https://www.instagram.com/ulandamedspa',
        'https://www.facebook.com/ulandamedspa',
      ],
      parentOrganization: {
        '@type': 'Organization',
        name: 'ULANDA',
      },
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
          name: 'Contact',
          item: 'https://www.ulanda.co.uk/contact',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Skin Clinic Near Ware',
          item: 'https://www.ulanda.co.uk/locations/aesthetic-clinic-ware',
        },
      ],
    },
  ],
};

const areasServed = [
  { name: 'Ware', link: '/locations/aesthetic-clinic-ware' },
  { name: 'Thorley', link: null },
  { name: "St Michael's Mead", link: null },
  { name: 'Stansted Mountfitchet', link: null },
  {
    name: 'Sawbridgeworth',
    link: '/locations/aesthetic-clinic-sawbridgeworth',
  },
  { name: 'Hertford', link: '/locations/aesthetic-clinic-hertford' },
  { name: 'Hoddesdon', link: '/locations/aesthetic-clinic-hoddesdon' },
  { name: 'Broxbourne', link: '/locations/aesthetic-clinic-broxbourne' },
  { name: 'East Hertfordshire', link: null },
  { name: 'Hertfordshire', link: '/locations/aesthetic-clinic-hertfordshire' },
  {
    name: 'Stanstead Abbotts',
    link: '/locations/aesthetic-clinic-stanstead-abbotts',
  },
  { name: 'Great Amwell', link: '/locations/aesthetic-clinic-great-amwell' },
  { name: 'Buntingford', link: '/locations/aesthetic-clinic-buntingford' },
];

export default function AestheticClinicWare() {
  return (
    <>
      <Head>
        <title>Skin Clinic Ware | Consultation-Led Aesthetics | ULANDA</title>
        <meta
          name="description"
          content="ULANDA is a nurse-led skin clinic in Ware, Hertfordshire. Specialising in skin barrier repair, hormonal skin changes & regenerative aesthetics. Free parking."
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

        {/* Hero Section */}
        <section className="relative bg-secondary/10 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
            <div className="max-w-3xl">
              <FadeInWhenVisible>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" /> Based in Ware, Hertfordshire
                </div>
              </FadeInWhenVisible>
              <h1 className="text-4xl md:text-6xl font-serif text-base-content leading-tight mb-6 mt-2">
                <HeroText>
                  A Consultation-Led Skin Clinic for Healthy Ageing & Skin
                  Health
                </HeroText>
              </h1>
              <p className="text-xl md:text-2xl font-light text-primary mb-10 leading-relaxed border-l-2 border-primary/20 pl-4 py-1">
                Skin Understood. Then Transformed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white btn-lg no-animation"
                >
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-base-content/60">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary/70" /> Free
                  On-Site Parking
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary/70" /> Medical
                  Professional Led
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary/70" />{' '}
                  Appointment Only
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Panel */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="md:col-span-7">
              <FadeInWhenVisible>
                <h2 className="text-3xl lg:text-4xl font-serif text-base-content mb-6">
                  Many women know their skin has changed but are unsure why.
                </h2>
                <div className="space-y-5 text-base-content/80 text-lg leading-relaxed text-justify">
                  <p>
                    Perhaps your skin looks more tired than you feel. Perhaps it
                    feels drier, less radiant or less like itself than it once
                    did. Perhaps pigmentation has become more noticeable, your
                    under-eye area has changed, or your skin no longer seems to
                    respond the way it used to.
                  </p>
                  <p className="font-medium text-base-content text-xl my-8 pl-4 border-l-4 border-primary/40">
                    At ULANDA, we believe understanding those changes should
                    come before treatment.
                  </p>
                  <p>
                    Located in Ware, Hertfordshire (SG12 7JT), ULANDA is a
                    consultation-led Skin Clinic & Women's Health Practice
                    supporting clients from across Hertfordshire and North
                    London with healthy ageing, skin quality concerns, hormonal
                    skin changes and regenerative aesthetics.
                  </p>
                </div>
              </FadeInWhenVisible>
            </div>
            <div className="md:col-span-5">
              <FadeInWhenVisible delay={0.2}>
                <div className="bg-primary/5 rounded-2xl p-8 lg:p-10 border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldCheck className="w-24 h-24 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-base-content mb-6 flex items-center gap-2 z-10 relative">
                    <HeartPulse className="w-5 h-5 text-primary" />{' '}
                    Understanding Before Treatment™
                  </h3>
                  <ul className="space-y-4 text-base-content/80 relative z-10">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />{' '}
                      What has changed
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />{' '}
                      Why it may be changing
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />{' '}
                      What is influencing skin behaviour
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />{' '}
                      Which treatment options are appropriate
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />{' '}
                      Whether treatment is needed at all
                    </li>
                  </ul>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Why Clients Travel */}
        <section className="bg-base-200/50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeInWhenVisible>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl lg:text-4xl font-serif text-base-content mb-4">
                  A Destination Clinic For Clients Across Hertfordshire
                </h2>
                <p className="text-base-content/80 text-lg leading-relaxed">
                  Many of our clients travel from Hertford, Broxbourne,
                  Hoddesdon, Bishop's Stortford, Cheshunt, St Albans, and North
                  London because they are looking for more than just a specific
                  treatment appointment.
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeInWhenVisible delay={0.1}>
                <div className="bg-base-100 rounded-2xl p-8 shadow-sm h-full border border-base-content/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <span className="font-serif text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-base-content mb-4">
                    Clinical Guidance
                  </h3>
                  <p className="text-base-content/80 leading-relaxed">
                    Many arrive after spending months or years trying products,
                    researching treatments online, or feeling frustrated that
                    their skin no longer behaves the way it once did.
                  </p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="bg-base-100 rounded-2xl p-8 shadow-sm h-full border border-base-content/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <span className="font-serif text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-base-content mb-4">
                    Time and Truth
                  </h3>
                  <p className="text-base-content/80 leading-relaxed">
                    Unlike busy high-street clinics where appointments can feel
                    rushed, ULANDA is intentionally designed to provide time for
                    honest discussion, assessment, and finding clarity without
                    pressure.
                  </p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.3}>
                <div className="bg-base-100 rounded-2xl p-8 shadow-sm h-full border border-base-content/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <span className="font-serif text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-base-content mb-4">
                    Long-term Planning
                  </h3>
                  <p className="text-base-content/80 leading-relaxed">
                    Our consultation-led approach helps ensure recommendations
                    are personalised, clinically appropriate, and aligned with
                    long-term skin health and natural-looking outcomes.
                  </p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Client Quotes */}
        <section className="border-y border-base-content/5 py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeInWhenVisible>
              <h2 className="text-3xl lg:text-4xl font-serif text-center text-base-content mb-16">
                What Clients Often Tell Us Before Their First Visit
              </h2>
            </FadeInWhenVisible>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {[
                'My skin looks more tired than I feel.',
                'My skin feels drier than it used to.',
                "My skin doesn't feel as firm or bouncy as it once did.",
                'My under-eye area has changed.',
                'Pigmentation seems more noticeable than before.',
                "My skin doesn't seem to behave the way it used to.",
              ].map((quote, idx) => (
                <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                  <div className="break-inside-avoid bg-secondary/10 p-8 rounded-2xl border border-secondary/30 relative mt-0">
                    <span className="absolute top-4 left-4 text-5xl text-primary/20 font-serif leading-none">
                      "
                    </span>
                    <p className="text-xl font-serif text-base-content/90 relative z-10 pt-4 leading-relaxed">
                      "{quote}"
                    </p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>

            <FadeInWhenVisible delay={0.4}>
              <div className="text-center mt-12 max-w-2xl mx-auto text-base-content/70 text-lg leading-relaxed">
                <p>
                  These changes often become more noticeable during periods of
                  hormonal change, collagen decline, increased skin sensitivity,
                  environmental stress or natural ageing processes.
                  Understanding what is driving these changes is the first step
                  towards improving confidence in your skin.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Meet Helen */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center bg-base-100">
            <div className="relative flex justify-center">
              <RevealImage className="max-w-sm aspect-[3/4] w-full">
                <img
                  src="/assets/img/home/ulanda-helen-balogun-founder-ware.webp"
                  alt=""
                  className="w-full h-full object-cover"
                  fetchpriority="high"
                />
              </RevealImage>
            </div>

            <div className="flex flex-col justify-center">
              <FadeInWhenVisible delay={0.2}>
                <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/80 text-primary text-sm font-medium mb-6">
                  Clinical Director
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-base-content mb-6">
                  Meet Helen Balogun{' '}
                  <span className="text-base-content/40 text-2xl md:text-3xl whitespace-nowrap block sm:inline mt-1 sm:mt-0 font-light">
                    MSc RN ANP
                  </span>
                </h2>
                <div className="space-y-5 text-lg text-base-content/80 leading-relaxed text-justify mb-10">
                  <p>
                    ULANDA was founded by Helen Balogun, an Advanced Nurse
                    Practitioner with a passion for helping women understand the
                    changes occurring within their skin and overall wellbeing.
                  </p>
                  <p>
                    Her approach combines clinical assessment, skin health
                    expertise, and personalised treatment planning to help
                    clients make informed decisions about their skin.
                  </p>
                  <p>
                    Rather than focusing solely on procedures, Helen's
                    consultations explore the wider factors influencing skin
                    behaviour, including skin barrier health, hormonal
                    influences, healthy ageing, collagen decline, and
                    environmental factors.
                  </p>
                </div>

                <Link
                  to="/about/our-founder"
                  className="group inline-flex items-center gap-2 text-primary font-medium border-b border-primary/30 hover:border-primary pb-1 transition-all text-lg"
                >
                  Read Helen's Credentials
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-primary text-primary-content py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white text-balance tracking-tight">
                  "What they often value most is finally understanding what is
                  happening to their skin."
                </h2>
              </div>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-3 gap-8 text-center text-primary-content/90">
              <FadeInWhenVisible delay={0.1}>
                <div className="p-6">
                  <p className="font-serif text-2xl mb-6 text-white leading-snug">
                    "I finally understood what was happening with my skin."
                  </p>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Many clients tell us that the consultation helped them make
                    sense of changes they had been struggling to understand for
                    months or even years.
                  </p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="p-6 border-y md:border-y-0 md:border-x border-primary-content/20">
                  <p className="font-serif text-2xl mb-6 text-white leading-snug">
                    "I felt listened to rather than sold to."
                  </p>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Many clients appreciate the calm, educational and clinically
                    guided experience that allows them to make informed
                    decisions without pressure.
                  </p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.3}>
                <div className="p-6">
                  <p className="font-serif text-2xl mb-6 text-white leading-snug">
                    "I left with a clear plan and confidence in what to do
                    next."
                  </p>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Whether treatment is recommended immediately or not, our
                    goal is for every client to leave with a clear pathway
                    forward.
                  </p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-base-100 border-b border-base-content/5 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <FadeInWhenVisible>
              <Award className="w-16 h-16 text-primary mx-auto mb-8 opacity-80" />
              <h2 className="text-4xl md:text-5xl font-serif text-base-content mb-6">
                The Advanced Skin Health Consultation
              </h2>
              <p className="text-xl text-base-content/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Every new client begins here. This appointment provides the
                foundation for understanding your skin and developing a
                personalised treatment plan.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12 text-base-content/80 font-medium">
                <span className="bg-white shadow-sm px-6 py-3 rounded-full border border-base-content/5">
                  Clinical Skin Assessment
                </span>
                <span className="bg-white shadow-sm px-6 py-3 rounded-full border border-base-content/5">
                  AI Skin Analysis
                </span>
                <span className="bg-white shadow-sm px-6 py-3 rounded-full border border-base-content/5">
                  Skin Barrier Evaluation
                </span>
              </div>

              <div className="bg-white shadow-xl shadow-base-content/5 rounded-3xl p-10 md:p-12 mb-8 border border-base-content/10 max-w-2xl mx-auto">
                <p className="text-4xl lg:text-5xl font-serif text-base-content mb-3">
                  £175
                </p>
                <p className="text-base-content/70 mb-8 text-lg">
                  Fully redeemable against eligible treatment plans.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white btn-wide btn-lg h-16 text-lg rounded-full shadow-lg shadow-primary/20 no-animation"
                >
                  Book Your Consultation
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Links and Traveling Section */}
        <section className="bg-base-200/50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeInWhenVisible>
              <div className="bg-white rounded-3xl p-10 lg:p-12 border border-base-content/10 shadow-xl shadow-base-content/5 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <MapPin className="w-48 h-48 text-primary" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif text-base-content mb-8 relative z-10 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" /> Traveling to ULANDA
                </h3>
                <address className="text-base-content/80 text-lg leading-relaxed not-italic mb-8 relative z-10 pl-6 border-l-4 border-primary/20">
                  <strong className="text-base-content font-bold text-xl block mb-2">
                    ULANDA Skin Clinic
                  </strong>
                  Uphaven, 6 Hampden Hill
                  <br />
                  Ware, Hertfordshire
                  <br />
                  SG12 7JT
                </address>

                <div className="space-y-4 text-base-content/80 relative z-10 mt-10 pt-8 border-t border-base-content/5">
                  <a
                    href="tel:+447904336031"
                    className="flex items-center gap-4 hover:text-primary transition-colors text-lg"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    +44 7904 336031
                  </a>
                  <a
                    href="mailto:info@ulanda.co.uk"
                    className="flex items-center gap-4 hover:text-primary transition-colors text-lg"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    info@ulanda.co.uk
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <h2 className="text-3xl lg:text-4xl font-serif text-base-content mb-6">
                Serving Ware and East Hertfordshire
              </h2>
              <p className="text-base-content/80 text-lg mb-8 leading-relaxed">
                Clients visiting ULANDA from Ware often travel from surrounding
                areas including Thorley, St Michael's Mead, Stansted
                Mountfitchet and Sawbridgeworth.
              </p>
              <div className="flex flex-wrap gap-3">
                {areasServed.map((area, i) => (
                  <React.Fragment key={i}>
                    {area.link ? (
                      <Link
                        to={area.link}
                        className="px-5 py-2.5 bg-white rounded-full text-sm font-medium border border-base-content/10 hover:border-primary/50 text-base-content hover:text-primary transition-all shadow-sm"
                      >
                        {area.name}
                      </Link>
                    ) : (
                      <span className="px-5 py-2.5 bg-white/50 rounded-full text-sm text-base-content/60 border border-base-content/5">
                        {area.name}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </>
  );
}
