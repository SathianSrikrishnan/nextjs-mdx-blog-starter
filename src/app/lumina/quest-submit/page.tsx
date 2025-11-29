'use client'
import { useState } from 'react';

export default function QuestSubmit() {
  const [name, setName] = useState('');
  const [quest, setQuest] = useState('');
  const [answer, setAnswer] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log({ name, quest, answer, photo });
    setSubmitted(true);
    
    setTimeout(() => {
      alert('✨ Your quest is complete! Check your crystal... it\'s glowing! ✨');
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-lg p-12 rounded-2xl text-center max-w-md">
          <div className="text-8xl mb-6 animate-pulse">✨</div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Quest Complete!
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Your crystal is glowing with new magic...
          </p>
          <a
            href="/lumina"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transition"
          >
            Return to Lumina
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          📮 Quest Drop Box
        </h1>
        
        <p className="text-xl text-purple-200 text-center mb-12">
          Submit your completed quest here!
        </p>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl space-y-6">
          
          <div>
            <label className="block text-white font-bold mb-2">
              Your Name
            </label>
            <select
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border-2 border-purple-400 focus:outline-none focus:border-pink-400"
            >
              <option value="">Choose...</option>
              <option value="Isa">Isa</option>
              <option value="Sia">Sia</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-bold mb-2">
              Which Quest?
            </label>
            <select
              value={quest}
              onChange={(e) => setQuest(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border-2 border-purple-400 focus:outline-none focus:border-pink-400"
            >
              <option value="">Choose...</option>
              <option value="Quest 1A">Quest 1A - Isa's Pattern Puzzle</option>
              <option value="Quest 1B">Quest 1B - Sia's Building Task</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-bold mb-2">
              Your Answer
            </label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              rows={4}
              placeholder="Tell us what you discovered..."
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border-2 border-purple-400 focus:outline-none focus:border-pink-400"
            />
          </div>

          <div>
            <label className="block text-white font-bold mb-2">
              Upload a Photo (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border-2 border-purple-400 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-purple-500 file:text-white file:cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-4 rounded-lg font-bold text-xl hover:shadow-2xl hover:scale-105 transition"
          >
            Submit Quest ✨
          </button>
        </form>
      </div>
    </div>
  );
}