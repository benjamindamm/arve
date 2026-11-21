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
for(const page of snapshot.pages) {
  const relative=page.slug===snapshot.system.home?'systems/'+snapshot.system.slug:page.component?'systems/'+snapshot.system.slug+'/components/'+page.component:'systems/'+snapshot.system.slug+'/'+page.slug.replace(new RegExp('^'+snapshot.system.slug+'-'),'')
  const content=await readFile(path.join(root,relative,'index.html'),'utf8')
  assert(content.includes('<h1'),relative)
}
for(const [name,expected]of Object.entries(publication.assets)) {
  const bytes=await readFile(path.join(root,name))
  assert.equal(createHash('sha256').update(bytes).digest('hex'),expected,name)
}
assert(!(await exists(path.join(root,'admin'))));assert(!(await exists(path.join(root,'mcp'))))
assert(await exists(path.join(root,'404.html')))
console.log(JSON.stringify({status:'PASS',html:html.length,handbookPages:snapshot.pages.length,components:snapshot.pages.filter(p=>p.component).length,internalLinks:links,verifiedAssets:Object.keys(publication.assets).length,basePath:base,backend:false}))
