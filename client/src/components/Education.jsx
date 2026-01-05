import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useStaggerAnimation } from '@/lib/animations'

const Education = () => {
  const gridRef = useStaggerAnimation()
  const education = [
    { period: '2002 - 2012', institution: 'Academy of Pittsburgh', degree: 'School', variant: 'default', icon: 'fas fa-graduation-cap', description: 'Completed foundational education with excellence, developing strong academic base in mathematics and science.' },
    { period: '2012 - 2014', institution: 'Agnes Scott College', degree: 'College', variant: 'secondary', icon: 'fas fa-university', description: 'Pursued higher education focusing on computer science fundamentals and programming concepts.' },
    { period: '2014 - 2017', institution: 'Abilene Christian University', degree: 'B.Sc. in CSE', variant: 'secondary', icon: 'fas fa-laptop-code', description: 'Bachelor degree in Computer Science and Engineering with specialization in web technologies and software development.' },
    { period: '2017 - 2019', institution: 'Stanford University', degree: 'M.Sc in Web Engineering', variant: 'secondary', icon: 'fas fa-cogs', description: 'Master degree focusing on advanced web technologies, full-stack development, and modern JavaScript frameworks.' },
    { period: '2019 - 2021', institution: 'Oxford University', degree: 'M.B.A in Marketing', variant: 'secondary', icon: 'fas fa-chart-line', description: 'MBA degree with focus on digital marketing strategies and business development in technology sector.' },
    { period: '2022 - Present', institution: 'Oxford University', degree: 'Ph.D in Running Algorithms', variant: 'secondary', icon: 'fas fa-flask', description: 'Currently pursuing doctoral research in optimization of running algorithms and computational efficiency.' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-surface-dark dark:to-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-4"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white shadow-lg">
            <i className="fas fa-graduation-cap text-xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-gray-600 dark:text-gray-400 max-w-4xl text-lg"
        >
          I have a solid educational background, including high school and college diplomas, a Bachelor of Science (BSc) degree in Computer Science and Engineering (CSE), and a Master of Science (MSc) degree in the same field.
        </motion.p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-purple-500 dark:to-purple-600 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Left/Right content */}
                <div className={`${index % 2 === 0 ? 'md:w-1/2 md:pr-12' : 'md:w-1/2 md:pl-12'} w-full`}>
                  <Card className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white shadow-md">
                        <i className={`text-lg ${item.icon}`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.institution}</h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
                        </div>
                        <Badge variant={item.variant} className="mb-3">
                          {item.degree}
                        </Badge>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white shadow-lg z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <i className="text-sm fas fa-circle"></i>
                </div>
                
                {/* Spacer for timeline */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
