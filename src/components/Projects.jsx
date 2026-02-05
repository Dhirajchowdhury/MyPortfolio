import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'EcoTracker - Sustainability App',
      description: 'Full-stack MERN app for tracking carbon footprint with real-time analytics and community challenges.',
      image: '/Images/project image analytics dashboard.png',
      category: 'fullstack',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'TaskFlow Manager',
      description: 'Project management tool with drag-and-drop, real-time collaboration, and analytics.',
      image: '/Images/project image to do list.png',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'WeatherWise App',
      description: 'AI-powered weather app with personalized recommendations and beautiful visualizations.',
      image: '/Images/project image weather dashboard.png',
      category: 'frontend',
      tech: ['React', 'API', 'Chart.js', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'AI ChatBot Assistant',
      description: 'Intelligent chatbot with NLP, context awareness, and multi-platform integration.',
      image: '/Images/project image chatbot ui.png',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 5,
      title: 'ShopSphere E-commerce',
      description: 'Complete e-commerce platform with payment integration and admin dashboard.',
      image: '/Images/project image ecommerce.png',
      category: 'fullstack',
      tech: ['MERN', 'Stripe', 'JWT', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio with smooth animations and optimized performance.',
      image: '/Images/project image portfolio website.png',
      category: 'frontend',
      tech: ['React', 'Framer Motion', 'CSS3', 'Vite'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Things I've built with passion</p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filters.map(f => (
            <button
              key={f.id}
              className={`filter-btn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
