# Collapsible · semantische Komponentenreferenz

Show or hide supplementary content through its owning trigger.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-overlays-browser-run.json); keine allgemeine Anwendungsfreigabe.

The three pinned wrappers are unstyled primitives. This reference adopts the native compact 32px header, 16px inline inset and 8px stack gap; content height and width remain intrinsic. No card, chevron, animation, invented variant or fixed source instance width is implied. A composed Button may replace the trigger through the actual render API; its own chrome then belongs to that composition.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

open/defaultOpen control one panel. Disabled suppresses toggling. onOpenChange carries the boolean and cancellable source details. Closing changes panel presence according to Panel keepMounted/transition options; the caller restores focus before programmatically hiding a currently focused descendant if required.

The native trigger uses Enter/Space and normal Tab order. Escape/outside press do not close a bare Collapsible. There is no modal focus trap or automatic focus-return contract.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
