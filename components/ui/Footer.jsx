'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const navLinks = [
  { name: 'Home',       href: '#hero'       },
  { name: 'About',      href: '#about'      },
  { name: 'Skills',     href: '#skills'     },
  { name: 'Projects',   href: '#projects'   },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact'    },
]

const socials = [
  { icon: FiGithub,   href: ' https://github.com/Dhirajchowdhury',      label: 'GitHub',   color: '#ffffff'  },
  { icon: FiLinkedin, href: ' https://www.linkedin.com/in/dhiraj-chowdhury-4a2a452b0',  label: 'LinkedIn', color: '#0A66C2'  },
  { icon: FiMail,     href: 'mailto:dhirajchowdhury001@gmail.com ' , label: 'Email',    color: '#00f5ff'  },
]

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ position: 'relative', backgroundColor: '#0a0a0f', overflow: 'hidden' }}>

      {/* ── Top glow line ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, #00f5ff66, #a020f066, transparent)',
      }} />

      {/* ── Ambient blob ── */}
      <div style={{
        position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,245,255,0.04) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      {/* ── Main content ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>

        {/* ── Top section: 3 columns ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>

          {/* ── Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '1.3rem',
              background: 'linear-gradient(135deg, #ffffff 30%, #00f5ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem',
            }}>
              Dhiraj Kumar Chowdhury
            </div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.6,
              marginBottom: '1rem',
            }}>
              Full Stack Developer · AI/ML · Blockchain
            </p>
            {/* Status */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(0,255,136,0.07)',
              border: '1px solid rgba(0,255,136,0.18)',
              borderRadius: '9999px', padding: '3px 10px',
            }}>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 6px #00ff88' }}
              />
              <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', color: '#00ff88', letterSpacing: '0.05em' }}>
                Open to work
              </span>
            </div>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{
              fontSize: '0.6rem', letterSpacing: '0.2em', fontFamily: 'monospace',
              color: 'rgba(0,245,255,0.5)', marginBottom: '1rem',
            }}>
              NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease, padding-left 0.2s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00f5ff'
                    e.currentTarget.style.paddingLeft = '6px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                    e.currentTarget.style.paddingLeft = '0px'
                  }}
                >
                  <span style={{ color: 'rgba(0,245,255,0.3)', marginRight: '6px', fontFamily: 'monospace' }}>›</span>
                  {name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Connect ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              fontSize: '0.6rem', letterSpacing: '0.2em', fontFamily: 'monospace',
              color: 'rgba(0,245,255,0.5)', marginBottom: '1rem',
            }}>
              CONNECT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.7rem',
                    padding: '0.55rem 0.8rem', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}44`
                    e.currentTarget.style.background  = `${color}08`
                    e.currentTarget.style.transform   = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.background  = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.transform   = 'translateX(0)'
                  }}
                >
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '7px', flexShrink: 0,
                    background: `${color}12`, border: `1px solid ${color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={13} color={color} />
                  </div>
                  <span style={{
                    fontSize: '0.78rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: 'rgba(255,255,255,0.6)',
                    fontWeight: 500,
                  }}>
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
          marginBottom: '1.8rem',
        }} />

        {/* ── Bottom bar ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', gap: '5px',
          }}>
            Designed & built by
            <span style={{ color: '#00f5ff', fontWeight: 600 }}>Dhiraj Kumar Chowdhury</span>
            with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart size={12} color="#00f5ff" fill="#00f5ff" />
            </motion.span>
            · © {year}
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              background: 'rgba(0,245,255,0.06)',
              border: '1px solid rgba(0,245,255,0.2)',
              color: '#00f5ff',
              fontSize: '0.72rem',
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background   = 'rgba(0,245,255,0.12)'
              e.currentTarget.style.boxShadow    = '0 0 16px rgba(0,245,255,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background   = 'rgba(0,245,255,0.06)'
              e.currentTarget.style.boxShadow    = 'none'
            }}
          >
            <FiArrowUp size={12} /> BACK TO TOP
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
