# CodeBlock · gebundene Nutzungsreferenz

Present selectable plain code and an independently operable copy-to-clipboard action.

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Pakethashes](../../../../../sources/manifest.json); [exakte öffentliche Wrappertypen](../../../../../sources/react-api-inventory.json).

Root variant=default|destructive and size=default|sm only style div content. Content is native pre with nested code, dir=ltr and tabIndex0; wrap defaultsfalse, lineNumbersfalse, startLine1 controls the CSS line counter. With string children and numbering, one trailing newline is removed before splitting; empty CodeBlockLine deliberately emits a newline. No syntax highlighter or executable code engine is built in. CopyButton requires value:string, defaults ghost/icon-xs, calls caller onClick before navigator.clipboard.writeText(value), and does not inspect defaultPrevented. Successful promise sets copied=true, aria-label=Copied and a polite live text; first copied=true schedules reset after2000ms. Repeated success while already copied does not restart that effect timer. Rejected promises are swallowed, preserving the previous copied state; no onCopied/onCopyError event exists. Missing navigator.clipboard can throw synchronously before the promise catch. This reference requires a supported secure clipboard context for Copy and provides persistent native text-selection instructions as the fallback. The copy value is exact caller text, not inferred from formatted/numbered DOM.

Native Copy Button supports Enter/Space; disabled suppresses its click. The focusable pre supports native selection/scrolling and Tab leaves it. Escape does not revert code or cancel a clipboard write already requested. Copy does not move focus. A descriptive code heading/instructions are caller supplied, not automatic CodeBlockTitle semantics.

Concrete content, labels, OTP digit policy, carousel positional/live text and clipboard fallback instructions are explicit caller composition; source-specific limitations are retained.

Die HTML-/CSS-Projektion zeigt konkrete Semantik, implementiert aber keine React-/Clipboard-/Embla-/OTP-Logik. Das normale Prüfziel benutzt die tatsächlichen gebundenen Originalwrapper. Source-Transaktionen und interne Effekte werden im SCXML getrennt dokumentiert.

[Native Figma-Beobachtungen](../../../../../components/code-block/figma/figma-observations.json), alle ursprünglichen Designstories, DTCG `provenance://source/%2Fnative%2Fcode-block`, editierbare FIG und isoliert gerenderte PNG bleiben als visuelle Quelle erhalten.

Abgeschlossen nach 19 tatsächlichen Browserfällen inklusive realer verweigerter Clipboard-Berechtigung, 14 SCXML-Protokollfällen, sechs positiven/negativen Semantikfällen und sechs React-SSR-Fällen der Dreiergruppe. [Konkrete Prüfberichte](../../../../contract-cases); begrenzter Referenzabschluss, weiterhin `release:false`.
