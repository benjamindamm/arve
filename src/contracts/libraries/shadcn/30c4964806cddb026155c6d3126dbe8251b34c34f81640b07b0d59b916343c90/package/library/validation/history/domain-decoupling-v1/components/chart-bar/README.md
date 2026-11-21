# Bar chart · Quellengebundene Diagrammkomposition

Compare monthly visitor counts using independent bars and a zero-baseline quantitative axis in this reference.

## Belegte Oberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Hashes](../../../../../sources/manifest.json); [exakte exportierte Typen, Defaults und Quellzeilen](../../../../../sources/react-api-inventory.json). Diese Familie exportiert `ChartContainer`, `ChartTooltipContent`, `ChartLegendContent`. `interface.json` bewahrt die genaue Propoberfläche jedes Wrappers; sie ist keine frei erfundene native Widget-API.

ChartContainer is a div/context/ResponsiveContainer composition, not a plot API. It requires config:ChartConfig and a Recharts-compatible child, initialDimension defaults to 320×200; caller gives a nonzero constrained chart size. Config keys map optional ReactNode labels/icons and either color or complete light/dark theme values; generated --color-key variables are scoped to the chart id. ChartStyle returns null without color/theme entries. ChartTooltip and ChartLegend are direct Recharts aliases. ChartTooltipContent requires chart context, returns null when inactive/empty, filters payload type=none, resolves series/nameKey/labelKey and supports formatter, labelFormatter, hideLabel/hideIndicator and dot/line/dashed indicators. ChartLegendContent requires context, returns null with no payload, supports nameKey/hideIcon/verticalAlign. For one payload item with a non-dot indicator, the label nests inside the default row; a custom formatter replaces that row and owns the nested label as well. Neither tooltip nor legend fabricates source data, performs aggregation or automatically makes a complete text alternative. The actual source custom tooltip is a plain div, not a separately focusable ARIA tooltip widget. Recharts 3.8 accessibilityLayer keyboard behavior and TooltipBoundingBox Escape dismissal are separately pinned. This reference offers the entire native table and summary continuously; its SVG is explicitly redundant aria-hidden with accessibilityLayer=false. Thus every value is readable without hover, chart focus or a particular screen reader mode. Pointer tooltip remains supplemental and Escape dismisses at the current coordinate until the source coordinate changes. Reference updates replace graph/table/summary from the same dataset; empty and failure are explicit caller feedback instead of a fabricated zero chart. Interactive application filters and legends, if composed, require their own Button/selection contract.

## Semantik und Referenzentscheidungen

Full captioned table with column headers, row headers, exact values and category order; visible summary explicitly states units/unknown units and the chart-specific interpretation. Every category/series survives without color, geometry, pointer hover or transient tooltip.

The source Base UI chart wrapper remains the public foundation. The named chart family is an explicit Recharts composition, not a new exported upstream component. The supplemental official new-york-v4 example supplies its actual plot shape and literal dataset only; it does not replace the chosen Base UI wrapper. Dataset counts, accessible figure/table, redundant hidden SVG, units, zero-baseline bar policy and reduced-motion/no-animation reference usage are explicit caller decisions. Figma supplies all native visual measurements; no claim equates this React sample with every Figma raster.

This default content wrapper does not install a keyboard listener or roving focus. Native links/buttons/inputs in the chosen children retain their own documented semantics. Label delegates native focus through its associated control.

`accessibility.html` ist die konkrete, typzulässige Referenzkomposition. Native Elemente werden für ihre tatsächliche Bedeutung verwendet; fehlende native Überschriften/Labelbezüge werden als bewusste Caller-Komposition geliefert, nicht als automatisch vorhandene Wrapperfunktion ausgegeben.

## Verhalten und Komposition

SCXML consumes observed Recharts tooltip index/coordinate/payload changes, not fabricated shadcn Root callbacks. DATA_PROPS_CHANGED is this reference composition transaction and clears stale supplemental hint while graph/table/summary are updated atomically from the same dataset; error/empty feedback remains caller-owned.

The chosen redundant graph has aria-hidden=true and accessibilityLayer=false. Native table reading and surrounding links/controls remain available. This does not claim the source Recharts accessibilityLayer lacks keyboard support: its own Left/Right/Enter interactions are in the pinned keyboard middleware, but are not required to obtain any reference data. The supplemental pointer tooltip has no independent focus target. Escape dismisses at the source coordinate; it does not erase data.

Zugeordnete Nachfahren: keine vorgeschriebene interaktive Kindkomponente.

## Visuelle Originale und Prüfung

[Figma-Beobachtungen](../../../../../components/chart-bar/figma/figma-observations.json) bewahren Seite, Sets, Varianten und native Masse des gebundenen FIG-Exports. Die ursprünglichen Stories bleiben erhalten. DTCG `provenance://source/%2Fnative%2Fchart-bar` führt konkrete native Probenmasse; CSS bindet die zugehörigen Quellknoten. Der editierbare native Ausschnitt und seine isoliert gerenderte PNG sind ein statischer Designnachweis.

[Browser-/Quellprüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md) und `validation`-Berichte am Bibliotheksroot unterscheiden native React-SSR-Semantik, SCXML-Konsistenz, Coverage und Bildsichtprüfung. Abgeschlossen nach 35 tatsächlichen Browserfällen für die acht konkreten Plottypen, 32 SCXML-Protokollfällen, 32 exakten Daten-/Semantikfällen mit Gegenbeispielen und neun React-SSR-Fällen des gemeinsamen Chartmoduls. [Konkrete Prüfberichte](../../../../contract-cases); weiterhin `release:false`.

## Konkretes Quellbeispiel

Compare monthly visitor counts using independent bars and a zero-baseline quantitative axis in this reference.

[Gebundener Datensatz und Quellhash](../../../../../sources/chart-reference-data.json) bewahrt insbesondere Radar-April 273 gegenüber den 73 in Area/Bar/Line. Das Tooltip-Beispiel benennt keine Einheit; der Vertrag erfindet keine. [Öffentlicher Wrapper](../../../../../sources/shadcn/apps/v4/registry/bases/base/ui/chart.tsx.source) bleibt der Base-UI-Bestandteil.
