'use client'

import { useRef, useState, type KeyboardEvent } from 'react'

// Arbeitswege aus ui-contracts/README.md, references/reverse.md und tools/ux/WORKFLOW.md.
// Diese Ansicht erklärt die Zusammenarbeit; sie startet keine Agenten oder Prüfungen.
const workflows = [
  {
    id: 'entwerfen', label: 'Gemeinsam entwerfen',
    audience: 'Fachbereich · Design · Entwicklung',
    title: 'Von der Frage zum gemeinsamen Entwurf.',
    description: 'Im Workshop mit einem Agenten Ideen sichtbar machen und Entscheidungen früh klären.',
    steps: [
      ['Ziel klären', 'Das Team beschreibt die Aufgabe und wählt das Design-System.'],
      ['Entwurf erstellen', 'Der Agent nutzt passende Regeln für einen Design- oder Codeentwurf.'],
      ['Feedback geben', 'Das Team probiert den Entwurf aus und klärt offene Fragen.'],
      ['Wissen festhalten', 'Design pflegt Guidelines im CMS. Entwicklung versioniert die Contracts.'],
    ],
    result: 'Die nächste Aufgabe baut auf den gemeinsam geklärten Regeln auf.',
  },
  {
    id: 'umsetzen', label: 'Gezielt umsetzen',
    audience: 'Entwicklung · KI-Agent · Review',
    title: 'Von der Anforderung zur geprüften Umsetzung.',
    description: 'Mit UI Contracts passende Komponenten wählen, nach Vorgaben bauen und das Ergebnis abgleichen.',
    steps: [
      ['Passendes auswählen', 'Anforderung, Zielplattform und Regeln bestimmen die Komponentenwahl.'],
      ['Nach Vorgaben bauen', 'Der Agent lädt die benötigten Quellen und setzt die UI im Projekt um.'],
      ['Unabhängig prüfen', 'Das Ergebnis wird mit den Regeln verglichen. Fehler und Prüflücken bleiben sichtbar.'],
      ['Gezielt verbessern', 'Abweichungen beheben und die betroffenen Fälle erneut prüfen.'],
    ],
    result: 'Eine nachvollziehbare Umsetzung mit benanntem Quellen- und Prüfstand.',
  },
  {
    id: 'weiterentwickeln', label: 'Bestehendes weiterentwickeln',
    audience: 'Design · Entwicklung · Systemverantwortliche',
    title: 'Aus Design und Code wird gemeinsames Wissen.',
    description: 'Bestehende Arbeit als Ausgangspunkt nutzen und Änderungen bewusst in die Regeln übernehmen.',
    steps: [
      ['Bestand sichten', 'Der Agent gleicht Design oder Code mit vorhandenen Contracts ab.'],
      ['Lücken klären', 'Das Team entscheidet über Widersprüche und fehlende Regeln.'],
      ['Regeln aktualisieren', 'Bestätigte Änderungen bilden eine neue Contractrevision und passende Guidelines.'],
      ['Erneut abgleichen', 'Betroffene Umsetzungen prüfen und den neuen Stand veröffentlichen.'],
    ],
    result: 'Eure bestehende Bibliothek entwickelt sich mit nachvollziehbaren Entscheidungen weiter.',
  },
] as const

export function ArveWorkflows() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const workflow = workflows[active]

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
      <div className="platform-section-heading">
        <p className="platform-eyebrow">Zusammenarbeit mit UI Contracts</p>
        <h2 id="workflows-title">So wird aus Wissen Umsetzung.</h2>
      </div>
      <div className="platform-workflow-tabs" role="tablist" aria-label="Arbeitsweg wählen">
        {workflows.map(({ id, label }, index) => (
          <button key={id} type="button" role="tab" id={'tab-' + id} aria-controls={'panel-' + id}
            aria-selected={active === index} tabIndex={active === index ? 0 : -1}
            ref={element => { tabs.current[index] = element }}
            onClick={() => setActive(index)} onKeyDown={event => onKeyDown(event, index)}>
            <span aria-hidden="true">0{index + 1}</span>{label}
          </button>
        ))}
      </div>
      {workflows.map(({ id }, index) => (
        <div key={id} id={'panel-' + id} role="tabpanel" aria-labelledby={'tab-' + id}
          hidden={active !== index} tabIndex={0} className="platform-workflow-panel">
          {active === index && <>
            <div className="platform-workflow-heading">
              <div><h3>{workflow.title}</h3><p>{workflow.description}</p></div>
              <p className="platform-workflow-audience">{workflow.audience}</p>
            </div>
            <ol className="platform-workflow-steps">
              {workflow.steps.map(([title, description], step) => (
                <li key={title}><span className="platform-step-index" aria-hidden="true">{step + 1}<span>→</span></span><h4>{title}</h4><p>{description}</p></li>
              ))}
            </ol>
            <p className="platform-workflow-result"><span>Ergebnis</span>{workflow.result}</p>
          </>}
        </div>
      ))}
      <p className="platform-workflow-note">Der Agent arbeitet in euren Design- und Entwicklungswerkzeugen. Arve stellt die veröffentlichten Vorgaben bereit.</p>
    </section>
  )
}
