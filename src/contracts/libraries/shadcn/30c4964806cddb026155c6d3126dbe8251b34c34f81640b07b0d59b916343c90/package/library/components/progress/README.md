# Progress · semantische Komponentenreferenz

Represent advancement of an ongoing task.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-feedback-browser-run.json); keine allgemeine Anwendungsfreigabe.

The pinned Progress root adds exactly one Track/Indicator after caller children; callers should not add a duplicate default track. Visible native track height is4px inside a12px artwork frame, confirmed by the separate deep native read. The source root gap 12px and native full corner are semantic metrics; sample 384px width and 240px range are observations, never runtime dimensions. The primitive owns clamping, localized value, aria-valuenow/valuetext and inline indicator percentage across min/max; CSS preserves that inline width and logical start in RTL. Indeterminate state has no numeric value: this reference uses a static centered 35% segment plus the real indeterminate description, without inventing a measured animation timing. The caller provides separate completion/error feedback; progress itself is passive and has no disabled or keyboard-action API.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

[]

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
