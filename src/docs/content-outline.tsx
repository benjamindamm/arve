import type { Page } from '../payload-types'
type SourceBlock = NonNullable<Page['content']>[number]
type Block = Exclude<SourceBlock, {blockType: 'guideline'}> | Omit<Extract<SourceBlock, {blockType: 'guideline'}>, 'image'>
export function blockTitle(block: Block): string | undefined {
 if ('title' in block) return block.title
 if(block.blockType==='text') {
  const heading=block.body.root.children.find(node=>node.type==='heading' && node.tag==='h2')
  if(heading && Array.isArray(heading.children)) return heading.children.map((node: {text?: string})=>node.text??'').join('')
 }
}
export function blockAnchor(block: Block) {
 return 'abschnitt-'+(blockTitle(block)??'').toLowerCase().normalize('NFD').replace(/\p{M}/gu,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')
}
export function ContentOutline({content}:{content: Block[] | null | undefined}) {
 const headings=(content??[]).flatMap(block=>{const title=blockTitle(block);return title?[{title,id:blockAnchor(block)}]:[]})
 if(headings.length<4)return null
 return <nav className="content-outline" aria-label="Auf dieser Seite"><strong>Auf dieser Seite</strong><ol>{headings.map(({title,id})=><li key={id}><a href={'#'+id}>{title}</a></li>)}</ol></nav>
}
