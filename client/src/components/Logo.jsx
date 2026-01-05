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
    >
      <span className="text-2xl font-bold text-primary">
        Sha<span className="text-gray-800 dark:text-white"> KIL</span>
      </span>
    </motion.a>
  )
}

export default Logo
