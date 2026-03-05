'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SiReact, SiNodedotjs, SiMongodb, SiJavascript,
  SiPython, SiGit, SiTailwindcss, SiExpress,
  SiHtml5, SiNextdotjs, SiTypescript, SiDocker,
  SiPostgresql, SiSolidity, SiTensorflow,
} from 'react-icons/si'
import { FaCss3Alt, FaEthereum } from 'react-icons/fa'
import { BiHardHat } from 'react-icons/bi'
import { TbBrandThreejs } from 'react-icons/tb'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ─── Icon positions — carefully mapped to silhouette anatomy ───
// Canvas: 700x380. Icons placed at (x,y) = exact part center.
// GSAP offsets each icon by (x-350, y-190) from the container center.
const bikeParts = [
  // ── REAR WHEEL center (155, 285) — one big icon fills the hub ──
  { id: 'bp-rearwheel',  Icon: SiReact,       color: '#61DAFB', x: 155,  y: 285, size: 56, label: 'React'      },

  // ── FRONT WHEEL center (545, 285) ──
  { id: 'bp-frontwheel', Icon: SiNodedotjs,   color: '#339933', x: 545,  y: 285, size: 56, label: 'Node.js'    },

  // ── FUEL TANK (top center ~310-400, y~182) — 2 icons side by side ──
  { id: 'bp-tank1',      Icon: SiJavascript,  color: '#F7DF1E', x: 318,  y: 178, size: 40, label: 'JavaScript' },
  { id: 'bp-tank2',      Icon: SiTypescript,  color: '#3178C6', x: 368,  y: 178, size: 40, label: 'TypeScript' },

  // ── SEAT (rear-top ~200-260, y~205) ──
  { id: 'bp-seat',       Icon: SiTailwindcss, color: '#06B6D4', x: 228,  y: 208, size: 36, label: 'Tailwind'   },

  // ── ENGINE BLOCK (center ~260-420, y~240-270) — spread across ──
  { id: 'bp-engine1',    Icon: SiMongodb,     color: '#47A248', x: 278,  y: 252, size: 40, label: 'MongoDB'    },
  { id: 'bp-engine2',    Icon: SiPostgresql,  color: '#4169E1', x: 338,  y: 252, size: 38, label: 'PostgreSQL' },
  { id: 'bp-engine3',    Icon: SiExpress,     color: '#cccccc', x: 398,  y: 252, size: 36, label: 'Express'    },

  // ── FRAME TUBES — along the top frame line ──
  { id: 'bp-frame1',     Icon: SiHtml5,       color: '#E34F26', x: 258,  y: 225, size: 34, label: 'HTML5'      },
  { id: 'bp-frame2',     Icon: FaCss3Alt,     color: '#1572B6', x: 430,  y: 215, size: 34, label: 'CSS3'       },

  // ── NEXT.JS on upper frame near headstock ──
  { id: 'bp-nextjs',     Icon: SiNextdotjs,   color: '#ffffff', x: 462,  y: 198, size: 38, label: 'Next.js'    },

  // ── HANDLEBAR area (top-right ~460-490, y~165-175) ──
  { id: 'bp-handlebar',  Icon: SiGit,         color: '#F05032', x: 472,  y: 165, size: 34, label: 'Git'        },

  // ── MIRROR circle (450, 150) ──
  { id: 'bp-mirror',     Icon: TbBrandThreejs,color: '#ffffff', x: 450,  y: 148, size: 30, label: 'Three.js'   },

  // ── FRONT FORKS (525-540, y~230-250) ──
  { id: 'bp-fork',       Icon: SiDocker,      color: '#2496ED', x: 524,  y: 240, size: 34, label: 'Docker'     },

  // ── HEADLIGHT box (548-586, y~228-256) ──
  { id: 'bp-headlight',  Icon: SiPython,      color: '#3776AB', x: 565,  y: 242, size: 32, label: 'Python'     },

  // ── AI/ML — on tank left side ──
  { id: 'bp-tensorflow', Icon: SiTensorflow,  color: '#FF6F00', x: 300,  y: 205, size: 34, label: 'TensorFlow' },

  // ── BLOCKCHAIN — upper right frame ──
  { id: 'bp-solidity',   Icon: SiSolidity,    color: '#9999aa', x: 410,  y: 182, size: 32, label: 'Solidity'   },
  { id: 'bp-ethereum',   Icon: FaEthereum,    color: '#627EEA', x: 505,  y: 175, size: 32, label: 'Ethereum'   },

  // ── EXHAUST PIPE end (~80-115, y~278) ──
  { id: 'bp-exhaust',    Icon: BiHardHat,     color: '#ffc517', x: 200,  y: 272, size: 30, label: 'Hardhat'    },

  // ── FOOTPEG (270, 298) ──
  { id: 'bp-footpeg',    Icon: SiNextdotjs,   color: '#444444', x: 350,  y: 275, size: 28, label: 'Next.js'    },
]

