'use client'
import { SiteAnchor } from './site-anchor'


import { useEffect, useRef, useState } from 'react'

// Read only rendered handbook section anchors; example headings never enter this index.
export function HandbookOutline({ initiallyCollapsed = false }: { initiallyCollapsed?: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const marker = useRef<HTMLElement>(null)
  const [headings, setHeadings] = useState<{ id: string; title: string }[]>([])
  useEffect(() => {
    setExpanded(!initiallyCollapsed && !window.matchMedia('(max-width: 600px)').matches)
    const article = marker.current?.closest('article')
    if (!article) return
    const seen = new Set<string>()
    const entries = Array.from(article.querySelectorAll<HTMLElement>('[id^="abschnitt-"], article > section.component-section[id]')).flatMap(section => {
      if (section.closest('figure, .handbook-preview')) return []
      const heading = section.querySelector('h2')
      const title = section.tagName === 'DETAILS' ? section.querySelector(':scope > summary')?.textContent : heading?.textContent
      if (!title || !section.id || seen.has(section.id)) return []
      seen.add(section.id)
      return [{ id: section.id, title: title.trim() }]
    })
    setHeadings(entries)
  }, [initiallyCollapsed])
  return <nav ref={marker} className="content-outline handbook-outline" aria-label="Auf dieser Seite" hidden={headings.length < 4}><details open={expanded} onToggle={event => setExpanded(event.currentTarget.open)}><summary>Auf dieser Seite <span>{headings.length} Abschnitte</span></summary><ol>{headings.map(({ id, title }) => <li key={id}><SiteAnchor href={'#' + id}>{title}</SiteAnchor></li>)}</ol></details></nav>
}
