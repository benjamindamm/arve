import {test} from 'node:test'
import assert from 'node:assert/strict'
import {mkdtemp,readFile,writeFile,mkdir,rm,symlink,realpath} from 'node:fs/promises'
import {tmpdir} from 'node:os'
import path from 'node:path'
import {registerExport,readRegistry,readCatalog,installedExports,digest} from '../src/contracts/connector/registry.mjs'
async function fixture(run){
 const root=await mkdtemp(path.join(await realpath(tmpdir()),'contract-registry-'))
 const file=path.join(root,'registry.json'),revision='a'.repeat(64)
 const catalog=JSON.stringify([{library:'independent',revision,component:'press-action',status:'draft',sources:{},files:{}}])
 await writeFile(path.join(root,'index.json'),catalog)
 const entry={library:'independent',revision,kind:'legacy-library',catalog:'index.json',catalogSha256:digest(catalog),labels:{'press-action':'Primary Action'}}
 try{await run({root,file,entry})}finally{await rm(root,{recursive:true,force:true})}
}
test('optional registry is empty without installed exports; no folder guessing',()=>fixture(async({root,file})=>{
 await mkdir(path.join(root,'unregistered-library'));assert.equal(readRegistry(file).exports.length,0);assert.deepEqual(installedExports(file),[])
}))
test('registration is automatic, repeatable and independent of component display names',()=>fixture(async({file,entry})=>{
 assert.equal(await registerExport(entry,file),true)
 const before=await readFile(file,'utf8')
 assert.equal(await registerExport({...entry},file),false);assert.equal(await readFile(file,'utf8'),before)
 assert.equal(installedExports(file)[0].components[0].component,'press-action')
 assert.equal(installedExports(file)[0].components[0].label,'Primary Action')
 await assert.rejects(registerExport({...entry,labels:{}},file),/refusing overwrite/)
}))
test('tampered index, unsafe paths and symlinks fail without replacing the registry',()=>fixture(async({root,file,entry})=>{
 await registerExport(entry,file);const before=await readFile(file,'utf8')
 assert.equal(readCatalog(entry,file).length,1)
 await writeFile(path.join(root,'index.json'),'tampered')
 assert.throws(()=>readCatalog(entry,file),/integrity/)
 await assert.rejects(registerExport({...entry,library:'foreign',catalog:'../outside.json'},file),/registry entry/)
 assert.equal(await readFile(file,'utf8'),before)
 await symlink(path.join(root,'index.json'),path.join(root,'symlink.json'))
 assert.throws(()=>readCatalog({...entry,catalog:'symlink.json'},file),/symlinks/)
}))
test('an active registry lock cannot overwrite a concurrent import',()=>fixture(async({root,file,entry})=>{
 await mkdir(file+'.lock');await assert.rejects(registerExport(entry,file),/locked/);assert.equal(readRegistry(file).exports.length,0)
}))
