// api/portfolio/index.js
export default function handler(req, res) {
  // Sample portfolio data
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
  };

  res.status(200).json(portfolioData);
}