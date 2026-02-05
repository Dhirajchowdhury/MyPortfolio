import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero bg-pattern">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hey there! 👋
            </motion.p>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I'm <span className="text-gradient">Dhiraj Chowdhury</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Full Stack Developer & Tech Enthusiast
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              2nd-year CSE student crafting digital experiences with the MERN stack. 
              I turn coffee into code and ideas into reality ☕✨
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Connect
              </a>
            </motion.div>
            
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="image-container floating">
              <img 
                src="/Images/Dhiraj image.jpg" 
                alt="Dhiraj Chowdhury" 
                className="profile-image"
              />
              <div className="image-glow"></div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-element element-1">⚡</div>
              <div className="floating-element element-2">🚀</div>
              <div className="floating-element element-3">💻</div>
              <div className="floating-element element-4">🎯</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
        >
          <FiArrowDown className="scroll-arrow" />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;