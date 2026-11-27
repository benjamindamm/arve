import { getPayload } from 'payload'
import config from '../src/payload.config'
import { getShadcnContract } from '../src/contracts/catalog'

const controls = [
  ['input', 'Input', 'Projektname', 'Ein Input erfasst eine einzeilige Texteingabe.', '«Projektname» bleibt als Beschriftung über dem Feld sichtbar.', 'Ein Platzhalter allein verschwindet beim Tippen.'],
  ['checkbox', 'Checkbox', 'Projekt-Updates abonnieren', 'Eine Checkbox erfasst eine unabhängige Auswahl, die zusammen mit einem Formular gespeichert werden kann.', 'Ein Label benennt die Auswahl, etwa «Projekt-Updates abonnieren».', 'Bei einer Auswahl aus genau einer Option sind Radiobuttons meist verständlicher.'],
  ['switch', 'Switch', 'Benachrichtigungen', 'Ein Switch schaltet eine Einstellung unmittelbar ein oder aus.', '«Benachrichtigungen» bleibt als Label in beiden Zuständen gleich.', 'Eine Einstellung mit separatem Speichern passt besser zu einer Checkbox im Formular.'],
] as const

const payload = await getPayload({ config })
try {
  for (const [component, title, label, intro, positive, negative] of controls) {
    const slug = 'shadcn-' + component
    const existing = await payload.find({
      collection: 'pages', draft: true, limit: 1, where: { slug: { equals: slug } },
    })
    if (existing.totalDocs) continue
    const contract = getShadcnContract(component)
    if (!contract) throw new Error('Missing export: ' + component)
    const page = await payload.create({ collection: 'pages', data: {
      slug, system: 'shadcn', component, title, _status: 'published',
      contract: { library: contract.library, component, revision: contract.revision },
      demo: { key: `spartan-${component}`, label },
      content: [
        { blockType: 'text', body: { root: {
          type: 'root', version: 1, direction: 'ltr', format: '', indent: 0,
          children: [{
            type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0,
            children: [{ type: 'text', version: 1, text: intro, detail: 0, format: 0, mode: 'normal', style: '' }],
          }],
        } } },
        { blockType: 'guideline', recommendation: 'do', explanation: positive },
        { blockType: 'guideline', recommendation: 'dont', explanation: negative },
      ],
    } })
    console.log('Published:', page.slug)
  }
} finally {
  await payload.destroy()
}
