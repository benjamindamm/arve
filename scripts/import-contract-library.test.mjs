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
test('tampered bytes and undeclared files are rejected',()=>fixture(async({bundle,dest})=>{
  await writeFile(path.join(bundle,'library/tokens.json'),'tampered')
  await assert.rejects(importContractLibrary(bundle,dest),/checksum/)
  await writeFile(path.join(bundle,'extra.txt'),'extra')
  await assert.rejects(importContractLibrary(bundle,dest),/Unexpected/)
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
