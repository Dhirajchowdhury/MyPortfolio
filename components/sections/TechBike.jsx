// 'use client'

// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import {
//   SiReact, SiNodedotjs, SiMongodb, SiJavascript,
//   SiPython, SiGit, SiTailwindcss, SiExpress,
//   SiHtml5, SiNextdotjs, SiTypescript, SiDocker,
//   SiPostgresql, SiSolidity, SiTensorflow,
// } from 'react-icons/si'
// import { FaCss3Alt, FaEthereum } from 'react-icons/fa'
// import { BiHardHat } from 'react-icons/bi'
// import { TbBrandThreejs } from 'react-icons/tb'

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger)
// }



// const bikeParts = [
//   // REAR WHEEL — hub center
//   { id: 'bp-rw',   Icon: SiReact,        color: '#61DAFB', x: 170, y: 300, size: 52, label: 'React'      },
//   // FRONT WHEEL — hub center
//   { id: 'bp-fw',   Icon: SiNodedotjs,    color: '#339933', x: 530, y: 300, size: 52, label: 'Node.js'    },
//   // FUEL TANK — two icons side by side on top of tank
//   { id: 'bp-t1',   Icon: SiJavascript,   color: '#F7DF1E', x: 315, y: 175, size: 38, label: 'JavaScript' },
//   { id: 'bp-t2',   Icon: SiTypescript,   color: '#3178C6', x: 365, y: 175, size: 38, label: 'TypeScript' },
//   // SEAT COWL — just behind tank
//   { id: 'bp-sc',   Icon: SiTailwindcss,  color: '#06B6D4', x: 238, y: 205, size: 34, label: 'Tailwind'   },
//   // ENGINE — three icons spread across engine block
//   { id: 'bp-e1',   Icon: SiMongodb,      color: '#47A248', x: 278, y: 258, size: 38, label: 'MongoDB'    },
//   { id: 'bp-e2',   Icon: SiPostgresql,   color: '#4169E1', x: 340, y: 258, size: 36, label: 'PostgreSQL' },
//   { id: 'bp-e3',   Icon: SiExpress,      color: '#cccccc', x: 400, y: 258, size: 34, label: 'Express'    },
//   // LOWER FRAME TUBES
//   { id: 'bp-f1',   Icon: SiHtml5,        color: '#E34F26', x: 258, y: 230, size: 32, label: 'HTML5'      },
//   { id: 'bp-f2',   Icon: FaCss3Alt,      color: '#1572B6', x: 430, y: 222, size: 32, label: 'CSS3'       },
//   // UPPER FRAME / headstock area
//   { id: 'bp-nxt',  Icon: SiNextdotjs,    color: '#ffffff', x: 455, y: 200, size: 36, label: 'Next.js'    },
//   // AI/ML — left side of tank
//   //{ id: 'bp-tf',   Icon: SiTensorflow,   color: '#FF6F00', x: 415, y: 175, size: 32, label: 'TensorFlow' },
//   // HANDLEBAR top
//   { id: 'bp-hb',   Icon: SiGit,          color: '#F05032', x: 468, y: 162, size: 32, label: 'Git'        },
//   // MIRROR
//   { id: 'bp-mir',  Icon: TbBrandThreejs, color: '#ffffff', x: 445, y: 143, size: 28, label: 'Three.js'   },
//   // FRONT FORK
//   { id: 'bp-fk',   Icon: SiDocker,       color: '#2496ED', x: 522, y: 240, size: 32, label: 'Docker'     },
//   // HEADLIGHT
//   { id: 'bp-hl',   Icon: SiPython,       color: '#3776AB', x: 568, y: 248, size: 30, label: 'Python'     },
//   // BLOCKCHAIN — rear upper frame
//   { id: 'bp-sol',  Icon: SiSolidity,     color: '#9999bb', x: 295, y: 180, size: 30, label: 'Solidity'   },
//   { id: 'bp-eth',  Icon: FaEthereum,     color: '#627EEA', x: 500, y: 172, size: 30, label: 'Ethereum'   },
//   // EXHAUST — low rear
//  // { id: 'bp-exh',  Icon: BiHardHat,      color: '#ffc517', x: 110, y: 285, size: 28, label: 'Hardhat'    },
// ]

