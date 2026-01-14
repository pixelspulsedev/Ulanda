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

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-base-100 flex flex-col font-sans">
      <Head>
        <title>Ulanda</title>
      </Head>

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
