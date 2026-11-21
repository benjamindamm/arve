import assert from 'node:assert/strict'
import {readFile,readdir} from 'node:fs/promises'
import {editorialContent,type ComponentEditorial} from '../src/docs/component-editorial'
const flatten=(node:any):string=>node.text??(node.children??[]).map(flatten).join('')
function collect(node:any):any[]{return [...(node.type==='link'?[node]:[]),...(node.children??[]).flatMap(collect)]}
let pages=0,links=0
for(const file of await readdir('scripts/content/component-docs')){
 const doc=JSON.parse(await readFile('scripts/content/component-docs/'+file,'utf8')) as ComponentEditorial
 const content=editorialContent(doc)!
 for(const [index,section] of doc.sections.entries()){
  const block=content[index];assert(block.blockType==='text')
  const paragraphs=block.body.root.children.slice(section.notice?2:1,section.paragraphs.length+(section.notice?2:1))
  assert.deepEqual(paragraphs.map(flatten),section.paragraphs,doc.component+': paragraph text changed')
  const actual=collect(block.body.root)
  for(const link of section.links??[]){
    assert(actual.some(node=>node.fields.url===link.href&&flatten(node)===link.text),doc.component+': link not compiled '+link.text)
    if(link.paragraph!==undefined)assert(collect(paragraphs[link.paragraph]).some(node=>node.fields.url===link.href&&flatten(node)===link.text),doc.component+': wrong paragraph')
    links++
  }
 }
 if(doc.sections.some(s=>s.links?.length))pages++
}
const document:ComponentEditorial={format:1,library:'shadcn',revision:'test',component:'test',title:'Test',summary:'Test',sections:[{key:'usage',title:'Test',paragraphs:['Data Table bleibt.','Alert Dialog oder Alert; Table als Alternative.'],links:[{text:'Alert',href:'/alert',paragraph:1},{text:'Alert Dialog',href:'/alert-dialog',paragraph:1},{text:'Table',href:'/table',paragraph:1}]}]}
const block=editorialContent(document)![0];assert(block.blockType==='text')
assert.equal(collect(block.body.root.children[1]).length,0)
assert.deepEqual(collect(block.body.root.children[2]).map(n=>flatten(n)),['Alert Dialog','Alert','Table'])
console.log(JSON.stringify({status:'PASS',pages,links,textPreserved:true,scopedParagraphs:true,longestMatch:true}))