// // ── Precise SVG silhouette traced from reference image ────────────
// // viewBox 0 0 700 390 — rear wheel cx=170 cy=300 r=72, front cx=530 cy=300 r=72
// const S = '#00f5ff'  // stroke color
// const SW = { strokeWidth: 3, stroke: S, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }
// const SWT = { strokeWidth: 2, stroke: S, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }

// const BikeSilhouette = () => (
//   <svg
//     width="700" height="390"
//     viewBox="0 0 700 390"
//     style={{ position: 'absolute', top: 0, left: 0, opacity: 0.22, pointerEvents: 'none' }}
//   >
//     <defs>
//       <filter id="bikeGlow">
//         <feGaussianBlur stdDeviation="1.5" result="blur"/>
//         <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
//       </filter>
//     </defs>

//     {/* ══ REAR WHEEL ══ */}
//     {/* Outer tyre — thick */}
//     <circle cx="170" cy="300" r="72" stroke={S} strokeWidth="6" fill="none" filter="url(#bikeGlow)" />
//     {/* Inner rim */}
//     <circle cx="170" cy="300" r="52" stroke={S} strokeWidth="1.5" fill="none" />
//     {/* Hub */}
//     <circle cx="170" cy="300" r="10" stroke={S} strokeWidth="2.5" fill="none" />
//     {/* 5 spokes */}
//     {[18, 90, 162, 234, 306].map((deg, i) => (
//       <line key={`rs${i}`}
//         x1={170 + 10 * Math.cos(deg * Math.PI / 180)}
//         y1={300 + 10 * Math.sin(deg * Math.PI / 180)}
//         x2={170 + 52 * Math.cos(deg * Math.PI / 180)}
//         y2={300 + 52 * Math.sin(deg * Math.PI / 180)}
//         stroke={S} strokeWidth="2"
//       />
//     ))}

//     {/* ══ FRONT WHEEL ══ */}
//     <circle cx="530" cy="300" r="72" stroke={S} strokeWidth="6" fill="none" filter="url(#bikeGlow)" />
//     <circle cx="530" cy="300" r="52" stroke={S} strokeWidth="1.5" fill="none" />
//     <circle cx="530" cy="300" r="10" stroke={S} strokeWidth="2.5" fill="none" />
//     {[18, 90, 162, 234, 306].map((deg, i) => (
//       <line key={`fs${i}`}
//         x1={530 + 10 * Math.cos(deg * Math.PI / 180)}
//         y1={300 + 10 * Math.sin(deg * Math.PI / 180)}
//         x2={530 + 52 * Math.cos(deg * Math.PI / 180)}
//         y2={300 + 52 * Math.sin(deg * Math.PI / 180)}
//         stroke={S} strokeWidth="2"
//       />
//     ))}

//     {/* ══ MAIN FRAME TRIANGLE ══ */}
//     {/* Top tube: seat post → headstock */}
//     <path d="M 222 215 L 310 178 L 420 170 L 482 192" {...SW} strokeWidth="4" />
//     {/* Down tube: headstock → bottom bracket */}
//     <path d="M 482 192 L 468 272 L 340 282 L 225 275" {...SW} strokeWidth="4" />
//     {/* Seat tube: seat top → bottom bracket */}
//     <path d="M 222 215 L 228 275" {...SW} strokeWidth="3.5" />
//     {/* Seat stays: seat top → rear axle */}
//     <path d="M 222 215 L 200 278 L 170 300" {...SW} strokeWidth="3" />
//     {/* Chain stays: bottom bracket → rear axle */}
//     <path d="M 225 275 L 170 300" {...SW} strokeWidth="3" />

//     {/* ══ FUEL TANK ══ */}
//     {/* Organic tank shape sitting on top tube */}
//     <path d="M 310 178 Q 322 148 360 143 Q 400 140 425 160 L 420 170 L 310 178 Z"
//       stroke={S} strokeWidth="2.5" fill="rgba(0,245,255,0.07)" strokeLinejoin="round" />
//     {/* Tank bottom edge detail */}
//     <path d="M 308 195 Q 360 208 422 195" {...SWT} />

//     {/* ══ SEAT COWL ══ */}
//     {/* Upper seat fairing */}
//     <path d="M 180 198 Q 205 182 260 185 L 310 193 L 308 210 Q 248 215 190 215 Z"
//       stroke={S} strokeWidth="2" fill="rgba(0,245,255,0.05)" />
//     {/* Seat underline */}
//     <path d="M 185 215 Q 250 218 308 210" {...SWT} />
//     {/* Rear cowl tail */}
//     <path d="M 140 212 L 160 200 L 185 198 L 190 215 L 162 222 Z"
//       stroke={S} strokeWidth="2" fill="rgba(0,245,255,0.04)" />

