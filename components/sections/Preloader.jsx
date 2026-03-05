'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin)
}

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    // Glitch text animation
    const textElement = document.querySelector('.preloader-text')
    if (textElement) {
      gsap.to(textElement, {
        duration: 1.5,
        text: '[YOUR_NAME]',
        ease: 'none',
        delay: 0.5,
      })
    }

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true)
        setTimeout(() => {
          onComplete?.()
        }, 800)
      }, 500)
    }
  }, [progress, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[10001] bg-dark flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Name with glitch effect */}
          <motion.h1
            className="preloader-text text-6xl md:text-8xl font-space font-bold text-gradient-cyan mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
          </motion.h1>

          {/* Loading bar */}
          <div className="w-64 md:w-96 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-cyan"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 10px var(--accent-cyan)',
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Progress percentage */}
          <motion.p
            className="mt-4 text-secondary font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.floor(progress)}%
          </motion.p>

          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.1, 0, 0.15, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
              mixBlendMode: 'overlay',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
