import { redirect } from 'next/navigation'

// Homepage redirects to Lumina
export default function Page() {
  redirect('/lumina')
}
