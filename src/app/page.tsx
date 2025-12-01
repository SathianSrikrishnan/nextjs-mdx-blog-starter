import Link from 'next/link'

export default function Page() {
  return (
    <main 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: '#1a1a2e',
      }}
    >
      <h1 
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          color: 'white',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}
      >
        Experiments in AI
      </h1>
      
      <p 
        style={{
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          fontWeight: 300,
          color: '#6b7280',
          marginBottom: '4rem',
          textAlign: 'center',
        }}
      >
        Building tools to learn and teach
      </p>
      
      <Link href="/lumina" className="landing-button">
        Enter Lumina →
      </Link>
    </main>
  )
}
