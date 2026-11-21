import config from '@payload-config'
import { getPayload, type Where } from 'payload'
import type { DocumentationData } from './documentation-data'

export const payloadData: DocumentationData = {
  async systems() {
    return (await (await getPayload({ config })).find({ collection: 'design-systems', depth: 0, pagination: false, sort: 'name' })).docs
  },
  async pages(system) {
    return (await (await getPayload({ config })).find({ collection: 'pages', draft: false, pagination: false, depth: 0, sort: ['order', 'title'],
      where: { and: [{ designSystem: { equals: system.id } }, { _status: { equals: 'published' } }] },
    })).docs
  },
  async page(system, selector) {
    const selection: Where = 'component' in selector ? {component:{equals:selector.component}} : 'slugs' in selector ? {and:[{slug:{in:selector.slugs}},{component:{exists:false}}]} : {id:{equals:selector.id}}
    return (await (await getPayload({ config })).find({collection:'pages',draft:false,limit:1,depth:1,
      where:{and:[{designSystem:{equals:system.id}},{_status:{equals:'published'}},selection]},
    })).docs[0]
  },
  async implementations(page) {
    return (await (await getPayload({ config })).find({ collection: 'implementations', draft: false, pagination: false, depth: 0, sort: ['platform', 'name'],
      where: { and: [{ componentPage: { equals: page.id } }, { _status: { equals: 'published' } }] },
    })).docs
  },
}
