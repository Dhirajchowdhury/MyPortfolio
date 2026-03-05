'use client'

import { useEffect, useState } from 'react'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Preloader from '@/components/sections/Preloader'

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    if (typeof window !== 'undefined') {
      import('lenis').then((Lenis) => {
        const lenis = new Lenis.default({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
        })

        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Integrate with GSAP
        import('gsap').then((gsap) => {
          gsap.default.ticker.add((time) => {
            lenis.raf(time * 1000)
          })
          gsap.default.ticker.lagSmoothing(0)
        })
      })
    }

    // Console Easter Egg
    console.log(`
    ╔═══════════════════════════════════════════════════════╗
    ║                                                       ║
    ║   👋 Hey there, fellow developer!                    ║
    ║                                                       ║
    ║   I see you're checking out the console.             ║
    ║   Nice! I like curious minds.                        ║
    ║                                                       ║
    ║   This portfolio is built with:                      ║
    ║   • Next.js 14 (App Router)                          ║
    ║   • Tailwind CSS                                     ║
    ║   • GSAP + ScrollTrigger                             ║
    ║   • Framer Motion                                    ║
    ║   • Three.js                                         ║
    ║   • Lenis (smooth scroll)                            ║
    ║                                                       ║
    ║   Want to collaborate? Let's build something cool!   ║
    ║                                                       ║
    ║   📧 [YOUR_EMAIL]                                    ║
    ║   🐙 [GITHUB_URL]                                    ║
    ║                                                       ║
    ╚═══════════════════════════════════════════════════════╝
    `)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>[YOUR_NAME] | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in MERN, AI/ML, and Blockchain. Based in Kolkata, India." />
      </head>
      <body>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        
        {!isLoading && (
          <>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}
