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
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your next project?</h2>
          <p className="text-purple-100 mb-8 text-lg">Let's build something amazing together.</p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-gray-800 border-white hover:bg-gray-100 hover:border-gray-300"
            onClick={scrollToContact}
          >
            Get In Touch
          </Button>
        </div>
      </section>
      <ContactForm />
    </>
  )
}

export default Contact
