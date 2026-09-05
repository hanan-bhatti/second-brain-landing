'use client'

import Image from 'next/image'
import { ArrowDown, Cloud, Mic, ScanText, Share2, WifiOff } from 'lucide-react'

const features = [
  { number: '01', title: 'Capture from anywhere', description: 'Use Android sharing, deep links, shortcuts, or the floating edge panel to save a thought without losing your place.', icon: Share2, image: '/floating_edge_panel.png' },
  { number: '02', title: 'Keep working offline', description: 'Your archive stays useful without a connection. Room stores the local collection first, then Firebase syncs when you are back online.', icon: WifiOff, image: '/dashboard_home.png' },
  { number: '03', title: 'Turn fragments into context', description: 'Select a region for OCR, detect links from a screen, or record a voice memo and turn it into structured Markdown.', icon: ScanText, image: '/ocr_extracted_links.png' },
]

export default function FeatureShowcase() {
  return <section id="workflow" className="bg-[var(--color-dew-drop)] px-6 py-24 md:px-12 md:py-32"><div className="mx-auto max-w-6xl"><div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[.22em] text-[var(--color-burnt-sienna)]">The workflow</p><h2 className="mt-4 max-w-2xl text-5xl font-semibold leading-none tracking-[-.05em] md:text-7xl">A calmer way to collect.</h2></div><p className="max-w-sm text-base leading-7 text-[var(--color-muted-foreground)]">The app is designed around the moment an idea appears, not the moment you finally have time to organize it.</p></div><div className="grid gap-5 md:grid-cols-3">{features.map(({ number, title, description, icon: Icon, image }) => <article key={number} className="group overflow-hidden rounded-[1.5rem] border border-[var(--color-shadow-mist)] bg-[var(--color-cream-paper)]"><div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--color-shadow-mist)]"><Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-7"><div className="mb-8 flex items-center justify-between"><span className="font-mono text-xs text-[var(--color-burnt-sienna)]">{number}</span><Icon aria-hidden="true" className="text-[var(--color-marker-orange)]" /></div><h3 className="text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-4 leading-7 text-[var(--color-muted-foreground)]">{description}</p></div></article>)}</div><div className="mt-12 flex items-center gap-3 text-sm text-[var(--color-muted-foreground)]"><ArrowDown aria-hidden="true" /> Browse the real interface below</div></div></section>
}
