# Textarea · semantische Komponentenreferenz

Edit multiline plain text with native text editing, form submission and validation semantics.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-native-browser-run.json); keine allgemeine Anwendungsfreigabe.

Textarea is the actual native textarea export. Native 64px minimum height, 8/10px padding and 10px corners become semantic roles; the 360px sample width does not become a runtime constraint. Source field-sizing-content is represented directly, with a minimum-height fallback and native vertical resizing. Content can grow instead of clipping to a specimen height. Native label/help/error IDs are caller decisions, while readOnly, disabled, multiline value/selection/IME and native events remain browser-owned. Readonly stays focusable and selectable; disabled prevents user edits and is skipped in Tab order. Invalid styling supplements a linked readable error and does not invent validation.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

The wrapper is exactly a native textarea with React.ComponentProps<textarea>. value/defaultValue, name, required, disabled, readOnly, maxLength, rows and onChange are native props. It adds field-sizing-content and a minimum height, not autosave, rich text, a submit-on-Enter handler or a new value callback.

Native multiline editing and IME apply. Enter inserts a newline, Tab leaves the control, Escape does not revert committed text. Disabled suppresses editing and native form submission; readOnly permits focus/copy and retains its submitted value. Caller owns validation and explicit error relations.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
