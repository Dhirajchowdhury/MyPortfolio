import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiStar } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'EcoTracker - Sustainability App',
      description: 'A full-stack MERN application that helps users track their carbon footprint and adopt sustainable practices. Features real-time analytics and community challenges.',
      image: '/Images/project image analytics dashboard.png',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'TaskFlow - Project Management',
      description: 'Modern project management tool with drag-and-drop functionality, real-time collaboration, and advanced analytics dashboard.',
      image: '/Images/project image to do list.png',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'WeatherWise - Smart Weather App',
      description: 'AI-powered weather application with personalized recommendations, location-based alerts, and beautiful data visualizations.',
      image: '/Images/project image weather dashboard.png',
      category: 'frontend',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'PWA'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'ChatBot AI Assistant',
      description: 'Intelligent chatbot with natural language processing, context awareness, and integration with multiple platforms.',
      image: '/Images/project image chatbot ui.png',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'OpenAI API', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'ShopSphere - E-commerce Platform',
      description: 'Complete e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: '/Images/project image ecommerce.png',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Framer Motion. Features smooth animations and optimized performance.',
      image: '/Images/project image portfolio website.png',
      category: 'frontend',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Responsive Design'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section-padding bg-pattern">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Things I've built with passion and code</p>
        </motion.div>

        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-tab ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
              <span className="count">({category.count})</span>
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              {project.featured && (
                <div className="featured-badge">
                  <FiStar />
                  Featured
                </div>
              )}
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiGithub />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FiCode />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cta-card glass">
            <h3>Want to see more?</h3>
            <p>Check out my GitHub for more projects and contributions</p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiGithub />
              Visit GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;