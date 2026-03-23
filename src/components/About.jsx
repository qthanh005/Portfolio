import { motion } from 'framer-motion'
import { useState } from 'react'
import { User, Briefcase, Target, TrendingUp, Award, Calendar, RotateCcw, Code2, MapPin, CheckCircle2, Zap } from 'lucide-react'
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
      title: t.about.highlights.fullstack.title,
      description: t.about.highlights.fullstack.description
    },
    {
      title: t.about.highlights.mobile.title,
      description: t.about.highlights.mobile.description
    },
    {
      title: t.about.highlights.automation.title,
      description: t.about.highlights.automation.description
    },
    {
      title: t.about.highlights.game.title,
      description: t.about.highlights.game.description
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
                      {['React', 'Node.js', 'Android', 'Unity', 'MongoDB', 'MySQL'].map((tech, index) => (
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

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                {language === 'en' ? 'Work Experience' : 'Kinh Nghiệm'}
              </span>
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-gray-400">&gt;</span>{' '}
              <span className="gradient-text">
                {language === 'en' ? 'Professional Journey' : 'Hành Trình Chuyên Nghiệp'}
              </span>
            </h3>
          </div>

          {/* Experience Card */}
          <div className="relative">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>

            <div className="relative glass-card rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full"></div>

              <div className="relative p-8 md:p-10">
                {/* Timeline vertical line */}
                <div className="absolute left-6 md:left-10 top-24 bottom-8 w-px bg-gradient-to-b from-primary via-secondary to-primary/20"></div>

                {/* Header Section */}
                <div className="relative flex flex-col md:flex-row md:items-start gap-6 mb-8 pb-8 border-b border-gray-700/30">
                  {/* Icon with advanced effects */}
                  <div className="relative group/icon">
                    {/* Outer glow rings */}
                    <div className="absolute -inset-4 rounded-3xl opacity-30">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-3xl blur-2xl animate-pulse"></div>
                    </div>

                    {/* Animated rotating gradient border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-75 blur-sm group-hover/icon:opacity-100 transition-opacity animate-spin-slow"></div>

                    {/* Main icon container */}
                    <div className="relative">
                      {/* Glass effect background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl backdrop-blur-sm"></div>

                      {/* Gradient background with mesh pattern */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-secondary flex items-center justify-center overflow-hidden transform group-hover/icon:scale-110 transition-all duration-500 shadow-2xl">
                        {/* Mesh pattern overlay */}
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                          backgroundSize: '16px 16px'
                        }}></div>

                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/icon:translate-x-[100%] transition-transform duration-1000"></div>

                        {/* Icon */}
                        <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10 drop-shadow-lg transform group-hover/icon:rotate-6 transition-transform duration-300" />

                        {/* Corner decorations */}
                        <div className="absolute top-1 right-1 w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                      </div>
                    </div>

                    {/* Animated rings */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping-slow"></div>
                    <div className="absolute inset-0 rounded-2xl border border-secondary/20 animate-ping-slow" style={{ animationDelay: '1s' }}></div>

                    {/* Floating particles */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-bounce opacity-60"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-secondary rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h4 className="text-2xl md:text-3xl font-bold text-white font-mono">
                        {t.about.experience.title}
                      </h4>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-xs font-mono text-green-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        {language === 'en' ? 'Active' : 'Đang làm'}
                      </span>
                    </div>

                    <p className="text-primary font-mono font-semibold text-lg mb-4">
                      {t.about.experience.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      {/* Enhanced Calendar badge */}
                      <div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-lg group/badge hover:border-primary/50 transition-all">
                        <div className="relative">
                          <div className="absolute inset-0 bg-secondary/30 rounded blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
                          <Calendar className="w-4 h-4 text-secondary relative group-hover/badge:scale-110 transition-transform" />
                        </div>
                        <span className="font-mono text-gray-300 group-hover/badge:text-white transition-colors">{t.about.experience.period}</span>
                      </div>

                      {/* Enhanced Location badge */}
                      <div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-lg group/badge hover:border-secondary/50 transition-all">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/30 rounded blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
                          <MapPin className="w-4 h-4 text-secondary relative group-hover/badge:scale-110 transition-transform" />
                        </div>
                        <span className="text-gray-300 group-hover/badge:text-white transition-colors">{t.about.experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsibilities Grid */}
                <div className="space-y-3 mb-8">
                  <h5 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2 group/title">
                    {/* Enhanced Code2 icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-md blur-sm opacity-0 group-hover/title:opacity-100 transition-opacity"></div>
                      <div className="relative w-5 h-5 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 group-hover/title:border-primary/50 transition-all">
                        <Code2 className="w-3.5 h-3.5 text-primary group-hover/title:text-secondary transition-colors" />
                      </div>
                    </div>
                    <span className="group-hover/title:text-gray-400 transition-colors">
                      {language === 'en' ? 'Key Responsibilities & Achievements' : 'Trách Nhiệm & Thành Tựu Chính'}
                    </span>
                  </h5>

                  <div className="grid md:grid-cols-2 gap-3">
                    {t.about.experience.responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.03 * index }}
                        className="group/item relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-start gap-3 p-3 rounded-lg glass-card hover:border-primary/30 transition-all">
                          {/* Enhanced checkmark icon */}
                          <div className="relative mt-0.5 group/check">
                            {/* Glow background */}
                            <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                            {/* Icon container with gradient border */}
                            <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover/item:from-primary/30 group-hover/item:to-secondary/30 transition-all">
                              <CheckCircle2 className="w-4 h-4 text-primary group-hover/item:text-secondary transition-colors flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                            </div>
                          </div>
                          <p className="text-gray-400 leading-relaxed text-sm group-hover/item:text-gray-300 transition-colors flex-1">
                            {responsibility}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Section */}
                <div className="pt-6 border-t border-gray-700/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      {/* Enhanced Zap icon */}
                      <div className="relative group/zap">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg blur-md opacity-50 group-hover/zap:opacity-75 transition-opacity"></div>
                        <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 group-hover/zap:border-primary/50 transition-all group-hover/zap:scale-110 transform">
                          <Zap className="w-4 h-4 text-primary group-hover/zap:text-secondary transition-colors" fill="currentColor" />
                        </div>
                        {/* Sparkle effect */}
                        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-primary rounded-full animate-ping opacity-60"></div>
                      </div>
                      <h5 className="text-sm font-mono text-gray-500 uppercase tracking-wider group-hover/zap:text-gray-400 transition-colors">
                        {language === 'en' ? 'Technologies & Tools' : 'Công Nghệ & Công Cụ'}
                      </h5>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'Android', 'Java', 'Kotlin', 'Unity', 'C#', 'Puppeteer', 'BeautifulSoup', 'JWT', 'Vercel', 'Netlify'].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.02 * index }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="group/tech relative"
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover/tech:opacity-20 blur-sm transition-opacity"></div>
                        <span className="relative px-3 py-1.5 glass-card rounded-lg text-xs font-mono text-gray-300 group-hover/tech:text-white group-hover/tech:border-primary/50 transition-all cursor-default inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/tech:bg-primary"></span>
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
