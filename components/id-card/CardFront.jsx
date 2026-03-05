'use client'

import { motion } from 'framer-motion'
import { SiJavascript, SiReact, SiPython, SiSolidity, SiNodedotjs, SiMongodb } from 'react-icons/si'

export default function CardFront({ holographicPosition }) {
  const skills = [
    { Icon: SiJavascript, label: 'JS', color: '#F7DF1E' },
    { Icon: SiReact, label: 'React', color: '#61DAFB' },
    { Icon: SiPython, label: 'Python', color: '#3776AB' },
    { Icon: SiSolidity, label: 'Solidity', color: '#363636' },
    { Icon: SiNodedotjs, label: 'Node', color: '#339933' },
    { Icon: SiMongodb, label: 'Mongo', color: '#47A248' },
  ]

  return (
    <div className="relative w-full h-full glass rounded-2xl overflow-hidden shadow-2xl">
      {/* Holographic shimmer overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${holographicPosition.x}% ${holographicPosition.y}%, 
            rgba(255,255,255,0.3) 0%, 
            rgba(0,245,255,0.2) 20%, 
            rgba(124,58,237,0.2) 40%, 
            transparent 60%)`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Purple gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-transparent" />

      {/* HUD Corners */}
      <div className="hud-corners absolute inset-4">
        <div className="corner-bottom-left"></div>
        <div className="corner-bottom-right"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-6">
          {/* Photo */}
          <div className="relative w-24 h-24 rounded-xl overflow-hidden glow-cyan">
            <img
              src="/images/profile.jpg"
              alt="[YOUR_NAME]"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/100x100/0a0a0f/00f5ff?text=PHOTO'
              }}
            />
            
            {/* Scanning effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, var(--accent-cyan) 50%, transparent 100%)',
                opacity: 0.3,
              }}
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />

            {/* Geometric overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <polygon
                points="50,20 80,50 50,80 20,50"
                fill="none"
                stroke="var(--accent-cyan)"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* College Logo */}
          <div className="text-right">
            <div className="w-16 h-16 glass rounded-lg flex items-center justify-center mb-2">
              <span className="text-2xl font-bold text-green">[CL]</span>
            </div>
            <p className="text-[10px] text-secondary">[COLLEGE_ABBR]</p>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-4">
          <h3 className="text-2xl font-space font-bold text-white mb-1">
            [YOUR_NAME]
          </h3>
          <p className="text-cyan text-sm font-semibold mb-1">Full Stack Developer</p>
          <p className="text-secondary text-xs">[COLLEGE_NAME]</p>
        </div>

        {/* Skills Row */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="px-3 py-1 glass rounded-full flex items-center gap-2"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <skill.Icon size={14} style={{ color: skill.color }} />
              <span className="text-xs text-white">{skill.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          {/* Accent Bar */}
          <div className="h-1 bg-gradient-to-r from-cyan via-purple to-green rounded-full mb-3" />
          
          {/* College Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 glass rounded flex items-center justify-center">
                <span className="text-xs font-bold text-cyan">[CL]</span>
              </div>
              <div>
                <p className="text-[10px] text-secondary">Student ID</p>
                <p className="text-xs text-white font-mono">[STUDENT_ID]</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-[10px] text-secondary">Valid Until</p>
              <p className="text-xs text-white font-mono">[YEAR]</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barcode-style decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex gap-[2px] px-4 pb-2">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-cyan/30"
            style={{ height: Math.random() > 0.5 ? '100%' : '50%' }}
          />
        ))}
      </div>
    </div>
  )
}
