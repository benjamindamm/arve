import type { Page } from '../../payload-types'
import { Content } from '../content'
import { RichText } from '../rich-text'

export default function SystemStatesGuide({ content }: { content: Page['content'] }) {
  const blocks = content ?? []
  const historyIndex = blocks.findIndex(block => block.blockName === 'state-history')
  const history = blocks[historyIndex]
  const summaryChildren = history?.blockType === 'text' ? history.body.root.children[0]?.children : undefined
  return <>
    <Content blocks={historyIndex < 0 ? blocks : blocks.slice(0, historyIndex)} />
    {history?.blockType === 'text' && <details>
      <summary>{Array.isArray(summaryChildren) ? summaryChildren.map((node: { text?: string }) => node.text ?? '').join('') : ''}</summary>
      <RichText data={{ ...history.body, root: { ...history.body.root, children: history.body.root.children.slice(1) } }} />
      <Content blocks={blocks.slice(historyIndex + 1)} />
    </details>}
  </>
}
