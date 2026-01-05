import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useFadeInUp } from '@/lib/animations'

const Contact = () => {
  const sectionRef = useFadeInUp()

  return (
    <section className="py-20 bg-primary text-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 text-center" ref={sectionRef}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your next project?</h2>
        <p className="text-purple-100 mb-8 text-lg">Let's build something amazing together.</p>
        <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100" asChild>
          <a href="mailto:contact@chrissmith.com">
            Let's Talk
          </a>
        </Button>
      </div>
    </section>
  )
}

export default Contact
