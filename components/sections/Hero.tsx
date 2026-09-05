'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, GitBranch, Menu, X } from 'lucide-react'

const deck = [
  { src: '/dashboard_home.png', alt: 'Second Brain home dashboard' },
  { src: '/floating_edge_panel.png', alt: 'Second Brain floating capture panel' },
  { src: '/ocr_extracted_links.png', alt: 'Second Brain OCR review screen' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-5 md:px-12 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-[var(--color-shadow-mist)] pb-5">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight"><span className="grid size-9 place-items-center overflow-hidden rounded-xl bg-[var(--color-charcoal)]"><img src="/second-brain-mark.svg" alt="" className="size-8" /></span><span>Second Brain</span></a>
          <nav className="hidden items-center gap-7 text-sm text-[var(--color-muted-foreground)] md:flex"><a href="#workflow" className="transition-colors hover:text-[var(--color-charcoal)]">How it works</a><a href="#screens" className="transition-colors hover:text-[var(--color-charcoal)]">Screens</a><a href="#open-source" className="transition-colors hover:text-[var(--color-charcoal)]">Open source</a></nav>
          <a href="https://github.com/hanan-bhatti/second-brain" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-[var(--color-shadow-mist)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--color-marker-orange)] hover:text-[var(--color-marker-orange)] md:flex"><GitBranch aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
          <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 md:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </header>
        {menuOpen && <nav className="flex flex-col gap-4 border-b border-[var(--color-shadow-mist)] py-5 text-sm md:hidden"><a href="#workflow" onClick={() => setMenuOpen(false)}>How it works</a><a href="#screens" onClick={() => setMenuOpen(false)}>Screens</a><a href="#open-source" onClick={() => setMenuOpen(false)}>Open source</a></nav>}

        <div id="top" className="relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_.95fr]"><div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-[var(--color-marker-orange)]/10 blur-3xl" /><div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3 hidden h-px w-32 bg-[var(--color-marker-orange)]/40 lg:block" data-float />
          <div>
            <p data-reveal className="mb-6 font-mono text-xs uppercase tracking-[.22em] text-[var(--color-burnt-sienna)]">Android · offline-first · open source</p>
            <h1 data-reveal className="max-w-3xl text-6xl font-semibold leading-[.95] tracking-[-.06em] md:text-8xl">Keep the thought.<br /><span className="text-[var(--color-marker-orange)]">Find it later.</span></h1>
            <p data-reveal className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted-foreground)] md:text-xl">Second Brain is a personal knowledge archive for the things you do not want to lose: links, notes, images, code, and voice memos.</p>
            <div data-reveal className="mt-10 flex flex-wrap gap-3"><a href="https://github.com/hanan-bhatti/second-brain/releases" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-marker-orange)] px-6 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition-transform hover:-translate-y-0.5">View releases <ArrowUpRight aria-hidden="true" /></a><a href="#workflow" className="rounded-full border border-[var(--color-shadow-mist)] px-6 py-3 font-semibold transition-colors hover:border-[var(--color-marker-orange)]">See how it works</a></div>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--color-muted-foreground)]"><span>Built for Android</span><span>Room local storage</span><span>Firebase sync</span></div>
          </div>
          <div data-tilt className="relative mx-auto h-[440px] w-full max-w-[390px] sm:h-[520px]">
            {deck.map((item, index) => { const offset = (index - active + 3) % 3; return <button type="button" key={item.src} onClick={() => setActive(index)} aria-label={`Show ${item.alt}`} className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl transition-all duration-500" style={{ transform: `translate(${offset * 42 - 42}px, ${offset * 13}px) rotate(${offset === 1 ? -6 : offset === 2 ? 6 : 0}deg) scale(${offset === 0 ? 1 : .9})`, zIndex: 10 - offset, opacity: offset === 2 ? .65 : 1 }}><Image src={item.src} alt={item.alt} fill priority={index === 0} sizes="(max-width: 640px) 90vw, 390px" className="object-cover" /></button> })}
            <p className="absolute -bottom-10 left-0 right-0 text-center font-mono text-xs uppercase tracking-widest text-[var(--color-muted-foreground)]">Tap a screen to explore</p>
          </div>
        </div>
      </div>
    </section>
  )
}
