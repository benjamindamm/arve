# Trace · React-Inhaltsreferenz

Present a sequence of execution or activity steps.

## Belegte Oberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Hashes](../../../../../sources/manifest.json); [exakte exportierte Typen, Defaults und Quellzeilen](../../../../../sources/react-api-inventory.json). Diese Familie exportiert `Trace`, `TraceLine`, `TraceIcon`, `TraceTitle`, `TraceDescription`, `TraceCollapsible`, `TraceCollapsibleTrigger`, `TraceCollapsibleContent`. `interface.json` bewahrt die genaue Propoberfläche jedes Wrappers; sie ist keine frei erfundene native Widget-API.

Trace and line/title/description are passive wrappers. TraceLine status is running|error|pending; there is no automatic successful state, log transport or retry action. TraceTitle includes motion-reduce:shimmer-none. Optional TraceCollapsible/Trigger/Content delegate the actual Collapsible component. Its controlled open prop requires onOpenChange in the wrapper union; defaultOpen remains available. Trigger Enter/Space toggles, disabled suppresses changes, cancellation/control authority follows Collapsible; Escape does not close it and focus is not trapped.

## Semantik und Referenzentscheidungen

TraceTitle/Description carry actual step/status/error text; TraceIcon is hidden by the source. Running shimmer, opacity and red color do not replace status wording. Expanded detail is readable native content.

This family deliberately composes the complete Collapsible reference for disclosure behavior, rather than pretending all trace lines are decorative or inventing an independent trace expansion API. Error/recovery wording is caller content; optional live announcements are task-owned.

This default content wrapper does not install a keyboard listener or roving focus. Native links/buttons/inputs in the chosen children retain their own documented semantics. Label delegates native focus through its associated control.

`accessibility.html` ist die konkrete, typzulässige Referenzkomposition. Native Elemente werden für ihre tatsächliche Bedeutung verwendet; fehlende native Überschriften/Labelbezüge werden als bewusste Caller-Komposition geliefert, nicht als automatisch vorhandene Wrapperfunktion ausgegeben.

## Verhalten und Komposition

Trace and line/title/description are passive wrappers. TraceLine status is running|error|pending; there is no automatic successful state, log transport or retry action. TraceTitle includes motion-reduce:shimmer-none. Optional TraceCollapsible/Trigger/Content delegate the actual Collapsible component. Its controlled open prop requires onOpenChange in the wrapper union; defaultOpen remains available. Trigger Enter/Space toggles, disabled suppresses changes, cancellation/control authority follows Collapsible; Escape does not close it and focus is not trapped.

Der quellengebundene SCXML-Vertrag bildet genau diesen Ablauf ab. React-/Browserprüfungen bleiben führend für tatsächliche interne Zustandsänderungen; er ist kein unabhängiger Primitive-Ersatz.

Zugeordnete Nachfahren: [collapsible](../../../../../components/collapsible/component.json)

## Visuelle Originale und Prüfung

[Figma-Beobachtungen](../../../../../components/trace/figma/figma-observations.json) bewahren Seite, Sets, Varianten und native Masse des gebundenen FIG-Exports. Die ursprünglichen Stories bleiben erhalten. DTCG `provenance://source/%2Fnative%2Ftrace` führt konkrete native Probenmasse; CSS bindet die zugehörigen Quellknoten. Der editierbare native Ausschnitt und seine isoliert gerenderte PNG sind ein statischer Designnachweis.

[Browser-/Quellprüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md) und `validation`-Berichte am Bibliotheksroot unterscheiden native React-SSR-Semantik, SCXML-Konsistenz, Coverage und Bildsichtprüfung. Abgeschlossen nach 18 tatsächlichen Browserfällen, zwölf SCXML-Protokollfällen, zehn positiven/negativen Semantikfällen und sechs React-SSR-Fällen der Fünfergruppe. [Prüfberichte](../../../../contract-cases) führen die konkreten Fälle; weiterhin `release:false`.
