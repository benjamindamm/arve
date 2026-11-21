import assert from 'node:assert/strict'
import {mkdir,writeFile} from 'node:fs/promises'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js'
const c=new Client({name:'navigation-integration',version:'1'})
const report=[]
try {
 await c.connect(new StreamableHTTPClientTransport(new URL(process.env.MCP_URL??'http://127.0.0.1:3010/mcp')))
 const read=async(name,args)=>{const r=await c.callTool({name,arguments:args});assert(!r.isError,JSON.stringify(r));const bytes=Buffer.byteLength(JSON.stringify(r));if(args.view!=='full')assert(bytes<32768,`${name}: ${bytes}`);report.push({name,args,bytes});return r.structuredContent}
 const systems=await read('list_design_systems',{});const system=systems.systems.find(x=>x.system==='shadcn');assert(system)
 const entries=[];const queue=[system.read];let snapshot
 while(queue.length){const ref=queue.shift();const result=await read(ref.tool,ref.arguments);snapshot??=result.snapshot;assert.equal(result.snapshot,snapshot);entries.push(...result.entries);if(result.next)queue.push(result.next);for(const entry of result.entries){assert(entry.retrieval,entry.path);if(entry.expand)queue.push(entry.expand)}}
 assert.equal(new Set(entries.map(x=>x.path)).size,entries.length)
 const full=await read('list_documentation_tree',{system:'shadcn',view:'full'});const flatten=items=>items.flatMap(({children,...entry})=>[entry,...flatten(children??[])])
 assert.deepEqual(entries.map(x=>x.path).sort(),flatten(full.tree).map(x=>x.path).sort())
 for(const entry of entries.filter(x=>x.kind==='layout-example')) {const page=await read(entry.retrieval.tool,entry.retrieval.arguments);assert.equal(page.kind,'layout-example');assert.equal(page.path,entry.path)}
 for(const args of [{system:'shadcn',snapshot:'0'.repeat(64)},{system:'shadcn',offset:1},{system:'shadcn',parentPath:'/not-a-parent'}])assert((await c.callTool({name:'list_documentation_tree',arguments:args})).isError)
 await mkdir('.runtime/mcp-navigation',{recursive:true});await writeFile('.runtime/mcp-navigation/report.json',JSON.stringify({status:'PASS',entries:entries.length,calls:report},null,2)+'\n');console.log(JSON.stringify({status:'PASS',entries:entries.length,defaultMaxBytes:Math.max(...report.filter(x=>x.args.view!=='full').map(x=>x.bytes)),calls:report.length}))
}finally{await c.close()}
