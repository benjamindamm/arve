import type { getContract } from '../contracts/catalog'

/** Display the enum declared by this page's pinned CEM, not a second UI list. */
export function contractOptions(contract: ReturnType<typeof getContract>, member: string): string[] {
  const source = contract?.sources.interface
  const file = source ? contract?.files[source] : undefined
  if (!file) return []
  const cem = JSON.parse(file.content) as {modules?:{declarations?:{members?:{name?:string;type?:{text?:string}}[]}[]}[]}
  const field = cem.modules?.flatMap(module=>module.declarations??[]).flatMap(declaration=>declaration.members??[]).find(field=>field.name===member)
  const union = field?.type?.text ?? ''
  if (!/^"[^"]+"(?:\s*\|\s*"[^"]+")*$/.test(union)) return []
  return [...union.matchAll(/"([^"]+)"/g)].map(match=>match[1])
}
