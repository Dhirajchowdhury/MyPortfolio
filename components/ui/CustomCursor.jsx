// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// export default function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
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
//       {/* Main cursor dot */}
//       <motion.div
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '24px',
//           height: '24px',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)',
//           boxShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff',
//           pointerEvents: 'none',
//           zIndex: 10000,
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
//     </>
//   )
// }


'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const mouse = useRef({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
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

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${mouse.current.x - 12}px, ${mouse.current.y - 12}px, 0)`
      }
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovering ? '48px' : '24px',
        height: isHovering ? '48px' : '24px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)',
        boxShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff',
        pointerEvents: 'none',
        zIndex: 10000,
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'width 0.2s ease, height 0.2s ease',
      }}
    />
  )
}