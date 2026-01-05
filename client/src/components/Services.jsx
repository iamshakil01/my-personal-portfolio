import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useStaggerAnimation } from '@/lib/animations'

const ServiceCard = ({ icon, title, description, featured }) => (
  <motion.div
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
  >
    <Card className={featured ? 'bg-purple-50 dark:bg-gray-800/50 border-primary/20' : ''}>
    <CardHeader>
      <div className="w-14 h-14 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="line-clamp-3">
        {description}
      </CardDescription>
    </CardContent>
    <CardFooter>
      <Button variant="link" className="px-0 text-primary hover:text-primary-dark">
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
      icon: 'code',
      title: 'Web Application',
      description: 'I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web app is fast, secure and scalable.',
      featured: true
    },
    {
      icon: 'terminal',
      title: 'Web Development',
      description: 'I provide both front-end and back-end development services. From simple landing pages to complex enterprise solutions, I build it all.'
    },
    {
      icon: 'smartphone',
      title: 'App Development',
      description: 'Need a mobile app? I create cross-platform mobile applications using modern frameworks that provide native-like performance.'
    },
    {
      icon: 'database',
      title: 'Database Management',
      description: 'Expert database design and management services ensuring data integrity, security and optimal query performance for your applications.'
    },
    {
      icon: 'analytics',
      title: 'Data Analysis',
      description: 'Transform your raw data into actionable insights. I provide data analysis and visualization services to help you make informed decisions.'
    },
    {
      icon: 'web',
      title: 'Web Design',
      description: 'I design beautiful, intuitive, and modern user interfaces that provide an exceptional user experience across all devices.'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-surface-dark/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16 max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">design_services</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Services</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            I am a skilled web developer with expertise in creating responsive and user-friendly websites. My passion for coding allows me to create custom websites that perfectly match your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
