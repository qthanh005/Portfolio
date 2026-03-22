import { motion } from 'framer-motion'
import {
  Code2, Database, Cloud, Cpu, Network, Brain,
  Server, Terminal, Zap, Sparkles
} from 'lucide-react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiLinux,
  SiPython,
  SiCsharp,
  SiJava,
  SiAmazonaws,
  SiGraphql
} from 'react-icons/si'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const Skills = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const skillCategories = [
    {
      name: t.skills.categories.backend,
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      skills: [
        { name: 'Java', icon: SiJava, level: 90 },
        { name: 'C#/.NET', icon: SiCsharp, level: 85 },
        { name: 'Node.js', icon: SiNodedotjs, level: 80 },
        { name: 'Python', icon: SiPython, level: 75 },
      ]
    },
    {
      name: t.skills.categories.frontend,
      icon: Code2,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      skills: [
        { name: 'React', icon: SiReact, level: 85 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'JavaScript', icon: SiJavascript, level: 90 },
      ]
    },
    {
      name: t.skills.categories.databases,
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
        { name: 'MongoDB', icon: SiMongodb, level: 80 },
        { name: 'MySQL', icon: SiMysql, level: 80 },
        { name: 'Redis', icon: SiRedis, level: 75 },
      ]
    },
    {
      name: t.skills.categories.realtime,
      icon: Network,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      skills: [
        { name: 'WebSocket', level: 85 },
        { name: 'WebRTC', level: 80 },
        { name: 'Socket.IO', level: 85 },
        { name: 'SignalR', level: 75 },
      ]
    },
    {
      name: t.skills.categories.devops,
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      skills: [
        { name: 'Docker', icon: SiDocker, level: 85 },
        { name: 'Kubernetes', icon: SiKubernetes, level: 75 },
        { name: 'AWS', icon: SiAmazonaws, level: 70 },
        { name: 'CI/CD', level: 80 },
      ]
    },
    {
      name: t.skills.categories.ml,
      icon: Brain,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      skills: [
        { name: 'Scikit-learn', level: 75 },
        { name: 'TensorFlow', level: 70 },
        { name: 'Data Analysis', level: 80 },
        { name: 'Model Deployment', level: 75 },
      ]
    }
  ]

  const featuredTechs = [
    { name: 'React', icon: SiReact, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', bgColor: 'bg-green-500/10' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500', bgColor: 'bg-blue-600/10' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300', bgColor: 'bg-blue-400/10' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', bgColor: 'bg-green-600/10' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-400', bgColor: 'bg-green-500/10' },
    { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-400', bgColor: 'bg-orange-500/10' },
  ]

  const tools = [
    { name: 'Git', icon: SiGit },
    { name: 'Linux', icon: SiLinux },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'Docker', icon: SiDocker },
    { name: 'React', icon: SiReact },
    { name: 'GraphQL', icon: SiGraphql },
  ]

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
          <span className="text-gray-400">&gt;</span> {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          {language === 'en'
            ? 'Proficient in modern technologies and frameworks for building scalable applications'
            : 'Thành thạo các công nghệ và framework hiện đại để xây dựng ứng dụng có khả năng mở rộng'}
        </motion.p>

        {/* Featured Technologies Badge Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-primary font-mono">
              {language === 'en' ? 'Core Technologies' : 'Công Nghệ Chính'}
            </h3>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  className={`relative group glass-card p-6 rounded-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 ${tech.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-primary/10 transition-all duration-500"></div>

                  <div className="relative flex flex-col items-center gap-3">
                    <div className="relative">
                      <div className={`absolute inset-0 ${tech.bgColor} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
                      <TechIcon className={`w-12 h-12 ${tech.color} group-hover:scale-110 transition-transform duration-300 relative z-10`} />
                    </div>
                    <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative glass-card p-6 rounded-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                {/* Animated border gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Header */}
                <div className="relative flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/40">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold gradient-text font-mono">
                    {category.name}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="relative space-y-5">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = skill.icon
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            {SkillIcon && (
                              <SkillIcon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                            )}
                            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          </div>
                          <motion.span
                            className="text-primary font-mono text-xs font-bold px-2 py-1 bg-primary/10 rounded"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="relative w-full bg-gray-800/50 h-2 rounded-full overflow-hidden">
                          {/* Background glow */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 blur-sm`}></div>

                          {/* Progress bar */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: catIndex * 0.1 + index * 0.05,
                              ease: "easeOut"
                            }}
                            className={`relative h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                            style={{
                              boxShadow: `0 0 10px rgba(var(--primary), 0.5)`
                            }}
                          >
                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ['-100%', '100%']
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

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
                <Zap className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold gradient-text font-mono">
                {t.skills.toolsTitle}
              </h3>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Terminal className="w-6 h-6 text-secondary" />
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
                      <ToolIcon className="w-6 h-6 text-gray-400 group-hover/tool:text-primary transition-colors duration-300" />
                      <span className="text-gray-300 font-mono font-medium group-hover/tool:text-white transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
