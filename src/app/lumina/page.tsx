import Link from 'next/link'

const shelves = [
  {
    id: 'isas-dream-shelf',
    name: "Isa's Dream Shelf",
    color: 'purple',
  },
  {
    id: 'sias-spark-shelf',
    name: "Sia's Spark Shelf",
    color: 'teal',
  },
  {
    id: 'twin-sparks-shelf',
    name: 'Twin Sparks Shelf',
    color: 'gold',
  },
]

export default function LuminaPage() {
  return (
    <main className="magical-bg">
      <div className="container">
        <h1 className="mb-4">
          ✨ Lumina ✨
        </h1>
        
        <p className="text-center mb-4" style={{ color: 'var(--text-secondary)' }}>
          Choose a magical shelf to explore
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {shelves.map((shelf) => (
            <Link key={shelf.id} href={`/lumina/${shelf.id}`}>
              <div className={`shelf-button ${shelf.color}`}>
                {shelf.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

