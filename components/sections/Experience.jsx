'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiCalendar, FiAward, FiCode } from 'react-icons/fi'
import { Center } from '@react-three/drei'

// ── Experience / Hackathon data ──────────────────────────────────
const experiences = [
  {
    id: 1,
    event:       'HackHeritage 2.0',
    organizer:   'Heritage Institute Of Technology',
    location:    'Kolkata',
    date:        'October 2025',
    project:     'Ayursutra',
    description: 'Built Ayursutra — a platform rooted in Indian traditional knowledge systems, bridging Ayurveda with modern web technology. Focused on intuitive UI and smooth user experience.',
    role:        'Frontend Developer',
    achievement: 'Participant',
    tech:        ['Next.js', 'React', 'Tailwind CSS'],
    color:       '#00f5ff',
    icon:        '🌿',
  },
  {
    id: 2,
    event:       'Genesis 2025',
    organizer:   'IIM Calcutta',
    location:    'Kolkata',
    date:        'November 2025',
    project:     'Business Carnival',
    description: 'Attended an intensive business and entrepreneurship workshop at IIM Calcutta\'s flagship Genesis event. Competed in a high-intensity quiz competition against top students from across India.',
    role:        'Competitor',
    achievement: 'Finalist — Quiz Competition',
    tech:        [],
    color:       '#f59e0b',
    icon:        '🏆',
  },
  {
    id: 3,
    event:       'Gen AI Hackathon',
    organizer:   'Meghnad Saha Institute · ML Kolkata',
    location:    'Kolkata',
    date:        'December 2025',
    project:     'DocAI',
    description: 'Developed DocAI — a healthcare web platform that uses image scanning to recognise diseases and provide preliminary diagnosis. Handled both frontend design and database architecture.',
    role:        'Frontend & Database',
    achievement: '🥈 Runner Up',
    tech:        ['OpenAI API', 'REST API', 'React', 'Node.js', 'MongoDB'],
    color:       '#00ff88',
    icon:        '🤖',
  },
  {
    id: 4,
    event:       'East India Blockchain Summit',
    organizer:   'IIT Kharagpur',
    location:    'Kharagpur',
    date:        'January 2026',
    project:     'BondBuy',
    description: 'Built BondBuy — a blockchain platform that fractionalises government bonds, making secure investments accessible to common citizens. Led both frontend and backend development.',
    role:        'Frontend & Backend',
    achievement: 'Finalist',
    tech:        ['Solidity', 'Weil Chain', 'Phantom Wallet', 'React', 'Node.js', 'MongoDB'],
    color:       '#a020f0',
    icon:        '⛓️',
  },
]

// ── Timeline dot ─────────────────────────────────────────────────
function TimelineDot({ color, isLeft }) {
  return (
    <div style={{
      position: 'absolute',
      top: '2.2rem',
      [isLeft ? 'right' : 'left']: '-2.05rem',
      width: '18px', height: '18px',
      borderRadius: '50%',
      background: color,
      boxShadow: `0 0 12px ${color}, 0 0 24px ${color}55`,
      border: '3px solid #0a0a0f',
      zIndex: 2,
      transform: 'translateX(50%)',
    }} />
  )
}

// ── Single experience card ────────────────────────────────────────
function ExperienceCard({ exp, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0   // even → left side, odd → right side

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 40px 1fr',
        gap: '0',
        marginBottom: '2.5rem',
        alignItems: 'start',
      }}
    >
      {/* Left slot */}
      <div style={{ padding: '0 2rem 0 0', display: 'flex', justifyContent: 'flex-end' }}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ width: '100%', maxWidth: '480px', position: 'relative' }}
          >
            <TimelineDot color={exp.color} isLeft={true} />
            <Card exp={exp} />
          </motion.div>
        )}
      </div>

      {/* Center line — just spacing */}
      <div />

      {/* Right slot */}
      <div style={{ padding: '0 0 0 2rem' }}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ width: '100%', maxWidth: '480px', position: 'relative' }}
          >
            <TimelineDot color={exp.color} isLeft={false} />
            <Card exp={exp} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

