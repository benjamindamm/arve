# Accordion · gebundene Quellenreferenz

Expand related sections while preserving independent item identity and a typed array of expanded values.

## Quellen und vollständige APIoberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3` und bewusst gewählte Base UI `1.9.0`. [Originaltypen, Code und Dokumentation](../../sources/manifest.json); [exakte Wrapper-/Propinventur](../../sources/react-api-inventory.json). `interface.json` führt jeden exportierten React-Wrapper mit seinem tatsächlichen Prop-Typ und den echten Root-Callbacks.

multiple=false permits at most one expanded item; pressing that item closes it. multiple=true toggles items independently. Disabled root/items suppress changes. The callback candidate may be canceled; controlled value stays prop-authoritative.

## Tastatur, Fokus und Lebenszyklus

Base UI 1.9 uses normal Tab order and native Enter/Space on each trigger. Its orientation/loopFocus props are deprecated and no longer implement roving/arrow focus. Arrow/Home/End are not invented as accordion selection commands.

SCXML trennt akzeptierte Änderung, kontrollierte Props, Callback-Abbruch und — wo der primitive Vertrag es vorsieht — Öffnen/Schliessen gegenüber Animationsabschluss. Der Callback übergibt das ursprüngliche `eventDetails`-Objekt. Bei verzögertem Unmount bleibt die schliessende Instanz bestehen, bis die Quellenaktion sie freigibt. `_effect.*` benennt interne Fokus-/Caller-Effekte, keine erfundenen öffentlichen DOM-Ereignisse.

## Semantik und Instanzbesitz

`accessibility.html` zeigt ausdrücklich den **offenen** Zustand einer konkreten Referenzinstanz. Geschlossen ist die Triggerprojektion nicht expandiert; Popup/Panel ist nach den gebundenen keepMounted-/Presence-Regeln abwesend oder verborgen. Titel-, Beschreibungs- und Kontrollbezüge gehören dieser Instanz. Die HTML-/CSS-Projektion allein implementiert keine Base-UI-Interaktion. Das Prüfziel verwendet die echten gebundenen React-Wrapper.

Zugeordnete Komponenten: [button](../button/component.json)

## Native Gestaltung und begrenzte Prüfung

[Figma-Beobachtungen](figma/figma-observations.json), alle ursprünglichen nativen Stories und die DTCG-Masse unter `provenance://source/%2Fnative%2Faccordion` bleiben erhalten. FIG ist editierbar und die Vorschau mit graphisolierten Renderer-Caches erzeugt; native Quelldaten wurden zum Beheben der Cacheartefakte nicht umgeformt.

Konkrete React-Browserfälle, SCXML-Gegenfälle, semantische Beziehungen und Quellen-/Coverage-Abgleiche werden unter `validation` am Bibliotheksroot geführt. Abgeschlossen als ausreichend beschriebene Quellenreferenz: 35 Browserfälle, 75 SCXML-Protokollfälle und 18 positive/negative Semantikfälle für diese Neunergruppe sind dokumentiert. Der begrenzte Referenzabschluss bedeutet weiterhin `release:false`.
