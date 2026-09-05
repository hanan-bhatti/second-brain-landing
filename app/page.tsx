'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Hero from '@/components/sections/Hero'
import FeatureShowcase from '@/components/sections/FeatureShowcase'
import TechStack from '@/components/sections/TechStack'
import ScreensGallery from '@/components/sections/ScreensGallery'
import OpenSource from '@/components/sections/OpenSource'
import Footer from '@/components/sections/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const lenis = new Lenis({ duration: 1.1 })
    lenis.on('scroll', ScrollTrigger.update)
    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--color-cream-paper)] text-[var(--color-charcoal)] selection:bg-[var(--color-marker-orange)] selection:text-white">
      <Hero />
      <FeatureShowcase />
      <ScreensGallery />
      <TechStack />
      <OpenSource />
      <Footer />
    </main>
  )
}
