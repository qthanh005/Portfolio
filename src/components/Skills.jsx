import { motion } from 'framer-motion'
import {
  Code2, Database, Cloud, Cpu, Network, Brain,
  Server, Terminal, Zap, Sparkles, FileCode, Palette, Coffee
} from 'lucide-react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiUnity,
  SiAndroid,
  SiKotlin,
  SiPuppeteer,
  SiVercel,
  SiPython
} from 'react-icons/si'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const Skills = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const featuredTechs = [
    // Frontend
    { name: 'React', icon: SiReact, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', level: 85, gradientColor: 'from-cyan-500 to-blue-500', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', bgColor: 'bg-yellow-600/10', level: 90, gradientColor: 'from-yellow-600 to-yellow-400', category: 'Frontend' },
    { name: 'HTML5', icon: FileCode, color: 'text-orange-500', bgColor: 'bg-orange-500/10', level: 90, gradientColor: 'from-orange-500 to-red-500', category: 'Frontend' },
    { name: 'CSS3', icon: Palette, color: 'text-blue-400', bgColor: 'bg-blue-500/10', level: 85, gradientColor: 'from-blue-500 to-cyan-500', category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', bgColor: 'bg-green-500/10', level: 85, gradientColor: 'from-green-500 to-emerald-500', category: 'Backend' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-300', bgColor: 'bg-gray-500/10', level: 85, gradientColor: 'from-gray-500 to-gray-600', category: 'Backend' },

    // Database
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', bgColor: 'bg-green-600/10', level: 85, gradientColor: 'from-green-600 to-green-400', category: 'Database' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', bgColor: 'bg-blue-500/10', level: 85, gradientColor: 'from-blue-500 to-cyan-500', category: 'Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300', bgColor: 'bg-blue-400/10', level: 80, gradientColor: 'from-blue-400 to-blue-600', category: 'Database' },

    // Mobile & Game
    { name: 'Android', icon: SiAndroid, color: 'text-green-400', bgColor: 'bg-green-500/10', level: 80, gradientColor: 'from-green-500 to-lime-500', category: 'Mobile' },
    { name: 'Java', icon: Coffee, color: 'text-red-500', bgColor: 'bg-red-500/10', level: 85, gradientColor: 'from-red-500 to-orange-500', category: 'Mobile' },
    { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-400', bgColor: 'bg-purple-500/10', level: 75, gradientColor: 'from-purple-500 to-indigo-500', category: 'Mobile' },
    { name: 'Unity', icon: SiUnity, color: 'text-gray-300', bgColor: 'bg-gray-500/10', level: 75, gradientColor: 'from-gray-500 to-gray-700', category: 'Game' },
    { name: 'C#', icon: Code2, color: 'text-purple-500', bgColor: 'bg-purple-500/10', level: 80, gradientColor: 'from-purple-500 to-indigo-500', category: 'Game' },

    // Automation & Tools
    { name: 'Puppeteer', icon: SiPuppeteer, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', level: 80, gradientColor: 'from-cyan-500 to-teal-500', category: 'Automation' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', level: 75, gradientColor: 'from-yellow-500 to-blue-500', category: 'Automation' }
  ]

  const tools = [
    { name: 'Git', icon: SiGit },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Docker', icon: SiDocker },
    { name: 'RESTful APIs', icon: Network },
    { name: 'Unity', icon: SiUnity }
  ]

  const additionalSkills = t.skills.additionalSkills

  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center font-mono"
        >
          <span className="text-gray-600">&gt;</span> {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-center mb-12 max-w-2xl mx-auto"
        >
          {language === 'en'
            ? 'Proficient in modern technologies and frameworks for building scalable applications'
            : 'Thành thạo các công nghệ và framework hiện đại để xây dựng ứng dụng có khả năng mở rộng'}
        </motion.p>

        {/* Featured Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-black" />
            <h3 className="text-xl font-semibold text-black font-mono">
              {language === 'en' ? 'Core Technologies' : 'Công Nghệ Chính'}
            </h3>
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredTechs.map((tech, index) => {
              const TechIcon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`relative group glass-card p-6 rounded-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer`}
                >
                  {/* Background glow on hover */}
                  <div className={`absolute inset-0 ${tech.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-primary/5 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="relative">
                      <div className={`absolute inset-0 ${tech.bgColor} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
                      {TechIcon ? (
                        <TechIcon className={`w-12 h-12 ${tech.color} group-hover:scale-110 transition-transform duration-300 relative z-10`} />
                      ) : (
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.gradientColor} flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                          <Code2 className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    <span className="text-gray-700 font-mono text-sm group-hover:text-black transition-colors font-medium text-center">
                      {tech.name}
                    </span>

                    {/* Progress bar - only show on hover */}
                    <div className="w-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-black font-mono">Level</span>
                        <span className="text-xs text-black font-mono font-bold">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800/50 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${tech.gradientColor} rounded-full shadow-sm`}
                        >
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 2
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-xl relative overflow-hidden group"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-6 h-6 text-black" />
              </motion.div>
              <h3 className="text-2xl font-bold gradient-text font-mono">
                {t.skills.toolsTitle}
              </h3>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Terminal className="w-6 h-6 text-black" />
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => {
                const ToolIcon = tool.icon
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="relative group/tool"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/tool:opacity-20 blur-xl transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-3 px-6 py-3 glass-card rounded-xl hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                      <ToolIcon className="w-6 h-6 text-black group-hover/tool:text-black transition-colors duration-300" />
                      <span className="text-black font-mono font-medium group-hover/tool:text-black transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Brain className="w-5 h-5 text-black" />
            <h3 className="text-xl font-semibold text-black font-mono">
              {language === 'en' ? 'Additional Expertise' : 'Chuyên Môn Bổ Sung'}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5 rounded-xl hover:border-secondary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Cpu className="w-5 h-5 text-black group-hover:text-black transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-black font-mono font-semibold mb-2 group-hover:text-gray-800 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
