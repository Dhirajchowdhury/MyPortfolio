'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiUser, FiMessageSquare, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

// ─────────────────────────────────────────────────────────────────
// 🔧 REPLACE THESE with your actual EmailJS credentials
// Sign up free at https://www.emailjs.com
// ─────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'will update In Future '
const EMAILJS_TEMPLATE_ID = 'will update In Future '
const EMAILJS_PUBLIC_KEY  = 'will update In Future '

const socials = [
  {
    icon: FiGithub,
    label: 'GitHub',
    handle: '@DhirajChowdhury',
    href: ' https://github.com/Dhirajchowdhury',
    color: '#ffffff',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    handle: 'Dhiraj Kumar Chowdhury',
    href: ' https://www.linkedin.com/in/dhiraj-chowdhury-4a2a452b0',
    color: '#0A66C2',
  },
  {
    icon: FiMail,
    label: 'Email',
    handle: 'dhirajchowdhury001@gmail.com ',
    href: 'mailto:dhirajchowdhury001@gmail.com ',
    color: '#00f5ff',
  },
]

// ── Floating label input ─────────────────────────────────────────
function FloatingInput({ label, type = 'text', name, value, onChange, icon: Icon, multiline }) {
  const [focused, setFocused] = useState(false)
  const hasValue = value.length > 0
  const active   = focused || hasValue

  const baseStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${active ? 'rgba(0,245,255,0.45)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px',
    padding: multiline ? '1.5rem 1rem 0.75rem 3rem' : '1.4rem 1rem 0.5rem 3rem',
    color: '#fff',
    fontSize: '0.9rem',
    fontFamily: "'Space Grotesk', sans-serif",
    outline: 'none',
    resize: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
    boxShadow: focused ? '0 0 0 3px rgba(0,245,255,0.08)' : 'none',
    minHeight: multiline ? '130px' : 'unset',
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Icon */}
      <div style={{
        position: 'absolute', left: '0.9rem',
        top: multiline ? '1.1rem' : '50%',
        transform: multiline ? 'none' : 'translateY(-50%)',
        color: active ? '#00f5ff' : 'rgba(255,255,255,0.25)',
        transition: 'color 0.25s ease',
        pointerEvents: 'none', zIndex: 1,
      }}>
        <Icon size={16} />
      </div>

      {/* Floating label */}
      <label style={{
        position: 'absolute',
        left: '3rem',
        top: active ? '0.45rem' : (multiline ? '1rem' : '50%'),
        transform: active ? 'none' : (multiline ? 'none' : 'translateY(-50%)'),
        fontSize: active ? '0.6rem' : '0.85rem',
        color: active ? '#00f5ff' : 'rgba(255,255,255,0.3)',
        fontFamily: active ? 'monospace' : "'Space Grotesk', sans-serif",
        letterSpacing: active ? '0.1em' : '0',
        transition: 'all 0.2s ease',
        pointerEvents: 'none',
        textTransform: active ? 'uppercase' : 'none',
      }}>
        {label}
      </label>

      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      )}
    </div>
  )
}

