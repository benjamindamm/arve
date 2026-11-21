# Progress · React-Inhaltsreferenz

Represent advancement of an ongoing task.

## Belegte Oberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Hashes](../../../../../sources/manifest.json); [exakte exportierte Typen, Defaults und Quellzeilen](../../../../../sources/react-api-inventory.json). Diese Familie exportiert `Progress`, `ProgressTrack`, `ProgressIndicator`, `ProgressLabel`, `ProgressValue`. `interface.json` bewahrt die genaue Propoberfläche jedes Wrappers; sie ist keine frei erfundene native Widget-API.

Root value is required number|null; null or nonfinite is indeterminate with no aria-valuenow. Finite values are clamped to min/max, normalized for indicator width, formatted by locale/format, and complete when clamped value equals max. getAriaValueText(formattedValue,rawValue) or aria-valuetext supplies meaningful units. This reference requires finite min<max. The wrapper always inserts Track/Indicator after children; passing another Track in children duplicates the track. There is no timer, request, cancellation or onValueChange. The caller updates props and announces task completion/error separately.

## Semantik und Referenzentscheidungen

ProgressLabel registers the task name; Root reports min/max/value/value text. ProgressValue visible text is aria-hidden because Root conveys it. Caller supplies explicit failure and completion messages outside the progressbar; color and width are supplementary.

The upload task, finite increasing bounds precondition, textual completion/error feedback and localized units are explicit caller policies. This informative progress display has no user-adjustable value or slider keyboard protocol.

This default content wrapper does not install a keyboard listener or roving focus. Native links/buttons/inputs in the chosen children retain their own documented semantics. Label delegates native focus through its associated control.

`accessibility.html` ist die konkrete, typzulässige Referenzkomposition. Native Elemente werden für ihre tatsächliche Bedeutung verwendet; fehlende native Überschriften/Labelbezüge werden als bewusste Caller-Komposition geliefert, nicht als automatisch vorhandene Wrapperfunktion ausgegeben.

## Verhalten und Komposition

Root value is required number|null; null or nonfinite is indeterminate with no aria-valuenow. Finite values are clamped to min/max, normalized for indicator width, formatted by locale/format, and complete when clamped value equals max. getAriaValueText(formattedValue,rawValue) or aria-valuetext supplies meaningful units. This reference requires finite min<max. The wrapper always inserts Track/Indicator after children; passing another Track in children duplicates the track. There is no timer, request, cancellation or onValueChange. The caller updates props and announces task completion/error separately.

Der quellengebundene SCXML-Vertrag bildet genau diesen Ablauf ab. React-/Browserprüfungen bleiben führend für tatsächliche interne Zustandsänderungen; er ist kein unabhängiger Primitive-Ersatz.

Zugeordnete Nachfahren: keine vorgeschriebene interaktive Kindkomponente.

## Visuelle Originale und Prüfung

[Figma-Beobachtungen](../../../../../components/progress/figma/figma-observations.json) bewahren Seite, Sets, Varianten und native Masse des gebundenen FIG-Exports. Die ursprünglichen Stories bleiben erhalten. DTCG `provenance://source/%2Fnative%2Fprogress` führt konkrete native Probenmasse; CSS bindet die zugehörigen Quellknoten. Der editierbare native Ausschnitt und seine isoliert gerenderte PNG sind ein statischer Designnachweis.

[Browser-/Quellprüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md) und `validation`-Berichte am Bibliotheksroot unterscheiden native React-SSR-Semantik, SCXML-Konsistenz, Coverage und Bildsichtprüfung. Abgeschlossen nach 18 tatsächlichen Browserfällen, zwölf SCXML-Protokollfällen, zehn positiven/negativen Semantikfällen und sechs React-SSR-Fällen der Fünfergruppe. [Prüfberichte](../../../../contract-cases) führen die konkreten Fälle; weiterhin `release:false`.
