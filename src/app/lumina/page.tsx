'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { 
  getCompletedCount, 
  getMostProgressShelf, 
  getEncouragingMessage,
  getShelfProgress,
  TOTAL_STORIES 
} from '@/lib/progress'

const shelves = [
  {
    id: 'isas-dream-shelf',
    name: "Isa's Dream Shelf",
    color: 'purple',
    emoji: '🌙',
    description: 'Stories of dreams and imagination',
    borderColor: 'rgba(157, 78, 221, 0.8)',
    shadowColor: 'rgba(157, 78, 221, 0.4)',
    bgColor: 'rgba(157, 78, 221, 0.1)',
  },
  {
    id: 'sias-spark-shelf',
    name: "Sia's Spark Shelf",
    color: 'teal',
    emoji: '⚡',
    description: 'Adventures full of energy and wonder',
    borderColor: 'rgba(6, 214, 160, 0.8)',
    shadowColor: 'rgba(6, 214, 160, 0.4)',
    bgColor: 'rgba(6, 214, 160, 0.1)',
  },
  {
    id: 'twin-sparks-shelf',
    name: 'Twin Sparks Shelf',
    color: 'gold',
    emoji: '✨',
    description: 'Stories of siblings and friendship',
    borderColor: 'rgba(255, 214, 10, 0.8)',
    shadowColor: 'rgba(255, 214, 10, 0.4)',
    bgColor: 'rgba(255, 214, 10, 0.1)',
  },
]

const characters = [
  { name: 'Isa', image: '/characters/Isa.png', description: 'The dreamer', color: '#9D4EDD' },
  { name: 'Sia', image: '/characters/Sia.png', description: 'The spark', color: '#06D6A0' },
  { name: 'Glimmer', image: '/characters/Glimmer.png', description: 'The guide', color: '#FFD60A' },
  { name: 'Pixel', image: '/characters/Pixel.png', description: 'The dragon', color: '#FF6B6B' },
  { name: 'Whisker', image: '/characters/Whisker.png', description: 'The cat', color: '#4ECDC4' },
  { name: 'Jira', image: '/characters/Jira.PNG', description: 'The giraffe', color: '#F7B267' },
  { name: 'Dad', image: '/characters/Dad.png', description: 'The storyteller', color: '#A78BFA' },
]

const shelfNames: Record<string, string> = {
  'isas-dream-shelf': "Isa's Dream Shelf",
  'sias-spark-shelf': "Sia's Spark Shelf",
  'twin-sparks-shelf': "Twin Sparks Shelf",
}

