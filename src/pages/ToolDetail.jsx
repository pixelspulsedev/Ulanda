import React from 'react';
import { Head } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { tools } from '../data/pageContents/tools/tools';
import { Check, Clock, Shield, ChevronRight } from 'lucide-react';
import HeroText from '../components/animations/HeroText';
import RevealImage from '../components/animations/RevealImage';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function ToolDetail() {
  const { id } = useParams();
  const tool = tools.find(t => t.id === id);

  if (!tool) {
    return <div className="text-center py-20">Tool not found</div>;
  }

  return (
    <>
      <Head>
        <title>{tool.title} | Ulanda</title>
        <meta name="description" content={tool.subtitle} />
      </Head>

      <div className="bg-base-100 font-sans text-base-content">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <HeroText>
            <span className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-4 block">Biostimulator</span>
            </HeroText>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-primary">
            <HeroText delay={0.2}>
            {tool.title}
            </HeroText>
            </h1>
            <div className="text-xl md:text-2xl font-light text-stone-600 italic mb-8 max-w-2xl mx-auto">
            <HeroText delay={0.4}>
            {tool.subtitle}
            </HeroText>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl font-serif mb-6 text-stone-800">{tool.intro.heading}</h2>
                   <p className="text-lg leading-relaxed text-stone-600">{tool.intro.content}</p>
                </div>
                <div className="bg-secondary p-8">
                    <h3 className="text-2xl font-serif mb-6 text-stone-800">{tool.philosophy.heading}</h3>
                    <p className="mb-6 text-stone-600">{tool.philosophy.content}</p>
                    <ul className="space-y-3">
                        {tool.philosophy.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-1 text-primary"><Check size={18} /></span>
                                <span className="text-stone-700">{point}</span>
                            </li>
                        ))}
                    </ul>
                    {tool.philosophy.footer && <p className="mt-6 text-sm font-medium text-stone-500 italic">{tool.philosophy.footer}</p>}
                </div>
            </div>
        </section>

        {/* Science Section */}
        <section className="py-16 px-4 md:px-8 ">
            <div className="max-w-7xl mx-auto">
                 <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">{tool.science.heading}</h2>
                    <p className="text-lg  leading-relaxed">{tool.science.content}</p>
                 </div>

                 <div className="grid md:grid-cols-2 gap-12">
                     {tool.science.mechanism && tool.science.mechanism.length > 0 && (
                        <div>
                            <h3 className="text-xl font-sans font-bold uppercase tracking-wider mb-6 ">Mechanism</h3>
                             <ul className="space-y-4">
                                {tool.science.mechanism.map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center  text-sm">{i + 1}</span>
                                        <span className="py-1 ">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                     )}

                     <div>
                        <h3 className="text-xl font-bold uppercase tracking-wider mb-6 font-sans">Clinical Benefits</h3>
                        <ul className="space-y-3">
                            {tool.science.clinicalBenefits.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1 text-primary"><Check size={18} /></span>
                                    <span className="">{item}</span>
                                </li>
                            ))}
                        </ul>
                     </div>
                 </div>
            </div>
        </section>

        {/* Improvements Grid */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">What {tool.title} Improvements</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {tool.improves.map((cat, i) => (
                    <div key={i} className="bg-secondary p-8 ">
                        <h3 className="text-xl font-sans mb-6 text-primary">{cat.category}</h3>
                        <ul className="space-y-2">
                             {cat.items.map((item, idx) => (
                                <li key={idx} className="text-stone-600 border-b border-stone-200 pb-2 last:border-0">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        {/* Ideal Candidate */}
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl md:text-4xl font-serif mb-10">{tool.idealFor.heading}</h2>
                 <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {tool.idealFor.points.map((point, i) => (
                        <span key={i} className="px-6 py-3 bg-primary rounded-full text-secondary">
                            {point}
                        </span>
                    ))}
                 </div>
                 <p className="text-stone-500 italic">{tool.idealFor.footer}</p>
            </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">The Treatment Process</h2>
           <div className="grid md:grid-cols-4 gap-6">
                {tool.process.map((step, i) => (
                    <div key={i} className="relative bg-secondary p-6 pt-10">
                        <div className="text-5xl font-sans text-stone-100 absolute -top-8 -left-4 -z-10">{i + 1}</div>
                        <h3 className="text-lg  font-sans font-medium mb-3 text-stone-800">{step.step.replace(/^\d+\.\s/, '')}</h3>
                        <p className="text-stone-600 text-sm">{step.description}</p>
                    </div>
                ))}
           </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4 md:px-8 bg-stone-900 text-stone-50">
             <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Timeline of Results</h2>
                <div className="space-y-6">
                    {tool.timeline.map((t, i) => (
                        <div key={i} className="flex gap-6 items-center p-4 border-b border-stone-800 last:border-0">
                            <div className="w-32 flex-shrink-0 font-bold text-primary">{t.time}</div>
                            <div className="text-stone-300">{t.result}</div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

         {/* Safety & Pricing */}
         <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="text-primary" />
                        <h2 className="text-2xl font-serif">Safety</h2>
                    </div>
                    <p className="text-stone-600 mb-6">{tool.safety.description}</p>
                     <div className="flex flex-wrap gap-2">
                        {tool.safety.effects.map((effect, i) => (
                             <span key={i} className="text-xs px-3 py-1 bg-stone-100 text-stone-600 rounded-full">{effect}</span>
                        ))}
                     </div>
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="text-primary" />
                        <h2 className="text-2xl font-serif">Pricing Guidance</h2>
                    </div>
                    <p className="text-stone-600">{tool.pricing.description}</p>
                </div>
            </div>
         </section>

         {/* CTA */}
         <section className="py-24 px-4 md:px-8 bg-secondary text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-stone-900">Start Your Journey</h2>
                <p className="text-xl text-stone-600 mb-10">{tool.cta.text}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-stone-800 transition-colors duration-300">
                    {tool.cta.linkText}
                    {/* <ChevronRight size={18} /> */}
                </Link>
            </div>
         </section>
      </div>
    </>
  );
}
