import { Head } from 'vite-react-ssg';
import { HeroText, FadeInWhenVisible } from '../components/animations';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 font-sans">
      <Head>
        <title>Website Disclaimer - ULANDA MedSpa</title>
      </Head>
      
      <HeroText>
        <h1 className="text-4xl md:text-5xl font-light mb-8 font-serif">Website Disclaimer (Medical & Spa Services)</h1>
        <p className="text-gray-600 mb-8">Effective Date: 11/01/2026</p>
      </HeroText>

      <FadeInWhenVisible className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <p>
          The content on <a href="https://www.ulanda.co.uk" className="text-primary hover:underline">www.ulanda.co.uk</a> (the “Website”) is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
        </p>

        <section>
          <h2 className="text-2xl font-serif mb-4">1. No Medical Advice</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Treatments and procedures described on this Website may not be suitable for everyone.</li>
            <li>Always consult a qualified healthcare professional before undergoing any treatments.</li>
            <li>Results may vary depending on individual circumstances.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">2. Limitation of Liability</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ULANDA MedSpa does not guarantee the accuracy or completeness of content on the Website.</li>
            <li>Use of the Website or reliance on information provided is at your own risk.</li>
            <li>We are not responsible for any injury, adverse outcome, or loss resulting from treatments, products, or information on the Website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">3. Third-Party Links</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Website may contain links to third-party websites.</li>
            <li>We do not endorse or control the content, products, or services on external sites and are not liable for any damages arising from their use.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">4. Testimonials and Results</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any client testimonials or before/after images are for illustrative purposes only.</li>
            <li>They do not guarantee similar results for all individuals.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">5. Changes to Disclaimer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>This Disclaimer may be updated at any time without notice.</li>
            <li>Continued use of the Website indicates acceptance of any changes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">6. Contact</h2>
          <p className="mb-4">If you have questions regarding this Disclaimer, please contact:</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-semibold">ULANDA MedSpa</p>
            <p>Uphaven House,</p>
            <p>6 Hampden Hill,</p>
            <p>Ware, East Hertfordshire</p>
            <p>UK. SG12 7JT</p>
            <p className="mt-4"><a href="mailto:Info@ulanda.co.uk" className="text-primary hover:underline">Info@ulanda.co.uk</a></p>
            <p><a href="tel:+447904336031" className="text-primary hover:underline">+44 7904 336 031</a></p>
          </div>
        </section>
      </FadeInWhenVisible>
    </div>
  );
}
