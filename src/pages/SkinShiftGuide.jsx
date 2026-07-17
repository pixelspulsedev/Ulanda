import React, { useState } from 'react';
import { Head } from 'vite-react-ssg';
import {
  Star,
  ShieldCheck,
  BadgeCheck,
  Check,
  ArrowRight,
  Waves,
  Droplets,
  Feather,
  Sparkles,
  Ban,
  Moon,
  Dna,
  ClipboardList,
  Lock,
} from 'lucide-react';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const HAS_RECAPTCHA = Boolean(RECAPTCHA_SITE_KEY);

const SERIF = "font-['Cormorant_Garamond',Georgia,serif]";
const EYEBROW =
  'text-[11px] tracking-[0.3em] uppercase text-[#8B6247] font-medium';
const CONTAINER = 'mx-auto w-full max-w-[1080px] px-6 sm:px-10';
const BTN_PRIMARY =
  'inline-flex items-center justify-center gap-2 bg-primary text-[#F7F2EB] text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-4 transition-colors duration-300 hover:bg-[#5C3D26]';

const HERO_IMAGE = '/assets/img/home/20_30_homepage_image.webp';
const LEARN_IMAGE = '/assets/img/home/ulanda-homepage-hero-ware-sg12.webp';

const LEARN_POINTS = [
  'Why your skin changes with age',
  'What damages the skin barrier',
  'The 4 biological drivers behind skin decline',
  'Which skincare ingredients are evidence-based',
  'Why assessment changes treatment outcomes',
];

const NOTICED_POINTS = [
  { icon: Waves, label: 'Skin becoming thinner or more reactive' },
  { icon: Droplets, label: 'Ongoing dryness or sensitivity' },
  { icon: Feather, label: 'Loss of firmness or elasticity' },
  { icon: Sparkles, label: 'Breakouts appearing later in life' },
  { icon: Ban, label: 'Products that no longer seem to work' },
  { icon: Moon, label: 'Skin that looks tired even with good care' },
];

