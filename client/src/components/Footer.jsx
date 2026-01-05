import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark py-10 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Logo className="mb-2" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">© 2023 All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a className="text-gray-400 hover:text-primary transition" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-gray-400 hover:text-primary transition" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-gray-400 hover:text-primary transition" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="text-gray-400 hover:text-primary transition" href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
