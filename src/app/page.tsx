'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const characters = [
  { name: 'Isa', image: '/characters/Isa.png', color: '#9D4EDD' },
  { name: 'Sia', image: '/characters/Sia.png', color: '#06D6A0' },
  { name: 'Glimmer', image: '/characters/Glimmer.png', color: '#FFD60A' },
  { name: 'Pixel', image: '/characters/Pixel.png', color: '#FF6B6B' },
  { name: 'Whisker', image: '/characters/Whisker.png', color: '#4ECDC4' },
  { name: 'Jira', image: '/characters/Jira.PNG', color: '#F7B267' },
  { name: 'Dad', image: '/characters/Dad.png', color: '#A78BFA' },
]

interface FloatingOrb {
  id: number
  character: typeof characters[0]
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function Page() {
  const [orbs, setOrbs] = useState<FloatingOrb[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Create floating orbs for each character - deterministic positions
    const positions = [
      { x: 8, y: 20 },
      { x: 85, y: 25 },
      { x: 12, y: 70 },
      { x: 78, y: 75 },
      { x: 5, y: 45 },
      { x: 92, y: 50 },
      { x: 50, y: 85 },
    ]
    
    const generatedOrbs: FloatingOrb[] = characters.map((char, i) => ({
      id: i,
      character: char,
      x: positions[i].x,
      y: positions[i].y,
      size: 55 + (i % 3) * 8,
      duration: 18 + (i * 2),
      delay: i * 0.8,
    }))
    
    setOrbs(generatedOrbs)
  }, [])

  return (
    <main className="homepage">
      {/* Animated background stars */}
      <div className="stars-container" aria-hidden="true">
        {mounted && [...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className="star"
            style={{
              left: `${(i * 2.5) % 100}%`,
              top: `${(i * 7.3) % 100}%`,
              animationDelay: `${(i * 0.15) % 3}s`,
              animationDuration: `${2.5 + (i % 5) * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating character orbs */}
      <div className="orbs-container" aria-hidden="true">
        {mounted && orbs.map((orb) => (
          <div
            key={orb.id}
            className="floating-orb"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              animationDuration: `${orb.duration}s`,
              animationDelay: `${orb.delay}s`,
              ['--orb-color' as string]: orb.character.color,
            }}
          >
            <div className="orb-glow" />
            <div className="orb-image">
              <Image
                src={orb.character.image}
                alt={orb.character.name}
                width={orb.size}
                height={orb.size}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="orb-name">{orb.character.name}</span>
          </div>
        ))}
      </div>

      {/* Main content - centered */}
      <div className={`hero-content ${mounted ? 'visible' : ''}`}>
        <h1 className="hero-title">
          Experiments in AI
        </h1>
        
        <p className="hero-subtitle">
          Building tools to learn and teach
        </p>
        
        <Link href="/lumina" className="enter-button-link">
          <span className="enter-button">
            <span className="button-shimmer" />
            <span className="button-text">Enter Lumina →</span>
          </span>
        </Link>
        
        <p className="tap-hint">
          Tap to begin your magical journey
        </p>

        <p className="hint-text">
          ✨ A magical world of stories awaits ✨
        </p>
      </div>

      <style jsx>{`
        .homepage {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: 
            radial-gradient(ellipse at 30% 20%, rgba(157, 78, 221, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(6, 214, 160, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 214, 10, 0.05) 0%, transparent 60%),
            #0d0d1a;
        }

        /* Stars background */
        .stars-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.7; transform: scale(1); }
        }

        /* Floating orbs */
        .orbs-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .floating-orb {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: floatOrb 20s ease-in-out infinite;
          opacity: 0;
        }

        @keyframes floatOrb {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0) scale(0.8);
          }
          10% {
            opacity: 0.85;
          }
          25% {
            transform: translateY(-25px) translateX(12px) scale(0.92);
          }
          50% {
            transform: translateY(-40px) translateX(-8px) scale(1);
          }
          75% {
            transform: translateY(-15px) translateX(15px) scale(0.88);
          }
          90% {
            opacity: 0.85;
          }
          100% {
            opacity: 0;
            transform: translateY(0) translateX(0) scale(0.8);
          }
        }

        .orb-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: var(--orb-color);
          opacity: 0.25;
          filter: blur(18px);
          animation: pulseGlow 4s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.15); }
        }

        .orb-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--orb-color);
          box-shadow: 
            0 0 25px color-mix(in srgb, var(--orb-color) 40%, transparent),
            inset 0 0 20px color-mix(in srgb, var(--orb-color) 20%, transparent);
          background: rgba(0, 0, 0, 0.6);
        }

        .orb-name {
          margin-top: 8px;
          font-size: 0.7rem;
          color: var(--orb-color);
          text-shadow: 0 0 12px var(--orb-color);
          font-weight: 600;
          letter-spacing: 0.05em;
          opacity: 0.85;
        }

        /* Hero content */
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 300;
          color: white;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          text-shadow: 0 0 60px rgba(157, 78, 221, 0.5);
          animation: fadeSlideIn 1s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          color: rgba(255, 255, 255, 0.5);
          font-style: italic;
          margin-bottom: 3rem;
          animation: fadeSlideIn 1s ease forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Enter button - 56px+ touch target */
        .enter-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 60px;
          padding: 1.25rem 3.5rem;
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          font-weight: 500;
          color: white;
          background: linear-gradient(135deg, #9D4EDD 0%, #7B2CBF 50%, #5A189A 100%);
          border-radius: 50px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeSlideIn 1s ease forwards;
          animation-delay: 0.6s;
          opacity: 0;
          box-shadow: 
            0 0 30px rgba(157, 78, 221, 0.4),
            0 0 60px rgba(157, 78, 221, 0.2);
        }

        .enter-button:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 
            0 0 40px rgba(157, 78, 221, 0.6),
            0 0 80px rgba(157, 78, 221, 0.3),
            0 0 100px rgba(157, 78, 221, 0.1);
        }

        .button-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.25) 40%,
            rgba(255, 255, 255, 0.25) 60%,
            transparent 80%
          );
          transform: translateX(-100%);
          animation: shimmer 3s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .button-text {
          position: relative;
          z-index: 2;
        }

        .hint-text {
          margin-top: 2.5rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.3);
          animation: fadeSlideIn 1s ease forwards;
          animation-delay: 1s;
          opacity: 0;
        }

        .tap-hint {
          margin-top: 1rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.25);
          animation: fadeSlideIn 1s ease forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }

        @media (min-width: 769px) {
          .tap-hint {
            display: none;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-orb {
            transform: scale(0.7);
          }
          
          .orb-name {
            display: none;
          }
        }
      `}</style>

      <style jsx global>{`
        .enter-button-link {
          text-decoration: none;
        }
      `}</style>
    </main>
  )
}
