# Card Header · Überarbeitung

## Befund und Änderung

Öffentlichen Stand am 20. November 2026 über BrowserOS neo im eigenen Tab gelesen und bei 1440×1000 angesehen: zwei weitgehend gleiche Beispiele für breite und schmale Darstellung; die Annotationen «Titel» und «Beschreibung» stehen im eigentlichen Kartentext. Varianten mit und ohne Aktion fehlen. CMS-Quelltext enthält einen fachfremden Hinweis auf Formularlabels.

Eine frühe, tatsächlich responsive Vorschau ersetzt die doppelte Darstellung. Zwei beschriftete, per Tastatur bedienbare Variantenschalter zeigen denselben Card Header mit oder ohne passende Aktion. Der lange Titel bricht natürlich um; unter 34 rem Beispielbreite folgt die Textaktion unter der Textgruppe. Die Aktion springt zur sichtbaren Projektliste derselben Card. Ohne Aktion bleibt kein leerer Platz reserviert. Legende, genau drei Gestaltungsregeln und aufklappbare Quellen/Prüfgrenzen sind getrennt; sämtliche fachlichen Texte stammen aus dem Release-CMS-Inhalt. Der Card Header wird ausdrücklich als inneres Inhaltsmuster eingeordnet.

Grundlage: unveränderter veröffentlichter CMS-Stand, read-only via MCP-SDK (`updatedAt: 2026-11-20T13:30:59.744Z`), sowie Abschnitt 3 der unveränderten Studie `docs/handbook/postfinance-analysis/content-layouts.md`. Die beobachteten kleinen Symbolaktionen werden als mögliche schmale Anordnung beschrieben; das eigene Textaktionsbeispiel beansprucht dafür keinen Originalbeleg.

## Tatsächlich ausgeführte Checks

- Öffentliche Ausgangsseite im Browser gelesen und Desktop-Screenshot angesehen.
- Aktuellen veröffentlichten Inhalt read-only über `get_documentation_page` gelesen.
- `npm run typecheck`: erfolgreich.
- Keine CMS-Schreibzugriffe; Registry und Veröffentlichung liegen bei Root.
- Nach Root-Veröffentlichung: neue Seite in BrowserOS neo bei echten CDP-Viewports 1440×1000 und 390×844 geprüft, Screenshots beider Varianten in beiden Breiten angesehen. Breit steht die Aktion rechts, schmal unter Beschreibung; langer Titel bricht vollständig um. Ohne Aktion entfällt deren Platz, Karteninhalt bleibt sichtbar. Keine abgeschnittenen Inhalte oder Überlagerungen im geprüften Beispiel.
- Variantenschalter über Fokus + Enter bedient; «Ohne Aktion» entfernt den Link, «Mit Aktion» stellt ihn wieder her. Sichtbarer Fokusring in den Screenshots.
- «Zur Projektliste» aktiviert: Fragmentadresse der Inhaltsregion derselben Card erreicht.
- «Quellen und Prüfgrenzen» per Fokus + Enter geöffnet; Snapshot bestätigt expanded, Quellen und Grenzen im Seiteninhalt gelesen.
- Nach Prüfung Viewport-Emulation zurückgesetzt und eigenen Prüftab geschlossen. Keine Nachkorrektur erforderlich. Dies sind begrenzte Sicht- und Bedienprüfungen, kein allgemeiner Accessibility-Nachweis.
