# Pagination · native Quellenreferenz

Navigate an explicitly supplied set of result-page destinations while identifying the current page.

Gebundener shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalbytes und Hashes](../../../../../sources/manifest.json); [alle exportierten Wrapper, Prop-Typen und Defaults](../../../../../sources/react-api-inventory.json).

Root nav role=navigation is named pagination; Content/Item are ul/li. PaginationLink renders Button as anchor with nativeButton=false; isActive sets aria-current=page and outline instead of ghost, size defaults icon. Previous/Next default text and accessible English labels can be overridden for localization. Ellipsis is aria-hidden. The wrapper does not calculate page count, clamp indices, fetch results or implement a disabled prop on PaginationLink.

Real links retain Tab/Enter and normal modified click navigation. There is no roving arrow selection. This reference omits unavailable Previous/Next links at boundaries instead of attaching a fake disabled attribute to an anchor. A router may prevent default onClick and navigate itself; the component does not commit a page index before the caller updates isActive.

Die konkrete HTML-Komposition ergänzt ausdrücklich Caller-Labels, Hilfen und Ziele. Das normale Prüfziel verwendet echte Quellwrapper. Die HTML-/CSS-Projektion allein implementiert keine React- oder Browserinteraktion. Der SCXML-Vertrag dokumentiert beobachtete native Transaktionen und kontrollierte Propautorität; interne Effekte sind keine neuen öffentlichen Events.

Zugeordnete Komponenten: [button](../../../../../components/button/component.json)

[Figma-Beobachtungen](../../../../../components/pagination/figma/figma-observations.json), native Stories, editierbare FIG-Datei und isolierte PNG bleiben führend für die visuelle Referenz. DTCG `provenance://source/%2Fnative%2Fpagination` führt zugehörige Quellmasse.

Abgeschlossen nach 23 tatsächlichen Browserfällen, 26 SCXML-Protokollfällen, 12 positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Sechsergruppe. [Prüfberichte](../../../../contract-cases) führen die konkreten Fälle; weiterhin `release:false`.
