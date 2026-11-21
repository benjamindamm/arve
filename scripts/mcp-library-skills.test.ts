import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdtemp, mkdir, realpath, rm, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
// @ts-ignore -- direct source import for the test runner.
import { compactLibrarySkills } from '../src/contracts/mcp-library-skills.ts'
// @ts-ignore -- direct source import for the test runner.
import { LibrarySkillError, type LibrarySkillPackage } from '../src/contracts/library-skills.ts'

const hash = (value: string) => createHash('sha256').update(value).digest('hex')
const code = (expected: string) => (error: unknown) => error instanceof LibrarySkillError && error.code === expected
async function fixture(run: (registry: LibrarySkillPackage[]) => Promise<void>) {
  const root = await mkdtemp(path.join(await realpath(os.tmpdir()), 'compact-skills-'))
  const registry: LibrarySkillPackage[] = []
  try {
    for (let i = 0; i < 3; i++) {
      const files = { 'dependencies.json': '{}', 'library/library.json': '{"components":{"Button":"components/button/component.json"}}', 'library/components/button/component.json': '{}', 'skills/reader/SKILL.md': '# Reader ' + i }
      const entries = Object.entries(files).sort(([a], [b]) => Buffer.compare(Buffer.from(a), Buffer.from(b)))
      const digests = entries.map(([name, value]) => [name, hash(value)])
      const revision = hash(JSON.stringify(digests))
      const packageRoot = path.join(root, String(i))
      for (const [name, value] of entries) {
        await mkdir(path.dirname(path.join(packageRoot, name)), { recursive: true })
        await writeFile(path.join(packageRoot, name), value)
      }
      await writeFile(path.join(packageRoot, 'manifest.json'), JSON.stringify({ format: 'ui-contracts-export/v1', library: 'test', revision, files: Object.fromEntries(digests) }))
      registry.push({ library: 'test', revision, packageRoot, ...(i === 0 ? { documentationSystem: 'different-system' } : {}) })
    }
    await run(registry)
  } finally { await rm(root, { recursive: true, force: true }) }
}

test('registered exports paginate without omissions and bindings come from explicit registry', async () => fixture(async registry => {
  const seen: string[] = []
  for (let offset = 0; offset < registry.length; offset++) {
    const page = await compactLibrarySkills('test', undefined, offset, 1, registry)
    assert.equal(page.pagination.total, 3)
    assert.equal(page.exports.length, 1)
    seen.push(page.exports[0].revision)
    const bindings = page.exports[0].componentPages
    assert.equal(bindings.count, 1)
    assert.equal(bindings.index.arguments.revision, registry[offset].revision)
    assert.equal(bindings.index.arguments.resourcePath, 'library/library.json')
    if (offset === 0) assert.equal(bindings.documentationSystem, 'different-system')
    else assert(!('documentationSystem' in bindings))
    assert(Buffer.byteLength(JSON.stringify({ structuredContent: page, content: [{ type: 'text', text: JSON.stringify(page) }] })) < 16000)
    assert.equal(page.pagination.nextOffset, offset < 2 ? offset + 1 : null)
  }
  assert.deepEqual(seen, registry.map(item => item.revision))
  assert.equal((await compactLibrarySkills('test', undefined, 3, 1, registry)).exports.length, 0)
}))

test('nonselected broken exports are not opened; selected unrelated tampering fails verification', async () => fixture(async registry => {
  await rm(registry[1].packageRoot, { recursive: true })
  assert.equal((await compactLibrarySkills('test', undefined, 0, 1, registry)).exports.length, 1)
  await assert.rejects(compactLibrarySkills('test', undefined, 1, 1, registry), code('INVALID_PACKAGE'))
  await writeFile(path.join(registry[0].packageRoot, 'library/components/button/component.json'), 'tampered')
  await assert.rejects(compactLibrarySkills('test', registry[0].revision, 0, 1, registry), code('INVALID_PACKAGE'))
}))

test('unknown library, wrong revision, and invalid pagination fail before package access', async () => {
  const registry = [{ library: 'test', revision: 'a'.repeat(64), packageRoot: '/missing-not-read' }]
  await assert.rejects(compactLibrarySkills('missing', undefined, 0, 1, registry), code('UNKNOWN_LIBRARY'))
  await assert.rejects(compactLibrarySkills('test', 'b'.repeat(64), 0, 1, registry), code('UNKNOWN_REVISION'))
  await assert.rejects(compactLibrarySkills('test', undefined, 2, 1, registry), code('INVALID_RANGE'))
  await assert.rejects(compactLibrarySkills('test', undefined, 0, 4, registry), code('INVALID_RANGE'))
})
