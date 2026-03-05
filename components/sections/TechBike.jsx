'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  SiReact, SiNodedotjs, SiMongodb, SiJavascript, 
  SiPython, SiGit, SiTailwindcss, 
  SiExpress, SiHtml5, SiEthereum
} from 'react-icons/si'
import { FaCss3Alt, FaEthereum } from 'react-icons/fa'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const bikeParts = [
  { id: 'front-wheel', Icon: SiReact, color: '#61DAFB', x: 100, y: 300, label: 'React' },
  { id: 'rear-wheel', Icon: SiNodedotjs, color: '#339933', x: 500, y: 300, label: 'Node.js' },
  { id: 'engine', Icon: SiMongodb, color: '#47A248', x: 350, y: 250, label: 'MongoDB' },
  { id: 'tank', Icon: SiJavascript, color: '#F7DF1E', x: 300, y: 180, label: 'JavaScript' },
  { id: 'headlight', Icon: SiPython, color: '#3776AB', x: 80, y: 200, label: 'Python' },
  { id: 'exhaust', Icon: FaCss3Alt, color: '#1572B6', x: 520, y: 280, label: 'CSS3' },
  { id: 'handlebar', Icon: SiGit, color: '#F05032', x: 150, y: 150, label: 'Git' },
  { id: 'seat', Icon: SiTailwindcss, color: '#06B6D4', x: 400, y: 200, label: 'Tailwind' },
  { id: 'fork', Icon: SiExpress, color: '#000000', x: 120, y: 250, label: 'Express' },
  { id: 'frame', Icon: SiHtml5, color: '#E34F26', x: 300, y: 280, label: 'HTML5' },
  { id: 'mirror-left', Icon: SiEthereum, color: '#3C3C3D', x: 140, y: 120, label: 'Ethers.js' },
  { id: 'mirror-right', Icon: FaEthereum, color: '#F16822', x: 180, y: 120, label: 'Web3.js' },
]

export default function TechBike() {
  const containerRef = useRef(null)
  const bikeRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !bikeRef.current) return

    const ctx = gsap.context(() => {
      // Initial scattered positions
      bikeParts.forEach((part) => {
        gsap.set(`#${part.id}`, {
          x: gsap.utils.random(-800, 800),
          y: gsap.utils.random(-600, 600),
          opacity: 0,
          scale: 0.5,
        })
      })

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Step 1: Parts fly in and assemble
      bikeParts.forEach((part, index) => {
        tl.to(
          `#${part.id}`,
          {
            x: part.x,
            y: part.y,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          },
          index * 0.05
        )
      })

      // Step 2: Pause - wheels start spinning
      tl.to({}, { duration: 0.3 })

      // Step 3: Bike rides off
      tl.to('.bike-container', {
        x: 1200,
        duration: 1,
        ease: 'power2.in',
      })

      // Continuous wheel rotation
      gsap.to('#front-wheel, #rear-wheel', {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: 'none',
      })

      // Exhaust particles
      gsap.to('.exhaust-particle', {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        repeat: -1,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-dark overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--accent-cyan) 1px, transparent 1px),
              linear-gradient(90deg, var(--accent-cyan) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center bottom',
          }}
        />
      </div>

      {/* Bike Container */}
      <div
        ref={bikeRef}
        className="bike-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* Royal Enfield Silhouette SVG */}
        <svg
          width="600"
          height="400"
          viewBox="0 0 600 400"
          className="absolute top-0 left-0 opacity-20"
        >
          {/* Simplified bike silhouette */}
          <ellipse cx="100" cy="300" rx="50" ry="50" fill="var(--accent-cyan)" opacity="0.3" />
          <ellipse cx="500" cy="300" rx="50" ry="50" fill="var(--accent-cyan)" opacity="0.3" />
          <path
            d="M 100 300 L 200 250 L 300 180 L 400 200 L 500 300"
            stroke="var(--accent-cyan)"
            strokeWidth="8"
            fill="none"
            opacity="0.3"
          />
          <rect x="280" y="160" width="80" height="60" rx="10" fill="var(--accent-cyan)" opacity="0.3" />
        </svg>

        {/* Tech Icons as Bike Parts */}
        {bikeParts.map((part) => (
          <div
            key={part.id}
            id={part.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: 0, top: 0 }}
          >
            <div className="relative group">
              <part.Icon
                size={48}
                style={{ color: part.color }}
                className="drop-shadow-lg filter"
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-white whitespace-nowrap bg-dark/80 px-2 py-1 rounded">
                  {part.label}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Exhaust Particles */}
        <div className="absolute" style={{ left: 520, top: 280 }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="exhaust-particle absolute w-2 h-2 bg-cyan rounded-full"
              style={{
                left: i * 10,
                opacity: 0.8 - i * 0.15,
              }}
            />
          ))}
        </div>
      </div>

      {/* Section Title */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h2 className="text-4xl md:text-6xl font-space font-bold text-gradient-cyan mb-4">
          Built with Modern Tech
        </h2>
        <p className="text-secondary text-lg">Scroll to see the assembly</p>
      </div>
    </section>
  )
}
