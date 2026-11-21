import { createHash } from 'node:crypto'
import { mkdir, lstat, readFile, readdir, rename, rm, mkdtemp, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const validPath = value => typeof value === 'string' && value.length > 0 && !value.includes('\\') && !value.includes('\0') && !path.posix.isAbsolute(value) && value.split('/').every(part => part && part !== '.' && part !== '..')
const sorted = entries => [...entries].sort(([a], [b]) => Buffer.compare(Buffer.from(a), Buffer.from(b)))

async function collect(root, directory = '', files = new Map()) {
  for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
    const relative = path.posix.join(directory, entry.name)
    if (!validPath(relative)) throw new Error('Unsafe package path: ' + relative)
    if (entry.isDirectory()) await collect(root, relative, files)
    else if (entry.isFile()) files.set(relative, await readFile(path.join(root, relative)))
    else throw new Error('Symlinks and special entries are not allowed: ' + relative)
  }
  return files
}

export async function importContractLibrary(bundle, destinationRoot = 'src/contracts/libraries', { compact = false } = {}) {
  if (!(await lstat(bundle)).isDirectory()) throw new Error('Package root must be a regular directory')
  const files = await collect(path.resolve(bundle))
  const manifest = JSON.parse(files.get('manifest.json')?.toString('utf8') ?? 'null')
  if (!manifest || manifest.format !== 'ui-contracts-export/v1' || !/^[a-z][a-z0-9-]*$/.test(manifest.library)) throw new Error('Unsupported export manifest')
  if (!manifest.files || typeof manifest.files !== 'object' || Array.isArray(manifest.files)) throw new Error('Invalid files manifest')
  const entries = sorted(Object.entries(manifest.files))
  if (entries.length !== files.size - 1) throw new Error('Unexpected or missing package files')
  for (const [name, digest] of entries) {
    if (!validPath(name) || name === 'manifest.json' || !/^[a-f0-9]{64}$/.test(digest) || !files.has(name) || hash(files.get(name)) !== digest) throw new Error('Invalid path or checksum: ' + name)
  }
  if (hash(JSON.stringify(entries)) !== manifest.revision) throw new Error('Invalid package revision')
  for (const required of ['library/library.json', 'dependencies.json', 'skills/ui-contracts/SKILL.md']) {
    if (!files.has(required)) throw new Error('Missing required file: ' + required)
  }
  const libraryFiles = new Map([...files].filter(([name]) => name.startsWith('library/')).map(([name, bytes]) => [name.slice(8), bytes]))
  const libraryManifest = sorted([...libraryFiles].map(([name, bytes]) => [name, hash(bytes)]))
  const index = JSON.parse(libraryFiles.get('library.json').toString('utf8'))
  if (!index.components || typeof index.components !== 'object' || Array.isArray(index.components)) throw new Error('Invalid library components')
  const contracts = Object.values(index.components).map(definitionPath => {
    if (!/^components\/[a-z][a-z0-9-]*\/component\.json$/.test(definitionPath) || !libraryFiles.has(definitionPath)) throw new Error('Invalid component definition: ' + definitionPath)
    const directory = path.posix.dirname(definitionPath)
    const definition = JSON.parse(libraryFiles.get(definitionPath).toString('utf8'))
    const { interface: api, visual, behavior, accessibility } = definition.domains
    const bindings = { interface: api, tokens: visual?.tokens, css: visual?.css, behavior,
      accessibility: typeof accessibility === 'string' ? accessibility : accessibility?.html,
      accessibilityRules: accessibility?.rules, ux: definition.ux, stories: definition.stories }
    const sources = Object.fromEntries(Object.entries(bindings).flatMap(([domain, value]) => {
      if (typeof value !== 'string') return []
      const name = path.posix.join(directory, value)
      if (path.posix.isAbsolute(value) || value.includes('\\') || !validPath(name) || !libraryFiles.has(name)) throw new Error('Missing or unsafe contract source: ' + value)
      return [[domain, name]]
    }))
    const selected = new Set([definitionPath, 'library.json', 'README.md', ...Object.values(sources)])
    if (compact) {
      for (const [name] of libraryManifest) if (name.startsWith(directory + '/')) selected.add(name)
      // Follow source bindings from the component's own text, preserving portable evidence
      // without duplicating every other component's source tree in each MCP response.
      const queue = [...selected]
      const add = (name) => { if ((!name.startsWith('components/') || name.startsWith(directory + '/')) && validPath(name) && libraryFiles.has(name) && !selected.has(name)) { selected.add(name); queue.push(name) } }
      for (let i = 0; i < queue.length; i++) {
        const name = queue[i], bytes = libraryFiles.get(name)
        if (!bytes || name === 'library.json' || name === 'README.md' || !/\.(json|md|css|scxml|html|source|txt|tsx?|xml)$/.test(name)) continue
        const content = bytes.toString('utf8')
        const references = []
        if (name.endsWith('.json')) {
          const walk = value => { if (typeof value === 'string') references.push(value); else if (Array.isArray(value)) value.forEach(walk); else if (value && typeof value === 'object') Object.values(value).forEach(walk) }
          try { walk(JSON.parse(content)) } catch { /* Evidence text is not necessarily JSON. */ }
        }
        if (name.endsWith('.md')) for (const match of content.matchAll(/\]\(([^\s)]+)(?:\s+[^)]*)?\)/g)) references.push(match[1])
        for (const reference of references) {
          if (/^[a-z]+:/i.test(reference) || reference.startsWith('/') || reference.includes('\\')) continue
          const clean = reference.split('#')[0]
          add(path.posix.join(path.posix.dirname(name), clean)); add(clean)
        }
      }
    }
    const scope = libraryManifest.filter(([name]) => compact ? selected.has(name) : !name.startsWith('components/') || name.startsWith(directory + '/'))
    return { library: manifest.library, revision: manifest.revision, component: path.posix.basename(directory), origin: 'portable-export', status: definition.status, sources,
      ...(compact ? { deferredFiles: true } : {}), files: Object.fromEntries((compact ? [] : scope).flatMap(([name, sha256]) => {
        const bytes = libraryFiles.get(name), content = bytes.toString('utf8')
        return Buffer.from(content).equals(bytes) && !content.includes('\0') ? [[name, { path: name, sha256, content }]] : []
      })), artifacts: Object.fromEntries(scope) }
  })
  // Preserve the complete, independently verifiable package, including its skills.
  // Flattened library files retain compatibility with existing Arve artifact paths.
  const output = new Map(compact ? [] : libraryFiles)
  for (const name of ['package', 'snapshot.json', 'contracts.json']) {
    if ([...libraryFiles.keys()].some(key => key === name || key.startsWith(name + '/'))) throw new Error('Reserved import path: ' + name)
  }
  for (const [name, bytes] of files) output.set('package/' + name, bytes)
  output.set('snapshot.json', Buffer.from(JSON.stringify({ library: manifest.library, revision: manifest.revision, format: manifest.format, files: Object.fromEntries(libraryManifest), package: 'package/manifest.json' }, null, 2) + '\n'))
  output.set('contracts.json', Buffer.from(JSON.stringify(contracts, null, 2) + '\n'))
  const parent = path.resolve(destinationRoot, manifest.library)
  const destination = path.join(parent, manifest.revision)
  let existing
  try { existing = await collect(destination) } catch (error) { if (error.code !== 'ENOENT') throw error }
  if (existing) {
    if (existing.size !== output.size || [...output].some(([name, bytes]) => !existing.get(name)?.equals(bytes))) throw new Error('Existing revision differs; refusing overwrite')
    return { library: manifest.library, revision: manifest.revision, destination, reused: true }
  }
  await mkdir(parent, { recursive: true })
  const staging = await mkdtemp(path.join(parent, '.import-'))
  try {
    for (const [name, bytes] of output) { const target = path.join(staging, name); await mkdir(path.dirname(target), { recursive: true }); await writeFile(target, bytes, { flag: 'wx' }) }
    await rename(staging, destination)
  } finally { await rm(staging, { recursive: true, force: true }) }
  return { library: manifest.library, revision: manifest.revision, destination, reused: false }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [bundle, ...rest] = process.argv.slice(2)
  if (!bundle || rest.some(arg => arg !== '--compact')) throw new Error('Usage: node scripts/import-contract-library.mjs <portable-export-directory> [--compact]')
  console.log(JSON.stringify(await importContractLibrary(bundle, undefined, { compact: rest.includes('--compact') }), null, 2))
}
