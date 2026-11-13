import { getPayload } from 'payload'
import config from '../src/payload.config'

const payload = await getPayload({ config })
try {
  const { docs: [page] } = await payload.find({
    collection: 'pages', limit: 1, draft: false,
    where: { and: [{ slug: { equals: 'shadcn-button' } }, { _status: { equals: 'published' } }] },
  })
  if (!page?.contract?.revision) throw new Error('Veröffentlichte shadcn-Button-Seite mit Contract erforderlich.')
  const name = 'Spartan Button'
  const existing = await payload.find({
    collection: 'implementations', limit: 1, draft: true,
    where: { and: [{ componentPage: { equals: page.id } }, { name: { equals: name } }] },
  })
  if (!existing.totalDocs) {
    await payload.create({ collection: 'implementations', data: {
      name, componentPage: page.id, platform: 'web', releaseStatus: 'preview', _status: 'published',
      packageName: '@spartan-ng/brain', packageVersion: '1.9.0', contexts: ['desktop', 'mobile'],
      contract: page.contract,
      verification: { scope: 'Klick und Deaktivierung im lokalen Browser geprüft. Mobile Bedienung, assistive Technologien und Contract-Konformität sind offen.' },
    } })
  }
  console.log('Spartan-Web-Implementierung vorhanden.')
} finally {
  await payload.destroy()
}
