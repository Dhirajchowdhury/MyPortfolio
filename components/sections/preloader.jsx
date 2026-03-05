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
    const userName = 'DHIRAJ'; // [YOUR_NAME] - replace as needed

    // Step 1: Name glitch-decode in (0.8s)
    const nameElement = nameRef.current;
    let scrambleCount = 0;
    const originalText = userName;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

    const glitchDecode = () => {
      tl.to(
        nameElement,
        {
          duration: 0.8,
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

    // Step 2: Loading bar + bike + counter (1.5s total)
    tl.to(
      barRef.current,
      {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
      },
      0.8
    );

    // Bike travels with bar
    tl.to(
      bikeRef.current,
      {
        left: 'calc(100% - 2rem)',
        duration: 1.5,
        ease: 'power2.inOut',
      },
      0.8
    );

    // Counter counts from 0 to 100
    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: 100,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          percentRef.current.textContent = `${Math.floor(counter.value)}%`;
        },
      },
      0.8
    );

    // Step 3: Pause at 100% (0.3s)
    tl.to({}, {}, '+=0.3');

    // Step 4: Burst away with scale + fade
    tl.to(
      containerRef.current,
      {
        scale: 1.2,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => {
          if (onComplete) onComplete();
          // Step 5: Remove from DOM
          containerRef.current.style.display = 'none';
        },
      }
    );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#0a0a0f',
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noise)" opacity="0.02"/%3E%3C/svg%3E")',
      }}
    >
      {/* Name */}
      <div
        ref={nameRef}
        className="mb-16 text-center font-bold text-6xl md:text-5xl sm:text-4xl tracking-wider"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          color: '#ffffff',
          textShadow: '0 0 20px rgba(0, 245, 255, 0.8)',
          letterSpacing: '0.1em',
        }}
      >
        {/* Will be filled by GSAP */}
      </div>

      {/* Loading Bar Container */}
      <div className="relative mb-12 w-4/5 md:w-3/4 sm:w-full sm:px-4">
        {/* Background bar */}
        <div
          className="h-1 rounded-full"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Progress bar fill */}
          <div
            ref={barRef}
            className="h-full rounded-full"
            style={{
              width: '0%',
              backgroundColor: '#00f5ff',
              boxShadow: '0 0 20px rgba(0, 245, 255, 0.8)',
              transition: 'width 0.05s linear',
            }}
          />
        </div>

        {/* Bike emoji riding the bar */}
        <div
          ref={bikeRef}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl"
          style={{
            left: '0%',
            fontSize: '2rem',
          }}
        >
          🏍️
        </div>
      </div>

      {/* Percentage Counter */}
      <div
        ref={percentRef}
        className="font-mono text-xl tracking-wider"
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          color: '#00f5ff',
          letterSpacing: '0.05em',
        }}
      >
        0%
      </div>
    </div>
  );
}
