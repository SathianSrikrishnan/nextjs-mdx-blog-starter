export default function Page() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">Sathian.ai</h1>
      <p className="text-lg text-gray-600 mb-8">
        AI, crypto, history, rhymes, philosophy, fatherhood, and digital projects.  
        A personal workspace, a digital garden, and a studio for experiments.
      </p>

      <div className="space-x-4">
        <a href="/garden" className="text-blue-600 hover:underline">Garden</a>
        <a href="/studio" className="text-blue-600 hover:underline">Studio</a>
        <a href="/children" className="text-blue-600 hover:underline">Children</a>
      </div>
    </main>
  );
}
