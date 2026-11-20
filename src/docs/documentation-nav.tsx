import Link from 'next/link'
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
            <summary>{entry.title}</summary>
            <Link href={entry.path} aria-current={entry.path === current ? 'page' : undefined}>{entry.title} · Übersicht</Link>
            <Branch entries={entry.children} current={current} />
          </details> : <Link href={entry.path} aria-current={entry.path === current ? 'page' : undefined}>{entry.title}</Link>}
        </li>
      ))}
    </ul>
  )
}

export function DocumentationNav({ system, tree, current }: { system: string; tree: Entry[]; current?: string }) {
  const home = '/systems/' + encodeURIComponent(system)
  const links = <><Link href={home} aria-current={home === current ? 'page' : undefined}>Übersicht</Link>
    <Branch entries={tree} current={current} /></>
  return (
    <aside className="documentation-sidebar">
    <details className="docs-mobile-menu" key={current}>
      <summary>Handbuch durchsuchen</summary>
      <nav className="docs-nav" aria-label="Dokumentation">{links}</nav>
    </details>
    <nav className="docs-nav docs-desktop-menu" aria-label="Dokumentation">
      {links}
    </nav>
    </aside>
  )
}
