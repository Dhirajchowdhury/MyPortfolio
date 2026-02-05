import { motion } from 'framer-motion'
import { FiCode, FiHeart, FiTarget, FiAward } from 'react-icons/fi'
import './About.css'

const About = () => {
  const stats = [
    { icon: <FiCode />, number: '2+', label: 'Years Coding' },
    { icon: <FiTarget />, number: '15+', label: 'Projects' },
    { icon: <FiAward />, number: '5+', label: 'Certifications' },
    { icon: <FiHeart />, number: '∞', label: 'Passion' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-card glass">
              <h3>Hello! I'm Dhiraj 👋</h3>
              <p>
                I'm a passionate 2nd-year B.Tech Computer Science student at 
                <strong> Heritage Institute of Technology</strong>, specializing in 
                full-stack MERN development. My journey in tech started with curiosity 
                and has evolved into a deep passion for creating impactful digital solutions.
              </p>
              <p>
                I love building scalable web applications using <strong>MongoDB</strong>, 
                <strong> Express.js</strong>, <strong> React</strong>, and <strong> Node.js</strong>. 
                From designing intuitive user interfaces to architecting robust backend systems, 
                I enjoy every aspect of the development process.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new places on my bike 🏍️, 
                experimenting with new recipes 🍳, or leading team projects. I believe in 
                continuous learning and pushing boundaries both in code and in life.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <img src="/Images/about me 1.jpg" alt="About Dhiraj" />
              <div className="image-overlay">
                <p>Always Learning, Always Growing 🚀</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card glass"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
