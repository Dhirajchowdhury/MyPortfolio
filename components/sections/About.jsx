'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { FiMapPin, FiCode, FiCpu, FiZap, FiMusic, FiCamera, FiCompass, FiCoffee } from 'react-icons/fi'
import { SiReact, SiNextdotjs, SiPython, SiSolidity, SiMongodb, SiHtml5, SiTailwindcss } from 'react-icons/si'

// ── Hobbies data ─────────────────────────────────────────────────
const hobbies = [
  { icon: FiCode,     label: 'Open Source',   color: '#00f5ff' },
  { icon: FiCpu,      label: 'AI Tinkering',  color: '#a020f0' },
  { icon: FiMusic,    label: 'Music',         color: '#00ff88' },
  { icon: FiCamera,   label: 'Photography',   color: '#f59e0b' },
  { icon: FiCompass, label: 'Travelling',    color: '#00f5ff' },
  { icon: FiCoffee,   label: 'Coffee Runs',   color: '#a020f0' },
]

// ── Cool 3D-tilt ID Card ──────────────────────────────────────────
function IDCard() {
  const cardRef  = useRef(null)
  const mouseX   = useMotionValue(0)
  const mouseY   = useMotionValue(0)

  const rotateX  = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 30 })
  const rotateY  = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 30 })
  const glowX    = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%'])
  const glowY    = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5)
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div
        style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(0,245,255,0.06) 0%, rgba(10,10,15,0.9) 50%, rgba(160,32,240,0.06) 100%)',
          border: '1px solid rgba(0,245,255,0.2)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,245,255,0.05), inset 0 1px 0 rgba(255,255,255,0.05)',
          padding: '2rem',
        }}
      >
        {/* Dynamic glow spot following mouse */}
        <motion.div
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            left: glowX,
            top: glowY,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Top bar — like an ID card header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid rgba(0,245,255,0.1)',
        }}>
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#00f5ff', fontFamily: 'monospace', marginBottom: '2px' }}>
              DEVELOPER ID
            </div>
            <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
              #HITK-2028-CSE
            </div>
          </div>
          <div style={{
            width: '36px', height: '20px',
            background: 'linear-gradient(135deg, #00f5ff, #a020f0)',
            borderRadius: '3px',
            opacity: 0.8,
          }} />
        </div>

        {/* Profile photo */}
        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{
              width: '90px', height: '90px',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '2px solid rgba(0,245,255,0.4)',
              boxShadow: '0 0 20px rgba(0,245,255,0.25)',
            }}>
              <img
                src="/My_image03.jpeg"
                alt="Dhiraj Kumar Chowdhury"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentNode.style.background = 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(160,32,240,0.2))'
                }}
              />
            </div>
            {/* Online indicator
            <div style={{
              position: 'absolute', bottom: '-4px', right: '-4px',
              width: '16px', height: '16px', borderRadius: '50%',
              background: '#00ff88',
              border: '2px solid #0a0a0f',
              boxShadow: '0 0 8px #00ff88',
            }} /> */}
          </div>

          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#fff', marginBottom: '3px' }}>
              Dhiraj Kumar Chowdhury
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#fff', marginBottom: '8px' }}>
            
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.25)',
              borderRadius: '20px', padding: '3px 10px',
              fontSize: '0.7rem', color: '#00f5ff', fontFamily: 'monospace',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff88', display: 'inline-block', boxShadow: '0 0 6px #00ff88' }} />
              Developer
            </div>
          </div>
        </div>

        {/* Fields */}
        {[
          { label: 'ROLE',       value: 'Full Stack & AI/ML Dev'       },
          { label: 'INSTITUTE',  value: 'Heritage Inst. of Technology'  },
          { label: 'YEAR',       value: '2nd Year — CSE'                },
          { label: 'LOCATION',   value: 'Kolkata, India 📍'             },
        ].map(({ label, value }) => (
          <div key={label} style={{ marginBottom: '0.85rem' }}>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(0,245,255,0.5)', fontFamily: 'monospace', marginBottom: '2px' }}>
              {label}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)', fontFamily: "'Space Grotesk', sans-serif" }}>
              {value}
            </div>
          </div>
        ))}

        {/* Domain badges */}
        <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(0,245,255,0.5)', fontFamily: 'monospace', marginBottom: '0.6rem' }}>
            DOMAINS
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {[
              { label: 'Frontend',    color: '#00f5ff' },
              { label: 'Full Stack',  color: '#ffffff' },
              { label: 'AI / ML',     color: '#00ff88' },
              { label: 'Blockchain',  color: '#a020f0' },
            ].map(({ label, color }) => (
              <span key={label} style={{
                fontSize: '0.65rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                color,
                background: `${color}14`,
                border: `1px solid ${color}33`,
                borderRadius: '20px',
                padding: '3px 10px',
              }}>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Tech stack icons row */}
        <div style={{
          marginTop: '1.2rem', paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', gap: '12px', alignItems: 'center',
        }}>
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(0,245,255,0.5)', fontFamily: 'monospace', flexShrink: 0 }}>
            STACK
          </div>
          {[
              { Icon: SiReact,      color: '#61DAFB' },
              { Icon: SiNextdotjs,  color: '#ffffff'  },
              { Icon: SiPython,     color: '#3776AB' },
              { Icon: SiSolidity,   color: '#aaaaaa' },
              { Icon: SiMongodb,    color: '#47A248' },
              { Icon: SiHtml5,      color: '#E34F26' },
              { Icon: SiTailwindcss,color: '#06B6D4' },
              ].map(({ Icon, color }, i) => (
              <Icon key={i} size={18} style={{ color, filter: `drop-shadow(0 0 4px ${color}88)` }} />
            ))}
        </div>

        {/* Holographic shimmer strip at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #00f5ff, #a020f0, #00ff88, #00f5ff)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
        }} />
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 0% }
          100% { background-position: 200% 0% }
        }
      `}</style>
    </motion.div>
  )
}

// ── Main About Section ────────────────────────────────────────────
export default function About() {
  return (
    <section
      id="about"
      style={{ position: 'relative', padding: '6rem 0', backgroundColor: '#0a0a0f', overflow: 'hidden' }}
    >
      {/* Ambient background blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160,32,240,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Section Header ── */}
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
            Who Am I?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
           Here's the section where you can know me better
          </p>
        </motion.div>

        {/* ── Main Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>

          {/* ── LEFT: Hey there + Currently Building ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>

            {/* Hey there card — flex-grow to fill remaining space */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '18px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                flexGrow: 1,
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.4), transparent)',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem',
                }}>
                  👋
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
                  Hey there!
                </h3>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.9rem', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '0.9rem' }}>
                I'm a passionate 2nd-year Computer Science student at <span style={{ color: '#00f5ff' }}>Heritage Institute Of Technology, Kolkata</span>. My journey started with curiosity and evolved into a full-blown obsession with building things that matter.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.9rem', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '0.9rem' }}>
                I'm an <span style={{ color: '#00f5ff' }}>aspiring software developer</span> who enjoys building meaningful tech products and solving real-world problems. I work across <span style={{ color: '#00f5ff' }}>Frontend</span>, <span style={{ color: '#ffffff' }}>Full Stack (MERN)</span>, <span style={{ color: '#00ff88' }}>AI/ML</span>, and <span style={{ color: '#a020f0' }}>Blockchain</span>, constantly exploring new technologies and improving my development and problem-solving skills.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.9rem', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '0.9rem' }}>
                  Outside coding, I love <span style={{ color: '#00f5ff' }}>traveling, bike rides, and exploring new ideas</span>. I enjoy collaborating on hackathons and startup ideas, believing that the best way to grow is by building bold projects, learning fast, and turning ideas into real products.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.9rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                Based in <span style={{ color: '#00f5ff' }}>Kolkata, India 📍</span> — always looking for opportunities to learn, build, and collaborate on projects that push boundaries. I believe the best way to grow is to build things that scare you a little.
              </p>
            </motion.div>

            {/* Currently Building card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                background: 'rgba(0,255,136,0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,255,136,0.12)',
                borderRadius: '18px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.4), transparent)',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: '#00ff88', boxShadow: '0 0 12px #00ff88',
                  }}
                />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
                  Currently Building
                </h3>
              </div>

              <div style={{
                background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.15)',
                borderRadius: '12px', padding: '1rem 1.2rem',
                fontFamily: 'monospace', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
              }}>
                <span style={{ color: '#00ff88' }}>→</span> AI-powered decentralized applications blending intelligent automation with blockchain security.<br />
                <span style={{ color: '#00ff88' }}>→</span> Portfolio site pushing the limits of web animation & interaction design.
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: ID Card + Beyond the Code stacked ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* ID Card */}
            <IDCard />

            {/* Beyond the Code — moved here below ID card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                background: 'rgba(160,32,240,0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(160,32,240,0.12)',
                borderRadius: '18px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(160,32,240,0.4), transparent)',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.4rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(160,32,240,0.15)', border: '1px solid rgba(160,32,240,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FiZap size={16} color="#a020f0" />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
                  Beyond the Code
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                {hobbies.map(({ icon: Icon, label, color }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      gap: '6px', padding: '0.75rem 0.5rem',
                      background: `${color}08`,
                      border: `1px solid ${color}20`,
                      borderRadius: '12px', cursor: 'default',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Icon size={20} style={{ color, filter: `drop-shadow(0 0 6px ${color}66)` }} />
                    <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.55)', fontFamily: "'Space Grotesk', sans-serif", textAlign: 'center' }}>
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
