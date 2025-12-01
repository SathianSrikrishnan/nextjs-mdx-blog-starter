'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function SiaInfo() {
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
      <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-blue-900 flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl max-w-md w-full">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            🔒 Sia's Secret Cloud
          </h2>
          <p className="text-blue-200 mb-6 text-center">
            Enter the magic word from your chapter
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Magic word..."
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-300 border-2 border-blue-400 focus:outline-none focus:border-cyan-400"
            />
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition"
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
    <main className="min-h-screen bg-blue-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Sia's Magical Island
        </h1>
        
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Treehouse</h2>
          <p className="text-gray-700 mb-4">
            Welcome back, Sia! Your treehouse is growing with each adventure.
          </p>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-yellow-100 rounded-lg text-center">
              <p className="text-sm font-semibold">Light Seeds</p>
              <p className="text-2xl font-bold text-yellow-700">0</p>
            </div>
            <div className="p-4 bg-pink-100 rounded-lg text-center">
              <p className="text-sm font-semibold">Chapters</p>
              <p className="text-2xl font-bold text-pink-700">0</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg text-center">
              <p className="text-sm font-semibold">Quests</p>
              <p className="text-2xl font-bold text-green-700">0</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-2 text-lg">Message from Owlumen</h3>
          <p className="italic text-gray-700">
            Your adventure begins soon, Sia. Remember: the best magic comes from careful questions and clear thinking.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-6 border-2 border-green-200">
          <h3 className="font-semibold mb-3 text-lg">📖 Available Chapters:</h3>
          <Link 
            href="/lumina/sia/chapters/chapter-1b"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Start Chapter 1B: The Broken Star Machine
          </Link>
        </div>

        <Link 
          href="/lumina" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Lumina
        </Link>
      </div>
    </main>
  );
}
