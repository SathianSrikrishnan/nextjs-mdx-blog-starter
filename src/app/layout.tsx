import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Lumina - Magical Stories for Kids'
const description = 'Discover magical stories and adventures in the world of Lumina'
const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://sathian.ai'

export const metadata: Metadata = {
  applicationName: 'Lumina',
  title,
  description,
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    url,
    siteName: 'Lumina',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
