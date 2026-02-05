import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiCode, FiCoffee, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="brand-name">Dhiraj<span className="brand-dot">.</span></h3>
              <p className="brand-tagline">
                Crafting digital experiences with passion and precision
              </p>
              <div className="brand-stats">
                <div className="stat">
                  <FiCode />
                  <span>Full Stack Developer</span>
                </div>
                <div className="stat">
                  <FiCoffee />
                  <span>Coffee Enthusiast</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="footer-contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Get In Touch</h4>
              <div className="contact-details">
                <p>dhirajchowdhury01@gmail.com</p>
                <p>+91 9748798629</p>
                <p>Kolkata, India</p>
              </div>
              <div className="availability">
                <div className="status-indicator"></div>
                <span>Available for opportunities</span>
              </div>
            </motion.div>

            <motion.div
              className="footer-cta"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Let's Work Together</h4>
              <p>Ready to bring your ideas to life?</p>
              <a href="#contact" className="btn-primary footer-btn">
                Start a Project
              </a>
            </motion.div>
          </div>

          <div className="footer-bottom">
            <motion.div
              className="footer-copyright"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                © {currentYear} Dhiraj Chowdhury. Made with{' '}
                <FiHeart className="heart-icon" /> and lots of{' '}
                <FiCoffee className="coffee-icon" />
              </p>
              <p className="tech-stack">
                Built with React, Framer Motion & Modern CSS
              </p>
            </motion.div>

            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;