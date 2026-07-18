'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Dashboard & Active Search',
    description: 'The core hub of your Second Brain. A dual-column layout displays all captured memories, divided into swipeable folder tabs. Instantly filter documents, links, and voice notes with real-time query matching.',
    pills: ['Compose Grid', 'Folder Tabs', 'Real-time Filters'],
    image: '/dashboard_home.png',
    label: 'Home Grid',
    color: 'var(--color-marker-orange)',
    icon: '📊'
  },
  {
    title: 'Floating Edge Panel Overlay',
    description: 'Trigger quick actions from any application system-wide without changing focus. Instantly type a quick thought, bookmark a URL, or crop a section of the screen for OCR scanning. Position and align it anywhere along the screen borders.',
    pills: ['System Overlay', 'Quick Capture', 'Custom Offsets'],
    image: '/floating_edge_panel.png',
    label: 'Quick Actions',
    color: 'var(--color-sky-sticker)',
    icon: '⚡'
  },
  {
    title: 'Gemini Screen OCR & Links Hub',
    description: 'Transform screen captures into clean, organized knowledge. Use the regional selector to isolate text or links, and let on-device Gemini AI extract names, URLs, and descriptions into a Checklist ready to save.',
    pills: ['Gemini Nano/Flash', 'Regional Crop', 'Metadata Scraper'],
    image: '/ocr_target_screenshot.png',
    label: 'Area Selector',
    color: 'var(--color-sprout-sticker)',
    icon: '📸'
  },
  {
    title: 'Voice Recording & Transcription',
    description: 'Record notes hand-free. Features a minimalist waveform sound visualizer and instant local speech-to-text transcription. Review your memo as structured markdown headers and bullet points.',
    pills: ['Audio Visualizer', 'Local Whisper', 'Markdown Preview'],
    image: '/voice_memo_recording.png',
    label: 'Recording Wave',
    color: 'var(--color-bubblegum-sticker)',
    icon: '🎙️'
  },
  {
    title: 'Smart Categorization & Folders',
    description: 'Group items using custom folders with customizable colors and icons. Click into any memory to view full metadata logs, interactive screenshots, parsed tag directories, and quick editing panels.',
    pills: ['Custom Icons', 'Metadata Details', 'Tag Directories'],
    image: '/folders_screen.png',
    label: 'Folders Hub',
    color: 'var(--color-burnt-sienna)',
    icon: '🗂'
  },
  {
    title: 'Offline Sync & Cloud Backups',
    description: 'Enjoy a robust, offline-first experience with local SQLite caching. Sync your data to Firebase when connected. Monitor cloud backup space, profile statistics, and sync states in one dashboard.',
    pills: ['Offline-First Sync', 'Firebase Firestore', 'Storage breakdown'],
    image: '/manage_storage_screen.png',
    label: 'Storage Manager',
    color: 'var(--color-marker-orange)',
    icon: '💾'
  }
];

// Returns custom dimensions and aspect ratio class based on the image size
function getAspectClass(imagePath: string) {
  if (imagePath.includes('active_search') || imagePath.includes('search')) {
    return 'aspect-[4/3] w-full max-w-[440px]';
  }
  return 'aspect-[3/4] w-full max-w-[320px]';
}

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll positioning to update active mockup image matching the top sticky card
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const stickyThreshold = 150;
      let activeIndex = 0;
      
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // If the card top is at or above the threshold
          if (rect.top <= stickyThreshold + (index * 24)) {
            activeIndex = index;
          }
        }
      });
      
      setActiveFeature(activeIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[var(--color-dew-drop)] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-[var(--color-shadow-mist)] text-[var(--color-cocoa-ink)] bg-[var(--color-cream-paper)]">
            ⚡ Stacking Deck Walkthrough
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-[var(--color-true-black)]" style={{ fontFamily: 'var(--font-geist)' }}>
            Deep Feature Flows
          </h2>
          <p className="text-xl text-[var(--color-charcoal)] opacity-75 max-w-2xl mx-auto">
            Scroll down to watch the cards stack into a physical knowledge deck, sync-updating the live previews.
          </p>
        </div>

        {/* Layout Column Wrap */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Left Column: Scrolling & Stacking Cards */}
          <div className="flex-1 space-y-12 lg:space-y-0 lg:pb-[240px]">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`transition-all duration-300 rounded-3xl p-8 md:p-10 border-2 bg-[var(--color-cream-paper)] shadow-[0_15px_40px_rgba(0,0,0,0.04)] sticky-card-stack ${
                  activeFeature === index 
                    ? 'border-[var(--color-marker-orange)] shadow-[0_20px_40px_rgba(255,111,30,0.06)]' 
                    : 'border-[var(--color-shadow-mist)]'
                }`}
                style={{
                  '--sticky-top': `${140 + (index * 24)}px`,
                  '--sticky-mb': '48px',
                  '--card-z': 10 + index
                } as React.CSSProperties}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                    style={{ backgroundColor: feature.color + '20' }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-true-black)]">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-lg text-[var(--color-charcoal)] leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.pills.map((pill, pIdx) => (
                    <span 
                      key={pIdx}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-cocoa-ink)] border border-[var(--color-shadow-mist)] bg-[var(--color-dew-drop)]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Mobile Mockup View (Visible only on mobile/tablet) */}
                <div className="block lg:hidden mt-8">
                  <div className={`relative mx-auto rounded-3xl overflow-hidden shadow-lg border border-[var(--color-shadow-mist)] bg-white z-10 ${getAspectClass(feature.image)}`}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover pointer-events-none"
                    />
                    {/* Active Label Badge */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm border border-neutral-800 text-white rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider z-20 uppercase">
                      {feature.label}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column: Sticky Mockup Display (Visible on Desktop only) */}
          <div className="hidden lg:block w-[400px] h-[580px] sticky top-36 z-10 self-start">
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Overlapping Stacks Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className={`relative rounded-3xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-stone-200 overflow-hidden ${getAspectClass(features[activeFeature].image)}`}
                >
                  {/* Screen View */}
                  <div className="w-full h-full relative">
                    <Image
                      src={features[activeFeature].image}
                      alt="Primary Screen"
                      fill
                      className="object-cover pointer-events-none"
                      priority
                    />
                  </div>

                  {/* Active Label Badge */}
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm border border-neutral-800 text-white rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider z-20 uppercase">
                    {features[activeFeature].label}
                  </div>
                </motion.div>
              </AnimatePresence>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
