import {authoringSkills} from '../src/docs/authoring-skills'
import {pagePath} from '../src/docs/systems'
import {snapshotData} from '../src/docs/snapshot-data'
import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { parse } from 'parse5'
import snapshot from './content/handbook-snapshot.json'

const root=path.resolve('.runtime/static-site/out'), base=process.env.ARVE_BASE_PATH??'/arve'
const publication=JSON.parse(await readFile(path.join(root,'publication.json'),'utf8'))
assert.equal(publication.mcp,false);assert.equal(publication.admin,false)
assert.equal(publication.pages,snapshot.pages.length)
const html:string[]=[]
async function walk(dir:string) {for(const entry of await readdir(dir,{withFileTypes:true})){assert(!entry.isSymbolicLink());const name=path.join(dir,entry.name);if(entry.isDirectory())await walk(name);else if(name.endsWith('.html'))html.push(name);assert(!['.env','.git','node_modules'].includes(entry.name))}}
await walk(root)
async function exists(file:string) {try{return await stat(file)}catch{return null}}
async function resolveTarget(pathname:string) {
  assert(pathname===base||pathname.startsWith(base+'/'), 'Missing publication prefix: '+pathname)
  const relative=decodeURIComponent(pathname.slice(base.length)).replace(/^\//,'')
  const filename=path.resolve(root,relative)
  assert(filename===root||filename.startsWith(root+path.sep),'Unsafe link')
  const info=await exists(filename)
  if(info?.isFile())return filename
  if(info?.isDirectory()&&await exists(path.join(filename,'index.html')))return path.join(filename,'index.html')
  return null
}
let links=0
for(const file of html) {
  const relative=path.relative(root,file).replaceAll(path.sep,'/')
  const pageUrl=new URL(base+'/'+relative.replace(/index\.html$/,''),'https://static.invalid')
  const dom=parse(await readFile(file,'utf8'))
  const urls:string[]=[]
  function visit(node:any) {
    for(const attr of node.attrs??[])if(['href','src'].includes(attr.name)&&attr.value)urls.push(attr.value)
    for(const attr of node.attrs??[])if(attr.name==='style')for(const match of attr.value.matchAll(/url\(["']?([^\s"')]+)["']?\)/g))urls.push(match[1])
    for(const child of node.childNodes??[])visit(child)
  }
  visit(dom)
  for(const value of urls) {
    if(/^(?:mailto:|tel:|data:|blob:)/i.test(value))continue
    const url=new URL(value,pageUrl)
    if(url.origin!==pageUrl.origin)continue
    assert(!/^\/(?:admin|mcp|api)(?:\/|$)/.test(url.pathname.slice(base.length)), 'Backend link in publication: '+value)
    assert(await resolveTarget(url.pathname),relative+' → '+value)
    links++
  }
}
const [system]=await snapshotData.systems(), pages=await snapshotData.pages(system)
for(const page of pages) {
  const relative=page.slug===snapshot.system.home?'systems/'+snapshot.system.slug:pagePath(system.slug,page,pages).slice(1)
  const content=await readFile(path.join(root,relative,'index.html'),'utf8')
  assert(content.includes('<h1'),relative)
}
for(const [name,expected]of Object.entries(publication.assets)) {
  const bytes=await readFile(path.join(root,name))
  assert.equal(createHash('sha256').update(bytes).digest('hex'),expected,name)
}
// Verify every machine-readable resource, including shared portal contract downloads.
const current=JSON.parse(await readFile(path.join(root,'arve-data/current.json'),'utf8'))
assert.equal(current.format,'arve-static-mcp/v1')
assert.equal(current.manifest,`releases/${current.release}/manifest.json`)
const releaseRoot=path.join(root,'arve-data/releases',current.release)
const manifestBytes=await readFile(path.join(releaseRoot,'manifest.json'))
assert.equal(createHash('sha256').update(manifestBytes).digest('hex'),current.release)
const manifest=JSON.parse(manifestBytes.toString('utf8'))
assert.equal(manifest.format,current.format)
for(const [name,descriptor]of Object.entries(manifest.files) as [string,{sitePath?:string;sha256:string;bytes:number}][]){
 const relative=descriptor.sitePath??`arve-data/releases/${current.release}/${name}`
 assert(!/[\\\0:%?#]/.test(relative)&&relative.split('/').every(part=>part&&part!=='.'&&part!=='..'))
 const bytes=await readFile(path.join(root,relative))
 assert.equal(bytes.length,descriptor.bytes,relative)
 assert.equal(createHash('sha256').update(bytes).digest('hex'),descriptor.sha256,relative)
}
assert.equal(publication.machineReadable.release,current.release)
assert(!(await exists(path.join(root,'admin'))));assert(!(await exists(path.join(root,'mcp'))))
assert(await exists(path.join(root,'404.html')))
let skillFiles=0
for(const skill of await authoringSkills())for(const source of skill.files){
  const filename=path.join(root,'handbuch/dateien',skill.id,source.name,'index.html')
  const dom=parse(await readFile(filename,'utf8'))
  let original:string|undefined
  function textOf(node:any):string{return node.nodeName==='#text'?node.value:(node.childNodes??[]).map(textOf).join('')}
  function findSource(node:any){if(node.tagName==='pre'&&node.attrs?.some((a:any)=>a.name==='class'&&a.value.split(' ').includes('guide-full-source')))original=textOf(node);for(const child of node.childNodes??[])findSource(child)}
  findSource(dom)
  assert.equal(original,source.content,'Skill source changed during publication: '+source.name)
  skillFiles++
}
console.log(JSON.stringify({status:'PASS',html:html.length,skillFiles,handbookPages:snapshot.pages.length,components:snapshot.pages.filter(p=>p.component).length,internalLinks:links,verifiedAssets:Object.keys(publication.assets).length,basePath:base,backend:false}))
