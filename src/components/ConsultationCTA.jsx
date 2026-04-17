import { Link } from 'react-router-dom';
import FadeInWhenVisible from './animations/FadeInWhenVisible';

const BOOKING_URL = "https://book.squareup.com/appointments/h7hzrz9qwytnyc/location/LR2D9RK1GVWAH/services/WPFHQ2NODO6MXBIV4UBQKEOQ";

/**
 * Reusable consultation CTA section.
 * Provides a prominent internal link to the Advanced Skin Health Consultation page
 * and an external booking link.
 *
 * @param {string} heading - CTA heading text
 * @param {string} description - CTA description text
 * @param {boolean} compact - Use compact single-line style (for legal pages etc.)
 */
export default function ConsultationCTA({
  heading = "Begin with a Clinical Assessment",
  description = "Every ULANDA journey starts with our Advanced Skin Health Consultation — a 60–90 minute clinician-led assessment including AI skin analysis, barrier evaluation and personalised treatment planning. The £175 fee is fully redeemable against your treatment plan.",
  compact = false,
}) {
  if (compact) {
    return (
      <div className="py-8 px-4 text-center border-t border-primary/10">
        <p className="text-base-content/70 text-sm">
          Learn how your journey begins with our{' '}
          <Link
            to="/treatments/advanced-skin-health-consultation"
            className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors font-medium"
          >
            Advanced Skin Health Consultation
          </Link>.
        </p>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 flex justify-center bg-secondary/10 border-t border-primary/5">
      <FadeInWhenVisible>
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-serif text-primary mb-4">{heading}</h2>
          <p className="mb-8 font-light text-base-content/80 text-lg leading-relaxed">
            {description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/treatments/advanced-skin-health-consultation"
              className="btn btn-primary text-white px-8"
            >
              Learn About Our Consultation
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary px-8"
            >
              Book Now →
            </a>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
