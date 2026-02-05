import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Dhiraj<span>.</span></h3>
            <p>Building digital experiences with passion</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="mailto:dhiraj@example.com">
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 Dhiraj Chowdhury. Made with <FiHeart className="heart" /> using MERN Stack
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
