import { motion } from 'framer-motion'
import { Languages, Star } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const Navbar = ({ scrolled }) => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]
  const location = useLocation()

  // We exclude 'services' from here since we render it explicitly with a Star
  const navLinks = [t.nav.about, t.nav.skills, t.nav.projects, t.nav.contact]
  const linkIds = ['about', 'skills', 'projects', 'contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-mono gradient-text">
          &lt;THANH/&gt;
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const path = `/#${linkIds[index]}`
              return (
                <li key={link}>
                  <a
                    href={path}
                    className="relative text-gray-700 hover:text-black transition-colors duration-300 group text-sm font-mono"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              )
            })}
            
            {/* Services dedicated Link */}
            <li>
              <Link
                to="/services"
                className={`relative flex items-center gap-1.5 transition-colors duration-300 group text-sm font-mono font-bold ${
                  location.pathname === '/services' ? 'text-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                <Star className={`w-4 h-4 transition-colors ${
                  location.pathname === '/services' ? 'text-yellow-500 fill-yellow-500' : 'text-yellow-400 group-hover:fill-yellow-400'
                } animate-pulse`} />
                {t.nav.services}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                  location.pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
          </ul>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 glass-card rounded-lg hover:border-primary transition-all duration-300 group"
            aria-label="Toggle Language"
          >
            <Languages className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
            <span className="text-sm font-mono text-gray-700 group-hover:text-black transition-colors">
              {language === 'en' ? 'VI' : 'EN'}
            </span>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
