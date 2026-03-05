// 'use client'

// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import gsap from 'gsap'
// import { TextPlugin } from 'gsap/TextPlugin'

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(TextPlugin)
// }

// export default function Preloader({ onComplete }) {
//   const [progress, setProgress] = useState(0)
//   const [isComplete, setIsComplete] = useState(false)

//   useEffect(() => {
//     // Simulate loading
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval)
//           return 100
//         }
//         return prev + Math.random() * 15
//       })
//     }, 200)

//     // Glitch text animation
//     const textElement = document.querySelector('.preloader-text')
//     if (textElement) {
//       gsap.to(textElement, {
//         duration: 1.5,
//         text: '[YOUR_NAME]',
//         ease: 'none',
//         delay: 0.5,
//       })
//     }

//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     if (progress >= 100) {
//       setTimeout(() => {
//         setIsComplete(true)
//         setTimeout(() => {
//           onComplete?.()
//         }, 800)
//       }, 500)
//     }
//   }, [progress, onComplete])

//   return (
//     <AnimatePresence>
//       {!isComplete && (
//         <motion.div
//           className="fixed inset-0 z-[10001] bg-dark flex flex-col items-center justify-center"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0, scale: 1.2 }}
//           transition={{ duration: 0.8, ease: 'easeInOut' }}
//         >
//           {/* Name with glitch effect */}
//           <motion.h1
//             className="preloader-text text-6xl md:text-8xl font-space font-bold text-gradient-cyan mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
            
//           </motion.h1>

//           {/* Loading bar */}
//           <div className="w-64 md:w-96 h-1 bg-white/10 rounded-full overflow-hidden">
//             <motion.div
//               className="h-full bg-cyan"
//               style={{
//                 width: `${progress}%`,
//                 boxShadow: '0 0 10px var(--accent-cyan)',
//               }}
//               initial={{ width: 0 }}
//               animate={{ width: `${progress}%` }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>

//           {/* Progress percentage */}
//           <motion.p
//             className="mt-4 text-secondary font-mono text-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {Math.floor(progress)}%
//           </motion.p>

//           {/* Glitch overlay */}
//           <motion.div
//             className="absolute inset-0 pointer-events-none"
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: [0, 0.1, 0, 0.15, 0],
//             }}
//             transition={{
//               duration: 0.2,
//               repeat: Infinity,
//               repeatDelay: 2,
//             }}
//             style={{
//               background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
//               mixBlendMode: 'overlay',
//             }}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const barRef = useRef(null);
  const bikeRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();
    const userName = 'Dhiraj Kumar Chowdhury';

    const nameElement = nameRef.current;
    const originalText = userName;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

    const glitchDecode = () => {
      tl.to(
        nameElement,
        {
          duration: 2.0,
          onUpdate: function () {
            const progress = this.progress();
            let text = '';
            for (let i = 0; i < originalText.length; i++) {
              if (progress > i / originalText.length) {
                text += originalText[i];
              } else {
                text += chars[Math.floor(Math.random() * chars.length)];
              }
            }
            nameElement.textContent = text;
          },
          onComplete: () => {
            nameElement.textContent = originalText;
          },
        },
        0
      );
    };

    glitchDecode();

    tl.to(
      barRef.current,
      { width: '100%', duration: 3.5, ease: 'power2.inOut' },
      0.8
    );

    tl.to(
      bikeRef.current,
      { left: 'calc(100% - 2.5rem)', duration: 3.5, ease: 'power2.inOut' },
      0.8
    );

    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: 100,
        duration: 3.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          percentRef.current.textContent = `${Math.floor(counter.value)}%`;
        },
      },
      0.8
    );

    tl.to({}, {}, '+=0.3');

    tl.to(containerRef.current, {
      scale: 1.05,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
      onComplete: () => {
        if (onComplete) onComplete();
        containerRef.current.style.display = 'none';
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#05050f',
        backgroundImage: `
          radial-gradient(ellipse at 20% 50%, rgba(120, 40, 200, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 60%)
        `,
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Name */}
      <div
        ref={nameRef}
        style={{
          marginBottom: '3.5rem',
          textAlign: 'center',
          fontFamily: "'Courier New', Courier, monospace",
          fontWeight: 700,
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          letterSpacing: '0.12em',
          color: '#e0faff',
          textShadow: `
            0 0 10px rgba(0, 245, 255, 0.9),
            0 0 30px rgba(0, 245, 255, 0.5),
            0 0 60px rgba(160, 80, 255, 0.4)
          `,
        }}
      />

      {/* Loading bar container */}
      <div
        style={{
          position: 'relative',
          width: '70%',
          maxWidth: '600px',
          marginBottom: '2.5rem',
        }}
      >
        {/* Track */}
        <div
          style={{
            height: '3px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.4)',
          }}
        >
          {/* Fill */}
          <div
            ref={barRef}
            style={{
              height: '100%',
              width: '0%',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #a020f0, #00f5ff)',
              boxShadow: '0 0 12px rgba(0, 245, 255, 0.9), 0 0 30px rgba(160, 40, 255, 0.6)',
            }}
          />
        </div>

        {/* Bike image */}
        <div
          ref={bikeRef}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%) translateX(-50%)',
            left: '0%',
          }}
        >
          <img
            src="/Bike.png"
            alt="Bike"
            style={{
              width: '5rem',
              height: '5rem',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 8px rgba(0, 245, 255, 0.8))',
            }}
            onError={(e) => {
              // Fallback to emoji if image fails to load
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = '<span style="font-size:2rem">🏍️</span>';
            }}
          />
        </div>
      </div>

      {/* Percentage counter */}
      <div
        ref={percentRef}
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: '1.6rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: '#00f5ff',
          textShadow: '0 0 12px rgba(0, 245, 255, 0.8), 0 0 25px rgba(160, 80, 255, 0.5)',
        }}
      >
        0%
      </div>
    </div>
  );
}