import React, { useState, useEffect, useCallback } from 'react';
import { Head } from 'vite-react-ssg';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { HeroText, FadeInWhenVisible } from '../components/animations';
import { trackEvent } from '../lib/analytics';
import './BookConsultation.css';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_V3_SITE_KEY';

const BookConsultationContent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, phone: false, message: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return null;
    return await executeRecaptcha('book_consultation');
  }, [executeRecaptcha]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameVal = formData.name.trim();
    const emailVal = formData.email.trim();
    const phoneVal = formData.phone.trim();
    const messageVal = formData.message.trim();
    let valid = true;
    const newErrors = { name: false, email: false, phone: false, message: false };

    if (!nameVal) { newErrors.name = true; valid = false; }
    if (!emailVal || !emailVal.includes('@') || !emailVal.includes('.')) { newErrors.email = true; valid = false; }
    if (!phoneVal) { newErrors.phone = true; valid = false; }
    if (!messageVal) { newErrors.message = true; valid = false; }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await handleReCaptchaVerify();
      
      const response = await fetch('https://formspree.io/f/xqenrrwz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          phone: phoneVal,
          message: messageVal,
          'g-recaptcha-response': token
        })
      });

      if (response.ok) {
        setSuccess(true);
        // Privacy: no name/email/phone/message passed into analytics.
        trackEvent('contact_form_submit', {
          form_id: 'book_consultation',
          consultation_stage: 'enquiry',
        });
        trackEvent('booking_started', {
          cta_text: 'Book Consultation Form Submitted',
          booking_destination: 'enquiry_form',
        });
      } else {
        alert('There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section className="bg-base-100 py-12 consultation-form-wrapper">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInWhenVisible>
            <div className="form-card">
              <p className="form-pretitle">Get In Touch</p>
              <h3 className="form-title">Advanced Skin Health Consultation</h3>
              <p className="form-subtitle">Share your skin concerns and begin your regenerative journey with us.</p>

              {!success ? (
                <form id="consultationForm" onSubmit={handleSubmit} noValidate>
                  <div className="field-wrap">
                    <label className="field-label" htmlFor="name">Full Name</label>
                    <input 
                      className="field-input" 
                      type="text" 
                      id="name" 
                      name="name"
                      placeholder="Your full name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.name ? '#B5644A' : '' }}
                      required 
                    />
                  </div>
                  <div className="field-wrap">
                    <label className="field-label" htmlFor="email">Email Address</label>
                    <input 
                      className="field-input" 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.email ? '#B5644A' : '' }}
                      required 
                    />
                  </div>
                  <div className="field-wrap">
                    <label className="field-label" htmlFor="phone">Phone Number</label>
                    <input 
                      className="field-input" 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      placeholder="Your phone number" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.phone ? '#B5644A' : '' }}
                      required 
                    />
                  </div>
                  <div className="field-wrap">
                    <label className="field-label" htmlFor="message">Your Message / Concerns</label>
                    <textarea 
                      className="field-textarea" 
                      id="message" 
                      name="message"
                      placeholder="Please tell us a little bit about what you are looking to achieve..." 
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.message ? '#B5644A' : '' }}
                      required 
                    ></textarea>
                  </div>
                  <button 
                    className="submit-btn" 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? '0.65' : '1' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Consultation →'}
                  </button>
                </form>
              ) : (
                <div className="success-state" style={{ display: 'block' }}>
                  <div className="success-ring">✓</div>
                  <h3 className="success-title">Message Received</h3>
                  <p className="success-body">
                    Thank you. We have received your request and will be in touch shortly to arrange your consultation.
                  </p>
                </div>
              )}
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
