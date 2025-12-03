'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { getStoryByShelfAndId, type Story } from '../../data/stories'

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

export default function StoryPage() {
  const params = useParams()
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  const [story, setStory] = useState<Story | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const shelfId = params.shelf as string
  const storyId = params.story as string
  const colors = shelfColors[shelfId] || shelfColors['isas-dream-shelf']

  useEffect(() => {
    const foundStory = getStoryByShelfAndId(shelfId, storyId)
    setStory(foundStory || null)
  }, [shelfId, storyId])

  const goToPage = (newPage: number) => {
    if (isAnimating || !story) return
    if (newPage < 0 || newPage >= story.pages.length) return
    
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentPage(newPage)
      setIsAnimating(false)
    }, 200)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault()
      if (story && currentPage < story.pages.length - 1) {
        goToPage(currentPage + 1)
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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

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
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Story not found</h1>
        <button
          onClick={() => router.push(`/lumina/${shelfId}`)}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '1rem',
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
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${colors.glow}`,
        flexShrink: 0,
      }}>
        <button 
          onClick={() => router.push(`/lumina/${shelfId}`)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: `1px solid ${colors.primary}`,
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
          }}
        >
          ← Back
        </button>

        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{story.emoji}</span>
          <span style={{ 
            fontSize: '1.1rem', 
            fontWeight: 600,
            color: colors.primary,
          }}>
            {story.title}
          </span>
        </div>

        <div style={{ 
          fontSize: '0.9rem', 
          color: 'rgba(255, 255, 255, 0.7)',
          minWidth: '80px',
          textAlign: 'right',
        }}>
          Page {currentPage + 1} of {totalPages}
        </div>
      </header>

      {/* Progress bar */}
      <div style={{
        height: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        flexShrink: 0,
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: colors.primary,
          boxShadow: `0 0 10px ${colors.glow}`,
          transition: 'width 0.3s ease',
        }} />
      </div>

      {/* Story content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        overflowY: 'auto',
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
                  maxHeight: '50vh',
                  objectFit: 'contain',
                }}
                priority={currentPage === 0}
              />
            </div>
          )}

          {/* Page number bubble */}
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            backgroundColor: colors.primary,
            borderRadius: '50px',
            marginBottom: '1.5rem',
            boxShadow: `0 0 20px ${colors.glow}`,
          }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
              ✨ Page {currentPage + 1} ✨
            </span>
          </div>

          {/* Story text */}
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.95)',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            padding: '0 1rem',
          }}>
            {story.pages[currentPage]}
          </p>
        </div>
      </main>

      {/* Bottom navigation */}
      <footer style={{
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        borderTop: `1px solid ${colors.glow}`,
        flexShrink: 0,
      }}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
          style={{
            padding: '1rem 2rem',
            backgroundColor: currentPage === 0 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(255, 255, 255, 0.15)',
            color: 'white',
            border: `2px solid ${currentPage === 0 ? 'rgba(255, 255, 255, 0.2)' : colors.primary}`,
            borderRadius: '12px',
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: 600,
            opacity: currentPage === 0 ? 0.5 : 1,
            transition: 'all 0.2s ease',
            minWidth: '140px',
          }}
        >
          ← Previous
        </button>

        {currentPage === totalPages - 1 ? (
          <button
            onClick={() => router.push(`/lumina/${shelfId}`)}
            style={{
              padding: '1rem 2rem',
              backgroundColor: colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: `0 0 20px ${colors.glow}`,
              transition: 'all 0.2s ease',
              minWidth: '140px',
            }}
          >
            ✨ The End!
          </button>
        ) : (
          <button
            onClick={() => goToPage(currentPage + 1)}
            style={{
              padding: '1rem 2rem',
              backgroundColor: colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: `0 0 20px ${colors.glow}`,
              transition: 'all 0.2s ease',
              minWidth: '140px',
            }}
          >
            Next →
          </button>
        )}
      </footer>
    </div>
  )
}
