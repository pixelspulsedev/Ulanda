import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-base-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo & Socials Column */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div className="mb-8">
              <img src="/assets/img/ui/Logo.webp" alt="Ulanda" className="h-16 w-auto object-contain" />
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
            {/* Pathways */}
            <div>
              <h3 className="font-medium font-sans text-base-content mb-6">
                <Link to="/pathways" className="hover:text-primary transition-colors text-base-content">Pathways</Link>
              </h3>
              <ul className="space-y-3 text-base-content/100 font-sans">
                <li><Link to="/pathways/refresh" className="hover:text-primary transition-colors text-base-content">Refresh</Link></li>
                <li><Link to="/pathways/renew" className="hover:text-primary transition-colors text-base-content">Renew</Link></li>
                <li><Link to="/pathways/restore" className="hover:text-primary transition-colors text-base-content">Restore</Link></li>
                <li><Link to="/pathways/radiate" className="hover:text-primary transition-colors text-base-content">Radiate</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-medium font-sans text-base-content mb-6">Programs</h3>
              <ul className="space-y-3 text-base-content/100 font-sans">
                <li><Link to="/programmes/menopause-regeneration" className="hover:text-primary transition-colors text-base-content">Menopause Regeneration</Link></li>
                <li><Link to="/programmes/under-eye-regeneration" className="hover:text-primary transition-colors text-base-content">Under-Eye Regeneration</Link></li>
                <li><Link to="/programmes/collagen-reset" className="hover:text-primary transition-colors text-base-content">Collagen Reset</Link></li>
                <li><Link to="/programmes/hormone-smart-skin" className="hover:text-primary transition-colors text-base-content">Hormone-Smart Skin</Link></li>
                <li><Link to="/programmes/shape-and-regenerate" className="hover:text-primary transition-colors text-base-content">Shape & Regenerate™</Link></li>
              </ul>
            </div>

            {/* Conditions */}
            <div>
              <h3 className="font-medium font-sans text-base-content mb-6">Conditions</h3>
              <ul className="space-y-3 text-base-content/100 font-sans">
                <li><Link to="/conditions/age-and-regeneration" className="hover:text-primary transition-colors text-base-content">Skin laxity</Link></li>
                <li><Link to="/conditions/pigmentation-and-skin-tone" className="hover:text-primary transition-colors text-base-content">Uneven tone & pigmentation</Link></li>
                <li><Link to="/conditions/age-and-regeneration" className="hover:text-primary transition-colors text-base-content">Texture & pores</Link></li>
                <li><Link to="/conditions/dark-circles" className="hover:text-primary transition-colors text-base-content">Dark circles</Link></li>
                <li><Link to="/conditions" className="hover:text-primary transition-colors text-base-content">More +</Link></li>
              </ul>
            </div>

            {/* Identity */}
            <div>
              <h3 className="font-medium font-sans text-base-content mb-6">Identity</h3>
              <ul className="space-y-3 text-base-content/100 font-sans">
                <li><Link to="/about/our-story" className="hover:text-primary transition-colors text-base-content">Our Story</Link></li>
                <li><Link to="/about/our-philosophy" className="hover:text-primary transition-colors text-base-content">Our Philosophy</Link></li>
                <li><Link to="/about/our-founder" className="hover:text-primary transition-colors text-base-content">Our Founder</Link></li>
                <li><Link to="/about/manifesto" className="hover:text-primary transition-colors text-base-content">The Manifesto</Link></li>
              </ul>
            </div>

            <div className="hidden md:flex gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

         <div className="md:hidden w-full mx-auto items-center justify-center flex gap-4 mb-16">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-base-200 flex flex-col md:flex-row justify-between items-center text-base-content/40 text-sm font-sans">
          <p>© Ulanda, 2025</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
