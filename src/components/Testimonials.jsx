import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const { language } = useLanguage()
  const t = translations[language].testimonials

  // If there are no testimonials for some reason, don't render the section
  if (!t || !t.items || t.items.length === 0) return null

  return (
    <section className="py-24 px-6 relative bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full mb-6 shadow-sm"
          >
            <span className="text-xs font-mono font-bold text-black uppercase tracking-widest">
              {language === 'en' ? 'Trusted by Many' : 'Được Tin Tưởng Bởi'}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-mono mb-6"
          >
            {t.title}{' '}
            <span className="relative inline-block">
              <span className="relative z-10">{t.titleHighlight}</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gray-200 -z-10 -rotate-2"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Masonry Layout for Testimonials */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
              className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-gray-50 rotate-180 z-0 group-hover:text-blue-50 transition-colors" />
              
              <div className="relative z-10 flex items-center gap-4 mb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border border-gray-200 shadow-sm object-cover bg-gray-50"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500 line-clamp-1">{item.role}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed relative z-10 font-medium">
                "{item.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
