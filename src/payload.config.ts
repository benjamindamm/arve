import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { resolve } from 'node:path'
import { DesignSystems } from './collections/DesignSystems'
import { Pages } from './collections/Pages'
import { Implementations } from './collections/Implementations'
import { Users } from './collections/Users'
import { PublicationEvents } from './collections/PublicationEvents'
import { Media } from './collections/Media'

export default buildConfig({
  admin: { user: 'users' },
  collections: [
    Users,
    PublicationEvents,
    DesignSystems,
    Pages,
    Implementations,
    Media,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({
    push: false,
    pool: { connectionString: process.env.DATABASE_URI },
  }),
  typescript: {
    outputFile: resolve('src/payload-types.ts'),
  },
})
