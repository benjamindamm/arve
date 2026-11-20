# Erstentwurf aus veröffentlichtem Handbuch

Vor internem Abgleich erstellt. Quelle je Zeile: öffentliche Seiten unter `/systems/shadcn/`; eingefrorene Volltexte in `evidence/`. «Ableitung» bezeichnet meine konkrete Anwendung, «offen» eine nicht aufgelöste Entscheidung.

## Tatsächlich abgeleitete Seitenfolge

### A · Projekte, breit

```text
Projekte                                          [Seitentitel 32/40]

Projekte suchen                       Status
[ALP                           ]      [Aktiv              ]
Suche und Filter wirken sofort.
[Suche zurücksetzen]

1 Projekt                                         [Ergebnisüberschrift]
Projekt-ID       Projektname          Status
P-101            Alpen →              Aktiv
```

ID, Name und Status bleiben dieselbe Identität. «Alpen» ist ein Link; keine komplette klickbare Zeile, Auswahlbox oder zusätzliche Detailaktion. Reset ist eine Aktion. Native Statusauswahl als **eigener Umsetzungsvorschlag**, kein nachgewiesener shadcn-Contract. Filterwerte werden semantisch als Alle/Aktiv/Archiviert bezeichnet; technische URL-Kodierung ist noch festzulegen.

URL trägt q=ALP und Status Aktiv, Änderungen ersetzen den aktuellen Verlaufseintrag. Öffnen erzeugt einen Navigationsschritt. Erwartung nach Regelauswertung: genau P-101. Kein echter Suchlauf ausgeführt.

### B · Aktives Projekt, breit

```text
← Zurück zu Projekten

Alpen                                             [Seitentitel]
Projekt-ID: P-101
Status: Aktiv

[Projekt bearbeiten →]
```

Ich wähle die zulässige einspaltige Variante auch breit. Dadurch bleibt die Reihenfolge identisch und ich brauche keine zusätzliche Regel für knappen Platz neben dem Titel. «Projekt bearbeiten» ist Navigation zum Formular, semantisch Link mit hervorgehobener Aktionsgestaltung; Speichern im nächsten Schritt ist Button. Keine Card, Sidebar, Zusatzmetadaten, Archivieren- oder Löschen-Aktion.

### C · Name bearbeiten, breit

```text
Projekt bearbeiten
Projekt-ID: P-101 · Status: Aktiv

Projektname (erforderlich)
[Tal                                                   ]
1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.

[Vorgangsmeldung, falls relevant]
[Änderungen speichern]  [Abbrechen]
```

Formular maximal 640 px. Kontextzeile mit ID und Status ist meine konkrete Darstellung der öffentlich verlangten mitgeführten Identität; kein zusätzlich editierbares Feld. Ausgangswert «Alpen», aktueller Entwurf «Tal». Kein Autosave. Hilfe und Fehler sind dem Feld zugeordnet. Kein HTML-maxlength=80 als fachliche Lösung ableiten: gefordert sind Graphemcluster, nicht UTF-16-Länge.

### A–C · schmal

Bei unter 640 px verfügbarer Inhaltsbreite stehen Suche und Status sowie die beiden Formularaktionen untereinander, in derselben Reihenfolge. Bei 320 px **Inhaltsfläche** bleiben 320 px für den Inhalt; 16 px Seitenrand kommen bei einer entsprechenden Gesamtfläche hinzu. Eine 320-px-Gesamtansicht mit 16-px-Rändern ergibt nur 288 px Inhalt und ist separat als Belastungsfall zu prüfen.

```text
Projekte                         ← Zurück zu Projekten
                                 Alpen
Projekte suchen                  Projekt-ID: P-101
[ALP                 ]           Status: Aktiv
Status                           [Projekt bearbeiten →]
[Aktiv               ]
Suche und Filter wirken sofort.  Projekt bearbeiten
[Suche zurücksetzen]             Projekt-ID: P-101
                                 Status: Aktiv
1 Projekt                        Projektname (erforderlich)
Projekt-ID: P-101                 [Tal                 ]
Alpen →                          1 bis 80 Zeichen. …
Status: Aktiv                    [Änderungen speichern]
                                 [Abbrechen]
```

