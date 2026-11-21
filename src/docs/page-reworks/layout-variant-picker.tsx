'use client'

import { useEffect, useState, type ReactNode } from 'react'
import './layout-variant-picker.css'

type Variant = { id: string; title: string; purpose: string; kind: string; content: ReactNode }
/** Panels remain mounted, preserving source anchors and local example state. */
export function LayoutVariantPicker({ variants, compact = false, legend = 'Variante wählen · statische Beispiele' }: { variants: Variant[]; compact?: boolean; legend?: string }) {
  const [selected, setSelected] = useState<string | undefined>(variants[0]?.id)
  useEffect(() => {
    const reveal = () => {
      let hash = window.location.hash.slice(1)
      try { hash = decodeURIComponent(hash) } catch { /* A malformed external fragment is not a variant. */ }
      const target = document.getElementById(hash)
      const panel = target?.closest<HTMLElement>('[data-layout-variant]')
      if (panel) {
        setSelected(panel.dataset.layoutVariant)
        requestAnimationFrame(() => target?.scrollIntoView({ block: 'start' }))
      }
    }
    reveal()
    window.addEventListener('hashchange', reveal)
    return () => window.removeEventListener('hashchange', reveal)
  }, [])
  return <div className={`layout-variant-picker${compact ? ' lvp-compact' : ''}`}>
    <fieldset className="lvp-options"><legend>{legend}</legend>
      {variants.map(v => <button type="button" key={v.id} aria-pressed={selected === v.id} aria-controls={v.id} onClick={() => { setSelected(v.id); window.history.replaceState(window.history.state, '', `#${v.id}`) }}>
        {!compact && <span className={`lvp-schema lvp-${v.kind}`} aria-hidden="true"><i/><i/><i/></span>}
        <strong>{v.title}</strong>{v.purpose && <span className="lvp-purpose">{v.purpose}</span>}
      </button>)}
    </fieldset>
    {variants.map(v => <div key={v.id} data-layout-variant={v.id} hidden={selected !== v.id}>{v.content}</div>)}
  </div>
}
