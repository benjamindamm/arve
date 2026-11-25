import type {Page} from '../payload-types'
import {SiteAnchor} from './site-anchor'
import {Content} from './content'
import {RichText} from './rich-text'
import {blockAnchor} from './content-outline'
import {LayoutVisual} from './layout-visuals'
import {LayoutExample} from './layout-examples'
import './layout-guide.css'
export function LayoutGuide({content}:{content:Page['content']}){
 return <div className="layout-guide">{content?.map((block,i)=>{
  if(block.blockName==='layout-guide')return null
  if(block.blockType!=='text')return <Content key={i} blocks={[block]}/>
  if(block.blockName==='guide-evidence')return <details key={i} className="lg-evidence"><summary>Geltung und Quellen</summary><RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(1)}}}/></details>
  if(block.blockName==='guide-links'){
   const list=block.body.root.children.find(n=>n.type==='list') as {children?:{children?:{type?:string;fields?:{url?:string};children?:{text?:string}[]}[]}[]}|undefined
   const links=list?.children?.flatMap(item=>(item.children??[]).filter(n=>n.type==='link').map(n=>({href:n.fields?.url??'',label:n.children?.map(c=>c.text??'').join('')??''})))??[]
   return <section key={i} id={blockAnchor(block)}><RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(0,1)}}}/><ul className="lg-links">{links.map(link=><li key={link.href}><SiteAnchor href={link.href}>{link.label}<span aria-hidden="true">→</span></SiteAnchor></li>)}</ul></section>
  }
  const kind=block.blockName?.startsWith('guide-visual-')?block.blockName.slice(13):undefined
  return <section key={i} id={blockAnchor(block)}><RichText data={block.body}/>{kind?.startsWith('demo-')?<LayoutExample id={kind.slice(5)} embedded/>:kind?<LayoutVisual kind={kind}/>:null}</section>
 })}</div>
}
