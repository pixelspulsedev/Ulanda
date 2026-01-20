import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getTreatmentSubCategory, getTreatmentCategory } from '../data/pageContents/treatments/treatments';
import { ArrowRight } from 'lucide-react';
import HeroText from '../components/animations/HeroText';

// Sub-category SEO mapping following locked format: [Treatment Focus] in Ware SG12 | [Pathway] | ULANDA
const subCategorySEO = {
  // Refresh subcategories
  'refresh': {
    'signature-facials': { title: 'Medical Facials in Ware SG12 | Refresh | ULANDA', description: 'Professional medical facials at ULANDA in Ware SG12. Deep cleansing, exfoliation and hydration treatments including HydraFacial, enzyme therapy and oxygen facials.' },
    'resurfacing': { title: 'Skin Resurfacing in Ware SG12 | Refresh | ULANDA', description: 'Skin resurfacing treatments at ULANDA in Ware SG12. Chemical peels, dermaplaning and BioRePeel for texture refinement and radiance.' },
    'light-based': { title: 'LED Light Therapy in Ware SG12 | Refresh | ULANDA', description: 'LED light therapy at ULANDA in Ware SG12. Medical-grade wavelengths for collagen stimulation, acne and inflammation control.' },
    'body-surface': { title: 'Body Surface Treatments in Ware SG12 | Refresh | ULANDA', description: 'Body surface treatments at ULANDA in Ware SG12. Body peels and resurfacing for improved skin texture and tone.' }
  },
  // Renew subcategories
  'renew': {
    'skin-boosters': { title: 'Skin Boosters in Ware SG12 | Renew | ULANDA', description: 'Injectable skin boosters at ULANDA in Ware SG12. Profhilo, Hydrobooster, Jalupro and Lumi Eyes for deep hydration and bio-remodelling.' },
    'microneedling': { title: 'Microneedling Treatments in Ware SG12 | Renew | ULANDA', description: 'Medical microneedling at ULANDA in Ware SG12. Collagen induction therapy and RF microneedling for texture, pores and scarring.' },
    'regenerative': { title: 'Regenerative Treatments in Ware SG12 | Renew | ULANDA', description: 'Regenerative skin treatments at ULANDA in Ware SG12. Polynucleotides (PN), PRP and advanced bio-revitalisation.' },
    'injectable-aesthetics': { title: 'Injectable Aesthetics in Ware SG12 | Renew | ULANDA', description: 'Injectable aesthetic treatments at ULANDA in Ware SG12. Anti-wrinkle treatments and natural enhancement options.' }
  },
  // Restore subcategories
  'restore': {
    'biostimulators': { title: 'Biostimulator Treatments in Ware SG12 | Restore | ULANDA', description: 'Biostimulator treatments at ULANDA in Ware SG12. PLLA and CaHA for natural collagen rebuilding and structural support.' },
    'structural': { title: 'Structural Treatments in Ware SG12 | Restore | ULANDA', description: 'Structural aesthetic treatments at ULANDA in Ware SG12. Thread lifts, dermal fillers and jawline sculpting.' },
    'skin-recovery': { title: 'Skin Recovery Treatments in Ware SG12 | Restore | ULANDA', description: 'Skin recovery treatments at ULANDA in Ware SG12. Barrier repair facials, lymphatic drainage and post-procedure care.' },
    'body-contouring': { title: 'Body Contouring in Ware SG12 | Restore | ULANDA', description: 'Body contouring treatments at ULANDA in Ware SG12. Body tightening and skin firming for natural definition.' }
  },
  // Radiate subcategories
  'radiate': {
    'iv-therapy': { title: 'IV Therapy in Ware SG12 | Radiate | ULANDA', description: 'IV therapy treatments at ULANDA in Ware SG12. NAD+, glutathione, energy and immunity IV drips for internal wellness.' },
    'im-therapy': { title: 'IM Vitamin Therapy in Ware SG12 | Radiate | ULANDA', description: 'Intramuscular vitamin therapy at ULANDA in Ware SG12. Vitamin B12, D3 and energy-boosting injections.' },
    'weight-management': { title: 'Medical Weight Management in Ware SG12 | Radiate | ULANDA', description: 'Medical weight management at ULANDA in Ware SG12. Clinically supervised programmes for sustainable weight loss.' },
    'longevity': { title: 'Longevity & Cellular Health in Ware SG12 | Radiate | ULANDA', description: 'Longevity and cellular health treatments at ULANDA in Ware SG12. NAD+ therapy and regenerative wellness protocols.' },
    'pathways': { title: 'Radiate Pathways in Ware SG12 | ULANDA', description: 'Comprehensive treatment pathways at ULANDA in Ware SG12. Multi-week regenerative programmes for transformational results.' }
  }
};

export default function TreatmentSubCategory() {
  const { category: categoryId, subcategory: subId } = useParams();
  const category = getTreatmentCategory(categoryId);
  const subCategory = getTreatmentSubCategory(categoryId, subId);

  if (!subCategory || !category) {
    return <Navigate to={`/treatments/${categoryId || ''}`} replace />;
  }

  // Get subcategory-specific SEO or fall back to generic
  const seo = subCategorySEO[categoryId]?.[subId] || {
    title: `${subCategory.title} in Ware SG12 | ${category.title} | ULANDA`,
    description: subCategory.description
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://www.ulanda.co.uk/treatments/${categoryId}/${subId}`} />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
         <section className="relative min-h-[50vh] flex items-center bg-stone-900">
             <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                <img
                  src={subCategory.placeholderUrl || subCategory.image || category.placeholderUrl || category.image}
                  alt={subCategory.title}
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                 <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-transparent"></div>
              </div>

             <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-white">
                <div className="max-w-3xl">
                     <Link to={`/treatments/${category.id}`} className="text-white/70 hover:text-white uppercase tracking-widest text-xs font-bold mb-4 block">
                        &larr; Back to {category.title}
                     </Link>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                        <HeroText>{subCategory.title}</HeroText>
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-2xl">
                        <HeroText delay={0.2}>{subCategory.description}</HeroText>
                    </p>
                </div>
             </div>
        </section>

        {/* Treatments List */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid gap-6">
                {Object.entries(subCategory.treatments).map(([id, treatment]) => (
                    <Link
                        key={id}
                        to={`/treatments/${category.id}/${subId}/${id}`}
                        className="group relative flex flex-col md:flex-row bg-white border border-base-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                         <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden">
                             {treatment.placeholderUrl || treatment.image || subCategory.placeholderUrl || subCategory.image ? (
                                 <img src={treatment.placeholderUrl || treatment.image || subCategory.placeholderUrl || subCategory.image} alt={treatment.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                             ) : (
                                 <div className="w-full h-full bg-secondary flex items-center justify-center text-primary/30">
                                     <span className="text-4xl font-serif italic">Ulanda</span>
                                 </div>
                             )}
                         </div>
                         <div className="p-8 md:w-2/3 flex flex-col justify-center">
                              <h3 className="text-2xl font-serif mb-3 text-stone-900 group-hover:text-primary transition-colors">
                                  {treatment.title || treatment.name}
                              </h3>
                              <p className="text-stone-600 mb-6 font-light leading-relaxed line-clamp-2">
                                  {treatment.description || subCategory.description}
                              </p>
                              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:translate-x-2 transition-transform self-start">
                                  View Details <ArrowRight size={18} />
                              </span>
                         </div>
                    </Link>
                ))}
            </div>
        </section>
      </div>
    </>
  );
}
