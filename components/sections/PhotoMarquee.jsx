'use client'

import { motion } from 'framer-motion'

const photos = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
  '/images/photo6.jpg',
]

export default function PhotoMarquee() {
  // Duplicate photos for seamless loop
  const allPhotos = [...photos, ...photos, ...photos]

  return (
    <section className="relative py-12 overflow-hidden bg-dark/50">
      {/* Gradient masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

      {/* Scrolling container */}
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -1920], // Adjust based on photo width
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {allPhotos.map((photo, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-64 h-80 glass rounded-2xl overflow-hidden"
            style={{
              transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
            }}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/300x400/0a0a0f/00f5ff?text=PHOTO+${(index % photos.length) + 1}`
              }}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </div>
        ))}
      </motion.div>

      {/* Dot separators (optional decorative element) */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-center gap-4 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-cyan/30 rounded-full" />
        ))}
      </div>
    </section>
  )
}
