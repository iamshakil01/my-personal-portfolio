import React from 'react'
import { motion } from 'framer-motion'
import { DiMongodb, DiReact, DiNodejs, DiJavascript, DiHtml5, DiCss3 } from 'react-icons/di'
import { FaGitSquare, FaDatabase, FaNetworkWired, FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3, FaGithub } from 'react-icons/fa'
import { SiRedux, SiMysql, SiPostgresql, SiExpress, SiMongodb, SiTypescript } from 'react-icons/si'
import { useStaggerAnimation } from '@/lib/animations'

const Skills = () => {
  const gridRef = useStaggerAnimation()
  // Define start dates for each skill (year-month format)
  const skillStartDates = {
    'MongoDB': new Date(2025, 0), // Started in Jan 2025
    'Express.js': new Date(2025, 0), // Started in Jan 2025
    'React': new Date(2025, 0), // Started in Jan 2025
    'Node.js': new Date(2025, 0), // Started in Jan 2025
    'JavaScript': new Date(2025, 0), // Started in Jan 2025
    'Redux': new Date(2025, 0), // Started in Jan 2025
    'HTML5': new Date(2025, 0), // Started in Jan 2025
    'CSS3': new Date(2025, 0), // Started in Jan 2025
    'TypeScript': new Date(2025, 0), // Started in Jan 2025
    'GitHub': new Date(2025, 0) // Started in Jan 2025
  };

  // Calculate years of experience dynamically
  const calculateYearsOfExperience = (startDate) => {
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    const monthDiff = today.getMonth() - startDate.getMonth();
    
    // Adjust if the current month is before the start month
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
      years--;
    }
    
    return Math.max(years, 1); // Ensure at least 1 year
  };

  const skills = [
    { name: 'MongoDB', icon: SiMongodb, iconColor: 'text-green-600', bgColor: 'bg-green-500/10', projects: 18, startYear: skillStartDates['MongoDB'], level: 85 },
    { name: 'Express.js', icon: SiExpress, iconColor: 'text-gray-700', bgColor: 'bg-gray-500/10', projects: 22, startYear: skillStartDates['Express.js'], level: 90 },
    { name: 'React', icon: FaReact, iconColor: 'text-cyan-500', bgColor: 'bg-cyan-500/10', projects: 25, startYear: skillStartDates['React'], level: 95 },
    { name: 'Node.js', icon: FaNodeJs, iconColor: 'text-green-600', bgColor: 'bg-green-500/10', projects: 20, startYear: skillStartDates['Node.js'], level: 90 },
    { name: 'JavaScript', icon: FaJs, iconColor: 'text-yellow-500', bgColor: 'bg-yellow-500/10', projects: 30, startYear: skillStartDates['JavaScript'], level: 98 },
    { name: 'Redux', icon: SiRedux, iconColor: 'text-purple-600', bgColor: 'bg-purple-500/10', projects: 15, startYear: skillStartDates['Redux'], level: 80 },
    { name: 'HTML5', icon: FaHtml5, iconColor: 'text-orange-500', bgColor: 'bg-orange-500/10', projects: 35, startYear: skillStartDates['HTML5'], level: 95 },
    { name: 'CSS3', icon: FaCss3, iconColor: 'text-blue-500', bgColor: 'bg-blue-500/10', projects: 32, startYear: skillStartDates['CSS3'], level: 92 },
    { name: 'TypeScript', icon: SiTypescript, iconColor: 'text-blue-600', bgColor: 'bg-blue-600/10', projects: 15, startYear: skillStartDates['TypeScript'], level: 85 },
    { name: 'GitHub', icon: FaGithub, iconColor: 'text-gray-700', bgColor: 'bg-gray-500/10', projects: 25, startYear: skillStartDates['GitHub'], level: 75 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-surface-dark dark:to-background-dark" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            MY SKILLS
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            I possess strong expertise in the <span className="font-semibold text-primary">MERN stack (MongoDB, Express.js, React, Node.js)</span>, along with experience in modern development tools and frameworks. I'm proficient in <span className="font-semibold text-primary">JavaScript/TypeScript, Redux, REST APIs</span>, and various database technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{ width: `${skill.level}%` }}></div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 ${skill.bgColor} rounded-xl flex items-center justify-center shadow-md`}>
                    {React.createElement(skill.icon, { className: `text-2xl ${skill.iconColor}`, style: { fontSize: '1.5rem' } })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs font-medium text-primary">{calculateYearsOfExperience(skill.startYear)} years</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.projects} projects</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">Expertise Level</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="h-2.5 rounded-full bg-gradient-to-r from-primary to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
