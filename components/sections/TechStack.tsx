import { Cloud, Database, FileCode2, Smartphone, WandSparkles } from 'lucide-react'

const tools = [
  { name: 'Kotlin', note: 'Android language', icon: FileCode2 },
  { name: 'Jetpack Compose', note: 'Material 3 UI', icon: Smartphone },
  { name: 'Room', note: 'Local database', icon: Database },
  { name: 'Firebase', note: 'Sync and backup', icon: Cloud },
  { name: 'Gemini API', note: 'OCR and transcription', icon: WandSparkles },
]

export default function TechStack() {
  return <section className="px-6 py-24 md:px-12 md:py-32"><div className="mx-auto max-w-6xl"><div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-start"><div><p className="font-mono text-xs uppercase tracking-[.22em] text-[var(--color-burnt-sienna)]">Under the hood</p><h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-.05em] md:text-6xl">Simple foundations.<br />Useful intelligence.</h2></div><div><p className="max-w-xl text-lg leading-8 text-[var(--color-muted-foreground)]">The project combines a local-first Android architecture with cloud sync and opt-in Gemini features. The result is fast capture without pretending the network is always there.</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{tools.map(({ name, note, icon: Icon }) => <div key={name} className="flex items-center gap-4 rounded-2xl border border-[var(--color-shadow-mist)] bg-[var(--color-dew-drop)] p-5"><Icon aria-hidden="true" className="text-[var(--color-marker-orange)]" /><div><p className="font-semibold">{name}</p><p className="text-sm text-[var(--color-muted-foreground)]">{note}</p></div></div>)}</div></div></div></div></section>
}
