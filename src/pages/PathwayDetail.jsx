import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getPathway } from '../data/pageContents/pathways/pathways';
import { getTreatment } from '../data/pageContents/treatments/treatments';
import { getTreatmentUrl } from '../data/crosslinks';
import { Check, ArrowRight } from 'lucide-react';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';

export default function PathwayDetail() {
  const { id, category } = useParams();
  const pathwayId = id || category;
  const pathway = getPathway(pathwayId);

  if (!pathway) {
    // Check if it's a treatment and redirect
    const treatment = getTreatment(pathwayId);
    if (treatment) {
      // Assuming category in treatment data matches the URL slug structure (e.g. 'Refresh' -> 'refresh')
      const categorySlug = treatment.category ? treatment.category.toLowerCase() : 'other';
      return <Navigate to={`/treatments/${categorySlug}/${treatment.id}`} replace />;
    }
    return <div className="text-center py-20">Pathway not found</div>;
  }

  // Generate SEO title following locked format for pathways
  const seoTitle = `${pathway.title} Treatments in Ware SG12 | ULANDA`;
  const seoDescription = pathway.subtitle || pathway.description;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={`https://www.ulanda.co.uk/treatments/${pathwayId}`} />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center">
             <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                <img
                  src={pathway.image}
                  alt={pathway.title}
                  className="w-full h-full object-cover brightness-75"
                  fetchpriority="high"
                />
                 <div className="absolute inset-0 bg-black/30"></div>
              </div>

             <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
                <div className="max-w-3xl text-white">
                    <HeroText>
                    <span className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-sm font-bold tracking-widest uppercase">
                        The {pathway.title} Pathway
                    </span>
                    </HeroText>
                    
                    <h1 
                        className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
                    >
                    <HeroText delay={0.2}>
                        <span dangerouslySetInnerHTML={{ __html: typeof pathway.heading === 'function' ? pathway.heading() : pathway.heading }} />
                    </HeroText>
                    </h1>
                     
                    <div className="text-xl md:text-2xl font-light text-white/90 leading-relaxed">
                        <HeroText delay={0.4}>
                        {pathway.subtitle}
                        </HeroText>
                    </div>
                </div>
             </div>
        </section>

        {/* Description & Includes */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-3xl font-serif mb-6 text-stone-900 leading-tight">
                        Understanding <span className="text-primary italic">{pathway.title}</span>
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed mb-8">
                        {pathway.description}
                    </p>
                    
                    <div className="bg-secondary p-8   ">
                         <h3 className="text-xl font-sans  font-medium mb-4 text-stone-800">Perfect For:</h3>
                         <p className="text-stone-600 italic">
                             {pathway.perfectFor}
                         </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-serif mb-8 text-stone-900 border-b border-stone-200 pb-4">
                        Included Treatments
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {pathway.includes.map((item, index) => {
                             const name = typeof item === 'string' ? item : item.name;
                             const linkId = typeof item === 'string' ? null : item.linkId;
                             const url = linkId ? getTreatmentUrl(linkId) : null;
                             
                             const content = (
                                <>
                                   <span className="text-primary"><Check size={18} /></span>
                                   <span className="font-medium text-stone-700">{name}</span>
                                </>
                             );

                             if (url) {
                                 return (
                                     <Link key={index} to={url} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-stone-100 hover:border-primary/30 transition-colors hover:shadow-md">
                                        {content}
                                     </Link>
                                 );
                             }

                             return (
                                 <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-stone-100 hover:border-primary/30 transition-colors">
                                    {content}
                                 </div>
                             );
                        })}
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 md:px-8 bg-secondary text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">Start Your <span className="italic">{pathway.title}</span> Journey</h2>
                <p className="text-xl text-stone-600 mb-10">
                    Book a consultation to see if the {pathway.title} pathway is right for you.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-focus transition-colors duration-300">
                    Book Consultation
                    {/* <ArrowRight size={18} /> */}
                </Link>
            </div>
        </section>

      </div>
    </>
  );
}
