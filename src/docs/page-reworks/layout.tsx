import { SiteAnchor } from '../site-anchor'
import type { Page } from '../../payload-types'
import { Content } from '../content'
import './layout.css'

type Block=NonNullable<Page['content']>[number]
type Node={type?:string;text?:string;children?:Node[];fields?:{url?:string}}
const text=(node:Node):string=>node.text??node.children?.map(text).join('')??''
function read(block:Block|undefined){
  if(block?.blockType!=='text')return null
  const nodes=block.body.root.children as Node[]
  const destination=nodes.flatMap(node=>node.children??[]).find(node=>node.type==='link')
  return {copy:nodes.filter(node=>!node.children?.some(child=>child.type==='link')).map(text),href:destination?.fields?.url,label:destination?text(destination):undefined}
}

export default function LayoutOverview({content}:{content:Page['content']}){
  const blocks=content??[]
  const names=['layout-page-types','layout-page-layouts','layout-content-layouts']
  const cards=names.map(name=>read(blocks.find(block=>block.blockName===name)))
  const evidenceIndex=blocks.findIndex(block=>block.blockName==='layout-evidence')
  const evidence=read(blocks[evidenceIndex])
  if(cards.some(card=>!card?.href)||!evidence)return <Content blocks={content}/>
  return <div className="layout-overview-rework">
    <div className="lor-categories">
      {cards.map((card,index)=>{
        const {copy:c,href,label}=card!
        return <section className="lor-category" key={names[index]}>
          <p className="lor-scope"><span aria-hidden="true">0{index+1} · </span>{c[2]}</p>
          <figure className="lor-preview">
            <figcaption>{c[3]}</figcaption>
            {index===0?<div className="lor-page-type">
              <strong>{c[4]}</strong><span className="lor-task">{c[5]}</span>
              <dl><dt>{c[6]}</dt><dd>{c[7]}</dd></dl>
            </div>:index===1?<div className="lor-page-layout">
              <div className="lor-head">{c[4]}</div><div className="lor-main">{c[5]}</div><div className="lor-aside">{c[6]}</div>
            </div>:<div className="lor-content-layout">
              <strong>{c[4]}</strong><dl><dt>{c[5]}</dt><dd>{c[6]}</dd><dt>{c[7]}</dt><dd>{c[8]}</dd></dl>
            </div>}
          </figure>
          <h2>{c[0]}</h2><p className="lor-description">{c[1]}</p>
          <SiteAnchor className="lor-destination" href={href}>{label}<span aria-hidden="true"> →</span></SiteAnchor>
        </section>
      })}
    </div>
    <div className="lor-navigation"><Content blocks={blocks.filter(block=>block.blockName==='layout-navigation')}/></div>
    <details className="lor-evidence"><summary>{evidence.copy[0]}</summary>
      {evidence.copy.slice(1).map(p=><p key={p}>{p}</p>)}
      <Content blocks={blocks.slice(evidenceIndex+1)}/>
    </details>
  </div>
}
