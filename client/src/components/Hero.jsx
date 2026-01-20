import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import titleImg from '@/assets/titleImg.png'
import TypewriterEffect from '@/components/TypewriterEffect'
import { fadeInRight, floatingAnimation, staggerContainer, staggerItem } from '@/lib/motion-variants'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1 space-y-4 md:space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <Badge variant="secondary" className="mb-2 text-center">
                Hello,  I'm
              </Badge>
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2"
                variants={staggerItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                SHAKIL AHMED NILOY
              </motion.h1>
              <TypewriterEffect />
            </motion.div>
            <motion.h1 
              className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-1"
              variants={staggerItem}
            >
              Full Stack <span className="text-primary underline decoration-2 underline-offset-4">MERN</span> Developer
            </motion.h1>
            <motion.h1 
              className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-2"
              variants={staggerItem}
            >
              Building Modern Web <span className="text-primary">Applications!</span>
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-full md:max-w-lg"
              variants={staggerItem}
            >
              Specialized in MongoDB, Express.js, React, and Node.js to build scalable, high-performance web applications tailored to your needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 pt-3 md:pt-4"
              variants={staggerItem}
            >
              <Button size="sm" className="text-sm" asChild>
                <a href="#contact">
                  Get In Touch →
                </a>
              </Button>
              <Button size="sm" variant="outline" className="text-sm" asChild>
                <a 
                  href="https://drive.google.com/file/d/1Vb0rXrsPz89yXvlDN_WTVwtxKI0yI2tE/view?usp=drive_link"
                  download="Shakil_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <i className="fas fa-download"></i>
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2 relative flex justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            {/* Animated background elements behind profile image */}
            <div className="absolute w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] blob-bg opacity-20 dark:opacity-30 blur-2xl -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Impressive particle system behind profile image */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-primary to-purple-600"
                style={{
                  width: Math.random() * 10 + 2,
                  height: Math.random() * 10 + 2,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />
            ))}

            <div className="relative w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px] flex items-end justify-center overflow-hidden rounded-full group">
              <motion.img 
                alt="Web Developer Portrait" 
                className="w-full h-full object-cover object-top transform scale-100 sm:scale-110 translate-y-4 rounded-full"
                src={titleImg}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              
              {/* Glass morphism overlay on hover */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-white/30 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              
              {/* Highlight ring on hover */}
              <motion.div 
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ zIndex: -1 }}
              />
              
              {/* Rotating tech stack icons */}
              {[
                { icon: 'fab fa-node', color: 'text-green-500', size: 'text-xl', delay: 0 },
                { icon: 'fab fa-react', color: 'text-blue-500', size: 'text-xl', delay: 0.5 },
                { icon: 'fab fa-js', color: 'text-yellow-500', size: 'text-lg', delay: 1 },
                { icon: 'fab fa-mongodb', color: 'text-green-600', size: 'text-lg', delay: 1.5 },
                { icon: 'fab fa-html5', color: 'text-orange-500', size: 'text-lg', delay: 2 },
                { icon: 'fab fa-css3-alt', color: 'text-blue-400', size: 'text-lg', delay: 2.5 },
              ].map((tech, index) => {
                const radius = 140; // Radius of the circle
                const angle = (index * 2 * Math.PI) / 6; // Evenly distribute icons around the circle
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                
                return (
                  <motion.div
                    key={index}
                    className={`absolute ${tech.color} ${tech.size} z-10`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: tech.delay,
                    }}
                  >
                    <i className={tech.icon}></i>
                  </motion.div>
                );
              })}
            </div>
          
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full opacity-70"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${25 + (i % 2) * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}

            <motion.div 
              className="absolute top-10 left-2 sm:left-0 lg:left-10  dark:bg-surface-dark p-3 sm:p-4 rounded-2xl shadow-xl"
              {...floatingAnimation}
            >
              <div className="text-center">
                <span className="block text-xs sm:text-sm font-bold text-primary">1+ Year</span>
                <span className="text-[0.6rem] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">Experience</span>
              </div>
            </motion.div>
            <motion.div 
              className="absolute top-20 right-2 sm:right-0 lg:right-10 bg-white dark:bg-surface-dark p-3 sm:p-4 rounded-2xl shadow-xl"
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }
              }}
            >
              <div className="text-center">
                <span className="block text-xs sm:text-sm font-bold text-primary">20+</span>
                <span className="text-[0.6rem] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">Projects</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
