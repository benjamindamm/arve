import assert from 'node:assert/strict'
import type {Page} from '../src/payload-types'
import {createHash} from 'node:crypto'
import {readFile,readdir,realpath,writeFile,mkdir} from 'node:fs/promises'
import path from 'node:path'
import {execFileSync} from 'node:child_process'
import {blockAnchor} from '../src/docs/content-outline'
import {componentSections,componentTemplateCoverage} from '../src/docs/component-standard'
import {editorialContent,type ComponentEditorial} from '../src/docs/component-editorial'
import {shadcnReferenceRevision as revision} from '../src/contracts/current-reference'
import snapshot from './content/handbook-snapshot.json'

const root=process.cwd(), selected=process.argv.indexOf('--component')
const wanted=snapshot.pages.filter(p=>p.component&&p.component!=='button').map(p=>p.component!).sort()
const files=(await readdir('scripts/content/component-docs')).filter(f=>f.endsWith('.json'))
const progress=JSON.parse(await readFile('docs/handbook/component-catalog/progress.json','utf8'))
const slugs=selected>=0?[process.argv[selected+1]]:process.argv.includes('--all')?wanted:Object.entries(progress.components).filter(([,v])=>['reviewed','published'].includes((v as any).status)).map(([slug])=>slug).sort()
if(process.argv.includes('--all'))assert.deepEqual(files.map(f=>f.slice(0,-5)).sort(),wanted)
const result=[]
const clean=(v:any):any=>Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).filter(([k,x])=>k!=='id'&&x!=null).map(([k,x])=>[k,clean(x)])):v
for(const slug of slugs){
 assert(wanted.includes(slug),'Unknown component '+slug)
 const doc=JSON.parse(await readFile('scripts/content/component-docs/'+slug+'.json','utf8')) as ComponentEditorial
 assert.equal(doc.format,1);assert.equal(doc.library,'shadcn');assert.equal(doc.revision,revision);assert.equal(doc.component,slug)
 assert.equal(doc.title,snapshot.pages.find(p=>p.component===slug)!.title,'Do not rename component identity')
 assert(doc.summary.trim()&&doc.summary.length<360,slug+': concise summary')
 assert.deepEqual(doc.sections.map(s=>s.key),componentSections.map(s=>s.key),slug)
 for(const section of doc.sections){
  assert(section.title.trim()&&Array.isArray(section.paragraphs)&&section.paragraphs.length,slug+':'+section.key)
  for(const line of [...section.paragraphs,...section.bullets??[]])assert(typeof line==='string'&&line.trim(),slug)
 }
 const picture=doc.sections.find(s=>s.key==='example')!.illustration!
 assert(picture&&picture.src==='/component-examples/'+slug+'.svg'&&picture.alt?.trim()&&picture.caption?.includes('Statische Illustration'),slug+': example')
 assert(doc.sections.every(s=>s.key==='example'||!s.illustration))
 const svg=await readFile('public'+picture.src,'utf8')
 assert(svg.includes('<svg')&&svg.includes('<title')&&svg.includes('<desc'),slug+': accessible SVG')
 assert(!/<script|<foreignObject|\son[a-z]+\s*=|(?:href|src)\s*=\s*["'](?:https?:|data:|javascript:)|@import/i.test(svg),slug+': unsafe SVG')
 for(const match of svg.matchAll(/url\(([^)]+)\)/g))assert(/^#[a-zA-Z][\w-]*$/.test(match[1].trim().replace(/^["']|["']$/g,'')),slug+': external SVG paint')
 execFileSync('python3',['-c','import xml.etree.ElementTree as E,sys; E.parse(sys.argv[1])','public'+picture.src])
 const review=JSON.parse(await readFile('docs/handbook/component-catalog/reviews/'+slug+'.json','utf8'))
 assert.equal(review.component,slug);assert.equal(review.library,'shadcn');assert.equal(review.revision,revision)
 const sources=new Map<string,Buffer>()
 for(const source of review.sources){
  assert(typeof source.path==='string'&&!source.path.includes('\\')&&!source.path.split('/').includes('..'))
  const target=await realpath(path.resolve(root,source.path))
  assert(target.startsWith(path.resolve(root,'src/contracts/libraries/shadcn',revision,'package')+path.sep)||target.startsWith(path.resolve(root,'src/demos/shadcn')+path.sep)||target===path.resolve(root,'docs/handbook/component-catalog/history/0c16bdc/handbook-snapshot.json'),'Evidence outside package/demo')
  const bytes=await readFile(target);assert.equal(createHash('sha256').update(bytes).digest('hex'),source.sha256,slug+': '+source.path)
  assert(!sources.has(source.path));sources.set(source.path,bytes)
 }
 const ids=new Set()
 for(const claim of review.claims){
  assert(claim.id&&!ids.has(claim.id));ids.add(claim.id)
  assert(componentSections.some(s=>s.key===claim.blockName));assert(['contract','editorial','demo'].includes(claim.kind));assert(claim.statement?.trim())
  if(claim.kind!=='editorial')assert(claim.evidence?.length,slug+': '+claim.id)
  for(const e of claim.evidence??[]){
   const bytes=sources.get(e.path);assert(bytes,slug+': undeclared source')
   if(e.pointer!==undefined){assert(e.pointer===''||e.pointer.startsWith('/'));let v=JSON.parse(bytes.toString());for(const key of e.pointer===''?[]:e.pointer.slice(1).split('/').map((k:string)=>k.replaceAll('~1','/').replaceAll('~0','~'))){assert(v!=null&&Object.hasOwn(v,key),slug+': '+e.pointer);v=v[key]}if('expected'in e)assert.deepEqual(v,e.expected,slug+': '+claim.id)}
   if(e.snippet!==undefined)assert(bytes.toString().includes(e.snippet),slug+': '+claim.id)
   assert(e.pointer!==undefined||e.snippet!==undefined)
  }
 }
 for(const section of componentSections)assert(review.claims.some((c:any)=>c.blockName===section.key),slug+': missing review '+section.key)
 const content=editorialContent(doc)
 assert(componentTemplateCoverage(content).every(s=>s.blocks.length===1))
 assert.equal(new Set(content!.map(blockAnchor)).size,9,slug+': unique section links')
 if(process.argv.includes('--snapshot')||process.argv.includes('--published')){
  const page=snapshot.pages.find(p=>p.component===slug)!
  assert(page.contract?.revision===revision&&page.summary?.trim(),slug+': published reference')
  assert(componentTemplateCoverage(page.content as unknown as Page['content']).every(section=>section.blocks.length===1),slug+': published sections')
  if(process.argv.includes('--snapshot')){assert.deepEqual(clean(page.content),clean(content),slug+': snapshot');assert.equal(page.summary,doc.summary)}
 }
 result.push({component:slug,sections:9,sources:sources.size,claims:ids.size,words:[doc.summary,...doc.sections.flatMap(s=>[s.title,...s.paragraphs,...s.bullets??[]])].join(' ').split(/\s+/).length})
 console.log(slug+': PASS')
}
if(process.argv.includes('--report')){await mkdir('docs/handbook/component-catalog',{recursive:true});await writeFile('docs/handbook/component-catalog/verification.json',JSON.stringify({status:'PASS_LIMITED',scope:'Original editorial reference sources and published page structure',revision,components:result.length,snapshotChecked:process.argv.includes('--snapshot'),publishedStructureChecked:process.argv.includes('--published')||process.argv.includes('--snapshot'),result},null,2)+'\n')}
console.log(JSON.stringify({status:'PASS',components:result.length,snapshotChecked:process.argv.includes('--snapshot')}))
