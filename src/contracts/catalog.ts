import {createHash} from 'node:crypto'
import {readFileSync} from 'node:fs'
import path from 'node:path'
import {readRegistry,readCatalog,registeredPath,defaultRegistryFile} from './connector/registry.mjs'
import {shadcnReferenceRevision} from './current-reference'

export type ContractExport = {
  library: string
  component: string
  revision: string
  origin: string
  artifacts?: Record<string, string>
  styleAssets?: {path:string;sha256:string;kind:'stylesheet'|'font'|'image'|'asset'}[]
  status: string
  sources: Record<string, string>
  files: Record<string, { path: string; sha256: string; content: string }>
  deferredFiles?: boolean
}

const hydrated = new Map<string, ContractExport>()
export function contractArtifactPath(contract:Pick<ContractExport,'library'|'component'|'revision'>,name:string) {
 const entry=readRegistry().exports.find((entry:any)=>entry.library===contract.library&&entry.revision===contract.revision)
 if(!entry?.artifactRoot)return undefined
 const item=(readCatalog(entry) as ContractExport[]).find(item=>item.component===contract.component)
 if(!item?.artifacts?.[name])return undefined
 return registeredPath(path.dirname(defaultRegistryFile()),entry.artifactRoot+'/'+name)
}

function hydrate(item: ContractExport) {
  if (!item.deferredFiles) return item
  const key = `${item.library}/${item.revision}/${item.component}`
  const cached = hydrated.get(key)
  if (cached) return cached
  const { deferredFiles: _, ...value } = item
  const files: ContractExport['files'] = {}
  const embedded = new Set([...Object.values(item.sources), `components/${item.component}/component.json`, `components/${item.component}/README.md`, 'library.json'])
  for (const [name, sha256] of Object.entries(item.artifacts ?? {})) {
    if (!embedded.has(name)) continue
    const filename = contractArtifactPath(item, name)
    if (!filename) throw new Error('Invalid registered contract artifact')
    let bytes: Buffer
    // Registered package assets are included explicitly by next.config.mjs.
    try { bytes = readFileSync(/*turbopackIgnore: true*/ filename) } catch { throw new Error('Registered contract artifact unavailable') }
    if (createHash('sha256').update(bytes).digest('hex') !== sha256) throw new Error('Contract artifact integrity check failed')
    const content = bytes.toString('utf8')
    if (Buffer.from(content).equals(bytes) && !content.includes('\0')) files[name] = { path: name, sha256, content }
  }
  const result = { ...value, files }
  if (hydrated.size >= 4) hydrated.delete(hydrated.keys().next().value!)
  hydrated.set(key, result)
  return result
}

export function getContract(reference: { library?: string | null; component?: string | null; revision?: string | null } | null | undefined) {
  const entry=readRegistry().exports.find((entry:any)=>entry.library===reference?.library&&entry.revision===reference?.revision)
  const item=entry?(readCatalog(entry) as ContractExport[]).find(item=>item.component===reference?.component):undefined
  return item ? hydrate(item) : undefined
}

export function getShadcnContract(component: string) {
  return getContract({library:'shadcn',revision:shadcnReferenceRevision,component})
}
