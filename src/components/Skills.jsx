import { motion } from 'framer-motion'
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, 
  SiJavascript, SiHtml5, SiCss3, SiGit, 
  SiTailwindcss, SiPostman, SiVisualstudiocode, SiCplusplus 
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'MERN Stack',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Tools I use to bring ideas to life</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (catIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
