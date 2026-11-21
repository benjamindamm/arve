# Breadcrumb · native Quellenreferenz

Identify the current page within a hierarchical path and provide real links to ancestors.

Gebundener shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalbytes und Hashes](../../../../../sources/manifest.json); [alle exportierten Wrapper, Prop-Typen und Defaults](../../../../../sources/react-api-inventory.json).

Root is nav with default aria-label=breadcrumb; List/Item are ol/li. BreadcrumbLink defaults to anchor through useRender. BreadcrumbPage is a nonfocusable span role=link, aria-disabled=true and aria-current=page. Separator/Ellipsis are presentation and aria-hidden; the hidden More text inside Ellipsis does not make an interactive overflow control. A real overflow menu must be explicitly composed.

Tab visits real ancestor links; Enter follows their href. Current page and separators are not made focusable. No root arrow navigation, roving focus or path state is implemented. Caller/router supplies updated ancestors and the current page after navigation.

Die konkrete HTML-Komposition ergänzt ausdrücklich Caller-Labels, Hilfen und Ziele. Das normale Prüfziel verwendet echte Quellwrapper. Die HTML-/CSS-Projektion allein implementiert keine React- oder Browserinteraktion. Der SCXML-Vertrag dokumentiert beobachtete native Transaktionen und kontrollierte Propautorität; interne Effekte sind keine neuen öffentlichen Events.

Zugeordnete Komponenten: native HTML-Elemente.

[Figma-Beobachtungen](../../../../../components/breadcrumb/figma/figma-observations.json), native Stories, editierbare FIG-Datei und isolierte PNG bleiben führend für die visuelle Referenz. DTCG `provenance://source/%2Fnative%2Fbreadcrumb` führt zugehörige Quellmasse.

Abgeschlossen nach 23 tatsächlichen Browserfällen, 26 SCXML-Protokollfällen, 12 positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Sechsergruppe. [Prüfberichte](../../../../contract-cases) führen die konkreten Fälle; weiterhin `release:false`.
