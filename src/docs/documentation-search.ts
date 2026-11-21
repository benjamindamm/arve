import type { Entry } from './published-documentation'

export type SearchDocument = {
  entry: Entry
  description?: string
  keywords?: string
  discoveryAliases?: string[]
  sections: { id?: string; text: string }[]
}

// Deliberate vocabulary equivalences, not stemming or substring wildcards.
// They describe UI tasks, and do not imply financial or other domain rules.
const vocabulary = [
  ['button', 'schaltflaeche', 'schaltflaechen'],
  ['table', 'tables', 'tabelle', 'tabellen'],
  ['responsive', 'responsiv', 'responsiven', 'responsives', 'responsiver', 'mobil', 'mobile', 'mobilen', 'schmal', 'schmale', 'schmalen'],
  ['suche', 'suchen', 'suchfunktion', 'search'],
  ['filter', 'filtern', 'filterung', 'filterfunktion'],
  ['detail', 'details', 'detailseite', 'detailansicht'],
  ['pruefung', 'pruefungen', 'pruefen', 'pruefungsschritt', 'review'],
  ['bestaetigung', 'bestaetigungen', 'bestaetigen', 'confirmation', 'confirm'],
  ['uebersicht', 'uebersichtsseite', 'overview'],
  ['auswahl', 'auswaehlen', 'selection'],
  ['fehler', 'fehlermeldung', 'fehlermeldungen', 'error'],
] as const
const stopWords = new Set(['und', 'mit', 'fuer', 'der', 'die', 'das', 'ein', 'eine', 'einen', 'einer', 'im', 'in', 'am', 'an', 'auf', 'von', 'zu', 'zum', 'zur', 'and', 'with', 'the', 'a'])

function normalize(value: string) {
  return value.normalize('NFC').toLowerCase().replaceAll('ä', 'ae').replaceAll('ö', 'oe').replaceAll('ü', 'ue').replaceAll('ß', 'ss').normalize('NFD').replace(/\p{M}/gu, '')
}
const canonical = new Map<string, string>(vocabulary.flatMap(group => group.map(word => [word, group[0]] as [string, string])))
function tokens(value: string) {
  return normalize(value).replace(/\bux[\s_–—-]*(\d{3})\b/g, 'ux$1').match(/[\p{L}\p{N}]+/gu) ?? []
}
const concept = (token: string) => canonical.get(token) ?? token
const concepts = (value: string) => new Set(tokens(value).map(concept))
const contains = (set: Set<string>, term: string) => set.has(concept(term))
const canonicalId = (id: string) => tokens(id).join('')

function snippet(text: string, terms: string[]) {
  const cleaned = text.replace(/\s+/g, ' ').trim()
  // Work on original-text token positions so umlaut folding cannot shift excerpts.
  const words = [...cleaned.matchAll(/[\p{L}\p{N}]+(?:[-–—][\p{L}\p{N}]+)*/gu)]
  const hit = words.find(word => tokens(word[0]).some(token => terms.some(term => concept(term) === concept(token))))
  const start = Math.max(0, (hit?.index ?? 0) - 90)
  return (start ? '…' : '') + cleaned.slice(start, start + 320) + (cleaned.length > start + 320 ? '…' : '')
}

