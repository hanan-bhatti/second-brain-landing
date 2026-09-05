import { ArrowUpRight } from 'lucide-react'

const links = [
  ['Repository', 'https://github.com/hanan-bhatti/second-brain'],
  ['Releases', 'https://github.com/hanan-bhatti/second-brain/releases'],
  ['Issues', 'https://github.com/hanan-bhatti/second-brain/issues'],
  ['License', 'https://github.com/hanan-bhatti/second-brain/blob/main/LICENSE'],
]

export default function Footer() {
  return <footer className="border-t border-[var(--color-shadow-mist)] px-6 py-12 md:px-12"><div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><a href="#top" className="flex items-center gap-3 font-semibold tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-[var(--color-marker-orange)] text-sm text-white">2B</span>Second Brain</a><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--color-muted-foreground)]">A personal knowledge archive for Android, built around fast capture and offline resilience.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--color-muted-foreground)]">{links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[var(--color-marker-orange)]">{label}<ArrowUpRight aria-hidden="true" /></a>)}</div></div><div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-[var(--color-shadow-mist)] pt-5 text-xs text-[var(--color-muted-foreground)] sm:flex-row sm:justify-between"><span>AGPL-3.0 licensed open-source project</span><span>© {new Date().getFullYear()} Second Brain</span></div></footer>
}
