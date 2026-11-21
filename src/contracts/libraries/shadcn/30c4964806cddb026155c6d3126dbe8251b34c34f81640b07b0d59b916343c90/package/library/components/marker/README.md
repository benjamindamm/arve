# Marker · semantische Komponentenreferenz

Identify a point, entity or status with a compact marker.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-conversation-browser-run.json); keine allgemeine Anwendungsfreigabe.

Marker maps all three actual wrappers. Native 8px spacing, 16px icon and 14/20px muted text remain semantic roles; native separator lines become flexible pseudo-elements and the border variant adds a logical bottom boundary after 8px separation. The guide shows inline notes, labeled separators and bordered rows; variant alone does not add ARIA separator/status or control semantics. MarkerIcon is actually aria-hidden, so essential meaning stays in text. A caller may explicitly choose role=status for changing work feedback or render a native action. The native guide says asChild, while the pinned selected BaseUI wrapper exposes render; the contract follows the actual render API and retains the guide as source evidence. Optional shimmer is an external caller style utility, not an invented Marker prop or required animation.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

[]

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
