'use client'
import { useState } from 'react';

export default function IsaInfo() {
    const [password, setPassword] = useState('');
const [unlocked, setUnlocked] = useState(false);

const correctPassword = 'luminous';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (password.toLowerCase() === correctPassword) {
    setUnlocked(true);
  } else {
    alert('Not quite... try the magic word from your chapter! 🔮');
  }
};

// Password gate
if (!unlocked) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-900 to-purple-900 flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          🔒 Isa's Secret Cloud
        </h2>
        <p className="text-purple-200 mb-6 text-center">
          Enter the magic word from your chapter
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Magic word..."
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border-2 border-purple-400 focus:outline-none focus:border-pink-400"
          />
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:from-pink-600 hover:to-purple-700 transition"
          >
            Unlock ✨
          </button>
        </form>
      </div>
    </div>
  );
}

// Original content below (when unlocked)
  return (
    <main className="min-h-screen bg-pink-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-700 mb-6">
          Isa's Magical Island
        </h1>
        
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Treehouse</h2>
          <p className="text-gray-700 mb-4">
            Welcome back, Isa!
          </p>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-yellow-100 rounded-lg text-center">
              <p className="text-sm font-semibold">Light Seeds</p>
              <p className="text-2xl font-bold text-yellow-700">0</p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg text-center">
              <p className="text-sm font-semibold">Chapters</p>
              <p className="text-2xl font-bold text-blue-700">0</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg text-center">
              <p className="text-sm font-semibold">Quests</p>
              <p className="text-2xl font-bold text-green-700">0</p>
            </div>
          </div>
        </div>

        <a 
          href="/lumina" 
          className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg"
        ><div className="bg-green-50 p-6 rounded-lg mb-6 border-2 border-green-200">
  <h3 className="font-semibold mb-3 text-lg">📖 Available Chapters:</h3>
  <a 
    href="/lumina/isa/chapters/chapter-1a"
    className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
  >
    Start Chapter 1A: The Book of First Questions
  </a>
</div>
          Back to Lumina
        </a>
      </div>
    </main>
  );
}