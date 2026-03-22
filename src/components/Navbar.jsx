import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const Navbar = ({ scrolled }) => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

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
        <a href="#" className="text-2xl font-bold font-mono gradient-text">
          &lt;THANH/&gt;
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href={`#${linkIds[index]}`}
                  className="relative text-gray-300 hover:text-primary transition-colors duration-300 group text-sm font-mono"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 glass-card rounded-lg hover:border-primary transition-all duration-300 group"
            aria-label="Toggle Language"
          >
            <Languages className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
            <span className="text-sm font-mono text-gray-300 group-hover:text-primary transition-colors">
              {language === 'en' ? 'VI' : 'EN'}
            </span>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
