'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { getStoryByShelfAndId, type Story } from '../../data/stories'
import { markStoryComplete, isStoryComplete } from '@/lib/progress'

const shelfColors: Record<string, { primary: string; glow: string; bg: string }> = {
  'isas-dream-shelf': {
    primary: '#9D4EDD',
    glow: 'rgba(157, 78, 221, 0.5)',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%)',
  },
  'sias-spark-shelf': {
    primary: '#06D6A0',
    glow: 'rgba(6, 214, 160, 0.5)',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #1b3d4e 50%, #1a1a2e 100%)',
  },
  'twin-sparks-shelf': {
    primary: '#FFD60A',
    glow: 'rgba(255, 214, 10, 0.5)',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #4e3d1b 50%, #1a1a2e 100%)',
  },
}

// Image paths for The Infinite Shell Storm (page number -> filename)
const shellStormImages: Record<number, string> = {
  1: '/stories/shell-storm/Shell-storm-1.png',
  2: '/stories/shell-storm/Shell-Storm 2.png',
  3: '/stories/shell-storm/Shell-Storm 3.png',
  4: '/stories/shell-storm/Shell-Storm 4.png',
  5: '/stories/shell-storm/Shell-Storm 5.png',
  6: '/stories/shell-storm/Shell-Storm 6.png',
  7: '/stories/shell-storm/Shell-Storm 7.png',
  8: '/stories/shell-storm/Shell Storm 8.png',
  9: '/stories/shell-storm/Shell-Storm-9.png',
  10: '/stories/shell-storm/Shell-Store-10.png',
  11: '/stories/shell-storm/Shell-Storm-11.png',
  12: '/stories/shell-storm/Shell-Storm-12.png',
  13: '/stories/shell-storm/Shell-Storm-13.png',
  14: '/stories/shell-storm/Shell-storm-14.png',
  15: '/stories/shell-storm/Shell-storm-15.png',
}

// Alt text for each page of Shell Storm
const shellStormAltText: Record<number, string> = {
  1: 'Mini-Isa on her purple cloud watching rainbow shells fall from the sky',
  2: 'Isa collecting shells as more keep appearing magically',
  3: 'Isa laughing with her backpack overflowing with shells',
  4: 'Glimmer the firefly glowing softly, warning Isa about the shells',
  5: 'Isa examining her shells that have lost their magical glow',
  6: 'Pixel the tiny dragon landing with a glowing purple shell',
  7: 'Pixel showing Isa the special shell from the Great Question Tree',
  8: 'Isa realizing why the purple shell is special',
  9: 'Glimmer explaining about the twenty-one million forever shells',
  10: 'Isa releasing the rainbow shells into the sky like bubbles',
  11: 'Isa asking to hold Pixel\'s forever shell',
  12: 'Light blooming as Isa touches the forever shell',
  13: 'The shell storm stopping and stars appearing in the evening sky',
  14: 'Isa understanding the value of scarcity',
  15: 'Glimmer, Isa, and Pixel together as Isa learns her lesson',
}

function getStoryImage(storyId: string, pageNumber: number): string | null {
  if (storyId === 'the-infinite-shell-storm') {
    return shellStormImages[pageNumber] || null
  }
  return null
}

function getImageAlt(storyId: string, pageNumber: number): string {
  if (storyId === 'the-infinite-shell-storm') {
    return shellStormAltText[pageNumber] || `Page ${pageNumber} illustration`
  }
  return `Page ${pageNumber} illustration`
}

// Floating particle component
function FloatingParticles({ color }: { color: string }) {
  return (
    <div className="particles-container" aria-hidden="true">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${(i * 4.2) % 100}%`,
            animationDelay: `${(i * 0.4) % 8}s`,
            animationDuration: `${8 + (i % 6) * 2}s`,
            opacity: 0.3 + (i % 5) * 0.1,
            width: `${4 + (i % 4) * 2}px`,
            height: `${4 + (i % 4) * 2}px`,
            ['--particle-color' as string]: color,
          }}
        />
      ))}
      <style jsx>{`
        .particles-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }
        .particle {
          position: absolute;
          bottom: -20px;
          background: var(--particle-color);
          border-radius: 50%;
          filter: blur(1px);
          animation: floatUp linear infinite;
          box-shadow: 0 0 10px var(--particle-color);
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
            transform: translateY(-10vh) translateX(10px) scale(1);
          }
          50% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-110vh) translateX(-20px) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

