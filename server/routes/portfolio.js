import express from 'express'

const router = express.Router()

// Sample data
const portfolioData = {
  profile: {
    name: 'Chris Smith',
    title: 'Full Stack Web Developer',
    email: 'contact@chrissmith.com',
    clients: 30,
    projects: 130
  },
  services: [
    {
      id: 1,
      title: 'Web Application',
      description: 'I will create a responsive and user-friendly web application that meets your business needs.',
      icon: 'code'
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'I provide both front-end and back-end development services.',
      icon: 'terminal'
    },
    {
      id: 3,
      title: 'App Development',
      description: 'I create cross-platform mobile applications using modern frameworks.',
      icon: 'smartphone'
    }
  ],
  skills: [
    { name: 'Python', projects: 14, experience: '4+' },
    { name: 'JavaScript', projects: 25, experience: '5+' },
    { name: 'Node JS', projects: 12, experience: '4+' },
    { name: 'React', projects: 7, experience: '3+' }
  ]
}

// Get all portfolio data
router.get('/', (req, res) => {
  res.json(portfolioData)
})

// Get profile info
router.get('/profile', (req, res) => {
  res.json(portfolioData.profile)
})

// Get services
router.get('/services', (req, res) => {
  res.json(portfolioData.services)
})

// Get skills
router.get('/skills', (req, res) => {
  res.json(portfolioData.skills)
})

// Contact form endpoint
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }
  
  // Here you would typically send an email or save to database
  console.log('Contact form submission:', { name, email, message })
  
  res.json({ success: true, message: 'Thank you for your message! I will get back to you soon.' })
})

export default router
