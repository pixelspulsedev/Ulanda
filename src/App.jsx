import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import { Head } from 'vite-react-ssg'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/animations/PageTransition'
import { LocalBusinessSchema } from './components/Schema'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-base-100 flex flex-col font-sans">
      <Head>
        <title>ULANDA | Regenerative Aesthetics in Ware SG12, Hertfordshire</title>
        <meta name="description" content="ULANDA is a regenerative aesthetics clinic in Ware SG12, Hertfordshire. Specialising in skin regeneration, bio-remodelling and hormone-smart treatments for mid-life women." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ulandamedspa" />
        <meta name="twitter:image" content="https://www.ulanda.co.uk/assets/img/home/ulanda-homepage-hero-ware-sg12.webp" />
      </Head>
      
      {/* Site-wide LocalBusiness Schema - added once */}
      <LocalBusinessSchema />

      <Navbar />

      {/* Main Content */}
      <main className="flex-grow mx-auto w-full">
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <AnimatePresence mode="wait">
            {/* <PageTransition key={location.pathname}> */}
              <Outlet />
            {/* </PageTransition> */}
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App
