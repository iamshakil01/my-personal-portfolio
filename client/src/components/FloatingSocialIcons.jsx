import React from 'react';
import { motion } from 'framer-motion';

const FloatingSocialIcons = () => {
  return (
    <div className="fixed left-1/2 bottom-6 transform -translate-x-1/2 z-50 flex flex-row gap-3">
      <motion.a 
        href="https://github.com/iamshakil01"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-gray-800 dark:text-gray-200 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fab fa-github"></i>
      </motion.a>
      <motion.a 
        href="https://linkedin.com/in/iamshakil01"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-gray-800 dark:text-gray-200 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fab fa-linkedin-in"></i>
      </motion.a>
      <motion.a 
        href="https://facebook.com/iamshakil05"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-gray-800 dark:text-gray-200 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fab fa-facebook-f"></i>
      </motion.a>
      <motion.a 
        href="https://wa.me/8801516514923"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-gray-800 dark:text-gray-200 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-green-500 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fab fa-whatsapp"></i>
      </motion.a>
      <motion.a 
        href="mailto:iamshakill02@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-gray-800 dark:text-gray-200 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-red-500 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-envelope"></i>
      </motion.a>
    </div>
  );
};

export default FloatingSocialIcons;