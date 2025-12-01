import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})

const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  applicationName: 'Experiments in AI',
  title: 'Experiments in AI',
  description: 'Building tools to learn and teach',
  category: 'education',
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(url),
  openGraph: {
    title: 'Experiments in AI',
    description: 'Building tools to learn and teach',
    url,
    siteName: 'Experiments in AI',
    type: 'website',
  },
  twitter: {
    title: 'Experiments in AI',
    description: 'Building tools to learn and teach',
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
      <body className={`${spaceGrotesk.variable} ${spaceGrotesk.className}`}>{children}</body>
    </html>
  )
}
