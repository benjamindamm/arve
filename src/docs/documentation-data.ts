import type { DesignSystem, Page, Implementation } from '../payload-types'

export interface DocumentationData {
  systems(): Promise<DesignSystem[]>
  pages(system: DesignSystem): Promise<Page[]>
  page(system: DesignSystem, selector: {component:string} | {slugs:string[]} | {id:number}): Promise<Page | undefined>
  implementations(page: Page): Promise<Implementation[]>
}

// The static build uses only an explicitly captured published snapshot.
export async function documentationData(): Promise<DocumentationData> {
  return process.env.ARVE_STATIC_EXPORT === '1'
    ? (await import('./snapshot-data')).snapshotData
    : (await import('./payload-data')).payloadData
}
