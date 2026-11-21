# NativeSelect · native Quellenreferenz

Choose native single or multiple form options using the platform select interface.

Gebundener shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalbytes und Hashes](../../sources/manifest.json); [alle exportierten Wrapper, Prop-Typen und Defaults](../../sources/react-api-inventory.json).

NativeSelectProps omits the native numeric size prop and replaces it with sm|default (default). Other native select props, including multiple, value/defaultValue, disabled, name and onChange are passed through. NativeSelectOption/OptGroup are option/optgroup. The extra ChevronDown is aria-hidden. className styles the surrounding wrapper, not the select.

The operating system/browser owns popup, arrow, typeahead, modifier selection and Escape behavior. This contract consumes the actual native change transaction; it does not equate every arrow key with a committed change. Escape may close a native picker, and does not fabricate an extra change/revert event. Disabled controls/options cannot be user-chosen; controlled value remains prop-authoritative.

Die konkrete HTML-Komposition ergänzt ausdrücklich Caller-Labels, Hilfen und Ziele. Das normale Prüfziel verwendet echte Quellwrapper. Die HTML-/CSS-Projektion allein implementiert keine React- oder Browserinteraktion. Der SCXML-Vertrag dokumentiert beobachtete native Transaktionen und kontrollierte Propautorität; interne Effekte sind keine neuen öffentlichen Events.

Zugeordnete Komponenten: native HTML-Elemente.

[Figma-Beobachtungen](figma/figma-observations.json), native Stories, editierbare FIG-Datei und isolierte PNG bleiben führend für die visuelle Referenz. DTCG `provenance://source/%2Fnative%2Fnative-select` führt zugehörige Quellmasse.

Abgeschlossen nach 23 tatsächlichen Browserfällen, 26 SCXML-Protokollfällen, 12 positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Sechsergruppe. [Prüfberichte](../../validation/contract-cases/) führen die konkreten Fälle; weiterhin `release:false`.
