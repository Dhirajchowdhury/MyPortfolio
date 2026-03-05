'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import dynamic from 'next/dynamic'

const HeroParticles = dynamic(() => import('../three/HeroParticles'), { ssr: false })

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin)
}

const roles = [
  'Full Stack Developer',
  'AI/ML Builder',
  'Blockchain Dev',
  'Frontend Engineer',
]

export default function Hero() {
  const roleRef    = useRef(null)
  const cursorRef  = useRef(null)
  const currentRoleIndex = useRef(0)

  useEffect(() => {
    if (!roleRef.current) return

    // Blinking cursor animation
    // if (cursorRef.current) {
    //   gsap.to(cursorRef.current, {
    //     opacity: 0,
    //     duration: 0.5,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: 'steps(1)',
    //   })
    // }

    const animateRole = () => {
      const letters = roleRef.current.querySelectorAll('.letter')

      gsap.to(letters, {
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.in',
        onComplete: () => {
          currentRoleIndex.current = (currentRoleIndex.current + 1) % roles.length
          const newRole = roles[currentRoleIndex.current]

          roleRef.current.innerHTML = newRole
            .split('')
            .map((char) => `<span class="letter inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('')

          const newLetters = roleRef.current.querySelectorAll('.letter')

          gsap.fromTo(
            newLetters,
            {
              x: () => gsap.utils.random(-200, 200),
              y: () => gsap.utils.random(-200, 200),
              opacity: 0,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.03,
              ease: 'power2.out',
            }
          )
        },
      })
    }

    // Initial setup
    const initialRole = roles[0]
    roleRef.current.innerHTML = initialRole
      .split('')
      .map((char) => `<span class="letter inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('')

    const initialLetters = roleRef.current.querySelectorAll('.letter')
    gsap.fromTo(
      initialLetters,
      {
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power2.out',
        delay: 0.5,
      }
    )

    const interval = setInterval(animateRole, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '10px' }} // ← clears navbar height + breathing room
    >
      {/* Particles Background */}
      <HeroParticles />

      {/* Aurora Gradient Blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--accent-cyan) 0%, var(--accent-purple) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: ['-50%', '-45%', '-55%', '-50%'],
            y: ['-50%', '-55%', '-45%', '-50%'],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main HUD Container */}
     {/* Main HUD Container */}
        <div className="relative z-10 w-[90%] md:w-[75%] max-w-5xl" style={{ marginTop: '2.5rem' }}>
        <motion.div
          className="hud-corners glass p-8 md:p-10 lg:p-12 rounded-2xl relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="corner-bottom-left" />
          <div className="corner-bottom-right" />

          <div className="flex flex-col md:flex-row items-center gap-7 md:gap-11">

            {/* ── Photo ──────────────────────────────────────────── */}
            <motion.div
              className="relative flex-shrink-0"
              style={{ width: '620px', height: '400px' }} // smaller image
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 0 24px rgba(0,245,255,0.35)',
                }}
              >
                <img
                  src="/My_image02.jpeg"
                  alt="Dhiraj Kumar Chowdhury"
                  className="w-full h-full object-cover"
                />

                {/* Scanning line */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, var(--accent-cyan) 50%, transparent 100%)',
                    opacity: 0.25,
                  }}
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />

                {/* Geometric overlay */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 300 300"
                >
                  <motion.polygon
                    points="150,50 250,150 150,250 50,150"
                    fill="none"
                    stroke="var(--accent-cyan)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 0.6 }}
                  />
                  <motion.circle
                    cx="150" cy="150" r="100"
                    fill="none"
                    stroke="var(--accent-cyan)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* ── Text Content ────────────────────────────────────── */}
            <div className="flex-1 text-center md:text-left">

              {/* Name */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-gradient-cyan">Dhiraj Kumar Chowdhury</span>
              </motion.h1>

              {/* Kinetic Role Text + blinking cursor */}
              <div className="mb-7 h-14 md:h-16 flex items-center justify-center md:justify-start">
                <h2
                  ref={roleRef}
                  className="text-xl md:text-3xl font-space font-semibold text-white"
                  style={{ minHeight: '2.5rem' }}
                />
               
              </div>

              {/* Bio */}
              <motion.p
                className="text-secondary text-base md:text-lg mb-9 max-w-2xl"
                style={{ marginBottom: '1rem' }} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                2nd-year CSE student at Heritage Institute Of Technology, Kolkata.
                Building digital experiences across Frontend, Full Stack, AI/ML, and Blockchain.
              </motion.p>

              {/* CTA Buttons — side by side, touching, pill shaped */}
              <motion.div
                className="flex justify-center md:justify-start mb-9"
                style={{ marginBottom: '1rem' }} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div style={{ display: 'flex', borderRadius: '9999px', overflow: 'hidden', border: '1.5px solid rgba(0,245,255,0.5)' }}>
                  {/* My Work — solid cyan default, transparent on hover */}
                  <a
                    href="#projects"
                    className="hoverable"
                    style={{
                      padding: '0.65rem 2rem',
                      background: '#00f5ff',
                      color: '#05050f',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      letterSpacing: '0.03em',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'background 0.25s ease, color 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#00f5ff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#00f5ff'
                      e.currentTarget.style.color = '#05050f'
                    }}
                  >
                    My Work
                  </a>
                  {/* Divider */}
                  <div style={{ width: '1px', background: 'rgba(0,245,255,0.4)' }} />
                  {/* Resume — transparent default, solid cyan on hover */}
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hoverable"
                    style={{
                      padding: '0.65rem 2rem',
                      background: 'transparent',
                      color: '#00f5ff',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      letterSpacing: '0.03em',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'background 0.25s ease, color 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#00f5ff'
                      e.currentTarget.style.color = '#05050f'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#00f5ff'
                    }}
                  >
                    Resume
                  </a>
                </div>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex gap-5 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {[
                  { href: ' https://github.com/Dhirajchowdhury',   Icon: FiGithub,   label: 'GitHub'   },
                  { href: ' https://www.linkedin.com/in/dhiraj-chowdhury-4a2a452b0', Icon: FiLinkedin, label: 'LinkedIn' },
                  { href: 'mailto:dhirajchowdhury001@gmail.com ', Icon: FiMail,     label: 'Email'    },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hoverable"
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(0,245,255,0.2)',
                      color: '#00f5ff',
                      transition: 'all 0.25s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0,245,255,0.12)'
                      e.currentTarget.style.boxShadow  = '0 0 18px rgba(0,245,255,0.5), 0 0 40px rgba(0,245,255,0.2)'
                      e.currentTarget.style.borderColor = 'rgba(0,245,255,0.6)'
                      e.currentTarget.style.transform  = 'translateY(-3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background  = 'rgba(255,255,255,0.04)'
                      e.currentTarget.style.boxShadow   = 'none'
                      e.currentTarget.style.borderColor = 'rgba(0,245,255,0.2)'
                      e.currentTarget.style.transform   = 'translateY(0)'
                    }}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-cyan rounded-full flex justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-cyan rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
