# Tooltip: lesbare seitliche Positionen auf Mobilgeräten

Stand: 21. November 2026. Geprüfte Seite: `/systems/shadcn/components/tooltip` im lokalen Portal auf Port 3010.

## Änderung und Quellenbindung

Nur Tooltip-bezogene Ergänzungen in `src/docs/comparisons/navigation-layers.css` und eine Darstellungsnotiz im Tooltip-Block von `navigation-layers-data.ts`. `navigation-layers.tsx` bleibt unverändert. Vorhandene uncommittete Dateien wurden bewahrt.

Die Positionsgruppe erhält den benannten Inline-Container `tooltip-positions`. Bei höchstens 38rem Gruppenbreite stehen die zusätzlichen Ansichten Rechts und Links jeweils über die volle Gruppenbreite untereinander; Oben und Unten bleiben kompakt. Die Seitenbühnen benötigen dabei 104px Mindesthöhe. Seitliche Tooltip-Popups richten sich nach ihrer Inhaltsbreite, statt durch den benachbarten festen Auslöser auf null Textbreite zusammenzuschrumpfen. Alle vier Positionen, der dekorative Pfeil, die Beschriftung „Weitere Positionen“ und die dauerhafte Hilfe bleiben erhalten. Es wird weder Schrift skaliert noch Text abgeschnitten oder eine Position umgedeutet.

Die Entscheidung ist auch in `getNavigationLayersComparisons('tooltip', 'variants')` unter `technicalNotes` enthalten und damit über den bestehenden Datenweg verfügbar. Der reine Datenhelper und das Verhalten fremder Renderer (`null`) bleiben unverändert.

Bibliothek `shadcn`, Paketrevision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`, Komponente `shadcn:Tooltip`. Manifest, Abhängigkeitsgrenzen, portable Leseskill und Lesereferenz sowie component.json, interface.json, layout.css, behavior.scxml, accessibility.html, ux.json und stories.json wurden gezielt gelesen. Die Quelle verwendet Base UI; Standardseite oben und 4px Offset, benannter Auslöser, zusätzliche visuelle Hilfe und dauerhafte notwendige Hilfe bleiben die Quellenbasis. Responsive Vergleichsanordnung ist eine redaktionelle Darstellungsentscheidung, keine zusätzliche Contractregel oder SCXML-Zustandsfolge. Alle acht paketrelativen SourceRefs (sieben Tooltip-Dateien plus tokens.css) wurden gegen die tatsächlichen SHA-256-Hashes geprüft.

## Ausgeführte Prüfungen

BrowserOS neo, eigener Tab, Emulation mit deviceScaleFactor 1; tatsächliche Screenshots wurden visuell betrachtet. „Weitere Positionen 2“ wurde über das sichtbare Disclosure geöffnet.

| Viewport | Seitliche Bühnenbreite | Textspan Rechts/Links | Schrift | Positionsgruppe | Seitenbreite / scrollWidth |
|---|---:|---:|---:|---:|---:|
| 360×800 vorher | 133.41px | 0×288px | 12px | 921.54px hoch | – |
| 360×800 nachher | 292.41px | 99.54×18px | 12px | 818.77px hoch | 360 / 360px |
| 390×844 nachher | 322.41px | 99.54×18px | 12px | 818.77px hoch | 390 / 390px |
| 1440×1000 nachher | zweispaltige Zusatzmatrix 519+519px | 99.54×18px | 12px | 618.27px hoch | 1440 / 1440px |

Oben und Unten sind auf beiden Mobilbreiten lesbar (ebenfalls 99.54×18px Textspan). Rechts und Links erscheinen jeweils auf der ausdrücklich benannten Seite des vollständigen Speicherauslösers. Die dauerhafte Hilfe bleibt sichtbar. Geschlossen besitzt kein Popup, Geöffnet zeigt das obere Popup; beide Zustandsdarstellungen behalten den benannten Auslöser und die dauerhafte Erklärung.

Mobile Screenshots zeigen vollständige, einzeilige Tooltip-Texte ohne Buchstabenbruch und ohne seitlichen Seitenüberlauf. Nach Behebung eines temporären Calendar-Parsingfehlers wurde die Desktop-Seite neu geladen, das Disclosure erneut geöffnet und der Screenshot visuell geprüft: alle vier Positionen bleiben als zweispaltiger Vergleich lesbar. Geschlossen/Geöffnet wurden zusätzlich bei 360×800, 390×844 und 1440×1000 visuell betrachtet.

Nachbarstichprobe bei 360×800: Popover und Hover Card jeweils neu geöffnet und die sichtbare Positionsgruppe im Screenshot betrachtet. Popover zeigt Unten (220px Popupbreite) und Rechts (171.81px), Hover Card Unten/Rechts (je 210.73px); Inhalte und Auslöser bleiben lesbar. Beide Seiten haben scrollWidth=360px. Die neuen Selektoren greifen nur auf Tooltip/tooltip-sides; Popover/Hover Card behalten ihre Darstellung. Die Stichprobe ist keine Vollprüfung aller Nachbarzustände.

## Grenzen

Geprüft wird die statische Vergleichsdarstellung. Daraus folgt keine Freigabe eines interaktiven Tooltip-Primitives, seiner Hover-/Fokus-/Escape-Abläufe oder eine allgemeine Accessibility-Zertifizierung. Kein Build in diesem Worker; Integration und zentraler Build liegen beim koordinierenden Agenten. Kein CMS-Schreibzugriff, Snapshot- oder Contractexport, Pin, Commit, Push oder Veröffentlichung.