Die nebeneinandergestellten Textbilder sind **zwei getrennte Seiten**, keine zweispaltige mobile Oberfläche. In der Ergebnisliste gibt es genau eine fokussierbare Ausgabe pro Projekt. Name/ID in Lesenansichten umbrechen, langer einzeiliger Eingabewert bleibt horizontal innerhalb des Felds bearbeitbar. Hilfe, Fehler und Aktionen wachsen; kein Sticky-Bereich. 80-Graphemcluster-Namen und lange untrennbare IDs müssen vollständig erreichbar bleiben. Die Textbilder belegen weder Reflow noch Bildschirmtastaturverhalten.

## Entscheidungsmatrix

| Entscheidung | Öffentlich hergeleitet aus | Konkrete Anwendung / Grenze |
|---|---|---|
| Bestand max. 50, lokal, vollständig | gestaltungs-pilot; suchen-filtern | Kein Suchspinner, kein Paging; Suche ID oder Name, case-insensitive Teilstring, Status per UND |
| Reihenfolge | suchen-filtern | de-CH nach Name, ID als Tie-break; P-101 vor P-102 bei q=ALP/Alle |
| Visuelle Rollen | gestaltungs-pilot | Weiss, Text/Aktion #171717, Aktionsschrift #FAFAFA, Fehler #B91C1C; Inter 32/40, 24/32, 16/24, 14/20 |
| Abstände/Grössen | gestaltungs-pilot | Max. 1120 px Inhalt, breit 32/schmal 16 px Rand, 8 px Labelabstand, 24 px Gruppen, 48 px Abschnitte, Controls mindestens 44 px/Radius 8 |
| Fokus sichtbar | gestaltungs-pilot | 2 px #171717, 2 px Abstand auf Weiss; simultaner Fehler sichtbar; gerendert ungetestet |
| Formularprüfung | formulare-validierung | Erst Speichern; bei Fehler Fokus Feld; später nur fehlerhaftes Feld auf Blur nachprüfen |
| Geändert | formulare-validierung | Trim aktueller Name gegen Trim bestätigter Ausgang; innere Leerzeichen behalten, Duplikate erlaubt |
| Semantik | button/input; Aufgabenpattern | Navigation als Link, Speichern/Reset als Button, Textinput mit dauerhaftem Label |
| Archiviert | detailseite | Gleiche Identität, keine Bearbeitung; «Archivierte Projekte sind nur lesbar.» |
| Gestaltungsressourcen | gestaltungs-pilot; komponenten | Visuelle Werte vorhanden; Inter-/Designbibliothek nicht als verwendbares Designpaket nachgewiesen |
| Integrationsgrenze | formulare-validierung | Unbekannt nicht als Fehler/Erfolg darstellen; Statusklärung als Voraussetzung, kein fingierter Button |

## Erwartete Zustände und Fokus: durchgespielte Fälle

