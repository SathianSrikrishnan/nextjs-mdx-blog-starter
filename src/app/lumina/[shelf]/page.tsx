'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { getStoriesByShelf, type Story } from '../data/stories'
import { isStoryComplete, getShelfProgress } from '@/lib/progress'

const shelfMeta: Record<string, {
  name: string
  color: 'purple' | 'teal' | 'gold'
  emoji: string
}> = {
  'isas-dream-shelf': {
    name: "Isa's Dream Shelf",
    color: 'purple',
    emoji: '🌙',
  },
  'sias-spark-shelf': {
    name: "Sia's Spark Shelf",
    color: 'teal',
    emoji: '⚡',
  },
  'twin-sparks-shelf': {
    name: 'Twin Sparks Shelf',
    color: 'gold',
    emoji: '✨',
  },
}

const colorStyles: Record<string, { border: string; shadow: string; bg: string; text: string }> = {
  purple: {
    border: 'rgba(157, 78, 221, 0.6)',
    shadow: 'rgba(157, 78, 221, 0.3)',
    bg: 'rgba(157, 78, 221, 0.1)',
    text: '#9D4EDD',
  },
  teal: {
    border: 'rgba(6, 214, 160, 0.6)',
    shadow: 'rgba(6, 214, 160, 0.3)',
    bg: 'rgba(6, 214, 160, 0.1)',
    text: '#06D6A0',
  },
  gold: {
    border: 'rgba(255, 214, 10, 0.6)',
    shadow: 'rgba(255, 214, 10, 0.3)',
    bg: 'rgba(255, 214, 10, 0.1)',
    text: '#FFD60A',
  },
}

function StoryCard({ 
  story, 
  shelfId, 
  color, 
  isComplete 
}: { 
  story: Story
  shelfId: string
  color: 'purple' | 'teal' | 'gold'
  isComplete: boolean
}) {
  const colors = colorStyles[color]
  
  return (
    <div 
      style={{
        background: 'var(--bg-card)',
        borderRadius: '20px',
        padding: '1.5rem',
        border: `2px solid ${colors.border}`,
        boxShadow: `0 0 20px ${colors.shadow}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        minHeight: '220px',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="story-card-hover"
    >
      {/* Completion badge */}
      {isComplete && (
        <div
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFD60A 0%, #F7B267 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(255, 214, 10, 0.5)',
            fontSize: '1.1rem',
            zIndex: 10,
          }}
          title="Story completed!"
        >
          ⭐
        </div>
      )}
      
      {/* Emoji */}
      <span style={{ 
        fontSize: '3rem', 
        marginBottom: '0.75rem',
        display: 'block',
      }}>
        {story.emoji}
      </span>
      
      {/* Title */}
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: 600, 
        marginBottom: '0.5rem',
        color: 'var(--text-primary)',
      }}>
        {story.title}
      </h3>
      
      {/* Summary */}
      <p style={{ 
        fontSize: '0.95rem', 
        color: 'var(--text-secondary)',
        marginBottom: '1.25rem',
        lineHeight: 1.5,
        flex: 1,
      }}>
        {story.summary}
      </p>
      
      {/* Read button - minimum 48px height for touch */}
      <Link 
        href={`/lumina/${shelfId}/${story.id}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '52px',
          padding: '0.875rem 1.5rem',
          backgroundColor: colors.bg,
          color: 'var(--text-primary)',
          border: `2px solid ${colors.border}`,
          borderRadius: '14px',
          fontSize: '1.1rem',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          boxShadow: `0 0 15px ${colors.shadow}`,
        }}
        className="read-button"
      >
        {isComplete ? '📖 Read Again' : '📖 Read Story'}
      </Link>
    </div>
  )
}

export default function ShelfPage() {
  const params = useParams()
  const shelfId = params.shelf as string
  const shelf = shelfMeta[shelfId]
  const [stories, setStories] = useState<Story[]>([])
  const [completionStatus, setCompletionStatus] = useState<Record<string, boolean>>({})
  const [shelfProgress, setShelfProgress] = useState({ completed: 0, total: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const loadedStories = getStoriesByShelf(shelfId)
    setStories(loadedStories)
    
    // Check completion status for each story
    const status: Record<string, boolean> = {}
    loadedStories.forEach(story => {
      status[story.id] = isStoryComplete(shelfId, story.id)
    })
    setCompletionStatus(status)
    setShelfProgress(getShelfProgress(shelfId))
  }, [shelfId])

  if (!shelf) {
    return (
      <main className="magical-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '1rem' }}>Shelf not found</h1>
          <Link href="/lumina" style={{ color: '#9D4EDD' }}>← Back to Lumina</Link>
        </div>
      </main>
    )
  }

  const colors = colorStyles[shelf.color]

  return (
    <main 
      className="magical-bg"
      style={{
        minHeight: '100vh',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}
    >
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
        {/* Back button - 48px touch target */}
        <Link 
          href="/lumina" 
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: '48px',
            padding: '0.75rem 1.25rem',
            marginBottom: '1.5rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            background: 'rgba(255, 255, 255, 0.05)',
            fontSize: '1rem',
            transition: 'all 0.2s ease',
          }}
        >
          ← Back to Shelves
        </Link>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: 700,
            color: colors.text,
            textShadow: `0 0 30px ${colors.shadow}`,
            marginBottom: '0.75rem',
          }}>
            {shelf.emoji} {shelf.name}
          </h1>
          
          {/* Progress indicator */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
          }}>
            <span>Progress:</span>
            <span style={{ color: colors.text, fontWeight: 600 }}>
              {shelfProgress.completed}/{shelfProgress.total}
            </span>
            {shelfProgress.completed === shelfProgress.total && shelfProgress.total > 0 && (
              <span>🎉</span>
            )}
          </div>
        </div>

        {/* Stories grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
        }}>
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              shelfId={shelfId}
              color={shelf.color}
              isComplete={completionStatus[story.id] || false}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .story-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 35px ${colors.shadow} !important;
        }
        .read-button:hover {
          background: ${colors.bg} !important;
          box-shadow: 0 0 25px ${colors.shadow} !important;
          transform: scale(1.02);
        }
        .read-button:active {
          transform: scale(0.98);
        }
      `}</style>
    </main>
  )
}
