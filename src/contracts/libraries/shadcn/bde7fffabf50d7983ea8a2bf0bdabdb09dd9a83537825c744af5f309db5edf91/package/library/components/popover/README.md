# Popover · gebundene Quellenreferenz

Expose anchored supplementary controls or content without assuming modal ownership.

## Quellen und vollständige APIoberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3` und bewusst gewählte Base UI `1.9.0`. [Originaltypen, Code und Dokumentation](../../sources/manifest.json); [exakte Wrapper-/Propinventur](../../sources/react-api-inventory.json). `interface.json` führt jeden exportierten React-Wrapper mit seinem tatsächlichen Prop-Typ und den echten Root-Callbacks.

Content defaults side=bottom, align=center, sideOffset=4 and alignOffset=0. The wrapper exposes no PopoverClose component; source Root actionsRef.close or a caller-composed control closes it. Title/Description are actual exported primitive registration parts that supply the Popup name/description; the reference uses explicit IDs to make ownership auditable. Positioning/collision work belongs to the primitive, not a guessed CSS-only interaction.

## Tastatur, Fokus und Lebenszyklus

Default modal=false allows outside interaction and focus-out dismissal. Escape/outside press close; the popup focuses an eligible descendant and normally restores the trigger. Modal/trap-focus are explicit Root choices with the documented Close-control requirements for touch screen readers.

SCXML trennt akzeptierte Änderung, kontrollierte Props, Callback-Abbruch und — wo der primitive Vertrag es vorsieht — Öffnen/Schliessen gegenüber Animationsabschluss. Der Callback übergibt das ursprüngliche `eventDetails`-Objekt. Bei verzögertem Unmount bleibt die schliessende Instanz bestehen, bis die Quellenaktion sie freigibt. `_effect.*` benennt interne Fokus-/Caller-Effekte, keine erfundenen öffentlichen DOM-Ereignisse.

## Semantik und Instanzbesitz

`accessibility.html` zeigt ausdrücklich den **offenen** Zustand einer konkreten Referenzinstanz. Geschlossen ist die Triggerprojektion nicht expandiert; Popup/Panel ist nach den gebundenen keepMounted-/Presence-Regeln abwesend oder verborgen. Titel-, Beschreibungs- und Kontrollbezüge gehören dieser Instanz. Die HTML-/CSS-Projektion allein implementiert keine Base-UI-Interaktion. Das Prüfziel verwendet die echten gebundenen React-Wrapper.

Zugeordnete Komponenten: [button](../button/component.json)

## Native Gestaltung und begrenzte Prüfung

[Figma-Beobachtungen](figma/figma-observations.json), alle ursprünglichen nativen Stories und die DTCG-Masse unter `provenance://source/%2Fnative%2Fpopover` bleiben erhalten. FIG ist editierbar und die Vorschau mit graphisolierten Renderer-Caches erzeugt; native Quelldaten wurden zum Beheben der Cacheartefakte nicht umgeformt.

Konkrete React-Browserfälle, SCXML-Gegenfälle, semantische Beziehungen und Quellen-/Coverage-Abgleiche werden unter `validation` am Bibliotheksroot geführt. Abgeschlossen als ausreichend beschriebene Quellenreferenz: 35 Browserfälle, 75 SCXML-Protokollfälle und 18 positive/negative Semantikfälle für diese Neunergruppe sind dokumentiert. Der begrenzte Referenzabschluss bedeutet weiterhin `release:false`.