// My Journey Modal
function MyJourneyModal({ 
  onClose, 
  completed, 
  mostProgressShelf,
  shelfProgressData,
}: { 
  onClose: () => void
  completed: number
  mostProgressShelf: string | null
  shelfProgressData: Record<string, { completed: number; total: number }>
}) {
  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        padding: '1rem',
        animation: 'fadeIn 0.3s ease',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%)',
          borderRadius: '24px',
          padding: '2rem',
          maxWidth: '400px',
          width: '100%',
          border: '2px solid rgba(157, 78, 221, 0.5)',
          boxShadow: '0 0 50px rgba(157, 78, 221, 0.3)',
          animation: 'popIn 0.4s ease',
        }}
        onClick={e => e.stopPropagation()}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: 'white',
        }}>
          ✨ My Journey ✨
        </h2>

        {/* Progress circle */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: `conic-gradient(
              #9D4EDD ${(completed / TOTAL_STORIES) * 100}%, 
              rgba(255,255,255,0.1) ${(completed / TOTAL_STORIES) * 100}%
            )`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(157, 78, 221, 0.4)',
          }}>
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: '#1a1a2e',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#FFD60A' }}>
                {completed}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                of {TOTAL_STORIES}
              </span>
            </div>
          </div>
        </div>

        {/* Encouraging message */}
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '1.5rem',
        }}>
          {getEncouragingMessage(completed)}
        </p>

        {/* Shelf progress */}
        <div style={{ marginBottom: '1.5rem' }}>
          {shelves.map(shelf => {
            const progress = shelfProgressData[shelf.id] || { completed: 0, total: 2 }
            return (
              <div 
                key={shelf.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: mostProgressShelf === shelf.id ? `2px solid ${shelf.borderColor}` : '2px solid transparent',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{shelf.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '4px',
                  }}>
                    {shelf.name}
                  </div>
                  <div style={{
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${(progress.completed / progress.total) * 100}%`,
                      background: shelf.borderColor,
                      borderRadius: '3px',
                      transition: 'width 0.3s ease',
                    }} />
                  </div>
                </div>
                <span style={{ 
                  fontSize: '0.85rem', 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 500,
                }}>
                  {progress.completed}/{progress.total}
                </span>
              </div>
            )
          })}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            width: '100%',
            minHeight: '52px',
            padding: '1rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'white',
            background: 'linear-gradient(135deg, #9D4EDD 0%, #7B2CBF 100%)',
            border: 'none',
            borderRadius: '14px',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(157, 78, 221, 0.4)',
          }}
        >
          Keep Exploring! 🚀
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default function LuminaPage() {
  const [mounted, setMounted] = useState(false)
  const [showJourney, setShowJourney] = useState(false)
  const [completedCount, setCompletedCount] = useState(0)
  const [mostProgressShelf, setMostProgressShelf] = useState<string | null>(null)
  const [shelfProgressData, setShelfProgressData] = useState<Record<string, { completed: number; total: number }>>({})
  const shelfRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setMounted(true)
    // Load progress data
    setCompletedCount(getCompletedCount())
    setMostProgressShelf(getMostProgressShelf())
    const progressData: Record<string, { completed: number; total: number }> = {}
    shelves.forEach(shelf => {
      progressData[shelf.id] = getShelfProgress(shelf.id)
    })
    setShelfProgressData(progressData)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const el = shelfRefs.current[index]
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  const handleMouseLeave = (index: number) => {
    const el = shelfRefs.current[index]
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
  }

  return (
    <main style={{
      minHeight: '100vh',
      position: 'relative',
      background: `
        radial-gradient(ellipse at 20% 20%, rgba(157, 78, 221, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(6, 214, 160, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(255, 214, 10, 0.08) 0%, transparent 50%),
        #1a1a2e
      `,
    }}>
      {/* My Journey Modal */}
      {showJourney && (
        <MyJourneyModal 
          onClose={() => setShowJourney(false)}
          completed={completedCount}
          mostProgressShelf={mostProgressShelf}
          shelfProgressData={shelfProgressData}
        />
      )}

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 1.5rem 4rem',
      }}>
        {/* Header */}
        <header style={{
          textAlign: 'center',
          marginBottom: '2rem',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          {/* Top row: Back + My Journey */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}>
            <Link 
              href="/" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '48px',
                padding: '0.75rem 1.25rem',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '1rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s ease',
              }}
            >
              ← Back
            </Link>
            
            <button
              onClick={() => setShowJourney(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                minHeight: '48px',
                padding: '0.75rem 1.25rem',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.3) 0%, rgba(157, 78, 221, 0.1) 100%)',
                border: '2px solid rgba(157, 78, 221, 0.5)',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(157, 78, 221, 0.2)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>🗺️</span>
              <span>My Journey</span>
              {completedCount > 0 && (
                <span style={{
                  background: '#FFD60A',
                  color: '#1a1a2e',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                }}>
                  {completedCount}
                </span>
              )}
            </button>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '0.75rem',
            textShadow: '0 0 40px rgba(157, 78, 221, 0.5)',
          }}>
            ✨ Lumina ✨
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}>
            Choose a magical shelf to explore
          </p>
        </header>

        {/* Shelves - touch-friendly */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          marginBottom: '4rem',
        }}>
          {shelves.map((shelf, i) => {
            const progress = shelfProgressData[shelf.id] || { completed: 0, total: 2 }
            return (
              <Link 
                key={shelf.id} 
                href={`/lumina/${shelf.id}`} 
                style={{ textDecoration: 'none' }}
              >
                <div
                  ref={(el) => { shelfRefs.current[i] = el }}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    minHeight: '90px',
                    padding: '1.25rem 1.5rem',
                    background: shelf.bgColor,
                    border: `2px solid ${shelf.borderColor}`,
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s ease',
                    boxShadow: `0 0 30px ${shelf.shadowColor}, inset 0 0 20px rgba(255, 255, 255, 0.02)`,
                    opacity: mounted ? 1 : 0,
                    transitionProperty: 'opacity, transform, box-shadow',
                    transitionDuration: '0.6s',
                    transitionDelay: `${i * 0.15}s`,
                  }}
                >
                  <span style={{ fontSize: '2.25rem', flexShrink: 0 }}>{shelf.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <h3 style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                        fontWeight: 600,
                        color: 'white',
                      }}>
                        {shelf.name}
                      </h3>
                      {progress.completed === progress.total && progress.total > 0 && (
                        <span style={{ fontSize: '1rem' }}>⭐</span>
                      )}
                    </div>
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.5)',
                    }}>
                      {shelf.description}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.5)',
                    }}>
                      {progress.completed}/{progress.total}
                    </span>
                    <span style={{
                      fontSize: '1.5rem',
                      color: 'rgba(255, 255, 255, 0.4)',
                      transition: 'transform 0.3s ease',
                    }}>
                      →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </section>

        {/* Characters */}
        <section style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'white',
            marginBottom: '1.5rem',
          }}>
            Meet the Characters
          </h2>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            {characters.map((character, i) => (
              <div 
                key={character.name}
                className="char-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '1rem',
                  width: '110px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
                  opacity: mounted ? 1 : 0,
                  transitionDelay: `${0.6 + i * 0.08}s`,
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '70px',
                  height: '70px',
                  marginBottom: '0.5rem',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: '-6px',
                    borderRadius: '50%',
                    background: character.color,
                    opacity: 0.2,
                    filter: 'blur(12px)',
                  }} />
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `2px solid ${character.color}`,
                    boxShadow: `0 0 15px ${character.color}40`,
                    background: 'rgba(0, 0, 0, 0.4)',
                  }}>
                    <Image
                      src={character.image}
                      alt={character.name}
                      width={70}
                      height={70}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
                <span style={{
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: 'white',
                  marginBottom: '0.15rem',
                }}>
                  {character.name}
                </span>
                <span style={{
                  fontSize: '0.7rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                }}>
                  {character.description}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx global>{`
        .char-card:hover {
          transform: translateY(-8px) scale(1.05) !important;
          border-color: rgba(157, 78, 221, 0.5) !important;
          background: rgba(255, 255, 255, 0.06) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
        }
      `}</style>
    </main>
  )
}
