import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 85, icon: '/Images/react logo.jpg' },
        { name: 'JavaScript', level: 90, icon: '/Images/js logo.png' },
        { name: 'HTML5', level: 95, icon: '/Images/html logo.jpeg' },
        { name: 'CSS3', level: 88, icon: '/Images/css logo.jpeg' }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 80, icon: '/Images/Node.js_logo.png' },
        { name: 'MongoDB', level: 75, icon: '/Images/mongodb-logo.png' },
        { name: 'Express.js', level: 78, icon: '🚀' },
        { name: 'REST APIs', level: 82, icon: '🔗' }
      ]
    },
    {
      title: 'Programming',
      icon: '💻',
      skills: [
        { name: 'C/C++', level: 85, icon: '/Images/c++ logo.png' },
        { name: 'Data Structures', level: 80, icon: '📊' },
        { name: 'Algorithms', level: 75, icon: '🧮' },
        { name: 'Problem Solving', level: 88, icon: '🧩' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 85, icon: '/Images/github logo.png' },
        { name: 'VS Code', level: 90, icon: '📝' },
        { name: 'Figma', level: 70, icon: '🎨' },
        { name: 'Firebase', level: 65, icon: '🔥' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with and love</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.1) 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon">
                        {skill.icon.startsWith('/') ? (
                          <img src={skill.icon} alt={skill.name} />
                        ) : (
                          <span>{skill.icon}</span>
                        )}
                      </div>
                      <div className="skill-details">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="summary-card glass">
            <h3>Currently Learning</h3>
            <div className="learning-tags">
              <span className="learning-tag">TypeScript</span>
              <span className="learning-tag">Next.js</span>
              <span className="learning-tag">GraphQL</span>
              <span className="learning-tag">Docker</span>
              <span className="learning-tag">AWS</span>
            </div>
            <p>Always expanding my toolkit and staying updated with the latest technologies!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;