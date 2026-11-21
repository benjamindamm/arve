# AlertDialog · semantische Komponentenreferenz

Request an explicit decision for a consequential action without treating dismissal as confirmation.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-overlays-browser-run.json); keine allgemeine Anwendungsfreigabe.

The pinned AlertDialog wrapper owns the actual parts and primitive lifecycle; Root/Portal are controllers rather than invented DOM identities. Content is centered with a native 14px corner and 16px inset/gap; 448px (Dialog) or 424px (AlertDialog) is a selected maximum, shrinking to viewport minus 32px. AlertDialog sm uses the native 320px compact surface and actual 40px media tile. Native title 16/24 (Medium, or Semi Bold for AlertDialog) and body 14/20 are intrinsic text roles, never fixed frame heights. Footer order remains DOM order and wraps. Button actions explicitly depend on Button tokens/CVA, while primitive triggers remain bare unless the caller composes Button. Backdrop 50% and viewport clearance are explicit reference decisions; static examples do not measure live dimming. Action is not a primitive Close: the caller performs/accepts confirmation and explicitly closes; Cancel is the real primitive Close.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

The pinned AlertDialogAction is an ordinary Button, not a Close wrapper. Its onClick invokes the caller action and does not automatically close the alert dialog. AlertDialogCancel wraps the primitive Close. The caller explicitly closes after successful work when desired; cancellation never emits a destructive confirmation.

The alert dialog is modal. This reference chooses Cancel as initialFocus using the actual Popup prop. Tab remains inside; Escape/Cancel dismiss without confirming and return focus. Outside press is ignored by the primitive.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
