'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './navbar.module.css';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Blog', id: 'blog' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={`${styles.container} ${scrolled ? styles.containerScrolled : ''}`}>
          {/* LEFT SECTION */}
          <div className={styles.leftSection}>
            <div className={styles.profileImage}>
              <img
                src="[YOUR_PHOTO]"
                alt="Profile"
                className={styles.profileImg}
              />
            </div>
            <h1 className={styles.name}>[YOUR_NAME]</h1>
          </div>

          {/* CENTER SECTION */}
          <div className={styles.centerSection}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`${styles.navLink} ${
                  activeSection === link.id ? styles.active : ''
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    className={styles.underlineDot}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className={styles.rightSection}>
            <button className={styles.resumeButton}>Resume</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button & Menu */}
      <div className={styles.mobileMenuWrapper}>
        <button
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.mobileMenuContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`${styles.mobileNavLink} ${
                    activeSection === link.id ? styles.mobileLinkActive : ''
                  }`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                className={styles.mobileResume}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
              >
                Resume
              </motion.button>
            </motion.mobileMenuContent>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
