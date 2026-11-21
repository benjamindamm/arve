import type { Page } from '../../src/payload-types'
import components from './shadcn-reference-components.json'

export const completeRevision = 'bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91'
export const previousRevision = '65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const leaf = (text: string) => ({ type: 'text', version: 1, text })
export function referenceText(blockName: string, title: string, ...paragraphs: string[]): Block {
  return { blockType: 'text', blockName, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [leaf(title)] },
    ...paragraphs.map(text => ({ ...base, type: 'paragraph', children: [leaf(text)] })),
  ] } } }
}
export const referenceComponents = components
export function currentReferenceNote(legacy: boolean): Block {
  return referenceText('complete-reference-scope', legacy ? 'Aktuelle Referenz und vorhandene Angular-Studie' : 'Geltung dieser Referenz',
    'Der verknüpfte Contract beschreibt die vollständige Quellenreferenz von shadcn in React. Schnittstelle, Gestaltung, Verhalten und Semantik sind im technischen Contract einsehbar. Der Status complete bezeichnet den Abschluss dieser Quellenbeschreibung; release: false bleibt bestehen.',
    legacy
      ? `Das lokale Spartan-Beispiel ist die Angular-Referenz desselben Designs. Die folgenden Studien und ihre Aussagen zu Drafts beziehen sich auf den bisherigen Stand ${previousRevision}. Sie sind kein neuer Abgleich der Angular-Implementierung mit dem aktuellen React-Contract. Bestehende Implementierungsnachweise behalten ihren eigenen Contractbezug.`
      : 'Eine Framework-Referenz und eine in Arve eingebundene Implementierung haben getrennte Prüfstände. Die statische Vorschau zeigt das exportierte Design; sie belegt keine vollständige Laufzeitbedienung auf Web, iOS oder Android.')
}
export const catalogueNote = referenceText('complete-catalogue-scope', '69 Komponenten der shadcn-Referenz',
  'Der aktuelle Bestand umfasst 69 Komponentenfamilien mit Quellencontracts und exportierten Designvorschauen. React ist die Originalimplementierung, Spartan die Angular-Referenz desselben Designs. Weitere Frameworks und native Plattformen werden als eigene Referenzen geführt.',
  'Die nachfolgenden vier lokalen Spartan-Studien bleiben als redaktionelle Beispiele des bisherigen Quellenstands erhalten. Ihre Angaben zu Drafts und Implementierungslücken sind im Kontext dieser Studien zu lesen. Aktuelle Contractstände und die tatsächlich veröffentlichten Implementierungen stehen auf den jeweiligen Komponentenseiten.')

export const frameworks = [
  { id: 'react', name: 'shadcn/ui', framework: 'React', platforms: 'Web', role: 'Originalimplementierung', scope: 'Die importierten Quellencontracts beschreiben diese React-Referenz. Ein Quellenabschluss ist keine allgemeine Freigabe einer konkreten Anwendung.', url: 'https://ui.shadcn.com/' },
  { id: 'angular', name: 'Spartan', framework: 'Angular', platforms: 'Web', role: 'Angular-Referenz', scope: 'Angular-Referenz desselben Designs. Vier lokale Beispiele sind vorhanden; veröffentlichte Implementierungsnachweise werden je Komponente gesondert geführt.', url: 'https://www.spartan.ng/', packagePrefix: '@spartan-ng/' },
  { id: 'swiftui-flx', name: 'SwiftUI-Flx', framework: 'SwiftUI', platforms: 'iOS, macOS', role: 'Community-Referenz', scope: 'Native SwiftUI-Komponenten und Themen nach dem shadcn-Prinzip. Als externe Referenz erfasst; Komponentenabdeckung und Übereinstimmung mit unseren Contracts sind nicht geprüft.', url: 'https://github.com/felipemenezes098/swiftui-flx' },
  { id: 'shadkit', name: 'ShadKit', framework: 'SwiftUI', platforms: 'iOS, macOS', role: 'Community-Referenz', scope: 'SwiftUI-Port von shadcn/ui und AI Elements. Als externe Referenz erfasst; keine native Implementierung in Arve eingebunden oder gegen unsere Contracts geprüft.', url: 'https://github.com/jasonkneen/shadkit' },
  { id: 'swiftcn', name: 'SwiftCN', framework: 'SwiftUI', platforms: 'iOS, macOS', role: 'Community-Referenz', scope: 'Verbindet native SwiftUI-Bedienelemente mit Tailwind-artigen Stilen und shadcn-Komponenten. Die Beschreibung stammt vom Projekt; ein Contractabgleich in Arve steht aus.', url: 'https://charlesbethin.com/blog/introducing-swiftcn/' },
  { id: 'rikkaui', name: 'RikkaUI', framework: 'Jetpack Compose / Compose Multiplatform', platforms: 'Android, iOS, Desktop, Web', role: 'Community-Referenz', scope: 'An shadcn orientierte Compose-Bibliothek. Die genannten Plattformen sind Angaben des Projekts; ihre Unterstützung und die Gestaltung sind in Arve nicht überprüft.', url: 'https://github.com/rainxchzed/RikkaUi' },
  { id: 'komoui', name: 'KomoUI', framework: 'Compose Multiplatform', platforms: 'Android, iOS', role: 'Community-Referenz', scope: 'An shadcn orientierte Komponenten mit Material-3-Grundlage. Als zusätzliche native Referenz erfasst; daraus wird keine identische Gestaltung oder Contractkonformität abgeleitet.', url: 'https://github.com/derangga/komoui' },
]
export function frameworkContent(): Block[] {
  return [referenceText('framework-scope', 'Ein Designsystem, mehrere Umsetzungen',
    'Die gemeinsame Designreferenz lässt sich in unterschiedlichen Frameworks umsetzen. Original, Framework-Referenzen und tatsächlich eingebundene Komponenten werden getrennt beschrieben.',
    'Eine Plattform kann mehrere Bibliotheken haben. Ein Quellenlink ist kein Implementierungsnachweis. Für eine konkrete Komponente gelten ihre Paketversion, ihr Contractbezug und ihr benannter Prüfumfang.'),
    ...frameworks.map(item => {
      const block = referenceText('framework-' + item.id, item.name, 'Framework: ' + item.framework, 'Plattformen: ' + item.platforms, 'Bezug: ' + item.role, 'Prüfstand: ' + item.scope, 'Quellen geprüft am: 21.11.2026')
      if ('packagePrefix' in item && item.packagePrefix && block.blockType === 'text') block.body.root.children.push({ ...base, type: 'paragraph', children: [leaf('Paketpräfix: ' + item.packagePrefix)] })
      if (block.blockType === 'text') block.body.root.children.push({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { url: item.url, linkType: 'custom', newTab: true }, children: [leaf('Projekt und Quelle öffnen')] }] })
      return block
    })]
}
