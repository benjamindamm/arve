# Attachment · React-Inhaltsreferenz

Display an attached file and its metadata.

## Belegte Oberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Hashes](../../../../../sources/manifest.json); [exakte exportierte Typen, Defaults und Quellzeilen](../../../../../sources/react-api-inventory.json). Diese Familie exportiert `Attachment`, `AttachmentMedia`, `AttachmentContent`, `AttachmentTitle`, `AttachmentDescription`, `AttachmentActions`, `AttachmentAction`, `AttachmentTrigger`, `AttachmentGroup`. `interface.json` bewahrt die genaue Propoberfläche jedes Wrappers; sie ist keine frei erfundene native Widget-API.

Attachment state is a caller-supplied styling prop, default done; it does not upload, select files, retry, cancel or progress through states. Title/Description are spans, Content/Actions/Group are divs. AttachmentAction composes Button, ghost/icon-xs defaults. AttachmentTrigger uses native button default type=button, or an explicit native render such as anchor. Group supplies horizontal overflow/snap, not selection state. Caller owns async request transitions and focus after removal. Do not nest Trigger buttons/anchors inside other interactive elements or cover secondary actions with an unnamed trigger.

## Semantik und Referenzentscheidungen

Filename, type/size where relevant and upload state/error are text. Decorative media icon is explicitly hidden. Action labels include the actual attachment name; thumbnails need useful alt when conveying content.

The error wording, status text and Retry Button are explicit caller composition. A real async operation determines state; no synthetic timeout is attached to make the visual upload states look operational.

This default content wrapper does not install a keyboard listener or roving focus. Native links/buttons/inputs in the chosen children retain their own documented semantics. Label delegates native focus through its associated control.

`accessibility.html` ist die konkrete, typzulässige Referenzkomposition. Native Elemente werden für ihre tatsächliche Bedeutung verwendet; fehlende native Überschriften/Labelbezüge werden als bewusste Caller-Komposition geliefert, nicht als automatisch vorhandene Wrapperfunktion ausgegeben.

## Verhalten und Komposition

Attachment state is a caller-supplied styling prop, default done; it does not upload, select files, retry, cancel or progress through states. Title/Description are spans, Content/Actions/Group are divs. AttachmentAction composes Button, ghost/icon-xs defaults. AttachmentTrigger uses native button default type=button, or an explicit native render such as anchor. Group supplies horizontal overflow/snap, not selection state. Caller owns async request transitions and focus after removal. Do not nest Trigger buttons/anchors inside other interactive elements or cover secondary actions with an unnamed trigger.

Der quellengebundene SCXML-Vertrag bildet genau diesen Ablauf ab. React-/Browserprüfungen bleiben führend für tatsächliche interne Zustandsänderungen; er ist kein unabhängiger Primitive-Ersatz.

Zugeordnete Nachfahren: [button](../../../../../components/button/component.json)

## Visuelle Originale und Prüfung

[Figma-Beobachtungen](../../../../../components/attachment/figma/figma-observations.json) bewahren Seite, Sets, Varianten und native Masse des gebundenen FIG-Exports. Die ursprünglichen Stories bleiben erhalten. DTCG `provenance://source/%2Fnative%2Fattachment` führt konkrete native Probenmasse; CSS bindet die zugehörigen Quellknoten. Der editierbare native Ausschnitt und seine isoliert gerenderte PNG sind ein statischer Designnachweis.

[Browser-/Quellprüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md) und `validation`-Berichte am Bibliotheksroot unterscheiden native React-SSR-Semantik, SCXML-Konsistenz, Coverage und Bildsichtprüfung. Abgeschlossen nach 18 tatsächlichen Browserfällen, zwölf SCXML-Protokollfällen, zehn positiven/negativen Semantikfällen und sechs React-SSR-Fällen der Fünfergruppe. [Prüfberichte](../../../../contract-cases) führen die konkreten Fälle; weiterhin `release:false`.
