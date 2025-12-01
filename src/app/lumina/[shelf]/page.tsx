import Link from 'next/link'
import { notFound } from 'next/navigation'

const shelfData: Record<string, {
  name: string
  color: 'purple' | 'teal' | 'gold'
  stories: { id: string; title: string; emoji: string }[]
}> = {
  'isas-dream-shelf': {
    name: "Isa's Dream Shelf",
    color: 'purple',
    stories: [
      { id: 'the-infinite-shell-storm', title: 'The Infinite Shell Storm', emoji: '🌊' },
      { id: 'moonlight-whispers', title: 'Moonlight Whispers', emoji: '🌙' },
      { id: 'dancing-shadows', title: 'Dancing Shadows', emoji: '💫' },
    ],
  },
  'sias-spark-shelf': {
    name: "Sia's Spark Shelf",
    color: 'teal',
    stories: [
      { id: 'jiras-infinite-neck', title: "Jira's Infinite Neck", emoji: '🦒' },
      { id: 'the-crystal-garden', title: 'The Crystal Garden', emoji: '💎' },
      { id: 'starlight-adventure', title: 'Starlight Adventure', emoji: '⭐' },
    ],
  },
  'twin-sparks-shelf': {
    name: 'Twin Sparks Shelf',
    color: 'gold',
    stories: [
      { id: 'the-great-shell-heist', title: 'The Great Shell Heist', emoji: '⚡' },
      { id: 'double-trouble', title: 'Double Trouble', emoji: '🎭' },
      { id: 'the-golden-quest', title: 'The Golden Quest', emoji: '🏆' },
    ],
  },
}

export default async function ShelfPage({ 
  params 
}: { 
  params: Promise<{ shelf: string }> 
}) {
  const { shelf: shelfId } = await params
  const shelf = shelfData[shelfId]

  if (!shelf) {
    notFound()
  }

  return (
    <main className="magical-bg">
      <div className="container">
        <Link href="/lumina" className="btn btn-secondary mb-3" style={{ display: 'inline-flex' }}>
          ← Back to Shelves
        </Link>

        <h1 className={`glow-text ${shelf.color} mb-4`}>
          {shelf.name}
        </h1>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {shelf.stories.map((story) => (
            <div 
              key={story.id} 
              className={`story-card story-card-${shelf.color}`}
            >
              <span className="emoji">{story.emoji}</span>
              <h3 className="title">{story.title}</h3>
              <Link 
                href={`/lumina/${shelfId}/${story.id}`} 
                className={`btn btn-primary ${shelf.color}`}
                style={{ width: '100%' }}
              >
                Read Story
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(shelfData).map((shelf) => ({ shelf }))
}

