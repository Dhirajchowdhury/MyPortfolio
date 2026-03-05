'use client'

import { FiGithub, FiLinkedin, FiMapPin, FiGlobe } from 'react-icons/fi'

export default function CardBack() {
  return (
    <div className="relative w-full h-full glass rounded-2xl overflow-hidden shadow-2xl">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(var(--accent-cyan) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-cyan) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Magnetic Stripe */}
        <div className="w-full h-12 bg-gradient-to-r from-cyan/80 to-cyan/60 rounded-lg mb-8 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.3) 2px,
                rgba(0,0,0,0.3) 4px
              )`,
            }}
          />
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 glass rounded-lg p-2">
            <div className="w-full h-full bg-white rounded flex items-center justify-center">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, #000 0px, #000 4px, transparent 4px, transparent 8px),
                    repeating-linear-gradient(90deg, #000 0px, #000 4px, transparent 4px, transparent 8px)
                  `,
                  backgroundSize: '8px 8px',
                }}
              />
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-secondary mb-6">
          Scan to visit GitHub profile
        </p>

        {/* Quote */}
        <div className="glass p-4 rounded-lg mb-6">
          <p className="text-sm text-secondary italic text-center">
            "Code is like humor. When you have to explain it, it's bad."
          </p>
          <p className="text-xs text-cyan text-center mt-2">- Cory House</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <FiGithub className="text-cyan" size={16} />
            <span className="text-xs text-secondary">[GITHUB_URL]</span>
          </div>
          <div className="flex items-center gap-3">
            <FiLinkedin className="text-cyan" size={16} />
            <span className="text-xs text-secondary">[LINKEDIN_URL]</span>
          </div>
          <div className="flex items-center gap-3">
            <FiMapPin className="text-cyan" size={16} />
            <span className="text-xs text-secondary">Kolkata, India 📍</span>
          </div>
          <div className="flex items-center gap-3">
            <FiGlobe className="text-cyan" size={16} />
            <span className="text-xs text-secondary">Open to remote 🌍</span>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent mb-3" />
          <p className="text-center text-[10px] text-secondary">
            Full Stack Developer • AI/ML • Blockchain
          </p>
        </div>
      </div>
    </div>
  )
}
