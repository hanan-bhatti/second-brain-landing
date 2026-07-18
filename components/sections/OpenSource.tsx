'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function OpenSource() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('git clone https://github.com/hanan-bhatti/second-brain.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-[var(--color-cream-paper)]">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[140px] opacity-15 pointer-events-none bg-[var(--color-marker-orange)]" />

      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="p-10 md:p-16 rounded-[2.5rem] text-center border-2 shadow-[0_20px_40px_rgba(0,0,0,0.03)] bg-[var(--color-dew-drop)] border-[var(--color-marker-orange)]"
        >
          {/* GitHub Icon Badge */}
          <div className="w-16 h-16 rounded-full bg-[var(--color-marker-orange)]/10 flex items-center justify-center mx-auto mb-6 text-stone-900 shadow-inner">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--color-true-black)]" style={{ fontFamily: 'var(--font-geist)' }}>
            Free & Open Source
          </h2>

          <p className="text-lg text-[var(--color-charcoal)] opacity-85 max-w-lg mx-auto mb-6">
            Second Brain is fully open source under the{' '}
            <span className="font-semibold text-[var(--color-burnt-sienna)]">
              AGPL-3.0 License
            </span>
            . You can review the code, self-host the storage, and contribute back.
          </p>

          {/* Copyable Terminal Clone Command */}
          <div className="max-w-md mx-auto mb-10">
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--color-cream-paper)] rounded-2xl border border-[var(--color-shadow-mist)] text-left font-mono text-sm relative overflow-hidden group shadow-inner">
              <span className="text-[var(--color-cocoa-ink)] truncate pr-4">
                git clone https://github.com/hanan-bhatti/second-brain.git
              </span>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[var(--color-marker-orange)] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm"
              >
                {copied ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>
          </div>

          {/* GitHub CTA Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/hanan-bhatti/second-brain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all shadow-md bg-[var(--color-marker-orange)] hover:shadow-lg"
              >
                View Repository
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/hanan-bhatti/second-brain/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all border-[var(--color-marker-orange)] text-[var(--color-marker-orange)] hover:bg-[var(--color-cream-paper)]"
              >
                Read AGPL License
              </Link>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
