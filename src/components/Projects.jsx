import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2, Video, Brain, Layers, Youtube } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

// Custom TruyenZ Icon Component
const TruyenZIcon = ({ className = "w-6 h-6", textSize = "text-xl" }) => (
  <div className={`${className} flex items-center justify-center font-extrabold ${textSize} font-mono`}>
    <span className="text-orange-400">T</span>
    <span className="text-green-400">r</span>
    <span className="text-blue-400">u</span>
    <span className="text-purple-400">y</span>
    <span className="text-red-400">ệ</span>
    <span className="text-emerald-400">n</span>
    <span className="text-cyan-400">Z</span>
  </div>
)

// Custom TinyChess Icon Component
const TinyChessIcon = ({ className = "w-6 h-6", textSize = "text-xl" }) => (
  <div className={`${className} flex items-center justify-center font-extrabold ${textSize} font-mono`}>
    <span className="text-purple-400">T</span>
    <span className="text-pink-400">i</span>
    <span className="text-blue-400">n</span>
    <span className="text-cyan-400">y</span>
    <span className="text-indigo-400">C</span>
    <span className="text-violet-400">h</span>
    <span className="text-fuchsia-400">e</span>
    <span className="text-rose-400">s</span>
    <span className="text-purple-400">s</span>
  </div>
)

// Custom StoryCrawler Icon Component
const StoryCrawlerIcon = ({ className = "w-6 h-6", textSize = "text-xl" }) => (
  <div className={`${className} flex items-center justify-center font-extrabold ${textSize} font-mono`}>
    <span className="text-green-400">S</span>
    <span className="text-emerald-400">t</span>
    <span className="text-lime-400">o</span>
    <span className="text-teal-400">r</span>
    <span className="text-cyan-400">y</span>
    <span className="text-green-500">C</span>
    <span className="text-emerald-500">r</span>
    <span className="text-lime-500">a</span>
    <span className="text-teal-500">w</span>
    <span className="text-cyan-500">l</span>
    <span className="text-green-400">e</span>
    <span className="text-emerald-400">r</span>
  </div>
)

// Custom BankingApp Icon Component
const BankingAppIcon = ({ className = "w-6 h-6", textSize = "text-xl" }) => (
  <div className={`${className} flex items-center justify-center font-extrabold ${textSize} font-mono`}>
    <span className="text-orange-400">B</span>
    <span className="text-amber-400">a</span>
    <span className="text-yellow-400">n</span>
    <span className="text-orange-500">k</span>
    <span className="text-red-400">i</span>
    <span className="text-rose-400">n</span>
    <span className="text-orange-400">g</span>
    <span className="text-amber-500">A</span>
    <span className="text-yellow-500">p</span>
    <span className="text-red-500">p</span>
  </div>
)

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      title: t.projects.projectList.webrtc.title,
      description: t.projects.projectList.webrtc.description,
      image: '/images/truyenZ.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Responsive Design'],
      github: '#',
      demo: 'https://www.youtube.com/watch?v=XbJqy5R20GI',
      icon: TruyenZIcon,
      color: 'from-blue-500 to-cyan-500',
      size: 'large' // Featured project
    },
    {
      title: t.projects.projectList.ml.title,
      description: t.projects.projectList.ml.description,
      image: 'https://www.youtube.com/embed/Yfp6Zq55slg?autoplay=1&mute=1&loop=1&playlist=Yfp6Zq55slg&controls=1&modestbranding=1&rel=0',
      tags: ['C#', 'Unity', '3D Graphics', 'AI', 'Cross-Platform'],
      github: '#',
      demo: 'https://youtu.be/Yfp6Zq55slg',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      size: 'medium'
    },
    {
      title: t.projects.projectList.microservices.title,
      description: t.projects.projectList.microservices.description,
      image: '/images/crawler.jpg',
      tags: ['Python', 'Puppeteer', 'Cheerio', 'MongoDB', 'API Integration'],
      github: '#',
      demo: 'https://www.youtube.com/watch?v=Kd5_8eiA2Zo',
      icon: StoryCrawlerIcon,
      color: 'from-green-500 to-emerald-500',
      size: 'medium'
    },
    {
      title: t.projects.projectList.desktop.title,
      description: t.projects.projectList.desktop.description,
      image: '/images/bankingapp.jpg',
      tags: ['Android', 'Java/Kotlin', 'Firebase', 'QR Payment', 'Biometric'],
      github: '#',
      demo: 'https://drive.google.com/drive/my-drive?hl=vi',
      icon: BankingAppIcon,
      color: 'from-orange-500 to-red-500',
      size: 'large' // Featured project
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-black/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="w-4 h-4 text-black" />
            </motion.div>
            <span className="text-xs font-mono text-black uppercase tracking-wider">
              {language === 'en' ? 'Portfolio Showcase' : 'Danh Mục Dự Án'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-gray-600">&gt;</span> {t.projects.title}{' '}
            <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-black mx-auto rounded-full"
          />
        </motion.div>

        {/* Bento Grid Layout - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon
            const isLarge = project.size === 'large'
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`group relative ${
                  isLarge ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <div className="relative h-full min-h-[500px] glass-card rounded-3xl overflow-hidden border border-black/10 hover:border-black/30 transition-all duration-700 hover:shadow-2xl">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-black/20 rounded-tl-3xl z-10"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-black/20 rounded-br-3xl z-10"></div>

                  {/* Project Number - Floating */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    className="absolute top-6 right-6 z-20"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-black blur-xl opacity-50"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center font-mono font-bold text-2xl shadow-2xl border-2 border-white/20">
                        0{index + 1}
                      </div>
                    </div>
                  </motion.div>

                  {/* Image/Video Section with Parallax Effect */}
                  <div className="relative h-64 overflow-hidden">
                    {project.image.includes('youtube.com/embed') ? (
                      <iframe
                        src={project.image}
                        title={project.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                    
                    {/* Hover Overlay with Icon */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ProjectIcon className="w-20 h-20" textSize="text-4xl" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 relative">
                    {/* Title with Underline Animation */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 font-mono group-hover:text-gray-800 transition-colors">
                        {project.title}
                      </h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                        className="h-0.5 bg-gradient-to-r from-black via-gray-600 to-transparent"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6 min-h-[60px]">
                      {project.description}
                    </p>

                    {/* Tags with Stagger Animation */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.6 + (tagIndex * 0.05) }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 text-xs font-mono text-black bg-black/5 rounded-xl border border-black/10 hover:border-black/30 hover:bg-black/10 transition-all cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons with Magnetic Effect */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-mono text-black border-2 border-black/20 rounded-2xl hover:bg-black hover:text-white hover:border-black transition-all duration-300 group/btn"
                      >
                        <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                        <span className="font-semibold">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-mono bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl group/btn"
                      >
                        <span className="font-semibold">Demo</span>
                        <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Decorative Dots Pattern */}
                  <div className="absolute bottom-4 left-4 flex gap-1 opacity-20">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.8 + (i * 0.05) }}
                        className="w-1.5 h-1.5 rounded-full bg-black"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Button with Pulse Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/qthanh2005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-mono font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" />
            <span className="relative z-10">{t.projects.viewAllGithub}</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="relative z-10"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
