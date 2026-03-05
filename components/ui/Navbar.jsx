'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog',       href: '#blog' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActive]  = useState('home');
  const [menuOpen, setMenuOpen]     = useState(false);
  const observerRef                 = useRef(null);

  // ── Scroll detection ──────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Intersection Observer for active section ──────────────────
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean);

    if (!sections.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  // ── Smooth scroll ─────────────────────────────────────────────
  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // ── Lock body scroll when mobile menu open ────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // No pill collapse — just frosted glass on scroll

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        :root {
          --cyan: #00f5ff;
          --green: #00ff88;
          --purple: #a020f0;
          --bg: #0a0a0f;
        }

        .nav-link {
          position: relative;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          padding: 0.25rem 0;
          transition: color 0.25s ease;
          cursor: pointer;
          background: none;
          border: none;
          outline: none;
          letter-spacing: 0.01em;
        }
        .nav-link:hover { color: var(--cyan); }
        .nav-link.active {
          color: var(--cyan);
          text-shadow: 0 0 12px rgba(0,245,255,0.6);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 8px var(--cyan);
        }

        .resume-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cyan);
          border: 1px solid rgba(0,245,255,0.5);
          background: transparent;
          padding: 0.45rem 1.1rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 0 10px rgba(0,245,255,0.1);
          white-space: nowrap;
        }
        .resume-btn:hover {
          background: var(--cyan);
          color: #05050f;
          box-shadow: 0 0 20px rgba(0,245,255,0.4);
        }

        .profile-ring {
          width:50px;
          height:50px;
          border-radius: 50%;
          border: 2px solid var(--cyan);
          box-shadow: 0 0 10px rgba(0,245,255,0.5), inset 0 0 6px rgba(0,245,255,0.1);
          overflow: hidden;
          flex-shrink: 0;
        }
        .profile-ring img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hamburger-bar {
          display: block;
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.85);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .mobile-link {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.8rem, 6vw, 2.5rem);
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          letter-spacing: 0.02em;
          cursor: pointer;
          background: none;
          border: none;
          outline: none;
          transition: color 0.2s ease;
        }
        .mobile-link:hover,
        .mobile-link.active {
          color: var(--cyan);
          text-shadow: 0 0 20px rgba(0,245,255,0.5);
        }
      `}</style>

      {/* ── Main Navbar ──────────────────────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 0',
          backgroundColor: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,245,255,0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
          {/* ── LEFT: Photo + Name ─────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              paddingLeft: '2.5rem',
              flexShrink: 0,
            }}
          >
            <div className="profile-ring">
              {/* Replace /your-photo.jpg with your actual image */}
              <img
                src="/My_image01.jpeg"
                alt="Profile"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.background =
                    'linear-gradient(135deg, rgba(0,245,255,0.3), rgba(160,32,240,0.3))';
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1.5rem',
                color: '#ffffff',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Dhiraj Kumar Chowdhury
            </span>
          </div>

          {/* ── CENTER: Nav links (desktop) ────────────────────── */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                onClick={() => scrollTo(href)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ── RIGHT: Resume + Hamburger ──────────────────────── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingRight: '2.5rem',
              flexShrink: 0,
            }}
          >
            {/* Resume button (desktop) */}
            <button
              className="resume-btn desktop-only"
              onClick={() => { window.location.href = '/resume.pdf'; }}
              >
                Resume
            </button>

            {/* Hamburger (mobile) */}
            <button
              className="mobile-only"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                outline: 'none',
              }}
            >
              <span
                className="hamburger-bar"
                style={{
                  transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                }}
              />
              <span
                className="hamburger-bar"
                style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }}
              />
              <span
                className="hamburger-bar"
                style={{
                  transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                }}
              />
            </button>
          </div>
      </nav>

      {/* ── Mobile Full-screen Menu ──────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              backgroundColor: '#0a0a0f',
              backgroundImage: `
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"),
                radial-gradient(ellipse at 30% 70%, rgba(160,32,240,0.12) 0%, transparent 60%),
                radial-gradient(ellipse at 70% 30%, rgba(0,245,255,0.08) 0%, transparent 60%)
              `,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem',
            }}
          >
            {/* Decorative top line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.4), transparent)',
              }}
            />

            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.button
                key={href}
                className={`mobile-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' }}
                onClick={() => scrollTo(href)}
                style={{ padding: '0.4rem 2rem' }}
              >
                {label}
              </motion.button>
            ))}

            {/* Resume in mobile menu */}
            <motion.button
              className="resume-btn"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07 + 0.05, duration: 0.35 }}
              style={{ marginTop: '1.5rem', padding: '0.7rem 2rem', fontSize: '0.9rem' }}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </motion.button>

            {/* Decorative bottom line */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(160,32,240,0.4), transparent)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive visibility styles ─────────────────────────── */}
      <style>{`
        .desktop-nav { display: flex; }
        .desktop-only { display: block; }
        .mobile-only  { display: none; }

        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-only  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
