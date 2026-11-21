# ButtonGroup · semantische Komponentenreferenz

Visually and semantically group related independently operable controls.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-native-browser-run.json); keine allgemeine Anwendungsfreigabe.

ButtonGroup maps all three actual exports and imports its real Button styling dependency. Native grouped-button outer corners come from the measured 10px default master; connected edges are logical rather than tied to specimen position labels. The source default horizontal CVA class exists even when data-orientation is omitted, so CSS follows actual orientation classes. Source Separator 1.9 uses data-orientation, not the data-horizontal/data-vertical utility names left in the pinned wrapper. Text addon chrome is an explicit reference with intrinsic height stretched to adjacent buttons and 10px inset; no fake Group size prop is added. Buttons retain their own sizes, states and keyboard/focus semantics. The group has no roving tabindex, toolbar role, group disabled state or selection API. Callers name the group and disable individual children; logical connected corners support explicit RTL.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

ButtonGroup renders div role=group; orientation horizontal is the visual default, vertical stacks controls. ButtonGroupSeparator defaults vertical and composes Separator. ButtonGroupText uses useRender default div. Neither group orientation nor borders register toolbar roving focus, a radio choice or shared disabled/value state.

Each actual Button/link/input keeps its native keyboard, focus, disabled and callback contract. Tab visits enabled controls in DOM order. The reference supplies a group label identifying their relationship; group orientation changes layout without intercepting arrow keys.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
