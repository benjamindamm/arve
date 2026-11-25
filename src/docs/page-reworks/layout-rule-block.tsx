import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import './layout-rule-block.css'

type Block = NonNullable<Page['content']>[number]
type TextBlock = Extract<Block, { blockType: 'text' }>
/** Keep the original rich-text nodes, links and order; only change their visual grouping. */
export function LayoutRuleBlock({ block, labels, anchorPrefix='' }: { block: TextBlock; labels?: string[]; anchorPrefix?:string }) {
  const nodes = block.body.root.children
  const heading = nodes[0]?.type === 'heading' ? nodes.slice(0, 1) : []
  const body = nodes.slice(heading.length)
  let number = 0
  const render = (children: typeof nodes) => <RichText data={{ ...block.body, root: { ...block.body.root, children } }} />
  return <section id={anchorPrefix+blockAnchor(block)} className="layout-rule-block">
    {render(heading)}
    <div className="lrb-rules">{body.map((node, index) => {
      const isReference = Array.isArray(node.children) && node.children.some((child: { type?: string }) => child.type === 'link')
      if (!isReference) number++
      return <div className={`lrb-rule${isReference ? ' lrb-reference' : ''}`} key={index}>
      <span className="lrb-marker" aria-hidden="true">{isReference ? '↗' : String(number).padStart(2, '0')}</span>
      <div>{labels?.[index] && <h3 className="lrb-label">{labels[index]}</h3>}{render([node])}</div>
    </div>})}</div>
  </section>
}
