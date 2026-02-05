import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiHeart, FiTarget, FiTrendingUp } from 'react-icons/fi';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FiCode />, number: '2+', label: 'Years Coding' },
    { icon: <FiTarget />, number: '15+', label: 'Projects Built' },
    { icon: <FiTrendingUp />, number: '5+', label: 'Tech Stacks' },
    { icon: <FiHeart />, number: '∞', label: 'Passion Level' }
  ];

  const interests = [
    { emoji: '🏍️', title: 'Bike Riding', desc: 'Love exploring new roads' },
    { emoji: '✈️', title: 'Traveling', desc: 'Discovering new places' },
    { emoji: '🎭', title: 'Acting', desc: 'Creative expression' },
    { emoji: '🍳', title: 'Cooking', desc: 'Experimenting with flavors' },
    { emoji: '🎵', title: 'Music', desc: 'Rhythm and beats' },
    { emoji: '👥', title: 'Team Leadership', desc: 'Guiding and inspiring' }
  ];

  return (
    <section id="about" className="about section-padding bg-pattern">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know the person behind the code</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-card glass">
              <h3>Hey, I'm Dhiraj! 🚀</h3>
              <p>
                I'm a 2nd-year B.Tech Computer Science student at Heritage Institute of Technology, 
                passionate about creating digital solutions that make a difference. My journey in tech 
                started with curiosity and has evolved into a deep love for full-stack development.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new places on my bike, experimenting 
                in the kitchen, or leading team projects. I believe in continuous learning and 
                pushing boundaries - both in code and in life.
              </p>
              <p>
                My goal? To become a versatile software engineer who can bridge the gap between 
                innovative ideas and practical solutions. Let's build something amazing together! ✨
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img src="/Images/about me 1.jpg" alt="About Dhiraj" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Always Learning</h4>
                  <p>Staying curious and growing every day</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="interests-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="interests-title">Beyond Coding</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="interest-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="interest-emoji">{interest.emoji}</div>
                <h4>{interest.title}</h4>
                <p>{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;