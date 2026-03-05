'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiMongodb,
  SiPostman, SiPython, SiOpenai, SiSolidity,
  SiEthereum, SiGit, SiGithub, SiFigma, SiVercel
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { TbBrandFramerMotion, TbBrandThreejs } from 'react-icons/tb'
import { SiGreensock } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const skillsData = {
  all: [
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', domain: 'frontend' },
    { name: 'React', Icon: SiReact, color: '#61DAFB', domain: 'frontend' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#000000', domain: 'frontend' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', domain: 'frontend' },
    { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', domain: 'frontend' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6', domain: 'frontend' },
    { name: 'GSAP', Icon: SiGreensock, color: '#88CE02', domain: 'frontend' },
    { name: 'Framer Motion', Icon: TbBrandFramerMotion, color: '#0055FF', domain: 'frontend' },
    { name: 'Three.js', Icon: TbBrandThreejs, color: '#000000', domain: 'frontend' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', domain: 'backend' },
    { name: 'Express.js', Icon: SiExpress, color: '#000000', domain: 'backend' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', domain: 'backend' },
    { name: 'REST APIs', Icon: SiPostman, color: '#FF6C37', domain: 'backend' },
    { name: 'Python', Icon: SiPython, color: '#3776AB', domain: 'aiml' },
    { name: 'OpenAI API', Icon: SiOpenai, color: '#412991', domain: 'aiml' },
    { name: 'Solidity', Icon: SiSolidity, color: '#363636', domain: 'blockchain' },
    { name: 'Ethers.js', Icon: SiEthereum, color: '#3C3C3D', domain: 'blockchain' },
    { name: 'Git', Icon: SiGit, color: '#F05032', domain: 'tools' },
    { name: 'GitHub', Icon: SiGithub, color: '#181717', domain: 'tools' },
    { name: 'Figma', Icon: SiFigma, color: '#F24E1E', domain: 'tools' },
    { name: 'VS Code', Icon: VscCode, color: '#007ACC', domain: 'tools' },
    { name: 'Vercel', Icon: SiVercel, color: '#000000', domain: 'tools' },
  ],
}

const filters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'aiml', label: 'AI/ML' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'tools', label: 'Tools' },
]

const domainColors = {
  frontend: '#00f5ff',
  backend: '#ffffff',
  aiml: '#39ff14',
  blockchain: '#7c3aed',
  tools: '#94a3b8',
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredSkills = activeFilter === 'all'
    ? skillsData.all
    : skillsData.all.filter(skill => skill.domain === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-badge',
        {
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
          opacity: 0,
          scale: 0.5,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 60%',
            once: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [activeFilter])

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-dark">
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
            My Arsenal
          </h2>
          <p className="text-secondary text-lg">Technologies I work with</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all hoverable relative ${
                activeFilter === filter.id
                  ? 'bg-cyan text-dark'
                  : 'glass text-secondary hover:text-white'
              }`}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <motion.div
                  className="absolute inset-0 rounded-full glow-cyan"
                  layoutId="activeFilter"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-badge glass p-6 rounded-2xl flex flex-col items-center gap-3 hoverable group"
                style={{
                  borderColor: domainColors[skill.domain],
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 20px ${domainColors[skill.domain]}40`,
                }}
                layout
              >
                <skill.Icon
                  size={48}
                  style={{ color: skill.color }}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm text-white font-medium text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
