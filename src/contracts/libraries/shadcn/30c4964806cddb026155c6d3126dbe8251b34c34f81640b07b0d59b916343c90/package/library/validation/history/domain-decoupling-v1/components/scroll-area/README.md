# ScrollArea · React-Inhaltsreferenz

Provide a bounded viewport for overflowing content.

## Belegte Oberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Hashes](../../../../../sources/manifest.json); [exakte exportierte Typen, Defaults und Quellzeilen](../../../../../sources/react-api-inventory.json). Diese Familie exportiert `ScrollArea`, `ScrollBar`. `interface.json` bewahrt die genaue Propoberfläche jedes Wrappers; sie ist keine frei erfundene native Widget-API.

Root is role=presentation and wraps an internally created Viewport, vertical ScrollBar and Corner. Scrollbar/Corner are aria-hidden. Viewport is tabindex=0 only while at least one axis overflows, otherwise -1. Native scrolling drives viewport position, edge and thumb geometry. Root props are not Viewport props; the wrapper exports no Viewport and does not promise forwarding onScroll or aria-label to it. External sizing must make the viewport constrained. ScrollBar orientation defaults vertical; horizontal is explicitly composed. It does not auto-follow messages or preserve chat anchors; MessageScroller owns that behavior.

## Semantik und Referenzentscheidungen

The region has a caller-supplied real heading and all scrollable content remains native text/list/link. The visual scrollbar is aria-hidden; it is not a second fake adjustable widget. Overflow must not be the only indication that more content exists.

This reference uses an outer labelled section because the wrapper Root remains presentational. Native keyboard/wheel/touch scrolling and focusable descendants remain available. Browser scroll position is internal viewport state, not an invented Root value/onValueChange API.

This default content wrapper does not install a keyboard listener or roving focus. Native links/buttons/inputs in the chosen children retain their own documented semantics. Label delegates native focus through its associated control.

`accessibility.html` ist die konkrete, typzulässige Referenzkomposition. Native Elemente werden für ihre tatsächliche Bedeutung verwendet; fehlende native Überschriften/Labelbezüge werden als bewusste Caller-Komposition geliefert, nicht als automatisch vorhandene Wrapperfunktion ausgegeben.

## Verhalten und Komposition

Root is role=presentation and wraps an internally created Viewport, vertical ScrollBar and Corner. Scrollbar/Corner are aria-hidden. Viewport is tabindex=0 only while at least one axis overflows, otherwise -1. Native scrolling drives viewport position, edge and thumb geometry. Root props are not Viewport props; the wrapper exports no Viewport and does not promise forwarding onScroll or aria-label to it. External sizing must make the viewport constrained. ScrollBar orientation defaults vertical; horizontal is explicitly composed. It does not auto-follow messages or preserve chat anchors; MessageScroller owns that behavior.

Der quellengebundene SCXML-Vertrag bildet genau diesen Ablauf ab. React-/Browserprüfungen bleiben führend für tatsächliche interne Zustandsänderungen; er ist kein unabhängiger Primitive-Ersatz.

Zugeordnete Nachfahren: keine vorgeschriebene interaktive Kindkomponente.

## Visuelle Originale und Prüfung

[Figma-Beobachtungen](../../../../../components/scroll-area/figma/figma-observations.json) bewahren Seite, Sets, Varianten und native Masse des gebundenen FIG-Exports. Die ursprünglichen Stories bleiben erhalten. DTCG `provenance://source/%2Fnative%2Fscroll-area` führt konkrete native Probenmasse; CSS bindet die zugehörigen Quellknoten. Der editierbare native Ausschnitt und seine isoliert gerenderte PNG sind ein statischer Designnachweis.

[Browser-/Quellprüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md) und `validation`-Berichte am Bibliotheksroot unterscheiden native React-SSR-Semantik, SCXML-Konsistenz, Coverage und Bildsichtprüfung. Abgeschlossen nach 18 tatsächlichen Browserfällen, zwölf SCXML-Protokollfällen, zehn positiven/negativen Semantikfällen und sechs React-SSR-Fällen der Fünfergruppe. [Prüfberichte](../../../../contract-cases) führen die konkreten Fälle; weiterhin `release:false`.
