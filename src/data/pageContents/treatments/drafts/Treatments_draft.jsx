import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import {
  treatmentCategories,
  treatmentsPageDataDraft,
} from './treatments_restructured_draft';
import { getCondition } from '../../conditions/conditions';
import { getIndividualCondition } from '../../conditions/individualConditions';
import { getBlog } from '../../blogs/blogs';
import { signaturePathways } from '../../signature/signatureData';
import { programmes } from '../../programmes/programmes';

const squareBookingUrl =
  'https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ';

const barrierSupportLinks = [
  {
    title: 'Skin Barrier Renewal Protocol',
    to: '/treatments/skin-barrier-renewal-protocol',
  },
  {
    title: 'Skin Barrier Restore',
    to: '/treatments/skin-barrier-renewal-protocol/skin-barrier-restore',
  },
  {
    title: 'Advanced Cleansing & Hydration Therapy',
    to: '/treatments/skin-barrier-renewal-protocol/skin-barrier-deep-cleanse',
  },
  {
    title: 'Skin Barrier Oxygenation',
    to: '/treatments/skin-barrier-renewal-protocol/skin-barrier-oxygenation',
  },
  {
    title: 'Skin Barrier Enzyme Renewal',
    to: '/treatments/skin-barrier-renewal-protocol/skin-barrier-enzyme-renewal',
  },
  {
    title: 'Deep Hydration Therapy',
    to: '/treatments/skin-barrier-renewal-protocol/skin-barrier-hydration',
  },
];

const renewalLinks = [
  {
    title: 'Chemical Peels',
    to: '/treatments/skin-renewal-regeneration/chemical-peel',
  },
  { title: 'BioRePeel', to: '/treatments/skin-renewal-regeneration/biorepeel' },
  {
    title: 'Melanostatic Peel',
    to: '/treatments/skin-renewal-regeneration/melanostatic-peel',
  },
  {
    title: 'Microneedling',
    to: '/treatments/skin-renewal-regeneration/microneedling',
  },
];

const injectableLinks = [
  {
    title: 'Polynucleotides',
    to: '/treatments/skin-renewal-regeneration/polynucleotides',
  },
  {
    title: 'Profhilo',
    to: '/treatments/injectable-skin-optimisation/profhilo',
  },
  { title: 'Jalupro', to: '/treatments/injectable-skin-optimisation/jalupro' },
  {
    title: 'Seventy Hyal',
    to: '/treatments/injectable-skin-optimisation/seventy-hyal',
  },
  {
    title: 'Definisse Hydrobooster',
    to: '/treatments/injectable-skin-optimisation/definisse-hydrobooster',
  },
];

const popularPathways = [
  {
    title: 'Profhilo',
    descriptor: 'Hydration, skin quality and resilience.',
    to: '/treatments/injectable-skin-optimisation/profhilo',
  },
  {
    title: 'Polynucleotides',
    descriptor: 'Regenerative support and tissue quality.',
    to: '/treatments/skin-renewal-regeneration/polynucleotides',
  },
  {
    title: 'Microneedling',
    descriptor: 'Texture refinement and collagen stimulation.',
    to: '/treatments/skin-renewal-regeneration/microneedling',
  },
  {
    title: 'Anti-Wrinkle Injections',
    descriptor: 'Natural facial refinement and healthy ageing.',
    to: '/treatments/structural-collagen-support/anti-wrinkle-injections',
  },
  // {
  //   title: 'Chemical Peels',
  //   descriptor: 'Skin renewal, clarity and texture improvement.',
  //   to: '/treatments/skin-renewal-regeneration/chemical-peel',
  // },
];