//     {/* ══ ENGINE BLOCK ══ */}
//     <path d="M 245 220 L 460 220 L 468 272 L 340 282 L 225 275 L 228 238 Z"
//       stroke={S} strokeWidth="2.5" fill="rgba(0,245,255,0.04)" strokeLinejoin="round" />
//     {/* Engine internal ribs */}
//     <line x1="310" y1="222" x2="308" y2="278" stroke={S} strokeWidth="1" opacity="0.45" />
//     <line x1="385" y1="221" x2="390" y2="278" stroke={S} strokeWidth="1" opacity="0.45" />

//     {/* ══ FRONT FORKS ══ */}
//     {/* Upper fork legs from headstock */}
//     <line x1="482" y1="192" x2="514" y2="218" stroke={S} strokeWidth="4" strokeLinecap="round" />
//     <line x1="488" y1="188" x2="520" y2="214" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
//     {/* Lower fork legs to axle */}
//     <line x1="514" y1="218" x2="530" y2="300" stroke={S} strokeWidth="4" strokeLinecap="round" />
//     <line x1="520" y1="214" x2="534" y2="295" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
//     {/* Fork brace / slider */}
//     <line x1="516" y1="248" x2="533" y2="256" stroke={S} strokeWidth="2" />
//     <rect x="514" y="242" width="20" height="18" rx="3" stroke={S} strokeWidth="1.5" fill="none" />

//     {/* ══ HANDLEBAR ══ */}
//     {/* Stem up from headstock */}
//     <line x1="484" y1="190" x2="472" y2="162" stroke={S} strokeWidth="3" strokeLinecap="round" />
//     {/* Bar left */}
//     <line x1="472" y1="162" x2="448" y2="155" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
//     {/* Bar right */}
//     <line x1="472" y1="162" x2="498" y2="158" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
//     {/* Throttle/grip end right */}
//     <rect x="494" y="152" width="18" height="12" rx="4" stroke={S} strokeWidth="2" fill="none" />
//     {/* Mirror stem + round mirror */}
//     <line x1="450" y1="155" x2="445" y2="142" stroke={S} strokeWidth="2" strokeLinecap="round" />
//     <circle cx="445" cy="136" r="9" stroke={S} strokeWidth="2" fill="none" />

//     {/* ══ HEADLIGHT BOX ══ */}
//     <rect x="544" y="234" width="42" height="32" rx="6"
//       stroke={S} strokeWidth="2.5" fill="rgba(0,245,255,0.1)" />
//     {/* Headlight inner lens */}
//     <rect x="549" y="239" width="32" height="22" rx="4"
//       stroke={S} strokeWidth="1" fill="rgba(0,245,255,0.06)" />

//     {/* ══ REAR FENDER ══ */}
//     <path d="M 170 228 Q 184 210 198 212 L 200 278"
//       stroke={S} strokeWidth="2" fill="none" />

//     {/* ══ FRONT FENDER ══ */}
//     <path d="M 530 228 Q 546 212 562 220 Q 568 228 565 238"
//       stroke={S} strokeWidth="2" fill="none" />

//     {/* ══ EXHAUST SYSTEM ══ */}
//     {/* Header pipe from engine down */}
//     <path d="M 248 268 Q 220 285 190 288 Q 155 290 120 285"
//       stroke={S} strokeWidth="3" fill="none" strokeLinecap="round" />
//     {/* Muffler can */}
//     <path d="M 90 278 Q 68 276 58 278 Q 55 282 58 286 Q 68 288 90 286 Z"
//       stroke={S} strokeWidth="2.5" fill="rgba(0,245,255,0.08)" />
//     {/* Heat shield detail */}
//     <path d="M 130 282 Q 148 278 165 282" stroke={S} strokeWidth="1.5" fill="none" />

//     {/* ══ REAR CRASH GUARD / CARRIER ══ (matches reference) */}
//     <path d="M 140 212 Q 108 232 98 258 Q 95 272 102 278"
//       stroke={S} strokeWidth="2" fill="none" strokeLinecap="round" />
//     <path d="M 98 220 Q 88 238 88 258" stroke={S} strokeWidth="1.5" fill="none" />
//     {/* Guard cross brace */}
//     <line x1="98" y1="238" x2="108" y2="244" stroke={S} strokeWidth="1.5" />

