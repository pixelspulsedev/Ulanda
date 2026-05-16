import React, { useState, useEffect } from 'react';
import { Head } from 'vite-react-ssg';
import { Dna, ClipboardList, Lock } from 'lucide-react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import './SkinShiftGuide.css';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_V3_SITE_KEY';

const SkinShiftGuideContent = () => {
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [errors, setErrors] = useState({ firstName: false, email: false });
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    /* Subtle parallax on diagram */
    const handleScroll = () => {
      const diagram = document.querySelector('.skin-shift-guide .diagram-wrap');
      if (diagram && window.innerWidth >= 768) {
        diagram.style.transform = `translateY(${window.scrollY * 0.06}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameVal = formData.firstName.trim();
    const emailVal = formData.email.trim();
    let valid = true;
    const newErrors = { firstName: false, email: false };

    if (!nameVal) {
      newErrors.firstName = true;
      valid = false;
    }
    
    if (!emailVal || !emailVal.includes('@') || !emailVal.includes('.')) {
      newErrors.email = true;
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    let token = '';
    if (executeRecaptcha) {
      token = await executeRecaptcha('skin_shift_guide_submit');
    }

    try {
      const response = await fetch('https://formspree.io/f/xbdwnvvn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          firstName: nameVal,
          email: emailVal,
          'g-recaptcha-response': token,
        })
      });

      if (response.ok) {
        setSuccess(true);
        /* Google Ads conversion / Meta Pixel logic */
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'conversion', { send_to: 'AW-CONVERSION_ID/LABEL' });
        }
        if (typeof window.fbq !== 'undefined') {
          window.fbq('track', 'Lead');
        }
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
    <div className="skin-shift-guide">
      <Head>
        <title>The Skin Shift Guide — ULANDA Skin Clinic</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Free clinical guide from ULANDA Skin Clinic. Why your skin has changed — and what to do about it. Written by a Nurse Independent Prescriber." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <div className="stripe"></div>

      <div className="page-wrap">
        {/* SKIN ANATOMY DIAGRAM */}
        <div className="diagram-wrap" aria-hidden="true">
          <svg viewBox="0 0 1020 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fadeH1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C4A882" stopOpacity="0"/>
                <stop offset="12%" stopColor="#C4A882" stopOpacity="0.14"/>
                <stop offset="88%" stopColor="#C4A882" stopOpacity="0.14"/>
                <stop offset="100%" stopColor="#C4A882" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="fadeH2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8A9E8C" stopOpacity="0"/>
                <stop offset="12%" stopColor="#8A9E8C" stopOpacity="0.1"/>
                <stop offset="88%" stopColor="#8A9E8C" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#8A9E8C" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="fadeH3" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#D4A89A" stopOpacity="0"/>
                <stop offset="12%" stopColor="#D4A89A" stopOpacity="0.08"/>
                <stop offset="88%" stopColor="#D4A89A" stopOpacity="0.08"/>
                <stop offset="100%" stopColor="#D4A89A" stopOpacity="0"/>
              </linearGradient>
            </defs>

            {/* Three skin layers */}
            <rect x="0" y="12" width="1020" height="30" fill="url(#fadeH1)"/>
            <rect x="0" y="56" width="1020" height="38" fill="url(#fadeH2)"/>
            <rect x="0" y="108" width="1020" height="32" fill="url(#fadeH3)"/>

            {/* Organic boundary lines */}
            <path d="M0,42 Q100,36 200,44 Q320,52 460,40 Q580,30 700,44 Q820,56 920,42 Q970,38 1020,42" fill="none" stroke="#C4A882" strokeWidth="0.8" strokeOpacity="0.35"/>
            <path d="M0,94 Q140,88 280,96 Q420,106 560,90 Q700,76 840,94 Q940,108 1020,94" fill="none" stroke="#8A9E8C" strokeWidth="0.8" strokeOpacity="0.28"/>
            <path d="M0,140 Q200,132 400,140 Q600,148 800,136 Q900,130 1020,140" fill="none" stroke="#D4A89A" strokeWidth="0.8" strokeOpacity="0.22"/>

            {/* Collagen fibres in dermis */}
            <path d="M60,72 C78,65 96,79 114,72 C132,65 150,77 168,70" fill="none" stroke="#C4A882" strokeWidth="0.7" strokeOpacity="0.22"/>
            <path d="M240,68 C260,61 280,75 300,68 C320,61 340,73 360,66" fill="none" stroke="#C4A882" strokeWidth="0.7" strokeOpacity="0.2"/>
            <path d="M460,74 C480,67 500,81 520,74 C540,67 560,79 580,72" fill="none" stroke="#C4A882" strokeWidth="0.7" strokeOpacity="0.18"/>
            <path d="M680,70 C700,63 720,77 740,70 C760,63 780,75 800,68" fill="none" stroke="#C4A882" strokeWidth="0.7" strokeOpacity="0.16"/>

            {/* Fibroblast dots */}
            <circle cx="190" cy="75" r="2" fill="#8A9E8C" fillOpacity="0.32"/>
            <circle cx="360" cy="82" r="1.5" fill="#8A9E8C" fillOpacity="0.25"/>
            <circle cx="530" cy="70" r="2.2" fill="#8A9E8C" fillOpacity="0.28"/>
            <circle cx="700" cy="80" r="1.5" fill="#8A9E8C" fillOpacity="0.22"/>
            <circle cx="870" cy="74" r="2" fill="#8A9E8C" fillOpacity="0.26"/>

            {/* Layer labels — right aligned */}
            <text x="820" y="32" fontFamily="'DM Sans', sans-serif" fontSize="7.5" letterSpacing="2.5" fill="#8B6247" fillOpacity="0.45" textAnchor="start">EPIDERMIS</text>
            <text x="820" y="80" fontFamily="'DM Sans', sans-serif" fontSize="7.5" letterSpacing="2.5" fill="#8A9E8C" fillOpacity="0.45" textAnchor="start">DERMIS</text>
            <text x="820" y="128" fontFamily="'DM Sans', sans-serif" fontSize="7.5" letterSpacing="2.5" fill="#D4A89A" fillOpacity="0.45" textAnchor="start">HYPODERMIS</text>

            {/* Bracket line */}
            <line x1="812" y1="28" x2="818" y2="28" stroke="#8B6247" strokeWidth="0.8" strokeOpacity="0.4"/>
            <line x1="812" y1="76" x2="818" y2="76" stroke="#8A9E8C" strokeWidth="0.8" strokeOpacity="0.4"/>
            <line x1="812" y1="124" x2="818" y2="124" stroke="#D4A89A" strokeWidth="0.8" strokeOpacity="0.35"/>
            <line x1="811" y1="24" x2="811" y2="128" stroke="#C4A882" strokeWidth="0.5" strokeOpacity="0.22"/>
          </svg>
        </div>

        {/* HERO SECTION */}
        <section className="guide-hero">
          <p className="eyebrow">Free clinical guide · ULANDA Skin Clinic</p>

          <h1 className="hero-h1">
            Why your skin<br/>
            has <em>changed</em> —<br/>
            and what to do<br/>
            about it
          </h1>

          <p className="hero-sub">
            The biological explanation most clinics have never given you.
          </p>

          <div className="divider-rule">
            <span className="divider-tag">Written by a Nurse Independent Prescriber</span>
          </div>

          <p className="hero-body">
            If your skin has shifted in the last few years — and the products, treatments and advice
            you have tried have not produced the lasting results you were hoping for — this guide explains
            why at the biological level. No sales pitch. No product push. Clinical science, explained clearly.
          </p>
        </section>

        {/* TWO COLUMN: LEARN + FORM */}
        <div className="two-col">

          {/* WHAT YOU LEARN */}
          <div className="learn-col">
            <p className="col-label">What the guide covers</p>

            <div className="learn-item">
              <span className="learn-num">01</span>
              <div className="learn-content">
                <strong>Why skin changes are biological, not cosmetic</strong>
                <p>The hormonal and cellular mechanisms driving skin shift from the late 30s — and why surface treatments fail to address them at the root.</p>
              </div>
            </div>

            <div className="learn-item">
              <span className="learn-num">02</span>
              <div className="learn-content">
                <strong>What the skin barrier actually is</strong>
                <p>Why barrier integrity determines how every product and every treatment performs — and what silently compromises it.</p>
              </div>
            </div>

            <div className="learn-item">
              <span className="learn-num">03</span>
              <div className="learn-content">
                <strong>The four biological drivers of skin change</strong>
                <p>Hormonal transition, barrier compromise, inflammatory load and cellular senescence — and why identifying the right driver changes the response entirely.</p>
              </div>
            </div>

            <div className="learn-item">
              <span className="learn-num">04</span>
              <div className="learn-content">
                <strong>What the evidence actually says works</strong>
                <p>An honest clinical assessment of the skincare ingredients with strong evidence — and those where the evidence is far thinner than the marketing suggests.</p>
              </div>
            </div>

            <div className="learn-item">
              <span className="learn-num">05</span>
              <div className="learn-content">
                <strong>Why assessment before treatment changes everything</strong>
                <p>The clinical philosophy ULANDA was built on — and why understanding your skin before treating it produces consistently better outcomes.</p>
              </div>
            </div>
          </div>

          {/* FORM COLUMN */}
          <div className="form-col">

            {/* Guide mockup */}
            <div className="guide-mockup">
              <div className="guide-card">
                <div className="guide-top-rule"></div>
                <div className="guide-card-edge"></div>
                <div className="free-badge">Free</div>

                <p className="guide-eyebrow">ULANDA Skin Clinic · Clinical Resource</p>
                <h2 className="guide-title">The Skin<br/><em>Shift</em> Guide</h2>
                <p className="guide-subtitle">Why your skin has changed —<br/>and what to do about it</p>
                <div className="guide-rule"></div>
                <div className="guide-chapters">
                  <span className="guide-chapter"><span className="guide-chapter-dot"></span>The biology of skin change</span>
                  <span className="guide-chapter"><span className="guide-chapter-dot"></span>The skin barrier explained</span>
                  <span className="guide-chapter"><span className="guide-chapter-dot"></span>Four biological drivers</span>
                  <span className="guide-chapter"><span className="guide-chapter-dot"></span>What the evidence says works</span>
                  <span className="guide-chapter"><span className="guide-chapter-dot"></span>Assessment before treatment</span>
                </div>
                <span className="guide-logo-foot">ulanda.co.uk</span>
              </div>
            </div>

            {/* Subscription form */}
            <div className="form-card">
              <p className="form-pretitle">Download the free guide</p>
              <h3 className="form-title">Begin with understanding your skin</h3>
              <p className="form-subtitle">Written by a Nurse Independent Prescriber. No marketing copy — clinical content only.</p>

              {!success ? (
                <form id="skinGuideForm" onSubmit={handleSubmit} noValidate>
                  <div className="field-wrap">
                    <label className="field-label" htmlFor="firstName">First name</label>
                    <input 
                      className="field-input" 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      placeholder="Your first name" 
                      autoComplete="given-name" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.firstName ? '#B5644A' : '' }}
                      required 
                    />
                  </div>
                  <div className="field-wrap">
                    <label className="field-label" htmlFor="emailAddr">Email address</label>
                    <input 
                      className="field-input" 
                      type="email" 
                      id="emailAddr" 
                      name="email"
                      placeholder="your@email.com" 
                      autoComplete="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.email ? '#B5644A' : '' }}
                      required 
                    />
                  </div>
                  <button 
                    className="submit-btn" 
                    type="submit" 
                    id="submitBtn"
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? '0.65' : '1' }}
                  >
                    {isSubmitting ? 'Sending your guide…' : 'Download the Free Guide →'}
                  </button>
                </form>
              ) : (
                <div className="success-state" style={{ display: 'block' }}>
                  <div className="success-ring">✓</div>
                  <h3 className="success-title">Your guide is on its way</h3>
                  <p className="success-body">
                    Check your inbox — it will arrive within a few minutes.<br/><br/>
                    While you wait, read the <a href="https://www.ulanda.co.uk/journal" target="_blank" rel="noopener noreferrer">ULANDA clinical journal →</a>
                  </p>
                </div>
              )}

              <div className="trust-row">
                <div class="trust-block">
                  <div className="trust-stars">★★★★★</div>
                  <span className="trust-label">4.9 on Google</span>
                  <span className="trust-sub">26 verified reviews</span>
                </div>
                <div className="trust-sep"></div>
                <div className="trust-block">
                  <div className="trust-stars" style={{ color: 'var(--sage)', letterSpacing: 0 }}>NIP</div>
                  <span className="trust-label">Nurse Independent</span>
                  <span className="trust-sub">Prescriber-led clinic</span>
                </div>
              </div>

              <p className="no-spam">No spam · Unsubscribe at any time · Your data is never shared</p>
            </div>

          </div>
        </div>

        {/* STATS STRIP */}
        <div className="stats-strip">
          <div className="stat-item">
            <span className="stat-value">4.9★</span>
            <span className="stat-label">Google Reviews</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">20+</span>
            <span className="stat-label">Years Clinical Practice</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">NIP</span>
            <span className="stat-label">Nurse Independent Prescriber</span>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="testimonial-section">
          <div className="testimonial-wrap">
            <div className="t-bar"></div>
            <div className="t-body">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">
                "I had been to several aesthetic clinics over the years and always felt like I was
                selecting from a menu rather than receiving clinical guidance. ULANDA was immediately
                different — from the consultation to the written treatment plan to the programme structure.
                The clinical team knew exactly what my skin needed and why, and the programme produced
                results that are genuinely cumulative rather than temporary."
              </p>
              <p className="t-attr">Client · Hertfordshire</p>
            </div>
          </div>
        </div>

        {/* NOTES BAND */}
        <div className="notes-band">
          <div className="note-item">
            <span className="note-icon"><Dna size={22} strokeWidth={1.5} /></span>
            <div className="note-title">Clinically grounded</div>
            <p className="note-text">Written by a Nurse Independent Prescriber with over 20 years of clinical practice. Not marketing copy — biological science explained clearly.</p>
          </div>
          <div className="note-item">
            <span className="note-icon"><ClipboardList size={22} strokeWidth={1.5} /></span>
            <div className="note-title">No sales pitch</div>
            <p className="note-text">No product recommendations. No treatment menus. Just clinical understanding of what is happening in your skin and why — before anything else is considered.</p>
          </div>
          <div className="note-item">
            <span className="note-icon"><Lock size={22} strokeWidth={1.5} /></span>
            <div className="note-title">Your data is private</div>
            <p className="note-text">Your email is used only to deliver the guide and share relevant clinical insights from ULANDA. Unsubscribe at any time. Never shared with third parties.</p>
          </div>
        </div>

      </div>{/* /page-wrap */}

      {/* FOOTER */}
      <footer className="guide-footer">
        <div className="page-wrap">
          <p className="footer-logo">ULANDA Skin Clinic</p>
          <p className="footer-tagline">Skin Understood. Then Transformed.</p>
          <p className="footer-links">
            <a href="https://www.ulanda.co.uk/">ulanda.co.uk</a>
            &nbsp;&middot;&nbsp;
            <a href="https://www.ulanda.co.uk/privacy-policy">Privacy Policy</a>
            &nbsp;&middot;&nbsp;
            <a href="https://www.ulanda.co.uk/">Find Your Nearest Clinic</a>
          </p>
        </div>
      </footer>

    </div>
  );
};

const SkinShiftGuide = () => (
  <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
    <SkinShiftGuideContent />
  </GoogleReCaptchaProvider>
);

export default SkinShiftGuide;
