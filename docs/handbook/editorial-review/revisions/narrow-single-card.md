# Redaktion: Narrow Single Card

## Gelesener Umfang und Ausgangsstand

- `PAGE-BRIEF.md`, Redaktionsbericht und eigener Auditabschnitt 21 vollständig gelesen; zusätzlich den bisherigen seitenbezogenen Präsentationsbericht.
- Ganze aktuelle Release und ganzen Renderer gelesen: beide Formulare mit allen Beschriftungen und Meldungen, drei Entwurfsregeln, Einsatzhinweise und aufklappbare Quellen/Prüfgrenzen.
- Veröffentlichte Seite frisch read-only über MCP `get_documentation_page` mit `system: shadcn` und `section: narrow-single-card` abgerufen. Inhalt (ohne CMS-IDs/null-Felder) und Zusammenfassung stimmen mit der bisherigen Release überein. `updatedAt: 2026-11-20T14:04:47.003Z` als `expectedUpdatedAt` übernommen.

## Redaktion

- «Eine Aufgabe mit ruhigem Aussenraum» → «Eine kurze Aufgabe in einer zentrierten Card». Der Einstieg erklärt die begrenzte Breite und die mittige Anordnung.
- «Der freie Raum lenkt den Blick» → konkrete Erklärung: kurze Textzeilen durch begrenzte Cardbreite, freier Platz links und rechts.
- «Verwende einen kurzen, eindeutigen Namen» → «Wähle einen kurzen Namen, an dem dein Team das Projekt erkennt.» Die Hilfe beschreibt die Wiedererkennbarkeit und legt keine technische Eindeutigkeitsprüfung nahe.
- Die erste Vorschau benennt die vorhandenen Aktionen als «Zurücksetzen» und «Namen übernehmen». Die Implementierung bleibt unverändert; Meldungen und Vorschauhinweis erklären weiterhin die lokale Wirkung.
- Bildunterschrift, Regeln, Einsatzhinweise und Quellen in vollständigen, natürlichen Sätzen redigiert. Der Quellenabsatz beschreibt weiterhin ein eigens entworfenes Beispiel ohne beobachtete Implementierung.

## Fachliche Erhaltung und Checks

- Layoutname Narrow Single Card und Vergleich mit Wide Single Card erhalten. Beispielwerte, Quellen, Pfade sowie Angaben `width: 100%`, `max-width: 28rem`, 28 rem, 22 rem, 26 rem und 44 px unverändert.
- Erhalten: Höhe wächst mit Inhalt; Feld füllt innere Breite; Umbruch langer Texte; Buttons wechseln bei Platzmangel die Zeile und unter 26 rem in volle Breite untereinander; Eingabetext scrollt im Feld. Keine zusätzliche Aufgabe, Regel oder Freigabe.
- Kein Renderer- oder CSS-Eingriff. Lokales Übernehmen/Zurücksetzen, fehlende Projektspeicherung und Grenzen der Barrierefreiheits-/Textgrössen-/Übersetzungsprüfung erhalten.
- Block- und Knotenstruktur einschliesslich Reihenfolge und Textzeilenanzahl sowie beide Beispielwerte und Vorkommenszahlen der Zahlen-/CSS-Angaben gegenüber der bisherigen Release aus HEAD programmatisch abgeglichen: erfolgreich.
- Nach eingehenden Links mit `narrow-single-card#` und dem bisherigen Überschriftsfragment in `src`, `scripts` und `docs` gesucht: keine Treffer. Der erste Anker ändert sich von `abschnitt-eine-aufgabe-mit-ruhigem-aussenraum` zu `abschnitt-eine-kurze-aufgabe-in-einer-zentrierten-card`.
- `npm run typecheck`: erfolgreich.
- `git diff --check` für die eigenen Dateien: erfolgreich.

## Browser-QA nach Root-Veröffentlichung

- BrowserOS-neo-Anleitung gelesen und die veröffentlichte Seite im eigenen Tab vollständig als Anleitung gelesen: Einstieg, beide Beispiele, Bildunterschrift, Regeln, Einsatzhinweise und geöffnete Quellen/Prüfgrenzen. Die neuen Texte sind veröffentlicht. Kein konkreter sprachlicher Restbefund.
- Bei 1440 × 1000 CSS-Pixeln Screenshot mit beiden Cardvarianten und geöffneten Quellen angesehen. Zentrierte Card, längere Texte der zweiten Variante und deren Beschriftungen bleiben lesbar und innerhalb der Beispielbereiche.
- Bei bestätigten 390 × 844 CSS-Pixeln einzelne Screenshots der beiden Cardvarianten und der geöffneten Quellen angesehen. Überschrift, Hilfen und lange Feldbeschriftung umbrechen; beide Buttonpaare stehen untereinander. Kein sichtbares horizontales Überlaufen. Für diese Breite Einzelansichten verwendet, da der BrowserOS-Ganzseiten-Screenshot nach dem Emulationswechsel zunächst die vorherige Breite verwendete.
- Neue erste Buttontexte den vorhandenen Aktionen zugeordnet: «Namen übernehmen» zeigt «Name in der Vorschau übernommen.», «Zurücksetzen» per Tastatur aktiviert zeigt «Eingabe auf den Ausgangswert zurückgesetzt.». Die vorhandenen Ausgangswerte beibehalten; keine vollständige Funktionsprüfung wiederholt.
- Keine neue CSS-Grössenprüfung, Quellenvalidierung oder allgemeine Barrierefreiheitsfreigabe. Browser-Tab nach Abschluss geschlossen.

DONE: redaktionelle Browser-QA abgeschlossen.
