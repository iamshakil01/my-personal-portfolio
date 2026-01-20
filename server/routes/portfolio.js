import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()

// Create transporter for Gmail
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'iamshakill02@gmail.com',
    pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD
  }
});

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
router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message fields are required' })
  }
  
  try {
    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER || 'iamshakill02@gmail.com',
      to: process.env.EMAIL_USER || 'iamshakill02@gmail.com',
      subject: subject || `New Contact from ${name}`,
      text: `You have received a new message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    
    console.log('Contact form submission sent to email:', { name, email, subject, message });
    
    res.json({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Still return success to avoid revealing server errors to client
    res.json({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
  }
})

export default router
