# Switch · semantische Komponentenreferenz

Change a binary setting immediately with a stable visible name and a hidden form input.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-controls-browser-run.json); keine allgemeine Anwendungsfreigabe.

Default track 32×18px/thumb 16px and small track 24×14px/thumb 12px retain the native semantic sizes. Thumb travel derives from track minus thumb minus two 1px insets, including RTL. An explicit optional caller field owns label arrangement. Native checked/disabled/focus states remain independent from label content; no imported fixed specimen position or synthetic value event is used.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

{"scope": "Sufficient source-bound React reference description; no certification of every consumer or native platform.", "normalizedProtocol": "SCXML events project source callbacks/native interactions. Send entries document the observed callback and are not additional DOM dispatches. The adapter supplies isCanceled after the source callback transaction. Controlled SET_VALUE/SET_CHECKED props remain authoritative.", "visual": "Native FIG observations and DTCG values remain visual truth. React styles may differ; no unverified pixel equivalence is assumed."}

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
