import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://second-brain.hanan-bhatti.site'),
  title: 'Second Brain - Universal Capture App',
  description: 'A minimalist, offline-first Android app for capturing links, notes, images, voice memos, and code snippets. Powered by Gemini AI for intelligent OCR and text extraction.',
  keywords: ['capture', 'notes', 'android', 'open-source', 'knowledge-base', 'OCR', 'Gemini AI', 'Jetpack Compose', 'Kotlin'],
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Second Brain - Universal Capture App',
    description: 'A minimalist, offline-first Android app for capturing links, notes, images, voice memos, and code snippets. Powered by Gemini AI for intelligent OCR and text extraction.',
    type: 'website',
    url: 'https://github.com/hanan-bhatti/second-brain',
    siteName: 'Second Brain',
    images: [
      {
        url: '/second-brain-og-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Second Brain App Dashboard and System Overlay Interface',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Second Brain - Universal Capture App',
    description: 'A minimalist, offline-first Android app for capturing links, notes, images, voice memos, and code snippets.',
    images: ['/second-brain-og-1200x630.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfbf9' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
