import { Link } from 'react-router-dom'
import React from 'react';
import { commonData } from '../data/common';

export default function Footer() {
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
                href="http://eepurl.com/jsdn42" 
                target="_blank" 
                rel="noopener noreferrer"
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
          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Treatments */}
            <div>
              <h3 className="font-medium font-sans text-primary mb-4">
                <Link to="/treatments" className="hover:text-primary transition-colors text-primary">Treatments</Link>
              </h3>
              <ul className="space-y-3 text-base-content/80 font-sans">
                <li><Link to="/treatments/skin-health-facial-therapies" className="hover:text-primary transition-colors ">Skin Health & Facials</Link></li>
                <li><Link to="/treatments/skin-renewal-regeneration" className="hover:text-primary transition-colors ">Skin Renewal</Link></li>
                <li><Link to="/treatments/injectable-skin-optimisation" className="hover:text-primary transition-colors ">Injectable Treatments</Link></li>
                <li><Link to="/treatments/structural-collagen-support" className="hover:text-primary transition-colors ">Structural Support</Link></li>
                <li><Link to="/treatments/body-regeneration-tissue-support" className="hover:text-primary transition-colors ">Body Regeneration</Link></li>
                <li><Link to="/treatments/wellness-regenerative-recovery" className="hover:text-primary transition-colors ">Wellness & Recovery</Link></li>
              </ul>
            </div>

            {/* Radiate Pathways (formerly Programs) */}
            <div>
              <h3 className="font-medium font-sans text-primary mb-4">
                <Link to="/treatments/radiate" className="hover:text-primary transition-colors text-primary">Radiate Pathways</Link>
              </h3>
              <ul className="space-y-3 text-base-content/80 font-sans">
                <li><Link to="/treatments/radiate/pathways/menopause-regeneration" className="hover:text-primary transition-colors ">Menopause Regeneration</Link></li>
                <li><Link to="/treatments/radiate/pathways/under-eye-regeneration" className="hover:text-primary transition-colors ">Under-Eye Regeneration</Link></li>
                <li><Link to="/treatments/radiate/pathways/collagen-reset" className="hover:text-primary transition-colors ">Collagen Reset</Link></li>
                <li><Link to="/treatments/radiate/pathways/hormone-smart-skin" className="hover:text-primary transition-colors ">Hormone-Smart Skin</Link></li>
                <li><Link to="/treatments/radiate/pathways/shape-and-regenerate" className="hover:text-primary transition-colors ">Shape & Regenerate</Link></li>
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
                <li><Link to="/blogs" className="hover:text-primary transition-colors ">Articles</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors ">Contact</Link></li>
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-base-200 flex flex-col md:flex-row justify-between items-center text-base-content/40 text-sm font-sans">
          <p>© Ulanda, 2025</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
