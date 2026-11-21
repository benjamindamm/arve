import assert from 'node:assert/strict'
import {readFile,writeFile} from 'node:fs/promises'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import {editorialContent} from '../src/docs/component-editorial'
import {shadcnReferenceRevision as revision} from '../src/contracts/current-reference'
import {release as button} from './content/page-reworks/button'
const client=new Client({name:'component-handbook-reader',version:'1'})
const progress=JSON.parse(await readFile('docs/handbook/component-catalog/progress.json','utf8'))
const slugs=['button',...Object.keys(progress.components)].sort()
const clean=(v:any):any=>Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).filter(([k,x])=>k!=='id'&&x!=null).map(([k,x])=>[k,clean(x)])):v
const result=[]
try{
 await client.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')))
 const call=async(name:string,args:Record<string,unknown>)=>{const r=await client.callTool({name,arguments:args});assert(!r.isError);return r.structuredContent as any}
 for(const slug of slugs){
  const doc=slug==='button'?button:JSON.parse(await readFile('scripts/content/component-docs/'+slug+'.json','utf8'))
  const expected=slug==='button'?button.content:editorialContent(doc)
  const page=await call('get_component_page',{system:'shadcn',component:slug})
  assert.equal(page.contractReference.revision,revision)
  assert.equal(page.summary,doc.summary,slug)
  assert.deepEqual(clean(page.content),clean(expected),slug+': MCP editorial content')
  assert.equal(page.content.length,9,slug)
  const r=await fetch('http://127.0.0.1:3010'+page.path);assert.equal(r.status,200,slug)
  const html=await r.text();assert(html.includes('<h1'),slug)
  if(slug!=='button'){
   const picture=doc.sections.find((s:any)=>s.key==='example').illustration
   assert(html.includes(picture.src),slug+': rendered editorial example')
   const asset=await fetch('http://127.0.0.1:3010'+picture.src);assert.equal(asset.status,200,slug+': SVG')
  }
  result.push({component:slug,sections:9,mcpContent:'exact',portal:200})
  console.log(slug+': PASS')
 }
 await writeFile('docs/handbook/component-catalog/mcp-verification.json',JSON.stringify({status:'PASS',scope:'Published component content parity and Portal delivery',revision,components:result.length,result},null,2)+'\n')
}finally{await client.close()}
