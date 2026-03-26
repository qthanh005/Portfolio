import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Check, ArrowRight, Zap, Sparkles, Handshake, Star, Globe, Layout, Headphones, Clock } from 'lucide-react'
import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import Testimonials from './Testimonials'
import ServiceMarquee from './ServiceMarquee'
import FAQ from './FAQ'
import Contact from './Contact'

const AnimatedNumber = ({ end, decimals = 0, duration = 2.5 }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals))

  useEffect(() => {
    const controls = animate(count, end, { duration, ease: "easeOut" })
    return controls.stop
  }, [count, end, duration])

  return <motion.span>{rounded}</motion.span>
}

const Services = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const packages = [
    { ...t.services.packages.portfolio, id: 'portfolio', highlighted: true },
    { ...t.services.packages.landing, id: 'landing' },
    { ...t.services.packages.ecommerce, id: 'ecommerce' },
    { ...t.services.packages.webapp, id: 'webapp' }
  ]

  const stats = [
    { label: language === 'en' ? 'Average Rating' : 'Đánh giá trung bình', value: 4.9, decimals: 1, suffix: '/5.0', icon: Star, color: 'text-yellow-500' },
    { label: language === 'en' ? 'Completed Projects' : 'Dự án hoàn thành', value: 50, decimals: 0, suffix: '+', icon: Globe, color: 'text-blue-500' },
    { label: language === 'en' ? 'UI Templates' : 'Giao diện mẫu', value: 100, decimals: 0, suffix: '+', icon: Layout, color: 'text-green-500' },
    { label: language === 'en' ? 'Support' : 'Hỗ trợ kỹ thuật', value: 24, decimals: 0, suffix: '/7', icon: Headphones, color: 'text-purple-500' }
  ]

  return (
    <>
    <section id="services" className="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-gray-200/50 to-transparent blur-3xl"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-gradient-to-tl from-gray-200/30 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full mb-6 shadow-sm"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </div>
            <span className="text-xs font-mono font-bold text-black uppercase tracking-widest">
              {language === 'en' ? 'Pricing & Plans' : 'Bảng Giá Dịch Vụ'}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-mono mb-6 tracking-tight"
          >
            <span className="text-gray-400 font-light">&lt;</span>
            {t.services.title}{' '}
            <span className="relative inline-block">
              <span className="relative z-10">{t.services.titleHighlight}</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gray-200 -z-10 -rotate-2"></span>
            </span>
            <span className="text-gray-400 font-light">/&gt;</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg mb-12"
          >
            {t.services.description}
          </motion.p>
          
          {/* Animated Stats Intro */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20 lg:mb-28">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-md transition-shadow"
                >
                  <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full blur-2xl opacity-20 ${stat.color.replace('text', 'bg')}`}></div>
                  
                  <div className={`mb-3 p-3 rounded-2xl bg-gray-50 border border-gray-100 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-black font-mono text-gray-900 tracking-tighter">
                      <AnimatedNumber end={stat.value} decimals={stat.decimals} />
                    </span>
                    <span className="text-xl font-bold font-mono text-gray-400">{stat.suffix}</span>
                  </div>
                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 text-center">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-6 items-stretch">
          {packages.map((pkg, index) => {
            const isHighlighted = pkg.highlighted;
            
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                className={`relative group flex flex-col rounded-3xl transition-all duration-500 ${
                  isHighlighted 
                    ? 'bg-black text-white shadow-2xl scale-105 z-10 border border-gray-800' 
                    : 'bg-white text-black shadow-xl hover:shadow-2xl hover:-translate-y-2 border border-gray-100'
                }`}
              >
                {/* Badges and Ribbons */}
                {pkg.badge && (
                  <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 z-30 pointer-events-none rounded-tr-3xl">
                    <div className={`absolute top-7 -right-10 w-48 text-center text-[10px] font-black py-1.5 flex items-center justify-center gap-1 rotate-45 origin-center ${
                      pkg.id === 'webapp' 
                        ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-950' 
                        : pkg.id === 'ecommerce' 
                          ? 'bg-blue-600 text-white'
                          : 'bg-red-600 text-white'
                    }`}>
                      <Sparkles className={`w-3 h-3 ${pkg.id === 'webapp' ? 'text-amber-950' : 'text-yellow-300'}`} />
                      {pkg.badge}
                    </div>
                  </div>
                )}
                
                {/* Highlight Top border effect */}
                {!isHighlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-black group-hover:w-full transition-all duration-500 rounded-t-3xl"></div>
                )}

                <div className="p-8 pb-6 flex-grow flex flex-col">
                  <h3 className={`text-2xl font-bold font-mono mb-2 ${isHighlighted ? 'text-white' : 'text-black'}`}>
                    {pkg.name}
                  </h3>
                  
                  {/* Pricing Display */}
                  <div className="my-6 relative flex flex-col items-start">
                    {pkg.originalPrice && (
                      <div className="text-gray-400 line-through text-lg font-medium mb-1 decoration-red-500/50 decoration-2">
                        {pkg.originalPrice}
                      </div>
                    )}
                    <div className={`text-4xl xl:text-5xl font-black tracking-tighter ${isHighlighted ? 'text-white' : 'text-black'}`}>
                      {pkg.price}
                    </div>
                    
                    {/* Negotiable Tag */}
                    {pkg.negotiable && (
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-green-50 text-green-700 border border-green-200/50 rounded-lg w-full">
                        <Handshake className="w-4 h-4 flex-shrink-0" />
                        <span className="tracking-wide">{pkg.negotiable}</span>
                      </div>
                    )}
                    
                    {pkg.deliveryTime && (
                      <div className={`mt-3 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border w-full ${isHighlighted ? 'bg-white/10 text-white border-white/20' : 'bg-blue-50/50 text-blue-700 border-blue-100'}`}>
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span className="tracking-wide text-left">{pkg.deliveryTime}</span>
                      </div>
                    )}
                  </div>

                  <p className={`text-sm mb-8 leading-relaxed font-medium min-h-[48px] ${isHighlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                    {pkg.baseDesc}
                  </p>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm font-medium ${isHighlighted ? 'text-gray-200' : 'text-gray-700'}`}>
                        <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${isHighlighted ? 'bg-white/20' : 'bg-black/5'}`}>
                          <Check className={`w-3 h-3 ${isHighlighted ? 'text-white' : 'text-black'}`} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Upsell / CTA Section */}
                <div className={`p-4 mx-4 mb-4 rounded-2xl flex flex-col justify-end ${
                  isHighlighted ? 'bg-white/10' : 'bg-gray-50'
                }`}>
                  {pkg.upsell ? (
                    <div className={`p-4 rounded-xl border relative overflow-hidden transition-all duration-300 min-h-[140px] flex flex-col justify-center ${
                      isHighlighted 
                        ? 'border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent hover:border-yellow-500/50' 
                        : 'border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50/30 hover:shadow-lg hover:shadow-amber-100/50'
                    }`}>
                      <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full blur-xl ${isHighlighted ? 'bg-yellow-500/20' : 'bg-amber-400/20'}`}></div>
                      <h4 className={`text-sm font-bold flex items-start gap-2 mb-2 ${isHighlighted ? 'text-yellow-400' : 'text-amber-900'}`}>
                        <Zap className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isHighlighted ? 'text-yellow-400 fill-yellow-400' : 'text-amber-600 fill-amber-600'}`} />
                        {pkg.upsell.title}
                      </h4>
                      <p className={`text-xs leading-relaxed font-medium ${isHighlighted ? 'text-gray-300' : 'text-amber-800/80'}`}>
                        {pkg.upsell.desc}
                      </p>
                    </div>
                  ) : (
                    <div className={`p-4 rounded-xl border border-dashed min-h-[140px] flex items-center justify-center ${
                      isHighlighted ? 'border-white/20' : 'border-gray-300'
                    }`}>
                      <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
                        isHighlighted ? 'text-gray-400 bg-white/5' : 'text-gray-400 bg-white'
                      }`}>
                        {language === 'en' ? 'Standard package' : 'Cam kết đúng giá'}
                      </span>
                    </div>
                  )}
                  
                  <a 
                    href="#contact" 
                    className={`mt-4 w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 ${
                      isHighlighted 
                        ? 'bg-white text-black hover:bg-gray-200 hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]' 
                        : 'bg-black text-white hover:bg-gray-800 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
                    }`}
                  >
                    {language === 'en' ? 'Get Started' : 'Liên Hệ Ngay'}
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
    
    <ServiceMarquee />
    <Testimonials />
    <FAQ />
    </>
  )
}

export default Services
