# Field · semantische Komponentenreferenz

Arrange a control with its label, explanation and errors.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-structured-browser-run.json); keine allgemeine Anwendungsfreigabe.

Field maps the actual twelve semantic parts without conflating FieldTitle with FieldLabel: both emit data-slot=field-label, but only FieldLabel is a native label and their actual cn-field-title/cn-field-label classes distinguish identity. FieldSet/Legend retain native grouping. Browser evidence shows the native legend sits outside the fieldset anonymous flex content, so its native16px separation is applied explicitly as margin rather than relying on an ineffective container gap. Native field gap 8px, normal group gap 20px and set gap 16px remain independent semantic roles. Responsive layout follows source orientation classes and named container scope; 28rem is an explicit reference container threshold, not a static Figma measurement. Legend 16/24px, label 14/20px and readable error-list spacing are explicit reference typography/layout decisions where native instances are not expanded. FieldSeparator composes the actual Separator runtime data-orientation attribute. The caller owns native label/description/error IDs, input invalid/disabled state and validation. Source FieldError renders only meaningful children/errors, gives children precedence and deduplicates error messages; it does not create validation or IDs.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

[]

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
