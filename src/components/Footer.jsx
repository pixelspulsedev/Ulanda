import { Link, useLocation } from 'react-router-dom'
import React from 'react';
import { commonData } from '../data/common';
import { resetConsent } from '../lib/analytics';

export default function Footer() {
  const { pathname } = useLocation();
  const isJournal = pathname.startsWith('/journal');

  const handleOpenConsent = (e) => {
    e.preventDefault();
    resetConsent();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('ulanda:open-consent'));
    }
  };

  return (
    <footer className="bg-white pt-20 pb-8 border-t border-base-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo & Socials Column */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div className="mb-8">
              <img 
                src={commonData.logo.src} 
                alt={commonData.logo.alt} 
                width={commonData.logo.width} 
                height={commonData.logo.height} 
                className="h-16 w-auto object-contain" 
              />
              <div className="mt-6 space-y-2 text-sm text-base-content/80 font-sans">
                 <p>Uphaven, 6 Hampden Hill,</p>
                 <p>Ware, East Hertfordshire.</p>
                 <p>UK. SG12 7JT</p>
                 <p className="pt-2"><a href="tel:+447904336031" className="hover:text-primary transition-colors">+44 7904 336031</a></p>
                 <p><a href="mailto:info@ulanda.co.uk" className="hover:text-primary transition-colors">info@ulanda.co.uk</a></p>
                 <p><a href="https://instagram.com/ulandamedspa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@ulandamedspa</a></p>
              </div>
              <a 
                href="https://eepurl.com/jsdn42" 
                target="_blank" 
                rel="noopener noreferrer"
                data-track="email_signup"
                data-signup-source="footer_newsletter"
                className="mt-6 p-6 flex items-center bg-primary rounded-lg text-secondary justify-center btn-sm"
              >
                Subscribe to our Newsletter
              </a>
            </div>
            
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#F5EFE7] flex items-center justify-center text-[#6B3614] hover:bg-[#6B3614] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#F5EFE7] flex items-center justify-center text-[#6B3614] hover:bg-[#6B3614] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#F5EFE7] flex items-center justify-center text-[#6B3614] hover:bg-[#6B3614] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div> */}
          </div>

          {/* Links Columns */}
          <div className="md:col-span-9 text-sm grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Treatments */}
            <div>
              <h3 className="font-medium font-sans text-primary mb-4">
                <Link to="/treatments" className="hover:text-primary transition-colors text-primary">Treatments</Link>
              </h3>
              <ul className="space-y-3 text-base-content/80 font-sans">
                <li><Link to="/treatments/advanced-skin-health-consultation" className="hover:text-primary transition-colors ">Advanced Skin Health Consultation</Link></li>
                <li><Link to="/treatments/skin-barrier-renewal-protocol" className="hover:text-primary transition-colors ">Skin Barrier Renewal</Link></li>
                <li><Link to="/treatments/skin-renewal-regeneration" className="hover:text-primary transition-colors ">Skin Renewal Treatments</Link></li>
                <li><Link to="/treatments/injectable-skin-optimisation" className="hover:text-primary transition-colors ">Injectable Treatments</Link></li>
                <li><Link to="/treatments/structural-collagen-support" className="hover:text-primary transition-colors ">Collagen & Injectable Treatments</Link></li>
                <li><Link to="/treatments/body-regeneration-tissue-support" className="hover:text-primary transition-colors ">Body Regeneration</Link></li>
                <li><Link to="/treatments/wellness-regenerative-recovery" className="hover:text-primary transition-colors ">Wellness & Recovery</Link></li>
                <li><Link to="/treatments/prescription-skincare" className="hover:text-primary transition-colors ">Prescription Skincare</Link></li>
              </ul>
            </div>

            {/* Signature */}
            <div>
              <h3 className="font-medium font-sans text-primary mb-4">
                <Link to="/signature" className="hover:text-primary transition-colors text-primary">Signature</Link>
              </h3>
              <ul className="space-y-3 text-base-content/80 font-sans">
                <li><Link to="/signature/skin-barrier-repair-recovery" className="hover:text-primary transition-colors ">Skin Barrier Repair & Resilience</Link></li>
                <li><Link to="/signature/rosacea-redness-control" className="hover:text-primary transition-colors ">Rosacea & Redness Control</Link></li>
                <li><Link to="/signature/menopause-skin-rebuild" className="hover:text-primary transition-colors ">Menopause Skin Rebuild</Link></li>
                <li><Link to="/signature/photoaging-skin-architecture" className="hover:text-primary transition-colors ">Photoaging & Skin Architecture</Link></li>
                <li><Link to="/signature/structural-skin-regeneration" className="hover:text-primary transition-colors ">Structural Skin Regeneration</Link></li>
                <li><Link to="/signature/under-eye-renewal" className="hover:text-primary transition-colors ">Under-Eye Renewal</Link></li>
              </ul>
            </div>

            {/* Conditions */}
            <div>
              <h3 className="font-medium font-sans text-primary mb-4">Skin Conditions</h3>
                <ul className="space-y-3 text-base-content/80 font-sans">
                  <li><Link to="/conditions/dehydration-dullness-skin-recovery" className="hover:text-primary transition-colors ">Dehydration & Dullness</Link></li>
                  <li><Link to="/conditions/menopause-hormone-skin-changes" className="hover:text-primary transition-colors ">Menopause & Hormonal Change</Link></li>
                  <li><Link to="/conditions/redness-sensitivity-reactive-skin" className="hover:text-primary transition-colors ">Redness & Sensitivity</Link></li>
                  <li><Link to="/conditions/pigmentation-and-skin-tone" className="hover:text-primary transition-colors ">Pigmentation & Skin Tone</Link></li>
                  <li><Link to="/conditions/eye-area" className="hover:text-primary transition-colors ">Eye Area</Link></li>
                  <li><Link to="/conditions/body-skin-structural" className="hover:text-primary transition-colors ">Body Skin Structural</Link></li>
                  <li><Link to="/conditions/acne-texture" className="hover:text-primary transition-colors ">Acne & Texture</Link></li>
                  <li><Link to="/conditions/internal-wellness" className="hover:text-primary transition-colors ">Internal Wellness</Link></li>
                </ul>
            </div>

            {/* Identity */}
            <div>
              <h3 className="font-medium font-sans text-primary mb-4">Who We Are</h3>
              <ul className="space-y-3 text-base-content/80 font-sans">
                <li><Link to="/about/our-story" className="hover:text-primary transition-colors ">Our Story</Link></li>
                <li><Link to="/about/our-philosophy" className="hover:text-primary transition-colors ">Our Philosophy</Link></li>
                <li><Link to="/about/our-founder" className="hover:text-primary transition-colors ">Our Founder</Link></li>
                <li><Link to="/about/manifesto" className="hover:text-primary transition-colors ">The Manifesto</Link></li>
                <li><Link to="/blogs" className="hover:text-primary transition-colors ">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors ">Contact</Link></li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="font-medium font-sans text-primary mb-4">
                <Link to="/locations" className="hover:text-primary transition-colors text-primary">Locations</Link>
              </h3>
              <ul className="space-y-3 text-base-content/80 font-sans">
                <li><Link to="/locations/aesthetic-clinic-hertfordshire" className="hover:text-primary transition-colors ">Hertfordshire</Link></li>
                <li><Link to="/locations/aesthetic-clinic-hoddesdon" className="hover:text-primary transition-colors ">Hoddesdon</Link></li>
                <li><Link to="/locations/aesthetic-clinic-hertford" className="hover:text-primary transition-colors ">Hertford</Link></li>
                <li><Link to="/locations/aesthetic-clinic-broxbourne" className="hover:text-primary transition-colors ">Broxbourne</Link></li>
                <li><Link to="/locations/aesthetic-clinic-cheshunt" className="hover:text-primary transition-colors ">Cheshunt</Link></li>
                <li><Link to="/locations/aesthetic-clinic-harlow" className="hover:text-primary transition-colors ">Harlow</Link></li>
                <li><Link to="/locations/aesthetic-clinic-bishops-stortford" className="hover:text-primary transition-colors ">Bishop's Stortford</Link></li>
                <li><Link to="/locations/aesthetic-clinic-welwyn-garden-city" className="hover:text-primary transition-colors ">Welwyn Garden City</Link></li>
                <li><Link to="/locations/aesthetic-clinic-stevenage" className="hover:text-primary transition-colors ">Stevenage</Link></li>
                <li><Link to="/locations/aesthetic-clinic-sawbridgeworth" className="hover:text-primary transition-colors ">Sawbridgeworth</Link></li>
              </ul>
            </div>

            <div className="hidden md:flex gap-4">
              <a href="https://www.instagram.com/ulandamedspa" target='_blank' aria-label="Instagram" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* <a href="https://twitter.com/ulandamedspa" target='_blank' aria-label="Twitter" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a> */}
              <a href="https://www.facebook.com/ulandamedspa" target='_blank' aria-label="Facebook" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

         <div className="md:hidden w-full mx-auto items-center justify-center flex gap-4 mb-16">
              <a href="https://www.instagram.com/ulandamedspa" target='_blank' aria-label="Instagram" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* <a href="https://twitter.com/ulandamedspa" target='_blank' aria-label="Twitter" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a> */}
              <a href="https://www.facebook.com/ulandamedspa" target='_blank' aria-label="Facebook" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>

        {/* Journal Local Authority Footer */}
        {isJournal && (
          <div className="border-t border-base-200 pt-10 pb-6 mb-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-base-content/60 font-light leading-relaxed">
                ULANDA is a nurse-led skin clinic in Ware SG12, Hertfordshire, supporting clients from Hertford, Hoddesdon and Broxbourne with structured Advanced Skin Health Consultations and clinically sequenced Signature treatments including Skin Barrier Repair &amp; Recovery, Menopause Skin Rebuild and Structural Skin Regeneration. Our approach ensures safe stabilisation before introducing advanced treatments such as Hydrobooster, chemical peels and collagen-support therapies.
              </p>
            </div>
          </div>
        )}

        {/* Google Review Badge */}
        <div className="border-t border-base-200 pt-8 pb-8 mb-6">
          <div className="flex justify-center">
            <a
              href="https://g.page/r/CU-nYyGS8O9PEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-base-content/60 font-sans">Google Reviews</p>
                <p className="text-sm font-medium text-primary font-sans">Read our reviews</p>
              </div>
            </a>
          </div>
        </div>

        {/* SEO Footer */}
        <div className="text-center text-base-content/60 font-sans text-sm max-w-2xl mx-auto mb-8">
          <p>ULANDA is a nurse-led skin clinic in Ware, Hertfordshire, focused on structured skin regeneration programmes and long-term skin resilience.</p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-base-200 flex flex-col md:flex-row justify-between items-center text-base-content/40 text-sm font-sans">
          <div className="text-center md:text-left">
            <p>&copy; ULANDA 2026</p>
            <p className="mt-1">ULANDA Skin Clinic is a trading name of Kovers Ltd.</p>
            <p>Registered in England and Wales. Company number: 10272651</p>
            <p>Registered office: 34 St. Andrews Close, London. SE28 8NZ</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <button
              type="button"
              onClick={handleOpenConsent}
              className="hover:text-primary transition-colors"
            >
              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
