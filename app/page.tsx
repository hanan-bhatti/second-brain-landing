'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Hero from '@/components/sections/Hero';
import FeatureShowcase from '@/components/sections/FeatureShowcase';
import TechStack from '@/components/sections/TechStack';
import ScreensGallery from '@/components/sections/ScreensGallery';
import OpenSource from '@/components/sections/OpenSource';
import Footer from '@/components/sections/Footer';
import CustomCursor from '@/components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Update ScrollTrigger on scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Run the animation frame loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative bg-[var(--color-cream-paper)] text-[var(--color-charcoal)] overflow-x-clip antialiased selection:bg-[var(--color-marker-orange)] selection:text-white"
    >
      <CustomCursor />
      <Hero />
      <FeatureShowcase />
      <TechStack />
      <ScreensGallery />
      <OpenSource />
      <Footer />
    </main>
  );
}