export function searchDocuments(documents: SearchDocument[], system: string, query: string, requestedLimit = 10, requestedOffset = 0) {
  const limit = Number.isFinite(requestedLimit) ? Math.max(1, Math.min(30, Math.trunc(requestedLimit))) : 10
  const offset = Number.isFinite(requestedOffset) ? Math.max(0, Math.trunc(requestedOffset)) : 0
  const terms = [...new Set(tokens(query).filter(term => !stopWords.has(term)))]
  const idTerms = terms.filter(term => /^ux\d{3}$/.test(term))
  const candidates = documents.flatMap(document => {
    const title = concepts(document.entry.title + ' ' + document.entry.slug)
    const metadata = concepts([document.entry.summary, document.description, document.keywords].filter(Boolean).join(' '))
    const aliases = concepts((document.discoveryAliases ?? []).join(' '))
    const sections = document.sections.map(section => ({ ...section, terms: concepts(section.text) }))
    const ids = sections.flatMap(section => section.id ? [section.id] : [])
    const matchedIds = ids.filter(id => idTerms.includes(canonicalId(id)))
    const matchedTerms = terms.filter(term => contains(title, term) || contains(metadata, term) || contains(aliases, term) || sections.some(section => contains(section.terms, term) || (section.id && canonicalId(section.id) === term)))
    if (!matchedTerms.length) return []
    // An explicit pattern ID must actually occur; do not return unrelated guidance.
    if (idTerms.length && !idTerms.every(term => matchedTerms.includes(term))) return []
    const score = matchedTerms.reduce((sum, term) => sum + (contains(title, term) ? 45 : contains(metadata, term) ? 22 : contains(aliases, term) ? 32 : document.entry.pattern || document.entry.guidance ? 10 : 6), 0) + matchedIds.length * 500 + matchedTerms.length * 8
    const bestSection = sections.map(section => ({ section, score: terms.filter(term => contains(section.terms, term)).length + (section.id && matchedIds.includes(section.id) ? 100 : 0) })).sort((a, b) => b.score - a.score)[0]
    const evidence = bestSection && (bestSection.score || document.entry.pattern || document.entry.guidance) ? bestSection.section.text : [document.entry.title, document.entry.summary, document.description, document.keywords].filter(Boolean).join(' · ')
    const reference = document.entry.retrieval ?? (document.entry.kind === 'component'
      ? { tool: 'get_component_page' as const, arguments: { system, component: document.entry.slug } }
      : { tool: 'get_documentation_page' as const, arguments: { system, section: document.entry.slug } })
    const { children: _children, ...entry } = document.entry
    const discoveryMatches = terms.filter(term => contains(aliases, term))
    return [{ entry, ...(discoveryMatches.length ? { discovery: { kind: 'editorial-task-aliases' as const, matchedTerms: discoveryMatches, aliases: document.discoveryAliases, scope: 'Discovery labels only; not published normative content or domain-specific rules.' } } : {}), score, matchMode: matchedTerms.length === terms.length ? 'all-terms' as const : 'partial' as const, matchedTerms, unmatchedTerms: terms.filter(term => !matchedTerms.includes(term)), matchedIds, snippet: snippet(evidence, terms), reason: matchedIds.length ? 'Exact pattern ID in published block: ' + matchedIds.join(', ') : (discoveryMatches.length ? 'Editorial task discovery labels (not normative content)' : matchedTerms.some(term => contains(title, term)) ? 'Title or component name' : 'Published summary, task vocabulary or content') + '; matched query terms (including explicit UI synonyms): ' + matchedTerms.join(', '), reference }]
  })
  const full = candidates.filter(result => !result.unmatchedTerms.length)
  const mode = full.length ? 'all-terms' as const : candidates.length ? 'partial' as const : 'none' as const
  const ranked = candidates.sort((a, b) => b.score - a.score || a.entry.path.localeCompare(b.entry.path, 'en') || (a.entry.pattern?.id ?? '').localeCompare(b.entry.pattern?.id ?? '', 'en'))
  const matched = new Set(ranked.flatMap(result => result.matchedTerms))
  return { query, mode, total: ranked.length, offset, limit, results: ranked.slice(offset, offset + limit), unmatchedTerms: terms.filter(term => !matched.has(term)), ...(mode !== 'all-terms' && { message: mode === 'partial' ? 'Partial matches in general UI guidance. Unmatched task or domain terms are not evidence of domain-specific rules; inspect each source and its scope.' : 'No matching published guidance. Try a UI task or component name, or an exact pattern ID. This does not establish domain-specific guidance.' }) }
}
