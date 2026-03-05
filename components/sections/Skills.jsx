'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import {
  SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiMongodb,
  SiPostman, SiPython, SiOpenai, SiSolidity,
  SiEthereum, SiGit, SiGithub, SiFigma, SiVercel,
  SiGreensock, SiTypescript, SiDocker, SiPostgresql,
  SiTensorflow,
} from 'react-icons/si'
import { FaCss3Alt, FaEthereum } from 'react-icons/fa'
import { TbBrandFramerMotion, TbBrandThreejs } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'
import { BiHardHat } from 'react-icons/bi'

const skillsData = [
  { name: 'JavaScript',    Icon: SiJavascript,        color: '#F7DF1E', domain: 'frontend',   proficiency: 95 },
  { name: 'React',         Icon: SiReact,             color: '#61DAFB', domain: 'frontend',   proficiency: 75 },
  { name: 'Next.js',       Icon: SiNextdotjs,         color: '#ffffff', domain: 'frontend',   proficiency: 80 },
  { name: 'TypeScript',    Icon: SiTypescript,        color: '#3178C6', domain: 'frontend',   proficiency: 80 },
  { name: 'Tailwind CSS',  Icon: SiTailwindcss,       color: '#06B6D4', domain: 'frontend',   proficiency: 90 },
  { name: 'HTML5',         Icon: SiHtml5,             color: '#E34F26', domain: 'frontend',   proficiency: 95 },
  { name: 'CSS3',          Icon: FaCss3Alt,           color: '#1572B6', domain: 'frontend',   proficiency: 90 },
  { name: 'GSAP',          Icon: SiGreensock,         color: '#88CE02', domain: 'frontend',   proficiency: 75 },
  { name: 'Framer Motion', Icon: TbBrandFramerMotion, color: '#0055FF', domain: 'frontend',   proficiency: 78 },
  { name: 'Three.js',      Icon: TbBrandThreejs,      color: '#ffffff', domain: 'frontend',   proficiency: 30 },
  { name: 'Node.js',       Icon: SiNodedotjs,         color: '#339933', domain: 'backend',    proficiency: 80 },
  { name: 'Express.js',    Icon: SiExpress,           color: '#cccccc', domain: 'backend',    proficiency: 78 },
  { name: 'MongoDB',       Icon: SiMongodb,           color: '#47A248', domain: 'backend',    proficiency: 75 },
  { name: 'PostgreSQL',    Icon: SiPostgresql,        color: '#4169E1', domain: 'backend',    proficiency: 60 },
  { name: 'REST APIs',     Icon: SiPostman,           color: '#FF6C37', domain: 'backend',    proficiency: 82 },
  { name: 'Docker',        Icon: SiDocker,            color: '#2496ED', domain: 'backend',    proficiency: 35 },
  { name: 'Python',        Icon: SiPython,            color: '#3776AB', domain: 'aiml',       proficiency: 78 },
  { name: 'TensorFlow',    Icon: SiTensorflow,        color: '#FF6F00', domain: 'aiml',       proficiency: 25 },
  { name: 'OpenAI API',    Icon: SiOpenai,            color: '#ffffff', domain: 'aiml',       proficiency: 72 },
  { name: 'Solidity',      Icon: SiSolidity,          color: '#9999aa', domain: 'blockchain', proficiency: 60 },
  { name: 'Ethers.js',     Icon: SiEthereum,          color: '#627EEA', domain: 'blockchain', proficiency: 55 },
  { name: 'Web3.js',       Icon: FaEthereum,          color: '#F16822', domain: 'blockchain', proficiency: 60 },
  { name: 'Hardhat',       Icon: BiHardHat,           color: '#ffc517', domain: 'blockchain', proficiency: 10 },
  { name: 'Git',           Icon: SiGit,               color: '#F05032', domain: 'tools',      proficiency: 85 },
  { name: 'GitHub',        Icon: SiGithub,            color: '#ffffff', domain: 'tools',      proficiency: 88 },
  { name: 'Figma',         Icon: SiFigma,             color: '#F24E1E', domain: 'tools',      proficiency: 35 },
  { name: 'VS Code',       Icon: VscCode,             color: '#007ACC', domain: 'tools',      proficiency: 95 },
  { name: 'Vercel',        Icon: SiVercel,            color: '#ffffff', domain: 'tools',      proficiency: 80 },
]

const filters = [
  { id: 'all',        label: 'All'        },
  { id: 'frontend',  label: 'Frontend'   },
  { id: 'backend',   label: 'Backend'    },
  { id: 'aiml',      label: 'AI / ML'    },
  { id: 'blockchain',label: 'Blockchain' },
  { id: 'tools',     label: 'Tools'      },
]

const domainColors = {
  frontend:   '#00f5ff',
  backend:    '#ffffff',
  aiml:       '#00ff88',
  blockchain: '#a020f0',
  tools:      '#f59e0b',
}

const levelLabel = (p) => {
  if (p >= 90) return 'Expert'
  if (p >= 75) return 'Advanced'
  if (p >= 60) return 'Intermediate'
  return 'Learning'
}

