import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }
    
    try {
      // You can replace this with your actual API endpoint
      const response = await fetch('/api/portfolio/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset(); // Reset form after successful submission
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-background-dark dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            Contact Me
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          <div className="flex flex-col space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to contact me through any of the following methods:
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="https://mail.google.com/mail/?view=cm&fs=1&to=iamshakill02@gmail.com" target="_blank" rel="noopener noreferrer">
                    iamshakill02@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="tel:+8801516514923" onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText('+8801516514923');
                    alert('Number copied');
                  }}>
                    +8801516514923
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                  <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="https://wa.me/8801516514923" target="_blank" rel="noopener noreferrer">
                    +8801516514923
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Availability</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I typically respond within 24 hours. For urgent matters, please reach out via WhatsApp or phone.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6" name="contact">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="name">Your Name</label>
                  <input 
                    className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary shadow-sm placeholder-gray-400 dark:placeholder-gray-500 transition-shadow input input-bordered" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name" 
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="email">Your Email</label>
                  <input 
                    className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary shadow-sm placeholder-gray-400 dark:placeholder-gray-500 transition-shadow input input-bordered" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="subject">Subject</label>
                <input 
                  className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary shadow-sm placeholder-gray-400 dark:placeholder-gray-500 transition-shadow input input-bordered" 
                  id="subject" 
                  name="subject" 
                  placeholder="Enter subject" 
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary shadow-sm placeholder-gray-400 dark:placeholder-gray-500 resize-none transition-shadow textarea textarea-bordered" 
                  id="message" 
                  name="message" 
                  placeholder="Write your message here..." 
                  rows="5"
                ></textarea>
              </div>

              <button 
                className="w-full py-3.5 px-6 rounded-lg bg-primary hover:bg-opacity-90 text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 btn btn-primary" 
                type="submit"
              >
                <i className="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;