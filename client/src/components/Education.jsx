import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useStaggerAnimation } from '@/lib/animations'

const Education = () => {
  const gridRef = useStaggerAnimation()
  const education = [
    { period: '2002 - 2012', institution: 'Academy of Pittsburgh', badge: 'School', variant: 'default' },
    { period: '2012 - 2014', institution: 'Agnes Scott College', badge: 'College', variant: 'secondary' },
    { period: '2014 - 2017', institution: 'Abilene Christian University', badge: 'B.Sc. in CSE', variant: 'secondary' },
    { period: '2017 - 2019', institution: 'Stanford University', badge: 'M.Sc in Web Engineering', variant: 'secondary' },
    { period: '2019 - 2021', institution: 'Oxford University', badge: 'M.B.A in Marketing', variant: 'secondary' },
    { period: '2022 - Present', institution: 'Oxford University', badge: 'Ph.D in Running Algorithms', variant: 'secondary' }
  ]

  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-10">
          <span className="material-symbols-outlined text-primary text-3xl">school</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
        </div>
        <p className="mb-12 text-gray-600 dark:text-gray-400 max-w-4xl">
          I have a solid educational background, including high school and college diplomas, a Bachelor of Science (BSc) degree in Computer Science and Engineering (CSE), and a Master of Science (MSc) degree in the same field.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={gridRef}>
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">{item.period}</span>
                <CardTitle className="text-base">{item.institution}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant={item.variant}>{item.badge}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
