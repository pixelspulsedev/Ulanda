import React from 'react';
import { Head } from 'vite-react-ssg';
import {
  HeroText,
  FadeInWhenVisible,
  RevealImage,
} from '../components/animations';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact ULANDA | Regenerative Aesthetics Clinic Ware SG12</title>
        <meta
          name="description"
          content="Contact ULANDA in Ware SG12, Hertfordshire. Book a consultation for regenerative aesthetics, skin treatments and wellness therapies. Serving Ware, Hertford and surrounding areas."
        />
        <link rel="canonical" href="https://www.ulanda.co.uk/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact ULANDA | Regenerative Aesthetics Clinic" />
        <meta name="twitter:description" content="Contact ULANDA in Ware SG12, Hertfordshire. Book a consultation for regenerative aesthetics and skin treatments." />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/ui/Logo.webp" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary/10">
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle background element (optional) */}
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl transform scale-150"></div>
        </div>
        <div className="container mx-auto px-4 relative max-w-7xl">
          <div className="max-w-3xl">
            <HeroText>
              <h1 className="text-4xl md:text-6xl font-serif text-base-content mb-6 leading-tight">
                Get in <span className="italic text-primary">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-base-content/80 font-light leading-relaxed max-w-2xl">
                Begin your journey to regenerated skin. We are here to answer
                your questions and guide you towards the right treatment plan.
              </p>
            </HeroText>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column: Image / Aesthetic Element */}
            <div className="relative hidden md:block aspect-[4/5] md:aspect-auto h-full min-h-[500px] rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Uphaven,+6+Hampden+Hill,+Ware+SG12+7JT&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Ulanda Location"
                aria-label="Ulanda Location Map"
              ></iframe>
            </div>

            {/* Right Column: Contact Information */}
            <div className="space-y-12">
              <div>
                <FadeInWhenVisible>
                  <h2 className="text-3xl font-serif text-primary mb-8">
                    Contact Information
                  </h2>
                </FadeInWhenVisible>
                <div className="space-y-8">
                  {/* Phone */}
                  <FadeInWhenVisible delay={0.1}>
                    <div className="group flex items-start gap-6 p-6 rounded-lg hover:bg-secondary/20 transition-colors border border-transparent hover:border-primary/10">
                      <div className="mt-1 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-base-content mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+447904336031"
                          className="text-xl font-light text-primary hover:underline hover:text-primary-focus transition-colors"
                        >
                          +44 7904 336031
                        </a>
                        <p className="text-sm text-base-content/60 mt-2 font-light">
                          Available Mon-Sat, 9am - 6pm
                        </p>
                      </div>
                    </div>
                  </FadeInWhenVisible>

                  {/* Email */}
                  <FadeInWhenVisible delay={0.2}>
                    <div className="group flex items-start gap-6 p-6 rounded-lg hover:bg-secondary/20 transition-colors border border-transparent hover:border-primary/10">
                      <div className="mt-1 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-base-content mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:info@ulanda.co.uk"
                          className="text-xl font-light text-primary hover:underline hover:text-primary-focus transition-colors"
                        >
                          info@ulanda.co.uk
                        </a>
                        <p className="text-sm text-base-content/60 mt-2 font-light">
                          For consultations and general enquiries
                        </p>
                      </div>
                    </div>
                  </FadeInWhenVisible>

                  {/* Address */}
                  <FadeInWhenVisible delay={0.3}>
                    <div className="group flex items-start gap-6 p-6 rounded-lg hover:bg-secondary/20 transition-colors border border-transparent hover:border-primary/10">
                      <div className="mt-1 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-base-content mb-1">
                          Visit Us
                        </h3>
                        <address className="not-italic text-lg font-light text-base-content/80 space-y-1">
                          <p>Uphaven, 6 Hampden Hill,</p>
                          <p>Ware, East Hertfordshire.</p>
                          <p>UK.</p>
                          <p>SG12 7JT</p>
                        </address>
                      </div>
                    </div>
                  </FadeInWhenVisible>

                  {/* Socials */}
                  <FadeInWhenVisible delay={0.4}>
                    <div className="group flex items-start gap-6 p-6 rounded-lg hover:bg-secondary/20 transition-colors border border-transparent hover:border-primary/10">
                      <div className="mt-1 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-base-content mb-1">
                          Social Media
                        </h3>
                        <a
                          href="https://instagram.com/ulandamedspa"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-light text-primary hover:underline hover:text-primary-focus transition-colors"
                        >
                          @ulandamedspa
                        </a>
                        <p className="text-sm text-base-content/60 mt-2 font-light">
                          Follow our latest work
                        </p>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="md:hidden w-full h-96 border-t border-b border-base-200">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=Uphaven,+6+Hampden+Hill,+Ware+SG12+7JT&t=&z=15&ie=UTF8&iwloc=&output=embed"
          title="Ulanda Location"
          aria-label="Ulanda Location Map"
        ></iframe>
      </section>

      {/* Map or CTA placeholder (Optional) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
              Book Skin Health Consultation
            </h2>
            <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
              Ready to start your journey? Contact us directly or book a
              consultation to discuss your personalized treatment plan.
            </p>
            <a
              href="tel:+447904336031"
              className="inline-block bg-primary text-secondary px-10 py-4 rounded-md hover:bg-primary-focus transition-colors duration-300 font-medium"
            >
              Call to Book
            </a>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
};

export default Contact;
