# Input · semantische Komponentenreferenz

Enter a native input value with the exact public React input prop surface. The documented text composition has a visible associated label, optional description and explicit invalid/error association. Browser editing and IME remain native; Escape does not restore an earlier value.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-controls-browser-run.json); keine allgemeine Anwendungsfreigabe.

Input fills its caller layout with min-inline-size0 and semantic 32px minimum height. The native 320px sample width is not an intrinsic component token and remains in source evidence. Source font14/20px,10px inline/4px block padding, border/radius and distinct placeholder/focus/disabled/error styling are retained. Label/help/field are explicit caller parts. Rounded shape is caller className, not an invented Input prop.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

{"scope": "Sufficient source-bound React reference description; no certification of every consumer or native platform.", "normalizedProtocol": "SCXML events project source callbacks/native interactions. Send entries document the observed callback and are not additional DOM dispatches. The adapter supplies isCanceled after the source callback transaction. Controlled SET_VALUE/SET_CHECKED props remain authoritative.", "visual": "Native FIG observations and DTCG values remain visual truth. React styles may differ; no unverified pixel equivalence is assumed."}

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