const structuralLinks = [
  {
    title: 'Anti-Wrinkle Injections',
    to: '/treatments/structural-collagen-support/anti-wrinkle-injections',
  },
  {
    title: 'Dermal Fillers',
    to: '/treatments/structural-collagen-support/dermal-fillers',
  },
  {
    title: 'Jawline Sculpting',
    to: '/treatments/structural-collagen-support/jawline-sculpting',
  },
  {
    title: 'Biostimulators',
    to: '/treatments/structural-collagen-support/biostimulators',
  },
  {
    title: 'Thread Lifts',
    to: '/treatments/structural-collagen-support/thread-lifts',
  },
  {
    title: 'Neck & Lower Face Structural Lift',
    to: '/treatments/structural-collagen-support/neck-lower-face-lift',
  },
];

const conditionLinks = [
  {
    title: 'Skin Ageing',
    to: '/conditions/menopause-hormone-skin-changes/fine-lines-wrinkles',
  },
  {
    title: 'Pigmentation',
    to: '/conditions/pigmentation-and-skin-tone/hyperpigmentation',
  },
  {
    title: 'Hormonal Skin Changes',
    to: '/conditions/menopause-hormone-skin-changes/menopause-skin-decline',
  },
  { title: 'Acne Scarring', to: '/conditions/acne-texture/acne-scarring' },
  {
    title: 'Loss of Elasticity',
    to: '/conditions/menopause-hormone-skin-changes/skin-laxity',
  },
  { title: 'Enlarged Pores', to: '/conditions/acne-texture/enlarged-pores' },
  {
    title: 'Under-Eye Skin Quality',
    to: '/conditions/eye-area/crepey-under-eye',
  },
];

const programmeLinks = [
  {
    title: 'Skin Barrier Repair & Resilience',
    to: '/signature/skin-barrier-repair-recovery',
  },
  {
    title: 'Rosacea & Redness Control',
    to: '/signature/rosacea-redness-control',
  },
  { title: 'Menopause Skin Rebuild', to: '/signature/menopause-skin-rebuild' },
  {
    title: 'Photoaging Skin Architecture',
    to: '/signature/photoaging-skin-architecture',
  },
  {
    title: 'Structural Skin Regeneration',
    to: '/signature/structural-skin-regeneration',
  },
  { title: 'Under-Eye Renewal', to: '/signature/under-eye-renewal' },
];

const journalLinks = [
  {
    title: 'Inflammation, Stress & Skin Ageing',
    href: 'https://www.ulanda.co.uk/blogs/inflammation-stress-skin-ageing',
  },
  {
    title: 'Internal Health & Regeneration',
    href: 'https://www.ulanda.co.uk/blogs/internal-health-regeneration',
  },
  {
    title: 'Regeneration & Longevity',
    href: 'https://www.ulanda.co.uk/blogs/regeneration-longevity',
  },
  {
    title: 'Collagen, Elastin & Fibroblasts',
    href: 'https://www.ulanda.co.uk/blogs/collagen-elastin-fibroblasts',
  },
];

const faqs = [
  {
    question: 'Do I need a consultation before every treatment?',
    answer:
      'Some treatments can be booked directly, while others require consultation to ensure suitability.',
  },
  {
    question: 'What is a Barrier & Skin Readiness Assessment?',
    answer:
      'A short clinical evaluation performed before treatment to confirm the skin environment is suitable.',
  },
  {
    question: 'How many treatments will I need?',
    answer:
      'Many regenerative treatments are delivered as a course to maximise results.',
  },
  {
    question: 'Can treatments be combined?',
    answer:
      'Yes. Many clients follow structured programmes combining several modalities.',
  },
];

const treatmentSlugAliases = {};

const treatmentHeroBySlug = Object.values(treatmentCategories).reduce(
  (acc, category) => {
    const categoryHero = category?.placeholderUrl || category?.image;
    if (category?.id && categoryHero) {
      acc[category.id.toLowerCase()] = categoryHero;
    }

    Object.entries(category?.treatments || {}).forEach(([slug, treatment]) => {
      if (!treatment) return;
      const hero = treatment.placeholderUrl || treatment.image || categoryHero;
      if (hero) {
        acc[slug.toLowerCase()] = hero;
      }
    });

    return acc;
  },
  {},
);

