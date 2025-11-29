export default function Chapter1A() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-700 mb-2">
            Chapter 1A: Isa and the Book of First Questions
          </h1>
          <p className="text-gray-600 italic">Read-aloud time: ~8 minutes</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-pink-600 mt-8 mb-4">
            Page 1: The Portal Opens
          </h2>
          
          <p className="text-gray-800 leading-relaxed mb-6">
            Once upon a very near tomorrow, in a cozy bedroom filled with storybooks and twinkling fairy lights, 
            a girl named Isa discovered something extraordinary. Isa had shorter, very curly hair tied in two 
            loose puff-braids with colorful beads that clicked softly when she thought hard. She loved nothing 
            more than curling up with a good book, letting the words whisk her away to far-off lands.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            But tonight, as the moon peeked through her window, her favorite necklace—the glowing crystal 
            pendant from Dad—began to hum.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            "Hmm?" Isa whispered, touching the warm crystal. It sparkled like a tiny star. Remembering Dad's 
            secret words, she said them softly: "Questions unlock the light."
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            Suddenly, her bedroom wall rippled like water. Colors swirled—pastel blues and glowing pinks—and 
            a doorway appeared! Beyond it floated a fluffy cloud-island, dotted with glowing trees and 
            whispering winds. This was the Lumina Archipelago, a magical world where only curious hearts 
            could enter.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
            <p className="text-gray-700 italic">
              To be continued... Complete Quest 1A to unlock the next page!
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <a 
              href="/lumina/isa" 
              className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
            >
              ← Back to My Island
            </a>
            
            <a 
              href="/lumina/isa/quest-1a" 
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Start Quest 1A →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}