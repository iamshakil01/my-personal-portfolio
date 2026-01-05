import React from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.nav 
      className="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary">
              Chris<span className="text-gray-800 dark:text-white">Smith</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" href="#home">Home</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" href="#about">About</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" href="#services">Service</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" href="#portfolio">Portfolio</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" href="#skills">Skills</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition" href="#contact">Contact</a>
          </div>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <span className="material-symbols-outlined text-sm">dark_mode</span>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
