import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getStoriesByShelf } from '../data/stories'

const shelfMeta: Record<string, {
  name: string
  color: 'purple' | 'teal' | 'gold'
}> = {
  'isas-dream-shelf': {
    name: "Isa's Dream Shelf",
    color: 'purple',
  },
  'sias-spark-shelf': {
    name: "Sia's Spark Shelf",
    color: 'teal',
  },
  'twin-sparks-shelf': {
    name: 'Twin Sparks Shelf',
    color: 'gold',
  },
}

export default async function ShelfPage({ 
  params 
}: { 
  params: Promise<{ shelf: string }> 
}) {
  const { shelf: shelfId } = await params
  const shelf = shelfMeta[shelfId]
  const stories = getStoriesByShelf(shelfId)

  if (!shelf || stories.length === 0) {
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {stories.map((story) => (
            <div 
              key={story.id} 
              className={`story-card story-card-${shelf.color}`}
            >
              <span className="emoji">{story.emoji}</span>
              <h3 className="title">{story.title}</h3>
              <p className="summary">{story.summary}</p>
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
  return Object.keys(shelfMeta).map((shelf) => ({ shelf }))
}

