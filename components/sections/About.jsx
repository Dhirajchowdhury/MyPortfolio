'use client'

import { motion } from 'framer-motion'
import IDCard from '../id-card/IDCard'

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold text-gradient-cyan mb-4">
            Who Am I?
          </h2>
          <p className="text-secondary text-lg">Get to know the person behind the code</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-start">
          {/* Left: Scrollable About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="glass p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-space font-bold mb-4 text-white">
                Hey there! 👋
              </h3>
              <p className="text-secondary leading-relaxed mb-4">
                [YOUR_BIO] - I'm a passionate 2nd-year Computer Science student at 
                [COLLEGE_NAME], diving deep into the world of technology. My journey 
                started with curiosity and has evolved into a full-blown obsession with 
                building things that matter.
              </p>
              <p className="text-secondary leading-relaxed mb-4">
                I work across four exciting domains: <span className="text-cyan">Frontend Development</span>, 
                <span className="text-white"> Full Stack (MERN)</span>, 
                <span className="text-green"> AI/ML</span>, and 
                <span className="text-purple"> Blockchain</span>. Each domain teaches me 
                something unique, and I love the challenge of switching between them.
              </p>
              <p className="text-secondary leading-relaxed">
                Based in Kolkata, India 📍, I'm always looking for opportunities to learn, 
                build, and collaborate on projects that push boundaries.
              </p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green rounded-full animate-pulse-glow" />
                <h3 className="text-xl font-space font-bold text-white">
                  Currently Building:
                </h3>
              </div>
              <p className="text-secondary leading-relaxed">
                [CURRENT_PROJECT] - Working on exciting projects that blend AI with 
                blockchain technology, creating decentralized applications that are 
                both intelligent and secure.
              </p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-space font-bold mb-4 text-white">
                Fun Facts About Me:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan text-xl">▹</span>
                  <span className="text-secondary">Coffee-powered developer ☕ (3+ cups a day)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan text-xl">▹</span>
                  <span className="text-secondary">Love exploring new tech stacks on weekends</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan text-xl">▹</span>
                  <span className="text-secondary">Believe in learning by building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan text-xl">▹</span>
                  <span className="text-secondary">Open source contributor and tech community enthusiast</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-space font-bold mb-4 text-white">
                What I'm Looking For:
              </h3>
              <p className="text-secondary leading-relaxed mb-4">
                I'm actively seeking opportunities to work on challenging projects, 
                whether it's a full-time role, internship, or freelance work. I'm 
                particularly interested in:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="px-4 py-2 bg-cyan/10 border border-cyan/30 rounded-lg text-cyan text-sm text-center">
                  Full Stack Roles
                </div>
                <div className="px-4 py-2 bg-green/10 border border-green/30 rounded-lg text-green text-sm text-center">
                  AI/ML Projects
                </div>
                <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg text-purple text-sm text-center">
                  Web3 Development
                </div>
                <div className="px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white text-sm text-center">
                  Freelance Work
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Sticky ID Card */}
          <div className="md:sticky md:top-24">
            <IDCard />
          </div>
        </div>
      </div>
    </section>
  )
}