// Loading skeleton component
function LoadingSkeleton({ color }: { color: string }) {
  return (
    <div className="loading-container">
      <div className="shimmer-wrapper">
        <div className="shimmer" />
      </div>
      <div className="loading-text">Loading your story...</div>
      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          gap: 2rem;
        }
        .shimmer-wrapper {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          border: 3px solid ${color};
          box-shadow: 0 0 30px ${color}40;
        }
        .shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${color}40 50%,
            transparent 100%
          );
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .loading-text {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

// Completion celebration component
function CompletionCelebration({ onClose }: { onClose: () => void }) {
  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        animation: 'fadeIn 0.3s ease',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          textAlign: 'center',
          padding: '3rem',
          maxWidth: '400px',
          animation: 'popIn 0.4s ease',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h2 style={{ 
          fontSize: '2rem', 
          color: '#FFD60A',
          marginBottom: '1rem',
          textShadow: '0 0 20px rgba(255, 214, 10, 0.5)',
        }}>
          Story Complete!
        </h2>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '1.1rem',
          marginBottom: '2rem',
        }}>
          You earned a ⭐ for finishing this story!
        </p>
        <button
          onClick={onClose}
          style={{
            minHeight: '52px',
            padding: '1rem 2.5rem',
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
          Continue ✨
        </button>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default function StoryPage() {
  const params = useParams()
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  const [story, setStory] = useState<Story | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [pageVisible, setPageVisible] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [wasAlreadyComplete, setWasAlreadyComplete] = useState(false)

  const shelfId = params.shelf as string
  const storyId = params.story as string
  const colors = shelfColors[shelfId] || shelfColors['isas-dream-shelf']

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundStory = getStoryByShelfAndId(shelfId, storyId)
      setStory(foundStory || null)
      setWasAlreadyComplete(isStoryComplete(shelfId, storyId))
      setIsLoading(false)
      setTimeout(() => setPageVisible(true), 50)
    }, 400)
    return () => clearTimeout(timer)
  }, [shelfId, storyId])

  const goToPage = useCallback((newPage: number) => {
    if (isAnimating || !story) return
    if (newPage < 0 || newPage >= story.pages.length) return
    
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentPage(newPage)
      setIsAnimating(false)
    }, 200)
  }, [isAnimating, story])

  const handleFinish = useCallback(() => {
    // Mark story as complete
    markStoryComplete(shelfId, storyId)
    
    // Show celebration only if this is the first time completing
    if (!wasAlreadyComplete) {
      setShowCelebration(true)
    } else {
      router.push(`/lumina/${shelfId}`)
    }
  }, [shelfId, storyId, wasAlreadyComplete, router])

  const handleCelebrationClose = useCallback(() => {
    setShowCelebration(false)
    router.push(`/lumina/${shelfId}`)
  }, [router, shelfId])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showCelebration) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
          handleCelebrationClose()
        }
        return
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        if (story && currentPage < story.pages.length - 1) {
          goToPage(currentPage + 1)
        } else if (story && currentPage === story.pages.length - 1) {
          handleFinish()
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (currentPage > 0) {
          goToPage(currentPage - 1)
        }
      } else if (e.key === 'Escape') {
        router.push(`/lumina/${shelfId}`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, story, goToPage, handleFinish, handleCelebrationClose, router, shelfId, showCelebration])

  // Loading state with shimmer
  if (isLoading) {
    return (
      <div style={{ background: colors.bg, minHeight: '100vh' }}>
        <FloatingParticles color={colors.primary} />
        <LoadingSkeleton color={colors.primary} />
      </div>
    )
  }

  if (!story) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: colors.bg,
        color: 'white',
      }}>
        <FloatingParticles color={colors.primary} />
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Story not found</h1>
        <button
          onClick={() => router.push(`/lumina/${shelfId}`)}
          style={{
            minHeight: '52px',
            padding: '1rem 2rem',
            backgroundColor: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '14px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: 600,
            position: 'relative',
            zIndex: 1,
          }}
        >
          ← Back to Shelf
        </button>
      </div>
    )
  }

  const totalPages = story.pages.length
  const progress = ((currentPage + 1) / totalPages) * 100
  const pageImage = getStoryImage(storyId, currentPage + 1)
  const imageAlt = getImageAlt(storyId, currentPage + 1)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: colors.bg,
      color: 'white',
      overflow: 'auto',
      opacity: pageVisible ? 1 : 0,
      transition: 'opacity 0.5s ease',
    }}>
      {/* Celebration modal */}
      {showCelebration && (
        <CompletionCelebration onClose={handleCelebrationClose} />
      )}

      {/* Ambient floating particles */}
      <FloatingParticles color={colors.primary} />

      {/* Header - touch-friendly */}
      <header style={{
        padding: '1rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.75rem',
        borderBottom: `1px solid ${colors.glow}`,
        flexShrink: 0,
        position: 'relative',
        zIndex: 10,
        backdropFilter: 'blur(10px)',
        background: 'rgba(26, 26, 46, 0.8)',
      }}>
        <button 
          onClick={() => router.push(`/lumina/${shelfId}`)}
          style={{
            minHeight: '48px',
            minWidth: '48px',
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: `1px solid ${colors.primary}`,
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 500,
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Back to shelf"
        >
          ← Back
        </button>

        <div style={{ 
          textAlign: 'center', 
          flex: 1,
          minWidth: 0,
        }}>
          <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>{story.emoji}</span>
          <span style={{ 
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', 
            fontWeight: 600,
            color: colors.primary,
          }}>
            {story.title}
          </span>
        </div>

        <div style={{ 
          fontSize: '0.95rem', 
          color: 'rgba(255, 255, 255, 0.7)',
          minWidth: '70px',
          textAlign: 'right',
          fontWeight: 500,
        }}>
          {currentPage + 1}/{totalPages}
        </div>
      </header>

      {/* Progress bar */}
      <div style={{
        height: '6px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        flexShrink: 0,
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: colors.primary,
          boxShadow: `0 0 10px ${colors.glow}`,
          transition: 'width 0.3s ease',
          borderRadius: '0 3px 3px 0',
        }} />
      </div>

      {/* Story content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem 1rem',
        overflowY: 'auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Page content */}
        <div 
          style={{
            maxWidth: '700px',
            width: '100%',
            textAlign: 'center',
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
            transition: 'all 0.2s ease',
          }}
        >
          {/* Story Image */}
          {pageImage && (
            <div style={{
              marginBottom: '1.5rem',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: `0 0 30px ${colors.glow}`,
            }}>
              <Image
                src={pageImage}
                alt={imageAlt}
                width={700}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '45vh',
                  objectFit: 'contain',
                }}
                priority={currentPage === 0}
              />
            </div>
          )}

          {/* Page number bubble */}
          <div style={{
            display: 'inline-block',
            padding: '0.6rem 1.5rem',
            backgroundColor: colors.primary,
            borderRadius: '50px',
            marginBottom: '1.25rem',
            boxShadow: `0 0 20px ${colors.glow}`,
          }}>
            <span style={{ fontWeight: 700, fontSize: '1rem' }}>
              ✨ Page {currentPage + 1} ✨
            </span>
          </div>

          {/* Story text */}
          <p style={{
            fontSize: 'clamp(1.15rem, 3vw, 1.4rem)',
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.95)',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            padding: '0 0.5rem',
          }}>
            {story.pages[currentPage]}
          </p>
        </div>
      </main>

      {/* Bottom navigation - LARGE touch targets */}
      <footer style={{
        padding: '1.25rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        borderTop: `1px solid ${colors.glow}`,
        flexShrink: 0,
        position: 'relative',
        zIndex: 10,
        backdropFilter: 'blur(10px)',
        background: 'rgba(26, 26, 46, 0.8)',
      }}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
          style={{
            minHeight: '56px',
            padding: '1rem 1.5rem',
            backgroundColor: currentPage === 0 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: `2px solid ${currentPage === 0 ? 'rgba(255, 255, 255, 0.15)' : colors.primary}`,
            borderRadius: '14px',
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            fontSize: '1.1rem',
            fontWeight: 600,
            opacity: currentPage === 0 ? 0.5 : 1,
            transition: 'all 0.2s ease',
            flex: 1,
            maxWidth: '160px',
          }}
          aria-label="Previous page"
        >
          ← Back
        </button>

        {currentPage === totalPages - 1 ? (
          <button
            onClick={handleFinish}
            style={{
              minHeight: '56px',
              padding: '1rem 1.5rem',
              backgroundColor: colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: `0 0 25px ${colors.glow}`,
              transition: 'all 0.2s ease',
              flex: 1,
              maxWidth: '160px',
              animation: 'pulse 2s ease-in-out infinite',
            }}
            aria-label="Finish story"
          >
            ✨ Finish!
          </button>
        ) : (
          <button
            onClick={() => goToPage(currentPage + 1)}
            style={{
              minHeight: '56px',
              padding: '1rem 1.5rem',
              backgroundColor: colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: `0 0 20px ${colors.glow}`,
              transition: 'all 0.2s ease',
              flex: 1,
              maxWidth: '160px',
            }}
            aria-label="Next page"
          >
            Next →
          </button>
        )}
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 25px ${colors.glow}; }
          50% { box-shadow: 0 0 40px ${colors.glow}, 0 0 60px ${colors.glow}; }
        }
      `}</style>
    </div>
  )
}
