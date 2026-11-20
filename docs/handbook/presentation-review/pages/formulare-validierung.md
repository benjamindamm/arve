# Formulare und Validierung

Der veröffentlichte Stand begann mit einer achtteiligen Ablaufstudie und langen Vertragstexten. Der neue Einstieg zeigt eine Zustandsvorschau mit vier Phasen: Eingabe, Prüfung, Speichern, Bestätigung. Ein beschrifteter Zustandsumschalter zeigt Eingabe, Feldfehler, ungespeicherte Änderungen, laufende Übermittlung, bestätigte Annahme, ausdrückliche Ablehnung und unbekannten Ausgang. Feld, Hilfe, Meldung und abgebildete Aktionen bleiben zusammen sichtbar. Drei Regeln folgen vor der Vertiefung; Form Layout, create, edit und detail sind verlinkt.

Alle fachlichen Texte liegen im CMS-Release. Die neun ursprünglichen CMS-Blöcke bleiben vollständig und unverändert als aufklappbarer Projektvertrag erhalten, einschliesslich der Präzisierung vom 20.11.2026: unknown hat Vorrang vor Dirty/Verwerfen und erneutem Senden; Statusklärung ist noch nicht verfügbar. Die Vorschau ist ausdrücklich statisch: Nur die Zustandsauswahl ist bedienbar, das Feld ist schreibgeschützt, Formularaktionen sind Textdarstellungen. Keine Anfrage, Speicherung, Bestätigung einer tatsächlichen Aktion oder Funktionsabnahme wird vorgetäuscht.

Das echte Seiten-CSS zeigt die vier Phasen breit in einer Reihe und bei weniger als 640 px verfügbarer Beispielbreite in zwei Spalten. Die Formularaktionen stehen unter dieser Grenze in derselben Reihenfolge untereinander; das Formular ist höchstens 640 px breit. Texte dürfen umbrechen, keine fixierte Aktionsleiste.

Tatsächlich ausgeführt:
- Aktuellen öffentlichen Stand am 20.11.2026 zuerst in einem eigenen BrowserOS-neo-Tab gelesen.
- Ausschliesslich den veröffentlichten CMS-Stand `2026-11-20T08:04:53.615Z` mit `push:false` und schreibgeschützter Datenbankverbindung gelesen.
- `npm run typecheck` erfolgreich.
- Maschinenvergleich: alle neun erhaltenen Originalblöcke sind nach Entfernen technischer IDs inhaltlich identisch zum gelesenen veröffentlichten Stand. Redaktioneller Zeitstempel stimmt überein. Release enthält keine unerwünschte Herkunftsbezeichnung.

Weiter offen: umfassende Tastatur- und Screenreaderprüfung der Seite sowie Funktionsprüfung der späteren Anwendung. Kein Nachweis für tatsächliche Speicherung, Statusklärung, Validierung oder sichere Wiederholung; die im ursprünglichen Vertrag offenen Prüfaufträge bleiben offen. Keine CMS-Schreibzugriffe, gemeinsame Route, Registry oder globale Styles geändert.

## Browser-QA nach Veröffentlichung · 20.11.2026

- BrowserOS neo, echte Ansichten per CDP: 1440 × 1000 und 390 × 844. Screenshots tatsächlich angesehen. Breite Ansicht mit vier Phasen nebeneinander, schmale Ansicht mit zwei Spalten; Feld, Hilfe und lange unknown-Meldung bleiben innerhalb der Fläche. Die zwei Aktionen des unknown-Bildes stehen schmal vollständig untereinander. Keine abgeschnittenen Textzeilen in diesen geprüften Bereichen.
- Alle sieben Optionen des Zustandsumschalters geprüft: Eingabe, Feldfehler, Dirty, laufend, bestätigt, ausdrücklich abgelehnt und unknown. Meldungen und abgebildete Aktionen wechseln passend. Bestätigungsbild erklärt ausdrücklich, dass die Vorschau kein Projekt erstellt hat. Unknown zeigt weder Verwerfen noch erneutes Senden und benennt die offene Statusklärung.
- Kleine Renderer-Korrektur aus der Prüfung: abgelehnt und unknown markieren nun die Phase Speichern, da beide nach Übermittlung auftreten; aktive Phase erhält zusätzlich aria-current=step. Keine CMS-Änderung nötig. Danach Typecheck erneut erfolgreich.
- Beide Details-Bereiche gezielt fokussiert und mit Enter geöffnet; expanded-Zustand im Accessibility-Snapshot bestätigt. Der vollständige Vertrag mit achtteiliger Studie und allen acht folgenden Vertragstexten ist erreichbar. Die erhaltene Präzisierung vom 20.11.2026 und ihr unknown-Vorrang wurden im gerenderten Text nochmals gefunden.
- Alle vier neuen Querverweisziele im eigenen Prüf-Tab aufgerufen: Form Layout, create, edit und detail laden jeweils mit erwarteter Seitenüberschrift.

Begrenzter Nachweis: visuelle Browserprüfung und gezielte Bedienung der Dokumentationsvorschau, keine allgemeine Barrierefreiheitsfreigabe, keine Formular-/Server-Funktionsabnahme.
