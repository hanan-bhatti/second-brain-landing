'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 px-6 bg-[var(--color-cream-paper)] border-t border-[var(--color-shadow-mist)] relative overflow-hidden">
      
      {/* Background soft lighting glow */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full blur-[160px] opacity-10 pointer-events-none bg-[var(--color-marker-orange)]" />
      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] rounded-full blur-[140px] opacity-5 pointer-events-none bg-[var(--color-sky-sticker)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand block (spans 4 columns) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl font-bold bg-[var(--color-marker-orange)] text-white shadow-sm">
                  🧠
                </div>
                <span className="text-2xl font-bold text-[var(--color-true-black)] tracking-tight" style={{ fontFamily: 'var(--font-geist)' }}>
                  Second Brain
                </span>
              </div>
              <p className="text-base text-[var(--color-charcoal)] opacity-75 max-w-sm leading-relaxed mb-6">
                A system-wide overlay capture service and personal knowledge repository built for developers who capture everything.
              </p>
            </div>
            
            {/* Quick Status Tags */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--color-cocoa-ink)] border border-[var(--color-shadow-mist)] bg-[var(--color-dew-drop)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Offline Cache Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--color-cocoa-ink)] border border-[var(--color-shadow-mist)] bg-[var(--color-dew-drop)]">
                🤖 Gemini AI OCR
              </span>
            </div>
          </div>

          {/* Directory Links Grid (spans 7 columns) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Repository */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest text-[var(--color-cocoa-ink)] mb-6">
                Repository
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'GitHub Source', url: 'https://github.com/hanan-bhatti/second-brain' },
                  { name: 'Issue Tracker', url: 'https://github.com/hanan-bhatti/second-brain/issues' },
                  { name: 'Discussions Hub', url: 'https://github.com/hanan-bhatti/second-brain/discussions' },
                  { name: 'Releases Log', url: 'https://github.com/hanan-bhatti/second-brain/releases' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-charcoal)] opacity-70 hover:opacity-100 hover:text-[var(--color-marker-orange)] transition-all flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Ecosystem */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest text-[var(--color-cocoa-ink)] mb-6">
                Ecosystem
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'AGPL-3.0 License', url: 'https://github.com/hanan-bhatti/second-brain/blob/main/LICENSE' },
                  { name: 'Contributor Guide', url: 'https://github.com/hanan-bhatti/second-brain' },
                  { name: 'Local SQLite Sync', url: 'https://github.com/hanan-bhatti/second-brain' },
                  { name: 'Firebase Cloud', url: 'https://github.com/hanan-bhatti/second-brain' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-charcoal)] opacity-70 hover:opacity-100 hover:text-[var(--color-marker-orange)] transition-all flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Developer Info */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest text-[var(--color-cocoa-ink)] mb-6">
                Developer
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Hanan Bhatti Profile', url: 'https://github.com/hanan-bhatti' },
                  { name: 'Star Repository', url: 'https://github.com/hanan-bhatti/second-brain/stargazers' },
                  { name: 'Submit Feedback', url: 'https://github.com/hanan-bhatti/second-brain/issues/new' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-charcoal)] opacity-70 hover:opacity-100 hover:text-[var(--color-marker-orange)] transition-all flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Dynamic Massive Logo Silhouette Header */}
        <div className="relative pointer-events-none select-none border-t border-[var(--color-shadow-mist)] pt-12 mt-12 mb-8">
          <h2 className="text-[7.5vw] font-bold text-center tracking-tighter uppercase leading-none bg-gradient-to-b from-[var(--color-true-black)] to-[var(--color-charcoal)] bg-clip-text text-transparent opacity-10">
            Second Brain
          </h2>
        </div>

        {/* Footer Bottom Block */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-semibold text-[var(--color-charcoal)] opacity-60 pt-6 border-t border-stone-100">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 mb-4 sm:mb-0">
            <p>© {currentYear} Second Brain. All rights reserved.</p>
            <span className="hidden sm:inline-block text-stone-300">•</span>
            <p>Built with Jetpack Compose & Kotlin</p>
          </div>
          
          {/* Scroll to Top button */}
          <button
            onClick={handleBackToTop}
            className="px-5 py-2 rounded-full border border-[var(--color-shadow-mist)] bg-[var(--color-dew-drop)] hover:bg-white hover:border-[var(--color-marker-orange)] hover:text-[var(--color-marker-orange)] transition-all cursor-pointer flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
