# Sheet · semantische Komponentenreferenz

Present a dialog task from a chosen viewport edge.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-overlays-browser-run.json); keine allgemeine Anwendungsfreigabe.

The pinned Sheet wrapper owns the actual parts and primitive lifecycle; Root/Portal are controllers rather than invented DOM identities. The edge surface follows actual side values; horizontal edge surfaces cap at the selected native 384px width, vertical edge surfaces span the available viewport. Header inset 16px/gap 2px and footer inset 20px/gap 8px retain native section metrics. Native title 16/24 (Medium, or Semi Bold for AlertDialog) and body 14/20 are intrinsic text roles, never fixed frame heights. Footer order remains DOM order and wraps. Button actions explicitly depend on Button tokens/CVA, while primitive triggers remain bare unless the caller composes Button. Backdrop 50% and viewport clearance are explicit reference decisions; static examples do not measure live dimming. Close and Escape follow the actual primitive callback and host authority; no CSS rule invents state transitions.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

Sheet is a Dialog composition. Content side defaults right and accepts top/right/bottom/left; showCloseButton defaults true. A task commits only through its actual child action; simply closing, Escape or outside press does not invent an application result.

Sheet inherits the pinned Dialog primitive focus containment, Escape/Close and return-focus behavior. The default modal policy is true; side changes placement, not semantics or commit rules.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
