import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ darkMode }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 flex flex-col items-center border-r border-border-light dark:border-border-dark bg-sidebar-light dark:bg-sidebar-dark z-50 py-8 transition-colors duration-300">
      <div className="mb-6 relative w-12 h-12 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path 
            className="text-gray-200 dark:text-slate-700" 
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          ></path>
          <path 
            className="text-primary" 
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
            fill="none" 
            stroke="currentColor" 
            strokeDasharray="10, 100" 
            strokeLinecap="round" 
            strokeWidth="2"
          ></path>
        </svg>
        <span className="absolute text-[10px] font-bold text-primary">0%</span>
      </div>

      <div className="w-8 h-px bg-border-light dark:bg-border-dark mb-6"></div>

      <div className="flex flex-col gap-4 items-center flex-grow">
        <a 
          aria-label="GitHub" 
          className="w-10 h-10 rounded-full bg-icon-bg-light dark:bg-icon-bg-dark flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm" 
          href="https://github.com/iamshakil01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github text-lg"></i>
        </a>

        <a 
          aria-label="LinkedIn" 
          className="w-10 h-10 rounded-full bg-icon-bg-light dark:bg-icon-bg-dark flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm" 
          href="https://linkedin.com/in/iamshakil01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in text-lg text-[#0077b5] dark:text-[#0a66c2] group-hover:text-white"></i>
        </a>

        <a 
          aria-label="Facebook" 
          className="w-10 h-10 rounded-full bg-icon-bg-light dark:bg-icon-bg-dark flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#1877f2] hover:text-white transition-all duration-300 shadow-sm" 
          href="https://facebook.com/iamshakil05"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f text-lg text-[#1877f2]"></i>
        </a>

        <a 
          aria-label="WhatsApp" 
          className="w-10 h-10 rounded-full bg-icon-bg-light dark:bg-icon-bg-dark flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#25d366] hover:text-white transition-all duration-300 shadow-sm" 
          href="https://wa.me/8801516514923"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp text-lg text-[#25d366]"></i>
        </a>

        <a 
          aria-label="Email" 
          className="w-10 h-10 rounded-full bg-icon-bg-light dark:bg-icon-bg-dark flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#ef4444] hover:text-white transition-all duration-300 shadow-sm" 
          href="mailto:iamshakill02@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope text-sm text-[#ef4444] dark:text-[#f87171]"></i>
        </a>

        <div className="w-px h-16 bg-gradient-to-b from-border-light to-transparent dark:from-border-dark dark:to-transparent mt-2"></div>

        <motion.button 
          aria-label="Scroll Down" 
          className="mt-4 w-10 h-10 rounded-full border border-border-light dark:border-slate-700 bg-transparent flex items-center justify-center text-slate-400 dark:text-slate-500 hover:border-primary hover:text-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-arrow-down text-sm"></i>
        </motion.button>
      </div>

      <div className="mt-auto pt-8">
        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)] animate-pulse"></div>
      </div>
    </aside>
  );
};

export default Sidebar;