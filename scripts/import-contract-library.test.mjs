import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile, readFile, rm, symlink } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { importContractLibrary } from './import-contract-library.mjs'
const hash = value => createHash('sha256').update(value).digest('hex')
async function fixture(fn) {
  const root = await mkdtemp(path.join(tmpdir(), 'arve-import-test-'))
  const bundle = path.join(root, 'bundle'), dest = path.join(root, 'dest')
  const files = {
    'library/library.json': JSON.stringify({components:{Button:'components/button/component.json'}}),
    'library/components/button/component.json': JSON.stringify({status:'draft',domains:{behavior:'behavior.scxml',visual:{tokens:'../../tokens.json'}}}),
    'library/components/button/behavior.scxml': '<scxml/>',
    'library/tokens.json': '{}',
    'library/components/button/button.fig': Buffer.from([0,255,1]),
    'skills/ui-contracts/SKILL.md': '# Portable skill',
    'dependencies.json': '{}',
  }
  const seal = async () => {
    for (const [name, bytes] of Object.entries(files)) {await mkdir(path.dirname(path.join(bundle,name)),{recursive:true});await writeFile(path.join(bundle,name),bytes)}
    const entries=Object.entries(files).map(([name,bytes])=>[name,hash(bytes)]).sort(([a],[b])=>a<b?-1:a>b?1:0)
    const manifest={format:'ui-contracts-export/v1',library:'shadcn',revision:hash(JSON.stringify(entries)),files:Object.fromEntries(entries)}
    await writeFile(path.join(bundle,'manifest.json'),JSON.stringify(manifest)); return manifest
  }
  try {await seal();await fn({root,bundle,dest,files,seal})} finally {await rm(root,{recursive:true,force:true})}
}
test('portable input, binary assets, skills and idempotent immutable import',()=>fixture(async({bundle,dest})=>{
  const result=await importContractLibrary(bundle,dest)
  assert.equal(result.reused,false)
  assert.deepEqual(await readFile(path.join(result.destination,'components/button/button.fig')),Buffer.from([0,255,1]))
  assert.equal(await readFile(path.join(result.destination,'package/skills/ui-contracts/SKILL.md'),'utf8'),'# Portable skill')
  const contracts=JSON.parse(await readFile(path.join(result.destination,'contracts.json'),'utf8'))
  assert.equal(contracts[0].sources.tokens,'tokens.json')
  assert.equal((await importContractLibrary(bundle,dest)).reused,true)
  await writeFile(path.join(result.destination,'contracts.json'),'changed')
  await assert.rejects(importContractLibrary(bundle,dest),/refusing overwrite/)
}))
test('compact imports keep complete package bytes without repeating embedded sources',()=>fixture(async({bundle,dest,files,seal})=>{
  files['library/library.json']=JSON.stringify({components:{Button:'components/button/component.json',Checkbox:'components/checkbox/component.json'}})
  files['library/components/checkbox/component.json']=JSON.stringify({status:'complete',domains:{behavior:'behavior.scxml'}})
  files['library/components/checkbox/behavior.scxml']='<scxml id="checkbox"/>'
  await seal()
  const result=await importContractLibrary(bundle,dest,{compact:true})
  const contracts=JSON.parse(await readFile(path.join(result.destination,'contracts.json'),'utf8'))
  assert.equal(contracts.length,2)
  assert(contracts.every(c=>c.deferredFiles&&Object.keys(c.files).length===0))
  assert(contracts[0].artifacts['tokens.json'])
  assert(!contracts[0].artifacts['components/checkbox/component.json'])
  assert.deepEqual(await readFile(path.join(result.destination,'package/library/components/button/button.fig')),Buffer.from([0,255,1]))
  assert.equal((await importContractLibrary(bundle,dest,{compact:true})).reused,true)
}))
test('tampered bytes and undeclared files are rejected',()=>fixture(async({bundle,dest})=>{
  await writeFile(path.join(bundle,'library/tokens.json'),'tampered')
  await assert.rejects(importContractLibrary(bundle,dest),/checksum/)
  await writeFile(path.join(bundle,'extra.txt'),'extra')
  await assert.rejects(importContractLibrary(bundle,dest),/Unexpected/)
}))
test('compact CSS closure preserves import chains, fonts, queries, cycles and explicit cross-component styles',()=>fixture(async({bundle,dest,files,seal})=>{
  files['library/components/button/component.json']=JSON.stringify({status:'complete',domains:{visual:{css:'layout.css'}}})
  files['library/components/button/layout.css']='/* @import "missing.css"; */ @import "../../tokens.css" layer(tokens); @import url("../shared/shared.css"); .button{background:url("../../assets/icon%20one.svg#mark")}'
  files['library/tokens.css']='@import url(./fonts.css) screen; @import "https://example.invalid/remote.css";'
  files['library/fonts.css']='@import "./tokens.css"; @font-face{src:url("./assets/font.woff2?v=1#font")} .x{background:url(data:image/png;base64,AAAA);filter:url(#local)}'
  files['library/components/shared/shared.css']='.shared{background:none}'
  files['library/components/shared/component.json']='{"private":"not a declared dependency"}'
  files['library/assets/font.woff2']=Buffer.from([0,255,88])
  files['library/assets/icon one.svg']='<svg/>'
  await seal()
  const result=await importContractLibrary(bundle,dest,{compact:true})
  const [contract]=JSON.parse(await readFile(path.join(result.destination,'contracts.json'),'utf8'))
  for(const name of ['tokens.css','fonts.css','assets/font.woff2','assets/icon one.svg','components/shared/shared.css'])assert(contract.artifacts[name],name)
  assert(!contract.artifacts['components/shared/component.json'])
  assert.deepEqual(await readFile(path.join(result.destination,'package/library/assets/font.woff2')),Buffer.from([0,255,88]))
}))
test('missing or escaping CSS dependencies fail closed',()=>fixture(async({bundle,dest,files,seal})=>{
  files['library/components/button/component.json']=JSON.stringify({domains:{visual:{css:'layout.css'}}})
  for(const reference of ['../../missing.css','../../../dependencies.json','../../%2e%2e/dependencies.json','file:///tmp/font.woff2','/private/font.woff2']){
    files['library/components/button/layout.css']=`@import "${reference}";`
    await seal()
    await assert.rejects(importContractLibrary(bundle,dest,{compact:true}),/CSS dependency/,reference)
  }
}))
test('symlinks are rejected',()=>fixture(async({bundle,dest})=>{
  await symlink('/tmp',path.join(bundle,'escape'))
  await assert.rejects(importContractLibrary(bundle,dest),/Symlinks/)
}))
test('contract binding cannot escape library even with a valid manifest',()=>fixture(async({bundle,dest,files,seal})=>{
  files['library/components/button/component.json']=JSON.stringify({domains:{behavior:'../../../dependencies.json'}})
  await seal()
  await assert.rejects(importContractLibrary(bundle,dest),/unsafe contract/)
}))
test('unsupported manifest and forged revision are rejected',()=>fixture(async({bundle,dest})=>{
  const filename=path.join(bundle,'manifest.json');const manifest=JSON.parse(await readFile(filename,'utf8'))
  await writeFile(filename,JSON.stringify({...manifest,revision:'0'.repeat(64)}))
  await assert.rejects(importContractLibrary(bundle,dest),/revision/)
  await writeFile(filename,JSON.stringify({...manifest,format:'unknown'}))
  await assert.rejects(importContractLibrary(bundle,dest),/Unsupported/)
}))
