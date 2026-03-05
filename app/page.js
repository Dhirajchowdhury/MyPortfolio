'use client'

import Hero from '@/components/sections/Hero'
import TechBike from '@/components/sections/TechBike'
import About from '@/components/sections/About'
import PhotoMarquee from '@/components/sections/PhotoMarquee'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TechBike />
      <About />
      <PhotoMarquee />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
     </main>
  )
}
