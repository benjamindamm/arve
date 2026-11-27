import Link from 'next/link'
import type { Entry } from './published-documentation'

export function chapterTrail(entries: Entry[], current: string): Entry[] {
  for (const entry of entries) {
    if (entry.path === current) return [entry]
    const trail = chapterTrail(entry.children ?? [], current)
    if (trail.length) return [entry, ...trail]
  }
  return []
}
export function HandbookContext({ system, name, tree, current }: { system: string; name: string; tree: Entry[]; current: string }) {
  const trail = chapterTrail(tree, current)
  return <nav className="handbook-context" aria-label="Kapitelpfad"><ol><li><Link href={'/systems/' + encodeURIComponent(system)}>{name}</Link></li>{trail.map(entry => <li key={entry.path}><svg className="handbook-context-separator" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="m6 3 5 5-5 5"/></svg>{entry.path === current ? <span aria-current="page">{entry.title}</span> : <Link href={entry.path}>{entry.title}</Link>}</li>)}</ol></nav>
}
