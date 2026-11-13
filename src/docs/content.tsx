import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Page } from '../payload-types'

type Block = NonNullable<Page['content']>[number]
type ContentBlock = Extract<Block, { blockType: 'text' }> |
  (Omit<Extract<Block, { blockType: 'guideline' }>, 'image'> & {
    image?: number | { url?: string | null; alt: string } | null
  })

export function Content({ blocks }: { blocks?: ContentBlock[] | null }) {
  return blocks?.map((block, index) => {
    const key = block.id ?? index
    if (block.blockType === 'text') {
      return <RichText key={key} data={block.body} className="rich-text" />
    }

    const image = typeof block.image === 'object' ? block.image : null
    return (
      <figure key={key} className={'guideline guideline-' + block.recommendation}>
        <strong>{block.recommendation === 'do' ? 'Do' : 'Don’t'}</strong>
        {image?.url && <img src={image.url} alt={image.alt} />}
        <figcaption>{block.explanation}</figcaption>
      </figure>
    )
  })
}