// Clean motorcycle silhouette matching reference image
const BikeSilhouette = () => (
  <svg
    width="700"
    height="380"
    viewBox="0 0 700 380"
    style={{ position: 'absolute', top: 0, left: 0, opacity: 0.18, pointerEvents: 'none' }}
  >
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    {/* === REAR WHEEL === */}
    <circle cx="155" cy="285" r="75" stroke="#00f5ff" strokeWidth="5" fill="none" filter="url(#glow)" />
    <circle cx="155" cy="285" r="55" stroke="#00f5ff" strokeWidth="1.5" fill="none" />
    <circle cx="155" cy="285" r="12" stroke="#00f5ff" strokeWidth="2.5" fill="none" />
    {/* Rear spokes */}
    {[0,51,103,154,206,257,309].map((deg, i) => (
      <line key={i}
        x1={155 + 12 * Math.cos(deg * Math.PI/180)}
        y1={285 + 12 * Math.sin(deg * Math.PI/180)}
        x2={155 + 55 * Math.cos(deg * Math.PI/180)}
        y2={285 + 55 * Math.sin(deg * Math.PI/180)}
        stroke="#00f5ff" strokeWidth="1.5"
      />
    ))}

    {/* === FRONT WHEEL === */}
    <circle cx="545" cy="285" r="75" stroke="#00f5ff" strokeWidth="5" fill="none" filter="url(#glow)" />
    <circle cx="545" cy="285" r="55" stroke="#00f5ff" strokeWidth="1.5" fill="none" />
    <circle cx="545" cy="285" r="12" stroke="#00f5ff" strokeWidth="2.5" fill="none" />
    {/* Front spokes */}
    {[0,51,103,154,206,257,309].map((deg, i) => (
      <line key={i}
        x1={545 + 12 * Math.cos(deg * Math.PI/180)}
        y1={285 + 12 * Math.sin(deg * Math.PI/180)}
        x2={545 + 55 * Math.cos(deg * Math.PI/180)}
        y2={285 + 55 * Math.sin(deg * Math.PI/180)}
        stroke="#00f5ff" strokeWidth="1.5"
      />
    ))}

    {/* === MAIN FRAME === */}
    {/* Top tube: seat to headstock */}
    <path d="M 210 205 L 295 175 L 420 172 L 490 188" stroke="#00f5ff" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Down tube: headstock to engine bottom */}
    <path d="M 490 188 L 475 260 L 370 275 L 230 270" stroke="#00f5ff" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Seat stays (rear): seat to rear axle */}
    <path d="M 210 205 L 195 270 L 155 285" stroke="#00f5ff" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    {/* Chain stays: engine to rear axle */}
    <path d="M 230 270 L 155 285" stroke="#00f5ff" strokeWidth="3.5" fill="none" strokeLinecap="round" />

    {/* === FUEL TANK === */}
    <path d="M 295 175 Q 350 148 420 172 L 415 210 L 300 212 Z"
      stroke="#00f5ff" strokeWidth="2.5" fill="rgba(0,245,255,0.06)" strokeLinejoin="round" />

    {/* === SEAT === */}
    <path d="M 200 200 Q 250 185 300 212 L 295 222 Q 245 210 198 218 Z"
      stroke="#00f5ff" strokeWidth="2" fill="rgba(0,245,255,0.05)" />

    {/* === ENGINE BLOCK === */}
    <rect x="255" y="222" width="165" height="58" rx="10"
      stroke="#00f5ff" strokeWidth="2.5" fill="rgba(0,245,255,0.04)" />
    {/* Engine detail lines */}
    <line x1="310" y1="222" x2="310" y2="280" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />
    <line x1="365" y1="222" x2="365" y2="280" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />

    {/* === FRONT FORKS === */}
    <line x1="490" y1="188" x2="530" y2="210" stroke="#00f5ff" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="530" y1="210" x2="545" y2="285" stroke="#00f5ff" strokeWidth="4" strokeLinecap="round" />
    {/* Fork brace */}
    <line x1="515" y1="238" x2="542" y2="252" stroke="#00f5ff" strokeWidth="2" />

    {/* === HANDLEBAR === */}
    <line x1="490" y1="188" x2="468" y2="165" stroke="#00f5ff" strokeWidth="3" strokeLinecap="round" />
    <line x1="468" y1="165" x2="450" y2="158" stroke="#00f5ff" strokeWidth="2.5" strokeLinecap="round" />
    {/* Mirror */}
    <circle cx="450" cy="152" r="9" stroke="#00f5ff" strokeWidth="2" fill="none" />
    <line x1="490" y1="188" x2="510" y2="170" stroke="#00f5ff" strokeWidth="2.5" strokeLinecap="round" />

    {/* === HEADLIGHT === */}
    <rect x="548" y="228" width="38" height="28" rx="6"
      stroke="#00f5ff" strokeWidth="2.5" fill="rgba(0,245,255,0.1)" />

    {/* === REAR FENDER === */}
    <path d="M 155 210 Q 168 195 185 200 L 195 270"
      stroke="#00f5ff" strokeWidth="2" fill="none" />

    {/* === FRONT FENDER === */}
    <path d="M 545 210 Q 558 200 570 208"
      stroke="#00f5ff" strokeWidth="2" fill="none" />

    {/* === EXHAUST PIPE === */}
    <path d="M 260 270 Q 210 290 155 285"
      stroke="#00f5ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M 115 278 Q 85 280 60 278"
      stroke="#00f5ff" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* === FOOTPEG === */}
    <line x1="270" y1="278" x2="270" y2="300" stroke="#00f5ff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="255" y1="300" x2="285" y2="300" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function TechBike() {
  const containerRef = useRef(null)
  const bikeRef      = useRef(null)
  const titleRef     = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !bikeRef.current) return

    const ctx = gsap.context(() => {
      // ── Scatter all icons off screen initially ──
      bikeParts.forEach((part) => {
        gsap.set(`#${part.id}`, {
          x: gsap.utils.random(-900, 900),
          y: gsap.utils.random(-500, 500),
          opacity: 0,
          scale: 0.3,
          rotation: gsap.utils.random(-180, 180),
        })
      })

      // ── Keep title pinned independently at top ──
      gsap.set(titleRef.current, { position: 'fixed', top: '90px', left: 0, right: 0, zIndex: 20 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3500',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          onLeave: () => {
            // Unpin title when section exits
            gsap.set(titleRef.current, { position: 'absolute' })
          },
          onEnterBack: () => {
            gsap.set(titleRef.current, { position: 'fixed', top: '90px' })
          },
        },
      })

      // Phase 1 — Icons fly in and assemble (staggered)
      bikeParts.forEach((part, i) => {
        tl.to(
          `#${part.id}`,
          {
            x: part.x - 350, // center of 700px canvas
            y: part.y - 190, // vertical center
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'back.out(1.4)',
          },
          i * 0.04
        )
      })

      // Phase 2 — Pause fully assembled
      tl.to({}, { duration: 0.5 })

      // Phase 3 — Bike rides off to the right
      tl.to(bikeRef.current, {
        x: '+=1400',
        opacity: 0,
        duration: 0.8,
        ease: 'power3.in',
      })

      // Phase 4 — Title fades out
      tl.to(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.3,
      }, '<0.4')

      // ── Continuous wheel spin (independent of scroll) ──
      gsap.to('#bp-rearwheel, #bp-frontwheel', {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100vh',
        backgroundColor: '#0a0a0f',
        overflow: 'hidden',
      }}
    >
      {/* ── Perspective grid floor ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: `
            linear-gradient(#00f5ff 1px, transparent 1px),
            linear-gradient(90deg, #00f5ff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(600px) rotateX(55deg)',
          transformOrigin: 'center 80%',
        }}
      />

      {/* ── Fixed section title ── */}
      <div ref={titleRef} style={{ textAlign: 'center', padding: '0 1rem' }}>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #00f5ff, #a020f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.4rem',
          }}
        >
          Built with Modern Tech
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
          Scroll to watch the machine assemble
        </p>
      </div>

      {/* ── Bike container (centered on screen) ── */}
      <div
        ref={bikeRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '380px',
        }}
      >
        {/* Faint silhouette */}
        <BikeSilhouette />

        {/* Tech icons */}
        {bikeParts.map((part) => (
          <div
            key={part.id}
            id={part.id}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div style={{ position: 'relative' }} className="group">
              <part.Icon
                size={part.size}
                style={{
                  color: part.color,
                  filter: `drop-shadow(0 0 8px ${part.color}88)`,
                  display: 'block',
                }}
              />
              {/* Tooltip on hover */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-28px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  opacity: 0,
                  transition: 'opacity 0.2s',
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap',
                  background: 'rgba(10,10,15,0.9)',
                  border: '1px solid rgba(0,245,255,0.2)',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  fontSize: '0.7rem',
                  color: '#fff',
                }}
                className="tooltip"
              >
                {part.label}
              </div>
            </div>
          </div>
        ))}

        {/* Exhaust smoke particles */}
        <div style={{ position: 'absolute', left: '-270px', top: '90px' }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="exhaust-particle"
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00f5ff',
                left: -i * 14,
                opacity: 0.6 - i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Tooltip hover style */}
      <style>{`
        .group:hover .tooltip { opacity: 1 !important; }
      `}</style>
    </section>
  )
}