| Auslöser | Sichtbarer Zustand / nächste Handlung | Fokus und Daten |
|---|---|---|
| q=ALP, Alle | 2 Projekte: P-101, P-102 | Fokus verbleibt in Suche; Ergebniszahl ruhig ankündigen |
| zusätzlich Aktiv | 1 Projekt: P-101 | Fokus Statusauswahl |
| P-101 öffnen | B: Alpen, P-101, Aktiv | Normale Seitenorientierung; Initialfokus beim Öffnen ist nicht ausdrücklich entschieden, siehe Befund |
| Name Tal bestätigt speichern | Detail «Tal», P-101, Aktiv; «Änderungen gespeichert» | Fokus Seitentitel; q/status behalten |
| von Tal zurück zur Liste | ALP/Aktiv bleibt; 0 Treffer | Ergebnisüberschrift, Hinweis «Das zuvor geöffnete Projekt ist in diesen Ergebnissen nicht enthalten.»; zusätzlich Nulltrefferhilfe |
| q=Tal im ursprünglichen Bestand | «Keine Projekte für diese Suche.»; Kriterien ändern/reset | Keine Erstleere behaupten |
| Bestand tatsächlich leer | «Noch keine Projekte.»; Projekt erstellen | Kein nutzloser Filterkorrekturweg |
| URL ohne Kriterien | Vollständige Liste, Alle | Kein erzwungener Suchfokus bei Direktaufruf/Reload |
| ungültiger Status | Alle und Erklärung der Rücksetzung | q bleibt erhalten |
| P-102 öffnen | Nur lesbar, kein Bearbeiten | Rückweg zu demselben ID-Link, wenn vorhanden |
| fehlende ID | «Projekt nicht gefunden.» und Rücklink | Rückkehr zur Ergebnisüberschrift |
| nur Leerraum speichern | «Einen Projektnamen eingeben.» | Wert bleibt, Fokus Eingabe |
| 81 Graphemcluster speichern | «Den Projektnamen auf höchstens 80 Zeichen kürzen.» | Wert bleibt, Fokus Eingabe |
| Fehler korrigieren, Blur | Gültig: Fehler entfällt; Hilfe bleibt | Kein erzwungener Fokuswechsel |
| Name Alpen / nur Rand-Leerraum | «Keine Änderungen zu speichern.» | Keine Anfrage, kein Seitenwechsel |
| Dirty, Abbrechen | «Ungespeicherte Änderungen verwerfen?»; Folge des Verlusts; Weiterbearbeiten/Verwerfen | Initialfokus Weiterbearbeiten; Escape verwirft nicht; Weiterbearbeiten zurück zum Auslöser |
| Verwerfen bestätigt | Detail Alpen, P-101 | q/status erhalten; konkreter Zielfokus für diesen Übergang öffentlich nicht explizit |
| Speichern läuft | «Änderungen werden gespeichert …»; Mehrfachauslösen blockiert | Meldung ohne Fokusübernahme, Entwurf/Vorgangsbezug erhalten |
| während Übermittlung verlassen | «Seite verlassen» und Warnung, Anfrage kann weiterlaufen | Nicht als Vorgangsabbruch darstellen; bei Rückkehr unbekannt bis geklärt |
| ausdrücklich abgelehnt | Feldursache am Feld, sonst Vorgangsmeldung | Eingabe erhalten; Wiederholung erst nach Nichtannahme und behobener Ursache |
| Antwort fehlt | «Es ist noch unklar, ob die Änderungen gespeichert wurden» | Kein Retry, keine Erfolgsmeldung, kein als verfügbar dargestelltes Status prüfen |
| bereits unbekannt, jetzt Abbrechen/Verlassen | **Offene Priorität zwischen Dirty-Abbruch und ungeklärtem Vorgang** | Vorschlag in findings.md, nicht als veröffentlichte Regel ausgegeben |

Bei Browser-Zurück aus dem Detail zur Liste gelten Kriterien und ID-Fokus ebenfalls. Browser-Zurück aus einem geänderten Formular ist nicht eindeutig unter «interner Rückweg» eingeordnet; nicht als geprüfter Schutz ausgegeben. Reload/Schliessen kann lokale Angaben verlieren; keine dauerhafte Wiederherstellung versprechen.

## Ergebnis der Ableitung

Der Normalweg ist ohne internen Pilottext entscheidbar. Zustandsinhalte und breite/schmale Umordnung sind ebenfalls weitgehend entscheidbar. Ein vollständiger belastbarer Fokus- und Verlassensvertrag für alle Übergänge lässt sich noch nicht behaupten. Das ist ein eng begrenzter Gestaltungsrest, kein Beweis mangelnder genereller Arbeitsfähigkeit des Handbuchs.
