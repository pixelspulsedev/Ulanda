import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getTreatmentSubCategory, getTreatmentCategory } from '../data/pageContents/treatments/treatments';
import { ArrowRight } from 'lucide-react';
import HeroText from '../components/animations/HeroText';

export default function TreatmentSubCategory() {
  const { category: categoryId, subcategory: subId } = useParams();
  const category = getTreatmentCategory(categoryId);
  const subCategory = getTreatmentSubCategory(categoryId, subId);

  if (!subCategory || !category) {
    return <Navigate to={`/treatments/${categoryId || ''}`} replace />;
  }

  return (
    <>
      <Head>
        <title>{subCategory.title} | {category.title} | Ulanda</title>
        <meta name="description" content={subCategory.description} />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
         <section className="relative min-h-[50vh] flex items-center bg-stone-900">
             <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                <img
                  src={subCategory.image || category.image}
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
                             {treatment.image || subCategory.image ? (
                                 <img src={treatment.image || subCategory.image} alt={treatment.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
