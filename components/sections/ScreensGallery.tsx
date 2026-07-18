'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface AppScreen {
  title: string;
  filename: string;
  description: string;
  category: 'core' | 'ocr' | 'voice' | 'settings' | 'storage';
  color: string;
  // Bento Grid Spans on Desktop
  colSpanClass: string;
  rowSpanClass: string;
}

const appScreens: AppScreen[] = [
  {
    title: 'Main Dashboard',
    filename: '/dashboard_home.png',
    description: 'The central command center of the app. It displays a comprehensive search bar, horizontal scrolling folder categories, and a dual-column grid layout of recently captured links, text notes, documents, and other items.',
    category: 'core',
    color: 'var(--color-marker-orange)',
    colSpanClass: 'md:col-span-2',
    rowSpanClass: 'md:row-span-2'
  },
  {
    title: 'Floating Edge Panel',
    filename: '/floating_edge_panel.png',
    description: 'A system-wide overlay triggerable from any screen/app. It allows users to write quick thoughts, instantly bookmark links, trigger region-specific OCR extraction, or open the main application without context switching.',
    category: 'core',
    color: 'var(--color-sky-sticker)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-2'
  },
  {
    title: 'OCR Intelligence Hub',
    filename: '/ocr_extracted_links.png',
    description: 'After scanning the target screen area, the Gemini-powered OCR identifies all hyperlinks, extracts meta-descriptions, and presents them in a quick-review checklist to be instantly saved into designated folders.',
    category: 'ocr',
    color: 'var(--color-bubblegum-sticker)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-2'
  },
  {
    title: 'OCR Area Selection',
    filename: '/ocr_target_screenshot.png',
    description: 'Before triggering on-device OCR, the screen capture service overlays a handle so the user can easily select the target text or area on their device.',
    category: 'ocr',
    color: 'var(--color-sprout-sticker)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'Voice Memo Recording',
    filename: '/voice_memo_recording.png',
    description: 'Minimalist audio recording screen featuring a dynamic red soundwave visualizer, a live timer, folder categorization selectors, and a target folder assignment bar.',
    category: 'voice',
    color: 'var(--color-burnt-sienna)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'Voice Transcription',
    filename: '/voice_memo_transcription.png',
    description: 'Once recorded, the memo is transcribed locally. The app includes a rich text viewer with a markdown preview tab, displaying the generated text formatted in structured headers and bullet points.',
    category: 'voice',
    color: 'var(--color-marker-orange)',
    colSpanClass: 'md:col-span-2',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'Universal Link Capture',
    filename: '/capture_link.png',
    description: 'A dedicated modal to capture web URLs manually, enabling rapid title generation, categorization, metadata extraction, and tag assignment.',
    category: 'core',
    color: 'var(--color-sky-sticker)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'Folders Manager',
    filename: '/folders_screen.png',
    description: 'The categorization hub showing default directories (Links, Images, Videos, Code, Text, Audio) and custom folders pinned by the user with bespoke colors and icons.',
    category: 'core',
    color: 'var(--color-sprout-sticker)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'Active Search',
    filename: '/active_search.png',
    description: 'The search screen showing real-time query results (e.g. searching for "por" returning "Hanan Bhatti Portfolio") with quick filter pills to isolate specific file formats.',
    category: 'core',
    color: 'var(--color-bubblegum-sticker)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'Saved Memory Details',
    filename: '/memory_detail.png',
    description: 'The detail page for any saved memory. It features metadata logs, tags, a screenshot card, a parsed text preview description, and an action button to edit the memory details.',
    category: 'core',
    color: 'var(--color-burnt-sienna)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'Profile & Statistics',
    filename: '/profile_screen.png',
    description: 'Displays logged-in user profile details, database synchronization status (offline-first sync with Firebase), and a detailed numeric count of items captured across each format.',
    category: 'storage',
    color: 'var(--color-marker-orange)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'Storage & Backup',
    filename: '/manage_storage_screen.png',
    description: 'A detailed breakdown of cloud backup utilization showing space occupied by media (e.g. videos and images) against the free 512 MB tier, along with local-vs-cloud synchronization statuses.',
    category: 'storage',
    color: 'var(--color-sky-sticker)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'System Settings',
    filename: '/settings_screen.png',
    description: 'The main control panel where users can toggle the app theme, enable/disable the global Floating Edge Panel, configure their on-device Google Gemini API Key, and select target AI models.',
    category: 'settings',
    color: 'var(--color-sprout-sticker)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  },
  {
    title: 'Edge Panel Settings',
    filename: '/edge_panel_settings.png',
    description: 'Customization page for the system-wide widget, allowing users to select left/right anchoring and vertical alignment offsets.',
    category: 'settings',
    color: 'var(--color-bubblegum-sticker)',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1'
  }
];

function getAspectClass(imagePath: string) {
  if (imagePath.includes('active_search') || imagePath.includes('search')) {
    return 'aspect-[4/3]';
  }
  return 'aspect-[3/4]';
}

export default function ScreensGallery() {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'core' | 'ocr' | 'voice' | 'storage' | 'settings'>('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Filtered screens
  const filteredScreens = activeFilter === 'all' 
    ? appScreens 
    : appScreens.filter(screen => screen.category === activeFilter);

  // GSAP scroll trigger entries
  useEffect(() => {
    gridItemsRef.current = gridItemsRef.current.slice(0, filteredScreens.length);
    
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === sectionRef.current) t.kill();
    });

    const items = gridItemsRef.current.filter(Boolean);
    if (items.length === 0) return;

    gsap.fromTo(items, 
      { opacity: 0, y: 40, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 20%',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out'
      }
    );
  }, [filteredScreens, activeFilter]);

  // Slideshow play/pause mechanism
  useEffect(() => {
    if (!isPlaying || selectedScreenIndex === null) {
      setSlideProgress(0);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const intervalStep = 100; // ms
    const totalDuration = 4000; // 4 seconds per slide
    let elapsed = 0;

    progressTimerRef.current = setInterval(() => {
      elapsed += intervalStep;
      const progress = Math.min((elapsed / totalDuration) * 100, 100);
      setSlideProgress(progress);

      if (elapsed >= totalDuration) {
        // Trigger next slide
        elapsed = 0;
        setSlideProgress(0);
        setSelectedScreenIndex((prevIndex) => {
          if (prevIndex === null) return null;
          const currentFilteredIndex = filteredScreens.findIndex(s => s.filename === appScreens[prevIndex].filename);
          const nextFilteredIndex = (currentFilteredIndex + 1) % filteredScreens.length;
          return appScreens.findIndex(s => s.filename === filteredScreens[nextFilteredIndex].filename);
        });
      }
    }, intervalStep);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying, selectedScreenIndex, filteredScreens]);

  // Keyboard navigation controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedScreenIndex === null) return;
      if (e.key === 'ArrowRight') {
        const currentFilteredIdx = filteredScreens.findIndex(s => s.filename === appScreens[selectedScreenIndex].filename);
        const nextFilteredIdx = (currentFilteredIdx + 1) % filteredScreens.length;
        setSelectedScreenIndex(appScreens.findIndex(s => s.filename === filteredScreens[nextFilteredIdx].filename));
      } else if (e.key === 'ArrowLeft') {
        const currentFilteredIdx = filteredScreens.findIndex(s => s.filename === appScreens[selectedScreenIndex].filename);
        const prevFilteredIdx = (currentFilteredIdx - 1 + filteredScreens.length) % filteredScreens.length;
        setSelectedScreenIndex(appScreens.findIndex(s => s.filename === filteredScreens[prevFilteredIdx].filename));
      } else if (e.key === 'Escape') {
        setSelectedScreenIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedScreenIndex, filteredScreens]);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false); // Stop slideshow on manual nav
    if (selectedScreenIndex === null) return;
    const currentFilteredIdx = filteredScreens.findIndex(s => s.filename === appScreens[selectedScreenIndex].filename);
    const nextFilteredIdx = (currentFilteredIdx + 1) % filteredScreens.length;
    setSelectedScreenIndex(appScreens.findIndex(s => s.filename === filteredScreens[nextFilteredIdx].filename));
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false); // Stop slideshow on manual nav
    if (selectedScreenIndex === null) return;
    const currentFilteredIdx = filteredScreens.findIndex(s => s.filename === appScreens[selectedScreenIndex].filename);
    const prevFilteredIdx = (currentFilteredIdx - 1 + filteredScreens.length) % filteredScreens.length;
    setSelectedScreenIndex(appScreens.findIndex(s => s.filename === filteredScreens[prevFilteredIdx].filename));
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-[var(--color-cream-paper)] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-[var(--color-shadow-mist)] text-[var(--color-cocoa-ink)] bg-[var(--color-dew-drop)]">
            📸 Product Tour
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-[var(--color-true-black)]" style={{ fontFamily: 'var(--font-geist)' }}>
            App Showcase
          </h2>
          <p className="text-xl text-[var(--color-charcoal)] opacity-75 max-w-2xl mx-auto">
            Click on any screenshot card to open the interactive walkthrough viewer and examine high-fidelity details.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {(['all', 'core', 'ocr', 'voice', 'storage', 'settings'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setIsPlaying(false);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[var(--color-marker-orange)] border-[var(--color-marker-orange)] text-white shadow-sm'
                  : 'bg-[var(--color-cream-paper)] border-[var(--color-shadow-mist)] text-[var(--color-charcoal)] hover:bg-[var(--color-dew-drop)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px] md:auto-rows-[250px]">
          {filteredScreens.map((screen, index) => {
            const globalIndex = appScreens.findIndex(s => s.filename === screen.filename);
            
            // Layout spans logic based on screen index for Bento visual spacing (applied only in 'all' view for design sanity)
            const colSpan = activeFilter === 'all' ? screen.colSpanClass : 'col-span-1';
            const rowSpan = activeFilter === 'all' ? screen.rowSpanClass : 'row-span-1';

            return (
              <motion.div
                key={screen.filename}
                ref={(el) => {
                  gridItemsRef.current[index] = el;
                }}
                onClick={() => {
                  setSelectedScreenIndex(globalIndex);
                  setIsPlaying(false);
                }}
                className={`group relative cursor-pointer rounded-3xl overflow-hidden bg-[var(--color-dew-drop)] border border-[var(--color-shadow-mist)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5 ${colSpan} ${rowSpan}`}
                style={{ borderTop: `4px solid ${screen.color}` }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Image Wrap */}
                <div className="relative w-full h-full overflow-hidden bg-stone-900 flex-grow">
                  <Image
                    src={screen.filename}
                    alt={screen.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500 pointer-events-none"
                    sizes="(max-w-768px) 50vw, 400px"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white text-xs font-semibold tracking-wide bg-[var(--color-marker-orange)] w-max px-3 py-1 rounded-full shadow-md mb-2">
                      🔍 Zoom View
                    </span>
                    <h4 className="text-white font-semibold text-lg drop-shadow-sm">{screen.title}</h4>
                  </div>
                </div>

                {/* Footer text of bento card */}
                <div className="p-4 bg-[var(--color-cream-paper)] border-t border-stone-100 flex-shrink-0 flex items-center justify-between">
                  <span className="font-semibold text-sm text-[var(--color-true-black)] truncate">
                    {screen.title}
                  </span>
                  <span className="text-[10px] opacity-60 uppercase font-bold tracking-wider text-[var(--color-cocoa-ink)]">
                    {screen.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View on GitHub Footer */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/hanan-bhatti/second-brain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-lg font-semibold text-[var(--color-marker-orange)] transition-all hover:gap-2 group"
          >
            <span>Explore repository markdown guide</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Full screen Lightbox overlay */}
        <AnimatePresence>
          {selectedScreenIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedScreenIndex(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              
              {/* Main Lightbox glassmorphism card modal */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()} 
                className="backdrop-blur-xl bg-neutral-900/90 text-white rounded-[2rem] shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row h-[85vh] md:h-[70vh] cursor-default border border-neutral-800 relative"
              >
                
                {/* Progress bar for autoplay */}
                {isPlaying && (
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-white/10 z-30">
                    <motion.div 
                      className="h-full bg-[var(--color-marker-orange)]"
                      style={{ width: `${slideProgress}%` }}
                    />
                  </div>
                )}

                {/* Left Side: Interactive image displaying the screen */}
                <div className="flex-1 bg-black/50 relative flex justify-center items-center p-6 h-[50%] md:h-full select-none">
                  
                  {/* Nav button Prev */}
                  <button
                    onClick={showPrev}
                    className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer z-10 font-bold border border-white/5"
                    title="Previous (Left Arrow)"
                  >
                    ←
                  </button>

                  {/* Dynamic image container matching aspect ratio */}
                  <div className={`relative h-full w-full transition-all duration-300 ${appScreens[selectedScreenIndex].filename === '/active_search.png' ? 'aspect-[4/3] max-w-[520px]' : 'aspect-[3/4] max-w-[390px]'}`}>
                    <Image
                      src={appScreens[selectedScreenIndex].filename}
                      alt={appScreens[selectedScreenIndex].title}
                      fill
                      className="object-contain pointer-events-none rounded-xl"
                      priority
                    />
                  </div>

                  {/* Nav button Next */}
                  <button
                    onClick={showNext}
                    className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer z-10 font-bold border border-white/5"
                    title="Next (Right Arrow)"
                  >
                    →
                  </button>
                  
                </div>

                {/* Right Side: Description and Controls */}
                <div className="w-full md:w-[360px] p-8 flex flex-col justify-between h-[50%] md:h-full border-t md:border-t-0 md:border-l border-neutral-800 bg-neutral-950/40">
                  <div>
                    {/* Category Label */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-white bg-[var(--color-marker-orange)]">
                        {appScreens[selectedScreenIndex].category}
                      </span>
                      <button 
                        onClick={() => setSelectedScreenIndex(null)}
                        className="text-stone-400 hover:text-white transition-colors text-lg cursor-pointer"
                        title="Close Modal (Esc)"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white leading-tight" style={{ fontFamily: 'var(--font-geist)' }}>
                      {appScreens[selectedScreenIndex].title}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-300 leading-relaxed text-sm md:text-base">
                      {appScreens[selectedScreenIndex].description}
                    </p>
                  </div>

                  {/* Controls & Nav stats */}
                  <div className="border-t border-neutral-800 pt-6">
                    
                    {/* Top slide indicators & Autoplay controls */}
                    <div className="flex items-center justify-between mb-6">
                      
                      {/* Play/Pause Autoplay button */}
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer border transition-all ${
                          isPlaying 
                            ? 'bg-neutral-800 border-neutral-700 text-[var(--color-marker-orange)]' 
                            : 'bg-transparent border-neutral-700 text-stone-300 hover:text-white'
                        }`}
                      >
                        <span>{isPlaying ? '⏸ Pause Autoplay' : '▶ Play Autoplay'}</span>
                      </button>

                      {/* Index display indicator */}
                      <span className="text-xs font-semibold text-stone-400">
                        {filteredScreens.findIndex(s => s.filename === appScreens[selectedScreenIndex].filename) + 1} / {filteredScreens.length}
                      </span>
                    </div>

                    {/* Closing button */}
                    <button
                      onClick={() => setSelectedScreenIndex(null)}
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:scale-102 active:scale-98 transition-all bg-[var(--color-marker-orange)] cursor-pointer"
                    >
                      Close Viewer
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
