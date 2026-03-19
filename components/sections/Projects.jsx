'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Kidguides',
    tagline: 'This is my Startup and Project as well',
    description:
      'KidGuides is a tech-enabled offline tutoring platform connecting students (Class 0–7) with mentors from reputed colleges. The website manages student registrations, mentor onboarding, batch scheduling, and attendance tracking. It also provides a dashboard for performance monitoring and communication between parents, mentors, and admins, ensuring organized and scalable learning support.',
    image: '/Kidguides.png',
    tech: ['Next.js', 'Tailwind CSS', 'React', 'Mongodb', 'Gsap'],
    status: 'Working',
    github: 'https://github.com/Dhirajchowdhury/Kidguides',
    demo: 'https://github.com/Dhirajchowdhury/Kidguides',
    color: '#00f5ff',
    imagePosition: 'top center',
    imageScale: 1.0,
  },
  {
    id: 2,
    title: 'Bondbuy',
    tagline: 'Buy fragments of Government Bonds',
    description:
      'BondBuy is a fintech platform that enables fractional investment in government bonds, making traditionally high-value instruments accessible to small investors. It allows users to invest through SIP-based contributions, lowering the entry barrier and encouraging disciplined investing. The platform uses blockchain-backed secure payment and record systems to ensure transparency, trust, and tamper-proof transactions',
    image: '/Bondbuy.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Solidity', 'Ethers.js', 'TensorFlow'],
    status: 'completed',
    github: 'https://github.com/Dhirajchowdhury/bondbuy',
    demo: 'https://bondbuy-eight.vercel.app/',
    color: '#a020f0',
    imagePosition: 'top center',
    imageScale: 1.0,
  },
  {
    id: 3,
    title: 'Stockey',
    tagline: 'Clearing ur Vision in stocks',
    description:
      "Stockey is a platform designed to help users understand and analyze stocks more easily. It simplifies market data by showing clear trends and insights, making it easier for beginners to study stock movements. The platform also generates handmade-style PPT reports with all key details, helping users quickly learn about a company's performance, trends, and important financial metrics.",
    image: '/Stockey.png',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
    status: 'in-progress',
    github: 'https://github.com/Dhirajchowdhury/Stockey',
    demo: 'Under maintenance',
    color: '#00ff88',
    imagePosition: 'top center',
    imageScale: 1.0,
  },
  {
    id: 4,
    title: 'Ayuryog',
    tagline: 'Unleashing the combined power of Ayurveda and Yoga',
    description:
      'AyurYog is a wellness platform that brings together the combined benefits of Yoga and Ayurveda to promote holistic health. It offers personalized dashboards that guide users with tailored wellness routines based on their needs. The platform also provides online yoga classes and guided breathing exercises directly on the website, making mindful living easily accessible.',
    image: '/Ayuryog.png',
    tech: ['OpenAI API', 'Ethers.js', 'React'],
    status: 'in-progress',
    github: 'https://github.com/Dhirajchowdhury/AyurSutra',
    demo: 'https://github.com/Dhirajchowdhury/AyurSutra',
    color: '#f59e0b',
    imagePosition: 'top center',
    imageScale: 1.0,
  },
]

