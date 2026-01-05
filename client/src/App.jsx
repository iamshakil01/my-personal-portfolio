import { useState, useEffect } from 'react'
import useLenis from './hooks/useLenis'
import WelcomeModal from './components/WelcomeModal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  
  // Initialize Lenis smooth scroll
  useLenis()

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const checkFirstVisit = () => {
    const hasVisited = localStorage.getItem('hasVisitedPortfolio')
    if (!hasVisited) {
      setShowWelcome(true)
      localStorage.setItem('hasVisitedPortfolio', 'true')
    }
  }

  const showWelcomeModal = () => {
    setShowWelcome(true)
  }

  useEffect(() => {
    // Check if it's the first visit
    checkFirstVisit()
  }, [])

  const handleWelcomeClose = () => {
    setShowWelcome(false)
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-display transition-colors duration-300">
      <WelcomeModal isOpen={showWelcome} onClose={handleWelcomeClose} />
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        onHomeClick={showWelcomeModal} 
      />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
