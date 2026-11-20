# Gezielte Nachprüfung der veröffentlichten Korrekturen

20.11.2026, Browserabruf nach der vom Koordinator gemeldeten Veröffentlichung 09:04:53. Ausschliesslich die vier unten genannten öffentlichen Seiten wurden erneut gelesen. Der Erstpass und seine Befunde bleiben historisch unverändert.

## Ergebnis nach Befund

| Erstbefund | Jetzt öffentlich beobachtet | Bewertung dieser Nachprüfung |
|---|---|---|
| F-01 unknown gegen Dirty | Formular nennt ausdrücklich Vorrang des unbekannten Speicherausgangs. Kein Verwerfen, kein erneutes Speichern. Nachfrage «Speicherstand ungeklärt…» mit Auf Seite bleiben / Seite verlassen; Initialfokus Bleiben, Escape bleibt. Bei Rückkehr Bearbeiten/Senden bis Statusklärung gesperrt. | Die priorisierte Kollisionsfrage ist **redaktionell behoben**. Der unbekannte Zustand bleibt ehrlich als Integrationsvoraussetzung gekennzeichnet. Kein Nachweis realer Statusklärung oder dauerhaften Vorgangserhalts. |
| F-02 Fokus und Browser-Zurück | Detail und Formular nennen bei neuer Detail-/Formularseite Zielüberschrift; sauberes Abbrechen/Verwerfen zum Detail ebenfalls Titel; Erstellabbruch zur Ergebnisüberschrift. Spezieller Detail→Liste-Rückweg bleibt ID-basiert. Interner Browser-Zurück innerhalb der Projektseiten unterliegt Dirty- bzw. laufend/unknown-Verlassensschutz. Reload, Schliessen und externe Navigation sind ausdrücklich ausgenommen. | Die geprüften offenen Übergänge sind **redaktionell entschieden**. Die gewählte Titelregel ist ein zulässiger anderer Entscheid als der Erstpassvorschlag Bearbeiten-Link. Kein Fokus-/History-Laufzeittest. |
| F-05 Erstellen bei vorhandener Liste | Suche sagt: geladene Projektübersicht bietet immer Projekt erstellen, auch bei Ergebnissen und Nulltreffern; leeres Formular übernimmt q/status. | Fehlender Einstieg ist **redaktionell ergänzt**. Position und Gewichtung bleiben Gestaltungsraum; kein vollständiger eigenständiger Erstellweg getestet. |
| F-03 Ressourcen auffinden | Pilotseite beginnt jetzt mit Vorlagen verwenden und acht direkten SVG-/FIG-Links für Hauptfolge/Zustände, jeweils breit/schmal. Stand 0.1.0 und Grenzen stehen dabei. | Öffentliche Auffindbarkeit wesentlich verbessert. Kein Download-/Hashvergleich, Import-, Schrift- oder Wiederverwendungstest dieser Nachprüfung. Ressourcenagent bearbeitet den endgültigen Stand separat; keine abgeschlossene Assetabnahme abgeleitet. |
| F-04 Input-Duplikatbeispiel | Inputseite nicht erneut gelesen. | **Nicht nachgeprüft**, keine Erledigung behauptet. |
| I-01 Statusklärung | Formular bezeichnet benötigte Statusklärung weiter als noch bereitzustellen; Bearbeitung/Wiederholung bleiben bis Bestätigung gesperrt. | Bewusste Implementierungsgrenze bleibt. Sie verhindert nicht die statische Darstellung der Unklarheit. |

## Konkrete erneute Ableitung

