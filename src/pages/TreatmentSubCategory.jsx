import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getTreatmentSubCategory, getTreatmentCategory } from '../data/pageContents/treatments/treatments';
import { ArrowRight } from 'lucide-react';
import HeroText from '../components/animations/HeroText';
import { FAQSchema } from '../components/Schema';
import ConsultationCTA from '../components/ConsultationCTA';

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
    'skin-boosters': { title: 'Skin Boosters in Ware SG12 | Renew | ULANDA', description: 'Injectable Skin Boosters at ULANDA in Ware SG12. Profhilo, Hydrobooster, Jalupro and Lumi Eyes for deep hydration and bio-remodelling.' },
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
    'iv-therapy': { title: 'IV Therapy in Ware SG12 | Radiate | ULANDA', description: 'IV therapy treatments at ULANDA in Ware SG12. NAD+, glutathione IV, energy and immune resilience support IV drips for internal wellness.' },
    'im-therapy': { title: 'IM Vitamin Therapy in Ware SG12 | Radiate | ULANDA', description: 'Intramuscular vitamin therapy at ULANDA in Ware SG12. Vitamin B12, D3 and energy-boosting injections.' },
    'weight-management': { title: 'Medical Weight Management in Ware SG12 | Radiate | ULANDA', description: 'Medical weight management at ULANDA in Ware SG12. Clinically supervised programmes for sustainable weight loss.' },
    'longevity': { title: 'Longevity & Cellular Health in Ware SG12 | Radiate | ULANDA', description: 'Longevity and cellular health treatments at ULANDA in Ware SG12. NAD+ therapy and regenerative wellness protocols.' },
    'pathways': { title: 'Radiate Pathways in Ware SG12 | ULANDA', description: 'Comprehensive treatment pathways at ULANDA in Ware SG12. Multi-week regenerative programmes for transformational results.' }
  }
};

export default function TreatmentSubCategory() {
  const { category: rawCategoryId, subcategory: rawSubId } = useParams();
  const categoryId = rawCategoryId?.toLowerCase();
  const subId = rawSubId?.toLowerCase();

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

  // FAQ data for signature-facials subcategory
  const signatureFacialsFAQs = [
    {
      question: "What are medical facials and how are they different from spa facials?",
      answer: "Medical facials are clinical-grade skin treatments delivered in a medically supervised environment. Unlike spa facials, they use professional-strength actives, are tailored to hormonal and barrier health, and target functional skin issues — not just short-term relaxation."
    },
    {
      question: "Which facial treatment is best for menopausal or hormonally stressed skin?",
      answer: "Lymphatic Detox Facial, Enzyme Renewal Facial and Oxygen Glow Facial are ideal for menopausal skin. They support circulation, lymphatic drainage and barrier function — addressing puffiness, dullness and reactivity linked to hormonal transitions."
    },
    {
      question: "Can I get a HydraFacial in Ware?",
      answer: "Yes. Our Advanced Cleansing & Hydration Therapy follows the HydraFacial method but is delivered with a clinical, barrier-first approach tailored to your skin's tolerance and hormonal context."
    },
    {
      question: "Where can I get professional facial treatments near me in Hertfordshire?",
      answer: "ULANDA is a nurse-led skin clinic located in Ware SG12, just minutes from Hertford, Hoddesdon, Broxbourne, Bishops Stortford and surrounding areas. We offer medical-grade facial treatments with flexible consultation and booking."
    },
    {
      question: "Are these facials safe for sensitive or reactive skin?",
      answer: "Yes. All treatments are designed with barrier health in mind. Enzyme Renewal Facial, Lymphatic Detox Facial and Barrier Repair Facial are especially gentle and restorative for sensitive, inflamed or hormonally reactive skin."
    },
    {
      question: "How often should I get a facial treatment?",
      answer: "Most clients benefit from treatments every 4–6 weeks. During hormonal transitions (perimenopause, post-pregnancy, cycle shifts), every 3–4 weeks may provide better support for barrier function and skin stability."
    },
    {
      question: "Do you offer skin consultations before facial treatments?",
      answer: "Yes. Every client begins with a comprehensive Skin Behaviour Consultation to assess your skin pattern, hormonal context, and treatment tolerance. This ensures your facial is functional, not reactive."
    }
  ];

  // Show FAQ and CTA only for signature-facials subcategory
  const showFAQAndCTA = categoryId === 'refresh' && subId === 'signature-facials';

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://www.ulanda.co.uk/treatments/${categoryId}/${subId}`.toLowerCase()} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={`https://www.ulanda.co.uk/treatments/${categoryId}/${subId}`.toLowerCase()} />
        <meta property="og:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center bg-secondary">
             <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-base-content">
                <div className="max-w-3xl">
                     <Link to={`/treatments/${category.id}`} className=" hover:text-primary-focus uppercase tracking-widest text-xs font-bold mb-4 block">
                        &larr; Back to {category.title}
                     </Link>
                    <h1 className="text-4xl text-primary md:text-6xl font-serif mb-6 leading-tight">
                        <HeroText>{subCategory.title}</HeroText>
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-base-content/80 leading-relaxed max-w-2xl">
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

        {/* FAQ Section - Only for signature-facials */}
        {showFAQAndCTA && (
          <>
            <FAQSchema faqs={signatureFacialsFAQs} />
            <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto bg-base-100">
              <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center text-primary">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {signatureFacialsFAQs.map((faq, index) => (
                  <details key={index} className="group bg-white rounded-lg border border-base-200 overflow-hidden">
                    <summary className="px-6 py-4 cursor-pointer font-medium text-lg text-stone-900 group-open:text-primary transition-colors flex justify-between items-center">
                      <span>{faq.question}</span>
                      <span className="ml-4 text-primary transform group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-4 text-stone-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto text-center bg-secondary/30 rounded-2xl my-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">
                Ready to Choose the Right Facial for Your Skin?
              </h2>
              <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Every treatment at ULANDA begins with a comprehensive Skin Behaviour Consultation. We assess your skin pattern, hormonal context, and treatment tolerance to create a clinical plan that works—without disruption, guesswork or reactive outcomes.
              </p>
              <a 
                href="https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-focus transition-colors shadow-md hover:shadow-lg"
              >
                Book Advanced Skin Health Consultation
              </a>
              <p className="text-sm text-stone-500 mt-8 italic">
                ULANDA is a nurse-led skin clinic in Ware, Hertfordshire — serving Hertford, Hoddesdon, Broxbourne, Bishops Stortford and surrounding East Herts areas with medical-grade facial treatments rooted in hormonal skin science.
              </p>
            </section>
          </>
        )}
        <ConsultationCTA />
      </div>
    </>
  );
}
