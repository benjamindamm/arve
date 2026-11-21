import assert from 'node:assert/strict'
import { readFile, realpath } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { createHash } from 'node:crypto'
import { componentTemplateCoverage } from '../src/docs/component-standard'
import snapshot from './content/handbook-snapshot.json'

// Intentionally checks only explicitly documented reference pages, not all 69
// source-reference stubs. Add an alignment document to review another component.
const filename = process.argv.find(arg=>arg.endsWith('contract-alignment.json')) ?? 'docs/handbook/component-template/contract-alignment.json'
const alignment = JSON.parse(await readFile(filename,'utf8'))
const root=process.cwd()
assert(/^[a-z][a-z0-9-]*$/.test(alignment.library))
assert(/^[a-z][a-z0-9-]*$/.test(alignment.component))
assert(/^[a-f0-9]{64}$/.test(alignment.revision))
const page=snapshot.pages.find(page=>page.component===alignment.component)
assert(page?.contract && page.contract.library===alignment.library && page.contract.revision===alignment.revision,'Published snapshot is bound to a different contract')
const {release}=await import(pathToFileURL(path.resolve('scripts/content/page-reworks',alignment.component+'.ts')).href)
const coverage=componentTemplateCoverage(release.content)
for(const section of coverage) {
  assert.equal(section.blocks.length,1,section.key+': exactly one section required')
  const block=section.blocks[0]
  assert.equal(block.blockType,'text',section.key+': expected editable text')
  if(block.blockType==='text')assert(block.body.root.children.length>=2,section.key+': heading and content required')
}
assert(!release.content.some((block:{blockName?:string})=>block.blockName?.startsWith('original-')),'Historical studies are not current documentation')
const sources=new Map<string,Buffer>()
const applicationSources=new Set([
  'src/docs/component-comparison-data.ts',
  'src/docs/component-comparisons.tsx',
  'src/docs/component-comparisons-contract.css',
  `src/demos/${alignment.library}/${alignment.component}.ts`,
  `src/docs/page-reworks/${alignment.component}.tsx`,
  `src/docs/page-reworks/${alignment.component}.css`,
].map(file=>path.resolve(root,file)))
for(const source of alignment.sources) {
  assert(typeof source.path==='string'&&!source.path.includes('\\')&&!source.path.split('/').some((part:string)=>part==='..'),'Unsafe evidence path')
  const target=await realpath(path.resolve(root,source.path))
  const packagePrefix=path.resolve(root,'src/contracts/libraries',alignment.library,alignment.revision,'package')+path.sep
  assert(target.startsWith(packagePrefix)||applicationSources.has(target),'Evidence outside selected export or documented application files')
  const bytes=await readFile(target)
  assert.equal(createHash('sha256').update(bytes).digest('hex'),source.sha256,source.path)
  assert(!sources.has(source.path),'Duplicate source')
  sources.set(source.path,bytes)
}
const ids=new Set<string>()
for(const claim of alignment.claims) {
  assert(claim.id&&!ids.has(claim.id),'Unique claim ID required');ids.add(claim.id)
  assert(coverage.some(section=>section.key===claim.blockName),'Unknown content section: '+claim.blockName)
  assert(['contract','editorial','demo'].includes(claim.kind),'Unknown claim kind')
  assert(claim.statement?.trim(),'Claim statement required')
  if(claim.kind!=='editorial')assert(claim.evidence?.length,'Source evidence required: '+claim.id)
  for(const reference of claim.evidence??[]) {
    const bytes=sources.get(reference.path);assert(bytes,'Undeclared source: '+reference.path)
    if(reference.pointer!==undefined) {
      assert(reference.pointer===''||reference.pointer.startsWith('/'),'Expected RFC6901 pointer')
      let value=JSON.parse(bytes.toString('utf8'))
      for(const key of reference.pointer===''?[]:reference.pointer.slice(1).split('/').map((key:string)=>key.replaceAll('~1','/').replaceAll('~0','~'))) {
        assert(value!=null&&Object.hasOwn(value,key),'Missing pointer '+reference.pointer);value=value[key]
      }
      if('expected' in reference)assert.deepEqual(value,reference.expected,claim.id)
    }
    if(reference.snippet!==undefined)assert(bytes.toString('utf8').includes(reference.snippet),'Missing source snippet: '+claim.id)
    assert(reference.pointer!==undefined||reference.snippet!==undefined,'Evidence needs a precise pointer or snippet')
  }
}
assert(alignment.claims.length>0)
for(const section of coverage)assert(alignment.claims.some((claim:{blockName:string})=>claim.blockName===section.key),'No documented claim review: '+section.key)
if(alignment.requiredBlocks)assert.deepEqual(alignment.requiredBlocks,coverage.map(section=>section.key),'Template definitions disagree')
if(!process.argv.includes('--source-only')) {
  const clean=(value:any):any=>Array.isArray(value)?value.map(clean):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).filter(([key,value])=>key!=='id'&&value!=null).map(([key,value])=>[key,clean(value)])):value
  assert.deepEqual(clean(page.content),clean(release.content),'Snapshot is stale; capture the published CMS content')
  assert.equal(page.summary,release.summary)
}
console.log(JSON.stringify({status:'PASS',scope:'editorial structure and source references',component:alignment.component,revision:alignment.revision,sections:coverage.length,sources:sources.size,claims:ids.size,snapshotChecked:!process.argv.includes('--source-only')}))
