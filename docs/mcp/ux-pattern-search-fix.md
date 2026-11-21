# Task-oriented UX pattern discovery · 22 November 2026

Read-only search/indexing change. The existing published `workflowStudy` pattern blocks now become individual search documents. Search results keep `kind: section`, `slug: patterns`, the canonical published page path and compatible page retrieval. Each individual result includes `pattern.id`, candidate status, explicit non-approval scope and the original observation limits. The parent catalogue no longer pools its children's words into a single pattern match.

`matchedSection` is an executable `get_documentation_section` call with the actual stable content section ID and the exact current full-page snapshot. It reads the original block directly, including its limitations; callers must follow any continuation. No new CMS content, domain rule, technical framework recipe or approval status is created.

Editorial task labels are separate discovery metadata: UX-021 labels describe its existing sums preview (`Gesamtbetrag`, `Gesamtsumme`, `Betrag`, `Zusammenfassung`, `Summen prüfen`, `Folgen`, `Konsequenzen`); UX-024 labels describe its existing offer comparison (`Kostenvergleich`, `Preisvergleich`). They are scoped to those documents, and `discovery` reports both aliases and matched query terms with a non-normative disclaimer. They do not expand arbitrary pages or global vocabulary. `Kauf`, `Bestätigung` and `Kosten` are not aliases of the sums preview. Ranking uses token identity, title/metadata weights and bounded editorial alias weights; repeated boilerplate gains no frequency score. Candidate block content receives a modest evidence weight because it represents one coherent task rather than an entire page.

Observed via the real HTTP MCP endpoint at `http://127.0.0.1:3010/mcp`, SDK client, limit 5:

| Query | Result | Rank | Explicit limit |
| --- | --- | --- | --- |
| Kosten Gesamtbetrag | UX-021: Auswirkungen vor einer Aktion anzeigen | 1 | `Kosten` unmatched on this result; preview only, no verified calculation |
| Kosten Gesamtbetrag | UX-024: Alternativen vergleichen | 2 | `Gesamtbetrag` unmatched |
| Kauf prüfen | UX-021 | 1 | `Kauf` unmatched; no purchase workflow claim |
| Bestätigung Zusammenfassung | UX-021 | 2 | `Bestätigung` unmatched; destructive-action confirmation guidance ranks first |
| Schaltfläche | Button | 1 | Deliberate existing UI synonym |
| responsive Tabelle | Table / Tabellen und Listen / Data Table | 1 / 2 / 3 | Data Table remains a partial match for this query |
| UX-001 | Individual Filter anwenden candidate | 1 | Exact original block ID preserved |
| UX-999 | No results | — | No invented pattern |

All three UX-021 task hits supplied direct section calls that successfully returned the original `keine Berechnung oder Detailnavigation geprüft` limitation. Observed search JSON bodies were 290–7,320 bytes, below the 32 KiB default response budget (these measurements cover the listed limit-5 queries only).

Verification executed: six documentation search tests (including task regressions, near-word false positives, alias isolation from unrelated/negative boilerplate, deterministic pagination, source section/snapshot identity and prior audited queries); TypeScript check passed. The complete `check:mcp:unit` suite passed (progressive reads, library skills, search and tree navigation). Search is lexical discovery with explicit editorial metadata, not semantic understanding or evidence that the candidate is suitable for a banking purchase. General matches and partial matches require source inspection.

## Follow-up: general guidance before incidental component matches

A second, source-checked navigation pass indexes five specific original blocks: Main+Sidebar `responsive`, forms `goals`, Content Design `writing-rules` and `writing-messages`, and Laden/leer/Fehler `states-rules`. Their `guidance.scope` limits each hit to its original block and excludes page-wide layout/example requirements. Message examples retain their local project terminology and numerical limits; the related-link explanation states this explicitly. These are navigation projections of existing published blocks, not new normative content. Scoped editorial labels connect cost/total/summary tasks to the rule that information necessary to understand or finish the task belongs in the main content. This connection is an interpretation for discovery: the source does not literally prescribe a financial cost calculation or purchase summary.

UX-021 now has three `relatedGuidance` links, each with a short reason, limited scope and an executable source-section read using the actual snapshot. Its candidate status and original observation limits remain intact. The five blocks were read in full before adding the navigation metadata. Uncertainty labels (`ungewisses Ergebnis`, `ungeklärtes Ergebnis`, `ungewiss`, `ungeklärt`, `unbekannt`) are scoped to the three applicable outcome/state blocks; they do not globally equate unrelated page terms.

Current actual HTTP MCP verification, limit 5 (supersedes the earlier task rankings where additional general hits now precede candidates):

| Query | Leading results |
| --- | --- |
| Kosten | #1 Main+Sidebar · Lange Inhalte und Lesereihenfolge; #2 UX-024 |
| Gesamtbetrag | #1 same general guidance block; #2 UX-021 |
| Zusammenfassung | #1 forms general UX goals; #2 Main+Sidebar general reading-order rule; #3 UX-021 |
| ungewisses Ergebnis | #1 forms general UX goals; #2 Content Design outcome messages; #3 Laden/leer/Fehler state rules; incidental Bewegung/Button remain explicitly partial #4–5 |

Every leading general hit was followed successfully over HTTP. All three related links on the UX-021 hits also resolved successfully: `main-sidebar/content-2-f01a68c13325`, `formulare-validierung/content-0-2500d4f83bba`, and `content-design/content-1-020875ecfc0e`, with exact published snapshots. Response bodies for these limit-5 queries were 5,615–9,950 bytes. `Kostenberechnungx` and `Gesamtbetragsgarantie` returned no matches over HTTP. Seven search tests pass, including general-task retrieval, related-link source identity, uncertainty ranking, bounded scope and unsupported domain terms. No CMS writes or new normative pages were involved.
