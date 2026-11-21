# ScrollArea · semantische Komponentenreferenz

Provide a bounded viewport for overflowing content.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-utilities-browser-run.json); keine allgemeine Anwendungsfreigabe.

The selected native scroll specimen supplies 288px extent,8px corner,16px content inset and 6px rounded thumb thickness. Width remains fluid. Source Scrollbar padding 1px makes an8px total bar; actual primitive absolute placement, overflow, proportional thumb length/translation and Corner remain authoritative. Content padding is caller-owned because the wrapper exports no Viewport; Root props do not become Viewport callbacks or labels. The outer section supplies a real heading; Root stays presentational. Viewport becomes a native tab destination only when overflowing. Horizontal ScrollBar is explicitly added in caller children, which this wrapper places inside its Viewport; the wrapper vertical bar remains a Root sibling of that Viewport. Horizontal scrollbar uses column flex flow so flex-1 fills its thickness rather than overriding source-measured thumb width. Focus outline and native links remain meaningful without a draggable visual scrollbar; all text/list content is retained. No fake ARIA scrollbar or Root value/onValueChange is invented. Static thumb dimensions are finite illustrative runtime measurements, not copied node identities.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

[]

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
