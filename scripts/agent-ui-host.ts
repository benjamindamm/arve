/** Explicit local protocol harness, not a production chat or compatibility claim. */
import {createServer} from 'node:http'
import {build} from 'esbuild'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import {exampleDiscussion} from '../src/agent-ui/color-discussion'
const client=new Client({name:'arve-local-host-test',version:'1'})
await client.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')))
const first=await client.callTool({name:'compare_color_roles',arguments:exampleDiscussion})
const next=await client.callTool({name:'compare_color_roles',arguments:{...exampleDiscussion,question:'Neue Frage: Welche Farbzuordnung soll für das Kundenportal gelten?'}})
const resource=await client.readResource({uri:'ui://arve/color-review-v1.html'})
await client.close()
if(!('text' in resource.contents[0]))throw Error('Expected HTML resource')
const appHtml=resource.contents[0].text
const js=(await build({entryPoints:['scripts/fixtures/agent-ui-host.ts'],bundle:true,write:false,format:'esm',target:'es2022'})).outputFiles[0].text
const html=`<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Arve · lokaler Protokolltest</title><style>body{font:14px/1.5 system-ui;margin:16px}iframe{width:100%;border:1px solid #ccc;box-sizing:border-box}button{min-height:44px;margin:8px}pre{white-space:pre-wrap;overflow-wrap:anywhere}</style><h1>Lokaler MCP-App-Test</h1><p>Kein produktiver Chat. Die empfangene Nachricht erscheint unter der Karte.</p><p id="status" role="status">Verbinde …</p><button id="replace">Vergleich ersetzen</button><button id="reject">Nächste Übergabe ablehnen</button><button id="drop">Übergabe unbeantwortet lassen</button><iframe title="Farbvergleich" sandbox="allow-scripts" allow="clipboard-write"></iframe><h2>Empfangene Nachricht</h2><pre id="messages"></pre><script type="module" src="/host.js"></script></html>`
createServer((req,res)=>{
 const routes:Record<string,[string,string]>={
  '/':['text/html',html],'/host.js':['text/javascript',js],
  '/app.html':['text/html',appHtml],
  '/review':['application/json',JSON.stringify(first)],'/review-next':['application/json',JSON.stringify(next)],
 }
 const value=routes[req.url??''];if(!value){res.writeHead(404);res.end();return}
 res.writeHead(200,{'Content-Type':value[0]+'; charset=utf-8','Cache-Control':'no-store'});res.end(value[1])
}).listen(3012,'127.0.0.1',()=>console.log('Local MCP-App test host: http://127.0.0.1:3012'))
