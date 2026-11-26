import {EditorialBadge} from './editorial-page'
import Link from 'next/link'
import { HandbookNavigation } from './handbook-navigation'
import type { Entry } from './published-documentation'

function containsCurrent(entry: Entry, current?: string): boolean {
  return entry.path === current || !!entry.children?.some(child => containsCurrent(child, current))
}

function Branch({ entries, current }: { entries: Entry[]; current?: string }) {
  return (
    <ul className="docs-tree">
      {entries.filter(entry => !['/systems/shadcn/icons-bewegung', '/systems/shadcn/felder-und-fehlermeldungen', '/systems/shadcn/systemzustaende'].includes(entry.path)).map((entry) => (
        <li key={entry.path}>
          {entry.children?.length ? <details open={containsCurrent(entry, current)} key={current}>
            <summary>{entry.title}{entry.editorial&&<EditorialBadge compact editorial={entry.editorial}/>}</summary>
            <Link href={entry.path} aria-current={entry.path === current ? 'page' : undefined}>{entry.title} · Übersicht</Link>
            <Branch entries={entry.children} current={current} />
          </details> : <Link href={entry.path} aria-current={entry.path === current ? 'page' : undefined}>{entry.title}{entry.editorial&&<EditorialBadge compact editorial={entry.editorial}/>}</Link>}
        </li>
      ))}
    </ul>
  )
}

export function DocumentationNav({ system, tree, current }: { system: string; tree: Entry[]; current?: string }) {
  const home = '/systems/' + encodeURIComponent(system)
  const links = <><Link href={home} aria-current={home === current ? 'page' : undefined}>Übersicht</Link>
    <Branch entries={tree} current={current} /></>
  const chapters: { path: string; title: string; context: string; summary?: string }[] = []
  function collect(entries: Entry[], context = 'Handbuch') {
    entries.forEach(entry => { chapters.push({ path: entry.path, title: entry.title, context, summary: entry.summary }); collect(entry.children ?? [], context === 'Handbuch' ? entry.title : context + ' / ' + entry.title) })
  }
  collect(tree)
  return (
    <aside className="documentation-sidebar">
    <p className="handbook-nav-title">Handbuch</p>
    <HandbookNavigation chapters={chapters} current={current}>{links}</HandbookNavigation>
    <nav className="docs-nav docs-desktop-menu" aria-label="Dokumentation">
      {links}
    </nav>
    </aside>
  )
}
