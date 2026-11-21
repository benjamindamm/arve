# Textarea · native Quellenreferenz

Edit multiline plain text with native text editing, form submission and validation semantics.

Gebundener shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalbytes und Hashes](../../../../../sources/manifest.json); [alle exportierten Wrapper, Prop-Typen und Defaults](../../../../../sources/react-api-inventory.json).

The wrapper is exactly a native textarea with React.ComponentProps<textarea>. value/defaultValue, name, required, disabled, readOnly, maxLength, rows and onChange are native props. It adds field-sizing-content and a minimum height, not autosave, rich text, a submit-on-Enter handler or a new value callback.

Native multiline editing and IME apply. Enter inserts a newline, Tab leaves the control, Escape does not revert committed text. Disabled suppresses editing and native form submission; readOnly permits focus/copy and retains its submitted value. Caller owns validation and explicit error relations.

Die konkrete HTML-Komposition ergänzt ausdrücklich Caller-Labels, Hilfen und Ziele. Das normale Prüfziel verwendet echte Quellwrapper. Die HTML-/CSS-Projektion allein implementiert keine React- oder Browserinteraktion. Der SCXML-Vertrag dokumentiert beobachtete native Transaktionen und kontrollierte Propautorität; interne Effekte sind keine neuen öffentlichen Events.

Zugeordnete Komponenten: native HTML-Elemente.

[Figma-Beobachtungen](../../../../../components/textarea/figma/figma-observations.json), native Stories, editierbare FIG-Datei und isolierte PNG bleiben führend für die visuelle Referenz. DTCG `provenance://source/%2Fnative%2Ftextarea` führt zugehörige Quellmasse.

Abgeschlossen nach 23 tatsächlichen Browserfällen, 26 SCXML-Protokollfällen, 12 positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Sechsergruppe. [Prüfberichte](../../../../contract-cases) führen die konkreten Fälle; weiterhin `release:false`.