- P-101 «Alpen» wird zu «Tal» geändert. Nach Speichern und verlorener Antwort ist der Zustand unbekannt. Der Versuch, per internem Rückweg oder Browser-Zurück zu gehen, zeigt jetzt eindeutig die Verlassenswarnung; kein Dialog behauptet sichere ungespeicherte Angaben. Bleiben/Escape hält den Vorgangsbezug; Verlassen ist keine Rücknahme.
- Reguläres Öffnen des Formulars fokussiert dessen Titel. Vor dem Senden wird ein Dirty-Abbruch bestätigt; danach liegt der Fokus auf dem Detailtitel. Bei anschliessender Rückkehr zur Liste gilt weiterhin ID-Link beziehungsweise Ergebnisüberschrift bei entfallenem Treffer.
- Bei q=Tal im ursprünglichen Bestand bleibt die Nulltreffermeldung bestehen, gleichzeitig ist Projekt erstellen erreichbar. Das leere Formular übernimmt die Kriterien. Damit ist der zuvor fehlende Erstellen-Einstieg ableitbar.

Dies sind erneut ausgeführte **Text-/Entscheidungsprüfungen**, keine Bedienung einer Projektanwendung. Der genaue Zielort nach Seite verlassen bei unknown ist weiterhin nicht als eigene Zielmatrix benannt; die Unklarheit darf im Ziel nicht verloren gehen. Für die spätere Umsetzung muss diese Ziel-/Vorgangserhaltung konkretisiert werden. Der zentrale F-01-Vorrangkonflikt ist davon getrennt gelöst.

## Beobachteter Ressourcenstand

Die öffentliche Seite bietet `ablauf-breit-svg`, `ablauf-breit-fig`, `zustaende-breit-svg`, `zustaende-breit-fig` und dieselben vier schmalen Varianten. Sichtbare Grenzen: statische Gestaltung; Inter im Zielwerkzeug erforderlich; SVG ohne externe Schrift-/Assetladung; FIG als flache editierbare Frames/Texte, keine Varianten-/Auto-Layout-Bibliothek; importierte Komponenten draft; menschliche Teamprobe und assistive Prüfung offen. Diese Angaben wurden gelesen, die behaupteten Dateifähigkeiten hier nicht praktisch erprobt.

## Quellen und Nachweisgrenzen

BrowserOS neo, `page.read('article')`, vollständige gespeicherte Ausgabe für relevante Abschnitte gelesen. Hashes bezeichnen die lokal gespeicherten Browserextrakte inklusive Abrufmarkierungen, keine CMS-/Assethashes.

- Öffentliche Seite: http://127.0.0.1:3010/systems/shadcn/suchen-filtern
  - Browserextrakt: `/Users/kcnpxcp/.browseros/tool-output/read-1795161934052-a3606e58-aa82-429f-91ff-b5e4ba357ee2.md`
  - SHA-256: `4d8b2b90481544dbb5f1c084b94d9a21a021770590cd86afdc5b006a5d366908`
- Öffentliche Seite: http://127.0.0.1:3010/systems/shadcn/detailseite
  - Browserextrakt: `/Users/kcnpxcp/.browseros/tool-output/read-1795161934844-6c6b45af-12c2-411e-a869-240c4203a777.md`
  - SHA-256: `80bf616b6127295272581c5b89f66cca9245d814ad2350c1847c31606eb8a78e`
- Öffentliche Seite: http://127.0.0.1:3010/systems/shadcn/formulare-validierung
  - Browserextrakt: `/Users/kcnpxcp/.browseros/tool-output/read-1795161935565-15a92b6c-6271-45f2-92be-8724538b88c4.md`
  - SHA-256: `ca039f2ea0c4cf05c68bc1869d97f87f88344c6847d1c049ecdc709a85049148`
- Öffentliche Seite: http://127.0.0.1:3010/systems/shadcn/gestaltungs-pilot
  - Browserextrakt: `/Users/kcnpxcp/.browseros/tool-output/read-1795161936288-9dacc5cd-d6e4-42cd-b4c1-cd51ea41ba33.md`
  - SHA-256: `478f3e1d175457164ac59d3ab6bf43c4a9f54b982a723ab463e6fb21e4ca1238`

Der Erstpass-Hashcheck wurde nach dem Schreiben dieses Addendums erneut ausgeführt: task.md, design.md und findings.md stimmen weiterhin mit evidence/first-pass-sha256.json überein. Keine CMS-/App-Änderung, keine menschliche Teamfreigabe, keine Assistiv- oder Produktfreigabe.
