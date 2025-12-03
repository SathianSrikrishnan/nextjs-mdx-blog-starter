import Link from 'next/link'

export default function Page() {
  return (
    <main 
      className="flex flex-col items-center justify-center px-6"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 50% 40%, rgba(157, 78, 221, 0.12) 0%, transparent 60%), #1a1a2e'
      }}
    >
      <div className="text-center flex flex-col items-center">
        <h1 
          className="text-white"
          style={{
            fontSize: 'clamp(3rem, 10vw, 5rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem'
          }}
        >
          Experiments in AI
        </h1>
        
        <p 
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            color: 'rgba(255, 255, 255, 0.5)',
            fontStyle: 'italic',
            marginBottom: '5rem'
          }}
        >
          Building tools to learn and teach
        </p>
        
        <Link 
          href="/lumina"
          className="transition-all duration-300 transform hover:scale-105"
          style={{
            display: 'inline-block',
            padding: '1.25rem 3rem',
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            fontWeight: 500,
            color: 'white',
            background: 'linear-gradient(135deg, #9D4EDD 0%, #B15EE8 100%)',
            borderRadius: '16px',
            boxShadow: '0 0 50px rgba(157, 78, 221, 0.5), 0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          Enter Lumina →
        </Link>
      </div>
    </main>
  )
}