//     {/* ══ FOOTPEG ══ */}
//     <line x1="298" y1="282" x2="298" y2="306" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
//     <line x1="282" y1="306" x2="316" y2="306" stroke={S} strokeWidth="2" strokeLinecap="round" />

//     {/* ══ CHAIN LINE ══ */}
//     <path d="M 228 288 Q 350 300 468 285"
//       stroke={S} strokeWidth="1" fill="none" strokeDasharray="5 4" opacity="0.5" />
//   </svg>
// )

// export default function TechBike() {
//   const containerRef = useRef(null)
//   const bikeRef      = useRef(null)
//   const titleRef     = useRef(null)

//   useEffect(() => {
//     if (!containerRef.current || !bikeRef.current) return

//     const ctx = gsap.context(() => {
//       // ── Scatter all icons off screen initially ──
//       bikeParts.forEach((part) => {
//         gsap.set(`#${part.id}`, {
//           x: gsap.utils.random(-900, 900),
//           y: gsap.utils.random(-500, 500),
//           opacity: 0,
//           scale: 0.3,
//           rotation: gsap.utils.random(-180, 180),
//         })
//       })

//       // ── Keep title pinned independently at top ──
//       gsap.set(titleRef.current, { position: 'fixed', top: '90px', left: 0, right: 0, zIndex: 20 })

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: '+=3500',
//           scrub: 1.2,
//           pin: true,
//           anticipatePin: 1,
//           onLeave: () => {
//             // Unpin title when section exits
//             gsap.set(titleRef.current, { position: 'absolute' })
//           },
//           onEnterBack: () => {
//             gsap.set(titleRef.current, { position: 'fixed', top: '90px' })
//           },
//         },
//       })

//       // Phase 1 — Icons fly in and assemble (staggered)
//       bikeParts.forEach((part, i) => {
//         tl.to(
//           `#${part.id}`,
//           {
//             x: part.x - 350, // center of 700px canvas
//             y: part.y - 195, // center of 390px canvas
//             opacity: 1,
//             scale: 1,
//             rotation: 0,
//             duration: 0.4,
//             ease: 'back.out(1.4)',
//           },
//           i * 0.04
//         )
//       })

//       // Phase 2 — Pause fully assembled
//       tl.to({}, { duration: 0.5 })

//       // Phase 3 — Bike rides off to the right
//       tl.to(bikeRef.current, {
//         x: '+=1400',
//         opacity: 0,
//         duration: 0.8,
//         ease: 'power3.in',
//       })

//       // Phase 4 — Title fades out
//       tl.to(titleRef.current, {
//         opacity: 0,
//         y: -30,
//         duration: 0.3,
//       }, '<0.4')

