import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCalendar } from 'react-icons/fi';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    // Create a dummy PDF download link
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf'; // Replace with actual resume path
    link.download = 'Dhiraj_Chowdhury_Resume.pdf';
    link.click();
  };

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Heritage Institute of Technology',
      location: 'Kolkata, India',
      duration: '2023 - 2027',
      gpa: '8.5/10',
      relevant: ['Data Structures & Algorithms', 'Web Development', 'Database Management', 'Software Engineering']
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer Intern',
      company: 'TechStart Solutions',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      achievements: [
        'Developed responsive web applications using React.js and Node.js',
        'Implemented RESTful APIs and integrated with MongoDB database',
        'Collaborated with design team to create user-friendly interfaces',
        'Optimized application performance resulting in 30% faster load times'
      ]
    },
    {
      title: 'Web Development Freelancer',
      company: 'Self-Employed',
      location: 'Remote',
      duration: 'Jan 2024 - Present',
      achievements: [
        'Built custom websites for 5+ small businesses',
        'Specialized in MERN stack development and responsive design',
        'Managed client relationships and project timelines',
        'Achieved 100% client satisfaction rate'
      ]
    }
  ];

  const projects = [
    {
      name: 'EcoTracker - Sustainability App',
      tech: 'React, Node.js, MongoDB, Express',
      description: 'Full-stack application for tracking carbon footprint with real-time analytics'
    },
    {
      name: 'TaskFlow - Project Management Tool',
      tech: 'React, TypeScript, Tailwind CSS',
      description: 'Modern project management tool with drag-and-drop functionality'
    },
    {
      name: 'WeatherWise - Smart Weather App',
      tech: 'React, Chart.js, OpenWeather API',
      description: 'AI-powered weather application with personalized recommendations'
    }
  ];

  const skills = {
    'Programming Languages': ['JavaScript', 'C/C++', 'Python', 'TypeScript'],
    'Frontend': ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    'Backend': ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication'],
    'Database': ['MongoDB', 'MySQL', 'Firebase'],
    'Tools & Technologies': ['Git/GitHub', 'VS Code', 'Figma', 'Postman', 'npm/yarn']
  };

  return (
    <div className="resume-page">
      <div className="resume-container">
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-content">
            <div className="personal-info">
              <h1 className="name">Dhiraj Kumar Chowdhury</h1>
              <h2 className="title">Full Stack Developer</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <FiMail />
                  <span>dhirajchowdhury01@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FiPhone />
                  <span>+91 9748798629</span>
                </div>
                <div className="contact-item">
                  <FiMapPin />
                  <span>Kolkata, India</span>
                </div>
                <div className="contact-item">
                  <FiLinkedin />
                  <span>linkedin.com/in/dhiraj-chowdhury</span>
                </div>
                <div className="contact-item">
                  <FiGithub />
                  <span>github.com/dhirajchowdhury</span>
                </div>
              </div>
            </div>
            <div className="header-actions">
              <button className="btn-primary download-btn" onClick={handleDownload}>
                <FiDownload />
                Download PDF
              </button>
            </div>
          </div>
        </motion.div>

        <div className="resume-content">
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="section-title">Professional Summary</h3>
            <p className="summary-text">
              Passionate and dedicated 2nd-year Computer Science student with strong foundation in 
              full-stack web development. Experienced in MERN stack with hands-on project experience 
              and internship background. Committed to continuous learning and delivering high-quality, 
              scalable solutions. Strong problem-solving skills with expertise in data structures and 
              algorithms using C/C++.
            </p>
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="section-title">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="edu-header">
                  <div>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}, {edu.location}</p>
                  </div>
                  <div className="edu-meta">
                    <span className="edu-duration">
                      <FiCalendar />
                      {edu.duration}
                    </span>
                    <span className="edu-gpa">GPA: {edu.gpa}</span>
                  </div>
                </div>
                <div className="relevant-courses">
                  <strong>Relevant Coursework:</strong>
                  <div className="course-tags">
                    {edu.relevant.map((course, courseIndex) => (
                      <span key={courseIndex} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="section-title">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="exp-header">
                  <div>
                    <h4 className="exp-title">{exp.title}</h4>
                    <p className="exp-company">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="exp-duration">
                    <FiCalendar />
                    {exp.duration}
                  </span>
                </div>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="section-title">Key Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-header">
                  <h4 className="project-name">{project.name}</h4>
                  <span className="project-tech">{project.tech}</span>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="section-title">Technical Skills</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category-title">{category}</h4>
                  <div className="skill-tags">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="section-title">Additional Information</h3>
            <div className="additional-info">
              <div className="info-item">
                <strong>Languages:</strong> English (Fluent), Hindi (Native), Bengali (Native)
              </div>
              <div className="info-item">
                <strong>Interests:</strong> Bike Riding, Traveling, Acting, Cooking, Music, Team Leadership
              </div>
              <div className="info-item">
                <strong>Availability:</strong> Open to internships and entry-level positions
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Resume;