import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ChevronDown = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-3 w-3 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300 mt-0.5" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div className={`navbar bg-base-100 border border-b border-secondary sticky top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 
     `}>
      
      <div className="navbar-start">
        <Link to="/" className="flex items-center group">
          <img
            src="/assets/img/ui/Logo.webp"
            alt="Ulanda"
            className={`w-auto h-12 object-contain transition-all duration-300 group-hover:opacity-90`}
          />
        </Link>
      </div>

      {/* Desktop Menu - Centered for balance */}
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-1 p-1 rounded-full px-4">
          {/* Pathways Dropdown */}
          <div className="dropdown dropdown-hover group px-2">
            <NavLink 
              to="/pathways" 
              className={({ isActive }) => `flex items-center gap-1.5 font-sans text-[15px] hover:text-primary transition-colors py-2 px-2 ${isActive ? 'text-primary font-medium' : 'text-base-content/80'}`}
            >
              Pathways <ChevronDown />
            </NavLink>
            <ul className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-xl w-56 border border-secondary/10 mt-0 before:absolute before:top-[-10px] before:left-0 before:w-full before:h-[10px] before:bg-transparent">
              {['Refresh', 'Renew', 'Restore', 'Radiate'].map((item) => (
                <li key={item}>
                  <Link to="/pathways" className="hover:bg-secondary/20 hover:text-primary rounded-lg py-3 px-4 active:bg-secondary/30">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Dropdown */}
          <div className="dropdown dropdown-hover group px-2">
            <NavLink 
              to="/programmes"
              className={({ isActive }) => `flex items-center gap-1.5 font-sans text-[15px] hover:text-primary transition-colors py-2 px-2 ${isActive ? 'text-primary font-medium' : 'text-base-content/80'}`}
            >
              Programs <ChevronDown />
            </NavLink>
            <ul className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-xl w-64 border border-secondary/10 mt-0 before:absolute before:top-[-10px] before:left-0 before:w-full before:h-[10px] before:bg-transparent">
              {[
                { name: 'Menopause Regeneration', path: '/programmes/menopause-regeneration' },
                { name: 'Under-Eye Regeneration', path: '/programmes/under-eye-regeneration' },
                { name: 'Collagen Reset', path: '/programmes/collagen-reset' },
                { name: 'Hormone-Smart Skin', path: '/programmes/hormone-smart-skin' },
                { name: 'Shape & Regenerate™', path: '/programmes/shape-and-regenerate' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:bg-secondary/20 hover:text-primary rounded-lg py-3 px-4 active:bg-secondary/30">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions Dropdown */}
          <div className="dropdown dropdown-hover group px-2">
            <NavLink 
              to="/conditions"
              className={({ isActive }) => `flex items-center gap-1.5 font-sans text-[15px] hover:text-primary transition-colors py-2 px-2 ${isActive ? 'text-primary font-medium' : 'text-base-content/80'}`}
            >
              Conditions <ChevronDown />
            </NavLink>
            <ul className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-xl w-64 border border-secondary/10 mt-0 before:absolute before:top-[-10px] before:left-0 before:w-full before:h-[10px] before:bg-transparent">
              {[
                { name: 'Skin laxity', path: '/conditions/skin-laxity' },
                { name: 'Uneven tone & pigmentation', path: '/conditions/uneven-tone-and-pigmentation' },
                { name: 'Texture & pores', path: '/conditions/texture-and-pores' },
                { name: 'Dark circles', path: '/conditions/dark-circles' },
                { name: 'More +', path: '/conditions' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:bg-secondary/20 hover:text-primary rounded-lg py-3 px-4 active:bg-secondary/30">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Dropdown */}
          <div className="dropdown dropdown-hover group px-2">
            <div role="button" className={`flex items-center gap-1.5 font-sans text-[15px] hover:text-primary transition-colors py-2 px-2 text-base-content/80 cursor-pointer`}>
              Company <ChevronDown />
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-xl w-48 border border-secondary/10 mt-0 before:absolute before:top-[-10px] before:left-0 before:w-full before:h-[10px] before:bg-transparent">
              {[
                { name: 'About', path: '/about/our-story' },
                { name: 'Founder', path: '/about/our-founder' },
                { name: 'Philosophy', path: '/about/our-philosophy' },
                { name: 'Manifesto', path: '/about/manifesto' },
                { name: 'Blogs', path: '/blogs' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:bg-secondary/20 hover:text-primary rounded-lg py-3 px-4 active:bg-secondary/30">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-end gap-3">
        <Link 
          to="/contact" 
          className={`btn btn-primary hidden lg:flex items-center font-sans text-white px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 `}
        >
          Book Consultation
        </Link>
        
        {/* Mobile Menu Button - Drawer Toggle */}
        <button 
          className="btn btn-ghost btn-circle lg:hidden hover:bg-secondary/20"
          onClick={() => setIsDrawerOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>

        {/* Mobile Drawer Overlay & Content */}
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] transition-opacity duration-300 lg:hidden ${
            isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsDrawerOpen(false)}
        />
        
        {/* Drawer Side */}
        <div 
          className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-base-100 shadow-2xl z-[101] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
           {/* Header with Close Button */}
           <div className="p-4 border-b border-secondary/20 flex justify-between items-center bg-base-100/50 backdrop-blur-sm sticky top-0 z-10">
              {/* <span className="text-xl font-serif text-primary">Menu</span> */}
              <button 
                onClick={() => setIsDrawerOpen(false)} 
                className="btn btn-ghost btn-sm btn-circle hover:bg-secondary/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
           </div>
           
           {/* Scrollable Content */}
           <div className="overflow-y-auto flex-1 p-4">
              <ul className="menu menu-lg w-full p-0">
                <li>
                  <details open>
                    <summary className="font-medium text-lg py-3 text-base-content/90 font-sans">Pathways</summary>
                    <ul className="pl-4 border-l-2 border-secondary/20 mt-2 space-y-1">
                        <li><Link to="/pathways" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Overview</Link></li>
                        <li><Link to="/pathways" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Refresh</Link></li>
                        <li><Link to="/pathways" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Renew</Link></li>
                        <li><Link to="/pathways" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Restore</Link></li>
                        <li><Link to="/pathways" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Radiate</Link></li>
                    </ul>
                  </details>
                </li>
                 <li>
                  <details>
                    <summary className="font-medium text-lg py-3 text-base-content/90 font-sans">Programs</summary>
                    <ul className="pl-4 border-l-2 border-secondary/20 mt-2 space-y-1">
                      <li><Link to="/programmes" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Overview</Link></li>
                      <li><Link to="/programmes/menopause-regeneration" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Menopause Regeneration</Link></li>
                      <li><Link to="/programmes/under-eye-regeneration" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Under-Eye Regeneration</Link></li>
                      <li><Link to="/programmes/collagen-reset" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Collagen Reset</Link></li>
                      <li><Link to="/programmes/hormone-smart-skin" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Hormone-Smart Skin</Link></li>
                      <li><Link to="/programmes/shape-and-regenerate" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Shape & Regenerate™</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="font-medium text-lg py-3 text-base-content/90 font-sans">Conditions</summary>
                    <ul className="pl-4 border-l-2 border-secondary/20 mt-2 space-y-1">
                      <li><Link to="/conditions" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Overview</Link></li>
                      <li><Link to="/conditions/skin-laxity" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Skin laxity</Link></li>
                      <li><Link to="/conditions/uneven-tone-and-pigmentation" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Uneven tone & pigmentation</Link></li>
                      <li><Link to="/conditions/texture-and-pores" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Texture & pores</Link></li>
                      <li><Link to="/conditions/dark-circles" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Dark circles</Link></li>
                      <li><Link to="/conditions" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">More +</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                     <summary className="font-medium text-lg py-3 text-base-content/90 font-sans">Company</summary>
                    <ul className="pl-4 border-l-2 border-secondary/20 mt-2 space-y-1">
                      <li><Link to="/about/our-story" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">About</Link></li>
                      <li><Link to="/about/our-founder" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Founder</Link></li>
                      <li><Link to="/about/our-philosophy" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Philosophy</Link></li>
                      <li><Link to="/about/manifesto" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Manifesto</Link></li>
                      <li><Link to="/blogs" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Blogs</Link></li>
                    </ul>
                  </details>
                </li>
              </ul>
              
              <div className="mt-8 mb-8 px-2">
                 <Link to="/contact" onClick={() => setIsDrawerOpen(false)} className="btn btn-primary text-white w-full rounded-xl shadow-md min-h-[3rem] font-sans tracking-wide">
                   Book Consultation
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
