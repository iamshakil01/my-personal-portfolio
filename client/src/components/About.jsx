import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useSlideInLeft, useSlideInRight } from '@/lib/animations'

const About = () => {
  const leftRef = useSlideInLeft()
  const rightRef = useSlideInRight(0.2)

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative" ref={leftRef}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                alt="Working on code" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7138TRkRVhSAJwCnLKMEu2nOS67T59X59yjvS07LmeVH__1Ny1sRj5MAefGCzNOEmcMZEsQmQw5Ht3MrkmkT5KtvIppY7P6fdcOlpnM8v1Fss6n3iQBG2m7OdypMhld5YVcJJMjMgsVS4WL5KkyrfaYyIRsIMejKZVGzzV6t8DaP1GFIqlvbH_DsoXUdxjajJlhuADGbLLVaFfijCDiXc9p3YnX3H3M8FMqzhCmmq6mQEQPjnJhu87NM1IMjX7oTTgdp0jfE3Zt8N"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">Chris Smith</p>
                <p className="text-sm opacity-90">Senior Developer</p>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-purple-200 dark:bg-purple-900/20 rounded-3xl"></div>
          </div>
          <div className="w-full lg:w-1/2" ref={rightRef}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              <span className="text-primary font-bold uppercase tracking-wide text-sm">About Me</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">A Full Stack Web Developer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              As a Full Stack Web Developer, I am responsible for designing and building complete web applications from start to finish. This includes creating user interfaces, writing server-side code, and managing databases. With my comprehensive knowledge of the entire web development process, I can efficiently turn ideas into fully functional websites or applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I have a proven track record of delivering high-quality solutions that solve complex business problems. I am always eager to learn new technologies and improve my skills.
            </p>
            <Button size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
