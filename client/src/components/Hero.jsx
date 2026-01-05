import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { fadeInUp, fadeInLeft, fadeInRight, floatingAnimation, staggerContainer, staggerItem } from '@/lib/motion-variants'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1 space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <Badge variant="secondary" className="mb-2">
                I AM Web Developer
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
              variants={staggerItem}
            >
              Maximize Your Business <span className="text-primary underline decoration-wavy decoration-2 underline-offset-4">Potential</span> with Custom Web Development <span className="text-primary">Solutions!</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
              variants={staggerItem}
            >
              Take your business to the next level with custom web development solutions tailored to your unique needs.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={staggerItem}
            >
              <Button size="lg" asChild>
                <a href="#contact">
                  Get In Touch →
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#">
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
            <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] blob-bg opacity-20 dark:opacity-30 blur-2xl -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full flex items-end justify-center overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img 
                alt="Web Developer Portrait" 
                className="w-full h-full object-cover object-top transform scale-110 translate-y-4" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXbfxC-RG_b0jwR4Wf4bDFUBTeb5qjAMJy2ipdUPgMqdPhswoFpTtE88A76HUZxFpPSpGjOB7ETY1EwVt-lRqD5s5uLw6CW_XkqtzVw7by0-xZJaDWhw7FXLszO5fw9xb8OxvqZ7ab1Ogg2v51JUhQTCCcZUdS-yZfVrgb1KZ8xTAcqteSJMdC0dqVAqoyq0Y5JpUBOGaSW30w-jgSXyLeOhWc-BtUXzBTVSSh7hDkWoblxCciFf8ENgUiDdRAWOEUkm9bTfqubQn1"
              />
            </div>
            <motion.div 
              className="absolute top-10 left-0 lg:left-10 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-xl"
              {...floatingAnimation}
            >
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary">30+</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Clients</span>
              </div>
            </motion.div>
            <motion.div 
              className="absolute top-20 right-0 lg:right-10 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-xl"
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
                <span className="block text-2xl font-bold text-primary">130+</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Projects</span>
              </div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 w-full flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a 
                className="w-10 h-10 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center text-primary shadow-lg transition" 
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-whatsapp"></i>
              </motion.a>
              <motion.a 
                className="w-10 h-10 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center text-primary shadow-lg transition" 
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a 
                className="w-10 h-10 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center text-primary shadow-lg transition" 
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
              <motion.a 
                className="w-10 h-10 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center text-primary shadow-lg transition" 
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a 
                className="w-10 h-10 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center text-primary shadow-lg transition" 
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
