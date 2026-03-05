'use client'

import { useRef } from 'react'
import { motion, useDragControls } from 'framer-motion'

export default function Ribbon({ text, color }) {
  const controls = useDragControls()
  const constraintsRef = useRef(null)

  const colorClasses = {
    purple: 'bg-gradient-to-b from-purple/80 to-purple/60',
    cyan: 'bg-gradient-to-b from-cyan/80 to-cyan/60',
  }

  return (
    <motion.div
      ref={constraintsRef}
      className="relative"
      style={{ height: 150 }}
    >
      <motion.div
        drag="y"
        dragControls={controls}
        dragConstraints={{ top: 0, bottom: 50 }}
        dragElastic={0.2}
        className={`w-8 h-32 ${colorClasses[color]} rounded-b-sm shadow-lg cursor-grab active:cursor-grabbing relative overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        whileDrag={{ scale: 1.1 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Fabric texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.1) 2px,
              rgba(255,255,255,0.1) 4px
            )`,
          }}
        />

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="text-white text-[10px] font-bold tracking-wider transform -rotate-90 whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {text}
          </p>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </motion.div>
  )
}
