# Drawer · gebundene Quellenreferenz

Present an edge task surface with optional source-supported swipe and snap-point behavior.

## Quellen und vollständige APIoberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3` und bewusst gewählte Base UI `1.9.0`. [Originaltypen, Code und Dokumentation](../../sources/manifest.json); [exakte Wrapper-/Propinventur](../../sources/react-api-inventory.json). `interface.json` führt jeden exportierten React-Wrapper mit seinem tatsächlichen Prop-Typ und den echten Root-Callbacks.

The wrapper defaults modal=true, swipeDirection=down and showSwipeHandle=false. Snap points are viewport fractions, pixels or px/rem strings as declared by the primitive. A snap-point change does not imply dismissal. Only a source-reported eligible swipe requests open=false; callback cancellation and controlled props still govern acceptance.

## Tastatur, Fokus und Lebenszyklus

The default modal drawer contains focus, supports Escape/Close and restores the trigger focus. Pointer swipes use the configured direction and primitive gesture logic; keyboard access remains available through explicit controls.

SCXML trennt akzeptierte Änderung, kontrollierte Props, Callback-Abbruch und — wo der primitive Vertrag es vorsieht — Öffnen/Schliessen gegenüber Animationsabschluss. Der Callback übergibt das ursprüngliche `eventDetails`-Objekt. Bei verzögertem Unmount bleibt die schliessende Instanz bestehen, bis die Quellenaktion sie freigibt. `_effect.*` benennt interne Fokus-/Caller-Effekte, keine erfundenen öffentlichen DOM-Ereignisse.

## Semantik und Instanzbesitz

`accessibility.html` zeigt ausdrücklich den **offenen** Zustand einer konkreten Referenzinstanz. Geschlossen ist die Triggerprojektion nicht expandiert; Popup/Panel ist nach den gebundenen keepMounted-/Presence-Regeln abwesend oder verborgen. Titel-, Beschreibungs- und Kontrollbezüge gehören dieser Instanz. Die HTML-/CSS-Projektion allein implementiert keine Base-UI-Interaktion. Das Prüfziel verwendet die echten gebundenen React-Wrapper.

Zugeordnete Komponenten: keine zusätzliche registrierte primitive Kindkomponente.

## Native Gestaltung und begrenzte Prüfung

[Figma-Beobachtungen](figma/figma-observations.json), alle ursprünglichen nativen Stories und die DTCG-Masse unter `provenance://source/%2Fnative%2Fdrawer` bleiben erhalten. FIG ist editierbar und die Vorschau mit graphisolierten Renderer-Caches erzeugt; native Quelldaten wurden zum Beheben der Cacheartefakte nicht umgeformt.

Konkrete React-Browserfälle, SCXML-Gegenfälle, semantische Beziehungen und Quellen-/Coverage-Abgleiche werden unter `validation` am Bibliotheksroot geführt. Abgeschlossen als ausreichend beschriebene Quellenreferenz: 35 Browserfälle, 75 SCXML-Protokollfälle und 18 positive/negative Semantikfälle für diese Neunergruppe sind dokumentiert. Der begrenzte Referenzabschluss bedeutet weiterhin `release:false`.
