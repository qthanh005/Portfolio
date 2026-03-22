import { motion } from 'framer-motion'
import { User, Briefcase, Target, TrendingUp, Award, Calendar } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

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
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-lg hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary font-mono">
              {t.about.professionalProfile}
            </h3>
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