const normaliseSlug = (value = '') => value.toLowerCase().trim();

const getHeroImageForItem = (item) => {
  const rawUrl = item.to || item.href;
  if (!rawUrl) return null;

  const path = rawUrl.startsWith('http') ? new URL(rawUrl).pathname : rawUrl;
  const segments = path.split('/').filter(Boolean);
  const root = segments[0];
  const last = normaliseSlug(segments[segments.length - 1]);

  if (root === 'treatments') {
    const treatmentSlug = treatmentSlugAliases[last] || last;
    const treatmentHero = treatmentHeroBySlug[treatmentSlug];
    if (treatmentHero) return treatmentHero;

    const categoryHero = treatmentHeroBySlug[last];
    if (categoryHero) return categoryHero;
  }

  if (root === 'conditions') {
    const individual = getIndividualCondition(last);
    if (individual?.hero)
      return individual.hero.placeholderUrl || individual.hero.image;

    const condition = getCondition(last);
    if (condition?.hero)
      return condition.hero.placeholderUrl || condition.hero.image;
  }

  if (root === 'programmes' || root === 'signature') {
    const signature = signaturePathways.find((p) => p.id === last);
    if (signature) return signature.image;

    const programme = programmes.find((p) => p.id === last);
    if (programme) return programme.placeholderUrl || programme.image;
  }

  if (root === 'blogs') {
    const blog = getBlog(last);
    if (blog) return blog.images?.[0] || blog.heroImage || null;
  }

  return null;
};

