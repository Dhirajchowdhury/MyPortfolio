'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const barRef = useRef(null);
  const bikeRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();
    const userName = 'Dhiraj Kumar Chowdhury';

    const nameElement = nameRef.current;
    const originalText = userName;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

    const glitchDecode = () => {
      tl.to(
        nameElement,
        {
          duration: 1.0,
          onUpdate: function () {
            const progress = this.progress();
            let text = '';
            for (let i = 0; i < originalText.length; i++) {
              if (progress > i / originalText.length) {
                text += originalText[i];
              } else {
                text += chars[Math.floor(Math.random() * chars.length)];
              }
            }
            nameElement.textContent = text;
          },
          onComplete: () => {
            nameElement.textContent = originalText;
          },
        },
        0
      );
    };

    glitchDecode();

    tl.to(
      barRef.current,
      { width: '100%', duration: 3.5, ease: 'power2.inOut' },
      0.8
    );

    tl.to(
      bikeRef.current,
      { left: 'calc(100% - 2.5rem)', duration: 3.5, ease: 'power2.inOut' },
      0.8
    );

    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: 100,
        duration: 3.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          percentRef.current.textContent = `${Math.floor(counter.value)}%`;
        },
      },
      0.8
    );

    tl.to({}, {}, '+=0.3');

    tl.to(containerRef.current, {
      scale: 1.05,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
      onComplete: () => {
        if (onComplete) onComplete();
        containerRef.current.style.display = 'none';
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#05050f',
        backgroundImage: `
          radial-gradient(ellipse at 20% 50%, rgba(120, 40, 200, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 60%)
        `,
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Name */}
      <div
        ref={nameRef}
        style={{
          marginBottom: '3.5rem',
          textAlign: 'center',
          fontFamily: "'Courier New', Courier, monospace",
          fontWeight: 700,
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          letterSpacing: '0.12em',
          color: '#e0faff',
          textShadow: `
            0 0 10px rgba(0, 245, 255, 0.9),
            0 0 30px rgba(0, 245, 255, 0.5),
            0 0 60px rgba(160, 80, 255, 0.4)
          `,
        }}
      />

      {/* Loading bar container */}
      <div
        style={{
          position: 'relative',
          width: '70%',
          maxWidth: '600px',
          marginBottom: '2.5rem',
        }}
      >
        {/* Track */}
        <div
          style={{
            height: '3px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.4)',
          }}
        >
          {/* Fill */}
          <div
            ref={barRef}
            style={{
              height: '100%',
              width: '0%',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #a020f0, #00f5ff)',
              boxShadow: '0 0 12px rgba(0, 245, 255, 0.9), 0 0 30px rgba(160, 40, 255, 0.6)',
            }}
          />
        </div>

        {/* Bike image */}
        <div
          ref={bikeRef}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%) translateX(-50%)',
            left: '0%',
          }}
        >
          <img
            src="/Bike.png"
            alt="Bike"
            style={{
              width: '5rem',
              height: '5rem',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 8px rgba(0, 245, 255, 0.8))',
            }}
            onError={(e) => {
              // Fallback to emoji if image fails to load
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = '<span style="font-size:2rem">🏍️</span>';
            }}
          />
        </div>
      </div>

      {/* Percentage counter */}
      <div
        ref={percentRef}
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: '1.6rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: '#00f5ff',
          textShadow: '0 0 12px rgba(0, 245, 255, 0.8), 0 0 25px rgba(160, 80, 255, 0.5)',
        }}
      >
        0%
      </div>
    </div>
  );
}