import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import ContactForm from './ContactForm'

const Contact = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Ready to start your next project?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate and build something extraordinary together.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl"
              onClick={scrollToContact}
            >
              <span className="mr-2">🚀</span> Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
      <ContactForm />
    </>
  )
}

export default Contact
