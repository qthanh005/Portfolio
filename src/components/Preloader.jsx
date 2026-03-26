import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onFinish, 500) // Wait briefly before closing
          return 100
        }
        // Random increment to simulate loading assets
        return prev + Math.floor(Math.random() * 20) + 10
      })
    }, 150)
    
    return () => clearInterval(timer)
  }, [onFinish])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%", 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Animated Logo */}
      <div className="overflow-hidden flex flex-col items-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-mono tracking-tighter flex"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-500">&lt;</span>
          THANH
          <span className="text-gray-500">/&gt;</span>
        </motion.h1>
        
        <motion.div 
          className="text-gray-400 text-sm font-mono tracking-[0.3em] mt-4 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Portfolio Experience
        </motion.div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-16 w-64 max-w-[80vw]">
        <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "circOut" }}
          />
        </div>
        <div className="mt-4 flex justify-between text-[10px] font-mono tracking-widest text-gray-400">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            INITIALIZING
          </motion.span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
      </div>
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
    </motion.div>
  )
}

export default Preloader
