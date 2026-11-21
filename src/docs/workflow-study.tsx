import type { Page } from '../payload-types'
import './workflow-study.css'

type WorkflowBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'workflowStudy' }>
const toneLabels = { normal: 'Schritt', attention: 'Klärung oder Korrektur', success: 'Ergebnis' }

/** All domain content comes from the published CMS block, also returned by MCP. */
export function WorkflowStudy({ title, summary, steps, caption, source }: WorkflowBlock) {
  return <figure className="workflow-study">
    <figcaption><p className="workflow-kicker">Ablauf verstehen</p><h2>{title}</h2><p>{summary}</p></figcaption>
    <ul className="workflow-steps">
      {steps.map((step, index) => <li key={step.id ?? `${step.key}-${index}`} className={`workflow-step workflow-${step.tone}`}>
        <p className="workflow-step-type">{toneLabels[step.tone]}</p>
        <h3>{step.title}</h3><p>{step.description}</p>
        {step.next && <p className="workflow-next"><strong>Weiter:</strong> {step.next}</p>}
      </li>)}
    </ul>
    <p className="workflow-caption">{caption}</p>
    <footer className="workflow-source">{source}</footer>
  </figure>
}
