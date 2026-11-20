'use client'

import { useRef, useState, type KeyboardEvent } from 'react'

const workflows = [
  { id: 'designs', label: 'Aus bestehenden Designs', description: 'Der Agent analysiert vorhandene Entwürfe und erkennt wiederkehrende Komponenten, Layouts und Muster. Daraus schlägt er eine Gliederung und erste Handbuchseiten vor. Das Team entscheidet, welche Muster als gemeinsame Regeln gelten.' },
  { id: 'gespraech', label: 'Im Gespräch mit dem Agenten', description: 'Das Team beschreibt eine Bedienregel in eigenen Worten: «Beim Speichern soll ein zweiter Klick keine weitere Anfrage auslösen.» Der Agent fragt nach offenen Fällen, etwa was bei einem Fehler passiert. Aus den Antworten formuliert er eine verständliche Richtlinie und einen prüfbaren UI Contract.' },
  { id: 'ziele', label: 'Von Zielen zum Aufbau', description: 'Das Team nennt ein Ziel: «Unsere Formulare sollen auf dem Smartphone leichter zu bedienen sein.» Der Agent schlägt passende Layouts, Komponenten und Bedienmuster vor und zeigt, welche Regeln das Handbuch dafür braucht. Das Team wählt aus, was es weiter ausarbeiten will.' },
]

export function ArveWorkflows() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === 'ArrowRight' ? (index + 1) % workflows.length
      : event.key === 'ArrowLeft' ? (index + workflows.length - 1) % workflows.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? workflows.length - 1 : null
    if (next === null) return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="workflows" className="shell platform-workflows" aria-labelledby="workflows-title">
      <h2 id="workflows-title">Wie das Handbuch entsteht</h2>
      <p className="platform-workflows-intro">
        Ein bestehendes Design, eine mündlich formulierte Regel oder ein Ziel reichen als Ausgangspunkt.
        Der Agent macht daraus einen Vorschlag, den das Team prüft und ins Handbuch übernimmt.
      </p>
      <div className="platform-workflow-tabs" role="tablist" aria-label="Arbeitsweg wählen">
        {workflows.map(({ id, label }, index) => (
          <button key={id} type="button" role="tab" id={'tab-' + id} aria-controls={'panel-' + id}
            aria-selected={active === index} tabIndex={active === index ? 0 : -1}
            ref={element => { tabs.current[index] = element }}
            onClick={() => setActive(index)} onKeyDown={event => onKeyDown(event, index)}>
            {label}
          </button>
        ))}
      </div>
      {workflows.map(({ id, label, description }, index) => (
        <div key={id} id={'panel-' + id} role="tabpanel" aria-labelledby={'tab-' + id}
          hidden={active !== index} tabIndex={0} className="platform-workflow-panel">
          <h3>{label}</h3>
          <p>{description}</p>
        </div>
      ))}
    </section>
  )
}
