import { useState } from 'react'
import useLenis from './hooks/useLenis'
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
  
  // Initialize Lenis smooth scroll
  useLenis()

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-display transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
