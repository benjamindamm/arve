# Message · semantische Komponentenreferenz

Present a conversational message with its metadata.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-conversation-browser-run.json); keine allgemeine Anwendungsfreigabe.

Message maps all six actual wrappers. Visual frame names are not promoted to code identities: the native horizontal Message content example supplies the 8px avatar/row gap, while the actual MessageContent code wrapper is vertical and takes the observed 10px vertical gap. Representative group gap 24px,32px round avatar,12px metadata inset and 12/16px footer text are retained. Native header frame 16px conflicts with its actual 14/20px text; this reference retains 20px text height without clipping. Footer has 24px minimum and grows for native actions. Speaker/time and delivery text are explicit caller content, not inferred states or automatic announcements. Align=end reverses the row using actual data-align; logical layout works with direction. MessageGroup has no automatic live-log or pagination behavior. Optional Bubble children and new-message announcements remain explicit caller composition.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

[]

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
