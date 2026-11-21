import { SiteAnchor } from '../site-anchor'
import type { Page } from '../../payload-types'
import { frameworkReferences } from '../framework-references'
import { Content } from '../content'
import '../reference-catalogue.css'
export default function Frameworks({ content }: { content: Page['content'] }) {
  const refs = frameworkReferences(content)
  return <div className="framework-reference-page">
    <Content blocks={content?.filter(block => block.blockName === 'framework-scope')} />
    <div className="framework-reference-list">{refs.map(ref => <section key={ref.id} id={'framework-' + ref.id}>
      <div><h2><SiteAnchor href={ref.sourceUrl}>{ref.name} ↗</SiteAnchor></h2><p>{ref.framework} · {ref.platforms.join(' / ')}</p><small>{ref.relationship}</small></div>
      <p>{ref.scope}</p><small>Quelle geprüft: {ref.checkedAt}</small>
    </section>)}</div>
  </div>
}
