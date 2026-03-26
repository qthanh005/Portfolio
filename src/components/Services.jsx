import { motion } from 'framer-motion'
import { Check, ArrowRight, Zap } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const Services = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const packages = [
    t.services.packages.portfolio,
    t.services.packages.landing,
    t.services.packages.ecommerce,
    t.services.packages.webapp
  ]

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-mono text-black uppercase tracking-wider">
              {language === 'en' ? 'Pricing & Plans' : 'Bảng Giá & Dịch Vụ'}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-mono mb-4"
          >
            <span className="text-gray-600">&gt;</span> {t.services.title}{' '}
            <span className="gradient-text">{t.services.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            {t.services.description}
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-black/10 overflow-hidden hover:border-black/30 hover:shadow-xl transition-all duration-300 flex flex-col relative group bg-white/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="p-6 border-b border-gray-200/50 flex-grow bg-white/50">
                <h3 className="text-xl font-bold font-mono text-black mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-black">{pkg.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                  {pkg.baseDesc}
                </p>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-black">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Upsell Box (if exists) */}
              <div className="p-4 bg-gray-50 mt-auto flex flex-col justify-end">
                {pkg.upsell ? (
                  <div className="p-4 rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all min-h-[140px]">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-400/10 rounded-full blur-xl"></div>
                    <h4 className="text-sm font-bold text-amber-900 flex items-start gap-1.5 mb-2">
                      <Zap className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      {pkg.upsell.title}
                    </h4>
                    <p className="text-xs text-amber-800/80 leading-relaxed font-medium">
                      {pkg.upsell.desc}
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl border border-gray-200/50 bg-white/50 min-h-[140px] flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-medium px-4 py-2 border border-gray-200 rounded-lg">
                      {language === 'en' ? 'Standard package' : 'Cam kết đúng giá'}
                    </span>
                  </div>
                )}
                
                <a 
                  href="/#contact" 
                  className="mt-4 w-full py-3 px-4 rounded-xl bg-black text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors hover:shadow-lg hover:shadow-black/20"
                >
                  {language === 'en' ? 'Get Started' : 'Nhận Tư Vấn'}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
