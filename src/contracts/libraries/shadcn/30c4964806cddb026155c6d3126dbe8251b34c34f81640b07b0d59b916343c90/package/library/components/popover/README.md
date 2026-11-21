# Popover · semantische Komponentenreferenz

Expose anchored supplementary controls or content without assuming modal ownership.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-overlays-browser-run.json); keine allgemeine Anwendungsfreigabe.

Actual Popover portal positioning, collision handling and defaults remain primitive-owned; CSS does not recreate anchor coordinates. Native radius/insets are adopted as semantic popup metrics, while width is fluid with an explicit bounded maximum. Popover keeps native 10px corners/10px insets and the actual 288px source width maximum. Header gap is 2px with native 14/20 typography; Title/Description relations are explicitly supplied in the reference usage. The primitive owns opening, Escape, outside press, focus restoration and controlled callbacks.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

Content defaults side=bottom, align=center, sideOffset=4 and alignOffset=0. The wrapper exposes no PopoverClose component; source Root actionsRef.close or a caller-composed control closes it. Title/Description are actual exported primitive registration parts that supply the Popup name/description; the reference uses explicit IDs to make ownership auditable. Positioning/collision work belongs to the primitive, not a guessed CSS-only interaction.

Default modal=false allows outside interaction and focus-out dismissal. Escape/outside press close; the popup focuses an eligible descendant and normally restores the trigger. Modal/trap-focus are explicit Root choices with the documented Close-control requirements for touch screen readers.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
