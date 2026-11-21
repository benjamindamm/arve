import { SiteAnchor } from './site-anchor'
import type { ComponentNextStepsData } from './component-next-steps-data'
import './component-next-steps.css'

export function ComponentNextSteps({ data }: { data: ComponentNextStepsData }) {
  return <section id={data.id} className="component-next-steps" aria-labelledby={`${data.id}-title`}>
    <h2 id={`${data.id}-title`}>{data.title}</h2>
    <ol>
      {data.steps.map(step => <li key={step.id}>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
        <ul>{step.links.map(link => <li key={link.href}>
          <SiteAnchor href={link.href} download={link.download}>{link.label}</SiteAnchor>
          {link.scope && <small>{link.scope}</small>}
        </li>)}</ul>
      </li>)}
    </ol>
    {data.steps.some(step => step.scope) && <details>
      <summary>{data.scopeTitle}</summary>
      {data.steps.filter(step => step.scope).map(step => <p key={step.id}>{step.scope}</p>)}
    </details>}
  </section>
}
