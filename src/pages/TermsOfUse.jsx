import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { HeroText, FadeInWhenVisible } from '../components/animations';

export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 font-sans">
      <Head>
        <title>Terms of Use - ULANDA MedSpa</title>
      </Head>
      
      <HeroText>
        <h1 className="text-4xl md:text-5xl font-light mb-8 font-serif">Terms of Use</h1>
        <p className="text-gray-600 mb-8">Effective Date: 11/01/2026</p>
      </HeroText>

      <FadeInWhenVisible className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <p>
          Welcome to ULANDA MedSpa (“we,” “our,” or “us”). By accessing or using our website – <a href="https://www.ulanda.co.uk" className="text-primary hover:underline">www.ulanda.co.uk</a> (the “Website”), you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please do not use the Website.
        </p>

        <section>
          <h2 className="text-2xl font-serif mb-4">1. Use of the Website</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may use the Website for personal, non-commercial purposes related to our services.</li>
            <li>You must be at least 18 years old to use the Website.</li>
            <li>You agree not to:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Use the Website for unlawful purposes or in a way that violates any applicable law or regulation.</li>
                <li>Interfere with the operation of the Website or access the Website using automated means (e.g., bots, scrapers).</li>
                <li>Post or transmit content that is false, misleading, offensive, defamatory, or infringing on third-party rights.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">2. Medical and Service Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The content on the Website, including descriptions of treatments, services, and products, is for informational purposes only.</li>
            <li>Nothing on the Website constitutes medical advice or a substitute for professional consultation.</li>
            <li>Always seek advice from a qualified healthcare provider before undergoing any treatments or procedures.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">3. Appointments and Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All bookings made through the Website are subject to availability and our confirmation.</li>
            <li>We reserve the right to refuse or cancel appointments at our discretion.</li>
            <li>Pricing and service descriptions may change without notice.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">4. Payment and Billing</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payments for services booked online must be made in accordance with our booking process.</li>
            <li>All payments are non-refundable unless otherwise stated or required by law.</li>
            <li>We reserve the right to cancel services if payment is not received or if fraudulent activity is detected.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">5. Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All content on the Website, including text, images, logos, and graphics, is the property of ULANDA MedSpa or its licensors and is protected by copyright, trademark, and other intellectual property laws.</li>
            <li>You may not reproduce, distribute, modify, or use any content for commercial purposes without our prior written consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">6. Third-Party Links</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Website may contain links to third-party websites.</li>
            <li>We are not responsible for the content, products, or services provided by third parties.</li>
            <li>Any access to third-party websites is at your own risk.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">7. Limitation of Liability</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To the maximum extent permitted by law, ULANDA MedSpa shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the Website or reliance on any information provided.</li>
            <li>This includes, but is not limited to, loss of profits, loss of data, or injury related to treatments or services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">8. Privacy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use of the Website is also governed by our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.</li>
            <li>By using the Website, you consent to the collection, use, and storage of your information in accordance with our Privacy Policy.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">9. Indemnification</h2>
          <p>You agree to indemnify and hold harmless ULANDA MedSpa, its officers, employees, and agents from any claims, damages, liabilities, or expenses arising from your use of the Website or violation of these Terms of Use.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">10. Changes to Terms</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We may update or modify these Terms of Use at any time without prior notice.</li>
            <li>Your continued use of the Website after changes constitutes your acceptance of the updated terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">11. Governing Law</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>These Terms of Use are governed by and construed in accordance with the laws of England and Wales.</li>
            <li>Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">12. Contact</h2>
          <p className="mb-4">If you have any questions or concerns regarding these Terms of Use, please contact us at:</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-semibold">ULANDA MedSpa</p>
            <p>Uphaven,</p>
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