// ── Main Contact Section ─────────────────────────────────────────
export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      id="contact"
      style={{ position: 'relative', padding: '6rem 0', backgroundColor: '#0a0a0f', overflow: 'hidden' }}
    >
      {/* ── Ambient blobs ── */}
      <div style={{
        position: 'absolute', top: '10%', left: '-15%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-15%',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(160,32,240,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* ── Decorative corner dots ── */}
      {['top:10%;left:5%', 'top:20%;right:8%', 'bottom:15%;left:8%', 'bottom:10%;right:5%'].map((pos, i) => (
        <div key={i} style={{
          position: 'absolute',
          ...(Object.fromEntries(pos.split(';').map(p => p.split(':')))),
          width: '4px', height: '4px', borderRadius: '50%',
          background: i % 2 === 0 ? '#00f5ff' : '#a020f0',
          boxShadow: `0 0 8px ${i % 2 === 0 ? '#00f5ff' : '#a020f0'}`,
          opacity: 0.5,
        }} />
      ))}

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Header ── */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            // display: 'inline-block', fontFamily: 'monospace', fontSize: '0.75rem',
            // letterSpacing: '0.25em', color: '#00f5ff',
            // border: '1px solid rgba(0,245,255,0.2)',
            // borderRadius: '20px', padding: '4px 16px', marginBottom: '1rem',
          }}>
           
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 30%, #00f5ff)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: '0.75rem',
          }}>
            Connect With Me
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's collaborate to work together
          </p>
        </motion.div>

        {/* ── Main glass card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'relative',
            background: 'rgba(255,255,255,0.025)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(0,245,255,0.1)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Top shimmer line */}
          <div style={{
            position: 'absolute', top: 0, left: '3rem', right: '3rem', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5), rgba(160,32,240,0.5), transparent)',
          }} />

          {/* Decorative grid inside card */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(0,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: '0',
          }}>

            {/* ── LEFT: Form ── */}
            <div style={{ padding: '3rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '1.2rem', color: '#fff',
                marginBottom: '0.4rem',
              }}>
                Send a Message
              </h3>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)',
                marginBottom: '2rem',
              }}>
                I usually reply within 24 hours.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <FloatingInput
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  icon={FiUser}
                />
                <FloatingInput
                  label="Your Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  icon={FiMail}
                />
                <FloatingInput
                  label="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  icon={FiMessageSquare}
                  multiline
                />

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 2rem',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: '0.9rem',
                    letterSpacing: '0.04em',
                    background: status === 'sending'
                      ? 'rgba(0,245,255,0.3)'
                      : 'linear-gradient(135deg, #00f5ff, #0099aa)',
                    color: '#05050f',
                    boxShadow: status === 'sending' ? 'none' : '0 0 24px rgba(0,245,255,0.3)',
                    transition: 'all 0.25s ease',
                    alignSelf: 'flex-start',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        style={{ width: '16px', height: '16px', border: '2px solid #05050f', borderTopColor: 'transparent', borderRadius: '50%' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </motion.button>

                {/* Status feedback */}
                <AnimatePresence>
                  {(status === 'success' || status === 'error') && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '0.75rem 1rem', borderRadius: '10px',
                        background: status === 'success' ? 'rgba(0,255,136,0.08)' : 'rgba(255,80,80,0.08)',
                        border: `1px solid ${status === 'success' ? 'rgba(0,255,136,0.25)' : 'rgba(255,80,80,0.25)'}`,
                        fontSize: '0.82rem',
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: status === 'success' ? '#00ff88' : '#ff6060',
                      }}
                    >
                      {status === 'success'
                        ? <><FiCheckCircle size={15} /> Message sent! I'll get back to you soon.</>
                        : <><FiAlertCircle size={15} /> Something went wrong. Try emailing me directly.</>
                      }
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* ── RIGHT: Info panel ── */}
            <div style={{
              padding: '3rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '2rem',
              background: 'rgba(0,0,0,0.15)',
            }}>

              {/* Availability */}
              <div>
                <div style={{
                  fontSize: '0.6rem', letterSpacing: '0.2em', fontFamily: 'monospace',
                  color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem',
                }}>
                  AVAILABILITY
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '0.65rem 1rem', borderRadius: '10px',
                  background: 'rgba(0,255,136,0.07)',
                  border: '1px solid rgba(0,255,136,0.18)',
                }}>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88', flexShrink: 0 }}
                  />
                  <span style={{ fontSize: '0.78rem', fontFamily: "'Space Grotesk', sans-serif", color: '#00ff88', fontWeight: 600 }}>
                    Open to opportunities
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

              {/* Social links */}
              <div>
                <div style={{
                  fontSize: '0.6rem', letterSpacing: '0.2em', fontFamily: 'monospace',
                  color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem',
                }}>
                  FIND ME ON
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {socials.map(({ icon: Icon, label, handle, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={label !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        padding: '0.65rem 0.9rem', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        textDecoration: 'none',
                        transition: 'border-color 0.2s ease, background 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${color}44`
                        e.currentTarget.style.background  = `${color}08`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                        e.currentTarget.style.background  = 'rgba(255,255,255,0.03)'
                      }}
                    >
                      <div style={{
                        width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                        background: `${color}12`, border: `1px solid ${color}25`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={15} color={color} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: '#fff' }}>
                          {label}
                        </div>
                        <div style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)' }}>
                          {handle}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

              {/* Response time */}
              <div style={{
                padding: '1rem', borderRadius: '12px',
                background: 'rgba(0,245,255,0.04)',
                border: '1px solid rgba(0,245,255,0.1)',
              }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', fontFamily: 'monospace', color: 'rgba(0,245,255,0.5)', marginBottom: '0.4rem' }}>
                  RESPONSE TIME
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.3rem', color: '#00f5ff' }}>
                  &lt; 24 hrs
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontFamily: "'Space Grotesk', sans-serif", marginTop: '2px' }}>
                  Usually much faster 😄
                </div>
              </div>
            </div>
          </div>

          {/* Bottom shimmer */}
          <div style={{
            position: 'absolute', bottom: 0, left: '3rem', right: '3rem', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(160,32,240,0.4), rgba(0,245,255,0.4), transparent)',
          }} />
        </motion.div>

        {/* ── Responsive styles ── */}
        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
            .contact-right { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.05) !important; }
          }
        `}</style>

      </div>
    </section>
  )
}
