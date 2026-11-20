import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: async ({ req }) => {
      if (req.user) return true
      // Only images referenced by a published page may be read anonymously.
      // Depth zero avoids recursively resolving media while checking access.
      const { docs } = await req.payload.find({
        collection: 'pages', draft: false, depth: 0, pagination: false,
        overrideAccess: true, req, select: { content: true },
        where: { _status: { equals: 'published' } },
      })
      const ids = new Set<number>()
      for (const page of docs) for (const block of page.content ?? []) {
        if (block.blockType === 'guideline' && typeof block.image === 'number') ids.add(block.image)
      }
      return ids.size ? { id: { in: [...ids] } } : false
    },
  },
  upload: { staticDir: 'media', mimeTypes: ['image/*'] },
  fields: [{ name: 'alt', label: 'Alternativtext', type: 'text', required: true }],
}
