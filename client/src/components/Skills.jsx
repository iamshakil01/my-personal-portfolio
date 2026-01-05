import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { useStaggerAnimation } from '@/lib/animations'

const Skills = () => {
  const gridRef = useStaggerAnimation()
  const skills = [
    { name: 'Python', icon: 'fa-python', iconColor: 'text-blue-600', bgColor: 'bg-blue-100', projects: 14, experience: '4+' },
    { name: 'JavaScript', icon: 'fa-js', iconColor: 'text-yellow-500', bgColor: 'bg-yellow-100', projects: 25, experience: '5+' },
    { name: 'Node JS', icon: 'fa-node', iconColor: 'text-green-600', bgColor: 'bg-green-100', projects: 12, experience: '4+' },
    { name: 'React', icon: 'fa-react', iconColor: 'text-cyan-500', bgColor: 'bg-cyan-100', projects: 7, experience: '3+' },
    { name: 'Node JS', icon: 'fa-node-js', iconColor: 'text-green-700', bgColor: 'bg-green-100', projects: 5, experience: '2+' },
    { name: 'MySQL', icon: 'fa-database', iconColor: 'text-orange-600', bgColor: 'bg-orange-100', projects: 10, experience: '3+', fas: true }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-surface-dark/50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            I possess a strong foundation in programming languages such as <span className="font-semibold text-primary">HTML, CSS, and JavaScript</span>, along with experience working with front-end frameworks such as <span className="font-semibold text-primary">React, Angular, and Vue</span>. I am also proficient in back-end technologies such as Node.js and PHP.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={gridRef}>
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 flex-shrink-0 ${skill.bgColor} rounded-lg flex items-center justify-center`}>
                    <i className={`${skill.fas ? 'fas' : 'fab'} ${skill.icon} text-2xl ${skill.iconColor}`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{skill.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{skill.projects} projects Completed</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{skill.experience} year Exp.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
