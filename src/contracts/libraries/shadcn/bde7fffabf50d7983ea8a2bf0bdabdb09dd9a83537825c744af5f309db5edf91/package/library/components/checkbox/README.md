# Checkbox · gebundene React-Referenz

Choose a boolean option with an independent mixed-state presentation and native hidden form input.

## Originalquellen und bewusste Entscheidungen

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`, Base UI `1.9.0`. [Quellenmanifest](../../sources/manifest.json) bewahrt Originalbytes, Hashes und die vollständigen Typ-/Code-/Dokumentationsstellen. [Typinventar](../../sources/react-api-inventory.json) erfasst die exportierten Wrapper. Die Base-UI-Version ist bewusst wie im vorhandenen Starter gewählt; Kompatibilität der verwendeten Wrapper wird im React-Prüfziel geprüft.

[Native Beobachtungen](figma/figma-observations.json) und [Ergänzung aller Figma-Teile](../../figma/existing-family-supplements/checkbox.json) binden den ursprünglichen FIG-Hash. Der bestehende native Zustandsentwurf und Preview bleiben erhalten; sie sind nicht jede mögliche React-Instanz.

## Vollständigkeitsumfang

`interface.json` führt die öffentliche React-Propoberfläche und zentrale Werte. Callbacknamen/Payloads sind React-Handler, keine erfundenen DOM-CustomEvents. `behavior.scxml` beschreibt den Quellenablauf als normalisiertes Protokoll; kontrollierte Werte werden erst durch neue Props autoritativ. Escape verändert keine dieser vier Controlwerte. Disabled und readonly unterdrücken eigene Änderungen; Callback-Abbruch bei Checkbox/Switch wird separat behandelt.

Native button: Enter/Space activate; checkbox: Space toggles, Enter does not toggle (it may submit its containing form); switch: source useButton Space/Enter activation; input: native text editing and IME. Tab follows native order; disabled controls are skipped unless Button focusableWhenDisabled is explicitly chosen.

For Base UI 1.9 checkbox/switch default roots are span role controls plus a hidden native form input, not a visible native input or button. The HTML is a semantic projection of that structure.

Die semantische HTML-Projektion verwendet native Textbenennung für Buttons. Keine redundante ARIA wird zum Schliessen des Namenskriteriums verlangt. Formbindungen, Beschriftung und konkrete Fehlermeldungen werden im jeweiligen Kontext geliefert.

## Ausgeführte Prüfung

[13 echte Browserfälle](../../validation/core-controls-browser-v1.json) im [React-Prüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md) prüfen Pointer, Enter/Space, Escape, Checkbox-readonly, Callback-Abbruch sowie native/ARIA-Semantik und Eingabefehler. Der normale App-Einstieg baut. Maschinen- und Quellenkonsistenzfälle werden getrennt protokolliert.

Status: **`complete` im begrenzten React-Referenzprofil**, weiterhin `release: false`. Vier Domänen und aktuelle Coverage sind abgeglichen. Die 20 SCXML-Fälle und sechs echten React-SSR-Fälle der Vierergruppe bestehen zusätzlich zu den 13 Browserfällen. Keine plattformübergreifende Implementierungszertifizierung wird behauptet.

Die HTML-Datei ist eine semantische Strukturprojektion; HTML und CSS allein implementieren den Base-UI-Lebenszyklus nicht. Das ausführbare Prüfziel verwendet die gebundenen echten React-Wrapper. Bei Checkbox/Switch bleiben frühere native-input-Vergleichsregeln im CSS erhalten; die zusätzlichen `data-slot`-/Rollenregeln bilden den ausgewählten Base-UI-Span-Root ab.