const levelColor = (p) => {
  if (p >= 90) return '#00ff88'
  if (p >= 75) return '#00f5ff'
  if (p >= 60) return '#f59e0b'
  return '#a020f0'
}

function SkillCard({ skill, index }) {
  const cardRef  = useRef(null)
  const iconRef  = useRef(null)
  const accent   = domainColors[skill.domain]
  const [hovered,    setHovered]    = useState(false)
  const [barAnimate, setBarAnimate] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 300, damping: 25 })
  const sy = useSpring(my, { stiffness: 300, damping: 25 })

  const handleMouseMove = (e) => {
    const rect = iconRef.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width  / 2
    const cy = rect.top  + rect.height / 2
    mx.set(Math.max(-10, Math.min(10, (e.clientX - cx) * 0.35)))
    my.set(Math.max(-10, Math.min(10, (e.clientY - cy) * 0.35)))
  }
  const handleMouseLeave = () => { mx.set(0); my.set(0); setHovered(false) }

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBarAnimate(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: 'backOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        borderRadius: '16px',
        padding: '1.4rem 1rem 1.1rem',
        background: hovered
          ? `linear-gradient(135deg, ${accent}0e 0%, rgba(10,10,15,0.95) 100%)`
          : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid ${hovered ? accent + '44' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 0 28px ${accent}22, inset 0 1px 0 rgba(255,255,255,0.05)` : 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.55rem',
        overflow: 'hidden',
      }}
    >
      {/* Top shimmer */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
        background: `linear-gradient(90deg, transparent, ${accent}66, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Magnetic icon */}
      <motion.div ref={iconRef} style={{ x: sx, y: sy }}>
        <skill.Icon
          size={42}
          style={{
            color: skill.color,
            filter: hovered
              ? `drop-shadow(0 0 10px ${skill.color}bb)`
              : `drop-shadow(0 0 3px ${skill.color}33)`,
            transition: 'filter 0.3s ease',
            display: 'block',
          }}
        />
      </motion.div>

      {/* Name */}
      <span style={{
        fontSize: '0.78rem',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.72)',
        textAlign: 'center',
        lineHeight: 1.2,
        transition: 'color 0.2s ease',
      }}>
        {skill.name}
      </span>

      {/* Level badge */}
      <span style={{
        fontSize: '0.58rem',
        fontFamily: 'monospace',
        letterSpacing: '0.1em',
        color: levelColor(skill.proficiency),
        opacity: 0.85,
      }}>
        {levelLabel(skill.proficiency)}
      </span>

      {/* Proficiency bar track */}
      <div style={{
        width: '100%', height: '3px', borderRadius: '9999px',
        background: 'rgba(255,255,255,0.07)', overflow: 'hidden', marginTop: '2px',
      }}>
        <motion.div
          style={{
            height: '100%', borderRadius: '9999px',
            background: `linear-gradient(90deg, ${accent}, ${levelColor(skill.proficiency)})`,
            boxShadow: `0 0 6px ${accent}88`,
          }}
          initial={{ width: '0%' }}
          animate={{ width: barAnimate ? `${skill.proficiency}%` : '0%' }}
          transition={{ duration: 1.1, delay: index * 0.03, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* % shown on hover */}
      <span style={{
        fontSize: '0.6rem', fontFamily: 'monospace',
        color: accent,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.2s ease',
        marginTop: '-3px',
      }}>
        {skill.proficiency}%
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? skillsData
    : skillsData.filter(s => s.domain === activeFilter)

  return (
    <section
      id="skills"
      style={{ position: 'relative', padding: '6rem 0', backgroundColor: '#0a0a0f', overflow: 'hidden' }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160,32,240,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
           
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
            My Arsenal
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            Hover a card to reveal proficiency
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((f) => {
            const isActive = activeFilter === f.id
            const accent   = f.id === 'all' ? '#00f5ff' : domainColors[f.id]
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  position: 'relative', padding: '0.45rem 1.3rem',
                  borderRadius: '9999px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.03em',
                  cursor: 'pointer',
                  border: `1px solid ${isActive ? accent : 'rgba(255,255,255,0.1)'}`,
                  background: isActive ? `${accent}18` : 'rgba(255,255,255,0.03)',
                  color: isActive ? accent : 'rgba(255,255,255,0.5)',
                  boxShadow: isActive ? `0 0 16px ${accent}33` : 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = `${accent}55`
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                  }
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="filterPill"
                    style={{ position: 'absolute', inset: 0, borderRadius: '9999px', background: `${accent}10` }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>{f.label}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '1rem',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats strip */}
        <motion.div
          style={{ marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { label: 'Total Skills',  value: skillsData.length,                                    color: '#00f5ff' },
            { label: 'Domains',       value: 5,                                                     color: '#a020f0' },
            { label: 'Advanced+',     value: skillsData.filter(s => s.proficiency >= 75).length,    color: '#00ff88' },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '2.2rem', fontWeight: 800,
                color, textShadow: `0 0 20px ${color}55`,
              }}>
                {value}+
              </div>
              <div style={{
                fontFamily: 'monospace', fontSize: '0.62rem',
                letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)',
                marginTop: '3px',
              }}>
                {label.toUpperCase()}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
