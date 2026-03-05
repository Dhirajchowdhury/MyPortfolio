'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-dark border-t border-cyan/20">
      {/* Glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Logo */}
          <div>
            <h3 className="text-2xl font-space font-bold text-gradient-cyan mb-2">
              [YOUR_NAME]
            </h3>
            <p className="text-secondary text-sm">
              Full Stack Developer • AI/ML • Blockchain
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary hover:text-cyan transition-colors text-sm hoverable"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social */}
          <div className="flex flex-col items-end">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="[GITHUB_URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-cyan hover:bg-cyan hover:text-dark transition-all hoverable"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="[LINKEDIN_URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-cyan hover:bg-cyan hover:text-dark transition-all hoverable"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:[YOUR_EMAIL]"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-cyan hover:bg-cyan hover:text-dark transition-all hoverable"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-secondary text-sm flex items-center justify-center gap-2">
            Designed & Built by [YOUR_NAME] with
            <FiHeart className="text-cyan animate-pulse-glow" />
          </p>
          <p className="text-secondary text-xs mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
