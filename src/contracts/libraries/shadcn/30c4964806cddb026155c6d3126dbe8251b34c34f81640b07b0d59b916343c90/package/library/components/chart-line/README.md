# ChartLine · semantische Komponentenreferenz

Show ordered monthly visitor observations connected as a trend. Interpolated segments are not measured data, and missing values must not silently become zero.

Status der neuen Domänenmigration: **complete** im begrenzten Referenzumfang. Stabile Teile, tatsächlich passende Source-Selektoren, semantische Tokenwerte und nutzbare Zustands-Fixtures wurden mit dem normalen Komponentenprüfpfad und der echten React-Verwendung geprüft. [Browsernachweis](../../validation/semantic-charts-browser-run.json); keine allgemeine Anwendungsfreigabe.

Each family is an explicit Recharts composition using the real ChartContainer, Tooltip and Legend wrappers. The chosen native example Card corner is retained; catalog page dimensions and individual bar/path node coordinates are not layout contracts. Plot width is fluid with a chosen 260px block extent,12/16px ticks and a complete captioned data table. Static fixtures derive geometry from source data; straight segments stand in for runtime natural interpolation and are identified as illustrations. The actual React target preserves source chart type and dataset. Radar uses an explicit 70% outer radius to leave room between its April label and the real legend. Figure gap 12/inset 16, tooltip 8px radius/10px inset and accessible scrollable table are explicit reference choices, not invented universal Figma measurements. Source tooltip actual cn-chart-tooltip class and inline --color-bg/--color-border, including dot/line/dashed, are retained; transient content remains supplementary. Source legend receives a caller className. Series colors are explicit semantic roles; no color alone conveys data. ChartStyle theme selectors require .dark context, while semantic token aliases use data-theme; the target supplies both. The reference passes Pie rootTabIndex=-1 because Recharts Pie otherwise emits a tab stop even with chart accessibilityLayer=false; this prevents an aria-hidden focus target while preserving supplementary pointer hints. No chart role slider/progressbar or focusable graph is invented. Full exact table remains primary, SVG hidden, no animation required; empty/error states never imply zero data.

[Stabile Anatomie und tatsächliche Source-/Caller-Bindungen](component.json), [CEM](interface.json), [semantische Zustands-/Variantenregeln](layout.css), [brauchbare Fixtures](stories.json). Native Muster, Hashes und Messwerte bleiben vollständig separat in [Quellmustern](figma/source-specimens.json) und [Traceability](figma/traceability.json).

Die veröffentlichten Props/Callbacks und der [führende SCXML-Aktor](behavior.scxml) bleiben die Quelle des tatsächlichen Verhaltens. [HTML/ARIA](accessibility.html) und [Projektionsregeln](accessibility.rules.json) benennen die konkrete Verwendung, einschließlich notwendiger Caller-Beschriftung. Selectorbindungen sind ein expliziter React-/DOM-Adaptervertrag, keine erfundenen automatischen Shadow-DOM-Exports.

[]

Die vollständigen nativen Tastatur-/Fokusregeln bleiben in accessibility.rules.json und behavior.scxml gebunden.

[Originale React-Quellen und Versionen](../../sources/manifest.json), [nativer FIG-/PNG-Beleg](figma/figma-observations.json) und [tatsächliches Source-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md). `release:false`; kein allgemeines Pixel-/Framework-/AT-Zertifikat.
