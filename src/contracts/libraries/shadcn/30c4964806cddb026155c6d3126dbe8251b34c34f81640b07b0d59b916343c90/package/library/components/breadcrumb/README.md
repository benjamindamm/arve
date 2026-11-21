# Breadcrumb · semantische Komponentenreferenz

Identify the current page within a hierarchical path and provide real links to ancestors.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-native-browser-run.json); keine allgemeine Anwendungsfreigabe.

Breadcrumb binds all seven actual exports. Native 14px separator glyphs and 4px item gap are retained, with an explicit 8px wrapping-list reference gap and shared 14/20px typography. Ancestors are real href anchors; the actual current-page wrapper is a nonfocusable span with role=link, aria-disabled=true and aria-current=page, preserved rather than silently rewritten. Native presentation separators and ellipsis are hidden from accessibility. Ellipsis is not a disclosure control: this concrete fixture supplies the full hierarchy as alternative links below, instead of inventing an overflow API or hiding essential destinations. Caller can separately compose a real menu if desired. RTL fixtures explicitly set dir on Root and mirror chevrons; logical wrapping remains fluid.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

Root is nav with default aria-label=breadcrumb; List/Item are ol/li. BreadcrumbLink defaults to anchor through useRender. BreadcrumbPage is a nonfocusable span role=link, aria-disabled=true and aria-current=page. Separator/Ellipsis are presentation and aria-hidden; the hidden More text inside Ellipsis does not make an interactive overflow control. A real overflow menu must be explicitly composed.

Tab visits real ancestor links; Enter follows their href. Current page and separators are not made focusable. No root arrow navigation, roving focus or path state is implemented. Caller/router supplies updated ancestors and the current page after navigation.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
