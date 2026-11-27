import {restoreDraftEndpoint} from '../access/restore-draft'
import {implementationAccess} from '../access/permissions'
import {editorialStates} from '../docs/editorial'
import {publicationField,capturePublicationIntent,enforcePublication,recordPublicationEvent} from '../access/publication'
import { ValidationError, type CollectionConfig } from 'payload'

export const platforms = [
  { value: 'web', label: 'Web' },
  { value: 'ios', label: 'iOS' },
  { value: 'android', label: 'Android' },
] as const

export const implementationStatuses = [
  { value: 'draft', label: 'Entwurf' },
  { value: 'preview', label: 'Preview' },
  { value: 'stable', label: 'Stabil' },
  { value: 'deprecated', label: 'Veraltet' },
] as const

export const Implementations: CollectionConfig = {
  slug: 'implementations',
  labels: { singular: 'Implementierung', plural: 'Implementierungen' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'componentPage', 'platform', 'releaseStatus', 'packageVersion', '_status'] },
  endpoints:[restoreDraftEndpoint('implementations')],
  access: implementationAccess,
  versions: { drafts: true, maxPerDoc: 0 },
  hooks: { beforeOperation:[capturePublicationIntent],afterChange:[recordPublicationEvent],beforeChange: [enforcePublication,async ({ data, originalDoc, req }) => {
    const value = Object.hasOwn(data, 'componentPage') ? data.componentPage : originalDoc?.componentPage
    if (!value && data._status === 'draft') return data
    const id = typeof value === 'object' ? value?.id : value
    const page = id && await req.payload.findByID({
      collection: 'pages', id, depth: 0, draft: data._status === 'draft', disableErrors: true, req,
    })
    if (!page || page.pageType !== 'component' || !page.component || !page.designSystem ||
      (data._status === 'published' && page._status !== 'published')) {
      throw new ValidationError({ errors: [{ path: 'componentPage', message: 'Wähle eine Komponentenseite eines Design-Systems. Für die Veröffentlichung muss auch die Komponentenseite veröffentlicht sein.' }] })
    }
    return data
  }] },
  fields: [
    publicationField,
    {name:'editorialStatus',label:'Redaktioneller Stand',type:'select',defaultValue:'draft',options:editorialStates.map(({value,label})=>({value,label})),admin:{position:'sidebar',description:'Für die Veröffentlichung: Inhalt als Entwurf speichern, als Herausgeber prüfen und „Geprüft“ erneut als Entwurf speichern.'}},
    { name: 'name', type: 'text', label: 'Name', required: true },
    { name: 'componentPage', type: 'relationship', label: 'Komponentenseite', relationTo: 'pages', required: true, index: true,
      filterOptions: { pageType: { equals: 'component' } } },
    { name: 'platform', type: 'select', label: 'Plattform', options: [...platforms], required: true },
    { name: 'releaseStatus', type: 'select', label: 'Freigabestatus', options: [...implementationStatuses], defaultValue: 'draft', required: true },
    { name: 'packageName', type: 'text', label: 'Paket' },
    { name: 'packageVersion', type: 'text', label: 'Paketversion' },
    { name: 'owner', type: 'text', label: 'Verantwortliches Team' },
    { name: 'contexts', type: 'select', label: 'Web-Nutzungskontexte', hasMany: true,
      options: [{ value: 'desktop', label: 'Desktop-Web' }, { value: 'mobile', label: 'Mobiles Web' }],
      admin: { condition: (_, siblings) => siblings.platform === 'web' } },
    { name: 'contract', type: 'group', label: 'Technischer Contract', fields: [
      { name: 'library', type: 'text', label: 'Bibliothek' },
      { name: 'component', type: 'text', label: 'Komponenten-ID' },
      { name: 'revision', type: 'text', label: 'Export-Revision' },
    ] },
    { name: 'verification', type: 'group', label: 'Prüfstand', fields: [
      { name: 'scope', type: 'textarea', label: 'Geprüfter Umfang und offene Punkte' },
      { name: 'evidence', type: 'text', label: 'Nachweis-Referenz' },
    ] },
  ],
}
