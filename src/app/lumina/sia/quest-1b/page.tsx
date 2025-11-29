export default function Quest1B() {
  return (
    <main className="min-h-screen bg-blue-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">
            Quest 1B: Fix the Star Machine
          </h1>
          <p className="text-gray-600">Mini-Sia's First Quest: Build the Bridge of Stars!</p>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mb-8">
          <p className="text-lg mb-4">Hey, Super Builder!</p>
          <p className="mb-4">
            The machine needs <strong className="text-2xl text-blue-700">15 planks</strong>. 
            It has three groups of 5.
          </p>
          
          <div className="ml-4 mb-4">
            <p className="mb-2">Think step by step:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Step 1: One group = 5 planks (draw them as lines)</li>
              <li>Step 2: Two groups = 10</li>
              <li>Step 3: Three groups = ?</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Answer:</h3>
          <div className="text-center mb-6">
            <div className="inline-block text-6xl font-bold text-blue-700 border-4 border-blue-300 rounded-lg px-12 py-6">
              ?
            </div>
          </div>
          <p className="text-sm text-gray-600 italic text-center">
            (Write your answer on paper and show Dad!)
          </p>
        </div>

        <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-2">🦉 Owlumen Hint:</h3>
          <p className="italic text-gray-700">
            "If frustrated, count with your fingers—slow is smart."
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-2">✨ Real-World Magic:</h3>
          <p className="text-gray-700">
            Use 15 blocks, sticks, or drawn lines to build a mini-bridge in your room. 
            Snap a photo and show Dad!
          </p>
        </div>

        <div className="flex gap-4">
          <a 
            href="/lumina/sia/chapters/chapter-1b"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to Chapter
          </a>
          <a 
            href="/lumina/sia"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Return to My Island
          </a>
        </div>
      </div>
    </main>
  );
}