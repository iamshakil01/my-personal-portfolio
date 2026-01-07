import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectDetailsModal from './ProjectDetailsModal'
import heroApp from '@/assets/heroapp.png'
import clubSphere from '@/assets/clubsphere.png'
import pawmart from '@/assets/pawmart.png'
import toytopia from '@/assets/toytopia.png'
import dragonNews from '@/assets/dragon.png'


const Project = () => {
  const projects = [
    {
      title: 'ClubSphere',
      description: 'A comprehensive design platform for creating and managing digital experiences.',
      image: clubSphere,
    },
    {
      title: 'Hero App',
      description: 'An entertainment platform for discovering and enjoying the latest movies and shows.',
      image: heroApp,
    },
    {
      title: 'PawMart',
      description: 'A modern e-commerce platform for pet products with secure payment processing and inventory management.',
      image: pawmart,
    },
    {
      title: 'ToyTopia',
      description: 'A task management application with drag-and-drop interface, team collaboration, and progress tracking features.',
      image: toytopia,
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard application with real-time weather data, forecasts, and interactive maps.',
      image: dragonNews,
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Extended project data with additional details
  const detailedProjects = [
    {
      ...projects[0],
      techStack: ['Node.js', 'Express', 'React', 'Tailwind CSS', 'Firebase'],
      challenges: 'Managing real-time state updates across different users was challenging. Optimizing the images for faster load times required advanced caching strategies.',
      futureImprovements: 'We plan to integrate AI-based design suggestions and a dark mode toggle for better user experience.',
      liveDemoUrl: 'https://club-sphere-9c0f0.web.app/',
      githubUrl: 'https://github.com/iamshakil01/clubsphere-client'
    },
    {
      ...projects[1],
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Material UI'],
      challenges: 'Creating an intuitive UI for movie discovery was challenging. Integrating multiple APIs for movie data required careful rate limiting.',
      futureImprovements: 'We plan to add personalized recommendations and offline viewing capabilities.',
      liveDemoUrl: 'https://apps-hero-io.netlify.app/',
      githubUrl: 'https://github.com/iamshakil01/hero-io'
    },
    {
      ...projects[2],
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      challenges: 'Implementing secure payment processing and handling different currencies was complex. Managing inventory across multiple sellers required real-time synchronization.',
      futureImprovements: 'We plan to add AI-powered product recommendations and advanced analytics dashboard.',
      liveDemoUrl: 'https://pawmartapp.netlify.app/',
      githubUrl: 'https://github.com/iamshakil01/pawmart-repo-client'
    },
    {
      ...projects[3],
      techStack: ['React', 'Redux', 'Node.js', 'Socket.io', 'PostgreSQL'],
      challenges: 'Implementing real-time drag-and-drop across multiple users required complex state management. Ensuring data consistency during concurrent edits was challenging.',
      futureImprovements: 'We plan to add AI-powered task suggestions and advanced reporting features.',
      liveDemoUrl: 'https://toy-topia-shop-3c4b8.web.app/',
    },
    {
      ...projects[4],
      techStack: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox', 'Geolocation API'],
      challenges: 'Fetching and processing real-time weather data from multiple sources was complex. Optimizing map rendering for smooth performance was challenging.',
      futureImprovements: 'We plan to add weather alerts and historical data analysis features.',
      liveDemoUrl: 'https://dragon-news-fast.web.app/',
      githubUrl: 'https://github.com/iamshakil01/Dragon-News'
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; // Show 4 projects per page (2x2 grid)

  // Calculate pagination
  const totalPages = Math.ceil(detailedProjects.length / projectsPerPage);

  // Handle pagination
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300 min-h-screen" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Click on details to explore my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mb-16">
          {detailedProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage).map((project, index) => (
            <motion.div
              key={(currentPage - 1) * projectsPerPage + index}
              className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 transition-all hover:shadow-md group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 mb-5 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none"></div>

                {/* Hover overlay with Details button */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-lg shadow-blue-500/30"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-2 pb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                  {project.title}
                </h2>
                <button
                  className="inline-flex items-center text-primary font-medium hover:text-blue-600 transition-colors group-hover:translate-x-1 duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  Details
                  <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          <button
            className={`flex items-center px-4 py-2 ${currentPage === 1 ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <span className="material-symbols-outlined text-lg mr-1">arrow_back</span>
            <span className="font-medium">Previous</span>
          </button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center rounded-xl font-medium ${currentPage === page ? 'bg-primary text-white shadow-md shadow-blue-500/30' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className={`flex items-center px-4 py-2 ${currentPage === totalPages ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <span className="font-medium">Next</span>
            <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  )
}

export default Project
