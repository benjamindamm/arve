import { Fragment } from 'react'
import type { getContract } from '../contracts/catalog'
import { ComponentComparisons } from './component-comparisons'
import type { Page } from '../payload-types'
import { HandbookOutline } from './handbook-outline'
import { RichText } from './rich-text'
import { blockAnchor } from './content-outline'
import { ComponentDemo } from './demo'
import { sitePath } from './site-path'
import { SiteAnchor } from './site-anchor'
import './component-handbook.css'

type Text=Extract<NonNullable<Page['content']>[number],{blockType:'text'}>
type Node={type?:string;text?:string;fields?:{url?:string;editorialMinWidth?:number};children?:Node[]}
const flatten=(node:Node):string=>node.text??(node.children??[]).map(flatten).join('')
function illustration(node:Node):Node|undefined {
  if(node.type==='link'&&/^\/component-examples\/[a-z0-9-]+\.svg$/.test(node.fields?.url??''))return node
  for(const child of node.children??[]){const result=illustration(child);if(result)return result}
}
/** One shared layout; all headings, rules and example references come from the CMS. */
export function ComponentHandbook({content,demo,component,contract}:{content:Page['content'];demo?:Page['demo'];component:string;contract:ReturnType<typeof getContract>}){
  const sourceBlocks=(content??[]).filter((b):b is Text=>b.blockType==='text')
  const blocks=[...sourceBlocks.filter(block=>block.blockName==='example'),...sourceBlocks.filter(block=>block.blockName!=='example')]
  return <div className="component-handbook">
    {!blocks.some(block=>block.blockName==='example')&&<HandbookOutline initiallyCollapsed scopeSelector=".component-handbook" />}
    {blocks.map(block=>{
      const heading=flatten(block.body.root.children[0] as Node)
      // An introductory editorial quote is an editable prerequisite, shown before the illustration.
      const notices=block.blockName==='example'?block.body.root.children.slice(1).filter((node,index,nodes)=>node.type==='quote'&&nodes.slice(0,index).every(previous=>previous.type==='quote')):[]
      const picture=block.blockName==='example'?illustration(block.body.root as Node):undefined
      const pictureIndex=picture?block.body.root.children.findIndex(node=>illustration(node as Node)===picture):-1
      const following=pictureIndex>=0?block.body.root.children[pictureIndex+1]:undefined
      const caption=following?flatten(following as Node):''
      const captionIndex=caption.startsWith('Statische Illustration')?pictureIndex+1:-1
      const rest={...block.body,root:{...block.body.root,children:block.body.root.children.filter((_,index)=>index>0&&index!==pictureIndex&&index!==captionIndex&&!notices.includes(block.body.root.children[index]))}}
      const body=<>
        {!!notices.length&&<aside className="component-handbook-notice" aria-label="Hinweis zum Einsatz"><RichText data={{...block.body,root:{...block.body.root,children:notices}}}/></aside>}
        {(block.blockName==='variants'||block.blockName==='states')&&<ComponentComparisons component={component} contract={contract} section={block.blockName}/>}
        {picture&&<figure className="component-handbook-example" style={{maxWidth:Math.max(560,Math.min(800,picture.fields?.editorialMinWidth??320))}}><div className="component-handbook-illustration" role="region" aria-label="Statisches Gestaltungsbeispiel, bei Bedarf scrollbar" tabIndex={0}>
          <img src={sitePath(picture.fields!.url!)} alt={flatten(picture)} style={{minWidth:Math.min(800,Math.max(280,picture.fields?.editorialMinWidth??320))}} />
        </div><figcaption>{captionIndex>=0?caption:'Statische Illustration'} <SiteAnchor href={picture.fields!.url!}>In Originalgrösse öffnen ↗</SiteAnchor></figcaption></figure>}
        {block.blockName==='example'&&demo&&<div id="live-beispiel"><h3>Lokales Angular-Beispiel</h3><ComponentDemo demoKey={demo.key??undefined} label={demo.label??undefined} initialVariant={demo.variant??undefined}/></div>}
        <RichText data={rest}/>
      </>
      const section = ['keyboard','semantics','sources'].includes(block.blockName??'')
        ?<details key={block.blockName} id={blockAnchor(block)}><summary>{heading}</summary>{body}</details>
        :<section key={block.blockName} id={block.blockName==='example'?'komponenten-beispiel':blockAnchor(block)}>{block.blockName==='example'?<h2 id={blockAnchor(block)}>{heading}</h2>:<h2>{heading}</h2>}{body}</section>
      return <Fragment key={block.blockName}>{section}{block.blockName==='example'&&<HandbookOutline initiallyCollapsed scopeSelector=".component-handbook" />}</Fragment>
    })}
  </div>
}
