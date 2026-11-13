import type { CollectionConfig, Field } from 'payload'
import { pageTemplates } from '../docs/page-templates'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Seite', plural: 'Seiten' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'designSystem', 'pageType', 'parent', 'order', '_status'] },
  versions: { drafts: true },
  fields: [
    { name: 'title', label: 'Titel', type: 'text', required: true },
    { name: 'system', type: 'text', index: true, admin: { hidden: true } },
    { name: 'designSystem', type: 'relationship', relationTo: 'design-systems', label: 'Design-System', index: true },
    { name: 'parent', type: 'relationship', relationTo: 'pages', label: 'Übergeordnete Seite',
      filterOptions: ({ siblingData, id }): import('payload').Where | boolean => {
        const designSystem = (siblingData as { designSystem?: number }).designSystem
        if (!designSystem) return false
        if (id) return { and: [{ designSystem: { equals: designSystem } }, { id: { not_equals: id } }] }
        return { designSystem: { equals: designSystem } }
      } },
    { name: 'pageType', type: 'select', label: 'Seitentyp',
      options: [
        { value: 'overview', label: 'Übersicht' },
        ...pageTemplates.map(({ key, label }) => ({ value: key, label })),
        { value: 'guide', label: 'Leitfaden' },
      ] },
    { name: 'template', type: 'group', label: 'Seitenvorlage',
      admin: { condition: (_, siblings) => pageTemplates.some(({ key }) => key === siblings.pageType) },
      fields: pageTemplates.map(({ key, label, fields }): Field => ({
        name: key, type: 'group', label,
        admin: { condition: (data) => data.pageType === key },
        fields: fields.map(({ key, label }) => ({ name: key, label, type: 'textarea' })),
      })) },
    { name: 'order', type: 'number', label: 'Sortierung', defaultValue: 0 },
    { name: 'summary', type: 'textarea', label: 'Kurzbeschreibung' },
    { name: 'component', type: 'text', label: 'Komponenten-ID', admin: { condition: (_, siblings) => siblings.pageType === 'component' } },
    { name: 'contract', type: 'group', label: 'Technischer Contract', admin: { condition: (_, siblings) => siblings.pageType === 'component' }, fields: [
      { name: 'library', type: 'text', label: 'Bibliothek' },
      { name: 'component', type: 'text', label: 'Komponenten-ID' },
      { name: 'revision', type: 'text', label: 'Export-Revision' },
    ] },
    { name: 'demo', type: 'group', label: 'Live-Beispiel', admin: { condition: (_, siblings) => siblings.pageType === 'component' }, fields: [
      { name: 'key', type: 'select', options: ['spartan-button', 'spartan-input', 'spartan-checkbox', 'spartan-switch'] },
      { name: 'label', type: 'text', label: 'Beschriftung' },
      { name: 'variant', type: 'select', options: ['default', 'outline'] },
    ] },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'content',
      label: 'Inhalt',
      type: 'blocks',
      blocks: [
        {
          slug: 'text',
          labels: { singular: 'Text', plural: 'Texte' },
          fields: [{ name: 'body', type: 'richText', required: true }],
        },
        {
          slug: 'guideline',
          labels: { singular: 'Do / Don’t', plural: 'Do’s und Don’ts' },
          fields: [
            {
              name: 'recommendation',
              label: 'Empfehlung',
              type: 'select',
              options: [{ label: 'Do', value: 'do' }, { label: 'Don’t', value: 'dont' }],
              required: true,
            },
            { name: 'image', label: 'Bild', type: 'upload', relationTo: 'media' },
            { name: 'explanation', label: 'Begründung', type: 'textarea', required: true },
          ],
        },
      ],
    },
  ],
}
