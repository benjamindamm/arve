import snapshot from '../../scripts/content/handbook-snapshot.json'
import type { DesignSystem, Page, Implementation } from '../payload-types'
import type { DocumentationData } from './documentation-data'

const ids = new Map(snapshot.pages.map((page, index) => [page.slug, index + 1]))
const media = new Map((snapshot.media as {key:string;alt:string}[]).map(item=>[item.key,item]))
const system = { ...snapshot.system, id: 1, home: ids.get(snapshot.system.home), createdAt: snapshot.capturedAt, updatedAt: snapshot.capturedAt } as DesignSystem
const pages = snapshot.pages.map(page => ({ ...page, id: ids.get(page.slug), designSystem: system.id,
  content: page.content.map(block => {
    if(block.blockType !== 'guideline' || !('image' in block) || typeof block.image !== 'string') return block
    const image = media.get(block.image)
    if(!image)throw Error('Snapshot image missing: '+block.image)
    return {...block,image:{id:-1,alt:image.alt,url:'/media/'+encodeURIComponent(image.key)}}
  }),
  parent: 'parent' in page && page.parent ? ids.get(page.parent) : null,
  createdAt: snapshot.capturedAt, updatedAt: snapshot.capturedAt,
})) as unknown as Page[]
pages.sort((a,b)=>(a.order??Number.MAX_SAFE_INTEGER)-(b.order??Number.MAX_SAFE_INTEGER)||a.title.localeCompare(b.title,'de'))
const implementations = snapshot.implementations.map((entry, index) => ({ ...entry, id: index + 1,
  componentPage: ids.get(entry.componentPage), createdAt: snapshot.capturedAt, updatedAt: snapshot.capturedAt,
})) as unknown as Implementation[]
implementations.sort((a,b)=>a.platform.localeCompare(b.platform)||a.name.localeCompare(b.name,'de'))

export const snapshotData: DocumentationData = {
  async systems() { return [system] },
  async pages(selected) { return selected.id === system.id ? pages : [] },
  async page(selected, selector) {
    if(selected.id !== system.id)return undefined
    return pages.find(page=>'component' in selector ? page.component===selector.component : 'slugs' in selector ? !page.component && selector.slugs.includes(page.slug) : page.id===selector.id)
  },
  async implementations(page) { return implementations.filter(entry => entry.componentPage === page.id) },
}
