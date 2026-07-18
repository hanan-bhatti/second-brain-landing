'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const deckImages = [
  { src: '/dashboard_home.png', alt: 'Dashboard Home' },
  { src: '/floating_edge_panel.png', alt: 'Floating Edge Quick Actions' },
  { src: '/ocr_extracted_links.png', alt: 'Gemini OCR Intelligence' }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  // Storing the positions: positionIndex -> imageIndex
  // cardPositions[0] = index of card on the left
  // cardPositions[1] = index of card in the center (top)
  // cardPositions[2] = index of card on the right
  const [cardPositions, setCardPositions] = useState([0, 1, 2]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // GSAP Entrance animations
    const timeline = gsap.timeline();

    timeline.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { duration: 0.8, y: 0, opacity: 1, ease: 'power3.out' }
    );

    timeline.fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { duration: 0.8, y: 0, opacity: 1, ease: 'power3.out' },
      '-=0.5'
    );

    timeline.fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { duration: 0.8, y: 0, opacity: 1, ease: 'power3.out' },
      '-=0.6'
    );
  }, []);

  // Handle clicking a card to bring it to the center
  const handleCardClick = (positionIndex: number) => {
    if (positionIndex === 1) return; // Already in the center
    
    setCardPositions((prev) => {
      const next = [...prev];
      // Swap clicked card (left or right) with the center card
      const temp = next[1];
      next[1] = next[positionIndex];
      next[positionIndex] = temp;
      return next;
    });
  };

  // Define position-based styles for the deck
  const getCardStyles = (posIdx: number, hovered: boolean) => {
    if (posIdx === 0) {
      // Left Card
      return {
        x: hovered ? -90 : -25,
        y: hovered ? -5 : 15,
        rotate: hovered ? -10 : -5,
        scale: hovered ? 0.95 : 0.9,
        zIndex: 10,
      };
    } else if (posIdx === 1) {
      // Center Card (On Top)
      return {
        x: 0,
        y: hovered ? -25 : 0,
        rotate: 0,
        scale: hovered ? 1.04 : 1,
        zIndex: 30,
      };
    } else {
      // Right Card
      return {
        x: hovered ? 90 : 25,
        y: hovered ? 5 : 20,
        rotate: hovered ? 10 : 5,
        scale: hovered ? 0.95 : 0.9,
        zIndex: 20,
      };
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-24 md:py-32 overflow-hidden bg-[var(--color-cream-paper)]"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[120px] opacity-25 pointer-events-none bg-[var(--color-sky-sticker)]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px] opacity-20 pointer-events-none bg-[var(--color-bubblegum-sticker)]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 pointer-events-none bg-[var(--color-marker-orange)]" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 w-full z-10">
        
        {/* Left Column: Heading & CTAs */}
        <div className="flex-1 text-center lg:text-left">
          <div ref={titleRef} className="mb-6">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-[var(--color-shadow-mist)] text-[var(--color-cocoa-ink)] bg-[var(--color-dew-drop)]">
              📱 Android App • Open Source
            </div>
            <h1 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight text-[var(--color-true-black)]" style={{ fontFamily: 'var(--font-geist)' }}>
              Second <span className="text-[var(--color-marker-orange)]">Brain</span>
            </h1>
            <p className="text-2xl md:text-3xl text-[var(--color-cocoa-ink)] font-medium leading-relaxed">
              Your universal capture tool and personal knowledge archive.
            </p>
          </div>

          <div ref={descRef} className="mb-10 max-w-xl mx-auto lg:mx-0">
            <p className="text-lg text-[var(--color-charcoal)] leading-relaxed opacity-85">
              A minimalist, offline-first Android app designed to seamlessly save links, ideas, images, voice memos, and code snippets. Augmented with on-device Google Gemini AI for smart OCR text extraction.
            </p>
          </div>

          {/* Action buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/hanan-bhatti/second-brain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all shadow-md hover:shadow-lg bg-[var(--color-marker-orange)]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/hanan-bhatti/second-brain/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 bg-transparent transition-all border-[var(--color-marker-orange)] text-[var(--color-marker-orange)] hover:bg-[var(--color-dew-drop)]"
              >
                <span>Download APK</span>
                <span className="text-xs opacity-75">v1.0.0</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Interactive Card Deck (Creative Shuffle & Fan) */}
        <div 
          className="flex-1 flex justify-center items-center mt-16 lg:mt-0 relative w-full select-none"
          style={{ height: '480px' }}
        >
          {/* Card Container block */}
          <div 
            className="relative w-[280px] h-[373px] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {cardPositions.map((imageIdx, posIdx) => {
              const anim = getCardStyles(posIdx, isHovered);
              
              return (
                <motion.div
                  key={imageIdx}
                  className="absolute w-full h-full rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-white"
                  style={{
                    transformOrigin: 'bottom center',
                  }}
                  animate={{
                    x: anim.x,
                    y: anim.y,
                    rotate: anim.rotate,
                    scale: anim.scale,
                    zIndex: anim.zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 24
                  }}
                  onClick={() => handleCardClick(posIdx)}
                >
                  <Image
                    src={deckImages[imageIdx].src}
                    alt={deckImages[imageIdx].alt}
                    fill
                    sizes="280px"
                    priority
                    className="object-cover pointer-events-none"
                  />
                  
                  {/* Subtle hover card indicator */}
                  {posIdx !== 1 && (
                    <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                      <span className="bg-black/60 text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase opacity-0 group-hover:opacity-100">
                        Bring to center
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
          
          {/* Hint Overlay (Tells user they can hover and click) */}
          <div className="absolute bottom-2 text-center w-full pointer-events-none">
            <span className="text-xs font-semibold text-[var(--color-cocoa-ink)] opacity-60 bg-[var(--color-dew-drop)] border border-[var(--color-shadow-mist)] px-3.5 py-1.5 rounded-full shadow-sm">
              ✨ Hover to fan out • Click side cards to shuffle
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
