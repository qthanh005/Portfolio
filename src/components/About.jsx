import { motion } from 'framer-motion'
import { useState } from 'react'
import { User, Briefcase, Target, TrendingUp, Award, Calendar, RotateCcw, Code2, MapPin, CheckCircle2, Zap, Terminal } from 'lucide-react'
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
          <span className="text-gray-600">&gt;</span> {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Information - Flip Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[600px] perspective-1000"
          >
            <motion.div
              className="relative w-full h-full preserve-3d cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side - Profile Information */}
              <div
                className="absolute inset-0 w-full h-full backface-hidden bg-white p-8 rounded-lg border-2 border-black hover:shadow-2xl hover:shadow-black/20 transition-all duration-500"
                style={{ backfaceVisibility: "hidden", backgroundColor: "#FFFFFF" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-black font-mono">
                    {t.about.professionalProfile}
                  </h3>
                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="p-2 hover:bg-black/10 rounded-lg transition-colors duration-300 group"
                    aria-label="Flip card to see photo"
                  >
                    <RotateCcw className="w-5 h-5 text-black group-hover:text-black transition-colors" />
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
                        <IconComponent className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-black font-mono text-xs block mb-1">
                            {item.label}
                          </span>
                          <span className="text-black text-sm leading-relaxed">
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
                      className="p-2 bg-black/30 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-colors duration-300 group border border-white/20"
                      aria-label="Flip card back to profile info"
                    >
                      <RotateCcw className="w-5 h-5 text-white transition-colors" />
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

                    <p className="text-white font-mono text-sm drop-shadow">
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
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-mono rounded-full border border-white/30"
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
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/50"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/50"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/50"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/50"></div>

                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
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
              <h3 className="text-2xl font-semibold mb-6 text-black font-mono">
                {t.about.technicalOverview}
              </h3>
              <p className="text-black leading-relaxed mb-6">
                {t.about.overview.paragraph1}
              </p>
              <p className="text-black leading-relaxed">
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
                  <h4 className="text-black font-mono text-sm mb-2 group-hover:text-black transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-black text-xs leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Section - Timeline Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-black to-gray-600 animate-pulse"></div>
              <span className="text-xs font-mono text-black uppercase tracking-wider">
                {language === 'en' ? 'Work Experience' : 'Kinh Nghiệm'}
              </span>
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-gray-600">&gt;</span>{' '}
              <span className="gradient-text">
                {language === 'en' ? 'Professional Journey' : 'Hành Trình Chuyên Nghiệp'}
              </span>
            </h3>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-black via-gray-600 to-black/20 transform -translate-x-1/2 hidden md:block"
            />

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Main Experience */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <div className="md:flex md:items-center">
                  {/* Left Content */}
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                    <div className="glass-card p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-black">
                          <Briefcase className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-black font-mono">
                            {t.about.experience.title}
                          </h4>
                          <span className="text-xs text-green-600 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            {language === 'en' ? 'Current' : 'Hiện tại'}
                          </span>
                        </div>
                      </div>
                      <p className="text-black font-semibold mb-3">
                        {t.about.experience.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-black/5 rounded text-black font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {t.about.experience.period}
                        </span>
                        <span className="px-2 py-1 bg-black/5 rounded text-black font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {t.about.experience.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
                  >
                    <div className="w-6 h-6 rounded-full bg-black border-4 border-white shadow-lg"></div>
                  </motion.div>

                  {/* Right Content - Responsibilities */}
                  <div className="md:w-1/2 md:pl-12">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="glass-card p-6 rounded-xl border border-black/10"
                    >
                      <h5 className="text-sm font-mono text-black uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Code2 className="w-4 h-4" />
                        {language === 'en' ? 'Key Responsibilities' : 'Trách Nhiệm Chính'}
                      </h5>
                      <div className="space-y-2">
                        {t.about.experience.responsibilities.slice(0, 4).map((resp, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + (index * 0.1) }}
                            className="flex items-start gap-2 text-sm text-black"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack Branch */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative"
              >
                <div className="md:flex md:items-center md:flex-row-reverse">
                  {/* Right Content */}
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <div className="glass-card p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-black">
                          <Zap className="w-6 h-6 text-black" fill="currentColor" />
                        </div>
                        <h5 className="text-lg font-bold text-black font-mono">
                          {language === 'en' ? 'Technologies & Tools' : 'Công Nghệ & Công Cụ'}
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'MongoDB', 'MySQL', 'Android', 'Java', 'Kotlin', 'Unity'].map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + (index * 0.05) }}
                            className="px-3 py-1 bg-black/5 rounded-lg text-xs font-mono text-black border border-black/10 hover:border-black/30 transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-600 border-4 border-white shadow-lg"></div>
                  </motion.div>

                  {/* Left Content - More Responsibilities */}
                  <div className="md:w-1/2 md:pr-12">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1, duration: 0.6 }}
                      className="glass-card p-6 rounded-xl border border-black/10"
                    >
                      <h5 className="text-sm font-mono text-black uppercase tracking-wider mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        {language === 'en' ? 'More Achievements' : 'Thành Tựu Khác'}
                      </h5>
                      <div className="space-y-2">
                        {t.about.experience.responsibilities.slice(4, 8).map((resp, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2 + (index * 0.1) }}
                            className="flex items-start gap-2 text-sm text-black"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Tools Branch */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="relative"
              >
                <div className="md:flex md:items-center">
                  {/* Left Content */}
                  <div className="md:w-1/2 md:pr-12">
                    <div className="glass-card p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-black">
                          <Terminal className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-bold text-black font-mono">
                          {language === 'en' ? 'Additional Tools' : 'Công Cụ Bổ Sung'}
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['C#', 'Puppeteer', 'BeautifulSoup', 'JWT', 'Vercel', 'Netlify', 'PostgreSQL'].map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.5 + (index * 0.05) }}
                            className="px-3 py-1 bg-black/5 rounded-lg text-xs font-mono text-black border border-black/10 hover:border-black/30 transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-700 border-4 border-white shadow-lg"></div>
                  </motion.div>

                  {/* Right Content - Empty for balance */}
                  <div className="md:w-1/2 md:pl-12 hidden md:block">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.3 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.6 }}
                      className="h-32 border-2 border-dashed border-black/10 rounded-xl flex items-center justify-center"
                    >
                      <span className="text-black/30 text-sm font-mono">
                        {language === 'en' ? 'More to come...' : 'Sẽ còn nhiều hơn...'}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
