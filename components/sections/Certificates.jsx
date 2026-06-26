'use client'

import { motion } from 'framer-motion'

const certificates = [
  '/certificate01.pdf',
  '/certificate02.pdf',
  '/certificate03.pdf',
  '/certificate04.pdf',
  '/certificate05.pdf',
  '/certificate06.pdf',
]

// To ensure a seamless marquee, we duplicate the list so the animation can loop
const duplicatedCertificates = [...certificates, ...certificates]

function CertificateCard({ src, index }) {
  const isPdf = src.toLowerCase().endsWith('.pdf')

  return (
    <motion.div
      className="certificate-card"
      style={{
        flexShrink: 0,
        width: '320px',
        height: '240px',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(0,245,255,0.25)',
        borderRadius: '18px',
        padding: '1rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        cursor: 'pointer',
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,245,255,0.6)'
        e.currentTarget.style.boxShadow = '0 0 28px rgba(0,245,255,0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,245,255,0.25)'
        e.currentTarget.style.boxShadow = 'none'
      }}
      onClick={() => window.open(src, '_blank')}
    >
      {/* Glow on hover effect */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.6), transparent)',
      }} />

      <div style={{
        width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden', position: 'relative'
      }}>
        {isPdf ? (
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Overlay to catch clicks instead of iframe */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 10, cursor: 'pointer' }} />
            <embed src={`${src}#view=FitH`} type="application/pdf" style={{ width: '100%', height: '100%', pointerEvents: 'none' }} />
          </div>
        ) : (
          <img
            src={src}
            alt={`Certificate ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              // Fallback placeholder if image is not yet uploaded
              e.target.src = `https://via.placeholder.com/320x240/0a0a0f/00f5ff?text=CERTIFICATE+${(index % certificates.length) + 1}`
            }}
          />
        )}
      </div>
    </motion.div>
  )
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      style={{ position: 'relative', padding: '6rem 0', backgroundColor: '#0a0a0f', overflow: 'hidden' }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '30%', left: '-10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '-10%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160,32,240,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* ── Header ── */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 30%, #00f5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.75rem',
          }}>
            Certificates
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            My professional achievements and courses
          </p>
        </motion.div>
      </div>

      {/* ── Infinite Scrolling Marquee ── */}
      <div style={{ width: '100%', overflow: 'hidden', position: 'relative', padding: '1rem 0' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', zIndex: 10,
          background: 'linear-gradient(90deg, #0a0a0f 0%, transparent 100%)', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', zIndex: 10,
          background: 'linear-gradient(270deg, #0a0a0f 0%, transparent 100%)', pointerEvents: 'none'
        }} />

        {/* Marquee Track */}
        <div className="marquee-track">
          <div className="marquee-content">
            {duplicatedCertificates.map((cert, index) => (
              <CertificateCard key={index} src={cert} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          width: fit-content;
        }

        .marquee-content {
          display: flex;
          gap: 2rem;
          padding-left: 2rem;
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-track:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Scroll exactly half the total width (since we duplicated the array) */
            transform: translateX(calc(-50% - 1rem));
          }
        }

        @media (max-width: 768px) {
          .certificate-card {
            width: 260px !important;
            height: 195px !important;
          }
          .marquee-content {
            gap: 1rem;
            padding-left: 1rem;
          }
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 0.5rem)); }
          }
        }
      `}</style>
    </section>
  )
}
