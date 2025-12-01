import Link from 'next/link';

export default function Quest1A() {
  return (
    <main className="min-h-screen bg-pink-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-700 mb-2">
            Quest 1A: The Locked Book
          </h1>
          <p className="text-gray-600">Mini-Isa's First Quest: Unlock the Silver Book!</p>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mb-8">
          <p className="text-lg mb-4">Dear Brave Bookworm,</p>
          <p className="mb-4">
            The book's lock whispers: <strong className="text-2xl text-pink-700">8 + 7 = ?</strong>
          </p>
          
          <div className="ml-4 mb-4">
            <p className="mb-2">Think like this:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Step 1: Count 8 stars on your fingers (or draw them)</li>
              <li>Step 2: Add 7 more stars. How many now?</li>
              <li>Step 3: Write the answer below</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-pink-300 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Answer:</h3>
          <div className="text-center mb-6">
            <div className="inline-block text-6xl font-bold text-pink-700 border-4 border-pink-300 rounded-lg px-12 py-6">
              ?
            </div>
          </div>
          <p className="text-sm text-gray-600 italic text-center">
            (Write your answer on paper and show Dad!)
          </p>
        </div>

        <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-2">🦉 Hint from Owlumen:</h3>
          <p className="italic text-gray-700">
            "If stuck, ask: What if I count backward from 10?"
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-2">✨ Real-World Magic:</h3>
          <p className="text-gray-700">
            Draw or find 15 things in your room that come in groups (like 3 groups of 5 books). 
            Take a photo and show Dad!
          </p>
        </div>

        <div className="flex gap-4">
          <Link 
            href="/lumina/isa/chapters/chapter-1a"
            className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            ← Back to Chapter
          </Link>
          <Link 
            href="/lumina/isa"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Return to My Island
          </Link>
        </div>
      </div>
    </main>
  );
}
