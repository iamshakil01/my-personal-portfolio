import React from 'react'
import { motion } from 'framer-motion'

const Logo = ({ className = "" }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.a
      href="#home"
      onClick={(e) => {
        e.preventDefault()
        scrollToTop()
      }}
      className={`inline-flex items-center cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        {/* Stylish bracket design */}
        <motion.div 
          className="relative w-8 h-8"
          whileHover={{ rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-l-2 border-t-2 border-primary rounded-tl-lg"></div>
            <div className="absolute w-6 h-6 border-r-2 border-b-2 border-primary rounded-br-lg"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
        </motion.div>
        
        {/* Animated text with gradient effect */}
        <div className="relative">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Sha<span className="text-gray-800 dark:text-white font-extrabold">KIL</span>
          </span>
          
          {/* Subtle underline animation */}
          <motion.div 
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-600 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
        
        {/* Stylish bracket design mirrored */}
        <motion.div 
          className="relative w-8 h-8"
          whileHover={{ rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-r-2 border-t-2 border-primary rounded-tr-lg"></div>
            <div className="absolute w-6 h-6 border-l-2 border-b-2 border-primary rounded-bl-lg"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
        </motion.div>
      </div>
    </motion.a>
  )
}

export default Logo
