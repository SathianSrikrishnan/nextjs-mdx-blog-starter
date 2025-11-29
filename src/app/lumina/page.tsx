export default function LuminaHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-purple-900">
          ✨ The Lumina Archipelago ✨
        </h1>
        
        <p className="text-xl text-gray-700 mb-12">
          A magical learning world for Isa and Sia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Isa's Portal */}
          <a 
            href="/lumina/isa" 
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="text-6xl mb-4">🌸</div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">Isa's Cloud</h2>
            <p className="text-gray-600">Enter your magical island</p>
          </a>

          {/* Sia's Portal */}
          <a 
            href="/lumina/sia" 
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="text-6xl mb-4">⭐</div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Sia's Cloud</h2>
            <p className="text-gray-600">Enter your magical island</p>
          </a>
        </div>

        <div className="mt-16 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200">
          <p className="text-gray-700 italic">
            "The only real magic in Lumina is: <br/>
            <strong>Careful Questions + Clear Thinking + Kind Heart</strong>"
          </p>
        </div>
      </div>
    </main>
  );
}