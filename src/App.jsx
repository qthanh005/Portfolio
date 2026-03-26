import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { LanguageProvider } from './context/LanguageContext'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background3D from './components/Background3D'
import Particles from './components/Particles'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Scroll to top or specific hash on route change
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-white text-black relative overflow-hidden ${isLoading ? 'h-screen' : ''}`}>
        <Background3D />
        <Particles />
        <div className="relative z-10">
          <Navbar scrolled={scrolled} />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
              </>
            } />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Contact />
          <Footer />
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </LanguageProvider>
  )
}

export default App
