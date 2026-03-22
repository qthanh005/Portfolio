import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, MapPin, Send, MessageSquare, MessageCircle, Hash } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const contacts = [
    {
      name: 'Email',
      value: 'lequangthanhh05@gmail.com',
      link: 'mailto:lequangthanhh05@gmail.com',
      icon: Mail,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'GitHub',
      value: 'github.com/qthanh2005',
      link: 'https://github.com/qthanh2005',
      icon: Github,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/lê-quang-thành-8664b3331',
      link: 'https://www.linkedin.com/in/l%C3%AA-quang-th%C3%A0nh-8664b3331/',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800'
    }
  ]

  const additionalContacts = [
    {
      name: t.contact.social.telegram,
      value: '@lequangthanh',
      link: 'https://t.me/lequangthanh',
      icon: Send,
      color: 'text-blue-400'
    },
    {
      name: t.contact.social.discord,
      value: 'lequangthanh#1234',
      icon: MessageCircle,
      color: 'text-indigo-400'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center font-mono"
        >
          <span className="text-gray-400">&gt;</span> {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-12 text-center max-w-2xl mx-auto"
        >
          {t.contact.description}
        </motion.p>

        {/* Main Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${contact.color} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors font-mono text-center">
                  {contact.name}
                </h3>
                <p className="text-gray-400 text-sm break-all text-center">{contact.value}</p>
              </motion.a>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold font-mono text-primary">{t.contact.form.sendMessage}</h3>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm font-mono mb-2">{t.contact.form.name}</label>
                <input
                  type="text"
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full px-4 py-3 glass-card rounded-lg focus:border-primary focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-mono mb-2">{t.contact.form.email}</label>
                <input
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full px-4 py-3 glass-card rounded-lg focus:border-primary focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-mono mb-2">{t.contact.form.subject}</label>
                <input
                  type="text"
                  placeholder={t.contact.form.subjectPlaceholder}
                  className="w-full px-4 py-3 glass-card rounded-lg focus:border-primary focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-mono mb-2">{t.contact.form.message}</label>
                <textarea
                  placeholder={t.contact.form.messagePlaceholder}
                  rows="5"
                  className="w-full px-4 py-3 glass-card rounded-lg focus:border-primary focus:outline-none transition-colors resize-none text-white placeholder-gray-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 font-mono flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t.contact.form.send}
              </button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Quick Contact Info */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold font-mono text-primary mb-6">{t.contact.info.title}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono">{t.contact.info.email}</p>
                    <p className="text-gray-300 text-sm">lequangthanhh05@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono">{t.contact.info.phone}</p>
                    <p className="text-gray-300 text-sm">+84 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono">{t.contact.info.location}</p>
                    <p className="text-gray-300 text-sm">{t.contact.info.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-xl font-semibold font-mono text-primary mb-6">{t.contact.social.title}</h3>
              <div className="space-y-3">
                {additionalContacts.map((contact, index) => {
                  const ContactIcon = contact.icon
                  return (
                    <motion.a
                      key={contact.name}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-3 p-3 glass-card rounded-lg hover:border-primary transition-all duration-300 group"
                    >
                      <ContactIcon className={`w-5 h-5 ${contact.color} group-hover:scale-110 transition-transform`} />
                      <div className="flex-1">
                        <p className="text-gray-300 text-sm group-hover:text-primary transition-colors">{contact.name}</p>
                        <p className="text-gray-500 text-xs font-mono">{contact.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="text-primary font-mono font-semibold">{t.contact.availability.title}</h4>
              </div>
              <p className="text-gray-400 text-sm">
                {t.contact.availability.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
