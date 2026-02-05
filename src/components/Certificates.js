import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink, FiCheck } from 'react-icons/fi';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2024',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and MongoDB',
      image: 'https://via.placeholder.com/300x200/5D866C/FFFFFF?text=Full+Stack+Cert',
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      credentialUrl: 'https://freecodecamp.org',
      verified: true
    },
    {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2024',
      description: 'Advanced JavaScript concepts, algorithms, and data structures implementation',
      image: 'https://via.placeholder.com/300x200/C2A68C/FFFFFF?text=JS+Algorithms',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      credentialUrl: 'https://freecodecamp.org',
      verified: true
    },
    {
      id: 3,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2024',
      description: 'Comprehensive React course covering hooks, context, routing, and advanced patterns',
      image: 'https://via.placeholder.com/300x200/BBDCE5/FFFFFF?text=React+Complete',
      skills: ['React', 'Redux', 'React Router', 'Hooks'],
      credentialUrl: 'https://udemy.com',
      verified: true
    },
    {
      id: 4,
      title: 'Node.js Developer Certification',
      issuer: 'MongoDB University',
      date: '2024',
      description: 'Backend development with Node.js, Express, and MongoDB integration',
      image: 'https://via.placeholder.com/300x200/CFAB8D/FFFFFF?text=Node.js+Cert',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      credentialUrl: 'https://university.mongodb.com',
      verified: true
    },
    {
      id: 5,
      title: 'Git & GitHub Mastery',
      issuer: 'GitHub',
      date: '2023',
      description: 'Version control, collaboration, and advanced Git workflows',
      image: 'https://via.placeholder.com/300x200/E6D8C3/FFFFFF?text=Git+GitHub',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      credentialUrl: 'https://github.com',
      verified: true
    },
    {
      id: 6,
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: 'Modern CSS techniques, Flexbox, Grid, and responsive design principles',
      image: 'https://via.placeholder.com/300x200/D9C4B0/FFFFFF?text=Responsive+Design',
      skills: ['CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
      credentialUrl: 'https://freecodecamp.org',
      verified: true
    }
  ];

  return (
    <section id="certificates" className="certificates section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Certificates & Achievements</h2>
          <p className="section-subtitle">Continuous learning and skill validation</p>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certificate-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
                <div className="cert-overlay">
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-credential"
                  >
                    <FiExternalLink />
                    View Credential
                  </a>
                </div>
              </div>

              <div className="cert-content">
                <div className="cert-header">
                  <div className="cert-icon">
                    <FiAward />
                  </div>
                  {cert.verified && (
                    <div className="verified-badge">
                      <FiCheck />
                      Verified
                    </div>
                  )}
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <div className="cert-date">
                    <FiCalendar />
                    {cert.date}
                  </div>
                </div>

                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary cert-btn"
                >
                  <FiExternalLink />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certificates-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stats-container glass">
            <div className="stat-item">
              <div className="stat-number">{certificates.length}</div>
              <div className="stat-label">Certificates Earned</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Completion Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2024</div>
              <div className="stat-label">Most Recent</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Learning Journey</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="learning-commitment"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="commitment-card glass">
            <h3>Commitment to Growth</h3>
            <p>
              I believe in continuous learning and staying updated with the latest technologies. 
              These certificates represent my dedication to mastering new skills and delivering 
              quality solutions.
            </p>
            <div className="next-goals">
              <h4>Currently Pursuing:</h4>
              <div className="goal-tags">
                <span className="goal-tag">AWS Cloud Practitioner</span>
                <span className="goal-tag">TypeScript Certification</span>
                <span className="goal-tag">Docker & Kubernetes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;