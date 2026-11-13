import type { CollectionConfig } from 'payload'

export const systemSlug = /^[a-z][a-z0-9-]{0,79}$/

export const DesignSystems: CollectionConfig = {
  slug: 'design-systems',
  labels: { singular: 'Design-System', plural: 'Design-Systeme' },
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true,
      validate: (value: string | null | undefined) => Boolean(value && systemSlug.test(value)) || 'Kleinbuchstaben, Ziffern und Bindestriche verwenden.' },
    { name: 'description', type: 'textarea', label: 'Beschreibung' },
    { name: 'theme', type: 'select', label: 'Theme', defaultValue: 'neutral', options: ['neutral', 'blue'] },
    { name: 'home', type: 'relationship', relationTo: 'pages', label: 'Startseite' },
  ],
}
