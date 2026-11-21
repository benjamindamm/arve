# HoverCard · semantische Komponentenreferenz

Preview supplementary information for a genuine navigable link.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-overlays-browser-run.json); keine allgemeine Anwendungsfreigabe.

Actual HoverCard portal positioning, collision handling and defaults remain primitive-owned; CSS does not recreate anchor coordinates. Native radius/insets are adopted as semantic popup metrics, while width is fluid with an explicit bounded maximum. HoverCard keeps native 10px corners, 12/16px insets and 272px maximum; the real trigger remains an anchor and essential profile information is available outside the hover card. No invented Title/Description exports or automatic dialog role.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

HoverCard wraps PreviewCard. Its content is a plain div, not a fabricated dialog or tooltip role; full information remains available at the link destination. Content defaults side=bottom, sideOffset=4, align=center, alignOffset=4. The reference lab explicitly sets delay/closeDelay to 0 to exercise the same source interaction promptly.

The actual PreviewCard Trigger is an anchor. Hover and focus use its configurable delay (600ms default) and closeDelay (300ms). Escape/outside press dismiss. There is no modal focus trap, and native Enter still follows the link rather than committing a preview selection.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
