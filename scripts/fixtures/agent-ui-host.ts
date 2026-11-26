import {AppBridge,PostMessageTransport} from '@modelcontextprotocol/ext-apps/app-bridge'
const frame=document.querySelector('iframe')!
const bridge=new AppBridge(null,{name:'Arve local protocol test host',version:'1'},{message:{text:{}}})
const status=document.querySelector('#status')!,messages=document.querySelector('#messages')!
let mode='ok',count=0
bridge.onmessage=async({content})=>{
 if(mode==='drop')return await new Promise<{}>(()=>{})
 if(mode==='reject'){status.textContent='Test-Host hat die Nachricht abgelehnt.';return {isError:true}}
 count++;messages.textContent=content.map(c=>c.type==='text'?c.text:'').join('\n');status.textContent=`Nachrichten im Test-Gespräch: ${count}`
 return {}
}
bridge.onsizechange=({height})=>{frame.style.height=Math.max(400,height??800)+'px'}
bridge.oninitialized=async()=>{const result=await(await fetch('/review')).json();await bridge.sendToolInput({arguments:result.structuredContent.discussion});await bridge.sendToolResult(result);status.textContent='MCP-App verbunden.'}
document.querySelector('#replace')!.addEventListener('click',async()=>{const r=await(await fetch('/review-next')).json();await bridge.sendToolResult(r)})
document.querySelector('#reject')!.addEventListener('click',()=>{mode='reject';status.textContent='Nächste Übergabe wird abgelehnt.'})
document.querySelector('#drop')!.addEventListener('click',()=>{mode='drop';status.textContent='Die nächste Übergabe bleibt unbeantwortet.'})
// Attach the bridge before loading the App so initialization cannot race the listener.
await bridge.connect(new PostMessageTransport(frame.contentWindow!,frame.contentWindow!))
frame.src='/app.html'
