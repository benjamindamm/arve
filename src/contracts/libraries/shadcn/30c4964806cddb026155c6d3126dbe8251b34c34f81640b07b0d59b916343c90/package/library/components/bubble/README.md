# Bubble · semantische Komponentenreferenz

Group conversational content by speaker.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-conversation-browser-run.json); keine allgemeine Anwendungsfreigabe.

Bubble binds all four actual wrappers. The native Primary depiction maps to the selected React API variant=default, not an invented primary prop. Native 22px corners, 10/12px insets, 14/20px text and 32px representative group spacing become reusable roles; the short primary text uses a Light face while longer specimens use Regular, and this reference explicitly selects Regular consistently. Native widths/heights remain text-dependent. All seven actual variant classes are described, including source-supported ghost without a separate native master. The unbound #C7E8FF tinted surface keeps its observed #0A0A0A text as a fixed pair across modes rather than inventing an unseen dark tint. Outline uses an inset stroke without increasing native intrinsic height. Reactions retain 2/6px insets, 4px gap and rounded surface; top/bottom half-overlap and 12px inline inset are explicit positioning decisions. Native passive reactions are 24px; an interactive child Button may enlarge this intrinsic surface. Speaker text is mandatory in this usage. Reaction state and native content actions belong to callers, not Bubble callbacks.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

[]

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
