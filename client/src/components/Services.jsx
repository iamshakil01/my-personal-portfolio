import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useStaggerAnimation } from '@/lib/animations'

const ServiceCard = ({ icon, title, description, featured }) => (
  <motion.div
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="h-full"
  >
    <Card className={`${featured ? 'bg-gradient-to-br from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20 border-2 border-primary/20' : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
      <CardHeader className="flex flex-col items-center text-center pb-4 pt-8">
        <motion.div 
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white mb-4 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className={`text-2xl ${icon}`}></i>
        </motion.div>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-center pb-4">
        <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
)

const Services = () => {
  const gridRef = useStaggerAnimation()
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Full Stack Development',
      description: 'Building complete web applications using MongoDB, Express.js, React, and Node.js. I create scalable, secure, and high-performance solutions from database to UI.',
      featured: true
    },
    {
      icon: 'fas fa-server',
      title: 'REST API Development',
      description: 'Designing and implementing robust REST APIs with Express.js and Node.js, complete with authentication, validation, and proper error handling.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'React Development',
      description: 'Creating modern, responsive user interfaces with React, Redux, and hooks. Building reusable components with excellent performance and user experience.'
    },
    {
      icon: 'fas fa-database',
      title: 'MongoDB & Database Design',
      description: 'Expert in MongoDB schema design, aggregation pipelines, and optimization. Ensuring data integrity, security, and optimal query performance.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Backend Architecture',
      description: 'Designing scalable backend architectures with Node.js and Express. Implementing microservices, authentication, authorization, and third-party integrations.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Modern UI/UX',
      description: 'Creating beautiful, intuitive interfaces using modern CSS frameworks, Tailwind CSS, and component libraries. Focused on accessibility and responsive design.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-surface-dark dark:to-background-dark" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 mb-4"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white shadow-lg">
              <i className="fas fa-concierge-bell text-xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Services</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            I am a skilled MERN stack developer with expertise in MongoDB, Express.js, React, and Node.js. I specialize in building full-stack web applications with modern technologies and best practices.
          </motion.p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={gridRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
