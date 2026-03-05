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
  'Frontend Engineer'
]

export default function Hero() {
  const roleRef = useRef(null)
  const currentRoleIndex = useRef(0)

  useEffect(() => {
    if (!roleRef.current) return

    const animateRole = () => {
      const letters = roleRef.current.querySelectorAll('.letter')
      
      // Scatter out
      gsap.to(letters, {
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.in',
        onComplete: () => {
          // Change role
          currentRoleIndex.current = (currentRoleIndex.current + 1) % roles.length
          const newRole = roles[currentRoleIndex.current]
          
          // Update text
          roleRef.current.innerHTML = newRole
            .split('')
            .map((char) => `<span class="letter inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('')
          
          const newLetters = roleRef.current.querySelectorAll('.letter')
          
          // Fly in from random directions
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

    // Loop animation
    const interval = setInterval(animateRole, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main HUD Container */}
      <div className="relative z-10 w-[90%] md:w-[70%] max-w-5xl">
        <motion.div
          className="hud-corners glass p-8 md:p-12 lg:p-16 rounded-2xl relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Bottom corners */}
          <div className="corner-bottom-left"></div>
          <div className="corner-bottom-right"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo with scanning effect */}
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden glow-cyan">
                <img
                  src="/images/profile.jpg"
                  alt="[YOUR_NAME]"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300/0a0a0f/00f5ff?text=[YOUR_PHOTO]'
                  }}
                />
                
                {/* Scanning overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, var(--accent-cyan) 50%, transparent 100%)',
                    opacity: 0.3,
                  }}
                  animate={{
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
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
                    cx="150"
                    cy="150"
                    r="100"
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

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-space font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-gradient-cyan">[YOUR_NAME]</span>
              </motion.h1>

              {/* Kinetic Role Text */}
              <div className="mb-6 h-16 md:h-20 flex items-center justify-center md:justify-start">
                <h2
                  ref={roleRef}
                  className="text-2xl md:text-4xl font-space font-semibold text-white"
                  style={{ minHeight: '3rem' }}
                >
                  Full Stack Developer
                </h2>
              </div>

              <motion.p
                className="text-secondary text-lg md:text-xl mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                2nd-year CSE student from Kolkata, India. Building digital experiences
                across Frontend, Full Stack, AI/ML, and Blockchain domains.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <a
                  href="#projects"
                  className="px-8 py-3 bg-cyan text-dark rounded-full font-semibold hover:scale-105 transition-transform glow-cyan hoverable"
                >
                  View My Work
                </a>
                <a
                  href="[RESUME_URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-purple text-purple rounded-full font-semibold hover:bg-purple hover:text-white transition-all glow-purple hoverable"
                >
                  Download Resume
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <a
                  href="[GITHUB_URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan hover:bg-cyan hover:text-dark transition-all glow-cyan hoverable"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="[LINKEDIN_URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan hover:bg-cyan hover:text-dark transition-all glow-cyan hoverable"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="mailto:[YOUR_EMAIL]"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan hover:bg-cyan hover:text-dark transition-all glow-cyan hoverable"
                >
                  <FiMail size={20} />
                </a>
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
