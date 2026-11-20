import { useId } from 'react'
import type { Page } from '../../payload-types'
import { Content } from '../content'
import './bewegung.css'

type Block = NonNullable<Page['content']>[number]
function texts(block: Block | undefined) {
  if (block?.blockType !== 'text') return []
  return block.body.root.children.map(child =>
    (child.children as {text?:string}[] | undefined)?.map(node=>node.text??'').join('')??'')
}

export default function Motion({content}: {content:Page['content']}) {
  const id=useId()
  const blocks=content??[]
  const example=texts(blocks.find(block=>block.blockName==='motion-example'))
  const preview=texts(blocks.find(block=>block.blockName==='motion-preview'))
  const evidence=blocks.findIndex(block=>block.blockName==='motion-evidence')
  if(example.length!==11||preview.length!==6||evidence<0) return <Content blocks={content}/>
  const identity=<><p className="mr-eyebrow">{example[3]}</p><strong className="mr-name">{example[4]}</strong></>
  const email=<dl><dt>{example[7]}</dt><dd>{example[8]}</dd></dl>
  return <div className="motion-rework">
    <section aria-labelledby={`${id}-example`}>
      <h2 id={`${id}-example`}>{example[0]}</h2>
      <div className="mr-comparison">
        <section className="mr-state"><h3>{example[1]}</h3><div className="mr-contact">{identity}<p className="mr-label"><span aria-hidden="true">＋ </span>{example[5]}</p></div></section>
        <section className="mr-state"><h3>{example[2]}</h3><div className="mr-contact">{identity}<p className="mr-label"><span aria-hidden="true">− </span>{example[6]}</p>{email}</div></section>
      </div>
      <p className="mr-caption">{example[9]}</p><p className="mr-caption">{example[10]}</p>
    </section>
    <section className="mr-preview" aria-labelledby={`${id}-preview`}>
      <h2 id={`${id}-preview`}>{preview[0]}</h2>
      <input id={`${id}-reduce`} type="checkbox" className="mr-reduce"/><label htmlFor={`${id}-reduce`}>{preview[1]}</label>
      <details className="mr-demo">
        <summary><span className="mr-closed">{preview[2]}</span><span className="mr-open">{preview[3]}</span></summary>
        <div className="mr-contact">{identity}<div className="mr-reveal">{email}</div></div>
      </details>
      <p className="mr-caption">{preview[4]}</p><p className="mr-stand">{preview[5]}</p>
    </section>
    <div className="mr-reading"><Content blocks={blocks.filter(block=>block.blockName==='motion-rules'||block.blockName==='motion-checks')}/></div>
    <details className="mr-evidence"><summary>{texts(blocks[evidence])[0]}</summary>
      {texts(blocks[evidence]).slice(1).map(text=><p key={text}>{text}</p>)}
      <Content blocks={blocks.slice(evidence+1)}/>
    </details>
  </div>
}
