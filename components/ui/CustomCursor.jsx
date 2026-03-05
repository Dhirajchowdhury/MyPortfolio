// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// export default function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isHovering, setIsHovering] = useState(false)

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     const handleMouseOver = (e) => {
//       if (
//         e.target.tagName === 'A' ||
//         e.target.tagName === 'BUTTON' ||
//         e.target.closest('a') ||
//         e.target.closest('button') ||
//         e.target.classList.contains('hoverable')
//       ) {
//         setIsHovering(true)
//       } else {
//         setIsHovering(false)
//       }
//     }

//     window.addEventListener('mousemove', updateMousePosition)
//     window.addEventListener('mouseover', handleMouseOver)

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition)
//       window.removeEventListener('mouseover', handleMouseOver)
//     }
//   }, [])

//   return (
//     <>
//       {/* Main cursor */}
//       <motion.div
//         className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
//         style={{
//           background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)',
//           boxShadow: '0 0 20px var(--accent-cyan)',
//         }}
//         animate={{
//           x: mousePosition.x - 12,
//           y: mousePosition.y - 12,
//           scale: isHovering ? 2 : 1,
//         }}
//         transition={{
//           type: 'spring',
//           stiffness: 500,
//           damping: 28,
//           mass: 0.5,
//         }}
//       />
      
//       {/* Cursor trail */}
//       <motion.div
//         className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-cyan hidden md:block"
//         animate={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//         }}
//         transition={{
//           type: 'spring',
//           stiffness: 150,
//           damping: 15,
//           mass: 0.1,
//         }}
//       />
//     </>
//   )
// }

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('hoverable')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)',
          boxShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Cursor trail */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#00f5ff',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  )
}
