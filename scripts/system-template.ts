/** Import the complete reference into Payload, or export its content and dependencies. */
import assert from 'node:assert/strict'
import { readFile, writeFile, mkdir, cp, readdir, lstat, access } from 'node:fs/promises'
import { resolve, join, relative, dirname, basename } from 'node:path'
import { createHash } from 'node:crypto'
import { parseArgs } from 'node:util'
import { prepareTemplate, importTemplate, type Snapshot } from './lib/system-template'

const hash = (data: Buffer) => createHash('sha256').update(data).digest('hex')
async function inventory(root: string, directory = root): Promise<Record<string,string>> {
  const result: Record<string,string> = {}
  if ((await lstat(directory)).isFile()) return {[basename(directory)]:hash(await readFile(directory))}
  for (const name of (await readdir(directory)).sort()) {
    const path = join(directory,name), stat = await lstat(path)
    assert(!stat.isSymbolicLink(), 'Symlinks are not portable')
    if (stat.isDirectory()) Object.assign(result,await inventory(root,path))
    else result[relative(root,path)] = hash(await readFile(path))
  }
  return result
}
const { values, positionals } = parseArgs({allowPositionals:true, options: {
  input: {type:'string'}, out: {type:'string'}, slug:{type:'string'}, name:{type:'string'},
  apply:{type:'boolean'}, schema:{type:'string'}, 'initialize-schema':{type:'boolean'}, 'initialize-empty-database':{type:'boolean'}, help:{type:'boolean'},
}})
async function main() {
  if(values.help) { console.log('Export: npm run reference:export -- --out <new-directory>\nImport: TEMPLATE_DATABASE_URI=<target> npm run reference:import -- --slug <new-slug> --name <name> [--input <package-directory>] [--apply]\nDefault source: committed complete handbook snapshot + contract dependencies. Preview is the default. Target database must be explicit. For a new empty database: --apply --initialize-empty-database.'); return }
  const operation = positionals[0]; assert(['export','import'].includes(operation), 'Choose export or import')
  const root = values.input ? resolve(values.input) : process.cwd()
  const file = values.input ? join(root,'snapshot.json') : resolve('scripts/content/handbook-snapshot.json')
  if(values.input) {
    const manifest = JSON.parse(await readFile(join(root,'manifest.json'),'utf8'))
    assert.equal(manifest.format,1)
    const actual = await inventory(root); delete actual['manifest.json']
    assert.deepEqual(actual,manifest.files,'Package checksum mismatch')
  }
  const snapshot = JSON.parse(await readFile(file,'utf8')) as Snapshot
  assert.equal(snapshot.format,1)
  const dependencies: string[] = []
  for (const row of [...snapshot.pages,...snapshot.implementations].filter(p=>p.contract?.revision)) {
    const ref = row.contract
    assert(/^[a-z][a-z0-9-]*$/.test(ref.library) && /^[a-z][a-z0-9-]*$/.test(ref.component) && /^[a-f0-9]{64}$/.test(ref.revision),'Invalid contract dependency')
    const base = values.input ? join(root,'contracts') : resolve('src/contracts')
    let dependency = `libraries/${ref.library}/${ref.revision}`
    try { await access(join(base,dependency)) } catch { dependency = `exports/${ref.library}/${ref.component}/${ref.revision}.json`; await access(join(base,dependency)) }
    if(!dependencies.includes(dependency)) dependencies.push(dependency)
  }
  if(operation==='export') {
    assert(values.out,'--out required'); const target = resolve(values.out)
    assert(!target.startsWith(resolve('src/contracts')+'/'),'Choose an output outside the contract tree')
    await mkdir(target) // Refuse existing directories, including source/input.
    await writeFile(join(target,'snapshot.json'),JSON.stringify(snapshot,null,2)+'\n')
    for(const dep of dependencies) { const destination=join(target,'contracts',dep); await mkdir(dirname(destination),{recursive:true}); await cp(join(root,values.input?'contracts':'src/contracts',dep),destination,{recursive:true,errorOnExist:true,force:false}) }
    if(snapshot.media.length) await cp(join(root,values.input?'media':'scripts/content/handbook-snapshot-media'),join(target,'media'),{recursive:true})
    await writeFile(join(target,'manifest.json'),JSON.stringify({format:1,source:snapshot.system.slug,capturedAt:snapshot.capturedAt,files:await inventory(target)},null,2)+'\n')
    console.log(JSON.stringify({directory:target,pages:snapshot.pages.length,components:snapshot.pages.filter(p=>p.component).length,dependencies},null,2)); return
  }
  assert(values.slug && values.name,'--slug and --name required')
  const template = prepareTemplate(snapshot,values.slug,values.name)
  // Runtime catalogue is registered in this checkout. Fail early on missing or differing dependencies.
  for(const dep of dependencies) {
    const installed = await inventory(resolve('src/contracts',dep))
    if(values.input) assert.deepEqual(installed,await inventory(join(root,'contracts',dep)),'Contract dependency differs: '+dep)
  }
  const uri = process.env.TEMPLATE_DATABASE_URI; assert(uri,'Explicit TEMPLATE_DATABASE_URI required')
  assert(!values['initialize-schema'] || values.apply && /^handbook_bootstrap_[a-z0-9_]+$/.test(values.schema??''),'Schema initialization requires --apply and a new handbook_bootstrap_* schema')
  assert(!values['initialize-empty-database'] || values.apply && !values.schema && !values['initialize-schema'],'Empty database initialization requires --apply without schema')
  const {connect} = await import('./bootstrap-handbook')
  const payload = await connect(uri,values.schema,Boolean(values['initialize-schema']||values['initialize-empty-database']))
  try { console.log(JSON.stringify(await importTemplate(payload,template,Boolean(values.apply),values.input?join(root,'media'):resolve('scripts/content/handbook-snapshot-media')),null,2)) }
  finally { await payload.destroy() }
}
main().then(()=>process.exit(0)).catch(error=>{console.error(error instanceof assert.AssertionError ? error.message : 'Template operation failed. No connection details are printed.');process.exit(1)})
