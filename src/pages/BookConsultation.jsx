import React from 'react';
import { Head } from 'vite-react-ssg';
import { HeroText, FadeInWhenVisible } from '../components/animations';

const BookConsultation = () => {
  return (
    <>
      <Head>
        <title>Book Consultation | ULANDA Regenerative Aesthetics</title>
        <meta name="description" content="Book your consultation at ULANDA. Start your journey to regenerated skin and holistic wellness in Ware, Hertfordshire." />
        <link rel="canonical" href="https://www.ulanda.co.uk/book-consultation" />
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
                Book Your <span className="italic text-primary">Consultation</span>
              </h1>
              <p className="text-lg md:text-xl text-base-content/80 font-light leading-relaxed max-w-2xl">
                Ready to transform your skin health? Fill out the form below to request a consultation with our specialists.
              </p>
            </HeroText>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInWhenVisible>
            <div className="bg-white p-4 md:p-8 shadow-sm rounded-lg border border-base-200">
                {/* 
                  ***********************************************************************
                   REPLACE THE IFRAME BELOW WITH YOUR ACTUAL GOOGLE FORM EMBED CODE
                   Instructions:
                   1. Go to your Google Form.
                   2. Click "Send" button.
                   3. Click the "< >" (Embed HTML) tab.
                   4. Copy the Width and Height, usually you can set width to "100%" in the code below.
                   5. Paste the src URL from the embed code into the src attribute below.
                   
                   Note: If you want name, email, phone, and message, ensure your Google Form has these questions.
                  ***********************************************************************
                */}
                <div className="relative w-full overflow-hidden" style={{ minHeight: '800px' }}>
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSftSIF2Ee9XS1tdmwjzAOeuRBqCVjAJgkVvmg9dKPhhv4z94w/viewform?embedded=true" 
                    className="absolute top-0 left-0 w-full h-full border-0" 
                    title="Book Consultation Form"
                  >
                    Loading…
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

export default BookConsultation;
