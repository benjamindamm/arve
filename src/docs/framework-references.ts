import type { Page } from '../payload-types'
type Node = { text?: string; children?: Node[]; fields?: { url?: string } }
const text = (node: Node): string => node.text ?? (node.children ?? []).map(text).join('')
export type FrameworkReference = { id: string; name: string; framework: string; platforms: string[]; relationship: string; scope: string; checkedAt: string; sourceUrl: string; packagePrefix?: string; verification: 'external-reference' }
/** References are editorial CMS content, separate from component implementation receipts. */
export function frameworkReferences(content: Page['content']): FrameworkReference[] {
  return (content ?? []).flatMap(block => {
    if (block.blockType !== 'text' || !block.blockName?.startsWith('framework-') || block.blockName === 'framework-scope') return []
    const nodes = block.body.root.children as Node[]
    const lines = nodes.map(text)
    const field = (name: string) => lines.find(line => line.startsWith(name + ': '))?.slice(name.length + 2) ?? ''
    const links: string[] = []
    const walk = (node: Node) => { if (node.fields?.url?.startsWith('https://')) links.push(node.fields.url); node.children?.forEach(walk) }
    nodes.forEach(walk)
    if (!lines[0] || !field('Framework') || !links[0]) return []
    return [{ id: block.blockName.slice(10), name: lines[0], framework: field('Framework'), platforms: field('Plattformen').split(',').map(value => value.trim()).filter(Boolean), relationship: field('Bezug'), scope: field('Prüfstand'), checkedAt: field('Quellen geprüft am'), sourceUrl: links[0], packagePrefix: field('Paketpräfix') || undefined, verification: 'external-reference' as const }]
  })
}
