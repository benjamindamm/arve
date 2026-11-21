# RadioGroup · semantische Komponentenreferenz

Choose one value from a labelled mutually exclusive set with native form integration.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-selection-browser-run.json); keine allgemeine Anwendungsfreigabe.

Actual visible 16px source radios contain the checked-only 8px primary-foreground dot and the real hidden native form input. No duplicate synthetic native control or decorative classification is introduced. Native control/label gap 8px is retained;12px option spacing is an explicit caller layout decision because Root supplies no option layout. The selected background/border follows native primary roles; invalid styling changes border while readable group help/error describes the issue. Checked value stays singular, native form name/value remains plan, and labels explicitly name the actual visible roles. Disabled fades the control; readOnly stays focusable and visually distinct from disabled. Arrow/Space selection, Enter nonactivation, Home/End nonhandling and controlled cancellation follow actual source composite behavior. RTL keyboard composition requires the real DirectionProvider plus HTML direction.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

RadioGroup uses a generic value/defaultValue and onValueChange(value,eventDetails), plus disabled/readOnly/required/name/form. RadioGroupItem inherits the exact Radio.Root props including value and disabled. The default visible root is span role=radio with a hidden native radio input, not a visible native radio. Checked value is singular; choosing the checked item does not clear the group. Disabled/readOnly suppress user changes; callback cancellation can veto and controlled props stay authoritative.

Tab enters the current/enabled radio; arrows navigate/select enabled items using the source composite and wrap behavior. Space selects a radio. Enter does not toggle (the source prevents its button activation; form context remains separate). Home/End are disabled by the RadioGroup composite; Escape does not clear selection.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
