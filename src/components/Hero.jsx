import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Download, Code2, Database, Cpu, UserCircle2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import PDFViewer from './PDFViewer'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [isPDFOpen, setIsPDFOpen] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10"></div>

      <div className="max-w-7xl mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 pt-20"
          >
            {/* Avatar Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-gray-600/30 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border border-gray-500/20"></div>

                {/* Avatar image placeholder - users can replace this */}
                <div className="absolute inset-6 rounded-full bg-gray-800/30 flex items-center justify-center overflow-hidden border-4 border-gray-700/40">
                  <img
                    src="/images/profile.jpg"
                    alt="Le Quang Thanh"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center bg-gray-800/50" style={{display: 'none'}}>
                    <UserCircle2 className="w-32 h-32 text-gray-400" strokeWidth={1.5} />
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
                transition={{ delay: 2.2 }}
              >
                <p className="text-black font-mono text-sm mb-2">{t.hero.greeting}</p>
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="text-black">{t.hero.name}</span>
                  <br />
                  <span className="gradient-text">{t.hero.surname}</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.3 }}
                className="text-xl md:text-2xl text-gray-600 font-mono"
              >
                {t.hero.role}
              </motion.p>

              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.4 }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
              >
                <a
                  href="#projects"
                  className="px-6 py-3 glass-card text-black font-semibold rounded-lg border-2 border-black/10 hover:border-black/30 transition-all duration-300 flex items-center gap-2"
                >
                  <Code2 className="w-5 h-5" />
                  {t.hero.viewProjects}
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 glass-card text-black font-semibold rounded-lg border-2 border-black/10 hover:border-black/30 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  {t.hero.getInTouch}
                </a>
                <button
                  onClick={() => setIsPDFOpen(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {t.hero.resume}
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.6 }}
                className="flex gap-4 justify-center md:justify-start pt-4"
              >
                <a href="https://github.com/qthanh2005" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-black transition-all duration-300 group">
                  <Github className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/l%C3%AA-quang-th%C3%A0nh-8664b3331/" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-black transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                </a>
                <a href="mailto:lequangthanhh05@gmail.com"
                   className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-black transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                </a>
              </motion.div>
            </div>
          </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      <PDFViewer
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        pdfUrl="/images/CV.png"
        fileName="CV_LeQuangThanh.png"
      />
    </section>
  )
}

export default Hero
