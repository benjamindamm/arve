import { createHash } from 'node:crypto'
import { mkdir, readFile, realpath, writeFile } from 'node:fs/promises'
import path from 'node:path'

const [repo, library, component] = process.argv.slice(2)
const slug = /^[a-z][a-z0-9-]*$/
if (!repo || !slug.test(library ?? '') || !slug.test(component ?? '')) {
  throw new Error('Usage: node scripts/export-contract.mjs <ui-contracts repo> <library> <component>')
}

const root = await realpath(path.join(repo, 'libraries', library))
const digest = (value) => createHash('sha256').update(value).digest('hex')
const files = {}
async function read(relativePath) {
  const file = await realpath(path.resolve(root, relativePath))
  if (!file.startsWith(root + path.sep)) throw new Error('Contract path outside library: ' + relativePath)
  const content = await readFile(file, 'utf8')
  files[relativePath] = { path: relativePath, sha256: digest(content), content }
  return content
}

const index = JSON.parse(await read('library.json'))
const definitionPath = 'components/' + component + '/component.json'
if (!Object.values(index.components).includes(definitionPath)) throw new Error('Component is not registered')
const definition = JSON.parse(await read(definitionPath))
const bindings = {
  interface: definition.domains.interface,
  tokens: definition.domains.visual?.tokens,
  css: definition.domains.visual?.css,
  behavior: definition.domains.behavior,
  accessibility: typeof definition.domains.accessibility === 'string'
    ? definition.domains.accessibility : definition.domains.accessibility?.html,
  accessibilityRules: definition.domains.accessibility?.rules,
}
const sources = {}
for (const [domain, binding] of Object.entries(bindings)) {
  if (typeof binding !== 'string') continue
  const relativePath = path.posix.join(path.posix.dirname(definitionPath), binding)
  await read(relativePath)
  sources[domain] = relativePath
}
const revision = digest(JSON.stringify(Object.entries(files).sort().map(([key, file]) => [key, file.sha256])))
const out = path.join('src/contracts/exports', library, component)
await mkdir(out, { recursive: true })
await writeFile(path.join(out, revision + '.json'), JSON.stringify({
  library, component, revision, origin: 'working-tree', status: definition.status, sources, files,
}, null, 2) + '\n', { flag: 'wx' }).catch(async (error) => {
  if (error.code !== 'EEXIST') throw error
})
console.log(revision)
