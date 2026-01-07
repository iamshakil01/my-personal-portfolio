import React from 'react'
import { motion } from 'framer-motion'
import FloatingSocialIcons from './FloatingSocialIcons'

const Project = () => {
  const projects = [
    {
      title: 'SoftSphere Studio',
      description: 'A comprehensive design platform for creating and managing digital experiences.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCqScz7BEjP1s1AM0M-bxSTklrd_BQINjzZeFcGWfu4dFaofpH_k2Nd4cTMLt73C2KxxDfFmFuPV7CN3WByXZEqtutQNZVwIKSM-XenkqCokaGCgJ5WIVFyFm6Ehe3CodXaTsiaoViue9ac9BcQB5zykFVdXZxsTsTrdikW_Jhn9w0fw-ZfI0YO8KI6GRNeqxvPpJ_gZD1lmUfv4azL-PGPdq7CdehI6F2FRwdaVfIX_YXH0BA1vPl7Lph2ykCFfo3g3JDN8sBrng',
      link: 'https://apps-hero-io.netlify.app/',
    },
 
    {
      title: 'Movie Master Studio',
      description: 'An entertainment platform for discovering and enjoying the latest movies and shows.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwzip8mt7EDVB1-HZqxdM8TFbdS7392YF0VdgcsFTLisQgzSl4M-1XQjV6pY_bebusl7ZebaIlx6GWykXFOEq-eyTxlI9mHpKL3HzxjZZuTqbKKmTVj9CDs7cvC0QGat7l8GTOdF0jparAbAuJVw15AMiXg6ccA4EvQQCahupubjku9wz1N5agIrvEbX6wMBgIuVXXjHL7h327dr57WhBE2mx_8l7BIQ9QcDT_6usravSdVKVcRKMyEjSvCB5f1xApUKqA_f4Dpw0',
    }
  ]

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300 min-h-screen" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Click on details to explore my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mb-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 transition-all hover:shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 mb-5">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                  src={project.image}
                />
                <div className="absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none"></div>
              </div>
              
              <div className="flex items-center justify-between px-2 pb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                  {project.title}
                </h2>
                <a className="inline-flex items-center text-primary font-medium hover:text-blue-600 transition-colors group-hover:translate-x-1 duration-300" href="#">
                  Details
                  <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          <button className="flex items-center px-4 py-2 text-slate-400 dark:text-slate-600 cursor-not-allowed" disabled="">
            <span className="material-symbols-outlined text-lg mr-1">arrow_back</span>
            <span className="font-medium">Previous</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold shadow-md shadow-blue-500/30 transition-transform active:scale-95">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium">
              3
            </button>
          </div>
          
          <button className="flex items-center px-4 py-2 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow active:scale-95">
            <span className="font-medium">Next</span>
            <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
          </button>
        </div>
      </div>
      <FloatingSocialIcons />
    </section>
  )
}

export default Project
