import { readFile, mkdir, writeFile, copyFile } from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import snapshot from './content/handbook-snapshot.json'
import resources from '../docs/handbook/design-resources/manifest.json'
import { getContract, contractArtifactPath } from '../src/contracts/catalog'
import { GET as invoicePdf } from '../src/app/(docs)/systems/shadcn/beispiele/rechnungen/[id]/pdf/route'
import { invoices } from '../src/docs/invoices/data'

const output=path.resolve('.runtime/static-site/public'), hashes=new Map<string,string>()
const hash=(bytes:Uint8Array)=>createHash('sha256').update(bytes).digest('hex')
async function emit(name:string, bytes:Uint8Array, expected?:string) {
  if(name.includes('\\')||name.split('/').some(p=>!p||p==='.'||p==='..'))throw Error('Unsafe asset path')
  const actual=hash(bytes)
  if(expected&&actual!==expected)throw Error('Asset integrity failed: '+name)
  if(hashes.has(name)) { if(hashes.get(name)!==actual)throw Error('Conflicting asset: '+name);return }
  hashes.set(name,actual)
  await mkdir(path.dirname(path.join(output,name)),{recursive:true})
  await writeFile(path.join(output,name),bytes)
}
for(const page of snapshot.pages) {
  if(!page.component || !('contract' in page)||!page.contract)continue
  const contract=getContract(page.contract)
  if(!contract)throw Error('Contract unavailable: '+page.slug)
  for(const [name,sha]of Object.entries(contract.artifacts??{})) {
    const target=`contracts/${contract.library}/${contract.revision}/${name}`
    if(hashes.has(target)){if(hashes.get(target)!==sha)throw Error('Conflicting hash');continue}
    const filename=contractArtifactPath(contract,name)
    const bytes=contract.files[name]?Buffer.from(contract.files[name].content):filename?await readFile(filename):undefined
    if(!bytes)throw Error('Missing contract artifact: '+name)
    await emit(target,bytes,sha)
  }
}
for(const resource of resources.templates)await emit(`design-resources/${resource.id}.${resource.kind}`,await readFile(path.join('docs/handbook/design-resources',resource.path)),resource.sha256)
for(const media of snapshot.media as {key:string;sha256:string}[])await emit('media/'+media.key,await readFile(path.join('scripts/content/handbook-snapshot-media',media.key)),media.sha256)
for(const invoice of invoices) {
  const response=await invoicePdf(new Request('http://static-export.invalid'),{params:Promise.resolve({id:invoice.id})})
  if(!response.ok)throw Error('PDF export failed')
  await emit(`examples/invoices/${invoice.id}.pdf`,new Uint8Array(await response.arrayBuffer()))
}
await copyFile('scripts/content/handbook-snapshot.json',path.join(output,'handbook-snapshot.json'))
await writeFile(path.join(output,'publication.json'),JSON.stringify({format:1,kind:'static-handbook',capturedAt:snapshot.capturedAt,pages:snapshot.pages.length,components:snapshot.pages.filter(p=>p.component).length,mcp:false,admin:false,assets:Object.fromEntries(hashes)},null,2)+'\n')
console.log(JSON.stringify({status:'PASS',files:hashes.size,pages:snapshot.pages.length,output}))
