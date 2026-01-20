import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/portfolio/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000); // Hide success message after 5 seconds
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-background-dark dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-6"
          >
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out through any of the following methods:
              </p>
            </div>

            <div className="space-y-5">
              <motion.div 
                className="flex items-start space-x-4 group p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-md">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a 
                    className="text-primary hover:underline font-medium" 
                    href="mailto:iamshakill02@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    iamshakill02@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 group p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                  <a 
                    className="text-blue-500 hover:underline font-medium" 
                    href="tel:+8801516514923"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText('+8801516514923');
                      alert('Phone number copied to clipboard!');
                    }}
                  >
                    +8801516514923
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 group p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-md">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">WhatsApp</h4>
                  <a 
                    className="text-green-500 hover:underline font-medium" 
                    href="https://wa.me/8801516514923" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    +8801516514923
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 group p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-md">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary/10 to-purple-600/10 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-primary/20 shadow-sm"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-primary">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Response Time</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I typically respond within 24 hours during business days. For urgent matters, WhatsApp is the fastest way to reach me.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
            </div>
            
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 border border-green-200"
              >
                <div className="flex items-center">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6" name="contact">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="name">Full Name *</label>
                  <div className="relative">
                    <input 
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary shadow-sm placeholder-gray-400 dark:placeholder-gray-500 transition-colors ${errors.name ? 'ring-1 ring-red-500' : ''}`}
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="email">Email Address *</label>
                  <div className="relative">
                    <input 
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary shadow-sm placeholder-gray-400 dark:placeholder-gray-500 transition-colors ${errors.email ? 'ring-1 ring-red-500' : ''}`}
                      id="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="subject">Subject</label>
                <input 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary shadow-sm placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                  id="subject" 
                  name="subject" 
                  placeholder="How can I help you?" 
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="message">Your Message *</label>
                <div className="relative">
                  <textarea 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary shadow-sm placeholder-gray-400 dark:placeholder-gray-500 resize-none transition-colors ${errors.message ? 'ring-1 ring-red-500' : ''}`}
                    id="message" 
                    name="message" 
                    placeholder="Tell me about your project..." 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>

              <button 
                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary-dark hover:to-purple-700 text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;