//       // ── Continuous wheel spin (independent of scroll) ──
//       gsap.to('#bp-rw, #bp-fw', {
//         rotation: 360,
//         duration: 3,
//         repeat: -1,
//         ease: 'none',
//         transformOrigin: '50% 50%',
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       style={{
//         position: 'relative',
//         height: '100vh',
//         backgroundColor: '#0a0a0f',
//         overflow: 'hidden',
//       }}
//     >
//       {/* ── Perspective grid floor ── */}
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           opacity: 0.08,
//           backgroundImage: `
//             linear-gradient(#00f5ff 1px, transparent 1px),
//             linear-gradient(90deg, #00f5ff 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(600px) rotateX(55deg)',
//           transformOrigin: 'center 80%',
//         }}
//       />

//       {/* ── Fixed section title ── */}
//       <div ref={titleRef} style={{ textAlign: 'center', padding: '0 1rem' }}>
//         <h2
//           style={{
//             fontFamily: "'Space Grotesk', sans-serif",
//             fontSize: 'clamp(2rem, 5vw, 3.5rem)',
//             fontWeight: 700,
//             background: 'linear-gradient(90deg, #00f5ff, #a020f0)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             marginBottom: '0.4rem',
//           }}
//         >
//           Built with Modern Tech
//         </h2>
//         <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
//           Scroll to watch the machine assemble
//         </p>
//       </div>

//       {/* ── Bike container (centered on screen) ── */}
//       <div
//         ref={bikeRef}
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: '700px',
//           height: '390px',
//         }}
//       >
//         {/* Faint silhouette */}
//         <BikeSilhouette />

//         {/* Tech icons */}
//         {bikeParts.map((part) => (
//           <div
//             key={part.id}
//             id={part.id}
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//             }}
//           >
//             <div style={{ position: 'relative' }} className="group">
//               <part.Icon
//                 size={part.size}
//                 style={{
//                   color: part.color,
//                   filter: `drop-shadow(0 0 8px ${part.color}88)`,
//                   display: 'block',
//                 }}
//               />
//               {/* Tooltip on hover */}
//               <div
//                 style={{
//                   position: 'absolute',
//                   bottom: '-28px',
//                   left: '50%',
//                   transform: 'translateX(-50%)',
//                   opacity: 0,
//                   transition: 'opacity 0.2s',
//                   pointerEvents: 'none',
//                   whiteSpace: 'nowrap',
//                   background: 'rgba(10,10,15,0.9)',
//                   border: '1px solid rgba(0,245,255,0.2)',
//                   borderRadius: '4px',
//                   padding: '2px 8px',
//                   fontSize: '0.7rem',
//                   color: '#fff',
//                 }}
//                 className="tooltip"
//               >
//                 {part.label}
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Exhaust smoke particles */}
//         <div style={{ position: 'absolute', left: '-270px', top: '90px' }}>
//           {[...Array(5)].map((_, i) => (
//             <div
//               key={i}
//               className="exhaust-particle"
//               style={{
//                 position: 'absolute',
//                 width: '8px',
//                 height: '8px',
//                 borderRadius: '50%',
//                 background: '#00f5ff',
//                 left: -i * 14,
//                 opacity: 0.6 - i * 0.1,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Tooltip hover style */}
//       <style>{`
//         .group:hover .tooltip { opacity: 1 !important; }
//       `}</style>
//     </section>
//   )
// }

'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SiReact, SiNodedotjs, SiMongodb, SiJavascript,
  SiPython, SiGit, SiTailwindcss, SiExpress,
  SiNextdotjs, SiTypescript, SiSolidity,
} from 'react-icons/si'
import { FaCss3Alt, FaEthereum } from 'react-icons/fa'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ── Cleaned up: 13 icons, well-spaced, one per "zone" ────────────
const bikeParts = [
  // REAR WHEEL hub
  { id: 'bp-rw',  Icon: SiReact,       color: '#61DAFB', x: 170, y: 300, size: 54, label: 'React'      },
  // FRONT WHEEL hub
  { id: 'bp-fw',  Icon: SiNodedotjs,   color: '#339933', x: 530, y: 300, size: 54, label: 'Node.js'    },
  // TANK — two icons, clearly separated
  { id: 'bp-t1',  Icon: SiJavascript,  color: '#F7DF1E', x: 325, y: 162, size: 36, label: 'JavaScript' },
  { id: 'bp-t2',  Icon: SiTypescript,  color: '#3178C6', x: 385, y: 162, size: 36, label: 'TypeScript' },
  // SEAT COWL
  { id: 'bp-sc',  Icon: SiTailwindcss, color: '#06B6D4', x: 228, y: 198, size: 32, label: 'Tailwind'   },
  // ENGINE — only two, wide apart
  { id: 'bp-e1',  Icon: SiMongodb,     color: '#47A248', x: 290, y: 255, size: 36, label: 'MongoDB'    },
  { id: 'bp-e2',  Icon: SiExpress,     color: '#cccccc', x: 400, y: 255, size: 32, label: 'Express'    },
  // UPPER FRAME / headstock
  { id: 'bp-nxt', Icon: SiNextdotjs,   color: '#ffffff', x: 458, y: 195, size: 34, label: 'Next.js'    },
  // HANDLEBAR
  { id: 'bp-hb',  Icon: SiGit,         color: '#F05032', x: 472, y: 155, size: 30, label: 'Git'        },
  // HEADLIGHT area
  { id: 'bp-hl',  Icon: SiPython,      color: '#3776AB', x: 566, y: 248, size: 28, label: 'Python'     },
  // LOWER FRAME — CSS lives near HTML territory
  { id: 'bp-f1',  Icon: FaCss3Alt,     color: '#1572B6', x: 258, y: 228, size: 30, label: 'CSS3'       },
  // BLOCKCHAIN — rear upper & front fork
  { id: 'bp-sol', Icon: SiSolidity,    color: '#9999bb', x: 300, y: 185, size: 28, label: 'Solidity'   },
  { id: 'bp-eth', Icon: FaEthereum,    color: '#627EEA', x: 500, y: 168, size: 28, label: 'Ethereum'   },
]

