import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Download, Code2, Database, Cpu } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [textIndex, setTextIndex] = useState(0)
  const [showMain, setShowMain] = useState(false)

  const initSequence = [
    t.hero.initSequence.init,
    t.hero.initSequence.loading,
    t.hero.initSequence.connected
  ]

  useEffect(() => {
    if (textIndex < initSequence.length) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1)
      }, 800)
      return () => clearTimeout(timer)
    } else {
      setTimeout(() => setShowMain(true), 400)
    }
  }, [textIndex])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10"></div>

      <div className="max-w-7xl mx-auto px-6 z-10">
        {!showMain ? (
          <div className="space-y-4 font-mono text-center">
            {initSequence.slice(0, textIndex).map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary text-lg"
              >
                &gt; {text}
              </motion.p>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12"
          >
            {/* Avatar Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border border-secondary/20"></div>

                {/* Avatar image placeholder - users can replace this */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center overflow-hidden border-4 border-primary/50">
                  <img
                    src="/images/profile.jpg"
                    alt="Le Quang Thanh"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/30 to-primary/30" style={{display: 'none'}}>
                    <Code2 className="w-24 h-24 text-primary" />
                  </div>
                </div>

                {/* Tech icons floating around */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <Database className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 text-primary" />
                  <Cpu className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 text-secondary" />
                  <Code2 className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="text-center md:text-left space-y-6 max-w-2xl">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-primary font-mono text-sm mb-2">{t.hero.greeting}</p>
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="text-white">{t.hero.name}</span>
                  <br />
                  <span className="gradient-text">{t.hero.surname}</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-400 font-mono"
              >
                {t.hero.role}
              </motion.p>

              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 text-lg leading-relaxed"
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
              >
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 glow-box flex items-center gap-2"
                >
                  <Code2 className="w-5 h-5" />
                  {t.hero.viewProjects}
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 glass-card text-primary font-semibold rounded-lg hover:border-primary transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  {t.hero.getInTouch}
                </a>
                <a
                  href="/resume.pdf"
                  className="px-6 py-3 glass-card text-gray-300 font-semibold rounded-lg hover:border-secondary transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {t.hero.resume}
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4 justify-center md:justify-start pt-4"
              >
                <a href="https://github.com/qthanh2005" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-primary transition-all duration-300 group">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/l%C3%AA-quang-th%C3%A0nh-8664b3331/" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-primary transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
                <a href="mailto:lequangthanhh05@gmail.com"
                   className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-primary transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero
