import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Page } from '../../payload-types'
import { blockAnchor } from '../content-outline'

export default function FoundationsWayfinder({ content }: { content: Page['content'] }) {
  return <div>{(content ?? []).map((block, index) => block.blockType === 'text'
    ? <section key={block.id ?? index} id={blockAnchor(block)}><RichText data={block.body}/></section>
    : null)}</div>
}
