import assert from 'node:assert/strict'
import { test } from 'node:test'
import { readFile } from 'node:fs/promises'
import { prepareTemplate, importTemplate } from './lib/system-template'
const snapshot = JSON.parse(await readFile('scripts/content/handbook-snapshot.json','utf8'))
test('complete reference becomes independent drafts, retaining every content field and immutable pin',()=>{
 const copy = prepareTemplate(snapshot,'acme','Acme')
 assert.equal(copy.pages.length,snapshot.pages.length); assert.equal(copy.pages.filter(p=>p.component).length,69)
 assert(copy.pages.every(p=>p._status==='draft' && p.system==='acme' && p.slug.startsWith('acme-')))
 for(let i=0;i<copy.pages.length;i++) { assert.deepEqual(copy.pages[i].contract,snapshot.pages[i].contract); assert.deepEqual(copy.pages[i].template,snapshot.pages[i].template) }
 assert(copy.implementations.every(i=>i._status==='draft' && i.releaseStatus==='draft' && i.componentPage.startsWith('acme-')))
 assert.equal(snapshot.system.slug,'shadcn'); assert(snapshot.pages.every((p:any)=>p._status==='published'))
})
test('links change only at URL boundaries, prose and sources remain intact',()=>{
 const input=structuredClone(snapshot)
 input.pages[0].content=[{blockType:'text',url:'/systems/shadcn/page#x',href:'/systems/shadcn?x=1',body:'Use shadcn',source:'https://ui.shadcn.com',other:{url:'/systems/shadcn-other'}}]
 const block=prepareTemplate(input,'acme','Acme').pages[0].content[0]
 assert.equal(block.url,'/systems/acme/page#x');assert.equal(block.href,'/systems/acme?x=1');assert.equal(block.body,'Use shadcn');assert.equal(block.source,'https://ui.shadcn.com');assert.equal(block.other.url,'/systems/shadcn-other')
})
test('reject same name, external parents, cycles and unmapped internal document references',()=>{
 assert.throws(()=>prepareTemplate(snapshot,'shadcn','Copy'))
 const bad=structuredClone(snapshot);bad.pages[0].parent='outside';assert.throws(()=>prepareTemplate(bad,'acme','Acme'),/External parent/)
 bad.pages[0].parent=bad.pages[0].slug;assert.throws(()=>prepareTemplate(bad,'acme','Acme'),/Parent cycle/)
 delete bad.pages[0].parent;bad.pages[0].content=[{type:'relationship',value:123}];assert.throws(()=>prepareTemplate(bad,'acme','Acme'),/explicit export mapping/)
})
test('existing target is refused before writes and transaction rolls back',async()=>{
 let rolled=false
 const payload={db:{beginTransaction:async()=>1,rollbackTransaction:async()=>{rolled=true}},find:async()=>({docs:[{id:1}]}),create:()=>{throw Error('Must not write')}}
 await assert.rejects(importTemplate(payload,prepareTemplate(snapshot,'acme','Acme'),true),/already exists/);assert(rolled)
})
