import { motion } from 'framer-motion'
import { useState } from 'react'
import { User, Briefcase, Target, TrendingUp, Award, Calendar, RotateCcw, Code2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [isFlipped, setIsFlipped] = useState(false)

  const profileData = [
    {
      icon: User,
      label: t.about.profile.fullName,
      value: t.about.profile.fullNameValue
    },
    {
      icon: Briefcase,
      label: t.about.profile.position,
      value: t.about.profile.positionValue
    },
    {
      icon: Target,
      label: t.about.profile.specialization,
      value: t.about.profile.specializationValue
    },
    {
      icon: TrendingUp,
      label: t.about.profile.currentFocus,
      value: t.about.profile.currentFocusValue
    },
    {
      icon: Calendar,
      label: t.about.profile.experience,
      value: t.about.profile.experienceValue
    },
    {
      icon: Award,
      label: t.about.profile.expertise,
      value: t.about.profile.expertiseValue
    }
  ]

  const highlights = [
    {
      title: t.about.highlights.backend.title,
      description: t.about.highlights.backend.description
    },
    {
      title: t.about.highlights.realtime.title,
      description: t.about.highlights.realtime.description
    },
    {
      title: t.about.highlights.ml.title,
      description: t.about.highlights.ml.description
    },
    {
      title: t.about.highlights.cloud.title,
      description: t.about.highlights.cloud.description
    }
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center font-mono"
        >
          <span className="text-gray-400">&gt;</span> {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Information - Flip Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[500px] perspective-1000"
          >
            <motion.div
              className="relative w-full h-full preserve-3d cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side - Profile Information */}
              <div
                className="absolute inset-0 w-full h-full backface-hidden glass-card p-8 rounded-lg hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-primary font-mono">
                    {t.about.professionalProfile}
                  </h3>
                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300 group"
                    aria-label="Flip card to see photo"
                  >
                    <RotateCcw className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                </div>

                <div className="space-y-4">
                  {profileData.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-3 pb-3 border-b border-gray-700/30"
                      >
                        <IconComponent className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-gray-500 font-mono text-xs block mb-1">
                            {item.label}
                          </span>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {item.value}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Back Side - Profile Photo */}
              <div
                className="absolute inset-0 w-full h-full backface-hidden glass-card rounded-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="/images/profile.jpg"
                    alt="Le Quang Thanh"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback gradient background */}
                  <div
                    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/30 to-primary/30"
                    style={{display: 'none'}}
                  >
                    <Code2 className="w-32 h-32 text-primary opacity-50" />
                  </div>
                </div>

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Header with flip button */}
                <div className="absolute top-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-white font-mono drop-shadow-lg">
                      {language === 'en' ? 'Profile Photo' : 'Ảnh Hồ Sơ'}
                    </h3>
                    <button
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="p-2 bg-black/30 backdrop-blur-sm hover:bg-primary/20 rounded-lg transition-colors duration-300 group border border-white/20"
                      aria-label="Flip card back to profile info"
                    >
                      <RotateCcw className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Content overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-mono">
                        {language === 'en' ? 'Available' : 'Sẵn Sàng'}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-white font-mono drop-shadow-lg">
                      {t.about.profile.fullNameValue}
                    </h4>

                    <p className="text-gray-200 font-mono text-sm drop-shadow">
                      {t.about.profile.positionValue}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {['React', 'Node.js', 'Python', 'Java'].map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs font-mono rounded-full border border-primary/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Corner accent lines */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-secondary/50"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-secondary/50"></div>

                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/60 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Technical Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-primary font-mono">
                {t.about.technicalOverview}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t.about.overview.paragraph1}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {t.about.overview.paragraph2}
              </p>
            </div>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-card p-4 rounded-lg hover:border-primary/50 transition-all duration-300 group"
                >
                  <h4 className="text-primary font-mono text-sm mb-2 group-hover:text-secondary transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
