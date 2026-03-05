'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import CardFront from './CardFront'
import CardBack from './CardBack'
import Ribbon from './Ribbon'

export default function IDCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isDropped, setIsDropped] = useState(false)
  const cardRef = useRef(null)

  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  })

  // Holographic effect
  const [holographicPosition, setHolographicPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    // Drop animation on mount
    setTimeout(() => setIsDropped(true), 100)
  }, [])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x)
    mouseY.set(y)

    // Update holographic position
    setHolographicPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ y: -500, opacity: 0 }}
      animate={isDropped ? { y: 0, opacity: 1 } : {}}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 1,
      }}
    >
      {/* Clip and Ribbons */}
      <div className="relative">
        {/* Metallic Clip */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-16 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-lg shadow-lg">
            <div className="w-12 h-6 mx-auto mt-1 bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-lg" />
          </div>
        </div>

        {/* Ribbons */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
          <Ribbon text="[COLLEGE_NAME]" color="purple" />
          <Ribbon text="[COLLEGE_NAME]" color="cyan" />
        </div>

        {/* Card Container */}
        <motion.div
          ref={cardRef}
          className="relative mt-32 perspective-1000"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="relative w-full h-[500px] cursor-pointer"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 backface-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <CardFront holographicPosition={holographicPosition} />
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <CardBack />
            </div>
          </motion.div>
        </motion.div>

        {/* Tap to flip hint */}
        <motion.p
          className="text-center text-secondary text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Click to flip • Drag ribbons to interact
        </motion.p>
      </div>
    </motion.div>
  )
}
