import assert from 'node:assert/strict'
import { textChunk, digest, snapshotOf, assertSnapshot, compactDocumentation, pageSections, componentFile } from '../src/docs/mcp-reads'

const text='Grüezi 👩🏽‍💻\n𠜎 — Vergleich: 50 vollständige Projekte; kein Zahlenvergleich.'
let reconstructed='', offset: number | null=0
while(offset!==null) { const chunk=textChunk(text,offset,3); reconstructed+=chunk.content;offset=chunk.nextOffset;assert.equal(chunk.sha256,digest(text));assert.equal(chunk.totalBytes,Buffer.byteLength(text));assert(!chunk.content.includes('\ufffd')) }
assert.equal(reconstructed,text)
assert.throws(()=>textChunk(text,99999,1),/offset/)
assert.throws(()=>textChunk(text,0,12001),/limit/)
const source={ title:'Regel',content:[{blockType:'workflowStudy',blockName:'UX-001',title:'Pilot',scope:'Bis 50 Projekte, nicht für Zahlenvergleich',count:50,enabled:false,source:'Beobachtung',steps:[{title:'Link',url:'/systems/shadcn/tabellen-und-listen'}]}],templateSections:[] }
const sections=pageSections(source);assert(sections[0].text.includes('UX-001'));assert(sections[0].text.includes('50'));assert(sections[0].text.includes('false'));assert(sections[0].text.includes('/systems/shadcn/tabellen-und-listen'))
const compact=compactDocumentation(source,{system:'shadcn',section:'test'});assert.equal(compact.snapshot,snapshotOf(source));assertSnapshot(source,compact.snapshot);assert.throws(()=>assertSnapshot({...source,title:'Changed'},compact.snapshot),/changed/)
for(const name of ['../secret','/etc/passwd','%2e%2e/secret','a\\b','a//b','a/./b','a?x']) await assert.rejects(()=>componentFile({} as never,name),/exact registered/)
console.log('PASS: Unicode pagination, complete-resource UTF8 hashes, snapshot guards, scope/IDs/links/numbers retained and unsafe paths rejected')
