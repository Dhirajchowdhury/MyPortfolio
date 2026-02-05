import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'dhirajchowdhury01@gmail.com',
      link: 'mailto:dhirajchowdhury01@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+91 9748798629',
      link: 'tel:+919748798629'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Kolkata, India',
      link: 'https://maps.google.com/?q=Kolkata,India'
    }
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dhiraj-chowdhury-4a2a452b0',
      color: '#0077B5'
    },
    {
      icon: <FiGithub />,
      name: 'GitHub',
      url: 'https://github.com',
      color: '#333'
    },
    {
      icon: <FiInstagram />,
      name: 'Instagram',
      url: 'https://www.instagram.com/dhiraj__chowdhury',
      color: '#E4405F'
    }
  ];

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Ready to start a conversation? I'd love to hear from you!</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-intro glass">
              <h3>Get in Touch</h3>
              <p>
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or just have a chat about technology and development. Feel free to reach out!
              </p>
              
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="method-icon">{info.icon}</div>
                    <div className="method-details">
                      <span className="method-title">{info.title}</span>
                      <span className="method-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ '--hover-color': social.color }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span className="social-tooltip">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cta-card glass">
            <h3>Ready to work together?</h3>
            <p>Let's create something amazing! I'm available for freelance projects and full-time opportunities.</p>
            <div className="cta-buttons">
              <a href="mailto:dhirajchowdhury01@gmail.com" className="btn-primary">
                <FiMail />
                Email Me
              </a>
              <a href="/resume" className="btn-secondary">
                View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;