const DOTS = ['#ff5f57', '#febc2e', '#28c840']

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        perspective: '1200px',
        height: '420px',
        cursor: 'pointer',
      }}
      className="group hoverable"
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        className="flip-inner"
      >

        {/* ── FRONT ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '30px',
            overflow: 'hidden',
            border: `1px solid ${project.color}22`,
            background: `linear-gradient(135deg, ${project.color}22, rgba(10,10,15,0.9))`,
          }}
        >

          {/* ── Image zone with browser chrome ── */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: '110px',
            borderRadius: '30px 30px 0 0',
            overflow: 'hidden',
            background: '#0d0f1a',
          }}>
            {/* Browser chrome bar */}
            <div style={{
              height: '24px',
              background: '#13151f',
              display: 'flex',
              alignItems: 'center',
              padding: '0 10px',
              gap: '5px',
              borderBottom: `1px solid ${project.color}18`,
              flexShrink: 0,
            }}>
              {DOTS.map(c => (
                <div key={c} style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: c,
                  opacity: 0.75,
                }} />
              ))}
              <div style={{
                flex: 1,
                height: '9px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.06)',
                margin: '0 8px',
              }} />
            </div>

            {/* Screenshot */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: 0,
              right: 0,
              bottom: 0,
              overflow: 'hidden',
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: project.imagePosition || 'top center',
                  transform: `scale(${project.imageScale || 0.75})`,
                  transformOrigin: 'top center',
                  display: 'block',
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>

            {/* Fade at bottom of image zone */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '50px',
              background: 'linear-gradient(to bottom, transparent, rgba(10,10,15,0.97))',
              pointerEvents: 'none',
            }} />
          </div>

          {/* ── Bottom text overlay ── */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            padding: '1rem 1.5rem 1.3rem',
            background: 'rgba(10,10,15,0.98)',
          }}>
            {/* Accent line */}
            <div style={{
              width: '28px', height: '2px', borderRadius: '9999px',
              background: project.color,
              boxShadow: `0 0 8px ${project.color}`,
              marginBottom: '0.45rem',
            }} />

            {/* Title row + status badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.4rem',
              gap: '8px',
            }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#fff',
                margin: 0,
              }}>
                {project.title}
              </h3>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                background: 'rgba(10,10,15,0.6)',
                border: `1px solid ${project.status === 'completed' ? '#00ff88' : '#f59e0b'}44`,
                borderRadius: '9999px',
                padding: '3px 10px',
                fontSize: '0.6rem',
                fontFamily: 'monospace',
                color: project.status === 'completed' ? '#00ff88' : '#f59e0b',
                letterSpacing: '0.08em',
                flexShrink: 0,
              }}>
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: project.status === 'completed' ? '#00ff88' : '#f59e0b',
                  boxShadow: `0 0 5px ${project.status === 'completed' ? '#00ff88' : '#f59e0b'}`,
                  animation: project.status === 'in-progress' ? 'pulse 1.5s infinite' : 'none',
                }} />
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </div>
            </div>

            {/* Tech badges — max 4, then "+N more" */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '0.5rem' }}>
              {project.tech.slice(0, 4).map((t, i) => (
                <span key={`${t}-${i}`} style={{
                  fontSize: '0.6rem',
                  fontFamily: 'monospace',
                  color: project.color,
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                  borderRadius: '4px',
                  padding: '2px 7px',
                  letterSpacing: '0.04em',
                }}>
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span style={{
                  fontSize: '0.6rem', fontFamily: 'monospace',
                  color: 'rgba(255,255,255,0.3)',
                  padding: '2px 4px',
                }}>
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>

            <p style={{
              fontSize: '0.58rem',
              color: 'rgba(255,255,255,0.2)',
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
              margin: 0,
            }}>
              HOVER TO SEE MORE →
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'rgba(10,10,15,0.96)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${project.color}33`,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Top accent */}
          <div style={{
            position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px',
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          }} />

          <div>
            <div style={{
              display: 'inline-block',
              fontSize: '0.6rem', fontFamily: 'monospace',
              letterSpacing: '0.2em', color: project.color,
              border: `1px solid ${project.color}33`,
              borderRadius: '20px', padding: '3px 12px',
              marginBottom: '1rem',
            }}>
              {project.status === 'completed' ? '✓ COMPLETED' : '⟳ IN PROGRESS'}
            </div>

            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, fontSize: '1.5rem',
              color: '#fff', marginBottom: '0.5rem',
            }}>
              {project.title}
            </h3>

            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              marginBottom: '1.4rem',
            }}>
              {project.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                fontSize: '0.6rem', fontFamily: 'monospace',
                color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em',
                marginBottom: '0.5rem',
              }}>
                BUILT WITH
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: '0.7rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    color: project.color,
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}35`,
                    borderRadius: '6px',
                    padding: '3px 10px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px',
                padding: '0.65rem',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: '0.8rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <FiGithub size={16} /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px',
                padding: '0.65rem',
                borderRadius: '10px',
                background: `${project.color}18`,
                border: `1px solid ${project.color}44`,
                color: project.color,
                fontSize: '0.8rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${project.color}30`
                e.currentTarget.style.boxShadow = `0 0 14px ${project.color}33`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${project.color}18`
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .group:hover .flip-inner {
          transform: rotateY(180deg);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ position: 'relative', padding: '6rem 0', backgroundColor: '#0a0a0f', overflow: 'hidden' }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '15%', left: '-10%',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', right: '-10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160,32,240,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 30%, #00f5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.75rem',
          }}>
            Things I've Built
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            Hover any card to see details
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(520px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
