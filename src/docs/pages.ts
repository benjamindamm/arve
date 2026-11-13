import config from '@payload-config'
import { headers } from 'next/headers'
import { getPayload } from 'payload'

export const sections = [
  { slug: 'grundlagen', title: 'Grundlagen', summary: 'Farben, Typografie und Abstände für eine konsistente Oberfläche.' },
  { slug: 'button', title: 'Button', summary: 'Aktionen klar benennen und die wichtigsten Schritte hervorheben.' },
  { slug: 'textfeld', title: 'Textfeld', summary: 'Eingaben verständlich beschriften und Fehler sichtbar machen.' },
  { slug: 'dialog', title: 'Dialog', summary: 'Kurze Entscheidungen im richtigen Moment unterstützen.' },
  { slug: 'formular-validierung', title: 'Formulare', summary: 'Eingaben, Validierung und Rückmeldungen sinnvoll verbinden.' },
  { slug: 'mitwirken-releases', title: 'Mitwirken', summary: 'Änderungen vorschlagen, prüfen und dokumentieren.' },
]

export async function readPage(slug: string) {
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: await headers() })
  const draft = Boolean(user)
  const { docs } = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    depth: 1,
    user,
    overrideAccess: !draft,
    where: draft
      ? { slug: { equals: slug } }
      : { and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }] },
  })

  return docs[0]
}
