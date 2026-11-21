# Tooltip · gebundene Quellenreferenz

Provide a supplementary visual label for a correctly named target on hover or keyboard focus.

## Quellen und vollständige APIoberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3` und bewusst gewählte Base UI `1.9.0`. [Originaltypen, Code und Dokumentation](../../../../../sources/manifest.json); [exakte Wrapper-/Propinventur](../../../../../sources/react-api-inventory.json). `interface.json` führt jeden exportierten React-Wrapper mit seinem tatsächlichen Prop-Typ und den echten Root-Callbacks.

The source TooltipProvider wrapper defaults delay=0, while trigger/provider props can configure hover delay. disableHoverablePopup=false permits moving the pointer into the popup through the primitive safe-region logic. Disabled Root suppresses opening. Popup side=top, sideOffset=4, align=center, alignOffset=0. The package documentation calls tooltips visual-only and requires an appropriately named trigger; essential information uses inline text or an accessible Popover. This reference explicitly hides the redundant visual popup from assistive technology. Required help is persistent inline text; the trigger describedby relation points to that help, never solely to the visual popup.

## Tastatur, Fokus und Lebenszyklus

Keyboard focus opens without hover delay; blur, Escape or trigger press can close. Focus never moves into the tooltip and there is no Tab trap. The trigger must carry an accessible name closely matching the visual label. The pinned primitive intentionally supplies a visual-only hint, not an automatic ARIA tooltip/description relationship.

SCXML trennt akzeptierte Änderung, kontrollierte Props, Callback-Abbruch und — wo der primitive Vertrag es vorsieht — Öffnen/Schliessen gegenüber Animationsabschluss. Der Callback übergibt das ursprüngliche `eventDetails`-Objekt. Bei verzögertem Unmount bleibt die schliessende Instanz bestehen, bis die Quellenaktion sie freigibt. `_effect.*` benennt interne Fokus-/Caller-Effekte, keine erfundenen öffentlichen DOM-Ereignisse.

## Semantik und Instanzbesitz

`accessibility.html` zeigt ausdrücklich den **offenen** Zustand einer konkreten Referenzinstanz. Geschlossen ist die Triggerprojektion nicht expandiert; Popup/Panel ist nach den gebundenen keepMounted-/Presence-Regeln abwesend oder verborgen. Titel-, Beschreibungs- und Kontrollbezüge gehören dieser Instanz. Die HTML-/CSS-Projektion allein implementiert keine Base-UI-Interaktion. Das Prüfziel verwendet die echten gebundenen React-Wrapper.

Zugeordnete Komponenten: [button](../../../../../components/button/component.json)

## Native Gestaltung und begrenzte Prüfung

[Figma-Beobachtungen](../../../../../components/tooltip/figma/figma-observations.json), alle ursprünglichen nativen Stories und die DTCG-Masse unter `provenance://source/%2Fnative%2Ftooltip` bleiben erhalten. FIG ist editierbar und die Vorschau mit graphisolierten Renderer-Caches erzeugt; native Quelldaten wurden zum Beheben der Cacheartefakte nicht umgeformt.

Konkrete React-Browserfälle, SCXML-Gegenfälle, semantische Beziehungen und Quellen-/Coverage-Abgleiche werden unter `validation` am Bibliotheksroot geführt. Abgeschlossen als ausreichend beschriebene Quellenreferenz: 35 Browserfälle, 75 SCXML-Protokollfälle und 18 positive/negative Semantikfälle für diese Neunergruppe sind dokumentiert. Der begrenzte Referenzabschluss bedeutet weiterhin `release:false`.
