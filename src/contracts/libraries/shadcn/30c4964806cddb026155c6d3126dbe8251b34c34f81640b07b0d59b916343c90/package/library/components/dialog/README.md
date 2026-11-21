# Dialog · semantische Komponentenreferenz

Complete a focused task in a labelled modal or explicitly nonmodal surface.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-overlays-browser-run.json); keine allgemeine Anwendungsfreigabe.

The pinned Dialog wrapper owns the actual parts and primitive lifecycle; Root/Portal are controllers rather than invented DOM identities. Content is centered with a native 14px corner and 16px inset/gap; 448px (Dialog) or 424px (AlertDialog) is a selected maximum, shrinking to viewport minus 32px. AlertDialog sm uses the native 320px compact surface and actual 40px media tile. Native title 16/24 (Medium, or Semi Bold for AlertDialog) and body 14/20 are intrinsic text roles, never fixed frame heights. Footer order remains DOM order and wraps. Button actions explicitly depend on Button tokens/CVA, while primitive triggers remain bare unless the caller composes Button. Backdrop 50% and viewport clearance are explicit reference decisions; static examples do not measure live dimming. Close and Escape follow the actual primitive callback and host authority; no CSS rule invents state transitions.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

modal=true also locks outside pointer interaction and page scroll; modal=false permits the page. trap-focus contains focus without the full modal outside/scroll policy. disablePointerDismissal blocks outside press (and nonmodal focus-out), not the explicit Close control. Popup title/description supply accessible relations.

Default modal=true contains Tab/Shift+Tab, moves focus into the popup, and restores focus to the trigger on closing. Escape and the supplied close button dismiss unless callback cancellation vetoes. Popup initialFocus/finalFocus may deliberately override the default targets.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
