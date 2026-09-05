'use client'

import { useState } from 'react'
import { Check, Clipboard, GitBranch, ArrowUpRight } from 'lucide-react'

const command = 'git clone https://github.com/hanan-bhatti/second-brain.git'

export default function OpenSource() {
  const [copied, setCopied] = useState(false)
  const copyCommand = async () => { await navigator.clipboard.writeText(command); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
  return <section id="open-source" className="px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-5xl rounded-[2rem] bg-[var(--color-charcoal)] p-8 text-white md:p-14"><div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><div className="mb-7 grid size-12 place-items-center rounded-2xl bg-[var(--color-marker-orange)]"><GitBranch aria-hidden="true" /></div><p className="font-mono text-xs uppercase tracking-[.22em] text-orange-200">Open source by design</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-.04em] md:text-6xl">See how your second brain is built.</h2><p className="mt-5 max-w-xl leading-7 text-white/65">Read the source, inspect the architecture, follow releases, or contribute improvements. The repository is licensed under AGPL-3.0.</p></div><a href="https://github.com/hanan-bhatti/second-brain" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-marker-orange)] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5">View repository <ArrowUpRight aria-hidden="true" /></a></div><div className="mt-10 flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-3 font-mono text-xs text-white/75"><span className="min-w-0 flex-1 truncate">{command}</span><button type="button" onClick={copyCommand} className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white transition-colors hover:bg-white/20">{copied ? <Check aria-hidden="true" /> : <Clipboard aria-hidden="true" />} {copied ? 'Copied' : 'Copy'}</button></div></div></section>
}
