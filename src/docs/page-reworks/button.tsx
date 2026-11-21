import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { ComponentDemo } from '../demo'
import { blockAnchor } from '../content-outline'
import { contractOptions } from '../contract-options'
import { HandbookOutline } from '../handbook-outline'
import type { getContract } from '../../contracts/catalog'
import './button.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Node = { text?: string; children?: Node[] }
const flatten = (node: Node): string => node.text ?? (node.children ?? []).map(flatten).join('')
const lines = (block: Text) => block.body.root.children.map(node => flatten(node as Node))
function Body({ block }: { block: Text }) {
  return <RichText data={{ ...block.body, root: { ...block.body.root, children: block.body.root.children.slice(1) } }} />
}
function Specimen({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return <span className={`button-specimen${outline ? ' button-specimen-outline' : ''}`}>{children}</span>
}
export default function ButtonPage({ content, demo, contract }: { content: Page['content']; demo?: Page['demo']; contract?: ReturnType<typeof getContract> }) {
  const blocks = (content ?? []).filter((block): block is Text => block.blockType === 'text')
  const find = (key: string) => blocks.find(block => block.blockName === key)
  const usage = find('usage'), example = find('example'), anatomy = find('anatomy'), variants = find('variants'), states = find('states'), labels = find('labels')
  const heading = (block: Text) => <h2>{lines(block)[0]}</h2>
  return <div className="button-rework">
    <HandbookOutline scopeSelector=".button-rework" />
    <p className="button-illustration-note">Statische Vergleiche · Live-Beispiel separat bedienbar.</p>
    {usage && <section id={blockAnchor(usage)}>{heading(usage)}
      <div className="button-comparison">
        <figure><div className="button-illustration"><Specimen>Änderungen speichern</Specimen></div><figcaption>{lines(usage)[1].split(' Link: ')[0]}</figcaption></figure>
        <figure><div className="button-illustration"><span className="button-link-specimen">Zur Projektübersicht <span aria-hidden="true">→</span></span></div><figcaption>Link: {lines(usage)[1].split(' Link: ')[1]}</figcaption></figure>
      </div><p>{lines(usage)[2]}</p>
    </section>}
    {example && <section id="live-beispiel" className="button-rework-example"><div id={blockAnchor(example)}>{heading(example)}</div>
      <ComponentDemo demoKey={demo?.key ?? undefined} label={demo?.label ?? undefined} initialVariant={demo?.variant ?? undefined} />
      <Body block={example} />
    </section>}
    {anatomy && <section id={blockAnchor(anatomy)}>{heading(anatomy)}
      <figure className="button-anatomy"><div className="button-action-group"><Specimen>Änderungen speichern</Specimen><Specimen outline>Abbrechen</Specimen></div><figcaption>Statische Illustration · Gewichtung einer Aktionsgruppe</figcaption></figure>
      <Body block={anatomy} />
    </section>}
    {variants && <section id={blockAnchor(variants)}>{heading(variants)}
      <div className="button-api-grid"><div><h3>Varianten</h3><ul className="button-api-values">{contractOptions(contract,'variant').map(value => <li key={value}><code>{value}</code></li>)}</ul><p>{lines(variants)[1]}</p></div>
      <div><h3>Grössen</h3><ul className="button-api-values">{contractOptions(contract,'size').map(value => <li key={value}><code>{value}</code></li>)}</ul><p>{lines(variants)[2]}</p></div></div>
      <p className="button-coverage-note">{lines(variants)[3]}</p>
    </section>}
    {states && <section id={blockAnchor(states)}>{heading(states)}
      <div className="button-state-grid">{lines(states).slice(1).map((line, index) => <div className="button-state-card" key={line}>
        <span className="button-state-number" aria-hidden="true">0{index + 1}</span><p>{line}</p>
      </div>)}</div>
    </section>}
    {labels && <section id={blockAnchor(labels)}>{heading(labels)}
      <div className="button-comparison button-label-comparison">{lines(labels).slice(1, 3).map((line, index) => <figure key={line}>
        <div className="button-illustration"><Specimen outline={index === 1}>{index === 0 ? 'Änderungen speichern' : 'Hier klicken'}</Specimen></div><figcaption>{line}</figcaption>
      </figure>)}</div><p>{lines(labels)[3]}</p>
    </section>}
    {['keyboard', 'semantics', 'sources'].map(key => { const block = find(key); return block && <details key={key} id={blockAnchor(block)}><summary>{lines(block)[0]}</summary><Body block={block} /></details> })}
  </div>
}
