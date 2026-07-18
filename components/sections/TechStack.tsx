'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const row1Items = [
  { name: 'Kotlin', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/Kotlin/kotlin2.svg', color: 'rgba(255, 111, 30, 0.4)' },
  { name: 'Android', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/Android/android2.svg', color: 'rgba(34, 197, 94, 0.4)' },
  { name: 'Android Studio', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/AndroidStudio/androidstudio2.svg', color: 'rgba(59, 130, 246, 0.4)' },
  { name: 'Firebase', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/Firebase/firebase2.svg', color: 'rgba(255, 111, 30, 0.4)' },
  { name: 'SQLite', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/SQLite/sqlite2.svg', color: 'rgba(206, 80, 10, 0.4)' },
  { name: 'JSON Storage', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/JSON/json2.svg', color: 'rgba(59, 130, 246, 0.4)' },
];

const row2Items = [
  { name: 'Figma Design', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/Figma/figma2.svg', color: 'rgba(255, 102, 207, 0.4)' },
  { name: 'GitHub Sync', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/Github/github2.svg', color: 'rgba(23, 23, 23, 0.4)' },
  { name: 'Git Versioning', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/Git/git2.svg', color: 'rgba(206, 80, 10, 0.4)' },
  { name: 'Markdown Editor', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/Markdown/markdown2.svg', color: 'rgba(59, 130, 246, 0.4)' },
  { name: 'Linux Base', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/Linux/linux2.svg', color: 'rgba(34, 197, 94, 0.4)' },
  { name: 'TypeScript', badge: 'https://ziadoua.github.io/m3-Markdown-Badges/badges/TypeScript/typescript2.svg', color: 'rgba(59, 130, 246, 0.4)' }
];

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll reveal for the header section
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 overflow-hidden bg-[var(--color-cream-paper)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-[var(--color-shadow-mist)] text-[var(--color-cocoa-ink)] bg-[var(--color-dew-drop)]">
            🛠️ Architecture & Tools
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-[var(--color-true-black)]" style={{ fontFamily: 'var(--font-geist)' }}>
            Tech Stack
          </h2>
          <p className="text-xl text-[var(--color-charcoal)] opacity-75 max-w-2xl mx-auto">
            Built using modern, reliable technologies and designed for speed, security, and offline resilience.
          </p>
        </div>

        {/* Marquee Tracks container */}
        <div className="space-y-8 max-w-5xl mx-auto perspective-1000">
          
          {/* Row 1: Sliding Left */}
          <div className="relative flex w-full overflow-hidden select-none hover:[&_.animate-marquee-scroll]:[animation-play-state:paused]">
            <div className="flex gap-6 animate-marquee-scroll py-2">
              {/* Render items twice to build a seamless loop */}
              {[...row1Items, ...row1Items].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.08, 
                    rotateY: 10, 
                    rotateX: -10, 
                    z: 30,
                    boxShadow: `0 15px 30px ${item.color}`
                  }}
                  className="group flex flex-col items-center justify-center p-6 w-[170px] h-[130px] rounded-3xl cursor-pointer transition-all duration-300 bg-[var(--color-dew-drop)] border border-[var(--color-shadow-mist)] hover:bg-white hover:border-[var(--color-marker-orange)]"
                >
                  <img 
                    src={item.badge} 
                    alt={item.name} 
                    height="32" 
                    className="mb-3 group-hover:scale-115 transition-transform" 
                  />
                  <p className="font-semibold text-[var(--color-charcoal)] text-xs truncate max-w-full">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Soft fade borders */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-cream-paper)] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-cream-paper)] to-transparent pointer-events-none z-10" />
          </div>

          {/* Row 2: Sliding Right */}
          <div className="relative flex w-full overflow-hidden select-none hover:[&_.animate-marquee-scroll-reverse]:[animation-play-state:paused]">
            <div className="flex gap-6 animate-marquee-scroll-reverse py-2">
              {[...row2Items, ...row2Items].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.08, 
                    rotateY: -10, 
                    rotateX: 10, 
                    z: 30,
                    boxShadow: `0 15px 30px ${item.color}`
                  }}
                  className="group flex flex-col items-center justify-center p-6 w-[170px] h-[130px] rounded-3xl cursor-pointer transition-all duration-300 bg-[var(--color-dew-drop)] border border-[var(--color-shadow-mist)] hover:bg-white hover:border-[var(--color-marker-orange)]"
                >
                  <img 
                    src={item.badge} 
                    alt={item.name} 
                    height="32" 
                    className="mb-3 group-hover:scale-115 transition-transform" 
                  />
                  <p className="font-semibold text-[var(--color-charcoal)] text-xs truncate max-w-full">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-cream-paper)] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-cream-paper)] to-transparent pointer-events-none z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}
