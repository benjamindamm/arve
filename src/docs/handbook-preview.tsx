'use client'

import { useEffect, useId, useState, type ReactNode } from 'react'

type Props = { wide: ReactNode; narrow: ReactNode; interactive?: boolean; narrowLabel?: string; description?: string }
export function HandbookPreview({ wide, narrow, interactive = false, narrowLabel = 'Schmal', description }: Props) {
  const [mode, setMode] = useState<'wide' | 'narrow'>('wide')
  const id = useId()
  useEffect(() => {
    const reveal = () => {
      let hash = location.hash.slice(1)
      try { hash = decodeURIComponent(hash) } catch { return }
      const target = document.getElementById(hash)
      const panel = target?.closest('[data-preview-mode]') as HTMLElement | null
      if (panel?.dataset.previewGroup === id) { setMode(panel.dataset.previewMode as 'wide' | 'narrow'); requestAnimationFrame(() => target?.scrollIntoView()) }
    }
    reveal()
    window.addEventListener('hashchange', reveal)
    return () => window.removeEventListener('hashchange', reveal)
  }, [id])
  function chooseMode(next: 'wide' | 'narrow') {
    setMode(next)
    let hash = location.hash.slice(1)
    try { hash = decodeURIComponent(hash) } catch { return }
    const target = document.getElementById(hash)
    const panel = target?.closest('[data-preview-mode]') as HTMLElement | null
    // A width button leaves no stale link to a now-hidden example target.
    if (panel?.dataset.previewGroup === id && panel.dataset.previewMode !== next) {
      history.replaceState(history.state, '', location.pathname + location.search)
    }
  }
  return <div className="handbook-preview">
    <div className="handbook-preview-toolbar"><span>{description ?? (interactive ? 'Bedienbares Beispiel · lokal' : 'Layoutbeispiel · Sprunglinks und Klappen bedienbar')}</span><div role="group" aria-label="Vorschaubreite"><button aria-pressed={mode === 'wide'} aria-controls={id + '-wide'} onClick={() => chooseMode('wide')}>Breit</button><button aria-pressed={mode === 'narrow'} aria-controls={id + '-narrow'} onClick={() => chooseMode('narrow')}>{narrowLabel}</button></div></div>
    <p className="handbook-preview-hint">Beide Ansichten passen sich an den verfügbaren Platz im Fenster an.</p>
    <div id={id + '-wide'} data-preview-mode="wide" data-preview-group={id} hidden={mode !== 'wide'}>{wide}</div>
    <div id={id + '-narrow'} data-preview-mode="narrow" data-preview-group={id} hidden={mode !== 'narrow'}>{narrow}</div>
  </div>
}
