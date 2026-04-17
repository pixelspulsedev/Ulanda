import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getTreatmentCategory } from '../data/pageContents/treatments/treatments';
import { ArrowRight } from 'lucide-react';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import ConsultationCTA from '../components/ConsultationCTA';

// SEO metadata for pathway landing pages - LOCKED format
const pathwaySEO = {
  refresh: {
    title: "Refresh Skin Treatments in Ware SG12 | ULANDA",
    description: "Refresh pathway treatments at ULANDA in Ware SG12. Surface-level rejuvenation including HydraFacial, peels, LED and enzyme therapy. Clear congestion, hydrate and brighten."
  },
  renew: {
    title: "Renew Regenerative Treatments in Ware SG12 | ULANDA",
    description: "Renew pathway treatments at ULANDA in Ware SG12. Biological stimulation with polynucleotides, Skin Boosters, microneedling and PRP. Long-term skin quality and resilience."
  },
  restore: {
    title: "Restore Recovery Treatments in Ware SG12 | ULANDA",
    description: "Restore pathway treatments at ULANDA in Ware SG12. Structural support with biostimulators, thread lifts and barrier repair. Natural contouring and definition."
  },
  radiate: {
    title: "Radiate Advanced Treatments in Ware SG12 | ULANDA",
    description: "Radiate pathway treatments at ULANDA in Ware SG12. Internal wellness with IV therapy, NAD+, glutathione IV and medical weight management. Balance from within."
  }
};

export default function TreatmentCategory() {
  const { category: rawCategoryId } = useParams();
  const categoryId = rawCategoryId?.toLowerCase();
  
  const category = getTreatmentCategory(categoryId);

  if (!category) {
    return <Navigate to="/treatments" replace />;
  }

  // Get pathway-specific SEO or fall back to generic
  const seo = pathwaySEO[categoryId] || {
    title: `${category.title} Treatments in Ware SG12 | ULANDA`,
    description: category.subtitle || category.description
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://www.ulanda.co.uk/treatments/${categoryId}`.toLowerCase()} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center bg-secondary">
             <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-base-content">
                <div className="max-w-4xl">
                     <div className="inline-block px-2 py-1 mb-6 border border-primary/50 rounded-full bg-secondary backdrop-blur-sm text-xs font-bold tracking-widest uppercase text-primary">
                        Treatment Category
                    </div>
                    <h1 className="text-4xl text-primary md:text-6xl font-serif mb-6 leading-tight">
                        <HeroText>{category.title}</HeroText>
                    </h1>
                    <p className="text md:text-lg font-light text-base-content/80 leading-relaxed max-w-2xl">
                        <HeroText delay={0.2}>{category.description}</HeroText>
                    </p>
                </div>
             </div>
        </section>

        {/* Subcategories Grid */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
             <h2 className="text-3xl font-serif mb-12 text-center">Explore {category.title}</h2>
             
             <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {Object.entries(category.subCategories).map(([key, sub]) => (
                    <Link key={key} to={`/treatments/${category.id}/${key}`} className="group block h-full">
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-base-200">
                             <div className="h-64 overflow-hidden relative">
                                 <img src={sub.placeholderUrl || sub.image || category.placeholderUrl || category.image} alt={sub.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                             </div>
                             <div className="p-8 flex-grow flex flex-col items-start">
                                 <h3 className="text-2xl font-serif mb-3 text-stone-900 group-hover:text-primary transition-colors">{sub.title}</h3>
                                 <p className="text-stone-600 mb-6 flex-grow font-light leading-relaxed">{sub.description}</p>
                                 <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:translate-x-1 transition-transform">
                                     View Treatments <ArrowRight size={18} />
                                 </span>
                             </div>
                        </div>
                    </Link>
                ))}
             </div>
        </section>
        <ConsultationCTA />
      </div>
    </>
  );
}
