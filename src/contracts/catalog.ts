import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import shadcnSemantic from './libraries/shadcn/30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90/contracts.json'
import shadcnComplete from './libraries/shadcn/bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91/contracts.json'
import shadcnPortable from './libraries/shadcn/65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26/contracts.json'
import shadcnSnapshot from './libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/contracts.json'
import switchContract from './exports/shadcn/switch/3994eb962797b7f48a25939c595dc9e9aac98e3423ff8865e313b3305d0cbb29.json'
import checkboxPrevious from './exports/shadcn/checkbox/8b7fe52b9495071663062267997935f6f223628f0b012c867b4aa3665d77b5d8.json'
import checkboxContract from './exports/shadcn/checkbox/638e6f954f0c03f4efe5c682e0c90f757db9e1259daec3591d9ba4b494a6a072.json'
import inputPrevious from './exports/shadcn/input/be0abde445ff735e76a340e34826318dfd4585f14a7689f60b3ad8d96bba74c9.json'
import inputContract from './exports/shadcn/input/70bc11b26ef7f00f952db731e1397a265648922a9e79181db08ac745ea0f7c76.json'
import button from './exports/shadcn/button/fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d.json'

type ContractExport = {
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

const catalog = [...shadcnSemantic, ...shadcnComplete, ...shadcnPortable, ...shadcnSnapshot, button, inputContract, checkboxContract, switchContract, inputPrevious, checkboxPrevious] as unknown as ContractExport[]
const hydrated = new Map<string, ContractExport>()
const artifactRoots: Record<string,string> = {
  '30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90': path.join(process.cwd(),'src/contracts/libraries/shadcn/30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90/package/library'),
  'bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91': path.join(process.cwd(),'src/contracts/libraries/shadcn/bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91/package/library'),
  '65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26': path.join(process.cwd(),'src/contracts/libraries/shadcn/65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26'),
  '5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed': path.join(process.cwd(),'src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed'),
}

export function contractArtifactPath(contract: Pick<ContractExport, 'library' | 'component' | 'revision'>, name: string) {
  const item = catalog.find(item => item.library === contract.library && item.component === contract.component && item.revision === contract.revision)
  if (!item?.artifacts?.[name] || !/^[a-z][a-z0-9-]*$/.test(item.library) || !/^[a-f0-9]{64}$/.test(item.revision) || name.includes('\\') || name.split('/').some(part => !part || part === '.' || part === '..')) return undefined
  const root=item.library==='shadcn'?artifactRoots[item.revision]:undefined
  return root?path.join(root,name):undefined
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
  const item = catalog.find((item) =>
    item.library === reference?.library &&
    item.component === reference?.component &&
    item.revision === reference?.revision,
  )
  return item ? hydrate(item) : undefined
}

export function getShadcnContract(component: string) {
  const item = catalog.find((item) => item.library === 'shadcn' && item.component === component)
  return item ? hydrate(item) : undefined
}
