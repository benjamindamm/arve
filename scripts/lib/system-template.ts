/** Content-only copies: immutable contract references retain their original identity. */
import assert from 'node:assert/strict'
import { readFile, rm } from 'node:fs/promises'
import { basename, resolve } from 'node:path'
import { randomUUID, createHash } from 'node:crypto'
export type Snapshot = { format: number; system: any; pages: any[]; implementations: any[]; media: any[]; [key: string]: any }
export function prepareTemplate(source: Snapshot, slug: string, name: string) {
  assert.equal(source.format, 1)
  assert(/^[a-z][a-z0-9-]{0,79}$/.test(slug), 'Invalid target slug')
  assert(name.trim(), 'Target name required')
  assert.notEqual(slug, source.system.slug, 'Choose a new system slug')
  const original = source.system.slug
  assert(/^[a-z][a-z0-9-]{0,79}$/.test(original), 'Invalid source slug')
  const slugs = new Map<string,string>(source.pages.map(p => [p.slug, slug + '-' + (p.slug.startsWith(original + '-') ? p.slug.slice(original.length + 1) : p.slug)]))
  assert.equal(slugs.size, source.pages.length, 'Duplicate page slug')
  assert.equal(new Set(slugs.values()).size, source.pages.length, 'Target page slug collision')
  assert(slugs.has(source.system.home), 'Missing home page')
  for (const page of source.pages) {
    assert(!page.parent || slugs.has(page.parent), 'External parent')
    const visited = new Set<string>([page.slug]); let parent = page.parent
    while (parent) { assert(!visited.has(parent), 'Parent cycle'); visited.add(parent); parent = source.pages.find(p => p.slug === parent)?.parent }
  }
  // Only actual URLs are changed; source citations, contract IDs and prose survive verbatim.
  const rewrite = (value: any, key = ''): any => {
    if (Array.isArray(value)) return value.map(v => rewrite(v))
    if (value && typeof value === 'object') {
      assert(!(value.type === 'relationship' || value.type === 'upload' || value.fields?.linkType === 'internal'), 'Document relationships require explicit export mapping')
      return Object.fromEntries(Object.entries(value).filter(([k]) => !['id','createdAt','updatedAt'].includes(k)).map(([k,v]) => [k,rewrite(v,k)]))
    }
    if (typeof value === 'string' && ['url','href'].includes(key)) {
      return value.replace(new RegExp('^/systems/' + original + '(?=/|[?#]|$)'), '/systems/' + slug)
    }
    return value
  }
  const result = rewrite(source) as Snapshot
  result.system = { ...result.system, slug, name: name.trim(), home: slugs.get(source.system.home) }
  result.pages = result.pages.map(page => ({ ...page, slug: slugs.get(page.slug), parent: page.parent ? slugs.get(page.parent) : undefined, system: slug, _status: 'draft' }))
  result.implementations = result.implementations.map(impl => {
    assert(slugs.has(impl.componentPage), 'External implementation page')
    return { ...impl, componentPage: slugs.get(impl.componentPage), _status: 'draft', releaseStatus: 'draft', verification: { ...impl.verification, scope: `Aus der Referenz ${original} übernommen; für ${name.trim()} noch nicht geprüft.\n${impl.verification?.scope ?? ''}` } }
  })
  return result
}
export async function importTemplate(payload: any, template: Snapshot, apply = false, mediaDirectory?: string) {
  const uploads = []
  for (const media of template.media) {
    assert(mediaDirectory && basename(media.key) === media.key, 'Invalid media path')
    const data = await readFile(resolve(mediaDirectory,media.key))
    assert.equal(createHash('sha256').update(data).digest('hex'),media.sha256,'Media checksum mismatch')
    uploads.push({media,data})
  }
  const createdFiles: string[] = []
  const tx = await payload.db.beginTransaction(); assert(tx, 'Transactions required')
  const req = { transactionID: tx }
  try {
    const existing = await payload.find({ collection: 'design-systems', where: { slug: { equals: template.system.slug } }, limit: 1, req })
    assert.equal(existing.docs.length, 0, 'Target system already exists; nothing overwritten')
    const conflicts = await payload.find({ collection: 'pages', where: { slug: { in: template.pages.map(p => p.slug) } }, limit: 1, draft: true, req })
    assert.equal(conflicts.docs.length, 0, 'Target page slug already exists')
    for (const page of template.pages) for (const block of page.content ?? []) if(block.blockType === 'guideline' && block.image) assert(uploads.some(item=>item.media.key === block.image),'Missing media dependency')
    const report = { mode: apply ? 'apply' : 'preview', slug: template.system.slug, pages: template.pages.length, components: template.pages.filter(p => p.component).length, implementations: template.implementations.length, status: 'draft' }
    if (apply) {
      const { home, ...systemData } = template.system
      const system = await payload.create({ collection: 'design-systems', data: systemData, req })
      const mediaIDs = new Map<string,number>()
      for (const {media,data} of uploads) {
        const name = template.system.slug + '-' + randomUUID() + '-' + media.key
        const path = resolve('media',name); createdFiles.push(path)
        const upload = await payload.create({collection:'media',data:{alt:media.alt},file:{data,name,mimetype:media.mimeType ?? 'image/png',size:data.length},req})
        if(upload.filename) createdFiles.push(resolve('media',upload.filename))
        mediaIDs.set(media.key,upload.id)
      }
      const pages = new Map<string,any>()
      for (const { parent, ...page } of template.pages) pages.set(page.slug, await payload.create({ collection: 'pages', data: { ...page, content: page.content?.map((block:any)=>block.blockType==='guideline' && block.image ? {...block,image:mediaIDs.get(block.image)} : block), designSystem: system.id }, draft: true, req }))
      for (const page of template.pages) if (page.parent) await payload.update({ collection: 'pages', id: pages.get(page.slug).id, data: { parent: pages.get(page.parent).id }, draft: true, req })
      await payload.update({ collection: 'design-systems', id: system.id, data: { home: pages.get(home).id }, req })
      for (const impl of template.implementations) await payload.create({ collection: 'implementations', data: { ...impl, componentPage: pages.get(impl.componentPage).id }, draft: true, req })
    }
    if (apply) await payload.db.commitTransaction(tx); else await payload.db.rollbackTransaction(tx)
    return report
  } catch (error) { await payload.db.rollbackTransaction(tx); await Promise.all(createdFiles.map(path=>rm(path,{force:true}))); throw error }
}
