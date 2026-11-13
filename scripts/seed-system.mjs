import { parseArgs } from 'node:util'

const { values } = parseArgs({ options: {
  slug: { type: 'string' },
  name: { type: 'string' },
  url: { type: 'string', default: 'http://127.0.0.1:3010' },
  help: { type: 'boolean', short: 'h' },
} })

if (values.help) {
  console.log('npm run seed:system -- --slug <slug> --name "<Name>" [--url <Payload-URL>]')
  process.exit(0)
}

const { slug, name } = values
if (!slug || !/^[a-z][a-z0-9-]{0,79}$/.test(slug) || !name?.trim()) {
  throw new Error('--slug (Kleinbuchstaben, Ziffern und Bindestriche) und --name sind erforderlich.')
}
const apiKey = process.env.PAYLOAD_API_KEY
if (!apiKey) throw new Error('PAYLOAD_API_KEY muss gesetzt sein.')
const base = new URL(values.url)
if (base.protocol !== 'https:' && !(base.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(base.hostname))) {
  throw new Error('Für entfernte Payload-Instanzen ist HTTPS erforderlich.')
}
base.pathname = base.pathname.replace(/\/$/, '') + '/api/'
base.search = ''
base.hash = ''

async function request(path, method = 'GET', data) {
  const response = await fetch(new URL(path, base), {
    method,
    redirect: 'error',
    headers: { Authorization: 'users API-Key ' + apiKey, 'Content-Type': 'application/json' },
    body: data === undefined ? undefined : JSON.stringify(data),
  })
  const result = await response.json()
  if (!response.ok) {
    throw new Error(method + ' ' + path + ' (' + response.status + '): ' +
      (result.errors?.map(({ message }) => message).join(', ') || 'Payload-Anfrage fehlgeschlagen.'))
  }
  return result
}

async function find(collection, slug, draft = false) {
  const query = new URLSearchParams({ 'where[slug][equals]': slug, limit: '1', depth: '0' })
  if (draft) query.set('draft', 'true')
  return (await request(collection + '?' + query)).docs[0]
}

async function ensure(collection, data, draft = false) {
  const existing = await find(collection, data.slug, draft)
  if (existing) return { doc: existing, created: false }
  try {
    const { doc } = await request(collection + (draft ? '?draft=true' : ''), 'POST', data)
    return { doc, created: true }
  } catch (error) {
    const concurrent = await find(collection, data.slug, draft)
    if (concurrent) return { doc: concurrent, created: false }
    throw error
  }
}

const { doc: system, created } = await ensure('design-systems', { slug, name: name.trim() })
console.log((created ? 'Angelegt: ' : 'Vorhanden: ') + system.slug)

const pages = [
  ['uebersicht', 'Übersicht', 'overview'],
  ['grundlagen', 'Grundlagen', 'foundation'],
  ['layouts', 'Layouts', 'layout'],
  ['ux-patterns', 'UX-Patterns', 'pattern'],
  ['komponenten', 'Komponenten', 'guide'],
  ['content-design', 'Content Design', 'guide'],
  ['barrierefreiheit', 'Barrierefreiheit', 'guide'],
  ['mitwirken', 'Mitwirken und Releases', 'guide'],
]

let home
for (const [order, [section, title, pageType]] of pages.entries()) {
  const pageSlug = slug + '-' + section
  const { doc, created } = await ensure('pages', {
    slug: pageSlug, title, pageType, order, designSystem: system.id, _status: 'draft',
  }, true)
  const owner = typeof doc.designSystem === 'object' ? doc.designSystem?.id : doc.designSystem
  if (owner !== system.id) throw new Error('Seitenslug ist bereits anderweitig belegt: ' + pageSlug)
  if (pageType === 'overview') home = doc.id
  console.log((created ? 'Entwurf angelegt: ' : 'Vorhanden: ') + pageSlug)
}

const latest = await find('design-systems', slug)
if (!latest.home) await request('design-systems/' + system.id, 'PATCH', { home })
