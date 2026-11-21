import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
const root=path.resolve('.runtime/static-site/out'), base=process.env.ARVE_BASE_PATH??'/arve'
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.txt':'text/plain','.png':'image/png','.svg':'image/svg+xml','.pdf':'application/pdf','.scxml':'application/xml'}
createServer(async(req,res)=>{
  try {
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return}
    const url=new URL(req.url,'http://preview.invalid')
    if(url.pathname!==base&&!url.pathname.startsWith(base+'/'))throw Error('Not found')
    let filename=path.resolve(root,decodeURIComponent(url.pathname.slice(base.length)).replace(/^\//,''))
    if(filename!==root&&!filename.startsWith(root+path.sep))throw Error('Unsafe path')
    const info=await stat(filename)
    if(info.isDirectory()) {
      if(!url.pathname.endsWith('/')){res.writeHead(301,{Location:url.pathname+'/'+url.search});res.end();return}
      filename=path.join(filename,'index.html')
    }
    const bytes=await readFile(filename)
    res.writeHead(200,{'Content-Type':types[path.extname(filename)]??'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'})
    res.end(req.method==='HEAD'?undefined:bytes)
  }catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(path.join(root,'404.html')).catch(()=>Buffer.from('Not found')))}
}).listen(Number(process.env.ARVE_PREVIEW_PORT??3020),'127.0.0.1',()=>console.log('Static preview: http://127.0.0.1:'+(process.env.ARVE_PREVIEW_PORT??3020)+base+'/'))
