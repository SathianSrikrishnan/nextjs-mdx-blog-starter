export const dynamicParams = false

export async function generateStaticParams() {
  return []
}
export default function ChildrenPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Children</h1>
      <p className="text-gray-700 text-lg">
        This is your Children section. Content will be added soon.
      </p>
    </main>
  );
}
