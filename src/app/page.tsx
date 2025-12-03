import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a2e] text-white px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
        Experiments in AI
      </h1>
      
      <Link 
        href="/lumina"
        className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
      >
        ✨ Enter Lumina
      </Link>
    </main>
  )
}
