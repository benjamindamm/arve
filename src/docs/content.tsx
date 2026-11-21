import { SiteAnchor } from './site-anchor'
import { blockAnchor } from './content-outline'
import { RichText } from './rich-text'
import { sitePath } from './site-path'
import type { Page } from '../payload-types'
import { MessageComparison } from './message-comparison'
import { WorkflowStudy } from './workflow-study'
import { ComponentStudy } from './component-studies'
import { FoundationStudy } from './foundation-studies'

type Block = NonNullable<Page['content']>[number]
type ContentBlock = Extract<Block, { blockType: 'text' | 'study' | 'componentStudy' | 'workflowStudy' | 'messageComparison' }> |
  (Omit<Extract<Block, { blockType: 'guideline' }>, 'image'> & {
    image?: number | { url?: string | null; alt: string } | null
  })

export function Content({ blocks }: { blocks?: ContentBlock[] | null }) {
  return blocks?.map((block, index) => {
    const key = block.id ?? index
    if (block.blockType === 'text') {
      return <RichText key={key} data={block.body} className="rich-text" />
    }
    if (block.blockType === 'study') {
      return <FoundationStudy key={key} kind={block.kind} title={block.title} explanation={block.explanation}
        source={block.source ?? undefined} revision={block.revision ?? undefined} />
    }

    if (block.blockType === 'componentStudy') {
      return <ComponentStudy key={key} kind={block.kind} title={block.title} explanation={block.explanation}
        source={block.source ?? undefined} revision={block.revision ?? undefined} />
    }

    if (block.blockType === 'workflowStudy') return <WorkflowStudy key={key} {...block} />

    if (block.blockType === 'messageComparison') return <MessageComparison key={key} {...block} />

    const image = typeof block.image === 'object' ? block.image : null
    return (
      <figure key={key} className={'guideline guideline-' + block.recommendation}>
        <strong>{block.recommendation === 'do' ? 'Do' : 'Don’t'}</strong>
        {image?.url && <img src={sitePath(image.url)} alt={image.alt} />}
        <figcaption>{block.explanation}</figcaption>
        {image?.url && <SiteAnchor href={image.url} target="_blank" rel="noreferrer">Abbildung vergrössern</SiteAnchor>}
      </figure>
    )
  })?.map((element, index) => <div key={blocks?.[index].id ?? index} className="handbook-block" id={blockAnchor(blocks![index] as Block)}>{element}</div>)
}
