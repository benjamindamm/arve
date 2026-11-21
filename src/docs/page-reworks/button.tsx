import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { ComponentDemo } from '../demo'
import { ComponentStudy } from '../component-studies'
import { blockAnchor, blockTitle } from '../content-outline'
import './button.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, {blockType:'text'}>
type Node = {text?:string;children?:Node[]}
const flatten = (node:Node):string => node.text ?? (node.children ?? []).map(flatten).join('')
const lines = (block?:Block) => block?.blockType==='text' ? block.body.root.children.map(node=>flatten(node as Node)) : []
function Body({block}:{block:Text}) {
  return <RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(1)}}}/>
}
export default function ButtonPage({content,demo}:{content:Page['content'];demo?:Page['demo']}) {
  const blocks=content ?? [], find=(key:string)=>blocks.find(block=>block.blockName===key)
  const example=find('example'), rules=find('rules'), states=find('states'), sources=find('sources')
  return <div className="button-rework">
    <section id="live-beispiel" className="button-rework-example">
      {example && <div id={blockAnchor(example)}><h2>{lines(example)[0]}</h2></div>}
      <ComponentDemo demoKey={demo?.key ?? undefined} label={demo?.label ?? undefined} initialVariant={demo?.variant ?? undefined}/>
      {example?.blockType==='text' && <Body block={example}/>}
    </section>
    {rules && <section id={blockAnchor(rules)}><h2>{lines(rules)[0]}</h2><ol className="button-rework-rules">{lines(rules).slice(1).map(rule=><li key={rule}>{rule}</li>)}</ol></section>}
    {states?.blockType==='text' && <section id={blockAnchor(states)}><RichText data={states.body}/></section>}
    {sources?.blockType==='text' && <details id={blockAnchor(sources)}><summary>{lines(sources)[0]}</summary><Body block={sources}/></details>}
    {blocks.filter(block=>block.blockName?.startsWith('original-')).map(block=><details key={block.blockName} id={blockAnchor(block)}><summary>{blockTitle(block)}</summary>{block.blockType==='text' ? <Body block={block}/> : block.blockType==='componentStudy' ? <ComponentStudy kind={block.kind} title={block.title} explanation={block.explanation} source={block.source ?? undefined} revision={block.revision ?? undefined}/> : null}</details>)}
  </div>
}
