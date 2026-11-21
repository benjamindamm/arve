import Link from 'next/link'
import type { Page } from '../payload-types'
import { Content } from './content'
import './foundations-overview.css'

type Block = NonNullable<Page['content']>[number]
function firstLink(block?: Block): string | undefined {
  if (block?.blockType !== 'text') return
  const visit = (value: unknown): string | undefined => {
    if (!value || typeof value !== 'object') return
    const node = value as { type?: string; fields?: { url?: string }; children?: unknown[] }
    if (node.type === 'link') return node.fields?.url
    for (const child of node.children ?? []) { const url = visit(child); if (url) return url }
  }
  return visit(block.body.root)
}
function Preview({ kind }: { kind: string }) {
  return <div className={`fo-preview fo-preview-${kind}`} aria-hidden="true">
    {kind === 'colors' && <><span>Aa</span><span>Aa</span><span>Aa</span></>}
    {kind === 'typography' && <div><b>Eine klare Aufgabe</b><span>Erklärung im Lesetext</span><small>Hilfe zum Feld</small></div>}
    {kind === 'spacing' && <><div><b>Name</b><i/><small>So erscheint dein Name.</small></div><div><b>E-Mail</b><i/><small>Für unsere Antwort.</small></div></>}
    {kind === 'shape' && <><span/><span/><span/></>}
    {kind === 'icons' && <><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg><span>Suchen</span></>}
    {kind === 'motion' && <><span>A</span><i>→</i><span>A</span></>}
    {kind === 'themes' && <><div><span>✓ Ausgewählt</span><i/></div><div><span>✓ Ausgewählt</span><i/></div></>}
  </div>
}

/** CMS studies supply preview kinds and copy; adjacent rich-text blocks supply destinations. */
export function FoundationsOverview({ content }: { content: Page['content'] }) {
  const blocks = content ?? []
  const cards = blocks.flatMap((block, index) => {
    const href = firstLink(blocks[index + 1])
    return block.blockType === 'study' && block.kind !== 'overview' && href ? [{ block, href }] : []
  })
  const rest = blocks.filter((block, index) => !(block.blockType === 'study' && block.kind !== 'overview' && firstLink(blocks[index + 1])) && !(index > 0 && blocks[index - 1].blockType === 'study' && (blocks[index - 1] as { kind?: string }).kind !== 'overview' && firstLink(block)))
  return <div className="foundations-overview">
    <div className="fo-grid">{cards.map(({ block, href }) => <Link key={block.kind} href={href} className="fo-card">
      <Preview kind={block.kind}/><div className="fo-card-copy"><h2>{block.title}<span aria-hidden="true">→</span></h2><p>{block.explanation}</p></div>
    </Link>)}</div>
    <p className="fo-caption">Die Vorschauen sind schematisch. Beispiele und vorhandene Werte findest du auf den Themenseiten.</p>
    <details className="fo-study"><summary>Beispiel: Informationen ordnen und die nächste Aktion hervorheben</summary><Content blocks={rest.filter(block => block.blockType === 'study')}/></details>
    <details className="fo-sources"><summary>Quelle und Geltungsbereich</summary><Content blocks={rest.filter(block => block.blockType !== 'study')}/></details>
  </div>
}
