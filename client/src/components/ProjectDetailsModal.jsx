import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLayerGroup, FaExclamationTriangle, FaRocket } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { IoMdOpen } from 'react-icons/io';

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.main
            className="w-full max-w-4xl bg-white dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-500 dark:text-gray-300"
              onClick={onClose}
            >
              <FiX className="text-xl" />
            </button>
            
            <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-100 dark:bg-gray-800 flex-shrink-0 overflow-hidden group">
              <img
                alt={`${project.title} App Interface`}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/5 pointer-events-none"></div>
            </div>
            
            <div className="flex-1 p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[85vh] md:max-h-[800px] hide-scrollbar">
              <div className="mb-6 pr-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h1>
                <p className="text-text-sub-light dark:text-text-sub-dark leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <FaLayerGroup className="text-primary text-xl" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Technology Stack</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <FaExclamationTriangle className="text-orange-500 text-xl" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Challenges Faced</h2>
                </div>
                <p className="text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed">
                  {project.challenges || "Managing real-time state updates across different users was challenging. Optimizing the images for faster load times required advanced caching strategies."}
                </p>
              </div>
              
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <FaRocket className="text-purple-500 text-xl" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Future Improvements</h2>
                </div>
                <p className="text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed">
                  {project.futureImprovements || "We plan to integrate AI-based design suggestions and a dark mode toggle for better user experience."}
                </p>
              </div>
              
              <div className="h-px bg-gray-200 dark:bg-gray-700 w-full mb-8"></div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <a 
                  className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/30 active:scale-95" 
                  href={project.liveDemoUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <IoMdOpen className="text-sm" />
                </a>
                {project.githubUrl && (
                  <a 
                    className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-xl transition-all border border-transparent dark:border-gray-700 active:scale-95" 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;