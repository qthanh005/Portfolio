import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2, Video, Brain, Layers } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      title: t.projects.projectList.webrtc.title,
      description: t.projects.projectList.webrtc.description,
      image: '/images/projects/webrtc-conference.jpg',
      tags: ['WebRTC', 'Socket.IO', 'Node.js', 'React', 'WebSocket'],
      github: '#',
      demo: '#',
      icon: Video,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: t.projects.projectList.ml.title,
      description: t.projects.projectList.ml.description,
      image: '/images/projects/ml-engine.jpg',
      tags: ['Python', 'Scikit-learn', 'Flask', 'React', 'Docker'],
      github: '#',
      demo: '#',
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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center font-mono"
        >
          <span className="text-gray-400">&gt;</span> {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-500 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div
                    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/30 to-primary/30"
                    style={{ display: 'none' }}
                  >
                    <ProjectIcon className="w-20 h-20 text-primary opacity-50" />
                  </div>

                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  {/* Status indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 glass-card px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300 font-mono">{t.projects.active}</span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors font-mono">
                      {project.title}
                    </h3>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} opacity-20`}>
                      <ProjectIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 text-primary rounded-full border border-primary/30 font-mono`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 text-center py-2.5 glass-card text-primary rounded hover:border-primary transition-all duration-300 text-sm font-mono flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      {t.projects.sourceCode}
                    </a>
                    <a
                      href={project.demo}
                      className={`flex-1 text-center py-2.5 bg-gradient-to-r ${project.color} text-white rounded hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-sm font-mono flex items-center justify-center gap-2`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.liveDemo}
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/qthanh2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 glass-card text-primary font-semibold rounded-lg hover:border-primary transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            {t.projects.viewAllGithub}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
