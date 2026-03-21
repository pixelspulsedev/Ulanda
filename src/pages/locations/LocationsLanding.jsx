import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import HeroText from '../../components/animations/HeroText';
import FadeInWhenVisible from '../../components/animations/FadeInWhenVisible';

const BOOKING_URL = 'https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ';

const locations = [
  {
    name: 'Hertfordshire',
    slug: 'aesthetic-clinic-hertfordshire',
    description: 'County-wide overview of ULANDA skin clinic services across Hertfordshire.',
    distance: 'Based in Ware',
    featured: true,
  },
  {
    name: 'Hertford',
    slug: 'aesthetic-clinic-hertford',
    description: 'Consultation-led skin health for clients travelling from Hertford and surrounding areas.',
    distance: '~10 min drive',
  },
  {
    name: 'Hoddesdon',
    slug: 'aesthetic-clinic-hoddesdon',
    description: 'Serving clients from Hoddesdon, Rye Park and Barclay Park seeking structured skin programmes.',
    distance: '~10 min drive',
  },
  {
    name: 'Broxbourne',
    slug: 'aesthetic-clinic-broxbourne',
    description: 'Nurse-led skin clinic near Broxbourne for barrier assessment and regenerative treatments.',
    distance: '~10–12 min drive',
  },
  {
    name: 'Cheshunt',
    slug: 'aesthetic-clinic-cheshunt',
    description: 'Skin health programmes for clients from Cheshunt, Goffs Oak and Waltham Cross.',
    distance: '~15 min drive',
  },
  {
    name: "Bishop's Stortford",
    slug: 'aesthetic-clinic-bishops-stortford',
    description: "Consultation-led skin care for clients travelling from Bishop's Stortford and Stansted.",
    distance: '~20 min drive',
  },
  {
    name: 'Harlow',
    slug: 'aesthetic-clinic-harlow',
    description: 'Structured skin health programmes for clients from Harlow, Old Harlow and Church Langley.',
    distance: '~15 min drive',
  },
  {
    name: 'Sawbridgeworth',
    slug: 'aesthetic-clinic-sawbridgeworth',
    description: 'Skin clinic near Sawbridgeworth serving East Hertfordshire and the Essex border.',
    distance: '~15 min drive',
  },
  {
    name: 'Welwyn Garden City',
    slug: 'aesthetic-clinic-welwyn-garden-city',
    description: 'Consultation-led skin health for clients from Welwyn Garden City and Hatfield.',
    distance: '~25 min drive',
  },
  {
    name: 'Stevenage',
    slug: 'aesthetic-clinic-stevenage',
    description: 'Skin barrier assessment and regenerative treatments for clients travelling from Stevenage.',
    distance: '~30 min drive',
  },
];

export default function LocationsLanding() {
  return (
    <>
      <Head>
        <title>Locations | ULANDA Skin Clinic Ware, Hertfordshire</title>
        <meta name="description" content="Find ULANDA skin clinic near you. Consultation-led skin health serving Hertfordshire, Hertford, Hoddesdon, Broxbourne, Cheshunt, Bishop's Stortford, Harlow, Sawbridgeworth, Welwyn Garden City and Stevenage." />
        <link rel="canonical" href="https://www.ulanda.co.uk/locations" />
      </Head>

      <div className="bg-base-100 min-h-screen">
        <Breadcrumbs />

        <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-serif text-base-content leading-tight mb-4">
              <HeroText>Skin Clinic Locations Near You</HeroText>
            </h1>
            <p className="text-xl md:text-2xl font-light text-primary mb-8 leading-relaxed">Skin Understood. Then Transformed.</p>
            <FadeInWhenVisible>
              <div className="space-y-6 text-base-content/80 text-lg leading-relaxed">
                <p>ULANDA is a nurse-led skin clinic based in Ware, Hertfordshire, serving clients across the county and beyond. We offer consultation-led skin health, barrier assessment, regenerative treatments and structured skin programmes.</p>
                <p>Free parking on site. Consultation £175, fully redeemable against your treatment programme.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        <section className="bg-secondary/20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-serif text-base-content mb-8">Areas We Serve</h2>
            </FadeInWhenVisible>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc, i) => (
                <FadeInWhenVisible key={loc.slug} delay={i * 0.05}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className={`block bg-base-100 rounded-xl p-6 border hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full ${loc.featured ? 'border-primary/30 ring-1 ring-primary/10' : 'border-primary/10'}`}
                  >
                    {loc.featured && (
                      <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">County Overview</span>
                    )}
                    <h3 className="text-xl font-serif text-base-content mb-1">{loc.name}</h3>
                    <p className="text-sm text-primary mb-3">{loc.distance}</p>
                    <p className="text-base-content/70 text-sm leading-relaxed">{loc.description}</p>
                    <span className="inline-block mt-4 text-primary text-sm font-medium">View location →</span>
                  </Link>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-serif text-base-content mb-4">Ready to Begin?</h2>
              <p className="text-base-content/70 text-lg mb-6 max-w-2xl mx-auto">
                Every skin journey at ULANDA starts with an Advanced Skin Health Consultation — a full clinical assessment before any treatment is recommended.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white">
                Book Your Consultation →
              </a>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </>
  );
}
