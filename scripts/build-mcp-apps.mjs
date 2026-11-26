import {build} from 'esbuild'
import {mkdir,writeFile} from 'node:fs/promises'
const result=await build({entryPoints:['src/agent-ui/app.tsx'],bundle:true,write:false,outfile:'app.js',minify:true,format:'iife',target:'es2022',define:{'process.env.NODE_ENV':'"production"'}})
const js=result.outputFiles.find(f=>f.path.endsWith('.js')).text.replaceAll('</script','<\\/script')
const css=result.outputFiles.find(f=>f.path.endsWith('.css'))?.text??''
const html=`<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Arve · Farben gemeinsam klären</title><style>body{margin:0;padding:12px;font:15px/1.6 system-ui,sans-serif;background:#fff;color:#17251e}main{max-width:960px;margin:auto}.app-hint{font-size:13px}${css}</style></head><body><div id="app"></div><script>${js}</script></body></html>`
await mkdir('public/mcp-apps',{recursive:true})
await writeFile('public/mcp-apps/color-review.html',html)
console.log(`MCP App built: ${Buffer.byteLength(html)} bytes; no external assets`)
