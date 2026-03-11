'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

// ── Project data ─────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'Kidguides',
    tagline: 'This is my Startup and Project as well ',
    description:
      'KidGuides is a tech-enabled offline tutoring platform connecting students (Class 0–7) with mentors from reputed colleges. The website manages student registrations, mentor onboarding, batch scheduling, and attendance tracking. It also provides a dashboard for performance monitoring and communication between parents, mentors, and admins, ensuring organized and scalable learning support.',
    image: '/Kidguides.png',
    tech: ['Next.js', 'Tailwind CSS', 'React', 'Mongodb', 'Gsap'],
    status: 'Working',
    github: 'https://github.com/Dhirajchowdhury/Kidguides',
    demo: 'https://github.com/Dhirajchowdhury/Kidguides',
    color: '#00f5ff',
  },
  {
    id: 2,
    title: 'Bondbuy',
    tagline: 'Buy fragments of Government Bonds',
    description:
      'BondBuy is a fintech platform that enables fractional investment in government bonds, making traditionally high-value instruments accessible to small investors. It allows users to invest through SIP-based contributions, lowering the entry barrier and encouraging disciplined investing. The platform uses blockchain-backed secure payment and record systems to ensure transparency, trust, and tamper-proof transactions',
    image: '/Bondbuy.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Solidity', 'Ethers.js', 'React', 'TensorFlow'],
    status: 'completed',
    github: 'https://github.com/Dhirajchowdhury/bondbuy',
    demo: 'https://bondbuy-eight.vercel.app/',
    color: '#a020f0',
  },
  {
    id: 3,
    title: 'Stockey',
    tagline: 'Clearing ur Vision in stocks',
    description:
      'Stockey is a platform designed to help users understand and analyze stocks more easily. It simplifies market data by showing clear trends and insights, making it easier for beginners to study stock movements. The platform also generates handmade-style PPT reports with all key details, helping users quickly learn about a company’s performance, trends, and important financial metrics.',
    image: '/Stockey.png',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
    status: 'in-progress',
    github: 'https://github.com/Dhirajchowdhury/Stockey',
    demo: 'https://github.com/Dhirajchowdhury/Stockey#',
    color: '#00ff88',
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
  },
]

// ── Flip Card ────────────────────────────────────────────────────
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
            borderRadius: '20px',
            overflow: 'hidden',
            border: `1px solid ${project.color}22`,
          }}
        >
          {/* Project image */}
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentNode.style.background =
                `linear-gradient(135deg, ${project.color}22, rgba(10,10,15,0.9))`
            }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(180deg,
              transparent 30%,
              rgba(10,10,15,0.7) 65%,
              rgba(10,10,15,0.97) 100%
            )`,
          }} />

          {/* Top-left status badge */}
          <div style={{
            position: 'absolute', top: '1rem', left: '1rem',
            display: 'flex', alignItems: 'center', gap: '6px',
            background: 'rgba(10,10,15,0.75)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${project.status === 'completed' ? '#00ff88' : '#f59e0b'}44`,
            borderRadius: '9999px',
            padding: '4px 12px',
            fontSize: '0.65rem',
            fontFamily: 'monospace',
            color: project.status === 'completed' ? '#00ff88' : '#f59e0b',
            letterSpacing: '0.08em',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: project.status === 'completed' ? '#00ff88' : '#f59e0b',
              boxShadow: `0 0 6px ${project.status === 'completed' ? '#00ff88' : '#f59e0b'}`,
              animation: project.status === 'in-progress' ? 'pulse 1.5s infinite' : 'none',
            }} />
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </div>

          {/* Bottom content */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
            {/* Color accent line */}
            <div style={{
              width: '32px', height: '3px', borderRadius: '9999px',
              background: project.color,
              boxShadow: `0 0 10px ${project.color}`,
              marginBottom: '0.6rem',
            }} />
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, fontSize: '1.4rem',
              color: '#fff', marginBottom: '0.3rem',
            }}>
              {project.title}
            </h3>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: '0.9rem',
            }}>
              {project.tagline}
            </p>

            {/* Tech badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.tech.map((t, i) => (
                <span key={`${t}-${i}`} style={{
                  fontSize: '0.62rem',
                  fontFamily: 'monospace',
                  color: project.color,
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                  borderRadius: '4px',
                  padding: '2px 8px',
                  letterSpacing: '0.04em',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Hover hint */}
            <p style={{
              marginTop: '0.8rem',
              fontSize: '0.62rem',
              color: 'rgba(255,255,255,0.25)',
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
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

          {/* Back content */}
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

            {/* Tech stack */}
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
                e.currentTarget.style.boxShadow  = `0 0 14px ${project.color}33`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${project.color}18`
                e.currentTarget.style.boxShadow  = 'none'
              }}
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* CSS flip on hover */}
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

// ── Main Section ─────────────────────────────────────────────────
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

        {/* ── Header ── */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{}}>

          </div>
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

        {/* ── 2×2 Grid ── */}
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