const SkinShiftGuideContent = () => {
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [errors, setErrors] = useState({ firstName: false, email: false });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
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
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstName: nameVal,
          email: emailVal,
          'g-recaptcha-response': token,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        /* Google Ads conversion / Meta Pixel logic */
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-CONVERSION_ID/LABEL',
          });
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
    <div
      className={`min-h-screen bg-[#F7F2EB] text-[#2C1A0E] font-['DM_Sans',sans-serif] antialiased selection:bg-[#C4A882]/30`}
    >
      <Head>
        <title>The Skin Shift Guide — ULANDA Skin Clinic</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Free clinical guide from ULANDA Skin Clinic. Why your skin has changed — and what to do about it. Written by a Nurse Independent Prescriber."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {HAS_RECAPTCHA && (
          <style>{`.grecaptcha-badge{visibility:hidden!important;}`}</style>
        )}
      </Head>

      {/* Accent stripe */}
      <div
        className="fixed left-0 top-0 z-50 h-full w-1 bg-gradient-to-b from-transparent via-[#C4A882] to-transparent"
        aria-hidden="true"
      ></div>

      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden border-b border-[#8B6247]/15">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img
            src="/assets/img/skin-shift-guide/Hero.webp"
            alt="ULANDA Skin Clinic Ware Hertfordshire"
            className="h-full w-full object-cover object-right"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-black/70 sm:bg-black/50"></div>
        </div>
        <div
          className={`${CONTAINER} relative z-10 grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24`}
        >
          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-secondary/70">
              Free Clinical Guide · ULANDA Skin Clinic
            </p>
            <h1
              className={`${SERIF} mb-5 text-5xl font-light leading-[1.05] text-secondary sm:text-6xl lg:text-7xl`}
            >
              The Skin
              <br />
              <em className="italic text-secondary">Shift</em> Guide
            </h1>
            <p
              className={`${SERIF} mb-4 text-xl italic text-secondary sm:text-2xl`}
            >
              Why your skin has changed — and what to do about it.
            </p>
            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-secondary">
              The biological explanation most clinics never give you. No
              cosmetic marketing. No product push. Just clinical insight.
            </p>

            <div className="mb-8 flex items-center gap-4">
              <span
                className={`${SERIF} flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-secondary text-sm tracking-[0.15em] text-secondary`}
              >
                NIP
              </span>
              <span className="text-[13px] leading-relaxed text-secondary">
                Written by a{' '}
                <strong className="font-medium secondary">
                  Nurse Independent Prescriber
                </strong>
                <br />
                20+ years of clinical experience
              </span>
            </div>

            <a href="#guide-form" className={BTN_PRIMARY}>
              Download the Free Guide <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>

          {/* <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-sm shadow-[0_24px_60px_-24px_rgba(44,26,14,0.45)]">
              <img src={HERO_IMAGE} alt="Close study of healthy, well-cared-for skin" loading="eager" className="h-[380px] w-full object-cover sm:h-[440px]" />
            </div>
            <div className="absolute -bottom-6 left-2 w-48 border border-[#8B6247]/20 bg-[#EDE5D8] shadow-2xl sm:left-6 sm:w-52" aria-hidden="true">
              <div className="h-[3px] w-full bg-gradient-to-r from-[#8B6247] to-[#D4A89A]"></div>
              <div className="p-5">
                <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#8B6247]">Clinical Resource</p>
                <h2 className={`${SERIF} text-2xl font-medium leading-none text-[#2C1A0E]`}>The Skin<br /><em className="italic text-[#8B6247]">Shift</em> Guide</h2>
                <p className={`${SERIF} mt-2 text-[13px] italic leading-snug text-[#5C3D26]`}>Why your skin has changed — and what to do about it</p>
                <span className="mt-4 block text-[8px] uppercase tracking-[0.2em] text-[#A68B6E]">ULANDA · ulanda.co.uk</span>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* ─────────── CREDIBILITY STRIP ─────────── */}
      <section className="border-b border-[#8B6247]/15 bg-[#F2EBE0]/60">
        <div
          className={`${CONTAINER} grid divide-y divide-[#8B6247]/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0`}
        >
          {[
            {
              Icon: Star,
              value: '4.9 Google Rating',
              sub: 'Verified client reviews',
            },
            { Icon: ShieldCheck, value: '20+ Years', sub: 'Clinical practice' },
            {
              Icon: BadgeCheck,
              value: 'Nurse Independent Prescriber',
              sub: 'Prescriber-led clinic',
            },
          ].map(({ Icon, value, sub }) => (
            <div
              key={value}
              className="flex items-center justify-center gap-3 px-4 py-6 sm:justify-start sm:px-8"
            >
              <Icon
                size={22}
                strokeWidth={1.5}
                className="shrink-0 text-[#8B6247]"
              />
              <div className="flex flex-col">
                <span className="text-[13px] font-medium leading-tight text-[#2C1A0E]">
                  {value}
                </span>
                <span className="text-[11px] text-[#A68B6E]">{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── WHAT YOU'LL LEARN ─────────── */}
      <section
        className={`${CONTAINER} grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16`}
      >
        <div>
          <p className={`${EYEBROW} mb-4`}>Inside the guide</p>
          <h2
            className={`${SERIF} mb-8 text-4xl font-light leading-tight text-[#2C1A0E] sm:text-5xl`}
          >
            What you will <em className="italic text-[#8B6247]">learn</em>
          </h2>
          <ul>
            {LEARN_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 border-b border-[#8B6247]/10 py-4 text-[15px] text-[#5C3D26] last:border-0"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8B6247] text-[#F7F2EB]">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-sm shadow-[0_24px_60px_-28px_rgba(44,26,14,0.4)]">
          <img
            src='/assets/img/skin-shift-guide/inside.webp'
            alt="Clinical skin treatment at ULANDA Skin Clinic"
            loading="lazy"
            className="h-full min-h-[340px] w-full object-cover"
          />
        </div>
      </section>

      {/* ─────────── WHO IT'S FOR ─────────── */}
      <section className="border-y border-[#8B6247]/12 bg-[#F2EBE0]/50 py-16 sm:py-20">
        <div className={CONTAINER}>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className={`${EYEBROW} mb-4`}>Who this guide is for</p>
            <h2
              className={`${SERIF} text-3xl font-light leading-tight text-[#2C1A0E] sm:text-4xl`}
            >
              This guide is for you if you have{' '}
              <em className="italic text-[#8B6247]">noticed</em>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NOTICED_POINTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 border border-[#8B6247]/12 bg-[#F7F2EB]/60 p-8 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8B6247]/25 text-[#8B6247]">
                  <Icon size={22} strokeWidth={1.4} />
                </span>
                <p className="max-w-[190px] text-[14px] leading-snug text-[#5C3D26]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl border border-[#8B6247]/15 bg-[#EDE5D8]/70 px-8 py-6">
            <p
              className={`${SERIF} text-lg italic leading-relaxed text-[#5C3D26]`}
            >
              These changes are usually{' '}
              <strong className="font-medium not-italic text-[#2C1A0E]">
                biological, not just cosmetic.
              </strong>{' '}
              This guide helps you understand what is actually driving them — so
              you can respond correctly rather than guessing.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIAL + TRUST ─────────── */}
      <section
        className={`${CONTAINER} grid items-start gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16`}
      >
        <blockquote className="border-l-2 border-[#C4A882] pl-6">
          <div className="mb-4 tracking-[3px] text-[#8B6247]">★★★★★</div>
          <p
            className={`${SERIF} mb-4 text-xl italic leading-relaxed text-[#2C1A0E] sm:text-2xl`}
          >
            “I had been to several aesthetic clinics and always felt like I was
            selecting from a menu rather than receiving clinical guidance.
            ULANDA was immediately different. The clinical team knew exactly
            what my skin needed and why — and the results are genuinely
            cumulative rather than temporary.”
          </p>
          <cite className="text-[11px] uppercase not-italic tracking-[0.2em] text-[#A68B6E]">
            Client · Hertfordshire
          </cite>
        </blockquote>

        <div className="flex flex-col gap-7">
          {[
            {
              Icon: Dna,
              title: 'Clinically grounded',
              text: 'Written by a Nurse Independent Prescriber with over 20 years of clinical practice — biological science explained clearly.',
            },
            {
              Icon: ClipboardList,
              title: 'No sales pitch',
              text: 'No product recommendations. No treatment menus. Just clinical understanding of what is happening in your skin and why.',
            },
            {
              Icon: Lock,
              title: 'Your data is private',
              text: 'Your email is used only to deliver the guide and relevant clinical insights. Unsubscribe any time. Never shared with third parties.',
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="shrink-0 text-[#8B6247]">
                <Icon size={20} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="mb-1 text-[13px] font-medium text-[#2C1A0E]">
                  {title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#6B4F38]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── FORM / CTA ─────────── */}
      <section
        id="guide-form"
        className="border-t border-[#8B6247]/15 bg-[#EDE5D8]/60 py-16 sm:py-20"
      >
        <div className="mx-auto w-full max-w-xl px-6">
          <div className="relative overflow-hidden border border-[#8B6247]/18 bg-white p-8 text-center shadow-[0_2px_28px_rgba(44,26,14,0.09)] sm:p-10">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#8B6247] via-[#D4A89A] to-[#8A9E8C]"></div>

            {!success ? (
              <>
                <p className={`${EYEBROW} mb-3`}>Get your free guide</p>
                <h2
                  className={`${SERIF} mb-2 text-3xl font-light text-[#2C1A0E]`}
                >
                  Begin with understanding your skin
                </h2>
                <p className="mb-7 text-[14px] leading-relaxed text-[#A68B6E]">
                  Written by a Nurse Independent Prescriber. No marketing copy —
                  clinical content only.
                </p>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4 text-left"
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#5C3D26]"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className={`w-full border bg-[#F7F2EB] px-4 py-3 text-[14px] text-[#2C1A0E] outline-none transition-colors placeholder:text-[#8B6247]/40 focus:border-[#8B6247] focus:bg-white ${errors.firstName ? 'border-[#B5644A]' : 'border-[#8B6247]/25'}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="emailAddr"
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#5C3D26]"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="emailAddr"
                      name="email"
                      placeholder="your@email.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full border bg-[#F7F2EB] px-4 py-3 text-[14px] text-[#2C1A0E] outline-none transition-colors placeholder:text-[#8B6247]/40 focus:border-[#8B6247] focus:bg-white ${errors.email ? 'border-[#B5644A]' : 'border-[#8B6247]/25'}`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${BTN_PRIMARY} w-full tracking-[0.2em] disabled:opacity-60`}
                  >
                    {isSubmitting ? 'Sending your guide…' : 'Send Me The Guide'}
                    {!isSubmitting && <ArrowRight size={16} strokeWidth={2} />}
                  </button>
                </form>

                <p className="mt-5 text-[10px] tracking-[0.03em] text-[#A68B6E]">
                  No spam · Unsubscribe at any time · Your data is never shared
                </p>

                {HAS_RECAPTCHA && (
                  <p className="mt-3 text-[10px] leading-relaxed text-[#A68B6E]/80">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 transition-colors hover:text-[#5C3D26]"
                    >
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 transition-colors hover:text-[#5C3D26]"
                    >
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                )}
              </>
            ) : (
              <div className="py-4">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#8B6247] text-[#8B6247]">
                  <Check size={26} strokeWidth={2} />
                </div>
                <h2
                  className={`${SERIF} mb-2 text-3xl font-light text-[#2C1A0E]`}
                >
                  Your guide is on its way
                </h2>
                <p className="mb-6 text-[14px] leading-relaxed text-[#6B4F38]">
                  Check your inbox — it will arrive within a few minutes.
                </p>
                <a
                  href="https://www.ulanda.co.uk/journal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#8B6247]/40 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C3D26] transition-colors hover:bg-[#8B6247] hover:text-[#F7F2EB]"
                >
                  Read the ULANDA Journal{' '}
                  <ArrowRight size={16} strokeWidth={2} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="border-t border-[#8B6247]/15 py-10 text-center">
        <div className={CONTAINER}>
          <p className="mb-2 text-[10px] uppercase tracking-[0.26em] text-[#5C3D26]">
            ULANDA Skin Clinic
          </p>
          <p className={`${SERIF} mb-4 text-base italic text-[#8B6247]`}>
            Skin Understood. Then Transformed.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-[#A68B6E]">
            <a
              href="https://www.ulanda.co.uk/"
              className="transition-colors hover:text-[#5C3D26]"
            >
              ulanda.co.uk
            </a>
            <span>·</span>
            <a
              href="https://www.ulanda.co.uk/privacy-policy"
              className="transition-colors hover:text-[#5C3D26]"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="https://www.ulanda.co.uk/"
              className="transition-colors hover:text-[#5C3D26]"
            >
              Find Your Nearest Clinic
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

const SkinShiftGuide = () =>
  HAS_RECAPTCHA ? (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <SkinShiftGuideContent />
    </GoogleReCaptchaProvider>
  ) : (
    <SkinShiftGuideContent />
  );

export default SkinShiftGuide;
