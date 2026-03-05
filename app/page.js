'use client'

import Hero from '@/components/sections/Hero'
import TechBike from '@/components/sections/TechBike'
import About from '@/components/sections/About'
import PhotoMarquee from '@/components/sections/PhotoMarquee'
import Skills from '@/components/sections/Skills'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TechBike />
      <About />
      <PhotoMarquee />
      <Skills />
      
      {/* Placeholder sections - to be completed */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-dark-light">
        <div className="text-center">
          <h2 className="text-4xl font-space font-bold text-gradient-cyan mb-4">Projects Section</h2>
          <p className="text-secondary">Coming soon...</p>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-center">
          <h2 className="text-4xl font-space font-bold text-gradient-green mb-4">Experience Section</h2>
          <p className="text-secondary">Coming soon...</p>
        </div>
      </section>

      <section id="blog" className="min-h-screen flex items-center justify-center bg-dark-light">
        <div className="text-center">
          <h2 className="text-4xl font-space font-bold text-gradient-purple mb-4">Blog Section</h2>
          <p className="text-secondary">Coming soon...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-center">
          <h2 className="text-4xl font-space font-bold text-gradient-cyan mb-4">Contact Section</h2>
          <p className="text-secondary">Coming soon...</p>
        </div>
      </section>
    </main>
  )
}
