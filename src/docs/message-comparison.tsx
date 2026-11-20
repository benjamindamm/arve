import type { Page } from '../payload-types'
import './workflow-study.css'

type ComparisonBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'messageComparison' }>
export function MessageComparison({ title, items }: ComparisonBlock) {
  return <section className="message-comparison"><h2>{title}</h2>
    {items.map((item, index) => <section className="message-case" key={item.id ?? index}>
      <h3>{item.context}</h3>
      <dl className="message-pair">
        <div><dt>Unklar oder unbelegt</dt><dd>{item.before}</dd></div>
        <div><dt>Passend unter dieser Bedingung</dt><dd>{item.after}</dd></div>
      </dl>
      <p className="message-reason">{item.reason}</p>
    </section>)}
  </section>
}
