import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      title: 'Travel Booking App',
      description: 'A comprehensive mobile application for booking flights and hotels with a clean user interface.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHNZjJoMWoamqKEt6me7zwtLHJGfx7AripAvYtpTQLHe4LUKwDcwyUx185sf5PA0oZLwKroYVmOchSpTKiss2gghP_7_CVnbV0i6PaqAH3aUA4MTDlTdN-hYijIcnoB0kfIlSE7k7pR_l40kFJERfMwarBKfkhscBHBa86hYV-pp_rYrYaF18uJ9cSeIA0vYqWZtsOqkcQoJZSA6NsVvSeuAIZS9zDnUKFmQ3xxkFUfFutljzjQqu8nzgrEc9dsRjEyJ-Ofw2Xx_rk',
      bgColor: 'bg-gray-200 dark:bg-gray-700'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'An administrative dashboard for managing products, orders, and analyzing sales data.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmsaT2xnxrxuwkNCVmUzhf8Ai0_fiQFZfGIfZ2nHzmIDQh5H4-5EcizUrI3uwetqoaPJ9WZqYUHrwK2YKXFY5q6jkHHzXV5BDS8Zm5OsMhrUIhsr0GyDn-HuS3RdHi9_-uXcAav19nyA7Z6qujLIap_5sOAGxHHZo8bT8M02nQcUpPt0SduKrdXzrBQimeNGKGYTn5q2IW0cOZQq48RoFqQ5e1-xRS-gGAnSMYxlrCLUuYSYNoxSkf9ZhBvcuuILiYr70LO73wrFGN',
      bgColor: 'bg-orange-100 dark:bg-gray-700'
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-surface-dark/30" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-wide text-sm">My Portfolio</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">Recent Projects</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`${project.bgColor} rounded-3xl overflow-hidden mb-6 relative aspect-[4/3] flex items-center justify-center`}>
                <img 
                  alt={project.title} 
                  className="w-3/4 h-auto object-contain shadow-2xl rounded-xl transform group-hover:scale-105 transition duration-500" 
                  src={project.image}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm max-w-md">
                {project.description}
              </p>
              <a className="inline-flex items-center text-primary font-semibold hover:underline" href="#">
                Click to Visit <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
