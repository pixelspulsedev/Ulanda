import { Link, NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { getAllTreatments } from '../data/pageContents/treatments/treatments';
import { conditions } from '../data/pageContents/conditions/conditions';
import { individualConditions } from '../data/pageContents/conditions/individualConditions';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const treatments = getAllTreatments();
  const treatmentList = Object.values(treatments);

  // Get all conditions for search
  const getAllConditions = () => {
    const allConditions = [];
    
    // Add master conditions
    conditions.forEach(condition => {
      allConditions.push({
        ...condition,
        type: 'condition',
        title: `${condition.hero.title} ${condition.hero.highlight || ''}`.trim(),
        description: condition.hero.description?.[0] || '',
        image: condition.hero.image,
        placeholderUrl: condition.hero.placeholderUrl,
        url: `/conditions/${condition.id}`
      });
    });
    
    // Add individual conditions
    individualConditions.forEach(condition => {
      allConditions.push({
        ...condition,
        type: 'condition',
        title: `${condition.hero.title} ${condition.hero.highlight || ''}`.trim(),
        description: condition.hero.description || '',
        image: condition.hero.image,
        placeholderUrl: condition.hero.placeholderUrl,
        url: `/conditions/${condition.id}`
      });
    });
    
    return allConditions;
  };

  const allConditions = getAllConditions();

  // Get search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    const results = [];

    // Search treatments
    treatmentList.forEach(category => {
      Object.entries(category.subCategories || {}).forEach(([subKey, subCategory]) => {
        Object.entries(subCategory.treatments || {}).forEach(([treatmentKey, treatment]) => {
          const matchesSearch = 
            treatment.title?.toLowerCase().includes(query) ||
            treatment.subtitle?.toLowerCase().includes(query) ||
            treatment.description?.toLowerCase().includes(query) ||
            category.title?.toLowerCase().includes(query) ||
            subCategory.title?.toLowerCase().includes(query);

          if (matchesSearch) {
            results.push({
              ...treatment,
              type: 'treatment',
              categoryId: category.id,
              categoryTitle: category.title,
              subCategoryTitle: subCategory.title,
              subCategoryKey: subKey,
              treatmentKey: treatmentKey
            });
          }
        });
      });
    });

    // Search conditions
    allConditions.forEach(condition => {
      const matchesSearch = 
        condition.title?.toLowerCase().includes(query) ||
        condition.description?.toLowerCase().includes(query) ||
        condition.seo?.title?.toLowerCase().includes(query) ||
        condition.seo?.description?.toLowerCase().includes(query);

      if (matchesSearch) {
        results.push(condition);
      }
    });

    return results.slice(0, 8); // Limit to 8 results (increased from 6)
  }, [searchQuery, treatmentList, allConditions]);

  const handleSearchClick = (result) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    
    if (result.type === 'treatment') {
      navigate(`/treatments/${result.categoryId}/${result.subCategoryKey}/${result.treatmentKey}`);
    } else if (result.type === 'condition') {
      navigate(result.url);
    }
  };

  const closeDropdown = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
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
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar bg-base-100 border border-b border-secondary sticky top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 
     `}
    >
      
      <div className="navbar-start">
        <Link to="/" className="flex items-center group">
          <img
            src="/assets/img/ui/Logo.webp"
            alt="Ulanda"
            width="168"
            height="48"
            className={`w-auto h-12 object-contain transition-all duration-300 group-hover:opacity-90`}
          />
        </Link>
      </div>

      {/* Desktop Menu - Centered for balance */}
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-1 p-1 rounded-full px-4">
          {/* Treatments Dropdown */}
          <div className="dropdown dropdown-hover group px-2">
            <NavLink 
              to="/treatments" 
              onClick={closeDropdown}
              className={({ isActive }) => `flex items-center gap-1.5 font-sans text-[15px] hover:text-primary transition-colors py-2 px-2 ${isActive ? 'text-primary font-medium' : 'text-base-content/80'}`}
            >
              Treatments <ChevronDown />
            </NavLink>
            <ul className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-xl w-56 border border-secondary/10 mt-0 before:absolute before:top-[-10px] before:left-0 before:w-full before:h-[10px] before:bg-transparent">
              {['Refresh', 'Renew', 'Restore', 'Radiate'].map((item) => (
                <li key={item}>
                  <Link to={`/treatments/${item.toLowerCase()}`} onClick={closeDropdown} className="hover:bg-secondary/20 hover:text-primary rounded-lg py-3 px-4 active:bg-secondary/30">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions Dropdown */}
          <div className="dropdown dropdown-hover group px-2">
            <NavLink 
              to="/conditions"
              onClick={closeDropdown}
              className={({ isActive }) => `flex items-center gap-1.5 font-sans text-[15px] hover:text-primary transition-colors py-2 px-2 ${isActive ? 'text-primary font-medium' : 'text-base-content/80'}`}
            >
              Skin Conditions <ChevronDown />
            </NavLink>
            <ul className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-xl w-64 border border-secondary/10 mt-0 before:absolute before:top-[-10px] before:left-0 before:w-full before:h-[10px] before:bg-transparent">
              {[
                { name: 'Skin Laxity', path: '/conditions/skin-laxity' },
                { name: 'Uneven Tone & Pigmentation', path: '/conditions/pigmentation-and-skin-tone' },
                { name: 'Texture & Pores', path: '/conditions/age-and-regeneration' },
                { name: 'Post-Inflammatory Pigmentation', path: '/conditions/post-inflammatory-hyperpigmentation' },
                { name: 'Dark Circles', path: '/conditions/dark-circles' },
                { name: 'All Conditions', path: '/conditions' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} onClick={closeDropdown} className="hover:bg-secondary/20 hover:text-primary rounded-lg py-3 px-4 active:bg-secondary/30">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Dropdown */}
          <div className="dropdown dropdown-hover group px-2">
            <div role="button" className={`flex items-center gap-1.5 font-sans text-[15px] hover:text-primary transition-colors py-2 px-2 text-base-content/80 cursor-pointer`}>
              Who We Are <ChevronDown />
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-xl w-48 border border-secondary/10 mt-0 before:absolute before:top-[-10px] before:left-0 before:w-full before:h-[10px] before:bg-transparent">
              {[
                { name: 'About', path: '/about/our-story' },
                { name: 'Founder', path: '/about/our-founder' },
                { name: 'Philosophy', path: '/about/our-philosophy' },
                { name: 'Manifesto', path: '/about/manifesto' },
                { name: 'Articles', path: '/blogs' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} onClick={closeDropdown} className="hover:bg-secondary/20 hover:text-primary rounded-lg py-3 px-4 active:bg-secondary/30">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-end gap-3">
        {/* Search Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="btn btn-ghost btn-circle hover:bg-secondary/20"
          aria-label="Search treatments"
        >
          <Search className="h-5 w-5" />
        </button>

        <Link 
          to="/book-consultation"
          className={`btn btn-primary hidden lg:flex items-center font-sans text-white px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 `}
        >
          Book Consultation
        </Link>
        
        {/* Mobile Menu Button - Drawer Toggle */}
        <button 
          className="btn btn-ghost btn-circle lg:hidden hover:bg-secondary/20"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
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
                aria-label="Close menu"
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
                  <details open={activeMobileMenu === 'treatments'}>
                    <summary 
                      className="font-medium text-lg py-3 text-base-content/90 font-sans"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveMobileMenu(activeMobileMenu === 'treatments' ? null : 'treatments');
                      }}
                    >
                      Treatments
                    </summary>
                    <ul className="pl-4 border-l-2 border-secondary/20 mt-2 space-y-1">
                        <li><Link to="/treatments" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Overview</Link></li>
                        <li><Link to="/treatments/refresh" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Refresh</Link></li>
                        <li><Link to="/treatments/renew" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Renew</Link></li>
                        <li><Link to="/treatments/restore" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Restore</Link></li>
                        <li><Link to="/treatments/radiate" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Radiate</Link></li>
                    </ul>
                  </details>
                </li>
                 <li>
                  <details open={activeMobileMenu === 'programs'}>
                    <summary 
                      className="font-medium text-lg py-3 text-base-content/90 font-sans"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveMobileMenu(activeMobileMenu === 'programs' ? null : 'programs');
                      }}
                    >
                      Programs
                    </summary>
                    <ul className="pl-4 border-l-2 border-secondary/20 mt-2 space-y-1">
                      <li><Link to="/treatments/radiate/programmes" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Overview</Link></li>
                      <li><Link to="/treatments/radiate/pathways/menopause-regeneration" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Menopause Regeneration</Link></li>
                      <li><Link to="/treatments/radiate/pathways/under-eye-regeneration" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Under-Eye Regeneration</Link></li>
                      <li><Link to="/treatments/radiate/pathways/collagen-reset" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Collagen Reset</Link></li>
                      <li><Link to="/treatments/radiate/pathways/hormone-smart-skin" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Hormone-Smart Skin</Link></li>
                      <li><Link to="/treatments/radiate/pathways/shape-and-regenerate" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Shape & Regenerate™</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details open={activeMobileMenu === 'conditions'}>
                    <summary 
                      className="font-medium text-lg py-3 text-base-content/90 font-sans"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveMobileMenu(activeMobileMenu === 'conditions' ? null : 'conditions');
                      }}
                    >
                      Skin Conditions
                    </summary>
                    <ul className="pl-4 border-l-2 border-secondary/20 mt-2 space-y-1">
                      <li><Link to="/conditions" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Overview</Link></li>
                      <li><Link to="/conditions/skin-laxity" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Skin Laxity</Link></li>
                      <li><Link to="/conditions/pigmentation-and-skin-tone" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Uneven Tone & Pigmentation</Link></li>
                      <li><Link to="/conditions/age-and-regeneration" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Texture & Pores</Link></li>
                      <li><Link to="/conditions/post-inflammatory-hyperpigmentation" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Post-Inflammatory Pigmentation</Link></li>
                      <li><Link to="/conditions/dark-circles" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Dark Circles</Link></li>
                      <li><Link to="/conditions" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">All Conditions</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details open={activeMobileMenu === 'company'}>
                     <summary 
                      className="font-medium text-lg py-3 text-base-content/90 font-sans"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveMobileMenu(activeMobileMenu === 'company' ? null : 'company');
                      }}
                    >
                      Who We Are
                    </summary>
                    <ul className="pl-4 border-l-2 border-secondary/20 mt-2 space-y-1">
                      <li><Link to="/about/our-story" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">About</Link></li>
                      <li><Link to="/about/our-founder" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Founder</Link></li>
                      <li><Link to="/about/our-philosophy" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Philosophy</Link></li>
                      <li><Link to="/about/manifesto" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Manifesto</Link></li>
                      <li><Link to="/blogs" onClick={() => setIsDrawerOpen(false)} className="py-2 active:bg-secondary/20">Articles</Link></li>
                    </ul>
                  </details>
                </li>
              </ul>
              
              <div className="mt-8 mb-8 px-2">
                 <Link to="/book-consultation" onClick={() => setIsDrawerOpen(false)} className="btn btn-primary text-white w-full rounded-xl shadow-md min-h-[3rem] font-sans tracking-wide">
                   Book Consultation
                 </Link>
              </div>
           </div>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] transition-opacity"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
          />
          
          {/* Modal */}
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-[201] px-4">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="p-4 border-b border-base-200">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-base-content/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for treatments and conditions..."
                    autoFocus
                    className="w-full pl-12 pr-12 py-3 text-base bg-base-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-base-content/40 hover:text-base-content"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {searchQuery && searchResults.length === 0 && (
                  <div className="p-8 text-center text-base-content/60">
                    No results found matching &quot;{searchQuery}&quot;
                  </div>
                )}
                {searchQuery && searchResults.length > 0 && (
                  <div className="p-2">
                    <div className="px-4 py-2 text-sm text-base-content/60">
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </div>
                    {searchResults.map((result, index) => (
                      <button
                        key={`${result.type}-${index}`}
                        onClick={() => handleSearchClick(result)}
                        className="w-full text-left p-4 hover:bg-base-200 rounded-lg transition-colors group"
                      >
                        <div className="flex gap-4">
                          {result.image && (
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-base-200">
                              <img
                                src={result.placeholderUrl || result.image}
                                alt={result.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded capitalize">
                                {result.type === 'treatment' ? result.categoryTitle : 'Condition'}
                              </span>
                              {result.subCategoryTitle && (
                                <span className="text-xs text-base-content/60">
                                  {result.subCategoryTitle}
                                </span>
                              )}
                            </div>
                            <h4 className="font-medium text-base group-hover:text-primary transition-colors truncate">
                              {result.title}
                            </h4>
                            {result.description && (
                              <p className="text-sm text-base-content/60 truncate mt-1">
                                {result.type === 'treatment' ? result.subtitle || result.description : result.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
                {!searchQuery && (
                  <div className="p-8 text-center text-base-content/60">
                    Start typing to search...
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
