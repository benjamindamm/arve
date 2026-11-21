# Attachment · semantische Komponentenreferenz

Display an attached file and its metadata.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-feedback-browser-run.json); keine allgemeine Anwendungsfreigabe.

The source root state idle/uploading/processing/error/done is caller styling, not an upload engine. Native default radius 18px/inset 8px/gap 8px and media 40/32/28px (mapped to actual default/sm/xs) are reusable metrics. The selected vertical thumbnail recipe prefers native 120px tiles and clamps to available width; horizontal file rows remain fluid, never fixed 384px source examples. Vertical height is intrinsic, including independent actions, rather than clipping content to the native 168px specimen height. Compact metadata 12/16 is an explicit reference size decision; default 14/20 uses native shared type roles. Media radius 10px and default 20px glyph are explicit native-aligned roles. All text remains in the DOM despite truncation. Secondary actions occupy a higher stacking layer than the actual whole-tile Trigger, so Retry and Open do not intercept one another. A caller status paragraph and filename-qualified labels provide concrete task meaning; disabled belongs to each native action, never a fabricated Attachment disabled API. Image thumbnail art is an independent fixture, not extracted file content.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

[]

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
