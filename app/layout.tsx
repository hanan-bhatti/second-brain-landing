import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://second-brain.hanan-bhatti.site'),
  title: 'Second Brain — Capture what matters',
  description: 'An open-source, offline-first Android knowledge archive for capturing links, notes, images, code, and voice memos.',
  keywords: ['Android', 'offline-first', 'knowledge archive', 'open source', 'OCR', 'voice memos', 'Firebase'],
  generator: 'v0.app',
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Second Brain — Capture what matters',
    description: 'An open-source, offline-first Android knowledge archive for capturing links, notes, images, code, and voice memos.',
    type: 'website',
    url: 'https://second-brain.hanan-bhatti.site',
    siteName: 'Second Brain',
    images: [{ url: '/second-brain-og-1200x630.png', width: 1200, height: 630, alt: 'Second Brain Android knowledge archive' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Second Brain — Capture what matters', description: 'An open-source, offline-first Android knowledge archive.', images: ['/second-brain-og-1200x630.png'] },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#fdfbf9', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
