# Tooltip · semantische Komponentenreferenz

Provide a supplementary visual label for a correctly named target on hover or keyboard focus.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-overlays-browser-run.json); keine allgemeine Anwendungsfreigabe.

Actual Tooltip portal positioning, collision handling and defaults remain primitive-owned; CSS does not recreate anchor coordinates. Native radius/insets are adopted as semantic popup metrics, while width is fluid with an explicit bounded maximum. Tooltip uses native 8px corners and 8/12px insets, inverse foreground/background colors, and its actual internal Arrow class. The chosen usage hides duplicate visual tooltip text from accessibility and provides essential help persistently with a real aria-describedby relation; this is an explicit accessible usage, not a claim the pinned source automatically creates that relation.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

The source TooltipProvider wrapper defaults delay=0, while trigger/provider props can configure hover delay. disableHoverablePopup=false permits moving the pointer into the popup through the primitive safe-region logic. Disabled Root suppresses opening. Popup side=top, sideOffset=4, align=center, alignOffset=0. The package documentation calls tooltips visual-only and requires an appropriately named trigger; essential information uses inline text or an accessible Popover. This reference explicitly hides the redundant visual popup from assistive technology. Required help is persistent inline text; the trigger describedby relation points to that help, never solely to the visual popup.

Keyboard focus opens without hover delay; blur, Escape or trigger press can close. Focus never moves into the tooltip and there is no Tab trap. The trigger must carry an accessible name closely matching the visual label. The pinned primitive intentionally supplies a visual-only hint, not an automatic ARIA tooltip/description relationship.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
