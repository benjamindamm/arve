# Accordion · semantische Komponentenreferenz

Expand related sections while preserving independent item identity and a typed array of expanded values.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-controls-browser-run.json); keine allgemeine Anwendungsfreigabe.

Accordion width is fluid; the 400px native specimen is not a runtime identity or imposed width. Trigger minimum40px,10px block padding,8px label/icon gap,16px icon and10px panel padding are meaningful native measures. Content height is intrinsic to its actual children. The source appends separate down/up icons; semantic CSS selects the correct source-appended glyph rather than rotating both. Its content wrapper is retained in the fixture so text resets match the actual DOM. aria-expanded/data-disabled/native focus/hover reflect real source state; no synthetic state prop, per-node selector or fixed content-height dump is introduced. Open/closed ownership and keyboard focus remain with the bound source actor.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

multiple=false permits at most one expanded item; pressing that item closes it. multiple=true toggles items independently. Disabled root/items suppress changes. The callback candidate may be canceled; controlled value stays prop-authoritative.

Base UI 1.9 uses normal Tab order and native Enter/Space on each trigger. Its orientation/loopFocus props are deprecated and no longer implement roving/arrow focus. Arrow/Home/End are not invented as accordion selection commands.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
