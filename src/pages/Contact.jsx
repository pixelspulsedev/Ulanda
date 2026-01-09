import React from 'react';
import { Head } from 'vite-react-ssg';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Ulanda</title>
        <meta name="description" content="Contact Ulanda for consultations and enquiries." />
      </Head>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-light text-primary mb-8 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-light text-primary">Get in Touch</h2>
            <p className="text-lg leading-relaxed text-base-content/80">
              We are here to answer any questions you may have about our treatments and programmes. Reach out to us and we'll respond as soon as we can.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-medium font-serif">Email Us</h3>
                  <a href="mailto:hello@ulanda.com" className="text-primary hover:underline">hello@ulanda.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-medium font-serif">Visit Us</h3>
                  <p className="text-base-content/80">123 Wellness Avenue<br/>London, UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder REMOVED */}
        </div>
      </div>
    </>
  );
};

export default Contact;
