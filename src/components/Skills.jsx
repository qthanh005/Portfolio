import { motion } from 'framer-motion'
import {
  Code2, Database, Cloud, Cpu, Network, Brain,
  Server, Terminal, Zap, Sparkles, FileCode, Palette, Coffee,
  Globe, Workflow, Boxes, FileSpreadsheet, Briefcase
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
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'Vercel', icon: SiVercel, color: 'text-black' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'RESTful APIs', icon: Network, color: 'text-green-600' },
    { name: 'Unity', icon: SiUnity, color: 'text-gray-700' }
  ]

  const additionalSkills = t.skills.additionalSkills

  // Icons for each additional skill
  const skillIcons = [
    { icon: Globe },      // Web Crawling
    { icon: Workflow },   // Automation
    { icon: Boxes },      // System Design
    { icon: FileSpreadsheet }, // Data Processing
    { icon: Briefcase }   // Business Analysis
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

        {/* Infinite Scrolling Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16 overflow-hidden"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-black" />
            <h3 className="text-xl font-semibold text-black font-mono">
              {language === 'en' ? 'Core Technologies' : 'Công Nghệ Chính'}
            </h3>
            <Sparkles className="w-5 h-5 text-black" />
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling content */}
            <div className="flex gap-6 animate-scroll">
              {/* First set of technologies */}
              {featuredTechs.map((tech, index) => {
                const TechIcon = tech.icon
                return (
                  <div
                    key={`tech-1-${index}`}
                    className="flex-shrink-0 glass-card p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl group cursor-pointer min-w-[180px]"
                  >
                    <div className="flex flex-col items-center gap-3">
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
                      <div className="w-full bg-black/5 h-1 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${tech.gradientColor} rounded-full`}
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
              {/* Duplicate set for seamless loop */}
              {featuredTechs.map((tech, index) => {
                const TechIcon = tech.icon
                return (
                  <div
                    key={`tech-2-${index}`}
                    className="flex-shrink-0 glass-card p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl group cursor-pointer min-w-[180px]"
                  >
                    <div className="flex flex-col items-center gap-3">
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
                      <div className="w-full bg-black/5 h-1 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${tech.gradientColor} rounded-full`}
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Add CSS for animation */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </motion.div>

        {/* Tools & Technologies - Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 overflow-hidden"
        >
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

          {/* Infinite Scroll Container */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling content - Reverse direction */}
            <div className="flex gap-4 animate-scroll-reverse">
              {/* First set of tools */}
              {tools.map((tool, index) => {
                const ToolIcon = tool.icon
                return (
                  <div
                    key={`tool-1-${index}`}
                    className="flex-shrink-0 glass-card px-6 py-4 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-[140px]">
                      <ToolIcon className={`w-8 h-8 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-black font-mono font-medium whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                )
              })}
              {/* Duplicate set for seamless loop */}
              {tools.map((tool, index) => {
                const ToolIcon = tool.icon
                return (
                  <div
                    key={`tool-2-${index}`}
                    className="flex-shrink-0 glass-card px-6 py-4 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-[140px]">
                      <ToolIcon className={`w-8 h-8 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-black font-mono font-medium whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                )
              })}
              {/* Triple set for smoother loop */}
              {tools.map((tool, index) => {
                const ToolIcon = tool.icon
                return (
                  <div
                    key={`tool-3-${index}`}
                    className="flex-shrink-0 glass-card px-6 py-4 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-[140px]">
                      <ToolIcon className={`w-8 h-8 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-black font-mono font-medium whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                )
              })}
              {/* Fourth set for even smoother loop */}
              {tools.map((tool, index) => {
                const ToolIcon = tool.icon
                return (
                  <div
                    key={`tool-4-${index}`}
                    className="flex-shrink-0 glass-card px-6 py-4 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-[140px]">
                      <ToolIcon className={`w-8 h-8 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-black font-mono font-medium whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Add CSS for reverse animation */}
          <style jsx>{`
            @keyframes scroll-reverse {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }
            .animate-scroll-reverse {
              animation: scroll-reverse 25s linear infinite;
            }
            .animate-scroll-reverse:hover {
              animation-play-state: paused;
            }
          `}</style>
        </motion.div>

        {/* Additional Skills Section - Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 overflow-hidden"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Brain className="w-5 h-5 text-black" />
            <h3 className="text-xl font-semibold text-black font-mono">
              {language === 'en' ? 'Additional Expertise' : 'Chuyên Môn Bổ Sung'}
            </h3>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling content - Same direction as Core Technologies */}
            <div className="flex gap-4 animate-scroll-slow">
              {/* First set of skills */}
              {additionalSkills.map((skill, index) => {
                const SkillIcon = skillIcons[index]?.icon || Cpu
                return (
                  <div
                    key={`skill-1-${index}`}
                    className="flex-shrink-0 glass-card p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl group cursor-pointer min-w-[320px] max-w-[320px]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-black/10">
                          <SkillIcon className="w-5 h-5 text-black" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-black font-mono font-semibold mb-2 group-hover:text-gray-800 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
              {/* Duplicate set for seamless loop */}
              {additionalSkills.map((skill, index) => {
                const SkillIcon = skillIcons[index]?.icon || Cpu
                return (
                  <div
                    key={`skill-2-${index}`}
                    className="flex-shrink-0 glass-card p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-xl group cursor-pointer min-w-[320px] max-w-[320px]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-black/10">
                          <SkillIcon className="w-5 h-5 text-black" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-black font-mono font-semibold mb-2 group-hover:text-gray-800 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Add CSS for slower animation */}
          <style jsx>{`
            @keyframes scroll-slow {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-slow {
              animation: scroll-slow 40s linear infinite;
            }
            .animate-scroll-slow:hover {
              animation-play-state: paused;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
