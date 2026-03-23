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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: t.projects.projectList.ml.title,
      description: t.projects.projectList.ml.description,
      image: 'https://www.youtube.com/embed/Yfp6Zq55slg?autoplay=1&mute=1&loop=1&playlist=Yfp6Zq55slg&controls=1&modestbranding=1&rel=0',
      tags: ['C#', 'Unity', '3D Graphics', 'AI', 'Cross-Platform'],
      github: '#',
      demo: 'https://youtu.be/Yfp6Zq55slg',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: t.projects.projectList.microservices.title,
      description: t.projects.projectList.microservices.description,
      image: '/images/projects/microservices.jpg',
      tags: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Kubernetes'],
      github: '#',
      demo: '#',
      icon: Layers,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: t.projects.projectList.desktop.title,
      description: t.projects.projectList.desktop.description,
      image: '/images/projects/desktop-app.jpg',
      tags: ['C#', 'WPF', '.NET Core', 'Entity Framework', 'SQL Server'],
      github: '#',
      demo: '#',
      icon: Code2,
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 font-mono">
            <span className="text-gray-400">&gt;</span> {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-3 lg:gap-4">
          {/* Project 2 - TinyChess Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="glass-card rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 h-full group flex flex-col">
              {/* Video Section */}
              <div className="relative flex-1 min-h-[350px] lg:min-h-[450px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                <iframe
                  src={projects[1].image}
                  title={projects[1].title}
                  className="w-full h-full border-0 group-hover:scale-105 transition-transform duration-700"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                  style={{ display: 'none' }}
                >
                  <TinyChessIcon className="w-20 h-20" textSize="text-3xl" />
                </div>

                {/* Top Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-fit p-2 rounded-lg bg-black/30 backdrop-blur-sm">
                    <TinyChessIcon className="w-8 h-8" textSize="text-sm" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-2 font-mono">
                      {projects[1].title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {projects[1].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {projects[1].tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono text-purple-400 bg-purple-500/20 rounded border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={projects[1].github}
                        className="flex items-center gap-2 px-3 py-2 text-sm font-mono text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={projects[1].demo}
                        className="flex items-center gap-2 px-3 py-2 text-sm font-mono bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <Youtube className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 1 - TruyenZ Comic Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="glass-card rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 h-full group flex flex-col">
              {/* Image Section */}
              <div
                className="relative flex-1 min-h-[350px] lg:min-h-[450px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden"
                style={{
                  backgroundImage: `url(${projects[0].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 30%',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Fallback for when image fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center opacity-0 group-[.image-error]:opacity-100">
                  <TruyenZIcon className="w-20 h-20" textSize="text-3xl" />
                </div>

                {/* Top Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-fit p-2 rounded-lg bg-black/30 backdrop-blur-sm">
                    <TruyenZIcon className="w-6 h-6" textSize="text-sm" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-4">
                <h3 className="text-lg font-bold text-white mb-2 font-mono">
                  {projects[0].title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[0].tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono text-cyan-400 bg-cyan-500/20 rounded border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={projects[0].github}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-mono text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={projects[0].demo}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-mono bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Youtube className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 - Square Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-6 lg:col-span-4"
          >
            <div className="glass-card rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 h-full group">
              <div className="relative aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 overflow-hidden">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20"
                  style={{ display: 'none' }}
                >
                  <Layers className="w-16 h-16 text-primary/50" />
                </div>

                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>

                {/* Icon */}
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                  <Layers className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-base font-bold text-white mb-2 font-mono">
                    {projects[2].title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={projects[2].github}
                      className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-mono text-white border border-white/30 rounded hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                    <a
                      href={projects[2].demo}
                      className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-mono bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 4 - Horizontal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-6 lg:col-span-8"
          >
            <div className="glass-card rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 h-full group">
              <div className="flex flex-col sm:flex-row aspect-[3/2] sm:aspect-[2/1] overflow-hidden">
                {/* Image */}
                <div className="relative sm:w-2/5 h-32 sm:h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 overflow-hidden">
                  <img
                    src={projects[3].image}
                    alt={projects[3].title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-red-500/20"
                    style={{ display: 'none' }}
                  >
                    <Code2 className="w-16 h-16 text-primary/50" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between bg-gradient-to-r from-gray-900/50 to-gray-800/50">
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex-shrink-0">
                        <Code2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white mb-2 font-mono">
                          {projects[3].title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {projects[3].tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-mono text-orange-400 bg-orange-500/20 rounded border border-orange-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={projects[3].github}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a
                      href={projects[3].demo}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-mono bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 mb-8"
        >
          <a
            href="https://github.com/qthanh2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-primary border-2 border-primary/30 rounded-lg hover:bg-primary/10 transition-colors font-mono group text-sm"
          >
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            {t.projects.viewAllGithub}
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-primary"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
