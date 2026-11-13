import { getPayload } from 'payload'
import config from '../src/payload.config'
import button from '../src/contracts/exports/shadcn/button/fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d.json'

const payload = await getPayload({ config })
try {
  const { docs: [existing] } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'shadcn-button' } },
    draft: true,
    limit: 1,
  })
  if (existing) {
    console.log('shadcn-button already exists:', existing.id)
  } else {
    const page = await payload.create({
      collection: 'pages',
      data: {
        slug: 'shadcn-button',
        system: 'shadcn',
        component: 'button',
        title: 'Button',
        _status: 'published',
        contract: { library: button.library, component: button.component, revision: button.revision },
        demo: { key: 'spartan-button', label: 'Rechnung herunterladen', variant: 'default' },
        content: [
          { blockType: 'text', body: { root: {
            type: 'root', version: 1, direction: 'ltr', format: '', indent: 0,
            children: [{
              type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0,
              children: [{
                type: 'text', version: 1, format: 0, detail: 0, mode: 'normal', style: '',
                text: 'Ein Button löst eine Aktion aus, etwa eine Rechnung herunterzuladen oder Änderungen zu speichern. Das Live-Beispiel verwendet die Angular-Button-Primitive von Spartan.',
              }],
            }],
          } } },
          { blockType: 'guideline', recommendation: 'do', explanation: '«Rechnung herunterladen» benennt, was beim Klick passiert.' },
          { blockType: 'guideline', recommendation: 'dont', explanation: '«Hier klicken» lässt offen, welche Aktion ausgelöst wird.' },
        ],
      },
    })
    console.log('Published shadcn-button:', page.id)
  }
} finally {
  await payload.destroy()
}
