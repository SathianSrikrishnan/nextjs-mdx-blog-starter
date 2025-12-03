import Link from 'next/link'
import Image from 'next/image'

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

const characters = [
  { name: 'Isa', image: '/characters/Isa.png', description: 'The dreamer' },
  { name: 'Sia', image: '/characters/Sia.png', description: 'The spark' },
  { name: 'Glimmer', image: '/characters/Glimmer.png', description: 'The guide' },
  { name: 'Pixel', image: '/characters/Pixel.png', description: 'The dragon' },
  { name: 'Whisker', image: '/characters/Whisker.png', description: 'The cat' },
  { name: 'Jira', image: '/characters/Jira.PNG', description: 'The giraffe' },
  { name: 'Dad', image: '/characters/Dad.png', description: 'The storyteller' },
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {shelves.map((shelf) => (
            <Link key={shelf.id} href={`/lumina/${shelf.id}`}>
              <div className={`shelf-button ${shelf.color}`}>
                {shelf.name}
              </div>
            </Link>
          ))}
        </div>

        {/* Characters Section */}
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
          }}>
            Meet the Characters
          </h2>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: '1rem',
          }}>
            {characters.map((character) => (
              <div 
                key={character.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '1rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  width: '120px',
                }}
                className="character-card"
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '0.5rem',
                  border: '3px solid rgba(157, 78, 221, 0.5)',
                  boxShadow: '0 0 15px rgba(157, 78, 221, 0.3)',
                }}>
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={80}
                    height={80}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <span style={{ 
                  fontWeight: 600, 
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                }}>
                  {character.name}
                </span>
                <span style={{ 
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                }}>
                  {character.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
