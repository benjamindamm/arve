# Farben gemeinsam klären · erster Durchstich

Stand: 26. November 2026. Umsetzung des Vorschlags aus [der Untersuchung](research-agentic-ui-2026-11-26.md).

## Einstieg

Im laufenden Arve: `/handbuch/interaktion-mit-agenten`. Die Seite gehört zu Arve selbst, nicht zu einem Projekt-Seitenbaum oder einer Datenbank. Die gezeigten Rot-/Blau-Varianten sind ausdrücklich erfundene Illustrationen, keine Erweiterung einer Projektpalette.

- Zwei Varianten derselben Formularsituation vergleichen.
- Arbeitsrichtung wählen, eine Änderung beschreiben oder bewusst offenlassen. Keine Vorauswahl; für „Anders lösen“ eine Beschreibung erforderlich.
- Im Portal Ergebnis kopieren. In einem unterstützenden MCP-App-Host explizit ins Gespräch übernehmen.
- Der Agent erhält Zielsystem, Geltungsbereich, Frage, Grundlage, unverwechselbaren Vergleichsstand und Antwort. Daraus entsteht keine CMS-Speicherung oder Veröffentlichung.

## MCP

Der vorhandene Endpunkt `/mcp` bietet zusätzlich:

- `list_authoring_skills`: paginierte Entdeckung mit Inventar-Snapshot und exakten Dateiabrufen.
- `get_authoring_skill`: Originaldateien unverändert, begrenzte Unicode-Abschnitte, SHA256 und Fortsetzungen. Nur entdeckte Dateien; keine beliebigen Pfade.
- `compare_color_roles`: ausdrücklich benanntes Zielsystem, Scope, Frage, Grundlage sowie zwei bis drei Varianten mit ID, Titel, Handlungsfarbe, Fehlerfarbe und Begründung. Erwartet vollständig sechsstellige Hexwerte. Liefert vollständige Textoptionen und strukturierte Vergleichsdaten; wählt keine Variante aus.

Das Tool verweist auf `ui://arve/color-review-v1.html`. Unterstützende Hosts können die selbständige HTML-Ressource anzeigen. Die Karte verwendet die offizielle MCP-Apps-Brücke und `ui/message`. Ein Host ohne Nachrichtenfähigkeit erhält eine Kopiermöglichkeit; ein Text-Client dieselben fachlichen Antwortoptionen. Ein bestätigtes Host-Ergebnis bedeutet angenommene Nachricht, nicht garantiert bereits ausgeführter Agentenschritt.

Das Ergebnis ist eine lokale Arbeitsrichtung oder offene Frage. Der Agent soll sie mit den gelesenen Quellen abgleichen und die nötige weitere Klärung nennen. Der Karten-Hash identifiziert den Inhalt, bestätigt weder fachliche Richtigkeit noch Aktualität externer Quellen. Quellen werden im Pilot als Text mitgegeben, nicht automatisch gegen das CMS verifiziert. Der konkrete Pilot vergleicht Handlungen und Fehlermeldungen, keine beliebigen Chart-Paletten.

## Gemeinsame Darstellung und Build

`src/agent-ui/color-review.tsx` wird im Portal und in der MCP-App verwendet. `scripts/build-mcp-apps.mjs` bündelt React, Darstellung und Host-Brücke ohne externe Assets nach `public/mcp-apps/color-review.html`. Die generierte Datei wird nicht eingecheckt. `predev`, `prebuild` und `prebuild:static` erzeugen sie; nach Änderungen während eines laufenden Entwicklungsservers den Build erneut ausführen. Produktions-Tracing enthält App und Autoren-Dateien.

MCP Apps 1.7.5 passt zur vorhandenen MCP-SDK-1-Version. Ein Upgrade der gesamten Serverarchitektur auf SDK 2 gehört nicht zu diesem Pilot. Die fachliche Darstellung ist von diesem Adapter getrennt.

GitHub Pages rendert die Portal-Demo statisch. Dort ist keine Chat-Verbindung vorhanden. Eine MCP-Integration braucht weiterhin die laufende Arve-Anwendung.

## Autorenfragen

Die [Pattern-Referenz](../../.agents/skills/arve-pattern-handbook/references/agent-interaction.md) behandelt Auswahl, Rückfragen, Vorschauen, Bestätigung und Wiederaufnahme plattformneutral. Der Farb-Autoren-Skill bindet diese Fragen und den begrenzten Vergleich ein. Noch keine neuen Showcase-Seiten in einem Projekt, kein eigener Chat und keine persistierten Entscheidungssitzungen.

## Prüfung und Grenzen

Ausgeführt:

- Typprüfung, bestehende MCP-Lese-/Suchtests und neue `check:agent-ui`-Tests.
- MCP mit echtem SDK-Client und InMemoryTransport: Tool- und Ressourcenentdeckung, Textalternative, HTML-Ressource ohne externe Skripte, Skill-Referenzabruf.
- Vollständigen Farb-Skill aus Abschnitten rekonstruiert und UTF-8-Hash geprüft. Falsche Hashes, ungebundene Fortsetzungen, beliebige Pfade, doppelte Varianten-IDs und CSS statt Hexfarben werden abgewiesen.
- Portal im Browser: Variantenvergleich, Änderung mit Pflichtbeschreibung, Kopieren. Desktop zwei Spalten; bei 390 px eine Spalte. Schmale Darstellung zusätzlich bei 320 px geprüft.
- Lokaler Protokoll-Testhost bezieht die App-Ressource und Vergleiche vom echten HTTP-MCP-Endpunkt. Offizielle AppBridge und isolierter iframe: Verbindung, Antwort „Noch offen“ samt Anmerkung im empfangenen Gespräch, Sperre nach Übergabe, ersetzte Karte gesperrt mit bewusstem Wechsel zum aktuellen Vergleich.
- Ablehnung durch den Testhost wird als Ablehnung angezeigt; Eingabe bleibt erhalten. Ausbleibende Antwort nach Zeitlimit wird als unbestätigte Übergabe angezeigt, keine automatische Wiederholung.
- Statische Ausgabe erzeugt und auf vollständige Original-Skilltexte, interne Links und Assets geprüft.

Reproduzierbar: Arve auf Port 3010 starten, dann `npm run preview:agent-ui`. Der lokale Testhost liegt auf `http://127.0.0.1:3012`; er ist ausdrücklich kein produktiver Agenten-Chat. Bedienelemente erlauben Ersetzen, Ablehnen und ausbleibende Antwort.

Nicht nachgewiesen: reale Integration in einem bestimmten kommerziellen Chat-Client, Reaktion eines echten Modells nach Übergabe, Screenreader-Abnahme oder Nutzen im Team. Nächste Gegenprobe: ein tatsächlich gewählter MCP-Apps-fähiger Client und eine zweite Person, die mit eigenen Quellen eine Farbfrage klärt. Beobachten, ob sie Wirkung und offenen Stand richtig versteht und ob der Agent genau diese Antwort verwendet. Kein vorweggenommener Effizienz- oder ROI-Nachweis.

Primärquellen: [MCP Apps](https://modelcontextprotocol.io/extensions/apps/overview), [offizielle Anleitung](https://apps.extensions.modelcontextprotocol.io/api/documents/Quickstart.html). API-Verhalten zusätzlich gegen die installierten SDK-Typen 1.7.5 geprüft.
