# Mit dem Handbuch gestalten

Der öffentliche Stand wurde am 20.11.2026 zuerst in BrowserOS neo gelesen. Befund: Der Einstieg bot Downloads, aber keinen visuell zusammenhängenden Projektweg; umfangreiche Pilotverträge machten die praktische Reihenfolge schwer erkennbar.

Die neue Darstellung beginnt mit einem ausdrücklich statischen Schema für Finden → Detail → Bearbeiten und dem Erstellen-Abzweig. Direkt danach folgen die bestehenden acht SVG-/FIG-Downloads, dann die drei passenden Fachseiten und drei konkrete Anwendungsschritte. Quellen, Geltung sowie unveränderte Daten- und Visualverträge bleiben aufklappbar erhalten. Die Vorlagen werden nicht als Bilddateien eingebettet; es gibt kein neues Medienschema und keine neue Anwendung. Sämtliche neuen fachlichen Beschriftungen und Hinweise liegen im CMS-Release. Der Renderer liest sie aus `content` und bindet die bestehende Ressourcenkomponente genau einmal ein.

CSS: drei gleich breite Ablaufspalten mit flexiblen Höhen, zwei Downloadspalten; bei höchstens 640 px verfügbarer Inhaltsbreite einspaltig. Lange Texte umbrechen. Keine festen Screenshotbilder oder funktionslosen Formularfelder.

Tatsächlich ausgeführt:
- Read-only Payload-Lesen des veröffentlichten CMS-Stands mit `push:false` und schreibgeschützter DB-Verbindung; `updatedAt: 2026-11-18T00:38:59.141Z`.
- `npm run typecheck`: erfolgreich.
- `scripts/apply-page-rework.ts gestaltungs-pilot` ohne Publish-Flag: Vorschau erfolgreich, 11 Blöcke, keine CMS-Veröffentlichung.
- Strukturvergleich aller acht übernommenen Originalblöcke: vollständig identisch ausser neu vergebenem `blockName`. SHA-256 der ursprünglichen Content-JSON: `1e5845c30b322c87e242a958f19a87ca60e9176f6ad2d92d706086838703e9f7`.

Nach Root-Veröffentlichung zusätzlich am 20.11.2026 ausgeführt:
- BrowserOS neo bei 1440 × 1000 und 390 × 844, echte Viewportemulation mit Screenshots: Ablauf breit dreispaltig, schmal gestapelt; Downloads breit zweispaltig, schmal einspaltig. Titel, Inhalte und Rückweghinweise lesbar; keine sichtbaren Abschneidungen in den geprüften Bereichen.
- Alle acht Ressourcen-URLs aus der Browser-Leseansicht gezählt: jede genau einmal.
- Drei Fachlinks tatsächlich angeklickt: Ziele `suchen-filtern`, `detailseite` und `formulare-validierung` mit geladenem jeweiligem Seiteninhalt bestätigt.
- Datenmodell, beide visuellen Referenzen und Herkunft/Nachweise über die sichtbaren Disclosure-Elemente geöffnet; Browser-Snapshot bestätigt den erweiterten Zustand. Präzise Angaben (u. a. 1–80 Unicode-Graphemcluster, lokale Entscheidungen vom 18.11.2026) vorhanden.
- Gesamte Browser-Leseansicht auf Herkunftsfirmennennung und öffentliche lokale/Quellpfade geprüft: keine Treffer für die geprüften Muster. Ressourcenstand und Prüfgrenzen weiterhin vorhanden.

Kein eigener Darstellungsfehler festgestellt; keine weitere Renderer-/CMS-Änderung erforderlich. Downloads und Manifest wurden nicht verändert; diese Browserprüfung führt keinen neuen Datei-Hashnachweis oder assistiven Gesamtnachweis. Kein Commit oder Push.
