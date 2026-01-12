import { Head } from 'vite-react-ssg';
import { HeroText, FadeInWhenVisible } from '../components/animations';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 font-sans">
      <Head>
        <title>Privacy Policy - ULANDA MedSpa</title>
      </Head>
      
      <HeroText>
        <h1 className="text-4xl md:text-5xl font-light mb-8 font-serif">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: 11/02/2026</p>
      </HeroText>

      <FadeInWhenVisible className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <p>
          ULANDA MedSpa (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you use our website [www.ulanda.co.uk] (the “Website”) or engage with our services.
        </p>

        <section>
          <h2 className="text-2xl font-serif mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal information you provide:</strong> Name, email address, phone number, date of birth, and payment details</li>
            <li><strong>Health or medical information:</strong> necessary for treatments or consultations</li>
            <li><strong>Technical information automatically collected:</strong> IP address, browser type, device information, pages visited, and interaction with the Website</li>
            <li><strong>Cookies and tracking technologies:</strong> We use cookies to improve user experience, analyze website traffic, and deliver relevant content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and manage our services, bookings, and consultations</li>
            <li>Communicate with you about appointments, promotions, or updates</li>
            <li>Comply with legal obligations, including medical record-keeping</li>
            <li>Improve the Website and user experience</li>
            <li>Protect against fraud and unauthorized access</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">3. Sharing Your Information</h2>
          <p className="mb-4">We do not sell your personal data. We may share information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>With service providers or payment processors to fulfill services</li>
            <li>If required by law, regulation, or legal process</li>
            <li>In the event of a sale or merger of the business, under confidentiality agreements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">4. Data Retention</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal data is retained only as long as necessary for business, legal, or regulatory purposes.</li>
            <li>Medical records are retained in accordance with UK healthcare regulations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">5. Your Rights</h2>
          <p className="mb-4">Under UK data protection laws, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion or restriction of processing</li>
            <li>Object to certain processing activities</li>
            <li>Lodge a complaint with the Information Commissioner’s Office (ICO)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">6. Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We implement appropriate technical and organizational measures to protect your data.</li>
            <li>However, no online transmission can be guaranteed 100% secure.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">7. Changes to Privacy Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We may update this Privacy Policy at any time.</li>
            <li>Changes will be posted on the Website with an updated effective date.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">8. Contact</h2>
          <p className="mb-4">For any questions about this Privacy Policy, please contact:</p>
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
