# ButtonGroup · native Quellenreferenz

Visually and semantically group related independently operable controls.

Gebundener shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalbytes und Hashes](../../sources/manifest.json); [alle exportierten Wrapper, Prop-Typen und Defaults](../../sources/react-api-inventory.json).

ButtonGroup renders div role=group; orientation horizontal is the visual default, vertical stacks controls. ButtonGroupSeparator defaults vertical and composes Separator. ButtonGroupText uses useRender default div. Neither group orientation nor borders register toolbar roving focus, a radio choice or shared disabled/value state.

Each actual Button/link/input keeps its native keyboard, focus, disabled and callback contract. Tab visits enabled controls in DOM order. The reference supplies a group label identifying their relationship; group orientation changes layout without intercepting arrow keys.

Die konkrete HTML-Komposition ergänzt ausdrücklich Caller-Labels, Hilfen und Ziele. Das normale Prüfziel verwendet echte Quellwrapper. Die HTML-/CSS-Projektion allein implementiert keine React- oder Browserinteraktion. Der SCXML-Vertrag dokumentiert beobachtete native Transaktionen und kontrollierte Propautorität; interne Effekte sind keine neuen öffentlichen Events.

Zugeordnete Komponenten: [button](../button/component.json), [separator](../separator/component.json)

[Figma-Beobachtungen](figma/figma-observations.json), native Stories, editierbare FIG-Datei und isolierte PNG bleiben führend für die visuelle Referenz. DTCG `provenance://source/%2Fnative%2Fbutton-group` führt zugehörige Quellmasse.

Abgeschlossen nach 23 tatsächlichen Browserfällen, 26 SCXML-Protokollfällen, 12 positiven/negativen Semantikfällen und sieben React-SSR-Fällen der Sechsergruppe. [Prüfberichte](../../validation/contract-cases/) führen die konkreten Fälle; weiterhin `release:false`.