// ── Card content ──────────────────────────────────────────────────
function Card({ exp }) {
  const isRunner = exp.achievement.includes('Runner')
  const isWinner = exp.achievement.includes('Winner') || exp.achievement.includes('1st')

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${exp.color}25`,
        borderRadius: '18px',
        padding: '1.8rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${exp.color}55`
        e.currentTarget.style.boxShadow   = `0 0 28px ${exp.color}18`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${exp.color}25`
        e.currentTarget.style.boxShadow   = 'none'
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px',
        background: `linear-gradient(90deg, transparent, ${exp.color}66, transparent)`,
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.9rem', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
            background: `${exp.color}15`,
            border: `1px solid ${exp.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.2rem',
          }}>
            {exp.icon}
          </div>
          <div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, fontSize: '1rem',
              color: '#fff', lineHeight: 1.2,
            }}>
              {exp.event}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
              <FiMapPin size={10} color={exp.color} />
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
                {exp.organizer}
              </span>
            </div>
          </div>
        </div>

        {/* Date badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0,
          background: `${exp.color}10`,
          border: `1px solid ${exp.color}25`,
          borderRadius: '9999px',
          padding: '3px 10px',
        }}>
          <FiCalendar size={10} color={exp.color} />
          <span style={{ fontSize: '0.62rem', color: exp.color, fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
            {exp.date}
          </span>
        </div>
      </div>

      {/* Project name */}
      {exp.project && (
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '0.85rem',
            color: exp.color,
          }}>
            {exp.project}
          </span>
          <span style={{
            fontFamily: 'monospace', fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.3)', marginLeft: '8px',
          }}>
            [{exp.role}]
          </span>
        </div>
      )}

      {/* Description */}
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.82rem',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.75,
        marginBottom: '1rem',
      }}>
        {exp.description}
      </p>

      {/* Achievement badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        background: isRunner || isWinner
          ? `${exp.color}18`
          : 'rgba(255,255,255,0.04)',
        border: `1px solid ${isRunner || isWinner ? exp.color + '44' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '9999px',
        padding: '4px 12px',
        marginBottom: exp.tech.length > 0 ? '1rem' : '0',
      }}>
        <FiAward size={11} color={isRunner || isWinner ? exp.color : 'rgba(255,255,255,0.4)'} />
        <span style={{
          fontSize: '0.68rem',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          color: isRunner || isWinner ? exp.color : 'rgba(255,255,255,0.45)',
          letterSpacing: '0.03em',
        }}>
          {exp.achievement}
        </span>
      </div>

      {/* Tech stack */}
      {exp.tech.length > 0 && (
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '0.45rem',
          }}>
            <FiCode size={10} color='rgba(255,255,255,0.25)' />
            <span style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', letterSpacing: '0.12em' }}>
              TECH USED
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {exp.tech.map((t) => (
              <span key={t} style={{
                fontSize: '0.62rem',
                fontFamily: 'monospace',
                color: exp.color,
                background: `${exp.color}0e`,
                border: `1px solid ${exp.color}28`,
                borderRadius: '4px',
                padding: '2px 7px',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Main Section ─────────────────────────────────────────────────
export default function Experience() {
  return (
    <section
      id="experience"
      style={{ position: 'relative', padding: '6rem 0', backgroundColor: '#0a0a0f', overflow: 'hidden' }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '-10%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160,32,240,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Header ── */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            // display: 'inline-block',
            // fontFamily: 'monospace', fontSize: '0.75rem',
            // letterSpacing: '0.25em', color: '#00f5ff',
            // border: '1px solid rgba(0,245,255,0.2)',
            // borderRadius: '20px', padding: '4px 16px',
            // marginBottom: '1rem',
          }}>
           
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
            My Journey
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            Hackathons, events & milestones that shaped me
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div style={{ position: 'relative' }}>

          {/* Center vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0, bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              background: 'linear-gradient(180deg, transparent, #00f5ff44, #a020f044, #00ff8844, #f59e0b44, transparent)',
              transformOrigin: 'top',
              zIndex: 1,
            }}
          />

          {/* Cards */}
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>

        {/* ── Bottom cap ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              width: '14px', height: '14px', borderRadius: '50%',
              background: '#00f5ff',
              boxShadow: '0 0 16px #00f5ff, 0 0 32px #00f5ff55',
              border: '3px solid #0a0a0f',
              
            }}
          />
          
        </div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(0.8rem, 3vw, 1.2rem)', fontWeight: 200, background: 'linear-gradient(135deg, #ffffff 30%, #00f5ff)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',marginBottom: '0.75rem',fontFamily: "'Space Grotesk', sans-serif",marginTop: '0.75rem',textAlign: 'center', }}>
            More to go ...
          </p>
      </div>
    </section>
  )
}