const S  = '#00f5ff'
const SW = { strokeWidth: 3, stroke: S, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }
const SWT = { strokeWidth: 2, stroke: S, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }

const BikeSilhouette = () => (
  <svg
    width="700" height="390"
    viewBox="0 0 700 390"
    style={{ position: 'absolute', top: 0, left: 0, opacity: 0.22, pointerEvents: 'none' }}
  >
    <defs>
      <filter id="bikeGlow">
        <feGaussianBlur stdDeviation="1.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* REAR WHEEL */}
    <circle cx="170" cy="300" r="72" stroke={S} strokeWidth="6" fill="none" filter="url(#bikeGlow)" />
    <circle cx="170" cy="300" r="52" stroke={S} strokeWidth="1.5" fill="none" />
    <circle cx="170" cy="300" r="10" stroke={S} strokeWidth="2.5" fill="none" />
    {[18, 90, 162, 234, 306].map((deg, i) => (
      <line key={`rs${i}`}
        x1={170 + 10 * Math.cos(deg * Math.PI / 180)}
        y1={300 + 10 * Math.sin(deg * Math.PI / 180)}
        x2={170 + 52 * Math.cos(deg * Math.PI / 180)}
        y2={300 + 52 * Math.sin(deg * Math.PI / 180)}
        stroke={S} strokeWidth="2"
      />
    ))}

    {/* FRONT WHEEL */}
    <circle cx="530" cy="300" r="72" stroke={S} strokeWidth="6" fill="none" filter="url(#bikeGlow)" />
    <circle cx="530" cy="300" r="52" stroke={S} strokeWidth="1.5" fill="none" />
    <circle cx="530" cy="300" r="10" stroke={S} strokeWidth="2.5" fill="none" />
    {[18, 90, 162, 234, 306].map((deg, i) => (
      <line key={`fs${i}`}
        x1={530 + 10 * Math.cos(deg * Math.PI / 180)}
        y1={300 + 10 * Math.sin(deg * Math.PI / 180)}
        x2={530 + 52 * Math.cos(deg * Math.PI / 180)}
        y2={300 + 52 * Math.sin(deg * Math.PI / 180)}
        stroke={S} strokeWidth="2"
      />
    ))}

    {/* MAIN FRAME */}
    <path d="M 222 215 L 310 178 L 420 170 L 482 192" {...SW} strokeWidth="4" />
    <path d="M 482 192 L 468 272 L 340 282 L 225 275" {...SW} strokeWidth="4" />
    <path d="M 222 215 L 228 275" {...SW} strokeWidth="3.5" />
    <path d="M 222 215 L 200 278 L 170 300" {...SW} strokeWidth="3" />
    <path d="M 225 275 L 170 300" {...SW} strokeWidth="3" />

    {/* FUEL TANK */}
    <path d="M 310 178 Q 322 148 360 143 Q 400 140 425 160 L 420 170 L 310 178 Z"
      stroke={S} strokeWidth="2.5" fill="rgba(0,245,255,0.07)" strokeLinejoin="round" />
    <path d="M 308 195 Q 360 208 422 195" {...SWT} />

    {/* SEAT COWL */}
    <path d="M 180 198 Q 205 182 260 185 L 310 193 L 308 210 Q 248 215 190 215 Z"
      stroke={S} strokeWidth="2" fill="rgba(0,245,255,0.05)" />
    <path d="M 185 215 Q 250 218 308 210" {...SWT} />
    <path d="M 140 212 L 160 200 L 185 198 L 190 215 L 162 222 Z"
      stroke={S} strokeWidth="2" fill="rgba(0,245,255,0.04)" />

    {/* ENGINE BLOCK */}
    <path d="M 245 220 L 460 220 L 468 272 L 340 282 L 225 275 L 228 238 Z"
      stroke={S} strokeWidth="2.5" fill="rgba(0,245,255,0.04)" strokeLinejoin="round" />
    <line x1="345" y1="222" x2="348" y2="280" stroke={S} strokeWidth="1" opacity="0.4" />

    {/* FRONT FORKS */}
    <line x1="482" y1="192" x2="514" y2="218" stroke={S} strokeWidth="4" strokeLinecap="round" />
    <line x1="488" y1="188" x2="520" y2="214" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="514" y1="218" x2="530" y2="300" stroke={S} strokeWidth="4" strokeLinecap="round" />
    <line x1="520" y1="214" x2="534" y2="295" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
    <rect x="514" y="242" width="20" height="18" rx="3" stroke={S} strokeWidth="1.5" fill="none" />

    {/* HANDLEBAR */}
    <line x1="484" y1="190" x2="472" y2="162" stroke={S} strokeWidth="3" strokeLinecap="round" />
    <line x1="472" y1="162" x2="448" y2="155" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="472" y1="162" x2="498" y2="158" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
    <rect x="494" y="152" width="18" height="12" rx="4" stroke={S} strokeWidth="2" fill="none" />
    <line x1="450" y1="155" x2="445" y2="142" stroke={S} strokeWidth="2" strokeLinecap="round" />
    <circle cx="445" cy="136" r="9" stroke={S} strokeWidth="2" fill="none" />

    {/* HEADLIGHT */}
    <rect x="544" y="234" width="42" height="32" rx="6"
      stroke={S} strokeWidth="2.5" fill="rgba(0,245,255,0.1)" />
    <rect x="549" y="239" width="32" height="22" rx="4"
      stroke={S} strokeWidth="1" fill="rgba(0,245,255,0.06)" />

    {/* EXHAUST */}
    <path d="M 248 268 Q 220 285 190 288 Q 155 290 120 285"
      stroke={S} strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 90 278 Q 68 276 58 278 Q 55 282 58 286 Q 68 288 90 286 Z"
      stroke={S} strokeWidth="2.5" fill="rgba(0,245,255,0.08)" />

    {/* REAR CRASH GUARD */}
    <path d="M 140 212 Q 108 232 98 258 Q 95 272 102 278"
      stroke={S} strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* FOOTPEG */}
    <line x1="298" y1="282" x2="298" y2="306" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="282" y1="306" x2="316" y2="306" stroke={S} strokeWidth="2" strokeLinecap="round" />

    {/* CHAIN LINE */}
    <path d="M 228 288 Q 350 300 468 285"
      stroke={S} strokeWidth="1" fill="none" strokeDasharray="5 4" opacity="0.5" />
  </svg>
)

