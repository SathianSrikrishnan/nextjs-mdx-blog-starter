import Link from 'next/link';

export default function Chapter1B() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">
            Chapter 1B: Sia and the Broken Star Machine
          </h1>
          <p className="text-gray-600 italic">Read-aloud time: ~8 minutes</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
            Page 1: Sia's Spark
          </h2>
          
          <p className="text-gray-800 leading-relaxed mb-6">
            In a bedroom bursting with art supplies and half-built forts, Sia discovered her own piece 
            of magic. Sia had longer, pin-straight hair that fell like a silky waterfall, often clipped 
            with a bright ribbon when she was in "making mode." She was the girl who dove into projects 
            paws-first—building towers from blocks, mixing colors until they exploded with joy.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            Tonight, as stars winked outside, her crystal pendant buzzed like a busy bee.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            "Adventure time?" Sia grinned, slipping on the necklace. "Questions power the light!" she 
            declared, echoing Dad's phrase.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            The wall shimmered, and whoosh—a portal to Lumina! Sia tumbled onto a bouncy cloud-bridge, 
            laughter bubbling. There stood Mini-Sia: pin-straight hair with a neon streak clip, rolled-up 
            denim overalls stuffed with glowing tools, neon sneakers kicking up cloud-dust.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
            <p className="text-gray-700 italic">
              To be continued... Complete Quest 1B to unlock the next page!
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <Link 
              href="/lumina/sia" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ← Back to My Island
            </Link>
            
            <Link 
              href="/lumina/sia/quest-1b" 
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Start Quest 1B →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
