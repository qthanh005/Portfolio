import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, MapPin, Send, MessageSquare, Globe, Facebook, CheckCircle, XCircle, Shield, MessageCircle, Sparkles, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const formRef = useRef()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const badWords = [
    'fuck', 'shit', 'bitch', 'damn', 'ass', 'bastard', 'crap', 'piss', 'hell',
    'stupid', 'idiot', 'moron', 'dumb', 'retard', 'gay', 'whore', 'slut',
    'đụ', 'địt', 'đéo', 'đm', 'dmm', 'vcl', 'vl', 'cc', 'cặc', 'lồn', 'buồi',
    'đĩ', 'mẹ mày', 'con đĩ', 'thằng ngu', 'con chó', 'đồ ngu', 'câm mồm',
    'chó má', 'súc vật', 'đồ khốn', 'thằng khờ', 'con lợn', 'đồ chó'
  ]

  const checkRateLimit = () => {
    const now = Date.now()
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]')
    const recent = submissions.filter(time => now - time < 60 * 60 * 1000)
    if (recent.length >= 3) return false
    recent.push(now)
    localStorage.setItem('contact_submissions', JSON.stringify(recent))
    return true
  }

  const validateContent = (content) => {
    const lowerContent = content.toLowerCase()
    return !badWords.some(word => {
      const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
      return regex.test(lowerContent) || lowerContent.includes(word)
    })
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      if (!checkRateLimit()) {
        setStatus({
          type: 'error',
          message: language === 'vi'
            ? 'Bạn đã gửi quá nhiều tin nhắn. Vui lòng chờ 1 giờ trước khi gửi lại.'
            : 'Too many submissions. Please wait 1 hour before sending again.'
        })
        return
      }

      if (!validateEmail(formData.email)) {
        setStatus({
          type: 'error',
          message: language === 'vi'
            ? 'Email không hợp lệ. Vui lòng kiểm tra lại.'
            : 'Invalid email format. Please check again.'
        })
        return
      }

      const fieldsToCheck = [formData.name, formData.title, formData.message]
      for (let field of fieldsToCheck) {
        if (!validateContent(field)) {
          setStatus({
            type: 'error',
            message: language === 'vi'
              ? 'Nội dung chứa từ ngữ không phù hợp. Vui lòng sử dụng ngôn từ lịch sự.'
              : 'Content contains inappropriate language. Please use respectful words.'
          })
          return
        }
      }

      if (formData.message.length < 10) {
        setStatus({
          type: 'error',
          message: language === 'vi'
            ? 'Tin nhắn quá ngắn. Vui lòng viết ít nhất 10 ký tự.'
            : 'Message too short. Please write at least 10 characters.'
        })
        return
      }

      await emailjs.send(
        'service_k8q20dj',
        'template_8itrx29',
        formData,
        'gBG3j3tBcqtpFqn-l'
      )

      setStatus({
        type: 'success',
        message: language === 'vi'
          ? '✅ Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.'
          : '✅ Message sent successfully! I will respond as soon as possible.'
      })

      setFormData({ name: '', email: '', title: '', message: '' })
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)

    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: language === 'vi'
          ? 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.'
          : 'An error occurred while sending the message. Please try again or contact me directly via email.'
      })
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const contacts = [
    {
      name: 'Email',
      value: 'lequangthanhh05@gmail.com',
      link: 'mailto:lequangthanhh05@gmail.com',
      icon: Mail,
      gradient: 'from-black to-gray-700'
    },
    {
      name: 'GitHub',
      value: 'github.com/qthanh2005',
      link: 'https://github.com/qthanh2005',
      icon: Github,
      gradient: 'from-gray-800 to-black'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/lê-quang-thành',
      link: 'https://www.linkedin.com/in/l%C3%AA-quang-th%C3%A0nh-8664b3331/',
      icon: Linkedin,
      gradient: 'from-gray-700 to-gray-900'
    }
  ]

  const additionalContacts = [
    {
      name: t.contact.social.facebook,
      value: 'Lê Quang Thành',
      link: 'https://www.facebook.com/le.quang.thanh.930002/',
      icon: Facebook
    },
    {
      name: t.contact.social.zalo,
      value: '0961755254',
      icon: MessageCircle
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gray-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <Sparkles className="w-4 h-4 text-black" />
            <span className="text-xs font-mono text-black uppercase tracking-wider">
              {language === 'en' ? 'Get In Touch' : 'Liên Hệ'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-gray-600">&gt;</span> {t.contact.title}{' '}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-black mx-auto rounded-full mb-6"
          />

          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative glass-card p-8 rounded-3xl border border-black/10 hover:border-black/30 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-black" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-black mb-3 font-mono text-center">
                    {contact.name}
                  </h3>
                  <p className="text-gray-700 text-sm text-center break-all">
                    {contact.value}
                  </p>

                  <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-black rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: 32 }}
                  />
                </div>
              </motion.a>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-black/10 hover:border-black/20 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="w-5 h-5 text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-mono text-black">
                    {t.contact.info.title}
                  </h3>
                </div>

                <div className="grid gap-6">
                  {[
                    { 
                      icon: Mail, 
                      label: t.contact.info.email, 
                      value: 'lequangthanhh05@gmail.com',
                      link: 'mailto:lequangthanhh05@gmail.com',
                      gradient: 'from-black to-gray-700'
                    },
                    { 
                      icon: Phone, 
                      label: t.contact.info.phone, 
                      value: '+84 961755254',
                      link: 'tel:+84961755254',
                      gradient: 'from-gray-800 to-black'
                    },
                    { 
                      icon: MapPin, 
                      label: t.contact.info.location, 
                      value: t.contact.info.locationValue,
                      gradient: 'from-gray-700 to-gray-900'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + (index * 0.1) }}
                      whileHover={{ x: 5 }}
                      className="group/item"
                    >

                      {item.link ? (
                        <a
                          href={item.link}
                          className="flex items-start gap-4 p-5 glass-card rounded-2xl border border-black/10 hover:border-black/30 transition-all duration-300"
                        >
                          <motion.div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <item.icon className="w-7 h-7 text-black" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-600 text-xs font-mono uppercase tracking-wider mb-1">
                              {item.label}
                            </p>
                            <p className="text-black text-base font-semibold break-all group-hover/item:text-gray-800 transition-colors">
                              {item.value}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-black opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0 mt-3" />
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-5 glass-card rounded-2xl border border-black/10">
                          <motion.div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <item.icon className="w-7 h-7 text-black" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-600 text-xs font-mono uppercase tracking-wider mb-1">
                              {item.label}
                            </p>
                            <p className="text-black text-base font-semibold break-all">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-black/10 hover:border-black/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-black" />
                <h3 className="text-xl font-bold font-mono text-black">
                  {t.contact.social.title}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {additionalContacts.map((contact, index) => {
                  const ContactIcon = contact.icon
                  return (
                    <motion.a
                      key={contact.name}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-4 glass-card rounded-2xl border border-black/10 hover:border-black/30 transition-all duration-300 group/social"
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ContactIcon className="w-6 h-6 text-black" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black text-sm font-semibold">{contact.name}</p>
                        <p className="text-gray-600 text-xs font-mono mt-0.5 truncate">{contact.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-3xl border-l-4 border-green-500 bg-green-50/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h4 className="text-black font-mono font-bold text-lg">{t.contact.availability.title}</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed pl-6">
                {t.contact.availability.description}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6 rounded-3xl border border-black/10 hover:border-black/20 transition-all duration-500 sticky top-24 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 border-4 border-black rounded-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-4 border-black rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-black rotate-45" />
              </div>

              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-black/10 rounded-bl-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <MessageSquare className="w-6 h-6 text-black" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold font-mono text-black">
                        {t.contact.form.sendMessage}
                      </h3>
                      <p className="text-gray-600 text-xs">
                        {language === 'en' ? "Quick message" : 'Tin nhắn nhanh'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-200 w-fit">
                    <Shield className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-green-700 font-mono">
                      {language === 'vi' ? 'Bảo mật' : 'Secure'}
                    </span>
                  </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: t.contact.form.name, placeholder: t.contact.form.namePlaceholder, type: 'text', name: 'name' },
                    { label: t.contact.form.email, placeholder: t.contact.form.emailPlaceholder, type: 'email', name: 'email' },
                    { label: t.contact.form.subject, placeholder: t.contact.form.subjectPlaceholder, type: 'text', name: 'title' }
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-black text-xs font-mono mb-1.5 font-medium">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 glass-card rounded-xl border-2 border-black/10 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-300 text-black text-sm placeholder-gray-500 hover:border-black/20"
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-black text-xs font-mono mb-1.5 font-medium">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      rows="4"
                      className="w-full px-4 py-3 glass-card rounded-xl border-2 border-black/10 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-300 resize-none text-black text-sm placeholder-gray-500 hover:border-black/20"
                      required
                    ></textarea>
                  </div>

                  <AnimatePresence>
                    {status.message && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`p-3 rounded-xl border ${
                          status.type === 'success'
                            ? 'bg-green-50 border-green-200 text-green-700'
                            : 'bg-red-50 border-red-200 text-red-700'
                        } flex items-center gap-2`}
                      >
                        {status.type === 'success' ? (
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 flex-shrink-0" />
                        )}
                        <p className="text-xs font-medium">{status.message}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200">
                    <p className="text-xs text-blue-700 font-mono leading-relaxed">
                      {language === 'vi'
                        ? '⚡ Max 3 tin/giờ • Ngôn từ lịch sự'
                        : '⚡ Max 3 msg/hr • Be respectful'
                      }
                    </p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                    className={`relative w-full py-4 bg-black text-white rounded-2xl font-mono font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group/btn ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {!isLoading && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="text-sm">{language === 'vi' ? 'Đang gửi...' : 'Sending...'}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>{t.contact.form.send}</span>
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
