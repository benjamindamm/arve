# Item · semantische Komponentenreferenz

Present a structured item with supporting content and actions.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-structured-browser-run.json); keine allgemeine Anwendungsfreigabe.

Item maps all ten actual exports, with native 10/12px normal padding, 8/10px extra-small padding, 10px outer gap, 4px content gap, 10px corners, 40px/6px image geometry and 20px optional glyph. The source API additionally supports sm; an explicit 8px block/12px inline reference choice fills that size without claiming an unobserved native master. Three actual variant classes and three size classes bind presentation. Native sample width and fractional height are not hardcoded; text can wrap rather than clipping necessary information. ItemGroup supplies role=list but Item itself does not automatically supply listitem semantics: the caller does so for these default div rows. A whole-row native anchor fixture remains outside the list, has a real destination and omits nested actions. Default row actions are separate Buttons. ItemSeparator remains the composed nonfocusable horizontal separator and is hidden when merely decorative.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

[]

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
