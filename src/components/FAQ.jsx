import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const FAQ = () => {
  const { language } = useLanguage()
  const t = translations[language]?.faq
  const [openIndex, setOpenIndex] = useState(0)

  if (!t) return null;

  return (
    <section className="py-24 px-6 relative bg-white border-t border-gray-100">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-6"
          >
            <span className="text-xs font-mono font-bold text-black uppercase tracking-widest">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-mono mb-6 tracking-tight"
          >
            {t.title}{' '}
            <span className="relative inline-block">
              <span className="relative z-10">{t.titleHighlight}</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gray-200 -z-10 -rotate-1"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            {t.description}
          </motion.p>
        </div>

        <div className="space-y-4">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white border-gray-300 shadow-md transform scale-[1.01]' : 'bg-gray-50/50 border-gray-200 hover:border-gray-300'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`font-bold text-base md:text-lg pr-4 ${isOpen ? 'text-black' : 'text-gray-800'}`}>
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-black text-white rotate-0' : 'bg-white border text-black rotate-90'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-500 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