export default function TechBike() {
  const containerRef = useRef(null)
  const bikeRef      = useRef(null)
  const titleRef     = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !bikeRef.current) return

    const ctx = gsap.context(() => {
      bikeParts.forEach((part) => {
        gsap.set(`#${part.id}`, {
          x: gsap.utils.random(-900, 900),
          y: gsap.utils.random(-500, 500),
          opacity: 0,
          scale: 0.3,
          rotation: gsap.utils.random(-180, 180),
        })
      })

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
            gsap.set(titleRef.current, { position: 'absolute' })
          },
          onEnterBack: () => {
            gsap.set(titleRef.current, { position: 'fixed', top: '90px' })
          },
        },
      })

      // Phase 1 — fly in and assemble
      bikeParts.forEach((part, i) => {
        tl.to(
          `#${part.id}`,
          {
            x: part.x - 350,
            y: part.y - 195,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'back.out(1.4)',
          },
          i * 0.05
        )
      })

      // Phase 2 — pause assembled
      tl.to({}, { duration: 0.5 })

      // Phase 3 — ride off right
      tl.to(bikeRef.current, {
        x: '+=1400',
        opacity: 0,
        duration: 0.8,
        ease: 'power3.in',
      })

      // Phase 4 — title fades out
      tl.to(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.3,
      }, '<0.4')

      // Continuous wheel spin
      gsap.to('#bp-rw, #bp-fw', {
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
      {/* Grid floor */}
      <div style={{
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
      }} />

      {/* Section title */}
      <div ref={titleRef} style={{ textAlign: 'center', padding: '0 1rem' }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          background: 'linear-gradient(90deg, #00f5ff, #a020f0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.4rem',
        }}>
          Built with Modern Tech
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
          Scroll to watch the machine assemble
        </p>
      </div>

      {/* Bike container */}
      <div
        ref={bikeRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '390px',
        }}
      >
        <BikeSilhouette />

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

        {/* Exhaust smoke */}
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

      <style>{`
        .group:hover .tooltip { opacity: 1 !important; }
      `}</style>
    </section>
  )
}
