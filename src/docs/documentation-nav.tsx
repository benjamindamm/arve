import Link from 'next/link'
import type { Entry } from './published-documentation'

function Branch({ entries, current }: { entries: Entry[]; current?: string }) {
  return (
    <ul className="docs-tree">
      {entries.map((entry) => (
        <li key={entry.path}>
          <Link href={entry.path} aria-current={entry.path === current ? 'page' : undefined}>{entry.title}</Link>
          {!!entry.children?.length && <Branch entries={entry.children} current={current} />}
        </li>
      ))}
    </ul>
  )
}

export function DocumentationNav({ system, tree, current }: { system: string; tree: Entry[]; current?: string }) {
  const home = '/systems/' + encodeURIComponent(system)
  return (
    <nav className="docs-nav" aria-label="Dokumentation">
      <Link href={home} aria-current={home === current ? 'page' : undefined}>Übersicht</Link>
      <Branch entries={tree} current={current} />
    </nav>
  )
}
