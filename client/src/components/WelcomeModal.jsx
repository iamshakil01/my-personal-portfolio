import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const WelcomeModal = ({ isOpen, onClose }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer;
    if (isOpen && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (isOpen && countdown === 0) {
      // Auto close after countdown reaches 0
      setTimeout(() => {
        onClose();
      }, 500);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, countdown, onClose]);

  const handleSkip = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white dark:bg-background-dark rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
        initial={{ scale: 0.8, opacity: 0, y: 20, rotateY: 90 }}
        animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20, rotateY: -90 }}
        transition={{ 
          type: 'spring', 
          damping: 20, 
          stiffness: 300,
          duration: 0.6 
        }}
      >
        <motion.div
          className="w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 0.2, 
            type: 'spring',
            stiffness: 200,
            damping: 15
          }}
        >
          <i className="fas fa-rocket text-white text-2xl"></i>
        </motion.div>
        
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 10 }}
        >
          Welcome to My Portfolio!
        </motion.h2>
        
        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-6 text-lg"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
        >
          Get ready to explore my work and journey as a MERN Stack Developer.
        </motion.p>
        
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 150, damping: 12 }}
        >
          <motion.div 
            className="text-2xl font-bold text-primary mb-2"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            {countdown}
          </motion.div>
          <p className="text-sm text-gray-500 dark:text-gray-400">seconds to enter</p>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 10 }}
        >
          <Button 
            onClick={handleSkip}
            className="bg-primary hover:bg-primary/90 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip {countdown > 0 ? `(${countdown}s)` : ''}
          </Button>
        </motion.div>
        
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeModal;