import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdtemp, mkdir, readFile, realpath, rm, symlink, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
// Node's built-in TypeScript runner uses explicit extensions.
// @ts-ignore -- test runner imports the source directly; application imports remain extensionless.
import { getLibrarySkill, LibrarySkillError, librarySkillPackages, listLibrarySkills } from '../src/contracts/library-skills.ts'

const hash = (bytes: Buffer | string) => createHash('sha256').update(bytes).digest('hex')
async function fixture(run: (context: { root: string; registry: typeof librarySkillPackages; seal: () => Promise<void> }) => Promise<void>) {
  const temp = await mkdtemp(path.join(await realpath(os.tmpdir()), 'library-skills-'))
  const root = path.join(temp, 'package')
  const files: Record<string, string> = {
    'library/library.json': '{"components":{"Button":"components/button/component.json"}}',
    'library/components/button/component.json': '{"status":"draft"}',
    'dependencies.json': '{}',
    'skills/reader/SKILL.md': '# Reader\nRead [guidance](references/reading.md).\n',
    'skills/reader/references/reading.md': '# Guidance\nDraft remains draft.\n',
  }
  for (const [name, content] of Object.entries(files)) {
    await mkdir(path.dirname(path.join(root, name)), { recursive: true })
    await writeFile(path.join(root, name), content)
  }
  const binding = { library: 'test', revision: '', packageRoot: root }
  async function seal() {
    const entries = await Promise.all(Object.keys(files).sort().map(async name => [name, hash(await readFile(path.join(root, name)))]))
    binding.revision = hash(JSON.stringify(entries))
    await writeFile(path.join(root, 'manifest.json'), JSON.stringify({ format: 'ui-contracts-export/v1', library: binding.library, revision: binding.revision, files: Object.fromEntries(entries) }))
  }
  await seal()
  try { await run({ root, registry: [binding], seal }) } finally { await rm(temp, { recursive: true, force: true }) }
}
const code = (expected: string) => (error: unknown) => error instanceof LibrarySkillError && error.code === expected

test('actual registered export: manifest-based discovery and byte-exact main, reference, manifest and index', async () => {
  const listed = await listLibrarySkills('shadcn', '65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26')
  assert.equal(listed.exports.length, 1)
  const exported = listed.exports[0]
  const binding=librarySkillPackages.find(item=>item.revision===exported.revision)!
  assert(binding)
  assert.deepEqual(exported.skills.map(skill => skill.id), ['ui-contracts'])
  assert.equal(exported.skills[0].resources.length, 4)
  assert.equal(exported.componentPages.length, 4)
  for (const resource of exported.skills[0].resources) {
    const result = await getLibrarySkill('shadcn', exported.revision, 'ui-contracts', resource.resourcePath)
    const original = await readFile(path.join(binding.packageRoot, resource.resourcePath))
    assert(Buffer.from(result.content).equals(original))
    assert.equal(result.sha256, hash(original))
  }
})

test('explicit identity selection: no foreign library, unknown revision or skill fallback', async () => {
  await assert.rejects(listLibrarySkills('missing'), code('UNKNOWN_LIBRARY'))
  await assert.rejects(listLibrarySkills('shadcn', '0'.repeat(64)), code('UNKNOWN_REVISION'))
  await assert.rejects(getLibrarySkill('shadcn', librarySkillPackages[0].revision, 'missing'), code('UNKNOWN_SKILL'))
})

test('allowlisted references, traversal and non-skill package files', async () => fixture(async ({ registry }) => {
  const revision = registry[0].revision
  assert((await getLibrarySkill('test', revision, 'reader', undefined, registry)).content.startsWith('# Reader'))
  assert((await getLibrarySkill('test', revision, 'reader', 'skills/reader/references/reading.md', registry)).content.includes('Draft remains draft'))
  for (const resource of ['../manifest.json', '/etc/passwd', 'skills/reader/../reader/SKILL.md', 'skills\\reader\\SKILL.md', '%2e%2e/secret', 'manifest.json\0']) {
    await assert.rejects(getLibrarySkill('test', revision, 'reader', resource, registry), code('INVALID_RESOURCE_PATH'))
  }
  for (const resource of ['dependencies.json', 'library/components/button/component.json', 'skills/other/SKILL.md', 'skills/reader/references/missing.md']) {
    await assert.rejects(getLibrarySkill('test', revision, 'reader', resource, registry), code('UNKNOWN_RESOURCE'))
  }
}))

test('documentation system is explicitly bound, never inferred from the library ID', async () => fixture(async ({ registry }) => {
  const unbound = await listLibrarySkills('test', undefined, registry)
  assert.equal(unbound.exports[0].componentPages[0].component, 'button')
  assert(!('arguments' in unbound.exports[0].componentPages[0]))
  const bound = await listLibrarySkills('test', undefined, registry.map(item => ({ ...item, documentationSystem: 'separate-system' })))
  assert.deepEqual(bound.exports[0].componentPages[0].arguments, { system: 'separate-system', component: 'button' })
}))

test('missing file, tampered reference and tampered unrelated component fail the entire package', async () => {
  for (const name of ['skills/reader/references/reading.md', 'library/components/button/component.json']) {
    await fixture(async ({ root, registry }) => {
      await writeFile(path.join(root, name), 'tampered')
      await assert.rejects(listLibrarySkills('test', undefined, registry), code('INVALID_PACKAGE'))
      await assert.rejects(getLibrarySkill('test', registry[0].revision, 'reader', undefined, registry), code('INVALID_PACKAGE'))
    })
  }
  for (const name of ['manifest.json', 'skills/reader/SKILL.md', 'skills/reader/references/reading.md']) {
    await fixture(async ({ root, registry }) => {
      await rm(path.join(root, name))
      await assert.rejects(listLibrarySkills('test', undefined, registry), code('INVALID_PACKAGE'))
    })
  }
})

test('forged manifest hashes/revision, wrong identity, malformed manifest and unexpected files fail closed', async () => {
  for (const mutation of ['revision', 'files', 'library', 'format', 'json', 'extra']) {
    await fixture(async ({ root, registry }) => {
      const filename = path.join(root, 'manifest.json')
      const manifest = JSON.parse(await readFile(filename, 'utf8'))
      if (mutation === 'revision') manifest.revision = '0'.repeat(64)
      if (mutation === 'files') manifest.files['skills/reader/SKILL.md'] = '0'.repeat(64)
      if (mutation === 'library') manifest.library = 'other'
      if (mutation === 'format') manifest.format = 'unknown'
      if (mutation === 'extra') await writeFile(path.join(root, 'unexpected.md'), 'unexpected')
      await writeFile(filename, mutation === 'json' ? '{invalid' : JSON.stringify(manifest))
      await assert.rejects(listLibrarySkills('test', undefined, registry), code('INVALID_PACKAGE'))
    })
  }
})

test('symlink files, directories and root cannot escape the portable package', async () => {
  for (const target of ['skills/reader/SKILL.md', 'skills/reader/references', '']) {
    await fixture(async ({ root, registry }) => {
      const original = path.join(root, target)
      const outside = root + '-outside'
      await mkdir(outside)
      try {
        if (target.endsWith('.md')) await writeFile(path.join(outside, 'secret'), 'secret')
        await rm(original, { recursive: true, force: true })
        await symlink(target.endsWith('.md') ? path.join(outside, 'secret') : outside, original)
        await assert.rejects(listLibrarySkills('test', undefined, registry), code('INVALID_PACKAGE'))
      } finally { await rm(outside, { recursive: true, force: true }) }
    })
  }
})

test('errors do not reveal filesystem paths', async () => fixture(async ({ root, registry }) => {
  await rm(root, { recursive: true })
  await assert.rejects(listLibrarySkills('test', undefined, registry), (error: unknown) => {
    assert(error instanceof LibrarySkillError)
    assert(!error.message.includes(root))
    return true
  })
}))
