# InputGroup · native Quellenreferenz

Compose a labelled native input or textarea with supplementary text and independent action buttons.

Gebundener shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalbytes und Hashes](../../../../../sources/manifest.json); [alle exportierten Wrapper, Prop-Typen und Defaults](../../../../../sources/react-api-inventory.json).

Root/Addon are div role=group. Addon align defaults inline-start and accepts inline-end/block-start/block-end. Its default onClick focuses the first descendant input in its parent, except when target.closest(button) exists. It does not target textarea. Because {...props} is spread after onClick, a caller onClick replaces this default handler. Input/Textarea delegate actual Input/Textarea. InputGroupButton defaults type=button, variant=ghost, size=xs; sizes xs/sm/icon-xs/icon-sm. InputGroupText is span, not an automatic label or describedby relation.

Native input editing and Button activation remain with the composed components. Addon div is not keyboard focusable or a substitute for a label. This reference provides a real label and persistent described help; its clear Button is a caller action. Clicking decorative addon text can focus the input, but clicking its nested Button must preserve the Button interaction. Textarea compositions use their own visible label; addon does not promise textarea focusing.

Die konkrete HTML-Komposition ergänzt ausdrücklich Caller-Labels, Hilfen und Ziele. Das normale Prüfziel verwendet echte Quellwrapper. Die HTML-/CSS-Projektion allein implementiert keine React- oder Browserinteraktion. Der SCXML-Vertrag dokumentiert beobachtete native Transaktionen und kontrollierte Propautorität; interne Effekte sind keine neuen öffentlichen Events.

Zugeordnete Komponenten: [button](../../../../../components/button/component.json), [input](../../../../../components/input/component.json), [textarea](../../../../../components/textarea/component.json)

[Figma-Beobachtungen](../../../../../components/input-group/figma/figma-observations.json), native Stories, editierbare FIG-Datei und isolierte PNG bleiben führend für die visuelle Referenz. DTCG `provenance://source/%2Fnative%2Finput-group` führt zugehörige Quellmasse.

Abgeschlossen nach 23 tatsächlichen Browserfällen, 26 SCXML-Protokollfällen, 12 positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Sechsergruppe. [Prüfberichte](../../../../contract-cases) führen die konkreten Fälle; weiterhin `release:false`.
