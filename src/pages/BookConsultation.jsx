import React, { useEffect, useCallback } from 'react';
import { Head } from 'vite-react-ssg';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { HeroText, FadeInWhenVisible } from '../components/animations';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_V3_SITE_KEY';

const BookConsultationContent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return;
    const token = await executeRecaptcha('book_consultation');
    // Send token to backend for server-side verification
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <>
      <Head>
        <title>Book a Consultation | ULANDA Skin Clinic Ware</title>
        <meta name="description" content="Book your Advanced Skin Health Consultation at ULANDA in Ware, Hertfordshire. Share your skin concerns and start your regenerative journey." />
        <link rel="canonical" href="https://www.ulanda.co.uk/book-consultation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book a Consultation | ULANDA" />
        <meta name="twitter:description" content="Book your Advanced Skin Health Consultation at ULANDA in Ware, Hertfordshire." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl transform scale-150"></div>
        </div>
        <div className="container mx-auto px-4 relative max-w-7xl">
          <div className="max-w-3xl">
            <HeroText>
              <h1 className="text-4xl md:text-6xl font-serif text-base-content mb-6 leading-tight">
                <span className="italic text-primary">Contact</span> Us
              </h1>
              <p className="text-lg md:text-xl text-base-content/80 font-light leading-relaxed max-w-2xl">
                Have a question or want to get in touch? Fill out the form below and we'll get back to you.
              </p>
            </HeroText>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className=" bg-base-100">
        <div className="container mx-auto max-w-4xl">
          <FadeInWhenVisible>
            <div className="bg-white shadow-sm rounded-lg border border-base-200">
                <div className="relative w-full" style={{ minHeight: '1000px' }}>
                  <iframe
                    id="JotFormIFrame-260183295758063"
                    title="Contact Form"
                    src="https://form.jotform.com/260183295758063"
                    className="w-full h-full border-0"
                    style={{ minHeight: '1000px' }}
                    allowFullScreen={true}
                    allow="geolocation; microphone; camera"
                    scrolling="auto"
                  >
                  </iframe>
                </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-base-content/60">
              <p>Prefer to contact us directly? Email us at <a href="mailto:info@ulanda.co.uk" className="text-primary hover:underline">info@ulanda.co.uk</a></p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
};

const BookConsultation = () => (
  <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
    <BookConsultationContent />
  </GoogleReCaptchaProvider>
);

export default BookConsultation;
