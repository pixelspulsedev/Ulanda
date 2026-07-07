import React from 'react';
import { Link } from 'react-router-dom';
import FadeInWhenVisible from './animations/FadeInWhenVisible';

/**
 * ClinicalSystemBlock
 *
 * Reusable "The ULANDA Clinical System™" section for direct-booking eligible
 * treatment pages. This block is intentionally identical across every eligible
 * treatment page — only the treatment name (where used) changes.
 *
 * The full explanation of the clinical model lives on the single authority page
 * at /clinical-system. This block references it, it does not duplicate it.
 */
export default function ClinicalSystemBlock({ treatmentName }) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/40">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInWhenVisible>
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Every treatment begins with understanding
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-base-content mt-4 mb-8 leading-tight">
            The ULANDA Clinical System&trade;
          </h2>
          <div className="space-y-5 text-base md:text-lg text-base-content/80 font-sans leading-relaxed text-left max-w-2xl mx-auto">
            <p>
              Treatments at ULANDA are delivered within the ULANDA Clinical
              System&trade;, our diagnostic-led model of care that places clinical
              understanding before treatment selection.
            </p>
            <p>
              Before treatment proceeds, your clinician completes a Focused
              Clinical Assessment to confirm that
              {treatmentName ? ` ${treatmentName} ` : ' this treatment '}
              remains appropriate for your skin, your goals and your current
              clinical presentation.
            </p>
            <p>
              Where underlying factors such as barrier dysfunction, inflammation,
              hormonal change or broader skin health concerns are identified, your
              clinician may recommend integrating this treatment into a more
              comprehensive treatment plan or Signature Programme to support safer,
              more predictable and longer-lasting outcomes.
            </p>
            <p className="font-serif italic text-primary text-lg md:text-xl">
              Understanding Before Treatment&trade; guides every recommendation we
              make.
            </p>
          </div>
          <div className="mt-10">
            <Link to="/clinical-system" className="btn btn-primary">
              Learn about the ULANDA Clinical System&trade; &rarr;
            </Link>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