const PopularPathwayCards = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
    {items.map((item) => {
      const thumbnail = getHeroImageForItem(item);

      return (
        <Link
          key={item.to}
          to={item.to}
          className="group flex flex-col bg-white border border-base-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
        >
          {thumbnail && (
            <div className="aspect-[16/5] overflow-hidden bg-base-200">
              <img
                src={thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="flex flex-1 flex-col p-4">
            <h3 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-base-content/70 text-sm leading-relaxed">
              {item.descriptor}
            </p>
            <div className="mt-auto inline-flex items-center gap-2 text-primary font-medium text-sm">
              View Treatment <ArrowRight size={15} />
            </div>
          </div>
        </Link>
      );
    })}
  </div>
);

const LinkCards = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
    {items.map((item) => {
      const thumbnail = getHeroImageForItem(item);

      if (item.href) {
        return (
          <a
            key={item.href}
            href={item.href}
            className="group bg-white border border-base-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
          >
            {thumbnail && (
              <div className="aspect-[16/10] overflow-hidden bg-base-200">
                <img
                  src={thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-5">
              <h4 className="font-serif text-lg mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                Explore <ArrowRight size={15} />
              </div>
            </div>
          </a>
        );
      }

      return (
        <Link
          key={item.to}
          to={item.to}
          className="group bg-white border border-base-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
        >
          {thumbnail && (
            <div className="aspect-[16/10] overflow-hidden bg-base-200">
              <img
                src={thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="p-5">
            <h4 className="font-serif text-lg mb-3 group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm">
              Explore <ArrowRight size={15} />
            </div>
          </div>
        </Link>
      );
    })}
  </div>
);

export default function TreatmentsDraft() {
  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        name: 'ULANDA Skin Clinic',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ware',
          addressRegion: 'Hertfordshire',
          postalCode: 'SG12',
          addressCountry: 'UK',
        },
      },
      {
        '@type': 'LocalBusiness',
        name: 'ULANDA Skin Clinic',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ware',
          addressRegion: 'Hertfordshire',
          postalCode: 'SG12',
          addressCountry: 'UK',
        },
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Polynucleotides Treatment',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Profhilo Treatment',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Microneedling Treatment',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Anti-Wrinkle Treatment',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Chemical Peels Treatment',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const navigate = useNavigate();
  return (
    <>
      <Head>
        <title>
          Skin Treatments in Ware, Hertfordshire | Regenerative Medical
          Aesthetic Treatments | ULANDA
        </title>
        <meta
          name="description"
          content="Explore regenerative skin treatments at ULANDA, a nurse-led skin clinic in Ware, Hertfordshire. Barrier-first therapies, regenerative injectables and advanced medical aesthetic treatments delivered through a clinically guided approach."
        />
        <meta
          name="keywords"
          content="skin treatments Ware Hertfordshire, skin clinic Ware, medical aesthetics Hertfordshire, regenerative skin treatments, polynucleotides Ware, profhilo Hertfordshire, skin boosters Ware"
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/treatments" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Skin Treatments in Ware, Hertfordshire | Regenerative Medical Aesthetic Treatments | ULANDA"
        />
        <meta
          name="twitter:description"
          content="Explore regenerative skin treatments at ULANDA, a nurse-led skin clinic in Ware, Hertfordshire. Barrier-first therapies, regenerative injectables and advanced medical aesthetic treatments delivered through a clinically guided approach."
        />
        <meta
          name="twitter:image"
          content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="bg-base-100 text-base-content">
        <Breadcrumbs />

        <section className="relative min-h-[30vh] w-full flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <img
              src={
                treatmentsPageDataDraft.hero.placeholderUrl ||
                treatmentsPageDataDraft.hero.image
              }
              alt={treatmentsPageDataDraft.hero.title}
              className="w-full h-full object-cover brightness-75"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="w-full relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-6 text-white">
            <div className="max-w-3xl">
              {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-3">
                Treatments &amp; Treatment Pathways
              </h1> */}
              <p className="text-2xl font-serif md:text-4xl italic font-extralight text-white/90 mb-5">
                How We Decide Whether This Treatment Is Right For You
              </p>
              <div className="space-y-3 text-white/90 font-light leading-relaxed max-w-3xl">
                <p>
                  Choosing the right treatment isn't simply about selecting a
                  popular procedure.
                </p>
                <p>
                  It's about understanding whether it's the right treatment for
                  your skin, at the right time, and for the outcome you're
                  hoping to achieve.
                </p>
                <p>
                  At ULANDA, every recommendation follows our Understanding
                  Before Treatment™ philosophy.
                </p>
                <p>
                  Rather than treating every concern in the same way, we
                  consider how your skin is behaving today, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li> Skin barrier health</li>
                  <li> Hydration and skin quality</li>
                  <li> Inflammation and sensitivity</li>
                  <li> Hormonal influences</li>
                  <li> Tissue readiness</li>
                  <li> Your longer-term skin health goals</li>
                </ul>
                <p>
                  Some treatments are suitable for direct booking because they
                  can be safely assessed at the start of your appointment.
                </p>
                <p>
                  Others are best introduced following consultation, where they
                  can be incorporated into a personalised regenerative treatment
                  plan.
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href={squareBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white"
                >
                  Book Skin Health Consultation
                </a>
                <Link
                  to="/conditions"
                  className="btn btn-outline text-white border-white hover:bg-white/10"
                >
                  Explore Skin Conditions
                </Link>
              </div>
              <p className="mt-4 text-sm italic text-white/70">
                Before treatment begins, we carry out a Barrier & Skin Readiness
                Assessment to help ensure your skin is ready to respond well and
                that today's treatment is the most appropriate choice.
              </p>
              <p className="mt-2 text-sm text-white/80">
                Learn how care is decided within{' '}
                <Link
                  to="/clinical-system"
                  className="underline hover:text-white"
                >
                  The ULANDA Clinical System™
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section
          id="popular-pathways"
          className="py-4 px-4 md:px-8 max-w-8xl mx-auto"
        >
          {/* <h2 className="text-3xl font-serif mb-4">Popular Treatment Pathways</h2>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            A selection of ULANDA's most requested regenerative treatments. Each supports a specific skin outcome and can be explored in detail below.
          </p> */}
          <PopularPathwayCards items={popularPathways} />
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="mt-8 bg-secondary rounded-xl border border-base-200 p-6 md:p-8 max-w-4xl">
            <h3 className="text-xl font-serif text-primary mb-4">
              Helen&rsquo;s Clinical Reflection
            </h3>
            <div className="space-y-3 text-base-content/80 leading-relaxed">
              <p>
                &ldquo;One of the most common misconceptions is that the newest
                or most popular treatment is automatically the best one.
              </p>
              <p>
                In reality, the best results usually come from choosing the
                right treatment at the right stage of your skin journey.
              </p>
              <p>
                Sometimes that confirms your original choice. Sometimes it leads
                us in a different direction&mdash;and that&rsquo;s often where
                the best long-term outcomes begin.&rdquo;
              </p>
            </div>
            <p className="mt-4 text-sm text-base-content/70">
              &mdash; Helen Balogun, Clinical Director
            </p>
          </div>

          <h3 className="text-2xl font-serif mt-10 mb-4">
            What this means for you
          </h3>
          <div className="space-y-3 text-base-content/80 leading-relaxed max-w-4xl">
            <p>
              You don&rsquo;t need to know whether this treatment is the right
              choice. That&rsquo;s our responsibility.
            </p>
            <p>
              Our role is to assess your skin, explain our findings and
              recommend the treatment&mdash;or combination of
              treatments&mdash;that best supports your skin today and your
              long-term goals.
            </p>
            <p>
              If today&rsquo;s treatment is appropriate, we&rsquo;ll explain
              why. If another approach would be more beneficial, we&rsquo;ll
              explain that too.
            </p>
            <p>
              Either way, you&rsquo;ll understand the reasoning behind every
              recommendation.
            </p>
          </div>
          <p className="mt-5 text-lg font-serif italic text-primary max-w-4xl">
            The right treatment at the wrong time can produce disappointing
            results. The right treatment at the right time can make all the
            difference.
          </p>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-4">
            The ULANDA Regenerative Treatment Framework
          </h2>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            ULANDA treatments follow a structured regenerative pathway. Rather
            than performing treatments in isolation, clinicians introduce
            therapies when the skin is biologically ready to benefit from them.
            This approach stabilises the skin first, stimulates regeneration
            second and introduces deeper structural treatments only when
            appropriate.
          </p>
        </section>

        <section
          id="barrier-support"
          className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200"
        >
          <h2 className="text-3xl font-serif mb-2">Restore Skin Stability</h2>
          <p className="text-primary font-medium mb-4">
            Barrier support for sensitive, reactive and compromised skin.
          </p>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            Healthy skin begins with a stable barrier. Barrier-focused therapies
            restore hydration balance, calm inflammation, and strengthen the
            skin’s protective function. These treatments are often introduced as
            foundational protocols before regenerative treatments or used as
            part of ongoing skin maintenance.
          </p>
          <h3 className="text-2xl font-serif mt-8">
            Skin Barrier Support Treatments
          </h3>
          <LinkCards items={barrierSupportLinks} />
          <div className="mt-8">
            <Link
              to="/treatments/skin-barrier-renewal-protocol"
              className="btn btn-outline"
            >
              Explore Skin Barrier Support Treatments
            </Link>
          </div>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-2">
            Renew Skin Texture &amp; Clarity
          </h2>
          <p className="text-primary font-medium mb-4">
            For texture concerns, congestion and skin revitalisation.
          </p>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            Once the skin barrier is stable, treatments can stimulate epidermal
            renewal and collagen activity. These therapies improve skin texture,
            clarity, and resilience while encouraging natural regenerative
            processes.
          </p>
          <h3 className="text-2xl font-serif mt-8">Skin Renewal Treatments</h3>
          <LinkCards items={renewalLinks} />
          <div className="mt-8">
            <Link
              to="/treatments/skin-renewal-regeneration"
              className="btn btn-outline"
            >
              Explore Skin Renewal Treatments
            </Link>
          </div>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-2">Regenerate Skin Quality</h2>
          <p className="text-primary font-medium mb-4">
            For hydration, resilience, collagen support and skin quality.
          </p>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            Regenerative injectable treatments support dermal hydration,
            collagen signalling, and tissue repair. ULANDA allows direct booking
            for selected regenerative injectables while confirming treatment
            suitability through a Barrier & Skin Readiness Assessment before
            treatment begins.
          </p>
          <h3 className="text-2xl font-serif mt-8">
            Regenerative Injectable Treatments
          </h3>
          <LinkCards items={injectableLinks} />
          <div className="mt-8">
            <Link
              to="/treatments/injectable-skin-optimisation"
              className="btn btn-outline"
            >
              Explore Regenerative Injectables
            </Link>
          </div>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-2">Refine Facial Balance</h2>
          <p className="text-primary font-medium mb-4">
            For healthy ageing and subtle rejuvenation.
          </p>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            Structural treatments support facial architecture and address deeper
            structural changes associated with ageing. Because these treatments
            influence tissue structure and facial balance, they are introduced
            through consultation to ensure appropriate treatment planning.
          </p>
          <h3 className="text-2xl font-serif mt-8">Structural Treatments</h3>
          <LinkCards items={structuralLinks} />
          <div className="mt-8">
            <Link
              to="/treatments/structural-collagen-support"
              className="btn btn-outline"
            >
              Explore Structural Treatments
            </Link>
          </div>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-4">Skin Concerns We Treat</h2>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            Most clients arrive with a skin concern rather than a specific
            treatment in mind. ULANDA treatments are selected based on how they
            support underlying skin behaviour and regenerative potential.
          </p>
          <h3 className="text-2xl font-serif mt-8">Common Skin Concerns</h3>
          <LinkCards items={conditionLinks} />
          <div className="mt-8">
            <Link to="/conditions" className="btn btn-outline">
              Explore All Skin Conditions
            </Link>
          </div>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-4">
            Signature Skin Health Programmes
          </h2>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            For clients seeking a more structured approach, ULANDA offers
            signature programmes that combine treatments into regenerative
            pathways. These programmes integrate barrier support, treatment
            sequencing, and long-term skin health strategies.
          </p>
          <h3 className="text-2xl font-serif mt-8">Signature Programmes</h3>
          <LinkCards items={programmeLinks} />
          <div className="mt-8">
            <Link to="/signature" className="btn btn-outline">
              Explore Signature Programmes
            </Link>
          </div>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mt-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-base-200 p-5"
              >
                <h3 className="text-xl font-serif mb-2">{faq.question}</h3>
                <p className="text-base-content/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-4">
            Begin Your Personalised Skin Regeneration Pathway
          </h2>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            Whether you already know the treatment you are considering or would
            prefer personalised guidance, ULANDA clinicians will help determine
            the most appropriate regenerative approach for your skin.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={squareBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Skin Health Consultation
            </a>
            <a href="#barrier-support" className="btn btn-outline">
              Browse Individual Treatments
            </a>
          </div>
          <p className="mt-3 text-sm font-medium text-primary">
            Skin Understood. Then Transformed.
          </p>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-4">Clinical Insight</h2>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            Evidence-based reading from the ULANDA clinical journal exploring
            barrier science, stabilisation and regenerative sequencing.
          </p>
          <LinkCards items={journalLinks} />
          <div className="mt-8">
            <Link to="/blogs" className="btn btn-outline">
              Explore Clinical Insights
            </Link>
          </div>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto border-t border-base-200">
          <h2 className="text-3xl font-serif mb-4">
            Visiting Our Skin Clinic in Ware
          </h2>
          <p className="text-base-content/80 leading-relaxed max-w-4xl">
            ULANDA is a nurse-led skin clinic providing regenerative medical
            aesthetic treatments in Ware, Hertfordshire. Clients visit from
            Ware, Broxbourne, Hoddesdon, Hertford, and Bishop’s Stortford for
            barrier-first skin treatments, regenerative injectables, and
            clinically guided aesthetic care.
          </p>
        </section>
      </div>
    </>
  );
}
