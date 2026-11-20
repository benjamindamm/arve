---
name: arve-ui-contracts
description: Read imported UI Contracts, select suitable components and assess evidence using the portable skills shipped with each contract package in Arve.
---

# UI Contracts in Arve

Use the explicitly selected design system, library and revision. For the public reference system the library is `shadcn`.

1. For a published page, obtain its pinned contract reference through Arve MCP or the published page data. Do not substitute a newer revision or treat an imported revision as published.
2. Read `src/contracts/catalog.ts` to locate imported revisions. Portable packages live at `src/contracts/libraries/<library>/<revision>/package/` inside this Arve checkout.
3. Read the selected package's `manifest.json`, then `skills/ui-contracts/SKILL.md` and only the references needed for the task. Resolve those links relative to that skill file, inside the intact package. Read `dependencies.json` for the actual capability boundary.
4. Legacy revisions remain available for existing page pins but do not contain portable skills. For those, use the reading guidance of an explicitly identified portable package while continuing to read the page's original pinned contract data. Report both revisions; do not combine their component definitions or evidence.
5. Preserve draft status and distinguish source rules, UX judgments and observed implementation evidence. Package integrity does not establish UI correctness.

No separate source checkout or repository-path environment variable is needed. The imported skill supports reading and UX assessment. Authoring helpers, executable validation and platform rendering are not installed by this import. Historical provenance identifiers are not local links or executable commands.
