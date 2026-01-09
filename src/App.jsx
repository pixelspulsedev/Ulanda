import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Head } from 'vite-react-ssg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'
import ScrollToTop from './components/ScrollToTop'

function App() {
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
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App
