# Tabellen und Listen · Redaktion

Stand: 20.11.2026. Die ganze Release, der eigene Renderer sowie die bisherige Vertiefung wurden gelesen; Grundlage waren PAGE-BRIEF, der Redaktionsbericht und der eigene Auditabschnitt 38. Der allgemeine Content-Renderer liefert in der Vertiefung die vorhandenen Beschriftungen «Do» und «Don’t»; er wurde nicht geändert.

Vor Redaktion über MCP `get_documentation_page` gelesen: Inhalt und Zusammenfassung waren nach Bereinigung der CMS-IDs exakt gleich zur bisherigen Release. Frisches `expectedUpdatedAt`: `2026-11-20T14:38:03.043Z`.

## Sprachliche Änderungen

- «wenn du ein Projekt erkennst und seinen nächsten Schritt brauchst» erklärt jetzt die Aufgabe: ein einzelnes Projekt finden und sehen, was als Nächstes zu tun ist.
- «Kein Datenraster allein wegen vieler Einträge» wird zu «Viele Einträge allein sind kein Grund für eine Tabelle».
- «Teilwahl» und «gemischter Kopfzustand» werden durch die sichtbare Checkbox im Tabellenkopf und ihren Strich erklärt. Aktionen für mehrere ausgewählte Einträge werden konkret benannt.
- Die Grenzen der Beobachtungen unterscheiden weiterhin den fehlenden Nachweis für den Abschluss einer Mehrfachaktion, die teilweise Auswahl, die fachliche Umsortierung, serverseitige Ergebnisseiten und die Gesamtzahl. Die lokale Gestaltung wird klar von der ursprünglich beobachteten Oberfläche getrennt.
- Die bisherige Vertiefung mit Data-Table-Quelle, Rechnungsbeispiel und Do-/Don’t-Hinweisen war verständlich und bleibt erhalten. Sie wird weiterhin als Referenzhinweis bezeichnet.

## Erhaltung und Checks

Beispieldaten und Statuswerte, die vier sichtbaren Projekte als Auswahlumfang, ID-basierte Erhaltung der Auswahl, Sortierung bei gleichem Aufwand, Zeilenaktionen, lokale Vorschau und Rücksetzen beim Neuladen bleiben unverändert. Ebenso erhalten: Reflow, Tastaturzugang zum Scrollbereich, Abgrenzung sichtbare Einträge/alle Treffer, fehlende Persistenz, Quellen und begrenzte Nachweise. Keine neue Funktion oder Freigabe; kein Renderer-, HTML-, ARIA-, CSS- oder Logikeingriff.

Ausgeführt: `npm run typecheck` erfolgreich; `git diff --check` erfolgreich. Strukturvergleich gegen die vorherige Release: Block-/Knotenreihenfolge, Typen, Zeilenzahl, Links und Daten unverändert. Eingehende Links mit `tabellen-und-listen…#` in `scripts`, `src` und `docs` einschliesslich Snapshot gesucht: keine Treffer. Alle Überschriften bleiben unverändert.

## Browserprüfung nach Veröffentlichung

Root hat «Erfundene Beispieldaten» zu «Beispieldaten» und die Pagination-Beschreibung zu «Blättern zwischen Ergebnisseiten» geglättet. Beide Formulierungen sind veröffentlicht sichtbar.

In BrowserOS neo die ganze Seite gelesen: Tabelle, Listenvergleich, alle drei Regeln, Zustandsbeispiele, Reflow-/Mengentexte sowie die geöffneten Bereiche «Quellen und Prüfgrenzen», «Prüfgrenzen und ergänzender Vertrag» und «Bisherige Referenzhinweise». Vollseitige Screenshots bei tatsächlichen 1440 × 1000 und 390 × 844 CSS-Pixeln geprüft. Die neuen Texte, Links und geöffneten Vertiefungen brechen lesbar um; Listen und Zustandsbeispiele stehen mobil untereinander, die breite Tabelle bleibt in ihrem eigenen Scrollbereich. Kein konkreter sprachlicher Restbefund. Keine erneuten Sortier-, Auswahl-, ARIA- oder Quellenfunktionstests durchgeführt. Geräteemulation anschliessend aufgehoben und eigener QA-Tab geschlossen.

DONE nach Root-Veröffentlichung und Browserprüfung.
