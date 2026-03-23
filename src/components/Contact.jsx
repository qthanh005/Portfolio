import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, MapPin, Send, MessageSquare, MessageCircle, Star, Zap, Globe, Heart, Facebook, CheckCircle, XCircle, Shield } from 'lucide-react'
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

  // Security: Bad words filter
  const badWords = [
    // English
    'fuck', 'shit', 'bitch', 'damn', 'ass', 'bastard', 'crap', 'piss', 'hell',
    'stupid', 'idiot', 'moron', 'dumb', 'retard', 'gay', 'whore', 'slut',
    // Vietnamese
    'đụ', 'địt', 'đéo', 'đm', 'dmm', 'vcl', 'vl', 'cc', 'cặc', 'lồn', 'buồi',
    'đĩ', 'mẹ mày', 'con đĩ', 'thằng ngu', 'con chó', 'đồ ngu', 'câm mồm',
    'chó má', 'súc vật', 'đồ khốn', 'thằng khờ', 'con lợn', 'đồ chó'
  ]

  // Security: Rate limiting
  const checkRateLimit = () => {
    const now = Date.now()
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]')

    // Remove submissions older than 1 hour
    const recent = submissions.filter(time => now - time < 60 * 60 * 1000)

    // Allow maximum 3 submissions per hour
    if (recent.length >= 3) {
      return false
    }

    // Add current submission
    recent.push(now)
    localStorage.setItem('contact_submissions', JSON.stringify(recent))
    return true
  }

  // Security: Content validation
  const validateContent = (content) => {
    const lowerContent = content.toLowerCase()
    return !badWords.some(word => {
      // Check for exact word matches and variations with spaces/punctuation
      const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
      return regex.test(lowerContent) || lowerContent.includes(word)
    })
  }

  // Security: Email validation
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
      // Security checks
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

      // Check for inappropriate content
      const fieldsToCheck = [formData.name, formData.title, formData.message]
      for (let field of fieldsToCheck) {
        if (!validateContent(field)) {
          setStatus({
            type: 'error',
            message: language === 'vi'
              ? ' Nội dung chứa từ ngữ không phù hợp. Vui lòng sử dụng ngôn từ lịch sự.'
              : ' Content contains inappropriate language. Please use respectful words.'
          })
          return
        }
      }

      // Check minimum content length
      if (formData.message.length < 10) {
        setStatus({
          type: 'error',
          message: language === 'vi'
            ? 'Tin nhắn quá ngắn. Vui lòng viết ít nhất 10 ký tự.'
            : 'Message too short. Please write at least 10 characters.'
        })
        return
      }

      // Send email
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

      // Reset form
      setFormData({
        name: '',
        email: '',
        title: '',
        message: ''
      })

      // Clear status after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)

    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: language === 'vi'
          ? 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.'
          : 'An error occurred while sending the message. Please try again or contact me directly via email.'
      })

      // Clear error after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)
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
      color: 'from-blue-500 via-cyan-400 to-indigo-500',
      hoverColor: 'hover:shadow-blue-500/25',
      bgPattern: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10'
    },
    {
      name: 'GitHub',
      value: 'github.com/qthanh2005',
      link: 'https://github.com/qthanh2005',
      icon: Github,
      color: 'from-gray-600 via-gray-700 to-black',
      hoverColor: 'hover:shadow-gray-500/25',
      bgPattern: 'bg-gradient-to-br from-gray-600/10 to-black/10'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/lê-quang-thành',
      link: 'https://www.linkedin.com/in/l%C3%AA-quang-th%C3%A0nh-8664b3331/',
      icon: Linkedin,
      color: 'from-blue-600 via-blue-700 to-indigo-600',
      hoverColor: 'hover:shadow-blue-500/25',
      bgPattern: 'bg-gradient-to-br from-blue-600/10 to-indigo-600/10'
    }
  ]

  const additionalContacts = [
    {
      name: t.contact.social.facebook,
      value: 'Lê Quang Thành',
      link: 'https://www.facebook.com/le.quang.thanh.930002/',
      icon: Facebook,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      hoverBg: 'hover:bg-blue-500/20'
    },
    {
      name: t.contact.social.zalo,
      value: '0961755254',
      icon: MessageCircle,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      hoverBg: 'hover:bg-blue-400/20'
    }
  ]

  const floatingIcons = [
    { icon: Star, delay: 0, color: 'text-yellow-400' },
    { icon: Zap, delay: 0.5, color: 'text-cyan-400' },
    { icon: Globe, delay: 1, color: 'text-green-400' },
    { icon: Heart, delay: 1.5, color: 'text-pink-400' }
  ]

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute w-8 h-8 ${item.color} opacity-20`}
          style={{
            top: `${20 + (index * 15)}%`,
            right: `${10 + (index * 20)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          <item.icon className="w-full h-full" />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 font-mono"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <span className="text-gray-400">&gt;</span>{' '}
            <span className="inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
              {t.contact.title}
            </span>{' '}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            {t.contact.description}
          </motion.p>
        </motion.div>

        {/* Enhanced Contact Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative glass-card p-8 rounded-2xl border border-white/10 ${contact.hoverColor} hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${contact.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${contact.color} p-5 flex items-center justify-center shadow-lg`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-full h-full text-white drop-shadow-lg" />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors font-mono">
                      {contact.name}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base break-all group-hover:text-gray-300 transition-colors">
                      {contact.value}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: "2rem" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.a>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="glass-card p-10 lg:p-12 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group"
          >
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              {/* Form Header */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    animate={{
                      boxShadow: ["0 0 20px rgba(0, 242, 254, 0.3)", "0 0 40px rgba(0, 242, 254, 0.5)", "0 0 20px rgba(0, 242, 254, 0.3)"]
                    }}
                    style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
                  >
                    <MessageSquare className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold font-mono bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                      {t.contact.form.sendMessage}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 font-mono">Let's start a conversation </p>
                  </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />

                {/* Security Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 mt-4"
                >
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400 font-mono">
                    {language === 'vi' ? 'Được bảo vệ khỏi spam & nội dung độc hại' : 'Protected from spam & malicious content'}
                  </span>
                </motion.div>
              </motion.div>

              {/* Form Fields */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: t.contact.form.name, placeholder: t.contact.form.namePlaceholder, type: 'text', name: 'name' },
                  { label: t.contact.form.email, placeholder: t.contact.form.emailPlaceholder, type: 'email', name: 'email' },
                  { label: t.contact.form.subject, placeholder: t.contact.form.subjectPlaceholder, type: 'text', name: 'title' }
                ].map((field, index) => (
                  <motion.div
                    key={field.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="group/field"
                  >
                    <label className="block text-gray-300 text-sm font-mono mb-3 group-focus-within/field:text-primary transition-colors font-medium">
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full px-6 py-4 glass-card rounded-2xl border-2 border-white/5 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-white placeholder-gray-500 hover:border-white/10 hover:shadow-lg hover:shadow-primary/5 bg-white/5"
                        required
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within/field:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="group/field"
                >
                  <label className="block text-gray-300 text-sm font-mono mb-3 group-focus-within/field:text-primary transition-colors font-medium">
                    {t.contact.form.message}
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      rows="5"
                      className="w-full px-6 py-4 glass-card rounded-2xl border-2 border-white/5 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none text-white placeholder-gray-500 hover:border-white/10 hover:shadow-lg hover:shadow-primary/5 bg-white/5"
                      required
                    ></textarea>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within/field:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </motion.div>

                {/* Status Message */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className={`p-4 rounded-2xl border-2 ${
                        status.type === 'success'
                          ? 'bg-green-500/10 border-green-500/30 text-green-400'
                          : 'bg-red-500/10 border-red-500/30 text-red-400'
                      } flex items-center gap-3`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <p className="text-sm font-medium">{status.message}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Usage Guidelines */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20"
                >
                  <p className="text-xs text-blue-400 font-mono leading-relaxed">
                    {language === 'vi'
                      ? ' Lưu ý: Giới hạn 3 tin nhắn/giờ. Vui lòng sử dụng ngôn từ lịch sự và không spam.'
                      : ' Note: Limited to 3 messages/hour. Please use respectful language and avoid spam.'
                    }
                  </p>
                </motion.div>

                {/* Special Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="relative mt-8"
                >
                  {/* Glow Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-xl opacity-30 group-hover/btn:opacity-60 transition-opacity duration-500" />

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={!isLoading ? {
                      scale: 1.03,
                      y: -2
                    } : {}}
                    whileTap={!isLoading ? { scale: 0.97 } : {}}
                    className={`relative w-full py-6 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl shadow-2xl transition-all duration-500 font-mono overflow-hidden group/btn ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {/* Animated Shimmer Effect */}
                    {!isLoading && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{
                          x: ['-200%', '200%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    )}

                    {/* Particle Effects */}
                    {!isLoading && (
                      <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full"
                            style={{
                              left: `${20 + i * 12}%`,
                              top: '50%',
                            }}
                            animate={{
                              y: [-20, 20],
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Button Content */}
                    <div className="relative z-10 flex items-center justify-center gap-4">
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={!isLoading ? { x: -5 } : {}}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {isLoading ? (
                          <motion.div
                            className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <Send className="w-6 h-6 text-white" />
                        )}
                        <span className="text-white text-xl font-bold tracking-wider">
                          {isLoading
                            ? (language === 'vi' ? 'Đang gửi...' : 'Sending...')
                            : t.contact.form.send
                          }
                        </span>
                      </motion.div>

                      {/* Animated Arrow */}
                      {!isLoading && (
                        <motion.div
                          className="text-white text-2xl font-bold"
                          animate={{
                            x: [0, 10, 0],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          →
                        </motion.div>
                      )}
                    </div>

                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Enhanced Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Quick Contact Info */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-mono text-primary mb-8 flex items-center gap-3">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  {t.contact.info.title}
                </h3>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: t.contact.info.email, value: 'lequangthanhh05@gmail.com', color: 'from-blue-500 to-indigo-500' },
                    { icon: Phone, label: t.contact.info.phone, value: '+84 961755254', color: 'from-green-500 to-emerald-500' },
                    { icon: MapPin, label: t.contact.info.location, value: t.contact.info.locationValue, color: 'from-purple-500 to-pink-500' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      className="flex items-center gap-4 group/item hover:transform hover:translate-x-2 transition-all duration-300"
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-xs font-mono uppercase tracking-wider">{item.label}</p>
                        <p className="text-gray-200 text-sm md:text-base font-medium mt-1 group-hover/item:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold font-mono text-primary mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  {t.contact.social.title}
                </h3>

                <div className="space-y-4">
                  {additionalContacts.map((contact, index) => {
                    const ContactIcon = contact.icon
                    return (
                      <motion.a
                        key={contact.name}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                        whileHover={{ scale: 1.02, x: 8 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center gap-4 p-4 glass-card rounded-xl border border-white/10 hover:border-primary/50 ${contact.hoverBg} transition-all duration-300 group/social`}
                      >
                        <motion.div
                          className={`w-10 h-10 ${contact.bgColor} rounded-lg flex items-center justify-center`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <ContactIcon className={`w-5 h-5 ${contact.color}`} />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-gray-200 text-sm font-medium group-hover/social:text-primary transition-colors">
                            {contact.name}
                          </p>
                          <p className="text-gray-400 text-xs font-mono mt-1">{contact.value}</p>
                        </div>
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover/social:opacity-100"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Enhanced Availability */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="glass-card p-6 lg:p-8 rounded-2xl border-l-4 border-primary relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h4 className="text-primary font-mono font-bold text-lg">{t.contact.availability.title}</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t.contact.availability.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
